const context = require.context('./', false, /\.js$/);

export default context.keys().filter((item => item !== './global.js')).map(key => context(key))