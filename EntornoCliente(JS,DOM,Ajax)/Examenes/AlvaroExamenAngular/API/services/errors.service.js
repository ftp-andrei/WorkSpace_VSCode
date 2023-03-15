import redis from 'redis';
import { v4 as uuidv4 } from 'uuid';

let client;
(async () => {
    client = redis.createClient();

    client.on("error", (error) => console.error(`Error : ${error}`));

    await client.connect();
})();

export async function getErrors() {
    const data = await client.get("errors");
    return JSON.parse(data ?? '[]');
}

export async function insertError(error) {
    const errors = await getErrors();
    error.time=new Date();
    if (errors === null || errors === undefined) {
        errors = [];
    }
    errors.push(error);
    await client.set("errors", JSON.stringify(errors));
    return error;
}

export async function getErrorByDate(time) {
    const errors = await getErrors();
    let res =[];
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].time >= time) {
            res.push(errors[i]);
        }
    }
    return res;
}

// AQUI SE IMPLEMENTAN LOS METODOS DE REDIS YO LO VEO COMO UN ARRAY ASOCIATIVO

// export async function getCars() {
//     // Aqui se esta usando el cliente de redis con su metodo get para que pille todo lo que este en la clave cars
//     const data = await client.get("Cars");
//     return JSON.parse(data ?? '[]');
// }



// aqui pilla todos los cars y los filtra de manera guarra
export async function getCarByID(id) {
    const cars = await getCars();
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            return cars[i];
        }
    }
    return null;
}

// lo mismo pero por numero de batidor
export async function getCarByNumBastidor(numBastidor) {
    const cars = await getCars();
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].numBastidor === numBastidor) {
            return cars[i];
        }
    }
    return null;
}

// mira si existe ya cars, sino crea uno vacio y le mete el coche
export async function insertCar(car) {
    const cars = await getCars();
    if (cars === null || cars === undefined) {
        cars = [];
    }
    car.id = uuidv4();
    cars.push(car);
    await client.set("Cars", JSON.stringify(cars));
    return car;
}




export async function deleteCar(id) {
    const cars = await getCars();
    const newCars = cars.filter(function (value) {
        return value.id !== id
    });

    if (cars.length != newCars.length) {
        await client.set("Cars", JSON.stringify(newCars));
        return true;
    }
    return false;
}

export async function modifyCar(car) {
    const cars = await getCars();
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === car.id) {
            cars[i] = car;
            await client.set("Cars", JSON.stringify(cars));
            return true;
        }
    }
    return false;
}

