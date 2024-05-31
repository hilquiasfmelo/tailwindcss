'use client'

import { User } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'

import { useFileInput } from './root'

export function ImagePreview() {
  const { files } = useFileInput()

  // Memoriza a imagem carregada e só é renderizada novamente caso a variável file sofra alteração.
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        width={64}
        height={64}
        className="rounded-full object-cover"
        quality={100}
        priority
        alt=""
      />
    )
  }
}
