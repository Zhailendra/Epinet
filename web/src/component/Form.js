import React, { useEffect, useState } from 'react';
import styles from "../styles/form.module.scss";
import { postNewDemand } from "../lib/pocketbase";
import {withTheme} from "../styles/Theme";

const Form = ({ theme, supportNeed, closePopup, isSolo, handleSoloChange, handleDuoChange }) => {
    const [error, setError] = useState(null);

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
            setError(null);

            const type = document.getElementById('type').value;
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;

            if (!title) {
                setError('Veuillez remplir le champ "Titre".');
                return;
            }

            if (!description) {
                setError('Veuillez remplir le champ "Description".');
                return;
            }

            if (!isSolo) {
                const login = document.getElementById('login').value;

                if (!login) {
                    setError('Veuillez remplir le champ "Le login de votre binôme".');
                    return;
                }

            }

            let upload = null;

            if (supportNeed) {
                upload = document.getElementById('upload').files[0];
            }

            await postNewDemand(type, title, description, upload);

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

                <label htmlFor="type"><strong>Type</strong></label>
                <select id="type" name="type">
                    <option value="Hub">Hub</option>
                    <option value="WorkShop">WorkShop</option>
                    <option value="FocusGroup">FocusGroup</option>
                </select>

                <label htmlFor="title"><strong>Titre</strong></label>
                <input type="text" id="title" name="title" />

                <label><strong>Êtes-vous seul ou en binôme ?</strong></label>
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
                        <label htmlFor="login"><strong>Le login de votre binôme</strong></label>
                        <input type="text" id="login" name="login" />
                    </div>
                )}

                <label htmlFor="description"><strong>Description</strong></label>
                <textarea id="description" name="description" />

                {supportNeed && (
                    <div>
                        <label htmlFor="upload"><strong>Upload Support:</strong></label>
                        <input type="file" id="upload" name="upload" />
                    </div>
                )}

                {error && <div style={{ color: theme.errorColor, textAlign: "center" }}>{error}</div>}

                <button onClick={handleSend}>Envoyer</button>
            </div>
        </div>
    );
};

export default withTheme(Form);
