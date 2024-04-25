// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jwvxN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "37e53af7c4af9e59";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jaeUp":[function(require,module,exports) {
var _initMjs = require("../accessibility/init.mjs");
var _initMjs1 = require("../app/init.mjs");
var _initMjs2 = require("../events/init.mjs");
var _initMjs3 = require("../spritesheet/init.mjs");
var _initMjs4 = require("../rendering/init.mjs");
var _initMjs5 = require("../scene/graphics/init.mjs");
var _initMjs6 = require("../scene/mesh/init.mjs");
var _initMjs7 = require("../scene/text/init.mjs");
var _initMjs8 = require("../scene/text-bitmap/init.mjs");
var _initMjs9 = require("../scene/text-html/init.mjs");
var _initMjs10 = require("../scene/sprite-tiling/init.mjs");
var _initMjs11 = require("../scene/sprite-nine-slice/init.mjs");
var _initMjs12 = require("../filters/init.mjs");
"use strict";

},{"../accessibility/init.mjs":"kXVOW","../app/init.mjs":"1Cklk","../events/init.mjs":"8mqyc","../spritesheet/init.mjs":"76R6t","../rendering/init.mjs":"botbO","../scene/graphics/init.mjs":"gqtYb","../scene/mesh/init.mjs":"g9JHx","../scene/text/init.mjs":"5oCSz","../scene/text-bitmap/init.mjs":"03Yq9","../scene/text-html/init.mjs":"aNmwp","../scene/sprite-tiling/init.mjs":"cnAFW","../scene/sprite-nine-slice/init.mjs":"aeaZx","../filters/init.mjs":"fqc9x"}],"kXVOW":[function(require,module,exports) {
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _containerMjs = require("../scene/container/Container.mjs");
var _accessibilitySystemMjs = require("./AccessibilitySystem.mjs");
var _accessibilityTargetMjs = require("./accessibilityTarget.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _accessibilitySystemMjs.AccessibilitySystem));
(0, _containerMjs.Container).mixin((0, _accessibilityTargetMjs.accessibilityTarget));

},{"../extensions/Extensions.mjs":"c8doH","../scene/container/Container.mjs":"6EDs5","./AccessibilitySystem.mjs":"aTh3a","./accessibilityTarget.mjs":"frfL1"}],"aTh3a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AccessibilitySystem", ()=>AccessibilitySystem);
var _federatedEventMjs = require("../events/FederatedEvent.mjs");
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _isMobileMjs = require("../utils/browser/isMobile.mjs");
var _removeItemsMjs = require("../utils/data/removeItems.mjs");
"use strict";
const KEY_CODE_TAB = 9;
const DIV_TOUCH_SIZE = 100;
const DIV_TOUCH_POS_X = 0;
const DIV_TOUCH_POS_Y = 0;
const DIV_TOUCH_ZINDEX = 2;
const DIV_HOOK_SIZE = 1;
const DIV_HOOK_POS_X = -1000;
const DIV_HOOK_POS_Y = -1000;
const DIV_HOOK_ZINDEX = 2;
class AccessibilitySystem {
    // 2fps
    // eslint-disable-next-line jsdoc/require-param
    /**
   * @param {WebGLRenderer|WebGPURenderer} renderer - A reference to the current renderer
   */ constructor(renderer, _mobileInfo = (0, _isMobileMjs.isMobile)){
        this._mobileInfo = _mobileInfo;
        /** Setting this to true will visually show the divs. */ this.debug = false;
        /** Internal variable, see isActive getter. */ this._isActive = false;
        /** Internal variable, see isMobileAccessibility getter. */ this._isMobileAccessibility = false;
        /** A simple pool for storing divs. */ this._pool = [];
        /** This is a tick used to check if an object is no longer being rendered. */ this._renderId = 0;
        /** The array of currently active accessible items. */ this._children = [];
        /** Count to throttle div updates on android devices. */ this._androidUpdateCount = 0;
        /**  The frequency to update the div elements. */ this._androidUpdateFrequency = 500;
        this._hookDiv = null;
        if (_mobileInfo.tablet || _mobileInfo.phone) this._createTouchHook();
        const div = document.createElement("div");
        div.style.width = `${DIV_TOUCH_SIZE}px`;
        div.style.height = `${DIV_TOUCH_SIZE}px`;
        div.style.position = "absolute";
        div.style.top = `${DIV_TOUCH_POS_X}px`;
        div.style.left = `${DIV_TOUCH_POS_Y}px`;
        div.style.zIndex = DIV_TOUCH_ZINDEX.toString();
        this._div = div;
        this._renderer = renderer;
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        globalThis.addEventListener("keydown", this._onKeyDown, false);
    }
    /**
   * Value of `true` if accessibility is currently active and accessibility layers are showing.
   * @member {boolean}
   * @readonly
   */ get isActive() {
        return this._isActive;
    }
    /**
   * Value of `true` if accessibility is enabled for touch devices.
   * @member {boolean}
   * @readonly
   */ get isMobileAccessibility() {
        return this._isMobileAccessibility;
    }
    get hookDiv() {
        return this._hookDiv;
    }
    /**
   * Creates the touch hooks.
   * @private
   */ _createTouchHook() {
        const hookDiv = document.createElement("button");
        hookDiv.style.width = `${DIV_HOOK_SIZE}px`;
        hookDiv.style.height = `${DIV_HOOK_SIZE}px`;
        hookDiv.style.position = "absolute";
        hookDiv.style.top = `${DIV_HOOK_POS_X}px`;
        hookDiv.style.left = `${DIV_HOOK_POS_Y}px`;
        hookDiv.style.zIndex = DIV_HOOK_ZINDEX.toString();
        hookDiv.style.backgroundColor = "#FF0000";
        hookDiv.title = "select to enable accessibility for this content";
        hookDiv.addEventListener("focus", ()=>{
            this._isMobileAccessibility = true;
            this._activate();
            this._destroyTouchHook();
        });
        document.body.appendChild(hookDiv);
        this._hookDiv = hookDiv;
    }
    /**
   * Destroys the touch hooks.
   * @private
   */ _destroyTouchHook() {
        if (!this._hookDiv) return;
        document.body.removeChild(this._hookDiv);
        this._hookDiv = null;
    }
    /**
   * Activating will cause the Accessibility layer to be shown.
   * This is called when a user presses the tab key.
   * @private
   */ _activate() {
        if (this._isActive) return;
        this._isActive = true;
        globalThis.document.addEventListener("mousemove", this._onMouseMove, true);
        globalThis.removeEventListener("keydown", this._onKeyDown, false);
        this._renderer.runners.postrender.add(this);
        this._renderer.view.canvas.parentNode?.appendChild(this._div);
    }
    /**
   * Deactivating will cause the Accessibility layer to be hidden.
   * This is called when a user moves the mouse.
   * @private
   */ _deactivate() {
        if (!this._isActive || this._isMobileAccessibility) return;
        this._isActive = false;
        globalThis.document.removeEventListener("mousemove", this._onMouseMove, true);
        globalThis.addEventListener("keydown", this._onKeyDown, false);
        this._renderer.runners.postrender.remove(this);
        this._div.parentNode?.removeChild(this._div);
    }
    /**
   * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
   * @private
   * @param {Container} container - The Container to check.
   */ _updateAccessibleObjects(container) {
        if (!container.visible || !container.accessibleChildren) return;
        if (container.accessible && container.isInteractive()) {
            if (!container._accessibleActive) this._addChild(container);
            container._renderId = this._renderId;
        }
        const children = container.children;
        if (children) for(let i = 0; i < children.length; i++)this._updateAccessibleObjects(children[i]);
    }
    /**
   * Runner init called, view is available at this point.
   * @ignore
   */ init(options) {
        this.debug = options?.debug ?? this.debug;
        this._renderer.runners.postrender.remove(this);
    }
    /**
   * Runner postrender was called, ensure that all divs are mapped correctly to their Containers.
   * Only fires while active.
   * @ignore
   */ postrender() {
        const now = performance.now();
        if (this._mobileInfo.android.device && now < this._androidUpdateCount) return;
        this._androidUpdateCount = now + this._androidUpdateFrequency;
        if (!this._renderer.renderingToScreen || !this._renderer.view.canvas) return;
        if (this._renderer.lastObjectRendered) this._updateAccessibleObjects(this._renderer.lastObjectRendered);
        const { x, y, width, height } = this._renderer.view.canvas.getBoundingClientRect();
        const { width: viewWidth, height: viewHeight, resolution } = this._renderer;
        const sx = width / viewWidth * resolution;
        const sy = height / viewHeight * resolution;
        let div = this._div;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        div.style.width = `${viewWidth}px`;
        div.style.height = `${viewHeight}px`;
        for(let i = 0; i < this._children.length; i++){
            const child = this._children[i];
            if (child._renderId !== this._renderId) {
                child._accessibleActive = false;
                (0, _removeItemsMjs.removeItems)(this._children, i, 1);
                this._div.removeChild(child._accessibleDiv);
                this._pool.push(child._accessibleDiv);
                child._accessibleDiv = null;
                i--;
            } else {
                div = child._accessibleDiv;
                let hitArea = child.hitArea;
                const wt = child.worldTransform;
                if (child.hitArea) {
                    div.style.left = `${(wt.tx + hitArea.x * wt.a) * sx}px`;
                    div.style.top = `${(wt.ty + hitArea.y * wt.d) * sy}px`;
                    div.style.width = `${hitArea.width * wt.a * sx}px`;
                    div.style.height = `${hitArea.height * wt.d * sy}px`;
                } else {
                    hitArea = child.getBounds().rectangle;
                    this._capHitArea(hitArea);
                    div.style.left = `${hitArea.x * sx}px`;
                    div.style.top = `${hitArea.y * sy}px`;
                    div.style.width = `${hitArea.width * sx}px`;
                    div.style.height = `${hitArea.height * sy}px`;
                    if (div.title !== child.accessibleTitle && child.accessibleTitle !== null) div.title = child.accessibleTitle || "";
                    if (div.getAttribute("aria-label") !== child.accessibleHint && child.accessibleHint !== null) div.setAttribute("aria-label", child.accessibleHint || "");
                }
                if (child.accessibleTitle !== div.title || child.tabIndex !== div.tabIndex) {
                    div.title = child.accessibleTitle || "";
                    div.tabIndex = child.tabIndex;
                    if (this.debug) this._updateDebugHTML(div);
                }
            }
        }
        this._renderId++;
    }
    /**
   * private function that will visually add the information to the
   * accessibility div
   * @param {HTMLElement} div -
   */ _updateDebugHTML(div) {
        div.innerHTML = `type: ${div.type}</br> title : ${div.title}</br> tabIndex: ${div.tabIndex}`;
    }
    /**
   * Adjust the hit area based on the bounds of a display object
   * @param {Rectangle} hitArea - Bounds of the child
   */ _capHitArea(hitArea) {
        if (hitArea.x < 0) {
            hitArea.width += hitArea.x;
            hitArea.x = 0;
        }
        if (hitArea.y < 0) {
            hitArea.height += hitArea.y;
            hitArea.y = 0;
        }
        const { width: viewWidth, height: viewHeight } = this._renderer;
        if (hitArea.x + hitArea.width > viewWidth) hitArea.width = viewWidth - hitArea.x;
        if (hitArea.y + hitArea.height > viewHeight) hitArea.height = viewHeight - hitArea.y;
    }
    /**
   * Adds a Container to the accessibility manager
   * @private
   * @param {Container} container - The child to make accessible.
   */ _addChild(container) {
        let div = this._pool.pop();
        if (!div) {
            div = document.createElement("button");
            div.style.width = `${DIV_TOUCH_SIZE}px`;
            div.style.height = `${DIV_TOUCH_SIZE}px`;
            div.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent";
            div.style.position = "absolute";
            div.style.zIndex = DIV_TOUCH_ZINDEX.toString();
            div.style.borderStyle = "none";
            if (navigator.userAgent.toLowerCase().includes("chrome")) div.setAttribute("aria-live", "off");
            else div.setAttribute("aria-live", "polite");
            if (navigator.userAgent.match(/rv:.*Gecko\//)) div.setAttribute("aria-relevant", "additions");
            else div.setAttribute("aria-relevant", "text");
            div.addEventListener("click", this._onClick.bind(this));
            div.addEventListener("focus", this._onFocus.bind(this));
            div.addEventListener("focusout", this._onFocusOut.bind(this));
        }
        div.style.pointerEvents = container.accessiblePointerEvents;
        div.type = container.accessibleType;
        if (container.accessibleTitle && container.accessibleTitle !== null) div.title = container.accessibleTitle;
        else if (!container.accessibleHint || container.accessibleHint === null) div.title = `container ${container.tabIndex}`;
        if (container.accessibleHint && container.accessibleHint !== null) div.setAttribute("aria-label", container.accessibleHint);
        if (this.debug) this._updateDebugHTML(div);
        container._accessibleActive = true;
        container._accessibleDiv = div;
        div.container = container;
        this._children.push(container);
        this._div.appendChild(container._accessibleDiv);
        container._accessibleDiv.tabIndex = container.tabIndex;
    }
    /**
   * Dispatch events with the EventSystem.
   * @param e
   * @param type
   * @private
   */ _dispatchEvent(e, type) {
        const { container: target } = e.target;
        const boundary = this._renderer.events.rootBoundary;
        const event = Object.assign(new (0, _federatedEventMjs.FederatedEvent)(boundary), {
            target
        });
        boundary.rootTarget = this._renderer.lastObjectRendered;
        type.forEach((type2)=>boundary.dispatchEvent(event, type2));
    }
    /**
   * Maps the div button press to pixi's EventSystem (click)
   * @private
   * @param {MouseEvent} e - The click event.
   */ _onClick(e) {
        this._dispatchEvent(e, [
            "click",
            "pointertap",
            "tap"
        ]);
    }
    /**
   * Maps the div focus events to pixi's EventSystem (mouseover)
   * @private
   * @param {FocusEvent} e - The focus event.
   */ _onFocus(e) {
        if (!e.target.getAttribute("aria-live")) e.target.setAttribute("aria-live", "assertive");
        this._dispatchEvent(e, [
            "mouseover"
        ]);
    }
    /**
   * Maps the div focus events to pixi's EventSystem (mouseout)
   * @private
   * @param {FocusEvent} e - The focusout event.
   */ _onFocusOut(e) {
        if (!e.target.getAttribute("aria-live")) e.target.setAttribute("aria-live", "polite");
        this._dispatchEvent(e, [
            "mouseout"
        ]);
    }
    /**
   * Is called when a key is pressed
   * @private
   * @param {KeyboardEvent} e - The keydown event.
   */ _onKeyDown(e) {
        if (e.keyCode !== KEY_CODE_TAB) return;
        this._activate();
    }
    /**
   * Is called when the mouse moves across the renderer element
   * @private
   * @param {MouseEvent} e - The mouse event.
   */ _onMouseMove(e) {
        if (e.movementX === 0 && e.movementY === 0) return;
        this._deactivate();
    }
    /** Destroys the accessibility manager */ destroy() {
        this._destroyTouchHook();
        this._div = null;
        globalThis.document.removeEventListener("mousemove", this._onMouseMove, true);
        globalThis.removeEventListener("keydown", this._onKeyDown);
        this._pool = null;
        this._children = null;
        this._renderer = null;
    }
}
/** @ignore */ AccessibilitySystem.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLSystem,
        (0, _extensionsMjs.ExtensionType).WebGPUSystem
    ],
    name: "accessibility"
};

},{"../events/FederatedEvent.mjs":"6C0nI","../extensions/Extensions.mjs":"c8doH","../utils/browser/isMobile.mjs":"klswZ","../utils/data/removeItems.mjs":"jp57I","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6C0nI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FederatedEvent", ()=>FederatedEvent);
var _pointMjs = require("../maths/point/Point.mjs");
"use strict";
class FederatedEvent {
    /**
   * @param manager - The event boundary which manages this event. Propagation can only occur
   *  within the boundary's jurisdiction.
   */ constructor(manager){
        /** Flags whether this event bubbles. This will take effect only if it is set before propagation. */ this.bubbles = true;
        /** @deprecated since 7.0.0 */ this.cancelBubble = true;
        /**
     * Flags whether this event can be canceled using {@link FederatedEvent.preventDefault}. This is always
     * false (for now).
     */ this.cancelable = false;
        /**
     * Flag added for compatibility with DOM {@code Event}. It is not used in the Federated Events
     * API.
     * @see https://dom.spec.whatwg.org/#dom-event-composed
     */ this.composed = false;
        /** Flags whether the default response of the user agent was prevent through this event. */ this.defaultPrevented = false;
        /**
     * The propagation phase.
     * @default {@link FederatedEvent.NONE}
     */ this.eventPhase = FederatedEvent.prototype.NONE;
        /** Flags whether propagation was stopped. */ this.propagationStopped = false;
        /** Flags whether propagation was immediately stopped. */ this.propagationImmediatelyStopped = false;
        /** The coordinates of the event relative to the nearest DOM layer. This is a non-standard property. */ this.layer = new (0, _pointMjs.Point)();
        /** The coordinates of the event relative to the DOM document. This is a non-standard property. */ this.page = new (0, _pointMjs.Point)();
        this.NONE = 0;
        this.CAPTURING_PHASE = 1;
        this.AT_TARGET = 2;
        this.BUBBLING_PHASE = 3;
        this.manager = manager;
    }
    /** @readonly */ get layerX() {
        return this.layer.x;
    }
    /** @readonly */ get layerY() {
        return this.layer.y;
    }
    /** @readonly */ get pageX() {
        return this.page.x;
    }
    /** @readonly */ get pageY() {
        return this.page.y;
    }
    /**
   * Fallback for the deprecated @code{InteractionEvent.data}.
   * @deprecated since 7.0.0
   */ get data() {
        return this;
    }
    /** The propagation path for this event. Alias for {@link EventBoundary.propagationPath}. */ composedPath() {
        if (this.manager && (!this.path || this.path[this.path.length - 1] !== this.target)) this.path = this.target ? this.manager.propagationPath(this.target) : [];
        return this.path;
    }
    /**
   * Unimplemented method included for implementing the DOM interface {@code Event}. It will throw an {@code Error}.
   * @deprecated
   * @param _type
   * @param _bubbles
   * @param _cancelable
   */ initEvent(_type, _bubbles, _cancelable) {
        throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
    }
    /**
   * Unimplemented method included for implementing the DOM interface {@code UIEvent}. It will throw an {@code Error}.
   * @deprecated
   * @param _typeArg
   * @param _bubblesArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   */ initUIEvent(_typeArg, _bubblesArg, _cancelableArg, _viewArg, _detailArg) {
        throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
    }
    /** Prevent default behavior of PixiJS and the user agent. */ preventDefault() {
        if (this.nativeEvent instanceof Event && this.nativeEvent.cancelable) this.nativeEvent.preventDefault();
        this.defaultPrevented = true;
    }
    /**
   * Stop this event from propagating to any addition listeners, including on the
   * {@link FederatedEventTarget.currentTarget currentTarget} and also the following
   * event targets on the propagation path.
   */ stopImmediatePropagation() {
        this.propagationImmediatelyStopped = true;
    }
    /**
   * Stop this event from propagating to the next {@link FederatedEventTarget}. The rest of the listeners
   * on the {@link FederatedEventTarget.currentTarget currentTarget} will still be notified.
   */ stopPropagation() {
        this.propagationStopped = true;
    }
}

},{"../maths/point/Point.mjs":"dkxvR","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"klswZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMobile", ()=>isMobile);
var _ismobilejs = require("ismobilejs");
var _ismobilejsDefault = parcelHelpers.interopDefault(_ismobilejs);
"use strict";
const isMobileCall = (0, _ismobilejsDefault.default).default ?? (0, _ismobilejsDefault.default);
const isMobile = isMobileCall(globalThis.navigator);

},{"ismobilejs":"gyya7","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gyya7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _isMobileDefault.default));
var _isMobile = require("./isMobile");
parcelHelpers.exportAll(_isMobile, exports);
var _isMobileDefault = parcelHelpers.interopDefault(_isMobile);

},{"./isMobile":"6LRPg","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6LRPg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isMobile);
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function(navigator1) {
    return typeof navigator1 !== "undefined" && navigator1.platform === "MacIntel" && typeof navigator1.maxTouchPoints === "number" && navigator1.maxTouchPoints > 1 && typeof MSStream === "undefined";
};
function createMatch(userAgent) {
    return function(regex) {
        return regex.test(userAgent);
    };
}
function isMobile(param) {
    var nav = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== "undefined") nav = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    };
    else if (typeof param === "string") nav.userAgent = param;
    else if (param && param.userAgent) nav = {
        userAgent: param.userAgent,
        platform: param.platform,
        maxTouchPoints: param.maxTouchPoints || 0
    };
    var userAgent = nav.userAgent;
    var tmp = userAgent.split("[FBAN");
    if (typeof tmp[1] !== "undefined") userAgent = tmp[0];
    tmp = userAgent.split("Twitter");
    if (typeof tmp[1] !== "undefined") userAgent = tmp[0];
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) && (match(appleTablet) || isAppleTabletOnIos13(nav)) && !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) || match(appleIpod) || match(appleTablet) || match(appleUniversal) || isAppleTabletOnIos13(nav)) && !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: !match(windowsPhone) && match(amazonPhone) || !match(windowsPhone) && match(androidPhone),
            tablet: !match(windowsPhone) && !match(amazonPhone) && !match(androidPhone) && (match(amazonTablet) || match(androidTablet)),
            device: !match(windowsPhone) && (match(amazonPhone) || match(amazonTablet) || match(androidPhone) || match(androidTablet)) || match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) || match(otherBlackBerry10) || match(otherOpera) || match(otherFirefox) || match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;
    result.phone = result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"frfL1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accessibilityTarget", ()=>accessibilityTarget);
