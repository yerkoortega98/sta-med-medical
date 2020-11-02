import moment from 'moment'

const start = moment().minute(0).second(0).add(10,'minutes');
const end = start.clone().add(20,'minutes');

const start1 = moment().minute(0).second(0).add(30,'minutes');
const end1 = start1.clone().add(20,'minutes');

const start2 = moment().minute(0).second(0).add(50,'minutes');
const end2 = start2.clone().add(20,'minutes');

const start3 = moment().minute(0).second(0).add(70,'minutes');
const end3 = start3.clone().add(20,'minutes');

const start4 = moment().minute(0).second(0).add(90,'minutes');
const end4 = start4.clone().add(20,'minutes');

const start5 = moment().minute(0).second(0).add(110,'minutes');
const end5 = start5.clone().add(20,'minutes');



export const Agenda = [
    {
        'uid':'191549758',
        'rutPaciente':'130425518',
        'nombrePaciente':'Veronica Ester Donoso Casoni',
        'start':start.toDate(),
        'end':end.toDate(),
        'edad':'21',
        'ParametrosCompensacion':[
            {
                PAS: 90,
                PAD: 70,
                hbglic: 4 ,
                glicemia: null ,
                CT:200 ,
                TG: 140 ,
                LDL: 160,
                HDL: 50,
                Sexo: 'Masculino',
                TSH:0.5,
                T4L: 1.85,
                uremia:15,
                VFG: 60,
                microalbuminuria:15,
                nureico : 40,
                PTJEEpilepsia: 0,
                temblor:1 ,
                equilibrio:1,
                rigidez:1,
                lento:1,
                arrastre:1,
                suma:5,
                PTJEAsma:0,
                PTJEArtrosis:0,
                Rx:null,
                D:0,
                C:0,
                B:0,
                I:0,
                PTJEEpoc:9
            }
        ]
    },
    {
        'uid':'191549758',
        'rutPaciente':'199745588',
        'nombrePaciente':'Matias Ignacio Espinoza Santis',
        'start':start1.toDate(),
        'end':end1.toDate(),
        'edad':'22',
        'ParametrosCompensacion':[
            {
                PAS: 90,
                PAD: 70,
                hbglic: 5 ,
                glicemia: 69 ,
                CT:200 ,
                TG: 140 ,
                LDL: 160,
                HDL: 50,
                Sexo: 'Masculino',
                TSH:0.5,
                T4L: 1.85,
                uremia:15,
                VFG: 60,
                microalbuminuria:15,
                nureico : 40,
                PTJEEpilepsia: 0,
                temblor:1 ,
                equilibrio:1,
                rigidez:1,
                lento:1,
                arrastre:1,
                suma:5,
                PTJEAsma:0,
                PTJEArtrosis:0,
                Rx:null,
                D:0,
                C:0,
                B:0,
                I:0,
                PTJEEpoc:9
            }
        ]
    },
    {
        'uid':'191549758',
        'rutPaciente':'45675231',
        'nombrePaciente':'Cesar Henriquez Ortuzar',
        'start':start2.toDate(),
        'end':end2.toDate(),
        'edad':'56',
        'ParametrosCompensacion':[
{
                PAS: 140,
                PAD: 150,
                hbglic: 5 ,
                glicemia: 69 ,
                CT:200 ,
                TG: 140 ,
                LDL: 160,
                HDL: 50,
                Sexo: 'Masculino',
                TSH:0.5,
                T4L: 1.85,
                uremia:15,
                VFG: 60,
                microalbuminuria:15,
                nureico : 40,
                PTJEEpilepsia: 4,
                temblor:1 ,
                equilibrio:1,
                rigidez:1,
                lento:1,
                arrastre:1,
                suma:1,
                PTJEAsma:3,
                PTJEArtrosis:0,
                Rx:null,
                D:0,
                C:0,
                B:0,
                I:0,
                PTJEEpoc:9
            }
        ]
    },
    {
        'uid':'199751549',
        'rutPaciente':'198457597',
        'nombrePaciente':'Mario Sebastian Hernandez Salas',
        'start':start3.toDate(),
        'end':end3.toDate(),
        'edad':'56',
        'ParametrosCompensacion':[
{
                PAS: 90,
                PAD: 70,
                hbglic: 5 ,
                glicemia: 69 ,
                CT:200 ,
                TG: 140 ,
                LDL: 160,
                HDL: 50,
                Sexo: 'Masculino',
                TSH:0.5,
                T4L: 1.85,
                uremia:15,
                VFG: 60,
                microalbuminuria:15,
                nureico : 40,
                PTJEEpilepsia: 0,
                temblor:1 ,
                equilibrio:1,
                rigidez:1,
                lento:1,
                arrastre:1,
                suma:5,
                PTJEAsma:0,
                PTJEArtrosis:0,
                Rx:null,
                D:0,
                C:0,
                B:0,
                I:0,
                PTJEEpoc:9
            }
        ]
    },
    {
        'uid':'199751549',
        'rutPaciente':'108547687',
        'nombrePaciente':'Lucas Diego Valencia Hernanez',
        'start':start4.toDate(),
        'end':end4.toDate(),
        'edad':'22',
        'ParametrosCompensacion':[
{
                PAS: 90,
                PAD: 70,
                hbglic: 5 ,
                glicemia: 69 ,
                CT:200 ,
                TG: 140 ,
                LDL: 160,
                HDL: 50,
                Sexo: 'Masculino',
                TSH:0.5,
                T4L: 1.85,
                uremia:15,
                VFG: 60,
                microalbuminuria:15,
                nureico : 40,
                PTJEEpilepsia: 0,
                temblor:1 ,
                equilibrio:1,
                rigidez:1,
                lento:1,
                arrastre:1,
                suma:5,
                PTJEAsma:0,
                PTJEArtrosis:0,
                Rx:null,
                D:0,
                C:0,
                B:0,
                I:0,
                PTJEEpoc:9
            }
        ]
    },
    {
        'uid':'199751549',
        'rutPaciente':'98457658',
        'nombrePaciente':'Alejandra Este Catalan Soto',
        'start':start5.toDate(),
        'end':end5.toDate(),
        'edad':'25',
        'ParametrosCompensacion':[
{
                PAS: 90,
                PAD: 70,
                hbglic: 5 ,
                glicemia: 69 ,
                CT:200 ,
                TG: 140 ,
                LDL: 160,
                HDL: 50,
                Sexo: 'Masculino',
                TSH:0.5,
                T4L: 1.85,
                uremia:15,
                VFG: 60,
                microalbuminuria:15,
                nureico : 40,
                PTJEEpilepsia: 0,
                temblor:1 ,
                equilibrio:1,
                rigidez:1,
                lento:1,
                arrastre:1,
                suma:5,
                PTJEAsma:4,
                PTJEArtrosis:0,
                Rx:null,
                D:0,
                C:0,
                B:0,
                I:0,
                PTJEEpoc:9
            }
        ]
    }
]