
// Iconos Compensacion
export const calcCompesacionHTA = (PAS,PAD)=>{

    if( PAS < 90 && PAS> 60){
        
        const resultado = "fas fa-arrow-down text-danger";
        
        
        return resultado;

    }else if ( (PAS >= 140 && PAS < 140) || ( PAD >= 60 &&  PAD < 90) ) {
        // Verde
        const resultado = "fas fa-check text-success";
       
        return resultado;

    } else if( (PAS >= 150 && PAS < 180) || PAS < 90){
        const resultado = "fas fa-times text-danger";
      
        return resultado;

    } else if ( PAS >= 180 || PAD >=110 ){
        // Alarma
        const resultado = "fas fa-exclamation-triangle text-warning";
       
        
        return resultado;
    }
  
}

export const calcCompensacionDiabetes = (hbglic, glicemia)=>{
    
    if( hbglic < 5 && ( glicemia === null || glicemia < 70)){
        const resultado = "fas fa-arrow-down text-danger";

        return resultado;

    }else if ( ( hbglic >= 5 && hbglic < 7 ) && ( glicemia === null || ( glicemia >= 70 || glicemia < 140 )) ) {

        const resultado = 'fas fa-check text-success';

        return resultado;

    }else if( ( hbglic >= 7 && hbglic < 9 ) || ( glicemia >= 140 && glicemia < 200 )){

        const resultado = 'far fa-circle text-warning';

        return resultado;

        
    }else if( (hbglic >= 9 && hbglic < 12 ) || ( glicemia >= 200 && glicemia < 350 )){
        

        const resultado = 'fas fa-times text-danger';

        return resultado;

    }else if(hbglic >= 12 || glicemia >= 350 ){
        // Alarma
        const resultado = 'fas fa-exclamation-triangle text-warning';

        return resultado;
    }
}

export const calcCompensacionDilipdemia = ( CT,TG,LDL,HDL,Sexo )=>{

    const valor = () => {
        if(Sexo === 'Masculino'){
            const HDLVerde=40;
            const HDLInfAmarillo=30;
            const HDLSupAmarillo=40;
            const HDLInfRojo=20;
            const HDLSupRojo=30;
            const HDLAlarma= 20;
            return {HDLVerde,HDLInfAmarillo, HDLSupAmarillo,HDLInfRojo,HDLSupRojo,HDLAlarma};
        } else if(Sexo === 'Femenino'){
            const HDLVerde=50;
            const HDLInfAmarillo=35;
            const HDLSupAmarillo=50;
            const HDLInfRojo=25;
            const HDLSupRojo=35;
            const HDLAlarma= 25;
    
            return {HDLVerde,HDLInfAmarillo,HDLSupAmarillo,HDLInfRojo,HDLSupRojo,HDLAlarma};
        };
    }
    const ValorSexo = valor();
    
    const { HDLVerde,HDLInfAmarillo, HDLSupAmarillo,HDLInfRojo,HDLSupRojo,HDLAlarma } = ValorSexo;
    

    if( CT < 200 && (HDL >= HDLVerde) && LDL < 130 && TG < 150){
        
        
        const resultado = "fas fa-check text-success";

        return resultado;

    }else if (  ( CT >= 200 && CT < 240) || (( HDL >= HDLInfAmarillo || HDL < HDLSupAmarillo ) || (LDL >= 130 && LDL < 160 ) || (TG >= 150 && TG < 200)) ) {
    
            const resultado = "far fa-circle text-warning";

            return resultado;

    }else if ( ((CT === null || (CT >= 240 && CT < 300 )) || ( HDL === null || (( HDL >= HDLInfRojo && HDL < HDLSupRojo))) || ((LDL === null || (LDL >= 160 && LDL < 190))|| (TG === null || (TG >= 200 && TG < 450)) ) )){
        
        const resultado = "fas fa-times text-danger";

        return resultado;
        
    }else if( (CT > 300) || (HDL < { HDLAlarma } ) || (LDL >= 190) || ( TG > 450 ) ){
        
        
        const resultado = "fas fa-exclamation-triangle text-warning"

        return resultado;
    }
}

export const calcCompensacionHipotiroihismo = ( TSH, T4L) => {

    if ( TSH < 0.5 || ( T4L === null || T4L > 1.85 )){
        const resultado = "fas fa-arrow-down text-danger";
        
        return resultado;
    } else if ( (TSH >= 0.5 && TSH <= 4.5) && ( T4L === null ||  ( T4L >= 0.71 && T4L <= 1.85 )) ) {
        const resultado = "fas fa-check text-success";
        
        return resultado;
    } else if( TSH > 4.5 && TSH < 10 && (T4L === null || ( T4L >= 0.71 && T4L <= 1.85))){
        
        const resultado = "far fa-circle text-warning";
        
        return resultado;
    }else if( (TSH >= 10 && TSH <20) || T4L < 0.71) {

        const resultado = "fas fa-times text-danger";
        
        return resultado;
    }else if ( TSH <= 20 || T4L < 0.71){

        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }
}

