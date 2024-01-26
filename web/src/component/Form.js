import React, { useEffect, useState } from 'react';
import styles from "../styles/form.module.scss";
import {postNewDemand} from "../lib/pocketbase";
import Cookies from "js-cookie";

const Form = ({ supportNeed, closePopup, isSolo, handleSoloChange, handleDuoChange }) => {
    useEffect(() => {
        const textarea = document.getElementById('description');

        const adjustTextareaHeight = () => {
            const maxHeight = window.innerHeight - 150;
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(maxHeight, textarea.scrollHeight)}px`;
        };

        textarea.addEventListener('input', adjustTextareaHeight);

        return () => {
            textarea.removeEventListener('input', adjustTextareaHeight);
        };
    }, []);

    async function handleSend() {
        try {
            const type = document.getElementById('type').value;
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;

            const currentUserLogin = Cookies.get("userLogin");

            let logins = [currentUserLogin];

            if (!isSolo) {
                const login = document.getElementById('login').value;
                logins.push(login);
            }

            let upload = null;

            if (supportNeed) {
                upload = document.getElementById('upload').files[0];
            }

            await postNewDemand(type, title, description, logins, upload);

            closePopup();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <span className={styles.closeButton} onClick={closePopup}>
                    &times;
                </span>

                <label htmlFor="type">Type</label>
                <select id="type" name="type">
                    <option value="Hub">Hub</option>
                    <option value="WorkShop">WorkShop</option>
                    <option value="FocusGroup">FocusGroup</option>
                </select>

                <label htmlFor="title">Titre</label>
                <input type="text" id="title" name="title" />

                <label>Êtes-vous seul ou en binôme ?</label>
                <div className={styles.soloDuoOption}>
                    <label htmlFor="solo">Seul</label>
                    <input
                        type="radio"
                        id="solo"
                        name="soloDuo"
                        value="solo"
                        checked={isSolo}
                        onChange={handleSoloChange}
                    />
                    <label htmlFor="duo">En binôme</label>
                    <input
                        type="radio"
                        id="duo"
                        name="soloDuo"
                        value="duo"
                        checked={!isSolo}
                        onChange={handleDuoChange}
                    />
                </div>
                {!isSolo && (
                    <div>
                        <label htmlFor="login">Le login de votre binôme</label>
                        <input type="text" id="login" name="login" />
                    </div>
                )}

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" />

                {supportNeed && (
                    <div>
                        <label htmlFor="upload">Upload Support:</label>
                        <input type="file" id="upload" name="upload" />
                    </div>
                )}

                <button onClick={handleSend}>Envoyer</button>
            </div>
        </div>
    );
};

export default Form;
