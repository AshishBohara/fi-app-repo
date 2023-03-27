import React, { useEffect, useState } from "react";
import { Button, Space, Form, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { EditOutlined } from "@ant-design/icons";

/* custom component */
import { PageContainer, Xtable, Xpagination } from "../../../Xcomponent";
import ScrollBox from "../../../ScrollBox";
/* actions */
import {
  getCustomersList,
  getCustomersListReset,
} from "../../../../action/getCustomersListAction";
import HeaderComponent from "../../../organism/HeaderComponent/HeaderComponent";

const CustomersList = (props) => {
  /* variables */
  const { getCustomersList, getCustomersListReset, getCustomersListState } =
    props;
  const [form] = Form.useForm();

  const [tableData, setTableData] = useState([]);
  const [pagination, setPagination] = useState({
    page_size: 2,
    page_no: 1,
  });
  const initialSearchData = {
    search_contain: "",
  };
  const [searchData, setSearchData] = useState(initialSearchData);
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

            <Link to={`/customers/${id}/loan-list`}>
              <Button size="small" type="dashed">
                Loan
              </Button>
            </Link>
          </Space>
        </>
      ),
    },
  ];

  /* callbacks */
  useEffect(() => {
    // getCustomersList(pagination);
    getCustomersList({
      page_no: pagination.page_no,
      page_size: pagination.page_size,
      ...searchData,
    });
  }, [pagination]);

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

  const handlePaginationPageChange = (page, pageSize) => {
    setPagination({
      ...pagination,
      ["page_no"]: page,
      ["page_size"]: pageSize,
    });
  };

  //handle search input
  const handleOnChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  //clear filters
  const handleReset = () => {
    form.resetFields();
    setSearchData(initialSearchData);
    setPagination({ ...pagination, ["page_no"]: 1 });
  };
  //searchfilters
  const searchPatient = () => {
    setPagination({ ...pagination, ["page"]: 1 });
  };
  return (
    <>
      <HeaderComponent
        title="Customer List"
        actionBtn={
          <Link to="/customers/add">
            <Button>Add New</Button>
          </Link>
        }
      />
      <PageContainer list>
        <Form form={form} onFinish={searchPatient} layout="vertical">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item name="search_contain">
                <Input
                  type="text"
                  name="search_contain"
                  size="large"
                  onChange={handleOnChange}
                  placeholder="Search by customer’s name, mobile number."
                  // prefix={<SearchOutlined style={{ color: "#7e7b7b9c" }} />}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={4}>
              <Space>
                <Form.Item name="search_btn">
                  <Button
                    className="search_btn"
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Search
                  </Button>
                </Form.Item>
                <Form.Item name="reset_btn">
                  <Button
                    type="primary"
                    ghost
                    onClick={() => handleReset()}
                    size="large"
                    style={{ width: 100 }}
                  >
                    Reset
                  </Button>
                </Form.Item>
              </Space>
            </Col>
          </Row>
        </Form>
        <ScrollBox>
          {/* <Table
          dataSource={tableData}
          columns={columns}
          size="small"
          pagination={false}
        /> */}
          <Xtable
            dataSource={tableData}
            columns={columns}
            pagination={false}
            scroll={{ x: 768 }}
          />
          <Xpagination
            pageSizeOptions={["10", "15", "25", "50"]}
            showSizeChanger
            onChange={handlePaginationPageChange}
            current={pagination.page_no}
            defaultPageSize={pagination.page_size}
            total={getCustomersListState.totalRecords}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
          />
        </ScrollBox>
        {/* <ScrollBox>
                <Xtable dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: 768 }} />
                <Xpagination
                    pageSizeOptions={['10', '15', '25', '50']}
                    showSizeChanger
                    onChange={handlePaginationPageChange}
                    current={pagination.page_no}
                    defaultPageSize={pagination.page_size}
                    total={getCouponListState.total_records}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                />
            </ScrollBox> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
