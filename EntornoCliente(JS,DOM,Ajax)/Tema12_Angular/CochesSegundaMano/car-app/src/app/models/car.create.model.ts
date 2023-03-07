export class CarCreate {
    marca: string;
  
    modelo: string;
  
    fecha: Date | null;

    precio: number;

    img: string;
  
    constructor() {
      this.marca = "";
      this.modelo = "";
      this.fecha = null;
      this.precio = 0;
      this.img="";
    }
  }