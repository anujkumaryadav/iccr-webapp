import React from 'react'
 
export const RONavbar = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src="./image/iccrr-logo.png"></img>
                    <a class="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Indian Council for Cultural Relations</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        
                    </ul>
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                            <a class="nav-link" href="#"><span class="sr-only">Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.iccr.gov.in/">ICCR Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li class="nav-item">
                  <a class="nav-link" href="" data-target="" data-toggle="collapse">Notification</a>
                    <i class="Notification"> </i>
                    </li>
                    </ul>
                </div>
       </nav>
    )
}
export default RONavbar;