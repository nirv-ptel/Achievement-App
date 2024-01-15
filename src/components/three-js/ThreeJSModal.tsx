import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Chair3D(props: any) {
  const group: any = useRef();
  const { nodes, materials }: any = useLoader<any>(GLTFLoader, "scene.gltf");
  console.log(props, "props");
  //   const dayTexture = useTexture(props.selectedTexture);

  console.log(nodes, "nodes");
  console.log(materials, "materials");

  return (
    <group ref={group} dispose={null} scale={3}>
      <mesh
        geometry={nodes.Chain.children[0].geometry}
        material={materials.Chrome}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        geometry={nodes.Chain_Chrome_0.geometry}
        material={materials.Cushion}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh
        geometry={nodes.Metalic.children[0].geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        geometry={nodes.Metalic.children[1].geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh
        geometry={nodes.Metalic_Chrome_0.geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh geometry={nodes.Metalic_dark_0.geometry} material={materials.Plast}>
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh
        geometry={nodes.RootNode?.children[0].geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        geometry={nodes.RootNode?.children[1].geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        geometry={nodes.RootNode?.children[2].geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        geometry={nodes.RootNode?.children[3].geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh
        geometry={nodes.Seat?.children[0].geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        geometry={nodes.Seat?.children[1].geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh
        geometry={nodes.Seat?.children[1].geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        geometry={nodes.Seat?.children[1].geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}

const ThreeJSModal = () => {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="card">
            <div className="product-canvas">
              <Canvas shadows className="transition-all ease-in">
                <Suspense fallback={null}>
                  <Chair3D />
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeJSModal;
