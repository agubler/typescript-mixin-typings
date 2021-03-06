var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./BaseClass", "./MixinClass"], factory);
    }
})(function (require, exports) {
    "use strict";
    var BaseClass_1 = require("./BaseClass");
    var MixinClass_1 = require("./MixinClass");
    var MyExtendedClass = (function (_super) {
        __extends(MyExtendedClass, _super);
        function MyExtendedClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MyExtendedClass;
    }(MixinClass_1.MyMixin(BaseClass_1.MyBaseClass)));
    exports.MyExtendedClass = MyExtendedClass;
});
//# sourceMappingURL=FinalClass.js.map