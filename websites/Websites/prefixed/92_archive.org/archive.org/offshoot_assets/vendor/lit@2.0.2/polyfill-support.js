!function(i) {
  typeof define == "function" && define.amd ? define(i) : i();
}(function() {
  "use strict";
  var i;
  i = function() {
    var i2, n;
    i2 = function() {
      /**
                          * @license
                          * Copyright 2017 Google LLC
                          * SPDX-License-Identifier: BSD-3-Clause
                          */
      var i3, n2 = "__scoped";
      (i3 = globalThis.reactiveElementPolyfillSupport) !== null && i3 !== void 0 || (globalThis.reactiveElementPolyfillSupport = function(i4) {
        var o = i4.ReactiveElement;
        if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
          var t = o.prototype;
          window.ShadyDOM && window.ShadyDOM.inUse && window.ShadyDOM.noPatch === true && window.ShadyDOM.patchElementProto(t);
          var d = t.createRenderRoot;
          t.createRenderRoot = function() {
            var i5, o2, t2, e2 = this.localName;
            if (window.ShadyCSS.nativeShadow)
              return d.call(this);
            if (!this.constructor.hasOwnProperty(n2)) {
              this.constructor[n2] = true;
              var u2 = this.constructor.elementStyles.map(function(i6) {
                return i6 instanceof CSSStyleSheet ? Array.from(i6.cssRules).reduce(function(i7, n3) {
                  return i7 + n3.cssText;
                }, "") : i6.cssText;
              });
              (o2 = (i5 = window.ShadyCSS) === null || i5 === void 0 ? void 0 : i5.ScopingShim) === null || o2 === void 0 || o2.prepareAdoptedCssText(u2, e2), this.constructor._$AJ === void 0 && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), e2);
            }
            return (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
          };
          var e = t.connectedCallback;
          t.connectedCallback = function() {
            e.call(this), this.hasUpdated && window.ShadyCSS.styleElement(this);
          };
          var u = t._$AE;
          t._$AE = function(i5) {
            this.hasUpdated || window.ShadyCSS.styleElement(this), u.call(this, i5);
          };
        }
      });
    }, typeof define == "function" && define.amd ? define(i2) : i2(), function(i3) {
      typeof define == "function" && define.amd ? define(i3) : i3();
    }(function() {
      /**
                          * @license
                          * Copyright 2017 Google LLC
                          * SPDX-License-Identifier: BSD-3-Clause
                          */
      var i3, n2 = new Set(), o = new Map();
      (i3 = globalThis.litHtmlPolyfillSupport) !== null && i3 !== void 0 || (globalThis.litHtmlPolyfillSupport = function(i4, t) {
        if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
          var d = function(i5) {
            return i5 !== void 0 && !n2.has(i5);
          }, e = function(i5) {
            var n3 = o.get(i5);
            return n3 === void 0 && o.set(i5, n3 = []), n3;
          }, u = new Map(), v = i4.createElement;
          i4.createElement = function(n3, o2) {
            var t2 = v.call(i4, n3, o2), u2 = o2 == null ? void 0 : o2.scope;
            if (u2 !== void 0 && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(t2, u2), d(u2))) {
              var f2 = e(u2), r2 = t2.content.querySelectorAll("style");
              f2.push.apply(f2, Array.from(r2).map(function(i5) {
                var n4;
                return (n4 = i5.parentNode) === null || n4 === void 0 || n4.removeChild(i5), i5.textContent;
              }));
            }
            return t2;
          };
          var f = document.createDocumentFragment(), r = document.createComment(""), w = t.prototype, l = w._$AI;
          w._$AI = function(i5, t2) {
            var u2, v2, w2;
            t2 === void 0 && (t2 = this);
            var s = this._$AA.parentNode, a = (u2 = this.options) === null || u2 === void 0 ? void 0 : u2.scope;
            if (s instanceof ShadowRoot && d(a)) {
              var h = this._$AA, c = this._$AB;
              f.appendChild(r), this._$AA = r, this._$AB = null, l.call(this, i5, t2);
              var y = ((v2 = i5) === null || v2 === void 0 ? void 0 : v2._$litType$) ? this._$AH._$AD.el : document.createElement("template");
              if (function(i6, t3) {
                var d2, u3 = e(i6), v3 = u3.length !== 0;
                v3 && ((d2 = document.createElement("style")).textContent = u3.join("\n"), t3.content.appendChild(d2)), n2.add(i6), o.delete(i6), window.ShadyCSS.prepareTemplateStyles(t3, i6), v3 && window.ShadyCSS.nativeShadow && (d2 = t3.content.querySelector("style")) !== null && t3.content.appendChild(d2);
              }(a, y), f.removeChild(r), (w2 = window.ShadyCSS) === null || w2 === void 0 ? void 0 : w2.nativeShadow) {
                var p = y.content.querySelector("style");
                p !== null && f.appendChild(p.cloneNode(true));
              }
              s.insertBefore(f, c), this._$AA = h, this._$AB = c;
            } else
              l.call(this, i5, t2);
          }, w._$AC = function(n3) {
            var o2, t2 = (o2 = this.options) === null || o2 === void 0 ? void 0 : o2.scope, d2 = u.get(t2);
            d2 === void 0 && u.set(t2, d2 = new Map());
            var e2 = d2.get(n3.strings);
            return e2 === void 0 && d2.set(n3.strings, e2 = new i4(n3, this.options)), e2;
          };
        }
      });
    }), (n = globalThis.litElementPolyfillSupport) !== null && n !== void 0 || (globalThis.litElementPolyfillSupport = function(i3) {
      var n2 = i3.LitElement;
      if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        n2._$AJ = true;
        var o = n2.prototype, t = o.createRenderRoot;
        o.createRenderRoot = function() {
          return this.renderOptions.scope = this.localName, t.call(this);
        };
      }
    });
  }, typeof define == "function" && define.amd ? define(i) : i();
});
