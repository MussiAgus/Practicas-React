/* eslint-disable no-undef */


// eslint-disable-next-line no-unused-vars
import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones";

/*
describe("Pruebas en 05-funciones", ()=>{
    test("getUser debe retornar un objeto", ()=>{

        expect(getUser()).toEqual({
            uid: 'ABC123',
            username: 'El_Papi1502'})
    });
});
*/
describe("Tarea prueba en 05-funciones", ()=>{
    test("getUserActivo debe devolver el objeto con nombre", ()=>{
        const nombre= "Issei";
        expect(getUsuarioActivo(nombre)).toEqual({uid: 'ABC567',
            username: nombre});
        
        console.log(getUsuarioActivo(nombre));
    });
});
