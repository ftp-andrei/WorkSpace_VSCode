import { ConsultaCreate } from "./consulta.create.model";

export class Consulta extends ConsultaCreate {
  _id: number;

  fecha: Date | null;

  constructor() {
    super();
    this._id = 0;
    this.fecha = null;
  }
}
