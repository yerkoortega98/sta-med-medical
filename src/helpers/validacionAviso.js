export const validacionAvisos = (aviso) => {
    if(aviso){
        const resultado = aviso.molestia;
        return resultado;
    }else{
        const resultado = "Ninguno";
        return resultado;
    }
}