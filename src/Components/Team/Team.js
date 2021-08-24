import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const Team = ({ team }) => {

    const { strTeam, idTeam, strTeamBadge, strSport } = team
    return (

        <React.Fragment>
            <Col className="team" sm={6} md={4}>
                <Card className="card-info text-center h-100">
                    <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>Sports Type: {strSport}</Card.Text>
                        <Link to={"/team/" + idTeam}>Explore <FontAwesomeIcon icon={faArrowCircleRight} /></Link>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Team;