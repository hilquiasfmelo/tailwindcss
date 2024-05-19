import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/hilquiasfmelo.png"
        className="rounded-full"
        priority
        width={40}
        height={40}
        alt="Foto de perfil do Github"
      />

      {/* truncate => adicionar o ... se o texto estourar o tamanho da div. */}
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Hilquias Ferreira Melo
        </span>
        <span className="truncate text-sm text-zinc-700">
          hilquiasfmelo@hotmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
