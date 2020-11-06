

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

