class CampoDeFormulario  {
    /* Falta pensarlo */    
}

class Formulario {
    private id: number;
    private tipo: Formulario.TipoFormulario;
    private nombre: string;
    private bajoPeticion: boolean = true;
    private siguienteEjecucion: Date; /* Solo si bajo petición es false */
    private periocidad: number = 0; /* Si bajo peticion es false y periocidad != 0 entonces se suma periocidad a siguienteEjecucion  */
    private ID_Bot: number;
    campos: Array<CampoDeFormulario>;
}

module Formulario {
    export enum TipoFormulario {Usuario = 1, Sistema};
}

export = Formulario;