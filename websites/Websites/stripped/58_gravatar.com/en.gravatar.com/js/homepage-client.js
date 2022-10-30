/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function(exports) {
        /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/ 		}
        /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 	};
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function(value, mode) {
        /******/ 		if(mode & 1) value = __webpack_require__(value);
        /******/ 		if(mode & 8) return value;
        /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/ 		var ns = Object.create(null);
        /******/ 		__webpack_require__.r(ns);
        /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        /******/ 		return ns;
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
    /******/ })
    /************************************************************************/
    /******/ ({

        /***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
        /*!*****************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
          \*****************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;

                for (var i = 0, arr2 = new Array(len); i < len; i++) {
                    arr2[i] = arr[i];
                }

                return arr2;
            }

            module.exports = _arrayLikeToArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
        /*!******************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
          \******************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports, __webpack_require__) {

            var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

            function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) return arrayLikeToArray(arr);
            }

            module.exports = _arrayWithoutHoles;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
        /*!***************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            module.exports = _classCallCheck;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/@babel/runtime/helpers/createClass.js":
        /*!************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
          \************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }

            module.exports = _createClass;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
        /*!****************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            function _iterableToArray(iter) {
                if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
            }

            module.exports = _iterableToArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
        /*!******************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
          \******************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            module.exports = _nonIterableSpread;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
        /*!******************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
          \******************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports, __webpack_require__) {

            var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

            var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

            var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

            var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

            function _toConsumableArray(arr) {
                return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
            }

            module.exports = _toConsumableArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
        /*!***************************************************************************!*\
          !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
          \***************************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports, __webpack_require__) {

            var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
            }

            module.exports = _unsupportedIterableToArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;

            /***/ }),

        /***/ "./node_modules/prismjs/components/prism-clike.js":
        /*!********************************************************!*\
          !*** ./node_modules/prismjs/components/prism-clike.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            Prism.languages.clike = {
                'comment': [
                    {
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: true,
                        greedy: true
                    },
                    {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: true,
                        greedy: true
                    }
                ],
                'string': {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: true
                },
                'class-name': {
                    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: true,
                    inside: {
                        'punctuation': /[.\\]/
                    }
                },
                'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                'boolean': /\b(?:true|false)\b/,
                'function': /\w+(?=\()/,
                'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                'punctuation': /[{}[\];(),.:]/
            };


            /***/ }),

        /***/ "./node_modules/prismjs/components/prism-core.js":
        /*!*******************************************************!*\
          !*** ./node_modules/prismjs/components/prism-core.js ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */(function(global) {/// <reference lib="WebWorker"/>

                var _self = (typeof window !== 'undefined')
                    ? window   // if in browser
                    : (
                        (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
                            ? self // if in worker
                            : {}   // if in node js
                    );

                /**
                 * Prism: Lightweight, robust, elegant syntax highlighting
                 *
                 * @license MIT <https://opensource.org/licenses/MIT>
                 * @author Lea Verou <https://lea.verou.me>
                 * @namespace
                 * @public
                 */
                var Prism = (function (_self){

// Private helper vars
                    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
                    var uniqueId = 0;


                    var _ = {
                        /**
                         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
                         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
                         * additional languages or plugins yourself.
                         *
                         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
                         *
                         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
                         * empty Prism object into the global scope before loading the Prism script like this:
                         *
                         * ```js
                         * window.Prism = window.Prism || {};
                         * Prism.manual = true;
                         * // add a new <script> to load Prism's script
                         * ```
                         *
                         * @default false
                         * @type {boolean}
                         * @memberof Prism
                         * @public
                         */
                        manual: _self.Prism && _self.Prism.manual,
                        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

                        /**
                         * A namespace for utility methods.
                         *
                         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
                         * change or disappear at any time.
                         *
                         * @namespace
                         * @memberof Prism
                         */
                        util: {
                            encode: function encode(tokens) {
                                if (tokens instanceof Token) {
                                    return new Token(tokens.type, encode(tokens.content), tokens.alias);
                                } else if (Array.isArray(tokens)) {
                                    return tokens.map(encode);
                                } else {
                                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                                }
                            },

                            /**
                             * Returns the name of the type of the given value.
                             *
                             * @param {any} o
                             * @returns {string}
                             * @example
                             * type(null)      === 'Null'
                             * type(undefined) === 'Undefined'
                             * type(123)       === 'Number'
                             * type('foo')     === 'String'
                             * type(true)      === 'Boolean'
                             * type([1, 2])    === 'Array'
                             * type({})        === 'Object'
                             * type(String)    === 'Function'
                             * type(/abc+/)    === 'RegExp'
                             */
                            type: function (o) {
                                return Object.prototype.toString.call(o).slice(8, -1);
                            },

                            /**
                             * Returns a unique number for the given object. Later calls will still return the same number.
                             *
                             * @param {Object} obj
                             * @returns {number}
                             */
                            objId: function (obj) {
                                if (!obj['__id']) {
                                    Object.defineProperty(obj, '__id', { value: ++uniqueId });
                                }
                                return obj['__id'];
                            },

                            /**
                             * Creates a deep clone of the given object.
                             *
                             * The main intended use of this function is to clone language definitions.
                             *
                             * @param {T} o
                             * @param {Record<number, any>} [visited]
                             * @returns {T}
                             * @template T
                             */
                            clone: function deepClone(o, visited) {
                                visited = visited || {};

                                var clone, id;
                                switch (_.util.type(o)) {
                                    case 'Object':
                                        id = _.util.objId(o);
                                        if (visited[id]) {
                                            return visited[id];
                                        }
                                        clone = /** @type {Record<string, any>} */ ({});
                                        visited[id] = clone;

                                        for (var key in o) {
                                            if (o.hasOwnProperty(key)) {
                                                clone[key] = deepClone(o[key], visited);
                                            }
                                        }

                                        return /** @type {any} */ (clone);

                                    case 'Array':
                                        id = _.util.objId(o);
                                        if (visited[id]) {
                                            return visited[id];
                                        }
                                        clone = [];
                                        visited[id] = clone;

                                        (/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
                                            clone[i] = deepClone(v, visited);
                                        });

                                        return /** @type {any} */ (clone);

                                    default:
                                        return o;
                                }
                            },

                            /**
                             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
                             *
                             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
                             *
                             * @param {Element} element
                             * @returns {string}
                             */
                            getLanguage: function (element) {
                                while (element && !lang.test(element.className)) {
                                    element = element.parentElement;
                                }
                                if (element) {
                                    return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
                                }
                                return 'none';
                            },

                            /**
                             * Returns the script element that is currently executing.
                             *
                             * This does __not__ work for line script element.
                             *
                             * @returns {HTMLScriptElement | null}
                             */
                            currentScript: function () {
                                if (typeof document === 'undefined') {
                                    return null;
                                }
                                if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
                                    return /** @type {any} */ (document.currentScript);
                                }

                                // IE11 workaround
                                // we'll get the src of the current script by parsing IE11's error stack trace
                                // this will not work for inline scripts

                                try {
                                    throw new Error();
                                } catch (err) {
                                    // Get file src url from stack. Specifically works with the format of stack traces in IE.
                                    // A stack will look like this:
                                    //
                                    // Error
                                    //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                                    //    at Global code (http://localhost/components/prism-core.js:606:1)

                                    var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
                                    if (src) {
                                        var scripts = document.getElementsByTagName('script');
                                        for (var i in scripts) {
                                            if (scripts[i].src == src) {
                                                return scripts[i];
                                            }
                                        }
                                    }
                                    return null;
                                }
                            },

                            /**
                             * Returns whether a given class is active for `element`.
                             *
                             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
                             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
                             * given class is just the given class with a `no-` prefix.
                             *
                             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
                             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
                             * ancestors have the given class or the negated version of it, then the default activation will be returned.
                             *
                             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
                             * version of it, the class is considered active.
                             *
                             * @param {Element} element
                             * @param {string} className
                             * @param {boolean} [defaultActivation=false]
                             * @returns {boolean}
                             */
                            isActive: function (element, className, defaultActivation) {
                                var no = 'no-' + className;

                                while (element) {
                                    var classList = element.classList;
                                    if (classList.contains(className)) {
                                        return true;
                                    }
                                    if (classList.contains(no)) {
                                        return false;
                                    }
                                    element = element.parentElement;
                                }
                                return !!defaultActivation;
                            }
                        },

                        /**
                         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
                         *
                         * @namespace
                         * @memberof Prism
                         * @public
                         */
                        languages: {
                            /**
                             * Creates a deep copy of the language with the given id and appends the given tokens.
                             *
                             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
                             * will be overwritten at its original position.
                             *
                             * ## Best practices
                             *
                             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
                             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
                             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
                             *
                             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
                             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
                             *
                             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
                             * @param {Grammar} redef The new tokens to append.
                             * @returns {Grammar} The new language created.
                             * @public
                             * @example
                             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
                             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
                             *     // at its original position
                             *     'comment': { ... },
                             *     // CSS doesn't have a 'color' token, so this token will be appended
                             *     'color': /\b(?:red|green|blue)\b/
                             * });
                             */
                            extend: function (id, redef) {
                                var lang = _.util.clone(_.languages[id]);

                                for (var key in redef) {
                                    lang[key] = redef[key];
                                }

                                return lang;
                            },

                            /**
                             * Inserts tokens _before_ another token in a language definition or any other grammar.
                             *
                             * ## Usage
                             *
                             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
                             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
                             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
                             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
                             * this:
                             *
                             * ```js
                             * Prism.languages.markup.style = {
                             *     // token
                             * };
                             * ```
                             *
                             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
                             * before existing tokens. For the CSS example above, you would use it like this:
                             *
                             * ```js
                             * Prism.languages.insertBefore('markup', 'cdata', {
                             *     'style': {
                             *         // token
                             *     }
                             * });
                             * ```
                             *
                             * ## Special cases
                             *
                             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
                             * will be ignored.
                             *
                             * This behavior can be used to insert tokens after `before`:
                             *
                             * ```js
                             * Prism.languages.insertBefore('markup', 'comment', {
                             *     'comment': Prism.languages.markup.comment,
                             *     // tokens after 'comment'
                             * });
                             * ```
                             *
                             * ## Limitations
                             *
                             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
                             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
                             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
                             * deleting properties which is necessary to insert at arbitrary positions.
                             *
                             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
                             * Instead, it will create a new object and replace all references to the target object with the new one. This
                             * can be done without temporarily deleting properties, so the iteration order is well-defined.
                             *
                             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
                             * you hold the target object in a variable, then the value of the variable will not change.
                             *
                             * ```js
                             * var oldMarkup = Prism.languages.markup;
                             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
                             *
                             * assert(oldMarkup !== Prism.languages.markup);
                             * assert(newMarkup === Prism.languages.markup);
                             * ```
                             *
                             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
                             * object to be modified.
                             * @param {string} before The key to insert before.
                             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
                             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
                             * object to be modified.
                             *
                             * Defaults to `Prism.languages`.
                             * @returns {Grammar} The new grammar object.
                             * @public
                             */
                            insertBefore: function (inside, before, insert, root) {
                                root = root || /** @type {any} */ (_.languages);
                                var grammar = root[inside];
                                /** @type {Grammar} */
                                var ret = {};

                                for (var token in grammar) {
                                    if (grammar.hasOwnProperty(token)) {

                                        if (token == before) {
                                            for (var newToken in insert) {
                                                if (insert.hasOwnProperty(newToken)) {
                                                    ret[newToken] = insert[newToken];
                                                }
                                            }
                                        }

                                        // Do not insert token which also occur in insert. See #1525
                                        if (!insert.hasOwnProperty(token)) {
                                            ret[token] = grammar[token];
                                        }
                                    }
                                }

                                var old = root[inside];
                                root[inside] = ret;

                                // Update references in other language definitions
                                _.languages.DFS(_.languages, function(key, value) {
                                    if (value === old && key != inside) {
                                        this[key] = ret;
                                    }
                                });

                                return ret;
                            },

                            // Traverse a language definition with Depth First Search
                            DFS: function DFS(o, callback, type, visited) {
                                visited = visited || {};

                                var objId = _.util.objId;

                                for (var i in o) {
                                    if (o.hasOwnProperty(i)) {
                                        callback.call(o, i, o[i], type || i);

                                        var property = o[i],
                                            propertyType = _.util.type(property);

                                        if (propertyType === 'Object' && !visited[objId(property)]) {
                                            visited[objId(property)] = true;
                                            DFS(property, callback, null, visited);
                                        }
                                        else if (propertyType === 'Array' && !visited[objId(property)]) {
                                            visited[objId(property)] = true;
                                            DFS(property, callback, i, visited);
                                        }
                                    }
                                }
                            }
                        },

                        plugins: {},

                        /**
                         * This is the most high-level function in Prism’s API.
                         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
                         * each one of them.
                         *
                         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
                         *
                         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
                         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
                         * @memberof Prism
                         * @public
                         */
                        highlightAll: function(async, callback) {
                            _.highlightAllUnder(document, async, callback);
                        },

                        /**
                         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
                         * {@link Prism.highlightElement} on each one of them.
                         *
                         * The following hooks will be run:
                         * 1. `before-highlightall`
                         * 2. `before-all-elements-highlight`
                         * 3. All hooks of {@link Prism.highlightElement} for each element.
                         *
                         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
                         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
                         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
                         * @memberof Prism
                         * @public
                         */
                        highlightAllUnder: function(container, async, callback) {
                            var env = {
                                callback: callback,
                                container: container,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };

                            _.hooks.run('before-highlightall', env);

                            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

                            _.hooks.run('before-all-elements-highlight', env);

                            for (var i = 0, element; element = env.elements[i++];) {
                                _.highlightElement(element, async === true, env.callback);
                            }
                        },

                        /**
                         * Highlights the code inside a single element.
                         *
                         * The following hooks will be run:
                         * 1. `before-sanity-check`
                         * 2. `before-highlight`
                         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
                         * 4. `before-insert`
                         * 5. `after-highlight`
                         * 6. `complete`
                         *
                         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
                         * the element's language.
                         *
                         * @param {Element} element The element containing the code.
                         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
                         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
                         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
                         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
                         *
                         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
                         * asynchronous highlighting to work. You can build your own bundle on the
                         * [Download page](https://prismjs.com/download.html).
                         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
                         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
                         * @memberof Prism
                         * @public
                         */
                        highlightElement: function(element, async, callback) {
                            // Find language
                            var language = _.util.getLanguage(element);
                            var grammar = _.languages[language];

                            // Set language on the element, if not present
                            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

                            // Set language on the parent, for styling
                            var parent = element.parentElement;
                            if (parent && parent.nodeName.toLowerCase() === 'pre') {
                                parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                            }

                            var code = element.textContent;

                            var env = {
                                element: element,
                                language: language,
                                grammar: grammar,
                                code: code
                            };

                            function insertHighlightedCode(highlightedCode) {
                                env.highlightedCode = highlightedCode;

                                _.hooks.run('before-insert', env);

                                env.element.innerHTML = env.highlightedCode;

                                _.hooks.run('after-highlight', env);
                                _.hooks.run('complete', env);
                                callback && callback.call(env.element);
                            }

                            _.hooks.run('before-sanity-check', env);

                            if (!env.code) {
                                _.hooks.run('complete', env);
                                callback && callback.call(env.element);
                                return;
                            }

                            _.hooks.run('before-highlight', env);

                            if (!env.grammar) {
                                insertHighlightedCode(_.util.encode(env.code));
                                return;
                            }

                            if (async && _self.Worker) {
                                var worker = new Worker(_.filename);

                                worker.onmessage = function(evt) {
                                    insertHighlightedCode(evt.data);
                                };

                                worker.postMessage(JSON.stringify({
                                    language: env.language,
                                    code: env.code,
                                    immediateClose: true
                                }));
                            }
                            else {
                                insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
                            }
                        },

                        /**
                         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
                         * and the language definitions to use, and returns a string with the HTML produced.
                         *
                         * The following hooks will be run:
                         * 1. `before-tokenize`
                         * 2. `after-tokenize`
                         * 3. `wrap`: On each {@link Token}.
                         *
                         * @param {string} text A string with the code to be highlighted.
                         * @param {Grammar} grammar An object containing the tokens to use.
                         *
                         * Usually a language definition like `Prism.languages.markup`.
                         * @param {string} language The name of the language definition passed to `grammar`.
                         * @returns {string} The highlighted HTML.
                         * @memberof Prism
                         * @public
                         * @example
                         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
                         */
                        highlight: function (text, grammar, language) {
                            var env = {
                                code: text,
                                grammar: grammar,
                                language: language
                            };
                            _.hooks.run('before-tokenize', env);
                            env.tokens = _.tokenize(env.code, env.grammar);
                            _.hooks.run('after-tokenize', env);
                            return Token.stringify(_.util.encode(env.tokens), env.language);
                        },

                        /**
                         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
                         * and the language definitions to use, and returns an array with the tokenized code.
                         *
                         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
                         *
                         * This method could be useful in other contexts as well, as a very crude parser.
                         *
                         * @param {string} text A string with the code to be highlighted.
                         * @param {Grammar} grammar An object containing the tokens to use.
                         *
                         * Usually a language definition like `Prism.languages.markup`.
                         * @returns {TokenStream} An array of strings and tokens, a token stream.
                         * @memberof Prism
                         * @public
                         * @example
                         * let code = `var foo = 0;`;
                         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
                         * tokens.forEach(token => {
                         *     if (token instanceof Prism.Token && token.type === 'number') {
                         *         console.log(`Found numeric literal: ${token.content}`);
                         *     }
                         * });
                         */
                        tokenize: function(text, grammar) {
                            var rest = grammar.rest;
                            if (rest) {
                                for (var token in rest) {
                                    grammar[token] = rest[token];
                                }

                                delete grammar.rest;
                            }

                            var tokenList = new LinkedList();
                            addAfter(tokenList, tokenList.head, text);

                            matchGrammar(text, tokenList, grammar, tokenList.head, 0);

                            return toArray(tokenList);
                        },

                        /**
                         * @namespace
                         * @memberof Prism
                         * @public
                         */
                        hooks: {
                            all: {},

                            /**
                             * Adds the given callback to the list of callbacks for the given hook.
                             *
                             * The callback will be invoked when the hook it is registered for is run.
                             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
                             *
                             * One callback function can be registered to multiple hooks and the same hook multiple times.
                             *
                             * @param {string} name The name of the hook.
                             * @param {HookCallback} callback The callback function which is given environment variables.
                             * @public
                             */
                            add: function (name, callback) {
                                var hooks = _.hooks.all;

                                hooks[name] = hooks[name] || [];

                                hooks[name].push(callback);
                            },

                            /**
                             * Runs a hook invoking all registered callbacks with the given environment variables.
                             *
                             * Callbacks will be invoked synchronously and in the order in which they were registered.
                             *
                             * @param {string} name The name of the hook.
                             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
                             * @public
                             */
                            run: function (name, env) {
                                var callbacks = _.hooks.all[name];

                                if (!callbacks || !callbacks.length) {
                                    return;
                                }

                                for (var i=0, callback; callback = callbacks[i++];) {
                                    callback(env);
                                }
                            }
                        },

                        Token: Token
                    };
                    _self.Prism = _;


// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

                    /**
                     * Creates a new token.
                     *
                     * @param {string} type See {@link Token#type type}
                     * @param {string | TokenStream} content See {@link Token#content content}
                     * @param {string|string[]} [alias] The alias(es) of the token.
                     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
                     * @class
                     * @global
                     * @public
                     */
                    function Token(type, content, alias, matchedStr) {
                        /**
                         * The type of the token.
                         *
                         * This is usually the key of a pattern in a {@link Grammar}.
                         *
                         * @type {string}
                         * @see GrammarToken
                         * @public
                         */
                        this.type = type;
                        /**
                         * The strings or tokens contained by this token.
                         *
                         * This will be a token stream if the pattern matched also defined an `inside` grammar.
                         *
                         * @type {string | TokenStream}
                         * @public
                         */
                        this.content = content;
                        /**
                         * The alias(es) of the token.
                         *
                         * @type {string|string[]}
                         * @see GrammarToken
                         * @public
                         */
                        this.alias = alias;
                        // Copy of the full string this token was created from
                        this.length = (matchedStr || '').length | 0;
                    }

                    /**
                     * A token stream is an array of strings and {@link Token Token} objects.
                     *
                     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
                     * them.
                     *
                     * 1. No adjacent strings.
                     * 2. No empty strings.
                     *
                     *    The only exception here is the token stream that only contains the empty string and nothing else.
                     *
                     * @typedef {Array<string | Token>} TokenStream
                     * @global
                     * @public
                     */

                    /**
                     * Converts the given token or token stream to an HTML representation.
                     *
                     * The following hooks will be run:
                     * 1. `wrap`: On each {@link Token}.
                     *
                     * @param {string | Token | TokenStream} o The token or token stream to be converted.
                     * @param {string} language The name of current language.
                     * @returns {string} The HTML representation of the token or token stream.
                     * @memberof Token
                     * @static
                     */
                    Token.stringify = function stringify(o, language) {
                        if (typeof o == 'string') {
                            return o;
                        }
                        if (Array.isArray(o)) {
                            var s = '';
                            o.forEach(function (e) {
                                s += stringify(e, language);
                            });
                            return s;
                        }

                        var env = {
                            type: o.type,
                            content: stringify(o.content, language),
                            tag: 'span',
                            classes: ['token', o.type],
                            attributes: {},
                            language: language
                        };

                        var aliases = o.alias;
                        if (aliases) {
                            if (Array.isArray(aliases)) {
                                Array.prototype.push.apply(env.classes, aliases);
                            } else {
                                env.classes.push(aliases);
                            }
                        }

                        _.hooks.run('wrap', env);

                        var attributes = '';
                        for (var name in env.attributes) {
                            attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
                        }

                        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
                    };

                    /**
                     * @param {RegExp} pattern
                     * @param {number} pos
                     * @param {string} text
                     * @param {boolean} lookbehind
                     * @returns {RegExpExecArray | null}
                     */
                    function matchPattern(pattern, pos, text, lookbehind) {
                        pattern.lastIndex = pos;
                        var match = pattern.exec(text);
                        if (match && lookbehind && match[1]) {
                            // change the match to remove the text matched by the Prism lookbehind group
                            var lookbehindLength = match[1].length;
                            match.index += lookbehindLength;
                            match[0] = match[0].slice(lookbehindLength);
                        }
                        return match;
                    }

                    /**
                     * @param {string} text
                     * @param {LinkedList<string | Token>} tokenList
                     * @param {any} grammar
                     * @param {LinkedListNode<string | Token>} startNode
                     * @param {number} startPos
                     * @param {RematchOptions} [rematch]
                     * @returns {void}
                     * @private
                     *
                     * @typedef RematchOptions
                     * @property {string} cause
                     * @property {number} reach
                     */
                    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
                        for (var token in grammar) {
                            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                                continue;
                            }

                            var patterns = grammar[token];
                            patterns = Array.isArray(patterns) ? patterns : [patterns];

                            for (var j = 0; j < patterns.length; ++j) {
                                if (rematch && rematch.cause == token + ',' + j) {
                                    return;
                                }

                                var patternObj = patterns[j],
                                    inside = patternObj.inside,
                                    lookbehind = !!patternObj.lookbehind,
                                    greedy = !!patternObj.greedy,
                                    alias = patternObj.alias;

                                if (greedy && !patternObj.pattern.global) {
                                    // Without the global flag, lastIndex won't work
                                    var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                                    patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
                                }

                                /** @type {RegExp} */
                                var pattern = patternObj.pattern || patternObj;

                                for ( // iterate the token list and keep track of the current token/string position
                                    var currentNode = startNode.next, pos = startPos;
                                    currentNode !== tokenList.tail;
                                    pos += currentNode.value.length, currentNode = currentNode.next
                                ) {

                                    if (rematch && pos >= rematch.reach) {
                                        break;
                                    }

                                    var str = currentNode.value;

                                    if (tokenList.length > text.length) {
                                        // Something went terribly wrong, ABORT, ABORT!
                                        return;
                                    }

                                    if (str instanceof Token) {
                                        continue;
                                    }

                                    var removeCount = 1; // this is the to parameter of removeBetween
                                    var match;

                                    if (greedy) {
                                        match = matchPattern(pattern, pos, text, lookbehind);
                                        if (!match) {
                                            break;
                                        }

                                        var from = match.index;
                                        var to = match.index + match[0].length;
                                        var p = pos;

                                        // find the node that contains the match
                                        p += currentNode.value.length;
                                        while (from >= p) {
                                            currentNode = currentNode.next;
                                            p += currentNode.value.length;
                                        }
                                        // adjust pos (and p)
                                        p -= currentNode.value.length;
                                        pos = p;

                                        // the current node is a Token, then the match starts inside another Token, which is invalid
                                        if (currentNode.value instanceof Token) {
                                            continue;
                                        }

                                        // find the last node which is affected by this match
                                        for (
                                            var k = currentNode;
                                            k !== tokenList.tail && (p < to || typeof k.value === 'string');
                                            k = k.next
                                        ) {
                                            removeCount++;
                                            p += k.value.length;
                                        }
                                        removeCount--;

                                        // replace with the new match
                                        str = text.slice(pos, p);
                                        match.index -= pos;
                                    } else {
                                        match = matchPattern(pattern, 0, str, lookbehind);
                                        if (!match) {
                                            continue;
                                        }
                                    }

                                    var from = match.index,
                                        matchStr = match[0],
                                        before = str.slice(0, from),
                                        after = str.slice(from + matchStr.length);

                                    var reach = pos + str.length;
                                    if (rematch && reach > rematch.reach) {
                                        rematch.reach = reach;
                                    }

                                    var removeFrom = currentNode.prev;

                                    if (before) {
                                        removeFrom = addAfter(tokenList, removeFrom, before);
                                        pos += before.length;
                                    }

                                    removeRange(tokenList, removeFrom, removeCount);

                                    var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                                    currentNode = addAfter(tokenList, removeFrom, wrapped);

                                    if (after) {
                                        addAfter(tokenList, currentNode, after);
                                    }

                                    if (removeCount > 1) {
                                        // at least one Token object was removed, so we have to do some rematching
                                        // this can only happen if the current pattern is greedy
                                        matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
                                            cause: token + ',' + j,
                                            reach: reach
                                        });
                                    }
                                }
                            }
                        }
                    }

                    /**
                     * @typedef LinkedListNode
                     * @property {T} value
                     * @property {LinkedListNode<T> | null} prev The previous node.
                     * @property {LinkedListNode<T> | null} next The next node.
                     * @template T
                     * @private
                     */

                    /**
                     * @template T
                     * @private
                     */
                    function LinkedList() {
                        /** @type {LinkedListNode<T>} */
                        var head = { value: null, prev: null, next: null };
                        /** @type {LinkedListNode<T>} */
                        var tail = { value: null, prev: head, next: null };
                        head.next = tail;

                        /** @type {LinkedListNode<T>} */
                        this.head = head;
                        /** @type {LinkedListNode<T>} */
                        this.tail = tail;
                        this.length = 0;
                    }

                    /**
                     * Adds a new node with the given value to the list.
                     * @param {LinkedList<T>} list
                     * @param {LinkedListNode<T>} node
                     * @param {T} value
                     * @returns {LinkedListNode<T>} The added node.
                     * @template T
                     */
                    function addAfter(list, node, value) {
                        // assumes that node != list.tail && values.length >= 0
                        var next = node.next;

                        var newNode = { value: value, prev: node, next: next };
                        node.next = newNode;
                        next.prev = newNode;
                        list.length++;

                        return newNode;
                    }
                    /**
                     * Removes `count` nodes after the given node. The given node will not be removed.
                     * @param {LinkedList<T>} list
                     * @param {LinkedListNode<T>} node
                     * @param {number} count
                     * @template T
                     */
                    function removeRange(list, node, count) {
                        var next = node.next;
                        for (var i = 0; i < count && next !== list.tail; i++) {
                            next = next.next;
                        }
                        node.next = next;
                        next.prev = node;
                        list.length -= i;
                    }
                    /**
                     * @param {LinkedList<T>} list
                     * @returns {T[]}
                     * @template T
                     */
                    function toArray(list) {
                        var array = [];
                        var node = list.head.next;
                        while (node !== list.tail) {
                            array.push(node.value);
                            node = node.next;
                        }
                        return array;
                    }


                    if (!_self.document) {
                        if (!_self.addEventListener) {
                            // in Node.js
                            return _;
                        }

                        if (!_.disableWorkerMessageHandler) {
                            // In worker
                            _self.addEventListener('message', function (evt) {
                                var message = JSON.parse(evt.data),
                                    lang = message.language,
                                    code = message.code,
                                    immediateClose = message.immediateClose;

                                _self.postMessage(_.highlight(code, _.languages[lang], lang));
                                if (immediateClose) {
                                    _self.close();
                                }
                            }, false);
                        }

                        return _;
                    }

