export class CarCreate {
  marca: string;

  modelo: string;

  descripcion: string;

  precio: number;

  fecha: Date | null;

  imagen: string;

  constructor() {
    this.marca = "";
    this.modelo = "";
    this.descripcion = "";
    this.precio = 0;
    this.fecha = null;
    this.imagen = "";
  }
}
// Modelo de la api