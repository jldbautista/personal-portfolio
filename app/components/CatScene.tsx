'use client'

import dynamic from 'next/dynamic'

const CatModel = dynamic(
  () => import('./CatModel').then((m) => m.CatModel),
  { ssr: false }
)

export function CatScene() {
  return (
    <div className="w-full h-full min-h-0">
      <CatModel />
    </div>
  )
}
