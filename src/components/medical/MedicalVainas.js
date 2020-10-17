import React, {Fragment} from 'react';


export const MedicalVainas = ({...props}) => {
    return (
        <Fragment>
            <div className="conjunto_vainas">
                <div className="Vaina">
                    <div>
                        <div>
                            <p className="nombre_enfermedad">{props.enfermedad}</p>
                            <br/>
                            <br/>
                        </div>
                        <div className="ContenidoCompleto">
                            <div className="CheckParametros">
                                <p>Compensación <i className="fas fa-check text-success"></i></p>
                                <p>Laboratorio <i className="far fa-question-circle text-primary"></i></p>
                                <p>Sintomas <i className="fas fa-times text-danger"></i></p>
                                <p>Avisos:   <span className="text-success">Ninguno</span></p>
                                <br/>
                            </div>
                            <div className="tituloTratamiento">
                                <p>Tratamiento:</p>
                            </div>
                            <div className="ContenidoTratamiento">
                                <p>Losartan: <span className="text-success">1 c/12</span></p>
                                <p>HCT:<span className="text-warning">1 c/dia</span></p>
                                <p>Amlodipina: <span className="text-success">0.5 c/12</span></p>
                                <p>Aspirina:<span className="text-success">1 c/dia</span></p>
                                <p>Atenolol: <span className="text-danger">1 c/dia</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Botones">
                    <button className="btn2 btn_vainas">
                        Mantener
                    </button>
                    <br/>
                    <section>
                        <div className="BotonCambio">Cambio</div>
                        <p>Sacar Atenolol
                            No hay IAM.
                            Reducir HCT a la mitad
                        </p>
                    </section>
                </div>
            </div>
        </Fragment>

        
    );
}

