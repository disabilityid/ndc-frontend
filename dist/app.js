<<<<<<< HEAD
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"jeTtx":[function(require,module,exports,__globalThis) {
var _core = require("@xatom/core");
var _routes = require("./routes");
(0, _core.onReady)(()=>{
    console.log('App ready');
    (0, _routes.globalFnRoutes)();
    (0, _routes.discountListRoutes)();
    (0, _routes.discountPageRoutes)();
    (0, _routes.loginRoutes)();
});

},{"@xatom/core":"8w4K8","./routes":"fnEL6"}],"8w4K8":[function(require,module,exports,__globalThis) {
var $iEn1Z$uuid = require("116fc168c31b637d");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $90b1e0f272b5544a$exports = {};
$parcel$export($90b1e0f272b5544a$exports, "WFAuth", ()=>$90b1e0f272b5544a$export$cb2138cd710ea58a);
class $90b1e0f272b5544a$export$cb2138cd710ea58a {
    constructor(config = {}){
        this.config = config;
    }
    isLoggedIn() {
        return !!this.user;
    }
    getRole() {
        return this.role;
    }
    getUser() {
        return this.user;
    }
    getConfig() {
        return this.config;
    }
    logout() {
        this.user = null;
        this.role = null;
        this.config = null;
    }
    setUser(user) {
        this.user = user;
    }
    setRole(role) {
        this.role = role;
    }
    setConfig(config) {
        this.config = config;
    }
}
var $336c7a32b438dc35$exports = {};
$parcel$export($336c7a32b438dc35$exports, "WFAuthMiddleware", ()=>$336c7a32b438dc35$export$42f600804a30f397);
class $336c7a32b438dc35$export$42f600804a30f397 {
    constructor(auth){
        this.auth = auth;
    }
    allowTo(role) {
        return this.auth.getRole() === role;
    }
    disallowedTo(role) {
        return this.auth.getRole() !== role;
    }
    getAuth() {
        return this.auth;
    }
}
var $5ce0995b4e579efe$exports = {};
$parcel$export($5ce0995b4e579efe$exports, "WFComponent", ()=>$5ce0995b4e579efe$export$b8941e06d24ae728);
var $30d957643bf2e67a$exports = {};
var $62881ab850a57a38$exports = {};
$parcel$export($62881ab850a57a38$exports, "debug", ()=>$62881ab850a57a38$export$1c9f709888824e05);
const $62881ab850a57a38$export$1c9f709888824e05 = (...args)=>{
    if (window.WFDebug) console.log(...args);
};
var $9e73fdbf37a9aa00$exports = {};
$parcel$export($9e73fdbf37a9aa00$exports, "getElementByXPath", ()=>$9e73fdbf37a9aa00$export$7ffef3582c93037b);
function $9e73fdbf37a9aa00$export$7ffef3582c93037b(xpath, parent) {
    const result = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}
var $100caf27c28c32c0$exports = {};
$parcel$export($100caf27c28c32c0$exports, "getRouteQueryParams", ()=>$100caf27c28c32c0$export$1346b4a9ff9b6881);
const $100caf27c28c32c0$export$1346b4a9ff9b6881 = ()=>{
    const _data = {};
    new URLSearchParams(location.search).forEach((val, key)=>{
        _data[key] = val;
    });
    return _data;
};
var $e533c87ae7d96e3e$exports = {};
$parcel$export($e533c87ae7d96e3e$exports, "getXPathForChangedChild", ()=>$e533c87ae7d96e3e$export$5fe4b019801f5ef1);
function $e533c87ae7d96e3e$export$5fe4b019801f5ef1(node, parent) {
    const xpathParts = [];
    // Traverse up the DOM tree from the node and generate an XPath expression for each parent element
    while(node && node !== parent && node.nodeType === Node.ELEMENT_NODE){
        let xpath = node.nodeName.toLowerCase();
        // If the element has an ID attribute, add it to the XPath expression
        if (node.hasAttribute("id")) xpath += '[@id="' + node.getAttribute("id") + '"]';
        else if (node.hasAttribute("class")) xpath += '[@class="' + node.getAttribute("class") + '"]';
        // Add the XPath expression for this element to the list
        xpathParts.unshift(xpath);
        // Move up to the parent element
        node = node.parentNode;
    }
    // Combine the XPath parts into a single XPath expression
    return xpathParts.join("/");
}
var $4117225480b0cc44$exports = {};
$parcel$export($4117225480b0cc44$exports, "navigate", ()=>$4117225480b0cc44$export$ff7962acd6052c28);
const $4117225480b0cc44$export$ff7962acd6052c28 = (arg)=>{
    if (typeof arg === "string") window.location.assign(arg);
    else if (typeof arg === "object" && arg.type === "replace") window.location.replace(arg.to);
    else if (typeof arg === "object" && arg.type === "reload") window.location.reload();
};
var $0b3f70b8f06eedca$exports = {};
$parcel$export($0b3f70b8f06eedca$exports, "parse", ()=>$0b3f70b8f06eedca$export$98e6a39c04603d36);
$parcel$export($0b3f70b8f06eedca$exports, "compile", ()=>$0b3f70b8f06eedca$export$ef7acd7185315e22);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToFunction", ()=>$0b3f70b8f06eedca$export$5b9bad9e403cf3d9);
$parcel$export($0b3f70b8f06eedca$exports, "match", ()=>$0b3f70b8f06eedca$export$4659b591c19bdf3d);
$parcel$export($0b3f70b8f06eedca$exports, "pathToRegexp", ()=>$0b3f70b8f06eedca$export$71304158c7e35877);
$parcel$export($0b3f70b8f06eedca$exports, "regexpToFunction", ()=>$0b3f70b8f06eedca$export$968e97c88708237a);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToRegexp", ()=>$0b3f70b8f06eedca$export$9a9303716def6456);
$parcel$export($0b3f70b8f06eedca$exports, "routeMatch", ()=>$0b3f70b8f06eedca$export$6c50148cf1d992bd);
/**
 * Tokenizer results.
 */ /**
 * Tokenize input string.
 */ function $0b3f70b8f06eedca$var$lexer(str) {
    const tokens = [];
    let i = 0;
    while(i < str.length){
        const char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            let name = "";
            let j = i + 1;
            while(j < str.length){
                const code = str.charCodeAt(j);
                if (code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError(`Missing parameter name at ${i}`);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            let count = 1;
            let pattern = "";
            let j = i + 1;
            if (str[j] === "?") throw new TypeError(`Pattern cannot start with "?" at ${j}`);
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError(`Capturing groups are not allowed at ${j}`);
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
            if (!pattern) throw new TypeError(`Missing pattern at ${i}`);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function $0b3f70b8f06eedca$export$98e6a39c04603d36(str, options = {}) {
    const tokens = $0b3f70b8f06eedca$var$lexer(str);
    const { prefixes: prefixes = "./" } = options;
    const defaultPattern = `[^${$0b3f70b8f06eedca$var$escapeString(options.delimiter || "/#?")}]+?`;
    const result = [];
    let key = 0;
    let i = 0;
    let path = "";
    const tryConsume = (type)=>{
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    const mustConsume = (type)=>{
        const value = tryConsume(type);
        if (value !== undefined) return value;
        const { type: nextType, index: index } = tokens[i];
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = ()=>{
        let result = "";
        let value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        const char = tryConsume("CHAR");
        const name = tryConsume("NAME");
        const pattern = tryConsume("PATTERN");
        if (name || pattern) {
            let prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        const value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        const open = tryConsume("OPEN");
        if (open) {
            const prefix = consumeText();
            const name = tryConsume("NAME") || "";
            const pattern = tryConsume("PATTERN") || "";
            const suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name || (pattern ? key++ : ""),
                pattern: name && !pattern ? defaultPattern : pattern,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function $0b3f70b8f06eedca$export$ef7acd7185315e22(str, options) {
    return $0b3f70b8f06eedca$export$5b9bad9e403cf3d9($0b3f70b8f06eedca$export$98e6a39c04603d36(str, options), options);
}
function $0b3f70b8f06eedca$export$5b9bad9e403cf3d9(tokens, options = {}) {
    const reFlags = $0b3f70b8f06eedca$var$flags(options);
    const { encode: encode = (x)=>x, validate: validate = true } = options;
    // Compile all the tokens into regexps.
    const matches = tokens.map((token)=>{
        if (typeof token === "object") return new RegExp(`^(?:${token.pattern})$`, reFlags);
    });
    return (data)=>{
        let path = "";
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            const value = data ? data[token.name] : undefined;
            const optional = token.modifier === "?" || token.modifier === "*";
            const repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError(`Expected "${token.name}" to not be empty`);
                }
                for(let j = 0; j < value.length; j++){
                    const segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                const segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            const typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
        }
        return path;
    };
}
function $0b3f70b8f06eedca$export$4659b591c19bdf3d(str, options) {
    const keys = [];
    const re = $0b3f70b8f06eedca$export$71304158c7e35877(str, keys, options);
    return $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options);
}
function $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options = {}) {
    const { decode: decode = (x)=>x } = options;
    return function(pathname) {
        const m = re.exec(pathname);
        if (!m) return false;
        const { 0: path, index: index } = m;
        const params = Object.create(null);
        for(let i = 1; i < m.length; i++){
            if (m[i] === undefined) continue;
            const key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map((value)=>{
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function $0b3f70b8f06eedca$var$escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function $0b3f70b8f06eedca$var$flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function $0b3f70b8f06eedca$var$regexpToRegexp(path, keys) {
    if (!keys) return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function $0b3f70b8f06eedca$var$arrayToRegexp(paths, keys, options) {
    const parts = paths.map((path)=>$0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options).source);
    return new RegExp(`(?:${parts.join("|")})`, $0b3f70b8f06eedca$var$flags(options));
}
/**
 * Create a path regexp from string input.
 */ function $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options) {
    return $0b3f70b8f06eedca$export$9a9303716def6456($0b3f70b8f06eedca$export$98e6a39c04603d36(path, options), keys, options);
}
function $0b3f70b8f06eedca$export$9a9303716def6456(tokens, keys, options = {}) {
    const { strict: strict = false, start: start = true, end: end = true, encode: encode = (x)=>x, delimiter: delimiter = "/#?", endsWith: endsWith = "" } = options;
    const endsWithRe = `[${$0b3f70b8f06eedca$var$escapeString(endsWith)}]|$`;
    const delimiterRe = `[${$0b3f70b8f06eedca$var$escapeString(delimiter)}]`;
    let route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (const token of tokens)if (typeof token === "string") route += $0b3f70b8f06eedca$var$escapeString(encode(token));
    else {
        const prefix = $0b3f70b8f06eedca$var$escapeString(encode(token.prefix));
        const suffix = $0b3f70b8f06eedca$var$escapeString(encode(token.suffix));
        if (token.pattern) {
            if (keys) keys.push(token);
            if (prefix || suffix) {
                if (token.modifier === "+" || token.modifier === "*") {
                    const mod = token.modifier === "*" ? "?" : "";
                    route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
                } else route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            } else if (token.modifier === "+" || token.modifier === "*") route += `((?:${token.pattern})${token.modifier})`;
            else route += `(${token.pattern})${token.modifier}`;
        } else route += `(?:${prefix}${suffix})${token.modifier}`;
    }
    if (end) {
        if (!strict) route += `${delimiterRe}?`;
        route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
    } else {
        const endToken = tokens[tokens.length - 1];
        const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
        if (!isEndDelimited) route += `(?=${delimiterRe}|${endsWithRe})`;
    }
    return new RegExp(route, $0b3f70b8f06eedca$var$flags(options));
}
function $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options) {
    if (path instanceof RegExp) return $0b3f70b8f06eedca$var$regexpToRegexp(path, keys);
    if (Array.isArray(path)) return $0b3f70b8f06eedca$var$arrayToRegexp(path, keys, options);
    return $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options);
}
function $0b3f70b8f06eedca$var$pathMatch(options = {}) {
    return function(path) {
        var keys = [];
        var re = $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options);
        return function(pathname, params) {
            var m = re.exec(pathname);
            if (!m) return false;
            params = params || {};
            var key, param;
            for(var i = 0; i < keys.length; i++){
                key = keys[i];
                param = m[i + 1];
                if (!param) continue;
                params[key.name] = $0b3f70b8f06eedca$var$decodeParam(param);
                if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
            }
            return params;
        };
    };
}
const $0b3f70b8f06eedca$export$6c50148cf1d992bd = (routeToMatch, route, defaultParams = {}, options = {})=>{
    return $0b3f70b8f06eedca$var$pathMatch(options)(routeToMatch)(route, defaultParams);
};
function $0b3f70b8f06eedca$var$decodeParam(param) {
    try {
        return decodeURIComponent(param);
    } catch (_) {
        throw new Error('failed to decode param "' + param + '"');
    }
}
var $36bdd128d4111a37$exports = {};
$parcel$export($36bdd128d4111a37$exports, "createComponent", ()=>$36bdd128d4111a37$export$60e54eaca7e7fb38);
const $36bdd128d4111a37$export$60e54eaca7e7fb38 = (type)=>{
    return new $5ce0995b4e579efe$export$b8941e06d24ae728(document.createElement(type));
};
$parcel$exportWildcard($30d957643bf2e67a$exports, $62881ab850a57a38$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $9e73fdbf37a9aa00$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $100caf27c28c32c0$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $e533c87ae7d96e3e$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $4117225480b0cc44$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $0b3f70b8f06eedca$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $36bdd128d4111a37$exports);
class $5ce0995b4e579efe$export$b8941e06d24ae728 {
    constructor(query){
        if (typeof query === "string") {
            const el = document.querySelector(query);
            if (el) {
                this.element = el;
                this.updateClone();
            } else throw new Error(`Could not find ${query}`);
        } else if (typeof query === "object" && query instanceof HTMLElement) {
            this.element = query;
            this.updateClone();
        } else if (typeof query === "object" && query instanceof SVGSVGElement) {
            this.element = query;
            this.updateClone();
        } else if (query instanceof $5ce0995b4e579efe$export$b8941e06d24ae728) {
            this.element = query.getElement();
            this.updateClone();
        } else throw new Error(`Could not find ${query}`);
    }
    updateClone() {
        this.cloneEl = this.element.cloneNode(true);
    }
    getElement() {
        return this.element;
    }
    updateTextViaAttrVar(keyPair) {
        const fields = {};
        const addEl = (key, val)=>{
            if (!(key in fields)) fields[key] = [];
            fields[key].push(val);
        };
        if (this.hasAttribute("xa-var")) addEl(this.getAttribute("xa-var"), this.getElement());
        const _els = this.getChildAsComponents(`[xa-var]`);
        _els.forEach((el)=>{
            addEl(el.getAttribute("xa-var"), el.getElement());
        });
        Object.keys(keyPair).forEach((key)=>{
            if (key in fields) fields[key].forEach((d)=>{
                d.textContent = keyPair[key].toString();
            });
        });
    }
    updateTextVariable(keyPair) {
        if (this.cloneEl.childNodes.length === 1 && this.cloneEl.firstChild instanceof Text) Object.keys(keyPair).forEach((key)=>{
            if (this.cloneEl.textContent.includes(`{{${key}}}`)) this.element.textContent = this.cloneEl.textContent.replace(`{{${key}}}`, keyPair[key].toString());
        });
        else {
            const els = Array.from(this.cloneEl.querySelectorAll("*")).map((el)=>Array.from(el.childNodes).filter((node)=>node instanceof Text && node.textContent.trim().length > 0)).flat();
            // console.log(els, this.cloneEl);
            Object.keys(keyPair).forEach((key)=>{
                els.filter((el)=>el.textContent.includes(`{{${key}}}`)).forEach((el)=>{
                    const path = $e533c87ae7d96e3e$export$5fe4b019801f5ef1(el.parentElement, this.cloneEl);
                    const _el = $9e73fdbf37a9aa00$export$7ffef3582c93037b(path, this.element);
                    // console.log(
                    //   el,
                    //   _el,
                    //   " found",
                    //   path,
                    //   el.parentElement,
                    //   this
                    // );
                    if (_el) _el.textContent = el.textContent.replace(`{{${key}}}`, keyPair[key].toString());
                    else console.log(el, _el, "not found", path, el.parentElement, this);
                });
            });
        }
    }
    setAttribute(key, value) {
        this.element.setAttribute(key, value);
    }
    removeAttribute(key) {
        this.element.removeAttribute(key);
    }
    getAttribute(key) {
        return this.element.getAttribute(key);
    }
    hasAttribute(key) {
        return this.element.hasAttribute(key);
    }
    getChildAsComponents(selector) {
        return Array.from(this.element.querySelectorAll(selector)).map((el)=>new $5ce0995b4e579efe$export$b8941e06d24ae728(el));
    }
    getChildAsComponent(selector) {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selector));
    }
    getManyChildAsComponents(selectors) {
        let _els = {};
        Object.keys(selectors).forEach((key)=>{
            _els[key] = new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selectors[key]));
        });
        return _els;
    }
    getCssClass() {
        return Array.from(this.element.classList);
    }
    addCssClass(className) {
        this.element.classList.add(className);
        this.cloneEl.classList.add(className);
    }
    removeCssClass(className) {
        this.element.classList.remove(className);
        this.cloneEl.classList.remove(className);
    }
    replaceCssClass(className, newClassName) {
        this.element.classList.replace(className, newClassName);
        this.cloneEl.classList.replace(className, newClassName);
    }
    toggleCssClass(className) {
        this.element.classList.toggle(className);
        this.cloneEl.classList.toggle(className);
    }
    on(type, listener, options) {
        this.element.addEventListener(type, listener, options);
    }
    off(type, listener, options) {
        this.element.removeEventListener(type, listener, options);
    }
    setText(text) {
        this.getElement().innerText = text.toString();
    }
    getText() {
        return this.getElement().innerText;
    }
    setTextContent(text) {
        this.getElement().textContent = text;
    }
    getTextContent() {
        return this.getElement().textContent;
    }
    setHTML(htmlText) {
        this.getElement().innerHTML = htmlText;
    }
    getHTML() {
        return this.getElement().innerHTML;
    }
    getCloneAsComponent() {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.cloneEl.cloneNode(true));
    }
    setStyle(style = {}) {
        Object.keys(style).forEach((key)=>{
            this.element.style[key] = style[key];
        });
    }
    getStyle() {
        return window.getComputedStyle(this.element);
    }
    appendChild(child) {
        this.element.appendChild(new $5ce0995b4e579efe$export$b8941e06d24ae728(child).getElement());
    }
    remove() {
        this.element.remove();
    }
    removeAllChildren() {
        this.element.replaceChildren();
    }
}
var $0105599dd5ebe189$exports = {};
$parcel$export($0105599dd5ebe189$exports, "WFDynamicList", ()=>$0105599dd5ebe189$export$688e73055717bd51);
class $0105599dd5ebe189$export$688e73055717bd51 extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    showLoadingState = false;
    constructor(query, config){
        super(query);
        if (typeof config.rowSelector === "string") this.rowComponent = this.getChildAsComponent(config.rowSelector);
        else this.rowComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.rowSelector);
        this.rowComponent.remove();
        if (config.loaderSelector) {
            if (typeof config.loaderSelector === "string") this.loaderComponent = this.getChildAsComponent(config.loaderSelector);
            else this.loaderComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.loaderSelector);
            this.loaderComponent.remove();
        }
        if (config.emptySelector) {
            if (typeof config.emptySelector === "string") this.emptyComponent = this.getChildAsComponent(config.emptySelector);
            else this.emptyComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.emptySelector);
            this.emptyComponent.remove();
        }
    }
    rowRenderer(cb) {
        this.rowRendererCB = cb;
    }
    emptyRenderer(cb) {
        this.emptyRendererCB = cb;
    }
    loaderRenderer(cb) {
        this.loaderRendererCB = cb;
    }
    setData(data) {
        this.data = data;
        this.render();
    }
    render() {
        if (!this.rowRendererCB) throw new Error("Unable to find renderer");
        this.hideLoading();
        this.removeAllChildren();
        if (this.data.length === 0 && this.emptyComponent) this.showEmpty();
        this.data.map((rowData, index, data)=>this.rowRendererCB({
                index: index,
                rowData: rowData,
                rowElement: this.rowComponent.getCloneAsComponent(),
                data: data
            })).filter((d)=>d).forEach((d)=>{
            this.appendChild(d);
        });
        if (this.showLoadingState) this.showLoading();
    }
    changeLoadingStatus(state) {
        this.showLoadingState = state;
        if (state) this.showLoading();
        else this.hideLoading();
    }
    showLoading() {
        this.hideLoading();
        if (!this.loaderComponent) return;
        if (this.loaderRendererCB) {
            this.lastLoadingComponent = this.loaderRendererCB(this.loaderComponent.getCloneAsComponent());
            this.appendChild(this.lastLoadingComponent);
        } else {
            this.lastLoadingComponent = this.loaderComponent.getCloneAsComponent();
            this.appendChild(this.lastLoadingComponent);
        }
    }
    showEmpty() {
        this.hideEmpty();
        if (this.emptyRendererCB) {
            this.lastEmptyComponent = this.emptyRendererCB(this.emptyComponent.getCloneAsComponent());
            this.appendChild(this.lastEmptyComponent);
        } else {
            this.lastEmptyComponent = this.emptyComponent.getCloneAsComponent();
            this.appendChild(this.lastEmptyComponent);
        }
    }
    hideLoading() {
        if (this.lastLoadingComponent) this.lastLoadingComponent.remove();
    }
    hideEmpty() {
        if (this.lastEmptyComponent) this.lastEmptyComponent.remove();
    }
    forceRender() {
        this.render();
    }
}
var $ce18c18667e54846$exports = {};
$parcel$export($ce18c18667e54846$exports, "WFFormComponent", ()=>$ce18c18667e54846$export$e7173e584c7cbeff);
class $ce18c18667e54846$export$e7173e584c7cbeff extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    defaultFormDisplayStyle = "";
    constructor(query){
        super(query);
        this.formComponent = this.getChildAsComponents("form")[0];
        this.defaultFormDisplayStyle = window.getComputedStyle(this.formComponent.getElement()).display;
    }
    getFormData() {
        const _data = {};
        new FormData(this.formComponent.getElement()).forEach((val, key)=>{
            if (_data[key]) _data[key] = [
                _data[key],
                val
            ].flat();
            else _data[key] = val;
        });
        return _data;
    }
    setFromData(data) {
        Object.keys(data).forEach((key)=>{
            this.getFormComponent().getElement().querySelector(`[name="${key}"]`).value = data[key];
        });
    }
    onFormSubmit(cb) {
        this.formComponent.getElement().onsubmit = (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            cb(this.getFormData(), ev);
        };
    }
    submitWebflowForm() {
        const wfForm = Object.keys(this.formComponent.getElement()).filter((d)=>d.includes("jQuery")).map((d)=>this.formComponent.getElement()[d]).filter((d)=>typeof d === "object" && ".wForm" in d).map((d)=>d[".wForm"]).reduce((d)=>d);
        if (wfForm && wfForm.handler) wfForm.handler(wfForm);
        else if (wfForm && wfForm.action) this.formComponent.getElement().submit();
    }
    getFormComponent() {
        return this.formComponent;
    }
    getSuccessComponent() {
        return this.getChildAsComponents(".w-form-done")[0];
    }
    getErrorComponent() {
        return this.getChildAsComponents(".w-form-fail")[0];
    }
    showSuccessState() {
        this.formComponent.getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "block";
    }
    showErrorState() {
        this.getSuccessComponent().getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "block";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    showForm() {
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "none";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    disableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.setAttribute("disabled", "disabled");
        });
    }
    enableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.removeAttribute("disabled");
        });
    }
    getSubmitButton() {
        return this.formComponent.getChildAsComponents(`[type="submit"]`)[0];
    }
    resetForm() {
        this.formComponent.getElement().reset();
    }
    updateSubmitButtonText(text) {
        this.getSubmitButton().setAttribute("value", text);
    }
}
var $b73002af79232c1a$exports = {};
$parcel$export($b73002af79232c1a$exports, "WFRoute", ()=>$b73002af79232c1a$export$4e1b92c1162557be);
class $b73002af79232c1a$export$4e1b92c1162557be {
    middlewareAllowExecutionOnFail = false;
    constructor(route){
        this.route = route;
    }
    withMiddleware(middleware, role, type = "allow", options = {}) {
        this.middleware = middleware;
        this.middlewareRole = role;
        this.middlewareType = type;
        if ("allowExecutionOnFail" in options) this.middlewareAllowExecutionOnFail = options.allowExecutionOnFail === true;
        if ("onError" in options) this.middlewareErrorFn = options.onError;
        return this;
    }
    validateRole() {
        return this.middlewareType === "allow" ? this.middleware.allowTo(this.middlewareRole) : this.middleware.disallowedTo(this.middlewareRole);
    }
    execute(fn) {
        const _match = $0b3f70b8f06eedca$export$6c50148cf1d992bd(this.route, location.pathname);
        if (_match) {
            $62881ab850a57a38$export$1c9f709888824e05("matched fn start", this.route, location.pathname);
            if (this.middleware) {
                const canAccess = this.validateRole();
                $62881ab850a57a38$export$1c9f709888824e05("checking access role", this.route, this.middlewareRole, this.middlewareType, "canAccess", canAccess, this.middlewareAllowExecutionOnFail);
                if (canAccess || this.middlewareAllowExecutionOnFail) fn({
                    ..._match,
                    ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
                }, canAccess, this.middleware.getAuth());
                else this.middlewareErrorFn && this.middlewareErrorFn();
            } else fn({
                ..._match,
                ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
            }, true);
            $62881ab850a57a38$export$1c9f709888824e05("matched fn end", this.route, location.pathname);
        } else $62881ab850a57a38$export$1c9f709888824e05("did not match", this.route, location.pathname);
        return this;
    }
}
var $16d2504bbe4bb459$exports = {};
$parcel$export($16d2504bbe4bb459$exports, "onReady", ()=>$16d2504bbe4bb459$export$ef1639a4b889352d);
/**
 * @description execute code when the page is loaded
 * @param cb callback function
 */ const $16d2504bbe4bb459$export$ef1639a4b889352d = (cb)=>{
    window.Webflow ||= [];
    window.Webflow.push(()=>{
        cb();
    });
};
var $78395a99ad91c494$exports = {};
$parcel$export($78395a99ad91c494$exports, "WFInvisibleForm", ()=>$78395a99ad91c494$export$bc36999d76b95c72);
class $78395a99ad91c494$export$bc36999d76b95c72 {
    loading = false;
    loadingListener = new Map();
    successListener = new Map();
    errorListener = new Map();
    constructor(formName = ""){
        this.fromName = formName;
        this.siteId = document.querySelector("html").getAttribute("data-wf-site") || "";
    }
    setFormName(formName) {
        this.fromName = formName;
    }
    getFormName() {
        return this.fromName;
    }
    setFormData(data) {
        this.data = data;
    }
    getFormData() {
        return this.data;
    }
    isLoading() {
        return this.loading;
    }
    onLoadingChange(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.loadingListener.set(_id, fn);
        return ()=>{
            this.loadingListener.delete(_id);
        };
    }
    onSuccess(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.successListener.set(_id, fn);
        return ()=>{
            this.successListener.delete(_id);
        };
    }
    onError(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.errorListener.set(_id, fn);
        return ()=>{
            this.errorListener.delete(_id);
        };
    }
    updateLoadingState(state) {
        this.loading = state;
        this.loadingListener.forEach((fn)=>{
            fn(this.loading);
        });
    }
    formSubmitted() {
        this.successListener.forEach((fn)=>{
            fn();
        });
    }
    formFailed() {
        this.errorListener.forEach((fn)=>{
            fn();
        });
    }
    submitForm() {
        const _updateStatus = (state)=>{
            this.updateLoadingState(state);
        };
        const onFailed = ()=>{
            this.formFailed();
        };
        const onDone = ()=>{
            this.formSubmitted();
        };
        _updateStatus(true);
        window["jQuery"].ajax({
            url: `https://webflow.com/api/v1/form/${this.siteId}`,
            type: "POST",
            data: {
                name: this.fromName || "Untitled Form",
                source: location.href,
                test: false,
                fields: this.data,
                dolphin: false
            },
            dataType: "json",
            crossDomain: true
        }).done(function(response) {
            _updateStatus(false);
            if (response && response.code === 200) onDone();
            else onFailed();
        }).fail(function() {
            _updateStatus(false);
            onFailed();
        });
    }
}
$parcel$exportWildcard(module.exports, $90b1e0f272b5544a$exports);
$parcel$exportWildcard(module.exports, $336c7a32b438dc35$exports);
$parcel$exportWildcard(module.exports, $5ce0995b4e579efe$exports);
$parcel$exportWildcard(module.exports, $0105599dd5ebe189$exports);
$parcel$exportWildcard(module.exports, $ce18c18667e54846$exports);
$parcel$exportWildcard(module.exports, $b73002af79232c1a$exports);
$parcel$exportWildcard(module.exports, $30d957643bf2e67a$exports);
$parcel$exportWildcard(module.exports, $16d2504bbe4bb459$exports);
$parcel$exportWildcard(module.exports, $78395a99ad91c494$exports);

},{"116fc168c31b637d":"ggZPL"}],"ggZPL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"jG1dk","./v3.js":"ap9Ro","./v4.js":"6RfIs","./v5.js":"eBz2t","./nil.js":"8sEtz","./version.js":"4vEj5","./validate.js":"dfZI5","./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jG1dk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cHt7R":[function(require,module,exports,__globalThis) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bFRkJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dfZI5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"5bk3T","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5bk3T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ap9Ro":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)('v3', 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"asOV2","./md5.js":"ieSzG","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"asOV2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1KoND":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ieSzG":[function(require,module,exports,__globalThis) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = '0123456789abcdef';
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6RfIs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"8mdcZ","./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8mdcZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eBz2t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)('v5', 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"asOV2","./sha1.js":"lger1","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lger1":[function(require,module,exports,__globalThis) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8sEtz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '00000000-0000-0000-0000-000000000000';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4vEj5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fnEL6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchWithTimeout", ()=>fetchWithTimeout);
parcelHelpers.export(exports, "globalFnRoutes", ()=>globalFnRoutes);
parcelHelpers.export(exports, "loginRoutes", ()=>loginRoutes);
parcelHelpers.export(exports, "discountListRoutes", ()=>discountListRoutes);
parcelHelpers.export(exports, "discountPageRoutes", ()=>discountPageRoutes);
var _core = require("@xatom/core");
var _checkMembership = require("../modules/checkMembership");
var _fetchSingleUseCodes = require("../modules/fetchSingleUseCodes");
var _cookies = require("../utils/cookies");
const fetchWithTimeout = (url, options, timeout = 5000)=>{
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject)=>setTimeout(()=>reject(new Error('Timeout')), timeout))
    ]);
};
const globalFnRoutes = ()=>{
    new (0, _core.WFRoute)("/(.*)").execute(()=>{
        // Global funcs here
        //console.log("I am a global func");
        // If the user clicks logout, set the membershipValid cookie to false
        const logoutButton = document.querySelector('.dropdown-link.is-logout');
        if (logoutButton) logoutButton.addEventListener('click', ()=>{
            (0, _cookies.setCookie)('membershipValid', 'false', 1 / 24);
            document.cookie = "ucn=; path=/";
            document.cookie = "authUrl=; path=/";
            location.reload();
        });
    });
};
const loginRoutes = ()=>{
    new (0, _core.WFRoute)("/login").execute(()=>{
        (0, _checkMembership.membershipCheck)(window.location.href);
        // If the user is now logged in hide the login form inside the .login-wrapper and change the p to read "You are logged in" then add a link to the /discounts-and-benefits page
        const membershipValid = (0, _cookies.getCookie)('membershipValid') === 'true';
        if (membershipValid) {
            const loginFormWrapper = new (0, _core.WFComponent)(".login-form-hook");
            if (loginFormWrapper) {
                loginFormWrapper.setStyle({
                    display: "none"
                });
                const loginFormWrapperEl = loginFormWrapper.getElement();
                loginFormWrapperEl.offsetHeight; // Force reflow
            }
            // change the text of the element with the class login-text to "You are logged in"
            const loginText = new (0, _core.WFComponent)(".login-text");
            if (loginText) loginText.setText("You are logged in");
            // remove the class "hide" from the element with the class "logged-in-link"
            const loggedInLink = new (0, _core.WFComponent)(".logged-in-link");
            if (loggedInLink) loggedInLink.removeCssClass("hide");
        }
    });
    // If the user clicks logout, set the membershipValid cookie to false
    const logoutButton = document.querySelector('.dropdown-link.is-logout');
    if (logoutButton) logoutButton.addEventListener('click', ()=>{
        location.reload();
    });
};
const discountListRoutes = ()=>{
    new (0, _core.WFRoute)("/discounts-and-benefits(-26)?").execute(()=>{
        console.log('Discounts and Benefits route');
        (0, _checkMembership.membershipCheck)(window.location.href);
        (0, _core.onReady)(()=>{
            // Remove Expired cards from the DOM
            // Get the current date
            const currentDate = new Date();
            // Select all elements with the class 'expiry'
            const expiryElements = document.querySelectorAll('.expiry');
            expiryElements.forEach(function(element) {
                // Read the expiry date from the data attribute
                const expiryDateString = element.getAttribute('data-expiry');
                // Check if the expiry date is not null
                if (expiryDateString) {
                    // Convert the expiry date string to a Date object
                    const expiryDate = new Date(expiryDateString);
                    // If the expiry date is in the past, remove the parent card from the DOM
                    if (expiryDate < currentDate) {
                        const cardElement = element.closest('.discount_item'); // Assuming the card has a class 'card'
                        if (cardElement) cardElement.remove();
                    }
                }
            });
        });
    });
};
const discountPageRoutes = ()=>{
    new (0, _core.WFRoute)("/discount/(.*)").execute(()=>{
        // pass the current page url to the membershipCheck function to be used as the url
        (0, _checkMembership.membershipCheck)(window.location.href);
        (0, _fetchSingleUseCodes.fetchSingleUseCode)();
        // Check for the 'membershipValid' cookie
        const membershipValid = (0, _cookies.getCookie)('membershipValid') === 'true';
        if (!membershipValid) {
            // If the cookie is not set or is false, display the modal
            const membershipModal = new (0, _core.WFComponent)(".membership-modal");
            if (membershipModal) {
                membershipModal.setStyle({
                    display: "block"
                });
                const membershipModalEl = membershipModal.getElement();
                membershipModalEl.offsetHeight; // Force reflow
                membershipModal.addCssClass('show-modal');
            }
        }
        const logoutButton = document.querySelector('.dropdown-link.is-logout');
        if (logoutButton) logoutButton.addEventListener('click', ()=>{
            // Set the membershipValid cookie to false
            document.cookie = "membershipValid=false; path=/";
            // Refresh the page
            location.reload();
        });
        (0, _fetchSingleUseCodes.fetchSingleUseCode)();
    });
};

},{"@xatom/core":"8w4K8","../modules/checkMembership":"fAHRS","../modules/fetchSingleUseCodes":"kEqUL","../utils/cookies":"1m4SD","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fAHRS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "membershipCheck", ()=>membershipCheck);
var _axios = require("@xatom/axios");
var _core = require("@xatom/core");
var _cookies = require("../utils/cookies");
const membershipCheck = (url)=>{
    let endpoint = window.location.href.startsWith('http://localhost:3020') ? "http://localhost:3000" : "https://membership-check-main.vercel.app/";
    const axiosConfigurator = new (0, _axios.AxiosClientConfigurator)(endpoint);
    const axiosClient = new (0, _axios.AxiosClient)(axiosConfigurator);
    const showError = (message)=>{
        const formError = new (0, _core.WFComponent)(".form_error-wrapper");
        const formErrorText = new (0, _core.WFComponent)(".form_error-message");
        formError.setStyle({
            display: "inline-flex"
        });
        formErrorText.setText(message);
    };
    (0, _core.onReady)(()=>{
        try {
            const membershipCheckBtn = new (0, _core.WFComponent)(".membership-check-button");
            const modalCloseButtonEl = document.querySelector(".modal1_close-button");
            const modalBackgroundEl = document.querySelector(".modal1_background-overlay");
            const formError = new (0, _core.WFComponent)(".form_error-wrapper");
            const formErrorText = new (0, _core.WFComponent)(".form_error-message");
            // Try to get modal element, but don't fail if it doesn't exist (e.g., on /login page)
            let membershipModal = null;
            try {
                membershipModal = new (0, _core.WFComponent)(".membership-modal");
            } catch (e) {
                console.log('Membership modal not found, continuing without it');
            }
            // Try to get storefront element, but don't fail if it doesn't exist
            let storefrontButton = null;
            let ezButton = null;
            try {
                storefrontButton = new (0, _core.WFComponent)('[xa-elem="storefront"]');
                ezButton = new (0, _core.WFComponent)('[xa-elem="ez"]');
                console.log('Storefront element found, continuing with it');
                console.log('EZ element found, continuing with it');
                console.log('Storefront element:', storefrontButton);
                console.log('EZ element:', ezButton);
            } catch (e) {
                console.log('Storefront element not found, continuing without it');
                console.log('EZ element not found, continuing without it');
            }
            const loginForm = new (0, _core.WFFormComponent)(".cardnumberform");
            const hideError = ()=>{
                formError.setStyle({
                    display: "none"
                });
                formErrorText.setText('');
            };
            const getRedirectUrl = (event)=>{
                // If we're in the storefront flow, use the storefront URL
                if (event?.target && event.target.closest('[xa-elem="storefront"]')) return "https://rewards.disabilityid.co.uk";
                // Otherwise use the clicked card URL, or fallback to current page URL
                return clickedCardUrl || '';
            };
            const handleMembershipCheck = async (event)=>{
                // Check cookie value dynamically to handle browser back navigation
                const membershipValid = (0, _cookies.getCookie)('membershipValid') === 'true';
                if (!membershipValid) // Always show membership modal for invalid membership
                {
                    if (membershipModal) {
                        membershipModal.setStyle({
                            display: "block"
                        });
                        membershipModal.addCssClass('show-modal');
                    }
                } else {
                    // Always run membership check on the button clicks so we get a URL returned from the API to redirect to.
                    // Then redirect to the URL returned from the API.
                    const ucn = (0, _cookies.getCookie)('ucn');
                    if (!ucn) {
                        // If no UCN, show modal to get it
                        if (membershipModal) {
                            membershipModal.setStyle({
                                display: "block"
                            });
                            membershipModal.addCssClass('show-modal');
                        }
                        return;
                    }
                    const payload = {
                        ucn: ucn,
                        url: getRedirectUrl(event),
                        redirectUrl: '',
                        membershipValid: true,
                        isStorefrontClick: isStorefrontClick
                    };
                    const membershipCheck = axiosClient.post("/api/membershipCheck?mode=json&url=" + url, {
                        data: payload
                    });
                    membershipCheck.onData((data)=>{
                        if (data.membershipValid === true && data.redirectUrl) {
                            console.log('Redirecting to URL:', data.redirectUrl);
                            // If redirecting to the same page, reload instead
                            if (data.redirectUrl === window.location.href) window.location.reload();
                            else window.location.href = data.redirectUrl;
                        } else // If membership check fails, show modal
                        if (membershipModal) {
                            membershipModal.setStyle({
                                display: "block"
                            });
                            membershipModal.addCssClass('show-modal');
                        }
                    });
                    membershipCheck.onError((error)=>{
                        console.error('Membership check error:', error);
                        // On error, show modal
                        if (membershipModal) {
                            membershipModal.setStyle({
                                display: "block"
                            });
                            membershipModal.addCssClass('show-modal');
                        }
                    });
                    membershipCheck.fetch(payload);
                }
            };
            const onModalClose = (e)=>{
                e.preventDefault();
                if (window.location.pathname.includes('/discounts-and-benefits')) {
                    membershipModal.setStyle({
                        display: "none"
                    });
                    membershipModal.removeCssClass('show-modal');
                    hideError();
                }
            };
            if (modalCloseButtonEl) {
                const modalCloseButton = new (0, _core.WFComponent)(".modal1_close-button");
                modalCloseButton.on('click', onModalClose);
            }
            if (modalBackgroundEl) {
                const modalBackground = new (0, _core.WFComponent)(".modal1_background-overlay");
                modalBackground.on('click', onModalClose);
            }
            let clickedCardUrl = '';
            let isStorefrontClick = false;
            // Try to get discount list element, but don't fail if it doesn't exist (e.g., on /login page)
            let parentContainer = null;
            try {
                parentContainer = new (0, _core.WFComponent)(".discount_list");
            } catch (e) {
                console.log('Discount list not found, continuing without it');
            }
            if (parentContainer) parentContainer.on("click", async (e)=>{
                let card = e.target.closest(".card");
                if (!card) return; // Exit if the click wasn't on a card
                e.preventDefault(); // Stop default navigation
                isStorefrontClick = false;
                console.log('isStorefrontClick:', isStorefrontClick);
                // Get the URL directly from the card's href since it is an anchor tag
                clickedCardUrl = card.href;
                console.log('Card URL:', clickedCardUrl);
                const hiddenUrlField = document.querySelector('.hiddenUrlField');
                if (hiddenUrlField) hiddenUrlField.setAttribute("value", clickedCardUrl);
                await handleMembershipCheck(e);
            });
            if (storefrontButton) storefrontButton.on('click', async (e)=>{
                e.preventDefault();
                isStorefrontClick = true;
                console.log('isStorefrontClick:', isStorefrontClick);
                await handleMembershipCheck(e);
            });
            if (ezButton) ezButton.on('click', async (e)=>{
                e.preventDefault();
                isStorefrontClick = false;
                console.log('isStorefrontClick:', isStorefrontClick);
                await handleMembershipCheck(e);
            });
            loginForm.onFormSubmit((data)=>{
                const ucn = (0, _cookies.getCookie)('ucn') || data.ucn;
                const payload = {
                    ucn: ucn,
                    url: getRedirectUrl(),
                    redirectUrl: '',
                    membershipValid: false,
                    isStorefrontClick: isStorefrontClick
                };
                // set up membership check to accept the url parameter as an arg from the discount page
                const membershipCheck = axiosClient.post("/api/membershipCheck?mode=json&url=" + url, {
                    data: payload
                });
                membershipCheck.onLoadingChange((status)=>{
                    if (status === true) membershipCheckBtn.setAttribute("value", "Checking card number...");
                    else membershipCheckBtn.setAttribute("value", "Submit");
                });
                membershipCheck.onData((data)=>{
                    if (data.membershipValid === true) {
                        (0, _cookies.setCookie)('membershipValid', 'true', 1 / 24);
                        (0, _cookies.setCookie)('ucn', data.ucn, 1 / 24);
                        window.location.reload();
                        // Use the redirectUrl from the response if available
                        if (data.redirectUrl) {
                            // first reload the page
                            console.log('Redirecting to URL:', data.redirectUrl);
                            // If redirecting to the same page, reload instead
                            if (data.redirectUrl === window.location.href) window.location.reload();
                            else window.location.href = data.redirectUrl;
                        }
                        if (membershipModal) {
                            membershipModal.setStyle({
                                display: "none"
                            });
                            membershipModal.removeCssClass('show-modal');
                        }
                    } else {
                        (0, _cookies.setCookie)('membershipValid', 'false', 1 / 24);
                        showError(`Something went wrong, please check your card number and try again.`);
                    }
                });
                membershipCheck.onError((error)=>{
                    (0, _cookies.setCookie)('membershipValid', 'false', 1 / 24);
                    if (error.status === 404) showError('Card number not found.');
                    else if (error.status === 400) showError('Your unique card number is required');
                    else if (error.message === 'Timeout') showError('Request timed out. Please try again.');
                    else showError('Something went wrong, please try again.');
                });
                membershipCheck.fetch(payload);
            });
        } catch (error) {
            console.error('Error initializing membership check:', error);
            showError('Something went wrong, please try again.');
        }
    });
};

},{"@xatom/axios":"JFduh","@xatom/core":"8w4K8","../utils/cookies":"1m4SD","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"JFduh":[function(require,module,exports,__globalThis) {
var $iEn1Z$axios = require("f938a1217c244582");
var $iEn1Z$uuid = require("95a23a66e34dadcf");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $b80ef5563dba82ee$exports = {};
$parcel$export($b80ef5563dba82ee$exports, "AxiosClientConfigurator", ()=>$b80ef5563dba82ee$export$e86c67606777b7aa);
$parcel$export($b80ef5563dba82ee$exports, "AxiosClient", ()=>$b80ef5563dba82ee$export$ad5a3977633fb854);
class $b80ef5563dba82ee$export$e86c67606777b7aa {
    constructor(baseUrl, otherConfig = {}, axiosOverrides){
        this._beforeRequestOps = new Map([]);
        this._retryRequestOnFailedOps = new Map([]);
        this._config = {};
        this._baseUrl = baseUrl;
        this._config = otherConfig;
        this._axios = axiosOverrides || $parcel$interopDefault($iEn1Z$axios);
    }
    beforeRequest(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this._beforeRequestOps.set(_id, fn);
        return this;
    }
    retryRequestOnFailed(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this._retryRequestOnFailedOps.set(_id, fn);
        return this;
    }
    getConfig() {
        return {
            baseAxios: this._axios,
            config: this._config || {},
            baseUrl: this._baseUrl,
            beforeRequestOps: Array.from(this._beforeRequestOps.values()),
            retryRequestOps: Array.from(this._retryRequestOnFailedOps.values())
        };
    }
}
const $b80ef5563dba82ee$var$makeAxiosInstance = (config)=>{
    const _config = config.getConfig();
    const _axios = _config.baseAxios.create({
        ..._config.config,
        baseURL: _config.baseUrl
    });
    _config.beforeRequestOps.forEach((fn)=>{
        _axios.interceptors.request.use((config)=>{
            return new Promise((resolve, reject)=>{
                try {
                    fn(config, (newConfig)=>{
                        resolve(newConfig);
                    });
                } catch (err) {
                    reject(err);
                }
            });
        });
    });
    _axios.interceptors.response.use(undefined, (err)=>{
        let __config = null;
        return new Promise((resolve, reject)=>{
            const { config: config } = err;
            __config = config || {};
            if (__config.retry === 1) reject(err);
            else {
                let _retry = false;
                const finalResponse = ()=>{
                    if (_retry) {
                        __config.retry = 1;
                        setTimeout(()=>{
                            _axios(__config).then(resolve).catch(reject);
                        }, 1000);
                    } else reject(err);
                };
                const processRetry = (_index)=>{
                    if (_index >= _config.retryRequestOps.length) {
                        finalResponse();
                        return;
                    }
                    _config.retryRequestOps[_index](err, __config, (newConfig)=>{
                        __config = newConfig;
                        _retry = true;
                        processRetry(_index + 1);
                    }, ()=>{
                        processRetry(_index + 1);
                    });
                };
                processRetry(0);
            }
        });
    });
    return _axios;
};
const $b80ef5563dba82ee$var$makeRequest = (config, path, method, initialVariables)=>{
    let _internalData;
    let _isLoading = false;
    let _dataListeners = new Map([]);
    let _errorListeners = new Map([]);
    let _loadingListeners = new Map([]);
    const data = ()=>{
        return _internalData;
    };
    const _internalOnData = (data)=>{
        _internalData = data;
        Array.from(_dataListeners.values()).forEach((fn)=>{
            fn(data);
        });
    };
    const _internalOnFailed = (err)=>{
        Array.from(_errorListeners.values()).forEach((fn)=>{
            fn(err);
        });
    };
    const _internalOnLoadingChange = (status)=>{
        _isLoading = status;
        Array.from(_loadingListeners.values()).forEach((fn)=>{
            fn(status);
        });
    };
    const makePathWithData = (path, data)=>{
        return `${path}?${new URLSearchParams(data).toString()}`;
    };
    const fetch = (data, headers)=>{
        return new Promise((resolve, reject)=>{
            _internalOnLoadingChange(true);
            const _data = data || initialVariables || {};
            const finalUrl = method === "GET" || method === "DELETE" ? makePathWithData(path, _data) : path;
            const finalData = method === "GET" || method === "DELETE" ? {} : _data;
            $b80ef5563dba82ee$var$makeAxiosInstance(config).request({
                method: method,
                url: finalUrl,
                data: finalData,
                headers: {
                    ...headers
                }
            }).then((res)=>{
                _internalOnData(res.data);
                resolve(res.data);
            }).catch((err)=>{
                _internalOnFailed(err);
                reject(err);
            }).finally(()=>{
                _internalOnLoadingChange(false);
            });
        });
    };
    const isLoading = ()=>{
        return _isLoading;
    };
    const onLoadingChange = (fn)=>{
        const _id = (0, $iEn1Z$uuid.v4)();
        _loadingListeners.set(_id, fn);
        return ()=>{
            _loadingListeners.delete(_id);
        };
    };
    const onLoadingChangeOnce = (fn)=>{
        const remove = onLoadingChange((status)=>{
            fn(status);
            remove();
        });
    };
    const onData = (fn)=>{
        const _id = (0, $iEn1Z$uuid.v4)();
        _dataListeners.set(_id, fn);
        return ()=>{
            _dataListeners.delete(_id);
        };
    };
    const onDataOnce = (fn)=>{
        const remove = onData((data)=>{
            fn(data);
            remove();
        });
    };
    const onError = (fn)=>{
        const _id = (0, $iEn1Z$uuid.v4)();
        _errorListeners.set(_id, fn);
        return ()=>{
            _errorListeners.delete(_id);
        };
    };
    const onErrorOnce = (fn)=>{
        const remove = onError((err)=>{
            fn(err);
            remove();
        });
    };
    return {
        data: data,
        fetch: fetch,
        isLoading: isLoading,
        onLoadingChange: onLoadingChange,
        onLoadingChangeOnce: onLoadingChangeOnce,
        onData: onData,
        onDataOnce: onDataOnce,
        onError: onError,
        onErrorOnce: onErrorOnce
    };
};
class $b80ef5563dba82ee$export$ad5a3977633fb854 {
    constructor(config){
        this._config = config;
    }
    get(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "GET", config.data);
    }
    post(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "POST", config.data);
    }
    patch(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "PATCH", config.data);
    }
    put(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "PUT", config.data);
    }
    delete(path, config = {}) {
        return $b80ef5563dba82ee$var$makeRequest(this._config, path, "DELETE", config.data);
    }
}
$parcel$exportWildcard(module.exports, $iEn1Z$axios);
$parcel$exportWildcard(module.exports, $b80ef5563dba82ee$exports);

},{"f938a1217c244582":"9qbW2","95a23a66e34dadcf":"ggZPL"}],"9qbW2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "getAdapter", ()=>getAdapter);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"2WNBm","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2WNBm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("./adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
'use strict';
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = (0, _adaptersJsDefault.default).getAdapter;
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"23n7J","./helpers/bind.js":"1RCyB","./core/Axios.js":"d1DFs","./core/mergeConfig.js":"4TZMD","./defaults/index.js":"a9do2","./helpers/formDataToJSON.js":"ehhBL","./cancel/CanceledError.js":"lmDw5","./cancel/CancelToken.js":"bkbDS","./cancel/isCancel.js":"812ai","./env/data.js":"hZeSU","./helpers/toFormData.js":"5uLyu","./core/AxiosError.js":"lFx5x","./helpers/spread.js":"8whoM","./helpers/isAxiosError.js":"6tVC4","./core/AxiosHeaders.js":"hvrRK","./adapters/adapters.js":"5eF2K","./helpers/HttpStatusCode.js":"idvAb","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"23n7J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
'use strict';
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== 'object') return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};
/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */ const isEmptyObject = (val)=>{
    // Early return for non-objects or Buffers to prevent RangeError
    if (!isObject(val) || isBuffer(val)) return false;
    try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
        // Fallback for any other objects that might cause RangeError with Object.keys()
        return false;
    }
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' || // detect form-data instance
    kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    'ReadableStream',
    'Request',
    'Response',
    'Headers'
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Buffer check
        if (isBuffer(obj)) return;
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    if (isBuffer(obj)) return null;
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless, skipUndefined } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else if (!skipUndefined || !isUndefined(val)) result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) Object.defineProperty(a, key, {
            value: (0, _bindJsDefault.default)(val, thisArg),
            writable: true,
            enumerable: true,
            configurable: true
        });
        else Object.defineProperty(a, key, {
            value: val,
            writable: true,
            enumerable: true,
            configurable: true
        });
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    Object.defineProperty(constructor.prototype, 'constructor', {
        value: constructor,
        writable: true,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while((result = _iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            'arguments',
            'caller',
            'callee'
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            //Buffer check
            if (isBuffer(source)) return source;
            if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) return setImmediate;
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener("message", ({ source, data })=>{
            if (source === _global && data === token) callbacks.length && callbacks.shift()();
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === 'function', isFunction(_global.postMessage));
const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : _setImmediate;
// *********************
const isIterable = (thing)=>thing != null && isFunction(thing[iterator]);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
};

},{"./helpers/bind.js":"1RCyB","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1RCyB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
'use strict';
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d1DFs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
'use strict';
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig || {};
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                    if (!err.stack) err.stack = stack;
                    else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) err.stack += '\n' + stack;
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) ;
        else if (this.defaults.allowAbsoluteUrls !== undefined) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        else config.allowAbsoluteUrls = true;
        (0, _validatorJsDefault.default).assertOptions(config, {
            baseUrl: validators.spelling('baseURL'),
            withXsrfToken: validators.spelling('withXSRFToken')
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        headers && (0, _utilsJsDefault.default).forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url, config.allowAbsoluteUrls);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"../utils.js":"23n7J","../helpers/buildURL.js":"7P30A","./InterceptorManager.js":"7yqEb","./dispatchRequest.js":"1jBLc","./mergeConfig.js":"4TZMD","./buildFullPath.js":"ld6gr","../helpers/validator.js":"2dOdb","./AxiosHeaders.js":"hvrRK","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7P30A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
'use strict';
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}
function buildURL(url, params, options) {
    if (!params) return url;
    const _encode = options && options.encode || encode;
    const _options = (0, _utilsJsDefault.default).isFunction(options) ? {
        serialize: options
    } : options;
    const serializeFn = _options && _options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, _options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, _options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}

},{"../utils.js":"23n7J","../helpers/AxiosURLSearchParams.js":"9y0As","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9y0As":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
'use strict';
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"5uLyu","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5uLyu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("adfd9b103875c2dd").Buffer;
'use strict';
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError('target must be an object');
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError('visitor must be a function');
    function convertValue(value) {
        if (value === null) return '';
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if ((0, _utilsJsDefault.default).isBoolean(value)) return value.toString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)('Blob is not supported. Use a Buffer instead.');
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === 'function' ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === 'object') {
            if ((0, _utilsJsDefault.default).endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, '[]')) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error('Circular reference detected in ' + path.join('.'));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError('data must be an object');
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"adfd9b103875c2dd":"9Atyw","../utils.js":"23n7J","../core/AxiosError.js":"lFx5x","../platform/node/classes/FormData.js":"giD96","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9Atyw":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"9c62938f1dccc73c":"aIRGD","aceacb6a4531a9d2":"bvEZp"}],"aIRGD":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"bvEZp":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"lFx5x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
class AxiosError extends Error {
    static from(error, code, config, request, response, customProps) {
        const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
    }
    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */ constructor(message, code, config, request, response){
        super(message);
        this.name = 'AxiosError';
        this.isAxiosError = true;
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        if (response) {
            this.response = response;
            this.status = response.status;
        }
    }
    toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
}
// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';
exports.default = AxiosError;

},{"../utils.js":"23n7J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"giD96":[function(require,module,exports,__globalThis) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7yqEb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"../utils.js":"23n7J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1jBLc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
'use strict';
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) config.headers.setContentType('application/x-www-form-urlencoded', false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter, config);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"a5Zhs","../cancel/isCancel.js":"812ai","../defaults/index.js":"a9do2","../cancel/CanceledError.js":"lmDw5","../core/AxiosHeaders.js":"hvrRK","../adapters/adapters.js":"5eF2K","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"a5Zhs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
'use strict';
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"../utils.js":"23n7J","../defaults/index.js":"a9do2","../core/AxiosHeaders.js":"hvrRK","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"a9do2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
'use strict';
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data) || (0, _utilsJsDefault.default).isReadableStream(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if ((0, _utilsJsDefault.default).isResponse(data) || (0, _utilsJsDefault.default).isReadableStream(data)) return data;
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data, this.parseReviver);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch'
], (method)=>{
    defaults.headers[method] = {};
});
exports.default = defaults;

},{"../utils.js":"23n7J","../core/AxiosError.js":"lFx5x","./transitional.js":"eEkHQ","../helpers/toFormData.js":"5uLyu","../helpers/toURLEncodedForm.js":"c9dDJ","../platform/index.js":"2hztP","../helpers/formDataToJSON.js":"ehhBL","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eEkHQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"c9dDJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
'use strict';
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), {
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        },
        ...options
    });
}

},{"../utils.js":"23n7J","./toFormData.js":"5uLyu","../platform/index.js":"2hztP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2hztP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("./common/utils.js");
exports.default = {
    ..._utilsJs,
    ...(0, _indexJsDefault.default)
};

},{"./node/index.js":"aTrj1","./common/utils.js":"epsiX","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aTrj1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};

},{"./classes/URLSearchParams.js":"iZqNx","./classes/FormData.js":"ceSml","./classes/Blob.js":"gazF8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iZqNx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
'use strict';
exports.default = typeof URLSearchParams !== 'undefined' ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"9y0As","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ceSml":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
exports.default = typeof FormData !== 'undefined' ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gazF8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
exports.default = typeof Blob !== 'undefined' ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"epsiX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasBrowserEnv", ()=>hasBrowserEnv);
parcelHelpers.export(exports, "hasStandardBrowserWebWorkerEnv", ()=>hasStandardBrowserWebWorkerEnv);
parcelHelpers.export(exports, "hasStandardBrowserEnv", ()=>hasStandardBrowserEnv);
parcelHelpers.export(exports, "navigator", ()=>_navigator);
parcelHelpers.export(exports, "origin", ()=>origin);
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ehhBL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"23n7J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hvrRK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
'use strict';
const $internals = Symbol('internals');
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error('header name must be a non-empty string');
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isObject(header) && (0, _utilsJsDefault.default).isIterable(header)) {
            let obj = {}, dest, key;
            for (const entry of header){
                if (!(0, _utilsJsDefault.default).isArray(entry)) throw TypeError('Object iterator must return a key-value pair');
                obj[key = entry[0]] = (dest = obj[key]) ? (0, _utilsJsDefault.default).isArray(dest) ? [
                    ...dest,
                    entry[1]
                ] : [
                    dest,
                    entry[1]
                ] : entry[1];
            }
            setHeaders(obj, valueOrRewrite);
        } else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    getSetCookie() {
        return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
(0, _utilsJsDefault.default).reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"23n7J","../helpers/parseHeaders.js":"gpHDj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gpHDj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === 'set-cookie') {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    });
    return parsed;
};

},{"../utils.js":"23n7J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"812ai":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
'use strict';
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lmDw5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
'use strict';
class CanceledError extends (0, _axiosErrorJsDefault.default) {
    /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */ constructor(message, config, request){
        super(message == null ? 'canceled' : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
        this.name = 'CanceledError';
        this.__CANCEL__ = true;
    }
}
exports.default = CanceledError;

},{"../core/AxiosError.js":"lFx5x","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5eF2K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _fetchJs = require("./fetch.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 * 
 * @type {Object<string, Function|Object>}
 */ const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default),
    fetch: {
        get: _fetchJs.getFetch
    }
};
// Assign adapter names for easier debugging and identification
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, 'name', {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            value
        });
    }
});
/**
 * Render a rejection reason string for unknown or unsupported adapters
 * 
 * @param {string} reason
 * @returns {string}
 */ const renderReason = (reason)=>`- ${reason}`;
