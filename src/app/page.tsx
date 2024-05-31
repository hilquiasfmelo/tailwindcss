import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import * as FileInput from '@/components/app/file-input'
import * as Input from '@/components/app/input'
import { Select } from '@/components/app/select'
import { SelectItem } from '@/components/app/select/select-item'
import { SettingsTabs } from '@/components/app/setting-tabs'
import { Textarea } from '@/components/app/textarea'

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
          <div className="grid grid-cols-form gap-3">
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
          <div className="grid grid-cols-form gap-3 pt-5">
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
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="photo" className="font-medium text-zinc-700">
              Sua foto
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Isso será exibido no seu perfil.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control accept="true" />
            </FileInput.Root>
          </div>

          {/* Definição do cargo */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="font-medium text-zinc-700">
              Cargo
            </label>

            <Input.Root>
              <Input.Control id="role" type="text" defaultValue="Developer" />
            </Input.Root>
          </div>

          {/* Definição do país */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="country" className="font-medium text-zinc-700">
              País
            </label>

            <Select placeholder="Selecione um país...">
              <SelectItem value="br" text="Brasil" />
              <SelectItem value="us" text="Estados Unidos" />
              <SelectItem value="ar" text="Argentina" />
              <SelectItem value="cb" text="Cuba" />
            </Select>
          </div>

          {/* Definição do horário */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="timezone" className="font-medium text-zinc-700">
              Data e hora
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          {/* Definição da biografia */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="font-medium text-zinc-700">
              Biografia
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Escreva uma pequena introdução.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* Definição do portifólio */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="timezone" className="font-medium text-zinc-700">
              Portifólio de projetos
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Compartilhe alguns trechos do seu trabalho.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
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
