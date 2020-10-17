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
        'uid':'SmLyKSRex4T0r5lIosyhf04JGec2',
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
                enfermedad:'PBE'
            },
            {
                id:3,
                enfermedad:'HTO'
            }

        ]
    },
    {
        'uid':'SmLyKSRex4T0r5lIosyhf04JGec2',
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
                enfermedad:'DM'
            },
            {
                id:3,
                enfermedad:'Dislip'
            }

        ]
    },
    {
        'uid':'SmLyKSRex4T0r5lIosyhf04JGec2',
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
                enfermedad:'DM'
            },
            {
                id:3,
                enfermedad:'Dislip'
            },
            {
                id:4,
                enfermedad:'Epi'
            },
            {
                id:5,
                enfermedad:'ASMA'
            },
            {
                id:6,
                enfermedad:'Parkinson'
            },
            {
                id:7,
                enfermedad:'Artrosis'
            }
        ]
    },
    {
        'uid':'RNFUH8FlGnaGMBWnOamDrJRdn4p1',
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
                enfermedad:'Dislip'
            },
            {
                id:3,
                enfermedad:'Parkinson'
            }

        ]
    },
    {
        'uid':'RNFUH8FlGnaGMBWnOamDrJRdn4p1',
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

        ]
    },
    {
        'uid':'RNFUH8FlGnaGMBWnOamDrJRdn4p1',
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
                enfermedad:'ASMA'
            }

        ]
    }
]