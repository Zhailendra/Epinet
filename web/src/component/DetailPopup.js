import React from 'react';
import styles from "../styles/popup.module.scss";
import container from "../styles/form.module.scss"

const DetailPopup = ({ closePopup, title, organizers, status, description }) => {

    return (
        <div className={container.popup}>
            <div className={container.popupContent}>
                <span className={container.closeButton} onClick={closePopup}>
                    &#10006;
                </span>
                <div className={styles.popupHeader}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.popupBody}>
                    <div className={styles.organizers}>
                        <p>{organizers[0]}</p>
                        <p>{organizers[1]}</p>
                    </div>
                    <hr />
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
            </div>
        </div>
    );
};

export default DetailPopup;
