import React,{useState,useRef} from 'react';
import {HTML} from "@react-three/drei";


const Mesh = ({ children, label}) => {

    const [active,setActive] = useState(false);

    const ref = useRef();


    const handlePointerHover = (e) => {
        setActive(s => !s)
    }

    const handlePointerMove = (e) => {
        e.stopPropagation()
        ref.current.style.transform = `
           translateY(${-((window.innerHeight / 2) - e.clientY) + 20}px) 
           translateX(${-((window.innerWidth / 2) - e.clientX) + 20}px)`;
    }


    return (
        <>
            {children(active,{handlePointerMove,handlePointerHover},ref,setActive)}
            {active && <HTML ref={ref}>
                <div className="container">
                    <span className="label">{label}</span>
                </div>
            </HTML>}
        </>
    )
}

export default Mesh;