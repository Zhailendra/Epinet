// MesDemandes.js

import React from 'react';
import Layout from "../../component/Layout";
import DemandCard from "../../component/DemandCard";

const MesDemandes = () => {

    const status = 'in_progress';
    const title = 'Titre';
    const description = 'Description';
    const buttonText = 'Faire une demande';

    return (
        <div>
            <Layout>
                <h1>Mes Demandes</h1>
                <DemandCard status={status} title={title} description={description} buttonText={buttonText} />
            </Layout>
        </div>
    );
};

export default MesDemandes;
