(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['noscript', 'html5-history-api'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('noscript'), require('html5-history-api'));
    } else {
        factory(root.ns);
    }
}(this, function(ns) {
    var history = window.history;
    var originalInit = ns.init;

    ns.init = function() {
        history.redirect(null, ns.router.baseDir);
        return originalInit.apply(ns, arguments);
    };

    if (history.emulate) {
        ns.page.getCurrentUrl = function() {
            return history.location.pathname + history.location.search;
        };
    }

    return ns;
}));
