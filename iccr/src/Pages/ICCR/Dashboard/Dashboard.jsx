import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { useState, useEffect, useRef } from 'react'
import { FiCamera, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './Dashboard.css'

export default function Home() {

  const [distance, setDistance] = useState(0)
  const slider = useRef()

  useEffect(() => {
    if (distance > -1400 && distance <= 0) {
      slider.current.style.transform = `translateX(${distance}px)`
    } else {
      setDistance(0)
    }
  }, [distance])


  return (
    <>
      <header>
        ICCR DASHBOARD
      </header>
      <Navbar />
      <section className="home container ">

        <p>All Regional Offices</p>

        <div className="image-slider ">
          <FiChevronLeft className='icon' onClick={() => {
            setDistance(distance - 200)
          }} />
          <div className="slider-still ">

            <div className="image-container " ref={slider}>

              <div className='slider-image border'  >

                <p>REGIONAL OFFICE (MUMBAI)</p>
                <div className='ro-image border' style={{ backgroundImage: "url(/Images/RO.jpg)", backgroundSize: "cover" }} > </div>
                <div className='ro-info ' >
                  <p>Address</p>
                  <p>About</p>
                  <p>Rating</p>
                </div>

              </div>

              <div className='slider-image border'  >

                <p>REGIONAL OFFICE (MUMBAI)</p>
                <div className='ro-image border' style={{ backgroundImage: "url(/Images/RO.jpg)", backgroundSize: "cover" }}> </div>
                <div className='ro-info ' >
                  <p>Address</p>
                  <p>About</p>
                  <p>Rating</p>
                </div>

              </div>

              <div className='slider-image border'  >

                <p>REGIONAL OFFICE (MUMBAI)</p>
                <div className='ro-image border' style={{ backgroundImage: "url(/Images/RO.jpg)", backgroundSize: "cover" }} > </div>
                <div className='ro-info ' >
                  <p>Address</p>
                  <p>About</p>
                  <p>Rating</p>
                </div>

              </div>

              <div className='slider-image border'  >

                <p>REGIONAL OFFICE (MUMBAI)</p>
                <div className='ro-image border' style={{ backgroundImage: "url(/Images/RO.jpg)", backgroundSize: "cover" }} > </div>
                <div className='ro-info ' >
                  <p>Address</p>
                  <p>About</p>
                  <p>Rating</p>
                </div>

              </div>

              <div className='slider-image border'  >

                <p>REGIONAL OFFICE (MUMBAI)</p>
                <div className='ro-image border'style={{ backgroundImage: "url(/Images/RO.jpg)", backgroundSize: "cover" }} > </div>
                <div className='ro-info ' >
                  <p>Address</p>
                  <p>About</p>
                  <p>Rating</p>
                </div>

              </div>

            </div>

          </div>
          <FiChevronRight className='icon' onClick={() => {
            setDistance(distance + 200)
          }} />

        </div>

      </section>
    </>
  )
}
