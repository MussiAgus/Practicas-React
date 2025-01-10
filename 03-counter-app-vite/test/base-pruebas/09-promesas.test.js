import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import { heroes } from "../../src/data/heroes";
import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas con async/await", ()=>{
    
    test("getHeroeByIdAsync debe retornar un heroe", (done)=>{
        
        const id=3;
        getHeroeByIdAsync(id)
            .then(heroe=>{
                expect(heroe).toEqual(getHeroeById(id));
            done();
        });
        
    });
});

//alma esta nada mas un poco pero muy poquito loca

