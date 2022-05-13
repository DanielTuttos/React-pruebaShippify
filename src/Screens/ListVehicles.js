import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap';
import { fetchData } from '../Helper/Fecth';

export const ListVehicles = () => {

    const params = useParams();

    const { idDriver } = params

    const [vehicle, setvehicle] = useState([])

    const navigate = useNavigate();

    const location = useLocation();
    const { state } = location;

    const { first_name, last_name, email, phone } = state

    useEffect(() => {
        if (idDriver == 0) {
            navigate("/")
        }
        // console.log(state); // la info del conductor
        consultarData();

    }, [])

    const consultarData = async () => {
        const url = `/vehicle/driver/${idDriver}`;
        const resp = await fetchData(url, null);
        const body = await resp.json();
        // console.log(body)
        if (body.status === 'OK') {
            setvehicle(body.data);
        }
    }

    const handleDelete = async (e, idVehicle) => {
        e.preventDefault();
        var respuesta = window.confirm("Desea eliminar el vehiculo")

        if (!respuesta){
            return
        }
        const url = `/vehicle/${idVehicle}`;
        const resp = await fetchData(url, {}, "DELETE");
        const body = await resp.json();
        if (body.status === 'OK') {
            consultarData();
        }
    }

    return (
        <div>
            <h1>Conductor</h1>
            <br />

            <div className='row g-3'>
                <div className="col-sm-6">
                    <label className="form-label">Firts Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value={first_name} disabled />

                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value={email} disabled />
                </div>

                <div className="col-sm-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value={last_name} disabled />

                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value={phone} disabled />

                    <Button className='mt-4' color='primary'
                        onClick={() => navigate(`/vehicle/0/${idDriver}`)}
                    >Agregar nuevo vehiculo</Button>
                </div>

            </div>
            <br />
            <br />

            <h1>Tabla de vehiculos</h1>
            <Table responsive className='m-auto'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Plate</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicle.map(ve => {
                        return (
                            <tr key={ve.id}>
                                <th scope="row">{ve.id}</th>
                                <td>{ve.plate}</td>
                                <td>{ve.model}</td>
                                <td>{ve.type}</td>
                                <td>{ve.capacity}</td>
                                <td><Link className='btn btn-primary' to={`/vehicle/${ve.id}/${idDriver}`} state={ve}>Detalles</Link> <Button onClick={(e) => handleDelete(e, ve.id)} className='ml-4' color='danger'>Eliminar</Button> </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}
