import devConfig from './config.dev';

function getConfig() {
    // Using url filtering you need to return different config files
    return devConfig;
}
export default {
    'aws': getConfig().aws,
    'app': getConfig().app
}