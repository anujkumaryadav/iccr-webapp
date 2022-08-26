import React from 'react'
const ROSidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5></h5></a></li>
                <li class="nav-item mb-2">
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href=".iccr/src/RO/Profile"><i class="fa fa-user"></i> <span className="ml-3">Profile</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSc9_yNuWD0XejWSnx8C6bvrHHrT5vLf2g6HMSx80g1lzGZqug/viewform"><i class="fa fa-exclamation-circle"></i><span className="ml-3">Gravinance</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSfMDlA3k5SgpIqGFpk4QdkvwGzEqSCas93vgkqymw0yDRyckg/viewform"><i class="fa fa-check-square"></i><span className="ml-3">Feedbackform</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fa fa-bell"></i> <span className="ml-3">Notification</span></a></li>
              {  /*<li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Templates</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Themes</a></li> */}
            </ul>
       </div>
    )
}
 
export default ROSidebar;