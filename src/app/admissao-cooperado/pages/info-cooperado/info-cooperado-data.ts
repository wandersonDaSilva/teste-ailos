import { DataCooperadoInterface } from "../../models/data-cooperado.interface";
import { Utils } from "../../utils/utils";


const utils = new Utils();
const date = new Date();

export const DATA: DataCooperadoInterface =
{
  name: utils.nameFake,
  cpf: '',
  dateNasc: date,
  address: 'Rua fake, 000, Bairro fake - FK'
}
