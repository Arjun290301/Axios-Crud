import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
const Dashboard = () => {
    let navigate = useNavigate()
    let [data, setData] = useState([])
    let getData = async () => {
        try {
            let response = await axios.get("https://66666ca3a2f8516ff7a35717.mockapi.io/user/user")
            if (response.status === 200) {
                console.log(response)
                setData(response.data)
            }
            else {
                console.log("Error")
            }
        } catch (error) {
            console.log(error.response.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    let handleDelete = async (id) => {
        try {
            let response = await axios.delete(`https://66666ca3a2f8516ff7a35717.mockapi.io/user/user/${id}`)
            if (response.status === 200) {
                toast.success("User Deleted Successfully");
                getData()
            }
            else {
                toast.error("Error 404")
            }
        }
        catch {
            console.log(error.response.message)
        }
    }
    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e, i) => {
                        return <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.username}</td>
                            <td> {e.address.city},{e.address.state}-{e.address.zipcode}</td>
                            <td>{e.email}</td>
                            <td>{e.cname}</td>
                            <td><EditIcon style={{ marginRight: 40 }} onClick={() => navigate(`/view/${e.id}`)} />
                                <DeleteIcon onClick={() => handleDelete(e.id)} />
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    </>
}

export default Dashboard
