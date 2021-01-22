import React from 'react';
import {Canvas} from "react-three-fiber";
import {OrbitControls, Stars, HTML, TransformControls,} from "@react-three/drei";
import Mesh from "./Mesh";
import './styles.scss';

function App() {
    return (
        <div className="App">
          <Canvas
              style={{height:'100vh',cursor:'pointer'}}
              colorManagement
              camera={{position:[0,0,20],fov:70}}>
              <Stars />
              <OrbitControls />
              <ambientLight intensity={.5} />
              <spotLight position={[10,15,10]} angle={.3}/>
              <Mesh label="This is a cube">
                  {(active,{handlePointerHover,handlePointerMove}) => (
                      <mesh position={[1,.5,-2]} onPointerOver={handlePointerHover} onPointerOut={handlePointerHover} onPointerMove={handlePointerMove}>
                          <boxBufferGeometry attach="geometry"  />
                          <meshLambertMaterial attach="material" color={active ? "crimson" : "hotpink"} />
                      </mesh>
                  )}
              </Mesh>
              <Mesh label="This is a sphere">
                  {(active,{handlePointerHover,handlePointerMove}) => (
                      <mesh position={[2,.7,2]} onPointerOver={handlePointerHover} onPointerOut={handlePointerHover} onPointerMove={handlePointerMove}>
                          <sphereBufferGeometry attach="geometry" args={[1,20,20]}/>
                          <meshLambertMaterial attach="material" color={active ? "crimson" : "blue"} />
                      </mesh>
                  )}
              </Mesh>
              <Mesh label="This is a cylinder">
                  {(active,{handlePointerHover,handlePointerMove}) => (
                      <mesh position={[-2,1.5,2]} onPointerOver={handlePointerHover} onPointerOut={handlePointerHover} onPointerMove={handlePointerMove}>
                          <cylinderBufferGeometry attach="geometry" args={[1,2,3]}/>
                          <meshLambertMaterial attach="material" color={active ? "crimson" : "purple"} />
                      </mesh>
                  )}
              </Mesh>
              <mesh position={[0,0,0]} rotation={[-Math.PI / 2,0,0]}>
                  <planeBufferGeometry attach="geometry" args={[10,10,5]} doubleSide={true}/>
                  <meshLambertMaterial attach="material" color="seafoamgreen" />
              </mesh>
          </Canvas>
        </div>
  );
}

export default App;
