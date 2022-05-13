import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap'
import { fetchData } from '../Helper/Fecth';

export const Home = () => {

    const url = '/driver/alldrivers';
    const [data, setData] = useState([])

    useEffect(() => {
        consultarData();
    }, [])

    const consultarData = async () => {
        const resp = await fetchData(url, null);
        const body = await resp.json();
        // console.log(body)
        if (body.status === 'OK') {
            setData(body.data);
        }
    }

    return (
        <div>
            <h1 color='primary'>Tabla de conductores</h1>
            <Table responsive className='m-auto'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firts Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(da => {
                        return (
                            <tr key={da.id}>
                                <th scope="row">{da.id}</th>
                                <td>{da.first_name}</td>
                                <td>{da.last_name}</td>
                                <td>{da.email}</td>
                                <td>{da.phone}</td>
                                <td> <Link className='btn btn-primary' to={`/vehicle/driver/${da.id}`}>Ver Vehiculos</Link> </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}
