import React, {Fragment} from 'react';


export const MedicalVainas = (...props) => {
    return (
        <Fragment>
            <div className="conjunto_vainas">
                <div className="Vaina">
                </div>
                <div>
                    <button className="btn2 btn_vainas">
                        Mantener
                    </button>
                    <br/>
                    <button className="btn2 btnCambio">
                        Cambio
                    </button>
                </div>
            </div>
        </Fragment>
    );
}

