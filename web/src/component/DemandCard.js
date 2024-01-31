import React, { useState } from 'react';
import styles from "../styles/demandCard.module.scss";
import Form from "./Form";

const DemandCard = ({ status, title, description, buttonText }) => {

    const supportNeed = false;

    const [showPopup, setShowPopup] = useState(false);
    const [isSolo, setIsSolo] = useState(true);

    const handleSoloChange = () => {
        setIsSolo(true);
    };

    const handleDuoChange = () => {
        setIsSolo(false);
    };

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className={styles.demandCard}>
            <article className={styles.card}>
                <div className={styles.cardHeader}>
                    <a>{title}</a>
                    <div className={`${styles.statusIcon} ${styles[status]}`} />
                </div>

                <div className={styles.cardBody}>
                    <p>{description}</p>
                </div>

                <div className={styles.cardFooter}>
                    <div className={styles.cardMeta}>
                        <button className={styles.cardButton} onClick={handleButtonClick}>{buttonText}</button>
                    </div>
                </div>
            </article>

            {showPopup && (
                <Form
                    supportNeed={supportNeed}
                    closePopup={handleClosePopup}
                    isSolo={isSolo}
                    handleSoloChange={handleSoloChange}
                    handleDuoChange={handleDuoChange}
                />
            )}
        </div>
    );
};

export default DemandCard;
