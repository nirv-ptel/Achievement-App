import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import SelectMenu from "./SelectMenu";

function Chair3D(props: any) {
  const group: any = useRef();
  const { nodes, materials }: any = useLoader(GLTFLoader, "scene.gltf");
  console.log(props, "props");
  const mapVarient: any = useTexture(props.selectedTexture);

  console.log(mapVarient, "mapVarient");

  console.log(nodes, "nodes");
  console.log(materials, "materials");

  return (
    <group ref={group} dispose={null} scale={2}>
      <mesh
        geometry={nodes.Chain.children[0]?.geometry}
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={nodes.Chain_Chrome_0?.geometry}
        material={materials.Cushion}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.Cushion.children[0]?.geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.Cushion_Cushion_0?.geometry}
        material={materials.dark}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.Metalic.children[0]?.geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={nodes.Metalic.children[1]?.geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.Metalic_Chrome_0?.geometry}
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh geometry={nodes.Metalic_dark_0?.geometry} material={materials.dark}>
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.RootNode?.children[0]?.children[0]?.geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={nodes.RootNode?.children[0]?.children[1]?.geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.RootNode?.children[1]?.children[0]?.geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={nodes.RootNode?.children[2]?.children[0]?.geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={nodes.RootNode?.children[2]?.children[1]?.geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.RootNode?.children[3]?.children[0]?.geometry}
        material={materials.Plast}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.Seat?.children[0]?.geometry}
        material={materials.dark}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={nodes.Seat?.children[1]?.geometry}
        material={materials.dark}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={nodes.Seat_Plast_0?.geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={nodes.Seat_woodish_0?.geometry}
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[0]?.children[0]?.geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[0]?.children[1]?.geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[1]?.children[0]?.geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[2]?.children[0]?.geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[2]?.children[1]?.geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[3]?.children[0]?.geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[0].geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[0]
            ?.children[1].geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[1]
            ?.children[0].geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[2]
            ?.children[0].geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[2]
            ?.children[1].geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_Scene?.children[0]?.children[0]?.children[3]
            ?.children[0].geometry
        }
        material={materials.Chrome}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      {/* modal  */}
      <mesh
        geometry={
          nodes.Sketchfab_model?.children[0]?.children[0]?.children[0]
            ?.children[0].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_model?.children[0]?.children[0]?.children[0]
            ?.children[1].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_model?.children[0]?.children[0]?.children[1]
            ?.children[0].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_model?.children[0]?.children[0]?.children[2]
            ?.children[0].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_model?.children[0]?.children[0]?.children[2]
            ?.children[1].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes.Sketchfab_model?.children[0]?.children[0]?.children[3]
            ?.children[0].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      {/* dlX_-_Hanging_Chairfbx  */}
      <mesh
        geometry={
          nodes?.["dlX_-_Hanging_Chairfbx"]?.children[0]?.children[0]
            ?.children[0].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes?.["dlX_-_Hanging_Chairfbx"]?.children[0]?.children[0]
            ?.children[1].geometry
        }
        material={materials.woodish}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={
          nodes?.["dlX_-_Hanging_Chairfbx"]?.children[0]?.children[1]
            ?.children[0]?.geometry
        }
        material={materials.dark}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes?.["dlX_-_Hanging_Chairfbx"]?.children[0]?.children[2]
            ?.children[0]?.geometry
        }
        material={materials.dark}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
      <mesh
        geometry={
          nodes?.["dlX_-_Hanging_Chairfbx"]?.children[0]?.children[2]
            ?.children[1]?.geometry
        }
        material={materials.dark}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>

      <mesh
        geometry={
          nodes?.["dlX_-_Hanging_Chairfbx"]?.children[0]?.children[3]
            ?.children[0]?.geometry
        }
        material={materials.dark}
      >
        <meshStandardMaterial map={mapVarient} />
      </mesh>
    </group>
  );
}

const ThreeJSModal = () => {
  const textureGroups = [
    {
      groupName: "Metal",
      options: [
        { value: "textures/woodish_baseColor.png", label: "Material 1" },
        { value: "textures/woodish_baseColor.png", label: "Material 2" },
        { value: "textures/woodish_baseColor.png", label: "Material 3" },
      ],
    },
    {
      groupName: "Wood",
      options: [
        { value: "textures/wood/1.jpg", label: "Material 1" },
        { value: "textures/wood/2.jpg", label: "Material 2" },
        { value: "textures/wood/3.jpg", label: "Material 3" },
        { value: "textures/wood/4.jpg", label: "Material 4" },
        { value: "textures/wood/5.jpg", label: "Material 5" },
        { value: "textures/wood/6.jpg", label: "Material 6" },
      ],
    },
  ];

  const [selectedTexture, setSelectedTexture] = useState(
    textureGroups[0].options[0].value
  );

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="card">
            <div className="product-canvas">
              <Canvas shadows className="transition-all ease-in">
                <Suspense fallback={null}>
                  <Chair3D selectedTexture={selectedTexture} />
                  <ambientLight intensity={2} />
                  {/* <spotLight
                    intensity={0.9}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                  /> */}
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                  />
                </Suspense>
              </Canvas>
            </div>
            <h2>Material</h2>
            <div className="colors">
              <div className="matirial">
                <SelectMenu
                  textureGroups={textureGroups}
                  selectedTexture={selectedTexture}
                  setSelectedTexture={setSelectedTexture}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeJSModal;
