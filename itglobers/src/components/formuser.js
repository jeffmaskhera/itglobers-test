import React, {useState} from 'react';
import LigthBox from "./lightbox";

const FormUser =({})=> {

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        celular: '',
        edad: '',
    })

    const [error, setError] = useState('')
    const [modal, setModal] = useState(false)

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleInputChangeNumber = (event) => {
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }


    const validateData = (event) => {
        if (datos.name === '' || datos.celular === '' || datos.email === '' || datos.edad === '') {
            setError("Debes completar el formulario")
        }
        else {
            if (datos.email !== '' && datos.celular !== '') {
                const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                const isOkEmail = reEmail.test(datos.email);

                const rePhone = /^(\(?\+[\d]{1,3}\)?)\s?([\d]{1,5})\s?([\d][\s\.-]?){6,7}$/
                const isOkPhone = rePhone.test(datos.celular);

                if (!isOkEmail || !isOkPhone) {
                    if (!isOkEmail) {
                        setError("Ingresa un email válido este debe contener el simbolo '@' seguido de tu servidor de correo")
                    }
                    if (!isOkPhone) {
                        setError("Ingresa un teléfono válido, debe comenzar con el simbolo '+' ")
                    }

                }
                else if (parseInt(datos.edad) < 18) {
                    setError("No puedes volar porque eres menor de edad")
                }
                else if (parseInt(datos.edad) >= 100) {
                    setError("Ha esta edad ya no puedes volar")
                }

                else {
                    sendData(event)
                }
            }
        }
    }

    const sendData =(event)=> {
        event.preventDefault()
        console.log('Enviando todos los datos...' + datos)
        console.log(datos)
        setModal(true)

        /*clear inputs*/
        setDatos({name: '', email: '', celular: '', edad: ''})
        setError('')

        /*close modal in 5 seconds*/
        setTimeout(() => {
            setModal(false)
        }, 5000)
    }


    return (
        <>
            <div className="box-form">
                <form className="grid-row30" onSubmit={validateData}>
                    <div className="grid-2colform">
                        <div className="grid-row10">
                            <label>Nombre Completo</label>
                            <input className="input" type="text" name="name" value={datos.name} placeholder="Nombre Completo" onChange={handleInputChange}/>
                        </div>
                        <div className="grid-row10">
                            <label>Email</label>
                            <input className="input" type="email" name="email" value={datos.email} placeholder="Email" onChange={handleInputChange}/>
                        </div>
                        <div className="grid-row10">
                            <label>Celular</label>
                            <input className="input" type="text" name="celular" value={datos.celular} placeholder="+573001000000" onChange={handleInputChange}/>
                        </div>

                        <div className="grid-row10">
                            <label>Edad</label>
                            <input
                                className="input"
                                type="number"
                                name="edad"
                                value={datos.edad} placeholder="Edad"
                                onChange={handleInputChangeNumber}
                            />
                        </div>
                    </div>
                    {
                        error ?
                       <p className="errorMessage">{error}</p>
                            :
                            undefined
                    }
                    <div className="btn-list wmax" onClick={validateData}>Enviar</div>
                </form>
            </div>
            {
                modal ?
                    <LigthBox closeLight={setModal}/>
                    :
                    undefined
            }
        </>
    )
}
export default FormUser