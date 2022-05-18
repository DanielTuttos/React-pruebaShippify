import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'
import { fetchData } from '../Helper/Fecth';

export const Home = () => {

    const [data, setData] = useState([])
    const [busca, setBusca] = useState("");

    useEffect(() => {
        consultarData();
    }, [])

    const consultarData = async () => {
        const url = '/driver/alldrivers/0';
        const resp = await fetchData(url, null);
        const body = await resp.json();
        if (body.status === 'OK') {
            setData(body.data);
        }
    }

    const handleChange = (e) => {
        setBusca(e.target.value)
        if (!busca) {
            consultarData();
        }

    }
    const handleKey = async (e) => {
        if (e.key === 'Enter') {
            console.log("presionando enter");
            const url = `/driver/alldrivers/${busca}`;
            const resp = await fetchData(url, null);
            const body = await resp.json();
            if (body.status === 'OK') {
                setData(body.data);
            }
        }
    }

    return (
        <div>
            <div className='row g-3'>

                <div className="col-sm-6">
                    <h1 color='primary'>Tabla de conductores</h1>
                </div>

                <div className="col-sm-6">
                    <input type="text" className="form-control" id="busca" name='busca' placeholder="Buscador Id / nombre" value={busca}
                        onChange={handleChange}
                        onKeyDown={handleKey}
                    />
                </div>

            </div>
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
                                <td> <Link className='btn btn-primary' to={`/vehicle/driver/${da.id}`} state={da}>Ver Vehiculos</Link> </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}
