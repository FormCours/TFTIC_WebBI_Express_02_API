import serverConfig from './server.json';

const load = (mode = null) => {

    let config;
    if(mode === "production" || process.argv.includes('--production')) {
        config = serverConfig.production;
    }
    else if(mode === "local" || process.argv.includes('--local')) {
        config = serverConfig.local;
    }
    else {
        config = serverConfig.developement;
    }

    return config;
}

export default {
    load
};