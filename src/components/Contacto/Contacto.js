import React, {useState} from 'react';
import BotonGenerico from '../BotonGenerico/BotonGenerico';
import './Contacto.css';
import {getFirestore} from '../../firebase/firebaseConfig';
import swal from 'sweetalert';

function Contacto() {
    
    const initialState = {
        nombre:'',
        txtConsulta:'',
        mail:'',
    } 

    // State para mostrar el error de la validación
    const [error, setError] = useState(false);    

    const [consultor, setConsultor] = useState(initialState)
    const consulta = {consultor } //
    
    // Extraer los valores
    const {nombre, email, txtConsulta} = consultor;

    const handlerChange = (evt)=>{
        setConsultor({
            ...consultor,
            [evt.target.name]: evt.target.value,
        })
    }
    
    const handlerSubmit=(evt)=>{
        evt.preventDefault()
        

        const db = getFirestore()
        db.collection('consulta').add(consulta)


        .then(({id})=>{
            if(nombre === '' || email ==='' || txtConsulta === ''){
                setError(true);
                return;}
     
 
            swal({
                title:`Consulta enviada!`,
                text:`La identificacion de consulta es : ${id}`,
                icon:"success",
                height: "340px"
            })

            setError(false);
            setConsultor(initialState);
            
        })
        .catch(err=>console.log(err))
    
    
}
    return (
        <>
        <h2 style={{marginTop:"5rem"}}>ENVIANOS TUS DUDAS!</h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

        <div className="form-consul-cont">
        <form className='formulario-consulta'
                        onSubmit={handlerSubmit}
                        onChange={handlerChange}
                    >
                        <input 
                            type='text'
                            placeholder='Nombre' 
                            name='nombre'
                            defaultValue={consultor.nombre}
                        />
                        <input 
                            type='email'
                            placeholder='E-mail' 
                            name='email'
                            defaultValue={consultor.mail}
                        />
                        <textarea
                            placeholder='Escribí aquí tu consulta' 
                            name='txtConsulta'
                            defaultValue={consultor.txtConsulta}
                        />
                        <div>
                            <BotonGenerico contenido ={'Enviar'}/>
                        </div>
                    </form>
        </div>
        
        </>
    )}

export default Contacto


