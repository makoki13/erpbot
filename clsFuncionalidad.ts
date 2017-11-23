class Evento {
    id: number;
    nombre: string;
    
    constructor (id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    getNombre() {return this.nombre;}
}

export class Accion {
    id: number;
    nombre: string;
    funcion: Function;

    constructor(id: number, nombre: string, a: Function) {
        this.id = id;
        this.nombre = nombre;        
        this.funcion = a;
    }
    
    public setFuncion(funcion) { this.funcion = funcion; }    
    public ejecuta() { this.funcion(); }
}

export class Funcionalidad {    
    funcionalidad: [Evento, Array<Accion>];

    constructor(id: number, nombre: string) {       
        let miEvento = new Evento(id,nombre);
        let misAcciones = Array<Accion>();
        
        this.funcionalidad = [miEvento,misAcciones];
    }

    public getNombreEvento() {
        return this.funcionalidad[0].getNombre();
    }
    
    public addFuncionalidad(accion: Accion) {        
        this.funcionalidad[1].push(accion);
    }

    public ejecuta() {
        for(let a of this.funcionalidad[1]) {a.ejecuta();}        
    }
}