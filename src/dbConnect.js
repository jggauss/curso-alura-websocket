import { MongoClient } from "mongodb";

let documentosColecao

const cliente = new MongoClient("mongodb+srv://jggauss:010631@cluster0.3qdljhd.mongodb.net/?retryWrites=true&w=majority")
try {
    await cliente.connect()
    const db = cliente.db("alura-websockets")
    documentosColecao = db.collection("documentos")
    console.log("conectado ao banco de dados com sucesso")
} catch (error) {
    console.log(error)
}
export {documentosColecao}