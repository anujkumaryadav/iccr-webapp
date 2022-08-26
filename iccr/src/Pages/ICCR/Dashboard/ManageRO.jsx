import { useEffect, useState } from 'react';
import 'react-bootstrap'
import './Dashboard.css'
import Navbar from './ICCRNavbar';
import Sidebar from './ICCRSidebar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ICCRManageRO = () => {


    const [record, setRecord] = useState([])
    const [ROdata, setROdata] = useState({})

    let officeName = "ROMumbai"

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:8001/ROAuth/getRating',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                officeName,
            }
        };

        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data)
                    setROdata(response.data)
                }

            })
            .catch(function (error) {
                alert(error.response.data)

            });

    }, [])


    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(res => setRecord(res))
    }

    useEffect(() => {
        getData();
    })


    return (
        <>
            <header>ICCR Office Dashboard</header>
            <Navbar />

            <section className='ro-section'>

                <Sidebar />

                <div class="col main p-5 mt-3  ro-dashboard ">


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/Images/RO.jpg" />
                        <Card.Body>
                            <Card.Title>Regional Office Mumbai</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <b> <p>Events Organized : {ROdata.eventCompleted} Events </p> </b>
                            <b> <p>Extra Events : {ROdata.extraEvents} Events </p> </b>
                            <b> <p>Ratings : {ROdata.ratings} Stars</p> </b>
                            <Button variant="primary">view Details</Button>
                        </Card.Body>
                    </Card>

                </div>
            </section>

        </>);
}

export default ICCRManageRO;