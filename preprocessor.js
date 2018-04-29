const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx')) {
            src = tsc.transpile(src, tsConfig.compilerOptions, path, []);
        }
        return src;
    },
};
