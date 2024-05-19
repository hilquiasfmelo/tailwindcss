import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      /**
       * Definindo uma variação customizada da tela dividindo ela em duas partes.
       * A primeira terá a função minmax() => Define um valor mínimo(18rem) e um máximo(20rem) que vai se adaptar conforme o tamanho da tela.
       * Contudo a outra parte (1fr) ocupará todo o restante do espaço que sobrou da tela.
       */
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },
    },
  },
  plugins: [],
}
export default config
