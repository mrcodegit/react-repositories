import { ColumnsType } from "antd/lib/table";
import React from "react";

export interface IProps {
  columns?: ColumnsType<any>;
  repositoryName?: string;
}

export const DEFAULT_COLUMNS: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Forks",
    dataIndex: ["forks", "totalCount"],
  },
  {
    title: "Stars",
    dataIndex: "stargazerCount",
  },
];
