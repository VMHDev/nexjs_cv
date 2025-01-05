/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.ico' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}
