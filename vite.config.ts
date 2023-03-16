import path from 'path'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import alias from '@rollup/plugin-alias'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            exportAsDefault: true,
            svgrOptions: {
                svgProps: {
                    className: 'icon',
                },
            },
        }),
        alias({
            entries: [
                { find: 'utilities', replacement: '@/utilities' },
                { find: 'abi', replacement: '@/abi' },
                { find: 'constants', replacement: '@/constants' },
                { find: 'containers', replacement: '@/containers' },
                { find: 'components', replacement: '@/components' },
                { find: 'assets', replacement: '@/assets' },
                { find: 'hooks', replacement: '@/hooks' },
                { find: 'queries', replacement: '@/queries' },
                { find: 'recoil', replacement: '@/recoil' },
                { find: 'clients', replacement: '@/clients' },
                { find: 'types', replacement: './types' },
            ],
        }),
        vitePluginImp(),
        react(),
        visualizer(),
    ],
    test: {
        coverage: {
            all: true,
            include: ['src/**/*.tsx', 'src/**/*.ts'],
        },
    },
    define: {
        'process.env': {},
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: [
            '.mjs',
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.json',
            '.svg',
            '.png',
            '.scss',
        ],
    },
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis',
            },
            // Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                }),
            ],
        },
    },
} as any)
