import { Mail } from 'lucide-react'

import * as Input from '@/components/app/input'
import { SettingsTabs } from '@/components/app/setting-tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Configuração</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">
              Informações pessoais
            </h2>
            <span className="text-zinc-500">
              Atualize sua foto e dados pessoais aqui.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancelar
            </button>

            {/* Definindo através da propriedade form o ID do formulário com os dados que serão enviados na submissão. */}
            <button
              type="submit"
              form="setting"
              className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Salvar
            </button>
          </div>
        </div>

        {/* Definindo um ID para o formulário e o botão que usar esse ID será chamado para enviar os dados. */}
        {/* divide => cria uma divisão entre os componentes e adicionar uma borda entre eles. */}
        <form
          id="setting"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* Definição do nome completo */}
          <div className="grid-cols-form grid gap-3">
            <label htmlFor="firstName" className="font-medium text-zinc-700">
              Nome
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Hilquias" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Ferreira Melo" />
              </Input.Root>
            </div>
          </div>

          {/* Definição do e-mail */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="email" className="font-medium text-zinc-700">
              E-mail
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="hilquiasfmelo@hotmail.com"
              />
            </Input.Root>
          </div>

          {/* Definição da foto */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="photo" className="font-medium text-zinc-700">
              Sua foto
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Isso será exibido no seu perfil.
              </span>
            </label>
          </div>

          {/* Definição do cargo */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="font-medium text-zinc-700">
              Cargo
            </label>

            <Input.Root>
              <Input.Control id="role" type="text" defaultValue="Developer" />
            </Input.Root>
          </div>

          {/* Definição do país */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="country" className="font-medium text-zinc-700">
              País
            </label>
          </div>

          {/* Definição do horário */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="timezone" className="font-medium text-zinc-700">
              Data e hora
            </label>
          </div>

          {/* Definição da biografia */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="font-medium text-zinc-700">
              Biografia
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Escreva uma pequena introdução.
              </span>
            </label>
          </div>

          {/* Definição do portifólio */}
          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="timezone" className="font-medium text-zinc-700">
              Portifólio de projetos
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Compartilhe alguns trechos do seu trabalho.
              </span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
