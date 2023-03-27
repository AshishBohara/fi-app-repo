import React, { useEffect, useState } from "react";
import {
  Button,
  message,
  Popconfirm,
  Space,
  Table,
  Modal,
  Col,
  Row,
  Form,
  InputNumber,
} from "antd";
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
  const [form] = Form.useForm();

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  let initialData = {
    id: null,
    customerLoanId: customer_loan_id,
    customerId: customer_id,
    installmentDate: null,
    installmentAmount: 0,
    penaltyAmount: 0,
    totalAmount: 0,
    dueAmount: 0,
    payAmount: 0,
    exactAmount: 0,
  };
  const [formData, setFormData] = useState(initialData);
  const showModal = (data) => {
    setOpen(true);
    form.setFieldsValue({
      payAmount: data.dueAmount,
    });
    setFormData({
      ...formData,
      ["id"]: data.id,
      ["installmentDate"]: data.installmentDate,
      ["installmentAmount"]: data.installmentAmount,
      ["penaltyAmount"]: data.penaltyAmount,
      ["totalAmount"]: data.totalAmount,
      ["dueAmount"]: 0,
      ["payAmount"]: data.dueAmount,
      ["exactAmount"]: data.dueAmount,
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Sr. No.",
      dataIndex: "srno",
      key: "srno",
    },
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
      title: "Due Amount",
      dataIndex: "dueAmount",
      key: "dueAmount",
    },
    {
      title: "Action",
      dataIndex: "data",
      key: "action",
      render: (row) => (
        <>
          <Space>
            {row.installmentCompleted ? (
              <span>Paid</span>
            ) : row.days >= 0 ? (
              <Popconfirm
                title="Are you sure to payment this installment?"
                onConfirm={() => showModal(row)}
                okText="Payment"
                cancelText="Cancel"
                okType="success"
              >
                <Button size="small" type="dashed">
                  Payment
                </Button>
              </Popconfirm>
            ) : (
              <Button size="small" type="dashed" disabled={row.days < 0}>
                Payment
              </Button>
            )}
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
      installmentPaymentReset();
      setFormData(initialData);
    };
  }, []);

  useEffect(() => {
    if (installmentPaymentState.apiState === "success") {
      message.success(installmentPaymentState.message);
      installmentPaymentReset();
      setOpen(false);
      setFormData(initialData);
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
      getCustomerInstallmentListState.list.map((row, index) => {
        let installmentDate = moment(row.installmentDate).format("DD-MMM-YYYY");
        let currentDate = moment(new Date()).format("YYYY-MM-DD");
        let days = moment(currentDate).diff(row.installmentDate, "days");
        let penaltyAmount =
          days > 0 ? days * row.customer_loan.penaltyAmount : row.penaltyAmount;
        // console.log("hello", days);
        let totalAmount = row.installmentCompleted
          ? row.totalAmount
          : row.installmentAmount + penaltyAmount;
        let dueAmount = row.dueAmount ?? totalAmount;
        tableData.push({
          srno: index + 1,
          key: row.id,
          installmentDate: installmentDate,
          installmentAmount: row.installmentAmount,
          penaltyAmount: row.installmentCompleted
            ? row.penaltyAmount
            : penaltyAmount,
          totalAmount: totalAmount,
          dueAmount: dueAmount,
          data: {
            id: row.id,
            installmentCompleted: row.installmentCompleted,
            penaltyAmount: penaltyAmount,
            totalAmount: totalAmount,
            installmentDate: installmentDate,
            installmentAmount: row.installmentAmount,
            dueAmount: dueAmount,
            days: days,
          },
        });
      });
      setTableData(tableData);
    }
  }, [getCustomerInstallmentListState]);

  const handleNumberChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
      ["dueAmount"]: formData.exactAmount - value,
    });
  };

  const handleSubmit = () => {
    installmentPayment(formData);
  };

  return (
    <>
      <HeaderComponent title="Customer Instllments List" />
      <PageContainer list>
        <Table
          dataSource={tableData}
          columns={columns}
          size="small"
          pagination={false}
        />
      </PageContainer>
      <Modal
        open={open}
        title={formData.installmentDate}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="horizontal" onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span="12">Installment Amount</Col>
            <Col span="12">{formData.totalAmount}</Col>
          </Row>
          <Row gutter={16}>
            <Col span="12">Penalty Amount</Col>
            <Col span="12">{formData.penaltyAmount}</Col>
          </Row>
          <Row gutter={16}>
            <Col span="12">Total Amount</Col>
            <Col span="12">{formData.totalAmount}</Col>
          </Row>
          <Row gutter={16}>
            <Col span="12">Payble Amount</Col>
            <Col span="12">
              <Form.Item
                label=""
                name="payAmount"
                rules={[{ required: true, message: "Required" }]}
              >
                <InputNumber
                  name="payAmount"
                  placeholder="Enter amount"
                  style={{ width: "60%" }}
                  min={1}
                  max={formData.exactAmount}
                  onChange={(v) => handleNumberChange("payAmount", v)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span="12">Due Amount</Col>
            <Col span="12">{formData.dueAmount}</Col>
          </Row>
          <Row gutter={24}>
            <Col
              span="24"
              style={{ display: "flex", justifyContent: "center", gap: 10 }}
            >
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                key="submit"
                type="primary"
                htmlType="submit"
                loading={installmentPaymentState.apiState === "loading"}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
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
