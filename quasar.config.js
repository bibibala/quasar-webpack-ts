/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js

/* eslint-disable @typescript-eslint/no-var-requires */

const { configure } = require('quasar/wrappers');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = configure((ctx) => {
    return {
        supportTS: {
            tsCheckerConfig: {
                eslint: {
                    enabled: true,
                    files: './src/**/*.{ts,tsx,js,jsx,vue}',
                },
            },
        },
        boot: ['axios', 'permission'],
        css: ['app.scss'],
        extras: ['mdi-v7'],
        build: {
            gzip: {
                algorithm: 'brotliCompress',
            },
            minify: true,
            vueRouterMode: 'hash',
            // distDir: ctx.dev ? 'preview' : 'release',
            preloadChunks: true,
            sourceMap: false,
            // ignorePublicFolder: false,
            // analyze: true,
            extendWebpack(cfg, {}) {
                if (!ctx.dev) {
                    cfg.output.publicPath = './';
                    cfg.optimization.concatenateModules = false;
                    cfg.optimization.minimizer = [
                        new TerserPlugin(),
                        new CssMinimizerPlugin(),
                    ];
                    cfg.optimization.splitChunks = {
                        chunks: 'all',
                        minSize: 0,
                        maxSize: 20000,
                        minChunks: 1,
                        maxAsyncRequests: 30,
                        maxInitialRequests: 30,
                        automaticNameDelimiter: '~',
                        cacheGroups: {
                            defaultVendors: {
                                test: /[\\/]node_modules[\\/]/,
                                priority: -10,
                            },
                            default: {
                                minChunks: 2,
                                priority: -20,
                                reuseExistingChunk: true,
                            },
                        },
                    };
                }
            },
        },
        devServer: {
            open: false,
            port: 9000,
        },
        framework: {
            lang: 'zh-CN',
            iconSet: 'mdi-v7',
            plugins: [
                // 'Dialog',
                'Loading',
                'Notify',
                'LoadingBar',
                // 'LocalStorage',
                'SessionStorage',
            ],
            config: {
                screen: {
                    bodyClasses: true,
                },
                loadingBar: {
                    color: 'primary',
                    size: '3px',
                    position: 'top',
                },
                loading: {
                    // QSpinnerGears
                    spinner: 'QSpinnerIos',
                    message: '正在加载中,请稍后......',
                },
                // 设置默认颜色
                brand: {
                    positive: '#48BB78',
                    negative: '#F56565',
                    info: '#4299E1',
                    warning: '#FEAE65',
                    // 主题色
                    primary: '#165DFF',
                    secondary: '#fff',
                    accent: '#F2F3F5',
                    dark: '#141414',
                    sheetRead: '#dcdcdc',
                    sheetHighlighted: '#FEEDD2',
                },
            },
        },
        animations: [],
    };
});
