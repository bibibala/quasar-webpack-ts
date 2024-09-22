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
            distDir: 'release',
            preloadChunks: true,
            sourceMap: false,
            // ignorePublicFolder: false,
            // analyze: true,
            env: {
                ENCRYPT_KEY: '999999999999',
                // WEB_APP_URL: ctx.dev
                //     ? 'https://test.bingce.com'
                //     : 'https://test.bingce.com',
                // WS_URL: ctx.dev
                //     ? 'ws://192.168.3.48:40082/ws'
                //     : 'http://192.168.3.48:40082',
            },
            // c isClient: true, isServer: false
            extendWebpack(
                cfg,
                {
                    /*c*/
                }
            ) {
                if (!ctx.dev) {
                    cfg.output.publicPath = './';
                    cfg.optimization.concatenateModules = false;
                    cfg.optimization.minimizer = [
                        new TerserPlugin(),
                        new CssMinimizerPlugin(),
                    ];
                    cfg.optimization.splitChunks = {
                        chunks: 'all',
                        minSize: 20000,
                        maxSize: 100000,
                        minChunks: 2,
                        maxAsyncRequests: 10,
                        maxInitialRequests: 10,
                        automaticNameDelimiter: '~',
                        cacheGroups: {
                            defaultVendors: {
                                test: /[\\/]node_modules[\\/]/,
                                priority: -10,
                                name(module) {
                                    const packageName = module.context.match(
                                        /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                    )[1];

                                    return `${packageName.replace('@', '')}`;
                                },
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
            port: 9876,
        },
        framework: {
            lang: 'zh-CN',
            iconSet: 'mdi-v7',
            plugins: ['Loading', 'Notify', 'LoadingBar', 'SessionStorage'],
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
                    primary: '#2d5cf6',
                    secondary: '#FFFFFF',
                    accent: '#F2F3F5',
                    dark: '#2c2e3e',
                },
            },
        },
    };
});
