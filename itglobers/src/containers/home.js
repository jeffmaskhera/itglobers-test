import React, {useState}from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import FormUser from '../components/formuser';

const Home = () => {

    const [selectBtn, setSelectBtn]=useState(null);

    return (
        <>
            <Header></Header>
            <div className="container-main">
                <div className="grid-row20">
                    <h1 className="text-center">Prueba técnica Jefrey Sánchez</h1>
                    <Menu selection={setSelectBtn}/>
                    {
                        selectBtn !== null ?
                            <div className="grid-row20">
                                <p className="text-center">Hola, bienvenido, sabemos que quieres viajar con <strong>{selectBtn},</strong> por favor diligencia el siguiente formulario</p>
                                <FormUser/>
                            </div>
                            :
                            undefined
                    }
                </div>
            </div>

        </>
    );
};


export default Home;


