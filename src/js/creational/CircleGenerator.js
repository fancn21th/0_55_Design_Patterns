(function (win, $) {
    // template replacement augment method
    if (typeof String.prototype.supplant !== 'function') {
        String.prototype.supplant = function (o) {
            return this.replace(
                /{([^{}]*)}/g,
                function (a, b) {
                    var r = o[b] || '&nbsp;';
                    return typeof r === 'string' || typeof r === 'number' ? r : a;
                }
            );
        };
    }

    var _tplCanvas = [
        '<canvas id="tzCanvas"></canvas>'
    ].join('')

    $(win.document).ready(function () {
        $(win.document.body).append(_tplCanvas)
    })
})(window, jQuery)