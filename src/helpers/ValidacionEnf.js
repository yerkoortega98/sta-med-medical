import { calcCompensacionDiabetes, calcCompensacionEpilepsia, calcCompensacionHipotiroihismo, calcCompensacionInsuficienciaRenal, 
         calcCompesacionHTA,calcCompensacionParkinson,calcCompensacionAsma,calcCompensacionEpoc,calcCompensacionArtrosis, calcCompensacionDilipdemia,
         iconizacionSintomas,iconizacionDM, iconizacionEpoc, iconizacionHipotir, iconizacionIRC,  iconizacionDisAte, iconizacionHTA, 
         iconizacionEpi, iconizacionPark, iconizacionAsma, iconizacionArtrosis
 } from './iconos';

import { validarInfoExamen, validarInfoPreguntas, validarParametrosComp,validacionAvisos} from './validaciones'

export const iconizacionEnf=(nombreEnfermedad,compensacion,laboratorio, tratamiento, preguntas, avisos,sintomas,peso,edad, nutricion)=>{
       
    if(nombreEnfermedad === 'DM'){
         // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'DM');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'DM');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'DM');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'DM');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'DM');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        // Validacion pregunta 5
        const pregunta5 = respuestaPreg[4];
        const puntajeRespuesta5 = validarInfoPreguntas(resPreguntas,pregunta5);
        const nutricion5 = resNutricion[4];
        const puntajeNutricion5 = validarInfoPreguntas(resPreguntas, nutricion5);

        // Validacion pregunta 6
        const pregunta6 = respuestaPreg[5];
        const puntajeRespuesta6 = validarInfoPreguntas(resPreguntas,pregunta6);
        const nutricion6 = resNutricion[5];
        const puntajeNutricion6 = validarInfoPreguntas(resPreguntas, nutricion6);

        // Validacion pregunta 7
        const pregunta7= respuestaPreg[6];
        const puntajeRespuesta7 = validarInfoPreguntas(resPreguntas,pregunta7);
        const nutricion7 = resNutricion[6];
        const puntajeNutricion7 = validarInfoPreguntas(resPreguntas, nutricion7);

        // Validacion pregunta 8
        const pregunta8 = respuestaPreg[7];
        const puntajeRespuesta8 = validarInfoPreguntas(resPreguntas,pregunta8);
        const nutricion8 = resNutricion[7];
        const puntajeNutricion8 = validarInfoPreguntas(resPreguntas, nutricion8);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4)+(puntajeRespuesta5)+(puntajeRespuesta6)+(puntajeRespuesta7)+(puntajeRespuesta8);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4)+(puntajeNutricion5)+(puntajeNutricion6)+(puntajeNutricion7)+(puntajeNutricion8);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
      
        // Calculo de laboratorio    
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'DM');
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        
        // Validacion examen 2
        const examen2 = respLab[1];
        const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
        
        // Validacion examen 3
        const examen3 = respLab[2];            
        const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
        
        // Validacion examen 4
        const examen4 = respLab[3];
        const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
        
        // Validacion examen 5
        const examen5 = respLab[4];
        const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
        
        // Validacion examen 6
        const examen6 = respLab[5];
        const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen(examen6,compensacion);
        
        // Validacion examen 7
        const examen7 = respLab[6];
        const {resultado:dataExamen7,infoLaboratorio:laboratorio7} = validarInfoExamen(examen7,compensacion);
        
        const resultadoLaboratorio = iconizacionDM(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6,dataExamen7)

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        // ------------------------------------------------------------------------------------------------------------------------------------------\\
        // Calculo para la compensacion

        // Validacion de parametro Hemoglobina
        const respuesta = compensacion.filter(com => com.nombre_param === 'Hemoglobina glicosilada')
        const parametroHemoglobina = respuesta[0];
        const hbglic = validarParametrosComp(parametroHemoglobina);

        // Validacion de parametro Glicemia
        const respuesta2 = compensacion.filter(com => com.nombre_param === 'Glicemia')
        const parametroGlicemia = respuesta2[0];
        const glicemia = validarParametrosComp(parametroGlicemia);
        
        const parametrosCompensacion = [
            {
                nombre_param:'Glicemia',
                valor:glicemia
            },{
                nombre_param:'Hemoglobica Glicosilada',
                valor:hbglic
            }
        ]

        const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5,laboratorio6,laboratorio7]

        const resultado = calcCompensacionDiabetes(hbglic, glicemia);

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]
    
        return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};
        
    }else if(nombreEnfermedad === 'Hipotir'){
         // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Hipotir');

        // Calculo de laboratorio           
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Hipotir');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Hipotir');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Hipotir');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'Hipotir');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'Hipotir');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        
        // Validacion examen 2
        const examen2 = respLab[1];
        const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
        
        // Validacion examen 3
        const examen3 = respLab[2];
        const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
       
        // Validacion examen 4
        const examen4 = respLab[3];
        const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
        
        // Validacion examen 4
        const examen5 = respLab[4];
        const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
        
        const resultadoLaboratorio = iconizacionHipotir(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5); 
        
        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        // ------------------------------------------------------------------------------------------------------------------------------------------\\
        // calculoCompensacion.
        const respuestaTSH = compensacion.filter(com => com.nombre_param === 'TSH');
        const parametroTSH = respuestaTSH[0];
        const TSH = validarParametrosComp(parametroTSH);
        
        const respuestaT4L = compensacion.filter(com => com.nombre_param === 'T4 libre');
        const parametroT4L = respuestaT4L[0];   
        const T4L = validarParametrosComp(parametroT4L);
        
        const parametrosCompensacion=[
            {
                nombre_param:'T4L',
                valor:T4L
            },{
                nombre_param:'TSH',
                valor:TSH
            }
        ]

        const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5];

        const resultado = calcCompensacionHipotiroihismo( TSH, T4L );

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]
       
        return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'IRC'){
         // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'IRC');
        
        // ------------------------------------------------------------------------------------------------------------------------------------------\\
        // Calculo de laboratorio
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'IRC');

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'IRC');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'IRC');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'IRC');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        // Validacion pregunta 5
        const pregunta5 = respuestaPreg[4];
        const puntajeRespuesta5 = validarInfoPreguntas(resPreguntas,pregunta5);
        const nutricion5 = resNutricion[4];
        const puntajeNutricion5 = validarInfoPreguntas(resPreguntas, nutricion5);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4)+(puntajeRespuesta5);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4)+(puntajeNutricion5);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'IRC');

        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        
        // Validacion examen 2
        const examen2 = respLab[1];
        const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
        
        // Validacion examen 3
        const examen3 = respLab[2];
        const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
                 
        // Validacion examen 4
        const examen4 = respLab[3];
        const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
        // Validacion examen 5
        const examen5 = respLab[4];
        const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
       
        // Validacion examen 6
        const examen6 = respLab[5];
        const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen(examen6,compensacion);
        
        const resultadoLaboratorio = iconizacionIRC(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6);
        
        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();

        // calculoCompensacion.
        const respuestaHombre = compensacion.filter(com => com.nombre_param === 'Creatinina hombre')
        const validacionSexoHombre = respuestaHombre[0];

        const respuestaMujer = compensacion.filter(com => com.nombre_param === 'Creatinina mujer')
        const validacionSexoMujer = respuestaMujer[0];

        const sexo = ()=>{
            if(validacionSexoHombre){
                
                const {valor:creatinina} = validacionSexoHombre;

                const VFG= ((140-edad)*peso)/(72*creatinina);
                return VFG;
                
            }else if(validacionSexoMujer){
                
                const {valor:creatinina} = validacionSexoMujer;
                
                const VFG = ((140-edad)*peso*(0.85))/(72*creatinina);
                return VFG;
            }
        }

        const VFG = sexo();
        
        // Validacion de parametro microAlbuminuria
        const respuestaMicroalb = compensacion.filter(com => com.nombre_param === 'Microalbuminuria')
        const parametroMicroalb = respuestaMicroalb[0]           
        const microalbuminuria =  validarParametrosComp(parametroMicroalb);
        
        // Validacion de parametros Uremia
        const respuestaUremia = compensacion.filter(com => com.nombre_param === 'Uremia')
        const parametroUremia = respuestaUremia[0]
        const uremia =  validarParametrosComp(parametroUremia);
        
        // Validacion de parametros Nureico.
        const respuestaNureico = compensacion.filter(com => com.nombre_param === 'Nitrogeno ureico')
        const parametroNureico = respuestaNureico[0];
        const nureico =  validarParametrosComp(parametroNureico);

        const parametrosCompensacion = [
            {
                nombre_param:'Microalbuminuria',
                valor:microalbuminuria
            },{
                nombre_param:'Nitrogeno Ureico',
                valor:nureico
            },{
                nombre_param:'Uremia',
                valor:uremia
            },{
                nombre_param:'VFG',
                valor:VFG
            }
        ]

        const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5,laboratorio6]

        const resultado = calcCompensacionInsuficienciaRenal( uremia, VFG, microalbuminuria, nureico );

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]
      
        return {resultado, resultadoLaboratorio, resTratamiento, parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'Dis/ATE'){
         // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Dis/ATE');
        
        // Calculo de laboratorio
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Dis/ATE');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Dis/ATE');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Dis/ATE');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'Dis/ATE');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'Dis/ATE');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[0];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        
        // Validacion examen 2
        const examen2 = respLab[1];
        const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
        // Validacion examen 3
        const examen3 = respLab[2];
        const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
        // Validacion examen 4
        const examen4 = respLab[3];
        const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
        // Validacion examen 5
        const examen5 = respLab[4];
        const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
        // Validacion examen 6
        const examen6 = respLab[5];
        const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen(examen6,compensacion);
        
        // Validacion examen 7
        const examen7 = respLab[6];
        const {resultado:dataExamen7,infoLaboratorio:laboratorio7} = validarInfoExamen(examen7,compensacion);

        const resultadoLaboratorio = iconizacionDisAte(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6, dataExamen7);

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        // ------------------------------------------------------------------------------------------------------------------------------------------\\
        // ------------------------------------------------------------------------------------------------------------------------------------------\\
        // ------------------------------------------------------------------------------------------------------------------------------------------\\
        // calculoCompensacion.
        
        const respuestaHombre = compensacion.filter(com => com.nombre_param === 'HDL hombres')
        const validacionSexoHombre = respuestaHombre[0];
        
        const respuestaMujer = compensacion.filter(com => com.nombre_param === 'HDL mujeres')
        const validacionSexoMujer = respuestaMujer[0];
        const validacionSexo = ()=>{
            if(validacionSexoHombre){
                const {valor:HDL} = validacionSexoHombre;
                const sexo = 'Masculino'
                
                return {HDL,sexo};
            }else if(validacionSexoMujer){
                const {valor:HDL} = validacionSexoMujer;
                const sexo = 'Femenino'
                
                return {HDL,sexo};
            }else{
                const HDL=0;
                const sexo='Masculino'
                
                return {HDL,sexo}
            }
        }
        
        const {HDL,sexo} = validacionSexo();
        
        const respuestaLDL = compensacion.filter(com => com.nombre_param === 'LDL');
        const parametroLDL = respuestaLDL[0];
        const LDL =  validarParametrosComp(parametroLDL);
        
        const respuestaTG = compensacion.filter(com => com.nombre_param === 'Trigliceridos')
        const parametroTG = respuestaTG[0];
        const TG =  validarParametrosComp(parametroTG);
        
        const respuestaCT = compensacion.filter(com => com.nombre_param === 'Colesterol')
        const parametroCT = respuestaCT[0]
        const CT =  validarParametrosComp(parametroCT);

        const parametrosCompensacion = [
           {
               nombre_param:'Colesterol',
               valor:CT
           },{
               nombre_param:'Trigliceridos',
               valor:TG
           },{
               nombre_param:'LDL',
               valor:LDL
           },{
               nombre_param: 'HDL',
                valor:HDL
           }  
        ]

        const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5, laboratorio6,laboratorio7]

        const resultado = calcCompensacionDilipdemia(CT,TG,LDL,HDL,sexo);

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]

        return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'HTA'){
         // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'HTA');

        //Validacion de laboratorio
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'HTA');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'HTA');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'HTA');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'HTA');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'HTA');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        // Validacion pregunta 5
        const pregunta5 = respuestaPreg[4];
        const puntajeRespuesta5 = validarInfoPreguntas(resPreguntas,pregunta5);
        const nutricion5 = resNutricion[4];
        const puntajeNutricion5 = validarInfoPreguntas(resPreguntas, nutricion5);

        // Validacion pregunta 6
        const pregunta6 = respuestaPreg[5];
        const puntajeRespuesta6 = validarInfoPreguntas(resPreguntas,pregunta6);
        const nutricion6 = resNutricion[5];
        const puntajeNutricion6 = validarInfoPreguntas(resPreguntas, nutricion6);

        // Validacion pregunta 7
        const pregunta7 = respuestaPreg[6];
        const puntajeRespuesta7 = validarInfoPreguntas(resPreguntas,pregunta7);
        const nutricion7 = resNutricion[6];
        const puntajeNutricion7 = validarInfoPreguntas(resPreguntas, nutricion7);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4)+(puntajeRespuesta5)+(puntajeRespuesta6)+(puntajeRespuesta7);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4)+(puntajeNutricion5)+(puntajeNutricion6)+(puntajeNutricion7);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        // Validacion examen 2
        const examen2 = respLab[1];
        const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
        // Validacion examen 3
        const examen3 = respLab[2];
        const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
        // Validacion examen 4
        const examen4 = respLab[3];
        const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
        // Validacion examen 5
        const examen5 = respLab[4];
        const {resultado:dataExamen5,infoLaboratorio:laboratorio5} = validarInfoExamen(examen5,compensacion);
        // Validacion examen 6
        const examen6 = respLab[5];
        const {resultado:dataExamen6,infoLaboratorio:laboratorio6} = validarInfoExamen(examen6,compensacion);
        // Validacion examen 7
        const examen7 = respLab[6];
        const {resultado:dataExamen7,infoLaboratorio:laboratorio7} = validarInfoExamen(examen7,compensacion); 
        
        const resultadoLaboratorio = iconizacionHTA(dataExamen1,dataExamen2,dataExamen3,dataExamen4,dataExamen5,dataExamen6,dataExamen7);

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        //Calculo de compensacion.
        const respuestaPAS = compensacion.filter(com=> com.nombre_param === 'pa_sist');
        const parametroPAS = respuestaPAS[0];
        const PAS =  validarParametrosComp(parametroPAS);
        
        const respuestaPAD = compensacion.filter(com=> com.nombre_param === 'pa_dist');
        const parametroPAD = respuestaPAD[0];
        const PAD =  validarParametrosComp(parametroPAD);
        
        const parametrosCompensacion =[
            {
                nombre_param:'Presion Sistolica',
                valor:PAS
            },
            {
                nombre_param:'Presión Distolica',
                valor:PAD
            }
        ]

        const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4,laboratorio5, laboratorio6,laboratorio7]

        const resultado = calcCompesacionHTA(PAS,PAD);

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]
     
        return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'Epi'){

         // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Epi');
        
        //Validacion de laboratorio
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Epi');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Epi');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Epi');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'Epi');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'Epi');
        
        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);
        

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);
        

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);
        

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        // Validacion examen 2
        const examen2 = respLab[1];
        const {resultado:dataExamen2,infoLaboratorio:laboratorio2} = validarInfoExamen(examen2,compensacion);
        // Validacion examen 3
        const examen3 = respLab[2];
        const {resultado:dataExamen3,infoLaboratorio:laboratorio3} = validarInfoExamen(examen3,compensacion);
        // Validacion examen 4
        const examen4 = respLab[3];
        const {resultado:dataExamen4,infoLaboratorio:laboratorio4} = validarInfoExamen(examen4,compensacion);
        
        const resultadoLaboratorio = iconizacionEpi(dataExamen1,dataExamen2,dataExamen3,dataExamen4);

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        //Calcular comendacion
        const respuestPTJEEpilepsia = compensacion.filter(com=> com.nombre_param === 'PTJEEpilepsia');
        const parametroPTJEEpilepsia = respuestPTJEEpilepsia[0];
        const PTJEEpilepsia =  validarParametrosComp(parametroPTJEEpilepsia);
        
        const parametrosCompensacion = [
            {
                nombre_param:'Puntaje Epilepsia',
                valor:PTJEEpilepsia
            }
        ]
        const parametrosLaboratorio=[laboratorio1,laboratorio2,laboratorio3,laboratorio4]

        const resultado = calcCompensacionEpilepsia(PTJEEpilepsia);

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]
      
        return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'Park'){
         // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Park');
        
        //Validacion de laboratorio
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Park');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Park');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Park');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'Park');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'Park');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        // Validacion pregunta 5
        const pregunta5 = respuestaPreg[4];
        const puntajeRespuesta5 = validarInfoPreguntas(resPreguntas,pregunta5);
        const nutricion5 = resNutricion[4];
        const puntajeNutricion5 = validarInfoPreguntas(resPreguntas, nutricion5);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4)+(puntajeRespuesta5);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4)+(puntajeNutricion5);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        
        const resultadoLaboratorio = iconizacionPark(dataExamen1);

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        //calculo de compensación        
        const respuestaTemblor = compensacion.filter(com => com.nombre_param === 'Temblor');
        const parametroTemblor = respuestaTemblor[0];
        const temblor = validarParametrosComp(parametroTemblor);
        
        const respuestaEquilibrio = compensacion.filter(com => com.nombre_param === 'Problema de equilibrio');
        const parametroEquilibrio = respuestaEquilibrio[0];
        const equilibrio = validarParametrosComp(parametroEquilibrio);
        
        const respuestaRigidez = compensacion.filter(com => com.nombre_param === 'Rigidez muscular');
        const parametroRigidez = respuestaRigidez[0];
        const rigidez = validarParametrosComp(parametroRigidez); 
        
        const respuestaLento = compensacion.filter(com => com.nombre_param === 'Movimiento lento');
        const parametroLento = respuestaLento[0];
        const lento = validarParametrosComp(parametroLento); 
        
        const respuestaArrastre = compensacion.filter(com => com.nombre_param === 'Arrastre de los pies');
        const parametroArrastre = respuestaArrastre[0];
        const arrastre = validarParametrosComp(parametroArrastre); 
        
        const suma = temblor + equilibrio + rigidez + lento + arrastre;
        
        const parametrosCompensacion = [
            {
                nombre_param:'Arrastre',
                valor:arrastre
            },{
                nombre_param:'Temblor',
                valor:temblor
            },{
                nombre_param:'Equilibrio',
                valor:equilibrio
            },{
                nombre_param:'Lento',
                valor:lento
            },{
                nombre_param:'Rigidez',
                valor:rigidez
            }
        ]

        const parametrosLaboratorio=[laboratorio1]

        const resultado = calcCompensacionParkinson( temblor,equilibrio,rigidez,lento,arrastre,suma);

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]
        
        return {resultado, resultadoLaboratorio, resTratamiento, parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'Asma'){
        // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Asma');

        //validacion laboratorio 
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Asma');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Asma');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Asma');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'Asma');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'Asma');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        // Validacion pregunta 5
        const pregunta5 = respuestaPreg[4];
        const puntajeRespuesta5 = validarInfoPreguntas(resPreguntas,pregunta5);
        const nutricion5 = resNutricion[4];
        const puntajeNutricion5 = validarInfoPreguntas(resPreguntas, nutricion5);

        // Validacion pregunta 6
        const pregunta6 = respuestaPreg[5];
        const puntajeRespuesta6 = validarInfoPreguntas(resPreguntas,pregunta6);
        const nutricion6 = resNutricion[5];
        const puntajeNutricion6 = validarInfoPreguntas(resPreguntas, nutricion6);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4)+(puntajeRespuesta5)+(puntajeRespuesta6);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4)+(puntajeNutricion5)+(puntajeNutricion6);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        const resultadoLaboratorio = iconizacionAsma(dataExamen1);

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        //Calcular compensacion
        // Validacion compensacion Parametro Puntaje asma
        const respuestaPTJEAsma = compensacion.filter(com=> com.nombre_param === 'PTJEAsma');
        const parametroPTJEAsma = respuestaPTJEAsma[0];
        const PTJEAsma = validarParametrosComp(parametroPTJEAsma);
        
        //Creacion de arreglo que contiene objetos necesarios para mostrar en el modal de compensacion. 
        const parametrosCompensacion =[
            {
                nombre_param:'PTJEAsma',
                valor:PTJEAsma
            }
        ]

        //Creacion de arreglo que contiene objetos necesarios para mostrar en el modal de laboratorio.
        const parametrosLaboratorio=[laboratorio1]
        
        //Constante que obtiene el resultado del calculo de compensacion de puntaje Asma 
        const resultado = calcCompensacionAsma(PTJEAsma);

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]
      
        return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'Artrosis'){
        // Obtener tratamientos de la enfermedad de artrosis.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'Artrosis');
        
        //validacion laboratorio 
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'Artrosis');

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'Artrosis');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);
        
        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'Artrosis');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'Artrosis');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'Artrosis');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();
        
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        const resultadoLaboratorio = iconizacionArtrosis(dataExamen1);

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        //Calcular compensacion
        const respuestaRx = compensacion.filter(com => com.nombre_param === 'Rx');
        const parametroRx = respuestaRx[0];
        const validarRX = () => {
            if (parametroRx) {
                const Rx = true;
                
                return Rx;
            } else {
                const Rx = false;
                
                return Rx;
            }
        }
        const Rx = validarRX();
        
        // Validacion compensacion Parametro Dolor
        const respuestaDolor = compensacion.filter(com => com.nombre_param === 'Dolor articular');
        const parametroDolor = respuestaDolor[0];
        const D = validarParametrosComp(parametroDolor);
        
        // Validacion compensacion Parametro Crujido
        const respuestaCrujido = compensacion.filter(com => com.nombre_param === 'Crujido articular');
        const parametroCrujido = respuestaCrujido[0];
        const C = validarParametrosComp(parametroCrujido);
        
        // Validacion compensacion Parametro Bloqueo
        const respuestaBloqueo = compensacion.filter(com => com.nombre_param === 'Bloqueo articular');
        const parametroBloqueo = respuestaBloqueo[0];
        const B = validarParametrosComp(parametroBloqueo);
        
        // Validacion compensacion Parametro Inflamación
        const respuestaInflamacion = compensacion.filter(com => com.nombre_param === 'Inflamación articular');
        const parametroInflamacion = respuestaInflamacion[0];
        const I = validarParametrosComp(parametroInflamacion);
        
        // Calcular Puntaje artrosis
        const PTJEArtrosis = D + C + B + I;
        // Creando arreglo de objetos con los parametros necesarios para mostrar en el Modal de Compensación
        const parametrosCompensacion = [
            {
                nombre_param:'Bloqueo',
                valor: B
            },
            {
                nombre_param:'Crujido',
                valor:C
            },{
                nombre_param:'Dolor',
                valor:D
            },{
                nombre_param:'Inflamación',
                valor:I
            }
        ]
        // Creando arreglo de objetos con los parametros necesarios para mostrar en el modal de Laboratorio.
        const parametrosLaboratorio=[laboratorio1]
        // Variable que guarda el resultado del calculo de compensacion.
        const resultado = calcCompensacionArtrosis(PTJEArtrosis,Rx,D,C,B,I);
        // Se retorna cada variable necesaria para ser mostrada y procesada en el HTML.

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]

        return {resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};

    }else if(nombreEnfermedad === 'EPOC'){
         // Obtener tratamientos de la enfermedad de EPOC.
        const resTratamiento = tratamiento.filter(tra => tra.con_cronica  === 'EPOC');

        //filtro para buscar preguntas correspondientes a la condición cronica
        const resPreguntas = preguntas.filter(preg => preg.con_cronica === 'EPOC');
        const respuestaPreg = sintomas.filter(sin => sin.abreviatura === 'EPOC');

        //filtro para buscar preguntas en relación a nutrición.
        const resNutricion = nutricion.filter(nutri => nutri.abreviatura === 'EPOC');

        // Validacion pregunta 1
        const pregunta1 = respuestaPreg[0];
        const puntajeRespuesta1 = validarInfoPreguntas(resPreguntas,pregunta1);
        const nutricion1 = resNutricion[0];
        const puntajeNutricion1 = validarInfoPreguntas(resPreguntas, nutricion1);

        // Validacion pregunta 2
        const pregunta2 = respuestaPreg[1];
        const puntajeRespuesta2 = validarInfoPreguntas(resPreguntas,pregunta2);
        const nutricion2 = resNutricion[1];
        const puntajeNutricion2 = validarInfoPreguntas(resPreguntas, nutricion2);

        // Validacion pregunta 3
        const pregunta3 = respuestaPreg[2];
        const puntajeRespuesta3 = validarInfoPreguntas(resPreguntas,pregunta3);
        const nutricion3 = resNutricion[2];
        const puntajeNutricion3 = validarInfoPreguntas(resPreguntas, nutricion3);

        // Validacion pregunta 4
        const pregunta4 = respuestaPreg[3];
        const puntajeRespuesta4 = validarInfoPreguntas(resPreguntas,pregunta4);
        const nutricion4 = resNutricion[3];
        const puntajeNutricion4 = validarInfoPreguntas(resPreguntas, nutricion4);

        // Validacion pregunta 5
        const pregunta5 = respuestaPreg[4];
        const puntajeRespuesta5 = validarInfoPreguntas(resPreguntas,pregunta5);
        const nutricion5 = resNutricion[4];
        const puntajeNutricion5 = validarInfoPreguntas(resPreguntas, nutricion5);

        // Validacion pregunta 6
        const pregunta6 = respuestaPreg[5];
        const puntajeRespuesta6 = validarInfoPreguntas(resPreguntas,pregunta6);
        const nutricion6 = resNutricion[5];
        const puntajeNutricion6 = validarInfoPreguntas(resPreguntas, nutricion6);
       
        // Validacion pregunta 7
        const pregunta7 = respuestaPreg[6];
        const puntajeRespuesta7 = validarInfoPreguntas(resPreguntas,pregunta7);
        const nutricion7 = resNutricion[6];
        const puntajeNutricion7 = validarInfoPreguntas(resPreguntas, nutricion7);

        // Validacion pregunta 8
        const pregunta8 = respuestaPreg[7];
        const puntajeRespuesta8 = validarInfoPreguntas(resPreguntas,pregunta8);
        const nutricion8 = resNutricion[7];
        const puntajeNutricion8 = validarInfoPreguntas(resPreguntas, nutricion8);

        
        const puntajeSintomas = (puntajeRespuesta1)+(puntajeRespuesta2)+(puntajeRespuesta3)+(puntajeRespuesta4)+(puntajeRespuesta5)+(puntajeRespuesta6)+(puntajeRespuesta7)+(puntajeRespuesta8);
        const puntajeNutricion = (puntajeNutricion1)+(puntajeNutricion2)+(puntajeNutricion3)+(puntajeNutricion4)+(puntajeNutricion5)+(puntajeNutricion6)+(puntajeNutricion7)+(puntajeNutricion8);
        
        // Debes retornar iconoSintomas
        const iconoSintomas = iconizacionSintomas(puntajeSintomas);
        const iconoNutricion = iconizacionSintomas(puntajeNutricion);

        const validacionIconoNutricion = () => {
            if(iconoNutricion === "fas fa-times text-danger" || iconoNutricion === "far fa-circle text-warning ") {
                const sugerencia = "Reforzar nutrición";
                return sugerencia;
            }else if(iconoNutricion === "fas fa-check text-success"){
                const sugerencia = "Nutrición buena";
                return sugerencia;
            }
        }

        const resultadoSugerenciaNutricion = validacionIconoNutricion();

        //Filtro para obtener los avisos de molestia correspondientes a la condicion cronica.
        const resAvisos = avisos.filter(avisos => avisos.con_cronica === 'EPOC');
        const infoAviso = resAvisos[0];
        const aviso = validacionAvisos(infoAviso);
        
        //validacion laboratorio 
        const respLab = laboratorio.filter(lab => lab.condicion_cr === 'EPOC');
        // Validacion examen 1
        const examen1 = respLab[0];
        const {resultado:dataExamen1,infoLaboratorio:laboratorio1} = validarInfoExamen(examen1,compensacion);
        
        const resultadoLaboratorio = iconizacionEpoc(dataExamen1);

        const validacionIconoLaboratorio = () => {

            if(resultadoLaboratorio === "far fa-circle text-warning" || resultadoLaboratorio === "fas fa-times text-danger" || resultadoLaboratorio === "fas fa-exclamation-triangle text-warning") {
                const sugerencia = "Repita laboratorio";
                return sugerencia;
            }else if(resultadoLaboratorio === "fas fa-check text-success"){
                const sugerencia = "Laboratorio bueno";
                return sugerencia;
            }

        }

        const resultadoSugerenciaLaboratorio = validacionIconoLaboratorio();
        
        //calcular compensación 
        const respuestaPTJEEpoc = compensacion.filter(com=> com.nombre_param === 'PTJEEpoc');
        const parametroPTJEpoc = respuestaPTJEEpoc[0];
        const PTJEEpoc = validarParametrosComp(parametroPTJEpoc);

        const parametrosCompensacion = [
            {
                nombre_param:'Puntaje Epoc',
                valor:PTJEEpoc
            }
        ];

        const parametrosLaboratorio=[laboratorio1]

        const resultado = calcCompensacionEpoc(PTJEEpoc);

        const resConsumoMedicamentoVerde = resTratamiento.filter(tra => tra.consumo_medicamento  === 1);
        const resConsumoMedicamentoAmarillo = resTratamiento.filter(tra => tra.consumo_medicamento  === 2);
        const resConsumoMedicamentoRojo = resTratamiento.filter(tra => tra.consumo_medicamento  === 3);

        const validacionIconoCompensacion = () => {
            if(resultado === "fas fa-arrow-down text-danger") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Reevalue el aumento de tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "revise tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "far fa-circle text-warning") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Aumente dosis tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoRojo) {
                    const sugerencia = "Asegurese que el paciente se tome todo el tratamiento";
                    return sugerencia;
                }
            }else if(resultado === "fas fa-check text-success") {
                if(!!resConsumoMedicamentoVerde) {
                    const sugerencia = "Mantener todos los tratamientos";
                    return sugerencia;
                }else if(!!resConsumoMedicamentoAmarillo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }else if(!!resConsumoMedicamentoRojo) {
                    resConsumoMedicamentoAmarillo.map(tra => {
                        const medicamentos = tra.dosis_diaria;
                        const sugerencia = "El remedio " + medicamentos + " esta sobrando";
                        return sugerencia;
                    })
                }
            }
        }

        const resultadoSugerenciaCompensacion = validacionIconoCompensacion();

        const resultSugerencia = [
            resultadoSugerenciaCompensacion,
            resultadoSugerenciaLaboratorio,
            resultadoSugerenciaNutricion
        ]

        return { resultado, resultadoLaboratorio, resTratamiento,parametrosCompensacion, parametrosLaboratorio, resPreguntas, aviso, iconoSintomas, iconoNutricion, resNutricion, resultSugerencia};
    }
}