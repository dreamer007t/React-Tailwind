import React from "react";


function ThreeDsection(){

    const primaryColor = 'red';
    return(
    <>
    <mesh>
        <sphereGeometry args={[1.5,32,32]} />
        <meshBasicMaterial wireframe color={primaryColor}/>
    </mesh>

    </>
    )
}

export default ThreeDsection;