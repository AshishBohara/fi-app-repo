import React, { useEffect, useState } from "react";
import { Button, message, Space, Table } from "antd";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  getCustomerInstallmentList,
  getCustomerInstallmentListReset,
} from "../../../../action/getCustomerInstallmentListAction";
import {
  installmentPayment,
  installmentPaymentReset,
} from "../../../../action/installmentPaymentAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
import moment from "moment/moment";

const CustomerInstallmentList = (props) => {
  /* variables */
  const {
    getCustomerInstallmentList,
    getCustomerInstallmentListReset,
    getCustomerInstallmentListState,
    installmentPayment,
    installmentPaymentReset,
    installmentPaymentState,
  } = props;
  const { customer_id, customer_loan_id } = useParams();

  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: "Installment Date",
      dataIndex: "installmentDate",
      key: "installmentDate",
    },
    {
      title: "Installment Amount",
      dataIndex: "installmentAmount",
      key: "installmentAmount",
    },
    {
      title: "Penalty Amount",
      dataIndex: "penaltyAmount",
      key: "penaltyAmount",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    // {
    //   title: "Installment Completed",
    //   dataIndex: "installmentCompleted",
    //   key: "installmentCompleted",
    // },
    {
      title: "Action",
      dataIndex: "data",
      key: "action",
      render: (row) => (
        <>
          <Space>
            {row.installmentCompleted ? (
              <span>Paid</span>
            ) : (
              <Button
                size="small"
                type="dashed"
                onClick={() =>
                  payment({
                    id: row.id,
                    customerLoanId: row.customerLoanId,
                    penaltyAmount: row.penaltyAmount,
                    totalAmount: row.totalAmount,
                    customerId: customer_id,
                  })
                }
                loading={installmentPaymentState.apiState === "loading"}
              >
                Payment
              </Button>
            )}
          </Space>
        </>
      ),
    },
  ];

  const payment = (data) => {
    installmentPayment(data);
  };
  /* callbacks */
  useEffect(() => {
    getCustomerInstallmentList({
      customerId: customer_id,
      customerLoanId: customer_loan_id,
    });
    return () => {
      getCustomerInstallmentListReset();
      installmentPaymentReset();
    };
  }, []);

  useEffect(() => {
    if (installmentPaymentState.apiState === "success") {
      message.success(installmentPaymentState.message);
      installmentPaymentReset();
      getCustomerInstallmentList({
        customerId: customer_id,
        customerLoanId: customer_loan_id,
      });
    }

    if (installmentPaymentState.apiState === "error") {
      installmentPaymentReset();
      message.error(installmentPaymentState.message);
    }
  }, [installmentPaymentState]);

  useEffect(() => {
    if (getCustomerInstallmentListState.apiState === "success") {
      let tableData = [];
      getCustomerInstallmentListState.list.map((row) => {
        let a = moment(row.installmentDate);
        let b = moment(new Date());
        let days = b.diff(a, "days");
        let penaltyAmount =
          days > 0 ? days * row.customer_loan.penaltyAmount : row.penaltyAmount;
        let totalAmount = row.installmentCompleted
          ? row.totalAmount
          : row.installmentAmount + penaltyAmount;
        tableData.push({
          key: row.id,
          installmentDate: moment(row.installmentDate).format("DD-MMM-YYYY"),
          installmentAmount: row.installmentAmount,
          penaltyAmount: row.installmentCompleted
            ? row.penaltyAmount
            : penaltyAmount,
          totalAmount: totalAmount,
          // installmentCompleted: row.installmentCompleted ? "Yes" : "No",
          data: {
            id: row.id,
            customerLoanId: row.customerLoanId,
            installmentCompleted: row.installmentCompleted,
            penaltyAmount: penaltyAmount,
            totalAmount: totalAmount,
          },
        });
      });
      setTableData(tableData);
    }
  }, [getCustomerInstallmentListState]);

  return (
    <>
      <HeaderComponent
        title="Customer Instllments List"
        // actionBtn={
        //   <Link to={`/customers/${customer_id}/new-loan`}>
        //     <Button>Add New Loan</Button>
        //   </Link>
        // }
      />
      <PageContainer list>
        <Table
          dataSource={tableData}
          columns={columns}
          size="small"
          pagination={false}
        />
      </PageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  getCustomerInstallmentListState: state.getCustomerInstallmentList,
  installmentPaymentState: state.installmentPayment,
});

const mapDispatchToProps = (dispatch) => ({
  getCustomerInstallmentList: (params) =>
    dispatch(getCustomerInstallmentList(params)),
  getCustomerInstallmentListReset: () =>
    dispatch(getCustomerInstallmentListReset()),
  installmentPayment: (params) => dispatch(installmentPayment(params)),
  installmentPaymentReset: () => dispatch(installmentPaymentReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerInstallmentList);
