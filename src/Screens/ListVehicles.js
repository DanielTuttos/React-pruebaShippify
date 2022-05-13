import React from 'react'
import { useParams } from 'react-router-dom'

export const ListVehicles = () => {
    const params = useParams();
    return (
        <div>{params.idDriver}</div>
    )
}
