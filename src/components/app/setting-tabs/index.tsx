'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { TabItem } from './tab-item'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="Meus detalhes"
          isSelected={currentTab === 'my-details'}
          value="my-details"
        />
        <TabItem
          title="Perfil"
          isSelected={currentTab === 'profile'}
          value="profile"
        />
        <TabItem
          title="Senha"
          isSelected={currentTab === 'password'}
          value="password"
        />
        <TabItem
          title="Equipe"
          isSelected={currentTab === 'team'}
          value="team"
        />
        <TabItem
          title="Plano"
          isSelected={currentTab === 'plan'}
          value="plan"
        />
        <TabItem
          title="Cobrança"
          isSelected={currentTab === 'billing'}
          value="billing"
        />
        <TabItem
          title="E-mail"
          isSelected={currentTab === 'email'}
          value="email"
        />
        <TabItem
          title="Notificação"
          isSelected={currentTab === 'notification'}
          value="notification"
        />
        <TabItem
          title="Integrações"
          isSelected={currentTab === 'integrations'}
          value="integrations"
        />
        <TabItem title="API" isSelected={currentTab === 'api'} value="api" />
      </Tabs.List>
    </Tabs.Root>
  )
}