// Get current script and highlight
                    var script = _.util.currentScript();

                    if (script) {
                        _.filename = script.src;

                        if (script.hasAttribute('data-manual')) {
                            _.manual = true;
                        }
                    }

                    function highlightAutomaticallyCallback() {
                        if (!_.manual) {
                            _.highlightAll();
                        }
                    }

                    if (!_.manual) {
                        // If the document state is "loading", then we'll use DOMContentLoaded.
                        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
                        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
                        // might take longer one animation frame to execute which can create a race condition where only some plugins have
                        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
                        // See https://github.com/PrismJS/prism/issues/2102
                        var readyState = document.readyState;
                        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
                            document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
                        } else {
                            if (window.requestAnimationFrame) {
                                window.requestAnimationFrame(highlightAutomaticallyCallback);
                            } else {
                                window.setTimeout(highlightAutomaticallyCallback, 16);
                            }
                        }
                    }

                    return _;

                })(_self);

                if ( true && module.exports) {
                    module.exports = Prism;
                }

// hack for components to work correctly in node.js
                if (typeof global !== 'undefined') {
                    global.Prism = Prism;
                }

// some additional documentation/types

                /**
                 * The expansion of a simple `RegExp` literal to support additional properties.
                 *
                 * @typedef GrammarToken
                 * @property {RegExp} pattern The regular expression of the token.
                 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
                 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
                 * @property {boolean} [greedy=false] Whether the token is greedy.
                 * @property {string|string[]} [alias] An optional alias or list of aliases.
                 * @property {Grammar} [inside] The nested grammar of this token.
                 *
                 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
                 *
                 * This can be used to make nested and even recursive language definitions.
                 *
                 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
                 * each another.
                 * @global
                 * @public
                 */

                /**
                 * @typedef Grammar
                 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
                 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
                 * @global
                 * @public
                 */

                /**
                 * A function which will invoked after an element was successfully highlighted.
                 *
                 * @callback HighlightCallback
                 * @param {Element} element The element successfully highlighted.
                 * @returns {void}
                 * @global
                 * @public
                 */

                /**
                 * @callback HookCallback
                 * @param {Object<string, any>} env The environment variables of the hook.
                 * @returns {void}
                 * @global
                 * @public
                 */

                /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

            /***/ }),

        /***/ "./node_modules/prismjs/components/prism-javascript.js":
        /*!*************************************************************!*\
          !*** ./node_modules/prismjs/components/prism-javascript.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            Prism.languages.javascript = Prism.languages.extend('clike', {
                'class-name': [
                    Prism.languages.clike['class-name'],
                    {
                        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                        lookbehind: true
                    }
                ],
                'keyword': [
                    {
                        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                        lookbehind: true
                    },
                    {
                        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                        lookbehind: true
                    },
                ],
                // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
                'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            });

            Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

            Prism.languages.insertBefore('javascript', 'keyword', {
                'regex': {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                    lookbehind: true,
                    greedy: true,
                    inside: {
                        'regex-source': {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: true,
                            alias: 'language-regex',
                            inside: Prism.languages.regex
                        },
                        'regex-flags': /[a-z]+$/,
                        'regex-delimiter': /^\/|\/$/
                    }
                },
                // This must be declared before keyword because we use "function" inside the look-forward
                'function-variable': {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: 'function'
                },
                'parameter': [
                    {
                        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                        lookbehind: true,
                        inside: Prism.languages.javascript
                    },
                    {
                        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                        inside: Prism.languages.javascript
                    },
                    {
                        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                        lookbehind: true,
                        inside: Prism.languages.javascript
                    },
                    {
                        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                        lookbehind: true,
                        inside: Prism.languages.javascript
                    }
                ],
                'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            });

            Prism.languages.insertBefore('javascript', 'string', {
                'template-string': {
                    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                    greedy: true,
                    inside: {
                        'template-punctuation': {
                            pattern: /^`|`$/,
                            alias: 'string'
                        },
                        'interpolation': {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                            lookbehind: true,
                            inside: {
                                'interpolation-punctuation': {
                                    pattern: /^\${|}$/,
                                    alias: 'punctuation'
                                },
                                rest: Prism.languages.javascript
                            }
                        },
                        'string': /[\s\S]+/
                    }
                }
            });

            if (Prism.languages.markup) {
                Prism.languages.markup.tag.addInlined('script', 'javascript');
            }

            Prism.languages.js = Prism.languages.javascript;


            /***/ }),

        /***/ "./node_modules/prismjs/components/prism-markup-templating.js":
        /*!********************************************************************!*\
          !*** ./node_modules/prismjs/components/prism-markup-templating.js ***!
          \********************************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            (function (Prism) {

                /**
                 * Returns the placeholder for the given language id and index.
                 *
                 * @param {string} language
                 * @param {string|number} index
                 * @returns {string}
                 */
                function getPlaceholder(language, index) {
                    return '___' + language.toUpperCase() + index + '___';
                }

                Object.defineProperties(Prism.languages['markup-templating'] = {}, {
                    buildPlaceholders: {
                        /**
                         * Tokenize all inline templating expressions matching `placeholderPattern`.
                         *
                         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
                         * `true` will be replaced.
                         *
                         * @param {object} env The environment of the `before-tokenize` hook.
                         * @param {string} language The language id.
                         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
                         * @param {(match: string) => boolean} [replaceFilter]
                         */
                        value: function (env, language, placeholderPattern, replaceFilter) {
                            if (env.language !== language) {
                                return;
                            }

                            var tokenStack = env.tokenStack = [];

                            env.code = env.code.replace(placeholderPattern, function (match) {
                                if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
                                    return match;
                                }
                                var i = tokenStack.length;
                                var placeholder;

                                // Check for existing strings
                                while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1)
                                    ++i;

                                // Create a sparse array
                                tokenStack[i] = match;

                                return placeholder;
                            });

                            // Switch the grammar to markup
                            env.grammar = Prism.languages.markup;
                        }
                    },
                    tokenizePlaceholders: {
                        /**
                         * Replace placeholders with proper tokens after tokenizing.
                         *
                         * @param {object} env The environment of the `after-tokenize` hook.
                         * @param {string} language The language id.
                         */
                        value: function (env, language) {
                            if (env.language !== language || !env.tokenStack) {
                                return;
                            }

                            // Switch the grammar back
                            env.grammar = Prism.languages[language];

                            var j = 0;
                            var keys = Object.keys(env.tokenStack);

                            function walkTokens(tokens) {
                                for (var i = 0; i < tokens.length; i++) {
                                    // all placeholders are replaced already
                                    if (j >= keys.length) {
                                        break;
                                    }

                                    var token = tokens[i];
                                    if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
                                        var k = keys[j];
                                        var t = env.tokenStack[k];
                                        var s = typeof token === 'string' ? token : token.content;
                                        var placeholder = getPlaceholder(language, k);

                                        var index = s.indexOf(placeholder);
                                        if (index > -1) {
                                            ++j;

                                            var before = s.substring(0, index);
                                            var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                                            var after = s.substring(index + placeholder.length);

                                            var replacement = [];
                                            if (before) {
                                                replacement.push.apply(replacement, walkTokens([before]));
                                            }
                                            replacement.push(middle);
                                            if (after) {
                                                replacement.push.apply(replacement, walkTokens([after]));
                                            }

                                            if (typeof token === 'string') {
                                                tokens.splice.apply(tokens, [i, 1].concat(replacement));
                                            } else {
                                                token.content = replacement;
                                            }
                                        }
                                    } else if (token.content /* && typeof token.content !== 'string' */) {
                                        walkTokens(token.content);
                                    }
                                }

                                return tokens;
                            }

                            walkTokens(env.tokens);
                        }
                    }
                });

            }(Prism));


            /***/ }),

        /***/ "./node_modules/prismjs/components/prism-php.js":
        /*!******************************************************!*\
          !*** ./node_modules/prismjs/components/prism-php.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            /**
             * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
             * Modified by Miles Johnson: http://milesj.me
             * Rewritten by Tom Pavelec
             *
             * Supports PHP 5.3 - 8.0
             */
            (function (Prism) {
                var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
                var constant = [
                    {
                        pattern: /\b(?:false|true)\b/i,
                        alias: 'boolean'
                    },
                    /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
                    /\b(?:null)\b/i,
                ];
                var number = /\b0b[01]+\b|\b0x[\da-f]+\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+)(?:e[+-]?\d+)?/i;
                var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
                var punctuation = /[{}\[\](),:;]/;

                Prism.languages.php = {
                    'delimiter': {
                        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                        alias: 'important'
                    },
                    'comment': comment,
                    'variable': /\$+(?:\w+\b|(?={))/i,
                    'package': {
                        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                        lookbehind: true,
                        inside: {
                            'punctuation': /\\/
                        }
                    },
                    'keyword': [
                        {
                            pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
                            alias: 'type-casting',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
                            alias: 'type-hint',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
                            alias: 'type-hint',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
                            alias: 'return-type',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /(\)\s*:\s*(?:\?\s*)?[a-z0-9_|]\|\s*)(?:null|false)\b/i,
                            alias: 'return-type',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
                            alias: 'type-declaration',
                            greedy: true
                        },
                        {
                            pattern: /(\|\s*)(?:null|false)\b/i,
                            alias: 'type-declaration',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                            alias: 'static-context',
                            greedy: true
                        },
                        /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i
                    ],
                    'argument-name': /\b[a-z_]\w*(?=\s*:(?!:))/i,
                    'class-name': [
                        {
                            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                            greedy: true
                        },
                        {
                            pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                            alias: 'class-name-fully-qualified',
                            greedy: true,
                            lookbehind: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        {
                            pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                            alias: 'class-name-fully-qualified',
                            greedy: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        {
                            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                            alias: 'class-name-fully-qualified',
                            greedy: true,
                            lookbehind: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        {
                            pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                            alias: 'type-declaration',
                            greedy: true
                        },
                        {
                            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                            alias: ['class-name-fully-qualified', 'type-declaration'],
                            greedy: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        {
                            pattern: /\b[a-z_]\w*(?=\s*::)/i,
                            alias: 'static-context',
                            greedy: true
                        },
                        {
                            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                            alias: ['class-name-fully-qualified', 'static-context'],
                            greedy: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        {
                            pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                            alias: 'type-hint',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                            alias: ['class-name-fully-qualified', 'type-hint'],
                            greedy: true,
                            lookbehind: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        },
                        {
                            pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                            alias: 'return-type',
                            greedy: true,
                            lookbehind: true
                        },
                        {
                            pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                            alias: ['class-name-fully-qualified', 'return-type'],
                            greedy: true,
                            lookbehind: true,
                            inside: {
                                'punctuation': /\\/
                            }
                        }
                    ],
                    'constant': constant,
                    'function': /\w+\s*(?=\()/,
                    'property': {
                        pattern: /(->)[\w]+/,
                        lookbehind: true
                    },
                    'number': number,
                    'operator': operator,
                    'punctuation': punctuation
                };

                var string_interpolation = {
                    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
                    lookbehind: true,
                    inside: Prism.languages.php
                };

                var string = [
                    {
                        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                        alias: 'nowdoc-string',
                        greedy: true,
                        inside: {
                            'delimiter': {
                                pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                                alias: 'symbol',
                                inside: {
                                    'punctuation': /^<<<'?|[';]$/
                                }
                            }
                        }
                    },
                    {
                        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                        alias: 'heredoc-string',
                        greedy: true,
                        inside: {
                            'delimiter': {
                                pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                                alias: 'symbol',
                                inside: {
                                    'punctuation': /^<<<"?|[";]$/
                                }
                            },
                            'interpolation': string_interpolation // See below
                        }
                    },
                    {
                        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                        alias: 'backtick-quoted-string',
                        greedy: true
                    },
                    {
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        alias: 'single-quoted-string',
                        greedy: true
                    },
                    {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        alias: 'double-quoted-string',
                        greedy: true,
                        inside: {
                            'interpolation': string_interpolation // See below
                        }
                    }
                ];

                Prism.languages.insertBefore('php', 'variable', {
                    'string': string,
                });

                Prism.languages.insertBefore('php', 'variable', {
                    'attribute': {
                        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/mi,
                        greedy: true,
                        inside: {
                            'attribute-content': {
                                pattern: /^(#\[)[\s\S]+(?=]$)/,
                                lookbehind: true,
                                // inside can appear subset of php
                                inside: {
                                    'comment': comment,
                                    'string': string,
                                    'attribute-class-name': [
                                        {
                                            pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                            alias: 'class-name',
                                            greedy: true,
                                            lookbehind: true
                                        },
                                        {
                                            pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                            alias: [
                                                'class-name',
                                                'class-name-fully-qualified'
                                            ],
                                            greedy: true,
                                            lookbehind: true,
                                            inside: {
                                                'punctuation': /\\/
                                            }
                                        }
                                    ],
                                    'constant': constant,
                                    'number': number,
                                    'operator': operator,
                                    'punctuation': punctuation
                                }
                            },
                            'delimiter': {
                                pattern: /^#\[|]$/,
                                alias: 'punctuation'
                            }
                        }
                    },
                });

                Prism.hooks.add('before-tokenize', function(env) {
                    if (!/<\?/.test(env.code)) {
                        return;
                    }

                    var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/ig;
                    Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
                });

                Prism.hooks.add('after-tokenize', function(env) {
                    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
                });

            }(Prism));


            /***/ }),

        /***/ "./node_modules/webpack/buildin/global.js":
        /*!***********************************!*\
          !*** (webpack)/buildin/global.js ***!
          \***********************************/
        /*! no static exports found */
        /***/ (function(module, exports) {

            var g;

// This works in non-strict mode
            g = (function() {
                return this;
            })();

            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

            module.exports = g;


            /***/ }),

        /***/ "./src/js/index.js":
        /*!*************************!*\
          !*** ./src/js/index.js ***!
          \*************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _modules_bottom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bottom */ "./src/js/modules/bottom.js");
            /* harmony import */ var _modules_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/editor */ "./src/js/modules/editor.js");
            /* harmony import */ var _modules_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/global */ "./src/js/modules/global.js");
            /* harmony import */ var _modules_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hero */ "./src/js/modules/hero.js");
            /* harmony import */ var _modules_lazy_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/lazy-load */ "./src/js/modules/lazy-load.js");
            /* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navigation */ "./src/js/modules/navigation.js");
            /* harmony import */ var _modules_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/video */ "./src/js/modules/video.js");
            /*
             * The main script file for all pages.
             */

            /**
             * Internal Dependencies
             */








            /***/ }),

        /***/ "./src/js/modules/bottom.js":
        /*!**********************************!*\
          !*** ./src/js/modules/bottom.js ***!
          \**********************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _utilities_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/avatar */ "./src/js/utilities/avatar.js");
            /* harmony import */ var _utilities_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/init */ "./src/js/utilities/init.js");
            /* harmony import */ var _utilities_promise_chain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/promise-chain */ "./src/js/utilities/promise-chain.js");
            /*
             * Animate the final Gravatar logo on the bottom of the page.
             */

            /**
             * Internal Dependencies
             */



            /*
             * Init
             */

            Object(_utilities_init__WEBPACK_IMPORTED_MODULE_1__["default"])(function (document) {
                /*
                 * Elements
                 */
                var scopeElement = document.querySelector('#g-bottom-animation');

                if (!scopeElement) {
                    return;
                }

                var animationTrigger = scopeElement.querySelector('.g-js-animation-trigger');
                var avatarElement = scopeElement.querySelector('.g-avatar');

                if (!(animationTrigger && avatarElement)) {
                    return;
                }
                /*
                 * Configuration
                 */


                var getData = function getData(key) {
                    return scopeElement.getAttribute("data-g-".concat(key));
                };

                var ANIMATION_STEP_DURATION = parseInt(getData('animation-step-duration'), 10) || 0;
                var ANIMATION_DELAY = parseInt(getData('animation-delay'), 10) || 0;
                var ANIMATION_PREDELAY = Math.max(0, ANIMATION_DELAY - ANIMATION_STEP_DURATION);
                var IMAGE_SET = JSON.parse(getData('image-paths')) || [];
                /*
                 * Logic
                 */

                var animationTimeout;
                var avatar = new _utilities_avatar__WEBPACK_IMPORTED_MODULE_0__["default"](avatarElement);
                var animationSteps = new _utilities_promise_chain__WEBPACK_IMPORTED_MODULE_2__["default"]();

                var transitionTo = function transitionTo(imagePath) {
                    return avatar.transitionTo(imagePath, ANIMATION_STEP_DURATION);
                };

                IMAGE_SET.forEach(function (imagePath) {
                    animationSteps.define(function () {
                        return transitionTo(imagePath);
                    });
                });

                var resetAnimation = function resetAnimation() {
                    return avatar.set();
                };

                var startAnimation = function startAnimation() {
                    return animationSteps.run(transitionTo);
                };

                var stopAnimation = function stopAnimation() {
                    return animationSteps.stop();
                };

                var animationObserver = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        clearTimeout(animationTimeout);
                        var intersectionRatio = entry.intersectionRatio;

                        if (!intersectionRatio) {
                            return stopAnimation();
                        }

                        if (intersectionRatio >= 0.5) {
                            animationTimeout = setTimeout(startAnimation, ANIMATION_PREDELAY);
                        }
                    });
                }, {
                    threshold: [0, 0.5]
                });
                /*
                 * Init
                 */

                resetAnimation().then(function () {
                    animationObserver.observe(animationTrigger);
                }).catch(resetAnimation);
            });

            /***/ }),

        /***/ "./src/js/modules/editor.js":
        /*!**********************************!*\
          !*** ./src/js/modules/editor.js ***!
          \**********************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js");
            /* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");
            /* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
            /* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/prismjs/components/prism-markup-templating.js");
            /* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/prismjs/components/prism-php.js");
            /* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_4__);
            /*
             * Enable syntax highlighting in the editor mockup. Based on Prism.js which
             * activates automatically.
             */

            /**
             * External Dependencies
             */






            /***/ }),

        /***/ "./src/js/modules/global.js":
        /*!**********************************!*\
          !*** ./src/js/modules/global.js ***!
          \**********************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _utilities_preinit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/preinit */ "./src/js/utilities/preinit.js");
            /*
             * Set appriopriate global class names once the document is ready and while
             * the viewport is being resized in order to control the JS-dependent styling.
             */

            /**
             * Internal Dependencies
             */

            /*
             * Constants
             */

            var STATE_READY_CLASS_NAME = 'g-js';
            var STATE_RESIZE_CLASS_NAME = 'g-js-resize';
            var STATE_HOVER_CLASS_NAME = 'g-js-hover';
            var RESIZE_END_DELAY = 500;
            /*
             * Init
             */

            Object(_utilities_preinit__WEBPACK_IMPORTED_MODULE_0__["default"])(function (document) {
                var rootClassList = document.documentElement.classList;
                rootClassList.add(STATE_READY_CLASS_NAME);
                /*
                 * Resizing class name
                 */

                var resizeEndTimeout;
                addEventListener('resize', function () {
                    clearTimeout(resizeEndTimeout);
                    rootClassList.add(STATE_RESIZE_CLASS_NAME);
                    resizeEndTimeout = setTimeout(function () {
                        rootClassList.remove(STATE_RESIZE_CLASS_NAME);
                    }, RESIZE_END_DELAY);
                });
                /*
                 * Hover class name
                 */

                var pointerMedia = matchMedia('(pointer:fine)');

                var handlePointerMedia = function handlePointerMedia(event) {
                    var method = (event || pointerMedia).matches ? 'add' : 'remove';
                    rootClassList[method](STATE_HOVER_CLASS_NAME);
                };

                pointerMedia.addEventListener('change', handlePointerMedia);
                handlePointerMedia();
            });

            /***/ }),

        /***/ "./src/js/modules/hero.js":
        /*!********************************!*\
          !*** ./src/js/modules/hero.js ***!
          \********************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _utilities_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/avatar */ "./src/js/utilities/avatar.js");
            /* harmony import */ var _utilities_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/init */ "./src/js/utilities/init.js");
            /* harmony import */ var _utilities_on_transition_end__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/on-transition-end */ "./src/js/utilities/on-transition-end.js");
            /* harmony import */ var _utilities_promise_chain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/promise-chain */ "./src/js/utilities/promise-chain.js");
            /* harmony import */ var _utilities_wait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/wait */ "./src/js/utilities/wait.js");
            /*
             * Animate the avatars in the hero section.
             */

            /**
             * Internal Dependencies
             */





            /*
             * Constants
             */

            var STATE_ON_CLASS_NAME = 'g-js-on';
            /*
             * Init
             */

            Object(_utilities_init__WEBPACK_IMPORTED_MODULE_1__["default"])(function (document) {
                /*
                 * Elements
                 */
                var scopeElement = document.querySelector('#g-hero-animation');

                if (!scopeElement) {
                    return;
                }

                var animationTrigger = scopeElement;
                var browserElements = scopeElement.querySelectorAll('.g-browser');
                /* eslint-disable-next-line @wordpress/no-unused-vars-before-return */

                var avatarElements = scopeElement.querySelectorAll('.g-avatar');

                if (!(animationTrigger && browserElements.length > 0)) {
                    return;
                }
                /*
                 * Configuration
                 */


                var getData = function getData(key) {
                    return scopeElement.getAttribute("data-g-".concat(key));
                };

                var ANIMATION_DELAY = parseInt(getData('animation-delay'), 10) || 0;
                var ANIMATION_STEP_DURATION = parseInt(getData('animation-step-duration'), 10) || 0;
                var IMAGE_SET = JSON.parse(getData('image-paths')) || [];
                /*
                 * Logic
                 */

                var avatar = new _utilities_avatar__WEBPACK_IMPORTED_MODULE_0__["default"](avatarElements);
                var animationSteps = new _utilities_promise_chain__WEBPACK_IMPORTED_MODULE_3__["default"]();

                var transitionTo = function transitionTo(imagePath) {
                    return avatar.transitionTo(imagePath, ANIMATION_STEP_DURATION);
                };

                IMAGE_SET.forEach(function (imagePath) {
                    animationSteps.define(function () {
                        return transitionTo(imagePath);
                    });
                });

                var resetAnimation = function resetAnimation() {
                    return avatar.set();
                };

                var startAnimation = function startAnimation() {
                    return animationSteps.run(50, transitionTo);
                };

                var stopAnimation = function stopAnimation() {
                    return animationSteps.stop();
                };

                var animationObserver = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.intersectionRatio > 0) {
                            startAnimation();
                        } else {
                            stopAnimation();
                        }
                    });
                });
                /*
                 * Init
                 */

                resetAnimation().then(Object(_utilities_wait__WEBPACK_IMPORTED_MODULE_4__["default"])(ANIMATION_DELAY)).then(function () {
                    return Object(_utilities_on_transition_end__WEBPACK_IMPORTED_MODULE_2__["default"])(browserElements, function (element) {
                        element.classList.add(STATE_ON_CLASS_NAME);
                    });
                }).then(function () {
                    animationObserver.observe(animationTrigger);
                }).catch(resetAnimation);
            });

            /***/ }),

        /***/ "./src/js/modules/lazy-load.js":
        /*!*************************************!*\
          !*** ./src/js/modules/lazy-load.js ***!
          \*************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _utilities_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/avatar */ "./src/js/utilities/avatar.js");
            /* harmony import */ var _utilities_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/init */ "./src/js/utilities/init.js");
            /*
             * Lazy load all `.g-avatar` elements with the `g-data-image-path` attribute.
             */

            /**
             * Internal Dependencies
             */


            /*
             * Constants
             */

            var IMAGE_PATH_ATTRIBUTE = 'data-g-image-path';
            var AVATAR_SELECTOR = ".g-avatar[".concat(IMAGE_PATH_ATTRIBUTE, "]");
            /*
             * Init
             */

            Object(_utilities_init__WEBPACK_IMPORTED_MODULE_1__["default"])(function (document) {
                Array.from(document.querySelectorAll(AVATAR_SELECTOR)).forEach(function (element) {
                    new _utilities_avatar__WEBPACK_IMPORTED_MODULE_0__["default"](element).transitionTo(element.getAttribute(IMAGE_PATH_ATTRIBUTE), 0, false);
                });
            });

            /***/ }),

        /***/ "./src/js/modules/navigation.js":
        /*!**************************************!*\
          !*** ./src/js/modules/navigation.js ***!
          \**************************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _utilities_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/dropdown */ "./src/js/utilities/dropdown.js");
            /* harmony import */ var _utilities_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/init */ "./src/js/utilities/init.js");
            /*
             * Enables the navigation dropdowns.
             */

            /**
             * Internal Dependencies
             */


            /*
             * Constants
             */

            var DROPDOWN_KEY_ATTRIBUTE = 'data-g-key';
            var DROPDOWN_TRIGGER_SELECTOR = ".g-nav__item[".concat(DROPDOWN_KEY_ATTRIBUTE, "]");
            var DROPDOWN_MENU_SELECTOR = '.g-nav-menu';
            /*
             * Init
             */

            Object(_utilities_init__WEBPACK_IMPORTED_MODULE_1__["default"])(function (document) {
                Array.from(document.querySelectorAll(DROPDOWN_TRIGGER_SELECTOR)).forEach(function (triggerElement) {
                    var key = triggerElement.getAttribute(DROPDOWN_KEY_ATTRIBUTE);
                    var element = document.querySelector("".concat(DROPDOWN_MENU_SELECTOR, "[").concat(DROPDOWN_KEY_ATTRIBUTE, "=").concat(key, "]"));

                    if (element) {
                        new _utilities_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"](key, triggerElement, element);
                    }
                });
            });

            /***/ }),

        /***/ "./src/js/modules/video.js":
        /*!*********************************!*\
          !*** ./src/js/modules/video.js ***!
          \*********************************/
        /*! no exports provided */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _utilities_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/init */ "./src/js/utilities/init.js");
            /* harmony import */ var _utilities_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/modal */ "./src/js/utilities/modal.js");
            /*
             * Enables the introduction video.
             */

            /**
             * Internal Dependencies
             */


            /*
             * Constants
             */

            var VIDEO_KEY_ATTRIBUTE = 'data-g-key';
            var VIDEO_TRIGGER_SELECTOR = ".g-button[".concat(VIDEO_KEY_ATTRIBUTE, "]");
            var VIDEO_MODAL_SELECTOR = '.g-modal';
            /*
             * Init
             */

            Object(_utilities_init__WEBPACK_IMPORTED_MODULE_0__["default"])(function (document) {
                Array.from(document.querySelectorAll(VIDEO_TRIGGER_SELECTOR)).forEach(function (triggerElement) {
                    var key = triggerElement.getAttribute(VIDEO_KEY_ATTRIBUTE);
                    var element = document.querySelector("".concat(VIDEO_MODAL_SELECTOR, "[").concat(VIDEO_KEY_ATTRIBUTE, "=").concat(key, "]"));

                    if (element) {
                        var modal = new _utilities_modal__WEBPACK_IMPORTED_MODULE_1__["default"](key, triggerElement, element);
                        var video = element.querySelector('video');

                        if (video) {
                            modal.onOpen(function () {
                                video.play();
                            });
                            modal.onClose(function () {
                                video.pause();
                            });
                            video.addEventListener('ended', function () {
                                modal.close();
                            });
                        }
                    }
                });
            });

            /***/ }),

        /***/ "./src/js/utilities/avatar.js":
        /*!************************************!*\
          !*** ./src/js/utilities/avatar.js ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avatar; });
            /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
            /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _on_transition_end__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-transition-end */ "./src/js/utilities/on-transition-end.js");
            /* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preload */ "./src/js/utilities/preload.js");
            /* harmony import */ var _remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove-all-child-nodes */ "./src/js/utilities/remove-all-child-nodes.js");
            /* harmony import */ var _remove_all_event_listeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-all-event-listeners */ "./src/js/utilities/remove-all-event-listeners.js");
            /* harmony import */ var _to_element_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./to-element-array */ "./src/js/utilities/to-element-array.js");
            /* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wait */ "./src/js/utilities/wait.js");




            /*
             * Responsible for displaying and animating the `.g-avatar` elements.
             */

            /**
             * Internal Dependencies
             */






            /*
             * Constants
             */

            var APPROXIMATE_TRANSITION_DURATION = 150;
            var CONTAINER_ELEMENT_CLASS_NAME = 'g-avatar__content';
            var IMAGE_ELEMENT_CLASS_NAME = 'g-avatar__content__image';
            var STATE_ON_CLASS_NAME = 'g-js-on';
            var STATE_BUSY_CLASS_NAME = 'g-js-busy';
            var STATE_IDLE_CLASS_NAME = 'g-js-idle';
            var STATE_SHOW_CLASS_NAME = 'g-js-show';
            var STATE_HIDE_CLASS_NAME = 'g-js-hide';
            var STATE_ANIMATING_IN_CLASS_NAME = "".concat(STATE_SHOW_CLASS_NAME, "-in");
            var STATE_ANIMATING_OUT_CLASS_NAME = "".concat(STATE_SHOW_CLASS_NAME, "-out");
            var NULL_PATH = null;
            /*
             * Logic
             */

            var Avatar = /*#__PURE__*/function () {
                function Avatar(rootElements) {
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Avatar);

                    var rootElementArray = Object(_to_element_array__WEBPACK_IMPORTED_MODULE_7__["default"])(rootElements);
                    var containerElementArray = rootElementArray.map(_remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_5__["default"]).map(function (element) {
                        return element.appendChild(createElement(CONTAINER_ELEMENT_CLASS_NAME));
                    });
                    var previousImageElementArray = containerElementArray.map(function (element) {
                        return element.appendChild(createElement(IMAGE_ELEMENT_CLASS_NAME, STATE_SHOW_CLASS_NAME));
                    });
                    var nextImageElementArray = containerElementArray.map(function (element) {
                        return element.appendChild(createElement(IMAGE_ELEMENT_CLASS_NAME, STATE_HIDE_CLASS_NAME));
                    });
                    forEachClassList(rootElementArray, function (add, remove) {
                        add(STATE_ON_CLASS_NAME, STATE_IDLE_CLASS_NAME);
                        remove(STATE_BUSY_CLASS_NAME);
                    });
                    this.rootElements = rootElementArray;
                    this.containerElements = containerElementArray;
                    this.previousImageElements = previousImageElementArray;
                    this.nextImageElements = nextImageElementArray;
                    this.currentPath = NULL_PATH;
                    this.busy = false;
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Avatar, [{
                    key: "__preload",
                    value: function __preload(imagePath) {
                        this.busy = true;
                        this.previousImageElements = Object(_remove_all_event_listeners__WEBPACK_IMPORTED_MODULE_6__["default"])(this.previousImageElements);
                        this.nextImageElements = Object(_remove_all_event_listeners__WEBPACK_IMPORTED_MODULE_6__["default"])(this.nextImageElements).map(function (element) {
                            if (imagePath) {
                                element.style.backgroundImage = "url(\"".concat(imagePath, "\")");
                            } else {
                                element.removeAttribute('style');
                            }

                            return element;
                        });

                        var resolve = function resolve() {
                            return Promise.resolve(NULL_PATH);
                        };

                        return imagePath ? Object(_preload__WEBPACK_IMPORTED_MODULE_4__["default"])(imagePath).catch(resolve) : resolve();
                    }
                }, {
                    key: "__set",
                    value: function __set(imagePath, animateImage, animateRoot) {
                        var _this = this;

                        if (!animateImage) {
                            animateRoot = false;
                        }

                        var nextImageElements = this.nextImageElements,
                            previousImageElements = this.previousImageElements,
                            rootElements = this.rootElements;
                        var proceed = animateImage ? _wait__WEBPACK_IMPORTED_MODULE_8__["default"] : function () {
                            return Promise.resolve();
                        };
                        return proceed().then(function () {
                            var next = animateImage ? Object(_on_transition_end__WEBPACK_IMPORTED_MODULE_3__["default"])(nextImageElements) : proceed();
                            forEachClassList(rootElements, function (add, remove) {
                                add(animateRoot && STATE_BUSY_CLASS_NAME);
                                remove(STATE_IDLE_CLASS_NAME);
                            });
                            forEachClassList(nextImageElements, function (add, remove) {
                                add(STATE_SHOW_CLASS_NAME, animateImage && STATE_ANIMATING_IN_CLASS_NAME);
                                remove(STATE_HIDE_CLASS_NAME, !animateImage && STATE_ANIMATING_IN_CLASS_NAME, STATE_ANIMATING_OUT_CLASS_NAME);
                            });
                            forEachClassList(previousImageElements, function (add, remove) {
                                add(STATE_SHOW_CLASS_NAME, animateImage && STATE_ANIMATING_OUT_CLASS_NAME);
                                remove(STATE_HIDE_CLASS_NAME, STATE_ANIMATING_IN_CLASS_NAME, !animateImage && STATE_ANIMATING_OUT_CLASS_NAME);
                            });
                            return next;
                        }).then(function () {
                            forEachClassList(nextImageElements, function (_, remove) {
                                remove(STATE_ANIMATING_IN_CLASS_NAME);
                            });
                            forEachClassList(previousImageElements, function (add, remove) {
                                add(STATE_HIDE_CLASS_NAME);
                                remove(STATE_SHOW_CLASS_NAME, STATE_ANIMATING_OUT_CLASS_NAME);
                            });
                            forEachClassList(rootElements, function (add, remove) {
                                add(STATE_IDLE_CLASS_NAME);
                                remove(STATE_BUSY_CLASS_NAME);
                            });
                            return proceed();
                        }).then(function () {
                            _this.previousImageElements = nextImageElements;
                            _this.nextImageElements = previousImageElements;
                            _this.currentPath = imagePath;
                            _this.busy = false;
                            return Object(_wait__WEBPACK_IMPORTED_MODULE_8__["default"])();
                        }.bind(this));
                    }
                }, {
                    key: "set",
                    value: function set(imagePath) {
                        var path = imagePath || NULL_PATH;

                        if (this.currentPath === path) {
                            return Object(_wait__WEBPACK_IMPORTED_MODULE_8__["default"])();
                        }

                        return this.__preload(path).then(this.__set.bind(this));
                    }
                }, {
                    key: "transitionTo",
                    value: function transitionTo(imagePath) {
                        var _this2 = this;

                        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        var animateRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

                        /* eslint-disable-next-line @wordpress/no-unused-vars-before-return */
                        var duration = Math.max(0, delay - APPROXIMATE_TRANSITION_DURATION);
                        var path = imagePath || NULL_PATH;

                        if (this.busy || this.currentPath === path) {
                            return Object(_wait__WEBPACK_IMPORTED_MODULE_8__["default"])();
                        }

                        return Promise.all([this.__preload(path), Object(_wait__WEBPACK_IMPORTED_MODULE_8__["default"])(duration)]).then(function () {
                            return _this2.__set.apply(_this2, [path].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(!document.hidden ? [true, animateRoot] : [])));
                        }.bind(this));
                    }
                }]);

                return Avatar;
            }();
            /*
             * Utilities
             */




            function createElement() {
                var _element$classList;

                var element = document.createElement('span');

                (_element$classList = element.classList).add.apply(_element$classList, arguments);

                return element;
            }

            function forEachClassList(elements, callback) {
                elements.forEach(function (element) {
                    var apply = function apply(method) {
                        return function () {
                            for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
                                classNames[_key] = arguments[_key];
                            }

                            var values = classNames.filter(Boolean);

                            if (values.length > 0) {
                                var _element$classList2;

                                (_element$classList2 = element.classList)[method].apply(_element$classList2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(values));
                            }
                        };
                    };

                    callback(apply('add'), apply('remove'));
                });
            }

            /***/ }),

        /***/ "./src/js/utilities/dropdown.js":
        /*!**************************************!*\
          !*** ./src/js/utilities/dropdown.js ***!
          \**************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _on_disappear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-disappear */ "./src/js/utilities/on-disappear.js");



            /*
             * Handles a single dropdown instance.
             */

            /**
             * Internal Dependencies
             */

            /*
             * Constants
             */

            var STATE_ON_CLASS_NAME = 'g-js-on';
            var STATE_SHOW_CLASS_NAME = 'g-js-show';
            var STATE_HIDE_CLASS_NAME = 'g-js-hide';
            var ATTRIBUTE_HIDDEN = 'aria-hidden';
            var ATTRIBUTE_EXPANDED = 'aria-expanded';
            var HIDE_HOVER_DELAY = 250;
            /*
             * Logic
             */

            var __DROPDOWNS = [];

            var Dropdown = /*#__PURE__*/function () {
                function Dropdown(name, triggerElement, menuElement) {
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dropdown);

                    this.name = name;
                    this.trigger = triggerElement;
                    this.menu = menuElement;
                    this.menuItems = Array.from(this.menu.querySelectorAll('[role=menuitem]'));

                    this.__setEventListeners();

                    this.hide();

                    __DROPDOWNS.push(this);
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dropdown, [{
                    key: "__setEventListeners",
                    value: function __setEventListeners() {
                        var trigger = this.trigger,
                            menu = this.menu;
                        var show = this.show.bind(this);
                        var hide = this.hide.bind(this);

                        var scheduleHide = this.__scheduleHide.bind(this);

                        var handleKeys = this.__handleKeyEvents.bind(this);

                        addEventListener('resize', hide);
                        document.addEventListener('click', hide);
                        document.addEventListener('keydown', handleKeys);
                        trigger.addEventListener('mouseenter', show);
                        trigger.addEventListener('mouseleave', scheduleHide);
                        trigger.addEventListener('click', function (event) {
                            event.stopPropagation();
                            show();
                        });
                        menu.addEventListener('mouseenter', show);
                        menu.addEventListener('mouseleave', scheduleHide);
                        menu.addEventListener('click', function (event) {
                            if (!isMenuItem(event.target)) {
                                event.stopPropagation();
                            }
                        });
                        Object(_on_disappear__WEBPACK_IMPORTED_MODULE_2__["default"])(menu, hide);
                    }
                }, {
                    key: "__handleKeyEvents",
                    value: function __handleKeyEvents(event) {
                        if (!this.isActive) {
                            return;
                        }

                        var key = event.key;

                        var preventDefault = function preventDefault() {
                            event.preventDefault();
                        };

                        if (key === 'Tab') {
                            return preventDefault();
                        }

                        if (key === 'Escape') {
                            this.hide();
                            return this.trigger.focus();
                        }

                        if (key === 'ArrowUp') {
                            preventDefault();
                            return this.__focusPreviousMenuItem();
                        }

                        if (key === 'ArrowDown') {
                            preventDefault();
                            return this.__focusNextMenuItem();
                        }
                    }
                }, {
                    key: "__focusPreviousMenuItem",
                    value: function __focusPreviousMenuItem() {
                        var focusIndex = this.focusIndex;

                        this.__focusMenuItem((Number.isInteger(focusIndex) ? focusIndex : 0) - 1);
                    }
                }, {
                    key: "__focusNextMenuItem",
                    value: function __focusNextMenuItem() {
                        var focusIndex = this.focusIndex;

                        this.__focusMenuItem(Number.isInteger(focusIndex) ? focusIndex + 1 : 0);
                    }
                }, {
                    key: "__focusMenuItem",
                    value: function __focusMenuItem(index) {
                        var visibleItems = this.menuItems.filter(isVisible);
                        var length = visibleItems.length;
                        var focusIndex = (index + length) % length;
                        visibleItems[focusIndex].focus();
                        this.focusIndex = focusIndex;
                    }
                }, {
                    key: "__blurItems",
                    value: function __blurItems() {
                        this.menuItems.concat(this.trigger).forEach(function (element) {
                            element.blur();
                        });
                    }
                }, {
                    key: "__clearTimeout",
                    value: function __clearTimeout() {
                        clearTimeout(this.timeout);
                    }
                }, {
                    key: "__hideHideOtherDropdowns",
                    value: function __hideHideOtherDropdowns() {
                        var activeName = this.name;

                        __DROPDOWNS.filter(function (dropdown) {
                            return dropdown.name !== activeName;
                        }).forEach(function (dropdown) {
                            dropdown.hide();
                        });
                    }
                }, {
                    key: "__scheduleHide",
                    value: function __scheduleHide() {
                        this.__clearTimeout();

                        this.timeout = setTimeout(this.hide.bind(this), HIDE_HOVER_DELAY);
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        this.__clearTimeout();

                        if (this.isActive === false) {
                            return;
                        }

                        var trigger = this.trigger,
                            menu = this.menu;
                        var menuClassList = menu.classList;
                        menu.setAttribute(ATTRIBUTE_HIDDEN, true);
                        trigger.setAttribute(ATTRIBUTE_EXPANDED, false);
                        menuClassList.add(STATE_ON_CLASS_NAME, STATE_HIDE_CLASS_NAME);
                        menuClassList.remove(STATE_SHOW_CLASS_NAME);
                        this.isActive = false;
                    }
                }, {
                    key: "show",
                    value: function show() {
                        this.__clearTimeout();

                        this.__blurItems();

                        this.__hideHideOtherDropdowns();

                        if (this.isActive) {
                            return;
                        }

                        var trigger = this.trigger,
                            menu = this.menu;
                        var menuClassList = menu.classList;
                        menu.setAttribute(ATTRIBUTE_HIDDEN, false);
                        trigger.setAttribute(ATTRIBUTE_EXPANDED, true);
                        menuClassList.add(STATE_ON_CLASS_NAME, STATE_SHOW_CLASS_NAME);
                        menuClassList.remove(STATE_HIDE_CLASS_NAME);
                        this.focusIndex = undefined;
                        this.isActive = true;
                    }
                }]);

                return Dropdown;
            }();
            /*
             * Utilities
             */




            function isMenuItem(element) {
                return element.getAttribute('role') === 'menuitem';
            }

            function isVisible(element) {
                return element.offsetWidth > 0 && element.offsetHeight > 0;
            }

            /***/ }),

        /***/ "./src/js/utilities/init.js":
        /*!**********************************!*\
          !*** ./src/js/utilities/init.js ***!
          \**********************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /*
             * Executes the callback when the page has been successfully loaded,
             * regardless of when the script is fired.
             */

            /**
             * No Dependencies
             */

            /*
             * Logic
             */
            /* harmony default export */ __webpack_exports__["default"] = (function (callback) {
                var callbackExecuted = false;

                var fn = function fn() {
                    if (callbackExecuted) {
                        return;
                    }

                    callback(document);
                    callbackExecuted = true;
                };

                if (document.readyState === 'complete') {
                    return setTimeout(fn, 0);
                }

                addEventListener('load', fn);
            });

            /***/ }),

        /***/ "./src/js/utilities/modal.js":
        /*!***********************************!*\
          !*** ./src/js/utilities/modal.js ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _on_transition_end__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-transition-end */ "./src/js/utilities/on-transition-end.js");
            /* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait */ "./src/js/utilities/wait.js");



            /*
             * Handles a single modalElement instance.
             */

            /**
             * Internal Dependencies
             */


            /*
             * Constants
             */

            var CONTENT_ELEMENT_CLASS_NAME = 'g-modal__content';
            var OVERLAY_ELEMENT_CLASS_NAME = 'g-modal__overlay';
            var STATE_ON_CLASS_NAME = 'g-js-on';
            var STATE_SHOW_CLASS_NAME = 'g-js-show';
            var STATE_HIDE_CLASS_NAME = 'g-js-hide';
            var ATTRIBUTE_HIDDEN = 'aria-hidden';
            var ATTRIBUTE_EXPANDED = 'aria-expanded';
            var ATTRIBUTE_TAB_INDEX = 'tabindex';
            /*
             * Logic
             */

            var Modal = /*#__PURE__*/function () {
                function Modal(name, triggerElement, modalElement) {
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Modal);

                    this.name = name;
                    this.modalElement = modalElement;
                    this.contentElement = modalElement.querySelector(".".concat(CONTENT_ELEMENT_CLASS_NAME));
                    this.overlayElement = modalElement.querySelector(".".concat(OVERLAY_ELEMENT_CLASS_NAME));
                    this.triggerElement = triggerElement;
                    this.onCloseCallback = noop;
                    this.onOpenCallback = noop;

                    this.__setEventListeners();

                    this.close(false);
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Modal, [{
                    key: "__setEventListeners",
                    value: function __setEventListeners() {
                        var _this = this;

                        var contentElement = this.contentElement,
                            overlayElement = this.overlayElement,
                            triggerElement = this.triggerElement;
                        var open = this.open.bind(this);
                        var close = this.close.bind(this);

                        var isOpen = function () {
                            return _this.isOpen;
                        }.bind(this);

                        var focus = function focus(element) {
                            return Object(_wait__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function () {
                                return element && element.focus();
                            });
                        };

                        document.addEventListener('keydown', function (event) {
                            if (isOpen() && event.key === 'Escape') {
                                close();
                                focus(triggerElement);
                            }
                        });
                        overlayElement.addEventListener('click', function () {
                            close();
                        });
                        overlayElement.addEventListener('keydown', function (event) {
                            if (isOpen() &&
                                /* eslint-disable-next-line @wordpress/no-global-active-element */
                                event.target === document.activeElement && ['Enter', ' '].includes(event.key)) {
                                close();
                                focus(triggerElement);
                            }
                        });
                        contentElement.addEventListener('click', function (event) {
                            if (event.target.classList.contains(CONTENT_ELEMENT_CLASS_NAME)) {
                                close();
                            }
                        });
                        triggerElement.addEventListener('click', function (event) {
                            open();
                            focus(event.detail === 0 && overlayElement);
                        });
                    }
                }, {
                    key: "onClose",
                    value: function onClose(callback) {
                        this.onCloseCallback = callback;
                    }
                }, {
                    key: "onOpen",
                    value: function onOpen(callback) {
                        this.onOpenCallback = callback;
                    }
                }, {
                    key: "close",
                    value: function close() {
                        var _this2 = this;

                        var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                        var proceed = animate ? _wait__WEBPACK_IMPORTED_MODULE_3__["default"] : resolve;

                        if (this.isOpen === false) {
                            return proceed();
                        }

                        var modalElement = this.modalElement,
                            overlayElement = this.overlayElement,
                            triggerElement = this.triggerElement;
                        var modalClassList = modalElement.classList;
                        this.onCloseCallback();
                        return proceed().then(function () {
                            modalElement.setAttribute(ATTRIBUTE_HIDDEN, true);
                            triggerElement.setAttribute(ATTRIBUTE_EXPANDED, false);
                            overlayElement.setAttribute(ATTRIBUTE_TAB_INDEX, -1);
                            return proceed();
                        }).then(function () {
                            var next = animate ? Object(_on_transition_end__WEBPACK_IMPORTED_MODULE_2__["default"])(modalElement) : proceed();
                            modalClassList.add(STATE_ON_CLASS_NAME, STATE_HIDE_CLASS_NAME);
                            modalClassList.remove(STATE_SHOW_CLASS_NAME);
                            return next;
                        }).then(function () {
                            _this2.isOpen = false;
                            return proceed();
                        }.bind(this));
                    }
                }, {
                    key: "open",
                    value: function open() {
                        var _this3 = this;

                        if (this.isOpen) {
                            return Object(_wait__WEBPACK_IMPORTED_MODULE_3__["default"])();
                        }

                        var modalElement = this.modalElement,
                            overlayElement = this.overlayElement,
                            triggerElement = this.triggerElement;
                        var modalClassList = modalElement.classList;
                        this.onOpenCallback();
                        return Object(_wait__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function () {
                            modalElement.setAttribute(ATTRIBUTE_HIDDEN, false);
                            triggerElement.setAttribute(ATTRIBUTE_EXPANDED, true);
                            overlayElement.setAttribute(ATTRIBUTE_TAB_INDEX, 0);
                            return Object(_wait__WEBPACK_IMPORTED_MODULE_3__["default"])();
                        }).then(function () {
                            var next = Object(_on_transition_end__WEBPACK_IMPORTED_MODULE_2__["default"])(modalElement);
                            modalClassList.add(STATE_ON_CLASS_NAME, STATE_SHOW_CLASS_NAME);
                            modalClassList.remove(STATE_HIDE_CLASS_NAME);
                            return next;
                        }).then(function () {
                            _this3.isOpen = true;
                            return Object(_wait__WEBPACK_IMPORTED_MODULE_3__["default"])();
                        }.bind(this));
                    }
                }]);

                return Modal;
            }();
            /*
             * Utilities
             */




            function noop() {}

            function resolve() {
                return Promise.resolve();
            }

            /***/ }),

        /***/ "./src/js/utilities/on-disappear.js":
        /*!******************************************!*\
          !*** ./src/js/utilities/on-disappear.js ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /*
             * Sets an event listener that fires a given callback whenever a given element
             * disappears from the current viewport.
             */

            /**
             * No Dependencies
             */

            /*
             * Logic
             */
            /* harmony default export */ __webpack_exports__["default"] = (function (element, callback) {
                new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.intersectionRatio <= 0) {
                            callback();
                        }
                    });
                }).observe(element);
            });

            /***/ }),

        /***/ "./src/js/utilities/on-transition-end.js":
        /*!***********************************************!*\
          !*** ./src/js/utilities/on-transition-end.js ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _to_element_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-element-array */ "./src/js/utilities/to-element-array.js");
            /* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wait */ "./src/js/utilities/wait.js");
            /*
             * Sets a one-off transition-end event listener and returns a promise.
             */

            /**
             * Internal Dependencies
             */


            /*
             * Constants
             */

            var EVENT_NAME = 'transitionend';
            /*
             * Logic
             */

            /* harmony default export */ __webpack_exports__["default"] = (function (elements, triggerCallback) {
                var elementArray = Object(_to_element_array__WEBPACK_IMPORTED_MODULE_0__["default"])(elements);
                var result = Promise.all(elementArray.map(onTransitionEnd));

                if (triggerCallback) {
                    Object(_wait__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function () {
                        elementArray.forEach(triggerCallback);
                    });
                }

                return result;
            });
            /*
             * Utilities
             */

            function onTransitionEnd(element) {
                return new Promise(function (resolve) {
                    element.addEventListener(EVENT_NAME, function end(event) {
                        element.removeEventListener(EVENT_NAME, end);
                        resolve(event);
                    });
                });
            }

            /***/ }),

        /***/ "./src/js/utilities/preinit.js":
        /*!*************************************!*\
          !*** ./src/js/utilities/preinit.js ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /*
             * Executes the callback when the page has been successfully parsed,
             * regardless of when the script is fired.
             */

            /**
             * No Dependencies
             */

            /*
             * Logic
             */
            /* harmony default export */ __webpack_exports__["default"] = (function (callback) {
                var callbackExecuted = false;

                var fn = function fn() {
                    if (callbackExecuted) {
                        return;
                    }

                    callback(document);
                    callbackExecuted = true;
                };

                if (/complete|loaded/.test(document.readyState)) {
                    return fn();
                }

                document.addEventListener('DOMContentLoaded', fn);
            });

            /***/ }),

        /***/ "./src/js/utilities/preload.js":
        /*!*************************************!*\
          !*** ./src/js/utilities/preload.js ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wait */ "./src/js/utilities/wait.js");
            /*
             * Preloads passed image URLs and returns a promise.
             */

            /**
             * Internal Dependencies
             */

            /*
             * Logic
             */

            var PATH_CACHE = [];
            /* harmony default export */ __webpack_exports__["default"] = (function (images) {
                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return Array.isArray(images) ? preloadImages(images, delay) : preloadImage(images, delay);
            });
            /*
             * Utilities
             */

            function preloadImage(path, delay) {
                if (!PATH_CACHE.hasOwnProperty(path)) {
                    PATH_CACHE[path] = new Promise(function (resolve, reject) {
                        var image = new Image();
                        image.addEventListener('load', function () {
                            Object(_wait__WEBPACK_IMPORTED_MODULE_0__["default"])(delay).then(function () {
                                resolve(path);
                            });
                        });
                        image.addEventListener('error', function () {
                            reject();
                        });
                        image.src = path;
                    });
                }

                return PATH_CACHE[path];
            }

            function preloadImages(paths, delay) {
                return Promise.all(paths.map(function (path) {
                    return preloadImage(path, delay);
                }));
            }

            /***/ }),

        /***/ "./src/js/utilities/promise-chain.js":
        /*!*******************************************!*\
          !*** ./src/js/utilities/promise-chain.js ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PromiseChain; });
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



            function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

            /*
             * A utility that allows for defining a stoppable promise chain.
             */

            /**
             * No Dependencies
             */

            /*
             * Logic
             */
            var PromiseChain = /*#__PURE__*/function () {
                function PromiseChain() {
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PromiseChain);

                    this.steps = [];

                    this.__resetChain();
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PromiseChain, [{
                    key: "__resetChain",
                    value: function __resetChain() {
                        this.chain = resolve();
                        this.stopped = false;
                        return this.chain;
                    }
                }, {
                    key: "define",
                    value: function define(callback) {
                        var _this = this;

                        var step = function step() {
                            return _this.stopped ? Promise.reject() : callback();
                        };

                        return this.steps.push(step.bind(this));
                    }
                }, {
                    key: "__run",
                    value: function __run(times, callback) {
                        this.__resetChain();

                        while (times--) {
                            var _iterator = _createForOfIteratorHelper(this.steps),
                                _step;

                            try {
                                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                    var step = _step.value;
                                    this.chain = this.chain.then(step);
                                }
                            } catch (err) {
                                _iterator.e(err);
                            } finally {
                                _iterator.f();
                            }
                        }

                        this.chain = this.chain.catch(resolve);

                        if (isFunction(callback)) {
                            this.chain = this.chain.then(function () {
                                return callback();
                            });
                        }

                        return this.chain;
                    }
                }, {
                    key: "run",
                    value: function run() {
                        var _this2 = this;

                        var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                        var callback = arguments.length > 1 ? arguments[1] : undefined;

                        if (isFunction(times)) {
                            callback = times;
                            times = 1;
                        }

                        var run = function run() {
                            return _this2.__run(times, callback);
                        };

                        return this.stop().then(run.bind(this));
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this.stopped = true;
                        return this.chain;
                    }
                }]);

                return PromiseChain;
            }();
            /*
             * Utilities
             */




            function resolve() {
                return Promise.resolve();
            }

            function isFunction(value) {
                return value && {}.toString.call(value) === '[object Function]';
            }

            /***/ }),

        /***/ "./src/js/utilities/remove-all-child-nodes.js":
        /*!****************************************************!*\
          !*** ./src/js/utilities/remove-all-child-nodes.js ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /*
             * Removes all elements inside the given parent element.
             */

            /**
             * No Dependencies
             */

            /*
             * Logic
             */
            /* harmony default export */ __webpack_exports__["default"] = (function (element) {
                while (element.firstChild) {
                    element.removeChild(element.lastChild);
                }

                return element;
            });

            /***/ }),

        /***/ "./src/js/utilities/remove-all-event-listeners.js":
        /*!********************************************************!*\
          !*** ./src/js/utilities/remove-all-event-listeners.js ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _to_element_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-element-array */ "./src/js/utilities/to-element-array.js");
            /*
             * Removes all event listeners on the given elements and their child nodes.
             */

            /**
             * Internal Dependencies
             */

            /*
             * Logic
             */

            /* harmony default export */ __webpack_exports__["default"] = (function (elements) {
                return Object(_to_element_array__WEBPACK_IMPORTED_MODULE_0__["default"])(elements).map(cloneNode);
            });
            /*
             * Utilities
             */

            function cloneNode(element) {
                var clone = element.cloneNode(true);
                element.parentNode.replaceChild(clone, element);
                return clone;
            }

            /***/ }),

        /***/ "./src/js/utilities/to-element-array.js":
        /*!**********************************************!*\
          !*** ./src/js/utilities/to-element-array.js ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /*
             * Converts an element or a collection of elements to an array of elements.
             */

            /**
             * No Dependencies
             */

            /*
             * Logic
             */
            /* harmony default export */ __webpack_exports__["default"] = (function (elements) {
                if (!elements) {
                    return [];
                }

                if (elements.length && elements.length > 0) {
                    return Array.from(elements);
                }

                return [elements];
            });

            /***/ }),

        /***/ "./src/js/utilities/wait.js":
        /*!**********************************!*\
          !*** ./src/js/utilities/wait.js ***!
          \**********************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /*
             * Waits a certain amount of time before resolving a promise.
             */

            /**
             * No Dependencies
             */

            /*
             * Logic
             */
            /* harmony default export */ __webpack_exports__["default"] = (function () {
                var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return new Promise(function (resolve) {
                    setTimeout(resolve, Math.max(0, duration));
                });
            });

            /***/ })

        /******/ });
//# sourceMappingURL=client-script.js.map