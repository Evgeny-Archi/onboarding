import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/index.js',
        format: 'esm',
    },
    plugins: [
        resolve(),
        typescript({
            tsconfig: 'tsconfig.json',
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        svgr(),
        commonjs(),
    ],
    external: ['react', 'typescript'],
};