/**
 * Check if the adapter is resolved (function, null, or false)
 * 
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */ const isResolvedHandle = (adapter)=>(0, _utilsJsDefault.default).isFunction(adapter) || adapter === null || adapter === false;
/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 * 
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */ function getAdapter(adapters, config) {
    adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
        adapters
    ];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for(let i = 0; i < length; i++){
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === undefined) throw new (0, _axiosErrorJsDefault.default)(`Unknown adapter '${id}'`);
        }
        if (adapter && ((0, _utilsJsDefault.default).isFunction(adapter) || (adapter = adapter.get(config)))) break;
        rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
        let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
        throw new (0, _axiosErrorJsDefault.default)(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
}
/**
 * Exports Axios adapters and utility to resolve an adapter
 */ exports.default = {
    /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */ getAdapter,
    /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */ adapters: knownAdapters
};

},{"../utils.js":"23n7J","./http.js":"giD96","./xhr.js":"j5guG","./fetch.js":"2EC0w","../core/AxiosError.js":"lFx5x","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"j5guG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _progressEventReducerJs = require("../helpers/progressEventReducer.js");
var _resolveConfigJs = require("../helpers/resolveConfig.js");
var _resolveConfigJsDefault = parcelHelpers.interopDefault(_resolveConfigJs);
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, _resolveConfigJsDefault.default)(config);
        let requestData = _config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)('Request aborted', (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError(event) {
            // Browsers deliver a ProgressEvent in XHR onerror
            // (message may be empty; when present, surface it)
            // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
            const msg = event && event.message ? event.message : 'Network Error';
            const err = new (0, _axiosErrorJsDefault.default)(msg, (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request);
            // attach the underlying event for consumers who want details
            err.event = event || null;
            reject(err);
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || (0, _transitionalJsDefault.default);
            if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = _config.responseType;
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, _progressEventReducerJs.progressEventReducer)(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, _progressEventReducerJs.progressEventReducer)(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(_config.url);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)('Unsupported protocol ' + protocol + ':', (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"../utils.js":"23n7J","../core/settle.js":"6X6Ui","../defaults/transitional.js":"eEkHQ","../core/AxiosError.js":"lFx5x","../cancel/CanceledError.js":"lmDw5","../helpers/parseProtocol.js":"h0Vok","../platform/index.js":"2hztP","../core/AxiosHeaders.js":"hvrRK","../helpers/progressEventReducer.js":"cAiyf","../helpers/resolveConfig.js":"jK4Va","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6X6Ui":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
'use strict';
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)('Request failed with status code ' + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"lFx5x","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"h0Vok":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
'use strict';
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cAiyf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progressEventReducer", ()=>progressEventReducer);
parcelHelpers.export(exports, "progressEventDecorator", ()=>progressEventDecorator);
parcelHelpers.export(exports, "asyncDecorator", ()=>asyncDecorator);
var _speedometerJs = require("./speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
var _throttleJs = require("./throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (0, _throttleJsDefault.default)((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>(0, _utilsJsDefault.default).asap(()=>fn(...args));

},{"./speedometer.js":"fT3Rc","./throttle.js":"3HIKo","../utils.js":"23n7J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fT3Rc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3HIKo":[function(require,module,exports,__globalThis) {
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn(...args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) invoke(args, now);
        else {
            lastArgs = args;
            if (!timer) timer = setTimeout(()=>{
                timer = null;
                invoke(lastArgs);
            }, threshold - passed);
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
exports.default = throttle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jK4Va":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _isURLSameOriginJs = require("./isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _cookiesJs = require("./cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _mergeConfigJs = require("../core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _buildURLJs = require("./buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
exports.default = (config)=>{
    const newConfig = (0, _mergeConfigJsDefault.default)({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = (0, _axiosHeadersJsDefault.default).from(headers);
    newConfig.url = (0, _buildURLJsDefault.default)((0, _buildFullPathJsDefault.default)(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    if ((0, _utilsJsDefault.default).isFormData(data)) {
        if ((0, _indexJsDefault.default).hasStandardBrowserEnv || (0, _indexJsDefault.default).hasStandardBrowserWebWorkerEnv) headers.setContentType(undefined); // browser handles it
        else if ((0, _utilsJsDefault.default).isFunction(data.getHeaders)) {
            // Node.js FormData (like form-data package)
            const formHeaders = data.getHeaders();
            // Only set safe headers to avoid overwriting security headers
            const allowedHeaders = [
                'content-type',
                'content-length'
            ];
            Object.entries(formHeaders).forEach(([key, val])=>{
                if (allowedHeaders.includes(key.toLowerCase())) headers.set(key, val);
            });
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if ((0, _indexJsDefault.default).hasStandardBrowserEnv) {
        withXSRFToken && (0, _utilsJsDefault.default).isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, _isURLSameOriginJsDefault.default)(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && (0, _cookiesJsDefault.default).read(xsrfCookieName);
            if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
        }
    }
    return newConfig;
};

},{"../platform/index.js":"2hztP","../utils.js":"23n7J","./isURLSameOrigin.js":"2y17F","./cookies.js":"ao3Fd","../core/buildFullPath.js":"ld6gr","../core/mergeConfig.js":"4TZMD","../core/AxiosHeaders.js":"hvrRK","./buildURL.js":"7P30A","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2y17F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, (0, _indexJsDefault.default).origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL((0, _indexJsDefault.default).origin), (0, _indexJsDefault.default).navigator && /(msie|trident)/i.test((0, _indexJsDefault.default).navigator.userAgent)) : ()=>true;

},{"../platform/index.js":"2hztP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ao3Fd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === 'undefined') return;
        const cookie = [
            `${name}=${encodeURIComponent(value)}`
        ];
        if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push(`expires=${new Date(expires).toUTCString()}`);
        if ((0, _utilsJsDefault.default).isString(path)) cookie.push(`path=${path}`);
        if ((0, _utilsJsDefault.default).isString(domain)) cookie.push(`domain=${domain}`);
        if (secure === true) cookie.push('secure');
        if ((0, _utilsJsDefault.default).isString(sameSite)) cookie.push(`SameSite=${sameSite}`);
        document.cookie = cookie.join('; ');
    },
    read (name) {
        if (typeof document === 'undefined') return null;
        const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000, '/');
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};

},{"../utils.js":"23n7J","../platform/index.js":"2hztP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ld6gr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
'use strict';
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !(0, _isAbsoluteURLJsDefault.default)(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"axjYU","../helpers/combineURLs.js":"7Iss4","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"axjYU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
'use strict';
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7Iss4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
'use strict';
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4TZMD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
'use strict';
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? {
        ...thing
    } : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, prop, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, prop, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys({
        ...config1,
        ...config2
    }), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"23n7J","./AxiosHeaders.js":"hvrRK","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2EC0w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFetch", ()=>getFetch);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _composeSignalsJs = require("../helpers/composeSignals.js");
var _composeSignalsJsDefault = parcelHelpers.interopDefault(_composeSignalsJs);
var _trackStreamJs = require("../helpers/trackStream.js");
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _progressEventReducerJs = require("../helpers/progressEventReducer.js");
var _resolveConfigJs = require("../helpers/resolveConfig.js");
var _resolveConfigJsDefault = parcelHelpers.interopDefault(_resolveConfigJs);
var _settleJs = require("../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
const DEFAULT_CHUNK_SIZE = 65536;
const { isFunction } = (0, _utilsJsDefault.default);
const globalFetchAPI = (({ Request, Response })=>({
        Request,
        Response
    }))((0, _utilsJsDefault.default).global);
const { ReadableStream, TextEncoder } = (0, _utilsJsDefault.default).global;
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const factory = (env)=>{
    env = (0, _utilsJsDefault.default).merge.call({
        skipUndefined: true
    }, globalFetchAPI, env);
    const { fetch: envFetch, Request, Response } = env;
    const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
    const isRequestSupported = isFunction(Request);
    const isResponseSupported = isFunction(Response);
    if (!isFetchSupported) return false;
    const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
    const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Request(str).arrayBuffer()));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(()=>{
        let duplexAccessed = false;
        const hasContentType = new Request((0, _indexJsDefault.default).origin, {
            body: new ReadableStream(),
            method: 'POST',
            get duplex () {
                duplexAccessed = true;
                return 'half';
            }
        }).headers.has('Content-Type');
        return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(()=>(0, _utilsJsDefault.default).isReadableStream(new Response('').body));
    const resolvers = {
        stream: supportsResponseStream && ((res)=>res.body)
    };
    isFetchSupported && (()=>{
        [
            'text',
            'arrayBuffer',
            'blob',
            'formData',
            'stream'
        ].forEach((type)=>{
            !resolvers[type] && (resolvers[type] = (res, config)=>{
                let method = res && res[type];
                if (method) return method.call(res);
                throw new (0, _axiosErrorJsDefault.default)(`Response type '${type}' is not supported`, (0, _axiosErrorJsDefault.default).ERR_NOT_SUPPORT, config);
            });
        });
    })();
    const getBodyLength = async (body)=>{
        if (body == null) return 0;
        if ((0, _utilsJsDefault.default).isBlob(body)) return body.size;
        if ((0, _utilsJsDefault.default).isSpecCompliantForm(body)) {
            const _request = new Request((0, _indexJsDefault.default).origin, {
                method: 'POST',
                body
            });
            return (await _request.arrayBuffer()).byteLength;
        }
        if ((0, _utilsJsDefault.default).isArrayBufferView(body) || (0, _utilsJsDefault.default).isArrayBuffer(body)) return body.byteLength;
        if ((0, _utilsJsDefault.default).isURLSearchParams(body)) body = body + '';
        if ((0, _utilsJsDefault.default).isString(body)) return (await encodeText(body)).byteLength;
    };
    const resolveBodyLength = async (headers, body)=>{
        const length = (0, _utilsJsDefault.default).toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
    };
    return async (config)=>{
        let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = 'same-origin', fetchOptions } = (0, _resolveConfigJsDefault.default)(config);
        let _fetch = envFetch || fetch;
        responseType = responseType ? (responseType + '').toLowerCase() : 'text';
        let composedSignal = (0, _composeSignalsJsDefault.default)([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
            composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
            if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
                let _request = new Request(url, {
                    method: 'POST',
                    body: data,
                    duplex: "half"
                });
                let contentTypeHeader;
                if ((0, _utilsJsDefault.default).isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) headers.setContentType(contentTypeHeader);
                if (_request.body) {
                    const [onProgress, flush] = (0, _progressEventReducerJs.progressEventDecorator)(requestContentLength, (0, _progressEventReducerJs.progressEventReducer)((0, _progressEventReducerJs.asyncDecorator)(onUploadProgress)));
                    data = (0, _trackStreamJs.trackStream)(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
                }
            }
            if (!(0, _utilsJsDefault.default).isString(withCredentials)) withCredentials = withCredentials ? 'include' : 'omit';
            // Cloudflare Workers throws when credentials are defined
            // see https://github.com/cloudflare/workerd/issues/902
            const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
            const resolvedOptions = {
                ...fetchOptions,
                signal: composedSignal,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: "half",
                credentials: isCredentialsSupported ? withCredentials : undefined
            };
            request = isRequestSupported && new Request(url, resolvedOptions);
            let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
            const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
            if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
                const options = {};
                [
                    'status',
                    'statusText',
                    'headers'
                ].forEach((prop)=>{
                    options[prop] = response[prop];
                });
                const responseContentLength = (0, _utilsJsDefault.default).toFiniteNumber(response.headers.get('content-length'));
                const [onProgress, flush] = onDownloadProgress && (0, _progressEventReducerJs.progressEventDecorator)(responseContentLength, (0, _progressEventReducerJs.progressEventReducer)((0, _progressEventReducerJs.asyncDecorator)(onDownloadProgress), true)) || [];
                response = new Response((0, _trackStreamJs.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                    flush && flush();
                    unsubscribe && unsubscribe();
                }), options);
            }
            responseType = responseType || 'text';
            let responseData = await resolvers[(0, _utilsJsDefault.default).findKey(resolvers, responseType) || 'text'](response, config);
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject)=>{
                (0, _settleJsDefault.default)(resolve, reject, {
                    data: responseData,
                    headers: (0, _axiosHeadersJsDefault.default).from(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    config,
                    request
                });
            });
        } catch (err) {
            unsubscribe && unsubscribe();
            if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) throw Object.assign(new (0, _axiosErrorJsDefault.default)('Network Error', (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request), {
                cause: err.cause || err
            });
            throw (0, _axiosErrorJsDefault.default).from(err, err && err.code, config, request);
        }
    };
};
const seedCache = new Map();
const getFetch = (config)=>{
    let env = config && config.env || {};
    const { fetch: fetch1, Request, Response } = env;
    const seeds = [
        Request,
        Response,
        fetch1
    ];
    let len = seeds.length, i = len, seed, target, map = seedCache;
    while(i--){
        seed = seeds[i];
        target = map.get(seed);
        target === undefined && map.set(seed, target = i ? new Map() : factory(env));
        map = target;
    }
    return target;
};
const adapter = getFetch();
exports.default = adapter;

},{"../platform/index.js":"2hztP","../utils.js":"23n7J","../core/AxiosError.js":"lFx5x","../helpers/composeSignals.js":"2AEil","../helpers/trackStream.js":"bLNoG","../core/AxiosHeaders.js":"hvrRK","../helpers/progressEventReducer.js":"cAiyf","../helpers/resolveConfig.js":"jK4Va","../core/settle.js":"6X6Ui","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2AEil":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
const composeSignals = (signals, timeout)=>{
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof (0, _axiosErrorJsDefault.default) ? err : new (0, _canceledErrorJsDefault.default)(err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new (0, _axiosErrorJsDefault.default)(`timeout of ${timeout}ms exceeded`, (0, _axiosErrorJsDefault.default).ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal } = controller;
        signal.unsubscribe = ()=>(0, _utilsJsDefault.default).asap(unsubscribe);
        return signal;
    }
};
exports.default = composeSignals;

},{"../cancel/CanceledError.js":"lmDw5","../core/AxiosError.js":"lFx5x","../utils.js":"23n7J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bLNoG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "streamChunk", ()=>streamChunk);
parcelHelpers.export(exports, "readBytes", ()=>readBytes);
parcelHelpers.export(exports, "trackStream", ()=>trackStream);
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize) {
    for await (const chunk of readStream(iterable))yield* streamChunk(chunk, chunkSize);
};
const readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) break;
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const trackStream = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2dOdb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
'use strict';
const validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + (0, _dataJs.VERSION) + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
validators.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new (0, _axiosErrorJsDefault.default)('options must be an object', (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)('option ' + opt + ' must be ' + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)('Unknown option ' + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"hZeSU","../core/AxiosError.js":"lFx5x","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hZeSU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.13.4";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bkbDS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
'use strict';
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"lmDw5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8whoM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
'use strict';
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6tVC4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
'use strict';
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"../utils.js":"23n7J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"idvAb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1m4SD":[function(require,module,exports,__globalThis) {
// Function to set a cookie with a specific name, value, and expiration in days
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setCookie", ()=>setCookie);
parcelHelpers.export(exports, "getCookie", ()=>getCookie);
const setCookie = (name, value, days)=>{
    const date = new Date();
    date.setTime(date.getTime() + days * 86400000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};
const getCookie = (name)=>{
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies){
        // Remove leading spaces and check if cookie starts with the target name
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) return cookie.substring(nameEQ.length);
    }
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kEqUL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchSingleUseCode", ()=>fetchSingleUseCode);
var _axios = require("@xatom/axios");
var _core = require("@xatom/core");
var _cookies = require("../utils/cookies");
const fetchSingleUseCode = ()=>{
    const codeSections = document.querySelectorAll(`.single-use-code-section`);
    codeSections.forEach((section)=>{
        const getCodeBtn = new (0, _core.WFComponent)(section.querySelector(`.get-code-button`));
        const getCodeBtnText = new (0, _core.WFComponent)(section.querySelector(`.get-code-button-text`));
        const getCodeBtnLoader = new (0, _core.WFComponent)(section.querySelector(`.get-code-button-loader`));
        const singleUseCode = new (0, _core.WFComponent)(section.querySelector(`.is-single-use-code`));
        const singleUseCodeName = new (0, _core.WFComponent)(section.querySelector(`.single-use-code_provider-name`));
        const sucText = new (0, _core.WFComponent)(section.querySelector(`.single-use-code-text`));
        const copyCodeBtn = new (0, _core.WFComponent)(section.querySelector(`.copy-code-button`));
        const useCodeBtn = new (0, _core.WFComponent)(section.querySelector(`.use-this-code`));
        const iconCopy = new (0, _core.WFComponent)(section.querySelector(`.copy-code-button > .icon-copy`));
        const iconCheck = new (0, _core.WFComponent)(section.querySelector(`.copy-code-button > .icon-check`));
        const codeError = new (0, _core.WFComponent)(section.querySelector(`.code-error`));
        const codeErrorText = new (0, _core.WFComponent)(section.querySelector(`.code-error-text`));
        // Define a click event handler function
        const fetchSuc = (e)=>{
            e.preventDefault();
            console.log("Fetching code");
            let ucnValue = (0, _cookies.getCookie)('ucn');
            const ucn = ucnValue;
            const url = window.location.href;
            const providerString = singleUseCodeName.getText();
            const discountProviderName = providerString;
            let endpoint = window.location.href.startsWith('http://localhost:3020') ? "http://localhost:3000" : "https://membership-check-main.vercel.app/";
            // Configure the base URL for your API
            const axiosConfigurator = new (0, _axios.AxiosClientConfigurator)(endpoint);
            const axiosClient = new (0, _axios.AxiosClient)(axiosConfigurator);
            const fetchCodeRequest = axiosClient.post("/api/fetchSuc", {
                data: {
                    ucn,
                    url,
                    discountProviderName
                }
            });
            fetchCodeRequest.onLoadingChange((status)=>{
                if (status === true) {
                    getCodeBtnText.addCssClass('hide');
                    getCodeBtnLoader.removeCssClass('hide');
                } else {
                    getCodeBtnText.removeCssClass('hide');
                    getCodeBtnLoader.addCssClass('hide');
                }
            });
            fetchCodeRequest.onData((response)=>{
                console.log("Response:", response);
                sucText.setText(response.code);
                singleUseCode.removeCssClass('hide');
                useCodeBtn.removeCssClass('hide');
                getCodeBtn.addCssClass('hide');
                codeError.addCssClass('hide');
            });
            fetchCodeRequest.onError((error)=>{
                console.log('Error:', error.response.data.error);
                const codeErrorTexta = codeErrorText.getElement();
                codeError.removeCssClass('hide');
                if (error.status === 429) codeErrorTexta.innerHTML = `${error.response.data.error} contact support`;
                else codeErrorTexta.innerHTML = `${error.response.data.error}`;
            });
            fetchCodeRequest.fetch();
        };
        // Attach the click event listener to the getCode button
        getCodeBtn.on("click", fetchSuc);
        const copyCode = async ()=>{
            const code = sucText.getText().trim();
            await navigator.clipboard.writeText(code);
            // Show success feedback
            iconCopy.addCssClass('hide');
            iconCheck.removeCssClass('hide');
            // Revert back after 2 seconds
            setTimeout(()=>{
                iconCopy.removeCssClass('hide');
                iconCheck.addCssClass('hide');
            }, 2000);
        };
        // Attach the click event listener to the copyCode button
        copyCodeBtn.on("click", copyCode);
    });
};

},{"@xatom/axios":"JFduh","@xatom/core":"8w4K8","../utils/cookies":"1m4SD","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},["jeTtx"], "jeTtx", "parcelRequiref1e1", {})

=======
!function(e,t,r,n,o){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof s[n]&&s[n],a=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!a[t]){if(!e[t]){var o="function"==typeof s[n]&&s[n];if(!r&&o)return o(t,!0);if(i)return i(t,!0);if(l&&"string"==typeof t)return l(t);var f=Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var c=a[t]=new u.Module(t);e[t][0].call(c.exports,d,c,c.exports,s)}return a[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=i,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return s[n]}}),s[n]=u;for(var f=0;f<t.length;f++)u(t[f]);if(r){var c=u(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}}({"83hJF":[function(e,t,r,n){var o=e("@xatom/core"),s=e("./routes");(0,o.onReady)(()=>{(0,s.globalFnRoutes)(),(0,s.discountListRoutes)(),(0,s.discountPageRoutes)(),(0,s.loginRoutes)()})},{"@xatom/core":"5eqAK","./routes":"2uPfR"}],"5eqAK":[function(e,t,r,n){var o=e("116fc168c31b637d");function s(e,t){return Object.keys(t).forEach(function(r){"default"===r||"__esModule"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})}),e}function i(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var a={};i(a,"WFAuth",()=>l);class l{constructor(e={}){this.config=e}isLoggedIn(){return!!this.user}getRole(){return this.role}getUser(){return this.user}getConfig(){return this.config}logout(){this.user=null,this.role=null,this.config=null}setUser(e){this.user=e}setRole(e){this.role=e}setConfig(e){this.config=e}}var u={};i(u,"WFAuthMiddleware",()=>f);class f{constructor(e){this.auth=e}allowTo(e){return this.auth.getRole()===e}disallowedTo(e){return this.auth.getRole()!==e}getAuth(){return this.auth}}var c={};i(c,"WFComponent",()=>k);var d={},p={};i(p,"debug",()=>h);let h=(...e)=>{window.WFDebug&&console.log(...e)};var m={};function g(e,t){return document.evaluate(e,t,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}i(m,"getElementByXPath",()=>g);var y={};i(y,"getRouteQueryParams",()=>j);let j=()=>{let e={};return new URLSearchParams(location.search).forEach((t,r)=>{e[r]=t}),e};var b={};function w(e,t){let r=[];for(;e&&e!==t&&e.nodeType===Node.ELEMENT_NODE;){let t=e.nodeName.toLowerCase();e.hasAttribute("id")?t+='[@id="'+e.getAttribute("id")+'"]':e.hasAttribute("class")&&(t+='[@class="'+e.getAttribute("class")+'"]'),r.unshift(t),e=e.parentNode}return r.join("/")}i(b,"getXPathForChangedChild",()=>w);var E={};i(E,"navigate",()=>x);let x=e=>{"string"==typeof e?window.location.assign(e):"object"==typeof e&&"replace"===e.type?window.location.replace(e.to):"object"==typeof e&&"reload"===e.type&&window.location.reload()};var v={};function C(e,t={}){let r=function(e){let t=[],r=0;for(;r<e.length;){let n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){let n="",o=r+1;for(;o<e.length;){let t=e.charCodeAt(o);if(t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122||95===t){n+=e[o++];continue}break}if(!n)throw TypeError(`Missing parameter name at ${r}`);t.push({type:"NAME",index:r,value:n}),r=o;continue}if("("===n){let n=1,o="",s=r+1;if("?"===e[s])throw TypeError(`Pattern cannot start with "?" at ${s}`);for(;s<e.length;){if("\\"===e[s]){o+=e[s++]+e[s++];continue}if(")"===e[s]){if(0==--n){s++;break}}else if("("===e[s]&&(n++,"?"!==e[s+1]))throw TypeError(`Capturing groups are not allowed at ${s}`);o+=e[s++]}if(n)throw TypeError(`Unbalanced pattern at ${r}`);if(!o)throw TypeError(`Missing pattern at ${r}`);t.push({type:"PATTERN",index:r,value:o}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),{prefixes:n="./"}=t,o=`[^${T(t.delimiter||"/#?")}]+?`,s=[],i=0,a=0,l="",u=e=>{if(a<r.length&&r[a].type===e)return r[a++].value},f=e=>{let t=u(e);if(void 0!==t)return t;let{type:n,index:o}=r[a];throw TypeError(`Unexpected ${n} at ${o}, expected ${e}`)},c=()=>{let e,t="";for(;e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};for(;a<r.length;){let e=u("CHAR"),t=u("NAME"),r=u("PATTERN");if(t||r){let a=e||"";-1===n.indexOf(a)&&(l+=a,a=""),l&&(s.push(l),l=""),s.push({name:t||i++,prefix:a,suffix:"",pattern:r||o,modifier:u("MODIFIER")||""});continue}let a=e||u("ESCAPED_CHAR");if(a){l+=a;continue}if(l&&(s.push(l),l=""),u("OPEN")){let e=c(),t=u("NAME")||"",r=u("PATTERN")||"",n=c();f("CLOSE"),s.push({name:t||(r?i++:""),pattern:t&&!r?o:r,prefix:e,suffix:n,modifier:u("MODIFIER")||""});continue}f("END")}return s}function A(e,t){return R(C(e,t),t)}function R(e,t={}){let r=F(t),{encode:n=e=>e,validate:o=!0}=t,s=e.map(e=>{if("object"==typeof e)return RegExp(`^(?:${e.pattern})$`,r)});return t=>{let r="";for(let i=0;i<e.length;i++){let a=e[i];if("string"==typeof a){r+=a;continue}let l=t?t[a.name]:void 0,u="?"===a.modifier||"*"===a.modifier,f="*"===a.modifier||"+"===a.modifier;if(Array.isArray(l)){if(!f)throw TypeError(`Expected "${a.name}" to not repeat, but got an array`);if(0===l.length){if(u)continue;throw TypeError(`Expected "${a.name}" to not be empty`)}for(let e=0;e<l.length;e++){let t=n(l[e],a);if(o&&!s[i].test(t))throw TypeError(`Expected all "${a.name}" to match "${a.pattern}", but got "${t}"`);r+=a.prefix+t+a.suffix}continue}if("string"==typeof l||"number"==typeof l){let e=n(String(l),a);if(o&&!s[i].test(e))throw TypeError(`Expected "${a.name}" to match "${a.pattern}", but got "${e}"`);r+=a.prefix+e+a.suffix;continue}if(u)continue;let c=f?"an array":"a string";throw TypeError(`Expected "${a.name}" to be ${c}`)}return r}}function S(e,t){let r=[];return D(I(e,r,t),r,t)}function D(e,t,r={}){let{decode:n=e=>e}=r;return function(r){let o=e.exec(r);if(!o)return!1;let{0:s,index:i}=o,a=Object.create(null);for(let e=1;e<o.length;e++){if(void 0===o[e])continue;let r=t[e-1];"*"===r.modifier||"+"===r.modifier?a[r.name]=o[e].split(r.prefix+r.suffix).map(e=>n(e,r)):a[r.name]=n(o[e],r)}return{path:s,index:i,params:a}}}function T(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function F(e){return e&&e.sensitive?"":"i"}function O(e,t,r={}){let{strict:n=!1,start:o=!0,end:s=!0,encode:i=e=>e,delimiter:a="/#?",endsWith:l=""}=r,u=`[${T(l)}]|$`,f=`[${T(a)}]`,c=o?"^":"";for(let r of e)if("string"==typeof r)c+=T(i(r));else{let e=T(i(r.prefix)),n=T(i(r.suffix));if(r.pattern){if(t&&t.push(r),e||n){if("+"===r.modifier||"*"===r.modifier){let t="*"===r.modifier?"?":"";c+=`(?:${e}((?:${r.pattern})(?:${n}${e}(?:${r.pattern}))*)${n})${t}`}else c+=`(?:${e}(${r.pattern})${n})${r.modifier}`}else"+"===r.modifier||"*"===r.modifier?c+=`((?:${r.pattern})${r.modifier})`:c+=`(${r.pattern})${r.modifier}`}else c+=`(?:${e}${n})${r.modifier}`}if(s)n||(c+=`${f}?`),c+=r.endsWith?`(?=${u})`:"$";else{let t=e[e.length-1],r="string"==typeof t?f.indexOf(t[t.length-1])>-1:void 0===t;n||(c+=`(?:${f}(?=${u}))?`),r||(c+=`(?=${f}|${u})`)}return new RegExp(c,F(r))}function I(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;let r=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=r.exec(e.source);for(;o;)t.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=r.exec(e.source);return e}(e,t):Array.isArray(e)?function(e,t,r){let n=e.map(e=>I(e,t,r).source);return RegExp(`(?:${n.join("|")})`,F(r))}(e,t,r):O(C(e,r),t,r)}i(v,"parse",()=>C),i(v,"compile",()=>A),i(v,"tokensToFunction",()=>R),i(v,"match",()=>S),i(v,"pathToRegexp",()=>I),i(v,"regexpToFunction",()=>D),i(v,"tokensToRegexp",()=>O),i(v,"routeMatch",()=>B);let B=(e,t,r={},n={})=>(function(e={}){return function(t){var r=[],n=I(t,r,e);return function(e,t){var o,s,i=n.exec(e);if(!i)return!1;t=t||{};for(var a=0;a<r.length;a++)o=r[a],(s=i[a+1])&&(t[o.name]=function(e){try{return decodeURIComponent(e)}catch(t){throw Error('failed to decode param "'+e+'"')}}(s),o.repeat&&(t[o.name]=t[o.name].split(o.delimiter)));return t}}})(n)(e)(t,r);var L={};i(L,"createComponent",()=>U);let U=e=>new k(document.createElement(e));s(d,p),s(d,m),s(d,y),s(d,b),s(d,E),s(d,v),s(d,L);class k{constructor(e){if("string"==typeof e){let t=document.querySelector(e);if(t)this.element=t,this.updateClone();else throw Error(`Could not find ${e}`)}else if("object"==typeof e&&e instanceof HTMLElement)this.element=e,this.updateClone();else if("object"==typeof e&&e instanceof SVGSVGElement)this.element=e,this.updateClone();else if(e instanceof k)this.element=e.getElement(),this.updateClone();else throw Error(`Could not find ${e}`)}updateClone(){this.cloneEl=this.element.cloneNode(!0)}getElement(){return this.element}updateTextViaAttrVar(e){let t={},r=(e,r)=>{e in t||(t[e]=[]),t[e].push(r)};this.hasAttribute("xa-var")&&r(this.getAttribute("xa-var"),this.getElement()),this.getChildAsComponents("[xa-var]").forEach(e=>{r(e.getAttribute("xa-var"),e.getElement())}),Object.keys(e).forEach(r=>{r in t&&t[r].forEach(t=>{t.textContent=e[r].toString()})})}updateTextVariable(e){if(1===this.cloneEl.childNodes.length&&this.cloneEl.firstChild instanceof Text)Object.keys(e).forEach(t=>{this.cloneEl.textContent.includes(`{{${t}}}`)&&(this.element.textContent=this.cloneEl.textContent.replace(`{{${t}}}`,e[t].toString()))});else{let t=Array.from(this.cloneEl.querySelectorAll("*")).map(e=>Array.from(e.childNodes).filter(e=>e instanceof Text&&e.textContent.trim().length>0)).flat();Object.keys(e).forEach(r=>{t.filter(e=>e.textContent.includes(`{{${r}}}`)).forEach(t=>{let n=w(t.parentElement,this.cloneEl),o=g(n,this.element);o?o.textContent=t.textContent.replace(`{{${r}}}`,e[r].toString()):console.log(t,o,"not found",n,t.parentElement,this)})})}}setAttribute(e,t){this.element.setAttribute(e,t)}removeAttribute(e){this.element.removeAttribute(e)}getAttribute(e){return this.element.getAttribute(e)}hasAttribute(e){return this.element.hasAttribute(e)}getChildAsComponents(e){return Array.from(this.element.querySelectorAll(e)).map(e=>new k(e))}getChildAsComponent(e){return new k(this.element.querySelector(e))}getManyChildAsComponents(e){let t={};return Object.keys(e).forEach(r=>{t[r]=new k(this.element.querySelector(e[r]))}),t}getCssClass(){return Array.from(this.element.classList)}addCssClass(e){this.element.classList.add(e),this.cloneEl.classList.add(e)}removeCssClass(e){this.element.classList.remove(e),this.cloneEl.classList.remove(e)}replaceCssClass(e,t){this.element.classList.replace(e,t),this.cloneEl.classList.replace(e,t)}toggleCssClass(e){this.element.classList.toggle(e),this.cloneEl.classList.toggle(e)}on(e,t,r){this.element.addEventListener(e,t,r)}off(e,t,r){this.element.removeEventListener(e,t,r)}setText(e){this.getElement().innerText=e.toString()}getText(){return this.getElement().innerText}setTextContent(e){this.getElement().textContent=e}getTextContent(){return this.getElement().textContent}setHTML(e){this.getElement().innerHTML=e}getHTML(){return this.getElement().innerHTML}getCloneAsComponent(){return new k(this.cloneEl.cloneNode(!0))}setStyle(e={}){Object.keys(e).forEach(t=>{this.element.style[t]=e[t]})}getStyle(){return window.getComputedStyle(this.element)}appendChild(e){this.element.appendChild(new k(e).getElement())}remove(){this.element.remove()}removeAllChildren(){this.element.replaceChildren()}}var N={};i(N,"WFDynamicList",()=>P);class P extends k{showLoadingState=!1;constructor(e,t){super(e),"string"==typeof t.rowSelector?this.rowComponent=this.getChildAsComponent(t.rowSelector):this.rowComponent=new k(t.rowSelector),this.rowComponent.remove(),t.loaderSelector&&("string"==typeof t.loaderSelector?this.loaderComponent=this.getChildAsComponent(t.loaderSelector):this.loaderComponent=new k(t.loaderSelector),this.loaderComponent.remove()),t.emptySelector&&("string"==typeof t.emptySelector?this.emptyComponent=this.getChildAsComponent(t.emptySelector):this.emptyComponent=new k(t.emptySelector),this.emptyComponent.remove())}rowRenderer(e){this.rowRendererCB=e}emptyRenderer(e){this.emptyRendererCB=e}loaderRenderer(e){this.loaderRendererCB=e}setData(e){this.data=e,this.render()}render(){if(!this.rowRendererCB)throw Error("Unable to find renderer");this.hideLoading(),this.removeAllChildren(),0===this.data.length&&this.emptyComponent&&this.showEmpty(),this.data.map((e,t,r)=>this.rowRendererCB({index:t,rowData:e,rowElement:this.rowComponent.getCloneAsComponent(),data:r})).filter(e=>e).forEach(e=>{this.appendChild(e)}),this.showLoadingState&&this.showLoading()}changeLoadingStatus(e){this.showLoadingState=e,e?this.showLoading():this.hideLoading()}showLoading(){this.hideLoading(),this.loaderComponent&&(this.loaderRendererCB?this.lastLoadingComponent=this.loaderRendererCB(this.loaderComponent.getCloneAsComponent()):this.lastLoadingComponent=this.loaderComponent.getCloneAsComponent(),this.appendChild(this.lastLoadingComponent))}showEmpty(){this.hideEmpty(),this.emptyRendererCB?this.lastEmptyComponent=this.emptyRendererCB(this.emptyComponent.getCloneAsComponent()):this.lastEmptyComponent=this.emptyComponent.getCloneAsComponent(),this.appendChild(this.lastEmptyComponent)}hideLoading(){this.lastLoadingComponent&&this.lastLoadingComponent.remove()}hideEmpty(){this.lastEmptyComponent&&this.lastEmptyComponent.remove()}forceRender(){this.render()}}var _={};i(_,"WFFormComponent",()=>q);class q extends k{defaultFormDisplayStyle="";constructor(e){super(e),this.formComponent=this.getChildAsComponents("form")[0],this.defaultFormDisplayStyle=window.getComputedStyle(this.formComponent.getElement()).display}getFormData(){let e={};return new FormData(this.formComponent.getElement()).forEach((t,r)=>{e[r]?e[r]=[e[r],t].flat():e[r]=t}),e}setFromData(e){Object.keys(e).forEach(t=>{this.getFormComponent().getElement().querySelector(`[name="${t}"]`).value=e[t]})}onFormSubmit(e){this.formComponent.getElement().onsubmit=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),e(this.getFormData(),t)}}submitWebflowForm(){let e=Object.keys(this.formComponent.getElement()).filter(e=>e.includes("jQuery")).map(e=>this.formComponent.getElement()[e]).filter(e=>"object"==typeof e&&".wForm"in e).map(e=>e[".wForm"]).reduce(e=>e);e&&e.handler?e.handler(e):e&&e.action&&this.formComponent.getElement().submit()}getFormComponent(){return this.formComponent}getSuccessComponent(){return this.getChildAsComponents(".w-form-done")[0]}getErrorComponent(){return this.getChildAsComponents(".w-form-fail")[0]}showSuccessState(){this.formComponent.getElement().style.display="none",this.getErrorComponent().getElement().style.display="none",this.getSuccessComponent().getElement().style.display="block"}showErrorState(){this.getSuccessComponent().getElement().style.display="none",this.getErrorComponent().getElement().style.display="block",this.formComponent.getElement().style.display=this.defaultFormDisplayStyle}showForm(){this.getErrorComponent().getElement().style.display="none",this.getSuccessComponent().getElement().style.display="none",this.formComponent.getElement().style.display=this.defaultFormDisplayStyle}disableForm(){Array.from(this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button")).forEach(e=>{e.setAttribute("disabled","disabled")})}enableForm(){Array.from(this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button")).forEach(e=>{e.removeAttribute("disabled")})}getSubmitButton(){return this.formComponent.getChildAsComponents('[type="submit"]')[0]}resetForm(){this.formComponent.getElement().reset()}updateSubmitButtonText(e){this.getSubmitButton().setAttribute("value",e)}}var M={};i(M,"WFRoute",()=>$);class ${middlewareAllowExecutionOnFail=!1;constructor(e){this.route=e}withMiddleware(e,t,r="allow",n={}){return this.middleware=e,this.middlewareRole=t,this.middlewareType=r,"allowExecutionOnFail"in n&&(this.middlewareAllowExecutionOnFail=!0===n.allowExecutionOnFail),"onError"in n&&(this.middlewareErrorFn=n.onError),this}validateRole(){return"allow"===this.middlewareType?this.middleware.allowTo(this.middlewareRole):this.middleware.disallowedTo(this.middlewareRole)}execute(e){let t=B(this.route,location.pathname);if(t){if(h("matched fn start",this.route,location.pathname),this.middleware){let r=this.validateRole();h("checking access role",this.route,this.middlewareRole,this.middlewareType,"canAccess",r,this.middlewareAllowExecutionOnFail),r||this.middlewareAllowExecutionOnFail?e({...t,...j()},r,this.middleware.getAuth()):this.middlewareErrorFn&&this.middlewareErrorFn()}else e({...t,...j()},!0);h("matched fn end",this.route,location.pathname)}else h("did not match",this.route,location.pathname);return this}}var W={};i(W,"onReady",()=>H);let H=e=>{window.Webflow||=[],window.Webflow.push(()=>{e()})};var V={};i(V,"WFInvisibleForm",()=>J);class J{loading=!1;loadingListener=new Map;successListener=new Map;errorListener=new Map;constructor(e=""){this.fromName=e,this.siteId=document.querySelector("html").getAttribute("data-wf-site")||""}setFormName(e){this.fromName=e}getFormName(){return this.fromName}setFormData(e){this.data=e}getFormData(){return this.data}isLoading(){return this.loading}onLoadingChange(e){let t=(0,o.v4)();return this.loadingListener.set(t,e),()=>{this.loadingListener.delete(t)}}onSuccess(e){let t=(0,o.v4)();return this.successListener.set(t,e),()=>{this.successListener.delete(t)}}onError(e){let t=(0,o.v4)();return this.errorListener.set(t,e),()=>{this.errorListener.delete(t)}}updateLoadingState(e){this.loading=e,this.loadingListener.forEach(e=>{e(this.loading)})}formSubmitted(){this.successListener.forEach(e=>{e()})}formFailed(){this.errorListener.forEach(e=>{e()})}submitForm(){let e=e=>{this.updateLoadingState(e)},t=()=>{this.formFailed()},r=()=>{this.formSubmitted()};e(!0),window.jQuery.ajax({url:`https://webflow.com/api/v1/form/${this.siteId}`,type:"POST",data:{name:this.fromName||"Untitled Form",source:location.href,test:!1,fields:this.data,dolphin:!1},dataType:"json",crossDomain:!0}).done(function(n){e(!1),n&&200===n.code?r():t()}).fail(function(){e(!1),t()})}}s(t.exports,a),s(t.exports,u),s(t.exports,c),s(t.exports,N),s(t.exports,_),s(t.exports,M),s(t.exports,d),s(t.exports,W),s(t.exports,V)},{"116fc168c31b637d":"hIyym"}],hIyym:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"v1",()=>i.default),o.export(r,"v3",()=>l.default),o.export(r,"v4",()=>f.default),o.export(r,"v5",()=>d.default),o.export(r,"NIL",()=>h.default),o.export(r,"version",()=>g.default),o.export(r,"validate",()=>j.default),o.export(r,"stringify",()=>w.default),o.export(r,"parse",()=>x.default);var s=e("./v1.js"),i=o.interopDefault(s),a=e("./v3.js"),l=o.interopDefault(a),u=e("./v4.js"),f=o.interopDefault(u),c=e("./v5.js"),d=o.interopDefault(c),p=e("./nil.js"),h=o.interopDefault(p),m=e("./version.js"),g=o.interopDefault(m),y=e("./validate.js"),j=o.interopDefault(y),b=e("./stringify.js"),w=o.interopDefault(b),E=e("./parse.js"),x=o.interopDefault(E)},{"./v1.js":"iQ6UN","./v3.js":"fW2F8","./v4.js":"h4z53","./v5.js":"jMNKD","./nil.js":"5Bod7","./version.js":"dnsqZ","./validate.js":"eG5s0","./stringify.js":"doA1n","./parse.js":"j2gue","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],iQ6UN:[function(e,t,r,n){let o,s;var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var a=e("./rng.js"),l=i.interopDefault(a),u=e("./stringify.js");let f=0,c=0;r.default=function(e,t,r){let n=t&&r||0,i=t||Array(16),a=(e=e||{}).node||o,d=void 0!==e.clockseq?e.clockseq:s;if(null==a||null==d){let t=e.random||(e.rng||(0,l.default))();null==a&&(a=o=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==d&&(d=s=(t[6]<<8|t[7])&16383)}let p=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.nsecs?e.nsecs:c+1,m=p-f+(h-c)/1e4;if(m<0&&void 0===e.clockseq&&(d=d+1&16383),(m<0||p>f)&&void 0===e.nsecs&&(h=0),h>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");f=p,c=h,s=d;let g=((0xfffffff&(p+=122192928e5))*1e4+h)%0x100000000;i[n++]=g>>>24&255,i[n++]=g>>>16&255,i[n++]=g>>>8&255,i[n++]=255&g;let y=p/0x100000000*1e4&0xfffffff;i[n++]=y>>>8&255,i[n++]=255&y,i[n++]=y>>>24&15|16,i[n++]=y>>>16&255,i[n++]=d>>>8|128,i[n++]=255&d;for(let e=0;e<6;++e)i[n+e]=a[e];return t||(0,u.unsafeStringify)(i)}},{"./rng.js":"fo5Bv","./stringify.js":"doA1n","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],fo5Bv:[function(e,t,r,n){let o;var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"default",()=>a);let i=new Uint8Array(16);function a(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jiucr:[function(e,t,r,n){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],doA1n:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"unsafeStringify",()=>l);var s=e("./validate.js"),i=o.interopDefault(s);let a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function l(e,t=0){return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}r.default=function(e,t=0){let r=l(e,t);if(!(0,i.default)(r))throw TypeError("Stringified UUID is invalid");return r}},{"./validate.js":"eG5s0","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],eG5s0:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./regex.js"),i=o.interopDefault(s);r.default=function(e){return"string"==typeof e&&(0,i.default).test(e)}},{"./regex.js":"2jBiL","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2jBiL":[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],fW2F8:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./v35.js"),i=o.interopDefault(s),a=e("./md5.js"),l=o.interopDefault(a);let u=(0,i.default)("v3",48,l.default);r.default=u},{"./v35.js":"6feLd","./md5.js":"gsSTl","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"6feLd":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"DNS",()=>l),o.export(r,"URL",()=>u),o.export(r,"default",()=>f);var s=e("./stringify.js"),i=e("./parse.js"),a=o.interopDefault(i);let l="6ba7b810-9dad-11d1-80b4-00c04fd430c8",u="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function f(e,t,r){function n(e,n,o,i){var l;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=(0,a.default)(n)),(null===(l=n)||void 0===l?void 0:l.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let u=new Uint8Array(16+e.length);if(u.set(n),u.set(e,n.length),(u=r(u))[6]=15&u[6]|t,u[8]=63&u[8]|128,o){i=i||0;for(let e=0;e<16;++e)o[i+e]=u[e];return o}return(0,s.unsafeStringify)(u)}try{n.name=e}catch(e){}return n.DNS=l,n.URL=u,n}},{"./stringify.js":"doA1n","./parse.js":"j2gue","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],j2gue:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./validate.js"),i=o.interopDefault(s);r.default=function(e){let t;if(!(0,i.default)(e))throw TypeError("Invalid UUID");let r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/0x10000000000&255,r[11]=t/0x100000000&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r}},{"./validate.js":"eG5s0","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],gsSTl:[function(e,t,r,n){function o(e){return(e+64>>>9<<4)+14+1}function s(e,t){let r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function i(e,t,r,n,o,i){var a;return s((a=s(s(t,e),s(n,i)))<<o|a>>>32-o,r)}function a(e,t,r,n,o,s,a){return i(t&r|~t&n,e,t,o,s,a)}function l(e,t,r,n,o,s,a){return i(t&n|r&~n,e,t,o,s,a)}function u(e,t,r,n,o,s,a){return i(t^r^n,e,t,o,s,a)}function f(e,t,r,n,o,s,a){return i(r^(t|~n),e,t,o,s,a)}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){if("string"==typeof e){let t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){let t=[],r=32*e.length,n="0123456789abcdef";for(let o=0;o<r;o+=8){let r=e[o>>5]>>>o%32&255,s=parseInt(n.charAt(r>>>4&15)+n.charAt(15&r),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[o(t)-1]=t;let r=0x67452301,n=-0x10325477,i=-0x67452302,c=0x10325476;for(let t=0;t<e.length;t+=16){let o=r,d=n,p=i,h=c;r=a(r,n,i,c,e[t],7,-0x28955b88),c=a(c,r,n,i,e[t+1],12,-0x173848aa),i=a(i,c,r,n,e[t+2],17,0x242070db),n=a(n,i,c,r,e[t+3],22,-0x3e423112),r=a(r,n,i,c,e[t+4],7,-0xa83f051),c=a(c,r,n,i,e[t+5],12,0x4787c62a),i=a(i,c,r,n,e[t+6],17,-0x57cfb9ed),n=a(n,i,c,r,e[t+7],22,-0x2b96aff),r=a(r,n,i,c,e[t+8],7,0x698098d8),c=a(c,r,n,i,e[t+9],12,-0x74bb0851),i=a(i,c,r,n,e[t+10],17,-42063),n=a(n,i,c,r,e[t+11],22,-0x76a32842),r=a(r,n,i,c,e[t+12],7,0x6b901122),c=a(c,r,n,i,e[t+13],12,-0x2678e6d),i=a(i,c,r,n,e[t+14],17,-0x5986bc72),n=a(n,i,c,r,e[t+15],22,0x49b40821),r=l(r,n,i,c,e[t+1],5,-0x9e1da9e),c=l(c,r,n,i,e[t+6],9,-0x3fbf4cc0),i=l(i,c,r,n,e[t+11],14,0x265e5a51),n=l(n,i,c,r,e[t],20,-0x16493856),r=l(r,n,i,c,e[t+5],5,-0x29d0efa3),c=l(c,r,n,i,e[t+10],9,0x2441453),i=l(i,c,r,n,e[t+15],14,-0x275e197f),n=l(n,i,c,r,e[t+4],20,-0x182c0438),r=l(r,n,i,c,e[t+9],5,0x21e1cde6),c=l(c,r,n,i,e[t+14],9,-0x3cc8f82a),i=l(i,c,r,n,e[t+3],14,-0xb2af279),n=l(n,i,c,r,e[t+8],20,0x455a14ed),r=l(r,n,i,c,e[t+13],5,-0x561c16fb),c=l(c,r,n,i,e[t+2],9,-0x3105c08),i=l(i,c,r,n,e[t+7],14,0x676f02d9),n=l(n,i,c,r,e[t+12],20,-0x72d5b376),r=u(r,n,i,c,e[t+5],4,-378558),c=u(c,r,n,i,e[t+8],11,-0x788e097f),i=u(i,c,r,n,e[t+11],16,0x6d9d6122),n=u(n,i,c,r,e[t+14],23,-0x21ac7f4),r=u(r,n,i,c,e[t+1],4,-0x5b4115bc),c=u(c,r,n,i,e[t+4],11,0x4bdecfa9),i=u(i,c,r,n,e[t+7],16,-0x944b4a0),n=u(n,i,c,r,e[t+10],23,-0x41404390),r=u(r,n,i,c,e[t+13],4,0x289b7ec6),c=u(c,r,n,i,e[t],11,-0x155ed806),i=u(i,c,r,n,e[t+3],16,-0x2b10cf7b),n=u(n,i,c,r,e[t+6],23,0x4881d05),r=u(r,n,i,c,e[t+9],4,-0x262b2fc7),c=u(c,r,n,i,e[t+12],11,-0x1924661b),i=u(i,c,r,n,e[t+15],16,0x1fa27cf8),n=u(n,i,c,r,e[t+2],23,-0x3b53a99b),r=f(r,n,i,c,e[t],6,-0xbd6ddbc),c=f(c,r,n,i,e[t+7],10,0x432aff97),i=f(i,c,r,n,e[t+14],15,-0x546bdc59),n=f(n,i,c,r,e[t+5],21,-0x36c5fc7),r=f(r,n,i,c,e[t+12],6,0x655b59c3),c=f(c,r,n,i,e[t+3],10,-0x70f3336e),i=f(i,c,r,n,e[t+10],15,-1051523),n=f(n,i,c,r,e[t+1],21,-0x7a7ba22f),r=f(r,n,i,c,e[t+8],6,0x6fa87e4f),c=f(c,r,n,i,e[t+15],10,-0x1d31920),i=f(i,c,r,n,e[t+6],15,-0x5cfebcec),n=f(n,i,c,r,e[t+13],21,0x4e0811a1),r=f(r,n,i,c,e[t+4],6,-0x8ac817e),c=f(c,r,n,i,e[t+11],10,-0x42c50dcb),i=f(i,c,r,n,e[t+2],15,0x2ad7d2bb),n=f(n,i,c,r,e[t+9],21,-0x14792c6f),r=s(r,o),n=s(n,d),i=s(i,p),c=s(c,h)}return[r,n,i,c]}(function(e){if(0===e.length)return[];let t=8*e.length,r=new Uint32Array(o(t));for(let n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],h4z53:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./native.js"),i=o.interopDefault(s),a=e("./rng.js"),l=o.interopDefault(a),u=e("./stringify.js");r.default=function(e,t,r){if(i.default.randomUUID&&!t&&!e)return(0,i.default).randomUUID();let n=(e=e||{}).random||(e.rng||(0,l.default))();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return(0,u.unsafeStringify)(n)}},{"./native.js":"agPy7","./rng.js":"fo5Bv","./stringify.js":"doA1n","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],agPy7:[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);let o="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);r.default={randomUUID:o}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jMNKD:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./v35.js"),i=o.interopDefault(s),a=e("./sha1.js"),l=o.interopDefault(a);let u=(0,i.default)("v5",80,l.default);r.default=u},{"./v35.js":"6feLd","./sha1.js":"bDFTF","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],bDFTF:[function(e,t,r,n){function o(e,t){return e<<t|e>>>32-t}e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e){let t=[0x5a827999,0x6ed9eba1,0x8f1bbcdc,0xca62c1d6],r=[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];if("string"==typeof e){let t=unescape(encodeURIComponent(e));e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);let n=Math.ceil((e.length/4+2)/16),s=Array(n);for(let t=0;t<n;++t){let r=new Uint32Array(16);for(let n=0;n<16;++n)r[n]=e[64*t+4*n]<<24|e[64*t+4*n+1]<<16|e[64*t+4*n+2]<<8|e[64*t+4*n+3];s[t]=r}s[n-1][14]=(e.length-1)*8/0x100000000,s[n-1][14]=Math.floor(s[n-1][14]),s[n-1][15]=(e.length-1)*8&0xffffffff;for(let e=0;e<n;++e){let n=new Uint32Array(80);for(let t=0;t<16;++t)n[t]=s[e][t];for(let e=16;e<80;++e)n[e]=o(n[e-3]^n[e-8]^n[e-14]^n[e-16],1);let i=r[0],a=r[1],l=r[2],u=r[3],f=r[4];for(let e=0;e<80;++e){let r=Math.floor(e/20),s=o(i,5)+function(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}(r,a,l,u)+f+t[r]+n[e]>>>0;f=u,u=l,l=o(a,30)>>>0,a=i,i=s}r[0]=r[0]+i>>>0,r[1]=r[1]+a>>>0,r[2]=r[2]+l>>>0,r[3]=r[3]+u>>>0,r[4]=r[4]+f>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"5Bod7":[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default="00000000-0000-0000-0000-000000000000"},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],dnsqZ:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./validate.js"),i=o.interopDefault(s);r.default=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}},{"./validate.js":"eG5s0","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2uPfR":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"setCookie",()=>l),o.export(r,"getCookie",()=>u),o.export(r,"fetchWithTimeout",()=>f),o.export(r,"globalFnRoutes",()=>c),o.export(r,"loginRoutes",()=>d),o.export(r,"discountListRoutes",()=>p),o.export(r,"discountPageRoutes",()=>h);var s=e("@xatom/core"),i=e("../modules/checkMembership"),a=e("../modules/fetchSingleUseCode");let l=(e,t,r)=>{let n=new Date;n.setTime(n.getTime()+864e5*r);let o="expires="+n.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"},u=e=>{let t=`${e}=`;for(let e of document.cookie.split(";"))if((e=e.trim()).startsWith(t))return e.substring(t.length);return null},f=(e,t,r=5e3)=>Promise.race([fetch(e,t),new Promise((e,t)=>setTimeout(()=>t(Error("Timeout")),r))]),c=()=>{new(0,s.WFRoute)("/(.*)").execute(()=>{let e=document.querySelector(".dropdown-link.is-logout");e&&e.addEventListener("click",()=>{l("membershipValid","false",1/24),document.cookie="ucn=; path=/",document.cookie="authUrl=; path=/",location.reload()})})},d=()=>{new(0,s.WFRoute)("/login").execute(()=>{if((0,i.membershipCheck)(window.location.href),"true"===u("membershipValid")){let e=new s.WFComponent(".login-form-hook");e&&(e.setStyle({display:"none"}),e.getElement().offsetHeight);let t=new s.WFComponent(".login-text");t&&t.setText("You are logged in");let r=new s.WFComponent(".logged-in-link");r&&r.removeCssClass("hide")}});let e=document.querySelector(".dropdown-link.is-logout");e&&e.addEventListener("click",()=>{location.reload()})},p=()=>{new(0,s.WFRoute)("/discounts-and-benefits").execute(()=>{(0,i.membershipCheck)(window.location.href),new s.WFComponent("select").getChildAsComponents("option")[0].setAttribute("disabled","disabled"),(0,s.onReady)(()=>{let e=new Date;document.querySelectorAll(".expiry").forEach(function(t){let r=t.getAttribute("data-expiry");if(r&&new Date(r)<e){let e=t.closest(".discount_item");e&&e.remove()}})})})},h=()=>{new(0,s.WFRoute)("/discount/(.*)").execute(()=>{if((0,i.membershipCheck)(window.location.href),(0,a.fetchSingleUseCode)(),"true"!==u("membershipValid")){let e=new s.WFComponent(".membership-modal");e&&(e.setStyle({display:"block"}),e.getElement().offsetHeight,e.addCssClass("show-modal"))}let e=document.querySelector(".dropdown-link.is-logout");e&&e.addEventListener("click",()=>{document.cookie="membershipValid=false; path=/",location.reload()}),(0,a.fetchSingleUseCode)()})}},{"@xatom/core":"5eqAK","../modules/checkMembership":"lP10s","../modules/fetchSingleUseCode":"6JKKg","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],lP10s:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"membershipCheck",()=>l);var s=e("@xatom/axios"),i=e("@xatom/core"),a=e("../routes");let l=e=>{let t=window.location.href.startsWith("http://localhost:3020")?"http://localhost:3000":"https://membership-check-main.vercel.app/",r=new s.AxiosClientConfigurator(t),n=new s.AxiosClient(r),o=e=>{let t=new i.WFComponent(".form_error-wrapper"),r=new i.WFComponent(".form_error-message");t.setStyle({display:"inline-flex"}),r.setText(e)};(0,i.onReady)(()=>{try{let t=new i.WFComponent(".membership-check-button"),r=document.querySelector(".modal1_close-button"),s=document.querySelector(".modal1_background-overlay"),l=new i.WFComponent(".form_error-wrapper"),u=new i.WFComponent(".form_error-message"),f=null;try{f=new i.WFComponent(".membership-modal")}catch(e){console.log("Membership modal not found, continuing without it")}let c=null;try{c=new i.WFComponent('[xa-elem="storefront"]')}catch(e){console.log("Storefront element not found, continuing without it")}let d=new i.WFFormComponent(".cardnumberform"),p=()=>{l.setStyle({display:"none"}),u.setText("")},h=t=>t?.target&&t.target.closest('[xa-elem="storefront"]')?"https://rewards.disabilityid.co.uk":y||e,m=async e=>{let t="true"===(0,a.getCookie)("membershipValid");t&&t?window.location.href=y:f&&(f.setStyle({display:"block"}),f.addCssClass("show-modal"))},g=e=>{e.preventDefault(),"/discounts-and-benefits"===window.location.pathname&&(f.setStyle({display:"none"}),f.removeCssClass("show-modal"),p())};r&&new i.WFComponent(".modal1_close-button").on("click",g),s&&new i.WFComponent(".modal1_background-overlay").on("click",g);let y="",j=!1,b=null;try{b=new i.WFComponent(".discount_list")}catch(e){console.log("Discount list not found, continuing without it")}b&&b.on("click",async e=>{let t=e.target.closest(".card");if(!t)return;e.preventDefault(),j=!1,console.log("isBannerClick:",j),y=t.href,console.log("Card URL:",y);let r=document.querySelector(".hiddenUrlField");r&&r.setAttribute("value",y),await m(e)}),c&&c.on("click",async e=>{e.preventDefault(),j=!0,console.log("isBannerClick:",j),y="https://rewards.disabilityid.co.uk",console.log("Storefront URL:",y),await m(e)}),d.onFormSubmit(r=>{let s={ucn:(0,a.getCookie)("ucn")||r.ucn,url:h(),redirectUrl:"",membershipValid:!1,isBannerClick:j},i=n.post("/api/membershipCheck?mode=json&url="+e,{data:s});i.onLoadingChange(e=>{!0===e?t.setAttribute("value","Checking card number..."):t.setAttribute("value","Submit")}),i.onData(e=>{!0===e.membershipValid?((0,a.setCookie)("membershipValid","true",1/24),(0,a.setCookie)("ucn",e.ucn,1/24),window.location.reload(),e.redirectUrl?(console.log("Redirecting to URL:",e.redirectUrl),e.redirectUrl===window.location.href?window.location.reload():window.location.href=e.redirectUrl):window.location.href=y,f&&(f.setStyle({display:"none"}),f.removeCssClass("show-modal"))):((0,a.setCookie)("membershipValid","false",1/24),o("Something went wrong, please check your card number and try again."))}),i.onError(e=>{(0,a.setCookie)("membershipValid","false",1/24),404===e.status?o("Card number not found."):400===e.status?o("Your unique card number is required"):"Timeout"===e.message?o("Request timed out. Please try again."):o("Something went wrong, please try again.")}),i.fetch(s)})}catch(e){console.error("Error initializing membership check:",e),o("Something went wrong, please try again.")}})}},{"@xatom/axios":"gafWx","@xatom/core":"5eqAK","../routes":"2uPfR","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],gafWx:[function(e,t,r,n){var o=e("f938a1217c244582"),s=e("95a23a66e34dadcf");function i(e,t){return Object.keys(t).forEach(function(r){"default"===r||"__esModule"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})}),e}function a(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var l={};a(l,"AxiosClientConfigurator",()=>u),a(l,"AxiosClient",()=>d);class u{constructor(e,t={},r){this._beforeRequestOps=new Map([]),this._retryRequestOnFailedOps=new Map([]),this._config={},this._baseUrl=e,this._config=t,this._axios=r||(o&&o.__esModule?o.default:o)}beforeRequest(e){let t=(0,s.v4)();return this._beforeRequestOps.set(t,e),this}retryRequestOnFailed(e){let t=(0,s.v4)();return this._retryRequestOnFailedOps.set(t,e),this}getConfig(){return{baseAxios:this._axios,config:this._config||{},baseUrl:this._baseUrl,beforeRequestOps:Array.from(this._beforeRequestOps.values()),retryRequestOps:Array.from(this._retryRequestOnFailedOps.values())}}}let f=e=>{let t=e.getConfig(),r=t.baseAxios.create({...t.config,baseURL:t.baseUrl});return t.beforeRequestOps.forEach(e=>{r.interceptors.request.use(t=>new Promise((r,n)=>{try{e(t,e=>{r(e)})}catch(e){n(e)}}))}),r.interceptors.response.use(void 0,e=>{let n=null;return new Promise((o,s)=>{let{config:i}=e;if(1===(n=i||{}).retry)s(e);else{let i=!1,a=()=>{i?(n.retry=1,setTimeout(()=>{r(n).then(o).catch(s)},1e3)):s(e)},l=r=>{if(r>=t.retryRequestOps.length){a();return}t.retryRequestOps[r](e,n,e=>{n=e,i=!0,l(r+1)},()=>{l(r+1)})};l(0)}})}),r},c=(e,t,r,n)=>{let o;let i=!1,a=new Map([]),l=new Map([]),u=new Map([]),c=e=>{o=e,Array.from(a.values()).forEach(t=>{t(e)})},d=e=>{Array.from(l.values()).forEach(t=>{t(e)})},p=e=>{i=e,Array.from(u.values()).forEach(t=>{t(e)})},h=(e,t)=>`${e}?${new URLSearchParams(t).toString()}`,m=e=>{let t=(0,s.v4)();return u.set(t,e),()=>{u.delete(t)}},g=e=>{let t=(0,s.v4)();return a.set(t,e),()=>{a.delete(t)}},y=e=>{let t=(0,s.v4)();return l.set(t,e),()=>{l.delete(t)}};return{data:()=>o,fetch:(o,s)=>new Promise((i,a)=>{p(!0);let l=o||n||{},u="GET"===r||"DELETE"===r?h(t,l):t,m="GET"===r||"DELETE"===r?{}:l;f(e).request({method:r,url:u,data:m,headers:{...s}}).then(e=>{c(e.data),i(e.data)}).catch(e=>{d(e),a(e)}).finally(()=>{p(!1)})}),isLoading:()=>i,onLoadingChange:m,onLoadingChangeOnce:e=>{let t=m(r=>{e(r),t()})},onData:g,onDataOnce:e=>{let t=g(r=>{e(r),t()})},onError:y,onErrorOnce:e=>{let t=y(r=>{e(r),t()})}}};class d{constructor(e){this._config=e}get(e,t={}){return c(this._config,e,"GET",t.data)}post(e,t={}){return c(this._config,e,"POST",t.data)}patch(e,t={}){return c(this._config,e,"PATCH",t.data)}put(e,t={}){return c(this._config,e,"PUT",t.data)}delete(e,t={}){return c(this._config,e,"DELETE",t.data)}}i(t.exports,o),i(t.exports,l)},{f938a1217c244582:"ffpgq","95a23a66e34dadcf":"hIyym"}],ffpgq:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>i.default),o.export(r,"Axios",()=>a),o.export(r,"AxiosError",()=>l),o.export(r,"CanceledError",()=>u),o.export(r,"isCancel",()=>f),o.export(r,"CancelToken",()=>c),o.export(r,"VERSION",()=>d),o.export(r,"all",()=>p),o.export(r,"Cancel",()=>h),o.export(r,"isAxiosError",()=>m),o.export(r,"spread",()=>g),o.export(r,"toFormData",()=>y),o.export(r,"AxiosHeaders",()=>j),o.export(r,"HttpStatusCode",()=>b),o.export(r,"formToJSON",()=>w),o.export(r,"getAdapter",()=>E),o.export(r,"mergeConfig",()=>x);var s=e("./lib/axios.js"),i=o.interopDefault(s);let{Axios:a,AxiosError:l,CanceledError:u,isCancel:f,CancelToken:c,VERSION:d,all:p,Cancel:h,isAxiosError:m,spread:g,toFormData:y,AxiosHeaders:j,HttpStatusCode:b,formToJSON:w,getAdapter:E,mergeConfig:x}=i.default},{"./lib/axios.js":"lHA81","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],lHA81:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./utils.js"),i=o.interopDefault(s),a=e("./helpers/bind.js"),l=o.interopDefault(a),u=e("./core/Axios.js"),f=o.interopDefault(u),c=e("./core/mergeConfig.js"),d=o.interopDefault(c),p=e("./defaults/index.js"),h=o.interopDefault(p),m=e("./helpers/formDataToJSON.js"),g=o.interopDefault(m),y=e("./cancel/CanceledError.js"),j=o.interopDefault(y),b=e("./cancel/CancelToken.js"),w=o.interopDefault(b),E=e("./cancel/isCancel.js"),x=o.interopDefault(E),v=e("./env/data.js"),C=e("./helpers/toFormData.js"),A=o.interopDefault(C),R=e("./core/AxiosError.js"),S=o.interopDefault(R),D=e("./helpers/spread.js"),T=o.interopDefault(D),F=e("./helpers/isAxiosError.js"),O=o.interopDefault(F),I=e("./core/AxiosHeaders.js"),B=o.interopDefault(I),L=e("./adapters/adapters.js"),U=o.interopDefault(L),k=e("./helpers/HttpStatusCode.js"),N=o.interopDefault(k);let P=function e(t){let r=new f.default(t),n=(0,l.default)(f.default.prototype.request,r);return(0,i.default).extend(n,f.default.prototype,r,{allOwnKeys:!0}),(0,i.default).extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e((0,d.default)(t,r))},n}(h.default);P.Axios=f.default,P.CanceledError=j.default,P.CancelToken=w.default,P.isCancel=x.default,P.VERSION=v.VERSION,P.toFormData=A.default,P.AxiosError=S.default,P.Cancel=P.CanceledError,P.all=function(e){return Promise.all(e)},P.spread=T.default,P.isAxiosError=O.default,P.mergeConfig=d.default,P.AxiosHeaders=B.default,P.formToJSON=e=>(0,g.default)((0,i.default).isHTMLForm(e)?new FormData(e):e),P.getAdapter=U.default.getAdapter,P.HttpStatusCode=N.default,P.default=P,r.default=P},{"./utils.js":"4uo9i","./helpers/bind.js":"gKyRf","./core/Axios.js":"dXDNP","./core/mergeConfig.js":"1xY8J","./defaults/index.js":"gguXD","./helpers/formDataToJSON.js":"jNEsW","./cancel/CanceledError.js":"lfAwZ","./cancel/CancelToken.js":"fa4h3","./cancel/isCancel.js":"5w9uS","./env/data.js":"hl0B4","./helpers/toFormData.js":"kISIL","./core/AxiosError.js":"kinyp","./helpers/spread.js":"kQZVl","./helpers/isAxiosError.js":"98mQL","./core/AxiosHeaders.js":"2Z6Oi","./adapters/adapters.js":"atJSg","./helpers/HttpStatusCode.js":"g7MYJ","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"4uo9i":[function(e,t,r,n){let o,s;var i,a,l,u,f=e("@parcel/transformer-js/src/esmodule-helpers.js");f.defineInteropFlag(r);var c=e("./helpers/bind.js"),d=f.interopDefault(c),p=arguments[3],h=e("a8d2c3349c87a903");let{toString:m}=Object.prototype,{getPrototypeOf:g}=Object,y=(o=Object.create(null),e=>{let t=m.call(e);return o[t]||(o[t]=t.slice(8,-1).toLowerCase())}),j=e=>(e=e.toLowerCase(),t=>y(t)===e),b=e=>t=>typeof t===e,{isArray:w}=Array,E=b("undefined"),x=j("ArrayBuffer"),v=b("string"),C=b("function"),A=b("number"),R=e=>null!==e&&"object"==typeof e,S=e=>{if("object"!==y(e))return!1;let t=g(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},D=j("Date"),T=j("File"),F=j("Blob"),O=j("FileList"),I=j("URLSearchParams"),[B,L,U,k]=["ReadableStream","Request","Response","Headers"].map(j);function N(e,t,{allOwnKeys:r=!1}={}){let n,o;if(null!=e){if("object"!=typeof e&&(e=[e]),w(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let o;let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;for(n=0;n<i;n++)o=s[n],t.call(null,e[o],o,e)}}}function P(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),o=n.length;for(;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}let _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:p,q=e=>!E(e)&&e!==_,M=(s="undefined"!=typeof Uint8Array&&g(Uint8Array),e=>s&&e instanceof s),$=j("HTMLFormElement"),W=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),H=j("RegExp"),V=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};N(r,(r,o)=>{let s;!1!==(s=t(r,o,e))&&(n[o]=s||r)}),Object.defineProperties(e,n)},J="abcdefghijklmnopqrstuvwxyz",z="0123456789",K={DIGIT:z,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+z},G=j("AsyncFunction"),Y=(i="function"==typeof setImmediate,a=C(_.postMessage),i?setImmediate:a?(l=`axios@${Math.random()}`,u=[],_.addEventListener("message",({source:e,data:t})=>{e===_&&t===l&&u.length&&u.shift()()},!1),e=>{u.push(e),_.postMessage(l,"*")}):e=>setTimeout(e)),Z="undefined"!=typeof queueMicrotask?queueMicrotask.bind(_):void 0!==h&&h.nextTick||Y;r.default={isArray:w,isArrayBuffer:x,isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||C(e.append)&&("formdata"===(t=y(e))||"object"===t&&C(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&x(e.buffer)},isString:v,isNumber:A,isBoolean:e=>!0===e||!1===e,isObject:R,isPlainObject:S,isReadableStream:B,isRequest:L,isResponse:U,isHeaders:k,isUndefined:E,isDate:D,isFile:T,isBlob:F,isRegExp:H,isFunction:C,isStream:e=>R(e)&&C(e.pipe),isURLSearchParams:I,isTypedArray:M,isFileList:O,forEach:N,merge:function e(){let{caseless:t}=q(this)&&this||{},r={},n=(n,o)=>{let s=t&&P(r,o)||o;S(r[s])&&S(n)?r[s]=e(r[s],n):S(n)?r[s]=e({},n):w(n)?r[s]=n.slice():r[s]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&N(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(N(t,(t,n)=>{r&&C(t)?e[n]=(0,d.default)(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,s,i;let a={};if(t=t||{},null==e)return t;do{for(s=(o=Object.getOwnPropertyNames(e)).length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=!1!==r&&g(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:y,kindOfTest:j,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(w(e))return e;let t=e.length;if(!A(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=(e&&e[Symbol.iterator]).call(e);for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:$,hasOwnProperty:W,hasOwnProp:W,reduceDescriptors:V,freezeMethods:e=>{V(e,(t,r)=>{if(C(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(C(e[r])){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(w(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e*=1)?e:t,findKey:P,global:_,isContextDefined:q,ALPHABET:K,generateString:(e=16,t=K.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&C(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(R(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let o=w(e)?[]:{};return N(e,(e,t)=>{let s=r(e,n+1);E(s)||(o[t]=s)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:G,isThenable:e=>e&&(R(e)||C(e))&&C(e.then)&&C(e.catch),setImmediate:Y,asap:Z}},{a8d2c3349c87a903:"5jT8D","./helpers/bind.js":"gKyRf","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"5jT8D":[function(e,t,r,n){var o,s,i,a=t.exports={};function l(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function f(e){if(o===setTimeout)return setTimeout(e,0);if((o===l||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:l}catch(e){o=l}try{s="function"==typeof clearTimeout?clearTimeout:u}catch(e){s=u}}();var c=[],d=!1,p=-1;function h(){d&&i&&(d=!1,i.length?c=i.concat(c):p=-1,c.length&&m())}function m(){if(!d){var e=f(h);d=!0;for(var t=c.length;t;){for(i=c,c=[];++p<t;)i&&i[p].run();p=-1,t=c.length}i=null,d=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===u||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function y(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new g(e,t)),1!==c.length||d||f(m)},g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}},{}],gKyRf:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e,t){return function(){return e.apply(t,arguments)}}o.defineInteropFlag(r),o.export(r,"default",()=>s)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],dXDNP:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./../utils.js"),i=o.interopDefault(s),a=e("../helpers/buildURL.js"),l=o.interopDefault(a),u=e("./InterceptorManager.js"),f=o.interopDefault(u),c=e("./dispatchRequest.js"),d=o.interopDefault(c),p=e("./mergeConfig.js"),h=o.interopDefault(p),m=e("./buildFullPath.js"),g=o.interopDefault(m),y=e("../helpers/validator.js"),j=o.interopDefault(y),b=e("./AxiosHeaders.js"),w=o.interopDefault(b);let E=j.default.validators;class x{constructor(e){this.defaults=e,this.interceptors={request:new f.default,response:new f.default}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let r=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?r&&!String(e.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+r):e.stack=r}catch(e){}}throw e}}_request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{};let{transitional:o,paramsSerializer:s,headers:a}=t=(0,h.default)(this.defaults,t);void 0!==o&&(0,j.default).assertOptions(o,{silentJSONParsing:E.transitional(E.boolean),forcedJSONParsing:E.transitional(E.boolean),clarifyTimeoutError:E.transitional(E.boolean)},!1),null!=s&&((0,i.default).isFunction(s)?t.paramsSerializer={serialize:s}:(0,j.default).assertOptions(s,{encode:E.function,serialize:E.function},!0)),(0,j.default).assertOptions(t,{baseUrl:E.spelling("baseURL"),withXsrfToken:E.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let l=a&&(0,i.default).merge(a.common,a[t.method]);a&&(0,i.default).forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=(0,w.default).concat(l,a);let u=[],f=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(f=f&&e.synchronous,u.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let p=0;if(!f){let e=[(0,d.default).bind(this),void 0];for(e.unshift.apply(e,u),e.push.apply(e,c),n=e.length,r=Promise.resolve(t);p<n;)r=r.then(e[p++],e[p++]);return r}n=u.length;let m=t;for(p=0;p<n;){let e=u[p++],t=u[p++];try{m=e(m)}catch(e){t.call(this,e);break}}try{r=(0,d.default).call(this,m)}catch(e){return Promise.reject(e)}for(p=0,n=c.length;p<n;)r=r.then(c[p++],c[p++]);return r}getUri(e){e=(0,h.default)(this.defaults,e);let t=(0,g.default)(e.baseURL,e.url);return(0,l.default)(t,e.params,e.paramsSerializer)}}(0,i.default).forEach(["delete","get","head","options"],function(e){x.prototype[e]=function(t,r){return this.request((0,h.default)(r||{},{method:e,url:t,data:(r||{}).data}))}}),(0,i.default).forEach(["post","put","patch"],function(e){function t(t){return function(r,n,o){return this.request((0,h.default)(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}x.prototype[e]=t(),x.prototype[e+"Form"]=t(!0)}),r.default=x},{"./../utils.js":"4uo9i","../helpers/buildURL.js":"2yc3i","./InterceptorManager.js":"gBR9v","./dispatchRequest.js":"9BYjJ","./mergeConfig.js":"1xY8J","./buildFullPath.js":"dqGPZ","../helpers/validator.js":"jxy99","./AxiosHeaders.js":"2Z6Oi","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2yc3i":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>f);var s=e("../utils.js"),i=o.interopDefault(s),a=e("../helpers/AxiosURLSearchParams.js"),l=o.interopDefault(a);function u(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function f(e,t,r){let n;if(!t)return e;let o=r&&r.encode||u;(0,i.default).isFunction(r)&&(r={serialize:r});let s=r&&r.serialize;if(n=s?s(t,r):(0,i.default).isURLSearchParams(t)?t.toString():new(0,l.default)(t,r).toString(o)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}},{"../utils.js":"4uo9i","../helpers/AxiosURLSearchParams.js":"cgFfA","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],cgFfA:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./toFormData.js"),i=o.interopDefault(s);function a(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function l(e,t){this._pairs=[],e&&(0,i.default)(e,this,t)}let u=l.prototype;u.append=function(e,t){this._pairs.push([e,t])},u.toString=function(e){let t=e?function(t){return e.call(this,t,a)}:a;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")},r.default=l},{"./toFormData.js":"kISIL","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],kISIL:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../utils.js"),i=o.interopDefault(s),a=e("../core/AxiosError.js"),l=o.interopDefault(a),u=e("../platform/node/classes/FormData.js"),f=o.interopDefault(u),c=e("adfd9b103875c2dd").Buffer;function d(e){return(0,i.default).isPlainObject(e)||(0,i.default).isArray(e)}function p(e){return(0,i.default).endsWith(e,"[]")?e.slice(0,-2):e}function h(e,t,r){return e?e.concat(t).map(function(e,t){return e=p(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}let m=(0,i.default).toFlatObject(i.default,{},null,function(e){return/^is[A-Z]/.test(e)});r.default=function(e,t,r){if(!(0,i.default).isObject(e))throw TypeError("target must be an object");t=t||new(f.default||FormData);let n=(r=(0,i.default).toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!(0,i.default).isUndefined(t[e])})).metaTokens,o=r.visitor||y,s=r.dots,a=r.indexes,u=(r.Blob||"undefined"!=typeof Blob&&Blob)&&(0,i.default).isSpecCompliantForm(t);if(!(0,i.default).isFunction(o))throw TypeError("visitor must be a function");function g(e){if(null===e)return"";if((0,i.default).isDate(e))return e.toISOString();if(!u&&(0,i.default).isBlob(e))throw new l.default("Blob is not supported. Use a Buffer instead.");return(0,i.default).isArrayBuffer(e)||(0,i.default).isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):c.from(e):e}function y(e,r,o){let l=e;if(e&&!o&&"object"==typeof e){if((0,i.default).endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else{var u;if((0,i.default).isArray(e)&&(u=e,(0,i.default).isArray(u)&&!u.some(d))||((0,i.default).isFileList(e)||(0,i.default).endsWith(r,"[]"))&&(l=(0,i.default).toArray(e)))return r=p(r),l.forEach(function(e,n){(0,i.default).isUndefined(e)||null===e||t.append(!0===a?h([r],n,s):null===a?r:r+"[]",g(e))}),!1}}return!!d(e)||(t.append(h(o,r,s),g(e)),!1)}let j=[],b=Object.assign(m,{defaultVisitor:y,convertValue:g,isVisitable:d});if(!(0,i.default).isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!(0,i.default).isUndefined(r)){if(-1!==j.indexOf(r))throw Error("Circular reference detected in "+n.join("."));j.push(r),(0,i.default).forEach(r,function(r,s){!0===(!((0,i.default).isUndefined(r)||null===r)&&o.call(t,r,(0,i.default).isString(s)?s.trim():s,n,b))&&e(r,n?n.concat(s):[s])}),j.pop()}}(e),t}},{adfd9b103875c2dd:"dB11O","../utils.js":"4uo9i","../core/AxiosError.js":"kinyp","../platform/node/classes/FormData.js":"3nCRV","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],dB11O:[function(e,t,r,n){let o=e("9c62938f1dccc73c"),s=e("aceacb6a4531a9d2"),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return c(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!l.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|m(e,t),n=a(r),o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(P(e,Uint8Array)){let t=new Uint8Array(e);return p(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(P(e,ArrayBuffer)||e&&P(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(P(e,SharedArrayBuffer)||e&&P(e.buffer,SharedArrayBuffer)))return p(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);let o=function(e){if(l.isBuffer(e)){let t=0|h(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?a(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return f(e),a(e<0?0:0|h(e))}function d(e){let t=e.length<0?0:0|h(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function p(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),n}function h(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function m(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||P(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return U(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return k(e).length;default:if(o)return n?-1:U(e).length;t=(""+t).toLowerCase(),o=!0}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=_[e[n]];return o}(this,t,r);case"utf8":case"utf-8":return w(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":var s,i,a;return s=this,i=t,a=r,0===i&&a===s.length?o.fromByteArray(s):o.fromByteArray(s.slice(i,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),o="";for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function y(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function j(e,t,r,n,o){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r*=1)!=s&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,o);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function b(e,t,r,n,o){let s,i=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;i=2,a/=2,l/=2,r/=2}function u(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(o){let n=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*i}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(u(e,s+n)!==u(t,n)){r=!1;break}if(r)return s}return -1}function w(e,t,r){r=Math.min(e.length,r);let n=[],o=t;for(;o<r;){let t=e[o],s=null,i=t>239?4:t>223?3:t>191?2:1;if(o+i<=r){let r,n,a,l;switch(i){case 1:t<128&&(s=t);break;case 2:(192&(r=e[o+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[o+1],n=e[o+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[o+1],n=e[o+2],a=e[o+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,i=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=i}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function E(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,n,o,s){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function v(e,t,r,n,o){O(t,n,o,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let i=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,r}function C(e,t,r,n,o){O(t,n,o,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let i=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=i,i>>=8,e[r+2]=i,i>>=8,e[r+1]=i,i>>=8,e[r]=i,r+8}function A(e,t,r,n,o,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function R(e,t,r,n,o){return t*=1,r>>>=0,o||A(e,t,r,4,34028234663852886e22,-34028234663852886e22),s.write(e,t,r,n,23,4),r+4}function S(e,t,r,n,o){return t*=1,r>>>=0,o||A(e,t,r,8,17976931348623157e292,-17976931348623157e292),s.write(e,t,r,n,52,8),r+8}r.Buffer=l,r.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},r.INSPECT_MAX_BYTES=50,r.kMaxLength=0x7fffffff,l.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(f(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},l.allocUnsafe=function(e){return c(e)},l.allocUnsafeSlow=function(e){return c(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(P(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),P(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,s=Math.min(r,n);o<s;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:+(n<r)},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=l.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){let t=e[r];if(P(t,Uint8Array))o+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else if(l.isBuffer(t))t.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=t.length}return n},l.byteLength=m,l.prototype._isBuffer=!0,l.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)y(this,t,t+1);return this},l.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},l.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},l.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?w(this,0,e):g.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="",t=r.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,o){if(P(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;let s=o-n,i=r-t,a=Math.min(s,i),u=this.slice(n,o),f=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==f[e]){s=u[e],i=f[e];break}return s<i?-1:+(i<s)},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return j(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return j(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){var o,s,i,a,l,u,f,c;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let o;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let i=t.length;for(n>i/2&&(n=i/2),o=0;o<n;++o){var a;let n=parseInt(t.substr(2*o,2),16);if((a=n)!=a)break;e[r+o]=n}return o}(this,e,t,r);case"utf8":case"utf-8":return o=t,s=r,N(U(e,this.length-o),this,o,s);case"ascii":case"latin1":case"binary":return i=t,a=r,N(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,i,a);case"base64":return l=t,u=r,N(k(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=t,c=r,N(function(e,t){let r,n;let o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,o.push(r%256),o.push(n);return o}(e,this.length-f),this,f,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||E(e,t,this.length);let n=this[e],o=1,s=0;for(;++s<t&&(o*=256);)n+=this[e+s]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||E(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||E(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||E(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||E(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||E(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||E(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=q(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&B(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],o=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),l.prototype.readBigUInt64BE=q(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&B(e,this.length-8);let n=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],o=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||E(e,t,this.length);let n=this[e],o=1,s=0;for(;++s<t&&(o*=256);)n+=this[e+s]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||E(e,t,this.length);let n=t,o=1,s=this[e+--n];for(;n>0&&(o*=256);)s+=this[e+--n]*o;return s>=(o*=128)&&(s-=Math.pow(2,8*t)),s},l.prototype.readInt8=function(e,t){return(e>>>=0,t||E(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||E(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||E(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||E(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||E(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=q(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&B(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),l.prototype.readBigInt64BE=q(function(e){I(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&B(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||E(e,4,this.length),s.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||E(e,4,this.length),s.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||E(e,8,this.length),s.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||E(e,8,this.length),s.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let o=1,s=0;for(this[t]=255&e;++s<r&&(o*=256);)this[t+s]=e/o&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let o=r-1,s=1;for(this[t+o]=255&e;--o>=0&&(s*=256);)this[t+o]=e/s&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=q(function(e,t=0){return v(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeBigUInt64BE=q(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let o=0,s=1,i=0;for(this[t]=255&e;++o<r&&(s*=256);)e<0&&0===i&&0!==this[t+o-1]&&(i=1),this[t+o]=(e/s>>0)-i&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let o=r-1,s=1,i=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===i&&0!==this[t+o+1]&&(i=1),this[t+o]=(e/s>>0)-i&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||x(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=q(function(e,t=0){return v(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeBigInt64BE=q(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeFloatLE=function(e,t,r){return R(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return R(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return S(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return S(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},l.prototype.fill=function(e,t,r,n){let o;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{let s=l.isBuffer(e)?e:l.from(e,n),i=s.length;if(0===i)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%i]}return this};let D={};function T(e,t,r){D[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function F(e){let t="",r=e.length,n=+("-"===e[0]);for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function O(e,t,r,n,o,s){if(e>r||e<t){let n;let o="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${o} and < 2${o} ** ${(s+1)*8}${o}`:`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:`>= ${t}${o} and <= ${r}${o}`,new D.ERR_OUT_OF_RANGE("value",n,e)}I(o,"offset"),(void 0===n[o]||void 0===n[o+s])&&B(o,n.length-(s+1))}function I(e,t){if("number"!=typeof e)throw new D.ERR_INVALID_ARG_TYPE(t,"number",e)}function B(e,t,r){if(Math.floor(e)!==e)throw I(e,r),new D.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${t}`,e)}T("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),T("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),T("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?o=F(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=F(o)),o+="n"),n+=` It must be ${t}. Received ${o}`},RangeError);let L=/[^+/0-9A-Za-z-_]/g;function U(e,t){let r;t=t||1/0;let n=e.length,o=null,s=[];for(let i=0;i<n;++i){if((r=e.charCodeAt(i))>55295&&r<57344){if(!o){if(r>56319||i+1===n){(t-=3)>-1&&s.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&s.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function k(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(L,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function N(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}function P(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let _=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o]}return t}();function q(e){return"undefined"==typeof BigInt?M:e}function M(){throw Error("BigInt not supported")}},{"9c62938f1dccc73c":"ettWx",aceacb6a4531a9d2:"6DXND"}],ettWx:[function(e,t,r,n){r.byteLength=function(e){var t=f(e),r=t[0],n=t[1];return(r+n)*3/4-n},r.toByteArray=function(e){var t,r,n=f(e),o=n[0],a=n[1],l=new i((o+a)*3/4-a),u=0,c=a>0?o-4:o;for(r=0;r<c;r+=4)t=s[e.charCodeAt(r)]<<18|s[e.charCodeAt(r+1)]<<12|s[e.charCodeAt(r+2)]<<6|s[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===a&&(t=s[e.charCodeAt(r)]<<2|s[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===a&&(t=s[e.charCodeAt(r)]<<10|s[e.charCodeAt(r+1)]<<4|s[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},r.fromByteArray=function(e){for(var t,r=e.length,n=r%3,s=[],i=0,a=r-n;i<a;i+=16383)s.push(function(e,t,r){for(var n,s=[],i=t;i<r;i+=3)n=(e[i]<<16&0xff0000)+(e[i+1]<<8&65280)+(255&e[i+2]),s.push(o[n>>18&63]+o[n>>12&63]+o[n>>6&63]+o[63&n]);return s.join("")}(e,i,i+16383>a?a:i+16383));return 1===n?s.push(o[(t=e[r-1])>>2]+o[t<<4&63]+"=="):2===n&&s.push(o[(t=(e[r-2]<<8)+e[r-1])>>10]+o[t>>4&63]+o[t<<2&63]+"="),s.join("")};for(var o=[],s=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,u=a.length;l<u;++l)o[l]=a[l],s[a.charCodeAt(l)]=l;function f(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},{}],"6DXND":[function(e,t,r,n){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */r.read=function(e,t,r,n,o){var s,i,a=8*o-n-1,l=(1<<a)-1,u=l>>1,f=-7,c=r?o-1:0,d=r?-1:1,p=e[t+c];for(c+=d,s=p&(1<<-f)-1,p>>=-f,f+=a;f>0;s=256*s+e[t+c],c+=d,f-=8);for(i=s&(1<<-f)-1,s>>=-f,f+=n;f>0;i=256*i+e[t+c],c+=d,f-=8);if(0===s)s=1-u;else{if(s===l)return i?NaN:1/0*(p?-1:1);i+=Math.pow(2,n),s-=u}return(p?-1:1)*i*Math.pow(2,s-n)},r.write=function(e,t,r,n,o,s){var i,a,l,u=8*s-o-1,f=(1<<u)-1,c=f>>1,d=5960464477539062e-23*(23===o),p=n?0:s-1,h=n?1:-1,m=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),i=f):(i=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-i))<1&&(i--,l*=2),i+c>=1?t+=d/l:t+=d*Math.pow(2,1-c),t*l>=2&&(i++,l/=2),i+c>=f?(a=0,i=f):i+c>=1?(a=(t*l-1)*Math.pow(2,o),i+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,o),i=0));o>=8;e[r+p]=255&a,p+=h,a/=256,o-=8);for(i=i<<o|a,u+=o;u>0;e[r+p]=255&i,p+=h,i/=256,u-=8);e[r+p-h]|=128*m}},{}],kinyp:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../utils.js"),i=o.interopDefault(s);function a(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}(0,i.default).inherits(a,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:(0,i.default).toJSONObject(this.config),code:this.code,status:this.status}}});let l=a.prototype,u={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{u[e]={value:e}}),Object.defineProperties(a,u),Object.defineProperty(l,"isAxiosError",{value:!0}),a.from=(e,t,r,n,o,s)=>{let u=Object.create(l);return(0,i.default).toFlatObject(e,u,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),a.call(u,e.message,t,r,n,o),u.cause=e,u.name=e.name,s&&Object.assign(u,s),u},r.default=a},{"../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"3nCRV":[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=null},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],gBR9v:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./../utils.js"),i=o.interopDefault(s);r.default=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){(0,i.default).forEach(this.handlers,function(t){null!==t&&e(t)})}}},{"./../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"9BYjJ":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>j);var s=e("./transformData.js"),i=o.interopDefault(s),a=e("../cancel/isCancel.js"),l=o.interopDefault(a),u=e("../defaults/index.js"),f=o.interopDefault(u),c=e("../cancel/CanceledError.js"),d=o.interopDefault(c),p=e("../core/AxiosHeaders.js"),h=o.interopDefault(p),m=e("../adapters/adapters.js"),g=o.interopDefault(m);function y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new d.default(null,e)}function j(e){return y(e),e.headers=(0,h.default).from(e.headers),e.data=(0,i.default).call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(0,g.default).getAdapter(e.adapter||f.default.adapter)(e).then(function(t){return y(e),t.data=(0,i.default).call(e,e.transformResponse,t),t.headers=(0,h.default).from(t.headers),t},function(t){return!(0,l.default)(t)&&(y(e),t&&t.response&&(t.response.data=(0,i.default).call(e,e.transformResponse,t.response),t.response.headers=(0,h.default).from(t.response.headers))),Promise.reject(t)})}},{"./transformData.js":"kzWBF","../cancel/isCancel.js":"5w9uS","../defaults/index.js":"gguXD","../cancel/CanceledError.js":"lfAwZ","../core/AxiosHeaders.js":"2Z6Oi","../adapters/adapters.js":"atJSg","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],kzWBF:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>c);var s=e("./../utils.js"),i=o.interopDefault(s),a=e("../defaults/index.js"),l=o.interopDefault(a),u=e("../core/AxiosHeaders.js"),f=o.interopDefault(u);function c(e,t){let r=this||l.default,n=t||r,o=(0,f.default).from(n.headers),s=n.data;return(0,i.default).forEach(e,function(e){s=e.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}},{"./../utils.js":"4uo9i","../defaults/index.js":"gguXD","../core/AxiosHeaders.js":"2Z6Oi","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],gguXD:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../utils.js"),i=o.interopDefault(s),a=e("../core/AxiosError.js"),l=o.interopDefault(a),u=e("./transitional.js"),f=o.interopDefault(u),c=e("../helpers/toFormData.js"),d=o.interopDefault(c),p=e("../helpers/toURLEncodedForm.js"),h=o.interopDefault(p),m=e("../platform/index.js"),g=o.interopDefault(m),y=e("../helpers/formDataToJSON.js"),j=o.interopDefault(y);let b={transitional:f.default,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",o=n.indexOf("application/json")>-1,s=(0,i.default).isObject(e);if(s&&(0,i.default).isHTMLForm(e)&&(e=new FormData(e)),(0,i.default).isFormData(e))return o?JSON.stringify((0,j.default)(e)):e;if((0,i.default).isArrayBuffer(e)||(0,i.default).isBuffer(e)||(0,i.default).isStream(e)||(0,i.default).isFile(e)||(0,i.default).isBlob(e)||(0,i.default).isReadableStream(e))return e;if((0,i.default).isArrayBufferView(e))return e.buffer;if((0,i.default).isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,h.default)(e,this.formSerializer).toString();if((r=(0,i.default).isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return(0,d.default)(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||o?(t.setContentType("application/json",!1),function(e,t,r){if((0,i.default).isString(e))try{return(0,JSON.parse)(e),(0,i.default).trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||b.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if((0,i.default).isResponse(e)||(0,i.default).isReadableStream(e))return e;if(e&&(0,i.default).isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw(0,l.default).from(e,l.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.default.classes.FormData,Blob:g.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};(0,i.default).forEach(["delete","get","head","post","put","patch"],e=>{b.headers[e]={}}),r.default=b},{"../utils.js":"4uo9i","../core/AxiosError.js":"kinyp","./transitional.js":"fnl8o","../helpers/toFormData.js":"kISIL","../helpers/toURLEncodedForm.js":"lYmci","../platform/index.js":"f1Kjw","../helpers/formDataToJSON.js":"jNEsW","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],fnl8o:[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],lYmci:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>c);var s=e("../utils.js"),i=o.interopDefault(s),a=e("./toFormData.js"),l=o.interopDefault(a),u=e("../platform/index.js"),f=o.interopDefault(u);function c(e,t){return(0,l.default)(e,new f.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return f.default.isNode&&(0,i.default).isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}},{"../utils.js":"4uo9i","./toFormData.js":"kISIL","../platform/index.js":"f1Kjw","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],f1Kjw:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./node/index.js"),i=o.interopDefault(s),a=e("./common/utils.js");r.default={...a,...i.default}},{"./node/index.js":"9WmFp","./common/utils.js":"99BaU","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"9WmFp":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./classes/URLSearchParams.js"),i=o.interopDefault(s),a=e("./classes/FormData.js"),l=o.interopDefault(a),u=e("./classes/Blob.js"),f=o.interopDefault(u);r.default={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:l.default,Blob:f.default},protocols:["http","https","file","blob","url","data"]}},{"./classes/URLSearchParams.js":"d4aCd","./classes/FormData.js":"kTIRP","./classes/Blob.js":"2KGV3","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],d4aCd:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../../../helpers/AxiosURLSearchParams.js"),i=o.interopDefault(s);r.default="undefined"!=typeof URLSearchParams?URLSearchParams:i.default},{"../../../helpers/AxiosURLSearchParams.js":"cgFfA","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],kTIRP:[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default="undefined"!=typeof FormData?FormData:null},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2KGV3":[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default="undefined"!=typeof Blob?Blob:null},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"99BaU":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"hasBrowserEnv",()=>s),o.export(r,"hasStandardBrowserWebWorkerEnv",()=>l),o.export(r,"hasStandardBrowserEnv",()=>a),o.export(r,"navigator",()=>i),o.export(r,"origin",()=>u);let s="undefined"!=typeof window&&"undefined"!=typeof document,i="object"==typeof navigator&&navigator||void 0,a=s&&(!i||0>["ReactNative","NativeScript","NS"].indexOf(i.product)),l="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,u=s&&window.location.href||"http://localhost"},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jNEsW:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../utils.js"),i=o.interopDefault(s);r.default=function(e){if((0,i.default).isFormData(e)&&(0,i.default).isFunction(e.entries)){let t={};return(0,i.default).forEachEntry(e,(e,r)=>{!function e(t,r,n,o){let s=t[o++];if("__proto__"===s)return!0;let a=Number.isFinite(+s),l=o>=t.length;return(s=!s&&(0,i.default).isArray(n)?n.length:s,l)?(0,i.default).hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r:(n[s]&&(0,i.default).isObject(n[s])||(n[s]=[]),e(t,r,n[s],o)&&(0,i.default).isArray(n[s])&&(n[s]=function(e){let t,r;let n={},o=Object.keys(e),s=o.length;for(t=0;t<s;t++)n[r=o[t]]=e[r];return n}(n[s]))),!a}((0,i.default).matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null}},{"../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2Z6Oi":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../utils.js"),i=o.interopDefault(s),a=e("../helpers/parseHeaders.js"),l=o.interopDefault(a);let u=Symbol("internals");function f(e){return e&&String(e).trim().toLowerCase()}function c(e){return!1===e||null==e?e:(0,i.default).isArray(e)?e.map(c):String(e)}let d=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function p(e,t,r,n,o){if((0,i.default).isFunction(n))return n.call(this,t,r);if(o&&(t=r),(0,i.default).isString(t)){if((0,i.default).isString(n))return -1!==t.indexOf(n);if((0,i.default).isRegExp(n))return n.test(t)}}class h{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function o(e,t,r){let o=f(t);if(!o)throw Error("header name must be a non-empty string");let s=(0,i.default).findKey(n,o);s&&void 0!==n[s]&&!0!==r&&(void 0!==r||!1===n[s])||(n[s||t]=c(e))}let s=(e,t)=>(0,i.default).forEach(e,(e,r)=>o(e,r,t));if((0,i.default).isPlainObject(e)||e instanceof this.constructor)s(e,t);else if((0,i.default).isString(e)&&(e=e.trim())&&!d(e))s((0,l.default)(e),t);else if((0,i.default).isHeaders(e))for(let[t,n]of e.entries())o(n,t,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=f(e)){let r=(0,i.default).findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if((0,i.default).isFunction(t))return t.call(this,e,r);if((0,i.default).isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=f(e)){let r=(0,i.default).findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||p(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function o(e){if(e=f(e)){let o=(0,i.default).findKey(r,e);o&&(!t||p(r,r[o],o,t))&&(delete r[o],n=!0)}}return(0,i.default).isArray(e)?e.forEach(o):o(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let o=t[r];(!e||p(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){let t=this,r={};return(0,i.default).forEach(this,(n,o)=>{let s=(0,i.default).findKey(r,o);if(s){t[s]=c(n),delete t[o];return}let a=e?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(o).trim();a!==o&&delete t[o],t[a]=c(n),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return(0,i.default).forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&(0,i.default).isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=(this[u]=this[u]={accessors:{}}).accessors,r=this.prototype;function n(e){let n=f(e);t[n]||(!function(e,t){let r=(0,i.default).toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(r,e),t[n]=!0)}return(0,i.default).isArray(e)?e.forEach(n):n(e),this}}h.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),(0,i.default).reduceDescriptors(h.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),(0,i.default).freezeMethods(h),r.default=h},{"../utils.js":"4uo9i","../helpers/parseHeaders.js":"7iHXN","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"7iHXN":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./../utils.js");let i=(0,o.interopDefault(s).default).toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);r.default=e=>{let t,r,n;let o={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||o[t]&&i[t]||("set-cookie"===t?o[t]?o[t].push(r):o[t]=[r]:o[t]=o[t]?o[t]+", "+r:r)}),o}},{"./../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"5w9uS":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e){return!!(e&&e.__CANCEL__)}o.defineInteropFlag(r),o.export(r,"default",()=>s)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],lfAwZ:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../core/AxiosError.js"),i=o.interopDefault(s),a=e("../utils.js");function l(e,t,r){(0,i.default).call(this,null==e?"canceled":e,i.default.ERR_CANCELED,t,r),this.name="CanceledError"}(0,o.interopDefault(a).default).inherits(l,i.default,{__CANCEL__:!0}),r.default=l},{"../core/AxiosError.js":"kinyp","../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],atJSg:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../utils.js"),i=o.interopDefault(s),a=e("./http.js"),l=o.interopDefault(a),u=e("./xhr.js"),f=o.interopDefault(u),c=e("./fetch.js"),d=o.interopDefault(c),p=e("../core/AxiosError.js"),h=o.interopDefault(p);let m={http:l.default,xhr:f.default,fetch:d.default};(0,i.default).forEach(m,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});let g=e=>`- ${e}`,y=e=>(0,i.default).isFunction(e)||null===e||!1===e;r.default={getAdapter:e=>{let t,r;let{length:n}=e=(0,i.default).isArray(e)?e:[e],o={};for(let s=0;s<n;s++){let n;if(r=t=e[s],!y(t)&&void 0===(r=m[(n=String(t)).toLowerCase()]))throw new h.default(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+s]=r}if(!r){let e=Object.entries(o).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")),t=n?e.length>1?"since :\n"+e.map(g).join("\n"):" "+g(e[0]):"as no adapter specified";throw new h.default("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")}return r},adapters:m}},{"../utils.js":"4uo9i","./http.js":"3nCRV","./xhr.js":"i0pe0","./fetch.js":"2L3NH","../core/AxiosError.js":"kinyp","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],i0pe0:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./../utils.js"),i=o.interopDefault(s),a=e("./../core/settle.js"),l=o.interopDefault(a),u=e("../defaults/transitional.js"),f=o.interopDefault(u),c=e("../core/AxiosError.js"),d=o.interopDefault(c),p=e("../cancel/CanceledError.js"),h=o.interopDefault(p),m=e("../helpers/parseProtocol.js"),g=o.interopDefault(m),y=e("../platform/index.js"),j=o.interopDefault(y),b=e("../core/AxiosHeaders.js"),w=o.interopDefault(b),E=e("../helpers/progressEventReducer.js"),x=e("../helpers/resolveConfig.js"),v=o.interopDefault(x);let C="undefined"!=typeof XMLHttpRequest;r.default=C&&function(e){return new Promise(function(t,r){let n,o,s,a,u;let c=(0,v.default)(e),p=c.data,m=(0,w.default).from(c.headers).normalize(),{responseType:y,onUploadProgress:b,onDownloadProgress:x}=c;function C(){a&&a(),u&&u(),c.cancelToken&&c.cancelToken.unsubscribe(n),c.signal&&c.signal.removeEventListener("abort",n)}let A=new XMLHttpRequest;function R(){if(!A)return;let n=(0,w.default).from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),o={data:y&&"text"!==y&&"json"!==y?A.response:A.responseText,status:A.status,statusText:A.statusText,headers:n,config:e,request:A};(0,l.default)(function(e){t(e),C()},function(e){r(e),C()},o),A=null}A.open(c.method.toUpperCase(),c.url,!0),A.timeout=c.timeout,"onloadend"in A?A.onloadend=R:A.onreadystatechange=function(){A&&4===A.readyState&&(0!==A.status||A.responseURL&&0===A.responseURL.indexOf("file:"))&&setTimeout(R)},A.onabort=function(){A&&(r(new d.default("Request aborted",d.default.ECONNABORTED,e,A)),A=null)},A.onerror=function(){r(new d.default("Network Error",d.default.ERR_NETWORK,e,A)),A=null},A.ontimeout=function(){let t=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded",n=c.transitional||f.default;c.timeoutErrorMessage&&(t=c.timeoutErrorMessage),r(new d.default(t,n.clarifyTimeoutError?d.default.ETIMEDOUT:d.default.ECONNABORTED,e,A)),A=null},void 0===p&&m.setContentType(null),"setRequestHeader"in A&&(0,i.default).forEach(m.toJSON(),function(e,t){A.setRequestHeader(t,e)}),(0,i.default).isUndefined(c.withCredentials)||(A.withCredentials=!!c.withCredentials),y&&"json"!==y&&(A.responseType=c.responseType),x&&([s,u]=(0,E.progressEventReducer)(x,!0),A.addEventListener("progress",s)),b&&A.upload&&([o,a]=(0,E.progressEventReducer)(b),A.upload.addEventListener("progress",o),A.upload.addEventListener("loadend",a)),(c.cancelToken||c.signal)&&(n=t=>{A&&(r(!t||t.type?new h.default(null,e,A):t),A.abort(),A=null)},c.cancelToken&&c.cancelToken.subscribe(n),c.signal&&(c.signal.aborted?n():c.signal.addEventListener("abort",n)));let S=(0,g.default)(c.url);if(S&&-1===(0,j.default).protocols.indexOf(S)){r(new d.default("Unsupported protocol "+S+":",d.default.ERR_BAD_REQUEST,e));return}A.send(p||null)})}},{"./../utils.js":"4uo9i","./../core/settle.js":"bYbho","../defaults/transitional.js":"fnl8o","../core/AxiosError.js":"kinyp","../cancel/CanceledError.js":"lfAwZ","../helpers/parseProtocol.js":"96o7u","../platform/index.js":"f1Kjw","../core/AxiosHeaders.js":"2Z6Oi","../helpers/progressEventReducer.js":"3BMKV","../helpers/resolveConfig.js":"8Lm4J","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],bYbho:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>a);var s=e("./AxiosError.js"),i=o.interopDefault(s);function a(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new i.default("Request failed with status code "+r.status,[i.default.ERR_BAD_REQUEST,i.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}},{"./AxiosError.js":"kinyp","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"96o7u":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}o.defineInteropFlag(r),o.export(r,"default",()=>s)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"3BMKV":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"progressEventReducer",()=>c),o.export(r,"progressEventDecorator",()=>d),o.export(r,"asyncDecorator",()=>p);var s=e("./speedometer.js"),i=o.interopDefault(s),a=e("./throttle.js"),l=o.interopDefault(a),u=e("../utils.js"),f=o.interopDefault(u);let c=(e,t,r=3)=>{let n=0,o=(0,i.default)(50,250);return(0,l.default)(r=>{let s=r.loaded,i=r.lengthComputable?r.total:void 0,a=s-n,l=o(a);n=s,e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:l||void 0,estimated:l&&i&&s<=i?(i-s)/l:void 0,event:r,lengthComputable:null!=i,[t?"download":"upload"]:!0})},r)},d=(e,t)=>{let r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},p=e=>(...t)=>(0,f.default).asap(()=>e(...t))},{"./speedometer.js":"5HjJZ","./throttle.js":"dw4uI","../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"5HjJZ":[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){let r;let n=Array(e=e||10),o=Array(e),s=0,i=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),u=o[i];r||(r=l),n[s]=a,o[s]=l;let f=i,c=0;for(;f!==s;)c+=n[f++],f%=e;if((s=(s+1)%e)===i&&(i=(i+1)%e),l-r<t)return;let d=u&&l-u;return d?Math.round(1e3*c/d):void 0}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],dw4uI:[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t){let r,n,o=0,s=1e3/t,i=(t,s=Date.now())=>{o=s,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[(...e)=>{let t=Date.now(),a=t-o;a>=s?i(e,t):(r=e,n||(n=setTimeout(()=>{n=null,i(r)},s-a)))},()=>r&&i(r)]}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"8Lm4J":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../platform/index.js"),i=o.interopDefault(s),a=e("../utils.js"),l=o.interopDefault(a),u=e("./isURLSameOrigin.js"),f=o.interopDefault(u),c=e("./cookies.js"),d=o.interopDefault(c),p=e("../core/buildFullPath.js"),h=o.interopDefault(p),m=e("../core/mergeConfig.js"),g=o.interopDefault(m),y=e("../core/AxiosHeaders.js"),j=o.interopDefault(y),b=e("./buildURL.js"),w=o.interopDefault(b);r.default=e=>{let t;let r=(0,g.default)({},e),{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:a,headers:u,auth:c}=r;if(r.headers=u=(0,j.default).from(u),r.url=(0,w.default)((0,h.default)(r.baseURL,r.url),e.params,e.paramsSerializer),c&&u.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),(0,l.default).isFormData(n)){if(i.default.hasStandardBrowserEnv||i.default.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if(!1!==(t=u.getContentType())){let[e,...r]=t?t.split(";").map(e=>e.trim()).filter(Boolean):[];u.setContentType([e||"multipart/form-data",...r].join("; "))}}if(i.default.hasStandardBrowserEnv&&(o&&(0,l.default).isFunction(o)&&(o=o(r)),o||!1!==o&&(0,f.default)(r.url))){let e=s&&a&&(0,d.default).read(a);e&&u.set(s,e)}return r}},{"../platform/index.js":"f1Kjw","../utils.js":"4uo9i","./isURLSameOrigin.js":"3wNi6","./cookies.js":"fq1CU","../core/buildFullPath.js":"dqGPZ","../core/mergeConfig.js":"1xY8J","../core/AxiosHeaders.js":"2Z6Oi","./buildURL.js":"2yc3i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"3wNi6":[function(e,t,r,n){let o,s;var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var a=e("../platform/index.js"),l=i.interopDefault(a);r.default=l.default.hasStandardBrowserEnv?(o=new URL(l.default.origin),s=l.default.navigator&&/(msie|trident)/i.test(l.default.navigator.userAgent),e=>(e=new URL(e,l.default.origin),o.protocol===e.protocol&&o.host===e.host&&(s||o.port===e.port))):()=>!0},{"../platform/index.js":"f1Kjw","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],fq1CU:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./../utils.js"),i=o.interopDefault(s),a=e("../platform/index.js"),l=o.interopDefault(a);r.default=l.default.hasStandardBrowserEnv?{write(e,t,r,n,o,s){let a=[e+"="+encodeURIComponent(t)];(0,i.default).isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),(0,i.default).isString(n)&&a.push("path="+n),(0,i.default).isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}}},{"./../utils.js":"4uo9i","../platform/index.js":"f1Kjw","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],dqGPZ:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>u);var s=e("../helpers/isAbsoluteURL.js"),i=o.interopDefault(s),a=e("../helpers/combineURLs.js"),l=o.interopDefault(a);function u(e,t){return e&&!(0,i.default)(t)?(0,l.default)(e,t):t}},{"../helpers/isAbsoluteURL.js":"kKGFA","../helpers/combineURLs.js":"aIa5z","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],kKGFA:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}o.defineInteropFlag(r),o.export(r,"default",()=>s)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],aIa5z:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}o.defineInteropFlag(r),o.export(r,"default",()=>s)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"1xY8J":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>f);var s=e("../utils.js"),i=o.interopDefault(s),a=e("./AxiosHeaders.js"),l=o.interopDefault(a);let u=e=>e instanceof l.default?{...e}:e;function f(e,t){t=t||{};let r={};function n(e,t,r,n){return(0,i.default).isPlainObject(e)&&(0,i.default).isPlainObject(t)?(0,i.default).merge.call({caseless:n},e,t):(0,i.default).isPlainObject(t)?(0,i.default).merge({},t):(0,i.default).isArray(t)?t.slice():t}function o(e,t,r,o){return(0,i.default).isUndefined(t)?(0,i.default).isUndefined(e)?void 0:n(void 0,e,r,o):n(e,t,r,o)}function s(e,t){if(!(0,i.default).isUndefined(t))return n(void 0,t)}function a(e,t){return(0,i.default).isUndefined(t)?(0,i.default).isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function l(r,o,s){return s in t?n(r,o):s in e?n(void 0,r):void 0}let f={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(e,t,r)=>o(u(e),u(t),r,!0)};return(0,i.default).forEach(Object.keys(Object.assign({},e,t)),function(n){let s=f[n]||o,a=s(e[n],t[n],n);(0,i.default).isUndefined(a)&&s!==l||(r[n]=a)}),r}},{"../utils.js":"4uo9i","./AxiosHeaders.js":"2Z6Oi","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"2L3NH":[function(e,t,r,n){let o;var s,i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var a=e("../platform/index.js"),l=i.interopDefault(a),u=e("../utils.js"),f=i.interopDefault(u),c=e("../core/AxiosError.js"),d=i.interopDefault(c),p=e("../helpers/composeSignals.js"),h=i.interopDefault(p),m=e("../helpers/trackStream.js"),g=e("../core/AxiosHeaders.js"),y=i.interopDefault(g),j=e("../helpers/progressEventReducer.js"),b=e("../helpers/resolveConfig.js"),w=i.interopDefault(b),E=e("../core/settle.js"),x=i.interopDefault(E);let v="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,C=v&&"function"==typeof ReadableStream,A=v&&("function"==typeof TextEncoder?(o=new TextEncoder,e=>o.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer())),R=(e,...t)=>{try{return!!e(...t)}catch(e){return!1}},S=C&&R(()=>{let e=!1,t=new Request((0,l.default).origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),D=C&&R(()=>(0,f.default).isReadableStream(new Response("").body)),T={stream:D&&(e=>e.body)};v&&(s=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(e=>{T[e]||(T[e]=(0,f.default).isFunction(s[e])?t=>t[e]():(t,r)=>{throw new d.default(`Response type '${e}' is not supported`,d.default.ERR_NOT_SUPPORT,r)})}));let F=async e=>{if(null==e)return 0;if((0,f.default).isBlob(e))return e.size;if((0,f.default).isSpecCompliantForm(e)){let t=new Request(l.default.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return(0,f.default).isArrayBufferView(e)||(0,f.default).isArrayBuffer(e)?e.byteLength:((0,f.default).isURLSearchParams(e)&&(e+=""),(0,f.default).isString(e))?(await A(e)).byteLength:void 0},O=async(e,t)=>{let r=(0,f.default).toFiniteNumber(e.getContentLength());return null==r?F(t):r};r.default=v&&(async e=>{let t,r,{url:n,method:o,data:s,signal:i,cancelToken:a,timeout:l,onDownloadProgress:u,onUploadProgress:c,responseType:p,headers:g,withCredentials:b="same-origin",fetchOptions:E}=(0,w.default)(e);p=p?(p+"").toLowerCase():"text";let v=(0,h.default)([i,a&&a.toAbortSignal()],l),C=v&&v.unsubscribe&&(()=>{v.unsubscribe()});try{if(c&&S&&"get"!==o&&"head"!==o&&0!==(r=await O(g,s))){let e,t=new Request(n,{method:"POST",body:s,duplex:"half"});if((0,f.default).isFormData(s)&&(e=t.headers.get("content-type"))&&g.setContentType(e),t.body){let[e,n]=(0,j.progressEventDecorator)(r,(0,j.progressEventReducer)((0,j.asyncDecorator)(c)));s=(0,m.trackStream)(t.body,65536,e,n)}}(0,f.default).isString(b)||(b=b?"include":"omit");let i="credentials"in Request.prototype;t=new Request(n,{...E,signal:v,method:o.toUpperCase(),headers:g.normalize().toJSON(),body:s,duplex:"half",credentials:i?b:void 0});let a=await fetch(t),l=D&&("stream"===p||"response"===p);if(D&&(u||l&&C)){let e={};["status","statusText","headers"].forEach(t=>{e[t]=a[t]});let t=(0,f.default).toFiniteNumber(a.headers.get("content-length")),[r,n]=u&&(0,j.progressEventDecorator)(t,(0,j.progressEventReducer)((0,j.asyncDecorator)(u),!0))||[];a=new Response((0,m.trackStream)(a.body,65536,r,()=>{n&&n(),C&&C()}),e)}p=p||"text";let d=await T[(0,f.default).findKey(T,p)||"text"](a,e);return!l&&C&&C(),await new Promise((r,n)=>{(0,x.default)(r,n,{data:d,headers:(0,y.default).from(a.headers),status:a.status,statusText:a.statusText,config:e,request:t})})}catch(r){if(C&&C(),r&&"TypeError"===r.name&&/fetch/i.test(r.message))throw Object.assign(new d.default("Network Error",d.default.ERR_NETWORK,e,t),{cause:r.cause||r});throw(0,d.default).from(r,r&&r.code,e,t)}})},{"../platform/index.js":"f1Kjw","../utils.js":"4uo9i","../core/AxiosError.js":"kinyp","../helpers/composeSignals.js":"hGXat","../helpers/trackStream.js":"41KaY","../core/AxiosHeaders.js":"2Z6Oi","../helpers/progressEventReducer.js":"3BMKV","../helpers/resolveConfig.js":"8Lm4J","../core/settle.js":"bYbho","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],hGXat:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../cancel/CanceledError.js"),i=o.interopDefault(s),a=e("../core/AxiosError.js"),l=o.interopDefault(a),u=e("../utils.js"),f=o.interopDefault(u);r.default=(e,t)=>{let{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController,o=function(e){if(!r){r=!0,a();let t=e instanceof Error?e:this.reason;n.abort(t instanceof l.default?t:new i.default(t instanceof Error?t.message:t))}},s=t&&setTimeout(()=>{s=null,o(new l.default(`timeout ${t} of ms exceeded`,l.default.ETIMEDOUT))},t),a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)}),e=null)};e.forEach(e=>e.addEventListener("abort",o));let{signal:u}=n;return u.unsubscribe=()=>(0,f.default).asap(a),u}}},{"../cancel/CanceledError.js":"lfAwZ","../core/AxiosError.js":"kinyp","../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"41KaY":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"streamChunk",()=>s),o.export(r,"readBytes",()=>i),o.export(r,"trackStream",()=>l);let s=function*(e,t){let r,n=e.byteLength;if(!t||n<t){yield e;return}let o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},i=async function*(e,t){for await(let r of a(e))yield*s(r,t)},a=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},l=(e,t,r,n)=>{let o;let s=i(e,t),a=0,l=e=>{!o&&(o=!0,n&&n(e))};return new ReadableStream({async pull(e){try{let{done:t,value:n}=await s.next();if(t){l(),e.close();return}let o=n.byteLength;if(r){let e=a+=o;r(e)}e.enqueue(new Uint8Array(n))}catch(e){throw l(e),e}},cancel:e=>(l(e),s.return())},{highWaterMark:2})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],jxy99:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("../env/data.js"),i=e("../core/AxiosError.js"),a=o.interopDefault(i);let l={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{l[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});let u={};l.transitional=function(e,t,r){function n(e,t){return"[Axios v"+s.VERSION+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,s)=>{if(!1===e)throw new a.default(n(o," has been removed"+(t?" in "+t:"")),a.default.ERR_DEPRECATED);return t&&!u[o]&&(u[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,s)}},l.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)},r.default={assertOptions:function(e,t,r){if("object"!=typeof e)throw new a.default("options must be an object",a.default.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let s=n[o],i=t[s];if(i){let t=e[s],r=void 0===t||i(t,s,e);if(!0!==r)throw new a.default("option "+s+" must be "+r,a.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new a.default("Unknown option "+s,a.default.ERR_BAD_OPTION)}},validators:l}},{"../env/data.js":"hl0B4","../core/AxiosError.js":"kinyp","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],hl0B4:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"VERSION",()=>s);let s="1.7.9"},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],fa4h3:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var s=e("./CanceledError.js"),i=o.interopDefault(s);class a{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new i.default(e,n,o),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new a(function(t){e=t}),cancel:e}}}r.default=a},{"./CanceledError.js":"lfAwZ","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],kQZVl:[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");function s(e){return function(t){return e.apply(null,t)}}o.defineInteropFlag(r),o.export(r,"default",()=>s)},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"98mQL":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"default",()=>a);var s=e("./../utils.js"),i=o.interopDefault(s);function a(e){return(0,i.default).isObject(e)&&!0===e.isAxiosError}},{"./../utils.js":"4uo9i","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],g7MYJ:[function(e,t,r,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);let o={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(o).forEach(([e,t])=>{o[t]=e}),r.default=o},{"@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}],"6JKKg":[function(e,t,r,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"fetchSingleUseCode",()=>l);var s=e("@xatom/axios"),i=e("@xatom/core"),a=e("../routes");let l=()=>{document.querySelectorAll(".single-use-code-section").forEach(e=>{let t=new i.WFComponent(e.querySelector(".get-code-button")),r=new i.WFComponent(e.querySelector(".get-code-button-text")),n=new i.WFComponent(e.querySelector(".get-code-button-loader")),o=new i.WFComponent(e.querySelector(".is-single-use-code")),l=new i.WFComponent(e.querySelector(".single-use-code_provider-name")),u=new i.WFComponent(e.querySelector(".single-use-code-text")),f=new i.WFComponent(e.querySelector(".copy-code-button")),c=new i.WFComponent(e.querySelector(".use-this-code")),d=new i.WFComponent(e.querySelector(".copy-code-button > .icon-copy")),p=new i.WFComponent(e.querySelector(".copy-code-button > .icon-check")),h=new i.WFComponent(e.querySelector(".code-error")),m=new i.WFComponent(e.querySelector(".code-error-text"));t.on("click",e=>{e.preventDefault(),console.log("Fetching code");let i=(0,a.getCookie)("ucn"),f=window.location.href,d=l.getText(),p=window.location.href.startsWith("http://localhost:3020")?"http://localhost:3000":"https://membership-check-main.vercel.app/",g=new s.AxiosClientConfigurator(p),y=new s.AxiosClient(g).post("/api/fetchSuc",{data:{ucn:i,url:f,discountProviderName:d}});y.onLoadingChange(e=>{!0===e?(r.addCssClass("hide"),n.removeCssClass("hide")):(r.removeCssClass("hide"),n.addCssClass("hide"))}),y.onData(e=>{console.log("Response:",e),u.setText(e.code),o.removeCssClass("hide"),c.removeCssClass("hide"),t.addCssClass("hide"),h.addCssClass("hide")}),y.onError(e=>{console.log("Error:",e.response.data.error);let t=m.getElement();h.removeCssClass("hide"),429===e.status?t.innerHTML=`${e.response.data.error} contact support`:t.innerHTML=`${e.response.data.error}`}),y.fetch()});let g=async()=>{let e=u.getText().trim();await navigator.clipboard.writeText(e),d.addCssClass("hide"),p.removeCssClass("hide"),setTimeout(()=>{d.removeCssClass("hide"),p.addCssClass("hide")},2e3)};f.on("click",g)})}},{"@xatom/axios":"gafWx","@xatom/core":"5eqAK","../routes":"2uPfR","@parcel/transformer-js/src/esmodule-helpers.js":"jiucr"}]},["83hJF"],"83hJF","parcelRequire94c2");
>>>>>>> a01315e18a273459ba63dedfe4fa0f25a3948ab8
//# sourceMappingURL=app.js.map
