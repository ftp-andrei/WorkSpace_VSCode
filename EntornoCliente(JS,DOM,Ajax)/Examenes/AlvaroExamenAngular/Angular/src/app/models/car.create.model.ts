export class CarCreate {
  marca: string;

  modelo: string;

  precio: number;

  fecha: Date | null;

  imagen: string;

  descripcion: string;

  constructor() {
    this.marca = "";
    this.modelo = "";
    this.precio = 0;
    this.fecha = null;
    this.imagen = "";
    this.descripcion = "";
  }
}
