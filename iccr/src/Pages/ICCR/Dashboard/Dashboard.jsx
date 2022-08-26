import { useEffect, useState } from 'react';
import 'react-bootstrap'
import './Dashboard.css'
import Navbar from './ICCRNavbar';
import Sidebar from './ICCRSidebar'

const ICCRDashboard = () => {


    const [record, setRecord] = useState([])

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

            <Sidebar/>

            <div class="col main p-5 mt-3  ro-dashboard ">
                <p class="lead d-none d-sm-block">ICCR Details</p>
                <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">Close</span>
                    </button>
                </div>
   
                <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Posts</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            
    </div>

                <hr />

                <div class="card-columns mb-3">
                    <div class="card">
                        <img class="card-img-top img-fluid" src="#" alt="Card image cap" />
                        <div class="card-body">
                            <h4 class="card-title"></h4>
                            <p class="card-text"></p>
                        </div>
                    </div>


                </div>


            </div>

            </section>

        </>);
}

export default ICCRDashboard;