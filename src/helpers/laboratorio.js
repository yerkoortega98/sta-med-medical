

export const evaluacionDireccionSube = ( X,A,B,C,D)=>{


    if( X < A){
        const resultado = "bajito";

        return resultado;
    }else if( A <= X && X < B ){
        const resultado = "bueno";

        return resultado;
    }else if( B <= X && X < C){
        const resultado = "mediocre";

        return resultado;
    }else if( C <= X && X < D ){
        const resultado = "malo";

        return resultado;
    }else if( D <= X){
        const resultado = "peligroso";
        
        return resultado;
    }
}

export const evaluacionDireccionBaja = (X,A,B,C,D)=>{


    if( X >= A){
        const resultado = "bajito";

        return resultado;
    }else if( A > X && X >= B ){
        const resultado = "bueno";

        return resultado;
    }else if( B > X && X >= C){
        const resultado = "mediocre";

        return resultado;
    }else if( C > X && X >= D ){
        const resultado = "malo";

        return resultado;
    }else if( D > X){
        const resultado = "peligroso";
        
        return resultado;
    }
}


export const iconizacionDM = (examen1,examen2,examen3,examen4)=>{

    if( examen1 === "peligroso" || examen2 === "peligroso" || examen3 === "peligroso" || examen4 === "peligroso"){
       
        const resultado = "fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito" || examen2 === "bajito" || examen3 === "bajito" || examen4 === "bajito"){
        
        const resultado = "fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo" || examen2 === "malo" || examen3 === "malo" || examen4 === "malo"){

        const resultado = "fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre" || examen2 === "mediocre" || examen3 === "mediocre" || examen4 === "mediocre"){
        const resultado = "fa-plus fa-minus text-warning "
    }else{
        const resultado = "fa-check text-success";
       
        return resultado;
    }

}

