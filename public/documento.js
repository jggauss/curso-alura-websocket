import { emitirTextoEditor, selecionarDocumento,emitirExcluirDocumento } from "./socket-front-documento.js"

const parametros = new URLSearchParams(window.location.search)


const nomeDocumento = parametros.get("nome")
const tituloDocumento = document.getElementById("titulo-documento")
const botaoExcluir = document.getElementById("excluir-documento")

tituloDocumento.textContent = nomeDocumento || "Documento sem título"
selecionarDocumento(nomeDocumento)

const socket= io()
const textEditor = document.getElementById("editor-texto")
 
textEditor.addEventListener("keyup",()=>{
   emitirTextoEditor({
    texto :textEditor.value,
    nomeDocumento
   })
})
function atualizaTextoEditor(texto){
    textEditor.value = texto
}

botaoExcluir.addEventListener("click",()=>{
    emitirExcluirDocumento(nomeDocumento)
})

function alertarERedirecionar(nome){
    if(nome===nomeDocumento){
        alert(`Documento ${nome} excluído`)
        window.location.href="/"
    
    }
}

export {atualizaTextoEditor,alertarERedirecionar}