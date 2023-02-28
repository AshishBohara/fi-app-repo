import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { EditOutlined } from "@ant-design/icons";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  getCustomerLoanList,
  getCustomerLoanListReset,
} from "../../../../action/getCustomerLoanListAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";
import moment from "moment/moment";

const CustomerLoanList = (props) => {
  /* variables */
  const {
    getCustomerLoanList,
    getCustomerLoanListReset,
    getCustomerLoanListState,
  } = props;
  const { customer_id } = useParams();

  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: "Loan Date",
      dataIndex: "loanDate",
      key: "loanDate",
    },
    {
      title: "Loan Amount",
      dataIndex: "loanAmount",
      key: "loanAmount",
    },
    {
      title: "No. of Installment",
      dataIndex: "noOfInstallment",
      key: "noOfInstallment",
    },
    {
      title: "Interest Rate",
      dataIndex: "interestRate",
      key: "interestRate",
    },
    {
      title: "Penalty Amount",
      dataIndex: "penaltyAmount",
      key: "penaltyAmount",
    },
    {
      title: "Total Loan Charges",
      dataIndex: "totalLoanCharges",
      key: "totalLoanCharges",
    },
    {
      title: "Loan Completed",
      dataIndex: "loanCompleted",
      key: "loanCompleted",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => (
        <>
          <Space>
            <Link to={`/customers/${customer_id}/${id}/installment`}>
              Installment
            </Link>
          </Space>
        </>
      ),
    },
  ];

  /* callbacks */
  useEffect(() => {
    getCustomerLoanList({ customerId: customer_id });
    return () => {
      getCustomerLoanListReset();
    };
  }, []);

  useEffect(() => {
    if (getCustomerLoanListState.apiState === "success") {
      let tableData = [];
      getCustomerLoanListState.list.map((row) => {
        tableData.push({
          key: row.id,
          loanDate: moment(row.loanDate).format("DD-MMM-YYYY"),
          loanAmount: row.loanAmount,
          noOfInstallment: row.noOfInstallment,
          interestRate: row.interestRate,
          penaltyAmount: row.penaltyAmount,
          totalLoanCharges: row.totalLoanCharges,
          loanCompleted: row.loanCompleted ? "Yes" : "No",
          id: row.id,
        });
      });
      setTableData(tableData);
    }
  }, [getCustomerLoanListState]);

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
  getCustomerLoanListState: state.getCustomerLoanList,
});

const mapDispatchToProps = (dispatch) => ({
  getCustomerLoanList: (params) => dispatch(getCustomerLoanList(params)),
  getCustomerLoanListReset: () => dispatch(getCustomerLoanListReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLoanList);
