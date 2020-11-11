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


export const VainasModalLab = ({parametros}) => {

    const [openModal, setOpenModal] = useState(false);
    

    useEffect(() => {
        if(!!parametros){
            console.log("Hola mi gente, entro aqui",true);
            setOpenModal(true);
        }else{
            setOpenModal(false);
        }
    }, [parametros])
    
    console.log("Parametros: ",parametros);
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
                <h1 className="justify-content-center">Compensación</h1>
            </div>
            <div>
                <ol>
                    {
                        (parametros)
                        &&
                        parametros.map(( parm , index)=> (
                            <li className="list-tratamiento" key={index + 43}>{parm.nombre_param} : {parm.valor} </li> 
                        ))
                        
                    }    
                    
                </ol>
                    
                
            </div>
        </div>
        </Modal>
    )
}
