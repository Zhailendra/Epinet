// ActivitiesCardGrid.js
import React from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ActivitiesCardGrid = ({ activities, userLogins }) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const divideActivitiesIntoRows = (activities) => {
        const rows = [];
        for (let i = 0; i < activities.length; i += 2) {
            rows.push(activities.slice(i, i + 2));
        }
        return rows;
    };

    const getOrganizers = (activity, userLogins) => {
        const organizers = [];

        for (let i = 0; i < userLogins.length; i++) {
            if (activity.organizer === userLogins[i].id) {
                organizers.push(userLogins[i].email);
                if (activity.coorganizer)
                    organizers.push(activity.coorganizer);
            }
        }
        return organizers;
    }

    const activityCards = divideActivitiesIntoRows(activities).map((item, rowIndex) => (
        <div key={rowIndex}>
            {item.map((activity, index) => (
                <Card
                    key={`${rowIndex}-${index}`}
                    type={activity.type}
                    title={activity.title}
                    organizers={getOrganizers(activity, userLogins)}
                    status={activity.status}
                    description={activity.description}
                />
            ))}
        </div>
    ));

    return (
        <div>
            <Carousel responsive={responsive}>
                {activityCards}
            </Carousel>
        </div>
    );
};

export default ActivitiesCardGrid;
