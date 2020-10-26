const { useState } = require("react")
const { hydrate } = require("react-dom")



const calcCompesacionHTA = (PAS,PAD)=>{

    if( PAS < 90 && PAS> 60){
        console.log('Flecha abajo')
    }else if ((PAS >= 140 && PAS < 140) || ( PAD >= 60 &&  PAD < 90) ) {
        console.log('Verde')
    } else if( (PAS >= 150 && PAS < 180) || PAS < 90){
        console.log('X Rojo')
    } else if ( PAS >= 180 || PAD >=110 ){
        console.log('Alarma')
    }
}

const calcCompensacionDiabetes = (hbglic, glicemia)=>{
    if( hbglic < 5 && ( glicemia === null || glicemia < 70)){
        console.log('Flecha bajo')
    }else if ( ( hbglic >= 5 && hbglic < 7 ) && ( glicemia === null || ( glicemia >= 70 || glicemia < 140 )) ) {
        console.log('Verde')
    }else if( ( hbglic >= 7 && hbglic < 9 ) || ( glicemia >= 140 && glicemia < 200 )){
        console.log('Amarillo')
    }else if( (hbglic >= 9 && hbglic < 12 ) || ( glicemia >= 200 && glicemia < 350 )){
        console.log('X Rojo')
    }else if(hbglic >= 12 || glicemia >= 350 ){
        console.log('Alarma')
    }
}

const calcCompensacionDilipdemia = (CT,TG,LDL,HDL,Sexo)=>{

    if(Sexo === 'Masculino'){
        const HDLVerde=40;
        const HDLInfAmarillo=30;
        const HDLSupAmarillo=40;
        const HDLInfRojo=20;
        const HDLSupRojo=30;
        const HDLAlarma= 20;
        return HDLVerde,HDLInfAmarillo, HDLSupAmarillo,HDLInfRojo,HDLSupRojo,HDLAlarma;
    } else if(Sexo === 'Femenino'){
        const HDLVerde=50;
        const HDLInfAmarillo=35;
        const HDLSupAmarillo=50;
        const HDLInfRojo=25;
        const HDLSupRojo=35;
        const HDLAlarma= 25;

        return HDLVerde,HDLInfAmarillo,HDLSupAmarillo,HDLInfRojo,HDLSupRojo,HDLAlarma;
    };

    if( CT < 200 && (HDL >= HDLVerde) && LDL < 130 && TG < 150){
        
        console.log('Verde')

    }else if ( 
        ( CT >= 200 && CT < 240) || (( HDL >= HDLInfAmarillo || HDL < HDLSupAmarillo ) || (LDL >= 130 && LDL < 160 ) || (TG >= 150 && TG < 200)) ) {
        
            console.log('Amarillo')

    }else if ( ((CT === null || (CT >= 240 && CT < 300 )) || ( HDL === null || (( HDL >= HDLInfRojo && HDL < HDLSupRojo))) || ((LDL === null || (LDL >= 160 && LDL < 190))|| (TG === null || (TG >= 200 && TG < 450)) ) )){
        
        console.log('X Rojo')
        
    }else if( (CT > 300) || (HDL < { HDLAlarma } ) || (LDL >= 190) || ( TG > 450 ) ){
        
        console.log('Alarma')
    }
}

const calcCompensacionHipotiroihismo = ( TSH, T4L) => {

    if ( TSH < 0.5 || ( T4L === null || T4L > 1.85 )){
        console.log('Flecha bajo')
    } else if ( (TSH >= 0.5 && TSH <= 4.5) && ( T4L === null ||  ( T4L >= 0.71 && T4L <= 1.85 )) ) {
        console.log('Verde')
    } else if( TSH > 4.5 && TSH < 10 && (T4L === null || ( T4L >= 0.71 && T4L <= 1.85))){
        console.log('Amarillo')
    }else if( (TSH >= 10 && TSH <20) || T4L < 0.71) {
        console.log('X Roja')
    }else if ( TSH <= 20 || T4L < 0.71){
        console.log('Alarma')
    }
}

const calcCompensacionInsuficienciaRenal = ( uremia, VFG, microalbuminuria, nureico ) => {

   

    if( uremia < 15 ){
        console.log('Flecha abajo')
    } else if( VFG >= 60 && (microalbuminuria === null || microalbuminuria < 15 ) && (uremia===null || uremia <= 40) && ( nureico === null || nureico <= 20)){
        console.log('Verde')
    }else if( (VFG >= 45 && VFG < 60) || microalbuminuria > 15 || ( uremia > 40 && uremia <= 60)|| (nureico > 19 && nureico <= 28) ){
        console.log('Amarillo')
    }else if( (VFG >= 30 && VFG < 45) || (uremia > 60 && uremia <= 80) || (nureico > 28 && nureico <= 38) ){
        console('X Roja')
    } else if( VFG < 30 || uremia > 80 || nureico > 38 ){
        console.log('Alarma')
    }
}

const calcCompensacionEpilepsia = ( PTJE ) =>{

    if(PTJE === 0){
        console.log('Verde')
    }else if(PTJE > 0 && PTJE <= 3){
        console.log('Amarillo')
    }else if(PTJE > 3 && PTJE <= 5){
        console.log('Rojo')
    }else if(PTJE > 5){
        console.log('Alarma')
    }
}

const calcCompensacionParkinson = ( temblor,equilibrio,rigidez,lento,arrastre,suma)=> {

    if( (temblor <= 1) && ( equilibrio <= 1) && ( rigidez <= 1) && (lento <=1) && (arrastre <= 1) && (suma <=3 )){
        console.log('Verde')
    } else if( (temblor <= 2) && ( equilibrio <= 2) && ( rigidez <= 2 ) && ( lento <= 2) && (arrastre <=2 ) && (suma > 4 && suma <= 5)){
        console.log('X Roja')
    }else if( suma > 5){
        console.log('Alarma')
    }
}

const calcCompensacionAsma = ( PTJE) =>{
   
    if(PTJE === 0){
        console.log('Verde')
    }else if(PTJE > 0 && PTJE < 3){
        console.log('Amarillo')
    }else if(PTJE >= 3 && PTJE < 5){
        console.log('Rojo')
    }else if(PTJE > 5){
        console.log('Alarma')
    }
}

const calcCompensacionArtrosis = (PTJE, Rx,D,C,B,I)=>{

    if(PTJE <= 1 && Rx === null){
        console.log('Verde')
    }else if( D === 2 || C === 2 || B === 2 || I === 2 || ( PTJE > 1 && PTJE <= 4) || ( Rx === null || Rx === true)){
        console.log('Amarrillo')
    }else if( D === 3 || C === 3 || B === 3 || I === 3 || (PTJE > 4 && PTJE <=10)|| ( Rx === null || Rx === true)){
        console.log('Rojo')
    }else if( PTJE > 10){
        console.log('Alarma')
    }
}

const calCompensacionEpoc = (PTJE)=>{


    if(PTJE <= 10){
        console.log('Verde')
    }else if(PTJE > 10 && PTJE <= 20){
        console.log('Amarillo')
    }else if(PTJE >= 20 && PTJE < 30){
        console.log('Rojo')
    }else if(PTJE > 30){
        console.log('Alarma')
    }
}






