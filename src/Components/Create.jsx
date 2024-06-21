import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Create = () => {
    let [name, setName] = useState("")
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    let [cname, setCname] = useState("")
    let navigate = useNavigate()
    let handleSubmit = async () => {
        try {
            let response = axios.post("https://66666ca3a2f8516ff7a35717.mockapi.io/user/user", {
                name,
                username,
                email,
                phone,
                address: {
                    city: city,
                    state: state,
                    zipcode: zipcode

                },
                cname,

            })
            if ((await response).status) {
                console.log(response.data)
                toast.success("User Created Successfully");
                navigate("/dashboard")
            }

        }
        catch (error) {
            toast.error(error.response.message || "Error 404");
        }
    }
    const handleAddressChange = (e) => {

    }
    return <>
        <div className='createbody'>
            <div className='bigtext2'>
                <p>Create Your User</p>
            </div>
            <div className="container-fluid">
                <form name="createForm" action="" method="post" id="createForm">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Mobile</label>
                        <input type="text" className="form-control" id="phone" placeholder="Mobile" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control" id="state" placeholder="State" onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="zipcode" className="form-label">Zipcode</label>
                            <input type="text" className="form-control" id="zipcode" placeholder="Zipcode" onChange={(e) => setZipcode(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cname" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="cname" placeholder="Company" onChange={(e) => setCname(e.target.value)} />
                    </div>
                    <br />
                </form>
            </div>
            <div className='btnCenter'>

                <Button variant="outline-success" onClick={handleSubmit}>Submit</Button>

            </div>
            <br />
        </div>
    </>
}
export default Create
