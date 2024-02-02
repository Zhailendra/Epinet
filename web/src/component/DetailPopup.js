import React from 'react';
import styles from "../styles/popup.module.scss";
import container from "../styles/form.module.scss"
import Cookies from "js-cookie";

const DetailPopup = ({ closeDetailPopup, handleUpdateClick, title, organizers, status, description }) => {

    const isAdm = Cookies.get('adm') === 'true';
    const isAccepted = status === 'accepted';

    return (
        <div className={container.popup}>
            <div className={container.popupContent}>
                <span className={container.closeButton} onClick={closeDetailPopup}>
                    &#10006;
                </span>
                <div className={styles.popupHeader}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.organizers}>
                    <p>{organizers[0]}</p>
                    <p>{organizers[1]}</p>
                </div>
                <div className={styles.popupBody}>
                    <h3>Information :</h3>
                    <div className={styles.information}>
                        <div className={styles.statusIconContent}>
                            <strong>Status :</strong>
                            <p>{status}</p>
                            <div className={`${styles.statusIcon} ${styles[status]}`} />
                        </div>
                        <div className={styles.descriptionContainer}>
                            <strong>Description :</strong>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.popupFooter}>
                    {!isAccepted && (
                        <button onClick={handleUpdateClick}>{isAdm ? "Vérifier" : "Update"}</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailPopup;
