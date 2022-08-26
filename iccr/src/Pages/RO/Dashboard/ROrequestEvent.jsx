import React from 'react'
import Navbar from './RONavbar'
import Sidebar from './ROSidebar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useState } from 'react';

export default function ROrequestEvent() {

  const [isRequested, setisRequested] = useState(false)


  const data = {
    featured: "Extra Event",
    eventTitle: "Event Title",
    eventDesc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quos, suscipit dignissimos quod repellat doloremque aliquam odit eaque ratione ipsam accusantium consequuntur, voluptate sunt accusamus aliquid praesentium voluptatem ipsum iure!"
  }

  const createEvent = () => {



    var config = {
      method: 'post',
      url: 'http://localhost:8001/ROEvent/requestEvent',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    axios(config)
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          setisRequested(true)
          console.log(response.data)
        }

      })
      .catch(function (error) {
        alert(error.response.data)

      });


  }

  return (
    <>
      <header>Regional Office Dashboard</header>
      <Navbar />

      <section className='ro-section'>

        <Sidebar />

        <div className="col main p-5 mt-3  ro-dashboard ">

          <Card>
            <Card.Header as="h5">Extra Event</Card.Header>
            <Card.Body>
              <Card.Title>Event Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quos, suscipit dignissimos quod repellat doloremque aliquam odit eaque ratione ipsam accusantium consequuntur, voluptate sunt accusamus aliquid praesentium voluptatem ipsum iure!
              </Card.Text>
              {
                isRequested ?
                <Button variant="primary"  disabled >Request Send</Button>
                : <Button variant="primary"  onClick={createEvent} >Request</Button>
              }
            </Card.Body>
          </Card>


        </div>

      </section>

    </>);
}
