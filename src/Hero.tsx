'use client'
 
import { useRef } from "react"
import { OrbitControls, RoundedBox } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { motion } from "framer-motion"
 
function SpinningCube({ position }:any) {
  const meshRef = useRef<any>()
  const { environment } = useThree<any>()
 
  useFrame(() => {
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.005
  })
 
  const [x, y, z] = position
  const isGold = (Math.abs(x) + Math.abs(y) + Math.abs(z)) % 4 === 0
  const cubeColor = isGold ? "#C2A422" : "#5e4e07"
  const metalness = 1
  const roughness = 0.15
 
  const scale = 0.45
 
  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={10} scale={scale}>
        <meshStandardMaterial
          color={cubeColor}
          metalness={metalness}
          roughness={roughness}
          envMap={environment}
        />
      </RoundedBox>
    </mesh>
  )
}
 
function AnimatedSpotlight({ spotlightRef, spotlightProps }:any) {
  return <spotLight ref={spotlightRef} {...spotlightProps} />
}
 
function HeroSpinningMetalicCubeDark() {
  const cubes = []
  let id = 0
 
  const spacing = 0.8
 
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (x === 0 && y === 0 && z === 0) continue
        id++
        cubes.push(<SpinningCube key={id} position={[x * spacing, y * spacing, z * spacing]} />)
      }
    }
  }
 
  const spotlightRef = useRef()

  const spotlightProps = {
    position: [1, 1, 1],   // Spotlight position
    intensity: 10000,      // Light intensity
    angle: Math.PI / 8,    // Light spread angle
    power: 10,             // Light power
    penumbra: 0.1,         // Penumbra effect
    distance: 100,         // Light distance
    castShadow: true,      // Shadow casting
    attenuation: 1,        // Light attenuation
  }
 
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }
  
  return (
    <div className="Hero">
      <div className="min-h-[70vh] sm:min-h-[90vh] pb-0">
        <div className="flex flex-col justify-start pt-8 sm:pt-16">
          <div className="mx-auto w-full">
            <div className="m-0 p-4 text-center">
              <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="hero-title pb-3 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide"
                >
                  MEVericks
                </motion.h1>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  className="mt-2 sm:mt-4 text-center text-xs sm:text-sm font-light tracking-widest text-[#C2A422]"
                >
                  The Power of MEV, in your hands
                </motion.p>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  className="mx-auto mt-6 max-w-2xl text-center text-sm sm:text-base font-light leading-relaxed tracking-wide text-white/80"
                >
                  Mevericks is a team dedicated to helping validators and stakers maximize their staking APY through effective MEV strategies.
                </motion.p>
                <motion.a
                  href="https://www.mevericks.io"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  className="get-started-btn mx-auto mt-8 px-8 py-3 text-sm font-medium tracking-wider border-2 border-[#C2A422] bg-black hover:bg-black text-[#C2A422] rounded-lg flex items-center gap-2 no-underline inline-flex cursor-pointer hover:text-[#C2A422]"
                >
                  Get Started
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11V9h2z"/>
                  </svg>
                </motion.a>
            </div>
          </div>
        </div>
  
        <div className="Cube relative w-full flex-1">
          <div className="h-[35vh] sm:h-[55vh] w-full cursor-grab">
            {/* Customizable Canvas properties: camera position and zoom */}
            <Canvas camera={{ 
              position: [2.2, 2.2, 1.2],
              zoom: 1.0
            }}>
              <AnimatedSpotlight
                spotlightRef={spotlightRef}
                spotlightProps={spotlightProps}
              />
              {/* Customizable light sources: position and intensity */}
              <ambientLight position={[0, 10, 8]} intensity={900} />
              <pointLight position={[0, 0, 10]} intensity={1000} />
              <pointLight position={[0, 10, 0]} intensity={1000} />
              <pointLight position={[0, -10, 0]} intensity={1000} />
              <pointLight position={[10, 10, 0]} intensity={1000} />
              {cubes}
              {/* Customizable OrbitControls properties: auto-rotate speed, pan, and polar angle limits */}
              <OrbitControls
                autoRotate
                autoRotateSpeed={4}
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                minPolarAngle={Math.PI / 2.1}
                maxPolarAngle={Math.PI / 2.1}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export { HeroSpinningMetalicCubeDark }