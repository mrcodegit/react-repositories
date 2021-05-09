import { ForkOutlined, StarFilled } from "@ant-design/icons";
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
      return (
        <a href={row.url} target="_blank">
          {text}
        </a>
      );
    },
  },
  {
    title: "Forks",
    dataIndex: ["forks", "totalCount"],
    render: (text, row, index) => {
      return (
        <span>
          <StarFilled style={{ marginRight: "5px" }} />
          {text}
        </span>
      );
    },
  },
  {
    title: "Stars",
    dataIndex: "stargazerCount",
    render: (text, row, index) => {
      return (
        <span>
          <ForkOutlined style={{ marginRight: "5px" }} />
          {text}
        </span>
      );
    },
  },
];
