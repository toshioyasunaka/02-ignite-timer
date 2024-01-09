// nomedoarquivo.d.ts significa que dentro do arquivo só terá códigos de definição de tipos do typescript;

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
