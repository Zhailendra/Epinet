import React, {useEffect, useState} from 'react';
import Layout from "../../component/Layout";
import {fetchAcceptedActivities, fetchUserLogins} from "../../lib/pocketbase";
import ActivitiesCardGrid from "../../component/ActivitiesCardGrid";

const Demandesaccept = () => {

    const [acceptedActivities, setAcceptedActivities] = useState([]);
    const [userLogins, setUserLogins] = useState([]);

    useEffect(() => {
        Promise.all([fetchAcceptedActivities(), fetchUserLogins()])
            .then(([acceptedActivitiesData, loginsData]) => {
                setAcceptedActivities(acceptedActivitiesData);
                setUserLogins(loginsData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Layout>
                <h1>Mes Demandes</h1>
                <ActivitiesCardGrid activities={acceptedActivities} userLogins={userLogins} />
            </Layout>
        </div>
    );
};

export default Demandesaccept;