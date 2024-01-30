import React, { useState } from 'react';
import Cookies from "js-cookie";
import styles from '../styles/popup.module.scss';
import container from '../styles/form.module.scss';
import {postActivityUpdated} from "../lib/pocketbase";

const UpdatePopup = ({ closePopup, activityId, title, organizers, status, description }) => {
    const [updatedData, setUpdatedData] = useState({
        /*updatedOrganizer: organizers[0],*/
        updatedCoorganizer: organizers[1],
        updatedStatus: status,
        updatedDescription: description,
    });

    const isAdm = Cookies.get('adm') === 'true';
    const isWaitingSupport = status === 'waiting_support';

    const handleUpdate = async () => {
        try {
            await postActivityUpdated(updatedData, activityId);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
        closePopup();
    };

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

                        {/*{isAdm ? (
                            <input
                                type="text"
                                value={updatedData.updatedOrganizer}
                                onChange={(e) => setUpdatedData({
                                    ...updatedData,
                                    updatedOrganizer: e.target.value,
                                })}
                            />
                        ) : (
                            <input
                                type="text"
                                value={updatedData.updatedCoorganizer}
                                onChange={(e) => setUpdatedData({
                                    ...updatedData,
                                    updatedCoorganizer: e.target.value,
                                })}
                            />
                        )}*/}

                        <input
                            type="text"
                            value={updatedData.updatedCoorganizer}
                            onChange={(e) => setUpdatedData({
                                ...updatedData,
                                updatedCoorganizer: e.target.value,
                            })}
                        />

                    </div>
                    <hr />
                    <h3>Information :</h3>
                    <div className={styles.information}>
                        <div className={styles.statusIconContent}>
                            <strong>Status :</strong>
                            {isAdm ? (
                                <select
                                    value={updatedData.updatedStatus}
                                    onChange={(e) => setUpdatedData({ ...updatedData, updatedStatus: e.target.value })}
                                >
                                    <option value="waiting_support">Waiting Support</option>
                                    <option value="waiting_validation">Waiting Validation</option>
                                    <option value="accepted">Accepted</option>
                                    <option value="refused">Refused</option>
                                </select>
                            ) : (
                                <p>{updatedData.updatedStatus}</p>
                            )}
                            <div className={`${styles.statusIcon} ${styles[updatedData.updatedStatus]}`} />
                        </div>
                        <div className={styles.descriptionContainer}>
                            <strong>Description :</strong>
                            <textarea
                                value={updatedData.updatedDescription}
                                onChange={(e) => setUpdatedData({ ...updatedData, updatedDescription: e.target.value })}
                            />
                        </div>
                        {isWaitingSupport && (
                            <div>
                                <label htmlFor="upload"><strong>Upload Support:</strong></label>
                                <input type="file" id="upload" name="upload" />
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.popupFooter}>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default UpdatePopup;
