import {useEffect,useState} from 'react';
import 'react-bootstrap'
import Navbar from '../../../Components/Navbar/Navbar';
 
const RODashboard = () => {

   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (
        <>
        <header>Regional Office Dashboard</header>
    <Navbar  />
    <div class="col main p-5 mt-3 ">
        <p class="lead d-none d-sm-block">Regional Office Details</p>
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
                            <i class="fa fa-university"></i>
                        </div>
                        <h6 class="text-uppercase">Institutes</h6>
                        <h1 class="display-4">10+</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-user-circle"></i>
                        </div>
                        <h6 class="text-uppercase">Student's</h6>
                        <h1 class="display-4">120+</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
       
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               List of Students
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Student Name</th>
                                <th>Student Id</th>
                                <th>Regional Office</th>
                                <th>College Name</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
       
 
        <div class="card-columns mb-3">
            <div class="card">
                <img class="card-img-top img-fluid" src="#" alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-text"></p>
                </div>
                        </div>
            
        
                        </div>
    </div>        
    </> );
}
 
export default RODashboard;