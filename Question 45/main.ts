type car = {
    manufacture: string
    model: String
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const myCar: car = createCar ("toyota", "land cruiser",{color: "white", year: "2024"})
console.log(myCar);
