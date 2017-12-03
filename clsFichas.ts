class CampoDeFicha {
    /* Falta pensarlo */
}

class Ficha {
    private ID: number;
    private tipo: Ficha.TipoFicha;
    private nombre: string;    
    ID_Objeto: number;
    campos: Array<CampoDeFicha>;
}

module Ficha {
    export enum TipoFicha {Usuario = 1, Sistema};
}

export = Ficha;