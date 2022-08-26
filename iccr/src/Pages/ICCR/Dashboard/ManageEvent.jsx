import { useEffect, useState } from 'react';
import 'react-bootstrap'
import './Dashboard.css'
import Navbar from './ICCRNavbar';
import Sidebar from './ICCRSidebar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ICCRManageEvent = () => {


    const [isAvailable, setIsAvailable] = useState(false)
    const [events, setEvents] = useState()

    let officeName = "ROMumbai"

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:8001/ROEvent/getEvents',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(function (response) {
                setEvents(response.data)


            })
            .catch(function (error) {
                alert(error.response.data)

            });

    }, [])


    useEffect(() => {
        if(events !== undefined){
            setIsAvailable(true)
        }
        else{
            setIsAvailable(false)
        }
    }, [events])
    


    return (
        <>
            <header>ICCR Office Dashboard</header>
            <Navbar />

            <section className='ro-section'>

                <Sidebar />

                <div class="col main p-5 mt-3  ro-dashboard ">
                    {
                        isAvailable &&

                        <Card>
                            <Card.Header as="h5">{events.featured}</Card.Header>
                            <Card.Body>
                                <Card.Title>{events.eventTitle}</Card.Title>
                                <Card.Text>{events.eventDesc}</Card.Text>
                                <Button variant="success" className='m-2' >Approve Request</Button>
                                <Button variant="danger"  >Reject Request</Button>
                            </Card.Body>
                        </Card>
                    }

                </div>
            </section>

        </>);
}

export default ICCRManageEvent