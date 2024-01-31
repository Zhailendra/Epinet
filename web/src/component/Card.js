import React, {useEffect, useState} from 'react';
import { withTheme } from "../styles/Theme";
import styles from "../styles/card.module.scss";
import Cookies from "js-cookie";

const Card = ({theme, type, title, organizers, status, description, onDetailsClick, onUpdateClick}) => {

    const [newTitle, setNewTitle] = useState(null);
    const maxDescriptionLength = 150;
    const truncatedDescription =
        description.length > maxDescriptionLength
            ? description.slice(0, maxDescriptionLength) + '...'
            : description;
    const [color, setColor] = useState('');
    const isWaitingSupport = status === 'waiting_support';
    const isValidate = status === 'accepted';
    const isAdm = Cookies.get('adm') === 'true';

    useEffect(() => {
        setNewTitle(`{${type}} ${title}`);

        switch (type) {
            case 'Hub':
                setColor('#668cb3');
                break;
            case 'WorkShop':
                setColor('#c7b3d9');
                break;
            case 'FocusGroup':
                setColor('#c7b3d9');
                break;
        }

    }, [type, title]);

    return (
        <div className={styles.cardContainer}>
            <article className={styles.card} style={{borderColor: color}}>
                <div className={styles.cardHeader}>
                    <a>{newTitle}</a>
                    <div className={`${styles.statusIcon} ${styles[status]}`} />
                </div>

                <div className={styles.cardOrganizer}>
                    <p style={{color: color}}>{organizers[0]}</p>
                    <p style={{color: color}}>{organizers[1]}</p>
                </div>

                <div className={styles.cardBody}>
                    <p>{truncatedDescription}</p>
                </div>

                <div className={styles.cardFooter} style={{borderColor: theme.tertiaryColor}}>
                    <button className={styles.cardButton} onClick={() => onDetailsClick({ type, title, organizers, status, description })}>Voir détail</button>
                    {!isValidate && (
                        <button className={styles.cardButton} onClick={() => onUpdateClick({ type, title, organizers, status, description })}>{isAdm ? "Vérifier" : isWaitingSupport  ? "Provide Support" : "Update"}</button>
                    )}
                </div>
            </article>
        </div>
    );
}

export default withTheme(Card);