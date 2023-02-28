import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { EditOutlined } from "@ant-design/icons";

/* custom component */
import { PageContainer } from "../../../Xcomponent";

/* actions */
import {
  getInterestRateList,
  getInterestRateListReset,
} from "../../../../action/getInterestRateListAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";

const InterestRateList = (props) => {
  /* variables */
  const {
    getInterestRateList,
    getInterestRateListReset,
    getInterestRateListState,
  } = props;
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "Interest Rate",
      dataIndex: "interestRate",
      key: "interestRate",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => (
        <Link to={`/interest_rate/${id}/edit`}>
          <Button size="small" icon={<EditOutlined />} />
        </Link>
      ),
    },
  ];

  /* callbacks */
  useEffect(() => {
    getInterestRateList();
    return () => {
      getInterestRateListReset();
    };
  }, []);

  useEffect(() => {
    if (getInterestRateListState.apiState === "success") {
      let tableData = [];
      getInterestRateListState.list.map((row) => {
        tableData.push({
          key: row.id,
          interestRate: row.interestRate,
          id: row.id,
        });
      });
      setTableData(tableData);
    }
  }, [getInterestRateListState]);

  return (
    <>
      <HeaderComponent title="Interest Rate List" />
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
  getInterestRateListState: state.getInterestRateList,
});

const mapDispatchToProps = (dispatch) => ({
  getInterestRateList: (params) => dispatch(getInterestRateList(params)),
  getInterestRateListReset: () => dispatch(getInterestRateListReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InterestRateList);
