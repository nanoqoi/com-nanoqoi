import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { Object3DNode, MaterialNode } from '@react-three/fiber'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>
    flickerEffect: ThreeElements['shaderMaterial'] & { color: string }
    textGeometry: Object3DNode<THREE.TextGeometry, typeof THREE.TextGeometry>
  }
}

declare global {
  declare module '*.vert' {
    const content: string
    export default content
  }

  declare module '*.frag' {
    const content: string
    export default content
  }
}
