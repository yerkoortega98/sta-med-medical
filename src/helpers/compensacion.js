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
        ( CT >= 200 && CT < 240) ||
        (( HDL >= HDLInfAmarillo || HDL < HDLSupAmarillo ) || (LDL >= 130 && LDL < 160 ) || (TG >= 150 && TG < 200)) ) {
        console.log('Amarillo')
    }else if ( ((CT === null || (CT >= 240 && CT < 300 )) || 
                ( HDL === null || (( HDL >= HDLInfRojo && HDL < HDLSupRojo))) || 
                ((LDL === null || (LDL >= 160 && LDL < 190))|| (TG === null || (TG >= 200 && TG < 450)) ) )){
        console.log('X Rojo')
    }else if( (CT > 300) || (HDL < { HDLAlarma } ) || (LDL >= 190) || ( TG > 450 ) ){
        console.log('Alarma')
    }
}

