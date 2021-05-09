import { Pagination, Table } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import useFetchRepos, { FetchRepos } from "./hooks/useFetchRepos";
import { DEFAULT_COLUMNS, IProps } from "./model";

const RepositoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  .table {
    width: 100%;
    max-height: 100%;
  }
  .ant-pagination-item,
  .ant-pagination-options {
    display: none;
  }
`;

function itemRender(current: any, type: string, originalElement: any) {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
}

function Repositories({
  columns = DEFAULT_COLUMNS,
  repositoryName = "",
  perPage = 10,
}: IProps) {
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    beforeCursor: null,
    afterCursor: null,
  });
  const [dataSource, error]: FetchRepos = useFetchRepos({
    repositoryName,
    before: pageInfo.beforeCursor,
    after: pageInfo.afterCursor,
  });
  const onPaginationChange = (e: any) => {
    let newInfo = {} as any;
    if (e > pageInfo.current) {
      newInfo.afterCursor = dataSource.pageInfo?.endCursor;
      newInfo.beforeCursor = undefined;
    } else if (e < pageInfo.current) {
      newInfo.beforeCursor = dataSource.pageInfo?.startCursor;
      newInfo.afterCursor = undefined;
    }
    newInfo.current = e;
    setPageInfo({
      ...pageInfo,
      ...newInfo,
    });
  };

  return (
    <RepositoriesContainer>
      <Table
        className="table"
        pagination={false}
        rowKey="id"
        dataSource={dataSource.nodes}
        columns={columns}
      ></Table>
      ;
      <Pagination
        itemRender={itemRender}
        total={dataSource.repositoryCount}
        current={pageInfo.current}
        onChange={onPaginationChange}
        pageSize={perPage}
      ></Pagination>
    </RepositoriesContainer>
  );
}

export default Repositories;
