import { TipoListaDeEtiquetas } from './clsObjeto';
class Formula {
    /* Que coño es eso de la formula :-D */
    /* Me imagino que será una lista de objetos existentes ¿con una cantidad? */
}

class AtributoDeObjeto {
    private ID: number;
    private composicion: Formula; /* Si composicion es null es simple */
    private tipoAtributo: Objeto.TipoAtributo;
    private valorAtributo: any
}

class ListaDeEtiquetas {
    private ID: number;
    private tipo: Objeto.TipoListaDeEtiquetas;
    private ID_Referencia: number; /* Habrá que averiguar el tipo del ID de la tabla en el sistema */
}

/* Las etiquetas hacen referencia a la clase ListaDeEtiquetas */
class Etiqueta {
    private ID_Lista: number;
    private ID_Valor: number;
}

class Objeto  {
    private ID: number;
    private tipo: Objeto.TipoObjeto;
    private ID_Derivado: number;
    private atributos: Array<AtributoDeObjeto>;
}

module Objeto {
    export enum TipoObjeto {Basico = 1, Derivado};
    export enum TipoAtributo {Numero = 1, Texto = 2, Fecha = 3, Etiqueta = 4};
    /* Si es una tabla, el ID de la tabla en el sistema. si es un Query este se guarda en la tabla de queries */
    export enum TipoListaDeEtiquetas {Tabla = 1, Query = 2}

}

export = Objeto;

/**
 * Ejemplo Objeto Maquina de Venta
 * ID: 13223223
 * Tipo: 1 [Básico]
 * ID_Derivado: null
 * atributos: [
 *  {
 *      ID:  1121212,
 *      composicion: null,
 *      tipoAtributo: 4
 *      valorAtributo: objeto de Etiqueta { ID: id de la lista, ID_Valor: id del elemento de la lista}
 * ]
 * 
 * Por ejemplo, si la lista es de provincias (ID: 4344) y el ID_Valor es Zamora (ID: 22)
 */