import React, { useEffect, useState } from "react";
import { TitleContainer, Title } from "../subgroups/SubGroups";
import { Container, Row, Col } from "../../components/Layout";
import { EventCard } from "../../components/Events/EventCard";
import { useHistory } from "react-router";


export const EventsPage = () => {
    const [socialEvents, setSocialEvents] = useState([]);
    const [corporateEvents, setCorporateEvents] = useState([]);
    const history = useHistory();


    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const socialData = await fetch("http://localhost:8000/arrangementer/api/social");
        const socialItems = await socialData.json();
        const corpData = await fetch("http://localhost:8000/arrangementer/api/bedpres");
        const corporateItems = await corpData.json();
        setSocialEvents(socialItems);
        setCorporateEvents(corporateItems);
    };

    
    return (
    <>
    <TitleContainer>
        <Title>
            Social Events
        </Title>
    </TitleContainer>
    <Col>
        {socialEvents.map((event) => (
            <EventCard key={event.id} event={event} history={history} ></EventCard>
        ))}
    </Col>
    </>
    )
}




