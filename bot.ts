import { Funcionalidad, Accion } from  './clsFuncionalidad';

class Bot {
    readonly  id: number;
    readonly  nombre: string;
    readonly  grupo: string;
    readonly  empresa: string;
    protected tipo: number;
    readonly  activo: boolean;
    funcionalidades: Array< Funcionalidad >; //sustituir any por la clase funcionalidad

    constructor(id: number) {
        this.id = id;
    }

    getID() { return this.id;}

    addFuncionalidad(funcionalidad: any) {
        this.funcionalidades.push(funcionalidad);
    }

    ejecutaFuncionalidad(evento: string) {
        //Si existe una funcionalidad asociada a ese evento se ejecuta
        for(let i of this.funcionalidades) {
            if (i.funcionalidad[0].getNombre() === evento) {
                i.funcionalidad[1][0].ejecuta();
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

let miFuncionalidad = new Funcionalidad(1,'Funcion1');

let a:Function; a = function ():void{console.log('HOLA POLLASTRE----');}
let miAccion = new Accion(1,'Accion1',a);
miFuncionalidad.addFuncionalidad(miAccion);

let b:Function; b = function ():void{console.log('HOLA POLLASTRE2****');}
let miAccion2 = new Accion(2,'Accion2',b);
miFuncionalidad.addFuncionalidad(miAccion2);

miFuncionalidad.ejecuta();