"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var clsFuncionalidad_1 = require("./clsFuncionalidad");
var Bot = /** @class */ (function () {
    function Bot(id) {
        this.id = id;
    }
    Bot.prototype.getID = function () { return this.id; };
    Bot.prototype.addFuncionalidad = function (funcionalidad) {
        this.funcionalidades.push(funcionalidad);
    };
    Bot.prototype.ejecutaFuncionalidad = function (evento) {
        //Si existe una funcionalidad asociada a ese evento se ejecuta
        for (var _i = 0, _a = this.funcionalidades; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.funcionalidad[0].getNombre() === evento) {
                i.funcionalidad[1][0].ejecuta();
            }
        }
    };
    return Bot;
}());
var B_Bot = /** @class */ (function (_super) {
    __extends(B_Bot, _super);
    function B_Bot(id) {
        var _this = _super.call(this, id) || this;
        _this.tipo = 0;
        return _this;
    }
    return B_Bot;
}(Bot));
var W_Bot = /** @class */ (function (_super) {
    __extends(W_Bot, _super);
    function W_Bot(id, tipo) {
        var _this = _super.call(this, id) || this;
        _this.tipo = tipo;
        return _this;
    }
    return W_Bot;
}(Bot));
/********************************   TEST *******************************/
var miBot = new W_Bot(2, 2);
//console.log(miBot.getID());
var miFuncionalidad = new clsFuncionalidad_1.Funcionalidad(1, 'Funcion1');
var a;
a = function () { console.log('HOLA POLLASTRE----'); };
var miAccion = new clsFuncionalidad_1.Accion(1, 'Accion1', a);
miFuncionalidad.addFuncionalidad(miAccion);
var b;
b = function () { console.log('HOLA POLLASTRE2****'); };
var miAccion2 = new clsFuncionalidad_1.Accion(2, 'Accion2', b);
miFuncionalidad.addFuncionalidad(miAccion2);
miFuncionalidad.ejecuta();
//# sourceMappingURL=bot.js.map