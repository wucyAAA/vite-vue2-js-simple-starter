// uno.config.ts
import { 
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  // presetWebFonts,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
  // rules: [
  //   ['m-1', { margin: '1px' }]
  // ],
})