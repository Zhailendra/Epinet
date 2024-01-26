import React, {useEffect, useState} from 'react';
import { withTheme } from "../styles/Theme";
import styles from "../styles/card.module.scss";

const Card = ({theme, type, title, organizer, status, description}) => {

    const [newTitle, setNewTitle] = useState(null);
    const maxDescriptionLength = 270;
    const truncatedDescription =
        description.length > maxDescriptionLength
            ? description.slice(0, maxDescriptionLength) + '...'
            : description;
    const [color, setColor] = useState('');

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
                    <p style={{color: color}}>{organizer[0].email}</p>
                </div>

                <div className={styles.cardBody}>
                    <p>{truncatedDescription}</p>
                </div>

                <div className={styles.cardFooter} style={{borderColor: theme.tertiaryColor}}>
                    <div className={styles.cardMeta}>
                        <button className={styles.cardButton}>Voir détail</button>
                        <button className={styles.cardButton}>Update</button>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default withTheme(Card);