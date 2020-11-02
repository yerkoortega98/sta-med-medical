
// Creamos types para utilizarlo en authReducer, que es el que utiliza un Reducer.

export const types={
    login: '[auth] Login',
    logout:'[auth] Logout',

    uiSetError:'[UI] Set Error',
    uiRemoveError:'[UI] Remove Error',

     // 1.Creamos los types
    uiStartLoading:'[UI] Start Loading',
    uiFinishLoading:'[UI] Finish Loading',
    uiOpenModal: '[UI] Open Modal',
    uiCloseModal: '[UI] Close Modal',


    // types para el paciente
    // Cargar agenda del medico
    diaryLoad: '[Diary] Diary Load',
    diaryLogoutCleaning: '[Diary] Diary Logout Cleaning',
    diarySetActive: '[Diary] Diary set Active',
    diaryClearActiveDiary: '[Diary] Diary Clear Active Diary',

    // Cargar enfermedades paciente
    setEnfermedad: '[Patient] setEnfermedad',
    clearActiveEnfermedad:'[Patient] Clear enfermedad',
    setActivePaciente:'[Patient] Set active Paciente',
    clearActivePaciente:'[Patient] Clear active paciente',
    setInfoPaciente:'[Patient] Set info Paciente',
    clearInfoPaciente:'[Patient] Clear Info Paciente',
    setCompensacion:'[Patient] set Compensacion paciente',
    clearCompensacion:'[Patient] Clear compensacion',

    // PacienteACtivo
    patientIsCheckingTrue: '[Patient] Patient is Checking in True',
    patientIsCheckingFalse: '[Patient] Patient is Checking in False',

}