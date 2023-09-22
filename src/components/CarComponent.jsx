import React from 'react';
import PropTypes from 'prop-types';
import { Car } from '../models/Car.js';
import { AppState } from '../AppState.js';

/**@param {{car:Car}} props */
export default function CarCard({ car }) {

    function setActiveCar() {
        AppState.activeCar = car
        console.log(AppState.activeCar)
    }

    return (

        <div className="card p-2 standard-height selectable" onClick={setActiveCar} data-bs-toggle="modal" data-bs-target="#activeCar">
            <img src={car.imgUrl} className="car-pic" />
            <div className="m-2">
                <h5>{car.make} {car.model} {car.year}</h5>
            </div>
            <div className='m-2'>
                <h6>Price: ${car.price.toLocaleString()}</h6>
            </div>
        </div>
    )

}

CarCard.propTypes = {
    car: PropTypes.instanceOf(Car)
}