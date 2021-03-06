import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Team from '../Team/Team';
import "./Home.css"


const Home = () => {

    const [loading, setLoading] = useState(false)
    const [teams, setTeams] = useState([]);
    useEffect(() => {

        const api = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335";
        axios(api)
            .then(data => setTeams(data.data.teams))
            .finally(() => setLoading(true))
    }, [])

    return (
        <main className="main-section">
            <Header />
            <div className="main-container container mt-4">
                <Row className="justify-content-center align-items-center">
                    {
                        loading ? teams.map(team => <Team key={team.idTeam} team={team} />)
                            : <Spinner animation="border" variant="info" />
                    }
                </Row>
                <Footer/>
            </div>
        </main>
    );
};

export default Home;