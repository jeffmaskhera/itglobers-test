import React, {useState} from 'react';
import {Navigation} from "../tools/info";

const Menu =({selection})=> {

    const [infoNav, setInfoNav]=useState(Navigation);

    return (
        <>
            <div className="grid-row20">
                <h3 className="text-center">Selecciona con que aerolinea deseas volar</h3>
                <nav className="">
                    <ul className="container-list">
                        {
                            infoNav && infoNav.map(
                                (i)=>{
                                    return (
                                        <div key={i.id} className="btn-list" onClick={()=>selection(i.title)}>
                                            <li>{i.title}</li>
                                        </div>
                                    )
                                }
                            )
                        }
                    </ul>
                </nav>
            </div>


        </>
    )
}
export default Menu