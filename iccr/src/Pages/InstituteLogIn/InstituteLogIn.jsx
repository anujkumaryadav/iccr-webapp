import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export default function InstituteLogIn() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            Instituteusername: "nagpur",
            Institutepassword: "1234"
        }
    ];

    const errors = {
        uname: "Invalid Username of Institute",
        pass: "Invalid Password of Institute"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        let Rname = document.getElementById('Rname').value
        let COInstitutepass = document.getElementById('COInstitutepass').value

        var config = {
            method: 'post',
            url: 'http://localhost:8001/auth/login',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
                Rname : Rname,
                Institutename : Institutename,
                Instituteemail :Instituteemail,
                Institutepass : Institutepass,
                COInstitutepass : COInstitutepass,
            }
          };
      
          axios(config)
            .then(function (response) {
                console.log(response)
                if( response.status === 200 ){
                    alert(response.data)
                }

            })
            .catch(function (error) {
              alert(error.response.data)
            //   renderErrorMessage("uname")
            });

    };

    // JSX code for Institute LogIn
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Regional Office</label>
                    <input type="text" name="Rname" id='Rname' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>College Name and ID</label>
                    <input type="text" name="Institutename" id='Institutename' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Email ID</label>
                    <input type="email" name="Instituteemail" id='Instituteemail' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Create Password</label>
                    <input type="password" name="Institutepass" id='Institutepass' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Confirm Password </label>
                    <input type="password" name="COInstitutepass" id='COInstitutepass' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
                    <input type="submit" />
                    <Form onSubmit={this.handleSubmit} />
                </div>
            </form>
        </div>
    );


    return (
        
            <div className="app">
                <div className="login-form">
                    <div className="title">Institute Log In for ICCR</div>
                    {isSubmitted ? <div>You Logged In Succesfully </div> : renderForm}
                </div>
            </div>
        
    )
}
