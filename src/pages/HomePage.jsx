import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarComponent.jsx";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";
import { Modal } from 'bootstrap';
import ActiveCar from "../components/ActiveCar.jsx";

function HomePage() {
  async function getCars() {
    try {
      // console.log('get cars')
      await carsService.getCars()
    }
    catch (error) {
      Pop.error(error);
    }
  }

  let cars = (AppState.cars.map(c => {
    return (
      <div className="col-4 my-3" key={c.id}>
        <CarCard car={c} />
      </div>
    )
  }))

  useEffect(() => {
    getCars()
  }, [])



  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {cars}

        </div>
      </div>

      {/*modal*/}
      <div className="modal fade" id="activeCar" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <ActiveCar />
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{AppState.activeCar?.make} {AppState.activeCar?.model} - ${AppState.activeCar?.price.toLocaleString()} </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <section className="row">
                <div className="col-12 text-center">
                  <img src={AppState.activeCar?.imgUrl} className="active-car-pic" />
                  <p>{AppState.activeCar?.description}</p>
                  <p></p>
                </div>
              </section>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info">Edit</button>
              <button type="button" className="btn btn-danger" onClick={removeCar}>Delete</button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default observer(HomePage)