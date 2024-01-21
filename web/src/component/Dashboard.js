import React from 'react';
import Layout from "./Layout";
import ActivityGrid from "./ActivityGrid";

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <div style={{paddingBottom: "20px"}}>
                    <h1>Dashboard</h1>
                </div>
                <ActivityGrid />
            </Layout>
        </div>
    );
};

export default Dashboard;