import { Button, Input, Pagination, Table } from "antd";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
`;

export const PageContainer = styled.div`
  background: #fff;
  padding: 8px 16px;
  min-height: calc(100vh - 50px);

  ${({ list }) =>
    list &&
    `
        padding: 0;
    `}
`;

export const Xtable = styled(Table)`
  .ant-table-thead > tr > th {
    font-family: Helvetica;
    font-weight: bold;
    color: rgb(0 0 0 / 1);
    background-color: #ffffff;
    font-size: 13px;
    padding: 0.5rem 1rem;
    white-space: nowrap;
  }

  .ant-table-thead .ant-table-column-sorters {
    padding: 0;
  }

  .ant-table-tbody > tr > td {
    font-family: Helvetica;
    font-weight: normal;
    color: rgb(0 0 0 / 0.75);
    background-color: #ffffff;
    font-size: 13px;
    padding: 0.3rem 1rem;
  }
`;

export const Xpagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const InputBox = styled(Input)`
  input {
    font-size: 14px;
  }
`;

export const XButton = styled(Button)`
  font-size: 14px;
  border-radius: 7px !important;
`;
