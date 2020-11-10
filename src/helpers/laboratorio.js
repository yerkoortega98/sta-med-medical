

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


export const iconizacionDM = (examen1,examen2,examen3,examen4,examen5,examen6,examen7)=>{

    if( examen1 === "peligroso" || examen2 === "peligroso" || examen3 === "peligroso" || examen4 === "peligroso" || examen5 === "peligroso" || examen6 === "peligroso" || examen7 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito" || examen2 === "bajito" || examen3 === "bajito" || examen4 === "bajito" || examen5 === "bajito" || examen6 === "bajito" || examen7 === "bajito"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo" || examen2 === "malo" || examen3 === "malo" || examen4 === "malo" || examen5 === "malo" || examen6 === "malo" || examen7 === "malo"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre" || examen2 === "mediocre" || examen3 === "mediocre" || examen4 === "mediocre" || examen5 === "mediocre" || examen6 === "mediocre" || examen7 === "mediocre"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }

}

export const iconizacionHipotir = (examen1, examen2, examen3, examen4, examen5) => {

    if( examen1 === "peligroso" || examen2 === "peligroso" || examen3 === "peligroso" || examen4 === "peligroso" || examen5 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito" || examen2 === "bajito" || examen3 === "bajito" || examen4 === "bajito" || examen5 === "bajito"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo" || examen2 === "malo" || examen3 === "malo" || examen4 === "malo" || examen5 === "malo"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre" || examen2 === "mediocre" || examen3 === "mediocre" || examen4 === "mediocre" || examen5 === "mediocre"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }

}

export const iconizacionIRC = (examen1, examen2, examen3, examen4, examen5, examen6) => {

    if( examen1 === "peligroso" || examen2 === "peligroso" || examen3 === "peligroso" || examen4 === "peligroso" || examen5 === "peligroso" || examen6 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito" || examen2 === "bajito" || examen3 === "bajito" || examen4 === "bajito" || examen5 === "bajito" || examen6 === "peligroso"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo" || examen2 === "malo" || examen3 === "malo" || examen4 === "malo" || examen5 === "malo" || examen6 === "peligroso"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre" || examen2 === "mediocre" || examen3 === "mediocre" || examen4 === "mediocre" || examen5 === "mediocre" || examen6 === "peligroso"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}

export const iconizacionDisAte = (examen1, examen2, examen3, examen4, examen5, examen6, examen7) => {

    if( examen1 === "peligroso" || examen2 === "peligroso" || examen3 === "peligroso" || examen4 === "peligroso" || examen5 === "peligroso" || examen6 === "peligroso" || examen7 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito" || examen2 === "bajito" || examen3 === "bajito" || examen4 === "bajito" || examen5 === "bajito" || examen6 === "peligroso" || examen7 === "peligroso"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo" || examen2 === "malo" || examen3 === "malo" || examen4 === "malo" || examen5 === "malo" || examen6 === "peligroso" || examen7 === "peligroso"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre" || examen2 === "mediocre" || examen3 === "mediocre" || examen4 === "mediocre" || examen5 === "mediocre" || examen6 === "peligroso" || examen7 === "peligroso"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}

export const iconizacionHTA = (examen1, examen2, examen3, examen4, examen5, examen6, examen7) => {

    if( examen1 === "peligroso" || examen2 === "peligroso" || examen3 === "peligroso" || examen4 === "peligroso" || examen5 === "peligroso" || examen6 === "peligroso" || examen7 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito" || examen2 === "bajito" || examen3 === "bajito" || examen4 === "bajito" || examen5 === "bajito" || examen6 === "peligroso" || examen7 === "peligroso"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo" || examen2 === "malo" || examen3 === "malo" || examen4 === "malo" || examen5 === "malo" || examen6 === "peligroso" || examen7 === "peligroso"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre" || examen2 === "mediocre" || examen3 === "mediocre" || examen4 === "mediocre" || examen5 === "mediocre" || examen6 === "peligroso" || examen7 === "peligroso"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}

export const iconizacionEpi = (examen1, examen2, examen3, examen4, examen5, examen6, examen7) => {

    if( examen1 === "peligroso" || examen2 === "peligroso" || examen3 === "peligroso" || examen4 === "peligroso" || examen5 === "peligroso" || examen6 === "peligroso" || examen7 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito" || examen2 === "bajito" || examen3 === "bajito" || examen4 === "bajito" || examen5 === "bajito" || examen6 === "peligroso" || examen7 === "peligroso"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo" || examen2 === "malo" || examen3 === "malo" || examen4 === "malo" || examen5 === "malo" || examen6 === "peligroso" || examen7 === "peligroso"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre" || examen2 === "mediocre" || examen3 === "mediocre" || examen4 === "mediocre" || examen5 === "mediocre" || examen6 === "peligroso" || examen7 === "peligroso"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}

export const iconizacionPark = (examen1) => {

    if( examen1 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}

export const iconizacionAsma = (examen1) => {

    if( examen1 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}

export const iconizacionArtrosis = (examen1) => {

    if( examen1 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre"){
        const resultado = "far fa-circle fa-minus text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}

export const iconizacionEpoc = (examen1) => {

    if( examen1 === "peligroso"){
       
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }else if (examen1 === "bajito"){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    }else if(examen1 === "malo"){

        const resultado = "fas fa-times text-danger";
      
        return resultado;

    }else if(examen1 === "mediocre"){
        const resultado = "far fa-circle text-warning "

        return resultado;
    }else{
        const resultado = "fas fa-check text-success";
       
        return resultado;
    }
}