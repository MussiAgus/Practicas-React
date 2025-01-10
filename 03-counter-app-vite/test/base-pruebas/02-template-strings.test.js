/* eslint-disable no-undef */

import {getSaludo} from '../../src/base-pruebas/02-template-string'

    
test("getSaludo debe retornar -Hola Agustin-", ()=>{
    const name= "Agus";
    const mensaje= getSaludo(name);
    expect(mensaje).toBe(`Hola ${name}`);
});


