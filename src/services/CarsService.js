import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {
    removeCar() {
        console.log('removing car')
    }
    async getCars() {
        console.log('getting the cars');
        AppState.cars = []
        const res = await api.get('api/cars')
        console.log(res.data);
        AppState.cars = res.data.map(c => new Car(c));
    }

}

export const carsService = new CarsService();