import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const View = () => {
    let { id } = useParams()
    let [name, setName] = useState("")
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [state, setState] = useState("")
    let [city, setCity] = useState("")
    let [zipcode, setZipcode] = useState("")
    let [cname, setCname] = useState("")
    let navigate = useNavigate()
    let getData = async (id) => {
        try {
            let res = await axios.get(`https://66666ca3a2f8516ff7a35717.mockapi.io/user/user/${id}`)
            if (res.status === 200) {
                setName(res.data.name)
                setUsername(res.data.username)
                setEmail(res.data.email)
                setPhone(res.data.phone)
                setState(res.data.address.state)
                setCity(res.data.address.city)
                setZipcode(res.data.address.zipcode)
                setCname(res.data.cname)
            }
        }
        catch {
            toast.error(error.response.message)
        }
    }
    useEffect(() => {
        getData(id)
    }, [])
    let handleSubmit = async () => {
        try {
            let response = axios.put(`https://66666ca3a2f8516ff7a35717.mockapi.io/user/user/${id}`, {
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
                toast.success("User Edited Successfully");
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
                <p>Edit Your User</p>
            </div>
            <div className="container-fluid">
                <form name="createForm" action="" method="post" id="createForm">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Mobile</label>
                        <input type="text" className="form-control" id="phone" value={phone} placeholder="Mobile" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control" id="state" value={state} placeholder="State" onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="zipcode" className="form-label">Zipcode</label>
                            <input type="text" className="form-control" id="zipcode" value={zipcode} placeholder="Zipcode" onChange={(e) => setZipcode(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cname" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="cname" value={cname} placeholder="Company" onChange={(e) => setCname(e.target.value)} />
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
export default View
