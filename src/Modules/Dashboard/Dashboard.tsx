import React from "react";
import styled from "styled-components";
import Repositories from "../../Features/Github/Repositories/Repositories";
import { StarFilled } from "@ant-design/icons";
const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #ddd;
`;

const DashboardContent = styled.div`
  padding: 20px;
  max-width: 1200px;
  max-height: 675px;
  width: 100%;
  height: 100%;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardContent>
        <Repositories repositoryName="react"></Repositories>
      </DashboardContent>
    </DashboardContainer>
  );
}

export default Dashboard;
