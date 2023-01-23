import {iserirLinkDocumento, removerLinkdocumento} from "./index.js"
 const socket = io()

socket.emit("obter_documentos",(documentos)=>{
    documentos.forEach((documento)=>{
        iserirLinkDocumento(documento.nome)
    })
})
function emitirAdicionarDocumento(nome){
    socket.emit("adicionar_documento",nome)
}

socket.on("adicionar_documento_interface",(nome)=>{
    iserirLinkDocumento(nome)
})

socket.on("documento_existente",(nome)=>{
    alert(`O documento ${nome} já existe`)
})
socket.on("excluir_documento_sucesso",(nome)=>{
    removerLinkdocumento(nome)
})

export {emitirAdicionarDocumento}