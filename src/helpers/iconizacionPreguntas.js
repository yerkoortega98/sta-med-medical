export const iconizacionSintomas = (puntajeSintomas) => {
    if(puntajeSintomas <= 0.2) {
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }else if(puntajeSintomas > 0.2 && puntajeSintomas  <= 0.7) {
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else if(puntajeSintomas > 0.7 && puntajeSintomas <2) {
        const resultado = "fas fa-times text-danger";
      
        return resultado;
    }else if(puntajeSintomas >= 2) {
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }
}