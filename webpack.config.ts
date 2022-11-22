import { Configuration } from 'webpack';
import { resolve } from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: resolve(__dirname, 'src', 'index.tsx'),
        build: resolve(__dirname, 'build'),
        html: resolve(__dirname, 'public', 'index.html'),
        src: resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
