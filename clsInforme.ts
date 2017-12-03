import { TipoInforme } from './clsInforme';

class CampoDeInforme {
    /* Para pensar */
}

class Informe {
    private ID: number;
    private tipo: Informe.TipoInforme;
    private nombre: string;
    private bajoPeticion: boolean = true;
    private siguienteEnvio: Date; /* Solo si bajo petición es false */
    private periocidad: number = 0; /* Si bajo peticion es false y periocidad != 0 entonces se suma periocidad al siguienteEnvio  */
    private enviarCorreo: boolean = false;
    private ID_Bot: number;
}

module Informe {
    export enum TipoInforme {Usuario = 1, Sistema};
}

export = Informe;