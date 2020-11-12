import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      opacity               :'100%',
    }
  };

Modal.setAppElement('#root')


export const VainasModalSintomas = ({parametros}) => {

    const [openModal, setOpenModal] = useState(false);
    

    useEffect(() => {
        if(!!parametros){
            setOpenModal(true);
        }else{
            setOpenModal(false);
        }
    }, [parametros])
    
    const closeModal = () => {  
        setOpenModal(false)
    }

    return (
       
        <Modal
          isOpen={ openModal }
          onRequestClose={closeModal}
          style={customStyles}
          className="modal"
          overlayClassName="modal-fondo"
          >
        <div>
            <div>
                <h1 className="justify-content-center">Sintomas</h1>
            </div>
            <div>
                <ol>
                    {
                        (parametros)
                        &&
                        parametros.map(( parm , index)=> (
                            <li className="list-tratamiento" key={index + 43}>{parm.nombre_pregunta} : {parm.respuesta_sintoma} </li> 
                        ))
                        
                    }              
                </ol>           
            </div>
        </div>
        </Modal>
    )
}
