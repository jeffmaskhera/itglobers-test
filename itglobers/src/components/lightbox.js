import React from 'react';
import img from '../tools/images'
import {Animated} from "react-animated-css";

const LigthBox =({closeLight})=> {


    return (
        <>
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
                className="pos-lightbox"

            >
                <div className="close-outside" onClick={()=>closeLight(false)}></div>
                <div className="lightbox">
                    <div className="lightbox-close" onClick={()=>closeLight(false)}>
                        <img className="icon20" src={img.IconClose} alt="close"/>
                    </div>
                    <p className="text-center">“Tu información fue enviada con éxito, estaremos en contacto contigo”,</p>
                </div>
            </Animated>

        </>
    )
}
export default LigthBox