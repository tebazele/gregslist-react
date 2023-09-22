import React from 'react';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js'
import { carsService } from '../services/CarsService.js';
import { Modal } from 'bootstrap';

export default function ActiveCar() {
    async function removeCar() {
        try {
            if (await Pop.confirm('Remove this car?')) {
                await carsService.removeCar()
                Modal.getOrCreateInstance('#activeCar').hide()
            }
        }
        catch (error) {
            Pop.error(error);
        }
    }


    return (

        <div>
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{AppState.activeCar?.make} {AppState.activeCar?.model} - ${AppState.activeCar?.price.toLocaleString()} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <section className="row">
                    <div className="col-12 text-center">
                        <img src={AppState.activeCar?.imgUrl} className="active-car-pic" />
                        <p>{AppState.activeCar?.description}</p>
                        {/* <p>{this.props}</p> */}
                    </div>
                </section>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-info">Edit</button>
                <button type="button" className="btn btn-danger" onClick={removeCar}>Delete</button>
            </div>

        </div>
    )

}