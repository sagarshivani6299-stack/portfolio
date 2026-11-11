import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function Orb() {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.12;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.12;
    }
  });
  return (
    <Float speed={1.25} rotationIntensity={0.25} floatIntensity={0.55}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial color="#4169ff" emissive="#172b91" emissiveIntensity={0.55} roughness={0.22} metalness={0.7} distort={0.22} speed={1.5} />
      </mesh>
      <mesh scale={1.88}>
        <torusGeometry args={[1, 0.008, 8, 160]} />
        <meshBasicMaterial color="#8da4ff" transparent opacity={0.58} />
      </mesh>
      <mesh rotation={[0.85, 0.3, 0.2]} scale={2.05}>
        <torusGeometry args={[1, 0.004, 8, 160]} />
        <meshBasicMaterial color="#bd8cff" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <pointLight position={[3, 3, 4]} intensity={24} color="#8ca2ff" />
      <pointLight position={[-4, -2, -3]} intensity={13} color="#8b5cf6" />
      <Stars radius={70} depth={45} count={1700} factor={3.2} saturation={0.25} fade speed={0.45} />
      <Sparkles count={70} scale={9} size={2.2} speed={0.25} color="#b9c7ff" />
      <Orb />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="scene3d" aria-label="Animated blue 3D planet in a star field">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <SceneContents />
      </Canvas>
      <div className="scene-caption"><span className="caption-line" /> INTERACTIVE DIGITAL UNIVERSE</div>
    </div>
  );
}
