import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ddd;
`

const DashboardContent = styled.div`
    max-width: 1200px;
    max-height: 675px;
    width: 100%;
    height: 100%;
`

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardContent>
      </DashboardContent>
    </DashboardContainer>
  )
}

export default Dashboard
