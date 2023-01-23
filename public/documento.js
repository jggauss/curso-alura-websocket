import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js"

const parametros = new URLSearchParams(window.location.search)


const nomeDocumento = parametros.get("nome")

const tituloDocumento = document.getElementById("titulo-documento")
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
export {atualizaTextoEditor}