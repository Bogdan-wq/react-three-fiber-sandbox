import React,{useRef,useState} from 'react';
import {Canvas} from "react-three-fiber";
import {OrbitControls,Stars,HTML,} from "@react-three/drei";
import './styles.scss';


const CanvasChildren = () => {

   const ref = useRef();
   const [active,setActive] = useState(false);


   const handlePointerHover = (e) => {
       setActive(s => !s)
   }

   const handlePointerMove = (e) => {
       ref.current.style.transform = `
       translateY(${-((window.innerHeight / 2) - e.clientY) + 20}px) 
       translateX(${-((window.innerWidth / 2) - e.clientX) + 20}px)`;
   }



    return <>
        <OrbitControls />
        <ambientLight intensity={.5} />
        <spotLight position={[10,15,10]} angle={.3}/>
        <mesh position={[0,0,0]} rotation={[-Math.PI / 2,0,0]}>
            <planeBufferGeometry attach="geometry" args={[10,10]} />
            <meshLambertMaterial attach="material" color="seafoamgreen" />
        </mesh>
       <mesh position={[0,.5,0]} onPointerOver={handlePointerHover} onPointerOut={handlePointerHover} onPointerMove={handlePointerMove}>
           <boxBufferGeometry attach="geometry"  />
           <meshLambertMaterial attach="material" color={active ? "crimson" : "hotpink"} />
       </mesh>
        {active && <HTML ref={ref}>
            <div className="container">
                <span className="label">This is a cube</span>
            </div>
        </HTML>}
    </>
}


function App() {
    return (
        <div className="App">
          <Canvas
              style={{height:'100vh',cursor:'pointer'}}
              colorManagement
              camera={{position:[0,0,20],fov:70}}>
              <Stars />
              <CanvasChildren />
          </Canvas>
        </div>
  );
}

export default App;
