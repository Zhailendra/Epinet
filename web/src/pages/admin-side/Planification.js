import React, {useEffect, useState} from 'react';
import Layout from "../../component/Layout";
import {fetchUserLogins, fetchWaitingForPlanificationActivities} from "../../lib/pocketbase";
import styles from "../../styles/demandeAccept.module.scss";
import ActivitiesCardGrid from "../../component/ActivitiesCardGrid";

const Planification = () => {
    const [activities, setActivities] = useState([]);
    const [userLogins, setUserLogins] = useState([]);

    useEffect(() => {
        Promise.all([fetchWaitingForPlanificationActivities(), fetchUserLogins()])
            .then(([activitiesData, loginsData]) => {
                setActivities(activitiesData);
                setUserLogins(loginsData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Layout>
                <h1>Demandes en cours</h1>
                <div className={styles.ActivitiesCardGridContainer}>
                    <ActivitiesCardGrid activities={activities} userLogins={userLogins} />
                </div>
            </Layout>
        </div>
    );
};

export default Planification;