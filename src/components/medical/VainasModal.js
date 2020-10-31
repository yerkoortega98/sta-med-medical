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


export const VainasModal = ( parametros ) => {

    const {parametros:parametrosGenerales} =parametros;

    const { modalOpen } = useSelector(state => state.ui)

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
                <h1 className="justify-content-center">Compensacion</h1>
            </div>
            <div>
                <ol>
                    {
                        
                        parametrosGenerales.map(parm => (
                            <li key={parm.id}>{parm.nombreParametro} : {parm.valor} </li> 
                        ))
                            
                        
                    }
                </ol>
                    
                
            </div>
        </div>
        </Modal>
        
    )
}
