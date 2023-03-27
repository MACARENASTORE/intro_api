// 1.

const obtenerTodo=require('./ClienteAPI')
test(
    'Retorno de datos  de datos api',async ()=>{

        const datos= await obtenerTodo(1);
        expect(datos.albumId).toEqual(1);
    }
);