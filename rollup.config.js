import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

export default [
  // Main bundle
  {
    input: 'src/main.ts',
    output: [
      {
        dir: 'dist',
        format: 'es',
        entryFileNames: 'index.js'
      },
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: 'index.cjs',
        exports: 'named'
      }
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      typescript({
        tsconfig: './tsconfig.json'
      })
    ],
    external: ['svelte', 'nanoid']
  },
  // Types bundle
  {
    input: './dist/types/main.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({
        targets: 'dist/types',
        hook: 'buildEnd'
      })
    ]
  }
];
