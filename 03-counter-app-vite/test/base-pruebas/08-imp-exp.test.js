/* eslint-disable no-undef */

import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe("Tarea con heroes", ()=>{
    test("Retornar heroes de DC", ()=>{
        const owner="DC";
        const heroes= getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'}]);
    });

    /*
    Se puede, o comparar con un objeto literal copiado por vos, como en el caso de arriba, o implementar una
    funcion de filtro en la comparacion (la misma que se uso en la funcion getHeroesByOwner). Y para eso hay que
    traer el archivo original de heroes.
    */
    test("Retornar heroes de Marvel",()=>{
        const owner="Marvel";
        const Heroes= getHeroesByOwner(owner);
        expect(Heroes.length).toBe(2);
        expect(Heroes).toEqual(heroes.filter((heroes)=>heroes.owner===owner));
        console.log(Heroes);
    });
});