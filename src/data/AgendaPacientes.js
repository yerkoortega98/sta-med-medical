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
        'rutPaciente':'19.975.154-9',
        'nombrePaciente':'Jorge Luis Barrera Donoso',
        'start':start.toDate(),
        'end':end.toDate(),
        'edad':'21',
        'enfermedades':[
            {
                id:1,
                enfermedad:'HTA'
            },
            {
                id:2,
                enfermedad:'Diabetes'
            },
            {
                id:3,
                enfermedad:'Dislip'
            }

        ],
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
        'rutPaciente':'19.974.558-8',
        'nombrePaciente':'Matias Ignacio Espinoza Santis',
        'start':start1.toDate(),
        'end':end1.toDate(),
        'edad':'22',
        'enfermedades':[
            {
                id:1,
                enfermedad:'HTA'
            },
            {
                id:2,
                enfermedad:'Insuficiencia Renal'
            },
            {
                id:3,
                enfermedad:'Asma'
            }

        ],
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
        'rutPaciente':'4.567.523-1',
        'nombrePaciente':'Cesar Henriquez Ortuzar',
        'start':start2.toDate(),
        'end':end2.toDate(),
        'edad':'56',
        'enfermedades':[
            {
                id:1,
                enfermedad:'HTA'
            },
            {
                id:2,
                enfermedad:'Hipotiroihismo'
            },
            {
                id:3,
                enfermedad:'Epoc'
            },
            {
                id:4,
                enfermedad:'Epi'
            },
            {
                id:5,
                enfermedad:'Asma'
            },
            {
                id:6,
                enfermedad:'Parkinson'
            },
            {
                id:7,
                enfermedad:'Artrosis'
            }
        ],
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
        'rutPaciente':'17.955.154-9',
        'nombrePaciente':'Mario Sebastian Hernandez Salas',
        'start':start3.toDate(),
        'end':end3.toDate(),
        'edad':'56',
        'enfermedades':[
            {
                id:1,
                enfermedad:'HTA'
            },
            {
                id:2,
                enfermedad:'Epi'
            },
            {
                id:3,
                enfermedad:'Parkinson'
            }

        ],
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
        'rutPaciente':'14.975.154-9',
        'nombrePaciente':'Lucas Diego Valencia Hernanez',
        'start':start4.toDate(),
        'end':end4.toDate(),
        'edad':'22',
        'enfermedades':[
            {
                id:1,
                enfermedad:'HTA'
            }

        ],
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
        'rutPaciente':'12.965.154-9',
        'nombrePaciente':'Alejandra Este Catalan Soto',
        'start':start5.toDate(),
        'end':end5.toDate(),
        'edad':'25',
        'enfermedades':[
            {
                id:1,
                enfermedad:'HTA'
            },
            {
                id:2,
                enfermedad:'Asma'
            }

        ],
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