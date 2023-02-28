import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { EditOutlined } from "@ant-design/icons";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  getPenaltyList,
  getPenaltyListReset,
} from "../../../../action/getPenaltyListAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";

const PenaltyList = (props) => {
  /* variables */
  const { getPenaltyList, getPenaltyListReset, getPenaltyListState } = props;
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "Penalty Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => (
        <Link to={`/penalty/${id}/edit`}>
          <Button size="small" icon={<EditOutlined />} />
        </Link>
      ),
    },
  ];

  /* callbacks */
  useEffect(() => {
    getPenaltyList();
    return () => {
      getPenaltyListReset();
    };
  }, []);

  useEffect(() => {
    if (getPenaltyListState.apiState === "success") {
      let tableData = [];
      getPenaltyListState.list.map((row) => {
        tableData.push({
          key: row.id,
          amount: row.amount,
          id: row.id,
        });
      });
      setTableData(tableData);
    }
  }, [getPenaltyListState]);

  return (
    <>
      <HeaderComponent title="Penalty" />
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
  getPenaltyListState: state.getPenaltyList,
});

const mapDispatchToProps = (dispatch) => ({
  getPenaltyList: (params) => dispatch(getPenaltyList(params)),
  getPenaltyListReset: () => dispatch(getPenaltyListReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PenaltyList);
