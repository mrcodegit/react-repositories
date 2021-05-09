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
    render: (text, row, index) => {
      return React.createElement(
        "a",
        { href: row.url, target: "_blank", key: row.id },
        text
      );
    },
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
