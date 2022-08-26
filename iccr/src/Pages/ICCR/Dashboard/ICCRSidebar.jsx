import React from 'react'
import { Link } from 'react-router-dom';

const ICCRSidebar = () => {
    return (
        <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">

                <Link to='/iccrDashboard'><li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Home</span></a></li></Link>
                <Link to='/manageEvent'><li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Manage Event</span></a></li> </Link>
                <Link to='/manageRO'> <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Manage RO's</span></a></li> </Link>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Students Section</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">financial Reports</span></a></li>

            </ul>
        </div>
    )
}

export default ICCRSidebar;