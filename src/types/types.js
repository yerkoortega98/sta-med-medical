
// Creamos types para utilizarlo en authReducer, que es el que utiliza un Reducer.

export const types={
    login: '[auth] Login',
    logout:'[auth] Logout',

    uiSetError:'[UI] Set Error',
    uiRemoveError:'[UI] Remove Error',

     // 1.Creamos los types
    uiStartLoading:'[UI] Start Loading',
    uiFinishLoading:'[UI] Finish Loading',


    // types para el paciente
    // Cargar agenda del medico
    // LoadAgend: '[Agend] Load Agend',

    // Seleccionar paciente, debe estar activo con su informacion correspondiente
    patientActive: '[Patient] Set Active Patient',
    patientLoad: '[Patient] Load Patient',
    patientLoadDisease: '[Patient] Load Disease',
    // patientLoadtreatments: '[Patient] Load Treatments' 
}