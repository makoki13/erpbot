import { Funcionalidad, Accion } from  './clsFuncionalidad';

class Bot {
    readonly  id: number;
    readonly  nombre: string;
    readonly  grupo: string;
    readonly  empresa: string;
    protected tipo: number;
    readonly  activo: boolean;
    funcionalidades: Array< Funcionalidad >;

    constructor(id: number) {
        this.id = id;
        this.funcionalidades = new Array< Funcionalidad>();
    }

    getID() { return this.id;}

    addFuncionalidad(nuevaFuncionalidad: Funcionalidad) {
        let funcionalidad: Funcionalidad = nuevaFuncionalidad;        
        this.funcionalidades.push(funcionalidad);
    }

    ejecutaFuncionalidad(evento: string) {
        //Si existe una funcionalidad asociada a ese evento se ejecuta
        for(let i of this.funcionalidades) {
            if (i.getNombreEvento() === evento) {
                i.ejecuta();                
            }
        }
    }
}


class B_Bot extends Bot {
    constructor(id: number) {
        super(id);        
        this.tipo = 0;
    }
}

class W_Bot extends Bot {
    constructor(id: number, tipo: number) {
        super(id);        
        this.tipo = tipo;
    }
}

/********************************   TEST *******************************/
let miBot = new W_Bot(2,2);
//console.log(miBot.getID());

let miFuncionalidadA: Funcionalidad = new Funcionalidad(1,'Funcion1');
let a1:Function; a1 = function ():void{console.log('HOLA POLLASTRE A----');}
let miAccionA1 = new Accion(1,'Accion1',a1);
miFuncionalidadA.addFuncionalidad(miAccionA1);

let a2:Function; a2 = function ():void{console.log('HOLA POLLASTRE2 A****');}
let miAccionA2 = new Accion(2,'Accion2',a2);
miFuncionalidadA.addFuncionalidad(miAccionA2);

miBot.addFuncionalidad(miFuncionalidadA);

let miFuncionalidadB: Funcionalidad = new Funcionalidad(2,'Funcion2');
let b1:Function; b1 = function ():void{console.log('HOLA POLLASTRE B----');}
let miAccionB1 = new Accion(3,'Accion1B',b1);
miFuncionalidadB.addFuncionalidad(miAccionB1);

let b2:Function; b2 = function ():void{console.log('HOLA POLLASTRE2 B****');}
let miAccionB2 = new Accion(4,'Accion2',b2);
miFuncionalidadB.addFuncionalidad(miAccionB2);

miBot.addFuncionalidad(miFuncionalidadB);

miBot.ejecutaFuncionalidad('Funcion2');

//miFuncionalidad.ejecuta();