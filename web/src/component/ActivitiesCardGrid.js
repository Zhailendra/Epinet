// ActivitiesCardGrid.js
import React from 'react';
import Card from './Card';
import styles from '../styles/activitiesGrid.module.scss';

const ActivitiesCardGrid = ({ activities, userLogins }) => {
    const divideActivitiesIntoRows = (activities) => {
        const rows = [];
        for (let i = 0; i < activities.length; i += 2) {
            rows.push(activities.slice(i, i + 2));
        }
        return rows;
    };

    return (
        <div className={styles.activitiesGrid}>
            {divideActivitiesIntoRows(activities).map((row, rowIndex) => (
                <div key={rowIndex} className={styles.activitiesRow}>
                    {row.map((activity, index) => (
                        <Card
                            key={index}
                            type={activity.type}
                            title={activity.title}
                            organizer={userLogins}
                            status={activity.status}
                            description={activity.description}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ActivitiesCardGrid;
