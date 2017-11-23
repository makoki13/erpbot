"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evento = /** @class */ (function () {
    function Evento(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    Evento.prototype.getNombre = function () { return this.nombre; };
    return Evento;
}());
var Accion = /** @class */ (function () {
    function Accion(id, nombre, a) {
        this.id = id;
        this.nombre = nombre;
        this.funcion = a;
    }
    Accion.prototype.setFuncion = function (funcion) { this.funcion = funcion; };
    Accion.prototype.ejecuta = function () { this.funcion(); };
    return Accion;
}());
exports.Accion = Accion;
var Funcionalidad = /** @class */ (function () {
    function Funcionalidad(id, nombre) {
        var miEvento = new Evento(id, nombre);
        var misAcciones = Array();
        this.funcionalidad = [miEvento, misAcciones];
    }
    Funcionalidad.prototype.addFuncionalidad = function (accion) {
        this.funcionalidad[1].push(accion);
    };
    Funcionalidad.prototype.ejecuta = function () {
        for (var _i = 0, _a = this.funcionalidad[1]; _i < _a.length; _i++) {
            var a = _a[_i];
            a.ejecuta();
        }
    };
    return Funcionalidad;
}());
exports.Funcionalidad = Funcionalidad;
//# sourceMappingURL=clsFuncionalidad.js.map