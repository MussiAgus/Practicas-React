
import { getImagen } from "../../src/base-pruebas/11-async-await"

describe("Pruebas con async/await", ()=>{
    test("Debe devolver la url", async()=>{
        const url=await getImagen();
        expect(typeof url).toBe("string");
        //console.log(url);
    })
})