"use strict";
const accessibilityTarget = {
    /**
   * Flag for if the object is accessible. If true AccessibilityManager will overlay a
   * shadow div with attributes set
   * @member {boolean}
   * @memberof scene.Container#
   */ accessible: false,
    /**
   * Sets the title attribute of the shadow div
   * If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]'
   * @member {string}
   * @memberof scene.Container#
   */ accessibleTitle: null,
    /**
   * Sets the aria-label attribute of the shadow div
   * @member {string}
   * @memberof scene.Container#
   */ accessibleHint: null,
    /**
   * @member {number}
   * @memberof scene.Container#
   * @todo Needs docs.
   */ tabIndex: 0,
    /**
   * @member {boolean}
   * @memberof scene.Container#
   * @private
   */ _accessibleActive: false,
    /**
   * @memberof scene.Container#
   * @private
   */ _accessibleDiv: null,
    /**
   * Specify the type of div the accessible layer is. Screen readers treat the element differently
   * depending on this type. Defaults to button.
   * @member {string}
   * @memberof scene.Container#
   * @default 'button'
   */ accessibleType: "button",
    /**
   * Specify the pointer-events the accessible div will use
   * Defaults to auto.
   * @type {PointerEvents}
   * @memberof scene.Container#
   * @default 'auto'
   */ accessiblePointerEvents: "auto",
    /**
   * Setting to false will prevent any children inside this container to
   * be accessible. Defaults to true.
   * @member {boolean}
   * @memberof scene.Container#
   * @default true
   */ accessibleChildren: true,
    /**
   * @member {number}
   * @memberof scene.Container#
   * @private
   */ _renderId: -1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8mqyc":[function(require,module,exports) {
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _containerMjs = require("../scene/container/Container.mjs");
var _eventSystemMjs = require("./EventSystem.mjs");
var _federatedEventTargetMjs = require("./FederatedEventTarget.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _eventSystemMjs.EventSystem));
(0, _containerMjs.Container).mixin((0, _federatedEventTargetMjs.FederatedContainer));

},{"../extensions/Extensions.mjs":"c8doH","../scene/container/Container.mjs":"6EDs5","./EventSystem.mjs":"RIEDb","./FederatedEventTarget.mjs":"kaBPi"}],"RIEDb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventSystem", ()=>EventSystem);
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _eventBoundaryMjs = require("./EventBoundary.mjs");
var _eventTickerMjs = require("./EventTicker.mjs");
var _federatedPointerEventMjs = require("./FederatedPointerEvent.mjs");
var _federatedWheelEventMjs = require("./FederatedWheelEvent.mjs");
"use strict";
const MOUSE_POINTER_ID = 1;
const TOUCH_TO_POINTER = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel"
};
const _EventSystem = class _EventSystem {
    /**
   * @param {Renderer} renderer
   */ constructor(renderer){
        /** Does the device support touch events https://www.w3.org/TR/touch-events/ */ this.supportsTouchEvents = "ontouchstart" in globalThis;
        /** Does the device support pointer events https://www.w3.org/Submission/pointer-events/ */ this.supportsPointerEvents = !!globalThis.PointerEvent;
        /**
     * The DOM element to which the root event listeners are bound. This is automatically set to
     * the renderer's {@link Renderer#view view}.
     */ this.domElement = null;
        /** The resolution used to convert between the DOM client space into world space. */ this.resolution = 1;
        this.renderer = renderer;
        this.rootBoundary = new (0, _eventBoundaryMjs.EventBoundary)(null);
        (0, _eventTickerMjs.EventsTicker).init(this);
        this.autoPreventDefault = true;
        this._eventsAdded = false;
        this._rootPointerEvent = new (0, _federatedPointerEventMjs.FederatedPointerEvent)(null);
        this._rootWheelEvent = new (0, _federatedWheelEventMjs.FederatedWheelEvent)(null);
        this.cursorStyles = {
            default: "inherit",
            pointer: "pointer"
        };
        this.features = new Proxy({
            ..._EventSystem.defaultEventFeatures
        }, {
            set: (target, key, value)=>{
                if (key === "globalMove") this.rootBoundary.enableGlobalMoveEvents = value;
                target[key] = value;
                return true;
            }
        });
        this._onPointerDown = this._onPointerDown.bind(this);
        this._onPointerMove = this._onPointerMove.bind(this);
        this._onPointerUp = this._onPointerUp.bind(this);
        this._onPointerOverOut = this._onPointerOverOut.bind(this);
        this.onWheel = this.onWheel.bind(this);
    }
    /**
   * The default interaction mode for all display objects.
   * @see Container.eventMode
   * @type {EventMode}
   * @readonly
   * @since 7.2.0
   */ static get defaultEventMode() {
        return this._defaultEventMode;
    }
    /**
   * Runner init called, view is available at this point.
   * @ignore
   */ init(options) {
        const { canvas, resolution } = this.renderer;
        this.setTargetElement(canvas);
        this.resolution = resolution;
        _EventSystem._defaultEventMode = options.eventMode ?? "passive";
        Object.assign(this.features, options.eventFeatures ?? {});
        this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
    }
    /**
   * Handle changing resolution.
   * @ignore
   */ resolutionChange(resolution) {
        this.resolution = resolution;
    }
    /** Destroys all event listeners and detaches the renderer. */ destroy() {
        this.setTargetElement(null);
        this.renderer = null;
        this._currentCursor = null;
    }
    /**
   * Sets the current cursor mode, handling any callbacks or CSS style changes.
   * @param mode - cursor mode, a key from the cursorStyles dictionary
   */ setCursor(mode) {
        mode = mode || "default";
        let applyStyles = true;
        if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas) applyStyles = false;
        if (this._currentCursor === mode) return;
        this._currentCursor = mode;
        const style = this.cursorStyles[mode];
        if (style) switch(typeof style){
            case "string":
                if (applyStyles) this.domElement.style.cursor = style;
                break;
            case "function":
                style(mode);
                break;
            case "object":
                if (applyStyles) Object.assign(this.domElement.style, style);
                break;
        }
        else if (applyStyles && typeof mode === "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode)) this.domElement.style.cursor = mode;
    }
    /**
   * The global pointer event.
   * Useful for getting the pointer position without listening to events.
   * @since 7.2.0
   */ get pointer() {
        return this._rootPointerEvent;
    }
    /**
   * Event handler for pointer down events on {@link EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */ _onPointerDown(nativeEvent) {
        if (!this.features.click) return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        const events = this._normalizeToPointerData(nativeEvent);
        if (this.autoPreventDefault && events[0].isNormalized) {
            const cancelable = nativeEvent.cancelable || !("cancelable" in nativeEvent);
            if (cancelable) nativeEvent.preventDefault();
        }
        for(let i = 0, j = events.length; i < j; i++){
            const nativeEvent2 = events[i];
            const federatedEvent = this._bootstrapEvent(this._rootPointerEvent, nativeEvent2);
            this.rootBoundary.mapEvent(federatedEvent);
        }
        this.setCursor(this.rootBoundary.cursor);
    }
    /**
   * Event handler for pointer move events on on {@link EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch events.
   */ _onPointerMove(nativeEvent) {
        if (!this.features.move) return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        (0, _eventTickerMjs.EventsTicker).pointerMoved();
        const normalizedEvents = this._normalizeToPointerData(nativeEvent);
        for(let i = 0, j = normalizedEvents.length; i < j; i++){
            const event = this._bootstrapEvent(this._rootPointerEvent, normalizedEvents[i]);
            this.rootBoundary.mapEvent(event);
        }
        this.setCursor(this.rootBoundary.cursor);
    }
    /**
   * Event handler for pointer up events on {@link EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */ _onPointerUp(nativeEvent) {
        if (!this.features.click) return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        let target = nativeEvent.target;
        if (nativeEvent.composedPath && nativeEvent.composedPath().length > 0) target = nativeEvent.composedPath()[0];
        const outside = target !== this.domElement ? "outside" : "";
        const normalizedEvents = this._normalizeToPointerData(nativeEvent);
        for(let i = 0, j = normalizedEvents.length; i < j; i++){
            const event = this._bootstrapEvent(this._rootPointerEvent, normalizedEvents[i]);
            event.type += outside;
            this.rootBoundary.mapEvent(event);
        }
        this.setCursor(this.rootBoundary.cursor);
    }
    /**
   * Event handler for pointer over & out events on {@link EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */ _onPointerOverOut(nativeEvent) {
        if (!this.features.click) return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        const normalizedEvents = this._normalizeToPointerData(nativeEvent);
        for(let i = 0, j = normalizedEvents.length; i < j; i++){
            const event = this._bootstrapEvent(this._rootPointerEvent, normalizedEvents[i]);
            this.rootBoundary.mapEvent(event);
        }
        this.setCursor(this.rootBoundary.cursor);
    }
    /**
   * Passive handler for `wheel` events on {@link EventSystem.domElement this.domElement}.
   * @param nativeEvent - The native wheel event.
   */ onWheel(nativeEvent) {
        if (!this.features.wheel) return;
        const wheelEvent = this.normalizeWheelEvent(nativeEvent);
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        this.rootBoundary.mapEvent(wheelEvent);
    }
    /**
   * Sets the {@link EventSystem#domElement domElement} and binds event listeners.
   *
   * To deregister the current DOM element without setting a new one, pass {@code null}.
   * @param element - The new DOM element.
   */ setTargetElement(element) {
        this._removeEvents();
        this.domElement = element;
        (0, _eventTickerMjs.EventsTicker).domElement = element;
        this._addEvents();
    }
    /** Register event listeners on {@link Renderer#domElement this.domElement}. */ _addEvents() {
        if (this._eventsAdded || !this.domElement) return;
        (0, _eventTickerMjs.EventsTicker).addTickerListener();
        const style = this.domElement.style;
        if (style) {
            if (globalThis.navigator.msPointerEnabled) {
                style.msContentZooming = "none";
                style.msTouchAction = "none";
            } else if (this.supportsPointerEvents) style.touchAction = "none";
        }
        if (this.supportsPointerEvents) {
            globalThis.document.addEventListener("pointermove", this._onPointerMove, true);
            this.domElement.addEventListener("pointerdown", this._onPointerDown, true);
            this.domElement.addEventListener("pointerleave", this._onPointerOverOut, true);
            this.domElement.addEventListener("pointerover", this._onPointerOverOut, true);
            globalThis.addEventListener("pointerup", this._onPointerUp, true);
        } else {
            globalThis.document.addEventListener("mousemove", this._onPointerMove, true);
            this.domElement.addEventListener("mousedown", this._onPointerDown, true);
            this.domElement.addEventListener("mouseout", this._onPointerOverOut, true);
            this.domElement.addEventListener("mouseover", this._onPointerOverOut, true);
            globalThis.addEventListener("mouseup", this._onPointerUp, true);
            if (this.supportsTouchEvents) {
                this.domElement.addEventListener("touchstart", this._onPointerDown, true);
                this.domElement.addEventListener("touchend", this._onPointerUp, true);
                this.domElement.addEventListener("touchmove", this._onPointerMove, true);
            }
        }
        this.domElement.addEventListener("wheel", this.onWheel, {
            passive: true,
            capture: true
        });
        this._eventsAdded = true;
    }
    /** Unregister event listeners on {@link EventSystem#domElement this.domElement}. */ _removeEvents() {
        if (!this._eventsAdded || !this.domElement) return;
        (0, _eventTickerMjs.EventsTicker).removeTickerListener();
        const style = this.domElement.style;
        if (style) {
            if (globalThis.navigator.msPointerEnabled) {
                style.msContentZooming = "";
                style.msTouchAction = "";
            } else if (this.supportsPointerEvents) style.touchAction = "";
        }
        if (this.supportsPointerEvents) {
            globalThis.document.removeEventListener("pointermove", this._onPointerMove, true);
            this.domElement.removeEventListener("pointerdown", this._onPointerDown, true);
            this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, true);
            this.domElement.removeEventListener("pointerover", this._onPointerOverOut, true);
            globalThis.removeEventListener("pointerup", this._onPointerUp, true);
        } else {
            globalThis.document.removeEventListener("mousemove", this._onPointerMove, true);
            this.domElement.removeEventListener("mousedown", this._onPointerDown, true);
            this.domElement.removeEventListener("mouseout", this._onPointerOverOut, true);
            this.domElement.removeEventListener("mouseover", this._onPointerOverOut, true);
            globalThis.removeEventListener("mouseup", this._onPointerUp, true);
            if (this.supportsTouchEvents) {
                this.domElement.removeEventListener("touchstart", this._onPointerDown, true);
                this.domElement.removeEventListener("touchend", this._onPointerUp, true);
                this.domElement.removeEventListener("touchmove", this._onPointerMove, true);
            }
        }
        this.domElement.removeEventListener("wheel", this.onWheel, true);
        this.domElement = null;
        this._eventsAdded = false;
    }
    /**
   * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
   * resulting value is stored in the point. This takes into account the fact that the DOM
   * element could be scaled and positioned anywhere on the screen.
   * @param  {PointData} point - the point that the result will be stored in
   * @param  {number} x - the x coord of the position to map
   * @param  {number} y - the y coord of the position to map
   */ mapPositionToPoint(point, x, y) {
        const rect = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
            x: 0,
            y: 0,
            width: this.domElement.width,
            height: this.domElement.height,
            left: 0,
            top: 0
        };
        const resolutionMultiplier = 1 / this.resolution;
        point.x = (x - rect.left) * (this.domElement.width / rect.width) * resolutionMultiplier;
        point.y = (y - rect.top) * (this.domElement.height / rect.height) * resolutionMultiplier;
    }
    /**
   * Ensures that the original event object contains all data that a regular pointer event would have
   * @param event - The original event data from a touch or mouse event
   * @returns An array containing a single normalized pointer event, in the case of a pointer
   *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
   */ _normalizeToPointerData(event) {
        const normalizedEvents = [];
        if (this.supportsTouchEvents && event instanceof TouchEvent) for(let i = 0, li = event.changedTouches.length; i < li; i++){
            const touch = event.changedTouches[i];
            if (typeof touch.button === "undefined") touch.button = 0;
            if (typeof touch.buttons === "undefined") touch.buttons = 1;
            if (typeof touch.isPrimary === "undefined") touch.isPrimary = event.touches.length === 1 && event.type === "touchstart";
            if (typeof touch.width === "undefined") touch.width = touch.radiusX || 1;
            if (typeof touch.height === "undefined") touch.height = touch.radiusY || 1;
            if (typeof touch.tiltX === "undefined") touch.tiltX = 0;
            if (typeof touch.tiltY === "undefined") touch.tiltY = 0;
            if (typeof touch.pointerType === "undefined") touch.pointerType = "touch";
            if (typeof touch.pointerId === "undefined") touch.pointerId = touch.identifier || 0;
            if (typeof touch.pressure === "undefined") touch.pressure = touch.force || 0.5;
            if (typeof touch.twist === "undefined") touch.twist = 0;
            if (typeof touch.tangentialPressure === "undefined") touch.tangentialPressure = 0;
            if (typeof touch.layerX === "undefined") touch.layerX = touch.offsetX = touch.clientX;
            if (typeof touch.layerY === "undefined") touch.layerY = touch.offsetY = touch.clientY;
            touch.isNormalized = true;
            touch.type = event.type;
            normalizedEvents.push(touch);
        }
        else if (!globalThis.MouseEvent || event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof globalThis.PointerEvent))) {
            const tempEvent = event;
            if (typeof tempEvent.isPrimary === "undefined") tempEvent.isPrimary = true;
            if (typeof tempEvent.width === "undefined") tempEvent.width = 1;
            if (typeof tempEvent.height === "undefined") tempEvent.height = 1;
            if (typeof tempEvent.tiltX === "undefined") tempEvent.tiltX = 0;
            if (typeof tempEvent.tiltY === "undefined") tempEvent.tiltY = 0;
            if (typeof tempEvent.pointerType === "undefined") tempEvent.pointerType = "mouse";
            if (typeof tempEvent.pointerId === "undefined") tempEvent.pointerId = MOUSE_POINTER_ID;
            if (typeof tempEvent.pressure === "undefined") tempEvent.pressure = 0.5;
            if (typeof tempEvent.twist === "undefined") tempEvent.twist = 0;
            if (typeof tempEvent.tangentialPressure === "undefined") tempEvent.tangentialPressure = 0;
            tempEvent.isNormalized = true;
            normalizedEvents.push(tempEvent);
        } else normalizedEvents.push(event);
        return normalizedEvents;
    }
    /**
   * Normalizes the native {@link https://w3c.github.io/uievents/#interface-wheelevent WheelEvent}.
   *
   * The returned {@link FederatedWheelEvent} is a shared instance. It will not persist across
   * multiple native wheel events.
   * @param nativeEvent - The native wheel event that occurred on the canvas.
   * @returns A federated wheel event.
   */ normalizeWheelEvent(nativeEvent) {
        const event = this._rootWheelEvent;
        this._transferMouseData(event, nativeEvent);
        event.deltaX = nativeEvent.deltaX;
        event.deltaY = nativeEvent.deltaY;
        event.deltaZ = nativeEvent.deltaZ;
        event.deltaMode = nativeEvent.deltaMode;
        this.mapPositionToPoint(event.screen, nativeEvent.clientX, nativeEvent.clientY);
        event.global.copyFrom(event.screen);
        event.offset.copyFrom(event.screen);
        event.nativeEvent = nativeEvent;
        event.type = nativeEvent.type;
        return event;
    }
    /**
   * Normalizes the `nativeEvent` into a federateed {@link FederatedPointerEvent}.
   * @param event
   * @param nativeEvent
   */ _bootstrapEvent(event, nativeEvent) {
        event.originalEvent = null;
        event.nativeEvent = nativeEvent;
        event.pointerId = nativeEvent.pointerId;
        event.width = nativeEvent.width;
        event.height = nativeEvent.height;
        event.isPrimary = nativeEvent.isPrimary;
        event.pointerType = nativeEvent.pointerType;
        event.pressure = nativeEvent.pressure;
        event.tangentialPressure = nativeEvent.tangentialPressure;
        event.tiltX = nativeEvent.tiltX;
        event.tiltY = nativeEvent.tiltY;
        event.twist = nativeEvent.twist;
        this._transferMouseData(event, nativeEvent);
        this.mapPositionToPoint(event.screen, nativeEvent.clientX, nativeEvent.clientY);
        event.global.copyFrom(event.screen);
        event.offset.copyFrom(event.screen);
        event.isTrusted = nativeEvent.isTrusted;
        if (event.type === "pointerleave") event.type = "pointerout";
        if (event.type.startsWith("mouse")) event.type = event.type.replace("mouse", "pointer");
        if (event.type.startsWith("touch")) event.type = TOUCH_TO_POINTER[event.type] || event.type;
        return event;
    }
    /**
   * Transfers base & mouse event data from the {@code nativeEvent} to the federated event.
   * @param event
   * @param nativeEvent
   */ _transferMouseData(event, nativeEvent) {
        event.isTrusted = nativeEvent.isTrusted;
        event.srcElement = nativeEvent.srcElement;
        event.timeStamp = performance.now();
        event.type = nativeEvent.type;
        event.altKey = nativeEvent.altKey;
        event.button = nativeEvent.button;
        event.buttons = nativeEvent.buttons;
        event.client.x = nativeEvent.clientX;
        event.client.y = nativeEvent.clientY;
        event.ctrlKey = nativeEvent.ctrlKey;
        event.metaKey = nativeEvent.metaKey;
        event.movement.x = nativeEvent.movementX;
        event.movement.y = nativeEvent.movementY;
        event.page.x = nativeEvent.pageX;
        event.page.y = nativeEvent.pageY;
        event.relatedTarget = null;
        event.shiftKey = nativeEvent.shiftKey;
    }
};
/** @ignore */ _EventSystem.extension = {
    name: "events",
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLSystem,
        (0, _extensionsMjs.ExtensionType).CanvasSystem,
        (0, _extensionsMjs.ExtensionType).WebGPUSystem
    ],
    priority: -1
};
/**
 * The event features that are enabled by the EventSystem
 * (included in the **pixi.js** and **pixi.js-legacy** bundle), otherwise it will be ignored.
 * @since 7.2.0
 */ _EventSystem.defaultEventFeatures = {
    /** Enables pointer events associated with pointer movement. */ move: true,
    /** Enables global pointer move events. */ globalMove: true,
    /** Enables pointer events associated with clicking. */ click: true,
    /** Enables wheel events. */ wheel: true
};
let EventSystem = _EventSystem;

},{"../extensions/Extensions.mjs":"c8doH","./EventBoundary.mjs":"yTb6p","./EventTicker.mjs":"70zjp","./FederatedPointerEvent.mjs":"adjDb","./FederatedWheelEvent.mjs":"lSV17","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"yTb6p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventBoundary", ()=>EventBoundary);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _pointMjs = require("../maths/point/Point.mjs");
var _warnMjs = require("../utils/logging/warn.mjs");
var _eventTickerMjs = require("./EventTicker.mjs");
var _federatedMouseEventMjs = require("./FederatedMouseEvent.mjs");
var _federatedPointerEventMjs = require("./FederatedPointerEvent.mjs");
var _federatedWheelEventMjs = require("./FederatedWheelEvent.mjs");
"use strict";
const PROPAGATION_LIMIT = 2048;
const tempHitLocation = new (0, _pointMjs.Point)();
const tempLocalMapping = new (0, _pointMjs.Point)();
class EventBoundary {
    /**
   * @param rootTarget - The holder of the event boundary.
   */ constructor(rootTarget){
        /**
     * Emits events after they were dispatched into the scene graph.
     *
     * This can be used for global events listening, regardless of the scene graph being used. It should
     * not be used by interactive libraries for normal use.
     *
     * Special events that do not bubble all the way to the root target are not emitted from here,
     * e.g. pointerenter, pointerleave, click.
     */ this.dispatch = new (0, _eventemitter3Default.default)();
        /**
     * This flag would emit `pointermove`, `touchmove`, and `mousemove` events on all Containers.
     *
     * The `moveOnAll` semantics mirror those of earlier versions of PixiJS. This was disabled in favor of
     * the Pointer Event API's approach.
     */ this.moveOnAll = false;
        /** Enables the global move events. `globalpointermove`, `globaltouchmove`, and `globalmousemove` */ this.enableGlobalMoveEvents = true;
        /**
     * State object for mapping methods.
     * @see EventBoundary#trackingData
     */ this.mappingState = {
            trackingData: {}
        };
        /**
     * The event pool maps event constructors to an free pool of instances of those specific events.
     * @see EventBoundary#allocateEvent
     * @see EventBoundary#freeEvent
     */ this.eventPool = /* @__PURE__ */ new Map();
        /** Every interactive element gathered from the scene. Only used in `pointermove` */ this._allInteractiveElements = [];
        /** Every element that passed the hit test. Only used in `pointermove` */ this._hitElements = [];
        /** Whether or not to collect all the interactive elements from the scene. Enabled in `pointermove` */ this._isPointerMoveEvent = false;
        this.rootTarget = rootTarget;
        this.hitPruneFn = this.hitPruneFn.bind(this);
        this.hitTestFn = this.hitTestFn.bind(this);
        this.mapPointerDown = this.mapPointerDown.bind(this);
        this.mapPointerMove = this.mapPointerMove.bind(this);
        this.mapPointerOut = this.mapPointerOut.bind(this);
        this.mapPointerOver = this.mapPointerOver.bind(this);
        this.mapPointerUp = this.mapPointerUp.bind(this);
        this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this);
        this.mapWheel = this.mapWheel.bind(this);
        this.mappingTable = {};
        this.addEventMapping("pointerdown", this.mapPointerDown);
        this.addEventMapping("pointermove", this.mapPointerMove);
        this.addEventMapping("pointerout", this.mapPointerOut);
        this.addEventMapping("pointerleave", this.mapPointerOut);
        this.addEventMapping("pointerover", this.mapPointerOver);
        this.addEventMapping("pointerup", this.mapPointerUp);
        this.addEventMapping("pointerupoutside", this.mapPointerUpOutside);
        this.addEventMapping("wheel", this.mapWheel);
    }
    /**
   * Adds an event mapping for the event `type` handled by `fn`.
   *
   * Event mappings can be used to implement additional or custom events. They take an event
   * coming from the upstream scene (or directly from the {@link EventSystem}) and dispatch new downstream events
   * generally trickling down and bubbling up to {@link EventBoundary.rootTarget this.rootTarget}.
   *
   * To modify the semantics of existing events, the built-in mapping methods of EventBoundary should be overridden
   * instead.
   * @param type - The type of upstream event to map.
   * @param fn - The mapping method. The context of this function must be bound manually, if desired.
   */ addEventMapping(type, fn) {
        if (!this.mappingTable[type]) this.mappingTable[type] = [];
        this.mappingTable[type].push({
            fn,
            priority: 0
        });
        this.mappingTable[type].sort((a, b)=>a.priority - b.priority);
    }
    /**
   * Dispatches the given event
   * @param e - The event to dispatch.
   * @param type - The type of event to dispatch. Defaults to `e.type`.
   */ dispatchEvent(e, type) {
        e.propagationStopped = false;
        e.propagationImmediatelyStopped = false;
        this.propagate(e, type);
        this.dispatch.emit(type || e.type, e);
    }
    /**
   * Maps the given upstream event through the event boundary and propagates it downstream.
   * @param e - The event to map.
   */ mapEvent(e) {
        if (!this.rootTarget) return;
        const mappers = this.mappingTable[e.type];
        if (mappers) for(let i = 0, j = mappers.length; i < j; i++)mappers[i].fn(e);
        else (0, _warnMjs.warn)(`[EventBoundary]: Event mapping not defined for ${e.type}`);
    }
    /**
   * Finds the Container that is the target of a event at the given coordinates.
   *
   * The passed (x,y) coordinates are in the world space above this event boundary.
   * @param x - The x coordinate of the event.
   * @param y - The y coordinate of the event.
   */ hitTest(x, y) {
        (0, _eventTickerMjs.EventsTicker).pauseUpdate = true;
        const useMove = this._isPointerMoveEvent && this.enableGlobalMoveEvents;
        const fn = useMove ? "hitTestMoveRecursive" : "hitTestRecursive";
        const invertedPath = this[fn](this.rootTarget, this.rootTarget.eventMode, tempHitLocation.set(x, y), this.hitTestFn, this.hitPruneFn);
        return invertedPath && invertedPath[0];
    }
    /**
   * Propagate the passed event from from {@link EventBoundary.rootTarget this.rootTarget} to its
   * target {@code e.target}.
   * @param e - The event to propagate.
   * @param type - The type of event to propagate. Defaults to `e.type`.
   */ propagate(e, type) {
        if (!e.target) return;
        const composedPath = e.composedPath();
        e.eventPhase = e.CAPTURING_PHASE;
        for(let i = 0, j = composedPath.length - 1; i < j; i++){
            e.currentTarget = composedPath[i];
            this.notifyTarget(e, type);
            if (e.propagationStopped || e.propagationImmediatelyStopped) return;
        }
        e.eventPhase = e.AT_TARGET;
        e.currentTarget = e.target;
        this.notifyTarget(e, type);
        if (e.propagationStopped || e.propagationImmediatelyStopped) return;
        e.eventPhase = e.BUBBLING_PHASE;
        for(let i = composedPath.length - 2; i >= 0; i--){
            e.currentTarget = composedPath[i];
            this.notifyTarget(e, type);
            if (e.propagationStopped || e.propagationImmediatelyStopped) return;
        }
    }
    /**
   * Emits the event {@code e} to all interactive containers. The event is propagated in the bubbling phase always.
   *
   * This is used in the `globalpointermove` event.
   * @param e - The emitted event.
   * @param type - The listeners to notify.
   * @param targets - The targets to notify.
   */ all(e, type, targets = this._allInteractiveElements) {
        if (targets.length === 0) return;
        e.eventPhase = e.BUBBLING_PHASE;
        const events = Array.isArray(type) ? type : [
            type
        ];
        for(let i = targets.length - 1; i >= 0; i--)events.forEach((event)=>{
            e.currentTarget = targets[i];
            this.notifyTarget(e, event);
        });
    }
    /**
   * Finds the propagation path from {@link EventBoundary.rootTarget rootTarget} to the passed
   * {@code target}. The last element in the path is {@code target}.
   * @param target - The target to find the propagation path to.
   */ propagationPath(target) {
        const propagationPath = [
            target
        ];
        for(let i = 0; i < PROPAGATION_LIMIT && target !== this.rootTarget && target.parent; i++){
            if (!target.parent) throw new Error("Cannot find propagation path to disconnected target");
            propagationPath.push(target.parent);
            target = target.parent;
        }
        propagationPath.reverse();
        return propagationPath;
    }
    hitTestMoveRecursive(currentTarget, eventMode, location, testFn, pruneFn, ignore = false) {
        let shouldReturn = false;
        if (this._interactivePrune(currentTarget)) return null;
        if (currentTarget.eventMode === "dynamic" || eventMode === "dynamic") (0, _eventTickerMjs.EventsTicker).pauseUpdate = false;
        if (currentTarget.interactiveChildren && currentTarget.children) {
            const children = currentTarget.children;
            for(let i = children.length - 1; i >= 0; i--){
                const child = children[i];
                const nestedHit = this.hitTestMoveRecursive(child, this._isInteractive(eventMode) ? eventMode : child.eventMode, location, testFn, pruneFn, ignore || pruneFn(currentTarget, location));
                if (nestedHit) {
                    if (nestedHit.length > 0 && !nestedHit[nestedHit.length - 1].parent) continue;
                    const isInteractive = currentTarget.isInteractive();
                    if (nestedHit.length > 0 || isInteractive) {
                        if (isInteractive) this._allInteractiveElements.push(currentTarget);
                        nestedHit.push(currentTarget);
                    }
                    if (this._hitElements.length === 0) this._hitElements = nestedHit;
                    shouldReturn = true;
                }
            }
        }
        const isInteractiveMode = this._isInteractive(eventMode);
        const isInteractiveTarget = currentTarget.isInteractive();
        if (isInteractiveTarget && isInteractiveTarget) this._allInteractiveElements.push(currentTarget);
        if (ignore || this._hitElements.length > 0) return null;
        if (shouldReturn) return this._hitElements;
        if (isInteractiveMode && !pruneFn(currentTarget, location) && testFn(currentTarget, location)) return isInteractiveTarget ? [
            currentTarget
        ] : [];
        return null;
    }
    /**
   * Recursive implementation for {@link EventBoundary.hitTest hitTest}.
   * @param currentTarget - The Container that is to be hit tested.
   * @param eventMode - The event mode for the `currentTarget` or one of its parents.
   * @param location - The location that is being tested for overlap.
   * @param testFn - Callback that determines whether the target passes hit testing. This callback
   *  can assume that `pruneFn` failed to prune the container.
   * @param pruneFn - Callback that determiness whether the target and all of its children
   *  cannot pass the hit test. It is used as a preliminary optimization to prune entire subtrees
   *  of the scene graph.
   * @returns An array holding the hit testing target and all its ancestors in order. The first element
   *  is the target itself and the last is {@link EventBoundary.rootTarget rootTarget}. This is the opposite
   *  order w.r.t. the propagation path. If no hit testing target is found, null is returned.
   */ hitTestRecursive(currentTarget, eventMode, location, testFn, pruneFn) {
        if (this._interactivePrune(currentTarget) || pruneFn(currentTarget, location)) return null;
        if (currentTarget.eventMode === "dynamic" || eventMode === "dynamic") (0, _eventTickerMjs.EventsTicker).pauseUpdate = false;
        if (currentTarget.interactiveChildren && currentTarget.children) {
            const children = currentTarget.children;
            const relativeLocation = location;
            for(let i = children.length - 1; i >= 0; i--){
                const child = children[i];
                const nestedHit = this.hitTestRecursive(child, this._isInteractive(eventMode) ? eventMode : child.eventMode, relativeLocation, testFn, pruneFn);
                if (nestedHit) {
                    if (nestedHit.length > 0 && !nestedHit[nestedHit.length - 1].parent) continue;
                    const isInteractive = currentTarget.isInteractive();
                    if (nestedHit.length > 0 || isInteractive) nestedHit.push(currentTarget);
                    return nestedHit;
                }
            }
        }
        const isInteractiveMode = this._isInteractive(eventMode);
        const isInteractiveTarget = currentTarget.isInteractive();
        if (isInteractiveMode && testFn(currentTarget, location)) return isInteractiveTarget ? [
            currentTarget
        ] : [];
        return null;
    }
    _isInteractive(int) {
        return int === "static" || int === "dynamic";
    }
    _interactivePrune(container) {
        if (!container || !container.visible || !container.renderable) return true;
        if (container.eventMode === "none") return true;
        if (container.eventMode === "passive" && !container.interactiveChildren) return true;
        return false;
    }
    /**
   * Checks whether the container or any of its children cannot pass the hit test at all.
   *
   * {@link EventBoundary}'s implementation uses the {@link Container.hitArea hitArea}
   * and {@link Container._mask} for pruning.
   * @param container - The container to prune.
   * @param location - The location to test for overlap.
   */ hitPruneFn(container, location) {
        if (container.hitArea) {
            container.worldTransform.applyInverse(location, tempLocalMapping);
            if (!container.hitArea.contains(tempLocalMapping.x, tempLocalMapping.y)) return true;
        }
        if (container.effects && container.effects.length) for(let i = 0; i < container.effects.length; i++){
            const effect = container.effects[i];
            if (effect.containsPoint) {
                const effectContainsPoint = effect.containsPoint(location, this.hitTestFn);
                if (!effectContainsPoint) return true;
            }
        }
        return false;
    }
    /**
   * Checks whether the container passes hit testing for the given location.
   * @param container - The container to test.
   * @param location - The location to test for overlap.
   * @returns - Whether `container` passes hit testing for `location`.
   */ hitTestFn(container, location) {
        if (container.hitArea) return true;
        if (container?.containsPoint) {
            container.worldTransform.applyInverse(location, tempLocalMapping);
            return container.containsPoint(tempLocalMapping);
        }
        return false;
    }
    /**
   * Notify all the listeners to the event's `currentTarget`.
   *
   * If the `currentTarget` contains the property `on<type>`, then it is called here,
   * simulating the behavior from version 6.x and prior.
   * @param e - The event passed to the target.
   * @param type - The type of event to notify. Defaults to `e.type`.
   */ notifyTarget(e, type) {
        type = type ?? e.type;
        const handlerKey = `on${type}`;
        e.currentTarget[handlerKey]?.(e);
        const key = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${type}capture` : type;
        this._notifyListeners(e, key);
        if (e.eventPhase === e.AT_TARGET) this._notifyListeners(e, type);
    }
    /**
   * Maps the upstream `pointerdown` events to a downstream `pointerdown` event.
   *
   * `touchstart`, `rightdown`, `mousedown` events are also dispatched for specific pointer types.
   * @param from - The upstream `pointerdown` event.
   */ mapPointerDown(from) {
        if (!(from instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent))) {
            (0, _warnMjs.warn)("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
        }
        const e = this.createPointerEvent(from);
        this.dispatchEvent(e, "pointerdown");
        if (e.pointerType === "touch") this.dispatchEvent(e, "touchstart");
        else if (e.pointerType === "mouse" || e.pointerType === "pen") {
            const isRightButton = e.button === 2;
            this.dispatchEvent(e, isRightButton ? "rightdown" : "mousedown");
        }
        const trackingData = this.trackingData(from.pointerId);
        trackingData.pressTargetsByButton[from.button] = e.composedPath();
        this.freeEvent(e);
    }
    /**
   * Maps the upstream `pointermove` to downstream `pointerout`, `pointerover`, and `pointermove` events, in that order.
   *
   * The tracking data for the specific pointer has an updated `overTarget`. `mouseout`, `mouseover`,
   * `mousemove`, and `touchmove` events are fired as well for specific pointer types.
   * @param from - The upstream `pointermove` event.
   */ mapPointerMove(from) {
        if (!(from instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent))) {
            (0, _warnMjs.warn)("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
        }
        this._allInteractiveElements.length = 0;
        this._hitElements.length = 0;
        this._isPointerMoveEvent = true;
        const e = this.createPointerEvent(from);
        this._isPointerMoveEvent = false;
        const isMouse = e.pointerType === "mouse" || e.pointerType === "pen";
        const trackingData = this.trackingData(from.pointerId);
        const outTarget = this.findMountedTarget(trackingData.overTargets);
        if (trackingData.overTargets?.length > 0 && outTarget !== e.target) {
            const outType = from.type === "mousemove" ? "mouseout" : "pointerout";
            const outEvent = this.createPointerEvent(from, outType, outTarget);
            this.dispatchEvent(outEvent, "pointerout");
            if (isMouse) this.dispatchEvent(outEvent, "mouseout");
            if (!e.composedPath().includes(outTarget)) {
                const leaveEvent = this.createPointerEvent(from, "pointerleave", outTarget);
                leaveEvent.eventPhase = leaveEvent.AT_TARGET;
                while(leaveEvent.target && !e.composedPath().includes(leaveEvent.target)){
                    leaveEvent.currentTarget = leaveEvent.target;
                    this.notifyTarget(leaveEvent);
                    if (isMouse) this.notifyTarget(leaveEvent, "mouseleave");
                    leaveEvent.target = leaveEvent.target.parent;
                }
                this.freeEvent(leaveEvent);
            }
            this.freeEvent(outEvent);
        }
        if (outTarget !== e.target) {
            const overType = from.type === "mousemove" ? "mouseover" : "pointerover";
            const overEvent = this.clonePointerEvent(e, overType);
            this.dispatchEvent(overEvent, "pointerover");
            if (isMouse) this.dispatchEvent(overEvent, "mouseover");
            let overTargetAncestor = outTarget?.parent;
            while(overTargetAncestor && overTargetAncestor !== this.rootTarget.parent){
                if (overTargetAncestor === e.target) break;
                overTargetAncestor = overTargetAncestor.parent;
            }
            const didPointerEnter = !overTargetAncestor || overTargetAncestor === this.rootTarget.parent;
            if (didPointerEnter) {
                const enterEvent = this.clonePointerEvent(e, "pointerenter");
                enterEvent.eventPhase = enterEvent.AT_TARGET;
                while(enterEvent.target && enterEvent.target !== outTarget && enterEvent.target !== this.rootTarget.parent){
                    enterEvent.currentTarget = enterEvent.target;
                    this.notifyTarget(enterEvent);
                    if (isMouse) this.notifyTarget(enterEvent, "mouseenter");
                    enterEvent.target = enterEvent.target.parent;
                }
                this.freeEvent(enterEvent);
            }
            this.freeEvent(overEvent);
        }
        const allMethods = [];
        const allowGlobalPointerEvents = this.enableGlobalMoveEvents ?? true;
        this.moveOnAll ? allMethods.push("pointermove") : this.dispatchEvent(e, "pointermove");
        allowGlobalPointerEvents && allMethods.push("globalpointermove");
        if (e.pointerType === "touch") {
            this.moveOnAll ? allMethods.splice(1, 0, "touchmove") : this.dispatchEvent(e, "touchmove");
            allowGlobalPointerEvents && allMethods.push("globaltouchmove");
        }
        if (isMouse) {
            this.moveOnAll ? allMethods.splice(1, 0, "mousemove") : this.dispatchEvent(e, "mousemove");
            allowGlobalPointerEvents && allMethods.push("globalmousemove");
            this.cursor = e.target?.cursor;
        }
        if (allMethods.length > 0) this.all(e, allMethods);
        this._allInteractiveElements.length = 0;
        this._hitElements.length = 0;
        trackingData.overTargets = e.composedPath();
        this.freeEvent(e);
    }
    /**
   * Maps the upstream `pointerover` to downstream `pointerover` and `pointerenter` events, in that order.
   *
   * The tracking data for the specific pointer gets a new `overTarget`.
   * @param from - The upstream `pointerover` event.
   */ mapPointerOver(from) {
        if (!(from instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent))) {
            (0, _warnMjs.warn)("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
        }
        const trackingData = this.trackingData(from.pointerId);
        const e = this.createPointerEvent(from);
        const isMouse = e.pointerType === "mouse" || e.pointerType === "pen";
        this.dispatchEvent(e, "pointerover");
        if (isMouse) this.dispatchEvent(e, "mouseover");
        if (e.pointerType === "mouse") this.cursor = e.target?.cursor;
        const enterEvent = this.clonePointerEvent(e, "pointerenter");
        enterEvent.eventPhase = enterEvent.AT_TARGET;
        while(enterEvent.target && enterEvent.target !== this.rootTarget.parent){
            enterEvent.currentTarget = enterEvent.target;
            this.notifyTarget(enterEvent);
            if (isMouse) this.notifyTarget(enterEvent, "mouseenter");
            enterEvent.target = enterEvent.target.parent;
        }
        trackingData.overTargets = e.composedPath();
        this.freeEvent(e);
        this.freeEvent(enterEvent);
    }
    /**
   * Maps the upstream `pointerout` to downstream `pointerout`, `pointerleave` events, in that order.
   *
   * The tracking data for the specific pointer is cleared of a `overTarget`.
   * @param from - The upstream `pointerout` event.
   */ mapPointerOut(from) {
        if (!(from instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent))) {
            (0, _warnMjs.warn)("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
        }
        const trackingData = this.trackingData(from.pointerId);
        if (trackingData.overTargets) {
            const isMouse = from.pointerType === "mouse" || from.pointerType === "pen";
            const outTarget = this.findMountedTarget(trackingData.overTargets);
            const outEvent = this.createPointerEvent(from, "pointerout", outTarget);
            this.dispatchEvent(outEvent);
            if (isMouse) this.dispatchEvent(outEvent, "mouseout");
            const leaveEvent = this.createPointerEvent(from, "pointerleave", outTarget);
            leaveEvent.eventPhase = leaveEvent.AT_TARGET;
            while(leaveEvent.target && leaveEvent.target !== this.rootTarget.parent){
                leaveEvent.currentTarget = leaveEvent.target;
                this.notifyTarget(leaveEvent);
                if (isMouse) this.notifyTarget(leaveEvent, "mouseleave");
                leaveEvent.target = leaveEvent.target.parent;
            }
            trackingData.overTargets = null;
            this.freeEvent(outEvent);
            this.freeEvent(leaveEvent);
        }
        this.cursor = null;
    }
    /**
   * Maps the upstream `pointerup` event to downstream `pointerup`, `pointerupoutside`,
   * and `click`/`rightclick`/`pointertap` events, in that order.
   *
   * The `pointerupoutside` event bubbles from the original `pointerdown` target to the most specific
   * ancestor of the `pointerdown` and `pointerup` targets, which is also the `click` event's target. `touchend`,
   * `rightup`, `mouseup`, `touchendoutside`, `rightupoutside`, `mouseupoutside`, and `tap` are fired as well for
   * specific pointer types.
   * @param from - The upstream `pointerup` event.
   */ mapPointerUp(from) {
        if (!(from instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent))) {
            (0, _warnMjs.warn)("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
        }
        const now = performance.now();
        const e = this.createPointerEvent(from);
        this.dispatchEvent(e, "pointerup");
        if (e.pointerType === "touch") this.dispatchEvent(e, "touchend");
        else if (e.pointerType === "mouse" || e.pointerType === "pen") {
            const isRightButton = e.button === 2;
            this.dispatchEvent(e, isRightButton ? "rightup" : "mouseup");
        }
        const trackingData = this.trackingData(from.pointerId);
        const pressTarget = this.findMountedTarget(trackingData.pressTargetsByButton[from.button]);
        let clickTarget = pressTarget;
        if (pressTarget && !e.composedPath().includes(pressTarget)) {
            let currentTarget = pressTarget;
            while(currentTarget && !e.composedPath().includes(currentTarget)){
                e.currentTarget = currentTarget;
                this.notifyTarget(e, "pointerupoutside");
                if (e.pointerType === "touch") this.notifyTarget(e, "touchendoutside");
                else if (e.pointerType === "mouse" || e.pointerType === "pen") {
                    const isRightButton = e.button === 2;
                    this.notifyTarget(e, isRightButton ? "rightupoutside" : "mouseupoutside");
                }
                currentTarget = currentTarget.parent;
            }
            delete trackingData.pressTargetsByButton[from.button];
            clickTarget = currentTarget;
        }
        if (clickTarget) {
            const clickEvent = this.clonePointerEvent(e, "click");
            clickEvent.target = clickTarget;
            clickEvent.path = null;
            if (!trackingData.clicksByButton[from.button]) trackingData.clicksByButton[from.button] = {
                clickCount: 0,
                target: clickEvent.target,
                timeStamp: now
            };
            const clickHistory = trackingData.clicksByButton[from.button];
            if (clickHistory.target === clickEvent.target && now - clickHistory.timeStamp < 200) ++clickHistory.clickCount;
            else clickHistory.clickCount = 1;
            clickHistory.target = clickEvent.target;
            clickHistory.timeStamp = now;
            clickEvent.detail = clickHistory.clickCount;
            if (clickEvent.pointerType === "mouse") {
                const isRightButton = clickEvent.button === 2;
                this.dispatchEvent(clickEvent, isRightButton ? "rightclick" : "click");
            } else if (clickEvent.pointerType === "touch") this.dispatchEvent(clickEvent, "tap");
            this.dispatchEvent(clickEvent, "pointertap");
            this.freeEvent(clickEvent);
        }
        this.freeEvent(e);
    }
    /**
   * Maps the upstream `pointerupoutside` event to a downstream `pointerupoutside` event, bubbling from the original
   * `pointerdown` target to `rootTarget`.
   *
   * (The most specific ancestor of the `pointerdown` event and the `pointerup` event must the
   * `{@link EventBoundary}'s root because the `pointerup` event occurred outside of the boundary.)
   *
   * `touchendoutside`, `mouseupoutside`, and `rightupoutside` events are fired as well for specific pointer
   * types. The tracking data for the specific pointer is cleared of a `pressTarget`.
   * @param from - The upstream `pointerupoutside` event.
   */ mapPointerUpOutside(from) {
        if (!(from instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent))) {
            (0, _warnMjs.warn)("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
        }
        const trackingData = this.trackingData(from.pointerId);
        const pressTarget = this.findMountedTarget(trackingData.pressTargetsByButton[from.button]);
        const e = this.createPointerEvent(from);
        if (pressTarget) {
            let currentTarget = pressTarget;
            while(currentTarget){
                e.currentTarget = currentTarget;
                this.notifyTarget(e, "pointerupoutside");
                if (e.pointerType === "touch") this.notifyTarget(e, "touchendoutside");
                else if (e.pointerType === "mouse" || e.pointerType === "pen") this.notifyTarget(e, e.button === 2 ? "rightupoutside" : "mouseupoutside");
                currentTarget = currentTarget.parent;
            }
            delete trackingData.pressTargetsByButton[from.button];
        }
        this.freeEvent(e);
    }
    /**
   * Maps the upstream `wheel` event to a downstream `wheel` event.
   * @param from - The upstream `wheel` event.
   */ mapWheel(from) {
        if (!(from instanceof (0, _federatedWheelEventMjs.FederatedWheelEvent))) {
            (0, _warnMjs.warn)("EventBoundary cannot map a non-wheel event as a wheel event");
            return;
        }
        const wheelEvent = this.createWheelEvent(from);
        this.dispatchEvent(wheelEvent);
        this.freeEvent(wheelEvent);
    }
    /**
   * Finds the most specific event-target in the given propagation path that is still mounted in the scene graph.
   *
   * This is used to find the correct `pointerup` and `pointerout` target in the case that the original `pointerdown`
   * or `pointerover` target was unmounted from the scene graph.
   * @param propagationPath - The propagation path was valid in the past.
   * @returns - The most specific event-target still mounted at the same location in the scene graph.
   */ findMountedTarget(propagationPath) {
        if (!propagationPath) return null;
        let currentTarget = propagationPath[0];
        for(let i = 1; i < propagationPath.length; i++){
            if (propagationPath[i].parent === currentTarget) currentTarget = propagationPath[i];
            else break;
        }
        return currentTarget;
    }
    /**
   * Creates an event whose {@code originalEvent} is {@code from}, with an optional `type` and `target` override.
   *
   * The event is allocated using {@link EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The {@code originalEvent} for the returned event.
   * @param [type=from.type] - The type of the returned event.
   * @param target - The target of the returned event.
   */ createPointerEvent(from, type, target) {
        const event = this.allocateEvent((0, _federatedPointerEventMjs.FederatedPointerEvent));
        this.copyPointerData(from, event);
        this.copyMouseData(from, event);
        this.copyData(from, event);
        event.nativeEvent = from.nativeEvent;
        event.originalEvent = from;
        event.target = target ?? this.hitTest(event.global.x, event.global.y) ?? this._hitElements[0];
        if (typeof type === "string") event.type = type;
        return event;
    }
    /**
   * Creates a wheel event whose {@code originalEvent} is {@code from}.
   *
   * The event is allocated using {@link EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The upstream wheel event.
   */ createWheelEvent(from) {
        const event = this.allocateEvent((0, _federatedWheelEventMjs.FederatedWheelEvent));
        this.copyWheelData(from, event);
        this.copyMouseData(from, event);
        this.copyData(from, event);
        event.nativeEvent = from.nativeEvent;
        event.originalEvent = from;
        event.target = this.hitTest(event.global.x, event.global.y);
        return event;
    }
    /**
   * Clones the event {@code from}, with an optional {@code type} override.
   *
   * The event is allocated using {@link EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The event to clone.
   * @param [type=from.type] - The type of the returned event.
   */ clonePointerEvent(from, type) {
        const event = this.allocateEvent((0, _federatedPointerEventMjs.FederatedPointerEvent));
        event.nativeEvent = from.nativeEvent;
        event.originalEvent = from.originalEvent;
        this.copyPointerData(from, event);
        this.copyMouseData(from, event);
        this.copyData(from, event);
        event.target = from.target;
        event.path = from.composedPath().slice();
        event.type = type ?? event.type;
        return event;
    }
    /**
   * Copies wheel {@link FederatedWheelEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + deltaMode
   * + deltaX
   * + deltaY
   * + deltaZ
   * @param from - The event to copy data from.
   * @param to - The event to copy data into.
   */ copyWheelData(from, to) {
        to.deltaMode = from.deltaMode;
        to.deltaX = from.deltaX;
        to.deltaY = from.deltaY;
        to.deltaZ = from.deltaZ;
    }
    /**
   * Copies pointer {@link FederatedPointerEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + pointerId
   * + width
   * + height
   * + isPrimary
   * + pointerType
   * + pressure
   * + tangentialPressure
   * + tiltX
   * + tiltY
   * @param from - The event to copy data from.
   * @param to - The event to copy data into.
   */ copyPointerData(from, to) {
        if (!(from instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent) && to instanceof (0, _federatedPointerEventMjs.FederatedPointerEvent))) return;
        to.pointerId = from.pointerId;
        to.width = from.width;
        to.height = from.height;
        to.isPrimary = from.isPrimary;
        to.pointerType = from.pointerType;
        to.pressure = from.pressure;
        to.tangentialPressure = from.tangentialPressure;
        to.tiltX = from.tiltX;
        to.tiltY = from.tiltY;
        to.twist = from.twist;
    }
    /**
   * Copies mouse {@link FederatedMouseEvent} data from {@code from} to {@code to}.
   *
   * The following properties are copied:
   * + altKey
   * + button
   * + buttons
   * + clientX
   * + clientY
   * + metaKey
   * + movementX
   * + movementY
   * + pageX
   * + pageY
   * + x
   * + y
   * + screen
   * + shiftKey
   * + global
   * @param from - The event to copy data from.
   * @param to - The event to copy data into.
   */ copyMouseData(from, to) {
        if (!(from instanceof (0, _federatedMouseEventMjs.FederatedMouseEvent) && to instanceof (0, _federatedMouseEventMjs.FederatedMouseEvent))) return;
        to.altKey = from.altKey;
        to.button = from.button;
        to.buttons = from.buttons;
        to.client.copyFrom(from.client);
        to.ctrlKey = from.ctrlKey;
        to.metaKey = from.metaKey;
        to.movement.copyFrom(from.movement);
        to.screen.copyFrom(from.screen);
        to.shiftKey = from.shiftKey;
        to.global.copyFrom(from.global);
    }
    /**
   * Copies base {@link FederatedEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + isTrusted
   * + srcElement
   * + timeStamp
   * + type
   * @param from - The event to copy data from.
   * @param to - The event to copy data into.
   */ copyData(from, to) {
        to.isTrusted = from.isTrusted;
        to.srcElement = from.srcElement;
        to.timeStamp = performance.now();
        to.type = from.type;
        to.detail = from.detail;
        to.view = from.view;
        to.which = from.which;
        to.layer.copyFrom(from.layer);
        to.page.copyFrom(from.page);
    }
    /**
   * @param id - The pointer ID.
   * @returns The tracking data stored for the given pointer. If no data exists, a blank
   *  state will be created.
   */ trackingData(id) {
        if (!this.mappingState.trackingData[id]) this.mappingState.trackingData[id] = {
            pressTargetsByButton: {},
            clicksByButton: {},
            overTarget: null
        };
        return this.mappingState.trackingData[id];
    }
    /**
   * Allocate a specific type of event from {@link EventBoundary#eventPool this.eventPool}.
   *
   * This allocation is constructor-agnostic, as long as it only takes one argument - this event
   * boundary.
   * @param constructor - The event's constructor.
   */ allocateEvent(constructor) {
        if (!this.eventPool.has(constructor)) this.eventPool.set(constructor, []);
        const event = this.eventPool.get(constructor).pop() || new constructor(this);
        event.eventPhase = event.NONE;
        event.currentTarget = null;
        event.path = null;
        event.target = null;
        return event;
    }
    /**
   * Frees the event and puts it back into the event pool.
   *
   * It is illegal to reuse the event until it is allocated again, using `this.allocateEvent`.
   *
   * It is also advised that events not allocated from {@link EventBoundary#allocateEvent this.allocateEvent}
   * not be freed. This is because of the possibility that the same event is freed twice, which can cause
   * it to be allocated twice & result in overwriting.
   * @param event - The event to be freed.
   * @throws Error if the event is managed by another event boundary.
   */ freeEvent(event) {
        if (event.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
        const constructor = event.constructor;
        if (!this.eventPool.has(constructor)) this.eventPool.set(constructor, []);
        this.eventPool.get(constructor).push(event);
    }
    /**
   * Similar to {@link EventEmitter.emit}, except it stops if the `propagationImmediatelyStopped` flag
   * is set on the event.
   * @param e - The event to call each listener with.
   * @param type - The event key.
   */ _notifyListeners(e, type) {
        const listeners = e.currentTarget._events[type];
        if (!listeners) return;
        if (!e.currentTarget.isInteractive()) return;
        if ("fn" in listeners) {
            if (listeners.once) e.currentTarget.removeListener(type, listeners.fn, void 0, true);
            listeners.fn.call(listeners.context, e);
        } else for(let i = 0, j = listeners.length; i < j && !e.propagationImmediatelyStopped; i++){
            if (listeners[i].once) e.currentTarget.removeListener(type, listeners[i].fn, void 0, true);
            listeners[i].fn.call(listeners[i].context, e);
        }
    }
}

},{"eventemitter3":"enSRh","../maths/point/Point.mjs":"dkxvR","../utils/logging/warn.mjs":"gCz01","./EventTicker.mjs":"70zjp","./FederatedMouseEvent.mjs":"1JBuH","./FederatedPointerEvent.mjs":"adjDb","./FederatedWheelEvent.mjs":"lSV17","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"70zjp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventsTicker", ()=>EventsTicker);
var _constMjs = require("../ticker/const.mjs");
var _tickerMjs = require("../ticker/Ticker.mjs");
"use strict";
class EventsTickerClass {
    constructor(){
        /** The frequency that fake events will be fired. */ this.interactionFrequency = 10;
        this._deltaTime = 0;
        this._didMove = false;
        this._tickerAdded = false;
        this._pauseUpdate = true;
    }
    /**
   * Initializes the event ticker.
   * @param events - The event system.
   */ init(events) {
        this.removeTickerListener();
        this.events = events;
        this.interactionFrequency = 10;
        this._deltaTime = 0;
        this._didMove = false;
        this._tickerAdded = false;
        this._pauseUpdate = true;
    }
    /** Whether to pause the update checks or not. */ get pauseUpdate() {
        return this._pauseUpdate;
    }
    set pauseUpdate(paused) {
        this._pauseUpdate = paused;
    }
    /** Adds the ticker listener. */ addTickerListener() {
        if (this._tickerAdded || !this.domElement) return;
        (0, _tickerMjs.Ticker).system.add(this._tickerUpdate, this, (0, _constMjs.UPDATE_PRIORITY).INTERACTION);
        this._tickerAdded = true;
    }
    /** Removes the ticker listener. */ removeTickerListener() {
        if (!this._tickerAdded) return;
        (0, _tickerMjs.Ticker).system.remove(this._tickerUpdate, this);
        this._tickerAdded = false;
    }
    /** Sets flag to not fire extra events when the user has already moved there mouse */ pointerMoved() {
        this._didMove = true;
    }
    /** Updates the state of interactive objects. */ _update() {
        if (!this.domElement || this._pauseUpdate) return;
        if (this._didMove) {
            this._didMove = false;
            return;
        }
        const rootPointerEvent = this.events["_rootPointerEvent"];
        if (this.events.supportsTouchEvents && rootPointerEvent.pointerType === "touch") return;
        globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
            clientX: rootPointerEvent.clientX,
            clientY: rootPointerEvent.clientY
        }));
    }
    /**
   * Updates the state of interactive objects if at least {@link interactionFrequency}
   * milliseconds have passed since the last invocation.
   *
   * Invoked by a throttled ticker update from {@link Ticker.system}.
   * @param ticker - The throttled ticker.
   */ _tickerUpdate(ticker) {
        this._deltaTime += ticker.deltaTime;
        if (this._deltaTime < this.interactionFrequency) return;
        this._deltaTime = 0;
        this._update();
    }
}
const EventsTicker = new EventsTickerClass();

},{"../ticker/const.mjs":"1LyjA","../ticker/Ticker.mjs":"bE9lk","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1JBuH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FederatedMouseEvent", ()=>FederatedMouseEvent);
var _pointMjs = require("../maths/point/Point.mjs");
var _federatedEventMjs = require("./FederatedEvent.mjs");
"use strict";
class FederatedMouseEvent extends (0, _federatedEventMjs.FederatedEvent) {
    constructor(){
        super(...arguments);
        /** The coordinates of the mouse event relative to the canvas. */ this.client = new (0, _pointMjs.Point)();
        /** The movement in this pointer relative to the last `mousemove` event. */ this.movement = new (0, _pointMjs.Point)();
        /** The offset of the pointer coordinates w.r.t. target Container in world space. This is not supported at the moment. */ this.offset = new (0, _pointMjs.Point)();
        /** The pointer coordinates in world space. */ this.global = new (0, _pointMjs.Point)();
        /**
     * The pointer coordinates in the renderer's {@link Renderer.screen screen}. This has slightly
     * different semantics than native PointerEvent screenX/screenY.
     */ this.screen = new (0, _pointMjs.Point)();
    }
    /** @readonly */ get clientX() {
        return this.client.x;
    }
    /** @readonly */ get clientY() {
        return this.client.y;
    }
    /**
   * Alias for {@link FederatedMouseEvent.clientX this.clientX}.
   * @readonly
   */ get x() {
        return this.clientX;
    }
    /**
   * Alias for {@link FederatedMouseEvent.clientY this.clientY}.
   * @readonly
   */ get y() {
        return this.clientY;
    }
    /** @readonly */ get movementX() {
        return this.movement.x;
    }
    /** @readonly */ get movementY() {
        return this.movement.y;
    }
    /** @readonly */ get offsetX() {
        return this.offset.x;
    }
    /** @readonly */ get offsetY() {
        return this.offset.y;
    }
    /** @readonly */ get globalX() {
        return this.global.x;
    }
    /** @readonly */ get globalY() {
        return this.global.y;
    }
    /**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.x}.
   * @readonly
   */ get screenX() {
        return this.screen.x;
    }
    /**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.y}.
   * @readonly
   */ get screenY() {
        return this.screen.y;
    }
    /**
   * This will return the local coordinates of the specified container for this InteractionData
   * @param {Container} container - The Container that you would like the local
   *  coords off
   * @param {PointData} point - A Point object in which to store the value, optional (otherwise
   *  will create a new point)
   * @param {PointData} globalPos - A Point object containing your custom global coords, optional
   *  (otherwise will use the current global coords)
   * @returns - A point containing the coordinates of the InteractionData position relative
   *  to the Container
   */ getLocalPosition(container, point, globalPos) {
        return container.worldTransform.applyInverse(globalPos || this.global, point);
    }
    /**
   * Whether the modifier key was pressed when this event natively occurred.
   * @param key - The modifier key.
   */ getModifierState(key) {
        return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(key);
    }
    /**
   * Not supported.
   * @param _typeArg
   * @param _canBubbleArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   * @param _screenXArg
   * @param _screenYArg
   * @param _clientXArg
   * @param _clientYArg
   * @param _ctrlKeyArg
   * @param _altKeyArg
   * @param _shiftKeyArg
   * @param _metaKeyArg
   * @param _buttonArg
   * @param _relatedTargetArg
   * @deprecated since 7.0.0
   */ // eslint-disable-next-line max-params
    initMouseEvent(_typeArg, _canBubbleArg, _cancelableArg, _viewArg, _detailArg, _screenXArg, _screenYArg, _clientXArg, _clientYArg, _ctrlKeyArg, _altKeyArg, _shiftKeyArg, _metaKeyArg, _buttonArg, _relatedTargetArg) {
        throw new Error("Method not implemented.");
    }
}

},{"../maths/point/Point.mjs":"dkxvR","./FederatedEvent.mjs":"6C0nI","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"adjDb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FederatedPointerEvent", ()=>FederatedPointerEvent);
var _federatedMouseEventMjs = require("./FederatedMouseEvent.mjs");
"use strict";
class FederatedPointerEvent extends (0, _federatedMouseEventMjs.FederatedMouseEvent) {
    constructor(){
        super(...arguments);
        /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     */ this.width = 0;
        /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     */ this.height = 0;
        /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     */ this.isPrimary = false;
    }
    // Only included for completeness for now
    getCoalescedEvents() {
        if (this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove") return [
            this
        ];
        return [];
    }
    // Only included for completeness for now
    getPredictedEvents() {
        throw new Error("getPredictedEvents is not supported!");
    }
}

},{"./FederatedMouseEvent.mjs":"1JBuH","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"lSV17":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FederatedWheelEvent", ()=>FederatedWheelEvent);
var _federatedMouseEventMjs = require("./FederatedMouseEvent.mjs");
"use strict";
class FederatedWheelEvent extends (0, _federatedMouseEventMjs.FederatedMouseEvent) {
    constructor(){
        super(...arguments);
        /** Units specified in pixels. */ this.DOM_DELTA_PIXEL = 0;
        /** Units specified in lines. */ this.DOM_DELTA_LINE = 1;
        /** Units specified in pages. */ this.DOM_DELTA_PAGE = 2;
    }
}
/** Units specified in pixels. */ FederatedWheelEvent.DOM_DELTA_PIXEL = 0;
/** Units specified in lines. */ FederatedWheelEvent.DOM_DELTA_LINE = 1;
/** Units specified in pages. */ FederatedWheelEvent.DOM_DELTA_PAGE = 2;

},{"./FederatedMouseEvent.mjs":"1JBuH","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kaBPi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FederatedContainer", ()=>FederatedContainer);
var _eventSystemMjs = require("./EventSystem.mjs");
var _federatedEventMjs = require("./FederatedEvent.mjs");
"use strict";
const FederatedContainer = {
    /**
   * Property-based event handler for the `click` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onclick = (event) => {
   *  //some function here that happens on click
   * }
   */ onclick: null,
    /**
   * Property-based event handler for the `mousedown` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmousedown = (event) => {
   *  //some function here that happens on mousedown
   * }
   */ onmousedown: null,
    /**
   * Property-based event handler for the `mouseenter` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmouseenter = (event) => {
   *  //some function here that happens on mouseenter
   * }
   */ onmouseenter: null,
    /**
   * Property-based event handler for the `mouseleave` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmouseleave = (event) => {
   *  //some function here that happens on mouseleave
   * }
   */ onmouseleave: null,
    /**
   * Property-based event handler for the `mousemove` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmousemove = (event) => {
   *  //some function here that happens on mousemove
   * }
   */ onmousemove: null,
    /**
   * Property-based event handler for the `globalmousemove` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onglobalmousemove = (event) => {
   *  //some function here that happens on globalmousemove
   * }
   */ onglobalmousemove: null,
    /**
   * Property-based event handler for the `mouseout` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmouseout = (event) => {
   *  //some function here that happens on mouseout
   * }
   */ onmouseout: null,
    /**
   * Property-based event handler for the `mouseover` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmouseover = (event) => {
   *  //some function here that happens on mouseover
   * }
   */ onmouseover: null,
    /**
   * Property-based event handler for the `mouseup` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmouseup = (event) => {
   *  //some function here that happens on mouseup
   * }
   */ onmouseup: null,
    /**
   * Property-based event handler for the `mouseupoutside` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onmouseupoutside = (event) => {
   *  //some function here that happens on mouseupoutside
   * }
   */ onmouseupoutside: null,
    /**
   * Property-based event handler for the `pointercancel` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointercancel = (event) => {
   *  //some function here that happens on pointercancel
   * }
   */ onpointercancel: null,
    /**
   * Property-based event handler for the `pointerdown` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointerdown = (event) => {
   *  //some function here that happens on pointerdown
   * }
   */ onpointerdown: null,
    /**
   * Property-based event handler for the `pointerenter` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointerenter = (event) => {
   *  //some function here that happens on pointerenter
   * }
   */ onpointerenter: null,
    /**
   * Property-based event handler for the `pointerleave` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointerleave = (event) => {
   *  //some function here that happens on pointerleave
   * }
   */ onpointerleave: null,
    /**
   * Property-based event handler for the `pointermove` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointermove = (event) => {
   *  //some function here that happens on pointermove
   * }
   */ onpointermove: null,
    /**
   * Property-based event handler for the `globalpointermove` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onglobalpointermove = (event) => {
   *  //some function here that happens on globalpointermove
   * }
   */ onglobalpointermove: null,
    /**
   * Property-based event handler for the `pointerout` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointerout = (event) => {
   *  //some function here that happens on pointerout
   * }
   */ onpointerout: null,
    /**
   * Property-based event handler for the `pointerover` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointerover = (event) => {
   *  //some function here that happens on pointerover
   * }
   */ onpointerover: null,
    /**
   * Property-based event handler for the `pointertap` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointertap = (event) => {
   *  //some function here that happens on pointertap
   * }
   */ onpointertap: null,
    /**
   * Property-based event handler for the `pointerup` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointerup = (event) => {
   *  //some function here that happens on pointerup
   * }
   */ onpointerup: null,
    /**
   * Property-based event handler for the `pointerupoutside` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onpointerupoutside = (event) => {
   *  //some function here that happens on pointerupoutside
   * }
   */ onpointerupoutside: null,
    /**
   * Property-based event handler for the `rightclick` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onrightclick = (event) => {
   *  //some function here that happens on rightclick
   * }
   */ onrightclick: null,
    /**
   * Property-based event handler for the `rightdown` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onrightdown = (event) => {
   *  //some function here that happens on rightdown
   * }
   */ onrightdown: null,
    /**
   * Property-based event handler for the `rightup` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onrightup = (event) => {
   *  //some function here that happens on rightup
   * }
   */ onrightup: null,
    /**
   * Property-based event handler for the `rightupoutside` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onrightupoutside = (event) => {
   *  //some function here that happens on rightupoutside
   * }
   */ onrightupoutside: null,
    /**
   * Property-based event handler for the `tap` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.ontap = (event) => {
   *  //some function here that happens on tap
   * }
   */ ontap: null,
    /**
   * Property-based event handler for the `touchcancel` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.ontouchcancel = (event) => {
   *  //some function here that happens on touchcancel
   * }
   */ ontouchcancel: null,
    /**
   * Property-based event handler for the `touchend` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.ontouchend = (event) => {
   *  //some function here that happens on touchend
   * }
   */ ontouchend: null,
    /**
   * Property-based event handler for the `touchendoutside` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.ontouchendoutside = (event) => {
   *  //some function here that happens on touchendoutside
   * }
   */ ontouchendoutside: null,
    /**
   * Property-based event handler for the `touchmove` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.ontouchmove = (event) => {
   *  //some function here that happens on touchmove
   * }
   */ ontouchmove: null,
    /**
   * Property-based event handler for the `globaltouchmove` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onglobaltouchmove = (event) => {
   *  //some function here that happens on globaltouchmove
   * }
   */ onglobaltouchmove: null,
    /**
   * Property-based event handler for the `touchstart` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.ontouchstart = (event) => {
   *  //some function here that happens on touchstart
   * }
   */ ontouchstart: null,
    /**
   * Property-based event handler for the `wheel` event.
   * @memberof scene.Container#
   * @default null
   * @example
   * this.onwheel = (event) => {
   *  //some function here that happens on wheel
   * }
   */ onwheel: null,
    /**
   * Enable interaction events for the Container. Touch, pointer and mouse
   * @memberof scene.Container#
   */ get interactive () {
        return this.eventMode === "dynamic" || this.eventMode === "static";
    },
    set interactive (value){
        this.eventMode = value ? "static" : "passive";
    },
    /**
   * @ignore
   */ _internalEventMode: void 0,
    /**
   * Enable interaction events for the Container. Touch, pointer and mouse.
   * There are 5 types of interaction settings:
   * - `'none'`: Ignores all interaction events, even on its children.
   * - `'passive'`: **(default)** Does not emit events and ignores all hit testing on itself and non-interactive children.
   * Interactive children will still emit events.
   * - `'auto'`: Does not emit events but is hit tested if parent is interactive. Same as `interactive = false` in v7
   * - `'static'`: Emit events and is hit tested. Same as `interaction = true` in v7
   * - `'dynamic'`: Emits events and is hit tested but will also receive mock interaction events fired from a ticker to
   * allow for interaction when the mouse isn't moving
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.on('tap', (event) => {
   *     // Handle event
   * });
   * @memberof scene.Container#
   * @since 7.2.0
   */ get eventMode () {
        return this._internalEventMode ?? (0, _eventSystemMjs.EventSystem).defaultEventMode;
    },
    set eventMode (value){
        this._internalEventMode = value;
    },
    /**
   * Determines if the container is interactive or not
   * @returns {boolean} Whether the container is interactive or not
   * @memberof scene.Container#
   * @since 7.2.0
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'dynamic';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'none';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'passive';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'auto';
   * sprite.isInteractive(); // false
   */ isInteractive () {
        return this.eventMode === "static" || this.eventMode === "dynamic";
    },
    /**
   * Determines if the children to the container can be clicked/touched
   * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
   * @memberof scene.Container#
   */ interactiveChildren: true,
    /**
   * Interaction shape. Children will be hit first, then this shape will be checked.
   * Setting this will cause this shape to be checked in hit tests rather than the container's bounds.
   * @example
   * import { Rectangle, Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.interactive = true;
   * sprite.hitArea = new Rectangle(0, 0, 100, 100);
   * @member {IHitArea}
   * @memberof scene.Container#
   */ hitArea: null,
    /**
   * Unlike `on` or `addListener` which are methods from EventEmitter, `addEventListener`
   * seeks to be compatible with the DOM's `addEventListener` with support for options.
   * @memberof scene.Container
   * @param type - The type of event to listen to.
   * @param listener - The listener callback or object.
   * @param options - Listener options, used for capture phase.
   * @example
   * // Tell the user whether they did a single, double, triple, or nth click.
   * button.addEventListener('click', {
   *     handleEvent(e): {
   *         let prefix;
   *
   *         switch (e.detail) {
   *             case 1: prefix = 'single'; break;
   *             case 2: prefix = 'double'; break;
   *             case 3: prefix = 'triple'; break;
   *             default: prefix = e.detail + 'th'; break;
   *         }
   *
   *         console.log('That was a ' + prefix + 'click');
   *     }
   * });
   *
   * // But skip the first click!
   * button.parent.addEventListener('click', function blockClickOnce(e) {
   *     e.stopImmediatePropagation();
   *     button.parent.removeEventListener('click', blockClickOnce, true);
   * }, {
   *     capture: true,
   * });
   */ addEventListener (type, listener, options) {
        const capture = typeof options === "boolean" && options || typeof options === "object" && options.capture;
        const signal = typeof options === "object" ? options.signal : void 0;
        const once = typeof options === "object" ? options.once === true : false;
        const context = typeof listener === "function" ? void 0 : listener;
        type = capture ? `${type}capture` : type;
        const listenerFn = typeof listener === "function" ? listener : listener.handleEvent;
        const emitter = this;
        if (signal) signal.addEventListener("abort", ()=>{
            emitter.off(type, listenerFn, context);
        });
        if (once) emitter.once(type, listenerFn, context);
        else emitter.on(type, listenerFn, context);
    },
    /**
   * Unlike `off` or `removeListener` which are methods from EventEmitter, `removeEventListener`
   * seeks to be compatible with the DOM's `removeEventListener` with support for options.
   * @memberof scene.Container
   * @param type - The type of event the listener is bound to.
   * @param listener - The listener callback or object.
   * @param options - The original listener options. This is required to deregister a capture phase listener.
   */ removeEventListener (type, listener, options) {
        const capture = typeof options === "boolean" && options || typeof options === "object" && options.capture;
        const context = typeof listener === "function" ? void 0 : listener;
        type = capture ? `${type}capture` : type;
        listener = typeof listener === "function" ? listener : listener.handleEvent;
        this.off(type, listener, context);
    },
    /**
   * Dispatch the event on this {@link Container} using the event's {@link EventBoundary}.
   *
   * The target of the event is set to `this` and the `defaultPrevented` flag is cleared before dispatch.
   * @memberof scene.Container
   * @param e - The event to dispatch.
   * @returns Whether the {@link FederatedEvent.preventDefault preventDefault}() method was not invoked.
   * @example
   * // Reuse a click event!
   * button.dispatchEvent(clickEvent);
   */ dispatchEvent (e) {
        if (!(e instanceof (0, _federatedEventMjs.FederatedEvent))) throw new Error("Container cannot propagate events outside of the Federated Events API");
        e.defaultPrevented = false;
        e.path = null;
        e.target = this;
        e.manager.dispatchEvent(e);
        return !e.defaultPrevented;
    }
};

},{"./EventSystem.mjs":"RIEDb","./FederatedEvent.mjs":"6C0nI","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}]},["jwvxN"], null, "parcelRequire4692")

//# sourceMappingURL=browserAll.c4af9e59.js.map
