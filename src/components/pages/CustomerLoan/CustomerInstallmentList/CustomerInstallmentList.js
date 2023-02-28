import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  getCustomerInstallmentList,
  getCustomerInstallmentListReset,
} from "../../../../action/getCustomerInstallmentListAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
import moment from "moment/moment";

const CustomerInstallmentList = (props) => {
  /* variables */
  const {
    getCustomerInstallmentList,
    getCustomerInstallmentListReset,
    getCustomerInstallmentListState,
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
    {
      title: "Installment Completed",
      dataIndex: "installmentCompleted",
      key: "installmentCompleted",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => (
        <>
          <Space>
            <Link to={`/customer-loan/${customer_id}/${id}/installment`}>
              Payment
            </Link>
          </Space>
        </>
      ),
    },
  ];

  /* callbacks */
  useEffect(() => {
    getCustomerInstallmentList({
      customerId: customer_id,
      customerLoanId: customer_loan_id,
    });
    return () => {
      getCustomerInstallmentListReset();
    };
  }, []);

  useEffect(() => {
    if (getCustomerInstallmentListState.apiState === "success") {
      let tableData = [];
      getCustomerInstallmentListState.list.map((row) => {
        let a = moment(row.installmentDate);
        let b = moment(new Date());
        let days = b.diff(a, "days");
        let penaltyAmount = days > 0 ? days * 200 : row.penaltyAmount;

        tableData.push({
          key: row.id,
          installmentDate: moment(row.installmentDate).format("DD-MMM-YYYY"),
          installmentAmount: row.installmentAmount,
          penaltyAmount: row.installmentCompleted
            ? row.penaltyAmount
            : penaltyAmount,
          totalAmount: row.installmentCompleted
            ? row.totalAmount
            : row.installmentAmount + penaltyAmount,
          installmentCompleted: row.installmentCompleted ? "Yes" : "No",
          id: row.id,
        });
      });
      setTableData(tableData);
    }
  }, [getCustomerInstallmentListState]);

  return (
    <>
      <HeaderComponent
        title="Customer Loan List"
        actionBtn={
          <Link to={`/customers/${customer_id}/new-loan`}>
            <Button>Add New Loan</Button>
          </Link>
        }
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
});

const mapDispatchToProps = (dispatch) => ({
  getCustomerInstallmentList: (params) =>
    dispatch(getCustomerInstallmentList(params)),
  getCustomerInstallmentListReset: () =>
    dispatch(getCustomerInstallmentListReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerInstallmentList);
