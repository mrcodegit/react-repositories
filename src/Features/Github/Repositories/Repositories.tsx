import { Table } from 'antd';
import React from 'react';
import useFetchRepos from './hooks/useFetchRepos';
import { DEFAULT_COLUMNS, IProps } from './model';

function Repositories({columns = DEFAULT_COLUMNS, repositoryName = ""}: IProps) {
    const [dataSource] = useFetchRepos(repositoryName);
    return (
        <Table dataSource={dataSource} columns={columns}></Table>
    )
}

export default Repositories
