// ActivitiesCardGrid.js
import React, {useEffect, useState} from 'react';
import Card from './Card';
import DetailPopup from "./DetailPopup";
import UpdatePopup from "./UpdatePopup";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ActivitiesCardGrid = ({ activities, userLogins }) => {

    const [type, setType] = useState(null);
    const [title, setTitle] = useState(null);
    const [organizers, setOrganizers] = useState(null);
    const [status, setStatus] = useState(null);
    const [description, setDescription] = useState(null);

    const [showDetailPopup, setShowDetailPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);

    const handleClosePopup = () => {
        setShowDetailPopup(false);
        setShowUpdatePopup(false);
    }

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

    const getDetailsPopup = (activity) => {
        setType(activity.type);
        setTitle(activity.title);
        setOrganizers(getOrganizers(activity, userLogins));
        setStatus(activity.status);
        setDescription(activity.description);
        setShowDetailPopup(true);
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
                    onDetailsClick={() => getDetailsPopup(activity)}
                />
            ))}
        </div>
    ));

    return (
        <div>
            {activities.length > 0 ? (
                <Carousel responsive={responsive}>
                    {activityCards}
                </Carousel>
            ) : (
                <p style={{display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "1.5rem"}}>
                    Aucune activité validée pour le moment
                </p>
            )}

            {/* Detail Popup */}

            {showDetailPopup && (
                <DetailPopup
                    closePopup={handleClosePopup}
                    title={`{${type}} ${title}`}
                    organizers={organizers}
                    status={status}
                    description={description}
                />
            )}

            {/* Update Popup */}

        </div>
    );
};

export default ActivitiesCardGrid;
