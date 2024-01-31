import React, {useEffect, useState} from 'react';
import Layout from "../../component/Layout";
import {fetchAcceptedActivities, fetchUserLogins} from "../../lib/pocketbase";
import ActivitiesCardGrid from "../../component/ActivitiesCardGrid";
import styles from '../../styles/demandeAccept.module.scss';

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
                <h1>Demande(s) Acceptée(s)</h1>
                <div className={styles.ActivitiesCardGridContainer}>
                    <ActivitiesCardGrid activities={acceptedActivities} userLogins={userLogins} />
                </div>
            </Layout>
        </div>
    );
};

export default Demandesaccept;