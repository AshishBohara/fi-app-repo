import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { EditOutlined } from "@ant-design/icons";

/* custom component */
import { PageContainer } from "../../../Xcomponent";
import { Indicator } from "./LoanChargesListStyle";

/* actions */
import {
  getLoanChargesList,
  getLoanChargesListReset,
} from "../../../../action/getLoanChargesListAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";

const LoanChargesList = (props) => {
  /* variables */
  const {
    getLoanChargesList,
    getLoanChargesListReset,
    getLoanChargesListState,
  } = props;
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "Charges Name",
      dataIndex: "chargesName",
      key: "chargesName",
    },
    {
      title: "Charges Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => (
        <Link to={`/loan-charges/${id}/edit`}>
          <Button size="small" icon={<EditOutlined />} />
        </Link>
      ),
    },
  ];

  /* callbacks */
  useEffect(() => {
    getLoanChargesList();
  }, []);

  useEffect(() => {
    if (getLoanChargesListState.apiState === "success") {
      let tableData = [];
      getLoanChargesListState.list.map((row) => {
        tableData.push({
          key: row.id,
          chargesName: row.chargesName,
          amount: row.amount,
          status: row.isDeleted ? "Inactive" : "Active",
          id: row.id,
        });
      });
      setTableData(tableData);
    }
  }, [getLoanChargesListState]);

  return (
    <>
      <HeaderComponent
        title="Loan Charges List"
        actionBtn={
          <Link to="/loan-charges/add">
            <Button>Add New</Button>
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
  getLoanChargesListState: state.getLoanChargesList,
});

const mapDispatchToProps = (dispatch) => ({
  getLoanChargesList: (params) => dispatch(getLoanChargesList(params)),
  getLoanChargesListReset: () => dispatch(getLoanChargesListReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoanChargesList);
