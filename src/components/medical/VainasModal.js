import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      opacity               :'100%'
    }
  };

Modal.setAppElement('#root')


export const VainasModal = ({parametros}) => {


    const { modalOpen } = useSelector(state => state.ui)

    // const { compensacion } = useSelector(state => state.pacienteActivo);

    const dispatch = useDispatch();

    const closeModal = () => {  
        dispatch(uiCloseModal());
    }
    return (

        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          className="modal"
          overlayClassName="modal-fondo"
          >
        <div>
            <div>
                <h1 className="justify-content-center">Compensación</h1>
            </div>
            <div>
                <ol>
                    {/* {
                        (parametro)
                        ?
                        parametro.map(parm => (
                            <li key={parm.nombre_param}>{parm.nombre_param} : {parm.valor} </li> 
                        ))
                        :
                        console.log("debo jdajjajad")
                    }     */}
                    
                </ol>
                    
                
            </div>
        </div>
        </Modal>
        
    )
}
