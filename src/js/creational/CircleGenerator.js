(function (win, $) {
    // template replacement augment method
    if (typeof String.prototype.supplant !== 'function') {
        String.prototype.supplant = function (o) {
            return this.replace(
                /{([^{}]*)}/g,
                function (a, b) {
                    var r = o[b] || '&nbsp;'
                    return typeof r === 'string' || typeof r === 'number' ? r : a
                }
            );
        };
    }

    var _tplCanvas = [
        '<canvas id="{id}" width="{width}" height="{height}">',
        '</canvas>'
    ].join('')

    var CircleFactory = function () {
        this.types = {}
        this.create = function (type) {

        }
        this.register = function (type, cls) {
            if (cls.prototype.init && cls.prototype.init) {
                this.types[type] = cls
            }
        }
    }

    var CircleGenerator = (function () {
        var instance

        var init = function () {
            var _cf = new CircleFactory()

            var create = function (config) {
                _cf.create(config)
            }

            return {
                create: create
            }
        }

        var getInstance = function () {
            if (!instance) {
                instance = init()
            }
            return instance
        }

        return {
            getInstance: getInstance
        }
    })()

    $(win.document).ready(function () {
        var width = 600, height = 400

        $(win.document.body).append(_tplCanvas.supplant({
            id: 'myCanvas',
            width: width,
            height: height
        }))

        var canvas = $('#myCanvas')
        var ctx = canvas.getContext("2d")

        canvas.click(function (e) {
            CircleGenerator.getInstance().create({
                x: e.pageX,
                y: e.pageY,
                ctx: ctx
            })
        })
    })
})(window, jQuery)