export const calcCompensacionInsuficienciaRenal = ( uremia, VFG, microalbuminuria, nureico ) => {


    if( uremia < 15 ){
        
        const resultado = "fas fa-arrow-down text-danger";

        return resultado;
        
    
    } else if( VFG >= 60 && (microalbuminuria === null || microalbuminuria < 15 ) && (uremia===null || uremia <= 40) && ( nureico === null || nureico <= 20)){
        
        const resultado = "fas fa-check text-success";
            
        return resultado;

    }else if( (VFG >= 45 && VFG < 60) || microalbuminuria > 15 || ( uremia > 40 && uremia <= 60)|| (nureico > 19 && nureico <= 28) ){
       

        const resultado = "far fa-circle text-warning";
        
        return resultado;

    }else if( (VFG >= 30 && VFG < 45) || (uremia > 60 && uremia <= 80) || (nureico > 28 && nureico <= 38) ){
        

        const resultado = "fas fa-times text-danger";
        
        return resultado;

    } else if( VFG < 30 || uremia > 80 || nureico > 38 ){
        
        // Alarma
        const resultado = "fas fa-exclamation-triangle text-warning";
        
        return resultado;
    }
}

export const calcCompensacionEpilepsia = ( PTJE ) =>{

    if(PTJE === 0){

        const resultado = "fas fa-check text-success";

        return resultado;
        
    }else if(PTJE > 0 && PTJE <= 3){
        const resultado = "far fa-circle text-warning";

        return resultado;
        
        
    }else if(PTJE > 3 && PTJE <= 5){
        const resultado = "fas fa-times text-danger";

        return resultado;
    }else if(PTJE > 5){
        const resultado = "fas fa-exclamation-triangle text-warning";

        return resultado;
        
    }
}

export const calcCompensacionParkinson = ( temblor,equilibrio,rigidez,lento,arrastre,suma)=> {

    if( (temblor <= 1) && ( equilibrio <= 1) && ( rigidez <= 1) && (lento <=1) && (arrastre <= 1) && (suma <=3 )){
        const resultado = "fas fa-check text-success";

        return resultado;
    } else if( (temblor <= 2) && ( equilibrio <= 2) && ( rigidez <= 2 ) && ( lento <= 2) && (arrastre <=2 ) && (suma > 4 && suma <= 5)){
        const resultado = "fas fa-arrow-down text-danger";

        return resultado;
    }else if( suma > 5){
        const resultado = "fas fa-exclamation-triangle text-warning";

        return resultado;
    }
}

export const calcCompensacionAsma = ( PTJE ) =>{
   
    if(PTJE === 0){
        const resultado = "fas fa-check text-success";
        
        return resultado;
    }else if(PTJE > 0 && PTJE < 3){
        const resultado = "far fa-circle text-warning";

        return resultado;
    }else if(PTJE >= 3 && PTJE < 5){
        const resultado = "fas fa-times text-danger";

        return resultado;
    }else if(PTJE >= 5){
        const resultado = "fas fa-exclamation-triangle text-warning";

        return resultado;
    }
}

export const calcCompensacionArtrosis = (PTJE, Rx,D,C,B,I)=>{

    if(PTJE <= 1 && Rx === null){
        const resultado = "fas fa-check text-success";

        return resultado;
    }else if( D === 2 || C === 2 || B === 2 || I === 2 || ( PTJE > 1 && PTJE <= 4) || ( Rx === null || Rx === true)){
        const resultado = "far fa-circle text-warning";

        return resultado;
    }else if( D === 3 || C === 3 || B === 3 || I === 3 || (PTJE > 4 && PTJE <=10)|| ( Rx === null || Rx === true)){
        const resultado = "fas fa-times text-danger";

        return resultado;
    }else if( PTJE > 10){
        const resultado = "fas fa-arrow-down text-danger";

        return resultado;
    }
}

export const calcCompensacionEpoc = (PTJE)=>{


    if(PTJE <= 10){
        
        const resultado = "fas fa-check text-success";

        return resultado;

    }else if(PTJE > 10 && PTJE <= 20){
        
        const resultado = "far fa-circle text-warning";

        return resultado;

    }else if(PTJE >= 20 && PTJE < 30){
        
        const resultado = "fas fa-times text-danger";

        return resultado;
    }else if(PTJE > 30){
        
        const resultado = "fas fa-exclamation-triangle text-warning";

        return resultado;
    }
}

// Iconos Preguntas

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

// Iconos Laboratorio


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





