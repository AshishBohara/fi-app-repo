import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { EditOutlined } from "@ant-design/icons";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  getCustomersList,
  getCustomersListReset,
} from "../../../../action/getCustomersListAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";

const CustomerLoanList = (props) => {
  /* variables */
  const { getCustomersList, getCustomersListReset, getCustomersListState } =
    props;
  const { customer_id } = useParams();

  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Father Name",
      dataIndex: "fatherName",
      key: "fatherName",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => (
        <>
          <Space>
            <Link to={`/customers/${id}/edit`}>
              <Button size="small" icon={<EditOutlined />} />
            </Link>
            <Link to={`/customers/${id}/loan-list`}>Loan</Link>
          </Space>
        </>
      ),
    },
  ];

  /* callbacks */
  useEffect(() => {
    getCustomersList();
  }, []);

  useEffect(() => {
    if (getCustomersListState.apiState === "success") {
      let tableData = [];
      getCustomersListState.list.map((row) => {
        tableData.push({
          key: row.id,
          name: row.name,
          mobileNumber: row.mobileNumber,
          fatherName: row.fatherName,
          id: row.id,
        });
      });
      setTableData(tableData);
    }
  }, [getCustomersListState]);

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
  getCustomersListState: state.getCustomersList,
});

const mapDispatchToProps = (dispatch) => ({
  getCustomersList: (params) => dispatch(getCustomersList(params)),
  getCustomersListReset: () => dispatch(getCustomersListReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLoanList);
