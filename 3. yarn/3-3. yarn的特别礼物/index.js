module.exports = function (...args) {
    return args.reduce((s, item) => s + item, 0);
}