import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { fetchData } from '../Helper/Fecth';

export const Vehicle = () => {

    const params = useParams();

    const idVehicle = params.id
    const idDriver = params.idDriver

    const navigate = useNavigate();

    const location = useLocation();
    const { state } = location;

    const [vehicle, setVehicle] = useState({
        capacity: "",
        driver_id: "",
        id: "",
        model: "",
        plate: "",
        type: "",
    })

    const { capacity, model, plate, type } = vehicle

    useEffect(() => {
        if (state != null) {
            delete state.creation_date
            setVehicle(state)
            // console.log("el estado: ", vehicle)
        }
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        const url = `/vehicle/${idVehicle}`;
        var data = vehicle
        delete data.id
        const resp = await fetchData(url, data, "PUT");
        const body = await resp.json();
        // // console.log(body)
        if (body.status === 'OK') {
            navigate(-1)
        }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        // console.log("agregar registro");
        const url = `/vehicle/`;
        var data = vehicle
        data.driver_id = idDriver
        delete data.id
        const resp = await fetchData(url, data, "POST");
        const body = await resp.json();
        // // console.log(body)
        if (body.status === 'OK') {
            navigate(-1)
        }
    }

    function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
            ...vehicle,
            [name]: value,
        };
        setVehicle(newValues);
    }

    return (
        <div>
            <h1>Vehiculo</h1>
            <br />

            <div className='row g-3'>
                <div className="col-sm-6">
                    <label className="form-label">Plate</label>
                    <input type="text" id="plate" name="plate" className="form-control" onChange={handleChange} value={plate} />

                    <label className="form-label">Model</label>
                    <input type="text" id="model" name="model" className="form-control" onChange={handleChange} value={model} />
                </div>

                <div className="col-sm-6">
                    <label className="form-label">Type</label>
                    <input type="text" id="type" name="type" className="form-control" onChange={handleChange} value={type} />

                    <label className="form-label">Capacity</label>
                    <input type="text" id="capacity" name="capacity" className="form-control" onChange={handleChange} value={capacity} />

                    {(idVehicle == 0) ?
                        <Button className='mt-4' color='primary'
                            onClick={handleCreate}
                        >Agregar vehiculo</Button> :
                        <Button className='mt-4' color='primary'
                            onClick={handleUpdate}
                        >Actualizar vehiculo</Button>
                    }
                </div>
            </div>
        </div>
    )
}
