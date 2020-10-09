import React, {Fragment} from 'react';


export const MedicalVainas = ({...props}) => {
    return (
        <Fragment>
            <div className="conjunto_vainas">
                <div className="Vaina">
                    <div>
                        <p className="nombre_enfermedad">{props.enfermedad}</p>
                    </div>
                    <div className="CheckParametros">
                        <p>Compensacion</p>
                        <p>Laboratorio</p>
                        <p>Sintomas</p>
                        <p>Avisos</p>
                    </div>
                    <div>
                        <p>Tratamiento:</p>
                    </div>
                    <div>
                        <p>Losartan</p>
                        <p>HCT</p>
                        <p>Amlodipina</p>
                        <p>Aspirina</p>
                        <p>Atenolol</p>
                    </div>
                </div>
                <div>
                    <button className="btn2 btn_vainas">
                        Mantener
                    </button>
                    <br/>
                    <section>
                        <div className="BotonCambio">Cambio</div>
                    </section>
                </div>
            </div>
        </Fragment>

        
    );
}

