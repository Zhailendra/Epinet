// MesDemandes.js
import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout';
import DemandCard from '../../component/DemandCard';
import { fetchNoneAcceptedActivities, fetchUserLogins } from '../../lib/pocketbase';
import ActivitiesCardGrid from '../../component/ActivitiesCardGrid';
import styles from "../../styles/mesDemandes.module.scss";

const MesDemandes = () => {
    const [activities, setActivities] = useState([]);
    const [userLogins, setUserLogins] = useState([]);

    const status = 'default';
    const title = 'Titre';
    const description = 'Description';
    const buttonText = 'Faire une demande';

    useEffect(() => {
        Promise.all([fetchNoneAcceptedActivities(), fetchUserLogins()])
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
                <h1>Mes Demandes</h1>
                <div className={styles.demandCardContainer}>
                    <DemandCard status={status} title={title} description={description} buttonText={buttonText} />
                </div>
                <ActivitiesCardGrid activities={activities} userLogins={userLogins} />
            </Layout>
        </div>
    );
};

export default MesDemandes;
