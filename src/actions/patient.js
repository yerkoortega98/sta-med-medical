import { types } from "../types/types";



export const patientActive = ( rutPatient,patient ) => ({
    type:types.patientActive,
    payload:{
        rutPatient,
        ...patient
    }
})



