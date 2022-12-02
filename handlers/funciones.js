module.exports = {
    asegurar,
}

async function asegurar(schema, id, id2, objeto){
    let data = await schema.findOne({id: id2})
    if(!data){
        console.log("No se encontro una base de datos...")
        data = await new schema(objeto);
        data.save();
    }
    return data;
}