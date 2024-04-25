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
})({"klMyx":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "62773d8990bfdf54";
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

},{}],"c8doH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtensionType", ()=>ExtensionType);
parcelHelpers.export(exports, "extensions", ()=>extensions);
parcelHelpers.export(exports, "normalizeExtensionPriority", ()=>normalizeExtensionPriority);
"use strict";
var ExtensionType = /* @__PURE__ */ ((ExtensionType2)=>{
    ExtensionType2["Application"] = "application";
    ExtensionType2["WebGLPipes"] = "webgl-pipes";
    ExtensionType2["WebGLPipesAdaptor"] = "webgl-pipes-adaptor";
    ExtensionType2["WebGLSystem"] = "webgl-system";
    ExtensionType2["WebGPUPipes"] = "webgpu-pipes";
    ExtensionType2["WebGPUPipesAdaptor"] = "webgpu-pipes-adaptor";
    ExtensionType2["WebGPUSystem"] = "webgpu-system";
    ExtensionType2["CanvasSystem"] = "canvas-system";
    ExtensionType2["CanvasPipesAdaptor"] = "canvas-pipes-adaptor";
    ExtensionType2["CanvasPipes"] = "canvas-pipes";
    ExtensionType2["Asset"] = "asset";
    ExtensionType2["LoadParser"] = "load-parser";
    ExtensionType2["ResolveParser"] = "resolve-parser";
    ExtensionType2["CacheParser"] = "cache-parser";
    ExtensionType2["DetectionParser"] = "detection-parser";
    ExtensionType2["MaskEffect"] = "mask-effect";
    ExtensionType2["BlendMode"] = "blend-mode";
    ExtensionType2["TextureSource"] = "texture-source";
    ExtensionType2["Environment"] = "environment";
    return ExtensionType2;
})(ExtensionType || {});
const normalizeExtension = (ext)=>{
    if (typeof ext === "function" || typeof ext === "object" && ext.extension) {
        if (!ext.extension) throw new Error("Extension class must have an extension object");
        const metadata = typeof ext.extension !== "object" ? {
            type: ext.extension
        } : ext.extension;
        ext = {
            ...metadata,
            ref: ext
        };
    }
    if (typeof ext === "object") ext = {
        ...ext
    };
    else throw new Error("Invalid extension type");
    if (typeof ext.type === "string") ext.type = [
        ext.type
    ];
    return ext;
};
const normalizeExtensionPriority = (ext, defaultPriority)=>normalizeExtension(ext).priority ?? defaultPriority;
const extensions = {
    /** @ignore */ _addHandlers: {},
    /** @ignore */ _removeHandlers: {},
    /** @ignore */ _queue: {},
    /**
   * Remove extensions from PixiJS.
   * @param extensions - Extensions to be removed.
   * @returns {extensions} For chaining.
   */ remove (...extensions2) {
        extensions2.map(normalizeExtension).forEach((ext)=>{
            ext.type.forEach((type)=>this._removeHandlers[type]?.(ext));
        });
        return this;
    },
    /**
   * Register new extensions with PixiJS.
   * @param extensions - The spread of extensions to add to PixiJS.
   * @returns {extensions} For chaining.
   */ add (...extensions2) {
        extensions2.map(normalizeExtension).forEach((ext)=>{
            ext.type.forEach((type)=>{
                const handlers = this._addHandlers;
                const queue = this._queue;
                if (!handlers[type]) {
                    queue[type] = queue[type] || [];
                    queue[type]?.push(ext);
                } else handlers[type]?.(ext);
            });
        });
        return this;
    },
    /**
   * Internal method to handle extensions by name.
   * @param type - The extension type.
   * @param onAdd  - Function handler when extensions are added/registered {@link StrictExtensionFormat}.
   * @param onRemove  - Function handler when extensions are removed/unregistered {@link StrictExtensionFormat}.
   * @returns {extensions} For chaining.
   */ handle (type, onAdd, onRemove) {
        const addHandlers = this._addHandlers;
        const removeHandlers = this._removeHandlers;
        if (addHandlers[type] || removeHandlers[type]) throw new Error(`Extension type ${type} already has a handler`);
        addHandlers[type] = onAdd;
        removeHandlers[type] = onRemove;
        const queue = this._queue;
        if (queue[type]) {
            queue[type]?.forEach((ext)=>onAdd(ext));
            delete queue[type];
        }
        return this;
    },
    /**
   * Handle a type, but using a map by `name` property.
   * @param type - Type of extension to handle.
   * @param map - The object map of named extensions.
   * @returns {extensions} For chaining.
   */ handleByMap (type, map) {
        return this.handle(type, (extension)=>{
            if (extension.name) map[extension.name] = extension.ref;
        }, (extension)=>{
            if (extension.name) delete map[extension.name];
        });
    },
    /**
   * Handle a type, but using a list of extensions with a `name` property.
   * @param type - Type of extension to handle.
   * @param map - The array of named extensions.
   * @param defaultPriority - Fallback priority if none is defined.
   * @returns {extensions} For chaining.
   */ handleByNamedList (type, map, defaultPriority = -1) {
        return this.handle(type, (extension)=>{
            const index = map.findIndex((item)=>item.name === extension.name);
            if (index >= 0) return;
            map.push({
                name: extension.name,
                value: extension.ref
            });
            map.sort((a, b)=>normalizeExtensionPriority(b.value, defaultPriority) - normalizeExtensionPriority(a.value, defaultPriority));
        }, (extension)=>{
            const index = map.findIndex((item)=>item.name === extension.name);
            if (index !== -1) map.splice(index, 1);
        });
    },
    /**
   * Handle a type, but using a list of extensions.
   * @param type - Type of extension to handle.
   * @param list - The list of extensions.
   * @param defaultPriority - The default priority to use if none is specified.
   * @returns {extensions} For chaining.
   */ handleByList (type, list, defaultPriority = -1) {
        return this.handle(type, (extension)=>{
            if (list.includes(extension.ref)) return;
            list.push(extension.ref);
            list.sort((a, b)=>normalizeExtensionPriority(b, defaultPriority) - normalizeExtensionPriority(a, defaultPriority));
        }, (extension)=>{
            const index = list.indexOf(extension.ref);
            if (index !== -1) list.splice(index, 1);
        });
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6elpC":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"6EDs5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
parcelHelpers.export(exports, "UPDATE_BLEND", ()=>UPDATE_BLEND);
parcelHelpers.export(exports, "UPDATE_COLOR", ()=>UPDATE_COLOR);
parcelHelpers.export(exports, "UPDATE_TRANSFORM", ()=>UPDATE_TRANSFORM);
parcelHelpers.export(exports, "UPDATE_VISIBLE", ()=>UPDATE_VISIBLE);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _colorMjs = require("../../color/Color.mjs");
var _cullingMixinMjs = require("../../culling/cullingMixin.mjs");
var _matrixMjs = require("../../maths/matrix/Matrix.mjs");
var _constMjs = require("../../maths/misc/const.mjs");
var _observablePointMjs = require("../../maths/point/ObservablePoint.mjs");
var _uidMjs = require("../../utils/data/uid.mjs");
var _deprecationMjs = require("../../utils/logging/deprecation.mjs");
var _childrenHelperMixinMjs = require("./container-mixins/childrenHelperMixin.mjs");
var _effectsMixinMjs = require("./container-mixins/effectsMixin.mjs");
var _findMixinMjs = require("./container-mixins/findMixin.mjs");
var _measureMixinMjs = require("./container-mixins/measureMixin.mjs");
var _onRenderMixinMjs = require("./container-mixins/onRenderMixin.mjs");
var _sortMixinMjs = require("./container-mixins/sortMixin.mjs");
var _toLocalGlobalMixinMjs = require("./container-mixins/toLocalGlobalMixin.mjs");
var _renderGroupMjs = require("./RenderGroup.mjs");
var _assignWithIgnoreMjs = require("./utils/assignWithIgnore.mjs");
"use strict";
const defaultSkew = new (0, _observablePointMjs.ObservablePoint)(null);
const defaultPivot = new (0, _observablePointMjs.ObservablePoint)(null);
const defaultScale = new (0, _observablePointMjs.ObservablePoint)(null, 1, 1);
const UPDATE_COLOR = 1;
const UPDATE_BLEND = 2;
const UPDATE_VISIBLE = 4;
const UPDATE_TRANSFORM = 8;
class Container extends (0, _eventemitter3Default.default) {
    constructor(options = {}){
        super();
        /** @private */ this.uid = (0, _uidMjs.uid)("renderable");
        /** @private */ this._updateFlags = 15;
        // is this container the root of a renderGroup?
        // TODO implement this in a few more places
        /** @private */ this.isRenderGroupRoot = false;
        // the render group this container belongs to OR owns
        /** @private */ this.renderGroup = null;
        // set to true if the container has changed. It is reset once the changes have been applied
        // by the transform system
        // its here to stop ensure that when things change, only one update gets registers with the transform system
        /** @private */ this.didChange = false;
        // same as above, but for the renderable
        /** @private */ this.didViewUpdate = false;
        // how deep is the container relative to its render group..
        // unless the element is the root render group - it will be relative to its parent
        /** @private */ this.relativeRenderGroupDepth = 0;
        /**
     * The array of children of this container.
     * @readonly
     */ this.children = [];
        /** The display object container that contains this display object. */ this.parent = null;
        // used internally for changing up the render order.. mainly for masks and filters
        // TODO setting this should cause a rebuild??
        /** @private */ this.includeInBuild = true;
        /** @private */ this.measurable = true;
        /** @private */ this.isSimple = true;
        // / /////////////Transform related props//////////////
        // used by the transform system to check if a container needs to be updated that frame
        // if the tick matches the current transform system tick, it is not updated again
        /**
     * @internal
     * @ignore
     */ this.updateTick = -1;
        /**
     * Current transform of the object based on local factors: position, scale, other stuff.
     * @readonly
     */ this.localTransform = new (0, _matrixMjs.Matrix)();
        /**
     * The relative group transform is a transform relative to the render group it belongs too. It will include all parent
     * transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
     * If this container is is self a render group matrix will be relative to its parent render group
     * @readonly
     */ this.relativeGroupTransform = new (0, _matrixMjs.Matrix)();
        /**
     * The group transform is a transform relative to the render group it belongs too.
     * If this container is render group then this will be an identity matrix. other wise it
     * will be the same as the relativeGroupTransform.
     * Use this value when actually rendering things to the screen
     * @readonly
     */ this.groupTransform = this.relativeGroupTransform;
        /** If the object has been destroyed via destroy(). If true, it should not be used. */ this.destroyed = false;
        // transform data..
        /**
     * The coordinate of the object relative to the local coordinates of the parent.
     * @internal
     * @ignore
     */ this._position = new (0, _observablePointMjs.ObservablePoint)(this, 0, 0);
        /**
     * The scale factor of the object.
     * @internal
     * @ignore
     */ this._scale = defaultScale;
        /**
     * The pivot point of the container that it rotates around.
     * @internal
     * @ignore
     */ this._pivot = defaultPivot;
        /**
     * The skew amount, on the x and y axis.
     * @internal
     * @ignore
     */ this._skew = defaultSkew;
        /**
     * The X-coordinate value of the normalized local X axis,
     * the first column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */ this._cx = 1;
        /**
     * The Y-coordinate value of the normalized local X axis,
     * the first column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */ this._sx = 0;
        /**
     * The X-coordinate value of the normalized local Y axis,
     * the second column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */ this._cy = 0;
        /**
     * The Y-coordinate value of the normalized local Y axis,
     * the second column of the local transformation matrix without a scale.
     * @internal
     * @ignore
     */ this._sy = 1;
        /**
     * The rotation amount.
     * @internal
     * @ignore
     */ this._rotation = 0;
        // / COLOR related props //////////////
        // color stored as ABGR
        this.localColor = 16777215;
        this.localAlpha = 1;
        this.groupAlpha = 1;
        // A
        this.groupColor = 16777215;
        // BGR
        this.groupColorAlpha = 4294967295;
        // ABGR
        // / BLEND related props //////////////
        /**
     * @internal
     * @ignore
     */ this.localBlendMode = "inherit";
        /**
     * @internal
     * @ignore
     */ this.groupBlendMode = "normal";
        // / VISIBILITY related props //////////////
        // visibility
        // 0b11
        // first bit is visible, second bit is renderable
        /**
     * This property holds three bits: culled, visible, renderable
     * the third bit represents culling (0 = culled, 1 = not culled) 0b100
     * the second bit represents visibility (0 = not visible, 1 = visible) 0b010
     * the first bit represents renderable (0 = renderable, 1 = not renderable) 0b001
     * @internal
     * @ignore
     */ this.localDisplayStatus = 7;
        // 0b11 | 0b10 | 0b01 | 0b00
        /**
     * @internal
     * @ignore
     */ this.globalDisplayStatus = 7;
        /**
     * A value that increments each time the container is modified
     * the first 12 bits represent the container changes (eg transform, alpha, visible etc)
     * the second 12 bits represent the view changes (eg texture swap, geometry change etc)
     *
     *  view          container
     * [000000000000][00000000000]
     * @ignore
     */ this._didChangeId = 0;
        /**
     * property that tracks if the container transform has changed
     * @ignore
     */ this._didLocalTransformChangeId = -1;
        (0, _assignWithIgnoreMjs.assignWithIgnore)(this, options, {
            children: true,
            parent: true,
            effects: true
        });
        options.children?.forEach((child)=>this.addChild(child));
        this.effects = [];
        options.parent?.addChild(this);
    }
    /**
   * Mixes all enumerable properties and methods from a source object to Container.
   * @param source - The source of properties and methods to mix in.
   */ static mixin(source) {
        Object.defineProperties(Container.prototype, Object.getOwnPropertyDescriptors(source));
    }
    /**
   * Adds one or more children to the container.
   *
   * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
   * @param {...Container} children - The Container(s) to add to the container
   * @returns {Container} - The first child that was added.
   */ addChild(...children) {
        if (!this.allowChildren) (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "addChild: Only Containers will be allowed to add children in v8.0.0");
        if (children.length > 1) {
            for(let i = 0; i < children.length; i++)this.addChild(children[i]);
            return children[0];
        }
        const child = children[0];
        if (child.parent === this) {
            this.children.splice(this.children.indexOf(child), 1);
            this.children.push(child);
            if (this.renderGroup && !this.isRenderGroupRoot) this.renderGroup.structureDidChange = true;
            return child;
        }
        if (child.parent) child.parent.removeChild(child);
        this.children.push(child);
        if (this.sortableChildren) this.sortDirty = true;
        child.parent = this;
        child.didChange = true;
        child.didViewUpdate = false;
        child._updateFlags = 15;
        if (this.renderGroup) this.renderGroup.addChild(child);
        this.emit("childAdded", child, this, this.children.length - 1);
        child.emit("added", this);
        if (child._zIndex !== 0) child.depthOfChildModified();
        return child;
    }
    /**
   * Removes one or more children from the container.
   * @param {...Container} children - The Container(s) to remove
   * @returns {Container} The first child that was removed.
   */ removeChild(...children) {
        if (children.length > 1) {
            for(let i = 0; i < children.length; i++)this.removeChild(children[i]);
            return children[0];
        }
        const child = children[0];
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
            if (this.renderGroup) this.renderGroup.removeChild(child);
            child.parent = null;
            this.emit("childRemoved", child, this, index);
            child.emit("removed", this);
        }
        return child;
    }
    /** @ignore */ _onUpdate(point) {
        if (point) {
            if (point === this._skew) this._updateSkew();
        }
        this._didChangeId++;
        if (this.didChange) return;
        this.didChange = true;
        if (this.isRenderGroupRoot) {
            const renderGroupParent = this.renderGroup.renderGroupParent;
            if (renderGroupParent) renderGroupParent.onChildUpdate(this);
        } else if (this.renderGroup) this.renderGroup.onChildUpdate(this);
    }
    set isRenderGroup(value) {
        if (this.isRenderGroupRoot && value === false) throw new Error("[Pixi] cannot undo a render group just yet");
        if (value) this.enableRenderGroup();
    }
    /**
   * Returns true if this container is a render group.
   * This means that it will be rendered as a separate pass, with its own set of instructions
   */ get isRenderGroup() {
        return this.isRenderGroupRoot;
    }
    /** This enables the container to be rendered as a render group. */ enableRenderGroup() {
        if (this.renderGroup && this.renderGroup.root === this) return;
        this.isRenderGroupRoot = true;
        const parentRenderGroup = this.renderGroup;
        if (parentRenderGroup) parentRenderGroup.removeChild(this);
        this.renderGroup = new (0, _renderGroupMjs.RenderGroup)(this);
        if (parentRenderGroup) {
            for(let i = 0; i < parentRenderGroup.renderGroupChildren.length; i++){
                const childRenderGroup = parentRenderGroup.renderGroupChildren[i];
                let parent = childRenderGroup.root;
                while(parent){
                    if (parent === this) {
                        this.renderGroup.addRenderGroupChild(childRenderGroup);
                        break;
                    }
                    parent = parent.parent;
                }
            }
            parentRenderGroup.addRenderGroupChild(this.renderGroup);
        }
        this._updateIsSimple();
        this.groupTransform = (0, _matrixMjs.Matrix).IDENTITY;
    }
    /** @ignore */ _updateIsSimple() {
        this.isSimple = !this.isRenderGroupRoot && this.effects.length === 0;
    }
    /**
   * Current transform of the object based on world (parent) factors.
   * @readonly
   */ get worldTransform() {
        this._worldTransform || (this._worldTransform = new (0, _matrixMjs.Matrix)());
        if (this.renderGroup) {
            if (this.isRenderGroupRoot) this._worldTransform.copyFrom(this.renderGroup.worldTransform);
            else this._worldTransform.appendFrom(this.relativeGroupTransform, this.renderGroup.worldTransform);
        }
        return this._worldTransform;
    }
    // / ////// transform related stuff
    /**
   * The position of the container on the x axis relative to the local coordinates of the parent.
   * An alias to position.x
   */ get x() {
        return this._position.x;
    }
    set x(value) {
        this._position.x = value;
    }
    /**
   * The position of the container on the y axis relative to the local coordinates of the parent.
   * An alias to position.y
   */ get y() {
        return this._position.y;
    }
    set y(value) {
        this._position.y = value;
    }
    /**
   * The coordinate of the object relative to the local coordinates of the parent.
   * @since 4.0.0
   */ get position() {
        return this._position;
    }
    set position(value) {
        this._position.copyFrom(value);
    }
    /**
   * The rotation of the object in radians.
   * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
   */ get rotation() {
        return this._rotation;
    }
    set rotation(value) {
        if (this._rotation !== value) {
            this._rotation = value;
            this._onUpdate(this._skew);
        }
    }
    /**
   * The angle of the object in degrees.
   * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
   */ get angle() {
        return this.rotation * (0, _constMjs.RAD_TO_DEG);
    }
    set angle(value) {
        this.rotation = value * (0, _constMjs.DEG_TO_RAD);
    }
    /**
   * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
   * is the projection of `pivot` in the parent's local space.
   *
   * By default, the pivot is the origin (0, 0).
   * @since 4.0.0
   */ get pivot() {
        if (this._pivot === defaultPivot) this._pivot = new (0, _observablePointMjs.ObservablePoint)(this, 0, 0);
        return this._pivot;
    }
    set pivot(value) {
        if (this._pivot === defaultPivot) this._pivot = new (0, _observablePointMjs.ObservablePoint)(this, 0, 0);
        typeof value === "number" ? this._pivot.set(value) : this._pivot.copyFrom(value);
    }
    /**
   * The skew factor for the object in radians.
   * @since 4.0.0
   */ get skew() {
        if (this._skew === defaultSkew) this._skew = new (0, _observablePointMjs.ObservablePoint)(this, 0, 0);
        return this._skew;
    }
    set skew(value) {
        if (this._skew === defaultSkew) this._skew = new (0, _observablePointMjs.ObservablePoint)(this, 0, 0);
        this._skew.copyFrom(value);
    }
    /**
   * The scale factors of this object along the local coordinate axes.
   *
   * The default scale is (1, 1).
   * @since 4.0.0
   */ get scale() {
        if (this._scale === defaultScale) this._scale = new (0, _observablePointMjs.ObservablePoint)(this, 1, 1);
        return this._scale;
    }
    set scale(value) {
        if (this._scale === defaultScale) this._scale = new (0, _observablePointMjs.ObservablePoint)(this, 0, 0);
        typeof value === "number" ? this._scale.set(value) : this._scale.copyFrom(value);
    }
    /**
   * The width of the Container, setting this will actually modify the scale to achieve the value set.
   * @memberof scene.Container#
   */ get width() {
        return Math.abs(this.scale.x * this.getLocalBounds().width);
    }
    set width(value) {
        const localWidth = this.getLocalBounds().width;
        this._setWidth(value, localWidth);
    }
    /**
   * The height of the Container, setting this will actually modify the scale to achieve the value set.
   * @memberof scene.Container#
   */ get height() {
        return Math.abs(this.scale.y * this.getLocalBounds().height);
    }
    set height(value) {
        const localHeight = this.getLocalBounds().height;
        this._setHeight(value, localHeight);
    }
    /**
   * Retrieves the size of the container as a [Size]{@link Size} object.
   * This is faster than get the width and height separately.
   * @param out - Optional object to store the size in.
   * @returns - The size of the container.
   * @memberof scene.Container#
   */ getSize(out) {
        if (!out) out = {};
        const bounds = this.getLocalBounds();
        out.width = Math.abs(this.scale.x * bounds.width);
        out.height = Math.abs(this.scale.y * bounds.height);
        return out;
    }
    /**
   * Sets the size of the container to the specified width and height.
   * This is faster than setting the width and height separately.
   * @param value - This can be either a number or a [Size]{@link Size} object.
   * @param height - The height to set. Defaults to the value of `width` if not provided.
   * @memberof scene.Container#
   */ setSize(value, height) {
        const size = this.getLocalBounds();
        let convertedWidth;
        let convertedHeight;
        if (typeof value !== "object") {
            convertedWidth = value;
            convertedHeight = height ?? value;
        } else {
            convertedWidth = value.width;
            convertedHeight = value.height ?? value.width;
        }
        if (convertedWidth !== void 0) this._setWidth(convertedWidth, size.width);
        if (convertedHeight !== void 0) this._setHeight(convertedHeight, size.height);
    }
    /** Called when the skew or the rotation changes. */ _updateSkew() {
        const rotation = this._rotation;
        const skew = this._skew;
        this._cx = Math.cos(rotation + skew._y);
        this._sx = Math.sin(rotation + skew._y);
        this._cy = -Math.sin(rotation - skew._x);
        this._sy = Math.cos(rotation - skew._x);
    }
    /**
   * Updates the transform properties of the container (accepts partial values).
   * @param {object} opts - The options for updating the transform.
   * @param {number} opts.x - The x position of the container.
   * @param {number} opts.y - The y position of the container.
   * @param {number} opts.scaleX - The scale factor on the x-axis.
   * @param {number} opts.scaleY - The scale factor on the y-axis.
   * @param {number} opts.rotation - The rotation of the container, in radians.
   * @param {number} opts.skewX - The skew factor on the x-axis.
   * @param {number} opts.skewY - The skew factor on the y-axis.
   * @param {number} opts.pivotX - The x coordinate of the pivot point.
   * @param {number} opts.pivotY - The y coordinate of the pivot point.
   */ updateTransform(opts) {
        this.position.set(typeof opts.x === "number" ? opts.x : this.position.x, typeof opts.y === "number" ? opts.y : this.position.y);
        this.scale.set(typeof opts.scaleX === "number" ? opts.scaleX || 1 : this.scale.x, typeof opts.scaleY === "number" ? opts.scaleY || 1 : this.scale.y);
        this.rotation = typeof opts.rotation === "number" ? opts.rotation : this.rotation;
        this.skew.set(typeof opts.skewX === "number" ? opts.skewX : this.skew.x, typeof opts.skewY === "number" ? opts.skewY : this.skew.y);
        this.pivot.set(typeof opts.pivotX === "number" ? opts.pivotX : this.pivot.x, typeof opts.pivotY === "number" ? opts.pivotY : this.pivot.y);
        return this;
    }
    /**
   * Updates the local transform using the given matrix.
   * @param matrix - The matrix to use for updating the transform.
   */ setFromMatrix(matrix) {
        matrix.decompose(this);
    }
    /** Updates the local transform. */ updateLocalTransform() {
        if ((this._didLocalTransformChangeId & 15) === this._didChangeId) return;
        this._didLocalTransformChangeId = this._didChangeId;
        const lt = this.localTransform;
        const scale = this._scale;
        const pivot = this._pivot;
        const position = this._position;
        const sx = scale._x;
        const sy = scale._y;
        const px = pivot._x;
        const py = pivot._y;
        lt.a = this._cx * sx;
        lt.b = this._sx * sx;
        lt.c = this._cy * sy;
        lt.d = this._sy * sy;
        lt.tx = position._x - (px * lt.a + py * lt.c);
        lt.ty = position._y - (px * lt.b + py * lt.d);
    }
    // / ///// color related stuff
    set alpha(value) {
        if (value === this.localAlpha) return;
        this.localAlpha = value;
        this._updateFlags |= UPDATE_COLOR;
        this._onUpdate();
    }
    /** The opacity of the object. */ get alpha() {
        return this.localAlpha;
    }
    set tint(value) {
        const tempColor = (0, _colorMjs.Color).shared.setValue(value ?? 16777215);
        const bgr = tempColor.toBgrNumber();
        if (bgr === this.localColor) return;
        this.localColor = bgr;
        this._updateFlags |= UPDATE_COLOR;
        this._onUpdate();
    }
    /**
   * The tint applied to the sprite. This is a hex value.
   *
   * A value of 0xFFFFFF will remove any tint effect.
   * @default 0xFFFFFF
   */ get tint() {
        const bgr = this.localColor;
        return ((bgr & 255) << 16) + (bgr & 65280) + (bgr >> 16 & 255);
    }
    // / //////////////// blend related stuff
    set blendMode(value) {
        if (this.localBlendMode === value) return;
        if (this.renderGroup && !this.isRenderGroupRoot) this.renderGroup.structureDidChange = true;
        this._updateFlags |= UPDATE_BLEND;
        this.localBlendMode = value;
        this._onUpdate();
    }
    /**
   * The blend mode to be applied to the sprite. Apply a value of `'normal'` to reset the blend mode.
   * @default 'normal'
   */ get blendMode() {
        return this.localBlendMode;
    }
    // / ///////// VISIBILITY / RENDERABLE /////////////////
    /** The visibility of the object. If false the object will not be drawn, and the transform will not be updated. */ get visible() {
        return !!(this.localDisplayStatus & 2);
    }
    set visible(value) {
        const valueNumber = value ? 1 : 0;
        if ((this.localDisplayStatus & 2) >> 1 === valueNumber) return;
        if (this.renderGroup && !this.isRenderGroupRoot) this.renderGroup.structureDidChange = true;
        this._updateFlags |= UPDATE_VISIBLE;
        this.localDisplayStatus ^= 2;
        this._onUpdate();
    }
    /** @ignore */ get culled() {
        return !(this.localDisplayStatus & 4);
    }
    /** @ignore */ set culled(value) {
        const valueNumber = value ? 1 : 0;
        if ((this.localDisplayStatus & 4) >> 2 === valueNumber) return;
        if (this.renderGroup && !this.isRenderGroupRoot) this.renderGroup.structureDidChange = true;
        this._updateFlags |= UPDATE_VISIBLE;
        this.localDisplayStatus ^= 4;
        this._onUpdate();
    }
    /** Can this object be rendered, if false the object will not be drawn but the transform will still be updated. */ get renderable() {
        return !!(this.localDisplayStatus & 1);
    }
    set renderable(value) {
        const valueNumber = value ? 1 : 0;
        if ((this.localDisplayStatus & 1) === valueNumber) return;
        this._updateFlags |= UPDATE_VISIBLE;
        this.localDisplayStatus ^= 1;
        if (this.renderGroup && !this.isRenderGroupRoot) this.renderGroup.structureDidChange = true;
        this._onUpdate();
    }
    /** Whether or not the object should be rendered. */ get isRenderable() {
        return this.localDisplayStatus === 7 && this.groupAlpha > 0;
    }
    /**
   * Removes all internal references and listeners as well as removes children from the display list.
   * Do not use a Container after calling `destroy`.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
   *  method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for children with textures e.g. Sprites. If options.children
   * is set to true it should destroy the texture of the child sprite
   * @param {boolean} [options.textureSource=false] - Only used for children with textures e.g. Sprites.
   * If options.children is set to true it should destroy the texture source of the child sprite
   * @param {boolean} [options.context=false] - Only used for children with graphicsContexts e.g. Graphics.
   * If options.children is set to true it should destroy the context of the child graphics
   */ destroy(options = false) {
        if (this.destroyed) return;
        this.destroyed = true;
        this.removeFromParent();
        this.parent = null;
        this._mask = null;
        this._filters = null;
        this.effects = null;
        this._position = null;
        this._scale = null;
        this._pivot = null;
        this._skew = null;
        this.emit("destroyed", this);
        this.removeAllListeners();
        const destroyChildren = typeof options === "boolean" ? options : options?.children;
        const oldChildren = this.removeChildren(0, this.children.length);
        if (destroyChildren) for(let i = 0; i < oldChildren.length; ++i)oldChildren[i].destroy(options);
    }
}
Container.mixin((0, _childrenHelperMixinMjs.childrenHelperMixin));
Container.mixin((0, _toLocalGlobalMixinMjs.toLocalGlobalMixin));
Container.mixin((0, _onRenderMixinMjs.onRenderMixin));
Container.mixin((0, _measureMixinMjs.measureMixin));
Container.mixin((0, _effectsMixinMjs.effectsMixin));
Container.mixin((0, _findMixinMjs.findMixin));
Container.mixin((0, _sortMixinMjs.sortMixin));
Container.mixin((0, _cullingMixinMjs.cullingMixin));

},{"eventemitter3":"enSRh","../../color/Color.mjs":"duTAI","../../culling/cullingMixin.mjs":"kXVEy","../../maths/matrix/Matrix.mjs":"kpkIt","../../maths/misc/const.mjs":"71vxN","../../maths/point/ObservablePoint.mjs":"idRba","../../utils/data/uid.mjs":"2iBho","../../utils/logging/deprecation.mjs":"axL6x","./container-mixins/childrenHelperMixin.mjs":"47ljd","./container-mixins/effectsMixin.mjs":"7nHCY","./container-mixins/findMixin.mjs":"kspTE","./container-mixins/measureMixin.mjs":"iR77C","./container-mixins/onRenderMixin.mjs":"9CXJE","./container-mixins/sortMixin.mjs":"2jhjO","./container-mixins/toLocalGlobalMixin.mjs":"bby4a","./RenderGroup.mjs":"hbPVN","./utils/assignWithIgnore.mjs":"dsH7H","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"enSRh":[function(require,module,exports) {
"use strict";
var has = Object.prototype.hasOwnProperty, prefix = "~";
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") throw new TypeError("The listener must be a function");
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
module.exports = EventEmitter;

},{}],"duTAI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
var _colord = require("@pixi/colord");
var _names = require("@pixi/colord/plugins/names");
var _namesDefault = parcelHelpers.interopDefault(_names);
"use strict";
(0, _colord.extend)([
    (0, _namesDefault.default)
]);
const _Color = class _Color {
    /**
   * @param {ColorSource} value - Optional value to use, if not provided, white is used.
   */ constructor(value = 16777215){
        this._value = null;
        this._components = new Float32Array(4);
        this._components.fill(1);
        this._int = 16777215;
        this.value = value;
    }
    /** Get red component (0 - 1) */ get red() {
        return this._components[0];
    }
    /** Get green component (0 - 1) */ get green() {
        return this._components[1];
    }
    /** Get blue component (0 - 1) */ get blue() {
        return this._components[2];
    }
    /** Get alpha component (0 - 1) */ get alpha() {
        return this._components[3];
    }
    /**
   * Set the value, suitable for chaining
   * @param value
   * @see Color.value
   */ setValue(value) {
        this.value = value;
        return this;
    }
    /**
   * The current color source.
   *
   * When setting:
   * - Setting to an instance of `Color` will copy its color source and components.
   * - Otherwise, `Color` will try to normalize the color source and set the components.
   *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
   *
   * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
   * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
   *
   * When getting:
   * - A return value of `null` means the previous value was overridden (e.g., {@link Color.multiply multiply},
   *   {@link Color.premultiply premultiply} or {@link Color.round round}).
   * - Otherwise, the color source used when setting is returned.
   */ set value(value) {
        if (value instanceof _Color) {
            this._value = this._cloneSource(value._value);
            this._int = value._int;
            this._components.set(value._components);
        } else if (value === null) throw new Error("Cannot set Color#value to null");
        else if (this._value === null || !this._isSourceEqual(this._value, value)) {
            this._normalize(value);
            this._value = this._cloneSource(value);
        }
    }
    get value() {
        return this._value;
    }
    /**
   * Copy a color source internally.
   * @param value - Color source
   */ _cloneSource(value) {
        if (typeof value === "string" || typeof value === "number" || value instanceof Number || value === null) return value;
        else if (Array.isArray(value) || ArrayBuffer.isView(value)) return value.slice(0);
        else if (typeof value === "object" && value !== null) return {
            ...value
        };
        return value;
    }
    /**
   * Equality check for color sources.
   * @param value1 - First color source
   * @param value2 - Second color source
   * @returns `true` if the color sources are equal, `false` otherwise.
   */ _isSourceEqual(value1, value2) {
        const type1 = typeof value1;
        const type2 = typeof value2;
        if (type1 !== type2) return false;
        else if (type1 === "number" || type1 === "string" || value1 instanceof Number) return value1 === value2;
        else if (Array.isArray(value1) && Array.isArray(value2) || ArrayBuffer.isView(value1) && ArrayBuffer.isView(value2)) {
            if (value1.length !== value2.length) return false;
            return value1.every((v, i)=>v === value2[i]);
        } else if (value1 !== null && value2 !== null) {
            const keys1 = Object.keys(value1);
            const keys2 = Object.keys(value2);
            if (keys1.length !== keys2.length) return false;
            return keys1.every((key)=>value1[key] === value2[key]);
        }
        return value1 === value2;
    }
    /**
   * Convert to a RGBA color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
   */ toRgba() {
        const [r, g, b, a] = this._components;
        return {
            r,
            g,
            b,
            a
        };
    }
    /**
   * Convert to a RGB color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
   */ toRgb() {
        const [r, g, b] = this._components;
        return {
            r,
            g,
            b
        };
    }
    /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */ toRgbaString() {
        const [r, g, b] = this.toUint8RgbArray();
        return `rgba(${r},${g},${b},${this.alpha})`;
    }
    toUint8RgbArray(out) {
        const [r, g, b] = this._components;
        if (!this._arrayRgb) this._arrayRgb = [];
        out = out || this._arrayRgb;
        out[0] = Math.round(r * 255);
        out[1] = Math.round(g * 255);
        out[2] = Math.round(b * 255);
        return out;
    }
    toArray(out) {
        if (!this._arrayRgba) this._arrayRgba = [];
        out = out || this._arrayRgba;
        const [r, g, b, a] = this._components;
        out[0] = r;
        out[1] = g;
        out[2] = b;
        out[3] = a;
        return out;
    }
    toRgbArray(out) {
        if (!this._arrayRgb) this._arrayRgb = [];
        out = out || this._arrayRgb;
        const [r, g, b] = this._components;
        out[0] = r;
        out[1] = g;
        out[2] = b;
        return out;
    }
    /**
   * Convert to a hexadecimal number.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toNumber(); // returns 16777215
   */ toNumber() {
        return this._int;
    }
    /**
   * Convert to a BGR number
   * @example
   * import { Color } from 'pixi.js';
   * new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff
   */ toBgrNumber() {
        const [r, g, b] = this.toUint8RgbArray();
        return (b << 16) + (g << 8) + r;
    }
    /**
   * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
   * @example
   * import { Color } from 'pixi.js';
   * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
   * @returns {number} - The color as a number in little endian format.
   */ toLittleEndianNumber() {
        const value = this._int;
        return (value >> 16) + (value & 65280) + ((value & 255) << 16);
    }
    /**
   * Multiply with another color. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param {ColorSource} value - The color to multiply by.
   */ multiply(value) {
        const [r, g, b, a] = _Color._temp.setValue(value)._components;
        this._components[0] *= r;
        this._components[1] *= g;
        this._components[2] *= b;
        this._components[3] *= a;
        this._refreshInt();
        this._value = null;
        return this;
    }
    /**
   * Converts color to a premultiplied alpha format. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {Color} - Itself.
   */ premultiply(alpha, applyToRGB = true) {
        if (applyToRGB) {
            this._components[0] *= alpha;
            this._components[1] *= alpha;
            this._components[2] *= alpha;
        }
        this._components[3] = alpha;
        this._refreshInt();
        this._value = null;
        return this;
    }
    /**
   * Premultiplies alpha with current color.
   * @param {number} alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {number} tint multiplied by alpha
   */ toPremultiplied(alpha, applyToRGB = true) {
        if (alpha === 1) return -16777216 + this._int;
        if (alpha === 0) return applyToRGB ? 0 : this._int;
        let r = this._int >> 16 & 255;
        let g = this._int >> 8 & 255;
        let b = this._int & 255;
        if (applyToRGB) {
            r = r * alpha + 0.5 | 0;
            g = g * alpha + 0.5 | 0;
            b = b * alpha + 0.5 | 0;
        }
        return (alpha * 255 << 24) + (r << 16) + (g << 8) + b;
    }
    /**
   * Convert to a hexidecimal string.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHex(); // returns "#ffffff"
   */ toHex() {
        const hexString = this._int.toString(16);
        return `#${"000000".substring(0, 6 - hexString.length) + hexString}`;
    }
    /**
   * Convert to a hexidecimal string with alpha.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHexa(); // returns "#ffffffff"
   */ toHexa() {
        const alphaValue = Math.round(this._components[3] * 255);
        const alphaString = alphaValue.toString(16);
        return this.toHex() + "00".substring(0, 2 - alphaString.length) + alphaString;
    }
    /**
   * Set alpha, suitable for chaining.
   * @param alpha
   */ setAlpha(alpha) {
        this._components[3] = this._clamp(alpha);
        return this;
    }
    /**
   * Normalize the input value into rgba
   * @param value - Input value
   */ _normalize(value) {
        let r;
        let g;
        let b;
        let a;
        if ((typeof value === "number" || value instanceof Number) && value >= 0 && value <= 16777215) {
            const int = value;
            r = (int >> 16 & 255) / 255;
            g = (int >> 8 & 255) / 255;
            b = (int & 255) / 255;
            a = 1;
        } else if ((Array.isArray(value) || value instanceof Float32Array) && value.length >= 3 && value.length <= 4) {
            value = this._clamp(value);
            [r, g, b, a = 1] = value;
        } else if ((value instanceof Uint8Array || value instanceof Uint8ClampedArray) && value.length >= 3 && value.length <= 4) {
            value = this._clamp(value, 0, 255);
            [r, g, b, a = 255] = value;
            r /= 255;
            g /= 255;
            b /= 255;
            a /= 255;
        } else if (typeof value === "string" || typeof value === "object") {
            if (typeof value === "string") {
                const match = _Color.HEX_PATTERN.exec(value);
                if (match) value = `#${match[2]}`;
            }
            const color = (0, _colord.colord)(value);
            if (color.isValid()) {
                ({ r, g, b, a } = color.rgba);
                r /= 255;
                g /= 255;
                b /= 255;
            }
        }
        if (r !== void 0) {
            this._components[0] = r;
            this._components[1] = g;
            this._components[2] = b;
            this._components[3] = a;
            this._refreshInt();
        } else throw new Error(`Unable to convert color ${value}`);
    }
    /** Refresh the internal color rgb number */ _refreshInt() {
        this._clamp(this._components);
        const [r, g, b] = this._components;
        this._int = (r * 255 << 16) + (g * 255 << 8) + (b * 255 | 0);
    }
    /**
   * Clamps values to a range. Will override original values
   * @param value - Value(s) to clamp
   * @param min - Minimum value
   * @param max - Maximum value
   */ _clamp(value, min = 0, max = 1) {
        if (typeof value === "number") return Math.min(Math.max(value, min), max);
        value.forEach((v, i)=>{
            value[i] = Math.min(Math.max(v, min), max);
        });
        return value;
    }
    /**
   * Check if the value is a color-like object
   * @param value - Value to check
   * @returns True if the value is a color-like object
   * @static
   * @example
   * import { Color } from 'pixi.js';
   * Color.isColorLike('white'); // returns true
   * Color.isColorLike(0xffffff); // returns true
   * Color.isColorLike([1, 1, 1]); // returns true
   */ static isColorLike(value) {
        return typeof value === "number" || typeof value === "string" || value instanceof Number || value instanceof _Color || Array.isArray(value) || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Float32Array || value.r !== void 0 && value.g !== void 0 && value.b !== void 0 || value.r !== void 0 && value.g !== void 0 && value.b !== void 0 && value.a !== void 0 || value.h !== void 0 && value.s !== void 0 && value.l !== void 0 || value.h !== void 0 && value.s !== void 0 && value.l !== void 0 && value.a !== void 0 || value.h !== void 0 && value.s !== void 0 && value.v !== void 0 || value.h !== void 0 && value.s !== void 0 && value.v !== void 0 && value.a !== void 0;
    }
};
/**
 * Default Color object for static uses
 * @example
 * import { Color } from 'pixi.js';
 * Color.shared.setValue(0xffffff).toHex(); // '#ffffff'
 */ _Color.shared = new _Color();
/**
 * Temporary Color object for static uses internally.
 * As to not conflict with Color.shared.
 * @ignore
 */ _Color._temp = new _Color();
/** Pattern for hex strings */ // eslint-disable-next-line @typescript-eslint/naming-convention
_Color.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let Color = _Color;

},{"@pixi/colord":"3mETM","@pixi/colord/plugins/names":"lCiKA","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"3mETM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Colord", ()=>j);
parcelHelpers.export(exports, "colord", ()=>w);
parcelHelpers.export(exports, "extend", ()=>k);
parcelHelpers.export(exports, "getFormat", ()=>I);
parcelHelpers.export(exports, "random", ()=>E);
var r = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}, t = function(r) {
    return "string" == typeof r ? r.length > 0 : "number" == typeof r;
}, n = function(r, t, n) {
    return void 0 === t && (t = 0), void 0 === n && (n = Math.pow(10, t)), Math.round(n * r) / n + 0;
}, e = function(r, t, n) {
    return void 0 === t && (t = 0), void 0 === n && (n = 1), r > n ? n : r > t ? r : t;
}, u = function(r) {
    return (r = isFinite(r) ? r % 360 : 0) > 0 ? r : r + 360;
}, a = function(r) {
    return {
        r: e(r.r, 0, 255),
        g: e(r.g, 0, 255),
        b: e(r.b, 0, 255),
        a: e(r.a)
    };
}, o = function(r) {
    return {
        r: n(r.r),
        g: n(r.g),
        b: n(r.b),
        a: n(r.a, 3)
    };
}, i = /^#([0-9a-f]{3,8})$/i, s = function(r) {
    var t = r.toString(16);
    return t.length < 2 ? "0" + t : t;
}, h = function(r) {
    var t = r.r, n = r.g, e = r.b, u = r.a, a = Math.max(t, n, e), o = a - Math.min(t, n, e), i = o ? a === t ? (n - e) / o : a === n ? 2 + (e - t) / o : 4 + (t - n) / o : 0;
    return {
        h: 60 * (i < 0 ? i + 6 : i),
        s: a ? o / a * 100 : 0,
        v: a / 255 * 100,
        a: u
    };
}, b = function(r) {
    var t = r.h, n = r.s, e = r.v, u = r.a;
    t = t / 360 * 6, n /= 100, e /= 100;
    var a = Math.floor(t), o = e * (1 - n), i = e * (1 - (t - a) * n), s = e * (1 - (1 - t + a) * n), h = a % 6;
    return {
        r: 255 * [
            e,
            i,
            o,
            o,
            s,
            e
        ][h],
        g: 255 * [
            s,
            e,
            e,
            i,
            o,
            o
        ][h],
        b: 255 * [
            o,
            o,
            s,
            e,
            e,
            i
        ][h],
        a: u
    };
}, g = function(r) {
    return {
        h: u(r.h),
        s: e(r.s, 0, 100),
        l: e(r.l, 0, 100),
        a: e(r.a)
    };
}, d = function(r) {
    return {
        h: n(r.h),
        s: n(r.s),
        l: n(r.l),
        a: n(r.a, 3)
    };
}, f = function(r) {
    var t, n, e;
    return b((n = (t = r).s, {
        h: t.h,
        s: (n *= ((e = t.l) < 50 ? e : 100 - e) / 100) > 0 ? 2 * n / (e + n) * 100 : 0,
        v: e + n,
        a: t.a
    }));
}, c = function(r) {
    var t, n, e, u;
    return {
        h: (t = h(r)).h,
        s: (u = (200 - (n = t.s)) * (e = t.v) / 100) > 0 && u < 200 ? n * e / 100 / (u <= 100 ? u : 200 - u) * 100 : 0,
        l: u / 2,
        a: t.a
    };
}, l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y = {
    string: [
        [
            function(r) {
                var t = i.exec(r);
                return t ? (r = t[1]).length <= 4 ? {
                    r: parseInt(r[0] + r[0], 16),
                    g: parseInt(r[1] + r[1], 16),
                    b: parseInt(r[2] + r[2], 16),
                    a: 4 === r.length ? n(parseInt(r[3] + r[3], 16) / 255, 2) : 1
                } : 6 === r.length || 8 === r.length ? {
                    r: parseInt(r.substr(0, 2), 16),
                    g: parseInt(r.substr(2, 2), 16),
                    b: parseInt(r.substr(4, 2), 16),
                    a: 8 === r.length ? n(parseInt(r.substr(6, 2), 16) / 255, 2) : 1
                } : null : null;
            },
            "hex"
        ],
        [
            function(r) {
                var t = v.exec(r) || m.exec(r);
                return t ? t[2] !== t[4] || t[4] !== t[6] ? null : a({
                    r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                    g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                    b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                    a: void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
                }) : null;
            },
            "rgb"
        ],
        [
            function(t) {
                var n = l.exec(t) || p.exec(t);
                if (!n) return null;
                var e, u, a = g({
                    h: (e = n[1], u = n[2], void 0 === u && (u = "deg"), Number(e) * (r[u] || 1)),
                    s: Number(n[3]),
                    l: Number(n[4]),
                    a: void 0 === n[5] ? 1 : Number(n[5]) / (n[6] ? 100 : 1)
                });
                return f(a);
            },
            "hsl"
        ]
    ],
    object: [
        [
            function(r) {
                var n = r.r, e = r.g, u = r.b, o = r.a, i = void 0 === o ? 1 : o;
                return t(n) && t(e) && t(u) ? a({
                    r: Number(n),
                    g: Number(e),
                    b: Number(u),
                    a: Number(i)
                }) : null;
            },
            "rgb"
        ],
        [
            function(r) {
                var n = r.h, e = r.s, u = r.l, a = r.a, o = void 0 === a ? 1 : a;
                if (!t(n) || !t(e) || !t(u)) return null;
                var i = g({
                    h: Number(n),
                    s: Number(e),
                    l: Number(u),
                    a: Number(o)
                });
                return f(i);
            },
            "hsl"
        ],
        [
            function(r) {
                var n = r.h, a = r.s, o = r.v, i = r.a, s = void 0 === i ? 1 : i;
                if (!t(n) || !t(a) || !t(o)) return null;
                var h = function(r) {
                    return {
                        h: u(r.h),
                        s: e(r.s, 0, 100),
                        v: e(r.v, 0, 100),
                        a: e(r.a)
                    };
                }({
                    h: Number(n),
                    s: Number(a),
                    v: Number(o),
                    a: Number(s)
                });
                return b(h);
            },
            "hsv"
        ]
    ]
}, N = function(r, t) {
    for(var n = 0; n < t.length; n++){
        var e = t[n][0](r);
        if (e) return [
            e,
            t[n][1]
        ];
    }
    return [
        null,
        void 0
    ];
}, x = function(r) {
    return "string" == typeof r ? N(r.trim(), y.string) : "object" == typeof r && null !== r ? N(r, y.object) : [
        null,
        void 0
    ];
}, I = function(r) {
    return x(r)[1];
}, M = function(r, t) {
    var n = c(r);
    return {
        h: n.h,
        s: e(n.s + 100 * t, 0, 100),
        l: n.l,
        a: n.a
    };
}, H = function(r) {
    return (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 / 255;
}, $ = function(r, t) {
    var n = c(r);
    return {
        h: n.h,
        s: n.s,
        l: e(n.l + 100 * t, 0, 100),
        a: n.a
    };
}, j = function() {
    function r(r) {
        this.parsed = x(r)[0], this.rgba = this.parsed || {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        };
    }
    return r.prototype.isValid = function() {
        return null !== this.parsed;
    }, r.prototype.brightness = function() {
        return n(H(this.rgba), 2);
    }, r.prototype.isDark = function() {
        return H(this.rgba) < .5;
    }, r.prototype.isLight = function() {
        return H(this.rgba) >= .5;
    }, r.prototype.toHex = function() {
        var r, t, e, u, a, i;
        return r = o(this.rgba), t = r.r, e = r.g, u = r.b, i = (a = r.a) < 1 ? s(n(255 * a)) : "", "#" + s(t) + s(e) + s(u) + i;
    }, r.prototype.toRgb = function() {
        return o(this.rgba);
    }, r.prototype.toRgbString = function() {
        var r, t, n, e, u;
        return r = o(this.rgba), t = r.r, n = r.g, e = r.b, (u = r.a) < 1 ? "rgba(" + t + ", " + n + ", " + e + ", " + u + ")" : "rgb(" + t + ", " + n + ", " + e + ")";
    }, r.prototype.toHsl = function() {
        return d(c(this.rgba));
    }, r.prototype.toHslString = function() {
        var r, t, n, e, u;
        return r = d(c(this.rgba)), t = r.h, n = r.s, e = r.l, (u = r.a) < 1 ? "hsla(" + t + ", " + n + "%, " + e + "%, " + u + ")" : "hsl(" + t + ", " + n + "%, " + e + "%)";
    }, r.prototype.toHsv = function() {
        var r;
        return r = h(this.rgba), {
            h: n(r.h),
            s: n(r.s),
            v: n(r.v),
            a: n(r.a, 3)
        };
    }, r.prototype.invert = function() {
        var r;
        return w({
            r: 255 - (r = this.rgba).r,
            g: 255 - r.g,
            b: 255 - r.b,
            a: r.a
        });
    }, r.prototype.saturate = function(r) {
        return void 0 === r && (r = .1), w(M(this.rgba, r));
    }, r.prototype.desaturate = function(r) {
        return void 0 === r && (r = .1), w(M(this.rgba, -r));
    }, r.prototype.grayscale = function() {
        return w(M(this.rgba, -1));
    }, r.prototype.lighten = function(r) {
        return void 0 === r && (r = .1), w($(this.rgba, r));
    }, r.prototype.darken = function(r) {
        return void 0 === r && (r = .1), w($(this.rgba, -r));
    }, r.prototype.rotate = function(r) {
        return void 0 === r && (r = 15), this.hue(this.hue() + r);
    }, r.prototype.alpha = function(r) {
        var t;
        return "number" == typeof r ? w({
            r: (t = this.rgba).r,
            g: t.g,
            b: t.b,
            a: r
        }) : n(this.rgba.a, 3);
    }, r.prototype.hue = function(r) {
        var t = c(this.rgba);
        return "number" == typeof r ? w({
            h: r,
            s: t.s,
            l: t.l,
            a: t.a
        }) : n(t.h);
    }, r.prototype.isEqual = function(r) {
        return this.toHex() === w(r).toHex();
    }, r;
}(), w = function(r) {
    return r instanceof j ? r : new j(r);
}, S = [], k = function(r) {
    r.forEach(function(r) {
        S.indexOf(r) < 0 && (r(j, y), S.push(r));
    });
}, E = function() {
    return new j({
        r: 255 * Math.random(),
        g: 255 * Math.random(),
        b: 255 * Math.random()
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"lCiKA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(e, f) {
        var a = {
            white: "#ffffff",
            bisque: "#ffe4c4",
            blue: "#0000ff",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            azure: "#f0ffff",
            whitesmoke: "#f5f5f5",
            papayawhip: "#ffefd5",
            plum: "#dda0dd",
            blanchedalmond: "#ffebcd",
            black: "#000000",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gainsboro: "#dcdcdc",
            cornsilk: "#fff8dc",
            cornflowerblue: "#6495ed",
            burlywood: "#deb887",
            aquamarine: "#7fffd4",
            beige: "#f5f5dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkkhaki: "#bdb76b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            peachpuff: "#ffdab9",
            darkmagenta: "#8b008b",
            darkred: "#8b0000",
            darkorchid: "#9932cc",
            darkorange: "#ff8c00",
            darkslateblue: "#483d8b",
            gray: "#808080",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            wheat: "#f5deb3",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            ghostwhite: "#f8f8ff",
            darkviolet: "#9400d3",
            magenta: "#ff00ff",
            green: "#008000",
            dodgerblue: "#1e90ff",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            blueviolet: "#8a2be2",
            forestgreen: "#228b22",
            lawngreen: "#7cfc00",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            fuchsia: "#ff00ff",
            brown: "#a52a2a",
            maroon: "#800000",
            mediumblue: "#0000cd",
            lightcoral: "#f08080",
            darkturquoise: "#00ced1",
            lightcyan: "#e0ffff",
            ivory: "#fffff0",
            lightyellow: "#ffffe0",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            linen: "#faf0e6",
            mediumaquamarine: "#66cdaa",
            lemonchiffon: "#fffacd",
            lime: "#00ff00",
            khaki: "#f0e68c",
            mediumseagreen: "#3cb371",
            limegreen: "#32cd32",
            mediumspringgreen: "#00fa9a",
            lightskyblue: "#87cefa",
            lightblue: "#add8e6",
            midnightblue: "#191970",
            lightpink: "#ffb6c1",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            mintcream: "#f5fffa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            navajowhite: "#ffdead",
            navy: "#000080",
            mediumvioletred: "#c71585",
            powderblue: "#b0e0e6",
            palegoldenrod: "#eee8aa",
            oldlace: "#fdf5e6",
            paleturquoise: "#afeeee",
            mediumturquoise: "#48d1cc",
            mediumorchid: "#ba55d3",
            rebeccapurple: "#663399",
            lightsteelblue: "#b0c4de",
            mediumslateblue: "#7b68ee",
            thistle: "#d8bfd8",
            tan: "#d2b48c",
            orchid: "#da70d6",
            mediumpurple: "#9370db",
            purple: "#800080",
            pink: "#ffc0cb",
            skyblue: "#87ceeb",
            springgreen: "#00ff7f",
            palegreen: "#98fb98",
            red: "#ff0000",
            yellow: "#ffff00",
            slateblue: "#6a5acd",
            lavenderblush: "#fff0f5",
            peru: "#cd853f",
            palevioletred: "#db7093",
            violet: "#ee82ee",
            teal: "#008080",
            slategray: "#708090",
            slategrey: "#708090",
            aliceblue: "#f0f8ff",
            darkseagreen: "#8fbc8f",
            darkolivegreen: "#556b2f",
            greenyellow: "#adff2f",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            tomato: "#ff6347",
            silver: "#c0c0c0",
            sienna: "#a0522d",
            lavender: "#e6e6fa",
            lightgreen: "#90ee90",
            orange: "#ffa500",
            orangered: "#ff4500",
            steelblue: "#4682b4",
            royalblue: "#4169e1",
            turquoise: "#40e0d0",
            yellowgreen: "#9acd32",
            salmon: "#fa8072",
            saddlebrown: "#8b4513",
            sandybrown: "#f4a460",
            rosybrown: "#bc8f8f",
            darksalmon: "#e9967a",
            lightgoldenrodyellow: "#fafad2",
            snow: "#fffafa",
            lightgrey: "#d3d3d3",
            lightgray: "#d3d3d3",
            dimgray: "#696969",
            dimgrey: "#696969",
            olivedrab: "#6b8e23",
            olive: "#808000"
        }, r = {};
        for(var d in a)r[a[d]] = d;
        var l = {};
        e.prototype.toName = function(f) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
            var d, i, n = r[this.toHex()];
            if (n) return n;
            if (null == f ? void 0 : f.closest) {
                var o = this.toRgb(), t = 1 / 0, b = "black";
                if (!l.length) for(var c in a)l[c] = new e(a[c]).toRgb();
                for(var g in a){
                    var u = (d = o, i = l[g], Math.pow(d.r - i.r, 2) + Math.pow(d.g - i.g, 2) + Math.pow(d.b - i.b, 2));
                    u < t && (t = u, b = g);
                }
                return b;
            }
        };
        f.string.push([
            function(f) {
                var r = f.toLowerCase(), d = "transparent" === r ? "#0000" : a[r];
                return d ? new e(d).toRgb() : null;
            },
            "name"
        ]);
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kXVEy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cullingMixin", ()=>cullingMixin);
"use strict";
const cullingMixin = {
    cullArea: null,
    cullable: false,
    cullableChildren: true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kpkIt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Matrix", ()=>Matrix);
var _constMjs = require("../misc/const.mjs");
var _pointMjs = require("../point/Point.mjs");
"use strict";
class Matrix {
    /**
   * @param a - x scale
   * @param b - y skew
   * @param c - x skew
   * @param d - y scale
   * @param tx - x translation
   * @param ty - y translation
   */ constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0){
        /** An array of the current matrix. Only populated when `toArray` is called */ this.array = null;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    }
    /**
   * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
   *
   * a = array[0]
   * b = array[1]
   * c = array[3]
   * d = array[4]
   * tx = array[2]
   * ty = array[5]
   * @param array - The array that the matrix will be populated from.
   */ fromArray(array) {
        this.a = array[0];
        this.b = array[1];
        this.c = array[3];
        this.d = array[4];
        this.tx = array[2];
        this.ty = array[5];
    }
    /**
   * Sets the matrix properties.
   * @param a - Matrix component
   * @param b - Matrix component
   * @param c - Matrix component
   * @param d - Matrix component
   * @param tx - Matrix component
   * @param ty - Matrix component
   * @returns This matrix. Good for chaining method calls.
   */ set(a, b, c, d, tx, ty) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    }
    /**
   * Creates an array from the current Matrix object.
   * @param transpose - Whether we need to transpose the matrix or not
   * @param [out=new Float32Array(9)] - If provided the array will be assigned to out
   * @returns The newly created array which contains the matrix
   */ toArray(transpose, out) {
        if (!this.array) this.array = new Float32Array(9);
        const array = out || this.array;
        if (transpose) {
            array[0] = this.a;
            array[1] = this.b;
            array[2] = 0;
            array[3] = this.c;
            array[4] = this.d;
            array[5] = 0;
            array[6] = this.tx;
            array[7] = this.ty;
            array[8] = 1;
        } else {
            array[0] = this.a;
            array[1] = this.c;
            array[2] = this.tx;
            array[3] = this.b;
            array[4] = this.d;
            array[5] = this.ty;
            array[6] = 0;
            array[7] = 0;
            array[8] = 1;
        }
        return array;
    }
    /**
   * Get a new position with the current transformation applied.
   * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
   * @param pos - The origin
   * @param {Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {Point} The new point, transformed through this matrix
   */ apply(pos, newPos) {
        newPos = newPos || new (0, _pointMjs.Point)();
        const x = pos.x;
        const y = pos.y;
        newPos.x = this.a * x + this.c * y + this.tx;
        newPos.y = this.b * x + this.d * y + this.ty;
        return newPos;
    }
    /**
   * Get a new position with the inverse of the current transformation applied.
   * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
   * @param pos - The origin
   * @param {Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {Point} The new point, inverse-transformed through this matrix
   */ applyInverse(pos, newPos) {
        newPos = newPos || new (0, _pointMjs.Point)();
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const d = this.d;
        const tx = this.tx;
        const ty = this.ty;
        const id = 1 / (a * d + c * -b);
        const x = pos.x;
        const y = pos.y;
        newPos.x = d * id * x + -c * id * y + (ty * c - tx * d) * id;
        newPos.y = a * id * y + -b * id * x + (-ty * a + tx * b) * id;
        return newPos;
    }
    /**
   * Translates the matrix on the x and y.
   * @param x - How much to translate x by
   * @param y - How much to translate y by
   * @returns This matrix. Good for chaining method calls.
   */ translate(x, y) {
        this.tx += x;
        this.ty += y;
        return this;
    }
    /**
   * Applies a scale transformation to the matrix.
   * @param x - The amount to scale horizontally
   * @param y - The amount to scale vertically
   * @returns This matrix. Good for chaining method calls.
   */ scale(x, y) {
        this.a *= x;
        this.d *= y;
        this.c *= x;
        this.b *= y;
        this.tx *= x;
        this.ty *= y;
        return this;
    }
    /**
   * Applies a rotation transformation to the matrix.
   * @param angle - The angle in radians.
   * @returns This matrix. Good for chaining method calls.
   */ rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const a1 = this.a;
        const c1 = this.c;
        const tx1 = this.tx;
        this.a = a1 * cos - this.b * sin;
        this.b = a1 * sin + this.b * cos;
        this.c = c1 * cos - this.d * sin;
        this.d = c1 * sin + this.d * cos;
        this.tx = tx1 * cos - this.ty * sin;
        this.ty = tx1 * sin + this.ty * cos;
        return this;
    }
    /**
   * Appends the given Matrix to this Matrix.
   * @param matrix - The matrix to append.
   * @returns This matrix. Good for chaining method calls.
   */ append(matrix) {
        const a1 = this.a;
        const b1 = this.b;
        const c1 = this.c;
        const d1 = this.d;
        this.a = matrix.a * a1 + matrix.b * c1;
        this.b = matrix.a * b1 + matrix.b * d1;
        this.c = matrix.c * a1 + matrix.d * c1;
        this.d = matrix.c * b1 + matrix.d * d1;
        this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
        this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
        return this;
    }
    /**
   * Appends two matrix's and sets the result to this matrix. AB = A * B
   * @param a - The matrix to append.
   * @param b - The matrix to append.
   * @returns This matrix. Good for chaining method calls.
   */ appendFrom(a, b) {
        const a1 = a.a;
        const b1 = a.b;
        const c1 = a.c;
        const d1 = a.d;
        const tx = a.tx;
        const ty = a.ty;
        const a2 = b.a;
        const b2 = b.b;
        const c2 = b.c;
        const d2 = b.d;
        this.a = a1 * a2 + b1 * c2;
        this.b = a1 * b2 + b1 * d2;
        this.c = c1 * a2 + d1 * c2;
        this.d = c1 * b2 + d1 * d2;
        this.tx = tx * a2 + ty * c2 + b.tx;
        this.ty = tx * b2 + ty * d2 + b.ty;
        return this;
    }
    /**
   * Sets the matrix based on all the available properties
   * @param x - Position on the x axis
   * @param y - Position on the y axis
   * @param pivotX - Pivot on the x axis
   * @param pivotY - Pivot on the y axis
   * @param scaleX - Scale on the x axis
   * @param scaleY - Scale on the y axis
   * @param rotation - Rotation in radians
   * @param skewX - Skew on the x axis
   * @param skewY - Skew on the y axis
   * @returns This matrix. Good for chaining method calls.
   */ setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
        this.a = Math.cos(rotation + skewY) * scaleX;
        this.b = Math.sin(rotation + skewY) * scaleX;
        this.c = -Math.sin(rotation - skewX) * scaleY;
        this.d = Math.cos(rotation - skewX) * scaleY;
        this.tx = x - (pivotX * this.a + pivotY * this.c);
        this.ty = y - (pivotX * this.b + pivotY * this.d);
        return this;
    }
    /**
   * Prepends the given Matrix to this Matrix.
   * @param matrix - The matrix to prepend
   * @returns This matrix. Good for chaining method calls.
   */ prepend(matrix) {
        const tx1 = this.tx;
        if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
            const a1 = this.a;
            const c1 = this.c;
            this.a = a1 * matrix.a + this.b * matrix.c;
            this.b = a1 * matrix.b + this.b * matrix.d;
            this.c = c1 * matrix.a + this.d * matrix.c;
            this.d = c1 * matrix.b + this.d * matrix.d;
        }
        this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
        this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
        return this;
    }
    /**
   * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
   * @param transform - The transform to apply the properties to.
   * @returns The transform with the newly applied properties
   */ decompose(transform) {
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const d = this.d;
        const pivot = transform.pivot;
        const skewX = -Math.atan2(-c, d);
        const skewY = Math.atan2(b, a);
        const delta = Math.abs(skewX + skewY);
        if (delta < 1e-5 || Math.abs((0, _constMjs.PI_2) - delta) < 1e-5) {
            transform.rotation = skewY;
            transform.skew.x = transform.skew.y = 0;
        } else {
            transform.rotation = 0;
            transform.skew.x = skewX;
            transform.skew.y = skewY;
        }
        transform.scale.x = Math.sqrt(a * a + b * b);
        transform.scale.y = Math.sqrt(c * c + d * d);
        transform.position.x = this.tx + (pivot.x * a + pivot.y * c);
        transform.position.y = this.ty + (pivot.x * b + pivot.y * d);
        return transform;
    }
    /**
   * Inverts this matrix
   * @returns This matrix. Good for chaining method calls.
   */ invert() {
        const a1 = this.a;
        const b1 = this.b;
        const c1 = this.c;
        const d1 = this.d;
        const tx1 = this.tx;
        const n = a1 * d1 - b1 * c1;
        this.a = d1 / n;
        this.b = -b1 / n;
        this.c = -c1 / n;
        this.d = a1 / n;
        this.tx = (c1 * this.ty - d1 * tx1) / n;
        this.ty = -(a1 * this.ty - b1 * tx1) / n;
        return this;
    }
    /** Checks if this matrix is an identity matrix */ isIdentity() {
        return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
    }
    /**
   * Resets this Matrix to an identity (default) matrix.
   * @returns This matrix. Good for chaining method calls.
   */ identity() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        return this;
    }
    /**
   * Creates a new Matrix object with the same values as this one.
   * @returns A copy of this matrix. Good for chaining method calls.
   */ clone() {
        const matrix = new Matrix();
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
    }
    /**
   * Changes the values of the given matrix to be the same as the ones in this matrix
   * @param matrix - The matrix to copy to.
   * @returns The matrix given in parameter with its values updated.
   */ copyTo(matrix) {
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
    }
    /**
   * Changes the values of the matrix to be the same as the ones in given matrix
   * @param matrix - The matrix to copy from.
   * @returns this
   */ copyFrom(matrix) {
        this.a = matrix.a;
        this.b = matrix.b;
        this.c = matrix.c;
        this.d = matrix.d;
        this.tx = matrix.tx;
        this.ty = matrix.ty;
        return this;
    }
    /**
   * check to see if two matrices are the same
   * @param matrix - The matrix to compare to.
   */ equals(matrix) {
        return matrix.a === this.a && matrix.b === this.b && matrix.c === this.c && matrix.d === this.d && matrix.tx === this.tx && matrix.ty === this.ty;
    }
    toString() {
        return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
    }
    /**
   * A default (identity) matrix.
   *
   * This is a shared object, if you want to modify it consider creating a new `Matrix`
   * @readonly
   */ static get IDENTITY() {
        return identityMatrix.identity();
    }
    /**
   * A static Matrix that can be used to avoid creating new objects.
   * Will always ensure the matrix is reset to identity when requested.
   * Use this object for fast but temporary calculations, as it may be mutated later on.
   * This is a different object to the `IDENTITY` object and so can be modified without changing `IDENTITY`.
   * @readonly
   */ static get shared() {
        return tempMatrix.identity();
    }
}
const tempMatrix = new Matrix();
const identityMatrix = new Matrix();

},{"../misc/const.mjs":"71vxN","../point/Point.mjs":"dkxvR","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"71vxN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEG_TO_RAD", ()=>DEG_TO_RAD);
parcelHelpers.export(exports, "PI_2", ()=>PI_2);
parcelHelpers.export(exports, "RAD_TO_DEG", ()=>RAD_TO_DEG);
"use strict";
const PI_2 = Math.PI * 2;
const RAD_TO_DEG = 180 / Math.PI;
const DEG_TO_RAD = Math.PI / 180;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"dkxvR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point", ()=>Point);
"use strict";
class Point {
    /**
   * Creates a new `Point`
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */ constructor(x = 0, y = 0){
        /** Position of the point on the x axis */ this.x = 0;
        /** Position of the point on the y axis */ this.y = 0;
        this.x = x;
        this.y = y;
    }
    /**
   * Creates a clone of this point
   * @returns A clone of this point
   */ clone() {
        return new Point(this.x, this.y);
    }
    /**
   * Copies `x` and `y` from the given point into this point
   * @param p - The point to copy from
   * @returns The point instance itself
   */ copyFrom(p) {
        this.set(p.x, p.y);
        return this;
    }
    /**
   * Copies this point's x and y into the given point (`p`).
   * @param p - The point to copy to. Can be any of type that is or extends `PointData`
   * @returns The point (`p`) with values updated
   */ copyTo(p) {
        p.set(this.x, this.y);
        return p;
    }
    /**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */ equals(p) {
        return p.x === this.x && p.y === this.y;
    }
    /**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the `x` axis
   * @param {number} [y=x] - position of the point on the `y` axis
   * @returns The point instance itself
   */ set(x = 0, y = x) {
        this.x = x;
        this.y = y;
        return this;
    }
    toString() {
        return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
    }
    /**
   * A static Point object with `x` and `y` values of `0`. Can be used to avoid creating new objects multiple times.
   * @readonly
   */ static get shared() {
        tempPoint.x = 0;
        tempPoint.y = 0;
        return tempPoint;
    }
}
const tempPoint = new Point();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"idRba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObservablePoint", ()=>ObservablePoint);
"use strict";
class ObservablePoint {
    /**
   * Creates a new `ObservablePoint`
   * @param observer - Observer to pass to listen for change events.
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */ constructor(observer, x, y){
        this._x = x || 0;
        this._y = y || 0;
        this._observer = observer;
    }
    /**
   * Creates a clone of this point.
   * @param observer - Optional observer to pass to the new observable point.
   * @returns a copy of this observable point
   */ clone(observer) {
        return new ObservablePoint(observer ?? this._observer, this._x, this._y);
    }
    /**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=x] - position of the point on the y axis
   * @returns The observable point instance itself
   */ set(x = 0, y = x) {
        if (this._x !== x || this._y !== y) {
            this._x = x;
            this._y = y;
            this._observer._onUpdate(this);
        }
        return this;
    }
    /**
   * Copies x and y from the given point (`p`)
   * @param p - The point to copy from. Can be any of type that is or extends `PointData`
   * @returns The observable point instance itself
   */ copyFrom(p) {
        if (this._x !== p.x || this._y !== p.y) {
            this._x = p.x;
            this._y = p.y;
            this._observer._onUpdate(this);
        }
        return this;
    }
    /**
   * Copies this point's x and y into that of the given point (`p`)
   * @param p - The point to copy to. Can be any of type that is or extends `PointData`
   * @returns The point (`p`) with values updated
   */ copyTo(p) {
        p.set(this._x, this._y);
        return p;
    }
    /**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */ equals(p) {
        return p.x === this._x && p.y === this._y;
    }
    toString() {
        return `[pixi.js/math:ObservablePoint x=${0} y=${0} scope=${this._observer}]`;
    }
    /** Position of the observable point on the x axis. */ get x() {
        return this._x;
    }
    set x(value) {
        if (this._x !== value) {
            this._x = value;
            this._observer._onUpdate(this);
        }
    }
    /** Position of the observable point on the y axis. */ get y() {
        return this._y;
    }
    set y(value) {
        if (this._y !== value) {
            this._y = value;
            this._observer._onUpdate(this);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2iBho":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resetUids", ()=>resetUids);
parcelHelpers.export(exports, "uid", ()=>uid);
"use strict";
const uidCache = {
    default: -1
};
function uid(name = "default") {
    if (uidCache[name] === void 0) uidCache[name] = -1;
    return ++uidCache[name];
}
function resetUids() {
    for(const key in uidCache)delete uidCache[key];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"axL6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deprecation", ()=>deprecation);
parcelHelpers.export(exports, "v8_0_0", ()=>v8_0_0);
"use strict";
const warnings = {};
const v8_0_0 = "8.0.0";
function deprecation(version, message, ignoreDepth = 3) {
    if (warnings[message]) return;
    let stack = new Error().stack;
    if (typeof stack === "undefined") console.warn("PixiJS Deprecation Warning: ", `${message}
Deprecated since v${version}`);
    else {
        stack = stack.split("\n").splice(ignoreDepth).join("\n");
        if (console.groupCollapsed) {
            console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${message}
Deprecated since v${version}`);
            console.warn(stack);
            console.groupEnd();
        } else {
            console.warn("PixiJS Deprecation Warning: ", `${message}
Deprecated since v${version}`);
            console.warn(stack);
        }
    }
    warnings[message] = true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"47ljd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "childrenHelperMixin", ()=>childrenHelperMixin);
var _removeItemsMjs = require("../../../utils/data/removeItems.mjs");
var _deprecationMjs = require("../../../utils/logging/deprecation.mjs");
"use strict";
const childrenHelperMixin = {
    allowChildren: true,
    /**
   * Removes all children from this container that are within the begin and end indexes.
   * @param beginIndex - The beginning position.
   * @param endIndex - The ending position. Default value is size of the container.
   * @returns - List of removed children
   * @memberof scene.Container#
   */ removeChildren (beginIndex = 0, endIndex) {
        const end = endIndex ?? this.children.length;
        const range = end - beginIndex;
        const removed = [];
        if (range > 0 && range <= end) {
            for(let i = end - 1; i >= beginIndex; i--){
                const child = this.children[i];
                if (!child) continue;
                if (this.renderGroup) this.renderGroup.removeChild(child);
                removed.push(child);
                child.parent = null;
            }
            (0, _removeItemsMjs.removeItems)(this.children, beginIndex, end);
            for(let i = 0; i < removed.length; ++i){
                this.emit("childRemoved", removed[i], this, i);
                removed[i].emit("removed", this);
            }
            return removed;
        } else if (range === 0 && this.children.length === 0) return removed;
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
    },
    /**
   * Removes a child from the specified index position.
   * @param index - The index to get the child from
   * @returns The child that was removed.
   * @memberof scene.Container#
   */ removeChildAt (index) {
        const child = this.getChildAt(index);
        return this.removeChild(child);
    },
    /**
   * Returns the child at the specified index
   * @param index - The index to get the child at
   * @returns - The child at the given index, if any.
   * @memberof scene.Container#
   */ getChildAt (index) {
        if (index < 0 || index >= this.children.length) throw new Error(`getChildAt: Index (${index}) does not exist.`);
        return this.children[index];
    },
    /**
   * Changes the position of an existing child in the container container
   * @param child - The child Container instance for which you want to change the index number
   * @param index - The resulting index number for the child container
   * @memberof scene.Container#
   */ setChildIndex (child, index) {
        if (index < 0 || index >= this.children.length) throw new Error(`The index ${index} supplied is out of bounds ${this.children.length}`);
        this.getChildIndex(child);
        this.addChildAt(child, index);
    },
    /**
   * Returns the index position of a child Container instance
   * @param child - The Container instance to identify
   * @returns - The index position of the child container to identify
   * @memberof scene.Container#
   */ getChildIndex (child) {
        const index = this.children.indexOf(child);
        if (index === -1) throw new Error("The supplied Container must be a child of the caller");
        return index;
    },
    /**
   * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
   * If the child is already in this container, it will be moved to the specified index.
   * @param {Container} child - The child to add.
   * @param {number} index - The absolute index where the child will be positioned at the end of the operation.
   * @returns {Container} The child that was added.
   * @memberof scene.Container#
   */ addChildAt (child, index) {
        if (!this.allowChildren) (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "addChildAt: Only Containers will be allowed to add children in v8.0.0");
        const { children } = this;
        if (index < 0 || index > children.length) throw new Error(`${child}addChildAt: The index ${index} supplied is out of bounds ${children.length}`);
        if (child.parent) {
            const currentIndex = child.parent.children.indexOf(child);
            if (child.parent === this && currentIndex === index) return child;
            if (currentIndex !== -1) child.parent.children.splice(currentIndex, 1);
        }
        if (index === children.length) children.push(child);
        else children.splice(index, 0, child);
        child.parent = this;
        child.didChange = true;
        child.didViewUpdate = false;
        child._updateFlags = 15;
        if (this.renderGroup) this.renderGroup.addChild(child);
        if (this.sortableChildren) this.sortDirty = true;
        this.emit("childAdded", child, this, index);
        child.emit("added", this);
        return child;
    },
    /**
   * Swaps the position of 2 Containers within this container.
   * @param child - First container to swap
   * @param child2 - Second container to swap
   */ swapChildren (child, child2) {
        if (child === child2) return;
        const index1 = this.getChildIndex(child);
        const index2 = this.getChildIndex(child2);
        this.children[index1] = child2;
        this.children[index2] = child;
    },
    /**
   * Remove the Container from its parent Container. If the Container has no parent, do nothing.
   * @memberof scene.Container#
   */ removeFromParent () {
        this.parent?.removeChild(this);
    }
};

},{"../../../utils/data/removeItems.mjs":"jp57I","../../../utils/logging/deprecation.mjs":"axL6x","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jp57I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeItems", ()=>removeItems);
"use strict";
function removeItems(arr, startIdx, removeCount) {
    const length = arr.length;
    let i;
    if (startIdx >= length || removeCount === 0) return;
    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
    const len = length - removeCount;
    for(i = startIdx; i < len; ++i)arr[i] = arr[i + removeCount];
    arr.length = len;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7nHCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "effectsMixin", ()=>effectsMixin);
var _filterEffectMjs = require("../../../filters/FilterEffect.mjs");
var _maskEffectManagerMjs = require("../../../rendering/mask/MaskEffectManager.mjs");
var _poolGroupMjs = require("../../../utils/pool/PoolGroup.mjs");
"use strict";
const effectsMixin = {
    _mask: null,
    _filters: null,
    /**
   * @todo Needs docs.
   * @memberof scene.Container#
   * @type {Array<Effect>}
   */ effects: [],
    /**
   * @todo Needs docs.
   * @param effect - The effect to add.
   * @memberof scene.Container#
   * @ignore
   */ addEffect (effect) {
        const index = this.effects.indexOf(effect);
        if (index !== -1) return;
        this.effects.push(effect);
        this.effects.sort((a, b)=>a.priority - b.priority);
        if (this.renderGroup) this.renderGroup.structureDidChange = true;
        this._updateIsSimple();
    },
    /**
   * @todo Needs docs.
   * @param effect - The effect to remove.
   * @memberof scene.Container#
   * @ignore
   */ removeEffect (effect) {
        const index = this.effects.indexOf(effect);
        if (index === -1) return;
        this.effects.splice(index, 1);
        if (!this.isRenderGroupRoot && this.renderGroup) this.renderGroup.structureDidChange = true;
        this._updateIsSimple();
    },
    set mask (value){
        this._mask || (this._mask = {
            mask: null,
            effect: null
        });
        if (this._mask.mask === value) return;
        if (this._mask.effect) {
            this.removeEffect(this._mask.effect);
            (0, _maskEffectManagerMjs.MaskEffectManager).returnMaskEffect(this._mask.effect);
            this._mask.effect = null;
        }
        this._mask.mask = value;
        if (value === null || value === void 0) return;
        const effect = (0, _maskEffectManagerMjs.MaskEffectManager).getMaskEffect(value);
        this._mask.effect = effect;
        this.addEffect(effect);
    },
    /**
   * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
   * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
   * {@link Graphics} or a {@link Sprite} object. This allows for much faster masking in canvas as it
   * utilities shape clipping. Furthermore, a mask of an object must be in the subtree of its parent.
   * Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.
   * To remove a mask, set this property to `null`.
   *
   * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
   * @example
   * import { Graphics, Sprite } from 'pixi.js';
   *
   * const graphics = new Graphics();
   * graphics.beginFill(0xFF3300);
   * graphics.drawRect(50, 250, 100, 100);
   * graphics.endFill();
   *
   * const sprite = new Sprite(texture);
   * sprite.mask = graphics;
   * @memberof scene.Container#
   */ get mask () {
        return this._mask?.mask;
    },
    set filters (value){
        if (!Array.isArray(value) && value) value = [
            value
        ];
        value;
        this._filters || (this._filters = {
            filters: null,
            effect: null,
            filterArea: null
        });
        const hasFilters = value?.length > 0;
        const didChange = this._filters.effect && !hasFilters || !this._filters.effect && hasFilters;
        value = Array.isArray(value) ? value.slice(0) : value;
        this._filters.filters = Object.freeze(value);
        if (didChange) {
            if (hasFilters) {
                const effect = (0, _poolGroupMjs.BigPool).get((0, _filterEffectMjs.FilterEffect));
                this._filters.effect = effect;
                this.addEffect(effect);
            } else {
                const effect = this._filters.effect;
                this.removeEffect(effect);
                effect.filterArea = null;
                effect.filters = null;
                this._filters.effect = null;
                (0, _poolGroupMjs.BigPool).return(effect);
            }
        }
        if (hasFilters) {
            this._filters.effect.filters = value;
            this._filters.effect.filterArea = this.filterArea;
        }
    },
    /**
   * Sets the filters for the displayObject.
   * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
   * To remove filters simply set this property to `'null'`.
   * @memberof scene.Container#
   */ get filters () {
        return this._filters?.filters;
    },
    set filterArea (value){
        this._filters || (this._filters = {
            filters: null,
            effect: null,
            filterArea: null
        });
        this._filters.filterArea = value;
    },
    /**
   * The area the filter is applied to. This is used as more of an optimization
   * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
   *
   * Also works as an interaction mask.
   * @memberof scene.Container#
   */ get filterArea () {
        return this._filters?.filterArea;
    }
};

},{"../../../filters/FilterEffect.mjs":"4YaiG","../../../rendering/mask/MaskEffectManager.mjs":"9XnZy","../../../utils/pool/PoolGroup.mjs":"bj9CN","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4YaiG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilterEffect", ()=>FilterEffect);
"use strict";
class FilterEffect {
    constructor(options){
        this.pipe = "filter";
        this.priority = 1;
        this.filters = options?.filters;
        this.filterArea = options?.filterArea;
    }
    destroy() {
        for(let i = 0; i < this.filters.length; i++)this.filters[i].destroy();
        this.filters = null;
        this.filterArea = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9XnZy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MaskEffectManager", ()=>MaskEffectManager);
parcelHelpers.export(exports, "MaskEffectManagerClass", ()=>MaskEffectManagerClass);
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _poolGroupMjs = require("../../utils/pool/PoolGroup.mjs");
"use strict";
class MaskEffectManagerClass {
    constructor(){
        /**
     * @private
     */ this._effectClasses = [];
        this._tests = [];
        this._initialized = false;
    }
    init() {
        if (this._initialized) return;
        this._initialized = true;
        this._effectClasses.forEach((test)=>{
            this.add({
                test: test.test,
                maskClass: test
            });
        });
    }
    add(test) {
        this._tests.push(test);
    }
    getMaskEffect(item) {
        if (!this._initialized) this.init();
        for(let i = 0; i < this._tests.length; i++){
            const test = this._tests[i];
            if (test.test(item)) return (0, _poolGroupMjs.BigPool).get(test.maskClass, item);
        }
        return item;
    }
    returnMaskEffect(effect) {
        (0, _poolGroupMjs.BigPool).return(effect);
    }
}
const MaskEffectManager = new MaskEffectManagerClass();
(0, _extensionsMjs.extensions).handleByList((0, _extensionsMjs.ExtensionType).MaskEffect, MaskEffectManager._effectClasses);

},{"../../extensions/Extensions.mjs":"c8doH","../../utils/pool/PoolGroup.mjs":"bj9CN","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bj9CN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BigPool", ()=>BigPool);
parcelHelpers.export(exports, "PoolGroupClass", ()=>PoolGroupClass);
var _poolMjs = require("./Pool.mjs");
"use strict";
class PoolGroupClass {
    constructor(){
        /**
     * A map to store the pools by their class type.
     * @private
     */ this._poolsByClass = /* @__PURE__ */ new Map();
    }
    /**
   * Prepopulates a specific pool with a given number of items.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
   * @param {number} total - The number of items to add to the pool.
   */ prepopulate(Class, total) {
        const classPool = this.getPool(Class);
        classPool.prepopulate(total);
    }
    /**
   * Gets an item from a specific pool.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} Class - The constructor of the items in the pool.
   * @param {unknown} [data] - Optional data to pass to the item's constructor.
   * @returns {T} The item from the pool.
   */ get(Class, data) {
        const pool = this.getPool(Class);
        return pool.get(data);
    }
    /**
   * Returns an item to its respective pool.
   * @param {PoolItem} item - The item to return to the pool.
   */ return(item) {
        const pool = this.getPool(item.constructor);
        pool.return(item);
    }
    /**
   * Gets a specific pool based on the class type.
   * @template T The type of items in the pool. Must extend PoolItem.
   * @param {PoolItemConstructor<T>} ClassType - The constructor of the items in the pool.
   * @returns {Pool<T>} The pool of the given class type.
   */ getPool(ClassType) {
        if (!this._poolsByClass.has(ClassType)) this._poolsByClass.set(ClassType, new (0, _poolMjs.Pool)(ClassType));
        return this._poolsByClass.get(ClassType);
    }
    /** gets the usage stats of each pool in the system */ stats() {
        const stats = {};
        this._poolsByClass.forEach((pool)=>{
            const name = stats[pool._classType.name] ? pool._classType.name + pool._classType.ID : pool._classType.name;
            stats[name] = {
                free: pool.totalFree,
                used: pool.totalUsed,
                size: pool.totalSize
            };
        });
        return stats;
    }
}
const BigPool = new PoolGroupClass();

},{"./Pool.mjs":"6VuOt","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6VuOt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pool", ()=>Pool);
"use strict";
class Pool {
    /**
   * Constructs a new Pool.
   * @param ClassType - The constructor of the items in the pool.
   * @param {number} [initialSize] - The initial size of the pool.
   */ constructor(ClassType, initialSize){
        this._pool = [];
        this._count = 0;
        this._index = 0;
        this._classType = ClassType;
        if (initialSize) this.prepopulate(initialSize);
    }
    /**
   * Prepopulates the pool with a given number of items.
   * @param total - The number of items to add to the pool.
   */ prepopulate(total) {
        for(let i = 0; i < total; i++)this._pool[this._index++] = new this._classType();
        this._count += total;
    }
    /**
   * Gets an item from the pool. Calls the item's `init` method if it exists.
   * If there are no items left in the pool, a new one will be created.
   * @param {unknown} [data] - Optional data to pass to the item's constructor.
   * @returns {T} The item from the pool.
   */ get(data) {
        let item;
        if (this._index > 0) item = this._pool[--this._index];
        else item = new this._classType();
        item.init?.(data);
        return item;
    }
    /**
   * Returns an item to the pool. Calls the item's `reset` method if it exists.
   * @param {T} item - The item to return to the pool.
   */ return(item) {
        item.reset?.();
        this._pool[this._index++] = item;
    }
    /**
   * Gets the number of items in the pool.
   * @readonly
   * @member {number}
   */ get totalSize() {
        return this._count;
    }
    /**
   * Gets the number of items in the pool that are free to use without needing to create more.
   * @readonly
   * @member {number}
   */ get totalFree() {
        return this._index;
    }
    /**
   * Gets the number of items in the pool that are currently in use.
   * @readonly
   * @member {number}
   */ get totalUsed() {
        return this._count - this._index;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kspTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findMixin", ()=>findMixin);
var _deprecationMjs = require("../../../utils/logging/deprecation.mjs");
"use strict";
const findMixin = {
    /**
   * The instance label of the object.
   * @memberof scene.Container#
   * @member {string} label
   */ label: null,
    /**
   * The instance name of the object.
   * @deprecated since 8.0.0
   * @see scene.Container#label
   * @member {string} name
   * @memberof scene.Container#
   */ get name () {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Container.name property has been removed, use Container.label instead");
        return this.label;
    },
    set name (value){
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Container.name property has been removed, use Container.label instead");
        this.label = value;
    },
    /**
   * @method getChildByName
   * @deprecated since 8.0.0
   * @param {string} name - Instance name.
   * @param {boolean}[deep=false] - Whether to search recursively
   * @returns {Container} The child with the specified name.
   * @see scene.Container#getChildByLabel
   * @memberof scene.Container#
   */ getChildByName (name, deep = false) {
        return this.getChildByLabel(name, deep);
    },
    /**
   * Returns the first child in the container with the specified label.
   *
   * Recursive searches are done in a pre-order traversal.
   * @memberof scene.Container#
   * @param {string|RegExp} label - Instance label.
   * @param {boolean}[deep=false] - Whether to search recursively
   * @returns {Container} The child with the specified label.
   */ getChildByLabel (label, deep = false) {
        const children = this.children;
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (child.label === label || label instanceof RegExp && label.test(child.label)) return child;
        }
        if (deep) for(let i = 0; i < children.length; i++){
            const child = children[i];
            const found = child.getChildByLabel(label, true);
            if (found) return found;
        }
        return null;
    },
    /**
   * Returns all children in the container with the specified label.
   * @memberof scene.Container#
   * @param {string|RegExp} label - Instance label.
   * @param {boolean}[deep=false] - Whether to search recursively
   * @param {Container[]} [out=[]] - The array to store matching children in.
   * @returns {Container[]} An array of children with the specified label.
   */ getChildrenByLabel (label, deep = false, out = []) {
        const children = this.children;
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (child.label === label || label instanceof RegExp && label.test(child.label)) out.push(child);
        }
        if (deep) for(let i = 0; i < children.length; i++)children[i].getChildrenByLabel(label, true, out);
        return out;
    }
};

},{"../../../utils/logging/deprecation.mjs":"axL6x","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"iR77C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "measureMixin", ()=>measureMixin);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _boundsMjs = require("../bounds/Bounds.mjs");
var _getGlobalBoundsMjs = require("../bounds/getGlobalBounds.mjs");
var _getLocalBoundsMjs = require("../bounds/getLocalBounds.mjs");
var _checkChildrenDidChangeMjs = require("../utils/checkChildrenDidChange.mjs");
"use strict";
const tempMatrix = new (0, _matrixMjs.Matrix)();
const measureMixin = {
    _localBoundsCacheId: -1,
    _localBoundsCacheData: null,
    _setWidth (value, localWidth) {
        const sign = Math.sign(this.scale.x) || 1;
        if (localWidth !== 0) this.scale.x = value / localWidth * sign;
        else this.scale.x = sign;
    },
    _setHeight (value, localHeight) {
        const sign = Math.sign(this.scale.y) || 1;
        if (localHeight !== 0) this.scale.y = value / localHeight * sign;
        else this.scale.y = sign;
    },
    /**
   * Retrieves the local bounds of the container as a Bounds object.
   * @returns - The bounding area.
   * @memberof scene.Container#
   */ getLocalBounds () {
        if (!this._localBoundsCacheData) this._localBoundsCacheData = {
            data: [],
            index: 1,
            didChange: false,
            localBounds: new (0, _boundsMjs.Bounds)()
        };
        const localBoundsCacheData = this._localBoundsCacheData;
        localBoundsCacheData.index = 1;
        localBoundsCacheData.didChange = false;
        if (localBoundsCacheData.data[0] !== this._didChangeId >> 12) {
            localBoundsCacheData.didChange = true;
            localBoundsCacheData.data[0] = this._didChangeId >> 12;
        }
        (0, _checkChildrenDidChangeMjs.checkChildrenDidChange)(this, localBoundsCacheData);
        if (localBoundsCacheData.didChange) (0, _getLocalBoundsMjs.getLocalBounds)(this, localBoundsCacheData.localBounds, tempMatrix);
        return localBoundsCacheData.localBounds;
    },
    /**
   * Calculates and returns the (world) bounds of the display object as a [Rectangle]{@link Rectangle}.
   * @param skipUpdate - Setting to `true` will stop the transforms of the scene graph from
   *  being updated. This means the calculation returned MAY be out of date BUT will give you a
   *  nice performance boost.
   * @param bounds - Optional bounds to store the result of the bounds calculation.
   * @returns - The minimum axis-aligned rectangle in world space that fits around this object.
   * @memberof scene.Container#
   */ getBounds (skipUpdate, bounds) {
        return (0, _getGlobalBoundsMjs.getGlobalBounds)(this, skipUpdate, bounds || new (0, _boundsMjs.Bounds)());
    }
};

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","../bounds/Bounds.mjs":"2E5wx","../bounds/getGlobalBounds.mjs":"2VhdS","../bounds/getLocalBounds.mjs":"l31Se","../utils/checkChildrenDidChange.mjs":"haHpv","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2E5wx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bounds", ()=>Bounds);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _rectangleMjs = require("../../../maths/shapes/Rectangle.mjs");
"use strict";
const defaultMatrix = new (0, _matrixMjs.Matrix)();
class Bounds {
    constructor(minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity){
        /** @default Infinity */ this.minX = Infinity;
        /** @default Infinity */ this.minY = Infinity;
        /** @default -Infinity */ this.maxX = -Infinity;
        /** @default -Infinity */ this.maxY = -Infinity;
        this.matrix = defaultMatrix;
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    }
    /**
   * Checks if bounds are empty.
   * @returns - True if empty.
   */ isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY;
    }
    /** The bounding rectangle of the bounds. */ get rectangle() {
        if (!this._rectangle) this._rectangle = new (0, _rectangleMjs.Rectangle)();
        const rectangle = this._rectangle;
        if (this.minX > this.maxX || this.minY > this.maxY) {
            rectangle.x = 0;
            rectangle.y = 0;
            rectangle.width = 0;
            rectangle.height = 0;
        } else rectangle.copyFromBounds(this);
        return rectangle;
    }
    /** Clears the bounds and resets. */ clear() {
        this.minX = Infinity;
        this.minY = Infinity;
        this.maxX = -Infinity;
        this.maxY = -Infinity;
        this.matrix = defaultMatrix;
        return this;
    }
    /**
   * Sets the bounds.
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   */ set(x0, y0, x1, y1) {
        this.minX = x0;
        this.minY = y0;
        this.maxX = x1;
        this.maxY = y1;
    }
    /**
   * Adds sprite frame
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   * @param matrix
   */ addFrame(x0, y0, x1, y1, matrix) {
        matrix || (matrix = this.matrix);
        const a = matrix.a;
        const b = matrix.b;
        const c = matrix.c;
        const d = matrix.d;
        const tx = matrix.tx;
        const ty = matrix.ty;
        let minX = this.minX;
        let minY = this.minY;
        let maxX = this.maxX;
        let maxY = this.maxY;
        let x = a * x0 + c * y0 + tx;
        let y = b * x0 + d * y0 + ty;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        x = a * x1 + c * y0 + tx;
        y = b * x1 + d * y0 + ty;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        x = a * x0 + c * y1 + tx;
        y = b * x0 + d * y1 + ty;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        x = a * x1 + c * y1 + tx;
        y = b * x1 + d * y1 + ty;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    }
    /**
   * Adds a rectangle to the bounds.
   * @param rect - The rectangle to be added.
   * @param matrix - The matrix to apply to the bounds.
   */ addRect(rect, matrix) {
        this.addFrame(rect.x, rect.y, rect.x + rect.width, rect.y + rect.height, matrix);
    }
    /**
   * Adds other {@link Bounds}.
   * @param bounds - The Bounds to be added
   * @param matrix
   */ addBounds(bounds, matrix) {
        this.addFrame(bounds.minX, bounds.minY, bounds.maxX, bounds.maxY, matrix);
    }
    /**
   * Adds other Bounds, masked with Bounds.
   * @param mask - The Bounds to be added.
   */ addBoundsMask(mask) {
        this.minX = this.minX > mask.minX ? this.minX : mask.minX;
        this.minY = this.minY > mask.minY ? this.minY : mask.minY;
        this.maxX = this.maxX < mask.maxX ? this.maxX : mask.maxX;
        this.maxY = this.maxY < mask.maxY ? this.maxY : mask.maxY;
    }
    /**
   * Adds other Bounds, multiplied with matrix.
   * @param matrix - The matrix to apply to the bounds.
   */ applyMatrix(matrix) {
        const minX = this.minX;
        const minY = this.minY;
        const maxX = this.maxX;
        const maxY = this.maxY;
        const { a, b, c, d, tx, ty } = matrix;
        let x = a * minX + c * minY + tx;
        let y = b * minX + d * minY + ty;
        this.minX = x;
        this.minY = y;
        this.maxX = x;
        this.maxY = y;
        x = a * maxX + c * minY + tx;
        y = b * maxX + d * minY + ty;
        this.minX = x < this.minX ? x : this.minX;
        this.minY = y < this.minY ? y : this.minY;
        this.maxX = x > this.maxX ? x : this.maxX;
        this.maxY = y > this.maxY ? y : this.maxY;
        x = a * minX + c * maxY + tx;
        y = b * minX + d * maxY + ty;
        this.minX = x < this.minX ? x : this.minX;
        this.minY = y < this.minY ? y : this.minY;
        this.maxX = x > this.maxX ? x : this.maxX;
        this.maxY = y > this.maxY ? y : this.maxY;
        x = a * maxX + c * maxY + tx;
        y = b * maxX + d * maxY + ty;
        this.minX = x < this.minX ? x : this.minX;
        this.minY = y < this.minY ? y : this.minY;
        this.maxX = x > this.maxX ? x : this.maxX;
        this.maxY = y > this.maxY ? y : this.maxY;
    }
    /**
   * Resizes the bounds object to include the given rectangle.
   * @param rect - The rectangle to be included.
   */ fit(rect) {
        if (this.minX < rect.left) this.minX = rect.left;
        if (this.maxX > rect.right) this.maxX = rect.right;
        if (this.minY < rect.top) this.minY = rect.top;
        if (this.maxY > rect.bottom) this.maxY = rect.bottom;
        return this;
    }
    /**
   * Resizes the bounds object to include the given bounds.
   * @param left - The left value of the bounds.
   * @param right - The right value of the bounds.
   * @param top - The top value of the bounds.
   * @param bottom - The bottom value of the bounds.
   */ fitBounds(left, right, top, bottom) {
        if (this.minX < left) this.minX = left;
        if (this.maxX > right) this.maxX = right;
        if (this.minY < top) this.minY = top;
        if (this.maxY > bottom) this.maxY = bottom;
        return this;
    }
    /**
   * Pads bounds object, making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   */ pad(paddingX, paddingY = paddingX) {
        this.minX -= paddingX;
        this.maxX += paddingX;
        this.minY -= paddingY;
        this.maxY += paddingY;
        return this;
    }
    /** Ceils the bounds. */ ceil() {
        this.minX = Math.floor(this.minX);
        this.minY = Math.floor(this.minY);
        this.maxX = Math.ceil(this.maxX);
        this.maxY = Math.ceil(this.maxY);
        return this;
    }
    /** Clones the bounds. */ clone() {
        return new Bounds(this.minX, this.minY, this.maxX, this.maxY);
    }
    /**
   * Scales the bounds by the given values
   * @param x - The X value to scale by.
   * @param y - The Y value to scale by.
   */ scale(x, y = x) {
        this.minX *= x;
        this.minY *= y;
        this.maxX *= x;
        this.maxY *= y;
        return this;
    }
    /** the x value of the bounds. */ get x() {
        return this.minX;
    }
    set x(value) {
        const width = this.maxX - this.minX;
        this.minX = value;
        this.maxX = value + width;
    }
    /** the y value of the bounds. */ get y() {
        return this.minY;
    }
    set y(value) {
        const height = this.maxY - this.minY;
        this.minY = value;
        this.maxY = value + height;
    }
    /** the width value of the bounds. */ get width() {
        return this.maxX - this.minX;
    }
    set width(value) {
        this.maxX = this.minX + value;
    }
    /** the height value of the bounds. */ get height() {
        return this.maxY - this.minY;
    }
    set height(value) {
        this.maxY = this.minY + value;
    }
    /** the left value of the bounds. */ get left() {
        return this.minX;
    }
    /** the right value of the bounds. */ get right() {
        return this.maxX;
    }
    /** the top value of the bounds. */ get top() {
        return this.minY;
    }
    /** the bottom value of the bounds. */ get bottom() {
        return this.maxY;
    }
    /** Is the bounds positive. */ get isPositive() {
        return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
    }
    get isValid() {
        return this.minX + this.minY !== Infinity;
    }
    /**
   * Adds screen vertices from array
   * @param vertexData - calculated vertices
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   * @param matrix
   */ addVertexData(vertexData, beginOffset, endOffset, matrix) {
        let minX = this.minX;
        let minY = this.minY;
        let maxX = this.maxX;
        let maxY = this.maxY;
        matrix || (matrix = this.matrix);
        const a = matrix.a;
        const b = matrix.b;
        const c = matrix.c;
        const d = matrix.d;
        const tx = matrix.tx;
        const ty = matrix.ty;
        for(let i = beginOffset; i < endOffset; i += 2){
            const localX = vertexData[i];
            const localY = vertexData[i + 1];
            const x = a * localX + c * localY + tx;
            const y = b * localX + d * localY + ty;
            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;
        }
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    }
    /**
   * Checks if the point is contained within the bounds.
   * @param x - x coordinate
   * @param y - y coordinate
   */ containsPoint(x, y) {
        if (this.minX <= x && this.minY <= y && this.maxX >= x && this.maxY >= y) return true;
        return false;
    }
    toString() {
        return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
    }
}

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","../../../maths/shapes/Rectangle.mjs":"kCPrw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kCPrw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rectangle", ()=>Rectangle);
var _pointMjs = require("../point/Point.mjs");
"use strict";
const tempPoints = [
    new (0, _pointMjs.Point)(),
    new (0, _pointMjs.Point)(),
    new (0, _pointMjs.Point)(),
    new (0, _pointMjs.Point)()
];
class Rectangle {
    /**
   * @param x - The X coordinate of the upper-left corner of the rectangle
   * @param y - The Y coordinate of the upper-left corner of the rectangle
   * @param width - The overall width of the rectangle
   * @param height - The overall height of the rectangle
   */ constructor(x = 0, y = 0, width = 0, height = 0){
        /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'rectangle'
     */ this.type = "rectangle";
        this.x = Number(x);
        this.y = Number(y);
        this.width = Number(width);
        this.height = Number(height);
    }
    /** Returns the left edge of the rectangle. */ get left() {
        return this.x;
    }
    /** Returns the right edge of the rectangle. */ get right() {
        return this.x + this.width;
    }
    /** Returns the top edge of the rectangle. */ get top() {
        return this.y;
    }
    /** Returns the bottom edge of the rectangle. */ get bottom() {
        return this.y + this.height;
    }
    /** Determines whether the Rectangle is empty. */ isEmpty() {
        return this.left === this.right || this.top === this.bottom;
    }
    /** A constant empty rectangle. This is a new object every time the property is accessed */ static get EMPTY() {
        return new Rectangle(0, 0, 0, 0);
    }
    /**
   * Creates a clone of this Rectangle
   * @returns a copy of the rectangle
   */ clone() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }
    /**
   * Converts a Bounds object to a Rectangle object.
   * @param bounds - The bounds to copy and convert to a rectangle.
   * @returns Returns itself.
   */ copyFromBounds(bounds) {
        this.x = bounds.minX;
        this.y = bounds.minY;
        this.width = bounds.maxX - bounds.minX;
        this.height = bounds.maxY - bounds.minY;
        return this;
    }
    /**
   * Copies another rectangle to this one.
   * @param rectangle - The rectangle to copy from.
   * @returns Returns itself.
   */ copyFrom(rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        return this;
    }
    /**
   * Copies this rectangle to another one.
   * @param rectangle - The rectangle to copy to.
   * @returns Returns given parameter.
   */ copyTo(rectangle) {
        rectangle.copyFrom(this);
        return rectangle;
    }
    /**
   * Checks whether the x and y coordinates given are contained within this Rectangle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Rectangle
   */ contains(x, y) {
        if (this.width <= 0 || this.height <= 0) return false;
        if (x >= this.x && x < this.x + this.width) {
            if (y >= this.y && y < this.y + this.height) return true;
        }
        return false;
    }
    /**
   * Checks whether the x and y coordinates given are contained within this rectangle including the stroke.
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @returns Whether the x/y coordinates are within this rectangle
   */ strokeContains(x, y, strokeWidth) {
        const { width, height } = this;
        if (width <= 0 || height <= 0) return false;
        const _x = this.x;
        const _y = this.y;
        const outerLeft = _x - strokeWidth / 2;
        const outerRight = _x + width + strokeWidth / 2;
        const outerTop = _y - strokeWidth / 2;
        const outerBottom = _y + height + strokeWidth / 2;
        const innerLeft = _x + strokeWidth / 2;
        const innerRight = _x + width - strokeWidth / 2;
        const innerTop = _y + strokeWidth / 2;
        const innerBottom = _y + height - strokeWidth / 2;
        return x >= outerLeft && x <= outerRight && y >= outerTop && y <= outerBottom && !(x > innerLeft && x < innerRight && y > innerTop && y < innerBottom);
    }
    /**
   * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
   * Returns true only if the area of the intersection is >0, this means that Rectangles
   * sharing a side are not overlapping. Another side effect is that an arealess rectangle
   * (width or height equal to zero) can't intersect any other rectangle.
   * @param {Rectangle} other - The Rectangle to intersect with `this`.
   * @param {Matrix} transform - The transformation matrix of `other`.
   * @returns {boolean} A value of `true` if the transformed `other` Rectangle intersects with `this`; otherwise `false`.
   */ intersects(other, transform) {
        if (!transform) {
            const x02 = this.x < other.x ? other.x : this.x;
            const x12 = this.right > other.right ? other.right : this.right;
            if (x12 <= x02) return false;
            const y02 = this.y < other.y ? other.y : this.y;
            const y12 = this.bottom > other.bottom ? other.bottom : this.bottom;
            return y12 > y02;
        }
        const x0 = this.left;
        const x1 = this.right;
        const y0 = this.top;
        const y1 = this.bottom;
        if (x1 <= x0 || y1 <= y0) return false;
        const lt = tempPoints[0].set(other.left, other.top);
        const lb = tempPoints[1].set(other.left, other.bottom);
        const rt = tempPoints[2].set(other.right, other.top);
        const rb = tempPoints[3].set(other.right, other.bottom);
        if (rt.x <= lt.x || lb.y <= lt.y) return false;
        const s = Math.sign(transform.a * transform.d - transform.b * transform.c);
        if (s === 0) return false;
        transform.apply(lt, lt);
        transform.apply(lb, lb);
        transform.apply(rt, rt);
        transform.apply(rb, rb);
        if (Math.max(lt.x, lb.x, rt.x, rb.x) <= x0 || Math.min(lt.x, lb.x, rt.x, rb.x) >= x1 || Math.max(lt.y, lb.y, rt.y, rb.y) <= y0 || Math.min(lt.y, lb.y, rt.y, rb.y) >= y1) return false;
        const nx = s * (lb.y - lt.y);
        const ny = s * (lt.x - lb.x);
        const n00 = nx * x0 + ny * y0;
        const n10 = nx * x1 + ny * y0;
        const n01 = nx * x0 + ny * y1;
        const n11 = nx * x1 + ny * y1;
        if (Math.max(n00, n10, n01, n11) <= nx * lt.x + ny * lt.y || Math.min(n00, n10, n01, n11) >= nx * rb.x + ny * rb.y) return false;
        const mx = s * (lt.y - rt.y);
        const my = s * (rt.x - lt.x);
        const m00 = mx * x0 + my * y0;
        const m10 = mx * x1 + my * y0;
        const m01 = mx * x0 + my * y1;
        const m11 = mx * x1 + my * y1;
        if (Math.max(m00, m10, m01, m11) <= mx * lt.x + my * lt.y || Math.min(m00, m10, m01, m11) >= mx * rb.x + my * rb.y) return false;
        return true;
    }
    /**
   * Pads the rectangle making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   * @returns Returns itself.
   */ pad(paddingX = 0, paddingY = paddingX) {
        this.x -= paddingX;
        this.y -= paddingY;
        this.width += paddingX * 2;
        this.height += paddingY * 2;
        return this;
    }
    /**
   * Fits this rectangle around the passed one.
   * @param rectangle - The rectangle to fit.
   * @returns Returns itself.
   */ fit(rectangle) {
        const x1 = Math.max(this.x, rectangle.x);
        const x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
        const y1 = Math.max(this.y, rectangle.y);
        const y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = Math.max(x2 - x1, 0);
        this.y = y1;
        this.height = Math.max(y2 - y1, 0);
        return this;
    }
    /**
   * Enlarges rectangle that way its corners lie on grid
   * @param resolution - resolution
   * @param eps - precision
   * @returns Returns itself.
   */ ceil(resolution = 1, eps = 1e-3) {
        const x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
        const y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
        this.x = Math.floor((this.x + eps) * resolution) / resolution;
        this.y = Math.floor((this.y + eps) * resolution) / resolution;
        this.width = x2 - this.x;
        this.height = y2 - this.y;
        return this;
    }
    /**
   * Enlarges this rectangle to include the passed rectangle.
   * @param rectangle - The rectangle to include.
   * @returns Returns itself.
   */ enlarge(rectangle) {
        const x1 = Math.min(this.x, rectangle.x);
        const x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
        const y1 = Math.min(this.y, rectangle.y);
        const y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = x2 - x1;
        this.y = y1;
        this.height = y2 - y1;
        return this;
    }
    /**
   * Returns the framing rectangle of the rectangle as a Rectangle object
   * @param out - optional rectangle to store the result
   * @returns The framing rectangle
   */ getBounds(out) {
        out = out || new Rectangle();
        out.copyFrom(this);
        return out;
    }
    toString() {
        return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
    }
}

},{"../point/Point.mjs":"dkxvR","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2VhdS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_getGlobalBounds", ()=>_getGlobalBounds);
parcelHelpers.export(exports, "getGlobalBounds", ()=>getGlobalBounds);
parcelHelpers.export(exports, "updateTransformBackwards", ()=>updateTransformBackwards);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _matrixAndBoundsPoolMjs = require("./utils/matrixAndBoundsPool.mjs");
"use strict";
function getGlobalBounds(target, skipUpdateTransform, bounds) {
    bounds.clear();
    let parentTransform;
    let pooledMatrix;
    if (target.parent) {
        if (!skipUpdateTransform) {
            pooledMatrix = (0, _matrixAndBoundsPoolMjs.matrixPool).get().identity();
            parentTransform = updateTransformBackwards(target, pooledMatrix);
        } else parentTransform = target.parent.worldTransform;
    } else parentTransform = (0, _matrixMjs.Matrix).IDENTITY;
    _getGlobalBounds(target, bounds, parentTransform, skipUpdateTransform);
    if (pooledMatrix) (0, _matrixAndBoundsPoolMjs.matrixPool).return(pooledMatrix);
    if (!bounds.isValid) bounds.set(0, 0, 0, 0);
    return bounds;
}
function _getGlobalBounds(target, bounds, parentTransform, skipUpdateTransform) {
    if (!target.visible || !target.measurable) return;
    let worldTransform;
    if (!skipUpdateTransform) {
        target.updateLocalTransform();
        worldTransform = (0, _matrixAndBoundsPoolMjs.matrixPool).get();
        worldTransform.appendFrom(target.localTransform, parentTransform);
    } else worldTransform = target.worldTransform;
    const parentBounds = bounds;
    const preserveBounds = !!target.effects.length;
    if (preserveBounds) bounds = (0, _matrixAndBoundsPoolMjs.boundsPool).get().clear();
    if (target.boundsArea) bounds.addRect(target.boundsArea, worldTransform);
    else {
        if (target.addBounds) {
            bounds.matrix = worldTransform;
            target.addBounds(bounds);
        }
        for(let i = 0; i < target.children.length; i++)_getGlobalBounds(target.children[i], bounds, worldTransform, skipUpdateTransform);
    }
    if (preserveBounds) {
        for(let i = 0; i < target.effects.length; i++)target.effects[i].addBounds?.(bounds);
        parentBounds.addBounds(bounds, (0, _matrixMjs.Matrix).IDENTITY);
        (0, _matrixAndBoundsPoolMjs.boundsPool).return(bounds);
    }
    if (!skipUpdateTransform) (0, _matrixAndBoundsPoolMjs.matrixPool).return(worldTransform);
}
function updateTransformBackwards(target, parentTransform) {
    const parent = target.parent;
    if (parent) {
        updateTransformBackwards(parent, parentTransform);
        parent.updateLocalTransform();
        parentTransform.append(parent.localTransform);
    }
    return parentTransform;
}

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","./utils/matrixAndBoundsPool.mjs":"kLzyY","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kLzyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boundsPool", ()=>boundsPool);
parcelHelpers.export(exports, "matrixPool", ()=>matrixPool);
var _matrixMjs = require("../../../../maths/matrix/Matrix.mjs");
var _poolMjs = require("../../../../utils/pool/Pool.mjs");
var _boundsMjs = require("../Bounds.mjs");
"use strict";
const matrixPool = new (0, _poolMjs.Pool)((0, _matrixMjs.Matrix));
const boundsPool = new (0, _poolMjs.Pool)((0, _boundsMjs.Bounds));

},{"../../../../maths/matrix/Matrix.mjs":"kpkIt","../../../../utils/pool/Pool.mjs":"6VuOt","../Bounds.mjs":"2E5wx","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"l31Se":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocalBounds", ()=>getLocalBounds);
parcelHelpers.export(exports, "getParent", ()=>getParent);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _warnMjs = require("../../../utils/logging/warn.mjs");
var _matrixAndBoundsPoolMjs = require("./utils/matrixAndBoundsPool.mjs");
"use strict";
function getLocalBounds(target, bounds, relativeMatrix) {
    bounds.clear();
    relativeMatrix || (relativeMatrix = (0, _matrixMjs.Matrix).IDENTITY);
    _getLocalBounds(target, bounds, relativeMatrix, target, true);
    if (!bounds.isValid) bounds.set(0, 0, 0, 0);
    return bounds;
}
function _getLocalBounds(target, bounds, parentTransform, rootContainer, isRoot) {
    let relativeTransform;
    if (!isRoot) {
        if (!target.visible || !target.measurable) return;
        target.updateLocalTransform();
        const localTransform = target.localTransform;
        relativeTransform = (0, _matrixAndBoundsPoolMjs.matrixPool).get();
        relativeTransform.appendFrom(localTransform, parentTransform);
    } else {
        relativeTransform = (0, _matrixAndBoundsPoolMjs.matrixPool).get();
        relativeTransform = parentTransform.copyTo(relativeTransform);
    }
    const parentBounds = bounds;
    const preserveBounds = !!target.effects.length;
    if (preserveBounds) bounds = (0, _matrixAndBoundsPoolMjs.boundsPool).get().clear();
    if (target.boundsArea) bounds.addRect(target.boundsArea, relativeTransform);
    else {
        if (target.renderPipeId) {
            bounds.matrix = relativeTransform;
            target.addBounds(bounds);
        }
        const children = target.children;
        for(let i = 0; i < children.length; i++)_getLocalBounds(children[i], bounds, relativeTransform, rootContainer, false);
    }
    if (preserveBounds) {
        for(let i = 0; i < target.effects.length; i++)target.effects[i].addLocalBounds?.(bounds, rootContainer);
        parentBounds.addBounds(bounds, (0, _matrixMjs.Matrix).IDENTITY);
        (0, _matrixAndBoundsPoolMjs.boundsPool).return(bounds);
    }
    (0, _matrixAndBoundsPoolMjs.matrixPool).return(relativeTransform);
}
function getParent(target, root, matrix) {
    const parent = target.parent;
    if (!parent) {
        (0, _warnMjs.warn)("Item is not inside the root container");
        return;
    }
    if (parent !== root) {
        getParent(parent, root, matrix);
        parent.updateLocalTransform();
        matrix.append(parent.localTransform);
    }
}

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","../../../utils/logging/warn.mjs":"gCz01","./utils/matrixAndBoundsPool.mjs":"kLzyY","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gCz01":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warn", ()=>warn);
"use strict";
let warnCount = 0;
const maxWarnings = 500;
function warn(...args) {
    if (warnCount === maxWarnings) return;
    warnCount++;
    if (warnCount === maxWarnings) console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.");
    else console.warn("PixiJS Warning: ", ...args);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"haHpv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkChildrenDidChange", ()=>checkChildrenDidChange);
"use strict";
function checkChildrenDidChange(container, previousData) {
    const children = container.children;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        const changeId = (child.uid & 255) << 24 | child._didChangeId & 16777215;
        if (previousData.data[previousData.index] !== changeId) {
            previousData.data[previousData.index] = changeId;
            previousData.didChange = true;
        }
        previousData.index++;
        if (child.children.length) checkChildrenDidChange(child, previousData);
    }
    return previousData.didChange;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9CXJE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onRenderMixin", ()=>onRenderMixin);
"use strict";
const onRenderMixin = {
    _onRender: null,
    set onRender (func){
        const renderGroup = this.renderGroup;
        if (!func) {
            if (this._onRender) renderGroup?.removeOnRender(this);
            this._onRender = null;
            return;
        }
        if (!this._onRender) renderGroup?.addOnRender(this);
        this._onRender = func;
    },
    /**
   * This callback is used when the container is rendered. This is where you should add your custom
   * logic that is needed to be run every frame.
   *
   * In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
   * and "updateTransform" is no longer called every frame
   * @example
   * const container = new Container();
   * container.onRender = () => {
   *    container.rotation += 0.01;
   * };
   * @memberof scene.Container#
   */ get onRender () {
        return this._onRender;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2jhjO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sortMixin", ()=>sortMixin);
"use strict";
const sortMixin = {
    _zIndex: 0,
    /**
   * Should children be sorted by zIndex at the next render call.
   *
   * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
   * @type {boolean}
   * @memberof scene.Container#
   */ sortDirty: false,
    /**
   * If set to true, the container will sort its children by `zIndex` value
   * when the next render is called, or manually if `sortChildren()` is called.
   *
   * This actually changes the order of elements in the array, so should be treated
   * as a basic solution that is not performant compared to other solutions,
   * such as {@link https://github.com/pixijs/layers PixiJS Layers}
   *
   * Also be aware of that this may not work nicely with the `addChildAt()` function,
   * as the `zIndex` sorting may cause the child to automatically sorted to another position.
   * @type {boolean}
   * @memberof scene.Container#
   */ sortableChildren: false,
    /**
   * The zIndex of the container.
   *
   * Setting this value, will automatically set the parent to be sortable. Children will be automatically
   * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
   * and thus rendered on top of other display objects within the same container.
   * @see scene.Container#sortableChildren
   * @memberof scene.Container#
   */ get zIndex () {
        return this._zIndex;
    },
    set zIndex (value){
        if (this._zIndex === value) return;
        this._zIndex = value;
        this.depthOfChildModified();
    },
    depthOfChildModified () {
        if (this.parent) {
            this.parent.sortableChildren = true;
            this.parent.sortDirty = true;
        }
        if (this.renderGroup && !this.isRenderGroupRoot) this.renderGroup.structureDidChange = true;
    },
    /**
   * Sorts children by zIndex.
   * @memberof scene.Container#
   */ sortChildren () {
        if (!this.sortDirty) return;
        this.sortDirty = false;
        this.children.sort(sortChildren);
    }
};
function sortChildren(a, b) {
    return a._zIndex - b._zIndex;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bby4a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toLocalGlobalMixin", ()=>toLocalGlobalMixin);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _pointMjs = require("../../../maths/point/Point.mjs");
var _getGlobalBoundsMjs = require("../bounds/getGlobalBounds.mjs");
"use strict";
const toLocalGlobalMixin = {
    /**
   * Returns the global position of the container.
   * @param point - The optional point to write the global value to.
   * @param skipUpdate - Should we skip the update transform.
   * @returns - The updated point.
   * @memberof scene.Container#
   */ getGlobalPosition (point = new (0, _pointMjs.Point)(), skipUpdate = false) {
        if (this.parent) this.parent.toGlobal(this._position, point, skipUpdate);
        else {
            point.x = this._position.x;
            point.y = this._position.y;
        }
        return point;
    },
    /**
   * Calculates the global position of the container.
   * @param position - The world origin to calculate from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform.
   * @returns - A point object representing the position of this object.
   * @memberof scene.Container#
   */ toGlobal (position, point, skipUpdate = false) {
        if (!skipUpdate) {
            this.updateLocalTransform();
            const globalMatrix = (0, _getGlobalBoundsMjs.updateTransformBackwards)(this, new (0, _matrixMjs.Matrix)());
            globalMatrix.append(this.localTransform);
            return globalMatrix.apply(position, point);
        }
        return this.worldTransform.apply(position, point);
    },
    /**
   * Calculates the local position of the container relative to another point.
   * @param position - The world origin to calculate from.
   * @param from - The Container to calculate the global position from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform
   * @returns - A point object representing the position of this object
   * @memberof scene.Container#
   */ toLocal (position, from, point, skipUpdate) {
        if (from) position = from.toGlobal(position, point, skipUpdate);
        if (!skipUpdate) {
            this.updateLocalTransform();
            const globalMatrix = (0, _getGlobalBoundsMjs.updateTransformBackwards)(this, new (0, _matrixMjs.Matrix)());
            globalMatrix.append(this.localTransform);
            return globalMatrix.applyInverse(position, point);
        }
        return this.worldTransform.applyInverse(position, point);
    }
};

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","../../../maths/point/Point.mjs":"dkxvR","../bounds/getGlobalBounds.mjs":"2VhdS","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"hbPVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderGroup", ()=>RenderGroup);
var _matrixMjs = require("../../maths/matrix/Matrix.mjs");
var _instructionSetMjs = require("../../rendering/renderers/shared/instructions/InstructionSet.mjs");
"use strict";
class RenderGroup {
    constructor(root){
        this.renderPipeId = "renderGroup";
        this.root = null;
        this.canBundle = false;
        this.renderGroupParent = null;
        this.renderGroupChildren = [];
        this._children = [];
        this.worldTransform = new (0, _matrixMjs.Matrix)();
        this.worldColorAlpha = 4294967295;
        this.worldColor = 16777215;
        this.worldAlpha = 1;
        // these updates are transform changes..
        this.childrenToUpdate = /* @__PURE__ */ Object.create(null);
        this.updateTick = 0;
        // these update are renderable changes..
        this.childrenRenderablesToUpdate = {
            list: [],
            index: 0
        };
        // other
        this.structureDidChange = true;
        this.instructionSet = new (0, _instructionSetMjs.InstructionSet)();
        this._onRenderContainers = [];
        this.root = root;
        this.addChild(root);
    }
    get localTransform() {
        return this.root.localTransform;
    }
    addRenderGroupChild(renderGroupChild) {
        if (renderGroupChild.renderGroupParent) renderGroupChild.renderGroupParent._removeRenderGroupChild(renderGroupChild);
        renderGroupChild.renderGroupParent = this;
        this.onChildUpdate(renderGroupChild.root);
        this.renderGroupChildren.push(renderGroupChild);
    }
    _removeRenderGroupChild(renderGroupChild) {
        if (renderGroupChild.root.didChange) this._removeChildFromUpdate(renderGroupChild.root);
        const index = this.renderGroupChildren.indexOf(renderGroupChild);
        if (index > -1) this.renderGroupChildren.splice(index, 1);
        renderGroupChild.renderGroupParent = null;
    }
    addChild(child) {
        this.structureDidChange = true;
        if (child !== this.root) {
            this._children.push(child);
            child.updateTick = -1;
            if (child.parent === this.root) child.relativeRenderGroupDepth = 1;
            else child.relativeRenderGroupDepth = child.parent.relativeRenderGroupDepth + 1;
            if (child._onRender) this.addOnRender(child);
        }
        if (child.renderGroup) {
            if (child.renderGroup.root === child) {
                this.addRenderGroupChild(child.renderGroup);
                return;
            }
        } else {
            child.renderGroup = this;
            child.didChange = true;
        }
        const children = child.children;
        if (!child.isRenderGroupRoot) this.onChildUpdate(child);
        for(let i = 0; i < children.length; i++)this.addChild(children[i]);
    }
    removeChild(child) {
        this.structureDidChange = true;
        if (child._onRender) this.removeOnRender(child);
        if (child.renderGroup.root !== child) {
            const children = child.children;
            for(let i = 0; i < children.length; i++)this.removeChild(children[i]);
            if (child.didChange) child.renderGroup._removeChildFromUpdate(child);
            child.renderGroup = null;
        } else this._removeRenderGroupChild(child.renderGroup);
        const index = this._children.indexOf(child);
        if (index > -1) this._children.splice(index, 1);
    }
    onChildUpdate(child) {
        let childrenToUpdate = this.childrenToUpdate[child.relativeRenderGroupDepth];
        if (!childrenToUpdate) childrenToUpdate = this.childrenToUpdate[child.relativeRenderGroupDepth] = {
            index: 0,
            list: []
        };
        childrenToUpdate.list[childrenToUpdate.index++] = child;
    }
    // SHOULD THIS BE HERE?
    updateRenderable(container) {
        if (container.globalDisplayStatus < 7) return;
        container.didViewUpdate = false;
        this.instructionSet.renderPipes[container.renderPipeId].updateRenderable(container);
    }
    onChildViewUpdate(child) {
        this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = child;
    }
    _removeChildFromUpdate(child) {
        const childrenToUpdate = this.childrenToUpdate[child.relativeRenderGroupDepth];
        if (!childrenToUpdate) return;
        const index = childrenToUpdate.list.indexOf(child);
        if (index > -1) childrenToUpdate.list.splice(index, 1);
        childrenToUpdate.index--;
    }
    get isRenderable() {
        return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
    }
    /**
   * adding a container to the onRender list will make sure the user function
   * passed in to the user defined 'onRender` callBack
   * @param container - the container to add to the onRender list
   */ addOnRender(container) {
        this._onRenderContainers.push(container);
    }
    removeOnRender(container) {
        this._onRenderContainers.splice(this._onRenderContainers.indexOf(container), 1);
    }
    runOnRender() {
        for(let i = 0; i < this._onRenderContainers.length; i++)this._onRenderContainers[i]._onRender();
    }
}

},{"../../maths/matrix/Matrix.mjs":"kpkIt","../../rendering/renderers/shared/instructions/InstructionSet.mjs":"4g5Ez","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4g5Ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstructionSet", ()=>InstructionSet);
var _uidMjs = require("../../../../utils/data/uid.mjs");
"use strict";
class InstructionSet {
    constructor(){
        /** a unique id for this instruction set used through the renderer */ this.uid = (0, _uidMjs.uid)("instructionSet");
        /** the array of instructions */ this.instructions = [];
        /** the actual size of the array (any instructions passed this should be ignored) */ this.instructionSize = 0;
    }
    /** reset the instruction set so it can be reused set size back to 0 */ reset() {
        this.instructionSize = 0;
    }
    /**
   * Add an instruction to the set
   * @param instruction - add an instruction to the set
   */ add(instruction) {
        this.instructions[this.instructionSize++] = instruction;
    }
    /**
   * Log the instructions to the console (for debugging)
   * @internal
   * @ignore
   */ log() {
        this.instructions.length = this.instructionSize;
        console.table(this.instructions, [
            "type",
            "action"
        ]);
    }
}

},{"../../../../utils/data/uid.mjs":"2iBho","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"dsH7H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assignWithIgnore", ()=>assignWithIgnore);
"use strict";
function assignWithIgnore(target, options, ignore = {}) {
    for(const key in options)if (!ignore[key] && options[key] !== void 0) target[key] = options[key];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1Cklk":[function(require,module,exports) {
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _resizePluginMjs = require("./ResizePlugin.mjs");
var _tickerPluginMjs = require("./TickerPlugin.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _resizePluginMjs.ResizePlugin));
(0, _extensionsMjs.extensions).add((0, _tickerPluginMjs.TickerPlugin));

},{"../extensions/Extensions.mjs":"c8doH","./ResizePlugin.mjs":"6R7S8","./TickerPlugin.mjs":"9wBQf"}],"6R7S8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizePlugin", ()=>ResizePlugin);
var _extensionsMjs = require("../extensions/Extensions.mjs");
"use strict";
class ResizePlugin {
    /**
   * Initialize the plugin with scope of application instance
   * @static
   * @private
   * @param {object} [options] - See application options
   */ static init(options) {
        Object.defineProperty(this, "resizeTo", /**
       * The HTML element or window to automatically resize the
       * renderer's view element to match width and height.
       * @member {Window|HTMLElement}
       * @name resizeTo
       * @memberof app.Application#
       */ {
            set (dom) {
                globalThis.removeEventListener("resize", this.queueResize);
                this._resizeTo = dom;
                if (dom) {
                    globalThis.addEventListener("resize", this.queueResize);
                    this.resize();
                }
            },
            get () {
                return this._resizeTo;
            }
        });
        this.queueResize = ()=>{
            if (!this._resizeTo) return;
            this._cancelResize();
            this._resizeId = requestAnimationFrame(()=>this.resize());
        };
        this._cancelResize = ()=>{
            if (this._resizeId) {
                cancelAnimationFrame(this._resizeId);
                this._resizeId = null;
            }
        };
        this.resize = ()=>{
            if (!this._resizeTo) return;
            this._cancelResize();
            let width;
            let height;
            if (this._resizeTo === globalThis.window) {
                width = globalThis.innerWidth;
                height = globalThis.innerHeight;
            } else {
                const { clientWidth, clientHeight } = this._resizeTo;
                width = clientWidth;
                height = clientHeight;
            }
            this.renderer.resize(width, height);
            this.render();
        };
        this._resizeId = null;
        this._resizeTo = null;
        this.resizeTo = options.resizeTo || null;
    }
    /**
   * Clean up the ticker, scoped to application
   * @static
   * @private
   */ static destroy() {
        globalThis.removeEventListener("resize", this.queueResize);
        this._cancelResize();
        this._cancelResize = null;
        this.queueResize = null;
        this.resizeTo = null;
        this.resize = null;
    }
}
/** @ignore */ ResizePlugin.extension = (0, _extensionsMjs.ExtensionType).Application;

},{"../extensions/Extensions.mjs":"c8doH","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9wBQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TickerPlugin", ()=>TickerPlugin);
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _constMjs = require("../ticker/const.mjs");
var _tickerMjs = require("../ticker/Ticker.mjs");
"use strict";
class TickerPlugin {
    /**
   * Initialize the plugin with scope of application instance
   * @static
   * @private
   * @param {object} [options] - See application options
   */ static init(options) {
        options = Object.assign({
            autoStart: true,
            sharedTicker: false
        }, options);
        Object.defineProperty(this, "ticker", {
            set (ticker) {
                if (this._ticker) this._ticker.remove(this.render, this);
                this._ticker = ticker;
                if (ticker) ticker.add(this.render, this, (0, _constMjs.UPDATE_PRIORITY).LOW);
            },
            get () {
                return this._ticker;
            }
        });
        this.stop = ()=>{
            this._ticker.stop();
        };
        this.start = ()=>{
            this._ticker.start();
        };
        this._ticker = null;
        this.ticker = options.sharedTicker ? (0, _tickerMjs.Ticker).shared : new (0, _tickerMjs.Ticker)();
        if (options.autoStart) this.start();
    }
    /**
   * Clean up the ticker, scoped to application.
   * @static
   * @private
   */ static destroy() {
        if (this._ticker) {
            const oldTicker = this._ticker;
            this.ticker = null;
            oldTicker.destroy();
        }
    }
}
/** @ignore */ TickerPlugin.extension = (0, _extensionsMjs.ExtensionType).Application;

},{"../extensions/Extensions.mjs":"c8doH","../ticker/const.mjs":"1LyjA","../ticker/Ticker.mjs":"bE9lk","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1LyjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UPDATE_PRIORITY", ()=>UPDATE_PRIORITY);
"use strict";
var UPDATE_PRIORITY = /* @__PURE__ */ ((UPDATE_PRIORITY2)=>{
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["INTERACTION"] = 50] = "INTERACTION";
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["HIGH"] = 25] = "HIGH";
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["NORMAL"] = 0] = "NORMAL";
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["LOW"] = -25] = "LOW";
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["UTILITY"] = -50] = "UTILITY";
    return UPDATE_PRIORITY2;
})(UPDATE_PRIORITY || {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bE9lk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ticker", ()=>Ticker);
var _constMjs = require("./const.mjs");
var _tickerListenerMjs = require("./TickerListener.mjs");
"use strict";
const _Ticker = class _Ticker {
    constructor(){
        /**
     * Whether or not this ticker should invoke the method
     * {@link ticker.Ticker#start|start} automatically when a listener is added.
     */ this.autoStart = false;
        /**
     * Scalar time value from last frame to this frame.
     * This value is capped by setting {@link ticker.Ticker#minFPS|minFPS}
     * and is scaled with {@link ticker.Ticker#speed|speed}.
     * **Note:** The cap may be exceeded by scaling.
     */ this.deltaTime = 1;
        /**
     * The last time {@link ticker.Ticker#update|update} was invoked.
     * This value is also reset internally outside of invoking
     * update, but only when a new animation frame is requested.
     * If the platform supports DOMHighResTimeStamp,
     * this value will have a precision of 1 µs.
     */ this.lastTime = -1;
        /**
     * Factor of current {@link ticker.Ticker#deltaTime|deltaTime}.
     * @example
     * // Scales ticker.deltaTime to what would be
     * // the equivalent of approximately 120 FPS
     * ticker.speed = 2;
     */ this.speed = 1;
        /**
     * Whether or not this ticker has been started.
     * `true` if {@link ticker.Ticker#start|start} has been called.
     * `false` if {@link ticker.Ticker#stop|Stop} has been called.
     * While `false`, this value may change to `true` in the
     * event of {@link ticker.Ticker#autoStart|autoStart} being `true`
     * and a listener is added.
     */ this.started = false;
        /** Internal current frame request ID */ this._requestId = null;
        /**
     * Internal value managed by minFPS property setter and getter.
     * This is the maximum allowed milliseconds between updates.
     */ this._maxElapsedMS = 100;
        /**
     * Internal value managed by minFPS property setter and getter.
     * This is the minimum allowed milliseconds between updates.
     */ this._minElapsedMS = 0;
        /** If enabled, deleting is disabled.*/ this._protected = false;
        /** The last time keyframe was executed. Maintains a relatively fixed interval with the previous value. */ this._lastFrame = -1;
        this._head = new (0, _tickerListenerMjs.TickerListener)(null, null, Infinity);
        this.deltaMS = 1 / _Ticker.targetFPMS;
        this.elapsedMS = 1 / _Ticker.targetFPMS;
        this._tick = (time)=>{
            this._requestId = null;
            if (this.started) {
                this.update(time);
                if (this.started && this._requestId === null && this._head.next) this._requestId = requestAnimationFrame(this._tick);
            }
        };
    }
    /**
   * Conditionally requests a new animation frame.
   * If a frame has not already been requested, and if the internal
   * emitter has listeners, a new frame is requested.
   * @private
   */ _requestIfNeeded() {
        if (this._requestId === null && this._head.next) {
            this.lastTime = performance.now();
            this._lastFrame = this.lastTime;
            this._requestId = requestAnimationFrame(this._tick);
        }
    }
    /**
   * Conditionally cancels a pending animation frame.
   * @private
   */ _cancelIfNeeded() {
        if (this._requestId !== null) {
            cancelAnimationFrame(this._requestId);
            this._requestId = null;
        }
    }
    /**
   * Conditionally requests a new animation frame.
   * If the ticker has been started it checks if a frame has not already
   * been requested, and if the internal emitter has listeners. If these
   * conditions are met, a new frame is requested. If the ticker has not
   * been started, but autoStart is `true`, then the ticker starts now,
   * and continues with the previous conditions to request a new frame.
   * @private
   */ _startIfPossible() {
        if (this.started) this._requestIfNeeded();
        else if (this.autoStart) this.start();
    }
    /**
   * Register a handler for tick events. Calls continuously unless
   * it is removed or the ticker is stopped.
   * @param fn - The listener function to be added for updates
   * @param context - The listener context
   * @param {number} [priority=UPDATE_PRIORITY.NORMAL] - The priority for emitting
   * @returns This instance of a ticker
   */ add(fn, context, priority = (0, _constMjs.UPDATE_PRIORITY).NORMAL) {
        return this._addListener(new (0, _tickerListenerMjs.TickerListener)(fn, context, priority));
    }
    /**
   * Add a handler for the tick event which is only execute once.
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param {number} [priority=UPDATE_PRIORITY.NORMAL] - The priority for emitting
   * @returns This instance of a ticker
   */ addOnce(fn, context, priority = (0, _constMjs.UPDATE_PRIORITY).NORMAL) {
        return this._addListener(new (0, _tickerListenerMjs.TickerListener)(fn, context, priority, true));
    }
    /**
   * Internally adds the event handler so that it can be sorted by priority.
   * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
   * before the rendering.
   * @private
   * @param listener - Current listener being added.
   * @returns This instance of a ticker
   */ _addListener(listener) {
        let current = this._head.next;
        let previous = this._head;
        if (!current) listener.connect(previous);
        else {
            while(current){
                if (listener.priority > current.priority) {
                    listener.connect(previous);
                    break;
                }
                previous = current;
                current = current.next;
            }
            if (!listener.previous) listener.connect(previous);
        }
        this._startIfPossible();
        return this;
    }
    /**
   * Removes any handlers matching the function and context parameters.
   * If no handlers are left after removing, then it cancels the animation frame.
   * @param fn - The listener function to be removed
   * @param context - The listener context to be removed
   * @returns This instance of a ticker
   */ remove(fn, context) {
        let listener = this._head.next;
        while(listener)if (listener.match(fn, context)) listener = listener.destroy();
        else listener = listener.next;
        if (!this._head.next) this._cancelIfNeeded();
        return this;
    }
    /**
   * The number of listeners on this ticker, calculated by walking through linked list
   * @readonly
   * @member {number}
   */ get count() {
        if (!this._head) return 0;
        let count = 0;
        let current = this._head;
        while(current = current.next)count++;
        return count;
    }
    /** Starts the ticker. If the ticker has listeners a new animation frame is requested at this point. */ start() {
        if (!this.started) {
            this.started = true;
            this._requestIfNeeded();
        }
    }
    /** Stops the ticker. If the ticker has requested an animation frame it is canceled at this point. */ stop() {
        if (this.started) {
            this.started = false;
            this._cancelIfNeeded();
        }
    }
    /** Destroy the ticker and don't use after this. Calling this method removes all references to internal events. */ destroy() {
        if (!this._protected) {
            this.stop();
            let listener = this._head.next;
            while(listener)listener = listener.destroy(true);
            this._head.destroy();
            this._head = null;
        }
    }
    /**
   * Triggers an update. An update entails setting the
   * current {@link ticker.Ticker#elapsedMS|elapsedMS},
   * the current {@link ticker.Ticker#deltaTime|deltaTime},
   * invoking all listeners with current deltaTime,
   * and then finally setting {@link ticker.Ticker#lastTime|lastTime}
   * with the value of currentTime that was provided.
   * This method will be called automatically by animation
   * frame callbacks if the ticker instance has been started
   * and listeners are added.
   * @param {number} [currentTime=performance.now()] - the current time of execution
   */ update(currentTime = performance.now()) {
        let elapsedMS;
        if (currentTime > this.lastTime) {
            elapsedMS = this.elapsedMS = currentTime - this.lastTime;
            if (elapsedMS > this._maxElapsedMS) elapsedMS = this._maxElapsedMS;
            elapsedMS *= this.speed;
            if (this._minElapsedMS) {
                const delta = currentTime - this._lastFrame | 0;
                if (delta < this._minElapsedMS) return;
                this._lastFrame = currentTime - delta % this._minElapsedMS;
            }
            this.deltaMS = elapsedMS;
            this.deltaTime = this.deltaMS * _Ticker.targetFPMS;
            const head = this._head;
            let listener = head.next;
            while(listener)listener = listener.emit(this);
            if (!head.next) this._cancelIfNeeded();
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = currentTime;
    }
    /**
   * The frames per second at which this ticker is running.
   * The default is approximately 60 in most modern browsers.
   * **Note:** This does not factor in the value of
   * {@link ticker.Ticker#speed|speed}, which is specific
   * to scaling {@link ticker.Ticker#deltaTime|deltaTime}.
   * @member {number}
   * @readonly
   */ get FPS() {
        return 1e3 / this.elapsedMS;
    }
    /**
   * Manages the maximum amount of milliseconds allowed to
   * elapse between invoking {@link ticker.Ticker#update|update}.
   * This value is used to cap {@link ticker.Ticker#deltaTime|deltaTime},
   * but does not effect the measured value of {@link ticker.Ticker#FPS|FPS}.
   * When setting this property it is clamped to a value between
   * `0` and `Ticker.targetFPMS * 1000`.
   * @member {number}
   * @default 10
   */ get minFPS() {
        return 1e3 / this._maxElapsedMS;
    }
    set minFPS(fps) {
        const minFPS = Math.min(this.maxFPS, fps);
        const minFPMS = Math.min(Math.max(0, minFPS) / 1e3, _Ticker.targetFPMS);
        this._maxElapsedMS = 1 / minFPMS;
    }
    /**
   * Manages the minimum amount of milliseconds required to
   * elapse between invoking {@link ticker.Ticker#update|update}.
   * This will effect the measured value of {@link ticker.Ticker#FPS|FPS}.
   * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
   * Otherwise it will be at least `minFPS`
   * @member {number}
   * @default 0
   */ get maxFPS() {
        if (this._minElapsedMS) return Math.round(1e3 / this._minElapsedMS);
        return 0;
    }
    set maxFPS(fps) {
        if (fps === 0) this._minElapsedMS = 0;
        else {
            const maxFPS = Math.max(this.minFPS, fps);
            this._minElapsedMS = 1 / (maxFPS / 1e3);
        }
    }
    /**
   * The shared ticker instance used by {@link AnimatedSprite} and by
   * {@link VideoResource} to update animation frames / video textures.
   *
   * It may also be used by {@link Application} if created with the `sharedTicker` option property set to true.
   *
   * The property {@link ticker.Ticker#autoStart|autoStart} is set to `true` for this instance.
   * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
   * @example
   * import { Ticker } from 'pixi.js';
   *
   * const ticker = Ticker.shared;
   * // Set this to prevent starting this ticker when listeners are added.
   * // By default this is true only for the Ticker.shared instance.
   * ticker.autoStart = false;
   *
   * // FYI, call this to ensure the ticker is stopped. It should be stopped
   * // if you have not attempted to render anything yet.
   * ticker.stop();
   *
   * // Call this when you are ready for a running shared ticker.
   * ticker.start();
   * @example
   * import { autoDetectRenderer, Container } from 'pixi.js';
   *
   * // You may use the shared ticker to render...
   * const renderer = autoDetectRenderer();
   * const stage = new Container();
   * document.body.appendChild(renderer.view);
   * ticker.add((time) => renderer.render(stage));
   *
   * // Or you can just update it manually.
   * ticker.autoStart = false;
   * ticker.stop();
   * const animate = (time) => {
   *     ticker.update(time);
   *     renderer.render(stage);
   *     requestAnimationFrame(animate);
   * };
   * animate(performance.now());
   * @member {ticker.Ticker}
   * @readonly
   * @static
   */ static get shared() {
        if (!_Ticker._shared) {
            const shared = _Ticker._shared = new _Ticker();
            shared.autoStart = true;
            shared._protected = true;
        }
        return _Ticker._shared;
    }
    /**
   * The system ticker instance used by {@link BasePrepare} for core timing
   * functionality that shouldn't usually need to be paused, unlike the `shared`
   * ticker which drives visual animations and rendering which may want to be paused.
   *
   * The property {@link ticker.Ticker#autoStart|autoStart} is set to `true` for this instance.
   * @member {ticker.Ticker}
   * @readonly
   * @static
   */ static get system() {
        if (!_Ticker._system) {
            const system = _Ticker._system = new _Ticker();
            system.autoStart = true;
            system._protected = true;
        }
        return _Ticker._system;
    }
};
/**
 * Target frames per millisecond.
 * @static
 */ _Ticker.targetFPMS = 0.06;
let Ticker = _Ticker;

},{"./const.mjs":"1LyjA","./TickerListener.mjs":"9EbF7","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9EbF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TickerListener", ()=>TickerListener);
"use strict";
class TickerListener {
    /**
   * Constructor
   * @private
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param priority - The priority for emitting
   * @param once - If the handler should fire once
   */ constructor(fn, context = null, priority = 0, once = false){
        /** The next item in chain. */ this.next = null;
        /** The previous item in chain. */ this.previous = null;
        /** `true` if this listener has been destroyed already. */ this._destroyed = false;
        this._fn = fn;
        this._context = context;
        this.priority = priority;
        this._once = once;
    }
    /**
   * Simple compare function to figure out if a function and context match.
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @returns `true` if the listener match the arguments
   */ match(fn, context = null) {
        return this._fn === fn && this._context === context;
    }
    /**
   * Emit by calling the current function.
   * @param ticker - The ticker emitting.
   * @returns Next ticker
   */ emit(ticker) {
        if (this._fn) {
            if (this._context) this._fn.call(this._context, ticker);
            else this._fn(ticker);
        }
        const redirect = this.next;
        if (this._once) this.destroy(true);
        if (this._destroyed) this.next = null;
        return redirect;
    }
    /**
   * Connect to the list.
   * @param previous - Input node, previous listener
   */ connect(previous) {
        this.previous = previous;
        if (previous.next) previous.next.previous = this;
        this.next = previous.next;
        previous.next = this;
    }
    /**
   * Destroy and don't use after this.
   * @param hard - `true` to remove the `next` reference, this
   *        is considered a hard destroy. Soft destroy maintains the next reference.
   * @returns The listener to redirect while emitting or removing.
   */ destroy(hard = false) {
        this._destroyed = true;
        this._fn = null;
        this._context = null;
        if (this.previous) this.previous.next = this.next;
        if (this.next) this.next.previous = this.previous;
        const redirect = this.next;
        this.next = hard ? null : redirect;
        this.previous = null;
        return redirect;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"76R6t":[function(require,module,exports) {
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _spritesheetAssetMjs = require("./spritesheetAsset.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _spritesheetAssetMjs.spritesheetAsset));

},{"../extensions/Extensions.mjs":"c8doH","./spritesheetAsset.mjs":"aVmnu"}],"aVmnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spritesheetAsset", ()=>spritesheetAsset);
var _loaderParserMjs = require("../assets/loader/parsers/LoaderParser.mjs");
var _resolverMjs = require("../assets/resolver/Resolver.mjs");
var _copySearchParamsMjs = require("../assets/utils/copySearchParams.mjs");
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _textureMjs = require("../rendering/renderers/shared/texture/Texture.mjs");
var _pathMjs = require("../utils/path.mjs");
var _spritesheetMjs = require("./Spritesheet.mjs");
"use strict";
const validImages = [
    "jpg",
    "png",
    "jpeg",
    "avif",
    "webp",
    "basis",
    "etc2",
    "bc7",
    "bc6h",
    "bc5",
    "bc4",
    "bc3",
    "bc2",
    "bc1",
    "eac",
    "astc"
];
function getCacheableAssets(keys, asset, ignoreMultiPack) {
    const out = {};
    keys.forEach((key)=>{
        out[key] = asset;
    });
    Object.keys(asset.textures).forEach((key)=>{
        out[key] = asset.textures[key];
    });
    if (!ignoreMultiPack) {
        const basePath = (0, _pathMjs.path).dirname(keys[0]);
        asset.linkedSheets.forEach((item, i)=>{
            const out2 = getCacheableAssets([
                `${basePath}/${asset.data.meta.related_multi_packs[i]}`
            ], item, true);
            Object.assign(out, out2);
        });
    }
    return out;
}
const spritesheetAsset = {
    extension: (0, _extensionsMjs.ExtensionType).Asset,
    /** Handle the caching of the related Spritesheet Textures */ cache: {
        test: (asset)=>asset instanceof (0, _spritesheetMjs.Spritesheet),
        getCacheableAssets: (keys, asset)=>getCacheableAssets(keys, asset, false)
    },
    /** Resolve the resolution of the asset. */ resolver: {
        test: (value)=>{
            const tempURL = value.split("?")[0];
            const split = tempURL.split(".");
            const extension = split.pop();
            const format = split.pop();
            return extension === "json" && validImages.includes(format);
        },
        parse: (value)=>{
            const split = value.split(".");
            return {
                resolution: parseFloat((0, _resolverMjs.Resolver).RETINA_PREFIX.exec(value)?.[1] ?? "1"),
                format: split[split.length - 2],
                src: value
            };
        }
    },
    /**
   * Loader plugin that parses sprite sheets!
   * once the JSON has been loaded this checks to see if the JSON is spritesheet data.
   * If it is, we load the spritesheets image and parse the data into Spritesheet
   * All textures in the sprite sheet are then added to the cache
   */ loader: {
        name: "spritesheetLoader",
        extension: {
            type: (0, _extensionsMjs.ExtensionType).LoadParser,
            priority: (0, _loaderParserMjs.LoaderParserPriority).Normal
        },
        async testParse (asset, options) {
            return (0, _pathMjs.path).extname(options.src).toLowerCase() === ".json" && !!asset.frames;
        },
        async parse (asset, options, loader) {
            const { texture: imageTexture, // if user need to use preloaded texture
            imageFilename } = options?.data ?? {};
            let basePath = (0, _pathMjs.path).dirname(options.src);
            if (basePath && basePath.lastIndexOf("/") !== basePath.length - 1) basePath += "/";
            let texture;
            if (imageTexture instanceof (0, _textureMjs.Texture)) texture = imageTexture;
            else {
                const imagePath = (0, _copySearchParamsMjs.copySearchParams)(basePath + (imageFilename ?? asset.meta.image), options.src);
                const assets = await loader.load([
                    imagePath
                ]);
                texture = assets[imagePath];
            }
            const spritesheet = new (0, _spritesheetMjs.Spritesheet)(texture.source, asset);
            await spritesheet.parse();
            const multiPacks = asset?.meta?.related_multi_packs;
            if (Array.isArray(multiPacks)) {
                const promises = [];
                for (const item of multiPacks){
                    if (typeof item !== "string") continue;
                    let itemUrl = basePath + item;
                    if (options.data?.ignoreMultiPack) continue;
                    itemUrl = (0, _copySearchParamsMjs.copySearchParams)(itemUrl, options.src);
                    promises.push(loader.load({
                        src: itemUrl,
                        data: {
                            ignoreMultiPack: true
                        }
                    }));
                }
                const res = await Promise.all(promises);
                spritesheet.linkedSheets = res;
                res.forEach((item)=>{
                    item.linkedSheets = [
                        spritesheet
                    ].concat(spritesheet.linkedSheets.filter((sp)=>sp !== item));
                });
            }
            return spritesheet;
        },
        async unload (spritesheet, _resolvedAsset, loader) {
            await loader.unload(spritesheet.textureSource._sourceOrigin);
            spritesheet.destroy(false);
        }
    }
};

},{"../assets/loader/parsers/LoaderParser.mjs":"fmW7w","../assets/resolver/Resolver.mjs":"9RSGR","../assets/utils/copySearchParams.mjs":"jgkwF","../extensions/Extensions.mjs":"c8doH","../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../utils/path.mjs":"fneYW","./Spritesheet.mjs":"8VI8u","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fmW7w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoaderParserPriority", ()=>LoaderParserPriority);
"use strict";
var LoaderParserPriority = /* @__PURE__ */ ((LoaderParserPriority2)=>{
    LoaderParserPriority2[LoaderParserPriority2["Low"] = 0] = "Low";
    LoaderParserPriority2[LoaderParserPriority2["Normal"] = 1] = "Normal";
    LoaderParserPriority2[LoaderParserPriority2["High"] = 2] = "High";
    return LoaderParserPriority2;
})(LoaderParserPriority || {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9RSGR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resolver", ()=>Resolver);
parcelHelpers.export(exports, "getUrlExtension", ()=>getUrlExtension);
var _warnMjs = require("../../utils/logging/warn.mjs");
var _pathMjs = require("../../utils/path.mjs");
var _convertToListMjs = require("../utils/convertToList.mjs");
var _createStringVariationsMjs = require("../utils/createStringVariations.mjs");
var _isSingleItemMjs = require("../utils/isSingleItem.mjs");
"use strict";
class Resolver {
    constructor(){
        this._defaultBundleIdentifierOptions = {
            connector: "-",
            createBundleAssetId: (bundleId, assetId)=>`${bundleId}${this._bundleIdConnector}${assetId}`,
            extractAssetIdFromBundle: (bundleId, assetBundleId)=>assetBundleId.replace(`${bundleId}${this._bundleIdConnector}`, "")
        };
        /** The character that is used to connect the bundleId and the assetId when generating a bundle asset id key */ this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector;
        /**
     * A function that generates a bundle asset id key from a bundleId and an assetId
     * @param bundleId - the bundleId
     * @param assetId  - the assetId
     * @returns the bundle asset id key
     */ this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId;
        /**
     * A function that generates an assetId from a bundle asset id key. This is the reverse of generateBundleAssetId
     * @param bundleId - the bundleId
     * @param assetBundleId - the bundle asset id key
     * @returns the assetId
     */ this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle;
        this._assetMap = {};
        this._preferredOrder = [];
        this._parsers = [];
        this._resolverHash = {};
        this._bundles = {};
    }
    /**
   * Override how the resolver deals with generating bundle ids.
   * must be called before any bundles are added
   * @param bundleIdentifier - the bundle identifier options
   */ setBundleIdentifier(bundleIdentifier) {
        this._bundleIdConnector = bundleIdentifier.connector ?? this._bundleIdConnector;
        this._createBundleAssetId = bundleIdentifier.createBundleAssetId ?? this._createBundleAssetId;
        this._extractAssetIdFromBundle = bundleIdentifier.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle;
        if (this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
    }
    /**
   * Let the resolver know which assets you prefer to use when resolving assets.
   * Multiple prefer user defined rules can be added.
   * @example
   * resolver.prefer({
   *     // first look for something with the correct format, and then then correct resolution
   *     priority: ['format', 'resolution'],
   *     params:{
   *         format:'webp', // prefer webp images
   *         resolution: 2, // prefer a resolution of 2
   *     }
   * })
   * resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);
   * resolver.resolveUrl('foo') // => 'bar@2x.webp'
   * @param preferOrders - the prefer options
   */ prefer(...preferOrders) {
        preferOrders.forEach((prefer)=>{
            this._preferredOrder.push(prefer);
            if (!prefer.priority) prefer.priority = Object.keys(prefer.params);
        });
        this._resolverHash = {};
    }
    /**
   * Set the base path to prepend to all urls when resolving
   * @example
   * resolver.basePath = 'https://home.com/';
   * resolver.add('foo', 'bar.ong');
   * resolver.resolveUrl('foo', 'bar.png'); // => 'https://home.com/bar.png'
   * @param basePath - the base path to use
   */ set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    /**
   * Set the root path for root-relative URLs. By default the `basePath`'s root is used. If no `basePath` is set, then the
   * default value for browsers is `window.location.origin`
   * @example
   * // Application hosted on https://home.com/some-path/index.html
   * resolver.basePath = 'https://home.com/some-path/';
   * resolver.rootPath = 'https://home.com/';
   * resolver.add('foo', '/bar.png');
   * resolver.resolveUrl('foo', '/bar.png'); // => 'https://home.com/bar.png'
   * @param rootPath - the root path to use
   */ set rootPath(rootPath) {
        this._rootPath = rootPath;
    }
    get rootPath() {
        return this._rootPath;
    }
    /**
   * All the active URL parsers that help the parser to extract information and create
   * an asset object-based on parsing the URL itself.
   *
   * Can be added using the extensions API
   * @example
   * resolver.add('foo', [
   *     {
   *         resolution: 2,
   *         format: 'png',
   *         src: 'image@2x.png',
   *     },
   *     {
   *         resolution:1,
   *         format:'png',
   *         src: 'image.png',
   *     },
   * ]);
   *
   * // With a url parser the information such as resolution and file format could extracted from the url itself:
   * extensions.add({
   *     extension: ExtensionType.ResolveParser,
   *     test: loadTextures.test, // test if url ends in an image
   *     parse: (value: string) =>
   *     ({
   *         resolution: parseFloat(Resolver.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
   *         format: value.split('.').pop(),
   *         src: value,
   *     }),
   * });
   *
   * // Now resolution and format can be extracted from the url
   * resolver.add('foo', [
   *     'image@2x.png',
   *     'image.png',
   * ]);
   */ get parsers() {
        return this._parsers;
    }
    /** Used for testing, this resets the resolver to its initial state */ reset() {
        this.setBundleIdentifier(this._defaultBundleIdentifierOptions);
        this._assetMap = {};
        this._preferredOrder = [];
        this._resolverHash = {};
        this._rootPath = null;
        this._basePath = null;
        this._manifest = null;
        this._bundles = {};
        this._defaultSearchParams = null;
    }
    /**
   * Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
   * @param searchParams - the default url parameters to append when resolving urls
   */ setDefaultSearchParams(searchParams) {
        if (typeof searchParams === "string") this._defaultSearchParams = searchParams;
        else {
            const queryValues = searchParams;
            this._defaultSearchParams = Object.keys(queryValues).map((key)=>`${encodeURIComponent(key)}=${encodeURIComponent(queryValues[key])}`).join("&");
        }
    }
    /**
   * Returns the aliases for a given asset
   * @param asset - the asset to get the aliases for
   */ getAlias(asset) {
        const { alias, src } = asset;
        const aliasesToUse = (0, _convertToListMjs.convertToList)(alias || src, (value)=>{
            if (typeof value === "string") return value;
            if (Array.isArray(value)) return value.map((v)=>v?.src ?? v);
            if (value?.src) return value.src;
            return value;
        }, true);
        return aliasesToUse;
    }
    /**
   * Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
   * generally a manifest would be built using a tool.
   * @param manifest - the manifest to add to the resolver
   */ addManifest(manifest) {
        if (this._manifest) (0, _warnMjs.warn)("[Resolver] Manifest already exists, this will be overwritten");
        this._manifest = manifest;
        manifest.bundles.forEach((bundle)=>{
            this.addBundle(bundle.name, bundle.assets);
        });
    }
    /**
   * This adds a bundle of assets in one go so that you can resolve them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * resolver.addBundle('animals', [
   *  { alias: 'bunny', src: 'bunny.png' },
   *  { alias: 'chicken', src: 'chicken.png' },
   *  { alias: 'thumper', src: 'thumper.png' },
   * ]);
   * // or
   * resolver.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const resolvedAssets = await resolver.resolveBundle('animals');
   * @param bundleId - The id of the bundle to add
   * @param assets - A record of the asset or assets that will be chosen from when loading via the specified key
   */ addBundle(bundleId, assets) {
        const assetNames = [];
        let convertedAssets = assets;
        if (!Array.isArray(assets)) convertedAssets = Object.entries(assets).map(([alias, src])=>{
            if (typeof src === "string" || Array.isArray(src)) return {
                alias,
                src
            };
            return {
                alias,
                ...src
            };
        });
        convertedAssets.forEach((asset)=>{
            const srcs = asset.src;
            const aliases = asset.alias;
            let ids;
            if (typeof aliases === "string") {
                const bundleAssetId = this._createBundleAssetId(bundleId, aliases);
                assetNames.push(bundleAssetId);
                ids = [
                    aliases,
                    bundleAssetId
                ];
            } else {
                const bundleIds = aliases.map((name)=>this._createBundleAssetId(bundleId, name));
                assetNames.push(...bundleIds);
                ids = [
                    ...aliases,
                    ...bundleIds
                ];
            }
            this.add({
                ...asset,
                alias: ids,
                src: srcs
            });
        });
        this._bundles[bundleId] = assetNames;
    }
    /**
   * Tells the resolver what keys are associated with witch asset.
   * The most important thing the resolver does
   * @example
   * // Single key, single asset:
   * resolver.add({alias: 'foo', src: 'bar.png');
   * resolver.resolveUrl('foo') // => 'bar.png'
   *
   * // Multiple keys, single asset:
   * resolver.add({alias: ['foo', 'boo'], src: 'bar.png'});
   * resolver.resolveUrl('foo') // => 'bar.png'
   * resolver.resolveUrl('boo') // => 'bar.png'
   *
   * // Multiple keys, multiple assets:
   * resolver.add({alias: ['foo', 'boo'], src: ['bar.png', 'bar.webp']});
   * resolver.resolveUrl('foo') // => 'bar.png'
   *
   * // Add custom data attached to the resolver
   * Resolver.add({
   *     alias: 'bunnyBooBooSmooth',
   *     src: 'bunny{png,webp}',
   *     data: { scaleMode:SCALE_MODES.NEAREST }, // Base texture options
   * });
   *
   * resolver.resolve('bunnyBooBooSmooth') // => { src: 'bunny.png', data: { scaleMode: SCALE_MODES.NEAREST } }
   * @param aliases - the UnresolvedAsset or array of UnresolvedAssets to add to the resolver
   */ add(aliases) {
        const assets = [];
        if (Array.isArray(aliases)) assets.push(...aliases);
        else assets.push(aliases);
        let keyCheck;
        keyCheck = (key)=>{
            if (this.hasKey(key)) (0, _warnMjs.warn)(`[Resolver] already has key: ${key} overwriting`);
        };
        const assetArray = (0, _convertToListMjs.convertToList)(assets);
        assetArray.forEach((asset)=>{
            const { src } = asset;
            let { data, format, loadParser } = asset;
            const srcsToUse = (0, _convertToListMjs.convertToList)(src).map((src2)=>{
                if (typeof src2 === "string") return (0, _createStringVariationsMjs.createStringVariations)(src2);
                return Array.isArray(src2) ? src2 : [
                    src2
                ];
            });
            const aliasesToUse = this.getAlias(asset);
            Array.isArray(aliasesToUse) ? aliasesToUse.forEach(keyCheck) : keyCheck(aliasesToUse);
            const resolvedAssets = [];
            srcsToUse.forEach((srcs)=>{
                srcs.forEach((src2)=>{
                    let formattedAsset = {};
                    if (typeof src2 !== "object") {
                        formattedAsset.src = src2;
                        for(let i = 0; i < this._parsers.length; i++){
                            const parser = this._parsers[i];
                            if (parser.test(src2)) {
                                formattedAsset = parser.parse(src2);
                                break;
                            }
                        }
                    } else {
                        data = src2.data ?? data;
                        format = src2.format ?? format;
                        loadParser = src2.loadParser ?? loadParser;
                        formattedAsset = {
                            ...formattedAsset,
                            ...src2
                        };
                    }
                    if (!aliasesToUse) throw new Error(`[Resolver] alias is undefined for this asset: ${formattedAsset.src}`);
                    formattedAsset = this._buildResolvedAsset(formattedAsset, {
                        aliases: aliasesToUse,
                        data,
                        format,
                        loadParser
                    });
                    resolvedAssets.push(formattedAsset);
                });
            });
            aliasesToUse.forEach((alias)=>{
                this._assetMap[alias] = resolvedAssets;
            });
        });
    }
    // TODO: this needs an overload like load did in Assets
    /**
   * If the resolver has had a manifest set via setManifest, this will return the assets urls for
   * a given bundleId or bundleIds.
   * @example
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * resolver.setManifest(manifest);
   * const resolved = resolver.resolveBundle('load-screen');
   * @param bundleIds - The bundle ids to resolve
   * @returns All the bundles assets or a hash of assets for each bundle specified
   */ resolveBundle(bundleIds) {
        const singleAsset = (0, _isSingleItemMjs.isSingleItem)(bundleIds);
        bundleIds = (0, _convertToListMjs.convertToList)(bundleIds);
        const out = {};
        bundleIds.forEach((bundleId)=>{
            const assetNames = this._bundles[bundleId];
            if (assetNames) {
                const results = this.resolve(assetNames);
                const assets = {};
                for(const key in results){
                    const asset = results[key];
                    assets[this._extractAssetIdFromBundle(bundleId, key)] = asset;
                }
                out[bundleId] = assets;
            }
        });
        return singleAsset ? out[bundleIds[0]] : out;
    }
    /**
   * Does exactly what resolve does, but returns just the URL rather than the whole asset object
   * @param key - The key or keys to resolve
   * @returns - The URLs associated with the key(s)
   */ resolveUrl(key) {
        const result = this.resolve(key);
        if (typeof key !== "string") {
            const out = {};
            for(const i in result)out[i] = result[i].src;
            return out;
        }
        return result.src;
    }
    resolve(keys) {
        const singleAsset = (0, _isSingleItemMjs.isSingleItem)(keys);
        keys = (0, _convertToListMjs.convertToList)(keys);
        const result = {};
        keys.forEach((key)=>{
            if (!this._resolverHash[key]) {
                if (this._assetMap[key]) {
                    let assets = this._assetMap[key];
                    const preferredOrder = this._getPreferredOrder(assets);
                    preferredOrder?.priority.forEach((priorityKey)=>{
                        preferredOrder.params[priorityKey].forEach((value)=>{
                            const filteredAssets = assets.filter((asset)=>{
                                if (asset[priorityKey]) return asset[priorityKey] === value;
                                return false;
                            });
                            if (filteredAssets.length) assets = filteredAssets;
                        });
                    });
                    this._resolverHash[key] = assets[0];
                } else this._resolverHash[key] = this._buildResolvedAsset({
                    alias: [
                        key
                    ],
                    src: key
                }, {});
            }
            result[key] = this._resolverHash[key];
        });
        return singleAsset ? result[keys[0]] : result;
    }
    /**
   * Checks if an asset with a given key exists in the resolver
   * @param key - The key of the asset
   */ hasKey(key) {
        return !!this._assetMap[key];
    }
    /**
   * Checks if a bundle with the given key exists in the resolver
   * @param key - The key of the bundle
   */ hasBundle(key) {
        return !!this._bundles[key];
    }
    /**
   * Internal function for figuring out what prefer criteria an asset should use.
   * @param assets
   */ _getPreferredOrder(assets) {
        for(let i = 0; i < assets.length; i++){
            const asset = assets[0];
            const preferred = this._preferredOrder.find((preference)=>preference.params.format.includes(asset.format));
            if (preferred) return preferred;
        }
        return this._preferredOrder[0];
    }
    /**
   * Appends the default url parameters to the url
   * @param url - The url to append the default parameters to
   * @returns - The url with the default parameters appended
   */ _appendDefaultSearchParams(url) {
        if (!this._defaultSearchParams) return url;
        const paramConnector = /\?/.test(url) ? "&" : "?";
        return `${url}${paramConnector}${this._defaultSearchParams}`;
    }
    _buildResolvedAsset(formattedAsset, data) {
        const { aliases, data: assetData, loadParser, format } = data;
        if (this._basePath || this._rootPath) formattedAsset.src = (0, _pathMjs.path).toAbsolute(formattedAsset.src, this._basePath, this._rootPath);
        formattedAsset.alias = aliases ?? formattedAsset.alias ?? [
            formattedAsset.src
        ];
        formattedAsset.src = this._appendDefaultSearchParams(formattedAsset.src);
        formattedAsset.data = {
            ...assetData || {},
            ...formattedAsset.data
        };
        formattedAsset.loadParser = loadParser ?? formattedAsset.loadParser;
        formattedAsset.format = format ?? formattedAsset.format ?? getUrlExtension(formattedAsset.src);
        return formattedAsset;
    }
}
/**
 * The prefix that denotes a URL is for a retina asset.
 * @static
 * @name RETINA_PREFIX
 * @type {RegExp}
 * @default /@([0-9\.]+)x/
 * @example `@2x`
 */ Resolver.RETINA_PREFIX = /@([0-9\.]+)x/;
function getUrlExtension(url) {
    return url.split(".").pop().split("?").shift().split("#").shift();
}

},{"../../utils/logging/warn.mjs":"gCz01","../../utils/path.mjs":"fneYW","../utils/convertToList.mjs":"iOg0X","../utils/createStringVariations.mjs":"27Krl","../utils/isSingleItem.mjs":"8fcqK","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fneYW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "path", ()=>path);
var _adapterMjs = require("../environment/adapter.mjs");
"use strict";
function assertPath(path2) {
    if (typeof path2 !== "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(path2)}`);
}
function removeUrlParams(url) {
    const re = url.split("?")[0];
    return re.split("#")[0];
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function normalizeStringPosix(path2, allowAboveRoot) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code = -1;
    for(let i = 0; i <= path2.length; ++i){
        if (i < path2.length) code = path2.charCodeAt(i);
        else if (code === 47) break;
        else code = 47;
        if (code === 47) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += `/${path2.slice(lastSlash + 1, i)}`;
                else res = path2.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
const path = {
    /**
   * Converts a path to posix format.
   * @param path - The path to convert to posix
   */ toPosix (path2) {
        return replaceAll(path2, "\\", "/");
    },
    /**
   * Checks if the path is a URL e.g. http://, https://
   * @param path - The path to check
   */ isUrl (path2) {
        return /^https?:/.test(this.toPosix(path2));
    },
    /**
   * Checks if the path is a data URL
   * @param path - The path to check
   */ isDataUrl (path2) {
        return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(path2);
    },
    /**
   * Checks if the path is a blob URL
   * @param path - The path to check
   */ isBlobUrl (path2) {
        return path2.startsWith("blob:");
    },
    /**
   * Checks if the path has a protocol e.g. http://, https://, file:///, data:, blob:, C:/
   * This will return true for windows file paths
   * @param path - The path to check
   */ hasProtocol (path2) {
        return /^[^/:]+:/.test(this.toPosix(path2));
    },
    /**
   * Returns the protocol of the path e.g. http://, https://, file:///, data:, blob:, C:/
   * @param path - The path to get the protocol from
   */ getProtocol (path2) {
        assertPath(path2);
        path2 = this.toPosix(path2);
        const matchFile = /^file:\/\/\//.exec(path2);
        if (matchFile) return matchFile[0];
        const matchProtocol = /^[^/:]+:\/{0,2}/.exec(path2);
        if (matchProtocol) return matchProtocol[0];
        return "";
    },
    /**
   * Converts URL to an absolute path.
   * When loading from a Web Worker, we must use absolute paths.
   * If the URL is already absolute we return it as is
   * If it's not, we convert it
   * @param url - The URL to test
   * @param customBaseUrl - The base URL to use
   * @param customRootUrl - The root URL to use
   */ toAbsolute (url, customBaseUrl, customRootUrl) {
        assertPath(url);
        if (this.isDataUrl(url) || this.isBlobUrl(url)) return url;
        const baseUrl = removeUrlParams(this.toPosix(customBaseUrl ?? (0, _adapterMjs.DOMAdapter).get().getBaseUrl()));
        const rootUrl = removeUrlParams(this.toPosix(customRootUrl ?? this.rootname(baseUrl)));
        url = this.toPosix(url);
        if (url.startsWith("/")) return path.join(rootUrl, url.slice(1));
        const absolutePath = this.isAbsolute(url) ? url : this.join(baseUrl, url);
        return absolutePath;
    },
    /**
   * Normalizes the given path, resolving '..' and '.' segments
   * @param path - The path to normalize
   */ normalize (path2) {
        assertPath(path2);
        if (path2.length === 0) return ".";
        if (this.isDataUrl(path2) || this.isBlobUrl(path2)) return path2;
        path2 = this.toPosix(path2);
        let protocol = "";
        const isAbsolute = path2.startsWith("/");
        if (this.hasProtocol(path2)) {
            protocol = this.rootname(path2);
            path2 = path2.slice(protocol.length);
        }
        const trailingSeparator = path2.endsWith("/");
        path2 = normalizeStringPosix(path2, false);
        if (path2.length > 0 && trailingSeparator) path2 += "/";
        if (isAbsolute) return `/${path2}`;
        return protocol + path2;
    },
    /**
   * Determines if path is an absolute path.
   * Absolute paths can be urls, data urls, or paths on disk
   * @param path - The path to test
   */ isAbsolute (path2) {
        assertPath(path2);
        path2 = this.toPosix(path2);
        if (this.hasProtocol(path2)) return true;
        return path2.startsWith("/");
    },
    /**
   * Joins all given path segments together using the platform-specific separator as a delimiter,
   * then normalizes the resulting path
   * @param segments - The segments of the path to join
   */ join (...segments) {
        if (segments.length === 0) return ".";
        let joined;
        for(let i = 0; i < segments.length; ++i){
            const arg = segments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === void 0) joined = arg;
                else {
                    const prevArg = segments[i - 1] ?? "";
                    if (this.joinExtensions.includes(this.extname(prevArg).toLowerCase())) joined += `/../${arg}`;
                    else joined += `/${arg}`;
                }
            }
        }
        if (joined === void 0) return ".";
        return this.normalize(joined);
    },
    /**
   * Returns the directory name of a path
   * @param path - The path to parse
   */ dirname (path2) {
        assertPath(path2);
        if (path2.length === 0) return ".";
        path2 = this.toPosix(path2);
        let code = path2.charCodeAt(0);
        const hasRoot = code === 47;
        let end = -1;
        let matchedSlash = true;
        const proto = this.getProtocol(path2);
        const origpath = path2;
        path2 = path2.slice(proto.length);
        for(let i = path2.length - 1; i >= 1; --i){
            code = path2.charCodeAt(i);
            if (code === 47) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : this.isUrl(origpath) ? proto + path2 : proto;
        if (hasRoot && end === 1) return "//";
        return proto + path2.slice(0, end);
    },
    /**
   * Returns the root of the path e.g. /, C:/, file:///, http://domain.com/
   * @param path - The path to parse
   */ rootname (path2) {
        assertPath(path2);
        path2 = this.toPosix(path2);
        let root = "";
        if (path2.startsWith("/")) root = "/";
        else root = this.getProtocol(path2);
        if (this.isUrl(path2)) {
            const index = path2.indexOf("/", root.length);
            if (index !== -1) root = path2.slice(0, index);
            else root = path2;
            if (!root.endsWith("/")) root += "/";
        }
        return root;
    },
    /**
   * Returns the last portion of a path
   * @param path - The path to test
   * @param ext - Optional extension to remove
   */ basename (path2, ext) {
        assertPath(path2);
        if (ext) assertPath(ext);
        path2 = removeUrlParams(this.toPosix(path2));
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
            if (ext.length === path2.length && ext === path2) return "";
            let extIdx = ext.length - 1;
            let firstNonSlashEnd = -1;
            for(i = path2.length - 1; i >= 0; --i){
                const code = path2.charCodeAt(i);
                if (code === 47) {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) end = i;
                        } else {
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path2.length;
            return path2.slice(start, end);
        }
        for(i = path2.length - 1; i >= 0; --i){
            if (path2.charCodeAt(i) === 47) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) return "";
        return path2.slice(start, end);
    },
    /**
   * Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last
   * portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than
   * the first character of the basename of path, an empty string is returned.
   * @param path - The path to parse
   */ extname (path2) {
        assertPath(path2);
        path2 = removeUrlParams(this.toPosix(path2));
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let preDotState = 0;
        for(let i = path2.length - 1; i >= 0; --i){
            const code = path2.charCodeAt(i);
            if (code === 47) {
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46) {
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) preDotState = -1;
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path2.slice(startDot, end);
    },
    /**
   * Parses a path into an object containing the 'root', `dir`, `base`, `ext`, and `name` properties.
   * @param path - The path to parse
   */ parse (path2) {
        assertPath(path2);
        const ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path2.length === 0) return ret;
        path2 = removeUrlParams(this.toPosix(path2));
        let code = path2.charCodeAt(0);
        const isAbsolute = this.isAbsolute(path2);
        let start;
        const protocol = "";
        ret.root = this.rootname(path2);
        if (isAbsolute || this.hasProtocol(path2)) start = 1;
        else start = 0;
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let i = path2.length - 1;
        let preDotState = 0;
        for(; i >= start; --i){
            code = path2.charCodeAt(i);
            if (code === 47) {
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46) {
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) preDotState = -1;
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path2.slice(1, end);
                else ret.base = ret.name = path2.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path2.slice(1, startDot);
                ret.base = path2.slice(1, end);
            } else {
                ret.name = path2.slice(startPart, startDot);
                ret.base = path2.slice(startPart, end);
            }
            ret.ext = path2.slice(startDot, end);
        }
        ret.dir = this.dirname(path2);
        if (protocol) ret.dir = protocol + ret.dir;
        return ret;
    },
    sep: "/",
    delimiter: ":",
    joinExtensions: [
        ".html"
    ]
};

},{"../environment/adapter.mjs":"bGyo9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bGyo9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMAdapter", ()=>DOMAdapter);
var _browserAdapterMjs = require("../environment-browser/BrowserAdapter.mjs");
"use strict";
let currentAdapter = (0, _browserAdapterMjs.BrowserAdapter);
const DOMAdapter = {
    /**
   * Returns the current adapter.
   * @returns {environment.Adapter} The current adapter.
   */ get () {
        return currentAdapter;
    },
    /**
   * Sets the current adapter.
   * @param adapter - The new adapter.
   */ set (adapter) {
        currentAdapter = adapter;
    }
};

},{"../environment-browser/BrowserAdapter.mjs":"4HL23","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4HL23":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserAdapter", ()=>BrowserAdapter);
"use strict";
const BrowserAdapter = {
    createCanvas: (width, height)=>{
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    },
    getCanvasRenderingContext2D: ()=>CanvasRenderingContext2D,
    getWebGLRenderingContext: ()=>WebGLRenderingContext,
    getWebGL2RenderingContext: ()=>WebGL2RenderingContext,
    getNavigator: ()=>navigator,
    getBaseUrl: ()=>document.baseURI ?? window.location.href,
    getFontFaceSet: ()=>document.fonts,
    fetch: (url, options)=>fetch(url, options),
    parseXML: (xml)=>{
        const parser = new DOMParser();
        return parser.parseFromString(xml, "text/xml");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"iOg0X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertToList", ()=>convertToList);
"use strict";
const convertToList = (input, transform, forceTransform = false)=>{
    if (!Array.isArray(input)) input = [
        input
    ];
    if (!transform) return input;
    return input.map((item)=>{
        if (typeof item === "string" || forceTransform) return transform(item);
        return item;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"27Krl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStringVariations", ()=>createStringVariations);
"use strict";
function processX(base, ids, depth, result, tags) {
    const id = ids[depth];
    for(let i = 0; i < id.length; i++){
        const value = id[i];
        if (depth < ids.length - 1) processX(base.replace(result[depth], value), ids, depth + 1, result, tags);
        else tags.push(base.replace(result[depth], value));
    }
}
function createStringVariations(string) {
    const regex = /\{(.*?)\}/g;
    const result = string.match(regex);
    const tags = [];
    if (result) {
        const ids = [];
        result.forEach((vars)=>{
            const split = vars.substring(1, vars.length - 1).split(",");
            ids.push(split);
        });
        processX(string, ids, 0, result, tags);
    } else tags.push(string);
    return tags;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8fcqK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSingleItem", ()=>isSingleItem);
"use strict";
const isSingleItem = (item)=>!Array.isArray(item);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jgkwF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copySearchParams", ()=>copySearchParams);
"use strict";
const copySearchParams = (targetUrl, sourceUrl)=>{
    const searchParams = sourceUrl.split("?")[1];
    if (searchParams) targetUrl += `?${searchParams}`;
    return targetUrl;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ho7cW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Texture", ()=>Texture);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _groupD8Mjs = require("../../../../maths/matrix/groupD8.mjs");
var _rectangleMjs = require("../../../../maths/shapes/Rectangle.mjs");
var _uidMjs = require("../../../../utils/data/uid.mjs");
var _deprecationMjs = require("../../../../utils/logging/deprecation.mjs");
var _noopMjs = require("../../../../utils/misc/NOOP.mjs");
var _bufferSourceMjs = require("./sources/BufferSource.mjs");
var _textureSourceMjs = require("./sources/TextureSource.mjs");
var _textureMatrixMjs = require("./TextureMatrix.mjs");
"use strict";
class Texture extends (0, _eventemitter3Default.default) {
    /**
   * @param {TextureOptions} param0 - Options for the texture
   */ constructor({ source, label, frame, orig, trim, defaultAnchor, defaultBorders, rotate, dynamic } = {}){
        super();
        /** unique id for this texture */ this.uid = (0, _uidMjs.uid)("texture");
        /** A uvs object based on the given frame and the texture source */ this.uvs = {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            x3: 0,
            y3: 0
        };
        /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     */ this.frame = new (0, _rectangleMjs.Rectangle)();
        /**
     * Does this Texture have any frame data assigned to it?
     *
     * This mode is enabled automatically if no frame was passed inside constructor.
     *
     * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
     *
     * Beware, after loading or resize of baseTexture event can fired two times!
     * If you want more control, subscribe on baseTexture itself.
     * @example
     * texture.on('update', () => {});
     */ this.noFrame = false;
        /**
     * Set to true if you plan on modifying the uvs of this texture.
     * When this is the case, sprites and other objects using the texture will
     * make sure to listen for changes to the uvs and update their vertices accordingly.
     */ this.dynamic = false;
        /** is it a texture? yes! used for type checking */ this.isTexture = true;
        this.label = label;
        this.source = source?.source ?? new (0, _textureSourceMjs.TextureSource)();
        this.noFrame = !frame;
        if (frame) this.frame.copyFrom(frame);
        else {
            const { width, height } = this._source;
            this.frame.width = width;
            this.frame.height = height;
        }
        this.orig = orig || this.frame;
        this.trim = trim;
        this.rotate = rotate ?? 0;
        this.defaultAnchor = defaultAnchor;
        this.defaultBorders = defaultBorders;
        this.destroyed = false;
        this.dynamic = dynamic || false;
        this.updateUvs();
    }
    set source(value) {
        if (this._source) this._source.off("resize", this.update, this);
        this._source = value;
        value.on("resize", this.update, this);
        this.emit("update", this);
    }
    /** the underlying source of the texture (equivalent of baseTexture in v7) */ get source() {
        return this._source;
    }
    /** returns a TextureMatrix instance for this texture. By default, that object is not created because its heavy. */ get textureMatrix() {
        if (!this._textureMatrix) this._textureMatrix = new (0, _textureMatrixMjs.TextureMatrix)(this);
        return this._textureMatrix;
    }
    /** The width of the Texture in pixels. */ get width() {
        return this.orig.width;
    }
    /** The height of the Texture in pixels. */ get height() {
        return this.orig.height;
    }
    /** Call this function when you have modified the frame of this texture. */ updateUvs() {
        const { uvs, frame } = this;
        const { width, height } = this._source;
        const nX = frame.x / width;
        const nY = frame.y / height;
        const nW = frame.width / width;
        const nH = frame.height / height;
        let rotate = this.rotate;
        if (rotate) {
            const w2 = nW / 2;
            const h2 = nH / 2;
            const cX = nX + w2;
            const cY = nY + h2;
            rotate = (0, _groupD8Mjs.groupD8).add(rotate, (0, _groupD8Mjs.groupD8).NW);
            uvs.x0 = cX + w2 * (0, _groupD8Mjs.groupD8).uX(rotate);
            uvs.y0 = cY + h2 * (0, _groupD8Mjs.groupD8).uY(rotate);
            rotate = (0, _groupD8Mjs.groupD8).add(rotate, 2);
            uvs.x1 = cX + w2 * (0, _groupD8Mjs.groupD8).uX(rotate);
            uvs.y1 = cY + h2 * (0, _groupD8Mjs.groupD8).uY(rotate);
            rotate = (0, _groupD8Mjs.groupD8).add(rotate, 2);
            uvs.x2 = cX + w2 * (0, _groupD8Mjs.groupD8).uX(rotate);
            uvs.y2 = cY + h2 * (0, _groupD8Mjs.groupD8).uY(rotate);
            rotate = (0, _groupD8Mjs.groupD8).add(rotate, 2);
            uvs.x3 = cX + w2 * (0, _groupD8Mjs.groupD8).uX(rotate);
            uvs.y3 = cY + h2 * (0, _groupD8Mjs.groupD8).uY(rotate);
        } else {
            uvs.x0 = nX;
            uvs.y0 = nY;
            uvs.x1 = nX + nW;
            uvs.y1 = nY;
            uvs.x2 = nX + nW;
            uvs.y2 = nY + nH;
            uvs.x3 = nX;
            uvs.y3 = nY + nH;
        }
    }
    /**
   * Destroys this texture
   * @param destroySource - Destroy the source when the texture is destroyed.
   */ destroy(destroySource = false) {
        if (this._source) {
            if (destroySource) {
                this._source.destroy();
                this._source = null;
            }
        }
        this._textureMatrix = null;
        this.destroyed = true;
        this.emit("destroy", this);
        this.removeAllListeners();
    }
    /** call this if you have modified the `texture outside` of the constructor */ update() {
        if (this.noFrame) {
            this.frame.width = this._source.width;
            this.frame.height = this._source.height;
        }
        this.updateUvs();
        this.emit("update", this);
    }
    /** @deprecated since 8.0.0 */ get baseTexture() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Texture.baseTexture is now Texture.source");
        return this._source;
    }
}
Texture.EMPTY = new Texture({
    label: "EMPTY",
    source: new (0, _textureSourceMjs.TextureSource)({
        label: "EMPTY"
    })
});
Texture.EMPTY.destroy = (0, _noopMjs.NOOP);
Texture.WHITE = new Texture({
    source: new (0, _bufferSourceMjs.BufferImageSource)({
        resource: new Uint8Array([
            255,
            255,
            255,
            255
        ]),
        width: 1,
        height: 1,
        alphaMode: "premultiply-alpha-on-upload",
        label: "WHITE"
    }),
    label: "WHITE"
});
Texture.WHITE.destroy = (0, _noopMjs.NOOP);

},{"eventemitter3":"enSRh","../../../../maths/matrix/groupD8.mjs":"hKvLv","../../../../maths/shapes/Rectangle.mjs":"kCPrw","../../../../utils/data/uid.mjs":"2iBho","../../../../utils/logging/deprecation.mjs":"axL6x","../../../../utils/misc/NOOP.mjs":"19JC0","./sources/BufferSource.mjs":"a07Nd","./sources/TextureSource.mjs":"9dqzh","./TextureMatrix.mjs":"7SVeS","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"hKvLv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groupD8", ()=>groupD8);
var _matrixMjs = require("./Matrix.mjs");
"use strict";
const ux = [
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1
];
const uy = [
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1
];
const vx = [
    0,
    -1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1
];
const vy = [
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1
];
const rotationCayley = [];
const rotationMatrices = [];
const signum = Math.sign;
function init() {
    for(let i = 0; i < 16; i++){
        const row = [];
        rotationCayley.push(row);
        for(let j = 0; j < 16; j++){
            const _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
            const _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
            const _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
            const _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
            for(let k = 0; k < 16; k++)if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
                row.push(k);
                break;
            }
        }
    }
    for(let i = 0; i < 16; i++){
        const mat = new (0, _matrixMjs.Matrix)();
        mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
        rotationMatrices.push(mat);
    }
}
init();
const groupD8 = {
    /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 0°       | East      |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ E: 0,
    /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 45°↻     | Southeast |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ SE: 1,
    /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 90°↻     | South     |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ S: 2,
    /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 135°↻    | Southwest |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ SW: 3,
    /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 180°     | West      |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ W: 4,
    /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -135°/225°↻ | Northwest    |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ NW: 5,
    /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -90°/270°↻  | North        |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ N: 6,
    /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -45°/315°↻  | Northeast    |
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ NE: 7,
    /**
   * Reflection about Y-axis.
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ MIRROR_VERTICAL: 8,
    /**
   * Reflection about the main diagonal.
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ MAIN_DIAGONAL: 10,
    /**
   * Reflection about X-axis.
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ MIRROR_HORIZONTAL: 12,
    /**
   * Reflection about reverse diagonal.
   * @memberof maths.groupD8
   * @constant {GD8Symmetry}
   */ REVERSE_DIAGONAL: 14,
    /**
   * @memberof maths.groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The X-component of the U-axis
   *    after rotating the axes.
   */ uX: (ind)=>ux[ind],
    /**
   * @memberof maths.groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The Y-component of the U-axis
   *    after rotating the axes.
   */ uY: (ind)=>uy[ind],
    /**
   * @memberof maths.groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The X-component of the V-axis
   *    after rotating the axes.
   */ vX: (ind)=>vx[ind],
    /**
   * @memberof maths.groupD8
   * @param {GD8Symmetry} ind - sprite rotation angle.
   * @returns {GD8Symmetry} The Y-component of the V-axis
   *    after rotating the axes.
   */ vY: (ind)=>vy[ind],
    /**
   * @memberof maths.groupD8
   * @param {GD8Symmetry} rotation - symmetry whose opposite
   *   is needed. Only rotations have opposite symmetries while
   *   reflections don't.
   * @returns {GD8Symmetry} The opposite symmetry of `rotation`
   */ inv: (rotation)=>{
        if (rotation & 8) return rotation & 15;
        return -rotation & 7;
    },
    /**
   * Composes the two D8 operations.
   *
   * Taking `^` as reflection:
   *
   * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
   * |-------|-----|-----|-----|-----|------|-------|-------|-------|
   * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
   * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
   * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
   * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
   * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
   * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
   * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
   * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
   *
   * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
   * @memberof maths.groupD8
   * @param {GD8Symmetry} rotationSecond - Second operation, which
   *   is the row in the above cayley table.
   * @param {GD8Symmetry} rotationFirst - First operation, which
   *   is the column in the above cayley table.
   * @returns {GD8Symmetry} Composed operation
   */ add: (rotationSecond, rotationFirst)=>rotationCayley[rotationSecond][rotationFirst],
    /**
   * Reverse of `add`.
   * @memberof maths.groupD8
   * @param {GD8Symmetry} rotationSecond - Second operation
   * @param {GD8Symmetry} rotationFirst - First operation
   * @returns {GD8Symmetry} Result
   */ sub: (rotationSecond, rotationFirst)=>rotationCayley[rotationSecond][groupD8.inv(rotationFirst)],
    /**
   * Adds 180 degrees to rotation, which is a commutative
   * operation.
   * @memberof maths.groupD8
   * @param {number} rotation - The number to rotate.
   * @returns {number} Rotated number
   */ rotate180: (rotation)=>rotation ^ 4,
    /**
   * Checks if the rotation angle is vertical, i.e. south
   * or north. It doesn't work for reflections.
   * @memberof maths.groupD8
   * @param {GD8Symmetry} rotation - The number to check.
   * @returns {boolean} Whether or not the direction is vertical
   */ isVertical: (rotation)=>(rotation & 3) === 2,
    // rotation % 4 === 2
    /**
   * Approximates the vector `V(dx,dy)` into one of the
   * eight directions provided by `groupD8`.
   * @memberof maths.groupD8
   * @param {number} dx - X-component of the vector
   * @param {number} dy - Y-component of the vector
   * @returns {GD8Symmetry} Approximation of the vector into
   *  one of the eight symmetries.
   */ byDirection: (dx, dy)=>{
        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
            if (dy >= 0) return groupD8.S;
            return groupD8.N;
        } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
            if (dx > 0) return groupD8.E;
            return groupD8.W;
        } else if (dy > 0) {
            if (dx > 0) return groupD8.SE;
            return groupD8.SW;
        } else if (dx > 0) return groupD8.NE;
        return groupD8.NW;
    },
    /**
   * Helps sprite to compensate texture packer rotation.
   * @memberof maths.groupD8
   * @param {Matrix} matrix - sprite world matrix
   * @param {GD8Symmetry} rotation - The rotation factor to use.
   * @param {number} tx - sprite anchoring
   * @param {number} ty - sprite anchoring
   */ matrixAppendRotationInv: (matrix, rotation, tx = 0, ty = 0)=>{
        const mat = rotationMatrices[groupD8.inv(rotation)];
        mat.tx = tx;
        mat.ty = ty;
        matrix.append(mat);
    }
};

},{"./Matrix.mjs":"kpkIt","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"19JC0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
"use strict";
const NOOP = ()=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"a07Nd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferImageSource", ()=>BufferImageSource);
var _extensionsMjs = require("../../../../../extensions/Extensions.mjs");
var _textureSourceMjs = require("./TextureSource.mjs");
"use strict";
class BufferImageSource extends (0, _textureSourceMjs.TextureSource) {
    constructor(options){
        const buffer = options.resource || new Float32Array(options.width * options.height * 4);
        let format = options.format;
        if (!format) {
            if (buffer instanceof Float32Array) format = "rgba32float";
            else if (buffer instanceof Int32Array) format = "rgba32uint";
            else if (buffer instanceof Uint32Array) format = "rgba32uint";
            else if (buffer instanceof Int16Array) format = "rgba16uint";
            else if (buffer instanceof Uint16Array) format = "rgba16uint";
            else if (buffer instanceof Int8Array) format = "bgra8unorm";
            else format = "bgra8unorm";
        }
        super({
            ...options,
            resource: buffer,
            format
        });
        this.uploadMethodId = "buffer";
    }
    static test(resource) {
        return resource instanceof Int8Array || resource instanceof Uint8Array || resource instanceof Uint8ClampedArray || resource instanceof Int16Array || resource instanceof Uint16Array || resource instanceof Int32Array || resource instanceof Uint32Array || resource instanceof Float32Array;
    }
}
BufferImageSource.extension = (0, _extensionsMjs.ExtensionType).TextureSource;

},{"../../../../../extensions/Extensions.mjs":"c8doH","./TextureSource.mjs":"9dqzh","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9dqzh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextureSource", ()=>TextureSource);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _pow2Mjs = require("../../../../../maths/misc/pow2.mjs");
var _definedPropsMjs = require("../../../../../scene/container/utils/definedProps.mjs");
var _uidMjs = require("../../../../../utils/data/uid.mjs");
var _textureStyleMjs = require("../TextureStyle.mjs");
"use strict";
const _TextureSource = class _TextureSource extends (0, _eventemitter3Default.default) {
    /**
   * @param options - options for creating a new TextureSource
   */ constructor(options = {}){
        super();
        this.options = options;
        /** unique id for this Texture source */ this.uid = (0, _uidMjs.uid)("textureSource");
        /**
     * The resource type used by this TextureSource. This is used by the bind groups to determine
     * how to handle this resource.
     * @ignore
     * @internal
     */ this._resourceType = "textureSource";
        /**
     * i unique resource id, used by the bind group systems.
     * This can change if the texture is resized or its resource changes
     */ this._resourceId = (0, _uidMjs.uid)("resource");
        /**
     * this is how the backends know how to upload this texture to the GPU
     * It changes depending on the resource type. Classes that extend TextureSource
     * should override this property.
     * @ignore
     * @internal
     */ this.uploadMethodId = "unknown";
        // dimensions
        this._resolution = 1;
        /** the pixel width of this texture source. This is the REAL pure number, not accounting resolution */ this.pixelWidth = 1;
        /** the pixel height of this texture source. This is the REAL pure number, not accounting resolution */ this.pixelHeight = 1;
        /**
     * the width of this texture source, accounting for resolution
     * eg pixelWidth 200, resolution 2, then width will be 100
     */ this.width = 1;
        /**
     * the height of this texture source, accounting for resolution
     * eg pixelHeight 200, resolution 2, then height will be 100
     */ this.height = 1;
        /**
     * The number of samples of a multisample texture. This is always 1 for non-multisample textures.
     * To enable multisample for a texture, set antialias to true
     * @internal
     * @ignore
     */ this.sampleCount = 1;
        /** The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true */ this.mipLevelCount = 1;
        /**
     * Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
     * for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
     * can look better when scaled down.
     *
     * For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
     * If you do, make sure to call `updateMipmaps` after you update the texture.
     */ this.autoGenerateMipmaps = false;
        /** the format that the texture data has */ this.format = "rgba8unorm";
        /** how many dimensions does this texture have? currently v8 only supports 2d */ this.dimension = "2d";
        /**
     * Only really affects RenderTextures.
     * Should we use antialiasing for this texture. It will look better, but may impact performance as a
     * Blit operation will be required to resolve the texture.
     */ this.antialias = false;
        /**
     * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
     * @protected
     */ this._touched = 0;
        /**
     * Used by the batcher to build texture batches. faster to have the variable here!
     * @protected
     */ this._batchTick = -1;
        /**
     * A temporary batch location for the texture batching. Here for performance reasons only!
     * @protected
     */ this._textureBindLocation = -1;
        options = {
            ..._TextureSource.defaultOptions,
            ...options
        };
        this.label = options.label ?? "";
        this.resource = options.resource;
        this.autoGarbageCollect = options.autoGarbageCollect;
        this._resolution = options.resolution;
        if (options.width) this.pixelWidth = options.width * this._resolution;
        else this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1;
        if (options.height) this.pixelHeight = options.height * this._resolution;
        else this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1;
        this.width = this.pixelWidth / this._resolution;
        this.height = this.pixelHeight / this._resolution;
        this.format = options.format;
        this.dimension = options.dimensions;
        this.mipLevelCount = options.mipLevelCount;
        this.autoGenerateMipmaps = options.autoGenerateMipmaps;
        this.sampleCount = options.sampleCount;
        this.antialias = options.antialias;
        this.alphaMode = options.alphaMode;
        this.style = new (0, _textureStyleMjs.TextureStyle)((0, _definedPropsMjs.definedProps)(options));
        this.destroyed = false;
        this._refreshPOT();
    }
    /** returns itself */ get source() {
        return this;
    }
    /** the style of the texture */ get style() {
        return this._style;
    }
    set style(value) {
        if (this.style === value) return;
        this._style?.off("change", this._onStyleChange, this);
        this._style = value;
        this._style?.on("change", this._onStyleChange, this);
        this._onStyleChange();
    }
    /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */ get addressMode() {
        return this._style.addressMode;
    }
    set addressMode(value) {
        this._style.addressMode = value;
    }
    /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */ get repeatMode() {
        return this._style.addressMode;
    }
    set repeatMode(value) {
        this._style.addressMode = value;
    }
    /** Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel. */ get magFilter() {
        return this._style.magFilter;
    }
    set magFilter(value) {
        this._style.magFilter = value;
    }
    /** Specifies the sampling behavior when the sample footprint is larger than one texel. */ get minFilter() {
        return this._style.minFilter;
    }
    set minFilter(value) {
        this._style.minFilter = value;
    }
    /** Specifies behavior for sampling between mipmap levels. */ get mipmapFilter() {
        return this._style.mipmapFilter;
    }
    set mipmapFilter(value) {
        this._style.mipmapFilter = value;
    }
    /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */ get lodMinClamp() {
        return this._style.lodMinClamp;
    }
    set lodMinClamp(value) {
        this._style.lodMinClamp = value;
    }
    /** Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture. */ get lodMaxClamp() {
        return this._style.lodMaxClamp;
    }
    set lodMaxClamp(value) {
        this._style.lodMaxClamp = value;
    }
    _onStyleChange() {
        this.emit("styleChange", this);
    }
    /** call this if you have modified the texture outside of the constructor */ update() {
        if (this.resource) {
            const resolution = this._resolution;
            const didResize = this.resize(this.resourceWidth / resolution, this.resourceHeight / resolution);
            if (didResize) return;
        }
        this.emit("update", this);
    }
    /** Destroys this texture source */ destroy() {
        this.destroyed = true;
        this.emit("destroy", this);
        if (this._style) {
            this._style.destroy();
            this._style = null;
        }
        this.uploadMethodId = null;
        this.resource = null;
        this.removeAllListeners();
    }
    /**
   * This will unload the Texture source from the GPU. This will free up the GPU memory
   * As soon as it is required fore rendering, it will be re-uploaded.
   */ unload() {
        this._resourceId = (0, _uidMjs.uid)("resource");
        this.emit("change", this);
        this.emit("unload", this);
    }
    /** the width of the resource. This is the REAL pure number, not accounting resolution   */ get resourceWidth() {
        const { resource } = this;
        return resource.naturalWidth || resource.videoWidth || resource.displayWidth || resource.width;
    }
    /** the height of the resource. This is the REAL pure number, not accounting resolution */ get resourceHeight() {
        const { resource } = this;
        return resource.naturalHeight || resource.videoHeight || resource.displayHeight || resource.height;
    }
    /**
   * the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
   * but will the size of the texture when rendered.
   *
   * changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
   * density will have increased)
   */ get resolution() {
        return this._resolution;
    }
    set resolution(resolution) {
        if (this._resolution === resolution) return;
        this._resolution = resolution;
        this.width = this.pixelWidth / resolution;
        this.height = this.pixelHeight / resolution;
    }
    /**
   * Resize the texture, this is handy if you want to use the texture as a render texture
   * @param width - the new width of the texture
   * @param height - the new height of the texture
   * @param resolution - the new resolution of the texture
   * @returns - if the texture was resized
   */ resize(width, height, resolution) {
        resolution = resolution || this._resolution;
        width = width || this.width;
        height = height || this.height;
        const newPixelWidth = Math.round(width * resolution);
        const newPixelHeight = Math.round(height * resolution);
        this.width = newPixelWidth / resolution;
        this.height = newPixelHeight / resolution;
        this._resolution = resolution;
        if (this.pixelWidth === newPixelWidth && this.pixelHeight === newPixelHeight) return false;
        this._refreshPOT();
        this.pixelWidth = newPixelWidth;
        this.pixelHeight = newPixelHeight;
        this.emit("resize", this);
        this._resourceId = (0, _uidMjs.uid)("resource");
        this.emit("change", this);
        return true;
    }
    /**
   * Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
   * This is only important for RenderTexture instances, as standard Texture instances will have their
   * mipmaps generated on upload. You should call this method after you make any change to the texture
   *
   * The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
   * We want you, the developer to specify when this action should happen.
   *
   * Generally you don't want to have mipmaps generated on Render targets that are changed every frame,
   */ updateMipmaps() {
        if (this.autoGenerateMipmaps && this.mipLevelCount > 1) this.emit("updateMipmaps", this);
    }
    set wrapMode(value) {
        this._style.wrapMode = value;
    }
    get wrapMode() {
        return this._style.wrapMode;
    }
    set scaleMode(value) {
        this._style.scaleMode = value;
    }
    /** setting this will set magFilter,minFilter and mipmapFilter all at once!  */ get scaleMode() {
        return this._style.scaleMode;
    }
    /**
   * Refresh check for isPowerOfTwo texture based on size
   * @private
   */ _refreshPOT() {
        this.isPowerOfTwo = (0, _pow2Mjs.isPow2)(this.pixelWidth) && (0, _pow2Mjs.isPow2)(this.pixelHeight);
    }
    static test(_resource) {
        throw new Error("Unimplemented");
    }
};
/** The default options used when creating a new TextureSource. override these to add your own defaults */ _TextureSource.defaultOptions = {
    resolution: 1,
    format: "bgra8unorm",
    alphaMode: "premultiply-alpha-on-upload",
    dimensions: "2d",
    mipLevelCount: 1,
    autoGenerateMipmaps: false,
    sampleCount: 1,
    antialias: false,
    autoGarbageCollect: false
};
let TextureSource = _TextureSource;

},{"eventemitter3":"enSRh","../../../../../maths/misc/pow2.mjs":"5Ec8h","../../../../../scene/container/utils/definedProps.mjs":"82jkF","../../../../../utils/data/uid.mjs":"2iBho","../TextureStyle.mjs":"lG2Eo","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"5Ec8h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPow2", ()=>isPow2);
parcelHelpers.export(exports, "log2", ()=>log2);
parcelHelpers.export(exports, "nextPow2", ()=>nextPow2);
"use strict";
function nextPow2(v) {
    v += v === 0 ? 1 : 0;
    --v;
    v |= v >>> 1;
    v |= v >>> 2;
    v |= v >>> 4;
    v |= v >>> 8;
    v |= v >>> 16;
    return v + 1;
}
function isPow2(v) {
    return !(v & v - 1) && !!v;
}
function log2(v) {
    let r = (v > 65535 ? 1 : 0) << 4;
    v >>>= r;
    let shift = (v > 255 ? 1 : 0) << 3;
    v >>>= shift;
    r |= shift;
    shift = (v > 15 ? 1 : 0) << 2;
    v >>>= shift;
    r |= shift;
    shift = (v > 3 ? 1 : 0) << 1;
    v >>>= shift;
    r |= shift;
    return r | v >> 1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"82jkF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "definedProps", ()=>definedProps);
"use strict";
function definedProps(obj) {
    const result = {};
    for(const key in obj)if (obj[key] !== void 0) result[key] = obj[key];
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"lG2Eo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextureStyle", ()=>TextureStyle);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _uidMjs = require("../../../../utils/data/uid.mjs");
var _deprecationMjs = require("../../../../utils/logging/deprecation.mjs");
"use strict";
const idHash = /* @__PURE__ */ Object.create(null);
function createResourceIdFromString(value) {
    const id = idHash[value];
    if (id === void 0) idHash[value] = (0, _uidMjs.uid)("resource");
    return id;
}
const _TextureStyle = class _TextureStyle extends (0, _eventemitter3Default.default) {
    /**
   * @param options - options for the style
   */ constructor(options = {}){
        super();
        this._resourceType = "textureSampler";
        this._touched = 0;
        /**
     * Specifies the maximum anisotropy value clamp used by the sampler.
     * Note: Most implementations support {@link GPUSamplerDescriptor#maxAnisotropy} values in range
     * between 1 and 16, inclusive. The used value of {@link GPUSamplerDescriptor#maxAnisotropy} will
     * be clamped to the maximum value that the platform supports.
     * @internal
     * @ignore
     */ this._maxAnisotropy = 1;
        options = {
            ..._TextureStyle.defaultOptions,
            ...options
        };
        this.addressMode = options.addressMode;
        this.addressModeU = options.addressModeU ?? this.addressModeU;
        this.addressModeV = options.addressModeV ?? this.addressModeV;
        this.addressModeW = options.addressModeW ?? this.addressModeW;
        this.scaleMode = options.scaleMode;
        this.magFilter = options.magFilter ?? this.magFilter;
        this.minFilter = options.minFilter ?? this.minFilter;
        this.mipmapFilter = options.mipmapFilter ?? this.mipmapFilter;
        this.lodMinClamp = options.lodMinClamp;
        this.lodMaxClamp = options.lodMaxClamp;
        this.compare = options.compare;
        this.maxAnisotropy = options.maxAnisotropy ?? 1;
    }
    set addressMode(value) {
        this.addressModeU = value;
        this.addressModeV = value;
        this.addressModeW = value;
    }
    /** setting this will set wrapModeU,wrapModeV and wrapModeW all at once! */ get addressMode() {
        return this.addressModeU;
    }
    set wrapMode(value) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "TextureStyle.wrapMode is now TextureStyle.addressMode");
        this.addressMode = value;
    }
    get wrapMode() {
        return this.addressMode;
    }
    set scaleMode(value) {
        this.magFilter = value;
        this.minFilter = value;
        this.mipmapFilter = value;
    }
    /** setting this will set magFilter,minFilter and mipmapFilter all at once!  */ get scaleMode() {
        return this.magFilter;
    }
    /** Specifies the maximum anisotropy value clamp used by the sampler. */ set maxAnisotropy(value) {
        this._maxAnisotropy = Math.min(value, 16);
        if (this._maxAnisotropy > 1) this.scaleMode = "linear";
    }
    get maxAnisotropy() {
        return this._maxAnisotropy;
    }
    // TODO - move this to WebGL?
    get _resourceId() {
        return this._sharedResourceId || this._generateResourceId();
    }
    update() {
        this.emit("change", this);
        this._sharedResourceId = null;
    }
    _generateResourceId() {
        const bigKey = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
        this._sharedResourceId = createResourceIdFromString(bigKey);
        return this._resourceId;
    }
    /** Destroys the style */ destroy() {
        this.emit("destroy", this);
        this.removeAllListeners();
    }
};
/** default options for the style */ _TextureStyle.defaultOptions = {
    addressMode: "clamp-to-edge",
    scaleMode: "linear"
};
let TextureStyle = _TextureStyle;

},{"eventemitter3":"enSRh","../../../../utils/data/uid.mjs":"2iBho","../../../../utils/logging/deprecation.mjs":"axL6x","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7SVeS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextureMatrix", ()=>TextureMatrix);
var _matrixMjs = require("../../../../maths/matrix/Matrix.mjs");
"use strict";
const tempMat = new (0, _matrixMjs.Matrix)();
class TextureMatrix {
    /**
   * @param texture - observed texture
   * @param clampMargin - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
   */ constructor(texture, clampMargin){
        this.mapCoord = new (0, _matrixMjs.Matrix)();
        this.uClampFrame = new Float32Array(4);
        this.uClampOffset = new Float32Array(2);
        this._textureID = -1;
        this._updateID = 0;
        this.clampOffset = 0;
        if (typeof clampMargin === "undefined") this.clampMargin = texture.width < 10 ? 0 : 0.5;
        else this.clampMargin = clampMargin;
        this.isSimple = false;
        this.texture = texture;
    }
    /** Texture property. */ get texture() {
        return this._texture;
    }
    set texture(value) {
        if (this.texture === value) return;
        this._texture?.removeListener("update", this.update, this);
        this._texture = value;
        this._texture.addListener("update", this.update, this);
        this.update();
    }
    /**
   * Multiplies uvs array to transform
   * @param uvs - mesh uvs
   * @param [out=uvs] - output
   * @returns - output
   */ multiplyUvs(uvs, out) {
        if (out === void 0) out = uvs;
        const mat = this.mapCoord;
        for(let i = 0; i < uvs.length; i += 2){
            const x = uvs[i];
            const y = uvs[i + 1];
            out[i] = x * mat.a + y * mat.c + mat.tx;
            out[i + 1] = x * mat.b + y * mat.d + mat.ty;
        }
        return out;
    }
    /**
   * Updates matrices if texture was changed
   * @returns - whether or not it was updated
   */ update() {
        const tex = this._texture;
        this._updateID++;
        const uvs = tex.uvs;
        this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);
        const orig = tex.orig;
        const trim = tex.trim;
        if (trim) {
            tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
            this.mapCoord.append(tempMat);
        }
        const texBase = tex.source;
        const frame = this.uClampFrame;
        const margin = this.clampMargin / texBase._resolution;
        const offset = this.clampOffset;
        frame[0] = (tex.frame.x + margin + offset) / texBase.width;
        frame[1] = (tex.frame.y + margin + offset) / texBase.height;
        frame[2] = (tex.frame.x + tex.frame.width - margin + offset) / texBase.width;
        frame[3] = (tex.frame.y + tex.frame.height - margin + offset) / texBase.height;
        this.uClampOffset[0] = offset / texBase.pixelWidth;
        this.uClampOffset[1] = offset / texBase.pixelHeight;
        this.isSimple = tex.frame.width === texBase.width && tex.frame.height === texBase.height && tex.rotate === 0;
        return true;
    }
}

},{"../../../../maths/matrix/Matrix.mjs":"kpkIt","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8VI8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Spritesheet", ()=>Spritesheet);
var _rectangleMjs = require("../maths/shapes/Rectangle.mjs");
var _textureMjs = require("../rendering/renderers/shared/texture/Texture.mjs");
"use strict";
const _Spritesheet = class _Spritesheet {
    /**
   * @param texture - Reference to the source BaseTexture object.
   * @param {object} data - Spritesheet image data.
   */ constructor(texture, data){
        /** For multi-packed spritesheets, this contains a reference to all the other spritesheets it depends on. */ this.linkedSheets = [];
        this._texture = texture instanceof (0, _textureMjs.Texture) ? texture : null;
        this.textureSource = texture.source;
        this.textures = {};
        this.animations = {};
        this.data = data;
        const metaResolution = parseFloat(data.meta.scale);
        if (metaResolution) {
            this.resolution = metaResolution;
            texture.source.resolution = this.resolution;
        } else this.resolution = texture.source._resolution;
        this._frames = this.data.frames;
        this._frameKeys = Object.keys(this._frames);
        this._batchIndex = 0;
        this._callback = null;
    }
    /**
   * Parser spritesheet from loaded data. This is done asynchronously
   * to prevent creating too many Texture within a single process.
   */ parse() {
        return new Promise((resolve)=>{
            this._callback = resolve;
            this._batchIndex = 0;
            if (this._frameKeys.length <= _Spritesheet.BATCH_SIZE) {
                this._processFrames(0);
                this._processAnimations();
                this._parseComplete();
            } else this._nextBatch();
        });
    }
    /**
   * Process a batch of frames
   * @param initialFrameIndex - The index of frame to start.
   */ _processFrames(initialFrameIndex) {
        let frameIndex = initialFrameIndex;
        const maxFrames = _Spritesheet.BATCH_SIZE;
        while(frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length){
            const i = this._frameKeys[frameIndex];
            const data = this._frames[i];
            const rect = data.frame;
            if (rect) {
                let frame = null;
                let trim = null;
                const sourceSize = data.trimmed !== false && data.sourceSize ? data.sourceSize : data.frame;
                const orig = new (0, _rectangleMjs.Rectangle)(0, 0, Math.floor(sourceSize.w) / this.resolution, Math.floor(sourceSize.h) / this.resolution);
                if (data.rotated) frame = new (0, _rectangleMjs.Rectangle)(Math.floor(rect.x) / this.resolution, Math.floor(rect.y) / this.resolution, Math.floor(rect.h) / this.resolution, Math.floor(rect.w) / this.resolution);
                else frame = new (0, _rectangleMjs.Rectangle)(Math.floor(rect.x) / this.resolution, Math.floor(rect.y) / this.resolution, Math.floor(rect.w) / this.resolution, Math.floor(rect.h) / this.resolution);
                if (data.trimmed !== false && data.spriteSourceSize) trim = new (0, _rectangleMjs.Rectangle)(Math.floor(data.spriteSourceSize.x) / this.resolution, Math.floor(data.spriteSourceSize.y) / this.resolution, Math.floor(rect.w) / this.resolution, Math.floor(rect.h) / this.resolution);
                this.textures[i] = new (0, _textureMjs.Texture)({
                    source: this.textureSource,
                    frame,
                    orig,
                    trim,
                    rotate: data.rotated ? 2 : 0,
                    defaultAnchor: data.anchor,
                    defaultBorders: data.borders,
                    label: i.toString()
                });
            }
            frameIndex++;
        }
    }
    /** Parse animations config. */ _processAnimations() {
        const animations = this.data.animations || {};
        for(const animName in animations){
            this.animations[animName] = [];
            for(let i = 0; i < animations[animName].length; i++){
                const frameName = animations[animName][i];
                this.animations[animName].push(this.textures[frameName]);
            }
        }
    }
    /** The parse has completed. */ _parseComplete() {
        const callback = this._callback;
        this._callback = null;
        this._batchIndex = 0;
        callback.call(this, this.textures);
    }
    /** Begin the next batch of textures. */ _nextBatch() {
        this._processFrames(this._batchIndex * _Spritesheet.BATCH_SIZE);
        this._batchIndex++;
        setTimeout(()=>{
            if (this._batchIndex * _Spritesheet.BATCH_SIZE < this._frameKeys.length) this._nextBatch();
            else {
                this._processAnimations();
                this._parseComplete();
            }
        }, 0);
    }
    /**
   * Destroy Spritesheet and don't use after this.
   * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
   */ destroy(destroyBase = false) {
        for(const i in this.textures)this.textures[i].destroy();
        this._frames = null;
        this._frameKeys = null;
        this.data = null;
        this.textures = null;
        if (destroyBase) {
            this._texture?.destroy();
            this.textureSource.destroy();
        }
        this._texture = null;
        this.textureSource = null;
        this.linkedSheets = [];
    }
};
/** The maximum number of Textures to build per process. */ _Spritesheet.BATCH_SIZE = 1e3;
let Spritesheet = _Spritesheet;

},{"../maths/shapes/Rectangle.mjs":"kCPrw","../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"botbO":[function(require,module,exports) {
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _alphaMaskMjs = require("./mask/alpha/AlphaMask.mjs");
var _colorMaskMjs = require("./mask/color/ColorMask.mjs");
var _stencilMaskMjs = require("./mask/stencil/StencilMask.mjs");
var _bufferSourceMjs = require("./renderers/shared/texture/sources/BufferSource.mjs");
var _canvasSourceMjs = require("./renderers/shared/texture/sources/CanvasSource.mjs");
var _imageSourceMjs = require("./renderers/shared/texture/sources/ImageSource.mjs");
var _videoSourceMjs = require("./renderers/shared/texture/sources/VideoSource.mjs");
var _textureFromMjs = require("./renderers/shared/texture/utils/textureFrom.mjs");
var _maskEffectManagerMjs = require("./mask/MaskEffectManager.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _alphaMaskMjs.AlphaMask), (0, _colorMaskMjs.ColorMask), (0, _stencilMaskMjs.StencilMask), (0, _videoSourceMjs.VideoSource), (0, _imageSourceMjs.ImageSource), (0, _canvasSourceMjs.CanvasSource), (0, _bufferSourceMjs.BufferImageSource));

},{"../extensions/Extensions.mjs":"c8doH","./mask/alpha/AlphaMask.mjs":"94SX1","./mask/color/ColorMask.mjs":"glxkd","./mask/stencil/StencilMask.mjs":"aW71O","./renderers/shared/texture/sources/BufferSource.mjs":"a07Nd","./renderers/shared/texture/sources/CanvasSource.mjs":"3kxjr","./renderers/shared/texture/sources/ImageSource.mjs":"iTPK0","./renderers/shared/texture/sources/VideoSource.mjs":"jEYPo","./renderers/shared/texture/utils/textureFrom.mjs":"hfAJS","./mask/MaskEffectManager.mjs":"9XnZy"}],"94SX1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlphaMask", ()=>AlphaMask);
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _spriteMjs = require("../../../scene/sprite/Sprite.mjs");
var _addMaskBoundsMjs = require("../utils/addMaskBounds.mjs");
var _addMaskLocalBoundsMjs = require("../utils/addMaskLocalBounds.mjs");
"use strict";
class AlphaMask {
    constructor(options){
        this.priority = 0;
        this.pipe = "alphaMask";
        if (options?.mask) this.init(options.mask);
    }
    init(mask) {
        this.mask = mask;
        this.renderMaskToTexture = !(mask instanceof (0, _spriteMjs.Sprite));
        this.mask.renderable = this.renderMaskToTexture;
        this.mask.includeInBuild = !this.renderMaskToTexture;
        this.mask.measurable = false;
    }
    reset() {
        this.mask.measurable = true;
        this.mask = null;
    }
    addBounds(bounds, skipUpdateTransform) {
        (0, _addMaskBoundsMjs.addMaskBounds)(this.mask, bounds, skipUpdateTransform);
    }
    addLocalBounds(bounds, localRoot) {
        (0, _addMaskLocalBoundsMjs.addMaskLocalBounds)(this.mask, bounds, localRoot);
    }
    containsPoint(point, hitTestFn) {
        const mask = this.mask;
        return hitTestFn(mask, point);
    }
    destroy() {
        this.reset();
    }
    static test(mask) {
        return mask instanceof (0, _spriteMjs.Sprite);
    }
}
AlphaMask.extension = (0, _extensionsMjs.ExtensionType).MaskEffect;

},{"../../../extensions/Extensions.mjs":"c8doH","../../../scene/sprite/Sprite.mjs":"kTAhO","../utils/addMaskBounds.mjs":"gyG5m","../utils/addMaskLocalBounds.mjs":"iomkw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kTAhO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sprite", ()=>Sprite);
var _observablePointMjs = require("../../maths/point/ObservablePoint.mjs");
var _textureMjs = require("../../rendering/renderers/shared/texture/Texture.mjs");
var _updateQuadBoundsMjs = require("../../utils/data/updateQuadBounds.mjs");
var _containerMjs = require("../container/Container.mjs");
"use strict";
class Sprite extends (0, _containerMjs.Container) {
    /**
   * @param options - The options for creating the sprite.
   */ constructor(options = (0, _textureMjs.Texture).EMPTY){
        if (options instanceof (0, _textureMjs.Texture)) options = {
            texture: options
        };
        const { texture, anchor, roundPixels, width, height, ...rest } = options;
        super({
            label: "Sprite",
            ...rest
        });
        this.renderPipeId = "sprite";
        this.batched = true;
        this._didSpriteUpdate = false;
        this._bounds = {
            minX: 0,
            maxX: 1,
            minY: 0,
            maxY: 0
        };
        this._sourceBounds = {
            minX: 0,
            maxX: 1,
            minY: 0,
            maxY: 0
        };
        this._boundsDirty = true;
        this._sourceBoundsDirty = true;
        this._roundPixels = 0;
        this._anchor = new (0, _observablePointMjs.ObservablePoint)({
            _onUpdate: ()=>{
                this.onViewUpdate();
            }
        });
        if (anchor) this.anchor = anchor;
        this.texture = texture;
        this.allowChildren = false;
        this.roundPixels = roundPixels ?? false;
        if (width) this.width = width;
        if (height) this.height = height;
    }
    /**
   * Helper function that creates a new sprite based on the source you provide.
   * The source can be - frame id, image, video, canvas element, video element, texture
   * @param source - Source to create texture from
   * @param [skipCache] - Whether to skip the cache or not
   * @returns The newly created sprite
   */ static from(source, skipCache = false) {
        if (source instanceof (0, _textureMjs.Texture)) return new Sprite(source);
        return new Sprite((0, _textureMjs.Texture).from(source, skipCache));
    }
    set texture(value) {
        value || (value = (0, _textureMjs.Texture).EMPTY);
        const currentTexture = this._texture;
        if (currentTexture === value) return;
        if (currentTexture && currentTexture.dynamic) currentTexture.off("update", this.onViewUpdate, this);
        if (value.dynamic) value.on("update", this.onViewUpdate, this);
        this._texture = value;
        this.onViewUpdate();
    }
    /** The texture that the sprite is using. */ get texture() {
        return this._texture;
    }
    /**
   * The local bounds of the sprite.
   * @type {rendering.Bounds}
   */ get bounds() {
        if (this._boundsDirty) {
            this._updateBounds();
            this._boundsDirty = false;
        }
        return this._bounds;
    }
    /**
   * The bounds of the sprite, taking the texture's trim into account.
   * @type {rendering.Bounds}
   */ get sourceBounds() {
        if (this._sourceBoundsDirty) {
            this._updateSourceBounds();
            this._sourceBoundsDirty = false;
        }
        return this._sourceBounds;
    }
    /**
   * Checks if the object contains the given point.
   * @param point - The point to check
   */ containsPoint(point) {
        const bounds = this.sourceBounds;
        if (point.x >= bounds.maxX && point.x <= bounds.minX) {
            if (point.y >= bounds.maxY && point.y <= bounds.minY) return true;
        }
        return false;
    }
    /**
   * Adds the bounds of this object to the bounds object.
   * @param bounds - The output bounds object.
   */ addBounds(bounds) {
        const _bounds = this._texture.trim ? this.sourceBounds : this.bounds;
        bounds.addFrame(_bounds.minX, _bounds.minY, _bounds.maxX, _bounds.maxY);
    }
    onViewUpdate() {
        this._didChangeId += 4096;
        this._didSpriteUpdate = true;
        this._sourceBoundsDirty = this._boundsDirty = true;
        if (this.didViewUpdate) return;
        this.didViewUpdate = true;
        if (this.renderGroup) this.renderGroup.onChildViewUpdate(this);
    }
    _updateBounds() {
        (0, _updateQuadBoundsMjs.updateQuadBounds)(this._bounds, this._anchor, this._texture, 0);
    }
    _updateSourceBounds() {
        const anchor = this._anchor;
        const texture = this._texture;
        const sourceBounds = this._sourceBounds;
        const { width, height } = texture.orig;
        sourceBounds.maxX = -anchor._x * width;
        sourceBounds.minX = sourceBounds.maxX + width;
        sourceBounds.maxY = -anchor._y * height;
        sourceBounds.minY = sourceBounds.maxY + height;
    }
    /**
   * Destroys this sprite renderable and optionally its texture.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the renderable as well
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the renderable as well
   */ destroy(options = false) {
        super.destroy(options);
        const destroyTexture = typeof options === "boolean" ? options : options?.texture;
        if (destroyTexture) {
            const destroyTextureSource = typeof options === "boolean" ? options : options?.textureSource;
            this._texture.destroy(destroyTextureSource);
        }
        this._texture = null;
        this._bounds = null;
        this._sourceBounds = null;
        this._anchor = null;
    }
    /**
   * The anchor sets the origin point of the sprite. The default value is taken from the {@link Texture}
   * and passed to the constructor.
   *
   * The default is `(0,0)`, this means the sprite's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
   *
   * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite({texture: Texture.WHITE});
   * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
   */ get anchor() {
        return this._anchor;
    }
    set anchor(value) {
        typeof value === "number" ? this._anchor.set(value) : this._anchor.copyFrom(value);
    }
    /**
   *  Whether or not to round the x/y position of the sprite.
   * @type {boolean}
   */ get roundPixels() {
        return !!this._roundPixels;
    }
    set roundPixels(value) {
        this._roundPixels = value ? 1 : 0;
    }
    /** The width of the sprite, setting this will actually modify the scale to achieve the value set. */ get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width;
    }
    set width(value) {
        this._setWidth(value, this._texture.orig.width);
    }
    /** The height of the sprite, setting this will actually modify the scale to achieve the value set. */ get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height;
    }
    set height(value) {
        this._setHeight(value, this._texture.orig.height);
    }
    /**
   * Retrieves the size of the Sprite as a [Size]{@link Size} object.
   * This is faster than get the width and height separately.
   * @param out - Optional object to store the size in.
   * @returns - The size of the Sprite.
   */ getSize(out) {
        if (!out) out = {};
        out.width = Math.abs(this.scale.x) * this._texture.orig.width;
        out.height = Math.abs(this.scale.y) * this._texture.orig.height;
        return out;
    }
    /**
   * Sets the size of the Sprite to the specified width and height.
   * This is faster than setting the width and height separately.
   * @param value - This can be either a number or a [Size]{@link Size} object.
   * @param height - The height to set. Defaults to the value of `width` if not provided.
   */ setSize(value, height) {
        let convertedWidth;
        let convertedHeight;
        if (typeof value !== "object") {
            convertedWidth = value;
            convertedHeight = height ?? value;
        } else {
            convertedWidth = value.width;
            convertedHeight = value.height ?? value.width;
        }
        if (convertedWidth !== void 0) this._setWidth(convertedWidth, this._texture.orig.width);
        if (convertedHeight !== void 0) this._setHeight(convertedHeight, this._texture.orig.height);
    }
}

},{"../../maths/point/ObservablePoint.mjs":"idRba","../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../../utils/data/updateQuadBounds.mjs":"iun61","../container/Container.mjs":"6EDs5","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"iun61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateQuadBounds", ()=>updateQuadBounds);
"use strict";
function updateQuadBounds(bounds, anchor, texture, padding) {
    const { width, height } = texture.orig;
    const trim = texture.trim;
    if (trim) {
        const sourceWidth = trim.width;
        const sourceHeight = trim.height;
        bounds.minX = trim.x - anchor._x * width - padding;
        bounds.maxX = bounds.minX + sourceWidth;
        bounds.minY = trim.y - anchor._y * height - padding;
        bounds.maxY = bounds.minY + sourceHeight;
    } else {
        bounds.minX = -anchor._x * width - padding;
        bounds.maxX = bounds.minX + width;
        bounds.minY = -anchor._y * height - padding;
        bounds.maxY = bounds.minY + height;
    }
    return;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gyG5m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addMaskBounds", ()=>addMaskBounds);
var _boundsMjs = require("../../../scene/container/bounds/Bounds.mjs");
var _getGlobalBoundsMjs = require("../../../scene/container/bounds/getGlobalBounds.mjs");
"use strict";
const tempBounds = new (0, _boundsMjs.Bounds)();
function addMaskBounds(mask, bounds, skipUpdateTransform) {
    const boundsToMask = tempBounds;
    mask.measurable = true;
    (0, _getGlobalBoundsMjs.getGlobalBounds)(mask, skipUpdateTransform, boundsToMask);
    bounds.addBoundsMask(boundsToMask);
    mask.measurable = false;
}

},{"../../../scene/container/bounds/Bounds.mjs":"2E5wx","../../../scene/container/bounds/getGlobalBounds.mjs":"2VhdS","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"iomkw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addMaskLocalBounds", ()=>addMaskLocalBounds);
parcelHelpers.export(exports, "getMatrixRelativeToParent", ()=>getMatrixRelativeToParent);
var _getLocalBoundsMjs = require("../../../scene/container/bounds/getLocalBounds.mjs");
var _matrixAndBoundsPoolMjs = require("../../../scene/container/bounds/utils/matrixAndBoundsPool.mjs");
var _warnMjs = require("../../../utils/logging/warn.mjs");
"use strict";
function addMaskLocalBounds(mask, bounds, localRoot) {
    const boundsToMask = (0, _matrixAndBoundsPoolMjs.boundsPool).get();
    mask.measurable = true;
    const tempMatrix = (0, _matrixAndBoundsPoolMjs.matrixPool).get().identity();
    const relativeMask = getMatrixRelativeToParent(mask, localRoot, tempMatrix);
    (0, _getLocalBoundsMjs.getLocalBounds)(mask, boundsToMask, relativeMask);
    mask.measurable = false;
    bounds.addBoundsMask(boundsToMask);
    (0, _matrixAndBoundsPoolMjs.matrixPool).return(tempMatrix);
    (0, _matrixAndBoundsPoolMjs.boundsPool).return(boundsToMask);
}
function getMatrixRelativeToParent(target, root, matrix) {
    if (!target) {
        (0, _warnMjs.warn)("Mask bounds, renderable is not inside the root container");
        return matrix;
    }
    if (target !== root) {
        getMatrixRelativeToParent(target.parent, root, matrix);
        target.updateLocalTransform();
        matrix.append(target.localTransform);
    }
    return matrix;
}

},{"../../../scene/container/bounds/getLocalBounds.mjs":"l31Se","../../../scene/container/bounds/utils/matrixAndBoundsPool.mjs":"kLzyY","../../../utils/logging/warn.mjs":"gCz01","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"glxkd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorMask", ()=>ColorMask);
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
"use strict";
class ColorMask {
    constructor(options){
        this.priority = 0;
        this.pipe = "colorMask";
        if (options?.mask) this.init(options.mask);
    }
    init(mask) {
        this.mask = mask;
    }
    destroy() {}
    static test(mask) {
        return typeof mask === "number";
    }
}
ColorMask.extension = (0, _extensionsMjs.ExtensionType).MaskEffect;

},{"../../../extensions/Extensions.mjs":"c8doH","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"aW71O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StencilMask", ()=>StencilMask);
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _containerMjs = require("../../../scene/container/Container.mjs");
var _addMaskBoundsMjs = require("../utils/addMaskBounds.mjs");
var _addMaskLocalBoundsMjs = require("../utils/addMaskLocalBounds.mjs");
"use strict";
class StencilMask {
    constructor(options){
        this.priority = 0;
        this.pipe = "stencilMask";
        if (options?.mask) this.init(options.mask);
    }
    init(mask) {
        this.mask = mask;
        this.mask.includeInBuild = false;
        this.mask.measurable = false;
    }
    reset() {
        this.mask.measurable = true;
        this.mask.includeInBuild = true;
        this.mask = null;
    }
    addBounds(bounds, skipUpdateTransform) {
        (0, _addMaskBoundsMjs.addMaskBounds)(this.mask, bounds, skipUpdateTransform);
    }
    addLocalBounds(bounds, localRoot) {
        (0, _addMaskLocalBoundsMjs.addMaskLocalBounds)(this.mask, bounds, localRoot);
    }
    containsPoint(point, hitTestFn) {
        const mask = this.mask;
        return hitTestFn(mask, point);
    }
    destroy() {
        this.reset();
    }
    static test(mask) {
        return mask instanceof (0, _containerMjs.Container);
    }
}
StencilMask.extension = (0, _extensionsMjs.ExtensionType).MaskEffect;

},{"../../../extensions/Extensions.mjs":"c8doH","../../../scene/container/Container.mjs":"6EDs5","../utils/addMaskBounds.mjs":"gyG5m","../utils/addMaskLocalBounds.mjs":"iomkw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"3kxjr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasSource", ()=>CanvasSource);
var _adapterMjs = require("../../../../../environment/adapter.mjs");
var _extensionsMjs = require("../../../../../extensions/Extensions.mjs");
var _textureSourceMjs = require("./TextureSource.mjs");
"use strict";
class CanvasSource extends (0, _textureSourceMjs.TextureSource) {
    constructor(options){
        if (!options.resource) options.resource = (0, _adapterMjs.DOMAdapter).get().createCanvas();
        if (!options.width) {
            options.width = options.resource.width;
            if (!options.autoDensity) options.width /= options.resolution;
        }
        if (!options.height) {
            options.height = options.resource.height;
            if (!options.autoDensity) options.height /= options.resolution;
        }
        super(options);
        this.uploadMethodId = "image";
        this.autoDensity = options.autoDensity;
        const canvas = options.resource;
        if (this.pixelWidth !== canvas.width || this.pixelWidth !== canvas.height) this.resizeCanvas();
        this.transparent = !!options.transparent;
    }
    resizeCanvas() {
        if (this.autoDensity) {
            this.resource.style.width = `${this.width}px`;
            this.resource.style.height = `${this.height}px`;
        }
        if (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) {
            this.resource.width = this.pixelWidth;
            this.resource.height = this.pixelHeight;
        }
    }
    resize(width = this.width, height = this.height, resolution = this._resolution) {
        const didResize = super.resize(width, height, resolution);
        if (didResize) this.resizeCanvas();
        return didResize;
    }
    static test(resource) {
        return globalThis.HTMLCanvasElement && resource instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && resource instanceof OffscreenCanvas;
    }
}
CanvasSource.extension = (0, _extensionsMjs.ExtensionType).TextureSource;

},{"../../../../../environment/adapter.mjs":"bGyo9","../../../../../extensions/Extensions.mjs":"c8doH","./TextureSource.mjs":"9dqzh","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"iTPK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageSource", ()=>ImageSource);
var _adapterMjs = require("../../../../../environment/adapter.mjs");
var _extensionsMjs = require("../../../../../extensions/Extensions.mjs");
var _warnMjs = require("../../../../../utils/logging/warn.mjs");
var _textureSourceMjs = require("./TextureSource.mjs");
"use strict";
class ImageSource extends (0, _textureSourceMjs.TextureSource) {
    constructor(options){
        if (options.resource && globalThis.HTMLImageElement && options.resource instanceof HTMLImageElement) {
            const canvas = (0, _adapterMjs.DOMAdapter).get().createCanvas(options.resource.width, options.resource.height);
            const context = canvas.getContext("2d");
            context.drawImage(options.resource, 0, 0);
            options.resource = canvas;
            (0, _warnMjs.warn)("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.");
        }
        super(options);
        this.uploadMethodId = "image";
        this.autoGarbageCollect = true;
    }
    static test(resource) {
        return globalThis.HTMLImageElement && resource instanceof HTMLImageElement || typeof ImageBitmap !== "undefined" && resource instanceof ImageBitmap;
    }
}
ImageSource.extension = (0, _extensionsMjs.ExtensionType).TextureSource;

},{"../../../../../environment/adapter.mjs":"bGyo9","../../../../../extensions/Extensions.mjs":"c8doH","../../../../../utils/logging/warn.mjs":"gCz01","./TextureSource.mjs":"9dqzh","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jEYPo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VideoSource", ()=>VideoSource);
var _extensionsMjs = require("../../../../../extensions/Extensions.mjs");
var _tickerMjs = require("../../../../../ticker/Ticker.mjs");
var _detectVideoAlphaModeMjs = require("../../../../../utils/browser/detectVideoAlphaMode.mjs");
var _textureSourceMjs = require("./TextureSource.mjs");
"use strict";
const _VideoSource = class _VideoSource extends (0, _textureSourceMjs.TextureSource) {
    constructor(options){
        super(options);
        // Public
        /** Whether or not the video is ready to play. */ this.isReady = false;
        /** The upload method for this texture. */ this.uploadMethodId = "video";
        options = {
            ..._VideoSource.defaultOptions,
            ...options
        };
        this._autoUpdate = true;
        this._isConnectedToTicker = false;
        this._updateFPS = options.updateFPS || 0;
        this._msToNextUpdate = 0;
        this.autoPlay = options.autoPlay !== false;
        this.alphaMode = options.alphaMode ?? "premultiply-alpha-on-upload";
        this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this);
        this._videoFrameRequestCallbackHandle = null;
        this._load = null;
        this._resolve = null;
        this._reject = null;
        this._onCanPlay = this._onCanPlay.bind(this);
        this._onCanPlayThrough = this._onCanPlayThrough.bind(this);
        this._onError = this._onError.bind(this);
        this._onPlayStart = this._onPlayStart.bind(this);
        this._onPlayStop = this._onPlayStop.bind(this);
        this._onSeeked = this._onSeeked.bind(this);
        if (options.autoLoad !== false) this.load();
    }
    /** Update the video frame if the source is not destroyed and meets certain conditions. */ updateFrame() {
        if (this.destroyed) return;
        if (this._updateFPS) {
            const elapsedMS = (0, _tickerMjs.Ticker).shared.elapsedMS * this.resource.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - elapsedMS);
        }
        if (!this._updateFPS || this._msToNextUpdate <= 0) this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0;
        if (this.isValid) this.update();
    }
    /** Callback to update the video frame and potentially request the next frame update. */ _videoFrameRequestCallback() {
        this.updateFrame();
        if (this.destroyed) this._videoFrameRequestCallbackHandle = null;
        else this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback);
    }
    /**
   * Checks if the resource has valid dimensions.
   * @returns {boolean} True if width and height are set, otherwise false.
   */ get isValid() {
        return !!this.resource.videoWidth && !!this.resource.videoHeight;
    }
    /**
   * Start preloading the video resource.
   * @returns {Promise<this>} Handle the validate event
   */ async load() {
        if (this._load) return this._load;
        const source = this.resource;
        const options = this.options;
        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) source.complete = true;
        source.addEventListener("play", this._onPlayStart);
        source.addEventListener("pause", this._onPlayStop);
        source.addEventListener("seeked", this._onSeeked);
        if (!this._isSourceReady()) {
            if (!options.preload) source.addEventListener("canplay", this._onCanPlay);
            source.addEventListener("canplaythrough", this._onCanPlayThrough);
            source.addEventListener("error", this._onError, true);
        } else this._mediaReady();
        this.alphaMode = await (0, _detectVideoAlphaModeMjs.detectVideoAlphaMode)();
        this._load = new Promise((resolve, reject)=>{
            if (this.isValid) resolve(this);
            else {
                this._resolve = resolve;
                this._reject = reject;
                if (options.preloadTimeoutMs !== void 0) this._preloadTimeout = setTimeout(()=>{
                    this._onError(new ErrorEvent(`Preload exceeded timeout of ${options.preloadTimeoutMs}ms`));
                });
                source.load();
            }
        });
        return this._load;
    }
    /**
   * Handle video error events.
   * @param event - The error event
   */ _onError(event) {
        this.resource.removeEventListener("error", this._onError, true);
        this.emit("error", event);
        if (this._reject) {
            this._reject(event);
            this._reject = null;
            this._resolve = null;
        }
    }
    /**
   * Checks if the underlying source is playing.
   * @returns True if playing.
   */ _isSourcePlaying() {
        const source = this.resource;
        return !source.paused && !source.ended;
    }
    /**
   * Checks if the underlying source is ready for playing.
   * @returns True if ready.
   */ _isSourceReady() {
        const source = this.resource;
        return source.readyState > 2;
    }
    /** Runs the update loop when the video is ready to play. */ _onPlayStart() {
        if (!this.isValid) this._mediaReady();
        this._configureAutoUpdate();
    }
    /** Stops the update loop when a pause event is triggered. */ _onPlayStop() {
        this._configureAutoUpdate();
    }
    /** Handles behavior when the video completes seeking to the current playback position. */ _onSeeked() {
        if (this._autoUpdate && !this._isSourcePlaying()) {
            this._msToNextUpdate = 0;
            this.updateFrame();
            this._msToNextUpdate = 0;
        }
    }
    _onCanPlay() {
        const source = this.resource;
        source.removeEventListener("canplay", this._onCanPlay);
        this._mediaReady();
    }
    _onCanPlayThrough() {
        const source = this.resource;
        source.removeEventListener("canplaythrough", this._onCanPlay);
        if (this._preloadTimeout) {
            clearTimeout(this._preloadTimeout);
            this._preloadTimeout = void 0;
        }
        this._mediaReady();
    }
    /** Fired when the video is loaded and ready to play. */ _mediaReady() {
        const source = this.resource;
        if (this.isValid) {
            this.isReady = true;
            this.resize(source.videoWidth, source.videoHeight);
        }
        this._msToNextUpdate = 0;
        this.updateFrame();
        this._msToNextUpdate = 0;
        if (this._resolve) {
            this._resolve(this);
            this._resolve = null;
            this._reject = null;
        }
        if (this._isSourcePlaying()) this._onPlayStart();
        else if (this.autoPlay) this.resource.play();
    }
    /** Cleans up resources and event listeners associated with this texture. */ destroy() {
        this._configureAutoUpdate();
        const source = this.resource;
        if (source) {
            source.removeEventListener("play", this._onPlayStart);
            source.removeEventListener("pause", this._onPlayStop);
            source.removeEventListener("seeked", this._onSeeked);
            source.removeEventListener("canplay", this._onCanPlay);
            source.removeEventListener("canplaythrough", this._onCanPlayThrough);
            source.removeEventListener("error", this._onError, true);
            source.pause();
            source.src = "";
            source.load();
        }
        super.destroy();
    }
    /** Should the base texture automatically update itself, set to true by default. */ get autoUpdate() {
        return this._autoUpdate;
    }
    set autoUpdate(value) {
        if (value !== this._autoUpdate) {
            this._autoUpdate = value;
            this._configureAutoUpdate();
        }
    }
    /**
   * How many times a second to update the texture from the video.
   * Leave at 0 to update at every render.
   * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
   */ get updateFPS() {
        return this._updateFPS;
    }
    set updateFPS(value) {
        if (value !== this._updateFPS) {
            this._updateFPS = value;
            this._configureAutoUpdate();
        }
    }
    /**
   * Configures the updating mechanism based on the current state and settings.
   *
   * This method decides between using the browser's native video frame callback or a custom ticker
   * for updating the video frame. It ensures optimal performance and responsiveness
   * based on the video's state, playback status, and the desired frames-per-second setting.
   *
   * - If `_autoUpdate` is enabled and the video source is playing:
   *   - It will prefer the native video frame callback if available and no specific FPS is set.
   *   - Otherwise, it will use a custom ticker for manual updates.
   * - If `_autoUpdate` is disabled or the video isn't playing, any active update mechanisms are halted.
   */ _configureAutoUpdate() {
        if (this._autoUpdate && this._isSourcePlaying()) {
            if (!this._updateFPS && this.source.requestVideoFrameCallback) {
                if (this._isConnectedToTicker) {
                    (0, _tickerMjs.Ticker).shared.remove(this.updateFrame, this);
                    this._isConnectedToTicker = false;
                    this._msToNextUpdate = 0;
                }
                if (this._videoFrameRequestCallbackHandle === null) this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback);
            } else {
                if (this._videoFrameRequestCallbackHandle !== null) {
                    this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle);
                    this._videoFrameRequestCallbackHandle = null;
                }
                if (!this._isConnectedToTicker) {
                    (0, _tickerMjs.Ticker).shared.add(this.updateFrame, this);
                    this._isConnectedToTicker = true;
                    this._msToNextUpdate = 0;
                }
            }
        } else {
            if (this._videoFrameRequestCallbackHandle !== null) {
                this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle);
                this._videoFrameRequestCallbackHandle = null;
            }
            if (this._isConnectedToTicker) {
                (0, _tickerMjs.Ticker).shared.remove(this.updateFrame, this);
                this._isConnectedToTicker = false;
                this._msToNextUpdate = 0;
            }
        }
    }
    static test(resource) {
        return globalThis.HTMLVideoElement && resource instanceof HTMLVideoElement || globalThis.VideoFrame && resource instanceof VideoFrame;
    }
};
_VideoSource.extension = (0, _extensionsMjs.ExtensionType).TextureSource;
/** The default options for video sources. */ _VideoSource.defaultOptions = {
    ...(0, _textureSourceMjs.TextureSource).defaultOptions,
    /** If true, the video will start loading immediately. */ autoLoad: true,
    /** If true, the video will start playing as soon as it is loaded. */ autoPlay: true,
    /** The number of times a second to update the texture from the video. Leave at 0 to update at every render. */ updateFPS: 0,
    /** If true, the video will be loaded with the `crossorigin` attribute. */ crossorigin: true,
    /** If true, the video will loop when it ends. */ loop: false,
    /** If true, the video will be muted. */ muted: true,
    /** If true, the video will play inline. */ playsinline: true,
    /** If true, the video will be preloaded. */ preload: false
};
/**
 * Map of video MIME types that can't be directly derived from file extensions.
 * @readonly
 */ _VideoSource.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
};
let VideoSource = _VideoSource;

},{"../../../../../extensions/Extensions.mjs":"c8doH","../../../../../ticker/Ticker.mjs":"bE9lk","../../../../../utils/browser/detectVideoAlphaMode.mjs":"bD3Ih","./TextureSource.mjs":"9dqzh","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bD3Ih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectVideoAlphaMode", ()=>detectVideoAlphaMode);
"use strict";
let promise;
async function detectVideoAlphaMode() {
    promise ?? (promise = (async ()=>{
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        if (!gl) return "premultiply-alpha-on-upload";
        const video = await new Promise((resolve)=>{
            const video2 = document.createElement("video");
            video2.onloadeddata = ()=>resolve(video2);
            video2.onerror = ()=>resolve(null);
            video2.autoplay = false;
            video2.crossOrigin = "anonymous";
            video2.preload = "auto";
            video2.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=";
            video2.load();
        });
        if (!video) return "premultiply-alpha-on-upload";
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        const framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        const pixel = new Uint8Array(4);
        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
        gl.deleteFramebuffer(framebuffer);
        gl.deleteTexture(texture);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        return pixel[0] <= pixel[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload";
    })());
    return promise;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"hfAJS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "autoDetectSource", ()=>autoDetectSource);
parcelHelpers.export(exports, "resourceToTexture", ()=>resourceToTexture);
parcelHelpers.export(exports, "textureFrom", ()=>textureFrom);
var _cacheMjs = require("../../../../../assets/cache/Cache.mjs");
var _extensionsMjs = require("../../../../../extensions/Extensions.mjs");
var _textureSourceMjs = require("../sources/TextureSource.mjs");
var _textureMjs = require("../Texture.mjs");
"use strict";
const sources = [];
(0, _extensionsMjs.extensions).handleByList((0, _extensionsMjs.ExtensionType).TextureSource, sources);
function autoDetectSource(options = {}) {
    const hasResource = options && options.resource;
    const res = hasResource ? options.resource : options;
    const opts = hasResource ? options : {
        resource: options
    };
    for(let i = 0; i < sources.length; i++){
        const Source = sources[i];
        if (Source.test(res)) return new Source(opts);
    }
    throw new Error(`Could not find a source type for resource: ${opts.resource}`);
}
function resourceToTexture(options = {}, skipCache = false) {
    const hasResource = options && options.resource;
    const resource = hasResource ? options.resource : options;
    const opts = hasResource ? options : {
        resource: options
    };
    if (!skipCache && (0, _cacheMjs.Cache).has(resource)) return (0, _cacheMjs.Cache).get(resource);
    const texture = new (0, _textureMjs.Texture)({
        source: autoDetectSource(opts)
    });
    texture.on("destroy", ()=>{
        if ((0, _cacheMjs.Cache).has(resource)) (0, _cacheMjs.Cache).remove(resource);
    });
    if (!skipCache) (0, _cacheMjs.Cache).set(resource, texture);
    return texture;
}
function textureFrom(id, skipCache = false) {
    if (typeof id === "string") return (0, _cacheMjs.Cache).get(id);
    else if (id instanceof (0, _textureSourceMjs.TextureSource)) return new (0, _textureMjs.Texture)({
        source: id
    });
    return resourceToTexture(id, skipCache);
}
(0, _textureMjs.Texture).from = textureFrom;

},{"../../../../../assets/cache/Cache.mjs":"auo1K","../../../../../extensions/Extensions.mjs":"c8doH","../sources/TextureSource.mjs":"9dqzh","../Texture.mjs":"ho7cW","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"auo1K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cache", ()=>Cache);
var _warnMjs = require("../../utils/logging/warn.mjs");
var _convertToListMjs = require("../utils/convertToList.mjs");
"use strict";
class CacheClass {
    constructor(){
        this._parsers = [];
        this._cache = /* @__PURE__ */ new Map();
        this._cacheMap = /* @__PURE__ */ new Map();
    }
    /** Clear all entries. */ reset() {
        this._cacheMap.clear();
        this._cache.clear();
    }
    /**
   * Check if the key exists
   * @param key - The key to check
   */ has(key) {
        return this._cache.has(key);
    }
    /**
   * Fetch entry by key
   * @param key - The key of the entry to get
   */ get(key) {
        const result = this._cache.get(key);
        if (!result) (0, _warnMjs.warn)(`[Assets] Asset id ${key} was not found in the Cache`);
        return result;
    }
    /**
   * Set a value by key or keys name
   * @param key - The key or keys to set
   * @param value - The value to store in the cache or from which cacheable assets will be derived.
   */ set(key, value) {
        const keys = (0, _convertToListMjs.convertToList)(key);
        let cacheableAssets;
        for(let i = 0; i < this.parsers.length; i++){
            const parser = this.parsers[i];
            if (parser.test(value)) {
                cacheableAssets = parser.getCacheableAssets(keys, value);
                break;
            }
        }
        const cacheableMap = new Map(Object.entries(cacheableAssets || {}));
        if (!cacheableAssets) keys.forEach((key2)=>{
            cacheableMap.set(key2, value);
        });
        const cacheKeys = [
            ...cacheableMap.keys()
        ];
        const cachedAssets = {
            cacheKeys,
            keys
        };
        keys.forEach((key2)=>{
            this._cacheMap.set(key2, cachedAssets);
        });
        cacheKeys.forEach((key2)=>{
            const val = cacheableAssets ? cacheableAssets[key2] : value;
            if (this._cache.has(key2) && this._cache.get(key2) !== val) (0, _warnMjs.warn)("[Cache] already has key:", key2);
            this._cache.set(key2, cacheableMap.get(key2));
        });
    }
    /**
   * Remove entry by key
   *
   * This function will also remove any associated alias from the cache also.
   * @param key - The key of the entry to remove
   */ remove(key) {
        if (!this._cacheMap.has(key)) {
            (0, _warnMjs.warn)(`[Assets] Asset id ${key} was not found in the Cache`);
            return;
        }
        const cacheMap = this._cacheMap.get(key);
        const cacheKeys = cacheMap.cacheKeys;
        cacheKeys.forEach((key2)=>{
            this._cache.delete(key2);
        });
        cacheMap.keys.forEach((key2)=>{
            this._cacheMap.delete(key2);
        });
    }
    /** All loader parsers registered */ get parsers() {
        return this._parsers;
    }
}
const Cache = new CacheClass();

},{"../../utils/logging/warn.mjs":"gCz01","../utils/convertToList.mjs":"iOg0X","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gqtYb":[function(require,module,exports) {
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _graphicsContextSystemMjs = require("./shared/GraphicsContextSystem.mjs");
var _graphicsPipeMjs = require("./shared/GraphicsPipe.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _graphicsPipeMjs.GraphicsPipe));
(0, _extensionsMjs.extensions).add((0, _graphicsContextSystemMjs.GraphicsContextSystem));

},{"../../extensions/Extensions.mjs":"c8doH","./shared/GraphicsContextSystem.mjs":"2yAJV","./shared/GraphicsPipe.mjs":"47JyI"}],"2yAJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GpuGraphicsContext", ()=>GpuGraphicsContext);
parcelHelpers.export(exports, "GraphicsContextRenderData", ()=>GraphicsContextRenderData);
parcelHelpers.export(exports, "GraphicsContextSystem", ()=>GraphicsContextSystem);
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _batchGeometryMjs = require("../../../rendering/batcher/gpu/BatchGeometry.mjs");
var _getTextureBatchBindGroupMjs = require("../../../rendering/batcher/gpu/getTextureBatchBindGroup.mjs");
var _batcherMjs = require("../../../rendering/batcher/shared/Batcher.mjs");
var _instructionSetMjs = require("../../../rendering/renderers/shared/instructions/InstructionSet.mjs");
var _poolGroupMjs = require("../../../utils/pool/PoolGroup.mjs");
var _buildContextBatchesMjs = require("./utils/buildContextBatches.mjs");
"use strict";
class GpuGraphicsContext {
    constructor(){
        this.batches = [];
        this.geometryData = {
            vertices: [],
            uvs: [],
            indices: []
        };
    }
}
class GraphicsContextRenderData {
    constructor(){
        this.geometry = new (0, _batchGeometryMjs.BatchGeometry)();
        this.instructions = new (0, _instructionSetMjs.InstructionSet)();
    }
    init() {
        this.instructions.reset();
    }
}
const _GraphicsContextSystem = class _GraphicsContextSystem {
    constructor(){
        // the root context batches, used to either make a batch or geometry
        // all graphics use this as a base
        this._activeBatchers = [];
        this._gpuContextHash = {};
        // used for non-batchable graphics
        this._graphicsDataContextHash = /* @__PURE__ */ Object.create(null);
        this._needsContextNeedsRebuild = [];
    }
    /**
   * Runner init called, update the default options
   * @ignore
   */ init(options) {
        _GraphicsContextSystem.defaultOptions.bezierSmoothness = options?.bezierSmoothness ?? _GraphicsContextSystem.defaultOptions.bezierSmoothness;
    }
    prerender() {
        this._returnActiveBatchers();
    }
    getContextRenderData(context) {
        return this._graphicsDataContextHash[context.uid] || this._initContextRenderData(context);
    }
    // Context management functions
    updateGpuContext(context) {
        let gpuContext = this._gpuContextHash[context.uid] || this._initContext(context);
        if (context.dirty) {
            if (gpuContext) this._cleanGraphicsContextData(context);
            else gpuContext = this._initContext(context);
            (0, _buildContextBatchesMjs.buildContextBatches)(context, gpuContext);
            const batchMode = context.batchMode;
            if (context.customShader || batchMode === "no-batch") gpuContext.isBatchable = false;
            else if (batchMode === "auto") gpuContext.isBatchable = gpuContext.geometryData.vertices.length < 400;
            context.dirty = false;
        }
        return gpuContext;
    }
    getGpuContext(context) {
        return this._gpuContextHash[context.uid] || this._initContext(context);
    }
    _returnActiveBatchers() {
        for(let i = 0; i < this._activeBatchers.length; i++)(0, _poolGroupMjs.BigPool).return(this._activeBatchers[i]);
        this._activeBatchers.length = 0;
    }
    _initContextRenderData(context) {
        const graphicsData = (0, _poolGroupMjs.BigPool).get(GraphicsContextRenderData);
        const { batches, geometryData } = this._gpuContextHash[context.uid];
        const vertexSize = geometryData.vertices.length;
        const indexSize = geometryData.indices.length;
        for(let i = 0; i < batches.length; i++)batches[i].applyTransform = false;
        const batcher = (0, _poolGroupMjs.BigPool).get((0, _batcherMjs.Batcher));
        this._activeBatchers.push(batcher);
        batcher.ensureAttributeBuffer(vertexSize);
        batcher.ensureIndexBuffer(indexSize);
        batcher.begin();
        for(let i = 0; i < batches.length; i++){
            const batch = batches[i];
            batcher.add(batch);
        }
        batcher.finish(graphicsData.instructions);
        const geometry = graphicsData.geometry;
        geometry.indexBuffer.setDataWithSize(batcher.indexBuffer, batcher.indexSize, true);
        geometry.buffers[0].setDataWithSize(batcher.attributeBuffer.float32View, batcher.attributeSize, true);
        const drawBatches = batcher.batches;
        for(let i = 0; i < drawBatches.length; i++){
            const batch = drawBatches[i];
            batch.bindGroup = (0, _getTextureBatchBindGroupMjs.getTextureBatchBindGroup)(batch.textures.textures, batch.textures.count);
        }
        this._graphicsDataContextHash[context.uid] = graphicsData;
        return graphicsData;
    }
    _initContext(context) {
        const gpuContext = new GpuGraphicsContext();
        this._gpuContextHash[context.uid] = gpuContext;
        context.on("update", this.onGraphicsContextUpdate, this);
        context.on("destroy", this.onGraphicsContextDestroy, this);
        return this._gpuContextHash[context.uid];
    }
    onGraphicsContextUpdate(context) {
        this._needsContextNeedsRebuild.push(context);
    }
    onGraphicsContextDestroy(context) {
        this._cleanGraphicsContextData(context);
        context.off("update", this.onGraphicsContextUpdate, this);
        context.off("destroy", this.onGraphicsContextDestroy, this);
        this._gpuContextHash[context.uid] = null;
    }
    _cleanGraphicsContextData(context) {
        const gpuContext = this._gpuContextHash[context.uid];
        if (!gpuContext.isBatchable) {
            if (this._graphicsDataContextHash[context.uid]) {
                (0, _poolGroupMjs.BigPool).return(this.getContextRenderData(context));
                this._graphicsDataContextHash[context.uid] = null;
            }
        }
        if (gpuContext.batches) gpuContext.batches.forEach((batch)=>{
            (0, _poolGroupMjs.BigPool).return(batch);
        });
    }
    destroy() {
        for (const context of this._needsContextNeedsRebuild)if (this._gpuContextHash[context.uid]) this.onGraphicsContextDestroy(context);
        this._needsContextNeedsRebuild.length = 0;
    }
};
/** @ignore */ _GraphicsContextSystem.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLSystem,
        (0, _extensionsMjs.ExtensionType).WebGPUSystem,
        (0, _extensionsMjs.ExtensionType).CanvasSystem
    ],
    name: "graphicsContext"
};
/** The default options for the GraphicsContextSystem. */ _GraphicsContextSystem.defaultOptions = {
    /**
   * A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother)
   * @default 0.5
   */ bezierSmoothness: 0.5
};
let GraphicsContextSystem = _GraphicsContextSystem;

},{"../../../extensions/Extensions.mjs":"c8doH","../../../rendering/batcher/gpu/BatchGeometry.mjs":"vQwML","../../../rendering/batcher/gpu/getTextureBatchBindGroup.mjs":"gs2xu","../../../rendering/batcher/shared/Batcher.mjs":"3dOc5","../../../rendering/renderers/shared/instructions/InstructionSet.mjs":"4g5Ez","../../../utils/pool/PoolGroup.mjs":"bj9CN","./utils/buildContextBatches.mjs":"h5rJr","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"vQwML":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchGeometry", ()=>BatchGeometry);
var _bufferMjs = require("../../renderers/shared/buffer/Buffer.mjs");
var _constMjs = require("../../renderers/shared/buffer/const.mjs");
var _geometryMjs = require("../../renderers/shared/geometry/Geometry.mjs");
"use strict";
const placeHolderBufferData = new Float32Array(1);
const placeHolderIndexData = new Uint32Array(1);
class BatchGeometry extends (0, _geometryMjs.Geometry) {
    constructor(){
        const vertexSize = 6;
        const attributeBuffer = new (0, _bufferMjs.Buffer)({
            data: placeHolderBufferData,
            label: "attribute-batch-buffer",
            usage: (0, _constMjs.BufferUsage).VERTEX | (0, _constMjs.BufferUsage).COPY_DST,
            shrinkToFit: false
        });
        const indexBuffer = new (0, _bufferMjs.Buffer)({
            data: placeHolderIndexData,
            label: "index-batch-buffer",
            usage: (0, _constMjs.BufferUsage).INDEX | (0, _constMjs.BufferUsage).COPY_DST,
            // | BufferUsage.STATIC,
            shrinkToFit: false
        });
        const stride = vertexSize * 4;
        super({
            attributes: {
                aPosition: {
                    buffer: attributeBuffer,
                    format: "float32x2",
                    stride,
                    offset: 0,
                    location: 1
                },
                aUV: {
                    buffer: attributeBuffer,
                    format: "float32x2",
                    stride,
                    offset: 8,
                    location: 3
                },
                aColor: {
                    buffer: attributeBuffer,
                    format: "unorm8x4",
                    stride,
                    offset: 16,
                    location: 0
                },
                aTextureIdAndRound: {
                    buffer: attributeBuffer,
                    format: "uint16x2",
                    stride,
                    offset: 20,
                    location: 2
                }
            },
            indexBuffer
        });
    }
}

},{"../../renderers/shared/buffer/Buffer.mjs":"7xm40","../../renderers/shared/buffer/const.mjs":"j5G3o","../../renderers/shared/geometry/Geometry.mjs":"2hfYG","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7xm40":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Buffer", ()=>Buffer);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _uidMjs = require("../../../../utils/data/uid.mjs");
var _constMjs = require("./const.mjs");
"use strict";
class Buffer extends (0, _eventemitter3Default.default) {
    /**
   * Creates a new Buffer with the given options
   * @param options - the options for the buffer
   */ constructor(options){
        let { data, size } = options;
        const { usage, label, shrinkToFit } = options;
        super();
        /**
     * emits when the underlying buffer has changed shape (i.e. resized)
     * letting the renderer know that it needs to discard the old buffer on the GPU and create a new one
     * @event change
     */ /**
     * emits when the underlying buffer data has been updated. letting the renderer know
     * that it needs to update the buffer on the GPU
     * @event update
     */ /**
     * emits when the buffer is destroyed. letting the renderer know that it needs to destroy the buffer on the GPU
     * @event destroy
     */ /**
     * a unique id for this uniform group used through the renderer
     * @internal
     * @ignore
     */ this.uid = (0, _uidMjs.uid)("buffer");
        /**
     * a resource type, used to identify how to handle it when its in a bind group / shader resource
     * @internal
     * @ignore
     */ this._resourceType = "buffer";
        /**
     * the resource id used internally by the renderer to build bind group keys
     * @internal
     * @ignore
     */ this._resourceId = (0, _uidMjs.uid)("resource");
        /**
     * used internally to know if a uniform group was used in the last render pass
     * @internal
     * @ignore
     */ this._touched = 0;
        /**
     * @internal
     * @ignore
     */ this._updateID = 1;
        /**
     * should the GPU buffer be shrunk when the data becomes smaller?
     * changing this will cause the buffer to be destroyed and a new one created on the GPU
     * this can be expensive, especially if the buffer is already big enough!
     * setting this to false will prevent the buffer from being shrunk. This will yield better performance
     * if you are constantly setting data that is changing size often.
     * @default true
     */ this.shrinkToFit = true;
        if (data instanceof Array) data = new Float32Array(data);
        this._data = data;
        size = size ?? data?.byteLength;
        const mappedAtCreation = !!data;
        this.descriptor = {
            size,
            usage,
            mappedAtCreation,
            label
        };
        this.shrinkToFit = shrinkToFit ?? true;
    }
    /** the data in the buffer */ get data() {
        return this._data;
    }
    set data(value) {
        this.setDataWithSize(value, value.length, true);
    }
    /** whether the buffer is static or not */ get static() {
        return !!(this.descriptor.usage & (0, _constMjs.BufferUsage).STATIC);
    }
    set static(value) {
        if (value) this.descriptor.usage |= (0, _constMjs.BufferUsage).STATIC;
        else this.descriptor.usage &= ~(0, _constMjs.BufferUsage).STATIC;
    }
    /**
   * Sets the data in the buffer to the given value. This will immediately update the buffer on the GPU.
   * If you only want to update a subset of the buffer, you can pass in the size of the data.
   * @param value - the data to set
   * @param size - the size of the data in bytes
   * @param syncGPU - should the buffer be updated on the GPU immediately?
   */ setDataWithSize(value, size, syncGPU) {
        this._updateID++;
        this._updateSize = size * value.BYTES_PER_ELEMENT;
        if (this._data === value) {
            if (syncGPU) this.emit("update", this);
            return;
        }
        const oldData = this._data;
        this._data = value;
        if (oldData.length !== value.length) {
            if (!this.shrinkToFit && value.byteLength < oldData.byteLength) {
                if (syncGPU) this.emit("update", this);
            } else {
                this.descriptor.size = value.byteLength;
                this._resourceId = (0, _uidMjs.uid)("resource");
                this.emit("change", this);
            }
            return;
        }
        if (syncGPU) this.emit("update", this);
    }
    /**
   * updates the buffer on the GPU to reflect the data in the buffer.
   * By default it will update the entire buffer. If you only want to update a subset of the buffer,
   * you can pass in the size of the buffer to update.
   * @param sizeInBytes - the new size of the buffer in bytes
   */ update(sizeInBytes) {
        this._updateSize = sizeInBytes ?? this._updateSize;
        this._updateID++;
        this.emit("update", this);
    }
    /** Destroys the buffer */ destroy() {
        this.emit("destroy", this);
        this._data = null;
        this.descriptor = null;
        this.removeAllListeners();
    }
}

},{"eventemitter3":"enSRh","../../../../utils/data/uid.mjs":"2iBho","./const.mjs":"j5G3o","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"j5G3o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferUsage", ()=>BufferUsage);
"use strict";
var BufferUsage = /* @__PURE__ */ ((BufferUsage2)=>{
    BufferUsage2[BufferUsage2["MAP_READ"] = 1] = "MAP_READ";
    BufferUsage2[BufferUsage2["MAP_WRITE"] = 2] = "MAP_WRITE";
    BufferUsage2[BufferUsage2["COPY_SRC"] = 4] = "COPY_SRC";
    BufferUsage2[BufferUsage2["COPY_DST"] = 8] = "COPY_DST";
    BufferUsage2[BufferUsage2["INDEX"] = 16] = "INDEX";
    BufferUsage2[BufferUsage2["VERTEX"] = 32] = "VERTEX";
    BufferUsage2[BufferUsage2["UNIFORM"] = 64] = "UNIFORM";
    BufferUsage2[BufferUsage2["STORAGE"] = 128] = "STORAGE";
    BufferUsage2[BufferUsage2["INDIRECT"] = 256] = "INDIRECT";
    BufferUsage2[BufferUsage2["QUERY_RESOLVE"] = 512] = "QUERY_RESOLVE";
    BufferUsage2[BufferUsage2["STATIC"] = 1024] = "STATIC";
    return BufferUsage2;
})(BufferUsage || {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2hfYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Geometry", ()=>Geometry);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _boundsMjs = require("../../../../scene/container/bounds/Bounds.mjs");
var _uidMjs = require("../../../../utils/data/uid.mjs");
var _bufferMjs = require("../buffer/Buffer.mjs");
var _ensureIsBufferMjs = require("./utils/ensureIsBuffer.mjs");
var _getGeometryBoundsMjs = require("./utils/getGeometryBounds.mjs");
"use strict";
function ensureIsAttribute(attribute) {
    if (attribute instanceof (0, _bufferMjs.Buffer) || Array.isArray(attribute) || attribute.BYTES_PER_ELEMENT) attribute = {
        buffer: attribute
    };
    attribute.buffer = (0, _ensureIsBufferMjs.ensureIsBuffer)(attribute.buffer, false);
    return attribute;
}
class Geometry extends (0, _eventemitter3Default.default) {
    /**
   * Create a new instance of a geometry
   * @param options - The options for the geometry.
   */ constructor(options){
        const { attributes, indexBuffer, topology } = options;
        super();
        /** The unique id of the geometry. */ this.uid = (0, _uidMjs.uid)("geometry");
        /**
     * the layout key will be generated by WebGPU all geometries that have the same structure
     * will have the same layout key. This is used to cache the pipeline layout
     * @internal
     * @ignore
     */ this._layoutKey = 0;
        /** the instance count of the geometry to draw */ this.instanceCount = 1;
        this._bounds = new (0, _boundsMjs.Bounds)();
        this._boundsDirty = true;
        this.attributes = attributes;
        this.buffers = [];
        this.instanceCount = options.instanceCount || 1;
        for(const i in attributes){
            const attribute = attributes[i] = ensureIsAttribute(attributes[i]);
            const bufferIndex = this.buffers.indexOf(attribute.buffer);
            if (bufferIndex === -1) {
                this.buffers.push(attribute.buffer);
                attribute.buffer.on("update", this.onBufferUpdate, this);
                attribute.buffer.on("change", this.onBufferUpdate, this);
            }
        }
        if (indexBuffer) {
            this.indexBuffer = (0, _ensureIsBufferMjs.ensureIsBuffer)(indexBuffer, true);
            this.buffers.push(this.indexBuffer);
        }
        this.topology = topology || "triangle-list";
    }
    onBufferUpdate() {
        this._boundsDirty = true;
        this.emit("update", this);
    }
    /**
   * Returns the requested attribute.
   * @param id - The name of the attribute required
   * @returns - The attribute requested.
   */ getAttribute(id) {
        return this.attributes[id];
    }
    /**
   * Returns the index buffer
   * @returns - The index buffer.
   */ getIndex() {
        return this.indexBuffer;
    }
    /**
   * Returns the requested buffer.
   * @param id - The name of the buffer required.
   * @returns - The buffer requested.
   */ getBuffer(id) {
        return this.getAttribute(id).buffer;
    }
    /**
   * Used to figure out how many vertices there are in this geometry
   * @returns the number of vertices in the geometry
   */ getSize() {
        for(const i in this.attributes){
            const attribute = this.attributes[i];
            const buffer = attribute.buffer;
            return buffer.data.length / (attribute.stride / 4 || attribute.size);
        }
        return 0;
    }
    /** Returns the bounds of the geometry. */ get bounds() {
        if (!this._boundsDirty) return this._bounds;
        this._boundsDirty = false;
        return (0, _getGeometryBoundsMjs.getGeometryBounds)(this, "aPosition", this._bounds);
    }
    /**
   * destroys the geometry.
   * @param destroyBuffers - destroy the buffers associated with this geometry
   */ destroy(destroyBuffers = false) {
        this.emit("destroy", this);
        this.removeAllListeners();
        if (destroyBuffers) this.buffers.forEach((buffer)=>buffer.destroy());
        this.attributes = null;
        this.buffers = null;
        this.indexBuffer = null;
        this._bounds = null;
    }
}

},{"eventemitter3":"enSRh","../../../../scene/container/bounds/Bounds.mjs":"2E5wx","../../../../utils/data/uid.mjs":"2iBho","../buffer/Buffer.mjs":"7xm40","./utils/ensureIsBuffer.mjs":"7iUiM","./utils/getGeometryBounds.mjs":"7WrnW","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7iUiM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensureIsBuffer", ()=>ensureIsBuffer);
var _bufferMjs = require("../../buffer/Buffer.mjs");
var _constMjs = require("../../buffer/const.mjs");
"use strict";
function ensureIsBuffer(buffer, index) {
    if (!(buffer instanceof (0, _bufferMjs.Buffer))) {
        let usage = index ? (0, _constMjs.BufferUsage).INDEX : (0, _constMjs.BufferUsage).VERTEX;
        if (buffer instanceof Array) {
            if (index) {
                buffer = new Uint32Array(buffer);
                usage = (0, _constMjs.BufferUsage).INDEX | (0, _constMjs.BufferUsage).COPY_DST;
            } else {
                buffer = new Float32Array(buffer);
                usage = (0, _constMjs.BufferUsage).VERTEX | (0, _constMjs.BufferUsage).COPY_DST;
            }
        }
        buffer = new (0, _bufferMjs.Buffer)({
            data: buffer,
            label: index ? "index-mesh-buffer" : "vertex-mesh-buffer",
            usage
        });
    }
    return buffer;
}

},{"../../buffer/Buffer.mjs":"7xm40","../../buffer/const.mjs":"j5G3o","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7WrnW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGeometryBounds", ()=>getGeometryBounds);
"use strict";
function getGeometryBounds(geometry, attributeId, bounds) {
    const attribute = geometry.getAttribute(attributeId);
    if (!attribute) {
        bounds.minX = 0;
        bounds.minY = 0;
        bounds.maxX = 0;
        bounds.maxY = 0;
        return bounds;
    }
    const data = attribute.buffer.data;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    const byteSize = data.BYTES_PER_ELEMENT;
    const offset = (attribute.offset || 0) / byteSize;
    const stride = (attribute.stride || 8) / byteSize;
    for(let i = offset; i < data.length; i += stride){
        const x = data[i];
        const y = data[i + 1];
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
    }
    bounds.minX = minX;
    bounds.minY = minY;
    bounds.maxX = maxX;
    bounds.maxY = maxY;
    return bounds;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gs2xu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTextureBatchBindGroup", ()=>getTextureBatchBindGroup);
var _bindGroupMjs = require("../../renderers/gpu/shader/BindGroup.mjs");
var _textureMjs = require("../../renderers/shared/texture/Texture.mjs");
var _constMjs = require("../shared/const.mjs");
"use strict";
const cachedGroups = {};
function getTextureBatchBindGroup(textures, size) {
    let uid = 0;
    for(let i = 0; i < size; i++)uid = uid * 31 + textures[i].uid >>> 0;
    return cachedGroups[uid] || generateTextureBatchBindGroup(textures, uid);
}
function generateTextureBatchBindGroup(textures, key) {
    const bindGroupResources = {};
    let bindIndex = 0;
    for(let i = 0; i < (0, _constMjs.MAX_TEXTURES); i++){
        const texture = i < textures.length ? textures[i] : (0, _textureMjs.Texture).EMPTY.source;
        bindGroupResources[bindIndex++] = texture.source;
        bindGroupResources[bindIndex++] = texture.style;
    }
    const bindGroup = new (0, _bindGroupMjs.BindGroup)(bindGroupResources);
    cachedGroups[key] = bindGroup;
    return bindGroup;
}

},{"../../renderers/gpu/shader/BindGroup.mjs":"8EZE8","../../renderers/shared/texture/Texture.mjs":"ho7cW","../shared/const.mjs":"1Zfz9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8EZE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BindGroup", ()=>BindGroup);
"use strict";
class BindGroup {
    /**
   * Create a new instance eof the Bind Group.
   * @param resources - The resources that are bound together for use by a shader.
   */ constructor(resources){
        /** The resources that are bound together for use by a shader. */ this.resources = /* @__PURE__ */ Object.create(null);
        this._dirty = true;
        let index = 0;
        for(const i in resources){
            const resource = resources[i];
            this.setResource(resource, index++);
        }
        this._updateKey();
    }
    /**
   * Updates the key if its flagged as dirty. This is used internally to
   * match this bind group to a WebGPU BindGroup.
   * @internal
   * @ignore
   */ _updateKey() {
        if (!this._dirty) return;
        this._dirty = false;
        const keyParts = [];
        let index = 0;
        for(const i in this.resources)keyParts[index++] = this.resources[i]._resourceId;
        this._key = keyParts.join("|");
    }
    /**
   * Set a resource at a given index. this function will
   * ensure that listeners will be removed from the current resource
   * and added to the new resource.
   * @param resource - The resource to set.
   * @param index - The index to set the resource at.
   */ setResource(resource, index) {
        const currentResource = this.resources[index];
        if (resource === currentResource) return;
        if (currentResource) resource.off?.("change", this.onResourceChange, this);
        resource.on?.("change", this.onResourceChange, this);
        this.resources[index] = resource;
        this._dirty = true;
    }
    /**
   * Returns the resource at the current specified index.
   * @param index - The index of the resource to get.
   * @returns - The resource at the specified index.
   */ getResource(index) {
        return this.resources[index];
    }
    /**
   * Used internally to 'touch' each resource, to ensure that the GC
   * knows that all resources in this bind group are still being used.
   * @param tick - The current tick.
   * @internal
   * @ignore
   */ _touch(tick) {
        const resources = this.resources;
        for(const i in resources)resources[i]._touched = tick;
    }
    /** Destroys this bind group and removes all listeners. */ destroy() {
        const resources = this.resources;
        for(const i in resources){
            const resource = resources[i];
            resource.off?.("change", this.onResourceChange, this);
        }
        this.resources = null;
    }
    onResourceChange() {
        this._dirty = true;
        this._updateKey();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1Zfz9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_TEXTURES", ()=>MAX_TEXTURES);
"use strict";
const MAX_TEXTURES = 16;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"3dOc5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Batch", ()=>Batch);
parcelHelpers.export(exports, "Batcher", ()=>Batcher);
var _uidMjs = require("../../../utils/data/uid.mjs");
var _viewableBufferMjs = require("../../../utils/data/ViewableBuffer.mjs");
var _fastCopyMjs = require("../../renderers/shared/buffer/utils/fastCopy.mjs");
var _getAdjustedBlendModeBlendMjs = require("../../renderers/shared/state/getAdjustedBlendModeBlend.mjs");
var _batchTextureArrayMjs = require("./BatchTextureArray.mjs");
var _constMjs = require("./const.mjs");
"use strict";
class Batch {
    constructor(){
        this.renderPipeId = "batch";
        this.action = "startBatch";
        // TODO - eventually this could be useful for flagging batches as dirty and then only rebuilding those ones
        // public elementStart = 0;
        // public elementSize = 0;
        // for drawing..
        this.start = 0;
        this.size = 0;
        this.blendMode = "normal";
        this.canBundle = true;
    }
    destroy() {
        this.textures = null;
        this.gpuBindGroup = null;
        this.bindGroup = null;
        this.batcher = null;
    }
}
let BATCH_TICK = 0;
const _Batcher = class _Batcher {
    constructor(options = {}){
        this.uid = (0, _uidMjs.uid)("batcher");
        this.dirty = true;
        this.batchIndex = 0;
        this.batches = [];
        // specifics.
        this._vertexSize = 6;
        this._elements = [];
        this._batchPool = [];
        this._batchPoolIndex = 0;
        this._textureBatchPool = [];
        this._textureBatchPoolIndex = 0;
        options = {
            ..._Batcher.defaultOptions,
            ...options
        };
        const { vertexSize, indexSize } = options;
        this.attributeBuffer = new (0, _viewableBufferMjs.ViewableBuffer)(vertexSize * this._vertexSize * 4);
        this.indexBuffer = new Uint16Array(indexSize);
    }
    begin() {
        this.batchIndex = 0;
        this.elementSize = 0;
        this.elementStart = 0;
        this.indexSize = 0;
        this.attributeSize = 0;
        this._batchPoolIndex = 0;
        this._textureBatchPoolIndex = 0;
        this._batchIndexStart = 0;
        this._batchIndexSize = 0;
        this.dirty = true;
    }
    add(batchableObject) {
        this._elements[this.elementSize++] = batchableObject;
        batchableObject.indexStart = this.indexSize;
        batchableObject.location = this.attributeSize;
        batchableObject.batcher = this;
        this.indexSize += batchableObject.indexSize;
        this.attributeSize += batchableObject.vertexSize * this._vertexSize;
    }
    checkAndUpdateTexture(batchableObject, texture) {
        const textureId = batchableObject.batch.textures.ids[texture._source.uid];
        if (!textureId && textureId !== 0) return false;
        batchableObject.textureId = textureId;
        batchableObject.texture = texture;
        return true;
    }
    updateElement(batchableObject) {
        this.dirty = true;
        batchableObject.packAttributes(this.attributeBuffer.float32View, this.attributeBuffer.uint32View, batchableObject.location, batchableObject.textureId);
    }
    /**
   * breaks the batcher. This happens when a batch gets too big,
   * or we need to switch to a different type of rendering (a filter for example)
   * @param instructionSet
   */ break(instructionSet) {
        const elements = this._elements;
        let textureBatch = this._textureBatchPool[this._textureBatchPoolIndex++] || new (0, _batchTextureArrayMjs.BatchTextureArray)();
        textureBatch.clear();
        if (!elements[this.elementStart]) return;
        const firstElement = elements[this.elementStart];
        let blendMode = (0, _getAdjustedBlendModeBlendMjs.getAdjustedBlendModeBlend)(firstElement.blendMode, firstElement.texture._source);
        if (this.attributeSize * 4 > this.attributeBuffer.size) this._resizeAttributeBuffer(this.attributeSize * 4);
        if (this.indexSize > this.indexBuffer.length) this._resizeIndexBuffer(this.indexSize);
        const f32 = this.attributeBuffer.float32View;
        const u32 = this.attributeBuffer.uint32View;
        const iBuffer = this.indexBuffer;
        let size = this._batchIndexSize;
        let start = this._batchIndexStart;
        let action = "startBatch";
        let batch = this._batchPool[this._batchPoolIndex++] || new Batch();
        for(let i = this.elementStart; i < this.elementSize; ++i){
            const element = elements[i];
            elements[i] = null;
            const texture = element.texture;
            const source = texture._source;
            const adjustedBlendMode = (0, _getAdjustedBlendModeBlendMjs.getAdjustedBlendModeBlend)(element.blendMode, source);
            const blendModeChange = blendMode !== adjustedBlendMode;
            if (source._batchTick === BATCH_TICK && !blendModeChange) {
                element.textureId = source._textureBindLocation;
                size += element.indexSize;
                element.packAttributes(f32, u32, element.location, element.textureId);
                element.packIndex(iBuffer, element.indexStart, element.location / this._vertexSize);
                element.batch = batch;
                continue;
            }
            source._batchTick = BATCH_TICK;
            if (textureBatch.count >= (0, _constMjs.MAX_TEXTURES) || blendModeChange) {
                this._finishBatch(batch, start, size - start, textureBatch, blendMode, instructionSet, action);
                action = "renderBatch";
                start = size;
                blendMode = adjustedBlendMode;
                textureBatch = this._textureBatchPool[this._textureBatchPoolIndex++] || new (0, _batchTextureArrayMjs.BatchTextureArray)();
                textureBatch.clear();
                batch = this._batchPool[this._batchPoolIndex++] || new Batch();
                ++BATCH_TICK;
            }
            element.textureId = source._textureBindLocation = textureBatch.count;
            textureBatch.ids[source.uid] = textureBatch.count;
            textureBatch.textures[textureBatch.count++] = source;
            element.batch = batch;
            size += element.indexSize;
            element.packAttributes(f32, u32, element.location, element.textureId);
            element.packIndex(iBuffer, element.indexStart, element.location / this._vertexSize);
        }
        if (textureBatch.count > 0) {
            this._finishBatch(batch, start, size - start, textureBatch, blendMode, instructionSet, action);
            start = size;
            ++BATCH_TICK;
        }
        this.elementStart = this.elementSize;
        this._batchIndexStart = start;
        this._batchIndexSize = size;
    }
    _finishBatch(batch, indexStart, indexSize, textureBatch, blendMode, instructionSet, action) {
        batch.gpuBindGroup = null;
        batch.action = action;
        batch.batcher = this;
        batch.textures = textureBatch;
        batch.blendMode = blendMode;
        batch.start = indexStart;
        batch.size = indexSize;
        ++BATCH_TICK;
        instructionSet.add(batch);
    }
    finish(instructionSet) {
        this.break(instructionSet);
    }
    /**
   * Resizes the attribute buffer to the given size (1 = 1 float32)
   * @param size - the size in vertices to ensure (not bytes!)
   */ ensureAttributeBuffer(size) {
        if (size * 4 <= this.attributeBuffer.size) return;
        this._resizeAttributeBuffer(size * 4);
    }
    /**
   * Resizes the index buffer to the given size (1 = 1 float32)
   * @param size - the size in vertices to ensure (not bytes!)
   */ ensureIndexBuffer(size) {
        if (size <= this.indexBuffer.length) return;
        this._resizeIndexBuffer(size);
    }
    _resizeAttributeBuffer(size) {
        const newSize = Math.max(size, this.attributeBuffer.size * 2);
        const newArrayBuffer = new (0, _viewableBufferMjs.ViewableBuffer)(newSize);
        (0, _fastCopyMjs.fastCopy)(this.attributeBuffer.rawBinaryData, newArrayBuffer.rawBinaryData);
        this.attributeBuffer = newArrayBuffer;
    }
    _resizeIndexBuffer(size) {
        const indexBuffer = this.indexBuffer;
        let newSize = Math.max(size, indexBuffer.length * 1.5);
        newSize += newSize % 2;
        const newIndexBuffer = newSize > 65535 ? new Uint32Array(newSize) : new Uint16Array(newSize);
        if (newIndexBuffer.BYTES_PER_ELEMENT !== indexBuffer.BYTES_PER_ELEMENT) for(let i = 0; i < indexBuffer.length; i++)newIndexBuffer[i] = indexBuffer[i];
        else (0, _fastCopyMjs.fastCopy)(indexBuffer.buffer, newIndexBuffer.buffer);
        this.indexBuffer = newIndexBuffer;
    }
    destroy() {
        for(let i = 0; i < this.batches.length; i++)this.batches[i].destroy();
        this.batches = null;
        for(let i = 0; i < this._elements.length; i++)this._elements[i].batch = null;
        this._elements = null;
        this.indexBuffer = null;
        this.attributeBuffer.destroy();
        this.attributeBuffer = null;
    }
};
_Batcher.defaultOptions = {
    vertexSize: 4,
    indexSize: 6
};
let Batcher = _Batcher;

},{"../../../utils/data/uid.mjs":"2iBho","../../../utils/data/ViewableBuffer.mjs":"d3Yk2","../../renderers/shared/buffer/utils/fastCopy.mjs":"iP3r3","../../renderers/shared/state/getAdjustedBlendModeBlend.mjs":"g2Iaf","./BatchTextureArray.mjs":"fahhO","./const.mjs":"1Zfz9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"d3Yk2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ViewableBuffer", ()=>ViewableBuffer);
"use strict";
class ViewableBuffer {
    constructor(sizeOrBuffer){
        if (typeof sizeOrBuffer === "number") this.rawBinaryData = new ArrayBuffer(sizeOrBuffer);
        else if (sizeOrBuffer instanceof Uint8Array) this.rawBinaryData = sizeOrBuffer.buffer;
        else this.rawBinaryData = sizeOrBuffer;
        this.uint32View = new Uint32Array(this.rawBinaryData);
        this.float32View = new Float32Array(this.rawBinaryData);
        this.size = this.rawBinaryData.byteLength;
    }
    /** View on the raw binary data as a `Int8Array`. */ get int8View() {
        if (!this._int8View) this._int8View = new Int8Array(this.rawBinaryData);
        return this._int8View;
    }
    /** View on the raw binary data as a `Uint8Array`. */ get uint8View() {
        if (!this._uint8View) this._uint8View = new Uint8Array(this.rawBinaryData);
        return this._uint8View;
    }
    /**  View on the raw binary data as a `Int16Array`. */ get int16View() {
        if (!this._int16View) this._int16View = new Int16Array(this.rawBinaryData);
        return this._int16View;
    }
    /** View on the raw binary data as a `Int32Array`. */ get int32View() {
        if (!this._int32View) this._int32View = new Int32Array(this.rawBinaryData);
        return this._int32View;
    }
    /** View on the raw binary data as a `Float64Array`. */ get float64View() {
        if (!this._float64Array) this._float64Array = new Float64Array(this.rawBinaryData);
        return this._float64Array;
    }
    /** View on the raw binary data as a `BigUint64Array`. */ get bigUint64View() {
        if (!this._bigUint64Array) this._bigUint64Array = new BigUint64Array(this.rawBinaryData);
        return this._bigUint64Array;
    }
    /**
   * Returns the view of the given type.
   * @param type - One of `int8`, `uint8`, `int16`,
   *    `uint16`, `int32`, `uint32`, and `float32`.
   * @returns - typed array of given type
   */ view(type) {
        return this[`${type}View`];
    }
    /** Destroys all buffer references. Do not use after calling this. */ destroy() {
        this.rawBinaryData = null;
        this._int8View = null;
        this._uint8View = null;
        this._int16View = null;
        this.uint16View = null;
        this._int32View = null;
        this.uint32View = null;
        this.float32View = null;
    }
    /**
   * Returns the size of the given type in bytes.
   * @param type - One of `int8`, `uint8`, `int16`,
   *   `uint16`, `int32`, `uint32`, and `float32`.
   * @returns - size of the type in bytes
   */ static sizeOf(type) {
        switch(type){
            case "int8":
            case "uint8":
                return 1;
            case "int16":
            case "uint16":
                return 2;
            case "int32":
            case "uint32":
            case "float32":
                return 4;
            default:
                throw new Error(`${type} isn't a valid view type`);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"iP3r3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fastCopy", ()=>fastCopy);
"use strict";
function fastCopy(sourceBuffer, destinationBuffer) {
    const lengthDouble = sourceBuffer.byteLength / 8 | 0;
    const sourceFloat64View = new Float64Array(sourceBuffer, 0, lengthDouble);
    const destinationFloat64View = new Float64Array(destinationBuffer, 0, lengthDouble);
    destinationFloat64View.set(sourceFloat64View);
    const remainingBytes = sourceBuffer.byteLength - lengthDouble * 8;
    if (remainingBytes > 0) {
        const sourceUint8View = new Uint8Array(sourceBuffer, lengthDouble * 8, remainingBytes);
        const destinationUint8View = new Uint8Array(destinationBuffer, lengthDouble * 8, remainingBytes);
        destinationUint8View.set(sourceUint8View);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"g2Iaf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAdjustedBlendModeBlend", ()=>getAdjustedBlendModeBlend);
var _constMjs = require("./const.mjs");
"use strict";
function getAdjustedBlendModeBlend(blendMode, textureSource) {
    if (textureSource.alphaMode === "no-premultiply-alpha") return (0, _constMjs.BLEND_TO_NPM)[blendMode] || blendMode;
    return blendMode;
}

},{"./const.mjs":"e509F","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"e509F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BLEND_TO_NPM", ()=>BLEND_TO_NPM);
parcelHelpers.export(exports, "STENCIL_MODES", ()=>STENCIL_MODES);
"use strict";
const BLEND_TO_NPM = {
    normal: "normal-npm",
    add: "add-npm",
    screen: "screen-npm"
};
var STENCIL_MODES = /* @__PURE__ */ ((STENCIL_MODES2)=>{
    STENCIL_MODES2[STENCIL_MODES2["DISABLED"] = 0] = "DISABLED";
    STENCIL_MODES2[STENCIL_MODES2["RENDERING_MASK_ADD"] = 1] = "RENDERING_MASK_ADD";
    STENCIL_MODES2[STENCIL_MODES2["MASK_ACTIVE"] = 2] = "MASK_ACTIVE";
    STENCIL_MODES2[STENCIL_MODES2["RENDERING_MASK_REMOVE"] = 3] = "RENDERING_MASK_REMOVE";
    STENCIL_MODES2[STENCIL_MODES2["NONE"] = 4] = "NONE";
    return STENCIL_MODES2;
})(STENCIL_MODES || {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fahhO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchTextureArray", ()=>BatchTextureArray);
"use strict";
class BatchTextureArray {
    constructor(){
        /** Respective locations for textures. */ this.ids = /* @__PURE__ */ Object.create(null);
        this.textures = [];
        this.count = 0;
    }
    /** Clear the textures and their locations. */ clear() {
        for(let i = 0; i < this.count; i++){
            const t = this.textures[i];
            this.textures[i] = null;
            this.ids[t.uid] = null;
        }
        this.count = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"h5rJr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildContextBatches", ()=>buildContextBatches);
var _rectangleMjs = require("../../../../maths/shapes/Rectangle.mjs");
var _buildUvsMjs = require("../../../../rendering/renderers/shared/geometry/utils/buildUvs.mjs");
var _transformVerticesMjs = require("../../../../rendering/renderers/shared/geometry/utils/transformVertices.mjs");
var _textureMjs = require("../../../../rendering/renderers/shared/texture/Texture.mjs");
var _poolGroupMjs = require("../../../../utils/pool/PoolGroup.mjs");
var _batchableGraphicsMjs = require("../BatchableGraphics.mjs");
var _buildCircleMjs = require("../buildCommands/buildCircle.mjs");
var _buildLineMjs = require("../buildCommands/buildLine.mjs");
var _buildPolygonMjs = require("../buildCommands/buildPolygon.mjs");
var _buildRectangleMjs = require("../buildCommands/buildRectangle.mjs");
var _buildTriangleMjs = require("../buildCommands/buildTriangle.mjs");
var _triangulateWithHolesMjs = require("./triangulateWithHoles.mjs");
"use strict";
const buildMap = {
    rectangle: (0, _buildRectangleMjs.buildRectangle),
    polygon: (0, _buildPolygonMjs.buildPolygon),
    triangle: (0, _buildTriangleMjs.buildTriangle),
    circle: (0, _buildCircleMjs.buildCircle),
    ellipse: (0, _buildCircleMjs.buildCircle),
    roundedRectangle: (0, _buildCircleMjs.buildCircle)
};
const tempRect = new (0, _rectangleMjs.Rectangle)();
function buildContextBatches(context, gpuContext) {
    const { geometryData, batches } = gpuContext;
    batches.length = 0;
    geometryData.indices.length = 0;
    geometryData.vertices.length = 0;
    geometryData.uvs.length = 0;
    for(let i = 0; i < context.instructions.length; i++){
        const instruction = context.instructions[i];
        if (instruction.action === "texture") addTextureToGeometryData(instruction.data, batches, geometryData);
        else if (instruction.action === "fill" || instruction.action === "stroke") {
            const isStroke = instruction.action === "stroke";
            const shapePath = instruction.data.path.shapePath;
            const style = instruction.data.style;
            const hole = instruction.data.hole;
            if (isStroke && hole) addShapePathToGeometryData(hole.shapePath, style, null, true, batches, geometryData);
            addShapePathToGeometryData(shapePath, style, hole, isStroke, batches, geometryData);
        }
    }
}
function addTextureToGeometryData(data, batches, geometryData) {
    const { vertices, uvs, indices } = geometryData;
    const indexOffset = indices.length;
    const vertOffset = vertices.length / 2;
    const points = [];
    const build = buildMap.rectangle;
    const rect = tempRect;
    const texture = data.image;
    rect.x = data.dx;
    rect.y = data.dy;
    rect.width = data.dw;
    rect.height = data.dh;
    const matrix = data.transform;
    build.build(rect, points);
    if (matrix) (0, _transformVerticesMjs.transformVertices)(points, matrix);
    build.triangulate(points, vertices, 2, vertOffset, indices, indexOffset);
    const textureUvs = texture.uvs;
    uvs.push(textureUvs.x0, textureUvs.y0, textureUvs.x1, textureUvs.y1, textureUvs.x3, textureUvs.y3, textureUvs.x2, textureUvs.y2);
    const graphicsBatch = (0, _poolGroupMjs.BigPool).get((0, _batchableGraphicsMjs.BatchableGraphics));
    graphicsBatch.indexOffset = indexOffset;
    graphicsBatch.indexSize = indices.length - indexOffset;
    graphicsBatch.vertexOffset = vertOffset;
    graphicsBatch.vertexSize = vertices.length / 2 - vertOffset;
    graphicsBatch.color = data.style;
    graphicsBatch.alpha = data.alpha;
    graphicsBatch.texture = texture;
    graphicsBatch.geometryData = geometryData;
    batches.push(graphicsBatch);
}
function addShapePathToGeometryData(shapePath, style, hole, isStroke, batches, geometryData) {
    const { vertices, uvs, indices } = geometryData;
    const lastIndex = shapePath.shapePrimitives.length - 1;
    shapePath.shapePrimitives.forEach(({ shape, transform: matrix }, i)=>{
        const indexOffset = indices.length;
        const vertOffset = vertices.length / 2;
        const points = [];
        const build = buildMap[shape.type];
        build.build(shape, points);
        if (matrix) (0, _transformVerticesMjs.transformVertices)(points, matrix);
        if (!isStroke) {
            if (hole && lastIndex === i) {
                if (lastIndex !== 0) console.warn("[Pixi Graphics] only the last shape have be cut out");
                const holeIndices = [];
                const otherPoints = points.slice();
                const holeArrays = getHoleArrays(hole.shapePath);
                holeArrays.forEach((holePoints)=>{
                    holeIndices.push(otherPoints.length / 2);
                    otherPoints.push(...holePoints);
                });
                (0, _triangulateWithHolesMjs.triangulateWithHoles)(otherPoints, holeIndices, vertices, 2, vertOffset, indices, indexOffset);
            } else build.triangulate(points, vertices, 2, vertOffset, indices, indexOffset);
        } else {
            const close = shape.closePath ?? true;
            const lineStyle = style;
            (0, _buildLineMjs.buildLine)(points, lineStyle, false, close, vertices, 2, vertOffset, indices, indexOffset);
        }
        const uvsOffset = uvs.length / 2;
        const texture = style.texture;
        if (texture !== (0, _textureMjs.Texture).WHITE) {
            const textureMatrix = style.matrix;
            if (matrix) textureMatrix.append(matrix.clone().invert());
            (0, _buildUvsMjs.buildUvs)(vertices, 2, vertOffset, uvs, uvsOffset, 2, vertices.length / 2 - vertOffset, textureMatrix);
        } else (0, _buildUvsMjs.buildSimpleUvs)(uvs, uvsOffset, 2, vertices.length / 2 - vertOffset);
        const graphicsBatch = (0, _poolGroupMjs.BigPool).get((0, _batchableGraphicsMjs.BatchableGraphics));
        graphicsBatch.indexOffset = indexOffset;
        graphicsBatch.indexSize = indices.length - indexOffset;
        graphicsBatch.vertexOffset = vertOffset;
        graphicsBatch.vertexSize = vertices.length / 2 - vertOffset;
        graphicsBatch.color = style.color;
        graphicsBatch.alpha = style.alpha;
        graphicsBatch.texture = texture;
        graphicsBatch.geometryData = geometryData;
        batches.push(graphicsBatch);
    });
}
function getHoleArrays(shape) {
    if (!shape) return [];
    const holePrimitives = shape.shapePrimitives;
    const holeArrays = [];
    for(let k = 0; k < holePrimitives.length; k++){
        const holePrimitive = holePrimitives[k].shape;
        const holePoints = [];
        const holeBuilder = buildMap[holePrimitive.type];
        holeBuilder.build(holePrimitive, holePoints);
        holeArrays.push(holePoints);
    }
    return holeArrays;
}

},{"../../../../maths/shapes/Rectangle.mjs":"kCPrw","../../../../rendering/renderers/shared/geometry/utils/buildUvs.mjs":"fCK9Q","../../../../rendering/renderers/shared/geometry/utils/transformVertices.mjs":"8FaTa","../../../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../../../../utils/pool/PoolGroup.mjs":"bj9CN","../BatchableGraphics.mjs":"6yaIg","../buildCommands/buildCircle.mjs":"jWQg5","../buildCommands/buildLine.mjs":"gW4nW","../buildCommands/buildPolygon.mjs":"31j4R","../buildCommands/buildRectangle.mjs":"jswlP","../buildCommands/buildTriangle.mjs":"gDX8I","./triangulateWithHoles.mjs":"kcQKw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fCK9Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSimpleUvs", ()=>buildSimpleUvs);
parcelHelpers.export(exports, "buildUvs", ()=>buildUvs);
"use strict";
function buildUvs(vertices, verticesStride, verticesOffset, uvs, uvsOffset, uvsStride, size, matrix = null) {
    let index = 0;
    verticesOffset *= verticesStride;
    uvsOffset *= uvsStride;
    const a = matrix.a;
    const b = matrix.b;
    const c = matrix.c;
    const d = matrix.d;
    const tx = matrix.tx;
    const ty = matrix.ty;
    while(index < size){
        const x = vertices[verticesOffset];
        const y = vertices[verticesOffset + 1];
        uvs[uvsOffset] = a * x + c * y + tx;
        uvs[uvsOffset + 1] = b * x + d * y + ty;
        uvsOffset += uvsStride;
        verticesOffset += verticesStride;
        index++;
    }
}
function buildSimpleUvs(uvs, uvsOffset, uvsStride, size) {
    let index = 0;
    uvsOffset *= uvsStride;
    while(index < size){
        uvs[uvsOffset] = 0;
        uvs[uvsOffset + 1] = 0;
        uvsOffset += uvsStride;
        index++;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8FaTa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformVertices", ()=>transformVertices);
"use strict";
function transformVertices(vertices, m, offset, stride, size) {
    const a = m.a;
    const b = m.b;
    const c = m.c;
    const d = m.d;
    const tx = m.tx;
    const ty = m.ty;
    offset = offset || 0;
    stride = stride || 2;
    size = size || vertices.length / stride - offset;
    let index = offset * stride;
    for(let i = 0; i < size; i++){
        const x = vertices[index];
        const y = vertices[index + 1];
        vertices[index] = a * x + c * y + tx;
        vertices[index + 1] = b * x + d * y + ty;
        index += stride;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6yaIg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchableGraphics", ()=>BatchableGraphics);
var _mixColorsMjs = require("../../container/utils/mixColors.mjs");
"use strict";
class BatchableGraphics {
    constructor(){
        this.batcher = null;
        this.batch = null;
        this.applyTransform = true;
        this.roundPixels = 0;
    }
    get blendMode() {
        if (this.applyTransform) return this.renderable.groupBlendMode;
        return "normal";
    }
    packIndex(indexBuffer, index, indicesOffset) {
        const indices = this.geometryData.indices;
        for(let i = 0; i < this.indexSize; i++)indexBuffer[index++] = indices[i + this.indexOffset] + indicesOffset - this.vertexOffset;
    }
    packAttributes(float32View, uint32View, index, textureId) {
        const geometry = this.geometryData;
        const graphics = this.renderable;
        const positions = geometry.vertices;
        const uvs = geometry.uvs;
        const offset = this.vertexOffset * 2;
        const vertSize = (this.vertexOffset + this.vertexSize) * 2;
        const rgb = this.color;
        const bgr = rgb >> 16 | rgb & 65280 | (rgb & 255) << 16;
        if (this.applyTransform) {
            const argb = (0, _mixColorsMjs.mixColors)(bgr, graphics.groupColor) + (this.alpha * graphics.groupAlpha * 255 << 24);
            const wt = graphics.groupTransform;
            const textureIdAndRound = textureId << 16 | this.roundPixels & 65535;
            const a = wt.a;
            const b = wt.b;
            const c = wt.c;
            const d = wt.d;
            const tx = wt.tx;
            const ty = wt.ty;
            for(let i = offset; i < vertSize; i += 2){
                const x = positions[i];
                const y = positions[i + 1];
                float32View[index] = a * x + c * y + tx;
                float32View[index + 1] = b * x + d * y + ty;
                float32View[index + 2] = uvs[i];
                float32View[index + 3] = uvs[i + 1];
                uint32View[index + 4] = argb;
                uint32View[index + 5] = textureIdAndRound;
                index += 6;
            }
        } else {
            const argb = bgr + (this.alpha * 255 << 24);
            for(let i = offset; i < vertSize; i += 2){
                float32View[index] = positions[i];
                float32View[index + 1] = positions[i + 1];
                float32View[index + 2] = uvs[i];
                float32View[index + 3] = uvs[i + 1];
                uint32View[index + 4] = argb;
                uint32View[index + 5] = textureId << 16;
                index += 6;
            }
        }
    }
    // TODO rename to vertexSize
    get vertSize() {
        return this.vertexSize;
    }
    copyTo(gpuBuffer) {
        gpuBuffer.indexOffset = this.indexOffset;
        gpuBuffer.indexSize = this.indexSize;
        gpuBuffer.vertexOffset = this.vertexOffset;
        gpuBuffer.vertexSize = this.vertexSize;
        gpuBuffer.color = this.color;
        gpuBuffer.alpha = this.alpha;
        gpuBuffer.texture = this.texture;
        gpuBuffer.geometryData = this.geometryData;
    }
    reset() {
        this.applyTransform = true;
    }
}

},{"../../container/utils/mixColors.mjs":"5gqqY","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"5gqqY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixColors", ()=>mixColors);
parcelHelpers.export(exports, "mixStandardAnd32BitColors", ()=>mixStandardAnd32BitColors);
var _mixHexColorsMjs = require("./mixHexColors.mjs");
"use strict";
const WHITE_BGR = 16777215;
function mixColors(localBGRColor, parentBGRColor) {
    if (localBGRColor === WHITE_BGR || parentBGRColor === WHITE_BGR) return localBGRColor + parentBGRColor - WHITE_BGR;
    return (0, _mixHexColorsMjs.mixHexColors)(localBGRColor, parentBGRColor, 0.5);
}
function mixStandardAnd32BitColors(localColorRGB, localAlpha, parentColor) {
    const parentAlpha = (parentColor >> 24 & 255) / 255;
    const globalAlpha = localAlpha * parentAlpha * 255;
    const localBGRColor = ((localColorRGB & 255) << 16) + (localColorRGB & 65280) + (localColorRGB >> 16 & 255);
    const parentBGRColor = parentColor & 16777215;
    let sharedBGRColor;
    if (localBGRColor === WHITE_BGR || parentBGRColor === WHITE_BGR) sharedBGRColor = localBGRColor + parentBGRColor - WHITE_BGR;
    else sharedBGRColor = (0, _mixHexColorsMjs.mixHexColors)(localBGRColor, parentBGRColor, 0.5);
    return sharedBGRColor + (globalAlpha << 24);
}

},{"./mixHexColors.mjs":"60ikz","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"60ikz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixHexColors", ()=>mixHexColors);
"use strict";
function mixHexColors(color1, color2, ratio) {
    const r1 = color1 >> 16 & 255;
    const g1 = color1 >> 8 & 255;
    const b1 = color1 & 255;
    const r2 = color2 >> 16 & 255;
    const g2 = color2 >> 8 & 255;
    const b2 = color2 & 255;
    const r = r1 + (r2 - r1) * ratio;
    const g = g1 + (g2 - g1) * ratio;
    const b = b1 + (b2 - b1) * ratio;
    return (r << 16) + (g << 8) + b;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jWQg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildCircle", ()=>buildCircle);
"use strict";
const buildCircle = {
    build (shape, points) {
        let x;
        let y;
        let dx;
        let dy;
        let rx;
        let ry;
        if (shape.type === "circle") {
            const circle = shape;
            x = circle.x;
            y = circle.y;
            rx = ry = circle.radius;
            dx = dy = 0;
        } else if (shape.type === "ellipse") {
            const ellipse = shape;
            x = ellipse.x;
            y = ellipse.y;
            rx = ellipse.halfWidth;
            ry = ellipse.halfHeight;
            dx = dy = 0;
        } else {
            const roundedRect = shape;
            const halfWidth = roundedRect.width / 2;
            const halfHeight = roundedRect.height / 2;
            x = roundedRect.x + halfWidth;
            y = roundedRect.y + halfHeight;
            rx = ry = Math.max(0, Math.min(roundedRect.radius, Math.min(halfWidth, halfHeight)));
            dx = halfWidth - rx;
            dy = halfHeight - ry;
        }
        if (!(rx >= 0 && ry >= 0 && dx >= 0 && dy >= 0)) return points;
        const n = Math.ceil(2.3 * Math.sqrt(rx + ry));
        const m = n * 8 + (dx ? 4 : 0) + (dy ? 4 : 0);
        if (m === 0) return points;
        if (n === 0) {
            points[0] = points[6] = x + dx;
            points[1] = points[3] = y + dy;
            points[2] = points[4] = x - dx;
            points[5] = points[7] = y - dy;
            return points;
        }
        let j1 = 0;
        let j2 = n * 4 + (dx ? 2 : 0) + 2;
        let j3 = j2;
        let j4 = m;
        let x0 = dx + rx;
        let y0 = dy;
        let x1 = x + x0;
        let x2 = x - x0;
        let y1 = y + y0;
        points[j1++] = x1;
        points[j1++] = y1;
        points[--j2] = y1;
        points[--j2] = x2;
        if (dy) {
            const y22 = y - y0;
            points[j3++] = x2;
            points[j3++] = y22;
            points[--j4] = y22;
            points[--j4] = x1;
        }
        for(let i = 1; i < n; i++){
            const a = Math.PI / 2 * (i / n);
            const x02 = dx + Math.cos(a) * rx;
            const y02 = dy + Math.sin(a) * ry;
            const x12 = x + x02;
            const x22 = x - x02;
            const y12 = y + y02;
            const y22 = y - y02;
            points[j1++] = x12;
            points[j1++] = y12;
            points[--j2] = y12;
            points[--j2] = x22;
            points[j3++] = x22;
            points[j3++] = y22;
            points[--j4] = y22;
            points[--j4] = x12;
        }
        x0 = dx;
        y0 = dy + ry;
        x1 = x + x0;
        x2 = x - x0;
        y1 = y + y0;
        const y2 = y - y0;
        points[j1++] = x1;
        points[j1++] = y1;
        points[--j4] = y2;
        points[--j4] = x1;
        if (dx) {
            points[j1++] = x2;
            points[j1++] = y1;
            points[--j4] = y2;
            points[--j4] = x2;
        }
        return points;
    },
    triangulate (points, vertices, verticesStride, verticesOffset, indices, indicesOffset) {
        if (points.length === 0) return;
        let centerX = 0;
        let centerY = 0;
        for(let i = 0; i < points.length; i += 2){
            centerX += points[i];
            centerY += points[i + 1];
        }
        centerX /= points.length / 2;
        centerY /= points.length / 2;
        let count = verticesOffset;
        vertices[count * verticesStride] = centerX;
        vertices[count * verticesStride + 1] = centerY;
        const centerIndex = count++;
        for(let i = 0; i < points.length; i += 2){
            vertices[count * verticesStride] = points[i];
            vertices[count * verticesStride + 1] = points[i + 1];
            if (i > 0) {
                indices[indicesOffset++] = count;
                indices[indicesOffset++] = centerIndex;
                indices[indicesOffset++] = count - 1;
            }
            count++;
        }
        indices[indicesOffset++] = centerIndex + 1;
        indices[indicesOffset++] = centerIndex;
        indices[indicesOffset++] = count - 1;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gW4nW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildLine", ()=>buildLine);
var _pointMjs = require("../../../../maths/point/Point.mjs");
var _constMjs = require("../const.mjs");
var _getOrientationOfPointsMjs = require("../utils/getOrientationOfPoints.mjs");
"use strict";
function square(x, y, nx, ny, innerWeight, outerWeight, clockwise, verts) {
    const ix = x - nx * innerWeight;
    const iy = y - ny * innerWeight;
    const ox = x + nx * outerWeight;
    const oy = y + ny * outerWeight;
    let exx;
    let eyy;
    if (clockwise) {
        exx = ny;
        eyy = -nx;
    } else {
        exx = -ny;
        eyy = nx;
    }
    const eix = ix + exx;
    const eiy = iy + eyy;
    const eox = ox + exx;
    const eoy = oy + eyy;
    verts.push(eix, eiy);
    verts.push(eox, eoy);
    return 2;
}
function round(cx, cy, sx, sy, ex, ey, verts, clockwise) {
    const cx2p0x = sx - cx;
    const cy2p0y = sy - cy;
    let angle0 = Math.atan2(cx2p0x, cy2p0y);
    let angle1 = Math.atan2(ex - cx, ey - cy);
    if (clockwise && angle0 < angle1) angle0 += Math.PI * 2;
    else if (!clockwise && angle0 > angle1) angle1 += Math.PI * 2;
    let startAngle = angle0;
    const angleDiff = angle1 - angle0;
    const absAngleDiff = Math.abs(angleDiff);
    const radius = Math.sqrt(cx2p0x * cx2p0x + cy2p0y * cy2p0y);
    const segCount = (15 * absAngleDiff * Math.sqrt(radius) / Math.PI >> 0) + 1;
    const angleInc = angleDiff / segCount;
    startAngle += angleInc;
    if (clockwise) {
        verts.push(cx, cy);
        verts.push(sx, sy);
        for(let i = 1, angle = startAngle; i < segCount; i++, angle += angleInc){
            verts.push(cx, cy);
            verts.push(cx + Math.sin(angle) * radius, cy + Math.cos(angle) * radius);
        }
        verts.push(cx, cy);
        verts.push(ex, ey);
    } else {
        verts.push(sx, sy);
        verts.push(cx, cy);
        for(let i = 1, angle = startAngle; i < segCount; i++, angle += angleInc){
            verts.push(cx + Math.sin(angle) * radius, cy + Math.cos(angle) * radius);
            verts.push(cx, cy);
        }
        verts.push(ex, ey);
        verts.push(cx, cy);
    }
    return segCount * 2;
}
function buildLine(points, lineStyle, flipAlignment, closed, vertices, _verticesStride, _verticesOffset, indices, _indicesOffset) {
    const eps = (0, _constMjs.closePointEps);
    if (points.length === 0) return;
    const style = lineStyle;
    let alignment = style.alignment;
    if (lineStyle.alignment !== 0.5) {
        let orientation = (0, _getOrientationOfPointsMjs.getOrientationOfPoints)(points);
        if (flipAlignment) orientation *= -1;
        alignment = (alignment - 0.5) * orientation + 0.5;
    }
    const firstPoint = new (0, _pointMjs.Point)(points[0], points[1]);
    const lastPoint = new (0, _pointMjs.Point)(points[points.length - 2], points[points.length - 1]);
    const closedShape = closed;
    const closedPath = Math.abs(firstPoint.x - lastPoint.x) < eps && Math.abs(firstPoint.y - lastPoint.y) < eps;
    if (closedShape) {
        points = points.slice();
        if (closedPath) {
            points.pop();
            points.pop();
            lastPoint.set(points[points.length - 2], points[points.length - 1]);
        }
        const midPointX = (firstPoint.x + lastPoint.x) * 0.5;
        const midPointY = (lastPoint.y + firstPoint.y) * 0.5;
        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }
    const verts = vertices;
    const length = points.length / 2;
    let indexCount = points.length;
    const indexStart = verts.length / 2;
    const width = style.width / 2;
    const widthSquared = width * width;
    const miterLimitSquared = style.miterLimit * style.miterLimit;
    let x0 = points[0];
    let y0 = points[1];
    let x1 = points[2];
    let y1 = points[3];
    let x2 = 0;
    let y2 = 0;
    let perpX = -(y0 - y1);
    let perpY = x0 - x1;
    let perp1x = 0;
    let perp1y = 0;
    let dist = Math.sqrt(perpX * perpX + perpY * perpY);
    perpX /= dist;
    perpY /= dist;
    perpX *= width;
    perpY *= width;
    const ratio = alignment;
    const innerWeight = (1 - ratio) * 2;
    const outerWeight = ratio * 2;
    if (!closedShape) {
        if (style.cap === "round") indexCount += round(x0 - perpX * (innerWeight - outerWeight) * 0.5, y0 - perpY * (innerWeight - outerWeight) * 0.5, x0 - perpX * innerWeight, y0 - perpY * innerWeight, x0 + perpX * outerWeight, y0 + perpY * outerWeight, verts, true) + 2;
        else if (style.cap === "square") indexCount += square(x0, y0, perpX, perpY, innerWeight, outerWeight, true, verts);
    }
    verts.push(x0 - perpX * innerWeight, y0 - perpY * innerWeight);
    verts.push(x0 + perpX * outerWeight, y0 + perpY * outerWeight);
    for(let i = 1; i < length - 1; ++i){
        x0 = points[(i - 1) * 2];
        y0 = points[(i - 1) * 2 + 1];
        x1 = points[i * 2];
        y1 = points[i * 2 + 1];
        x2 = points[(i + 1) * 2];
        y2 = points[(i + 1) * 2 + 1];
        perpX = -(y0 - y1);
        perpY = x0 - x1;
        dist = Math.sqrt(perpX * perpX + perpY * perpY);
        perpX /= dist;
        perpY /= dist;
        perpX *= width;
        perpY *= width;
        perp1x = -(y1 - y2);
        perp1y = x1 - x2;
        dist = Math.sqrt(perp1x * perp1x + perp1y * perp1y);
        perp1x /= dist;
        perp1y /= dist;
        perp1x *= width;
        perp1y *= width;
        const dx0 = x1 - x0;
        const dy0 = y0 - y1;
        const dx1 = x1 - x2;
        const dy1 = y2 - y1;
        const dot = dx0 * dx1 + dy0 * dy1;
        const cross = dy0 * dx1 - dy1 * dx0;
        const clockwise = cross < 0;
        if (Math.abs(cross) < 1e-3 * Math.abs(dot)) {
            verts.push(x1 - perpX * innerWeight, y1 - perpY * innerWeight);
            verts.push(x1 + perpX * outerWeight, y1 + perpY * outerWeight);
            if (dot >= 0) {
                if (style.join === "round") indexCount += round(x1, y1, x1 - perpX * innerWeight, y1 - perpY * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 4;
                else indexCount += 2;
                verts.push(x1 - perp1x * outerWeight, y1 - perp1y * outerWeight);
                verts.push(x1 + perp1x * innerWeight, y1 + perp1y * innerWeight);
            }
            continue;
        }
        const c1 = (-perpX + x0) * (-perpY + y1) - (-perpX + x1) * (-perpY + y0);
        const c2 = (-perp1x + x2) * (-perp1y + y1) - (-perp1x + x1) * (-perp1y + y2);
        const px = (dx0 * c2 - dx1 * c1) / cross;
        const py = (dy1 * c1 - dy0 * c2) / cross;
        const pDist = (px - x1) * (px - x1) + (py - y1) * (py - y1);
        const imx = x1 + (px - x1) * innerWeight;
        const imy = y1 + (py - y1) * innerWeight;
        const omx = x1 - (px - x1) * outerWeight;
        const omy = y1 - (py - y1) * outerWeight;
        const smallerInsideSegmentSq = Math.min(dx0 * dx0 + dy0 * dy0, dx1 * dx1 + dy1 * dy1);
        const insideWeight = clockwise ? innerWeight : outerWeight;
        const smallerInsideDiagonalSq = smallerInsideSegmentSq + insideWeight * insideWeight * widthSquared;
        const insideMiterOk = pDist <= smallerInsideDiagonalSq;
        if (insideMiterOk) {
            if (style.join === "bevel" || pDist / widthSquared > miterLimitSquared) {
                if (clockwise) {
                    verts.push(imx, imy);
                    verts.push(x1 + perpX * outerWeight, y1 + perpY * outerWeight);
                    verts.push(imx, imy);
                    verts.push(x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
                } else {
                    verts.push(x1 - perpX * innerWeight, y1 - perpY * innerWeight);
                    verts.push(omx, omy);
                    verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight);
                    verts.push(omx, omy);
                }
                indexCount += 2;
            } else if (style.join === "round") {
                if (clockwise) {
                    verts.push(imx, imy);
                    verts.push(x1 + perpX * outerWeight, y1 + perpY * outerWeight);
                    indexCount += round(x1, y1, x1 + perpX * outerWeight, y1 + perpY * outerWeight, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight, verts, true) + 4;
                    verts.push(imx, imy);
                    verts.push(x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
                } else {
                    verts.push(x1 - perpX * innerWeight, y1 - perpY * innerWeight);
                    verts.push(omx, omy);
                    indexCount += round(x1, y1, x1 - perpX * innerWeight, y1 - perpY * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 4;
                    verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight);
                    verts.push(omx, omy);
                }
            } else {
                verts.push(imx, imy);
                verts.push(omx, omy);
            }
        } else {
            verts.push(x1 - perpX * innerWeight, y1 - perpY * innerWeight);
            verts.push(x1 + perpX * outerWeight, y1 + perpY * outerWeight);
            if (style.join === "round") {
                if (clockwise) indexCount += round(x1, y1, x1 + perpX * outerWeight, y1 + perpY * outerWeight, x1 + perp1x * outerWeight, y1 + perp1y * outerWeight, verts, true) + 2;
                else indexCount += round(x1, y1, x1 - perpX * innerWeight, y1 - perpY * innerWeight, x1 - perp1x * innerWeight, y1 - perp1y * innerWeight, verts, false) + 2;
            } else if (style.join === "miter" && pDist / widthSquared <= miterLimitSquared) {
                if (clockwise) {
                    verts.push(omx, omy);
                    verts.push(omx, omy);
                } else {
                    verts.push(imx, imy);
                    verts.push(imx, imy);
                }
                indexCount += 2;
            }
            verts.push(x1 - perp1x * innerWeight, y1 - perp1y * innerWeight);
            verts.push(x1 + perp1x * outerWeight, y1 + perp1y * outerWeight);
            indexCount += 2;
        }
    }
    x0 = points[(length - 2) * 2];
    y0 = points[(length - 2) * 2 + 1];
    x1 = points[(length - 1) * 2];
    y1 = points[(length - 1) * 2 + 1];
    perpX = -(y0 - y1);
    perpY = x0 - x1;
    dist = Math.sqrt(perpX * perpX + perpY * perpY);
    perpX /= dist;
    perpY /= dist;
    perpX *= width;
    perpY *= width;
    verts.push(x1 - perpX * innerWeight, y1 - perpY * innerWeight);
    verts.push(x1 + perpX * outerWeight, y1 + perpY * outerWeight);
    if (!closedShape) {
        if (style.cap === "round") indexCount += round(x1 - perpX * (innerWeight - outerWeight) * 0.5, y1 - perpY * (innerWeight - outerWeight) * 0.5, x1 - perpX * innerWeight, y1 - perpY * innerWeight, x1 + perpX * outerWeight, y1 + perpY * outerWeight, verts, false) + 2;
        else if (style.cap === "square") indexCount += square(x1, y1, perpX, perpY, innerWeight, outerWeight, false, verts);
    }
    const eps2 = (0, _constMjs.curveEps) * (0, _constMjs.curveEps);
    for(let i = indexStart; i < indexCount + indexStart - 2; ++i){
        x0 = verts[i * 2];
        y0 = verts[i * 2 + 1];
        x1 = verts[(i + 1) * 2];
        y1 = verts[(i + 1) * 2 + 1];
        x2 = verts[(i + 2) * 2];
        y2 = verts[(i + 2) * 2 + 1];
        if (Math.abs(x0 * (y1 - y2) + x1 * (y2 - y0) + x2 * (y0 - y1)) < eps2) continue;
        indices.push(i, i + 1, i + 2);
    }
}

},{"../../../../maths/point/Point.mjs":"dkxvR","../const.mjs":"3RenE","../utils/getOrientationOfPoints.mjs":"iyHHn","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"3RenE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closePointEps", ()=>closePointEps);
parcelHelpers.export(exports, "curveEps", ()=>curveEps);
"use strict";
const closePointEps = 1e-4;
const curveEps = 1e-4;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"iyHHn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOrientationOfPoints", ()=>getOrientationOfPoints);
"use strict";
function getOrientationOfPoints(points) {
    const m = points.length;
    if (m < 6) return 1;
    let area = 0;
    for(let i = 0, x1 = points[m - 2], y1 = points[m - 1]; i < m; i += 2){
        const x2 = points[i];
        const y2 = points[i + 1];
        area += (x2 - x1) * (y2 + y1);
        x1 = x2;
        y1 = y2;
    }
    if (area < 0) return -1;
    return 1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"31j4R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildPolygon", ()=>buildPolygon);
var _triangulateWithHolesMjs = require("../utils/triangulateWithHoles.mjs");
"use strict";
const emptyArray = [];
const buildPolygon = {
    build (shape, points) {
        for(let i = 0; i < shape.points.length; i++)points[i] = shape.points[i];
        return points;
    },
    triangulate (points, vertices, verticesStride, verticesOffset, indices, indicesOffset) {
        (0, _triangulateWithHolesMjs.triangulateWithHoles)(points, emptyArray, vertices, verticesStride, verticesOffset, indices, indicesOffset);
    }
};

},{"../utils/triangulateWithHoles.mjs":"kcQKw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kcQKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "triangulateWithHoles", ()=>triangulateWithHoles);
var _earcut = require("earcut");
var _earcutDefault = parcelHelpers.interopDefault(_earcut);
"use strict";
function triangulateWithHoles(points, holes, vertices, verticesStride, verticesOffset, indices, indicesOffset) {
    const triangles = (0, _earcutDefault.default)(points, holes, 2);
    if (!triangles) return;
    for(let i = 0; i < triangles.length; i += 3){
        indices[indicesOffset++] = triangles[i] + verticesOffset;
        indices[indicesOffset++] = triangles[i + 1] + verticesOffset;
        indices[indicesOffset++] = triangles[i + 2] + verticesOffset;
    }
    let index = verticesOffset * verticesStride;
    for(let i = 0; i < points.length; i += 2){
        vertices[index] = points[i];
        vertices[index + 1] = points[i + 1];
        index += verticesStride;
    }
}

},{"earcut":"16Z0P","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"16Z0P":[function(require,module,exports) {
"use strict";
module.exports = earcut;
module.exports.default = earcut;
function earcut(data, holeIndices, dim) {
    dim = dim || 2;
    var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data.length, outerNode = linkedList(data, 0, outerLen, dim, true), triangles = [];
    if (!outerNode || outerNode.next === outerNode.prev) return triangles;
    var minX, minY, maxX, maxY, x, y, invSize;
    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
        for(var i = dim; i < outerLen; i += dim){
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }
        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
    }
    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
    return triangles;
}
// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;
    if (clockwise === signedArea(data, start, end, dim) > 0) for(i = start; i < end; i += dim)last = insertNode(i, data[i], data[i + 1], last);
    else for(i = end - dim; i >= start; i -= dim)last = insertNode(i, data[i], data[i + 1], last);
    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }
    return last;
}
// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;
    var p = start, again;
    do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;
        } else p = p.next;
    }while (again || p !== end);
    return end;
}
// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;
    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
    var stop = ear, prev, next;
    // iterate through ears, slicing them one by one
    while(ear.prev !== ear.next){
        prev = ear.prev;
        next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim | 0);
            triangles.push(ear.i / dim | 0);
            triangles.push(next.i / dim | 0);
            removeNode(ear);
            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;
            continue;
        }
        ear = next;
        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
            else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) splitEarcut(ear, triangles, dim, minX, minY, invSize);
            break;
        }
    }
}
// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev, b = ear, c = ear.next;
    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
    // now make sure we don't have other points inside the potential ear
    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
    var p = c.next;
    while(p !== a){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }
    return true;
}
function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev, b = ear, c = ear.next;
    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
    var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
    // triangle bbox; min & max are calculated like this for speed
    var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
    // z-order range for the current triangle bbox;
    var minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
    var p = ear.prevZ, n = ear.nextZ;
    // look for points inside the triangle in both directions
    while(p && p.z >= minZ && n && n.z <= maxZ){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }
    // look for remaining points in decreasing z-order
    while(p && p.z >= minZ){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }
    // look for remaining points in increasing z-order
    while(n && n.z <= maxZ){
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }
    return true;
}
// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev, b = p.next.next;
        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
            triangles.push(a.i / dim | 0);
            triangles.push(p.i / dim | 0);
            triangles.push(b.i / dim | 0);
            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);
            p = start = b;
        }
        p = p.next;
    }while (p !== start);
    return filterPoints(p);
}
// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while(b !== a.prev){
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);
                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);
                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                return;
            }
            b = b.next;
        }
        a = a.next;
    }while (a !== start);
}
// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [], i, len, start, end, list;
    for(i = 0, len = holeIndices.length; i < len; i++){
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }
    queue.sort(compareX);
    // process holes from left to right
    for(i = 0; i < queue.length; i++)outerNode = eliminateHole(queue[i], outerNode);
    return outerNode;
}
function compareX(a, b) {
    return a.x - b.x;
}
// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    var bridge = findHoleBridge(hole, outerNode);
    if (!bridge) return outerNode;
    var bridgeReverse = splitPolygon(bridge, hole);
    // filter collinear points around the cuts
    filterPoints(bridgeReverse, bridgeReverse.next);
    return filterPoints(bridge, bridge.next);
}
// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m;
    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                m = p.x < p.next.x ? p : p.next;
                if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
            }
        }
        p = p.next;
    }while (p !== outerNode);
    if (!m) return null;
    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point
    var stop = m, mx = m.x, my = m.y, tanMin = Infinity, tan;
    p = m;
    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential
            if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
                m = p;
                tanMin = tan;
            }
        }
        p = p.next;
    }while (p !== stop);
    return m;
}
// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}
// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    }while (p !== start);
    p.prevZ.nextZ = null;
    p.prevZ = null;
    sortLinked(p);
}
// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;
        while(p){
            numMerges++;
            q = p;
            pSize = 0;
            for(i = 0; i < inSize; i++){
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;
            while(pSize > 0 || qSize > 0 && q){
                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }
                if (tail) tail.nextZ = e;
                else list = e;
                e.prevZ = tail;
                tail = e;
            }
            p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
    }while (numMerges > 1);
    return list;
}
// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = (x - minX) * invSize | 0;
    y = (y - minY) * invSize | 0;
    x = (x | x << 8) & 0x00FF00FF;
    x = (x | x << 4) & 0x0F0F0F0F;
    x = (x | x << 2) & 0x33333333;
    x = (x | x << 1) & 0x55555555;
    y = (y | y << 8) & 0x00FF00FF;
    y = (y | y << 4) & 0x0F0F0F0F;
    y = (y | y << 2) & 0x33333333;
    y = (y | y << 1) & 0x55555555;
    return x | y << 1;
}
// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start, leftmost = start;
    do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
        p = p.next;
    }while (p !== start);
    return leftmost;
}
// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
}
// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
    (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
    (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
    equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}
// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));
    if (o1 !== o2 && o3 !== o4) return true; // general case
    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2
    return false;
}
// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}
// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
    }while (p !== a);
    return false;
}
// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
    do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
        p = p.next;
    }while (p !== a);
    return inside;
}
// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
    a.next = b;
    b.prev = a;
    a2.next = an;
    an.prev = a2;
    b2.next = a2;
    a2.prev = b2;
    bp.next = b2;
    b2.prev = bp;
    return b2;
}
// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);
    if (!last) {
        p.prev = p;
        p.next = p;
    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}
function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;
    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}
function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;
    // vertex coordinates
    this.x = x;
    this.y = y;
    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;
    // z-order curve value
    this.z = 0;
    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;
    // indicates whether this is a steiner point
    this.steiner = false;
}
// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function(data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) for(var i = 0, len = holeIndices.length; i < len; i++){
        var start = holeIndices[i] * dim;
        var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        polygonArea -= Math.abs(signedArea(data, start, end, dim));
    }
    var trianglesArea = 0;
    for(i = 0; i < triangles.length; i += 3){
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }
    return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
};
function signedArea(data, start, end, dim) {
    var sum = 0;
    for(var i = start, j = end - dim; i < end; i += dim){
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}
// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function(data) {
    var dim = data[0][0].length, result = {
        vertices: [],
        holes: [],
        dimensions: dim
    }, holeIndex = 0;
    for(var i = 0; i < data.length; i++){
        for(var j = 0; j < data[i].length; j++)for(var d = 0; d < dim; d++)result.vertices.push(data[i][j][d]);
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

},{}],"jswlP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildRectangle", ()=>buildRectangle);
"use strict";
const buildRectangle = {
    build (shape, points) {
        const rectData = shape;
        const x = rectData.x;
        const y = rectData.y;
        const width = rectData.width;
        const height = rectData.height;
        if (!(width >= 0 && height >= 0)) return points;
        points[0] = x;
        points[1] = y;
        points[2] = x + width;
        points[3] = y;
        points[4] = x + width;
        points[5] = y + height;
        points[6] = x;
        points[7] = y + height;
        return points;
    },
    triangulate (points, vertices, verticesStride, verticesOffset, indices, indicesOffset) {
        let count = 0;
        verticesOffset *= verticesStride;
        vertices[verticesOffset + count] = points[0];
        vertices[verticesOffset + count + 1] = points[1];
        count += verticesStride;
        vertices[verticesOffset + count] = points[2];
        vertices[verticesOffset + count + 1] = points[3];
        count += verticesStride;
        vertices[verticesOffset + count] = points[6];
        vertices[verticesOffset + count + 1] = points[7];
        count += verticesStride;
        vertices[verticesOffset + count] = points[4];
        vertices[verticesOffset + count + 1] = points[5];
        count += verticesStride;
        const verticesIndex = verticesOffset / verticesStride;
        indices[indicesOffset++] = verticesIndex;
        indices[indicesOffset++] = verticesIndex + 1;
        indices[indicesOffset++] = verticesIndex + 2;
        indices[indicesOffset++] = verticesIndex + 1;
        indices[indicesOffset++] = verticesIndex + 3;
        indices[indicesOffset++] = verticesIndex + 2;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gDX8I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTriangle", ()=>buildTriangle);
"use strict";
const buildTriangle = {
    build (shape, points) {
        points[0] = shape.x;
        points[1] = shape.y;
        points[2] = shape.x2;
        points[3] = shape.y2;
        points[4] = shape.x3;
        points[5] = shape.y3;
        return points;
    },
    triangulate (points, vertices, verticesStride, verticesOffset, indices, indicesOffset) {
        let count = 0;
        verticesOffset *= verticesStride;
        vertices[verticesOffset + count] = points[0];
        vertices[verticesOffset + count + 1] = points[1];
        count += verticesStride;
        vertices[verticesOffset + count] = points[2];
        vertices[verticesOffset + count + 1] = points[3];
        count += verticesStride;
        vertices[verticesOffset + count] = points[4];
        vertices[verticesOffset + count + 1] = points[5];
        const verticesIndex = verticesOffset / verticesStride;
        indices[indicesOffset++] = verticesIndex;
        indices[indicesOffset++] = verticesIndex + 1;
        indices[indicesOffset++] = verticesIndex + 2;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"47JyI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphicsPipe", ()=>GraphicsPipe);
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _stateMjs = require("../../../rendering/renderers/shared/state/State.mjs");
var _poolGroupMjs = require("../../../utils/pool/PoolGroup.mjs");
var _colorToUniformMjs = require("../gpu/colorToUniform.mjs");
var _batchableGraphicsMjs = require("./BatchableGraphics.mjs");
"use strict";
class GraphicsPipe {
    constructor(renderer, adaptor){
        this.state = (0, _stateMjs.State).for2d();
        // batchable graphics list, used to render batches
        this._graphicsBatchesHash = /* @__PURE__ */ Object.create(null);
        this.renderer = renderer;
        this._adaptor = adaptor;
        this._adaptor.init();
    }
    validateRenderable(graphics) {
        const context = graphics.context;
        const wasBatched = !!this._graphicsBatchesHash[graphics.uid];
        const gpuContext = this.renderer.graphicsContext.updateGpuContext(context);
        if (gpuContext.isBatchable || wasBatched !== gpuContext.isBatchable) return true;
        return false;
    }
    addRenderable(graphics, instructionSet) {
        const gpuContext = this.renderer.graphicsContext.updateGpuContext(graphics.context);
        if (graphics._didGraphicsUpdate) {
            graphics._didGraphicsUpdate = false;
            this._rebuild(graphics);
        }
        if (gpuContext.isBatchable) this._addToBatcher(graphics, instructionSet);
        else {
            this.renderer.renderPipes.batch.break(instructionSet);
            instructionSet.add(graphics);
        }
    }
    updateRenderable(graphics) {
        const batches = this._graphicsBatchesHash[graphics.uid];
        if (batches) for(let i = 0; i < batches.length; i++){
            const batch = batches[i];
            batch.batcher.updateElement(batch);
        }
    }
    destroyRenderable(graphics) {
        if (this._graphicsBatchesHash[graphics.uid]) this._removeBatchForRenderable(graphics.uid);
    }
    execute(graphics) {
        if (!graphics.isRenderable) return;
        const renderer = this.renderer;
        const context = graphics.context;
        const contextSystem = renderer.graphicsContext;
        if (!contextSystem.getGpuContext(context).batches.length) return;
        const shader = context.customShader || this._adaptor.shader;
        this.state.blendMode = graphics.groupBlendMode;
        const localUniforms = shader.resources.localUniforms.uniforms;
        localUniforms.uTransformMatrix = graphics.groupTransform;
        localUniforms.uRound = renderer._roundPixels | graphics._roundPixels;
        (0, _colorToUniformMjs.color32BitToUniform)(graphics.groupColorAlpha, localUniforms.uColor, 0);
        this._adaptor.execute(this, graphics);
    }
    _rebuild(graphics) {
        const wasBatched = !!this._graphicsBatchesHash[graphics.uid];
        const gpuContext = this.renderer.graphicsContext.updateGpuContext(graphics.context);
        if (wasBatched) this._removeBatchForRenderable(graphics.uid);
        if (gpuContext.isBatchable) this._initBatchesForRenderable(graphics);
        graphics.batched = gpuContext.isBatchable;
    }
    _addToBatcher(graphics, instructionSet) {
        const batchPipe = this.renderer.renderPipes.batch;
        const batches = this._getBatchesForRenderable(graphics);
        for(let i = 0; i < batches.length; i++){
            const batch = batches[i];
            batchPipe.addToBatch(batch, instructionSet);
        }
    }
    _getBatchesForRenderable(graphics) {
        return this._graphicsBatchesHash[graphics.uid] || this._initBatchesForRenderable(graphics);
    }
    _initBatchesForRenderable(graphics) {
        const context = graphics.context;
        const gpuContext = this.renderer.graphicsContext.getGpuContext(context);
        const roundPixels = this.renderer._roundPixels | graphics._roundPixels;
        const batches = gpuContext.batches.map((batch)=>{
            const batchClone = (0, _poolGroupMjs.BigPool).get((0, _batchableGraphicsMjs.BatchableGraphics));
            batch.copyTo(batchClone);
            batchClone.renderable = graphics;
            batchClone.roundPixels = roundPixels;
            return batchClone;
        });
        this._graphicsBatchesHash[graphics.uid] = batches;
        graphics.on("destroyed", ()=>{
            this.destroyRenderable(graphics);
        });
        return batches;
    }
    _removeBatchForRenderable(graphicsUid) {
        this._graphicsBatchesHash[graphicsUid].forEach((batch)=>{
            (0, _poolGroupMjs.BigPool).return(batch);
        });
        this._graphicsBatchesHash[graphicsUid] = null;
    }
    destroy() {
        this.renderer = null;
        this._adaptor.destroy();
        this._adaptor = null;
        this.state = null;
        for(const i in this._graphicsBatchesHash)this._removeBatchForRenderable(i);
        this._graphicsBatchesHash = null;
    }
}
/** @ignore */ GraphicsPipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "graphics"
};

},{"../../../extensions/Extensions.mjs":"c8doH","../../../rendering/renderers/shared/state/State.mjs":"8tuHi","../../../utils/pool/PoolGroup.mjs":"bj9CN","../gpu/colorToUniform.mjs":"gRXQe","./BatchableGraphics.mjs":"6yaIg","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8tuHi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "State", ()=>State);
"use strict";
const blendModeIds = {
    normal: 0,
    add: 1,
    multiply: 2,
    screen: 3,
    overlay: 4,
    erase: 5,
    "normal-npm": 6,
    "add-npm": 7,
    "screen-npm": 8
};
const BLEND = 0;
const OFFSET = 1;
const CULLING = 2;
const DEPTH_TEST = 3;
const WINDING = 4;
const DEPTH_MASK = 5;
const _State = class _State {
    constructor(){
        this.data = 0;
        this.blendMode = "normal";
        this.polygonOffset = 0;
        this.blend = true;
        this.depthMask = true;
    }
    /**
   * Activates blending of the computed fragment color values.
   * @default true
   */ get blend() {
        return !!(this.data & 1 << BLEND);
    }
    set blend(value) {
        if (!!(this.data & 1 << BLEND) !== value) this.data ^= 1 << BLEND;
    }
    /**
   * Activates adding an offset to depth values of polygon's fragments
   * @default false
   */ get offsets() {
        return !!(this.data & 1 << OFFSET);
    }
    set offsets(value) {
        if (!!(this.data & 1 << OFFSET) !== value) this.data ^= 1 << OFFSET;
    }
    /** The culling settings for this state none - No culling back - Back face culling front - Front face culling */ set cullMode(value) {
        if (value === "none") {
            this.culling = false;
            return;
        }
        this.culling = true;
        this.clockwiseFrontFace = value === "front";
    }
    get cullMode() {
        if (!this.culling) return "none";
        return this.clockwiseFrontFace ? "front" : "back";
    }
    /**
   * Activates culling of polygons.
   * @default false
   */ get culling() {
        return !!(this.data & 1 << CULLING);
    }
    set culling(value) {
        if (!!(this.data & 1 << CULLING) !== value) this.data ^= 1 << CULLING;
    }
    /**
   * Activates depth comparisons and updates to the depth buffer.
   * @default false
   */ get depthTest() {
        return !!(this.data & 1 << DEPTH_TEST);
    }
    set depthTest(value) {
        if (!!(this.data & 1 << DEPTH_TEST) !== value) this.data ^= 1 << DEPTH_TEST;
    }
    /**
   * Enables or disables writing to the depth buffer.
   * @default true
   */ get depthMask() {
        return !!(this.data & 1 << DEPTH_MASK);
    }
    set depthMask(value) {
        if (!!(this.data & 1 << DEPTH_MASK) !== value) this.data ^= 1 << DEPTH_MASK;
    }
    /**
   * Specifies whether or not front or back-facing polygons can be culled.
   * @default false
   */ get clockwiseFrontFace() {
        return !!(this.data & 1 << WINDING);
    }
    set clockwiseFrontFace(value) {
        if (!!(this.data & 1 << WINDING) !== value) this.data ^= 1 << WINDING;
    }
    /**
   * The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
   * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
   * @default 'normal'
   */ get blendMode() {
        return this._blendMode;
    }
    set blendMode(value) {
        this.blend = value !== "none";
        this._blendMode = value;
        this._blendModeId = blendModeIds[value] || 0;
    }
    /**
   * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
   * @default 0
   */ get polygonOffset() {
        return this._polygonOffset;
    }
    set polygonOffset(value) {
        this.offsets = !!value;
        this._polygonOffset = value;
    }
    toString() {
        return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
    }
    /**
   * A quickly getting an instance of a State that is configured for 2d rendering.
   * @returns a new State with values set for 2d rendering
   */ static for2d() {
        const state = new _State();
        state.depthTest = false;
        state.blend = true;
        return state;
    }
};
_State.default2d = _State.for2d();
let State = _State;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gRXQe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color32BitToUniform", ()=>color32BitToUniform);
parcelHelpers.export(exports, "colorToUniform", ()=>colorToUniform);
"use strict";
function colorToUniform(rgb, alpha, out, offset) {
    out[offset++] = (rgb >> 16 & 255) / 255;
    out[offset++] = (rgb >> 8 & 255) / 255;
    out[offset++] = (rgb & 255) / 255;
    out[offset++] = alpha;
}
function color32BitToUniform(abgr, out, offset) {
    const alpha = (abgr >> 24 & 255) / 255;
    out[offset++] = (abgr & 255) / 255 * alpha;
    out[offset++] = (abgr >> 8 & 255) / 255 * alpha;
    out[offset++] = (abgr >> 16 & 255) / 255 * alpha;
    out[offset++] = alpha;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"g9JHx":[function(require,module,exports) {
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _meshPipeMjs = require("./shared/MeshPipe.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _meshPipeMjs.MeshPipe));

},{"../../extensions/Extensions.mjs":"c8doH","./shared/MeshPipe.mjs":"fQ4ft"}],"fQ4ft":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MeshPipe", ()=>MeshPipe);
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _bindGroupMjs = require("../../../rendering/renderers/gpu/shader/BindGroup.mjs");
var _uniformGroupMjs = require("../../../rendering/renderers/shared/shader/UniformGroup.mjs");
var _poolGroupMjs = require("../../../utils/pool/PoolGroup.mjs");
var _colorToUniformMjs = require("../../graphics/gpu/colorToUniform.mjs");
var _batchableMeshMjs = require("./BatchableMesh.mjs");
"use strict";
class MeshPipe {
    constructor(renderer, adaptor){
        this.localUniforms = new (0, _uniformGroupMjs.UniformGroup)({
            uTransformMatrix: {
                value: new (0, _matrixMjs.Matrix)(),
                type: "mat3x3<f32>"
            },
            uColor: {
                value: new Float32Array([
                    1,
                    1,
                    1,
                    1
                ]),
                type: "vec4<f32>"
            },
            uRound: {
                value: 0,
                type: "f32"
            }
        });
        this.localUniformsBindGroup = new (0, _bindGroupMjs.BindGroup)({
            0: this.localUniforms
        });
        this._meshDataHash = /* @__PURE__ */ Object.create(null);
        this._gpuBatchableMeshHash = /* @__PURE__ */ Object.create(null);
        this.renderer = renderer;
        this._adaptor = adaptor;
        this._adaptor.init();
    }
    validateRenderable(mesh) {
        const meshData = this._getMeshData(mesh);
        const wasBatched = meshData.batched;
        const isBatched = mesh.batched;
        meshData.batched = isBatched;
        if (wasBatched !== isBatched) return true;
        else if (isBatched) {
            const geometry = mesh._geometry;
            if (geometry.indices.length !== meshData.indexSize || geometry.positions.length !== meshData.vertexSize) {
                meshData.indexSize = geometry.indices.length;
                meshData.vertexSize = geometry.positions.length;
                return true;
            }
            const batchableMesh = this._getBatchableMesh(mesh);
            const texture = mesh.texture;
            if (batchableMesh.texture._source !== texture._source) {
                if (batchableMesh.texture._source !== texture._source) return !batchableMesh.batcher.checkAndUpdateTexture(batchableMesh, texture);
            }
        }
        return false;
    }
    addRenderable(mesh, instructionSet) {
        const batcher = this.renderer.renderPipes.batch;
        const { batched } = this._getMeshData(mesh);
        if (batched) {
            const gpuBatchableMesh = this._getBatchableMesh(mesh);
            gpuBatchableMesh.texture = mesh._texture;
            gpuBatchableMesh.geometry = mesh._geometry;
            batcher.addToBatch(gpuBatchableMesh);
        } else {
            batcher.break(instructionSet);
            instructionSet.add({
                renderPipeId: "mesh",
                mesh
            });
        }
    }
    updateRenderable(mesh) {
        if (mesh.batched) {
            const gpuBatchableMesh = this._gpuBatchableMeshHash[mesh.uid];
            gpuBatchableMesh.texture = mesh._texture;
            gpuBatchableMesh.geometry = mesh._geometry;
            gpuBatchableMesh.batcher.updateElement(gpuBatchableMesh);
        }
    }
    destroyRenderable(mesh) {
        this._meshDataHash[mesh.uid] = null;
        const gpuMesh = this._gpuBatchableMeshHash[mesh.uid];
        if (gpuMesh) {
            (0, _poolGroupMjs.BigPool).return(gpuMesh);
            this._gpuBatchableMeshHash[mesh.uid] = null;
        }
    }
    execute({ mesh }) {
        if (!mesh.isRenderable) return;
        mesh.state.blendMode = mesh.groupBlendMode;
        const localUniforms = this.localUniforms;
        localUniforms.uniforms.uTransformMatrix = mesh.groupTransform;
        localUniforms.uniforms.uRound = this.renderer._roundPixels | mesh._roundPixels;
        localUniforms.update();
        (0, _colorToUniformMjs.color32BitToUniform)(mesh.groupColorAlpha, localUniforms.uniforms.uColor, 0);
        this._adaptor.execute(this, mesh);
    }
    _getMeshData(mesh) {
        return this._meshDataHash[mesh.uid] || this._initMeshData(mesh);
    }
    _initMeshData(mesh) {
        this._meshDataHash[mesh.uid] = {
            batched: mesh.batched,
            indexSize: mesh._geometry.indices?.length,
            vertexSize: mesh._geometry.positions?.length
        };
        mesh.on("destroyed", ()=>{
            this.destroyRenderable(mesh);
        });
        return this._meshDataHash[mesh.uid];
    }
    _getBatchableMesh(mesh) {
        return this._gpuBatchableMeshHash[mesh.uid] || this._initBatchableMesh(mesh);
    }
    _initBatchableMesh(mesh) {
        const gpuMesh = (0, _poolGroupMjs.BigPool).get((0, _batchableMeshMjs.BatchableMesh));
        gpuMesh.mesh = mesh;
        gpuMesh.texture = mesh._texture;
        gpuMesh.roundPixels = this.renderer._roundPixels | mesh._roundPixels;
        this._gpuBatchableMeshHash[mesh.uid] = gpuMesh;
        gpuMesh.mesh = mesh;
        return gpuMesh;
    }
    destroy() {
        for(const i in this._gpuBatchableMeshHash)if (this._gpuBatchableMeshHash[i]) (0, _poolGroupMjs.BigPool).return(this._gpuBatchableMeshHash[i]);
        this._gpuBatchableMeshHash = null;
        this._meshDataHash = null;
        this.localUniforms = null;
        this.localUniformsBindGroup = null;
        this._adaptor.destroy();
        this._adaptor = null;
        this.renderer = null;
    }
}
/** @ignore */ MeshPipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "mesh"
};

},{"../../../extensions/Extensions.mjs":"c8doH","../../../maths/matrix/Matrix.mjs":"kpkIt","../../../rendering/renderers/gpu/shader/BindGroup.mjs":"8EZE8","../../../rendering/renderers/shared/shader/UniformGroup.mjs":"ihTky","../../../utils/pool/PoolGroup.mjs":"bj9CN","../../graphics/gpu/colorToUniform.mjs":"gRXQe","./BatchableMesh.mjs":"7hJEa","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ihTky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UniformGroup", ()=>UniformGroup);
var _uidMjs = require("../../../../utils/data/uid.mjs");
var _createIdFromStringMjs = require("../utils/createIdFromString.mjs");
var _getDefaultUniformValueMjs = require("./utils/getDefaultUniformValue.mjs");
"use strict";
const _UniformGroup = class _UniformGroup {
    /**
   * Create a new Uniform group
   * @param uniformStructures - The structures of the uniform group
   * @param options - The optional parameters of this uniform group
   */ constructor(uniformStructures, options){
        /** used internally to know if a uniform group was used in the last render pass */ this._touched = 0;
        /** a unique id for this uniform group used through the renderer */ this.uid = (0, _uidMjs.uid)("uniform");
        /** a resource type, used to identify how to handle it when its in a bind group / shader resource */ this._resourceType = "uniformGroup";
        /** the resource id used internally by the renderer to build bind group keys */ this._resourceId = (0, _uidMjs.uid)("resource");
        /** used ito identify if this is a uniform group */ this.isUniformGroup = true;
        /**
     * used to flag if this Uniform groups data is different from what it has stored in its buffer / on the GPU
     * @internal
     * @ignore
     */ this._dirtyId = 0;
        options = {
            ..._UniformGroup.defaultOptions,
            ...options
        };
        this.uniformStructures = uniformStructures;
        const uniforms = {};
        for(const i in uniformStructures){
            const uniformData = uniformStructures[i];
            uniformData.name = i;
            uniformData.size = uniformData.size ?? 1;
            uniformData.value ?? (uniformData.value = (0, _getDefaultUniformValueMjs.getDefaultUniformValue)(uniformData.type, uniformData.size));
            uniforms[i] = uniformData.value;
        }
        this.uniforms = uniforms;
        this._dirtyId = 1;
        this.ubo = options.ubo;
        this.isStatic = options.isStatic;
        this._signature = (0, _createIdFromStringMjs.createIdFromString)(Object.keys(uniforms).map((i)=>`${i}-${uniformStructures[i].type}`).join("-"), "uniform-group");
    }
    /** Call this if you want the uniform groups data to be uploaded to the GPU only useful if `isStatic` is true. */ update() {
        this._dirtyId++;
    }
};
/** The default options used by the uniform group. */ _UniformGroup.defaultOptions = {
    /** if true the UniformGroup is handled as an Uniform buffer object. */ ubo: false,
    /** if true, then you are responsible for when the data is uploaded to the GPU by calling `update()` */ isStatic: false
};
let UniformGroup = _UniformGroup;

},{"../../../../utils/data/uid.mjs":"2iBho","../utils/createIdFromString.mjs":"sl3WD","./utils/getDefaultUniformValue.mjs":"9BizF","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"sl3WD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createIdFromString", ()=>createIdFromString);
"use strict";
const idCounts = /* @__PURE__ */ Object.create(null);
const idHash = /* @__PURE__ */ Object.create(null);
function createIdFromString(value, groupId) {
    let id = idHash[value];
    if (id === void 0) {
        if (idCounts[groupId] === void 0) idCounts[groupId] = 1;
        idHash[value] = id = idCounts[groupId]++;
    }
    return id;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9BizF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultUniformValue", ()=>getDefaultUniformValue);
"use strict";
function getDefaultUniformValue(type, size) {
    switch(type){
        case "f32":
            return 0;
        case "vec2<f32>":
            return new Float32Array(2 * size);
        case "vec3<f32>":
            return new Float32Array(3 * size);
        case "vec4<f32>":
            return new Float32Array(4 * size);
        case "mat2x2<f32>":
            return new Float32Array([
                1,
                0,
                0,
                1
            ]);
        case "mat3x3<f32>":
            return new Float32Array([
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ]);
        case "mat4x4<f32>":
            return new Float32Array([
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ]);
    }
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7hJEa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchableMesh", ()=>BatchableMesh);
"use strict";
class BatchableMesh {
    constructor(){
        this.batcher = null;
        this.batch = null;
        this.roundPixels = 0;
        this._uvUpdateId = -1;
        this._textureMatrixUpdateId = -1;
    }
    get blendMode() {
        return this.mesh.groupBlendMode;
    }
    reset() {
        this.mesh = null;
        this.texture = null;
        this.batcher = null;
        this.batch = null;
    }
    packIndex(indexBuffer, index, indicesOffset) {
        const indices = this.geometry.indices;
        for(let i = 0; i < indices.length; i++)indexBuffer[index++] = indices[i] + indicesOffset;
    }
    packAttributes(float32View, uint32View, index, textureId) {
        const mesh = this.mesh;
        const geometry = this.geometry;
        const wt = mesh.groupTransform;
        const textureIdAndRound = textureId << 16 | this.roundPixels & 65535;
        const a = wt.a;
        const b = wt.b;
        const c = wt.c;
        const d = wt.d;
        const tx = wt.tx;
        const ty = wt.ty;
        const positions = geometry.positions;
        const uvBuffer = geometry.getBuffer("aUV");
        const uvs = uvBuffer.data;
        let transformedUvs = uvs;
        const textureMatrix = this.texture.textureMatrix;
        if (!textureMatrix.isSimple) {
            transformedUvs = this._transformedUvs;
            if (this._textureMatrixUpdateId !== textureMatrix._updateID || this._uvUpdateId !== uvBuffer._updateID) {
                if (!transformedUvs || transformedUvs.length < uvs.length) transformedUvs = this._transformedUvs = new Float32Array(uvs.length);
                this._textureMatrixUpdateId = textureMatrix._updateID;
                this._uvUpdateId = uvBuffer._updateID;
                textureMatrix.multiplyUvs(uvs, transformedUvs);
            }
        }
        const abgr = mesh.groupColorAlpha;
        for(let i = 0; i < positions.length; i += 2){
            const x = positions[i];
            const y = positions[i + 1];
            float32View[index] = a * x + c * y + tx;
            float32View[index + 1] = b * x + d * y + ty;
            float32View[index + 2] = transformedUvs[i];
            float32View[index + 3] = transformedUvs[i + 1];
            uint32View[index + 4] = abgr;
            uint32View[index + 5] = textureIdAndRound;
            index += 6;
        }
    }
    get vertexSize() {
        return this.geometry.positions.length / 2;
    }
    get indexSize() {
        return this.geometry.indices.length;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"5oCSz":[function(require,module,exports) {
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _canvasTextPipeMjs = require("./canvas/CanvasTextPipe.mjs");
var _canvasTextSystemMjs = require("./canvas/CanvasTextSystem.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _canvasTextSystemMjs.CanvasTextSystem));
(0, _extensionsMjs.extensions).add((0, _canvasTextPipeMjs.CanvasTextPipe));

},{"../../extensions/Extensions.mjs":"c8doH","./canvas/CanvasTextPipe.mjs":"gDwSI","./canvas/CanvasTextSystem.mjs":"eKwjq"}],"gDwSI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasTextPipe", ()=>CanvasTextPipe);
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _updateQuadBoundsMjs = require("../../../utils/data/updateQuadBounds.mjs");
var _poolGroupMjs = require("../../../utils/pool/PoolGroup.mjs");
var _batchableSpriteMjs = require("../../sprite/BatchableSprite.mjs");
"use strict";
class CanvasTextPipe {
    constructor(renderer){
        this._gpuText = /* @__PURE__ */ Object.create(null);
        this._renderer = renderer;
    }
    validateRenderable(text) {
        const gpuText = this._getGpuText(text);
        const newKey = text._getKey();
        if (gpuText.currentKey !== newKey) {
            const resolution = text.resolution ?? this._renderer.resolution;
            const { width, height } = this._renderer.canvasText.getTextureSize(text.text, resolution, text._style);
            if (// is only being used by this text:
            this._renderer.canvasText.getReferenceCount(gpuText.currentKey) === 1 && width === gpuText.texture._source.width && height === gpuText.texture._source.height) return false;
            return true;
        }
        return false;
    }
    addRenderable(text, _instructionSet) {
        const gpuText = this._getGpuText(text);
        const batchableSprite = gpuText.batchableSprite;
        if (text._didTextUpdate) this._updateText(text);
        this._renderer.renderPipes.batch.addToBatch(batchableSprite);
    }
    updateRenderable(text) {
        const gpuText = this._getGpuText(text);
        const batchableSprite = gpuText.batchableSprite;
        if (text._didTextUpdate) this._updateText(text);
        batchableSprite.batcher.updateElement(batchableSprite);
    }
    destroyRenderable(text) {
        this._destroyRenderableById(text.uid);
    }
    _destroyRenderableById(textUid) {
        const gpuText = this._gpuText[textUid];
        this._renderer.canvasText.decreaseReferenceCount(gpuText.currentKey);
        (0, _poolGroupMjs.BigPool).return(gpuText.batchableSprite);
        this._gpuText[textUid] = null;
    }
    _updateText(text) {
        const newKey = text._getKey();
        const gpuText = this._getGpuText(text);
        const batchableSprite = gpuText.batchableSprite;
        if (gpuText.currentKey !== newKey) this._updateGpuText(text);
        text._didTextUpdate = false;
        const padding = text._style.padding;
        (0, _updateQuadBoundsMjs.updateQuadBounds)(batchableSprite.bounds, text._anchor, batchableSprite.texture, padding);
    }
    _updateGpuText(text) {
        const gpuText = this._getGpuText(text);
        const batchableSprite = gpuText.batchableSprite;
        if (gpuText.texture) this._renderer.canvasText.decreaseReferenceCount(gpuText.currentKey);
        const resolution = text.resolution ?? this._renderer.resolution;
        gpuText.texture = batchableSprite.texture = this._renderer.canvasText.getTexture(text.text, resolution, text._style, text._getKey());
        gpuText.currentKey = text._getKey();
        batchableSprite.texture = gpuText.texture;
    }
    _getGpuText(text) {
        return this._gpuText[text.uid] || this.initGpuText(text);
    }
    initGpuText(text) {
        const gpuTextData = {
            texture: null,
            currentKey: "--",
            batchableSprite: (0, _poolGroupMjs.BigPool).get((0, _batchableSpriteMjs.BatchableSprite))
        };
        gpuTextData.batchableSprite.renderable = text;
        gpuTextData.batchableSprite.bounds = {
            minX: 0,
            maxX: 1,
            minY: 0,
            maxY: 0
        };
        gpuTextData.batchableSprite.roundPixels = this._renderer._roundPixels | text._roundPixels;
        this._gpuText[text.uid] = gpuTextData;
        this._updateText(text);
        text.on("destroyed", ()=>{
            this.destroyRenderable(text);
        });
        return gpuTextData;
    }
    destroy() {
        for(const i in this._gpuText)this._destroyRenderableById(i);
        this._gpuText = null;
        this._renderer = null;
    }
}
/** @ignore */ CanvasTextPipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "text"
};

},{"../../../extensions/Extensions.mjs":"c8doH","../../../utils/data/updateQuadBounds.mjs":"iun61","../../../utils/pool/PoolGroup.mjs":"bj9CN","../../sprite/BatchableSprite.mjs":"ehhdS","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ehhdS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BatchableSprite", ()=>BatchableSprite);
"use strict";
class BatchableSprite {
    constructor(){
        // batch specific..
        this.vertexSize = 4;
        this.indexSize = 6;
        this.location = 0;
        // location in the buffer
        this.batcher = null;
        this.batch = null;
        this.roundPixels = 0;
    }
    get blendMode() {
        return this.renderable.groupBlendMode;
    }
    packAttributes(float32View, uint32View, index, textureId) {
        const sprite = this.renderable;
        const texture = this.texture;
        const wt = sprite.groupTransform;
        const a = wt.a;
        const b = wt.b;
        const c = wt.c;
        const d = wt.d;
        const tx = wt.tx;
        const ty = wt.ty;
        const bounds = this.bounds;
        const w0 = bounds.maxX;
        const w1 = bounds.minX;
        const h0 = bounds.maxY;
        const h1 = bounds.minY;
        const uvs = texture.uvs;
        const argb = sprite.groupColorAlpha;
        const textureIdAndRound = textureId << 16 | this.roundPixels & 65535;
        float32View[index + 0] = a * w1 + c * h1 + tx;
        float32View[index + 1] = d * h1 + b * w1 + ty;
        float32View[index + 2] = uvs.x0;
        float32View[index + 3] = uvs.y0;
        uint32View[index + 4] = argb;
        uint32View[index + 5] = textureIdAndRound;
        float32View[index + 6] = a * w0 + c * h1 + tx;
        float32View[index + 7] = d * h1 + b * w0 + ty;
        float32View[index + 8] = uvs.x1;
        float32View[index + 9] = uvs.y1;
        uint32View[index + 10] = argb;
        uint32View[index + 11] = textureIdAndRound;
        float32View[index + 12] = a * w0 + c * h0 + tx;
        float32View[index + 13] = d * h0 + b * w0 + ty;
        float32View[index + 14] = uvs.x2;
        float32View[index + 15] = uvs.y2;
        uint32View[index + 16] = argb;
        uint32View[index + 17] = textureIdAndRound;
        float32View[index + 18] = a * w1 + c * h0 + tx;
        float32View[index + 19] = d * h0 + b * w1 + ty;
        float32View[index + 20] = uvs.x3;
        float32View[index + 21] = uvs.y3;
        uint32View[index + 22] = argb;
        uint32View[index + 23] = textureIdAndRound;
    }
    packIndex(indexBuffer, index, indicesOffset) {
        indexBuffer[index] = indicesOffset + 0;
        indexBuffer[index + 1] = indicesOffset + 1;
        indexBuffer[index + 2] = indicesOffset + 2;
        indexBuffer[index + 3] = indicesOffset + 0;
        indexBuffer[index + 4] = indicesOffset + 2;
        indexBuffer[index + 5] = indicesOffset + 3;
    }
    reset() {
        this.renderable = null;
        this.texture = null;
        this.batcher = null;
        this.batch = null;
        this.bounds = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"eKwjq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasTextSystem", ()=>CanvasTextSystem);
var _colorMjs = require("../../../color/Color.mjs");
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _pow2Mjs = require("../../../maths/misc/pow2.mjs");
var _canvasPoolMjs = require("../../../rendering/renderers/shared/texture/CanvasPool.mjs");
var _texturePoolMjs = require("../../../rendering/renderers/shared/texture/TexturePool.mjs");
var _getCanvasBoundingBoxMjs = require("../../../utils/canvas/getCanvasBoundingBox.mjs");
var _getPo2TextureFromSourceMjs = require("../utils/getPo2TextureFromSource.mjs");
var _canvasTextMetricsMjs = require("./CanvasTextMetrics.mjs");
var _fontStringFromTextStyleMjs = require("./utils/fontStringFromTextStyle.mjs");
var _getCanvasFillStyleMjs = require("./utils/getCanvasFillStyle.mjs");
"use strict";
class CanvasTextSystem {
    constructor(){
        this._activeTextures = {};
    }
    getTextureSize(text, resolution, style) {
        const measured = (0, _canvasTextMetricsMjs.CanvasTextMetrics).measureText(text || " ", style);
        let width = Math.ceil(Math.ceil(Math.max(1, measured.width) + style.padding * 2) * resolution);
        let height = Math.ceil(Math.ceil(Math.max(1, measured.height) + style.padding * 2) * resolution);
        width = Math.ceil(width - 1e-6);
        height = Math.ceil(height - 1e-6);
        width = (0, _pow2Mjs.nextPow2)(width);
        height = (0, _pow2Mjs.nextPow2)(height);
        return {
            width,
            height
        };
    }
    getTexture(text, resolution, style, textKey) {
        if (this._activeTextures[textKey]) {
            this._increaseReferenceCount(textKey);
            return this._activeTextures[textKey].texture;
        }
        const measured = (0, _canvasTextMetricsMjs.CanvasTextMetrics).measureText(text || " ", style);
        const width = Math.ceil(Math.ceil(Math.max(1, measured.width) + style.padding * 2) * resolution);
        const height = Math.ceil(Math.ceil(Math.max(1, measured.height) + style.padding * 2) * resolution);
        const canvasAndContext = (0, _canvasPoolMjs.CanvasPool).getOptimalCanvasAndContext(width, height);
        const { canvas } = canvasAndContext;
        this.renderTextToCanvas(text, style, resolution, canvasAndContext);
        const texture = (0, _getPo2TextureFromSourceMjs.getPo2TextureFromSource)(canvas, width, height, resolution);
        if (style.trim) {
            const trimmed = (0, _getCanvasBoundingBoxMjs.getCanvasBoundingBox)(canvas, resolution);
            texture.frame.copyFrom(trimmed);
            texture.updateUvs();
        }
        this._activeTextures[textKey] = {
            canvasAndContext,
            texture,
            usageCount: 1
        };
        return texture;
    }
    _increaseReferenceCount(textKey) {
        this._activeTextures[textKey].usageCount++;
    }
    decreaseReferenceCount(textKey) {
        const activeTexture = this._activeTextures[textKey];
        activeTexture.usageCount--;
        if (activeTexture.usageCount === 0) {
            (0, _canvasPoolMjs.CanvasPool).returnCanvasAndContext(activeTexture.canvasAndContext);
            (0, _texturePoolMjs.TexturePool).returnTexture(activeTexture.texture);
            const source = activeTexture.texture.source;
            source.resource = null;
            source.uploadMethodId = "unknown";
            source.alphaMode = "no-premultiply-alpha";
            this._activeTextures[textKey] = null;
        }
    }
    getReferenceCount(textKey) {
        return this._activeTextures[textKey].usageCount;
    }
    /**
   * Renders text to its canvas, and updates its texture.
   *
   * By default this is used internally to ensure the texture is correct before rendering,
   * but it can be used called externally, for example from this class to 'pre-generate' the texture from a piece of text,
   * and then shared across multiple Sprites.
   * @param text
   * @param style
   * @param resolution
   * @param canvasAndContext
   */ renderTextToCanvas(text, style, resolution, canvasAndContext) {
        const { canvas, context } = canvasAndContext;
        const font = (0, _fontStringFromTextStyleMjs.fontStringFromTextStyle)(style);
        const measured = (0, _canvasTextMetricsMjs.CanvasTextMetrics).measureText(text || " ", style);
        const lines = measured.lines;
        const lineHeight = measured.lineHeight;
        const lineWidths = measured.lineWidths;
        const maxLineWidth = measured.maxLineWidth;
        const fontProperties = measured.fontProperties;
        const height = canvas.height;
        context.resetTransform();
        context.scale(resolution, resolution);
        context.clearRect(0, 0, measured.width + 4, measured.height + 4);
        if (style._stroke?.width) {
            const strokeStyle = style._stroke;
            context.lineWidth = strokeStyle.width;
            context.miterLimit = strokeStyle.miterLimit;
            context.lineJoin = strokeStyle.join;
            context.lineCap = strokeStyle.cap;
        }
        context.font = font;
        let linePositionX;
        let linePositionY;
        const passesCount = style.dropShadow ? 2 : 1;
        for(let i = 0; i < passesCount; ++i){
            const isShadowPass = style.dropShadow && i === 0;
            const dsOffsetText = isShadowPass ? Math.ceil(Math.max(1, height) + style.padding * 2) : 0;
            const dsOffsetShadow = dsOffsetText * resolution;
            if (isShadowPass) {
                context.fillStyle = "black";
                context.strokeStyle = "black";
                const shadowOptions = style.dropShadow;
                const dropShadowColor = shadowOptions.color;
                const dropShadowAlpha = shadowOptions.alpha;
                context.shadowColor = (0, _colorMjs.Color).shared.setValue(dropShadowColor).setAlpha(dropShadowAlpha).toRgbaString();
                const dropShadowBlur = shadowOptions.blur * resolution;
                const dropShadowDistance = shadowOptions.distance * resolution;
                context.shadowBlur = dropShadowBlur;
                context.shadowOffsetX = Math.cos(shadowOptions.angle) * dropShadowDistance;
                context.shadowOffsetY = Math.sin(shadowOptions.angle) * dropShadowDistance + dsOffsetShadow;
            } else {
                context.globalAlpha = style._fill?.alpha ?? 1;
                context.fillStyle = style._fill ? (0, _getCanvasFillStyleMjs.getCanvasFillStyle)(style._fill, context) : null;
                if (style._stroke?.width) context.strokeStyle = (0, _getCanvasFillStyleMjs.getCanvasFillStyle)(style._stroke, context);
                context.shadowColor = "black";
            }
            let linePositionYShift = (lineHeight - fontProperties.fontSize) / 2;
            if (lineHeight - fontProperties.fontSize < 0) linePositionYShift = 0;
            const strokeWidth = style._stroke?.width ?? 0;
            for(let i2 = 0; i2 < lines.length; i2++){
                linePositionX = strokeWidth / 2;
                linePositionY = strokeWidth / 2 + i2 * lineHeight + fontProperties.ascent + linePositionYShift;
                if (style.align === "right") linePositionX += maxLineWidth - lineWidths[i2];
                else if (style.align === "center") linePositionX += (maxLineWidth - lineWidths[i2]) / 2;
                if (style._stroke) this._drawLetterSpacing(lines[i2], style, canvasAndContext, linePositionX + style.padding, linePositionY + style.padding - dsOffsetText, true);
                if (style._fill !== void 0) this._drawLetterSpacing(lines[i2], style, canvasAndContext, linePositionX + style.padding, linePositionY + style.padding - dsOffsetText);
            }
        }
    }
    /**
   * Render the text with letter-spacing.
   * @param text - The text to draw
   * @param style
   * @param canvasAndContext
   * @param x - Horizontal position to draw the text
   * @param y - Vertical position to draw the text
   * @param isStroke - Is this drawing for the outside stroke of the
   *  text? If not, it's for the inside fill
   */ _drawLetterSpacing(text, style, canvasAndContext, x, y, isStroke = false) {
        const { context } = canvasAndContext;
        const letterSpacing = style.letterSpacing;
        let useExperimentalLetterSpacing = false;
        if ((0, _canvasTextMetricsMjs.CanvasTextMetrics).experimentalLetterSpacingSupported) {
            if ((0, _canvasTextMetricsMjs.CanvasTextMetrics).experimentalLetterSpacing) {
                context.letterSpacing = `${letterSpacing}px`;
                context.textLetterSpacing = `${letterSpacing}px`;
                useExperimentalLetterSpacing = true;
            } else {
                context.letterSpacing = "0px";
                context.textLetterSpacing = "0px";
            }
        }
        if (letterSpacing === 0 || useExperimentalLetterSpacing) {
            if (isStroke) context.strokeText(text, x, y);
            else context.fillText(text, x, y);
            return;
        }
        let currentPosition = x;
        const stringArray = (0, _canvasTextMetricsMjs.CanvasTextMetrics).graphemeSegmenter(text);
        let previousWidth = context.measureText(text).width;
        let currentWidth = 0;
        for(let i = 0; i < stringArray.length; ++i){
            const currentChar = stringArray[i];
            if (isStroke) context.strokeText(currentChar, currentPosition, y);
            else context.fillText(currentChar, currentPosition, y);
            let textStr = "";
            for(let j = i + 1; j < stringArray.length; ++j)textStr += stringArray[j];
            currentWidth = context.measureText(textStr).width;
            currentPosition += previousWidth - currentWidth + letterSpacing;
            previousWidth = currentWidth;
        }
    }
    destroy() {
        this._activeTextures = null;
    }
}
/** @ignore */ CanvasTextSystem.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLSystem,
        (0, _extensionsMjs.ExtensionType).WebGPUSystem,
        (0, _extensionsMjs.ExtensionType).CanvasSystem
    ],
    name: "canvasText"
};

},{"../../../color/Color.mjs":"duTAI","../../../extensions/Extensions.mjs":"c8doH","../../../maths/misc/pow2.mjs":"5Ec8h","../../../rendering/renderers/shared/texture/CanvasPool.mjs":"3k1Tt","../../../rendering/renderers/shared/texture/TexturePool.mjs":"amMMm","../../../utils/canvas/getCanvasBoundingBox.mjs":"6ssfm","../utils/getPo2TextureFromSource.mjs":"fkJjC","./CanvasTextMetrics.mjs":"2DgIe","./utils/fontStringFromTextStyle.mjs":"83EXy","./utils/getCanvasFillStyle.mjs":"fJafg","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"3k1Tt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasPool", ()=>CanvasPool);
parcelHelpers.export(exports, "CanvasPoolClass", ()=>CanvasPoolClass);
var _adapterMjs = require("../../../../environment/adapter.mjs");
var _pow2Mjs = require("../../../../maths/misc/pow2.mjs");
"use strict";
class CanvasPoolClass {
    constructor(canvasOptions){
        this._canvasPool = /* @__PURE__ */ Object.create(null);
        this.canvasOptions = canvasOptions || {};
        this.enableFullScreen = false;
    }
    /**
   * Creates texture with params that were specified in pool constructor.
   * @param pixelWidth - Width of texture in pixels.
   * @param pixelHeight - Height of texture in pixels.
   */ _createCanvasAndContext(pixelWidth, pixelHeight) {
        const canvas = (0, _adapterMjs.DOMAdapter).get().createCanvas();
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
        const context = canvas.getContext("2d");
        return {
            canvas,
            context
        };
    }
    /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture.
   * @param minHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @returns The new render texture.
   */ getOptimalCanvasAndContext(minWidth, minHeight, resolution = 1) {
        minWidth = Math.ceil(minWidth * resolution - 1e-6);
        minHeight = Math.ceil(minHeight * resolution - 1e-6);
        minWidth = (0, _pow2Mjs.nextPow2)(minWidth);
        minHeight = (0, _pow2Mjs.nextPow2)(minHeight);
        const key = (minWidth << 17) + (minHeight << 1);
        if (!this._canvasPool[key]) this._canvasPool[key] = [];
        let canvasAndContext = this._canvasPool[key].pop();
        if (!canvasAndContext) canvasAndContext = this._createCanvasAndContext(minWidth, minHeight);
        return canvasAndContext;
    }
    /**
   * Place a render texture back into the pool.
   * @param canvasAndContext
   */ returnCanvasAndContext(canvasAndContext) {
        const { width, height } = canvasAndContext.canvas;
        const key = (width << 17) + (height << 1);
        this._canvasPool[key].push(canvasAndContext);
    }
    clear() {
        this._canvasPool = {};
    }
}
const CanvasPool = new CanvasPoolClass();

},{"../../../../environment/adapter.mjs":"bGyo9","../../../../maths/misc/pow2.mjs":"5Ec8h","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"amMMm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TexturePool", ()=>TexturePool);
parcelHelpers.export(exports, "TexturePoolClass", ()=>TexturePoolClass);
var _pow2Mjs = require("../../../../maths/misc/pow2.mjs");
var _textureSourceMjs = require("./sources/TextureSource.mjs");
var _textureMjs = require("./Texture.mjs");
"use strict";
let count = 0;
class TexturePoolClass {
    /**
   * @param textureOptions - options that will be passed to BaseRenderTexture constructor
   * @param {SCALE_MODE} [textureOptions.scaleMode] - See {@link SCALE_MODE} for possible values.
   */ constructor(textureOptions){
        this._poolKeyHash = /* @__PURE__ */ Object.create(null);
        this._texturePool = {};
        this.textureOptions = textureOptions || {};
        this.enableFullScreen = false;
    }
    /**
   * Creates texture with params that were specified in pool constructor.
   * @param pixelWidth - Width of texture in pixels.
   * @param pixelHeight - Height of texture in pixels.
   * @param antialias
   */ createTexture(pixelWidth, pixelHeight, antialias) {
        const textureSource = new (0, _textureSourceMjs.TextureSource)({
            ...this.textureOptions,
            width: pixelWidth,
            height: pixelHeight,
            resolution: 1,
            antialias,
            autoGarbageCollect: true
        });
        return new (0, _textureMjs.Texture)({
            source: textureSource,
            label: `texturePool_${count++}`
        });
    }
    /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param frameWidth - The minimum width of the render texture.
   * @param frameHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @param antialias
   * @returns The new render texture.
   */ getOptimalTexture(frameWidth, frameHeight, resolution = 1, antialias) {
        let po2Width = Math.ceil(frameWidth * resolution - 1e-6);
        let po2Height = Math.ceil(frameHeight * resolution - 1e-6);
        po2Width = (0, _pow2Mjs.nextPow2)(po2Width);
        po2Height = (0, _pow2Mjs.nextPow2)(po2Height);
        const key = (po2Width << 17) + (po2Height << 1) + (antialias ? 1 : 0);
        if (!this._texturePool[key]) this._texturePool[key] = [];
        let texture = this._texturePool[key].pop();
        if (!texture) texture = this.createTexture(po2Width, po2Height, antialias);
        texture.source._resolution = resolution;
        texture.source.width = po2Width / resolution;
        texture.source.height = po2Height / resolution;
        texture.source.pixelWidth = po2Width;
        texture.source.pixelHeight = po2Height;
        texture.frame.x = 0;
        texture.frame.y = 0;
        texture.frame.width = frameWidth;
        texture.frame.height = frameHeight;
        texture.updateUvs();
        this._poolKeyHash[texture.uid] = key;
        return texture;
    }
    /**
   * Gets extra texture of the same size as input renderTexture
   * @param texture - The texture to check what size it is.
   * @param antialias - Whether to use antialias.
   * @returns A texture that is a power of two
   */ getSameSizeTexture(texture, antialias = false) {
        const source = texture.source;
        return this.getOptimalTexture(texture.width, texture.height, source._resolution, antialias);
    }
    /**
   * Place a render texture back into the pool.
   * @param renderTexture - The renderTexture to free
   */ returnTexture(renderTexture) {
        const key = this._poolKeyHash[renderTexture.uid];
        this._texturePool[key].push(renderTexture);
    }
    /**
   * Clears the pool.
   * @param destroyTextures - Destroy all stored textures.
   */ clear(destroyTextures) {
        destroyTextures = destroyTextures !== false;
        if (destroyTextures) for(const i in this._texturePool){
            const textures = this._texturePool[i];
            if (textures) for(let j = 0; j < textures.length; j++)textures[j].destroy(true);
        }
        this._texturePool = {};
    }
}
const TexturePool = new TexturePoolClass();

},{"../../../../maths/misc/pow2.mjs":"5Ec8h","./sources/TextureSource.mjs":"9dqzh","./Texture.mjs":"ho7cW","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6ssfm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCanvasBoundingBox", ()=>getCanvasBoundingBox);
var _rectangleMjs = require("../../maths/shapes/Rectangle.mjs");
"use strict";
function checkRow(data, width, y) {
    for(let x = 0, index = 4 * y * width; x < width; ++x, index += 4){
        if (data[index + 3] !== 0) return false;
    }
    return true;
}
function checkColumn(data, width, x, top, bottom) {
    const stride = 4 * width;
    for(let y = top, index = top * stride + 4 * x; y <= bottom; ++y, index += stride){
        if (data[index + 3] !== 0) return false;
    }
    return true;
}
function getCanvasBoundingBox(canvas, resolution = 1) {
    const { width, height } = canvas;
    const context = canvas.getContext("2d", {
        willReadFrequently: true
    });
    if (context === null) throw new TypeError("Failed to get canvas 2D context");
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    let left = 0;
    let top = 0;
    let right = width - 1;
    let bottom = height - 1;
    while(top < height && checkRow(data, width, top))++top;
    if (top === height) return (0, _rectangleMjs.Rectangle).EMPTY;
    while(checkRow(data, width, bottom))--bottom;
    while(checkColumn(data, width, left, top, bottom))++left;
    while(checkColumn(data, width, right, top, bottom))--right;
    ++right;
    ++bottom;
    return new (0, _rectangleMjs.Rectangle)(left / resolution, top / resolution, (right - left) / resolution, (bottom - top) / resolution);
}

},{"../../maths/shapes/Rectangle.mjs":"kCPrw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fkJjC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPo2TextureFromSource", ()=>getPo2TextureFromSource);
var _texturePoolMjs = require("../../../rendering/renderers/shared/texture/TexturePool.mjs");
var _boundsMjs = require("../../container/bounds/Bounds.mjs");
"use strict";
const tempBounds = new (0, _boundsMjs.Bounds)();
function getPo2TextureFromSource(image, width, height, resolution) {
    const bounds = tempBounds;
    bounds.minX = 0;
    bounds.minY = 0;
    bounds.maxX = image.width / resolution | 0;
    bounds.maxY = image.height / resolution | 0;
    const texture = (0, _texturePoolMjs.TexturePool).getOptimalTexture(bounds.width, bounds.height, resolution, false);
    texture.source.uploadMethodId = "image";
    texture.source.resource = image;
    texture.source.alphaMode = "premultiply-alpha-on-upload";
    texture.frame.width = width / resolution;
    texture.frame.height = height / resolution;
    texture.source.emit("update", texture.source);
    texture.updateUvs();
    return texture;
}

},{"../../../rendering/renderers/shared/texture/TexturePool.mjs":"amMMm","../../container/bounds/Bounds.mjs":"2E5wx","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2DgIe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasTextMetrics", ()=>CanvasTextMetrics);
var _adapterMjs = require("../../../environment/adapter.mjs");
var _fontStringFromTextStyleMjs = require("./utils/fontStringFromTextStyle.mjs");
"use strict";
const contextSettings = {
    // TextMetrics requires getImageData readback for measuring fonts.
    willReadFrequently: true
};
const _CanvasTextMetrics = class _CanvasTextMetrics {
    /**
   * Checking that we can use modern canvas 2D API.
   *
   * Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.
   * @see TextMetrics.experimentalLetterSpacing
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ICanvasRenderingContext2D/letterSpacing
   * @see https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441
   */ static get experimentalLetterSpacingSupported() {
        let result = _CanvasTextMetrics._experimentalLetterSpacingSupported;
        if (result !== void 0) {
            const proto = (0, _adapterMjs.DOMAdapter).get().getCanvasRenderingContext2D().prototype;
            result = _CanvasTextMetrics._experimentalLetterSpacingSupported = "letterSpacing" in proto || "textLetterSpacing" in proto;
        }
        return result;
    }
    /**
   * @param text - the text that was measured
   * @param style - the style that was measured
   * @param width - the measured width of the text
   * @param height - the measured height of the text
   * @param lines - an array of the lines of text broken by new lines and wrapping if specified in style
   * @param lineWidths - an array of the line widths for each line matched to `lines`
   * @param lineHeight - the measured line height for this style
   * @param maxLineWidth - the maximum line width for all measured lines
   * @param {FontMetrics} fontProperties - the font properties object from TextMetrics.measureFont
   */ constructor(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties){
        this.text = text;
        this.style = style;
        this.width = width;
        this.height = height;
        this.lines = lines;
        this.lineWidths = lineWidths;
        this.lineHeight = lineHeight;
        this.maxLineWidth = maxLineWidth;
        this.fontProperties = fontProperties;
    }
    /**
   * Measures the supplied string of text and returns a Rectangle.
   * @param text - The text to measure.
   * @param style - The text style to use for measuring
   * @param canvas - optional specification of the canvas to use for measuring.
   * @param wordWrap
   * @returns Measured width and height of the text.
   */ static measureText(text = " ", style, canvas = _CanvasTextMetrics._canvas, wordWrap = style.wordWrap) {
        const textKey = `${text}:${style.styleKey}`;
        if (_CanvasTextMetrics._measurementCache[textKey]) return _CanvasTextMetrics._measurementCache[textKey];
        const font = (0, _fontStringFromTextStyleMjs.fontStringFromTextStyle)(style);
        const fontProperties = _CanvasTextMetrics.measureFont(font);
        if (fontProperties.fontSize === 0) {
            fontProperties.fontSize = style.fontSize;
            fontProperties.ascent = style.fontSize;
        }
        const context = _CanvasTextMetrics.__context;
        context.font = font;
        const outputText = wordWrap ? _CanvasTextMetrics._wordWrap(text, style, canvas) : text;
        const lines = outputText.split(/(?:\r\n|\r|\n)/);
        const lineWidths = new Array(lines.length);
        let maxLineWidth = 0;
        for(let i = 0; i < lines.length; i++){
            const lineWidth = _CanvasTextMetrics._measureText(lines[i], style.letterSpacing, context);
            lineWidths[i] = lineWidth;
            maxLineWidth = Math.max(maxLineWidth, lineWidth);
        }
        const strokeWidth = style._stroke?.width || 0;
        let width = maxLineWidth + strokeWidth;
        if (style.dropShadow) width += style.dropShadow.distance;
        const lineHeight = style.lineHeight || fontProperties.fontSize + strokeWidth;
        let height = Math.max(lineHeight, fontProperties.fontSize + strokeWidth * 2) + (lines.length - 1) * (lineHeight + style.leading);
        if (style.dropShadow) height += style.dropShadow.distance;
        const measurements = new _CanvasTextMetrics(text, style, width, height, lines, lineWidths, lineHeight + style.leading, maxLineWidth, fontProperties);
        return measurements;
    }
    static _measureText(text, letterSpacing, context) {
        let useExperimentalLetterSpacing = false;
        if (_CanvasTextMetrics.experimentalLetterSpacingSupported) {
            if (_CanvasTextMetrics.experimentalLetterSpacing) {
                context.letterSpacing = `${letterSpacing}px`;
                context.textLetterSpacing = `${letterSpacing}px`;
                useExperimentalLetterSpacing = true;
            } else {
                context.letterSpacing = "0px";
                context.textLetterSpacing = "0px";
            }
        }
        let width = context.measureText(text).width;
        if (width > 0) {
            if (useExperimentalLetterSpacing) width -= letterSpacing;
            else width += (_CanvasTextMetrics.graphemeSegmenter(text).length - 1) * letterSpacing;
        }
        return width;
    }
    /**
   * Applies newlines to a string to have it optimally fit into the horizontal
   * bounds set by the Text object's wordWrapWidth property.
   * @param text - String to apply word wrapping to
   * @param style - the style to use when wrapping
   * @param canvas - optional specification of the canvas to use for measuring.
   * @returns New string with new lines applied where required
   */ static _wordWrap(text, style, canvas = _CanvasTextMetrics._canvas) {
        const context = canvas.getContext("2d", contextSettings);
        let width = 0;
        let line = "";
        let lines = "";
        const cache = /* @__PURE__ */ Object.create(null);
        const { letterSpacing, whiteSpace } = style;
        const collapseSpaces = _CanvasTextMetrics._collapseSpaces(whiteSpace);
        const collapseNewlines = _CanvasTextMetrics._collapseNewlines(whiteSpace);
        let canPrependSpaces = !collapseSpaces;
        const wordWrapWidth = style.wordWrapWidth + letterSpacing;
        const tokens = _CanvasTextMetrics._tokenize(text);
        for(let i = 0; i < tokens.length; i++){
            let token = tokens[i];
            if (_CanvasTextMetrics._isNewline(token)) {
                if (!collapseNewlines) {
                    lines += _CanvasTextMetrics._addLine(line);
                    canPrependSpaces = !collapseSpaces;
                    line = "";
                    width = 0;
                    continue;
                }
                token = " ";
            }
            if (collapseSpaces) {
                const currIsBreakingSpace = _CanvasTextMetrics.isBreakingSpace(token);
                const lastIsBreakingSpace = _CanvasTextMetrics.isBreakingSpace(line[line.length - 1]);
                if (currIsBreakingSpace && lastIsBreakingSpace) continue;
            }
            const tokenWidth = _CanvasTextMetrics._getFromCache(token, letterSpacing, cache, context);
            if (tokenWidth > wordWrapWidth) {
                if (line !== "") {
                    lines += _CanvasTextMetrics._addLine(line);
                    line = "";
                    width = 0;
                }
                if (_CanvasTextMetrics.canBreakWords(token, style.breakWords)) {
                    const characters = _CanvasTextMetrics.wordWrapSplit(token);
                    for(let j = 0; j < characters.length; j++){
                        let char = characters[j];
                        let lastChar = char;
                        let k = 1;
                        while(characters[j + k]){
                            const nextChar = characters[j + k];
                            if (!_CanvasTextMetrics.canBreakChars(lastChar, nextChar, token, j, style.breakWords)) char += nextChar;
                            else break;
                            lastChar = nextChar;
                            k++;
                        }
                        j += k - 1;
                        const characterWidth = _CanvasTextMetrics._getFromCache(char, letterSpacing, cache, context);
                        if (characterWidth + width > wordWrapWidth) {
                            lines += _CanvasTextMetrics._addLine(line);
                            canPrependSpaces = false;
                            line = "";
                            width = 0;
                        }
                        line += char;
                        width += characterWidth;
                    }
                } else {
                    if (line.length > 0) {
                        lines += _CanvasTextMetrics._addLine(line);
                        line = "";
                        width = 0;
                    }
                    const isLastToken = i === tokens.length - 1;
                    lines += _CanvasTextMetrics._addLine(token, !isLastToken);
                    canPrependSpaces = false;
                    line = "";
                    width = 0;
                }
            } else {
                if (tokenWidth + width > wordWrapWidth) {
                    canPrependSpaces = false;
                    lines += _CanvasTextMetrics._addLine(line);
                    line = "";
                    width = 0;
                }
                if (line.length > 0 || !_CanvasTextMetrics.isBreakingSpace(token) || canPrependSpaces) {
                    line += token;
                    width += tokenWidth;
                }
            }
        }
        lines += _CanvasTextMetrics._addLine(line, false);
        return lines;
    }
    /**
   * Convienience function for logging each line added during the wordWrap method.
   * @param line    - The line of text to add
   * @param newLine - Add new line character to end
   * @returns A formatted line
   */ static _addLine(line, newLine = true) {
        line = _CanvasTextMetrics._trimRight(line);
        line = newLine ? `${line}
` : line;
        return line;
    }
    /**
   * Gets & sets the widths of calculated characters in a cache object
   * @param key            - The key
   * @param letterSpacing  - The letter spacing
   * @param cache          - The cache
   * @param context        - The canvas context
   * @returns The from cache.
   */ static _getFromCache(key, letterSpacing, cache, context) {
        let width = cache[key];
        if (typeof width !== "number") {
            width = _CanvasTextMetrics._measureText(key, letterSpacing, context) + letterSpacing;
            cache[key] = width;
        }
        return width;
    }
    /**
   * Determines whether we should collapse breaking spaces.
   * @param whiteSpace - The TextStyle property whiteSpace
   * @returns Should collapse
   */ static _collapseSpaces(whiteSpace) {
        return whiteSpace === "normal" || whiteSpace === "pre-line";
    }
    /**
   * Determines whether we should collapse newLine chars.
   * @param whiteSpace - The white space
   * @returns should collapse
   */ static _collapseNewlines(whiteSpace) {
        return whiteSpace === "normal";
    }
    /**
   * Trims breaking whitespaces from string.
   * @param text - The text
   * @returns Trimmed string
   */ static _trimRight(text) {
        if (typeof text !== "string") return "";
        for(let i = text.length - 1; i >= 0; i--){
            const char = text[i];
            if (!_CanvasTextMetrics.isBreakingSpace(char)) break;
            text = text.slice(0, -1);
        }
        return text;
    }
    /**
   * Determines if char is a newline.
   * @param char - The character
   * @returns True if newline, False otherwise.
   */ static _isNewline(char) {
        if (typeof char !== "string") return false;
        return _CanvasTextMetrics._newlines.includes(char.charCodeAt(0));
    }
    /**
   * Determines if char is a breaking whitespace.
   *
   * It allows one to determine whether char should be a breaking whitespace
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param char - The character
   * @param [_nextChar] - The next character
   * @returns True if whitespace, False otherwise.
   */ static isBreakingSpace(char, _nextChar) {
        if (typeof char !== "string") return false;
        return _CanvasTextMetrics._breakingSpaces.includes(char.charCodeAt(0));
    }
    /**
   * Splits a string into words, breaking-spaces and newLine characters
   * @param text - The text
   * @returns A tokenized array
   */ static _tokenize(text) {
        const tokens = [];
        let token = "";
        if (typeof text !== "string") return tokens;
        for(let i = 0; i < text.length; i++){
            const char = text[i];
            const nextChar = text[i + 1];
            if (_CanvasTextMetrics.isBreakingSpace(char, nextChar) || _CanvasTextMetrics._isNewline(char)) {
                if (token !== "") {
                    tokens.push(token);
                    token = "";
                }
                tokens.push(char);
                continue;
            }
            token += char;
        }
        if (token !== "") tokens.push(token);
        return tokens;
    }
    /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to customise which words should break
   * Examples are if the token is CJK or numbers.
   * It must return a boolean.
   * @param _token - The token
   * @param breakWords - The style attr break words
   * @returns Whether to break word or not
   */ static canBreakWords(_token, breakWords) {
        return breakWords;
    }
    /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to determine whether a pair of characters
   * should be broken by newlines
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param _char - The character
   * @param _nextChar - The next character
   * @param _token - The token/word the characters are from
   * @param _index - The index in the token of the char
   * @param _breakWords - The style attr break words
   * @returns whether to break word or not
   */ static canBreakChars(_char, _nextChar, _token, _index, _breakWords) {
        return true;
    }
    /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It is called when a token (usually a word) has to be split into separate pieces
   * in order to determine the point to break a word.
   * It must return an array of characters.
   * @param token - The token to split
   * @returns The characters of the token
   * @see CanvasTextMetrics.graphemeSegmenter
   */ static wordWrapSplit(token) {
        return _CanvasTextMetrics.graphemeSegmenter(token);
    }
    /**
   * Calculates the ascent, descent and fontSize of a given font-style
   * @param font - String representing the style of the font
   * @returns Font properties object
   */ static measureFont(font) {
        if (_CanvasTextMetrics._fonts[font]) return _CanvasTextMetrics._fonts[font];
        const context = _CanvasTextMetrics._context;
        context.font = font;
        const metrics = context.measureText(_CanvasTextMetrics.METRICS_STRING + _CanvasTextMetrics.BASELINE_SYMBOL);
        const properties = {
            ascent: metrics.actualBoundingBoxAscent,
            descent: metrics.actualBoundingBoxDescent,
            fontSize: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
        };
        _CanvasTextMetrics._fonts[font] = properties;
        return properties;
    }
    /**
   * Clear font metrics in metrics cache.
   * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
   */ static clearMetrics(font = "") {
        if (font) delete _CanvasTextMetrics._fonts[font];
        else _CanvasTextMetrics._fonts = {};
    }
    /**
   * Cached canvas element for measuring text
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */ static get _canvas() {
        if (!_CanvasTextMetrics.__canvas) {
            let canvas;
            try {
                const c = new OffscreenCanvas(0, 0);
                const context = c.getContext("2d", contextSettings);
                if (context?.measureText) {
                    _CanvasTextMetrics.__canvas = c;
                    return c;
                }
                canvas = (0, _adapterMjs.DOMAdapter).get().createCanvas();
            } catch (ex) {
                canvas = (0, _adapterMjs.DOMAdapter).get().createCanvas();
            }
            canvas.width = canvas.height = 10;
            _CanvasTextMetrics.__canvas = canvas;
        }
        return _CanvasTextMetrics.__canvas;
    }
    /**
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */ static get _context() {
        if (!_CanvasTextMetrics.__context) _CanvasTextMetrics.__context = _CanvasTextMetrics._canvas.getContext("2d", contextSettings);
        return _CanvasTextMetrics.__context;
    }
};
/**
 * String used for calculate font metrics.
 * These characters are all tall to help calculate the height required for text.
 */ _CanvasTextMetrics.METRICS_STRING = "|\xc9q\xc5";
/** Baseline symbol for calculate font metrics. */ _CanvasTextMetrics.BASELINE_SYMBOL = "M";
/** Baseline multiplier for calculate font metrics. */ _CanvasTextMetrics.BASELINE_MULTIPLIER = 1.4;
/** Height multiplier for setting height of canvas to calculate font metrics. */ _CanvasTextMetrics.HEIGHT_MULTIPLIER = 2;
/**
 * A Unicode "character", or "grapheme cluster", can be composed of multiple Unicode code points,
 * such as letters with diacritical marks (e.g. `'\u0065\u0301'`, letter e with acute)
 * or emojis with modifiers (e.g. `'\uD83E\uDDD1\u200D\uD83D\uDCBB'`, technologist).
 * The new `Intl.Segmenter` API in ES2022 can split the string into grapheme clusters correctly. If it is not available,
 * PixiJS will fallback to use the iterator of String, which can only spilt the string into code points.
 * If you want to get full functionality in environments that don't support `Intl.Segmenter` (such as Firefox),
 * you can use other libraries such as [grapheme-splitter]{@link https://www.npmjs.com/package/grapheme-splitter}
 * or [graphemer]{@link https://www.npmjs.com/package/graphemer} to create a polyfill. Since these libraries can be
 * relatively large in size to handle various Unicode grapheme clusters properly, PixiJS won't use them directly.
 */ _CanvasTextMetrics.graphemeSegmenter = (()=>{
    if (typeof Intl?.Segmenter === "function") {
        const segmenter = new Intl.Segmenter();
        return (s)=>[
                ...segmenter.segment(s)
            ].map((x)=>x.segment);
    }
    return (s)=>[
            ...s
        ];
})();
/**
 * New rendering behavior for letter-spacing which uses Chrome's new native API. This will
 * lead to more accurate letter-spacing results because it does not try to manually draw
 * each character. However, this Chrome API is experimental and may not serve all cases yet.
 * @see TextMetrics.experimentalLetterSpacingSupported
 */ _CanvasTextMetrics.experimentalLetterSpacing = false;
/** Cache of {@see TextMetrics.FontMetrics} objects. */ _CanvasTextMetrics._fonts = {};
/** Cache of new line chars. */ _CanvasTextMetrics._newlines = [
    10,
    // line feed
    13
];
/** Cache of breaking spaces. */ _CanvasTextMetrics._breakingSpaces = [
    9,
    // character tabulation
    32,
    // space
    8192,
    // en quad
    8193,
    // em quad
    8194,
    // en space
    8195,
    // em space
    8196,
    // three-per-em space
    8197,
    // four-per-em space
    8198,
    // six-per-em space
    8200,
    // punctuation space
    8201,
    // thin space
    8202,
    // hair space
    8287,
    // medium mathematical space
    12288
];
_CanvasTextMetrics._measurementCache = {};
let CanvasTextMetrics = _CanvasTextMetrics;

},{"../../../environment/adapter.mjs":"bGyo9","./utils/fontStringFromTextStyle.mjs":"83EXy","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"83EXy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fontStringFromTextStyle", ()=>fontStringFromTextStyle);
"use strict";
const genericFontFamilies = [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui"
];
function fontStringFromTextStyle(style) {
    const fontSizeString = typeof style.fontSize === "number" ? `${style.fontSize}px` : style.fontSize;
    let fontFamilies = style.fontFamily;
    if (!Array.isArray(style.fontFamily)) fontFamilies = style.fontFamily.split(",");
    for(let i = fontFamilies.length - 1; i >= 0; i--){
        let fontFamily = fontFamilies[i].trim();
        if (!/([\"\'])[^\'\"]+\1/.test(fontFamily) && !genericFontFamilies.includes(fontFamily)) fontFamily = `"${fontFamily}"`;
        fontFamilies[i] = fontFamily;
    }
    return `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${fontSizeString} ${fontFamilies.join(",")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fJafg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCanvasFillStyle", ()=>getCanvasFillStyle);
var _colorMjs = require("../../../../color/Color.mjs");
var _matrixMjs = require("../../../../maths/matrix/Matrix.mjs");
var _textureMjs = require("../../../../rendering/renderers/shared/texture/Texture.mjs");
var _warnMjs = require("../../../../utils/logging/warn.mjs");
var _fillGradientMjs = require("../../../graphics/shared/fill/FillGradient.mjs");
var _fillPatternMjs = require("../../../graphics/shared/fill/FillPattern.mjs");
"use strict";
function getCanvasFillStyle(fillStyle, context) {
    if (fillStyle.texture === (0, _textureMjs.Texture).WHITE && !fillStyle.fill) return (0, _colorMjs.Color).shared.setValue(fillStyle.color).toHex();
    else if (!fillStyle.fill) {
        const pattern = context.createPattern(fillStyle.texture.source.resource, "repeat");
        const tempMatrix = fillStyle.matrix.copyTo((0, _matrixMjs.Matrix).shared);
        tempMatrix.scale(fillStyle.texture.frame.width, fillStyle.texture.frame.height);
        pattern.setTransform(tempMatrix);
        return pattern;
    } else if (fillStyle.fill instanceof (0, _fillPatternMjs.FillPattern)) {
        const fillPattern = fillStyle.fill;
        const pattern = context.createPattern(fillPattern.texture.source.resource, "repeat");
        const tempMatrix = fillPattern.transform.copyTo((0, _matrixMjs.Matrix).shared);
        tempMatrix.scale(fillPattern.texture.frame.width, fillPattern.texture.frame.height);
        pattern.setTransform(tempMatrix);
        return pattern;
    } else if (fillStyle.fill instanceof (0, _fillGradientMjs.FillGradient)) {
        const fillGradient = fillStyle.fill;
        if (fillGradient.type === "linear") {
            const gradient = context.createLinearGradient(fillGradient.x0, fillGradient.y0, fillGradient.x1, fillGradient.y1);
            fillGradient.gradientStops.forEach((stop)=>{
                gradient.addColorStop(stop.offset, (0, _colorMjs.Color).shared.setValue(stop.color).toHex());
            });
            return gradient;
        }
    }
    (0, _warnMjs.warn)("FillStyle not recognised", fillStyle);
    return "red";
}

},{"../../../../color/Color.mjs":"duTAI","../../../../maths/matrix/Matrix.mjs":"kpkIt","../../../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../../../../utils/logging/warn.mjs":"gCz01","../../../graphics/shared/fill/FillGradient.mjs":"krBtw","../../../graphics/shared/fill/FillPattern.mjs":"jyYgN","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"krBtw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FillGradient", ()=>FillGradient);
var _colorMjs = require("../../../../color/Color.mjs");
var _adapterMjs = require("../../../../environment/adapter.mjs");
var _matrixMjs = require("../../../../maths/matrix/Matrix.mjs");
var _imageSourceMjs = require("../../../../rendering/renderers/shared/texture/sources/ImageSource.mjs");
var _textureMjs = require("../../../../rendering/renderers/shared/texture/Texture.mjs");
var _uidMjs = require("../../../../utils/data/uid.mjs");
"use strict";
const _FillGradient = class _FillGradient {
    constructor(x0, y0, x1, y1){
        this.uid = (0, _uidMjs.uid)("fillGradient");
        this.type = "linear";
        this.gradientStops = [];
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
    }
    addColorStop(offset, color) {
        this.gradientStops.push({
            offset,
            color: (0, _colorMjs.Color).shared.setValue(color).toHex()
        });
        return this;
    }
    // TODO move to the system!
    buildLinearGradient() {
        const defaultSize = _FillGradient.defaultTextureSize;
        const { gradientStops } = this;
        const canvas = (0, _adapterMjs.DOMAdapter).get().createCanvas();
        canvas.width = defaultSize;
        canvas.height = defaultSize;
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, _FillGradient.defaultTextureSize, 1);
        for(let i = 0; i < gradientStops.length; i++){
            const stop = gradientStops[i];
            gradient.addColorStop(stop.offset, stop.color);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, defaultSize, defaultSize);
        this.texture = new (0, _textureMjs.Texture)({
            source: new (0, _imageSourceMjs.ImageSource)({
                resource: canvas,
                addressModeU: "clamp-to-edge",
                addressModeV: "repeat"
            })
        });
        const { x0, y0, x1, y1 } = this;
        const m = new (0, _matrixMjs.Matrix)();
        const dx = x1 - x0;
        const dy = y1 - y0;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        m.translate(-x0, -y0);
        m.scale(1 / defaultSize, 1 / defaultSize);
        m.rotate(-angle);
        m.scale(256 / dist, 1);
        this.transform = m;
    }
};
_FillGradient.defaultTextureSize = 256;
let FillGradient = _FillGradient;

},{"../../../../color/Color.mjs":"duTAI","../../../../environment/adapter.mjs":"bGyo9","../../../../maths/matrix/Matrix.mjs":"kpkIt","../../../../rendering/renderers/shared/texture/sources/ImageSource.mjs":"iTPK0","../../../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../../../../utils/data/uid.mjs":"2iBho","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jyYgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FillPattern", ()=>FillPattern);
var _matrixMjs = require("../../../../maths/matrix/Matrix.mjs");
var _uidMjs = require("../../../../utils/data/uid.mjs");
"use strict";
const repetitionMap = {
    repeat: {
        addressModeU: "repeat",
        addressModeV: "repeat"
    },
    "repeat-x": {
        addressModeU: "repeat",
        addressModeV: "clamp-to-edge"
    },
    "repeat-y": {
        addressModeU: "clamp-to-edge",
        addressModeV: "repeat"
    },
    "no-repeat": {
        addressModeU: "clamp-to-edge",
        addressModeV: "clamp-to-edge"
    }
};
class FillPattern {
    constructor(texture, repetition){
        this.uid = (0, _uidMjs.uid)("fillPattern");
        this.transform = new (0, _matrixMjs.Matrix)();
        this.texture = texture;
        this.transform.scale(1 / texture.frame.width, 1 / texture.frame.height);
        if (repetition) {
            texture.source.style.addressModeU = repetitionMap[repetition].addressModeU;
            texture.source.style.addressModeV = repetitionMap[repetition].addressModeV;
        }
    }
    setTransform(transform) {
        const texture = this.texture;
        this.transform.copyFrom(transform);
        this.transform.invert();
        this.transform.scale(1 / texture.frame.width, 1 / texture.frame.height);
    }
}

},{"../../../../maths/matrix/Matrix.mjs":"kpkIt","../../../../utils/data/uid.mjs":"2iBho","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"03Yq9":[function(require,module,exports) {
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _loadBitmapFontMjs = require("./asset/loadBitmapFont.mjs");
var _bitmapTextPipeMjs = require("./BitmapTextPipe.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _bitmapTextPipeMjs.BitmapTextPipe), (0, _loadBitmapFontMjs.loadBitmapFont), (0, _loadBitmapFontMjs.bitmapFontCachePlugin));

},{"../../extensions/Extensions.mjs":"c8doH","./asset/loadBitmapFont.mjs":"36C8m","./BitmapTextPipe.mjs":"fmMCP"}],"36C8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bitmapFontCachePlugin", ()=>bitmapFontCachePlugin);
parcelHelpers.export(exports, "loadBitmapFont", ()=>loadBitmapFont);
var _loaderParserMjs = require("../../../assets/loader/parsers/LoaderParser.mjs");
var _copySearchParamsMjs = require("../../../assets/utils/copySearchParams.mjs");
var _adapterMjs = require("../../../environment/adapter.mjs");
var _extensionsMjs = require("../../../extensions/Extensions.mjs");
var _pathMjs = require("../../../utils/path.mjs");
var _bitmapFontMjs = require("../BitmapFont.mjs");
var _bitmapFontTextParserMjs = require("./bitmapFontTextParser.mjs");
var _bitmapFontXMLStringParserMjs = require("./bitmapFontXMLStringParser.mjs");
"use strict";
const validExtensions = [
    ".xml",
    ".fnt"
];
const bitmapFontCachePlugin = {
    extension: (0, _extensionsMjs.ExtensionType).CacheParser,
    test: (asset)=>asset instanceof (0, _bitmapFontMjs.BitmapFont),
    getCacheableAssets (keys, asset) {
        const out = {};
        keys.forEach((key)=>{
            out[key] = asset;
        });
        out[`${asset.fontFamily}-bitmap`] = asset;
        return out;
    }
};
const loadBitmapFont = {
    extension: {
        type: (0, _extensionsMjs.ExtensionType).LoadParser,
        priority: (0, _loaderParserMjs.LoaderParserPriority).Normal
    },
    test (url) {
        return validExtensions.includes((0, _pathMjs.path).extname(url).toLowerCase());
    },
    async testParse (data) {
        return (0, _bitmapFontTextParserMjs.bitmapFontTextParser).test(data) || (0, _bitmapFontXMLStringParserMjs.bitmapFontXMLStringParser).test(data);
    },
    async parse (asset, data, loader) {
        const bitmapFontData = (0, _bitmapFontTextParserMjs.bitmapFontTextParser).test(asset) ? (0, _bitmapFontTextParserMjs.bitmapFontTextParser).parse(asset) : (0, _bitmapFontXMLStringParserMjs.bitmapFontXMLStringParser).parse(asset);
        const { src } = data;
        const { pages } = bitmapFontData;
        const textureUrls = [];
        for(let i = 0; i < pages.length; ++i){
            const pageFile = pages[i].file;
            let imagePath = (0, _pathMjs.path).join((0, _pathMjs.path).dirname(src), pageFile);
            imagePath = (0, _copySearchParamsMjs.copySearchParams)(imagePath, src);
            textureUrls.push(imagePath);
        }
        const loadedTextures = await loader.load(textureUrls);
        const textures = textureUrls.map((url)=>loadedTextures[url]);
        const bitmapFont = new (0, _bitmapFontMjs.BitmapFont)({
            data: bitmapFontData,
            textures
        }, src);
        return bitmapFont;
    },
    async load (url, _options) {
        const response = await (0, _adapterMjs.DOMAdapter).get().fetch(url);
        return await response.text();
    },
    async unload (bitmapFont, _resolvedAsset, loader) {
        await Promise.all(bitmapFont.pages.map((page)=>loader.unload(page.texture.source._sourceOrigin)));
        bitmapFont.destroy();
    }
};

},{"../../../assets/loader/parsers/LoaderParser.mjs":"fmW7w","../../../assets/utils/copySearchParams.mjs":"jgkwF","../../../environment/adapter.mjs":"bGyo9","../../../extensions/Extensions.mjs":"c8doH","../../../utils/path.mjs":"fneYW","../BitmapFont.mjs":"fslrj","./bitmapFontTextParser.mjs":"4KIQ3","./bitmapFontXMLStringParser.mjs":"ewcsn","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fslrj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BitmapFont", ()=>BitmapFont);
var _rectangleMjs = require("../../maths/shapes/Rectangle.mjs");
var _textureMjs = require("../../rendering/renderers/shared/texture/Texture.mjs");
var _abstractBitmapFontMjs = require("./AbstractBitmapFont.mjs");
var _bitmapFontManagerMjs = require("./BitmapFontManager.mjs");
"use strict";
class BitmapFont extends (0, _abstractBitmapFontMjs.AbstractBitmapFont) {
    constructor(options, url){
        super();
        const { textures, data } = options;
        Object.keys(data.pages).forEach((key)=>{
            const pageData = data.pages[parseInt(key, 10)];
            const texture = textures[pageData.id];
            this.pages.push({
                texture
            });
        });
        Object.keys(data.chars).forEach((key)=>{
            const charData = data.chars[key];
            const textureSource = textures[charData.page].source;
            const frameReal = new (0, _rectangleMjs.Rectangle)(charData.x, charData.y, charData.width, charData.height);
            const texture = new (0, _textureMjs.Texture)({
                source: textureSource,
                frame: frameReal
            });
            this.chars[key] = {
                id: key.codePointAt(0),
                xOffset: charData.xOffset,
                yOffset: charData.yOffset,
                xAdvance: charData.xAdvance,
                kerning: charData.kerning ?? {},
                texture
            };
        });
        this.baseRenderedFontSize = data.fontSize;
        this.baseMeasurementFontSize = data.fontSize;
        this.fontMetrics = {
            ascent: 0,
            descent: 0,
            fontSize: data.fontSize
        };
        this.baseLineOffset = data.baseLineOffset;
        this.lineHeight = data.lineHeight;
        this.fontFamily = data.fontFamily;
        this.distanceField = data.distanceField ?? {
            type: "none",
            range: 0
        };
        this.url = url;
    }
    /** Destroys the BitmapFont object. */ destroy() {
        super.destroy();
        for(let i = 0; i < this.pages.length; i++){
            const { texture } = this.pages[i];
            texture.destroy(true);
        }
        this.pages = null;
    }
    /**
   * Generates a bitmap-font for the given style and character set
   * @param options - Setup options for font generation.
   * @returns Font generated by style options.
   * @example
   * import { BitmapFont, BitmapText } from 'pixi.js';
   *
   * BitmapFont.install('TitleFont', {
   *     fontFamily: 'Arial',
   *     fontSize: 12,
   *     strokeThickness: 2,
   *     fill: 'purple',
   * });
   *
   * const title = new BitmapText({ text: 'This is the title', fontFamily: 'TitleFont' });
   */ static install(options) {
        (0, _bitmapFontManagerMjs.BitmapFontManager).install(options);
    }
    /**
   * Uninstalls a bitmap font from the cache.
   * @param {string} name - The name of the bitmap font to uninstall.
   */ static uninstall(name) {
        (0, _bitmapFontManagerMjs.BitmapFontManager).uninstall(name);
    }
}

},{"../../maths/shapes/Rectangle.mjs":"kCPrw","../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","./AbstractBitmapFont.mjs":"jssze","./BitmapFontManager.mjs":"1PiJJ","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jssze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractBitmapFont", ()=>AbstractBitmapFont);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _deprecationMjs = require("../../utils/logging/deprecation.mjs");
"use strict";
class AbstractBitmapFont extends (0, _eventemitter3Default.default) {
    constructor(){
        super(...arguments);
        /** The map of characters by character code. */ this.chars = /* @__PURE__ */ Object.create(null);
        /**
     * The line-height of the font face in pixels.
     * @type {number}
     */ this.lineHeight = 0;
        /**
     * The name of the font face
     * @type {string}
     */ this.fontFamily = "";
        /** The metrics of the font face. */ this.fontMetrics = {
            fontSize: 0,
            ascent: 0,
            descent: 0
        };
        /**
     * The offset of the font face from the baseline.
     * @type {number}
     */ this.baseLineOffset = 0;
        /** The range and type of the distance field for this font. */ this.distanceField = {
            type: "none",
            range: 0
        };
        /** The map of base page textures (i.e., sheets of glyphs). */ this.pages = [];
        /** The size of the font face in pixels. */ this.baseMeasurementFontSize = 100;
        this.baseRenderedFontSize = 100;
    }
    /**
   * The name of the font face.
   * @deprecated since 8.0.0 Use `fontFamily` instead.
   */ get font() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead.");
        return this.fontFamily;
    }
    /**
   * The map of base page textures (i.e., sheets of glyphs).
   * @deprecated since 8.0.0 Use `pages` instead.
   */ get pageTextures() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.");
        return this.pages;
    }
    /**
   * The size of the font face in pixels.
   * @deprecated since 8.0.0 Use `fontMetrics.fontSize` instead.
   */ get size() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead.");
        return this.fontMetrics.fontSize;
    }
    /**
   * The kind of distance field for this font or "none".
   * @deprecated since 8.0.0 Use `distanceField.type` instead.
   */ get distanceFieldRange() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead.");
        return this.distanceField.range;
    }
    /**
   * The range of the distance field in pixels.
   * @deprecated since 8.0.0 Use `distanceField.range` instead.
   */ get distanceFieldType() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead.");
        return this.distanceField.type;
    }
    destroy(destroyTextures = false) {
        this.emit("destroy", this);
        this.removeAllListeners();
        for(const i in this.chars)this.chars[i].texture.destroy();
        this.chars = null;
        if (destroyTextures) {
            this.pages.forEach((page)=>page.texture.destroy(true));
            this.pages = null;
        }
    }
}

},{"eventemitter3":"enSRh","../../utils/logging/deprecation.mjs":"axL6x","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1PiJJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BitmapFontManager", ()=>BitmapFontManager);
var _cacheMjs = require("../../assets/cache/Cache.mjs");
var _deprecationMjs = require("../../utils/logging/deprecation.mjs");
var _textStyleMjs = require("../text/TextStyle.mjs");
var _dynamicBitmapFontMjs = require("./DynamicBitmapFont.mjs");
var _getBitmapTextLayoutMjs = require("./utils/getBitmapTextLayout.mjs");
var _resolveCharactersMjs = require("./utils/resolveCharacters.mjs");
"use strict";
class BitmapFontManagerClass {
    constructor(){
        /**
     * This character set includes all the letters in the alphabet (both lower- and upper- case).
     * @type {string[][]}
     * @example
     * BitmapFont.from('ExampleFont', style, { chars: BitmapFont.ALPHA })
     */ this.ALPHA = [
            [
                "a",
                "z"
            ],
            [
                "A",
                "Z"
            ],
            " "
        ];
        /**
     * This character set includes all decimal digits (from 0 to 9).
     * @type {string[][]}
     * @example
     * BitmapFont.from('ExampleFont', style, { chars: BitmapFont.NUMERIC })
     */ this.NUMERIC = [
            [
                "0",
                "9"
            ]
        ];
        /**
     * This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.
     * @type {string[][]}
     */ this.ALPHANUMERIC = [
            [
                "a",
                "z"
            ],
            [
                "A",
                "Z"
            ],
            [
                "0",
                "9"
            ],
            " "
        ];
        /**
     * This character set consists of all the ASCII table.
     * @member {string[][]}
     * @see http://www.asciitable.com/
     */ this.ASCII = [
            [
                " ",
                "~"
            ]
        ];
        /** Default options for installing a new BitmapFont. */ this.defaultOptions = {
            chars: this.ALPHANUMERIC,
            resolution: 1,
            padding: 4,
            skipKerning: false
        };
    }
    /**
   * Get a font for the specified text and style.
   * @param text - The text to get the font for
   * @param style - The style to use
   */ getFont(text, style) {
        let fontFamilyKey = `${style.fontFamily}-bitmap`;
        let overrideFill = true;
        if (style._fill.fill) {
            fontFamilyKey += style._fill.fill.uid;
            overrideFill = false;
        }
        if (!(0, _cacheMjs.Cache).has(fontFamilyKey)) {
            const fnt = new (0, _dynamicBitmapFontMjs.DynamicBitmapFont)({
                style,
                overrideFill,
                overrideSize: true,
                ...this.defaultOptions
            });
            fnt.once("destroy", ()=>(0, _cacheMjs.Cache).remove(fontFamilyKey));
            (0, _cacheMjs.Cache).set(fontFamilyKey, fnt);
        }
        const dynamicFont = (0, _cacheMjs.Cache).get(fontFamilyKey);
        dynamicFont.ensureCharacters?.(text);
        return dynamicFont;
    }
    /**
   * Get the layout of a text for the specified style.
   * @param text - The text to get the layout for
   * @param style - The style to use
   */ getLayout(text, style) {
        const bitmapFont = this.getFont(text, style);
        return (0, _getBitmapTextLayoutMjs.getBitmapTextLayout)(text.split(""), style, bitmapFont);
    }
    /**
   * Measure the text using the specified style.
   * @param text - The text to measure
   * @param style - The style to use
   */ measureText(text, style) {
        return this.getLayout(text, style);
    }
    // eslint-disable-next-line max-len
    install(...args) {
        let options = args[0];
        if (typeof options === "string") {
            options = {
                name: options,
                style: args[1],
                chars: args[2]?.chars,
                resolution: args[2]?.resolution,
                padding: args[2]?.padding,
                skipKerning: args[2]?.skipKerning
            };
            (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})");
        }
        const name = options?.name;
        if (!name) throw new Error("[BitmapFontManager] Property `name` is required.");
        options = {
            ...this.defaultOptions,
            ...options
        };
        const textStyle = options.style;
        const style = textStyle instanceof (0, _textStyleMjs.TextStyle) ? textStyle : new (0, _textStyleMjs.TextStyle)(textStyle);
        const overrideFill = style._fill.fill !== null && style._fill.fill !== void 0;
        const font = new (0, _dynamicBitmapFontMjs.DynamicBitmapFont)({
            style,
            overrideFill,
            skipKerning: options.skipKerning,
            padding: options.padding,
            resolution: options.resolution,
            overrideSize: false
        });
        const flatChars = (0, _resolveCharactersMjs.resolveCharacters)(options.chars);
        font.ensureCharacters(flatChars.join(""));
        (0, _cacheMjs.Cache).set(`${name}-bitmap`, font);
        font.once("destroy", ()=>(0, _cacheMjs.Cache).remove(`${name}-bitmap`));
        return font;
    }
    /**
   * Uninstalls a bitmap font from the cache.
   * @param {string} name - The name of the bitmap font to uninstall.
   */ uninstall(name) {
        const cacheKey = `${name}-bitmap`;
        const font = (0, _cacheMjs.Cache).get(cacheKey);
        if (font) {
            (0, _cacheMjs.Cache).remove(cacheKey);
            font.destroy();
        }
    }
}
const BitmapFontManager = new BitmapFontManagerClass();

},{"../../assets/cache/Cache.mjs":"auo1K","../../utils/logging/deprecation.mjs":"axL6x","../text/TextStyle.mjs":"fGfmW","./DynamicBitmapFont.mjs":"bl7hs","./utils/getBitmapTextLayout.mjs":"gt2JK","./utils/resolveCharacters.mjs":"cLO7D","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fGfmW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextStyle", ()=>TextStyle);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _colorMjs = require("../../color/Color.mjs");
var _deprecationMjs = require("../../utils/logging/deprecation.mjs");
var _fillGradientMjs = require("../graphics/shared/fill/FillGradient.mjs");
var _graphicsContextMjs = require("../graphics/shared/GraphicsContext.mjs");
var _convertFillInputToFillStyleMjs = require("../graphics/shared/utils/convertFillInputToFillStyle.mjs");
var _generateTextStyleKeyMjs = require("./utils/generateTextStyleKey.mjs");
"use strict";
const _TextStyle = class _TextStyle extends (0, _eventemitter3Default.default) {
    constructor(style = {}){
        super();
        convertV7Tov8Style(style);
        const fullStyle = {
            ..._TextStyle.defaultTextStyle,
            ...style
        };
        for(const key in fullStyle){
            const thisKey = key;
            this[thisKey] = fullStyle[key];
        }
        this.update();
    }
    /**
   * Alignment for multiline text, does not affect single line text.
   * @member {'left'|'center'|'right'|'justify'}
   */ get align() {
        return this._align;
    }
    set align(value) {
        this._align = value;
        this.update();
    }
    /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */ get breakWords() {
        return this._breakWords;
    }
    set breakWords(value) {
        this._breakWords = value;
        this.update();
    }
    /** Set a drop shadow for the text. */ get dropShadow() {
        return this._dropShadow;
    }
    set dropShadow(value) {
        if (value !== null && typeof value === "object") this._dropShadow = {
            ..._TextStyle.defaultDropShadow,
            ...value
        };
        else this._dropShadow = value ? {
            ..._TextStyle.defaultDropShadow
        } : null;
        this.update();
    }
    /** The font family, can be a single font name, or a list of names where the first is the preferred font. */ get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value) {
        this._fontFamily = value;
        this.update();
    }
    /** The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em') */ get fontSize() {
        return this._fontSize;
    }
    set fontSize(value) {
        if (typeof value === "string") this._fontSize = parseInt(value, 10);
        else this._fontSize = value;
        this.update();
    }
    /**
   * The font style.
   * @member {'normal'|'italic'|'oblique'}
   */ get fontStyle() {
        return this._fontStyle;
    }
    set fontStyle(value) {
        this._fontStyle = value;
        this.update();
    }
    /**
   * The font variant.
   * @member {'normal'|'small-caps'}
   */ get fontVariant() {
        return this._fontVariant;
    }
    set fontVariant(value) {
        this._fontVariant = value;
        this.update();
    }
    /**
   * The font weight.
   * @member {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
   */ get fontWeight() {
        return this._fontWeight;
    }
    set fontWeight(value) {
        this._fontWeight = value;
        this.update();
    }
    /** The space between lines. */ get leading() {
        return this._leading;
    }
    set leading(value) {
        this._leading = value;
        this.update();
    }
    /** The amount of spacing between letters, default is 0. */ get letterSpacing() {
        return this._letterSpacing;
    }
    set letterSpacing(value) {
        this._letterSpacing = value;
        this.update();
    }
    /** The line height, a number that represents the vertical space that a letter uses. */ get lineHeight() {
        return this._lineHeight;
    }
    set lineHeight(value) {
        this._lineHeight = value;
        this.update();
    }
    /**
   * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
   * by adding padding to all sides of the text.
   */ get padding() {
        return this._padding;
    }
    set padding(value) {
        this._padding = value;
        this.update();
    }
    /** Trim transparent borders. This is an expensive operation so only use this if you have to! */ get trim() {
        return this._trim;
    }
    set trim(value) {
        this._trim = value;
        this.update();
    }
    /**
   * The baseline of the text that is rendered.
   * @member {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
   */ get textBaseline() {
        return this._textBaseline;
    }
    set textBaseline(value) {
        this._textBaseline = value;
        this.update();
    }
    /**
   * How newlines and spaces should be handled.
   * Default is 'pre' (preserve, preserve).
   *
   *  value       | New lines     |   Spaces
   *  ---         | ---           |   ---
   * 'normal'     | Collapse      |   Collapse
   * 'pre'        | Preserve      |   Preserve
   * 'pre-line'   | Preserve      |   Collapse
   * @member {'normal'|'pre'|'pre-line'}
   */ get whiteSpace() {
        return this._whiteSpace;
    }
    set whiteSpace(value) {
        this._whiteSpace = value;
        this.update();
    }
    /** Indicates if word wrap should be used. */ get wordWrap() {
        return this._wordWrap;
    }
    set wordWrap(value) {
        this._wordWrap = value;
        this.update();
    }
    /** The width at which text will wrap, it needs wordWrap to be set to true. */ get wordWrapWidth() {
        return this._wordWrapWidth;
    }
    set wordWrapWidth(value) {
        this._wordWrapWidth = value;
        this.update();
    }
    /** A fillstyle that will be used on the text e.g., 'red', '#00FF00'. */ get fill() {
        return this._originalFill;
    }
    set fill(value) {
        if (value === this._originalFill) return;
        this._originalFill = value;
        this._fill = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(value === 0 ? "black" : value, (0, _graphicsContextMjs.GraphicsContext).defaultFillStyle);
        this.update();
    }
    /** A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'. */ get stroke() {
        return this._originalStroke;
    }
    set stroke(value) {
        if (value === this._originalStroke) return;
        this._originalStroke = value;
        this._stroke = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(value, (0, _graphicsContextMjs.GraphicsContext).defaultStrokeStyle);
        this.update();
    }
    _generateKey() {
        this._styleKey = (0, _generateTextStyleKeyMjs.generateTextStyleKey)(this);
        return this._styleKey;
    }
    update() {
        this._styleKey = null;
        this.emit("update", this);
    }
    /** Resets all properties to the default values */ reset() {
        const defaultStyle = _TextStyle.defaultTextStyle;
        for(const key in defaultStyle)this[key] = defaultStyle[key];
    }
    get styleKey() {
        return this._styleKey || this._generateKey();
    }
    /**
   * Creates a new TextStyle object with the same values as this one.
   * @returns New cloned TextStyle object
   */ clone() {
        return new _TextStyle({
            align: this.align,
            breakWords: this.breakWords,
            dropShadow: this.dropShadow,
            fill: this._fill,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            fontStyle: this.fontStyle,
            fontVariant: this.fontVariant,
            fontWeight: this.fontWeight,
            leading: this.leading,
            letterSpacing: this.letterSpacing,
            lineHeight: this.lineHeight,
            padding: this.padding,
            stroke: this._stroke,
            textBaseline: this.textBaseline,
            whiteSpace: this.whiteSpace,
            wordWrap: this.wordWrap,
            wordWrapWidth: this.wordWrapWidth
        });
    }
    /**
   * Destroys this text style.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the texture of the this style
   * @param {boolean} [options.textureSource=false] - Should it destroy the textureSource of the this style
   */ destroy(options = false) {
        this.removeAllListeners();
        const destroyTexture = typeof options === "boolean" ? options : options?.texture;
        if (destroyTexture) {
            const destroyTextureSource = typeof options === "boolean" ? options : options?.textureSource;
            if (this._fill?.texture) this._fill.texture.destroy(destroyTextureSource);
            if (this._originalFill?.texture) this._originalFill.texture.destroy(destroyTextureSource);
            if (this._stroke?.texture) this._stroke.texture.destroy(destroyTextureSource);
            if (this._originalStroke?.texture) this._originalStroke.texture.destroy(destroyTextureSource);
        }
        this._fill = null;
        this._stroke = null;
        this.dropShadow = null;
        this._originalStroke = null;
        this._originalFill = null;
    }
};
/** The default drop shadow settings */ _TextStyle.defaultDropShadow = {
    /** Set alpha for the drop shadow */ alpha: 1,
    /** Set a angle of the drop shadow */ angle: Math.PI / 6,
    /** Set a shadow blur radius */ blur: 0,
    /** A fill style to be used on the  e.g., 'red', '#00FF00' */ color: "black",
    /** Set a distance of the drop shadow */ distance: 5
};
/** The default text style settings */ _TextStyle.defaultTextStyle = {
    /**
   * See {@link TextStyle.align}
   * @type {'left'|'center'|'right'|'justify'}
   */ align: "left",
    /** See {@link TextStyle.breakWords} */ breakWords: false,
    /** See {@link TextStyle.dropShadow} */ dropShadow: null,
    /**
   * See {@link TextStyle.fill}
   * @type {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
   */ fill: "black",
    /**
   * See {@link TextStyle.fontFamily}
   * @type {string|string[]}
   */ fontFamily: "Arial",
    /**
   * See {@link TextStyle.fontSize}
   * @type {number|string}
   */ fontSize: 26,
    /**
   * See {@link TextStyle.fontStyle}
   * @type {'normal'|'italic'|'oblique'}
   */ fontStyle: "normal",
    /**
   * See {@link TextStyle.fontVariant}
   * @type {'normal'|'small-caps'}
   */ fontVariant: "normal",
    /**
   * See {@link TextStyle.fontWeight}
   * @type {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
   */ fontWeight: "normal",
    /** See {@link TextStyle.leading} */ leading: 0,
    /** See {@link TextStyle.letterSpacing} */ letterSpacing: 0,
    /** See {@link TextStyle.lineHeight} */ lineHeight: 0,
    /** See {@link TextStyle.padding} */ padding: 0,
    /**
   * See {@link TextStyle.stroke}
   * @type {string|number}
   */ stroke: null,
    /**
   * See {@link TextStyle.textBaseline}
   * @type {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
   */ textBaseline: "alphabetic",
    /** See {@link TextStyle.trim} */ trim: false,
    /**
   * See {@link TextStyle.whiteSpace}
   * @type {'normal'|'pre'|'pre-line'}
   */ whiteSpace: "pre",
    /** See {@link TextStyle.wordWrap} */ wordWrap: false,
    /** See {@link TextStyle.wordWrapWidth} */ wordWrapWidth: 100
};
let TextStyle = _TextStyle;
function convertV7Tov8Style(style) {
    const oldStyle = style;
    if (typeof oldStyle.dropShadow === "boolean" && oldStyle.dropShadow) {
        const defaults = TextStyle.defaultDropShadow;
        style.dropShadow = {
            alpha: oldStyle.dropShadowAlpha ?? defaults.alpha,
            angle: oldStyle.dropShadowAngle ?? defaults.angle,
            blur: oldStyle.dropShadowBlur ?? defaults.blur,
            color: oldStyle.dropShadowColor ?? defaults.color,
            distance: oldStyle.dropShadowDistance ?? defaults.distance
        };
    }
    if (oldStyle.strokeThickness) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "strokeThickness is now a part of stroke");
        const color = oldStyle.stroke;
        style.stroke = {
            color,
            width: oldStyle.strokeThickness
        };
    }
    if (Array.isArray(oldStyle.fill)) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "gradient fill is now a fill pattern: `new FillGradient(...)`");
        const gradientFill = new (0, _fillGradientMjs.FillGradient)(0, 0, 0, style.fontSize * 1.7);
        const fills = oldStyle.fill.map((color)=>(0, _colorMjs.Color).shared.setValue(color).toNumber());
        fills.forEach((number, index)=>{
            const ratio = oldStyle.fillGradientStops[index] ?? index / fills.length;
            gradientFill.addColorStop(ratio, number);
        });
        style.fill = {
            fill: gradientFill
        };
    }
}

},{"eventemitter3":"enSRh","../../color/Color.mjs":"duTAI","../../utils/logging/deprecation.mjs":"axL6x","../graphics/shared/fill/FillGradient.mjs":"krBtw","../graphics/shared/GraphicsContext.mjs":"hWAwh","../graphics/shared/utils/convertFillInputToFillStyle.mjs":"8QzKs","./utils/generateTextStyleKey.mjs":"cH0HL","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"hWAwh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphicsContext", ()=>GraphicsContext);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _colorMjs = require("../../../color/Color.mjs");
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _pointMjs = require("../../../maths/point/Point.mjs");
var _textureMjs = require("../../../rendering/renderers/shared/texture/Texture.mjs");
var _uidMjs = require("../../../utils/data/uid.mjs");
var _deprecationMjs = require("../../../utils/logging/deprecation.mjs");
var _boundsMjs = require("../../container/bounds/Bounds.mjs");
var _graphicsPathMjs = require("./path/GraphicsPath.mjs");
var _svgparserMjs = require("./svg/SVGParser.mjs");
var _convertFillInputToFillStyleMjs = require("./utils/convertFillInputToFillStyle.mjs");
"use strict";
const tmpPoint = new (0, _pointMjs.Point)();
const tempMatrix = new (0, _matrixMjs.Matrix)();
const _GraphicsContext = class _GraphicsContext extends (0, _eventemitter3Default.default) {
    constructor(){
        super(...arguments);
        this.uid = (0, _uidMjs.uid)("graphicsContext");
        this.dirty = true;
        this.batchMode = "auto";
        this.instructions = [];
        this._activePath = new (0, _graphicsPathMjs.GraphicsPath)();
        this._transform = new (0, _matrixMjs.Matrix)();
        this._fillStyle = {
            ..._GraphicsContext.defaultFillStyle
        };
        this._strokeStyle = {
            ..._GraphicsContext.defaultStrokeStyle
        };
        this._stateStack = [];
        this._tick = 0;
        this._bounds = new (0, _boundsMjs.Bounds)();
        this._boundsDirty = true;
    }
    /**
   * Creates a new GraphicsContext object that is a clone of this instance, copying all properties,
   * including the current drawing state, transformations, styles, and instructions.
   * @returns A new GraphicsContext instance with the same properties and state as this one.
   */ clone() {
        const clone = new _GraphicsContext();
        clone.batchMode = this.batchMode;
        clone.instructions = this.instructions.slice();
        clone._activePath = this._activePath.clone();
        clone._transform = this._transform.clone();
        clone._fillStyle = {
            ...this._fillStyle
        };
        clone._strokeStyle = {
            ...this._strokeStyle
        };
        clone._stateStack = this._stateStack.slice();
        clone._bounds = this._bounds.clone();
        clone._boundsDirty = true;
        return clone;
    }
    /**
   * The current fill style of the graphics context. This can be a color, gradient, pattern, or a more complex style defined by a FillStyle object.
   */ get fillStyle() {
        return this._fillStyle;
    }
    set fillStyle(value) {
        this._fillStyle = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(value, _GraphicsContext.defaultFillStyle);
    }
    /**
   * The current stroke style of the graphics context. Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
   */ get strokeStyle() {
        return this._strokeStyle;
    }
    set strokeStyle(value) {
        this._strokeStyle = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(value, _GraphicsContext.defaultStrokeStyle);
    }
    /**
   * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
   * pattern, or a more complex style defined by a FillStyle object.
   * @param style - The fill style to apply. This can be a simple color, a gradient or pattern object,
   *                or a FillStyle or ConvertedFillStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ setFillStyle(style) {
        this._fillStyle = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(style, _GraphicsContext.defaultFillStyle);
        return this;
    }
    /**
   * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
   * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
   * @param style - The stroke style to apply. Can be defined as a color, a gradient or pattern,
   *                or a StrokeStyle or ConvertedStrokeStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ setStrokeStyle(style) {
        this._strokeStyle = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(style, _GraphicsContext.defaultStrokeStyle);
        return this;
    }
    texture(texture, tint, dx, dy, dw, dh) {
        this.instructions.push({
            action: "texture",
            data: {
                image: texture,
                dx: dx || 0,
                dy: dy || 0,
                dw: dw || texture.frame.width,
                dh: dh || texture.frame.height,
                transform: this._transform.clone(),
                alpha: this._fillStyle.alpha,
                style: tint ? (0, _colorMjs.Color).shared.setValue(tint).toNumber() : 16777215
            }
        });
        this.onUpdate();
        return this;
    }
    /**
   * Resets the current path. Any previous path and its commands are discarded and a new path is
   * started. This is typically called before beginning a new shape or series of drawing commands.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ beginPath() {
        this._activePath = new (0, _graphicsPathMjs.GraphicsPath)();
        return this;
    }
    fill(style, alpha) {
        let path;
        const lastInstruction = this.instructions[this.instructions.length - 1];
        if (this._tick === 0 && lastInstruction && lastInstruction.action === "stroke") path = lastInstruction.data.path;
        else path = this._activePath.clone();
        if (!path) return this;
        if (style != null) {
            if (alpha !== void 0 && typeof style === "number") {
                (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead");
                style = {
                    color: style,
                    alpha
                };
            }
            this._fillStyle = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(style, _GraphicsContext.defaultFillStyle);
        }
        this.instructions.push({
            action: "fill",
            // TODO copy fill style!
            data: {
                style: this.fillStyle,
                path
            }
        });
        this.onUpdate();
        this._initNextPathLocation();
        this._tick = 0;
        return this;
    }
    _initNextPathLocation() {
        const { x, y } = this._activePath.getLastPoint((0, _pointMjs.Point).shared);
        this._activePath.clear();
        this._activePath.moveTo(x, y);
    }
    /**
   * Strokes the current path with the current stroke style. This method can take an optional
   * FillStyleInputs parameter to define the stroke's appearance, including its color, width, and other properties.
   * @param style - (Optional) The stroke style to apply. Can be defined as a simple color or a more complex style object. If omitted, uses the current stroke style.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ stroke(style) {
        let path;
        const lastInstruction = this.instructions[this.instructions.length - 1];
        if (this._tick === 0 && lastInstruction && lastInstruction.action === "fill") path = lastInstruction.data.path;
        else path = this._activePath.clone();
        if (!path) return this;
        if (style != null) this._strokeStyle = (0, _convertFillInputToFillStyleMjs.convertFillInputToFillStyle)(style, _GraphicsContext.defaultStrokeStyle);
        this.instructions.push({
            action: "stroke",
            // TODO copy fill style!
            data: {
                style: this.strokeStyle,
                path
            }
        });
        this.onUpdate();
        this._initNextPathLocation();
        this._tick = 0;
        return this;
    }
    /**
   * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
   * subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
   * fail to cut correctly!
   * @returns The instance of the current GraphicsContext for method chaining.
   */ cut() {
        for(let i = 0; i < 2; i++){
            const lastInstruction = this.instructions[this.instructions.length - 1 - i];
            const holePath = this._activePath.clone();
            if (lastInstruction) {
                if (lastInstruction.action === "stroke" || lastInstruction.action === "fill") {
                    if (lastInstruction.data.hole) lastInstruction.data.hole.addPath(holePath);
                    else {
                        lastInstruction.data.hole = holePath;
                        break;
                    }
                }
            }
        }
        this._initNextPathLocation();
        return this;
    }
    /**
   * Adds an arc to the current path, which is centered at (x, y) with the specified radius,
   * starting and ending angles, and direction.
   * @param x - The x-coordinate of the arc's center.
   * @param y - The y-coordinate of the arc's center.
   * @param radius - The arc's radius.
   * @param startAngle - The starting angle, in radians.
   * @param endAngle - The ending angle, in radians.
   * @param counterclockwise - (Optional) Specifies whether the arc is drawn counterclockwise (true) or clockwise (false). Defaults to false.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ arc(x, y, radius, startAngle, endAngle, counterclockwise) {
        this._tick++;
        const t = this._transform;
        this._activePath.arc(t.a * x + t.c * y + t.tx, t.b * x + t.d * y + t.ty, radius, startAngle, endAngle, counterclockwise);
        return this;
    }
    /**
   * Adds an arc to the current path with the given control points and radius, connected to the previous point
   * by a straight line if necessary.
   * @param x1 - The x-coordinate of the first control point.
   * @param y1 - The y-coordinate of the first control point.
   * @param x2 - The x-coordinate of the second control point.
   * @param y2 - The y-coordinate of the second control point.
   * @param radius - The arc's radius.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ arcTo(x1, y1, x2, y2, radius) {
        this._tick++;
        const t = this._transform;
        this._activePath.arcTo(t.a * x1 + t.c * y1 + t.tx, t.b * x1 + t.d * y1 + t.ty, t.a * x2 + t.c * y2 + t.tx, t.b * x2 + t.d * y2 + t.ty, radius);
        return this;
    }
    /**
   * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
   * @param rx - The x-radius of the ellipse.
   * @param ry - The y-radius of the ellipse.
   * @param xAxisRotation - The rotation of the ellipse's x-axis relative
   * to the x-axis of the coordinate system, in degrees.
   * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
   * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
   * @param x - The x-coordinate of the arc's end point.
   * @param y - The y-coordinate of the arc's end point.
   * @returns The instance of the current object for chaining.
   */ arcToSvg(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
        this._tick++;
        const t = this._transform;
        this._activePath.arcToSvg(rx, ry, xAxisRotation, // should we rotate this with transform??
        largeArcFlag, sweepFlag, t.a * x + t.c * y + t.tx, t.b * x + t.d * y + t.ty);
        return this;
    }
    /**
   * Adds a cubic Bezier curve to the path.
   * It requires three points: the first two are control points and the third one is the end point.
   * The starting point is the last point in the current path.
   * @param cp1x - The x-coordinate of the first control point.
   * @param cp1y - The y-coordinate of the first control point.
   * @param cp2x - The x-coordinate of the second control point.
   * @param cp2y - The y-coordinate of the second control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */ bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y, smoothness) {
        this._tick++;
        const t = this._transform;
        this._activePath.bezierCurveTo(t.a * cp1x + t.c * cp1y + t.tx, t.b * cp1x + t.d * cp1y + t.ty, t.a * cp2x + t.c * cp2y + t.tx, t.b * cp2x + t.d * cp2y + t.ty, t.a * x + t.c * y + t.tx, t.b * x + t.d * y + t.ty, smoothness);
        return this;
    }
    /**
   * Closes the current path by drawing a straight line back to the start.
   * If the shape is already closed or there are no points in the path, this method does nothing.
   * @returns The instance of the current object for chaining.
   */ closePath() {
        this._tick++;
        this._activePath?.closePath();
        return this;
    }
    /**
   * Draws an ellipse at the specified location and with the given x and y radii.
   * An optional transformation can be applied, allowing for rotation, scaling, and translation.
   * @param x - The x-coordinate of the center of the ellipse.
   * @param y - The y-coordinate of the center of the ellipse.
   * @param radiusX - The horizontal radius of the ellipse.
   * @param radiusY - The vertical radius of the ellipse.
   * @returns The instance of the current object for chaining.
   */ ellipse(x, y, radiusX, radiusY) {
        this._tick++;
        this._activePath.ellipse(x, y, radiusX, radiusY, this._transform.clone());
        return this;
    }
    /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @returns The instance of the current object for chaining.
   */ circle(x, y, radius) {
        this._tick++;
        this._activePath.circle(x, y, radius, this._transform.clone());
        return this;
    }
    /**
   * Adds another `GraphicsPath` to this path, optionally applying a transformation.
   * @param path - The `GraphicsPath` to add.
   * @returns The instance of the current object for chaining.
   */ path(path) {
        this._tick++;
        this._activePath.addPath(path, this._transform.clone());
        return this;
    }
    /**
   * Connects the current point to a new point with a straight line. This method updates the current path.
   * @param x - The x-coordinate of the new point to connect to.
   * @param y - The y-coordinate of the new point to connect to.
   * @returns The instance of the current object for chaining.
   */ lineTo(x, y) {
        this._tick++;
        const t = this._transform;
        this._activePath.lineTo(t.a * x + t.c * y + t.tx, t.b * x + t.d * y + t.ty);
        return this;
    }
    /**
   * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
   * @param x - The x-coordinate for the starting point.
   * @param y - The y-coordinate for the starting point.
   * @returns The instance of the current object for chaining.
   */ moveTo(x, y) {
        this._tick++;
        const t = this._transform;
        const instructions = this._activePath.instructions;
        const transformedX = t.a * x + t.c * y + t.tx;
        const transformedY = t.b * x + t.d * y + t.ty;
        if (instructions.length === 1 && instructions[0].action === "moveTo") {
            instructions[0].data[0] = transformedX;
            instructions[0].data[1] = transformedY;
            return this;
        }
        this._activePath.moveTo(transformedX, transformedY);
        return this;
    }
    /**
   * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
   * The starting point is the last point in the current path.
   * @param cpx - The x-coordinate of the control point.
   * @param cpy - The y-coordinate of the control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */ quadraticCurveTo(cpx, cpy, x, y, smoothness) {
        this._tick++;
        const t = this._transform;
        this._activePath.quadraticCurveTo(t.a * cpx + t.c * cpy + t.tx, t.b * cpx + t.d * cpy + t.ty, t.a * x + t.c * y + t.tx, t.b * x + t.d * y + t.ty, smoothness);
        return this;
    }
    /**
   * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @returns The instance of the current object for chaining.
   */ rect(x, y, w, h) {
        this._tick++;
        this._activePath.rect(x, y, w, h, this._transform.clone());
        return this;
    }
    /**
   * Draws a rectangle with rounded corners.
   * The corner radius can be specified to determine how rounded the corners should be.
   * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
   * @returns The instance of the current object for chaining.
   */ roundRect(x, y, w, h, radius) {
        this._tick++;
        this._activePath.roundRect(x, y, w, h, radius, this._transform.clone());
        return this;
    }
    /**
   * Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
   * which can be both open and closed. An optional transformation can be applied, enabling the polygon to be scaled,
   * rotated, or translated as needed.
   * @param points - An array of numbers, or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
   * representing the x and y coordinates, of the polygon's vertices, in sequence.
   * @param close - A boolean indicating whether to close the polygon path. True by default.
   */ poly(points, close) {
        this._tick++;
        this._activePath.poly(points, close, this._transform.clone());
        return this;
    }
    /**
   * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
   * @returns The instance of the current object for chaining.
   */ regularPoly(x, y, radius, sides, rotation = 0, transform) {
        this._tick++;
        this._activePath.regularPoly(x, y, radius, sides, rotation, transform);
        return this;
    }
    /**
   * Draws a polygon with rounded corners.
   * Similar to `regularPoly` but with the ability to round the corners of the polygon.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param corner - The radius of the rounding of the corners.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @returns The instance of the current object for chaining.
   */ roundPoly(x, y, radius, sides, corner, rotation) {
        this._tick++;
        this._activePath.roundPoly(x, y, radius, sides, corner, rotation);
        return this;
    }
    /**
   * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
   * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
   * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
   * A minimum of 3 points is required.
   * @param radius - The default radius for the corners.
   * This radius is applied to all corners unless overridden in `points`.
   * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
   *  method instead of an arc method. Defaults to false.
   * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
   * Higher values make the curve smoother.
   * @returns The instance of the current object for chaining.
   */ roundShape(points, radius, useQuadratic, smoothness) {
        this._tick++;
        this._activePath.roundShape(points, radius, useQuadratic, smoothness);
        return this;
    }
    /**
   * Draw Rectangle with fillet corners. This is much like rounded rectangle
   * however it support negative numbers as well for the corner radius.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param fillet - accept negative or positive values
   */ filletRect(x, y, width, height, fillet) {
        this._tick++;
        this._activePath.filletRect(x, y, width, height, fillet);
        return this;
    }
    /**
   * Draw Rectangle with chamfer corners. These are angled corners.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param chamfer - non-zero real number, size of corner cutout
   * @param transform
   */ chamferRect(x, y, width, height, chamfer, transform) {
        this._tick++;
        this._activePath.chamferRect(x, y, width, height, chamfer, transform);
        return this;
    }
    /**
   * Draws a star shape centered at a specified location. This method allows for the creation
   *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
   * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
   * An optional transformation can be applied to scale, rotate, or translate the star as needed.
   * @param x - The x-coordinate of the center of the star.
   * @param y - The y-coordinate of the center of the star.
   * @param points - The number of points of the star.
   * @param radius - The outer radius of the star (distance from the center to the outer points).
   * @param innerRadius - Optional. The inner radius of the star
   * (distance from the center to the inner points between the outer points).
   * If not provided, defaults to half of the `radius`.
   * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
   * Defaults to 0, meaning one point is directly upward.
   * @returns The instance of the current object for chaining further drawing commands.
   */ star(x, y, points, radius, innerRadius = 0, rotation = 0) {
        this._tick++;
        this._activePath.star(x, y, points, radius, innerRadius, rotation, this._transform.clone());
        return this;
    }
    /**
   * Parses and renders an SVG string into the graphics context. This allows for complex shapes and paths
   * defined in SVG format to be drawn within the graphics context.
   * @param svg - The SVG string to be parsed and rendered.
   */ svg(svg) {
        this._tick++;
        (0, _svgparserMjs.SVGParser)(svg, this);
        return this;
    }
    /**
   * Restores the most recently saved graphics state by popping the top of the graphics state stack.
   * This includes transformations, fill styles, and stroke styles.
   */ restore() {
        const state = this._stateStack.pop();
        if (state) {
            this._transform = state.transform;
            this._fillStyle = state.fillStyle;
            this._strokeStyle = state.strokeStyle;
        }
        return this;
    }
    /** Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack. */ save() {
        this._stateStack.push({
            transform: this._transform.clone(),
            fillStyle: {
                ...this._fillStyle
            },
            strokeStyle: {
                ...this._strokeStyle
            }
        });
        return this;
    }
    /**
   * Returns the current transformation matrix of the graphics context.
   * @returns The current transformation matrix.
   */ getTransform() {
        return this._transform;
    }
    /**
   * Resets the current transformation matrix to the identity matrix, effectively removing any transformations (rotation, scaling, translation) previously applied.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ resetTransform() {
        this._transform.identity();
        return this;
    }
    /**
   * Applies a rotation transformation to the graphics context around the current origin.
   * @param angle - The angle of rotation in radians.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ rotate(angle) {
        this._transform.rotate(angle);
        return this;
    }
    /**
   * Applies a scaling transformation to the graphics context, scaling drawings by x horizontally and by y vertically.
   * @param x - The scale factor in the horizontal direction.
   * @param y - (Optional) The scale factor in the vertical direction. If not specified, the x value is used for both directions.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ scale(x, y = x) {
        this._transform.scale(x, y);
        return this;
    }
    setTransform(a, b, c, d, dx, dy) {
        if (a instanceof (0, _matrixMjs.Matrix)) {
            this._transform.set(a.a, a.b, a.c, a.d, a.tx, a.ty);
            return this;
        }
        this._transform.set(a, b, c, d, dx, dy);
        return this;
    }
    transform(a, b, c, d, dx, dy) {
        if (a instanceof (0, _matrixMjs.Matrix)) {
            this._transform.append(a);
            return this;
        }
        tempMatrix.set(a, b, c, d, dx, dy);
        this._transform.append(tempMatrix);
        return this;
    }
    /**
   * Applies a translation transformation to the graphics context, moving the origin by the specified amounts.
   * @param x - The amount to translate in the horizontal direction.
   * @param y - (Optional) The amount to translate in the vertical direction. If not specified, the x value is used for both directions.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ translate(x, y = x) {
        this._transform.translate(x, y);
        return this;
    }
    /**
   * Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
   * and optionally resetting transformations to the identity matrix.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ clear() {
        this.instructions.length = 0;
        this.resetTransform();
        this.onUpdate();
        return this;
    }
    onUpdate() {
        if (this.dirty) return;
        this.emit("update", this, 16);
        this.dirty = true;
        this._boundsDirty = true;
    }
    /** The bounds of the graphic shape. */ get bounds() {
        if (!this._boundsDirty) return this._bounds;
        const bounds = this._bounds;
        bounds.clear();
        for(let i = 0; i < this.instructions.length; i++){
            const instruction = this.instructions[i];
            const action = instruction.action;
            if (action === "fill") {
                const data = instruction.data;
                bounds.addBounds(data.path.bounds);
            } else if (action === "texture") {
                const data = instruction.data;
                bounds.addFrame(data.dx, data.dy, data.dx + data.dw, data.dy + data.dh, data.transform);
            }
            if (action === "stroke") {
                const data = instruction.data;
                const padding = data.style.width / 2;
                const _bounds = data.path.bounds;
                bounds.addFrame(_bounds.minX - padding, _bounds.minY - padding, _bounds.maxX + padding, _bounds.maxY + padding);
            }
        }
        return bounds;
    }
    /**
   * Check to see if a point is contained within this geometry.
   * @param point - Point to check if it's contained.
   * @returns {boolean} `true` if the point is contained within geometry.
   */ containsPoint(point) {
        if (!this.bounds.containsPoint(point.x, point.y)) return false;
        const instructions = this.instructions;
        let hasHit = false;
        for(let k = 0; k < instructions.length; k++){
            const instruction = instructions[k];
            const data = instruction.data;
            const path = data.path;
            if (!instruction.action || !path) continue;
            const style = data.style;
            const shapes = path.shapePath.shapePrimitives;
            for(let i = 0; i < shapes.length; i++){
                const shape = shapes[i].shape;
                if (!style || !shape) continue;
                const transform = shapes[i].transform;
                const transformedPoint = transform ? transform.applyInverse(point, tmpPoint) : point;
                if (instruction.action === "fill") hasHit = shape.contains(transformedPoint.x, transformedPoint.y);
                else hasHit = shape.strokeContains(transformedPoint.x, transformedPoint.y, style.width);
                const holes = data.hole;
                if (holes) {
                    const holeShapes = holes.shapePath?.shapePrimitives;
                    if (holeShapes) {
                        for(let j = 0; j < holeShapes.length; j++)if (holeShapes[j].shape.contains(transformedPoint.x, transformedPoint.y)) hasHit = false;
                    }
                }
                if (hasHit) return true;
            }
        }
        return hasHit;
    }
    /**
   * Destroys the GraphicsData object.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the fill/stroke style?
   * @param {boolean} [options.textureSource=false] - Should it destroy the texture source of the fill/stroke style?
   */ destroy(options = false) {
        this._stateStack.length = 0;
        this._transform = null;
        this.emit("destroy", this);
        this.removeAllListeners();
        const destroyTexture = typeof options === "boolean" ? options : options?.texture;
        if (destroyTexture) {
            const destroyTextureSource = typeof options === "boolean" ? options : options?.textureSource;
            if (this._fillStyle.texture) this._fillStyle.texture.destroy(destroyTextureSource);
            if (this._strokeStyle.texture) this._strokeStyle.texture.destroy(destroyTextureSource);
        }
        this._fillStyle = null;
        this._strokeStyle = null;
        this.instructions = null;
        this._activePath = null;
        this._bounds = null;
        this._stateStack = null;
        this.customShader = null;
        this._transform = null;
    }
};
/** The default fill style to use when none is provided. */ _GraphicsContext.defaultFillStyle = {
    /** The color to use for the fill. */ color: 16777215,
    /** The alpha value to use for the fill. */ alpha: 1,
    /** The texture to use for the fill. */ texture: (0, _textureMjs.Texture).WHITE,
    /** The matrix to apply. */ matrix: null,
    /** The fill pattern to use. */ fill: null
};
/** The default stroke style to use when none is provided. */ _GraphicsContext.defaultStrokeStyle = {
    /** The width of the stroke. */ width: 1,
    /** The color to use for the stroke. */ color: 16777215,
    /** The alpha value to use for the stroke. */ alpha: 1,
    /** The alignment of the stroke. */ alignment: 0.5,
    /** The miter limit to use. */ miterLimit: 10,
    /** The line cap style to use. */ cap: "butt",
    /** The line join style to use. */ join: "miter",
    /** The texture to use for the fill. */ texture: (0, _textureMjs.Texture).WHITE,
    /** The matrix to apply. */ matrix: null,
    /** The fill pattern to use. */ fill: null
};
let GraphicsContext = _GraphicsContext;

},{"eventemitter3":"enSRh","../../../color/Color.mjs":"duTAI","../../../maths/matrix/Matrix.mjs":"kpkIt","../../../maths/point/Point.mjs":"dkxvR","../../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../../../utils/data/uid.mjs":"2iBho","../../../utils/logging/deprecation.mjs":"axL6x","../../container/bounds/Bounds.mjs":"2E5wx","./path/GraphicsPath.mjs":"gtauo","./svg/SVGParser.mjs":"gzIev","./utils/convertFillInputToFillStyle.mjs":"8QzKs","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gtauo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphicsPath", ()=>GraphicsPath);
var _pointMjs = require("../../../../maths/point/Point.mjs");
var _uidMjs = require("../../../../utils/data/uid.mjs");
var _warnMjs = require("../../../../utils/logging/warn.mjs");
var _svgtoGraphicsPathMjs = require("../svg/SVGToGraphicsPath.mjs");
var _shapePathMjs = require("./ShapePath.mjs");
"use strict";
class GraphicsPath {
    /**
   * Creates a `GraphicsPath` instance optionally from an SVG path string or an array of `PathInstruction`.
   * @param instructions - An SVG path string or an array of `PathInstruction` objects.
   */ constructor(instructions){
        this.instructions = [];
        this.uid = (0, _uidMjs.uid)("graphicsPath");
        this._dirty = true;
        if (typeof instructions === "string") (0, _svgtoGraphicsPathMjs.SVGToGraphicsPath)(instructions, this);
        else this.instructions = instructions?.slice() ?? [];
    }
    /**
   * Provides access to the internal shape path, ensuring it is up-to-date with the current instructions.
   * @returns The `ShapePath` instance associated with this `GraphicsPath`.
   */ get shapePath() {
        if (!this._shapePath) this._shapePath = new (0, _shapePathMjs.ShapePath)(this);
        if (this._dirty) {
            this._dirty = false;
            this._shapePath.buildPath();
        }
        return this._shapePath;
    }
    /**
   * Adds another `GraphicsPath` to this path, optionally applying a transformation.
   * @param path - The `GraphicsPath` to add.
   * @param transform - An optional transformation to apply to the added path.
   * @returns The instance of the current object for chaining.
   */ addPath(path, transform) {
        path = path.clone();
        this.instructions.push({
            action: "addPath",
            data: [
                path,
                transform
            ]
        });
        this._dirty = true;
        return this;
    }
    arc(...args) {
        this.instructions.push({
            action: "arc",
            data: args
        });
        this._dirty = true;
        return this;
    }
    arcTo(...args) {
        this.instructions.push({
            action: "arcTo",
            data: args
        });
        this._dirty = true;
        return this;
    }
    arcToSvg(...args) {
        this.instructions.push({
            action: "arcToSvg",
            data: args
        });
        this._dirty = true;
        return this;
    }
    bezierCurveTo(...args) {
        this.instructions.push({
            action: "bezierCurveTo",
            data: args
        });
        this._dirty = true;
        return this;
    }
    /**
   * Adds a cubic Bezier curve to the path.
   * It requires two points: the second control point and the end point. The first control point is assumed to be
   * The starting point is the last point in the current path.
   * @param cp2x - The x-coordinate of the second control point.
   * @param cp2y - The y-coordinate of the second control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */ bezierCurveToShort(cp2x, cp2y, x, y, smoothness) {
        const last = this.instructions[this.instructions.length - 1];
        const lastPoint = this.getLastPoint((0, _pointMjs.Point).shared);
        let cp1x = 0;
        let cp1y = 0;
        if (!last || last.action !== "bezierCurveTo") {
            cp1x = lastPoint.x;
            cp1y = lastPoint.y;
        } else {
            cp1x = last.data[2];
            cp1y = last.data[3];
            const currentX = lastPoint.x;
            const currentY = lastPoint.y;
            cp1x = currentX + (currentX - cp1x);
            cp1y = currentY + (currentY - cp1y);
        }
        this.instructions.push({
            action: "bezierCurveTo",
            data: [
                cp1x,
                cp1y,
                cp2x,
                cp2y,
                x,
                y,
                smoothness
            ]
        });
        this._dirty = true;
        return this;
    }
    /**
   * Closes the current path by drawing a straight line back to the start.
   * If the shape is already closed or there are no points in the path, this method does nothing.
   * @returns The instance of the current object for chaining.
   */ closePath() {
        this.instructions.push({
            action: "closePath",
            data: []
        });
        this._dirty = true;
        return this;
    }
    ellipse(...args) {
        this.instructions.push({
            action: "ellipse",
            data: args
        });
        this._dirty = true;
        return this;
    }
    lineTo(...args) {
        this.instructions.push({
            action: "lineTo",
            data: args
        });
        this._dirty = true;
        return this;
    }
    moveTo(...args) {
        this.instructions.push({
            action: "moveTo",
            data: args
        });
        return this;
    }
    quadraticCurveTo(...args) {
        this.instructions.push({
            action: "quadraticCurveTo",
            data: args
        });
        this._dirty = true;
        return this;
    }
    /**
   * Adds a quadratic curve to the path. It uses the previous point as the control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */ quadraticCurveToShort(x, y, smoothness) {
        const last = this.instructions[this.instructions.length - 1];
        const lastPoint = this.getLastPoint((0, _pointMjs.Point).shared);
        let cpx1 = 0;
        let cpy1 = 0;
        if (!last || last.action !== "quadraticCurveTo") {
            cpx1 = lastPoint.x;
            cpy1 = lastPoint.y;
        } else {
            cpx1 = last.data[0];
            cpy1 = last.data[1];
            const currentX = lastPoint.x;
            const currentY = lastPoint.y;
            cpx1 = currentX + (currentX - cpx1);
            cpy1 = currentY + (currentY - cpy1);
        }
        this.instructions.push({
            action: "quadraticCurveTo",
            data: [
                cpx1,
                cpy1,
                x,
                y,
                smoothness
            ]
        });
        this._dirty = true;
        return this;
    }
    /**
   * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
   * @returns The instance of the current object for chaining.
   */ rect(x, y, w, h, transform) {
        this.instructions.push({
            action: "rect",
            data: [
                x,
                y,
                w,
                h,
                transform
            ]
        });
        this._dirty = true;
        return this;
    }
    /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param transform - An optional `Matrix` object to apply a transformation to the circle.
   * @returns The instance of the current object for chaining.
   */ circle(x, y, radius, transform) {
        this.instructions.push({
            action: "circle",
            data: [
                x,
                y,
                radius,
                transform
            ]
        });
        this._dirty = true;
        return this;
    }
    roundRect(...args) {
        this.instructions.push({
            action: "roundRect",
            data: args
        });
        this._dirty = true;
        return this;
    }
    poly(...args) {
        this.instructions.push({
            action: "poly",
            data: args
        });
        this._dirty = true;
        return this;
    }
    regularPoly(...args) {
        this.instructions.push({
            action: "regularPoly",
            data: args
        });
        this._dirty = true;
        return this;
    }
    roundPoly(...args) {
        this.instructions.push({
            action: "roundPoly",
            data: args
        });
        this._dirty = true;
        return this;
    }
    roundShape(...args) {
        this.instructions.push({
            action: "roundShape",
            data: args
        });
        this._dirty = true;
        return this;
    }
    filletRect(...args) {
        this.instructions.push({
            action: "filletRect",
            data: args
        });
        this._dirty = true;
        return this;
    }
    chamferRect(...args) {
        this.instructions.push({
            action: "chamferRect",
            data: args
        });
        this._dirty = true;
        return this;
    }
    /**
   * Draws a star shape centered at a specified location. This method allows for the creation
   *  of stars with a variable number of points, outer radius, optional inner radius, and rotation.
   * The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
   * An optional transformation can be applied to scale, rotate, or translate the star as needed.
   * @param x - The x-coordinate of the center of the star.
   * @param y - The y-coordinate of the center of the star.
   * @param points - The number of points of the star.
   * @param radius - The outer radius of the star (distance from the center to the outer points).
   * @param innerRadius - Optional. The inner radius of the star
   * (distance from the center to the inner points between the outer points).
   * If not provided, defaults to half of the `radius`.
   * @param rotation - Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
   * Defaults to 0, meaning one point is directly upward.
   * @param transform - An optional `Matrix` object to apply a transformation to the star.
   * This can include rotations, scaling, and translations.
   * @returns The instance of the current object for chaining further drawing commands.
   */ // eslint-disable-next-line max-len
    star(x, y, points, radius, innerRadius, rotation, transform) {
        innerRadius = innerRadius || radius / 2;
        const startAngle = -1 * Math.PI / 2 + rotation;
        const len = points * 2;
        const delta = Math.PI * 2 / len;
        const polygon = [];
        for(let i = 0; i < len; i++){
            const r = i % 2 ? innerRadius : radius;
            const angle = i * delta + startAngle;
            polygon.push(x + r * Math.cos(angle), y + r * Math.sin(angle));
        }
        this.poly(polygon, true, transform);
        return this;
    }
    /**
   * Creates a copy of the current `GraphicsPath` instance. This method supports both shallow and deep cloning.
   * A shallow clone copies the reference of the instructions array, while a deep clone creates a new array and
   * copies each instruction individually, ensuring that modifications to the instructions of the cloned `GraphicsPath`
   * do not affect the original `GraphicsPath` and vice versa.
   * @param deep - A boolean flag indicating whether the clone should be deep.
   * @returns A new `GraphicsPath` instance that is a clone of the current instance.
   */ clone(deep = false) {
        const newGraphicsPath2D = new GraphicsPath();
        if (!deep) newGraphicsPath2D.instructions = this.instructions.slice();
        else for(let i = 0; i < this.instructions.length; i++){
            const instruction = this.instructions[i];
            newGraphicsPath2D.instructions.push({
                action: instruction.action,
                data: instruction.data.slice()
            });
        }
        return newGraphicsPath2D;
    }
    clear() {
        this.instructions.length = 0;
        this._dirty = true;
        return this;
    }
    /**
   * Applies a transformation matrix to all drawing instructions within the `GraphicsPath`.
   * This method enables the modification of the path's geometry according to the provided
   * transformation matrix, which can include translations, rotations, scaling, and skewing.
   *
   * Each drawing instruction in the path is updated to reflect the transformation,
   * ensuring the visual representation of the path is consistent with the applied matrix.
   *
   * Note: The transformation is applied directly to the coordinates and control points of the drawing instructions,
   * not to the path as a whole. This means the transformation's effects are baked into the individual instructions,
   * allowing for fine-grained control over the path's appearance.
   * @param matrix - A `Matrix` object representing the transformation to apply.
   * @returns The instance of the current object for chaining further operations.
   */ transform(matrix) {
        if (matrix.isIdentity()) return this;
        const a = matrix.a;
        const b = matrix.b;
        const c = matrix.c;
        const d = matrix.d;
        const tx = matrix.tx;
        const ty = matrix.ty;
        let x = 0;
        let y = 0;
        let cpx1 = 0;
        let cpy1 = 0;
        let cpx2 = 0;
        let cpy2 = 0;
        let rx = 0;
        let ry = 0;
        for(let i = 0; i < this.instructions.length; i++){
            const instruction = this.instructions[i];
            const data = instruction.data;
            switch(instruction.action){
                case "moveTo":
                case "lineTo":
                    x = data[0];
                    y = data[1];
                    data[0] = a * x + c * y + tx;
                    data[1] = b * x + d * y + ty;
                    break;
                case "bezierCurveTo":
                    cpx1 = data[0];
                    cpy1 = data[1];
                    cpx2 = data[2];
                    cpy2 = data[3];
                    x = data[4];
                    y = data[5];
                    data[0] = a * cpx1 + c * cpy1 + tx;
                    data[1] = b * cpx1 + d * cpy1 + ty;
                    data[2] = a * cpx2 + c * cpy2 + tx;
                    data[3] = b * cpx2 + d * cpy2 + ty;
                    data[4] = a * x + c * y + tx;
                    data[5] = b * x + d * y + ty;
                    break;
                case "quadraticCurveTo":
                    cpx1 = data[0];
                    cpy1 = data[1];
                    x = data[2];
                    y = data[3];
                    data[0] = a * cpx1 + c * cpy1 + tx;
                    data[1] = b * cpx1 + d * cpy1 + ty;
                    data[2] = a * x + c * y + tx;
                    data[3] = b * x + d * y + ty;
                    break;
                case "arcToSvg":
                    x = data[5];
                    y = data[6];
                    rx = data[0];
                    ry = data[1];
                    data[0] = a * rx + c * ry;
                    data[1] = b * rx + d * ry;
                    data[5] = a * x + c * y + tx;
                    data[6] = b * x + d * y + ty;
                    break;
                case "circle":
                    data[4] = adjustTransform(data[3], matrix);
                    break;
                case "rect":
                    data[4] = adjustTransform(data[4], matrix);
                    break;
                case "ellipse":
                    data[8] = adjustTransform(data[8], matrix);
                    break;
                case "roundRect":
                    data[5] = adjustTransform(data[5], matrix);
                    break;
                case "addPath":
                    data[0].transform(matrix);
                    break;
                case "poly":
                    data[2] = adjustTransform(data[2], matrix);
                    break;
                default:
                    (0, _warnMjs.warn)("unknown transform action", instruction.action);
                    break;
            }
        }
        this._dirty = true;
        return this;
    }
    get bounds() {
        return this.shapePath.bounds;
    }
    /**
   * Retrieves the last point from the current drawing instructions in the `GraphicsPath`.
   * This method is useful for operations that depend on the path's current endpoint,
   * such as connecting subsequent shapes or paths. It supports various drawing instructions,
   * ensuring the last point's position is accurately determined regardless of the path's complexity.
   *
   * If the last instruction is a `closePath`, the method iterates backward through the instructions
   *  until it finds an actionable instruction that defines a point (e.g., `moveTo`, `lineTo`,
   * `quadraticCurveTo`, etc.). For compound paths added via `addPath`, it recursively retrieves
   * the last point from the nested path.
   * @param out - A `Point` object where the last point's coordinates will be stored.
   * This object is modified directly to contain the result.
   * @returns The `Point` object containing the last point's coordinates.
   */ getLastPoint(out) {
        let index = this.instructions.length - 1;
        let lastInstruction = this.instructions[index];
        if (!lastInstruction) {
            out.x = 0;
            out.y = 0;
            return out;
        }
        while(lastInstruction.action === "closePath"){
            index--;
            if (index < 0) {
                out.x = 0;
                out.y = 0;
                return out;
            }
            lastInstruction = this.instructions[index];
        }
        switch(lastInstruction.action){
            case "moveTo":
            case "lineTo":
                out.x = lastInstruction.data[0];
                out.y = lastInstruction.data[1];
                break;
            case "quadraticCurveTo":
                out.x = lastInstruction.data[2];
                out.y = lastInstruction.data[3];
                break;
            case "bezierCurveTo":
                out.x = lastInstruction.data[4];
                out.y = lastInstruction.data[5];
                break;
            case "arc":
            case "arcToSvg":
                out.x = lastInstruction.data[5];
                out.y = lastInstruction.data[6];
                break;
            case "addPath":
                lastInstruction.data[0].getLastPoint(out);
                break;
        }
        return out;
    }
}
function adjustTransform(currentMatrix, transform) {
    if (currentMatrix) return currentMatrix.prepend(transform);
    return transform.clone();
}

},{"../../../../maths/point/Point.mjs":"dkxvR","../../../../utils/data/uid.mjs":"2iBho","../../../../utils/logging/warn.mjs":"gCz01","../svg/SVGToGraphicsPath.mjs":"h05ds","./ShapePath.mjs":"ctQZX","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"h05ds":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SVGToGraphicsPath", ()=>SVGToGraphicsPath);
var _parseSvgPath = require("parse-svg-path");
var _parseSvgPathDefault = parcelHelpers.interopDefault(_parseSvgPath);
var _warnMjs = require("../../../../utils/logging/warn.mjs");
"use strict";
function SVGToGraphicsPath(svgPath, path) {
    const commands = (0, _parseSvgPathDefault.default)(svgPath);
    const subpaths = [];
    let currentSubPath = null;
    let lastX = 0;
    let lastY = 0;
    for(let i = 0; i < commands.length; i++){
        const command = commands[i];
        const type = command[0];
        const data = command;
        switch(type){
            case "M":
                lastX = data[1];
                lastY = data[2];
                path.moveTo(lastX, lastY);
                break;
            case "m":
                lastX += data[1];
                lastY += data[2];
                path.moveTo(lastX, lastY);
                break;
            case "H":
                lastX = data[1];
                path.lineTo(lastX, lastY);
                break;
            case "h":
                lastX += data[1];
                path.lineTo(lastX, lastY);
                break;
            case "V":
                lastY = data[1];
                path.lineTo(lastX, lastY);
                break;
            case "v":
                lastY += data[1];
                path.lineTo(lastX, lastY);
                break;
            case "L":
                lastX = data[1];
                lastY = data[2];
                path.lineTo(lastX, lastY);
                break;
            case "l":
                lastX += data[1];
                lastY += data[2];
                path.lineTo(lastX, lastY);
                break;
            case "C":
                lastX = data[5];
                lastY = data[6];
                path.bezierCurveTo(data[1], data[2], data[3], data[4], lastX, lastY);
                break;
            case "c":
                path.bezierCurveTo(lastX + data[1], lastY + data[2], lastX + data[3], lastY + data[4], lastX + data[5], lastY + data[6]);
                lastX += data[5];
                lastY += data[6];
                break;
            case "S":
                lastX = data[3];
                lastY = data[4];
                path.bezierCurveToShort(data[1], data[2], lastX, lastY);
                break;
            case "s":
                path.bezierCurveToShort(lastX + data[1], lastY + data[2], lastX + data[3], lastY + data[4]);
                lastX += data[3];
                lastY += data[4];
                break;
            case "Q":
                lastX = data[3];
                lastY = data[4];
                path.quadraticCurveTo(data[1], data[2], lastX, lastY);
                break;
            case "q":
                path.quadraticCurveTo(lastX + data[1], lastY + data[2], lastX + data[3], lastY + data[4]);
                lastX += data[3];
                lastY += data[4];
                break;
            case "T":
                lastX = data[1];
                lastY = data[2];
                path.quadraticCurveToShort(lastX, lastY);
                break;
            case "t":
                lastX += data[1];
                lastY += data[2];
                path.quadraticCurveToShort(lastX, lastY);
                break;
            case "A":
                lastX = data[6];
                lastY = data[7];
                path.arcToSvg(data[1], data[2], data[3], data[4], data[5], lastX, lastY);
                break;
            case "a":
                lastX += data[6];
                lastY += data[7];
                path.arcToSvg(data[1], data[2], data[3], data[4], data[5], lastX, lastY);
                break;
            case "Z":
            case "z":
                path.closePath();
                if (subpaths.length > 0) {
                    currentSubPath = subpaths.pop();
                    if (currentSubPath) {
                        lastX = currentSubPath.startX;
                        lastY = currentSubPath.startY;
                    } else {
                        lastX = 0;
                        lastY = 0;
                    }
                }
                currentSubPath = null;
                break;
            default:
                (0, _warnMjs.warn)(`Unknown SVG path command: ${type}`);
        }
        if (type !== "Z" && type !== "z") {
            if (currentSubPath === null) {
                currentSubPath = {
                    startX: lastX,
                    startY: lastY
                };
                subpaths.push(currentSubPath);
            }
        }
    }
    return path;
}

},{"parse-svg-path":"b82BG","../../../../utils/logging/warn.mjs":"gCz01","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"b82BG":[function(require,module,exports) {
module.exports = parse;
/**
 * expected argument lengths
 * @type {Object}
 */ var length = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
};
/**
 * segment pattern
 * @type {RegExp}
 */ var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */ function parse(path) {
    var data = [];
    path.replace(segment, function(_, command, args) {
        var type = command.toLowerCase();
        args = parseValues(args);
        // overloaded moveTo
        if (type == "m" && args.length > 2) {
            data.push([
                command
            ].concat(args.splice(0, 2)));
            type = "l";
            command = command == "m" ? "l" : "L";
        }
        while(true){
            if (args.length == length[type]) {
                args.unshift(command);
                return data.push(args);
            }
            if (args.length < length[type]) throw new Error("malformed path data");
            data.push([
                command
            ].concat(args.splice(0, length[type])));
        }
    });
    return data;
}
var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
function parseValues(args) {
    var numbers = args.match(number);
    return numbers ? numbers.map(Number) : [];
}

},{}],"ctQZX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShapePath", ()=>ShapePath);
var _circleMjs = require("../../../../maths/shapes/Circle.mjs");
var _ellipseMjs = require("../../../../maths/shapes/Ellipse.mjs");
var _polygonMjs = require("../../../../maths/shapes/Polygon.mjs");
var _rectangleMjs = require("../../../../maths/shapes/Rectangle.mjs");
var _roundedRectangleMjs = require("../../../../maths/shapes/RoundedRectangle.mjs");
var _boundsMjs = require("../../../container/bounds/Bounds.mjs");
var _buildAdaptiveBezierMjs = require("../buildCommands/buildAdaptiveBezier.mjs");
var _buildAdaptiveQuadraticMjs = require("../buildCommands/buildAdaptiveQuadratic.mjs");
var _buildArcMjs = require("../buildCommands/buildArc.mjs");
var _buildArcToMjs = require("../buildCommands/buildArcTo.mjs");
var _buildArcToSvgMjs = require("../buildCommands/buildArcToSvg.mjs");
var _roundShapeMjs = require("./roundShape.mjs");
"use strict";
const tempRectangle = new (0, _rectangleMjs.Rectangle)();
class ShapePath {
    constructor(graphicsPath2D){
        /** The list of shape primitives that make up the path. */ this.shapePrimitives = [];
        this._currentPoly = null;
        this._bounds = new (0, _boundsMjs.Bounds)();
        this._graphicsPath2D = graphicsPath2D;
    }
    /**
   * Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.
   * @param x - The x-coordinate for the starting point.
   * @param y - The y-coordinate for the starting point.
   * @returns The instance of the current object for chaining.
   */ moveTo(x, y) {
        this.startPoly(x, y);
        return this;
    }
    /**
   * Connects the current point to a new point with a straight line. This method updates the current path.
   * @param x - The x-coordinate of the new point to connect to.
   * @param y - The y-coordinate of the new point to connect to.
   * @returns The instance of the current object for chaining.
   */ lineTo(x, y) {
        this._ensurePoly();
        const points = this._currentPoly.points;
        const fromX = points[points.length - 2];
        const fromY = points[points.length - 1];
        if (fromX !== x || fromY !== y) points.push(x, y);
        return this;
    }
    /**
   * Adds an arc to the path. The arc is centered at (x, y)
   *  position with radius `radius` starting at `startAngle` and ending at `endAngle`.
   * @param x - The x-coordinate of the arc's center.
   * @param y - The y-coordinate of the arc's center.
   * @param radius - The radius of the arc.
   * @param startAngle - The starting angle of the arc, in radians.
   * @param endAngle - The ending angle of the arc, in radians.
   * @param counterclockwise - Specifies whether the arc should be drawn in the anticlockwise direction. False by default.
   * @returns The instance of the current object for chaining.
   */ arc(x, y, radius, startAngle, endAngle, counterclockwise) {
        this._ensurePoly(false);
        const points = this._currentPoly.points;
        (0, _buildArcMjs.buildArc)(points, x, y, radius, startAngle, endAngle, counterclockwise);
        return this;
    }
    /**
   * Adds an arc to the path with the arc tangent to the line joining two specified points.
   * The arc radius is specified by `radius`.
   * @param x1 - The x-coordinate of the first point.
   * @param y1 - The y-coordinate of the first point.
   * @param x2 - The x-coordinate of the second point.
   * @param y2 - The y-coordinate of the second point.
   * @param radius - The radius of the arc.
   * @returns The instance of the current object for chaining.
   */ arcTo(x1, y1, x2, y2, radius) {
        this._ensurePoly();
        const points = this._currentPoly.points;
        (0, _buildArcToMjs.buildArcTo)(points, x1, y1, x2, y2, radius);
        return this;
    }
    /**
   * Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.
   * @param rx - The x-radius of the ellipse.
   * @param ry - The y-radius of the ellipse.
   * @param xAxisRotation - The rotation of the ellipse's x-axis relative
   * to the x-axis of the coordinate system, in degrees.
   * @param largeArcFlag - Determines if the arc should be greater than or less than 180 degrees.
   * @param sweepFlag - Determines if the arc should be swept in a positive angle direction.
   * @param x - The x-coordinate of the arc's end point.
   * @param y - The y-coordinate of the arc's end point.
   * @returns The instance of the current object for chaining.
   */ arcToSvg(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
        const points = this._currentPoly.points;
        (0, _buildArcToSvgMjs.buildArcToSvg)(points, this._currentPoly.lastX, this._currentPoly.lastY, x, y, rx, ry, xAxisRotation, largeArcFlag, sweepFlag);
        return this;
    }
    /**
   * Adds a cubic Bezier curve to the path.
   * It requires three points: the first two are control points and the third one is the end point.
   * The starting point is the last point in the current path.
   * @param cp1x - The x-coordinate of the first control point.
   * @param cp1y - The y-coordinate of the first control point.
   * @param cp2x - The x-coordinate of the second control point.
   * @param cp2y - The y-coordinate of the second control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothness - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */ bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y, smoothness) {
        this._ensurePoly();
        const currentPoly = this._currentPoly;
        (0, _buildAdaptiveBezierMjs.buildAdaptiveBezier)(this._currentPoly.points, currentPoly.lastX, currentPoly.lastY, cp1x, cp1y, cp2x, cp2y, x, y, smoothness);
        return this;
    }
    /**
   * Adds a quadratic curve to the path. It requires two points: the control point and the end point.
   * The starting point is the last point in the current path.
   * @param cp1x - The x-coordinate of the control point.
   * @param cp1y - The y-coordinate of the control point.
   * @param x - The x-coordinate of the end point.
   * @param y - The y-coordinate of the end point.
   * @param smoothing - Optional parameter to adjust the smoothness of the curve.
   * @returns The instance of the current object for chaining.
   */ quadraticCurveTo(cp1x, cp1y, x, y, smoothing) {
        this._ensurePoly();
        const currentPoly = this._currentPoly;
        (0, _buildAdaptiveQuadraticMjs.buildAdaptiveQuadratic)(this._currentPoly.points, currentPoly.lastX, currentPoly.lastY, cp1x, cp1y, x, y, smoothing);
        return this;
    }
    /**
   * Closes the current path by drawing a straight line back to the start.
   * If the shape is already closed or there are no points in the path, this method does nothing.
   * @returns The instance of the current object for chaining.
   */ closePath() {
        this.endPoly(true);
        return this;
    }
    /**
   * Adds another path to the current path. This method allows for the combination of multiple paths into one.
   * @param path - The `GraphicsPath` object representing the path to add.
   * @param transform - An optional `Matrix` object to apply a transformation to the path before adding it.
   * @returns The instance of the current object for chaining.
   */ addPath(path, transform) {
        this.endPoly();
        if (transform && !transform.isIdentity()) {
            path = path.clone(true);
            path.transform(transform);
        }
        for(let i = 0; i < path.instructions.length; i++){
            const instruction = path.instructions[i];
            this[instruction.action](...instruction.data);
        }
        return this;
    }
    /**
   * Finalizes the drawing of the current path. Optionally, it can close the path.
   * @param closePath - A boolean indicating whether to close the path after finishing. False by default.
   */ finish(closePath = false) {
        this.endPoly(closePath);
    }
    /**
   * Draws a rectangle shape. This method adds a new rectangle path to the current drawing.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
   * @returns The instance of the current object for chaining.
   */ rect(x, y, w, h, transform) {
        this.drawShape(new (0, _rectangleMjs.Rectangle)(x, y, w, h), transform);
        return this;
    }
    /**
   * Draws a circle shape. This method adds a new circle path to the current drawing.
   * @param x - The x-coordinate of the center of the circle.
   * @param y - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param transform - An optional `Matrix` object to apply a transformation to the circle.
   * @returns The instance of the current object for chaining.
   */ circle(x, y, radius, transform) {
        this.drawShape(new (0, _circleMjs.Circle)(x, y, radius), transform);
        return this;
    }
    /**
   * Draws a polygon shape. This method allows for the creation of complex polygons by specifying a sequence of points.
   * @param points - An array of numbers, or or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
   * representing the x and y coordinates of the polygon's vertices, in sequence.
   * @param close - A boolean indicating whether to close the polygon path. True by default.
   * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
   * @returns The instance of the current object for chaining.
   */ poly(points, close, transform) {
        const polygon = new (0, _polygonMjs.Polygon)(points);
        polygon.closePath = close;
        this.drawShape(polygon, transform);
        return this;
    }
    /**
   * Draws a regular polygon with a specified number of sides. All sides and angles are equal.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @param transform - An optional `Matrix` object to apply a transformation to the polygon.
   * @returns The instance of the current object for chaining.
   */ regularPoly(x, y, radius, sides, rotation = 0, transform) {
        sides = Math.max(sides | 0, 3);
        const startAngle = -1 * Math.PI / 2 + rotation;
        const delta = Math.PI * 2 / sides;
        const polygon = [];
        for(let i = 0; i < sides; i++){
            const angle = i * delta + startAngle;
            polygon.push(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
        }
        this.poly(polygon, true, transform);
        return this;
    }
    /**
   * Draws a polygon with rounded corners.
   * Similar to `regularPoly` but with the ability to round the corners of the polygon.
   * @param x - The x-coordinate of the center of the polygon.
   * @param y - The y-coordinate of the center of the polygon.
   * @param radius - The radius of the circumscribed circle of the polygon.
   * @param sides - The number of sides of the polygon. Must be 3 or more.
   * @param corner - The radius of the rounding of the corners.
   * @param rotation - The rotation angle of the polygon, in radians. Zero by default.
   * @param smoothness - Optional parameter to adjust the smoothness of the rounding.
   * @returns The instance of the current object for chaining.
   */ roundPoly(x, y, radius, sides, corner, rotation = 0, smoothness) {
        sides = Math.max(sides | 0, 3);
        if (corner <= 0) return this.regularPoly(x, y, radius, sides, rotation);
        const sideLength = radius * Math.sin(Math.PI / sides) - 1e-3;
        corner = Math.min(corner, sideLength);
        const startAngle = -1 * Math.PI / 2 + rotation;
        const delta = Math.PI * 2 / sides;
        const internalAngle = (sides - 2) * Math.PI / sides / 2;
        for(let i = 0; i < sides; i++){
            const angle = i * delta + startAngle;
            const x0 = x + radius * Math.cos(angle);
            const y0 = y + radius * Math.sin(angle);
            const a1 = angle + Math.PI + internalAngle;
            const a2 = angle - Math.PI - internalAngle;
            const x1 = x0 + corner * Math.cos(a1);
            const y1 = y0 + corner * Math.sin(a1);
            const x3 = x0 + corner * Math.cos(a2);
            const y3 = y0 + corner * Math.sin(a2);
            if (i === 0) this.moveTo(x1, y1);
            else this.lineTo(x1, y1);
            this.quadraticCurveTo(x0, y0, x3, y3, smoothness);
        }
        return this.closePath();
    }
    /**
   * Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
   * Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.
   * @param points - An array of `RoundedPoint` representing the corners of the shape to draw.
   * A minimum of 3 points is required.
   * @param radius - The default radius for the corners.
   * This radius is applied to all corners unless overridden in `points`.
   * @param useQuadratic - If set to true, rounded corners are drawn using a quadraticCurve
   *  method instead of an arc method. Defaults to false.
   * @param smoothness - Specifies the smoothness of the curve when `useQuadratic` is true.
   * Higher values make the curve smoother.
   * @returns The instance of the current object for chaining.
   */ roundShape(points, radius, useQuadratic = false, smoothness) {
        if (points.length < 3) return this;
        if (useQuadratic) (0, _roundShapeMjs.roundedShapeQuadraticCurve)(this, points, radius, smoothness);
        else (0, _roundShapeMjs.roundedShapeArc)(this, points, radius);
        return this.closePath();
    }
    /**
   * Draw Rectangle with fillet corners. This is much like rounded rectangle
   * however it support negative numbers as well for the corner radius.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param fillet - accept negative or positive values
   */ filletRect(x, y, width, height, fillet) {
        if (fillet === 0) return this.rect(x, y, width, height);
        const maxFillet = Math.min(width, height) / 2;
        const inset = Math.min(maxFillet, Math.max(-maxFillet, fillet));
        const right = x + width;
        const bottom = y + height;
        const dir = inset < 0 ? -inset : 0;
        const size = Math.abs(inset);
        return this.moveTo(x, y + size).arcTo(x + dir, y + dir, x + size, y, size).lineTo(right - size, y).arcTo(right - dir, y + dir, right, y + size, size).lineTo(right, bottom - size).arcTo(right - dir, bottom - dir, x + width - size, bottom, size).lineTo(x + size, bottom).arcTo(x + dir, bottom - dir, x, bottom - size, size).closePath();
    }
    /**
   * Draw Rectangle with chamfer corners. These are angled corners.
   * @param x - Upper left corner of rect
   * @param y - Upper right corner of rect
   * @param width - Width of rect
   * @param height - Height of rect
   * @param chamfer - non-zero real number, size of corner cutout
   * @param transform
   */ chamferRect(x, y, width, height, chamfer, transform) {
        if (chamfer <= 0) return this.rect(x, y, width, height);
        const inset = Math.min(chamfer, Math.min(width, height) / 2);
        const right = x + width;
        const bottom = y + height;
        const points = [
            x + inset,
            y,
            right - inset,
            y,
            right,
            y + inset,
            right,
            bottom - inset,
            right - inset,
            bottom,
            x + inset,
            bottom,
            x,
            bottom - inset,
            x,
            y + inset
        ];
        for(let i = points.length - 1; i >= 2; i -= 2)if (points[i] === points[i - 2] && points[i - 1] === points[i - 3]) points.splice(i - 1, 2);
        return this.poly(points, true, transform);
    }
    /**
   * Draws an ellipse at the specified location and with the given x and y radii.
   * An optional transformation can be applied, allowing for rotation, scaling, and translation.
   * @param x - The x-coordinate of the center of the ellipse.
   * @param y - The y-coordinate of the center of the ellipse.
   * @param radiusX - The horizontal radius of the ellipse.
   * @param radiusY - The vertical radius of the ellipse.
   * @param transform - An optional `Matrix` object to apply a transformation to the ellipse. This can include rotations.
   * @returns The instance of the current object for chaining.
   */ ellipse(x, y, radiusX, radiusY, transform) {
        this.drawShape(new (0, _ellipseMjs.Ellipse)(x, y, radiusX, radiusY), transform);
        return this;
    }
    /**
   * Draws a rectangle with rounded corners.
   * The corner radius can be specified to determine how rounded the corners should be.
   * An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.
   * @param x - The x-coordinate of the top-left corner of the rectangle.
   * @param y - The y-coordinate of the top-left corner of the rectangle.
   * @param w - The width of the rectangle.
   * @param h - The height of the rectangle.
   * @param radius - The radius of the rectangle's corners. If not specified, corners will be sharp.
   * @param transform - An optional `Matrix` object to apply a transformation to the rectangle.
   * @returns The instance of the current object for chaining.
   */ roundRect(x, y, w, h, radius, transform) {
        this.drawShape(new (0, _roundedRectangleMjs.RoundedRectangle)(x, y, w, h, radius), transform);
        return this;
    }
    /**
   * Draws a given shape on the canvas.
   * This is a generic method that can draw any type of shape specified by the `ShapePrimitive` parameter.
   * An optional transformation matrix can be applied to the shape, allowing for complex transformations.
   * @param shape - The shape to draw, defined as a `ShapePrimitive` object.
   * @param matrix - An optional `Matrix` for transforming the shape. This can include rotations,
   * scaling, and translations.
   * @returns The instance of the current object for chaining.
   */ drawShape(shape, matrix) {
        this.endPoly();
        this.shapePrimitives.push({
            shape,
            transform: matrix
        });
        return this;
    }
    /**
   * Starts a new polygon path from the specified starting point.
   * This method initializes a new polygon or ends the current one if it exists.
   * @param x - The x-coordinate of the starting point of the new polygon.
   * @param y - The y-coordinate of the starting point of the new polygon.
   * @returns The instance of the current object for chaining.
   */ startPoly(x, y) {
        let currentPoly = this._currentPoly;
        if (currentPoly) this.endPoly();
        currentPoly = new (0, _polygonMjs.Polygon)();
        currentPoly.points.push(x, y);
        this._currentPoly = currentPoly;
        return this;
    }
    /**
   * Ends the current polygon path. If `closePath` is set to true,
   * the path is closed by connecting the last point to the first one.
   * This method finalizes the current polygon and prepares it for drawing or adding to the shape primitives.
   * @param closePath - A boolean indicating whether to close the polygon by connecting the last point
   *  back to the starting point. False by default.
   * @returns The instance of the current object for chaining.
   */ endPoly(closePath = false) {
        const shape = this._currentPoly;
        if (shape && shape.points.length > 2) {
            shape.closePath = closePath;
            this.shapePrimitives.push({
                shape
            });
        }
        this._currentPoly = null;
        return this;
    }
    _ensurePoly(start = true) {
        if (this._currentPoly) return;
        this._currentPoly = new (0, _polygonMjs.Polygon)();
        if (start) {
            const lastShape = this.shapePrimitives[this.shapePrimitives.length - 1];
            if (lastShape) {
                let lx = lastShape.shape.x;
                let ly = lastShape.shape.y;
                if (!lastShape.transform.isIdentity()) {
                    const t = lastShape.transform;
                    const tempX = lx;
                    lx = t.a * lx + t.c * ly + t.tx;
                    ly = t.b * tempX + t.d * ly + t.ty;
                }
                this._currentPoly.points.push(lx, ly);
            } else this._currentPoly.points.push(0, 0);
        }
    }
    /** Builds the path. */ buildPath() {
        const path = this._graphicsPath2D;
        this.shapePrimitives.length = 0;
        this._currentPoly = null;
        for(let i = 0; i < path.instructions.length; i++){
            const instruction = path.instructions[i];
            this[instruction.action](...instruction.data);
        }
        this.finish();
    }
    /** Gets the bounds of the path. */ get bounds() {
        const bounds = this._bounds;
        bounds.clear();
        const shapePrimitives = this.shapePrimitives;
        for(let i = 0; i < shapePrimitives.length; i++){
            const shapePrimitive = shapePrimitives[i];
            const boundsRect = shapePrimitive.shape.getBounds(tempRectangle);
            if (shapePrimitive.transform) bounds.addRect(boundsRect, shapePrimitive.transform);
            else bounds.addRect(boundsRect);
        }
        return bounds;
    }
}

},{"../../../../maths/shapes/Circle.mjs":"eGxoh","../../../../maths/shapes/Ellipse.mjs":"c5kuA","../../../../maths/shapes/Polygon.mjs":"6X9r4","../../../../maths/shapes/Rectangle.mjs":"kCPrw","../../../../maths/shapes/RoundedRectangle.mjs":"4zWgG","../../../container/bounds/Bounds.mjs":"2E5wx","../buildCommands/buildAdaptiveBezier.mjs":"1M2co","../buildCommands/buildAdaptiveQuadratic.mjs":"5Jxpm","../buildCommands/buildArc.mjs":"at3E8","../buildCommands/buildArcTo.mjs":"kXZzi","../buildCommands/buildArcToSvg.mjs":"hCPk5","./roundShape.mjs":"kpHfv","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"eGxoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Circle", ()=>Circle);
var _rectangleMjs = require("./Rectangle.mjs");
"use strict";
class Circle {
    /**
   * @param x - The X coordinate of the center of this circle
   * @param y - The Y coordinate of the center of this circle
   * @param radius - The radius of the circle
   */ constructor(x = 0, y = 0, radius = 0){
        /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'circle'
     */ this.type = "circle";
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    /**
   * Creates a clone of this Circle instance
   * @returns A copy of the Circle
   */ clone() {
        return new Circle(this.x, this.y, this.radius);
    }
    /**
   * Checks whether the x and y coordinates given are contained within this circle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Circle
   */ contains(x, y) {
        if (this.radius <= 0) return false;
        const r2 = this.radius * this.radius;
        let dx = this.x - x;
        let dy = this.y - y;
        dx *= dx;
        dy *= dy;
        return dx + dy <= r2;
    }
    /**
   * Checks whether the x and y coordinates given are contained within this circle including the stroke.
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param width - The width of the line to check
   * @returns Whether the x/y coordinates are within this Circle
   */ strokeContains(x, y, width) {
        if (this.radius === 0) return false;
        const dx = this.x - x;
        const dy = this.y - y;
        const r = this.radius;
        const w2 = width / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < r + w2 && distance > r - w2;
    }
    /**
   * Returns the framing rectangle of the circle as a Rectangle object
   * @param out
   * @returns The framing rectangle
   */ getBounds(out) {
        out = out || new (0, _rectangleMjs.Rectangle)();
        out.x = this.x - this.radius;
        out.y = this.y - this.radius;
        out.width = this.radius * 2;
        out.height = this.radius * 2;
        return out;
    }
    /**
   * Copies another circle to this one.
   * @param circle - The circle to copy from.
   * @returns Returns itself.
   */ copyFrom(circle) {
        this.x = circle.x;
        this.y = circle.y;
        this.radius = circle.radius;
        return this;
    }
    /**
   * Copies this circle to another one.
   * @param circle - The circle to copy to.
   * @returns Returns given parameter.
   */ copyTo(circle) {
        circle.copyFrom(this);
        return circle;
    }
    toString() {
        return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
    }
}

},{"./Rectangle.mjs":"kCPrw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"c5kuA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ellipse", ()=>Ellipse);
var _rectangleMjs = require("./Rectangle.mjs");
"use strict";
class Ellipse {
    /**
   * @param x - The X coordinate of the center of this ellipse
   * @param y - The Y coordinate of the center of this ellipse
   * @param halfWidth - The half width of this ellipse
   * @param halfHeight - The half height of this ellipse
   */ constructor(x = 0, y = 0, halfWidth = 0, halfHeight = 0){
        /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'ellipse'
     */ this.type = "ellipse";
        this.x = x;
        this.y = y;
        this.halfWidth = halfWidth;
        this.halfHeight = halfHeight;
    }
    /**
   * Creates a clone of this Ellipse instance
   * @returns {Ellipse} A copy of the ellipse
   */ clone() {
        return new Ellipse(this.x, this.y, this.halfWidth, this.halfHeight);
    }
    /**
   * Checks whether the x and y coordinates given are contained within this ellipse
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coords are within this ellipse
   */ contains(x, y) {
        if (this.halfWidth <= 0 || this.halfHeight <= 0) return false;
        let normx = (x - this.x) / this.halfWidth;
        let normy = (y - this.y) / this.halfHeight;
        normx *= normx;
        normy *= normy;
        return normx + normy <= 1;
    }
    /**
   * Checks whether the x and y coordinates given are contained within this ellipse including stroke
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param width
   * @returns Whether the x/y coords are within this ellipse
   */ strokeContains(x, y, width) {
        const { halfWidth, halfHeight } = this;
        if (halfWidth <= 0 || halfHeight <= 0) return false;
        const halfStrokeWidth = width / 2;
        const innerA = halfWidth - halfStrokeWidth;
        const innerB = halfHeight - halfStrokeWidth;
        const outerA = halfWidth + halfStrokeWidth;
        const outerB = halfHeight + halfStrokeWidth;
        const normalizedX = x - this.x;
        const normalizedY = y - this.y;
        const innerEllipse = normalizedX * normalizedX / (innerA * innerA) + normalizedY * normalizedY / (innerB * innerB);
        const outerEllipse = normalizedX * normalizedX / (outerA * outerA) + normalizedY * normalizedY / (outerB * outerB);
        return innerEllipse > 1 && outerEllipse <= 1;
    }
    /**
   * Returns the framing rectangle of the ellipse as a Rectangle object
   * @returns The framing rectangle
   */ getBounds() {
        return new (0, _rectangleMjs.Rectangle)(this.x - this.halfWidth, this.y - this.halfHeight, this.halfWidth * 2, this.halfHeight * 2);
    }
    /**
   * Copies another ellipse to this one.
   * @param ellipse - The ellipse to copy from.
   * @returns Returns itself.
   */ copyFrom(ellipse) {
        this.x = ellipse.x;
        this.y = ellipse.y;
        this.halfWidth = ellipse.halfWidth;
        this.halfHeight = ellipse.halfHeight;
        return this;
    }
    /**
   * Copies this ellipse to another one.
   * @param ellipse - The ellipse to copy to.
   * @returns Returns given parameter.
   */ copyTo(ellipse) {
        ellipse.copyFrom(this);
        return ellipse;
    }
    toString() {
        return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
    }
}

},{"./Rectangle.mjs":"kCPrw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6X9r4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polygon", ()=>Polygon);
var _squaredDistanceToLineSegmentMjs = require("../misc/squaredDistanceToLineSegment.mjs");
var _rectangleMjs = require("./Rectangle.mjs");
"use strict";
class Polygon {
    /**
   * @param points - This can be an array of Points
   *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
   *  the arguments passed can be all the points of the polygon e.g.
   *  `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
   *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
   */ constructor(...points){
        /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'polygon'
     */ this.type = "polygon";
        let flat = Array.isArray(points[0]) ? points[0] : points;
        if (typeof flat[0] !== "number") {
            const p = [];
            for(let i = 0, il = flat.length; i < il; i++)p.push(flat[i].x, flat[i].y);
            flat = p;
        }
        this.points = flat;
        this.closePath = true;
    }
    /**
   * Creates a clone of this polygon.
   * @returns - A copy of the polygon.
   */ clone() {
        const points = this.points.slice();
        const polygon = new Polygon(points);
        polygon.closePath = this.closePath;
        return polygon;
    }
    /**
   * Checks whether the x and y coordinates passed to this function are contained within this polygon.
   * @param x - The X coordinate of the point to test.
   * @param y - The Y coordinate of the point to test.
   * @returns - Whether the x/y coordinates are within this polygon.
   */ contains(x, y) {
        let inside = false;
        const length = this.points.length / 2;
        for(let i = 0, j = length - 1; i < length; j = i++){
            const xi = this.points[i * 2];
            const yi = this.points[i * 2 + 1];
            const xj = this.points[j * 2];
            const yj = this.points[j * 2 + 1];
            const intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;
            if (intersect) inside = !inside;
        }
        return inside;
    }
    /**
   * Checks whether the x and y coordinates given are contained within this polygon including the stroke.
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @returns Whether the x/y coordinates are within this polygon
   */ strokeContains(x, y, strokeWidth) {
        const halfStrokeWidth = strokeWidth / 2;
        const halfStrokeWidthSqrd = halfStrokeWidth * halfStrokeWidth;
        const { points } = this;
        for(let i = 0; i < points.length; i += 2){
            const x1 = points[i];
            const y1 = points[i + 1];
            const x2 = points[(i + 2) % points.length];
            const y2 = points[(i + 3) % points.length];
            const distanceSqrd = (0, _squaredDistanceToLineSegmentMjs.squaredDistanceToLineSegment)(x, y, x1, y1, x2, y2);
            if (distanceSqrd <= halfStrokeWidthSqrd) return true;
        }
        return false;
    }
    /**
   * Returns the framing rectangle of the polygon as a Rectangle object
   * @param out - optional rectangle to store the result
   * @returns The framing rectangle
   */ getBounds(out) {
        out = out || new (0, _rectangleMjs.Rectangle)();
        const points = this.points;
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        for(let i = 0, n = points.length; i < n; i += 2){
            const x = points[i];
            const y = points[i + 1];
            minX = x < minX ? x : minX;
            maxX = x > maxX ? x : maxX;
            minY = y < minY ? y : minY;
            maxY = y > maxY ? y : maxY;
        }
        out.x = minX;
        out.width = maxX - minX;
        out.y = minY;
        out.height = maxY - minY;
        return out;
    }
    /**
   * Copies another polygon to this one.
   * @param polygon - The polygon to copy from.
   * @returns Returns itself.
   */ copyFrom(polygon) {
        this.points = polygon.points.slice();
        this.closePath = polygon.closePath;
        return this;
    }
    /**
   * Copies this polygon to another one.
   * @param polygon - The polygon to copy to.
   * @returns Returns given parameter.
   */ copyTo(polygon) {
        polygon.copyFrom(this);
        return polygon;
    }
    toString() {
        return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((pointsDesc, currentPoint)=>`${pointsDesc}, ${currentPoint}`, "")}]`;
    }
    /**
   * Get the last X coordinate of the polygon
   * @readonly
   */ get lastX() {
        return this.points[this.points.length - 2];
    }
    /**
   * Get the last Y coordinate of the polygon
   * @readonly
   */ get lastY() {
        return this.points[this.points.length - 1];
    }
    /**
   * Get the first X coordinate of the polygon
   * @readonly
   */ get x() {
        return this.points[this.points.length - 2];
    }
    /**
   * Get the first Y coordinate of the polygon
   * @readonly
   */ get y() {
        return this.points[this.points.length - 1];
    }
}

},{"../misc/squaredDistanceToLineSegment.mjs":"diFxn","./Rectangle.mjs":"kCPrw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"diFxn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "squaredDistanceToLineSegment", ()=>squaredDistanceToLineSegment);
"use strict";
function squaredDistanceToLineSegment(x, y, x1, y1, x2, y2) {
    const a = x - x1;
    const b = y - y1;
    const c = x2 - x1;
    const d = y2 - y1;
    const dot = a * c + b * d;
    const lenSq = c * c + d * d;
    let param = -1;
    if (lenSq !== 0) param = dot / lenSq;
    let xx;
    let yy;
    if (param < 0) {
        xx = x1;
        yy = y1;
    } else if (param > 1) {
        xx = x2;
        yy = y2;
    } else {
        xx = x1 + param * c;
        yy = y1 + param * d;
    }
    const dx = x - xx;
    const dy = y - yy;
    return dx * dx + dy * dy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4zWgG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RoundedRectangle", ()=>RoundedRectangle);
var _rectangleMjs = require("./Rectangle.mjs");
"use strict";
const isCornerWithinStroke = (pX, pY, cornerX, cornerY, radius, halfStrokeWidth)=>{
    const dx = pX - cornerX;
    const dy = pY - cornerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance >= radius - halfStrokeWidth && distance <= radius + halfStrokeWidth;
};
class RoundedRectangle {
    /**
   * @param x - The X coordinate of the upper-left corner of the rounded rectangle
   * @param y - The Y coordinate of the upper-left corner of the rounded rectangle
   * @param width - The overall width of this rounded rectangle
   * @param height - The overall height of this rounded rectangle
   * @param radius - Controls the radius of the rounded corners
   */ constructor(x = 0, y = 0, width = 0, height = 0, radius = 20){
        /**
     * The type of the object, mainly used to avoid `instanceof` checks
     * @default 'roundedRectangle'
     */ this.type = "roundedRectangle";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
    }
    /**
   * Returns the framing rectangle of the rounded rectangle as a Rectangle object
   * @param out - optional rectangle to store the result
   * @returns The framing rectangle
   */ getBounds(out) {
        out = out || new (0, _rectangleMjs.Rectangle)();
        out.x = this.x;
        out.y = this.y;
        out.width = this.width;
        out.height = this.height;
        return out;
    }
    /**
   * Creates a clone of this Rounded Rectangle.
   * @returns - A copy of the rounded rectangle.
   */ clone() {
        return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
    }
    /**
   * Copies another rectangle to this one.
   * @param rectangle - The rectangle to copy from.
   * @returns Returns itself.
   */ copyFrom(rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        return this;
    }
    /**
   * Copies this rectangle to another one.
   * @param rectangle - The rectangle to copy to.
   * @returns Returns given parameter.
   */ copyTo(rectangle) {
        rectangle.copyFrom(this);
        return rectangle;
    }
    /**
   * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
   * @param x - The X coordinate of the point to test.
   * @param y - The Y coordinate of the point to test.
   * @returns - Whether the x/y coordinates are within this Rounded Rectangle.
   */ contains(x, y) {
        if (this.width <= 0 || this.height <= 0) return false;
        if (x >= this.x && x <= this.x + this.width) {
            if (y >= this.y && y <= this.y + this.height) {
                const radius = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                if (y >= this.y + radius && y <= this.y + this.height - radius || x >= this.x + radius && x <= this.x + this.width - radius) return true;
                let dx = x - (this.x + radius);
                let dy = y - (this.y + radius);
                const radius2 = radius * radius;
                if (dx * dx + dy * dy <= radius2) return true;
                dx = x - (this.x + this.width - radius);
                if (dx * dx + dy * dy <= radius2) return true;
                dy = y - (this.y + this.height - radius);
                if (dx * dx + dy * dy <= radius2) return true;
                dx = x - (this.x + radius);
                if (dx * dx + dy * dy <= radius2) return true;
            }
        }
        return false;
    }
    /**
   * Checks whether the x and y coordinates given are contained within this rectangle including the stroke.
   * @param pX - The X coordinate of the point to test
   * @param pY - The Y coordinate of the point to test
   * @param strokeWidth - The width of the line to check
   * @returns Whether the x/y coordinates are within this rectangle
   */ strokeContains(pX, pY, strokeWidth) {
        const { x, y, width, height, radius } = this;
        const halfStrokeWidth = strokeWidth / 2;
        const innerX = x + radius;
        const innerY = y + radius;
        const innerWidth = width - radius * 2;
        const innerHeight = height - radius * 2;
        const rightBound = x + width;
        const bottomBound = y + height;
        if ((pX >= x - halfStrokeWidth && pX <= x + halfStrokeWidth || pX >= rightBound - halfStrokeWidth && pX <= rightBound + halfStrokeWidth) && pY >= innerY && pY <= innerY + innerHeight) return true;
        if ((pY >= y - halfStrokeWidth && pY <= y + halfStrokeWidth || pY >= bottomBound - halfStrokeWidth && pY <= bottomBound + halfStrokeWidth) && pX >= innerX && pX <= innerX + innerWidth) return true;
        return(// Top-left
        pX < innerX && pY < innerY && isCornerWithinStroke(pX, pY, innerX, innerY, radius, halfStrokeWidth) || pX > rightBound - radius && pY < innerY && isCornerWithinStroke(pX, pY, rightBound - radius, innerY, radius, halfStrokeWidth) || pX > rightBound - radius && pY > bottomBound - radius && isCornerWithinStroke(pX, pY, rightBound - radius, bottomBound - radius, radius, halfStrokeWidth) || pX < innerX && pY > bottomBound - radius && isCornerWithinStroke(pX, pY, innerX, bottomBound - radius, radius, halfStrokeWidth));
    }
    toString() {
        return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
    }
}

},{"./Rectangle.mjs":"kCPrw","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1M2co":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildAdaptiveBezier", ()=>buildAdaptiveBezier);
var _graphicsContextSystemMjs = require("../GraphicsContextSystem.mjs");
"use strict";
const RECURSION_LIMIT = 8;
const FLT_EPSILON = 11920929e-14;
const PATH_DISTANCE_EPSILON = 1;
const curveAngleToleranceEpsilon = 0.01;
const mAngleTolerance = 0;
const mCuspLimit = 0;
function buildAdaptiveBezier(points, sX, sY, cp1x, cp1y, cp2x, cp2y, eX, eY, smoothness) {
    const scale = 1;
    const smoothing = Math.min(0.99, // a value of 1.0 actually inverts smoothing, so we cap it at 0.99
    Math.max(0, smoothness ?? (0, _graphicsContextSystemMjs.GraphicsContextSystem).defaultOptions.bezierSmoothness));
    let distanceTolerance = (PATH_DISTANCE_EPSILON - smoothing) / scale;
    distanceTolerance *= distanceTolerance;
    begin(sX, sY, cp1x, cp1y, cp2x, cp2y, eX, eY, points, distanceTolerance);
    return points;
}
function begin(sX, sY, cp1x, cp1y, cp2x, cp2y, eX, eY, points, distanceTolerance) {
    recursive(sX, sY, cp1x, cp1y, cp2x, cp2y, eX, eY, points, distanceTolerance, 0);
    points.push(eX, eY);
}
function recursive(x1, y1, x2, y2, x3, y3, x4, y4, points, distanceTolerance, level) {
    if (level > RECURSION_LIMIT) return;
    const pi = Math.PI;
    const x12 = (x1 + x2) / 2;
    const y12 = (y1 + y2) / 2;
    const x23 = (x2 + x3) / 2;
    const y23 = (y2 + y3) / 2;
    const x34 = (x3 + x4) / 2;
    const y34 = (y3 + y4) / 2;
    const x123 = (x12 + x23) / 2;
    const y123 = (y12 + y23) / 2;
    const x234 = (x23 + x34) / 2;
    const y234 = (y23 + y34) / 2;
    const x1234 = (x123 + x234) / 2;
    const y1234 = (y123 + y234) / 2;
    if (level > 0) {
        let dx = x4 - x1;
        let dy = y4 - y1;
        const d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx);
        const d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx);
        let da1;
        let da2;
        if (d2 > FLT_EPSILON && d3 > FLT_EPSILON) {
            if ((d2 + d3) * (d2 + d3) <= distanceTolerance * (dx * dx + dy * dy)) {
                if (mAngleTolerance < curveAngleToleranceEpsilon) {
                    points.push(x1234, y1234);
                    return;
                }
                const a23 = Math.atan2(y3 - y2, x3 - x2);
                da1 = Math.abs(a23 - Math.atan2(y2 - y1, x2 - x1));
                da2 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - a23);
                if (da1 >= pi) da1 = 2 * pi - da1;
                if (da2 >= pi) da2 = 2 * pi - da2;
                if (da1 + da2 < mAngleTolerance) {
                    points.push(x1234, y1234);
                    return;
                }
                if (mCuspLimit !== 0) {
                    if (da1 > mCuspLimit) {
                        points.push(x2, y2);
                        return;
                    }
                    if (da2 > mCuspLimit) {
                        points.push(x3, y3);
                        return;
                    }
                }
            }
        } else if (d2 > FLT_EPSILON) {
            if (d2 * d2 <= distanceTolerance * (dx * dx + dy * dy)) {
                if (mAngleTolerance < curveAngleToleranceEpsilon) {
                    points.push(x1234, y1234);
                    return;
                }
                da1 = Math.abs(Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y2 - y1, x2 - x1));
                if (da1 >= pi) da1 = 2 * pi - da1;
                if (da1 < mAngleTolerance) {
                    points.push(x2, y2);
                    points.push(x3, y3);
                    return;
                }
                if (mCuspLimit !== 0) {
                    if (da1 > mCuspLimit) {
                        points.push(x2, y2);
                        return;
                    }
                }
            }
        } else if (d3 > FLT_EPSILON) {
            if (d3 * d3 <= distanceTolerance * (dx * dx + dy * dy)) {
                if (mAngleTolerance < curveAngleToleranceEpsilon) {
                    points.push(x1234, y1234);
                    return;
                }
                da1 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y3 - y2, x3 - x2));
                if (da1 >= pi) da1 = 2 * pi - da1;
                if (da1 < mAngleTolerance) {
                    points.push(x2, y2);
                    points.push(x3, y3);
                    return;
                }
                if (mCuspLimit !== 0) {
                    if (da1 > mCuspLimit) {
                        points.push(x3, y3);
                        return;
                    }
                }
            }
        } else {
            dx = x1234 - (x1 + x4) / 2;
            dy = y1234 - (y1 + y4) / 2;
            if (dx * dx + dy * dy <= distanceTolerance) {
                points.push(x1234, y1234);
                return;
            }
        }
    }
    recursive(x1, y1, x12, y12, x123, y123, x1234, y1234, points, distanceTolerance, level + 1);
    recursive(x1234, y1234, x234, y234, x34, y34, x4, y4, points, distanceTolerance, level + 1);
}

},{"../GraphicsContextSystem.mjs":"2yAJV","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"5Jxpm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildAdaptiveQuadratic", ()=>buildAdaptiveQuadratic);
var _graphicsContextSystemMjs = require("../GraphicsContextSystem.mjs");
"use strict";
const RECURSION_LIMIT = 8;
const FLT_EPSILON = 11920929e-14;
const PATH_DISTANCE_EPSILON = 1;
const curveAngleToleranceEpsilon = 0.01;
const mAngleTolerance = 0;
function buildAdaptiveQuadratic(points, sX, sY, cp1x, cp1y, eX, eY, smoothness) {
    const scale = 1;
    const smoothing = Math.min(0.99, // a value of 1.0 actually inverts smoothing, so we cap it at 0.99
    Math.max(0, smoothness ?? (0, _graphicsContextSystemMjs.GraphicsContextSystem).defaultOptions.bezierSmoothness));
    let distanceTolerance = (PATH_DISTANCE_EPSILON - smoothing) / scale;
    distanceTolerance *= distanceTolerance;
    begin(sX, sY, cp1x, cp1y, eX, eY, points, distanceTolerance);
    return points;
}
function begin(sX, sY, cp1x, cp1y, eX, eY, points, distanceTolerance) {
    recursive(points, sX, sY, cp1x, cp1y, eX, eY, distanceTolerance, 0);
    points.push(eX, eY);
}
function recursive(points, x1, y1, x2, y2, x3, y3, distanceTolerance, level) {
    if (level > RECURSION_LIMIT) return;
    const pi = Math.PI;
    const x12 = (x1 + x2) / 2;
    const y12 = (y1 + y2) / 2;
    const x23 = (x2 + x3) / 2;
    const y23 = (y2 + y3) / 2;
    const x123 = (x12 + x23) / 2;
    const y123 = (y12 + y23) / 2;
    let dx = x3 - x1;
    let dy = y3 - y1;
    const d = Math.abs((x2 - x3) * dy - (y2 - y3) * dx);
    if (d > FLT_EPSILON) {
        if (d * d <= distanceTolerance * (dx * dx + dy * dy)) {
            if (mAngleTolerance < curveAngleToleranceEpsilon) {
                points.push(x123, y123);
                return;
            }
            let da = Math.abs(Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y2 - y1, x2 - x1));
            if (da >= pi) da = 2 * pi - da;
            if (da < mAngleTolerance) {
                points.push(x123, y123);
                return;
            }
        }
    } else {
        dx = x123 - (x1 + x3) / 2;
        dy = y123 - (y1 + y3) / 2;
        if (dx * dx + dy * dy <= distanceTolerance) {
            points.push(x123, y123);
            return;
        }
    }
    recursive(points, x1, y1, x12, y12, x123, y123, distanceTolerance, level + 1);
    recursive(points, x123, y123, x23, y23, x3, y3, distanceTolerance, level + 1);
}

},{"../GraphicsContextSystem.mjs":"2yAJV","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"at3E8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildArc", ()=>buildArc);
"use strict";
function buildArc(points, x, y, radius, start, end, clockwise, steps) {
    let dist = Math.abs(start - end);
    if (!clockwise && start > end) dist = 2 * Math.PI - dist;
    else if (clockwise && end > start) dist = 2 * Math.PI - dist;
    steps = steps || Math.max(6, Math.floor(6 * Math.pow(radius, 1 / 3) * (dist / Math.PI)));
    steps = Math.max(steps, 3);
    let f = dist / steps;
    let t = start;
    f *= clockwise ? -1 : 1;
    for(let i = 0; i < steps + 1; i++){
        const cs = Math.cos(t);
        const sn = Math.sin(t);
        const nx = x + cs * radius;
        const ny = y + sn * radius;
        points.push(nx, ny);
        t += f;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kXZzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildArcTo", ()=>buildArcTo);
var _buildArcMjs = require("./buildArc.mjs");
"use strict";
function buildArcTo(points, x1, y1, x2, y2, radius) {
    const fromX = points[points.length - 2];
    const fromY = points[points.length - 1];
    const a1 = fromY - y1;
    const b1 = fromX - x1;
    const a2 = y2 - y1;
    const b2 = x2 - x1;
    const mm = Math.abs(a1 * b2 - b1 * a2);
    if (mm < 1e-8 || radius === 0) {
        if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) points.push(x1, y1);
        return;
    }
    const dd = a1 * a1 + b1 * b1;
    const cc = a2 * a2 + b2 * b2;
    const tt = a1 * a2 + b1 * b2;
    const k1 = radius * Math.sqrt(dd) / mm;
    const k2 = radius * Math.sqrt(cc) / mm;
    const j1 = k1 * tt / dd;
    const j2 = k2 * tt / cc;
    const cx = k1 * b2 + k2 * b1;
    const cy = k1 * a2 + k2 * a1;
    const px = b1 * (k2 + j1);
    const py = a1 * (k2 + j1);
    const qx = b2 * (k1 + j2);
    const qy = a2 * (k1 + j2);
    const startAngle = Math.atan2(py - cy, px - cx);
    const endAngle = Math.atan2(qy - cy, qx - cx);
    (0, _buildArcMjs.buildArc)(points, cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
}

},{"./buildArc.mjs":"at3E8","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"hCPk5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildArcToSvg", ()=>buildArcToSvg);
var _buildAdaptiveBezierMjs = require("./buildAdaptiveBezier.mjs");
"use strict";
const TAU = Math.PI * 2;
const out = {
    centerX: 0,
    centerY: 0,
    ang1: 0,
    ang2: 0
};
const mapToEllipse = ({ x, y }, rx, ry, cosPhi, sinPhi, centerX, centerY, out2)=>{
    x *= rx;
    y *= ry;
    const xp = cosPhi * x - sinPhi * y;
    const yp = sinPhi * x + cosPhi * y;
    out2.x = xp + centerX;
    out2.y = yp + centerY;
    return out2;
};
function approxUnitArc(ang1, ang2) {
    const a1 = ang2 === -1.5707963267948966 ? -0.551915024494 : 4 / 3 * Math.tan(ang2 / 4);
    const a = ang2 === 1.5707963267948966 ? 0.551915024494 : a1;
    const x1 = Math.cos(ang1);
    const y1 = Math.sin(ang1);
    const x2 = Math.cos(ang1 + ang2);
    const y2 = Math.sin(ang1 + ang2);
    return [
        {
            x: x1 - y1 * a,
            y: y1 + x1 * a
        },
        {
            x: x2 + y2 * a,
            y: y2 - x2 * a
        },
        {
            x: x2,
            y: y2
        }
    ];
}
const vectorAngle = (ux, uy, vx, vy)=>{
    const sign = ux * vy - uy * vx < 0 ? -1 : 1;
    let dot = ux * vx + uy * vy;
    if (dot > 1) dot = 1;
    if (dot < -1) dot = -1;
    return sign * Math.acos(dot);
};
const getArcCenter = (px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinPhi, cosPhi, pxp, pyp, out2)=>{
    const rxSq = Math.pow(rx, 2);
    const rySq = Math.pow(ry, 2);
    const pxpSq = Math.pow(pxp, 2);
    const pypSq = Math.pow(pyp, 2);
    let radicant = rxSq * rySq - rxSq * pypSq - rySq * pxpSq;
    if (radicant < 0) radicant = 0;
    radicant /= rxSq * pypSq + rySq * pxpSq;
    radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);
    const centerXp = radicant * rx / ry * pyp;
    const centerYp = radicant * -ry / rx * pxp;
    const centerX = cosPhi * centerXp - sinPhi * centerYp + (px + cx) / 2;
    const centerY = sinPhi * centerXp + cosPhi * centerYp + (py + cy) / 2;
    const vx1 = (pxp - centerXp) / rx;
    const vy1 = (pyp - centerYp) / ry;
    const vx2 = (-pxp - centerXp) / rx;
    const vy2 = (-pyp - centerYp) / ry;
    const ang1 = vectorAngle(1, 0, vx1, vy1);
    let ang2 = vectorAngle(vx1, vy1, vx2, vy2);
    if (sweepFlag === 0 && ang2 > 0) ang2 -= TAU;
    if (sweepFlag === 1 && ang2 < 0) ang2 += TAU;
    out2.centerX = centerX;
    out2.centerY = centerY;
    out2.ang1 = ang1;
    out2.ang2 = ang2;
};
function buildArcToSvg(points, px, py, cx, cy, rx, ry, xAxisRotation = 0, largeArcFlag = 0, sweepFlag = 0) {
    if (rx === 0 || ry === 0) return;
    const sinPhi = Math.sin(xAxisRotation * TAU / 360);
    const cosPhi = Math.cos(xAxisRotation * TAU / 360);
    const pxp = cosPhi * (px - cx) / 2 + sinPhi * (py - cy) / 2;
    const pyp = -sinPhi * (px - cx) / 2 + cosPhi * (py - cy) / 2;
    if (pxp === 0 && pyp === 0) return;
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    const lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);
    if (lambda > 1) {
        rx *= Math.sqrt(lambda);
        ry *= Math.sqrt(lambda);
    }
    getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinPhi, cosPhi, pxp, pyp, out);
    let { ang1, ang2 } = out;
    const { centerX, centerY } = out;
    let ratio = Math.abs(ang2) / (TAU / 4);
    if (Math.abs(1 - ratio) < 1e-7) ratio = 1;
    const segments = Math.max(Math.ceil(ratio), 1);
    ang2 /= segments;
    let lastX = points[points.length - 2];
    let lastY = points[points.length - 1];
    const outCurvePoint = {
        x: 0,
        y: 0
    };
    for(let i = 0; i < segments; i++){
        const curve = approxUnitArc(ang1, ang2);
        const { x: x1, y: y1 } = mapToEllipse(curve[0], rx, ry, cosPhi, sinPhi, centerX, centerY, outCurvePoint);
        const { x: x2, y: y2 } = mapToEllipse(curve[1], rx, ry, cosPhi, sinPhi, centerX, centerY, outCurvePoint);
        const { x, y } = mapToEllipse(curve[2], rx, ry, cosPhi, sinPhi, centerX, centerY, outCurvePoint);
        (0, _buildAdaptiveBezierMjs.buildAdaptiveBezier)(points, lastX, lastY, x1, y1, x2, y2, x, y);
        lastX = x;
        lastY = y;
        ang1 += ang2;
    }
}

},{"./buildAdaptiveBezier.mjs":"1M2co","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"kpHfv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "roundedShapeArc", ()=>roundedShapeArc);
parcelHelpers.export(exports, "roundedShapeQuadraticCurve", ()=>roundedShapeQuadraticCurve);
"use strict";
function roundedShapeArc(g, points, radius) {
    const vecFrom = (p, pp)=>{
        const x = pp.x - p.x;
        const y = pp.y - p.y;
        const len = Math.sqrt(x * x + y * y);
        const nx = x / len;
        const ny = y / len;
        return {
            len,
            nx,
            ny
        };
    };
    const sharpCorner = (i, p)=>{
        if (i === 0) g.moveTo(p.x, p.y);
        else g.lineTo(p.x, p.y);
    };
    let p1 = points[points.length - 1];
    for(let i = 0; i < points.length; i++){
        const p2 = points[i % points.length];
        const pRadius = p2.radius ?? radius;
        if (pRadius <= 0) {
            sharpCorner(i, p2);
            p1 = p2;
            continue;
        }
        const p3 = points[(i + 1) % points.length];
        const v1 = vecFrom(p2, p1);
        const v2 = vecFrom(p2, p3);
        if (v1.len < 1e-4 || v2.len < 1e-4) {
            sharpCorner(i, p2);
            p1 = p2;
            continue;
        }
        let angle = Math.asin(v1.nx * v2.ny - v1.ny * v2.nx);
        let radDirection = 1;
        let drawDirection = false;
        if (v1.nx * v2.nx - v1.ny * -v2.ny < 0) {
            if (angle < 0) angle = Math.PI + angle;
            else {
                angle = Math.PI - angle;
                radDirection = -1;
                drawDirection = true;
            }
        } else if (angle > 0) {
            radDirection = -1;
            drawDirection = true;
        }
        const halfAngle = angle / 2;
        let cRadius;
        let lenOut = Math.abs(Math.cos(halfAngle) * pRadius / Math.sin(halfAngle));
        if (lenOut > Math.min(v1.len / 2, v2.len / 2)) {
            lenOut = Math.min(v1.len / 2, v2.len / 2);
            cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
        } else cRadius = pRadius;
        const cX = p2.x + v2.nx * lenOut + -v2.ny * cRadius * radDirection;
        const cY = p2.y + v2.ny * lenOut + v2.nx * cRadius * radDirection;
        const startAngle = Math.atan2(v1.ny, v1.nx) + Math.PI / 2 * radDirection;
        const endAngle = Math.atan2(v2.ny, v2.nx) - Math.PI / 2 * radDirection;
        if (i === 0) g.moveTo(cX + Math.cos(startAngle) * cRadius, cY + Math.sin(startAngle) * cRadius);
        g.arc(cX, cY, cRadius, startAngle, endAngle, drawDirection);
        p1 = p2;
    }
}
function roundedShapeQuadraticCurve(g, points, radius, smoothness) {
    const distance = (p1, p2)=>Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    const pointLerp = (p1, p2, t)=>({
            x: p1.x + (p2.x - p1.x) * t,
            y: p1.y + (p2.y - p1.y) * t
        });
    const numPoints = points.length;
    for(let i = 0; i < numPoints; i++){
        const thisPoint = points[(i + 1) % numPoints];
        const pRadius = thisPoint.radius ?? radius;
        if (pRadius <= 0) {
            if (i === 0) g.moveTo(thisPoint.x, thisPoint.y);
            else g.lineTo(thisPoint.x, thisPoint.y);
            continue;
        }
        const lastPoint = points[i];
        const nextPoint = points[(i + 2) % numPoints];
        const lastEdgeLength = distance(lastPoint, thisPoint);
        let start;
        if (lastEdgeLength < 1e-4) start = thisPoint;
        else {
            const lastOffsetDistance = Math.min(lastEdgeLength / 2, pRadius);
            start = pointLerp(thisPoint, lastPoint, lastOffsetDistance / lastEdgeLength);
        }
        const nextEdgeLength = distance(nextPoint, thisPoint);
        let end;
        if (nextEdgeLength < 1e-4) end = thisPoint;
        else {
            const nextOffsetDistance = Math.min(nextEdgeLength / 2, pRadius);
            end = pointLerp(thisPoint, nextPoint, nextOffsetDistance / nextEdgeLength);
        }
        if (i === 0) g.moveTo(start.x, start.y);
        else g.lineTo(start.x, start.y);
        g.quadraticCurveTo(thisPoint.x, thisPoint.y, end.x, end.y, smoothness);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gzIev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SVGParser", ()=>SVGParser);
var _colorMjs = require("../../../../color/Color.mjs");
var _graphicsPathMjs = require("../path/GraphicsPath.mjs");
"use strict";
function SVGParser(svg, graphicsContext) {
    if (typeof svg === "string") {
        const div = document.createElement("div");
        div.innerHTML = svg.trim();
        svg = div.querySelector("svg");
    }
    const session = {
        context: graphicsContext,
        path: new (0, _graphicsPathMjs.GraphicsPath)()
    };
    renderChildren(svg, session, null, null);
    return graphicsContext;
}
function renderChildren(svg, session, fillStyle, strokeStyle) {
    const children = svg.children;
    const { fillStyle: f1, strokeStyle: s1 } = parseStyle(svg);
    if (f1 && fillStyle) fillStyle = {
        ...fillStyle,
        ...f1
    };
    else if (f1) fillStyle = f1;
    if (s1 && strokeStyle) strokeStyle = {
        ...strokeStyle,
        ...s1
    };
    else if (s1) strokeStyle = s1;
    session.context.fillStyle = fillStyle;
    session.context.strokeStyle = strokeStyle;
    let x;
    let y;
    let x1;
    let y1;
    let x2;
    let y2;
    let cx;
    let cy;
    let r;
    let rx;
    let ry;
    let points;
    let pointsString;
    let d;
    let graphicsPath;
    let width;
    let height;
    switch(svg.nodeName.toLowerCase()){
        case "path":
            d = svg.getAttribute("d");
            graphicsPath = new (0, _graphicsPathMjs.GraphicsPath)(d);
            session.context.path(graphicsPath);
            if (fillStyle) session.context.fill();
            if (strokeStyle) session.context.stroke();
            break;
        case "circle":
            cx = parseFloatAttribute(svg, "cx", 0);
            cy = parseFloatAttribute(svg, "cy", 0);
            r = parseFloatAttribute(svg, "r", 0);
            session.context.ellipse(cx, cy, r, r);
            if (fillStyle) session.context.fill();
            if (strokeStyle) session.context.stroke();
            break;
        case "rect":
            x = parseFloatAttribute(svg, "x", 0);
            y = parseFloatAttribute(svg, "y", 0);
            width = parseFloatAttribute(svg, "width", 0);
            height = parseFloatAttribute(svg, "height", 0);
            rx = parseFloatAttribute(svg, "rx", 0);
            ry = parseFloatAttribute(svg, "ry", 0);
            if (rx || ry) session.context.roundRect(x, y, width, height, rx || ry);
            else session.context.rect(x, y, width, height);
            if (fillStyle) session.context.fill();
            if (strokeStyle) session.context.stroke();
            break;
        case "ellipse":
            cx = parseFloatAttribute(svg, "cx", 0);
            cy = parseFloatAttribute(svg, "cy", 0);
            rx = parseFloatAttribute(svg, "rx", 0);
            ry = parseFloatAttribute(svg, "ry", 0);
            session.context.beginPath();
            session.context.ellipse(cx, cy, rx, ry);
            if (fillStyle) session.context.fill();
            if (strokeStyle) session.context.stroke();
            break;
        case "line":
            x1 = parseFloatAttribute(svg, "x1", 0);
            y1 = parseFloatAttribute(svg, "y1", 0);
            x2 = parseFloatAttribute(svg, "x2", 0);
            y2 = parseFloatAttribute(svg, "y2", 0);
            session.context.beginPath();
            session.context.moveTo(x1, y1);
            session.context.lineTo(x2, y2);
            if (strokeStyle) session.context.stroke();
            break;
        case "polygon":
            pointsString = svg.getAttribute("points");
            points = pointsString.match(/\d+/g).map((n)=>parseInt(n, 10));
            session.context.poly(points, true);
            if (fillStyle) session.context.fill();
            if (strokeStyle) session.context.stroke();
            break;
        case "polyline":
            pointsString = svg.getAttribute("points");
            points = pointsString.match(/\d+/g).map((n)=>parseInt(n, 10));
            session.context.poly(points, false);
            if (strokeStyle) session.context.stroke();
            break;
        case "g":
        case "svg":
            break;
        default:
            console.info(`[SVG parser] <${svg.nodeName}> elements unsupported`);
            break;
    }
    for(let i = 0; i < children.length; i++)renderChildren(children[i], session, fillStyle, strokeStyle);
}
function parseFloatAttribute(svg, id, defaultValue) {
    const value = svg.getAttribute(id);
    return value ? Number(value) : defaultValue;
}
function parseStyle(svg) {
    const style = svg.getAttribute("style");
    const strokeStyle = {};
    const fillStyle = {};
    let useFill = false;
    let useStroke = false;
    if (style) {
        const styleParts = style.split(";");
        for(let i = 0; i < styleParts.length; i++){
            const stylePart = styleParts[i];
            const [key, value] = stylePart.split(":");
            switch(key){
                case "stroke":
                    if (value !== "none") {
                        strokeStyle.color = (0, _colorMjs.Color).shared.setValue(value).toNumber();
                        useStroke = true;
                    }
                    break;
                case "stroke-width":
                    strokeStyle.width = Number(value);
                    break;
                case "fill":
                    if (value !== "none") {
                        useFill = true;
                        fillStyle.color = (0, _colorMjs.Color).shared.setValue(value).toNumber();
                    }
                    break;
                case "fill-opacity":
                    fillStyle.alpha = Number(value);
                    break;
                case "stroke-opacity":
                    strokeStyle.alpha = Number(value);
                    break;
                case "opacity":
                    fillStyle.alpha = Number(value);
                    strokeStyle.alpha = Number(value);
                    break;
            }
        }
    } else {
        const stroke = svg.getAttribute("stroke");
        if (stroke && stroke !== "none") {
            useStroke = true;
            strokeStyle.color = (0, _colorMjs.Color).shared.setValue(stroke).toNumber();
            strokeStyle.width = parseFloatAttribute(svg, "stroke-width", 1);
        }
        const fill = svg.getAttribute("fill");
        if (fill && fill !== "none") {
            useFill = true;
            fillStyle.color = (0, _colorMjs.Color).shared.setValue(fill).toNumber();
        }
    }
    return {
        strokeStyle: useStroke ? strokeStyle : null,
        fillStyle: useFill ? fillStyle : null
    };
}

},{"../../../../color/Color.mjs":"duTAI","../path/GraphicsPath.mjs":"gtauo","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8QzKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertFillInputToFillStyle", ()=>convertFillInputToFillStyle);
var _colorMjs = require("../../../../color/Color.mjs");
var _matrixMjs = require("../../../../maths/matrix/Matrix.mjs");
var _textureMjs = require("../../../../rendering/renderers/shared/texture/Texture.mjs");
var _fillGradientMjs = require("../fill/FillGradient.mjs");
var _fillPatternMjs = require("../fill/FillPattern.mjs");
"use strict";
function convertFillInputToFillStyle(value, defaultStyle) {
    if (value === void 0 || value === null) return null;
    let fillStyleToParse;
    let styleToMerge;
    if (value?.fill) {
        styleToMerge = value.fill;
        fillStyleToParse = {
            ...defaultStyle,
            ...value
        };
    } else {
        styleToMerge = value;
        fillStyleToParse = defaultStyle;
    }
    if ((0, _colorMjs.Color).isColorLike(styleToMerge)) {
        const temp = (0, _colorMjs.Color).shared.setValue(styleToMerge ?? 0);
        const opts = {
            ...fillStyleToParse,
            color: temp.toNumber(),
            alpha: temp.alpha === 1 ? fillStyleToParse.alpha : temp.alpha,
            texture: (0, _textureMjs.Texture).WHITE
        };
        return opts;
    } else if (styleToMerge instanceof (0, _fillPatternMjs.FillPattern)) {
        const pattern = styleToMerge;
        return {
            ...fillStyleToParse,
            color: 16777215,
            texture: pattern.texture,
            matrix: pattern.transform,
            fill: fillStyleToParse.fill ?? null
        };
    } else if (styleToMerge instanceof (0, _fillGradientMjs.FillGradient)) {
        const gradient = styleToMerge;
        gradient.buildLinearGradient();
        return {
            ...fillStyleToParse,
            color: 16777215,
            texture: gradient.texture,
            matrix: gradient.transform
        };
    }
    const style = {
        ...defaultStyle,
        ...value
    };
    if (style.texture) {
        if (style.texture !== (0, _textureMjs.Texture).WHITE) {
            const m = style.matrix?.invert() || new (0, _matrixMjs.Matrix)();
            m.scale(1 / style.texture.frame.width, 1 / style.texture.frame.height);
            style.matrix = m;
        }
        const sourceStyle = style.texture.source.style;
        if (sourceStyle.addressMode === "clamp-to-edge") sourceStyle.addressMode = "repeat";
    }
    const color = (0, _colorMjs.Color).shared.setValue(style.color);
    style.alpha *= color.alpha;
    style.color = color.toNumber();
    style.matrix = style.matrix ? style.matrix.clone() : null;
    return style;
}

},{"../../../../color/Color.mjs":"duTAI","../../../../maths/matrix/Matrix.mjs":"kpkIt","../../../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../fill/FillGradient.mjs":"krBtw","../fill/FillPattern.mjs":"jyYgN","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"cH0HL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateTextStyleKey", ()=>generateTextStyleKey);
"use strict";
const valuesToIterateForKeys = [
    "_fontFamily",
    "_fontStyle",
    "_fontSize",
    "_fontVariant",
    "_fontWeight",
    "_breakWords",
    "_align",
    "_leading",
    "_letterSpacing",
    "_lineHeight",
    "_textBaseline",
    "_whiteSpace",
    "_wordWrap",
    "_wordWrapWidth",
    "_padding",
    "_cssOverrides",
    "_trim"
];
function generateTextStyleKey(style) {
    const key = [];
    let index = 0;
    for(let i = 0; i < valuesToIterateForKeys.length; i++){
        const prop = valuesToIterateForKeys[i];
        key[index++] = style[prop];
    }
    index = addFillStyleKey(style._fill, key, index);
    index = addStokeStyleKey(style._stroke, key, index);
    return key.join("-");
}
function addFillStyleKey(fillStyle, key, index) {
    if (!fillStyle) return index;
    key[index++] = fillStyle.color;
    key[index++] = fillStyle.alpha;
    key[index++] = fillStyle.fill?.uid;
    return index;
}
function addStokeStyleKey(strokeStyle, key, index) {
    if (!strokeStyle) return index;
    index = addFillStyleKey(strokeStyle, key, index);
    key[index++] = strokeStyle.width;
    key[index++] = strokeStyle.alignment;
    key[index++] = strokeStyle.cap;
    key[index++] = strokeStyle.join;
    key[index++] = strokeStyle.miterLimit;
    return index;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bl7hs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DynamicBitmapFont", ()=>DynamicBitmapFont);
var _colorMjs = require("../../color/Color.mjs");
var _rectangleMjs = require("../../maths/shapes/Rectangle.mjs");
var _canvasPoolMjs = require("../../rendering/renderers/shared/texture/CanvasPool.mjs");
var _imageSourceMjs = require("../../rendering/renderers/shared/texture/sources/ImageSource.mjs");
var _textureMjs = require("../../rendering/renderers/shared/texture/Texture.mjs");
var _deprecationMjs = require("../../utils/logging/deprecation.mjs");
var _canvasTextMetricsMjs = require("../text/canvas/CanvasTextMetrics.mjs");
var _fontStringFromTextStyleMjs = require("../text/canvas/utils/fontStringFromTextStyle.mjs");
var _getCanvasFillStyleMjs = require("../text/canvas/utils/getCanvasFillStyle.mjs");
var _abstractBitmapFontMjs = require("./AbstractBitmapFont.mjs");
var _resolveCharactersMjs = require("./utils/resolveCharacters.mjs");
"use strict";
class DynamicBitmapFont extends (0, _abstractBitmapFontMjs.AbstractBitmapFont) {
    /**
   * @param options - The options for the dynamic bitmap font.
   */ constructor(options){
        super();
        /**
     * this is a resolution modifier for the font size..
     * texture resolution will also be used to scale texture according to its font size also
     */ this.resolution = 1;
        /** The pages of the font. */ this.pages = [];
        this._padding = 4;
        this._measureCache = /* @__PURE__ */ Object.create(null);
        this._currentChars = [];
        this._currentX = 0;
        this._currentY = 0;
        this._currentPageIndex = -1;
        this._skipKerning = false;
        const dynamicOptions = options;
        const style = dynamicOptions.style.clone();
        if (dynamicOptions.overrideFill) {
            style._fill.color = 16777215;
            style._fill.alpha = 1;
            style._fill.texture = (0, _textureMjs.Texture).WHITE;
            style._fill.fill = null;
        }
        const requestedFontSize = style.fontSize;
        style.fontSize = this.baseMeasurementFontSize;
        const font = (0, _fontStringFromTextStyleMjs.fontStringFromTextStyle)(style);
        if (dynamicOptions.overrideSize) {
            if (style._stroke) style._stroke.width *= this.baseRenderedFontSize / requestedFontSize;
        } else style.fontSize = this.baseRenderedFontSize = requestedFontSize;
        this._style = style;
        this._skipKerning = dynamicOptions.skipKerning ?? false;
        this.resolution = dynamicOptions.resolution ?? 1;
        this._padding = dynamicOptions.padding ?? 4;
        this.fontMetrics = (0, _canvasTextMetricsMjs.CanvasTextMetrics).measureFont(font);
        this.lineHeight = style.lineHeight || this.fontMetrics.fontSize || style.fontSize;
    }
    ensureCharacters(chars) {
        const charList = (0, _resolveCharactersMjs.resolveCharacters)(chars).filter((char)=>!this._currentChars.includes(char)).filter((char, index, self)=>self.indexOf(char) === index);
        if (!charList.length) return;
        this._currentChars = [
            ...this._currentChars,
            ...charList
        ];
        let pageData;
        if (this._currentPageIndex === -1) pageData = this._nextPage();
        else pageData = this.pages[this._currentPageIndex];
        let { canvas, context } = pageData.canvasAndContext;
        let textureSource = pageData.texture.source;
        const style = this._style;
        let currentX = this._currentX;
        let currentY = this._currentY;
        const fontScale = this.baseRenderedFontSize / this.baseMeasurementFontSize;
        const padding = this._padding * fontScale;
        const widthScale = style.fontStyle === "italic" ? 2 : 1;
        let maxCharHeight = 0;
        let skipTexture = false;
        for(let i = 0; i < charList.length; i++){
            const char = charList[i];
            const metrics = (0, _canvasTextMetricsMjs.CanvasTextMetrics).measureText(char, style, canvas, false);
            metrics.lineHeight = metrics.height;
            const width = widthScale * metrics.width * fontScale;
            const height = metrics.height * fontScale;
            const paddedWidth = width + padding * 2;
            const paddedHeight = height + padding * 2;
            skipTexture = false;
            if (char !== "\n" && char !== "\r" && char !== "	" && char !== " ") {
                skipTexture = true;
                maxCharHeight = Math.ceil(Math.max(paddedHeight, maxCharHeight));
            }
            if (currentX + paddedWidth > 512) {
                currentY += maxCharHeight;
                maxCharHeight = paddedHeight;
                currentX = 0;
                if (currentY + maxCharHeight > 512) {
                    textureSource.update();
                    const pageData2 = this._nextPage();
                    canvas = pageData2.canvasAndContext.canvas;
                    context = pageData2.canvasAndContext.context;
                    textureSource = pageData2.texture.source;
                    currentY = 0;
                }
            }
            const xAdvance = width / fontScale - (style.dropShadow?.distance ?? 0) - (style._stroke?.width ?? 0);
            this.chars[char] = {
                id: char.codePointAt(0),
                xOffset: -this._padding,
                yOffset: -this._padding,
                xAdvance,
                kerning: {}
            };
            if (skipTexture) {
                this._drawGlyph(context, metrics, currentX + padding, currentY + padding, fontScale, style);
                const px = textureSource.width * fontScale;
                const py = textureSource.height * fontScale;
                const frame = new (0, _rectangleMjs.Rectangle)(currentX / px * textureSource.width, currentY / py * textureSource.height, paddedWidth / px * textureSource.width, paddedHeight / py * textureSource.height);
                this.chars[char].texture = new (0, _textureMjs.Texture)({
                    source: textureSource,
                    frame
                });
                currentX += Math.ceil(paddedWidth);
            }
        }
        textureSource.update();
        this._currentX = currentX;
        this._currentY = currentY;
        this._skipKerning && this._applyKerning(charList, context);
    }
    /**
   * @deprecated since 8.0.0
   * The map of base page textures (i.e., sheets of glyphs).
   */ get pageTextures() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.");
        return this.pages;
    }
    _applyKerning(newChars, context) {
        const measureCache = this._measureCache;
        for(let i = 0; i < newChars.length; i++){
            const first = newChars[i];
            for(let j = 0; j < this._currentChars.length; j++){
                const second = this._currentChars[j];
                let c1 = measureCache[first];
                if (!c1) c1 = measureCache[first] = context.measureText(first).width;
                let c2 = measureCache[second];
                if (!c2) c2 = measureCache[second] = context.measureText(second).width;
                let total = context.measureText(first + second).width;
                let amount = total - (c1 + c2);
                if (amount) this.chars[first].kerning[second] = amount;
                total = context.measureText(first + second).width;
                amount = total - (c1 + c2);
                if (amount) this.chars[second].kerning[first] = amount;
            }
        }
    }
    _nextPage() {
        this._currentPageIndex++;
        const textureResolution = this.resolution;
        const canvasAndContext = (0, _canvasPoolMjs.CanvasPool).getOptimalCanvasAndContext(512, 512, textureResolution);
        this._setupContext(canvasAndContext.context, this._style, textureResolution);
        const resolution = textureResolution * (this.baseRenderedFontSize / this.baseMeasurementFontSize);
        const texture = new (0, _textureMjs.Texture)({
            source: new (0, _imageSourceMjs.ImageSource)({
                resource: canvasAndContext.canvas,
                resolution,
                alphaMode: "premultiply-alpha-on-upload"
            })
        });
        const pageData = {
            canvasAndContext,
            texture
        };
        this.pages[this._currentPageIndex] = pageData;
        return pageData;
    }
    // canvas style!
    _setupContext(context, style, resolution) {
        style.fontSize = this.baseRenderedFontSize;
        context.scale(resolution, resolution);
        context.font = (0, _fontStringFromTextStyleMjs.fontStringFromTextStyle)(style);
        style.fontSize = this.baseMeasurementFontSize;
        context.textBaseline = style.textBaseline;
        const stroke = style._stroke;
        const strokeThickness = stroke?.width ?? 0;
        if (stroke) {
            context.lineWidth = strokeThickness;
            context.lineJoin = stroke.join;
            context.miterLimit = stroke.miterLimit;
            context.strokeStyle = (0, _getCanvasFillStyleMjs.getCanvasFillStyle)(stroke, context);
        }
        if (style._fill) context.fillStyle = (0, _getCanvasFillStyleMjs.getCanvasFillStyle)(style._fill, context);
        if (style.dropShadow) {
            const shadowOptions = style.dropShadow;
            const rgb = (0, _colorMjs.Color).shared.setValue(shadowOptions.color).toArray();
            const dropShadowBlur = shadowOptions.blur * resolution;
            const dropShadowDistance = shadowOptions.distance * resolution;
            context.shadowColor = `rgba(${rgb[0] * 255},${rgb[1] * 255},${rgb[2] * 255},${shadowOptions.alpha})`;
            context.shadowBlur = dropShadowBlur;
            context.shadowOffsetX = Math.cos(shadowOptions.angle) * dropShadowDistance;
            context.shadowOffsetY = Math.sin(shadowOptions.angle) * dropShadowDistance;
        } else {
            context.shadowColor = "black";
            context.shadowBlur = 0;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
        }
    }
    _drawGlyph(context, metrics, x, y, fontScale, style) {
        const char = metrics.text;
        const fontProperties = metrics.fontProperties;
        const stroke = style._stroke;
        const strokeThickness = (stroke?.width ?? 0) * fontScale;
        const tx = x + strokeThickness / 2;
        const ty = y - strokeThickness / 2;
        const descent = fontProperties.descent * fontScale;
        const lineHeight = metrics.lineHeight * fontScale;
        if (style.stroke && strokeThickness) context.strokeText(char, tx, ty + lineHeight - descent);
        if (style._fill) context.fillText(char, tx, ty + lineHeight - descent);
    }
    destroy() {
        super.destroy();
        for(let i = 0; i < this.pages.length; i++){
            const { canvasAndContext, texture } = this.pages[i];
            (0, _canvasPoolMjs.CanvasPool).returnCanvasAndContext(canvasAndContext);
            texture.destroy(true);
        }
        this.pages = null;
    }
}

},{"../../color/Color.mjs":"duTAI","../../maths/shapes/Rectangle.mjs":"kCPrw","../../rendering/renderers/shared/texture/CanvasPool.mjs":"3k1Tt","../../rendering/renderers/shared/texture/sources/ImageSource.mjs":"iTPK0","../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../../utils/logging/deprecation.mjs":"axL6x","../text/canvas/CanvasTextMetrics.mjs":"2DgIe","../text/canvas/utils/fontStringFromTextStyle.mjs":"83EXy","../text/canvas/utils/getCanvasFillStyle.mjs":"fJafg","./AbstractBitmapFont.mjs":"jssze","./utils/resolveCharacters.mjs":"cLO7D","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"cLO7D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveCharacters", ()=>resolveCharacters);
"use strict";
function resolveCharacters(chars) {
    if (chars === "") return [];
    if (typeof chars === "string") chars = [
        chars
    ];
    const result = [];
    for(let i = 0, j = chars.length; i < j; i++){
        const item = chars[i];
        if (Array.isArray(item)) {
            if (item.length !== 2) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${item.length}.`);
            if (item[0].length === 0 || item[1].length === 0) throw new Error("[BitmapFont]: Invalid character delimiter.");
            const startCode = item[0].charCodeAt(0);
            const endCode = item[1].charCodeAt(0);
            if (endCode < startCode) throw new Error("[BitmapFont]: Invalid character range.");
            for(let i2 = startCode, j2 = endCode; i2 <= j2; i2++)result.push(String.fromCharCode(i2));
        } else result.push(...Array.from(item));
    }
    if (result.length === 0) throw new Error("[BitmapFont]: Empty set when resolving characters.");
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gt2JK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBitmapTextLayout", ()=>getBitmapTextLayout);
"use strict";
function getBitmapTextLayout(chars, style, font) {
    const layoutData = {
        width: 0,
        height: 0,
        offsetY: 0,
        scale: style.fontSize / font.baseMeasurementFontSize,
        lines: [
            {
                width: 0,
                charPositions: [],
                spaceWidth: 0,
                spacesIndex: [],
                chars: []
            }
        ]
    };
    layoutData.offsetY = font.baseLineOffset;
    let currentLine = layoutData.lines[0];
    let previousChar = null;
    let firstWord = true;
    const currentWord = {
        spaceWord: false,
        width: 0,
        start: 0,
        index: 0,
        // use index to not modify the array as we use it a lot!
        positions: [],
        chars: []
    };
    const nextWord = (word)=>{
        const start = currentLine.width;
        for(let j = 0; j < currentWord.index; j++){
            const position = word.positions[j];
            currentLine.chars.push(word.chars[j]);
            currentLine.charPositions.push(position + start);
        }
        currentLine.width += word.width;
        firstWord = false;
        currentWord.width = 0;
        currentWord.index = 0;
        currentWord.chars.length = 0;
    };
    const nextLine = ()=>{
        let index = currentLine.chars.length - 1;
        let lastChar = currentLine.chars[index];
        while(lastChar === " "){
            currentLine.width -= font.chars[lastChar].xAdvance;
            lastChar = currentLine.chars[--index];
        }
        layoutData.width = Math.max(layoutData.width, currentLine.width);
        currentLine = {
            width: 0,
            charPositions: [],
            chars: [],
            spaceWidth: 0,
            spacesIndex: []
        };
        firstWord = true;
        layoutData.lines.push(currentLine);
        layoutData.height += font.lineHeight;
    };
    const scale = font.baseMeasurementFontSize / style.fontSize;
    const adjustedLetterSpacing = style.letterSpacing * scale;
    const adjustedWordWrapWidth = style.wordWrapWidth * scale;
    for(let i = 0; i < chars.length + 1; i++){
        let char;
        const isEnd = i === chars.length;
        if (!isEnd) char = chars[i];
        const charData = font.chars[char] || font.chars[" "];
        const isSpace = /(?:\s)/.test(char);
        const isWordBreak = isSpace || char === "\r" || char === "\n" || isEnd;
        if (isWordBreak) {
            const addWordToNextLine = !firstWord && style.wordWrap && currentLine.width + currentWord.width - adjustedLetterSpacing > adjustedWordWrapWidth;
            if (addWordToNextLine) {
                nextLine();
                nextWord(currentWord);
                if (!isEnd) currentLine.charPositions.push(0);
            } else {
                currentWord.start = currentLine.width;
                nextWord(currentWord);
                if (!isEnd) currentLine.charPositions.push(0);
            }
            if (char === "\r" || char === "\n") {
                if (currentLine.width !== 0) nextLine();
            } else if (!isEnd) {
                const spaceWidth = charData.xAdvance + (charData.kerning[previousChar] || 0) + adjustedLetterSpacing;
                currentLine.width += spaceWidth;
                currentLine.spaceWidth = spaceWidth;
                currentLine.spacesIndex.push(currentLine.charPositions.length);
                currentLine.chars.push(char);
            }
        } else {
            const kerning = charData.kerning[previousChar] || 0;
            const nextCharWidth = charData.xAdvance + kerning + adjustedLetterSpacing;
            currentWord.positions[currentWord.index++] = currentWord.width + kerning;
            currentWord.chars.push(char);
            currentWord.width += nextCharWidth;
        }
        previousChar = char;
    }
    nextLine();
    if (style.align === "center") alignCenter(layoutData);
    else if (style.align === "right") alignRight(layoutData);
    else if (style.align === "justify") alignJustify(layoutData);
    return layoutData;
}
function alignCenter(measurementData) {
    for(let i = 0; i < measurementData.lines.length; i++){
        const line = measurementData.lines[i];
        const offset = measurementData.width / 2 - line.width / 2;
        for(let j = 0; j < line.charPositions.length; j++)line.charPositions[j] += offset;
    }
}
function alignRight(measurementData) {
    for(let i = 0; i < measurementData.lines.length; i++){
        const line = measurementData.lines[i];
        const offset = measurementData.width - line.width;
        for(let j = 0; j < line.charPositions.length; j++)line.charPositions[j] += offset;
    }
}
function alignJustify(measurementData) {
    const width = measurementData.width;
    for(let i = 0; i < measurementData.lines.length; i++){
        const line = measurementData.lines[i];
        let indy = 0;
        let spaceIndex = line.spacesIndex[indy++];
        let offset = 0;
        const totalSpaces = line.spacesIndex.length;
        const newSpaceWidth = (width - line.width) / totalSpaces;
        const spaceWidth = newSpaceWidth;
        for(let j = 0; j < line.charPositions.length; j++){
            if (j === spaceIndex) {
                spaceIndex = line.spacesIndex[indy++];
                offset += spaceWidth;
            }
            line.charPositions[j] += offset;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4KIQ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bitmapFontTextParser", ()=>bitmapFontTextParser);
"use strict";
const bitmapFontTextParser = {
    test (data) {
        return typeof data === "string" && data.startsWith("info face=");
    },
    parse (txt) {
        const items = txt.match(/^[a-z]+\s+.+$/gm);
        const rawData = {
            info: [],
            common: [],
            page: [],
            char: [],
            chars: [],
            kerning: [],
            kernings: [],
            distanceField: []
        };
        for(const i in items){
            const name = items[i].match(/^[a-z]+/gm)[0];
            const attributeList = items[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);
            const itemData = {};
            for(const i2 in attributeList){
                const split = attributeList[i2].split("=");
                const key = split[0];
                const strValue = split[1].replace(/"/gm, "");
                const floatValue = parseFloat(strValue);
                const value = isNaN(floatValue) ? strValue : floatValue;
                itemData[key] = value;
            }
            rawData[name].push(itemData);
        }
        const font = {
            chars: {},
            pages: [],
            lineHeight: 0,
            fontSize: 0,
            fontFamily: "",
            distanceField: null,
            baseLineOffset: 0
        };
        const [info] = rawData.info;
        const [common] = rawData.common;
        const [distanceField] = rawData.distanceField ?? [];
        if (distanceField) font.distanceField = {
            range: parseInt(distanceField.distanceRange, 10),
            type: distanceField.fieldType
        };
        font.fontSize = parseInt(info.size, 10);
        font.fontFamily = info.face;
        font.lineHeight = parseInt(common.lineHeight, 10);
        const page = rawData.page;
        for(let i = 0; i < page.length; i++)font.pages.push({
            id: parseInt(page[i].id, 10) || 0,
            file: page[i].file
        });
        const map = {};
        font.baseLineOffset = font.lineHeight - parseInt(common.base, 10);
        const char = rawData.char;
        for(let i = 0; i < char.length; i++){
            const charNode = char[i];
            const id = parseInt(charNode.id, 10);
            let letter = charNode.letter ?? charNode.char ?? String.fromCharCode(id);
            if (letter === "space") letter = " ";
            map[id] = letter;
            font.chars[letter] = {
                id,
                // texture deets..
                page: parseInt(charNode.page, 10) || 0,
                x: parseInt(charNode.x, 10),
                y: parseInt(charNode.y, 10),
                width: parseInt(charNode.width, 10),
                height: parseInt(charNode.height, 10),
                xOffset: parseInt(charNode.xoffset, 10),
                yOffset: parseInt(charNode.yoffset, 10),
                xAdvance: parseInt(charNode.xadvance, 10),
                kerning: {}
            };
        }
        const kerning = rawData.kerning || [];
        for(let i = 0; i < kerning.length; i++){
            const first = parseInt(kerning[i].first, 10);
            const second = parseInt(kerning[i].second, 10);
            const amount = parseInt(kerning[i].amount, 10);
            font.chars[map[second]].kerning[map[first]] = amount;
        }
        return font;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ewcsn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bitmapFontXMLStringParser", ()=>bitmapFontXMLStringParser);
var _adapterMjs = require("../../../environment/adapter.mjs");
var _bitmapFontXMLParserMjs = require("./bitmapFontXMLParser.mjs");
"use strict";
const bitmapFontXMLStringParser = {
    test (data) {
        if (typeof data === "string" && data.includes("<font>")) return (0, _bitmapFontXMLParserMjs.bitmapFontXMLParser).test((0, _adapterMjs.DOMAdapter).get().parseXML(data));
        return false;
    },
    parse (data) {
        return (0, _bitmapFontXMLParserMjs.bitmapFontXMLParser).parse((0, _adapterMjs.DOMAdapter).get().parseXML(data));
    }
};

},{"../../../environment/adapter.mjs":"bGyo9","./bitmapFontXMLParser.mjs":"4B2m0","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4B2m0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bitmapFontXMLParser", ()=>bitmapFontXMLParser);
"use strict";
const bitmapFontXMLParser = {
    test (data) {
        const xml = data;
        return typeof xml !== "string" && "getElementsByTagName" in xml && xml.getElementsByTagName("page").length && xml.getElementsByTagName("info")[0].getAttribute("face") !== null;
    },
    parse (xml) {
        const data = {
            chars: {},
            pages: [],
            lineHeight: 0,
            fontSize: 0,
            fontFamily: "",
            distanceField: null,
            baseLineOffset: 0
        };
        const info = xml.getElementsByTagName("info")[0];
        const common = xml.getElementsByTagName("common")[0];
        const distanceField = xml.getElementsByTagName("distanceField")[0];
        if (distanceField) data.distanceField = {
            type: distanceField.getAttribute("fieldType"),
            range: parseInt(distanceField.getAttribute("distanceRange"), 10)
        };
        const page = xml.getElementsByTagName("page");
        const char = xml.getElementsByTagName("char");
        const kerning = xml.getElementsByTagName("kerning");
        data.fontSize = parseInt(info.getAttribute("size"), 10);
        data.fontFamily = info.getAttribute("face");
        data.lineHeight = parseInt(common.getAttribute("lineHeight"), 10);
        for(let i = 0; i < page.length; i++)data.pages.push({
            id: parseInt(page[i].getAttribute("id"), 10) || 0,
            file: page[i].getAttribute("file")
        });
        const map = {};
        data.baseLineOffset = data.lineHeight - parseInt(common.getAttribute("base"), 10);
        for(let i = 0; i < char.length; i++){
            const charNode = char[i];
            const id = parseInt(charNode.getAttribute("id"), 10);
            let letter = charNode.getAttribute("letter") ?? charNode.getAttribute("char") ?? String.fromCharCode(id);
            if (letter === "space") letter = " ";
            map[id] = letter;
            data.chars[letter] = {
                id,
                // texture deets..
                page: parseInt(charNode.getAttribute("page"), 10) || 0,
                x: parseInt(charNode.getAttribute("x"), 10),
                y: parseInt(charNode.getAttribute("y"), 10),
                width: parseInt(charNode.getAttribute("width"), 10),
                height: parseInt(charNode.getAttribute("height"), 10),
                // render deets..
                xOffset: parseInt(charNode.getAttribute("xoffset"), 10),
                yOffset: parseInt(charNode.getAttribute("yoffset"), 10),
                // + baseLineOffset,
                xAdvance: parseInt(charNode.getAttribute("xadvance"), 10),
                kerning: {}
            };
        }
        for(let i = 0; i < kerning.length; i++){
            const first = parseInt(kerning[i].getAttribute("first"), 10);
            const second = parseInt(kerning[i].getAttribute("second"), 10);
            const amount = parseInt(kerning[i].getAttribute("amount"), 10);
            data.chars[map[second]].kerning[map[first]] = amount;
        }
        return data;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fmMCP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BitmapTextPipe", ()=>BitmapTextPipe);
var _cacheMjs = require("../../assets/cache/Cache.mjs");
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _poolGroupMjs = require("../../utils/pool/PoolGroup.mjs");
var _graphicsMjs = require("../graphics/shared/Graphics.mjs");
var _sdfShaderMjs = require("../text/sdfShader/SdfShader.mjs");
var _bitmapFontManagerMjs = require("./BitmapFontManager.mjs");
var _getBitmapTextLayoutMjs = require("./utils/getBitmapTextLayout.mjs");
"use strict";
class BitmapTextPipe {
    constructor(renderer){
        this._gpuBitmapText = {};
        this._renderer = renderer;
    }
    validateRenderable(bitmapText) {
        const graphicsRenderable = this._getGpuBitmapText(bitmapText);
        if (bitmapText._didTextUpdate) {
            bitmapText._didTextUpdate = false;
            this._updateContext(bitmapText, graphicsRenderable);
        }
        return this._renderer.renderPipes.graphics.validateRenderable(graphicsRenderable);
    }
    addRenderable(bitmapText, instructionSet) {
        const graphicsRenderable = this._getGpuBitmapText(bitmapText);
        syncWithProxy(bitmapText, graphicsRenderable);
        if (bitmapText._didTextUpdate) {
            bitmapText._didTextUpdate = false;
            this._updateContext(bitmapText, graphicsRenderable);
        }
        this._renderer.renderPipes.graphics.addRenderable(graphicsRenderable, instructionSet);
        if (graphicsRenderable.context.customShader) this._updateDistanceField(bitmapText);
    }
    destroyRenderable(bitmapText) {
        this._destroyRenderableByUid(bitmapText.uid);
    }
    _destroyRenderableByUid(renderableUid) {
        (0, _poolGroupMjs.BigPool).return(this._gpuBitmapText[renderableUid]);
        this._gpuBitmapText[renderableUid] = null;
    }
    updateRenderable(bitmapText) {
        const graphicsRenderable = this._getGpuBitmapText(bitmapText);
        syncWithProxy(bitmapText, graphicsRenderable);
        this._renderer.renderPipes.graphics.updateRenderable(graphicsRenderable);
        if (graphicsRenderable.context.customShader) this._updateDistanceField(bitmapText);
    }
    _updateContext(bitmapText, proxyGraphics) {
        const { context } = proxyGraphics;
        const bitmapFont = (0, _bitmapFontManagerMjs.BitmapFontManager).getFont(bitmapText.text, bitmapText._style);
        context.clear();
        if (bitmapFont.distanceField.type !== "none") {
            if (!context.customShader) {
                if (!this._sdfShader) this._sdfShader = new (0, _sdfShaderMjs.SdfShader)();
                context.customShader = this._sdfShader;
            }
        }
        const chars = Array.from(bitmapText.text);
        const style = bitmapText._style;
        let currentY = (style._stroke?.width || 0) / 2;
        currentY += bitmapFont.baseLineOffset;
        const bitmapTextLayout = (0, _getBitmapTextLayoutMjs.getBitmapTextLayout)(chars, style, bitmapFont);
        let index = 0;
        const padding = style.padding;
        const scale = bitmapTextLayout.scale;
        context.translate(-bitmapText._anchor._x * bitmapTextLayout.width - padding, -bitmapText._anchor._y * (bitmapTextLayout.height + bitmapTextLayout.offsetY) - padding).scale(scale, scale);
        const tint = style._fill.color;
        for(let i = 0; i < bitmapTextLayout.lines.length; i++){
            const line = bitmapTextLayout.lines[i];
            for(let j = 0; j < line.charPositions.length; j++){
                const char = chars[index++];
                const charData = bitmapFont.chars[char];
                if (charData?.texture) context.texture(charData.texture, tint ? tint : "black", Math.round(line.charPositions[j] + charData.xOffset), Math.round(currentY + charData.yOffset));
            }
            currentY += bitmapFont.lineHeight;
        }
    }
    _getGpuBitmapText(bitmapText) {
        return this._gpuBitmapText[bitmapText.uid] || this.initGpuText(bitmapText);
    }
    initGpuText(bitmapText) {
        const proxyRenderable = (0, _poolGroupMjs.BigPool).get((0, _graphicsMjs.Graphics));
        this._gpuBitmapText[bitmapText.uid] = proxyRenderable;
        this._updateContext(bitmapText, proxyRenderable);
        bitmapText.on("destroyed", ()=>{
            this.destroyRenderable(bitmapText);
        });
        return this._gpuBitmapText[bitmapText.uid];
    }
    _updateDistanceField(bitmapText) {
        const context = this._getGpuBitmapText(bitmapText).context;
        const fontFamily = bitmapText._style.fontFamily;
        const dynamicFont = (0, _cacheMjs.Cache).get(`${fontFamily}-bitmap`);
        const { a, b, c, d } = bitmapText.groupTransform;
        const dx = Math.sqrt(a * a + b * b);
        const dy = Math.sqrt(c * c + d * d);
        const worldScale = (Math.abs(dx) + Math.abs(dy)) / 2;
        const fontScale = dynamicFont.baseRenderedFontSize / bitmapText._style.fontSize;
        const resolution = bitmapText.resolution ?? this._renderer.resolution;
        const distance = worldScale * dynamicFont.distanceField.range * (1 / fontScale) * resolution;
        context.customShader.resources.localUniforms.uniforms.uDistance = distance;
    }
    destroy() {
        for(const uid in this._gpuBitmapText)this._destroyRenderableByUid(uid);
        this._gpuBitmapText = null;
        this._sdfShader?.destroy(true);
        this._sdfShader = null;
        this._renderer = null;
    }
}
/** @ignore */ BitmapTextPipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "bitmapText"
};
function syncWithProxy(container, proxy) {
    proxy.groupTransform = container.groupTransform;
    proxy.groupColorAlpha = container.groupColorAlpha;
    proxy.groupColor = container.groupColor;
    proxy.groupBlendMode = container.groupBlendMode;
    proxy.globalDisplayStatus = container.globalDisplayStatus;
    proxy.groupTransform = container.groupTransform;
    proxy.localDisplayStatus = container.localDisplayStatus;
    proxy.groupAlpha = container.groupAlpha;
    proxy._roundPixels = container._roundPixels;
}

},{"../../assets/cache/Cache.mjs":"auo1K","../../extensions/Extensions.mjs":"c8doH","../../utils/pool/PoolGroup.mjs":"bj9CN","../graphics/shared/Graphics.mjs":"l7kgQ","../text/sdfShader/SdfShader.mjs":"clCSK","./BitmapFontManager.mjs":"1PiJJ","./utils/getBitmapTextLayout.mjs":"gt2JK","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"l7kgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Graphics", ()=>Graphics);
var _deprecationMjs = require("../../../utils/logging/deprecation.mjs");
var _containerMjs = require("../../container/Container.mjs");
var _graphicsContextMjs = require("./GraphicsContext.mjs");
"use strict";
class Graphics extends (0, _containerMjs.Container) {
    /**
   * @param options - Options for the Graphics.
   */ constructor(options){
        if (options instanceof (0, _graphicsContextMjs.GraphicsContext)) options = {
            context: options
        };
        const { context, roundPixels, ...rest } = options || {};
        super({
            label: "Graphics",
            ...rest
        });
        this.canBundle = true;
        this.renderPipeId = "graphics";
        this._roundPixels = 0;
        if (!context) this._context = this._ownedContext = new (0, _graphicsContextMjs.GraphicsContext)();
        else this._context = context;
        this._context.on("update", this.onViewUpdate, this);
        this.allowChildren = false;
        this.roundPixels = roundPixels ?? false;
    }
    set context(context) {
        if (context === this._context) return;
        this._context.off("update", this.onViewUpdate, this);
        this._context = context;
        this._context.on("update", this.onViewUpdate, this);
        this.onViewUpdate();
    }
    get context() {
        return this._context;
    }
    /**
   * The local bounds of the graphic.
   * @type {rendering.Bounds}
   */ get bounds() {
        return this._context.bounds;
    }
    /**
   * Adds the bounds of this object to the bounds object.
   * @param bounds - The output bounds object.
   */ addBounds(bounds) {
        bounds.addBounds(this._context.bounds);
    }
    /**
   * Checks if the object contains the given point.
   * @param point - The point to check
   */ containsPoint(point) {
        return this._context.containsPoint(point);
    }
    /**
   *  Whether or not to round the x/y position of the graphic.
   * @type {boolean}
   */ get roundPixels() {
        return !!this._roundPixels;
    }
    set roundPixels(value) {
        this._roundPixels = value ? 1 : 0;
    }
    onViewUpdate() {
        this._didChangeId += 4096;
        this._didGraphicsUpdate = true;
        if (this.didViewUpdate) return;
        this.didViewUpdate = true;
        if (this.renderGroup) this.renderGroup.onChildViewUpdate(this);
    }
    /**
   * Destroys this graphics renderable and optionally its context.
   * @param options - Options parameter. A boolean will act as if all options
   *
   * If the context was created by this graphics and `destroy(false)` or `destroy()` is called
   * then the context will still be destroyed.
   *
   * If you want to explicitly not destroy this context that this graphics created,
   * then you should pass destroy({ context: false })
   *
   * If the context was passed in as an argument to the constructor then it will not be destroyed
   * @param {boolean} [options.texture=false] - Should destroy the texture of the graphics context
   * @param {boolean} [options.textureSource=false] - Should destroy the texture source of the graphics context
   * @param {boolean} [options.context=false] - Should destroy the context
   */ destroy(options) {
        if (this._ownedContext && !options) this._ownedContext.destroy(options);
        else if (options === true || options?.context === true) this._context.destroy(options);
        this._ownedContext = null;
        this._context = null;
        super.destroy(options);
    }
    _callContextMethod(method, args) {
        this.context[method](...args);
        return this;
    }
    // --------------------------------------- GraphicsContext methods ---------------------------------------
    /**
   * Sets the current fill style of the graphics context. The fill style can be a color, gradient,
   * pattern, or a more complex style defined by a FillStyle object.
   * @param {FillStyleInputs} args - The fill style to apply. This can be a simple color, a gradient or
   * pattern object, or a FillStyle or ConvertedFillStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ setFillStyle(...args) {
        return this._callContextMethod("setFillStyle", args);
    }
    /**
   * Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
   * encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.
   * @param {FillStyleInputs} args - The stroke style to apply. Can be defined as a color, a gradient or pattern,
   * or a StrokeStyle or ConvertedStrokeStyle object.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ setStrokeStyle(...args) {
        return this._callContextMethod("setStrokeStyle", args);
    }
    fill(...args) {
        return this._callContextMethod("fill", args);
    }
    /**
   * Strokes the current path with the current stroke style. This method can take an optional
   * FillStyleInputs parameter to define the stroke's appearance, including its color, width, and other properties.
   * @param {FillStyleInputs} args - (Optional) The stroke style to apply. Can be defined as a simple color or a more
   * complex style object. If omitted, uses the current stroke style.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ stroke(...args) {
        return this._callContextMethod("stroke", args);
    }
    texture(...args) {
        return this._callContextMethod("texture", args);
    }
    /**
   * Resets the current path. Any previous path and its commands are discarded and a new path is
   * started. This is typically called before beginning a new shape or series of drawing commands.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ beginPath() {
        return this._callContextMethod("beginPath", []);
    }
    /**
   * Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
   * subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
   * fail to cut correctly!
   */ cut() {
        return this._callContextMethod("cut", []);
    }
    arc(...args) {
        return this._callContextMethod("arc", args);
    }
    arcTo(...args) {
        return this._callContextMethod("arcTo", args);
    }
    arcToSvg(...args) {
        return this._callContextMethod("arcToSvg", args);
    }
    bezierCurveTo(...args) {
        return this._callContextMethod("bezierCurveTo", args);
    }
    /**
   * Closes the current path by drawing a straight line back to the start.
   * If the shape is already closed or there are no points in the path, this method does nothing.
   * @returns The instance of the current object for chaining.
   */ closePath() {
        return this._callContextMethod("closePath", []);
    }
    ellipse(...args) {
        return this._callContextMethod("ellipse", args);
    }
    circle(...args) {
        return this._callContextMethod("circle", args);
    }
    path(...args) {
        return this._callContextMethod("path", args);
    }
    lineTo(...args) {
        return this._callContextMethod("lineTo", args);
    }
    moveTo(...args) {
        return this._callContextMethod("moveTo", args);
    }
    quadraticCurveTo(...args) {
        return this._callContextMethod("quadraticCurveTo", args);
    }
    rect(...args) {
        return this._callContextMethod("rect", args);
    }
    roundRect(...args) {
        return this._callContextMethod("roundRect", args);
    }
    poly(...args) {
        return this._callContextMethod("poly", args);
    }
    regularPoly(...args) {
        return this._callContextMethod("regularPoly", args);
    }
    roundPoly(...args) {
        return this._callContextMethod("roundPoly", args);
    }
    roundShape(...args) {
        return this._callContextMethod("roundShape", args);
    }
    filletRect(...args) {
        return this._callContextMethod("filletRect", args);
    }
    chamferRect(...args) {
        return this._callContextMethod("chamferRect", args);
    }
    star(...args) {
        return this._callContextMethod("star", args);
    }
    svg(...args) {
        return this._callContextMethod("svg", args);
    }
    restore(...args) {
        return this._callContextMethod("restore", args);
    }
    /** Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack. */ save() {
        return this._callContextMethod("save", []);
    }
    /**
   * Returns the current transformation matrix of the graphics context.
   * @returns The current transformation matrix.
   */ getTransform() {
        return this.context.getTransform();
    }
    /**
   * Resets the current transformation matrix to the identity matrix, effectively removing
   * any transformations (rotation, scaling, translation) previously applied.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ resetTransform() {
        return this._callContextMethod("resetTransform", []);
    }
    rotateTransform(...args) {
        return this._callContextMethod("rotate", args);
    }
    scaleTransform(...args) {
        return this._callContextMethod("scale", args);
    }
    setTransform(...args) {
        return this._callContextMethod("setTransform", args);
    }
    transform(...args) {
        return this._callContextMethod("transform", args);
    }
    translateTransform(...args) {
        return this._callContextMethod("translate", args);
    }
    /**
   * Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
   * and optionally resetting transformations to the identity matrix.
   * @returns The instance of the current GraphicsContext for method chaining.
   */ clear() {
        return this._callContextMethod("clear", []);
    }
    /**
   * The fill style to use.
   * @type {ConvertedFillStyle}
   */ get fillStyle() {
        return this._context.fillStyle;
    }
    set fillStyle(value) {
        this._context.fillStyle = value;
    }
    /**
   * The stroke style to use.
   * @type {ConvertedStrokeStyle}
   */ get strokeStyle() {
        return this._context.strokeStyle;
    }
    set strokeStyle(value) {
        this._context.strokeStyle = value;
    }
    /**
   * Creates a new Graphics object.
   * Note that only the context of the object is cloned, not its transform (position,scale,etc)
   * @param deep - Whether to create a deep clone of the graphics object. If false, the context
   * will be shared between the two objects (default false). If true, the context will be
   * cloned (recommended if you need to modify the context in any way).
   * @returns - A clone of the graphics object
   */ clone(deep = false) {
        if (deep) return new Graphics(this._context.clone());
        this._ownedContext = null;
        const clone = new Graphics(this._context);
        return clone;
    }
    // -------- v7 deprecations ---------
    /**
   * @param width
   * @param color
   * @param alpha
   * @deprecated since 8.0.0 Use {@link Graphics#setStrokeStyle} instead
   */ lineStyle(width, color, alpha) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
        const strokeStyle = {};
        width && (strokeStyle.width = width);
        color && (strokeStyle.color = color);
        alpha && (strokeStyle.alpha = alpha);
        this.context.strokeStyle = strokeStyle;
        return this;
    }
    /**
   * @param color
   * @param alpha
   * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
   */ beginFill(color, alpha) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
        const fillStyle = {};
        color && (fillStyle.color = color);
        alpha && (fillStyle.alpha = alpha);
        this.context.fillStyle = fillStyle;
        return this;
    }
    /**
   * @deprecated since 8.0.0 Use {@link Graphics#fill} instead
   */ endFill() {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
        this.context.fill();
        const strokeStyle = this.context.strokeStyle;
        if (strokeStyle.width !== (0, _graphicsContextMjs.GraphicsContext).defaultStrokeStyle.width || strokeStyle.color !== (0, _graphicsContextMjs.GraphicsContext).defaultStrokeStyle.color || strokeStyle.alpha !== (0, _graphicsContextMjs.GraphicsContext).defaultStrokeStyle.alpha) this.context.stroke();
        return this;
    }
    /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#circle} instead
   */ drawCircle(...args) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#drawCircle has been renamed to Graphics#circle");
        return this._callContextMethod("circle", args);
    }
    /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#ellipse} instead
   */ drawEllipse(...args) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#drawEllipse has been renamed to Graphics#ellipse");
        return this._callContextMethod("ellipse", args);
    }
    /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#poly} instead
   */ drawPolygon(...args) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#drawPolygon has been renamed to Graphics#poly");
        return this._callContextMethod("poly", args);
    }
    /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#rect} instead
   */ drawRect(...args) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#drawRect has been renamed to Graphics#rect");
        return this._callContextMethod("rect", args);
    }
    /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#roundRect} instead
   */ drawRoundedRect(...args) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#drawRoundedRect has been renamed to Graphics#roundRect");
        return this._callContextMethod("roundRect", args);
    }
    /**
   * @param {...any} args
   * @deprecated since 8.0.0 Use {@link Graphics#star} instead
   */ drawStar(...args) {
        (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "Graphics#drawStar has been renamed to Graphics#star");
        return this._callContextMethod("star", args);
    }
}

},{"../../../utils/logging/deprecation.mjs":"axL6x","../../container/Container.mjs":"6EDs5","./GraphicsContext.mjs":"hWAwh","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"clCSK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SdfShader", ()=>SdfShader);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _constMjs = require("../../../rendering/batcher/shared/const.mjs");
var _compileHighShaderToProgramMjs = require("../../../rendering/high-shader/compileHighShaderToProgram.mjs");
var _colorBitMjs = require("../../../rendering/high-shader/shader-bits/colorBit.mjs");
var _generateTextureBatchBitMjs = require("../../../rendering/high-shader/shader-bits/generateTextureBatchBit.mjs");
var _roundPixelsBitMjs = require("../../../rendering/high-shader/shader-bits/roundPixelsBit.mjs");
var _batchSamplersUniformGroupMjs = require("../../../rendering/renderers/gl/shader/batchSamplersUniformGroup.mjs");
var _shaderMjs = require("../../../rendering/renderers/shared/shader/Shader.mjs");
var _uniformGroupMjs = require("../../../rendering/renderers/shared/shader/UniformGroup.mjs");
var _localUniformMSDFBitMjs = require("./shader-bits/localUniformMSDFBit.mjs");
var _mSDFBitMjs = require("./shader-bits/mSDFBit.mjs");
"use strict";
class SdfShader extends (0, _shaderMjs.Shader) {
    constructor(){
        const uniforms = new (0, _uniformGroupMjs.UniformGroup)({
            uColor: {
                value: new Float32Array([
                    1,
                    1,
                    1,
                    1
                ]),
                type: "vec4<f32>"
            },
            uTransformMatrix: {
                value: new (0, _matrixMjs.Matrix)(),
                type: "mat3x3<f32>"
            },
            uDistance: {
                value: 4,
                type: "f32"
            },
            uRound: {
                value: 0,
                type: "f32"
            }
        });
        const gpuProgram = (0, _compileHighShaderToProgramMjs.compileHighShaderGpuProgram)({
            name: "sdf-shader",
            bits: [
                (0, _colorBitMjs.colorBit),
                (0, _generateTextureBatchBitMjs.generateTextureBatchBit)((0, _constMjs.MAX_TEXTURES)),
                (0, _localUniformMSDFBitMjs.localUniformMSDFBit),
                (0, _mSDFBitMjs.mSDFBit),
                (0, _roundPixelsBitMjs.roundPixelsBit)
            ]
        });
        const glProgram = (0, _compileHighShaderToProgramMjs.compileHighShaderGlProgram)({
            name: "sdf-shader",
            bits: [
                (0, _colorBitMjs.colorBitGl),
                (0, _generateTextureBatchBitMjs.generateTextureBatchBitGl)((0, _constMjs.MAX_TEXTURES)),
                (0, _localUniformMSDFBitMjs.localUniformMSDFBitGl),
                (0, _mSDFBitMjs.mSDFBitGl),
                (0, _roundPixelsBitMjs.roundPixelsBitGl)
            ]
        });
        super({
            glProgram,
            gpuProgram,
            resources: {
                localUniforms: uniforms,
                batchSamplers: (0, _batchSamplersUniformGroupMjs.batchSamplersUniformGroup)
            }
        });
    }
}

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","../../../rendering/batcher/shared/const.mjs":"1Zfz9","../../../rendering/high-shader/compileHighShaderToProgram.mjs":"fqzoL","../../../rendering/high-shader/shader-bits/colorBit.mjs":"l3r3C","../../../rendering/high-shader/shader-bits/generateTextureBatchBit.mjs":"g6gEb","../../../rendering/high-shader/shader-bits/roundPixelsBit.mjs":"4N63b","../../../rendering/renderers/gl/shader/batchSamplersUniformGroup.mjs":"8Mblw","../../../rendering/renderers/shared/shader/Shader.mjs":"a3UQR","../../../rendering/renderers/shared/shader/UniformGroup.mjs":"ihTky","./shader-bits/localUniformMSDFBit.mjs":"9pWXa","./shader-bits/mSDFBit.mjs":"bbT0n","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fqzoL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compileHighShaderGlProgram", ()=>compileHighShaderGlProgram);
parcelHelpers.export(exports, "compileHighShaderGpuProgram", ()=>compileHighShaderGpuProgram);
var _glProgramMjs = require("../renderers/gl/shader/GlProgram.mjs");
var _gpuProgramMjs = require("../renderers/gpu/shader/GpuProgram.mjs");
var _compileHighShaderMjs = require("./compiler/compileHighShader.mjs");
var _defaultProgramTemplateMjs = require("./defaultProgramTemplate.mjs");
var _globalUniformsBitMjs = require("./shader-bits/globalUniformsBit.mjs");
"use strict";
function compileHighShaderGpuProgram({ bits, name }) {
    const source = (0, _compileHighShaderMjs.compileHighShader)({
        template: {
            fragment: (0, _defaultProgramTemplateMjs.fragmentGPUTemplate),
            vertex: (0, _defaultProgramTemplateMjs.vertexGPUTemplate)
        },
        bits: [
            (0, _globalUniformsBitMjs.globalUniformsBit),
            ...bits
        ]
    });
    return (0, _gpuProgramMjs.GpuProgram).from({
        name,
        vertex: {
            source: source.vertex,
            entryPoint: "main"
        },
        fragment: {
            source: source.fragment,
            entryPoint: "main"
        }
    });
}
function compileHighShaderGlProgram({ bits, name }) {
    return new (0, _glProgramMjs.GlProgram)({
        name,
        ...(0, _compileHighShaderMjs.compileHighShaderGl)({
            template: {
                vertex: (0, _defaultProgramTemplateMjs.vertexGlTemplate),
                fragment: (0, _defaultProgramTemplateMjs.fragmentGlTemplate)
            },
            bits: [
                (0, _globalUniformsBitMjs.globalUniformsBitGl),
                ...bits
            ]
        })
    });
}

},{"../renderers/gl/shader/GlProgram.mjs":"jZK3F","../renderers/gpu/shader/GpuProgram.mjs":"fVNWY","./compiler/compileHighShader.mjs":"eXXPs","./defaultProgramTemplate.mjs":"j0RUd","./shader-bits/globalUniformsBit.mjs":"jdOdb","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jZK3F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GlProgram", ()=>GlProgram);
var _createIdFromStringMjs = require("../../shared/utils/createIdFromString.mjs");
var _getMaxFragmentPrecisionMjs = require("./program/getMaxFragmentPrecision.mjs");
var _addProgramDefinesMjs = require("./program/preprocessors/addProgramDefines.mjs");
var _ensurePrecisionMjs = require("./program/preprocessors/ensurePrecision.mjs");
var _insertVersionMjs = require("./program/preprocessors/insertVersion.mjs");
var _setProgramNameMjs = require("./program/preprocessors/setProgramName.mjs");
var _stripVersionMjs = require("./program/preprocessors/stripVersion.mjs");
"use strict";
const processes = {
    stripVersion: // strips any version headers..
    (0, _stripVersionMjs.stripVersion),
    ensurePrecision: // adds precision string if not already present
    (0, _ensurePrecisionMjs.ensurePrecision),
    addProgramDefines: // add some defines if WebGL1 to make it more compatible with WebGL2 shaders
    (0, _addProgramDefinesMjs.addProgramDefines),
    setProgramName: // add the program name to the shader
    (0, _setProgramNameMjs.setProgramName),
    insertVersion: // add the version string to the shader header
    (0, _insertVersionMjs.insertVersion)
};
const programCache = /* @__PURE__ */ Object.create(null);
const _GlProgram = class _GlProgram {
    /**
   * Creates a shiny new GlProgram. Used by WebGL renderer.
   * @param options - The options for the program.
   */ constructor(options){
        options = {
            ..._GlProgram.defaultOptions,
            ...options
        };
        const isES300 = options.fragment.indexOf("#version 300 es") !== -1;
        const preprocessorOptions = {
            stripVersion: isES300,
            ensurePrecision: {
                requestedFragmentPrecision: options.preferredFragmentPrecision,
                requestedVertexPrecision: options.preferredVertexPrecision,
                maxSupportedVertexPrecision: "highp",
                maxSupportedFragmentPrecision: (0, _getMaxFragmentPrecisionMjs.getMaxFragmentPrecision)()
            },
            setProgramName: {
                name: options.name
            },
            addProgramDefines: isES300,
            insertVersion: isES300
        };
        let fragment = options.fragment;
        let vertex = options.vertex;
        Object.keys(processes).forEach((processKey)=>{
            const processOptions = preprocessorOptions[processKey];
            fragment = processes[processKey](fragment, processOptions, true);
            vertex = processes[processKey](vertex, processOptions, false);
        });
        this.fragment = fragment;
        this.vertex = vertex;
        this._key = (0, _createIdFromStringMjs.createIdFromString)(`${this.vertex}:${this.fragment}`, "gl-program");
    }
    /** destroys the program */ destroy() {
        this.fragment = null;
        this.vertex = null;
        this._attributeData = null;
        this._uniformData = null;
        this._uniformBlockData = null;
        this.transformFeedbackVaryings = null;
    }
    /**
   * Helper function that creates a program for a given source.
   * It will check the program cache if the program has already been created.
   * If it has that one will be returned, if not a new one will be created and cached.
   * @param options - The options for the program.
   * @returns A program using the same source
   */ static from(options) {
        const key = `${options.vertex}:${options.fragment}`;
        if (!programCache[key]) programCache[key] = new _GlProgram(options);
        return programCache[key];
    }
};
/** The default options used by the program. */ _GlProgram.defaultOptions = {
    preferredVertexPrecision: "highp",
    preferredFragmentPrecision: "mediump"
};
let GlProgram = _GlProgram;

},{"../../shared/utils/createIdFromString.mjs":"sl3WD","./program/getMaxFragmentPrecision.mjs":"84ROC","./program/preprocessors/addProgramDefines.mjs":"eWOwP","./program/preprocessors/ensurePrecision.mjs":"4KHcd","./program/preprocessors/insertVersion.mjs":"7OLEm","./program/preprocessors/setProgramName.mjs":"ddHw6","./program/preprocessors/stripVersion.mjs":"4ZZQU","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"84ROC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMaxFragmentPrecision", ()=>getMaxFragmentPrecision);
var _getTestContextMjs = require("./getTestContext.mjs");
"use strict";
let maxFragmentPrecision;
function getMaxFragmentPrecision() {
    if (!maxFragmentPrecision) {
        maxFragmentPrecision = "mediump";
        const gl = (0, _getTestContextMjs.getTestContext)();
        if (gl) {
            if (gl.getShaderPrecisionFormat) {
                const shaderFragment = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
                maxFragmentPrecision = shaderFragment.precision ? "highp" : "mediump";
            }
        }
    }
    return maxFragmentPrecision;
}

},{"./getTestContext.mjs":"2Ai8b","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2Ai8b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTestContext", ()=>getTestContext);
var _adapterMjs = require("../../../../../environment/adapter.mjs");
"use strict";
let context;
function getTestContext() {
    if (!context || context?.isContextLost()) {
        const canvas = (0, _adapterMjs.DOMAdapter).get().createCanvas();
        context = canvas.getContext("webgl", {});
    }
    return context;
}

},{"../../../../../environment/adapter.mjs":"bGyo9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"eWOwP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addProgramDefines", ()=>addProgramDefines);
"use strict";
function addProgramDefines(src, isES300, isFragment) {
    if (isES300) return src;
    if (isFragment) {
        src = src.replace("out vec4 finalColor;", "");
        return `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${src}
        `;
    }
    return `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${src}
        `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4KHcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensurePrecision", ()=>ensurePrecision);
"use strict";
function ensurePrecision(src, options, isFragment) {
    const maxSupportedPrecision = isFragment ? options.maxSupportedFragmentPrecision : options.maxSupportedVertexPrecision;
    if (src.substring(0, 9) !== "precision") {
        let precision = isFragment ? options.requestedFragmentPrecision : options.requestedVertexPrecision;
        if (precision === "highp" && maxSupportedPrecision !== "highp") precision = "mediump";
        return `precision ${precision} float;
${src}`;
    } else if (maxSupportedPrecision !== "highp" && src.substring(0, 15) === "precision highp") return src.replace("precision highp", "precision mediump");
    return src;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7OLEm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertVersion", ()=>insertVersion);
"use strict";
function insertVersion(src, isES300) {
    if (!isES300) return src;
    return `#version 300 es
${src}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ddHw6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setProgramName", ()=>setProgramName);
"use strict";
const fragmentNameCache = {};
const VertexNameCache = {};
function setProgramName(src, { name = `pixi-program` }, isFragment = true) {
    name = name.replace(/\s+/g, "-");
    name += isFragment ? "-fragment" : "-vertex";
    const nameCache = isFragment ? fragmentNameCache : VertexNameCache;
    if (nameCache[name]) {
        nameCache[name]++;
        name += `-${nameCache[name]}`;
    } else nameCache[name] = 1;
    if (src.indexOf("#define SHADER_NAME") !== -1) return src;
    const shaderName = `#define SHADER_NAME ${name}`;
    return `${shaderName}
${src}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4ZZQU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stripVersion", ()=>stripVersion);
"use strict";
function stripVersion(src, isES300) {
    if (!isES300) return src;
    return src.replace("#version 300 es", "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fVNWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GpuProgram", ()=>GpuProgram);
var _createIdFromStringMjs = require("../../shared/utils/createIdFromString.mjs");
var _extractAttributesFromGpuProgramMjs = require("./utils/extractAttributesFromGpuProgram.mjs");
var _extractStructAndGroupsMjs = require("./utils/extractStructAndGroups.mjs");
var _generateGpuLayoutGroupsMjs = require("./utils/generateGpuLayoutGroups.mjs");
var _generateLayoutHashMjs = require("./utils/generateLayoutHash.mjs");
var _removeStructAndGroupDuplicatesMjs = require("./utils/removeStructAndGroupDuplicates.mjs");
"use strict";
const programCache = /* @__PURE__ */ Object.create(null);
class GpuProgram {
    /**
   * Create a new GpuProgram
   * @param options - The options for the gpu program
   */ constructor(options){
        /**
     * @internal
     * @ignore
     */ this._layoutKey = 0;
        const { fragment, vertex, layout, gpuLayout, name } = options;
        this.name = name;
        this.fragment = fragment;
        this.vertex = vertex;
        if (fragment.source === vertex.source) {
            const structsAndGroups = (0, _extractStructAndGroupsMjs.extractStructAndGroups)(fragment.source);
            this.structsAndGroups = structsAndGroups;
        } else {
            const vertexStructsAndGroups = (0, _extractStructAndGroupsMjs.extractStructAndGroups)(vertex.source);
            const fragmentStructsAndGroups = (0, _extractStructAndGroupsMjs.extractStructAndGroups)(fragment.source);
            this.structsAndGroups = (0, _removeStructAndGroupDuplicatesMjs.removeStructAndGroupDuplicates)(vertexStructsAndGroups, fragmentStructsAndGroups);
        }
        this.layout = layout ?? (0, _generateLayoutHashMjs.generateLayoutHash)(this.structsAndGroups);
        this.gpuLayout = gpuLayout ?? (0, _generateGpuLayoutGroupsMjs.generateGpuLayoutGroups)(this.structsAndGroups);
        this.autoAssignGlobalUniforms = !!(this.layout[0]?.globalUniforms !== void 0);
        this.autoAssignLocalUniforms = !!(this.layout[1]?.localUniforms !== void 0);
        this._generateProgramKey();
    }
    // TODO maker this pure
    _generateProgramKey() {
        const { vertex, fragment } = this;
        const bigKey = vertex.source + fragment.source + vertex.entryPoint + fragment.entryPoint;
        this._layoutKey = (0, _createIdFromStringMjs.createIdFromString)(bigKey, "program");
    }
    get attributeData() {
        this._attributeData ?? (this._attributeData = (0, _extractAttributesFromGpuProgramMjs.extractAttributesFromGpuProgram)(this.vertex));
        return this._attributeData;
    }
    /** destroys the program */ destroy() {
        this.gpuLayout = null;
        this.layout = null;
        this.structsAndGroups = null;
        this.fragment = null;
        this.vertex = null;
    }
    /**
   * Helper function that creates a program for a given source.
   * It will check the program cache if the program has already been created.
   * If it has that one will be returned, if not a new one will be created and cached.
   * @param options - The options for the program.
   * @returns A program using the same source
   */ static from(options) {
        const key = `${options.vertex.source}:${options.fragment.source}:${options.fragment.entryPoint}:${options.vertex.entryPoint}`;
        if (!programCache[key]) programCache[key] = new GpuProgram(options);
        return programCache[key];
    }
}

},{"../../shared/utils/createIdFromString.mjs":"sl3WD","./utils/extractAttributesFromGpuProgram.mjs":"2NECN","./utils/extractStructAndGroups.mjs":"aTfPc","./utils/generateGpuLayoutGroups.mjs":"6tY4F","./utils/generateLayoutHash.mjs":"cKXzV","./utils/removeStructAndGroupDuplicates.mjs":"bMQ4T","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2NECN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extractAttributesFromGpuProgram", ()=>extractAttributesFromGpuProgram);
var _getAttributeInfoFromFormatMjs = require("../../../shared/geometry/utils/getAttributeInfoFromFormat.mjs");
"use strict";
const WGSL_TO_VERTEX_TYPES = {
    f32: "float32",
    "vec2<f32>": "float32x2",
    "vec3<f32>": "float32x3",
    "vec4<f32>": "float32x4",
    vec2f: "float32x2",
    vec3f: "float32x3",
    vec4f: "float32x4",
    i32: "sint32",
    "vec2<i32>": "sint32x2",
    "vec3<i32>": "sint32x3",
    "vec4<i32>": "sint32x4",
    u32: "uint32",
    "vec2<u32>": "uint32x2",
    "vec3<u32>": "uint32x3",
    "vec4<u32>": "uint32x4",
    bool: "uint32",
    "vec2<bool>": "uint32x2",
    "vec3<bool>": "uint32x3",
    "vec4<bool>": "uint32x4"
};
function extractAttributesFromGpuProgram({ source, entryPoint }) {
    const results = {};
    const mainVertStart = source.indexOf(`fn ${entryPoint}`);
    if (mainVertStart !== -1) {
        const arrowFunctionStart = source.indexOf("->", mainVertStart);
        if (arrowFunctionStart !== -1) {
            const functionArgsSubstring = source.substring(mainVertStart, arrowFunctionStart);
            const inputsRegex = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
            let match;
            while((match = inputsRegex.exec(functionArgsSubstring)) !== null){
                const format = WGSL_TO_VERTEX_TYPES[match[3]] ?? "float32";
                results[match[2]] = {
                    location: parseInt(match[1], 10),
                    format,
                    stride: (0, _getAttributeInfoFromFormatMjs.getAttributeInfoFromFormat)(format).stride,
                    offset: 0,
                    instance: false,
                    start: 0
                };
            }
        }
    }
    return results;
}

},{"../../../shared/geometry/utils/getAttributeInfoFromFormat.mjs":"eYuAW","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"eYuAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAttributeInfoFromFormat", ()=>getAttributeInfoFromFormat);
"use strict";
const attributeFormatData = {
    uint8x2: {
        size: 2,
        stride: 2,
        normalised: false
    },
    uint8x4: {
        size: 4,
        stride: 4,
        normalised: false
    },
    sint8x2: {
        size: 2,
        stride: 2,
        normalised: false
    },
    sint8x4: {
        size: 4,
        stride: 4,
        normalised: false
    },
    unorm8x2: {
        size: 2,
        stride: 2,
        normalised: true
    },
    unorm8x4: {
        size: 4,
        stride: 4,
        normalised: true
    },
    snorm8x2: {
        size: 2,
        stride: 2,
        normalised: true
    },
    snorm8x4: {
        size: 4,
        stride: 4,
        normalised: true
    },
    uint16x2: {
        size: 2,
        stride: 4,
        normalised: false
    },
    uint16x4: {
        size: 4,
        stride: 8,
        normalised: false
    },
    sint16x2: {
        size: 2,
        stride: 4,
        normalised: false
    },
    sint16x4: {
        size: 4,
        stride: 8,
        normalised: false
    },
    unorm16x2: {
        size: 2,
        stride: 4,
        normalised: true
    },
    unorm16x4: {
        size: 4,
        stride: 8,
        normalised: true
    },
    snorm16x2: {
        size: 2,
        stride: 4,
        normalised: true
    },
    snorm16x4: {
        size: 4,
        stride: 8,
        normalised: true
    },
    float16x2: {
        size: 2,
        stride: 4,
        normalised: false
    },
    float16x4: {
        size: 4,
        stride: 8,
        normalised: false
    },
    float32: {
        size: 1,
        stride: 4,
        normalised: false
    },
    float32x2: {
        size: 2,
        stride: 8,
        normalised: false
    },
    float32x3: {
        size: 3,
        stride: 12,
        normalised: false
    },
    float32x4: {
        size: 4,
        stride: 16,
        normalised: false
    },
    uint32: {
        size: 1,
        stride: 4,
        normalised: false
    },
    uint32x2: {
        size: 2,
        stride: 8,
        normalised: false
    },
    uint32x3: {
        size: 3,
        stride: 12,
        normalised: false
    },
    uint32x4: {
        size: 4,
        stride: 16,
        normalised: false
    },
    sint32: {
        size: 1,
        stride: 4,
        normalised: false
    },
    sint32x2: {
        size: 2,
        stride: 8,
        normalised: false
    },
    sint32x3: {
        size: 3,
        stride: 12,
        normalised: false
    },
    sint32x4: {
        size: 4,
        stride: 16,
        normalised: false
    }
};
function getAttributeInfoFromFormat(format) {
    return attributeFormatData[format] ?? attributeFormatData.float32;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"aTfPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extractStructAndGroups", ()=>extractStructAndGroups);
"use strict";
function extractStructAndGroups(wgsl) {
    const linePattern = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g;
    const groupPattern = /@group\((\d+)\)/;
    const bindingPattern = /@binding\((\d+)\)/;
    const namePattern = /var(<[^>]+>)? (\w+)/;
    const typePattern = /:\s*(\w+)/;
    const structPattern = /struct\s+(\w+)\s*{([^}]+)}/g;
    const structMemberPattern = /(\w+)\s*:\s*([\w\<\>]+)/g;
    const structName = /struct\s+(\w+)/;
    const groups = wgsl.match(linePattern)?.map((item)=>({
            group: parseInt(item.match(groupPattern)[1], 10),
            binding: parseInt(item.match(bindingPattern)[1], 10),
            name: item.match(namePattern)[2],
            isUniform: item.match(namePattern)[1] === "<uniform>",
            type: item.match(typePattern)[1]
        }));
    if (!groups) return {
        groups: [],
        structs: []
    };
    const structs = wgsl.match(structPattern)?.map((struct)=>{
        const name = struct.match(structName)[1];
        const members = struct.match(structMemberPattern).reduce((acc, member)=>{
            const [name2, type] = member.split(":");
            acc[name2.trim()] = type.trim();
            return acc;
        }, {});
        if (!members) return null;
        return {
            name,
            members
        };
    }).filter(({ name })=>groups.some((group)=>group.type === name)) ?? [];
    return {
        groups,
        structs
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"6tY4F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateGpuLayoutGroups", ()=>generateGpuLayoutGroups);
var _constMjs = require("../../../shared/shader/const.mjs");
"use strict";
function generateGpuLayoutGroups({ groups }) {
    const layout = [];
    for(let i = 0; i < groups.length; i++){
        const group = groups[i];
        if (!layout[group.group]) layout[group.group] = [];
        if (group.isUniform) layout[group.group].push({
            binding: group.binding,
            visibility: (0, _constMjs.ShaderStage).VERTEX | (0, _constMjs.ShaderStage).FRAGMENT,
            buffer: {
                type: "uniform"
            }
        });
        else if (group.type === "sampler") layout[group.group].push({
            binding: group.binding,
            visibility: (0, _constMjs.ShaderStage).FRAGMENT,
            sampler: {
                type: "filtering"
            }
        });
        else if (group.type === "texture_2d") layout[group.group].push({
            binding: group.binding,
            visibility: (0, _constMjs.ShaderStage).FRAGMENT,
            texture: {
                sampleType: "float",
                viewDimension: "2d",
                multisampled: false
            }
        });
    }
    return layout;
}

},{"../../../shared/shader/const.mjs":"5XQBe","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"5XQBe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderStage", ()=>ShaderStage);
"use strict";
var ShaderStage = /* @__PURE__ */ ((ShaderStage2)=>{
    ShaderStage2[ShaderStage2["VERTEX"] = 1] = "VERTEX";
    ShaderStage2[ShaderStage2["FRAGMENT"] = 2] = "FRAGMENT";
    ShaderStage2[ShaderStage2["COMPUTE"] = 4] = "COMPUTE";
    return ShaderStage2;
})(ShaderStage || {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"cKXzV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateLayoutHash", ()=>generateLayoutHash);
"use strict";
function generateLayoutHash({ groups }) {
    const layout = [];
    for(let i = 0; i < groups.length; i++){
        const group = groups[i];
        if (!layout[group.group]) layout[group.group] = {};
        layout[group.group][group.name] = group.binding;
    }
    return layout;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bMQ4T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeStructAndGroupDuplicates", ()=>removeStructAndGroupDuplicates);
"use strict";
function removeStructAndGroupDuplicates(vertexStructsAndGroups, fragmentStructsAndGroups) {
    const structNameSet = /* @__PURE__ */ new Set();
    const dupeGroupKeySet = /* @__PURE__ */ new Set();
    const structs = [
        ...vertexStructsAndGroups.structs,
        ...fragmentStructsAndGroups.structs
    ].filter((struct)=>{
        if (structNameSet.has(struct.name)) return false;
        structNameSet.add(struct.name);
        return true;
    });
    const groups = [
        ...vertexStructsAndGroups.groups,
        ...fragmentStructsAndGroups.groups
    ].filter((group)=>{
        const key = `${group.name}-${group.binding}`;
        if (dupeGroupKeySet.has(key)) return false;
        dupeGroupKeySet.add(key);
        return true;
    });
    return {
        structs,
        groups
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"eXXPs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compileHighShader", ()=>compileHighShader);
parcelHelpers.export(exports, "compileHighShaderGl", ()=>compileHighShaderGl);
var _addBitsMjs = require("./utils/addBits.mjs");
var _compileHooksMjs = require("./utils/compileHooks.mjs");
var _compileInputsMjs = require("./utils/compileInputs.mjs");
var _compileOutputsMjs = require("./utils/compileOutputs.mjs");
var _injectBitsMjs = require("./utils/injectBits.mjs");
"use strict";
const cacheMap = /* @__PURE__ */ Object.create(null);
const bitCacheMap = /* @__PURE__ */ new Map();
let CACHE_UID = 0;
function compileHighShader({ template, bits }) {
    const cacheId = generateCacheId(template, bits);
    if (cacheMap[cacheId]) return cacheMap[cacheId];
    const { vertex, fragment } = compileInputsAndOutputs(template, bits);
    cacheMap[cacheId] = compileBits(vertex, fragment, bits);
    return cacheMap[cacheId];
}
function compileHighShaderGl({ template, bits }) {
    const cacheId = generateCacheId(template, bits);
    if (cacheMap[cacheId]) return cacheMap[cacheId];
    cacheMap[cacheId] = compileBits(template.vertex, template.fragment, bits);
    return cacheMap[cacheId];
}
function compileInputsAndOutputs(template, bits) {
    const vertexFragments = bits.map((shaderBit)=>shaderBit.vertex).filter((v)=>!!v);
    const fragmentFragments = bits.map((shaderBit)=>shaderBit.fragment).filter((v)=>!!v);
    let compiledVertex = (0, _compileInputsMjs.compileInputs)(vertexFragments, template.vertex, true);
    compiledVertex = (0, _compileOutputsMjs.compileOutputs)(vertexFragments, compiledVertex);
    const compiledFragment = (0, _compileInputsMjs.compileInputs)(fragmentFragments, template.fragment, true);
    return {
        vertex: compiledVertex,
        fragment: compiledFragment
    };
}
function generateCacheId(template, bits) {
    return bits.map((highFragment)=>{
        if (!bitCacheMap.has(highFragment)) bitCacheMap.set(highFragment, CACHE_UID++);
        return bitCacheMap.get(highFragment);
    }).sort((a, b)=>a - b).join("-") + template.vertex + template.fragment;
}
function compileBits(vertex, fragment, bits) {
    const vertexParts = (0, _compileHooksMjs.compileHooks)(vertex);
    const fragmentParts = (0, _compileHooksMjs.compileHooks)(fragment);
    bits.forEach((shaderBit)=>{
        (0, _addBitsMjs.addBits)(shaderBit.vertex, vertexParts, shaderBit.name);
        (0, _addBitsMjs.addBits)(shaderBit.fragment, fragmentParts, shaderBit.name);
    });
    return {
        vertex: (0, _injectBitsMjs.injectBits)(vertex, vertexParts),
        fragment: (0, _injectBitsMjs.injectBits)(fragment, fragmentParts)
    };
}

},{"./utils/addBits.mjs":"2uzBC","./utils/compileHooks.mjs":"7W08i","./utils/compileInputs.mjs":"hfRZ4","./utils/compileOutputs.mjs":"imXA9","./utils/injectBits.mjs":"k742f","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"2uzBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBits", ()=>addBits);
var _warnMjs = require("../../../../utils/logging/warn.mjs");
"use strict";
function addBits(srcParts, parts, name) {
    if (srcParts) for(const i in srcParts){
        const id = i.toLocaleLowerCase();
        const part = parts[id];
        if (part) {
            let sanitisedPart = srcParts[i];
            if (i === "header") sanitisedPart = sanitisedPart.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "");
            if (name) part.push(`//----${name}----//`);
            part.push(sanitisedPart);
        } else (0, _warnMjs.warn)(`${i} placement hook does not exist in shader`);
    }
}

},{"../../../../utils/logging/warn.mjs":"gCz01","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7W08i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compileHooks", ()=>compileHooks);
parcelHelpers.export(exports, "findHooksRx", ()=>findHooksRx);
"use strict";
const findHooksRx = /\{\{(.*?)\}\}/g;
function compileHooks(programSrc) {
    const parts = {};
    const partMatches = programSrc.match(findHooksRx)?.map((hook)=>hook.replace(/[{()}]/g, "")) ?? [];
    partMatches.forEach((hook)=>{
        parts[hook] = [];
    });
    return parts;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"hfRZ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compileInputs", ()=>compileInputs);
"use strict";
function extractInputs(fragmentSource, out) {
    let match;
    const regex = /@in\s+([^;]+);/g;
    while((match = regex.exec(fragmentSource)) !== null)out.push(match[1]);
}
function compileInputs(fragments, template, sort = false) {
    const results = [];
    extractInputs(template, results);
    fragments.forEach((fragment)=>{
        if (fragment.header) extractInputs(fragment.header, results);
    });
    const mainInput = results;
    if (sort) mainInput.sort();
    const finalString = mainInput.map((inValue, i)=>`       @location(${i}) ${inValue},`).join("\n");
    let cleanedString = template.replace(/@in\s+[^;]+;\s*/g, "");
    cleanedString = cleanedString.replace("{{in}}", `
${finalString}
`);
    return cleanedString;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"imXA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compileOutputs", ()=>compileOutputs);
"use strict";
function extractOutputs(fragmentSource, out) {
    let match;
    const regex = /@out\s+([^;]+);/g;
    while((match = regex.exec(fragmentSource)) !== null)out.push(match[1]);
}
function extractVariableName(value) {
    const regex = /\b(\w+)\s*:/g;
    const match = regex.exec(value);
    return match ? match[1] : "";
}
function stripVariable(value) {
    const regex = /@.*?\s+/g;
    return value.replace(regex, "");
}
function compileOutputs(fragments, template) {
    const results = [];
    extractOutputs(template, results);
    fragments.forEach((fragment)=>{
        if (fragment.header) extractOutputs(fragment.header, results);
    });
    let index = 0;
    const mainStruct = results.sort().map((inValue)=>{
        if (inValue.indexOf("builtin") > -1) return inValue;
        return `@location(${index++}) ${inValue}`;
    }).join(",\n");
    const mainStart = results.sort().map((inValue)=>`       var ${stripVariable(inValue)};`).join("\n");
    const mainEnd = `return VSOutput(
                ${results.sort().map((inValue)=>` ${extractVariableName(inValue)}`).join(",\n")});`;
    let compiledCode = template.replace(/@out\s+[^;]+;\s*/g, "");
    compiledCode = compiledCode.replace("{{struct}}", `
${mainStruct}
`);
    compiledCode = compiledCode.replace("{{start}}", `
${mainStart}
`);
    compiledCode = compiledCode.replace("{{return}}", `
${mainEnd}
`);
    return compiledCode;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"k742f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "injectBits", ()=>injectBits);
"use strict";
function injectBits(templateSrc, fragmentParts) {
    let out = templateSrc;
    for(const i in fragmentParts){
        const parts = fragmentParts[i];
        const toInject = parts.join("\n");
        if (toInject.length) out = out.replace(`{{${i}}}`, `//-----${i} START-----//
${parts.join("\n")}
//----${i} FINISH----//`);
        else out = out.replace(`{{${i}}}`, "");
    }
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"j0RUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fragmentGPUTemplate", ()=>fragmentGPUTemplate);
parcelHelpers.export(exports, "fragmentGlTemplate", ()=>fragmentGlTemplate);
parcelHelpers.export(exports, "vertexGPUTemplate", ()=>vertexGPUTemplate);
parcelHelpers.export(exports, "vertexGlTemplate", ()=>vertexGlTemplate);
"use strict";
const vertexGPUTemplate = /* wgsl */ `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`;
const fragmentGPUTemplate = /* wgsl */ `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`;
const vertexGlTemplate = /* glsl */ `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`;
const fragmentGlTemplate = /* glsl */ `
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jdOdb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "globalUniformsBit", ()=>globalUniformsBit);
parcelHelpers.export(exports, "globalUniformsBitGl", ()=>globalUniformsBitGl);
parcelHelpers.export(exports, "globalUniformsUBOBitGl", ()=>globalUniformsUBOBitGl);
"use strict";
const globalUniformsBit = {
    name: "global-uniforms-bit",
    vertex: {
        header: /* wgsl */ `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
    }
};
const globalUniformsUBOBitGl = {
    name: "global-uniforms-ubo-bit",
    vertex: {
        header: /* glsl */ `
          uniform globalUniforms {
            mat3 uProjectionMatrix;
            mat3 uWorldTransformMatrix;
            vec4 uWorldColorAlpha;
            vec2 uResolution;
          };
        `
    }
};
const globalUniformsBitGl = {
    name: "global-uniforms-bit",
    vertex: {
        header: /* glsl */ `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"l3r3C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorBit", ()=>colorBit);
parcelHelpers.export(exports, "colorBitGl", ()=>colorBitGl);
"use strict";
const colorBit = {
    name: "color-bit",
    vertex: {
        header: /* wgsl */ `
            @in aColor: vec4<f32>;
        `,
        main: /* wgsl */ `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
    }
};
const colorBitGl = {
    name: "color-bit",
    vertex: {
        header: /* glsl */ `
            in vec4 aColor;
        `,
        main: /* glsl */ `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"g6gEb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateTextureBatchBit", ()=>generateTextureBatchBit);
parcelHelpers.export(exports, "generateTextureBatchBitGl", ()=>generateTextureBatchBitGl);
"use strict";
const textureBatchBitGpuCache = {};
function generateBindingSrc(maxTextures) {
    const src = [];
    if (maxTextures === 1) {
        src.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;");
        src.push("@group(1) @binding(1) var textureSampler1: sampler;");
    } else {
        let bindingIndex = 0;
        for(let i = 0; i < maxTextures; i++){
            src.push(`@group(1) @binding(${bindingIndex++}) var textureSource${i + 1}: texture_2d<f32>;`);
            src.push(`@group(1) @binding(${bindingIndex++}) var textureSampler${i + 1}: sampler;`);
        }
    }
    return src.join("\n");
}
function generateSampleSrc(maxTextures) {
    const src = [];
    if (maxTextures === 1) src.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
    else {
        src.push("switch vTextureId {");
        for(let i = 0; i < maxTextures; i++){
            if (i === maxTextures - 1) src.push(`  default:{`);
            else src.push(`  case ${i}:{`);
            src.push(`      outColor = textureSampleGrad(textureSource${i + 1}, textureSampler${i + 1}, vUV, uvDx, uvDy);`);
            src.push(`      break;}`);
        }
        src.push(`}`);
    }
    return src.join("\n");
}
function generateTextureBatchBit(maxTextures) {
    if (!textureBatchBitGpuCache[maxTextures]) textureBatchBitGpuCache[maxTextures] = {
        name: "texture-batch-bit",
        vertex: {
            header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
            main: `
                vTextureId = aTextureIdAndRound.y;
            `,
            end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
        },
        fragment: {
            header: `
                @in @interpolate(flat) vTextureId: u32;
    
                ${generateBindingSrc(16)}
            `,
            main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${generateSampleSrc(16)}
            `
        }
    };
    return textureBatchBitGpuCache[maxTextures];
}
const textureBatchBitGlCache = {};
function generateSampleGlSrc(maxTextures) {
    const src = [];
    for(let i = 0; i < maxTextures; i++){
        if (i > 0) src.push("else");
        if (i < maxTextures - 1) src.push(`if(vTextureId < ${i}.5)`);
        src.push("{");
        src.push(`	outColor = texture(uTextures[${i}], vUV);`);
        src.push("}");
    }
    return src.join("\n");
}
function generateTextureBatchBitGl(maxTextures) {
    if (!textureBatchBitGlCache[maxTextures]) textureBatchBitGlCache[maxTextures] = {
        name: "texture-batch-bit",
        vertex: {
            header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,
            main: `
                vTextureId = aTextureIdAndRound.y;
            `,
            end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
        },
        fragment: {
            header: `
                in float vTextureId;
    
                uniform sampler2D uTextures[${maxTextures}];
              
            `,
            main: `
    
                ${generateSampleGlSrc(16)}
            `
        }
    };
    return textureBatchBitGlCache[maxTextures];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"4N63b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "roundPixelsBit", ()=>roundPixelsBit);
parcelHelpers.export(exports, "roundPixelsBitGl", ()=>roundPixelsBitGl);
"use strict";
const roundPixelsBit = {
    name: "round-pixels-bit",
    vertex: {
        header: /* wgsl */ `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `
    }
};
const roundPixelsBitGl = {
    name: "round-pixels-bit",
    vertex: {
        header: /* glsl */ `   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"8Mblw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "batchSamplersUniformGroup", ()=>batchSamplersUniformGroup);
var _constMjs = require("../../../batcher/shared/const.mjs");
var _uniformGroupMjs = require("../../shared/shader/UniformGroup.mjs");
"use strict";
const sampleValues = new Int32Array((0, _constMjs.MAX_TEXTURES));
for(let i = 0; i < (0, _constMjs.MAX_TEXTURES); i++)sampleValues[i] = i;
const batchSamplersUniformGroup = new (0, _uniformGroupMjs.UniformGroup)({
    uTextures: {
        value: sampleValues,
        type: `i32`,
        size: (0, _constMjs.MAX_TEXTURES)
    }
}, {
    isStatic: true
});

},{"../../../batcher/shared/const.mjs":"1Zfz9","../../shared/shader/UniformGroup.mjs":"ihTky","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"a3UQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shader", ()=>Shader);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _glProgramMjs = require("../../gl/shader/GlProgram.mjs");
var _bindGroupMjs = require("../../gpu/shader/BindGroup.mjs");
var _gpuProgramMjs = require("../../gpu/shader/GpuProgram.mjs");
var _typesMjs = require("../../types.mjs");
var _uniformGroupMjs = require("./UniformGroup.mjs");
"use strict";
class Shader extends (0, _eventemitter3Default.default) {
    constructor(options){
        super();
        /**
     * A record of the uniform groups and resources used by the shader.
     * This is used by WebGL renderer to sync uniform data.
     * @internal
     * @ignore
     */ this._uniformBindMap = /* @__PURE__ */ Object.create(null);
        this._ownedBindGroups = [];
        let { gpuProgram, glProgram, groups, resources, compatibleRenderers, groupMap } = options;
        this.gpuProgram = gpuProgram;
        this.glProgram = glProgram;
        if (compatibleRenderers === void 0) {
            compatibleRenderers = 0;
            if (gpuProgram) compatibleRenderers |= (0, _typesMjs.RendererType).WEBGPU;
            if (glProgram) compatibleRenderers |= (0, _typesMjs.RendererType).WEBGL;
        }
        this.compatibleRenderers = compatibleRenderers;
        const nameHash = {};
        if (!resources && !groups) resources = {};
        if (resources && groups) throw new Error("[Shader] Cannot have both resources and groups");
        else if (!gpuProgram && groups && !groupMap) throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
        else if (!gpuProgram && groups && groupMap) {
            for(const i in groupMap)for(const j in groupMap[i]){
                const uniformName = groupMap[i][j];
                nameHash[uniformName] = {
                    group: i,
                    binding: j,
                    name: uniformName
                };
            }
        } else if (gpuProgram && groups && !groupMap) {
            const groupData = gpuProgram.structsAndGroups.groups;
            groupMap = {};
            groupData.forEach((data)=>{
                groupMap[data.group] = groupMap[data.group] || {};
                groupMap[data.group][data.binding] = data.name;
                nameHash[data.name] = data;
            });
        } else if (resources) {
            if (!gpuProgram) {
                groupMap = {};
                groups = {
                    99: new (0, _bindGroupMjs.BindGroup)()
                };
                this._ownedBindGroups.push(groups[99]);
                let bindTick = 0;
                for(const i in resources){
                    nameHash[i] = {
                        group: 99,
                        binding: bindTick,
                        name: i
                    };
                    groupMap[99] = groupMap[99] || {};
                    groupMap[99][bindTick] = i;
                    bindTick++;
                }
            } else {
                const groupData = gpuProgram.structsAndGroups.groups;
                groupMap = {};
                groupData.forEach((data)=>{
                    groupMap[data.group] = groupMap[data.group] || {};
                    groupMap[data.group][data.binding] = data.name;
                    nameHash[data.name] = data;
                });
            }
            groups = {};
            for(const i in resources){
                const name = i;
                let value = resources[i];
                if (!value.source && !value._resourceType) value = new (0, _uniformGroupMjs.UniformGroup)(value);
                const data = nameHash[name];
                if (data) {
                    if (!groups[data.group]) {
                        groups[data.group] = new (0, _bindGroupMjs.BindGroup)();
                        this._ownedBindGroups.push(groups[data.group]);
                    }
                    groups[data.group].setResource(value, data.binding);
                }
            }
        }
        this.groups = groups;
        this._uniformBindMap = groupMap;
        this.resources = this._buildResourceAccessor(groups, nameHash);
    }
    /**
   * Sometimes a resource group will be provided later (for example global uniforms)
   * In such cases, this method can be used to let the shader know about the group.
   * @param name - the name of the resource group
   * @param groupIndex - the index of the group (should match the webGPU shader group location)
   * @param bindIndex - the index of the bind point (should match the webGPU shader bind point)
   */ addResource(name, groupIndex, bindIndex) {
        var _a, _b;
        (_a = this._uniformBindMap)[groupIndex] || (_a[groupIndex] = {});
        (_b = this._uniformBindMap[groupIndex])[bindIndex] || (_b[bindIndex] = name);
        if (!this.groups[groupIndex]) {
            this.groups[groupIndex] = new (0, _bindGroupMjs.BindGroup)();
            this._ownedBindGroups.push(this.groups[groupIndex]);
        }
    }
    _buildResourceAccessor(groups, nameHash) {
        const uniformsOut = {};
        for(const i in nameHash){
            const data = nameHash[i];
            Object.defineProperty(uniformsOut, data.name, {
                get () {
                    return groups[data.group].getResource(data.binding);
                },
                set (value) {
                    groups[data.group].setResource(value, data.binding);
                }
            });
        }
        return uniformsOut;
    }
    /**
   * Use to destroy the shader when its not longer needed.
   * It will destroy the resources and remove listeners.
   * @param destroyPrograms - if the programs should be destroyed as well.
   * Make sure its not being used by other shaders!
   */ destroy(destroyPrograms = false) {
        this.emit("destroy", this);
        if (destroyPrograms) {
            this.gpuProgram?.destroy();
            this.glProgram?.destroy();
        }
        this.gpuProgram = null;
        this.glProgram = null;
        this.removeAllListeners();
        this._uniformBindMap = null;
        this._ownedBindGroups.forEach((bindGroup)=>{
            bindGroup.destroy();
        });
        this._ownedBindGroups = null;
        this.resources = null;
        this.groups = null;
    }
    static from(options) {
        const { gpu, gl, ...rest } = options;
        let gpuProgram;
        let glProgram;
        if (gpu) gpuProgram = (0, _gpuProgramMjs.GpuProgram).from(gpu);
        if (gl) glProgram = (0, _glProgramMjs.GlProgram).from(gl);
        return new Shader({
            gpuProgram,
            glProgram,
            ...rest
        });
    }
}

},{"eventemitter3":"enSRh","../../gl/shader/GlProgram.mjs":"jZK3F","../../gpu/shader/BindGroup.mjs":"8EZE8","../../gpu/shader/GpuProgram.mjs":"fVNWY","../../types.mjs":"fkqYW","./UniformGroup.mjs":"ihTky","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fkqYW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RendererType", ()=>RendererType);
"use strict";
var RendererType = /* @__PURE__ */ ((RendererType2)=>{
    RendererType2[RendererType2["WEBGL"] = 1] = "WEBGL";
    RendererType2[RendererType2["WEBGPU"] = 2] = "WEBGPU";
    RendererType2[RendererType2["BOTH"] = 3] = "BOTH";
    return RendererType2;
})(RendererType || {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"9pWXa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localUniformMSDFBit", ()=>localUniformMSDFBit);
parcelHelpers.export(exports, "localUniformMSDFBitGl", ()=>localUniformMSDFBitGl);
"use strict";
const localUniformMSDFBit = {
    name: "local-uniform-msdf-bit",
    vertex: {
        header: /* wgsl */ `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
        main: /* wgsl */ `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
        end: /* wgsl */ `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `
    },
    fragment: {
        header: /* wgsl */ `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,
        main: /* wgsl */ ` 
            outColor = vColor * calculateMSDFAlpha(outColor, localUniforms.uDistance);
        `
    }
};
const localUniformMSDFBitGl = {
    name: "local-uniform-msdf-bit",
    vertex: {
        header: /* glsl */ `
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
        main: /* glsl */ `
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,
        end: /* glsl */ `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
    },
    fragment: {
        header: /* glsl */ `
            uniform float uDistance;
         `,
        main: /* glsl */ ` 
            outColor = vColor * calculateMSDFAlpha(outColor, uDistance);
        `
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"bbT0n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mSDFBit", ()=>mSDFBit);
parcelHelpers.export(exports, "mSDFBitGl", ()=>mSDFBitGl);
"use strict";
const mSDFBit = {
    name: "msdf-bit",
    fragment: {
        header: /* wgsl */ `
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `
    }
};
const mSDFBitGl = {
    name: "msdf-bit",
    fragment: {
        header: /* glsl */ `
            float calculateMSDFAlpha(vec4 msdfColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"aNmwp":[function(require,module,exports) {
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _htmltextPipeMjs = require("./HTMLTextPipe.mjs");
var _htmltextSystemMjs = require("./HTMLTextSystem.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _htmltextSystemMjs.HTMLTextSystem));
(0, _extensionsMjs.extensions).add((0, _htmltextPipeMjs.HTMLTextPipe));

},{"../../extensions/Extensions.mjs":"c8doH","./HTMLTextPipe.mjs":"3x0yi","./HTMLTextSystem.mjs":"ffv1m"}],"3x0yi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLTextPipe", ()=>HTMLTextPipe);
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _textureMjs = require("../../rendering/renderers/shared/texture/Texture.mjs");
var _updateQuadBoundsMjs = require("../../utils/data/updateQuadBounds.mjs");
var _poolGroupMjs = require("../../utils/pool/PoolGroup.mjs");
var _batchableSpriteMjs = require("../sprite/BatchableSprite.mjs");
"use strict";
class HTMLTextPipe {
    constructor(renderer){
        this._gpuText = /* @__PURE__ */ Object.create(null);
        this._renderer = renderer;
    }
    validateRenderable(htmlText) {
        const gpuText = this._getGpuText(htmlText);
        const newKey = htmlText._getKey();
        if (gpuText.textureNeedsUploading) {
            gpuText.textureNeedsUploading = false;
            return true;
        }
        if (gpuText.currentKey !== newKey) return true;
        return false;
    }
    addRenderable(htmlText) {
        const gpuText = this._getGpuText(htmlText);
        const batchableSprite = gpuText.batchableSprite;
        if (htmlText._didTextUpdate) this._updateText(htmlText);
        this._renderer.renderPipes.batch.addToBatch(batchableSprite);
    }
    updateRenderable(htmlText) {
        const gpuText = this._getGpuText(htmlText);
        const batchableSprite = gpuText.batchableSprite;
        if (htmlText._didTextUpdate) this._updateText(htmlText);
        batchableSprite.batcher.updateElement(batchableSprite);
    }
    destroyRenderable(htmlText) {
        this._destroyRenderableById(htmlText.uid);
    }
    _destroyRenderableById(htmlTextUid) {
        const gpuText = this._gpuText[htmlTextUid];
        this._renderer.htmlText.decreaseReferenceCount(gpuText.currentKey);
        (0, _poolGroupMjs.BigPool).return(gpuText.batchableSprite);
        this._gpuText[htmlTextUid] = null;
    }
    _updateText(htmlText) {
        const newKey = htmlText._getKey();
        const gpuText = this._getGpuText(htmlText);
        const batchableSprite = gpuText.batchableSprite;
        if (gpuText.currentKey !== newKey) this._updateGpuText(htmlText).catch((e)=>{
            console.error(e);
        });
        htmlText._didTextUpdate = false;
        const padding = htmlText._style.padding;
        (0, _updateQuadBoundsMjs.updateQuadBounds)(batchableSprite.bounds, htmlText._anchor, batchableSprite.texture, padding);
    }
    async _updateGpuText(htmlText) {
        htmlText._didTextUpdate = false;
        const gpuText = this._getGpuText(htmlText);
        if (gpuText.generatingTexture) return;
        const newKey = htmlText._getKey();
        this._renderer.htmlText.decreaseReferenceCount(gpuText.currentKey);
        gpuText.generatingTexture = true;
        gpuText.currentKey = newKey;
        const resolution = htmlText.resolution ?? this._renderer.resolution;
        const texture = await this._renderer.htmlText.getManagedTexture(htmlText.text, resolution, htmlText._style, htmlText._getKey());
        const batchableSprite = gpuText.batchableSprite;
        batchableSprite.texture = gpuText.texture = texture;
        gpuText.generatingTexture = false;
        gpuText.textureNeedsUploading = true;
        htmlText.onViewUpdate();
        const padding = htmlText._style.padding;
        (0, _updateQuadBoundsMjs.updateQuadBounds)(batchableSprite.bounds, htmlText._anchor, batchableSprite.texture, padding);
    }
    _getGpuText(htmlText) {
        return this._gpuText[htmlText.uid] || this.initGpuText(htmlText);
    }
    initGpuText(htmlText) {
        const gpuTextData = {
            texture: (0, _textureMjs.Texture).EMPTY,
            currentKey: "--",
            batchableSprite: (0, _poolGroupMjs.BigPool).get((0, _batchableSpriteMjs.BatchableSprite)),
            textureNeedsUploading: false,
            generatingTexture: false
        };
        const batchableSprite = gpuTextData.batchableSprite;
        batchableSprite.renderable = htmlText;
        batchableSprite.texture = (0, _textureMjs.Texture).EMPTY;
        batchableSprite.bounds = {
            minX: 0,
            maxX: 1,
            minY: 0,
            maxY: 0
        };
        batchableSprite.roundPixels = this._renderer._roundPixels | htmlText._roundPixels;
        this._gpuText[htmlText.uid] = gpuTextData;
        htmlText.on("destroyed", ()=>{
            this.destroyRenderable(htmlText);
        });
        return gpuTextData;
    }
    destroy() {
        for(const i in this._gpuText)this._destroyRenderableById(i);
        this._gpuText = null;
        this._renderer = null;
    }
}
/** @ignore */ HTMLTextPipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "htmlText"
};

},{"../../extensions/Extensions.mjs":"c8doH","../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../../utils/data/updateQuadBounds.mjs":"iun61","../../utils/pool/PoolGroup.mjs":"bj9CN","../sprite/BatchableSprite.mjs":"ehhdS","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ffv1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLTextSystem", ()=>HTMLTextSystem);
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _texturePoolMjs = require("../../rendering/renderers/shared/texture/TexturePool.mjs");
var _typesMjs = require("../../rendering/renderers/types.mjs");
var _isSafariMjs = require("../../utils/browser/isSafari.mjs");
var _warnMjs = require("../../utils/logging/warn.mjs");
var _poolGroupMjs = require("../../utils/pool/PoolGroup.mjs");
var _getPo2TextureFromSourceMjs = require("../text/utils/getPo2TextureFromSource.mjs");
var _htmltextRenderDataMjs = require("./HTMLTextRenderData.mjs");
var _htmlTextStyleMjs = require("./HtmlTextStyle.mjs");
var _extractFontFamiliesMjs = require("./utils/extractFontFamilies.mjs");
var _getFontCssMjs = require("./utils/getFontCss.mjs");
var _getSVGUrlMjs = require("./utils/getSVGUrl.mjs");
var _getTemporaryCanvasFromImageMjs = require("./utils/getTemporaryCanvasFromImage.mjs");
var _loadSVGImageMjs = require("./utils/loadSVGImage.mjs");
var _measureHtmlTextMjs = require("./utils/measureHtmlText.mjs");
"use strict";
class HTMLTextSystem {
    constructor(renderer){
        this._activeTextures = {};
        this._renderer = renderer;
        this._createCanvas = renderer.type === (0, _typesMjs.RendererType).WEBGPU;
    }
    getTexture(options) {
        return this._buildTexturePromise(options.text, options.resolution, options.style);
    }
    getManagedTexture(text, resolution, style, textKey) {
        if (this._activeTextures[textKey]) {
            this._increaseReferenceCount(textKey);
            return this._activeTextures[textKey].promise;
        }
        const promise = this._buildTexturePromise(text, resolution, style).then((texture)=>{
            this._activeTextures[textKey].texture = texture;
            return texture;
        });
        this._activeTextures[textKey] = {
            texture: null,
            promise,
            usageCount: 1
        };
        return promise;
    }
    async _buildTexturePromise(text, resolution, style) {
        const htmlTextData = (0, _poolGroupMjs.BigPool).get((0, _htmltextRenderDataMjs.HTMLTextRenderData));
        const fontFamilies = (0, _extractFontFamiliesMjs.extractFontFamilies)(text, style);
        const fontCSS = await (0, _getFontCssMjs.getFontCss)(fontFamilies, style, (0, _htmlTextStyleMjs.HTMLTextStyle).defaultTextStyle);
        const measured = (0, _measureHtmlTextMjs.measureHtmlText)(text, style, fontCSS, htmlTextData);
        const width = Math.ceil(Math.ceil(Math.max(1, measured.width) + style.padding * 2) * resolution);
        const height = Math.ceil(Math.ceil(Math.max(1, measured.height) + style.padding * 2) * resolution);
        const image = htmlTextData.image;
        image.width = width | 0;
        image.height = height | 0;
        const svgURL = (0, _getSVGUrlMjs.getSVGUrl)(text, style, resolution, fontCSS, htmlTextData);
        await (0, _loadSVGImageMjs.loadSVGImage)(image, svgURL, (0, _isSafariMjs.isSafari)() && fontFamilies.length > 0);
        let resource = image;
        if (this._createCanvas) resource = (0, _getTemporaryCanvasFromImageMjs.getTemporaryCanvasFromImage)(image, resolution);
        const texture = (0, _getPo2TextureFromSourceMjs.getPo2TextureFromSource)(resource, image.width, image.height, resolution);
        if (this._createCanvas) this._renderer.texture.initSource(texture.source);
        (0, _poolGroupMjs.BigPool).return(htmlTextData);
        return texture;
    }
    _increaseReferenceCount(textKey) {
        this._activeTextures[textKey].usageCount++;
    }
    decreaseReferenceCount(textKey) {
        const activeTexture = this._activeTextures[textKey];
        if (!activeTexture) return;
        activeTexture.usageCount--;
        if (activeTexture.usageCount === 0) {
            if (activeTexture.texture) this._cleanUp(activeTexture);
            else activeTexture.promise.then((texture)=>{
                activeTexture.texture = texture;
                this._cleanUp(activeTexture);
            }).catch(()=>{
                (0, _warnMjs.warn)("HTMLTextSystem: Failed to clean texture");
            });
            this._activeTextures[textKey] = null;
        }
    }
    _cleanUp(activeTexture) {
        (0, _texturePoolMjs.TexturePool).returnTexture(activeTexture.texture);
        activeTexture.texture.source.resource = null;
        activeTexture.texture.source.uploadMethodId = "unknown";
    }
    getReferenceCount(textKey) {
        return this._activeTextures[textKey].usageCount;
    }
    destroy() {
        this._activeTextures = null;
    }
}
/** @ignore */ HTMLTextSystem.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLSystem,
        (0, _extensionsMjs.ExtensionType).WebGPUSystem,
        (0, _extensionsMjs.ExtensionType).CanvasSystem
    ],
    name: "htmlText"
};
HTMLTextSystem.defaultFontOptions = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "normal"
};

},{"../../extensions/Extensions.mjs":"c8doH","../../rendering/renderers/shared/texture/TexturePool.mjs":"amMMm","../../rendering/renderers/types.mjs":"fkqYW","../../utils/browser/isSafari.mjs":"41snQ","../../utils/logging/warn.mjs":"gCz01","../../utils/pool/PoolGroup.mjs":"bj9CN","../text/utils/getPo2TextureFromSource.mjs":"fkJjC","./HTMLTextRenderData.mjs":"emJZb","./HtmlTextStyle.mjs":"dbyIg","./utils/extractFontFamilies.mjs":"37t2w","./utils/getFontCss.mjs":"cXAfy","./utils/getSVGUrl.mjs":"1GwTv","./utils/getTemporaryCanvasFromImage.mjs":"5dvYv","./utils/loadSVGImage.mjs":"fSKMI","./utils/measureHtmlText.mjs":"3Kndb","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"41snQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSafari", ()=>isSafari);
var _adapterMjs = require("../../environment/adapter.mjs");
"use strict";
function isSafari() {
    const { userAgent } = (0, _adapterMjs.DOMAdapter).get().getNavigator();
    return /^((?!chrome|android).)*safari/i.test(userAgent);
}

},{"../../environment/adapter.mjs":"bGyo9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"emJZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLTextRenderData", ()=>HTMLTextRenderData);
parcelHelpers.export(exports, "nssvg", ()=>nssvg);
parcelHelpers.export(exports, "nsxhtml", ()=>nsxhtml);
"use strict";
const nssvg = "http://www.w3.org/2000/svg";
const nsxhtml = "http://www.w3.org/1999/xhtml";
class HTMLTextRenderData {
    constructor(){
        this.svgRoot = document.createElementNS(nssvg, "svg");
        this.foreignObject = document.createElementNS(nssvg, "foreignObject");
        this.domElement = document.createElementNS(nsxhtml, "div");
        this.styleElement = document.createElementNS(nsxhtml, "style");
        this.image = new Image();
        const { foreignObject, svgRoot, styleElement, domElement } = this;
        foreignObject.setAttribute("width", "10000");
        foreignObject.setAttribute("height", "10000");
        foreignObject.style.overflow = "hidden";
        svgRoot.appendChild(foreignObject);
        foreignObject.appendChild(styleElement);
        foreignObject.appendChild(domElement);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"dbyIg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLTextStyle", ()=>HTMLTextStyle);
var _warnMjs = require("../../utils/logging/warn.mjs");
var _textStyleMjs = require("../text/TextStyle.mjs");
var _generateTextStyleKeyMjs = require("../text/utils/generateTextStyleKey.mjs");
var _textStyleToCSSMjs = require("./utils/textStyleToCSS.mjs");
"use strict";
class HTMLTextStyle extends (0, _textStyleMjs.TextStyle) {
    constructor(options = {}){
        super(options);
        this._cssOverrides = [];
        this.cssOverrides ?? (this.cssOverrides = options.cssOverrides);
        this.tagStyles = options.tagStyles ?? {};
    }
    /** List of style overrides that will be applied to the HTML text. */ set cssOverrides(value) {
        this._cssOverrides = value instanceof Array ? value : [
            value
        ];
        this.update();
    }
    get cssOverrides() {
        return this._cssOverrides;
    }
    _generateKey() {
        this._styleKey = (0, _generateTextStyleKeyMjs.generateTextStyleKey)(this) + this._cssOverrides.join("-");
        return this._styleKey;
    }
    update() {
        this._cssStyle = null;
        super.update();
    }
    /**
   * Creates a new HTMLTextStyle object with the same values as this one.
   * @returns New cloned HTMLTextStyle object
   */ clone() {
        return new HTMLTextStyle({
            align: this.align,
            breakWords: this.breakWords,
            dropShadow: this.dropShadow,
            fill: this._fill,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            fontStyle: this.fontStyle,
            fontVariant: this.fontVariant,
            fontWeight: this.fontWeight,
            letterSpacing: this.letterSpacing,
            lineHeight: this.lineHeight,
            padding: this.padding,
            stroke: this._stroke,
            whiteSpace: this.whiteSpace,
            wordWrap: this.wordWrap,
            wordWrapWidth: this.wordWrapWidth,
            cssOverrides: this.cssOverrides
        });
    }
    get cssStyle() {
        if (!this._cssStyle) this._cssStyle = (0, _textStyleToCSSMjs.textStyleToCSS)(this);
        return this._cssStyle;
    }
    /**
   * Add a style override, this can be any CSS property
   * it will override any built-in style. This is the
   * property and the value as a string (e.g., `color: red`).
   * This will override any other internal style.
   * @param {string} value - CSS style(s) to add.
   * @example
   * style.addOverride('background-color: red');
   */ addOverride(...value) {
        const toAdd = value.filter((v)=>!this.cssOverrides.includes(v));
        if (toAdd.length > 0) {
            this.cssOverrides.push(...toAdd);
            this.update();
        }
    }
    /**
   * Remove any overrides that match the value.
   * @param {string} value - CSS style to remove.
   * @example
   * style.removeOverride('background-color: red');
   */ removeOverride(...value) {
        const toRemove = value.filter((v)=>this.cssOverrides.includes(v));
        if (toRemove.length > 0) {
            this.cssOverrides = this.cssOverrides.filter((v)=>!toRemove.includes(v));
            this.update();
        }
    }
    set fill(value) {
        if (typeof value !== "string" && typeof value !== "number") (0, _warnMjs.warn)("[HTMLTextStyle] only color fill is not supported by HTMLText");
        super.fill = value;
    }
    set stroke(value) {
        if (value && typeof value !== "string" && typeof value !== "number") (0, _warnMjs.warn)("[HTMLTextStyle] only color stroke is not supported by HTMLText");
        super.stroke = value;
    }
}

},{"../../utils/logging/warn.mjs":"gCz01","../text/TextStyle.mjs":"fGfmW","../text/utils/generateTextStyleKey.mjs":"cH0HL","./utils/textStyleToCSS.mjs":"ed0Rz","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ed0Rz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "textStyleToCSS", ()=>textStyleToCSS);
var _colorMjs = require("../../../color/Color.mjs");
"use strict";
function textStyleToCSS(style) {
    const stroke = style._stroke;
    const fill = style._fill;
    const cssStyleString = [
        `color: ${(0, _colorMjs.Color).shared.setValue(fill.color).toHex()}`,
        `font-size: ${style.fontSize}px`,
        `font-family: ${style.fontFamily}`,
        `font-weight: ${style.fontWeight}`,
        `font-style: ${style.fontStyle}`,
        `font-variant: ${style.fontVariant}`,
        `letter-spacing: ${style.letterSpacing}px`,
        `text-align: ${style.align}`,
        `padding: ${style.padding}px`,
        `white-space: ${style.whiteSpace === "pre" && style.wordWrap ? "pre-wrap" : style.whiteSpace}`,
        ...style.lineHeight ? [
            `line-height: ${style.lineHeight}px`
        ] : [],
        ...style.wordWrap ? [
            `word-wrap: ${style.breakWords ? "break-all" : "break-word"}`,
            `max-width: ${style.wordWrapWidth}px`
        ] : [],
        ...stroke ? [
            strokeToCSS(stroke)
        ] : [],
        ...style.dropShadow ? [
            dropShadowToCSS(style.dropShadow)
        ] : [],
        ...style.cssOverrides
    ].join(";");
    const cssStyles = [
        `div { ${cssStyleString} }`
    ];
    tagStyleToCSS(style.tagStyles, cssStyles);
    return cssStyles.join(" ");
}
function dropShadowToCSS(dropShadowStyle) {
    const color = (0, _colorMjs.Color).shared.setValue(dropShadowStyle.color).setAlpha(dropShadowStyle.alpha).toHexa();
    const x = Math.round(Math.cos(dropShadowStyle.angle) * dropShadowStyle.distance);
    const y = Math.round(Math.sin(dropShadowStyle.angle) * dropShadowStyle.distance);
    const position = `${x}px ${y}px`;
    if (dropShadowStyle.blur > 0) return `text-shadow: ${position} ${dropShadowStyle.blur}px ${color}`;
    return `text-shadow: ${position} ${color}`;
}
function strokeToCSS(stroke) {
    return [
        `-webkit-text-stroke-width: ${stroke.width}px`,
        `-webkit-text-stroke-color: ${(0, _colorMjs.Color).shared.setValue(stroke.color).toHex()}`,
        `text-stroke-width: ${stroke.width}px`,
        `text-stroke-color: ${(0, _colorMjs.Color).shared.setValue(stroke.color).toHex()}`,
        "paint-order: stroke"
    ].join(";");
}
const templates = {
    fontSize: `font-size: {{VALUE}}px`,
    fontFamily: `font-family: {{VALUE}}`,
    fontWeight: `font-weight: {{VALUE}}`,
    fontStyle: `font-style: {{VALUE}}`,
    fontVariant: `font-variant: {{VALUE}}`,
    letterSpacing: `letter-spacing: {{VALUE}}px`,
    align: `text-align: {{VALUE}}`,
    padding: `padding: {{VALUE}}px`,
    whiteSpace: `white-space: {{VALUE}}`,
    lineHeight: `line-height: {{VALUE}}px`,
    wordWrapWidth: `max-width: {{VALUE}}px`
};
const transform = {
    fill: (value)=>`color: ${(0, _colorMjs.Color).shared.setValue(value).toHex()}`,
    breakWords: (value)=>`word-wrap: ${value ? "break-all" : "break-word"}`,
    stroke: strokeToCSS,
    dropShadow: dropShadowToCSS
};
function tagStyleToCSS(tagStyles, out) {
    for(const i in tagStyles){
        const tagStyle = tagStyles[i];
        const cssTagStyle = [];
        for(const j in tagStyle){
            if (transform[j]) cssTagStyle.push(transform[j](tagStyle[j]));
            else if (templates[j]) cssTagStyle.push(templates[j].replace("{{VALUE}}", tagStyle[j]));
        }
        out.push(`${i} { ${cssTagStyle.join(";")} }`);
    }
}

},{"../../../color/Color.mjs":"duTAI","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"37t2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extractFontFamilies", ()=>extractFontFamilies);
"use strict";
function extractFontFamilies(text, style) {
    const fontFamily = style.fontFamily;
    const fontFamilies = [];
    const dedupe = {};
    const regex = /font-family:([^;"\s]+)/g;
    const matches = text.match(regex);
    function addFontFamily(fontFamily2) {
        if (!dedupe[fontFamily2]) {
            fontFamilies.push(fontFamily2);
            dedupe[fontFamily2] = true;
        }
    }
    if (Array.isArray(fontFamily)) for(let i = 0; i < fontFamily.length; i++)addFontFamily(fontFamily[i]);
    else addFontFamily(fontFamily);
    if (matches) matches.forEach((match)=>{
        const fontFamily2 = match.split(":")[1].trim();
        addFontFamily(fontFamily2);
    });
    for(const i in style.tagStyles){
        const fontFamily2 = style.tagStyles[i].fontFamily;
        addFontFamily(fontFamily2);
    }
    return fontFamilies;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"cXAfy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FontStylePromiseCache", ()=>FontStylePromiseCache);
parcelHelpers.export(exports, "getFontCss", ()=>getFontCss);
var _cacheMjs = require("../../../assets/cache/Cache.mjs");
var _loadFontCSSMjs = require("./loadFontCSS.mjs");
"use strict";
const FontStylePromiseCache = /* @__PURE__ */ new Map();
async function getFontCss(fontFamilies, style, defaultOptions) {
    const fontPromises = fontFamilies.filter((fontFamily)=>(0, _cacheMjs.Cache).has(`${fontFamily}-and-url`)).map((fontFamily, i)=>{
        if (!FontStylePromiseCache.has(fontFamily)) {
            const { url } = (0, _cacheMjs.Cache).get(`${fontFamily}-and-url`);
            if (i === 0) FontStylePromiseCache.set(fontFamily, (0, _loadFontCSSMjs.loadFontCSS)(style, url));
            else FontStylePromiseCache.set(fontFamily, (0, _loadFontCSSMjs.loadFontCSS)({
                fontWeight: defaultOptions.fontWeight,
                fontStyle: defaultOptions.fontStyle,
                fontFamily
            }, url));
        }
        return FontStylePromiseCache.get(fontFamily);
    });
    return (await Promise.all(fontPromises)).join("\n");
}

},{"../../../assets/cache/Cache.mjs":"auo1K","./loadFontCSS.mjs":"aRCU5","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"aRCU5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadFontCSS", ()=>loadFontCSS);
var _loadFontAsBase64Mjs = require("./loadFontAsBase64.mjs");
"use strict";
async function loadFontCSS(style, url) {
    const dataSrc = await (0, _loadFontAsBase64Mjs.loadFontAsBase64)(url);
    return `@font-face {
        font-family: "${style.fontFamily}";
        src: url('${dataSrc}');
        font-weight: ${style.fontWeight};
        font-style: ${style.fontStyle};
    }`;
}

},{"./loadFontAsBase64.mjs":"cFeqt","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"cFeqt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadFontAsBase64", ()=>loadFontAsBase64);
var _adapterMjs = require("../../../environment/adapter.mjs");
"use strict";
async function loadFontAsBase64(url) {
    const response = await (0, _adapterMjs.DOMAdapter).get().fetch(url);
    const blob = await response.blob();
    const reader = new FileReader();
    const dataSrc = await new Promise((resolve, reject)=>{
        reader.onloadend = ()=>resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
    return dataSrc;
}

},{"../../../environment/adapter.mjs":"bGyo9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1GwTv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSVGUrl", ()=>getSVGUrl);
"use strict";
function getSVGUrl(text, style, resolution, fontCSS, htmlTextData) {
    const { domElement, styleElement, svgRoot } = htmlTextData;
    domElement.innerHTML = `<style>${style.cssStyle}</style><div>${text}</div>`;
    domElement.setAttribute("style", `transform: scale(${resolution});transform-origin: top left; display: inline-block`);
    styleElement.textContent = fontCSS;
    const { width, height } = htmlTextData.image;
    svgRoot.setAttribute("width", width.toString());
    svgRoot.setAttribute("height", height.toString());
    return new XMLSerializer().serializeToString(svgRoot);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"5dvYv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTemporaryCanvasFromImage", ()=>getTemporaryCanvasFromImage);
var _canvasPoolMjs = require("../../../rendering/renderers/shared/texture/CanvasPool.mjs");
"use strict";
function getTemporaryCanvasFromImage(image, resolution) {
    const canvasAndContext = (0, _canvasPoolMjs.CanvasPool).getOptimalCanvasAndContext(image.width, image.height, resolution);
    const { context } = canvasAndContext;
    context.clearRect(0, 0, image.width, image.height);
    context.drawImage(image, 0, 0);
    (0, _canvasPoolMjs.CanvasPool).returnCanvasAndContext(canvasAndContext);
    return canvasAndContext.canvas;
}

},{"../../../rendering/renderers/shared/texture/CanvasPool.mjs":"3k1Tt","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fSKMI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadSVGImage", ()=>loadSVGImage);
"use strict";
function loadSVGImage(image, url, delay) {
    return new Promise(async (resolve)=>{
        if (delay) await new Promise((resolve2)=>setTimeout(resolve2, 100));
        image.onload = ()=>{
            resolve();
        };
        image.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(url)}`;
        image.crossOrigin = "anonymous";
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"3Kndb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "measureHtmlText", ()=>measureHtmlText);
var _canvasTextMetricsMjs = require("../../text/canvas/CanvasTextMetrics.mjs");
var _htmltextRenderDataMjs = require("../HTMLTextRenderData.mjs");
"use strict";
let tempHTMLTextRenderData;
function measureHtmlText(text, style, fontStyleCSS, htmlTextRenderData) {
    htmlTextRenderData = htmlTextRenderData || tempHTMLTextRenderData || (tempHTMLTextRenderData = new (0, _htmltextRenderDataMjs.HTMLTextRenderData)());
    const { domElement, styleElement, svgRoot } = htmlTextRenderData;
    domElement.innerHTML = `<style>${style.cssStyle}</style><div>${text}</div>`;
    domElement.setAttribute("style", "transform-origin: top left; display: inline-block");
    if (fontStyleCSS) styleElement.textContent = fontStyleCSS;
    document.body.appendChild(svgRoot);
    const contentBounds = domElement.getBoundingClientRect();
    svgRoot.remove();
    const descenderPadding = (0, _canvasTextMetricsMjs.CanvasTextMetrics).measureFont(style.fontStyle).descent;
    return {
        width: contentBounds.width,
        height: contentBounds.height + descenderPadding
    };
}

},{"../../text/canvas/CanvasTextMetrics.mjs":"2DgIe","../HTMLTextRenderData.mjs":"emJZb","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"cnAFW":[function(require,module,exports) {
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _tilingSpritePipeMjs = require("./TilingSpritePipe.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _tilingSpritePipeMjs.TilingSpritePipe));

},{"../../extensions/Extensions.mjs":"c8doH","./TilingSpritePipe.mjs":"cD4VY"}],"cD4VY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TilingSpritePipe", ()=>TilingSpritePipe);
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _stateMjs = require("../../rendering/renderers/shared/state/State.mjs");
var _typesMjs = require("../../rendering/renderers/types.mjs");
var _colorToUniformMjs = require("../graphics/gpu/colorToUniform.mjs");
var _batchableMeshMjs = require("../mesh/shared/BatchableMesh.mjs");
var _meshGeometryMjs = require("../mesh/shared/MeshGeometry.mjs");
var _tilingSpriteShaderMjs = require("./shader/TilingSpriteShader.mjs");
var _quadGeometryMjs = require("./utils/QuadGeometry.mjs");
var _setPositionsMjs = require("./utils/setPositions.mjs");
var _setUvsMjs = require("./utils/setUvs.mjs");
"use strict";
const sharedQuad = new (0, _quadGeometryMjs.QuadGeometry)();
class TilingSpritePipe {
    constructor(renderer){
        this._tilingSpriteDataHash = /* @__PURE__ */ Object.create(null);
        this._renderer = renderer;
    }
    validateRenderable(renderable) {
        const tilingSpriteData = this._getTilingSpriteData(renderable);
        const couldBatch = tilingSpriteData.canBatch;
        this._updateCanBatch(renderable);
        const canBatch = tilingSpriteData.canBatch;
        if (canBatch && canBatch === couldBatch) {
            const { batchableMesh } = tilingSpriteData;
            if (batchableMesh.texture._source !== renderable.texture._source) return !batchableMesh.batcher.checkAndUpdateTexture(batchableMesh, renderable.texture);
        }
        return couldBatch !== canBatch;
    }
    addRenderable(tilingSprite, instructionSet) {
        const batcher = this._renderer.renderPipes.batch;
        this._updateCanBatch(tilingSprite);
        const tilingSpriteData = this._getTilingSpriteData(tilingSprite);
        const { geometry, canBatch } = tilingSpriteData;
        if (canBatch) {
            tilingSpriteData.batchableMesh || (tilingSpriteData.batchableMesh = new (0, _batchableMeshMjs.BatchableMesh)());
            const batchableMesh = tilingSpriteData.batchableMesh;
            if (tilingSprite._didTilingSpriteUpdate) {
                tilingSprite._didTilingSpriteUpdate = false;
                this._updateBatchableMesh(tilingSprite);
                batchableMesh.geometry = geometry;
                batchableMesh.mesh = tilingSprite;
                batchableMesh.texture = tilingSprite._texture;
            }
            batchableMesh.roundPixels = this._renderer._roundPixels | tilingSprite._roundPixels;
            batcher.addToBatch(batchableMesh);
        } else {
            batcher.break(instructionSet);
            tilingSpriteData.shader || (tilingSpriteData.shader = new (0, _tilingSpriteShaderMjs.TilingSpriteShader)());
            this.updateRenderable(tilingSprite);
            instructionSet.add(tilingSprite);
        }
    }
    execute(tilingSprite) {
        const { shader } = this._tilingSpriteDataHash[tilingSprite.uid];
        shader.groups[0] = this._renderer.globalUniforms.bindGroup;
        const localUniforms = shader.resources.localUniforms.uniforms;
        localUniforms.uTransformMatrix = tilingSprite.groupTransform;
        localUniforms.uRound = this._renderer._roundPixels | tilingSprite._roundPixels;
        (0, _colorToUniformMjs.color32BitToUniform)(tilingSprite.groupColorAlpha, localUniforms.uColor, 0);
        this._renderer.encoder.draw({
            geometry: sharedQuad,
            shader,
            state: (0, _stateMjs.State).default2d
        });
    }
    updateRenderable(tilingSprite) {
        const tilingSpriteData = this._getTilingSpriteData(tilingSprite);
        const { canBatch } = tilingSpriteData;
        if (canBatch) {
            const { batchableMesh } = tilingSpriteData;
            if (tilingSprite._didTilingSpriteUpdate) this._updateBatchableMesh(tilingSprite);
            batchableMesh.batcher.updateElement(batchableMesh);
        } else if (tilingSprite._didTilingSpriteUpdate) {
            const { shader } = tilingSpriteData;
            shader.updateUniforms(tilingSprite.width, tilingSprite.height, tilingSprite._tileTransform.matrix, tilingSprite.anchor.x, tilingSprite.anchor.y, tilingSprite.texture);
        }
        tilingSprite._didTilingSpriteUpdate = false;
    }
    destroyRenderable(tilingSprite) {
        const tilingSpriteData = this._getTilingSpriteData(tilingSprite);
        tilingSpriteData.batchableMesh = null;
        tilingSpriteData.shader?.destroy();
        this._tilingSpriteDataHash[tilingSprite.uid] = null;
    }
    _getTilingSpriteData(renderable) {
        return this._tilingSpriteDataHash[renderable.uid] || this._initTilingSpriteData(renderable);
    }
    _initTilingSpriteData(tilingSprite) {
        const geometry = new (0, _meshGeometryMjs.MeshGeometry)({
            indices: sharedQuad.indices,
            positions: sharedQuad.positions.slice(),
            uvs: sharedQuad.uvs.slice()
        });
        this._tilingSpriteDataHash[tilingSprite.uid] = {
            canBatch: true,
            renderable: tilingSprite,
            geometry
        };
        tilingSprite.on("destroyed", ()=>{
            this.destroyRenderable(tilingSprite);
        });
        return this._tilingSpriteDataHash[tilingSprite.uid];
    }
    _updateBatchableMesh(tilingSprite) {
        const renderableData = this._getTilingSpriteData(tilingSprite);
        const { geometry } = renderableData;
        const style = tilingSprite.texture.source.style;
        if (style.addressMode !== "repeat") {
            style.addressMode = "repeat";
            style.update();
        }
        (0, _setUvsMjs.setUvs)(tilingSprite, geometry.uvs);
        (0, _setPositionsMjs.setPositions)(tilingSprite, geometry.positions);
    }
    destroy() {
        for(const i in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[i].renderable);
        this._tilingSpriteDataHash = null;
        this._renderer = null;
    }
    _updateCanBatch(tilingSprite) {
        const renderableData = this._getTilingSpriteData(tilingSprite);
        const texture = tilingSprite.texture;
        let _nonPowOf2wrapping = true;
        if (this._renderer.type === (0, _typesMjs.RendererType).WEBGL) _nonPowOf2wrapping = this._renderer.context.supports.nonPowOf2wrapping;
        renderableData.canBatch = texture.textureMatrix.isSimple && (_nonPowOf2wrapping || texture.source.isPowerOfTwo);
        return renderableData.canBatch;
    }
}
/** @ignore */ TilingSpritePipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "tilingSprite"
};

},{"../../extensions/Extensions.mjs":"c8doH","../../rendering/renderers/shared/state/State.mjs":"8tuHi","../../rendering/renderers/types.mjs":"fkqYW","../graphics/gpu/colorToUniform.mjs":"gRXQe","../mesh/shared/BatchableMesh.mjs":"7hJEa","../mesh/shared/MeshGeometry.mjs":"jFjg9","./shader/TilingSpriteShader.mjs":"1sFBE","./utils/QuadGeometry.mjs":"7KTAc","./utils/setPositions.mjs":"fELa7","./utils/setUvs.mjs":"gp3Ba","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"jFjg9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MeshGeometry", ()=>MeshGeometry);
var _bufferMjs = require("../../../rendering/renderers/shared/buffer/Buffer.mjs");
var _constMjs = require("../../../rendering/renderers/shared/buffer/const.mjs");
var _geometryMjs = require("../../../rendering/renderers/shared/geometry/Geometry.mjs");
var _deprecationMjs = require("../../../utils/logging/deprecation.mjs");
"use strict";
const _MeshGeometry = class _MeshGeometry extends (0, _geometryMjs.Geometry) {
    constructor(...args){
        let options = args[0] ?? {};
        if (options instanceof Float32Array) {
            (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "use new MeshGeometry({ positions, uvs, indices }) instead");
            options = {
                positions: options,
                uvs: args[1],
                indices: args[2]
            };
        }
        options = {
            ..._MeshGeometry.defaultOptions,
            ...options
        };
        const positions = options.positions || new Float32Array([
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1
        ]);
        const uvs = options.uvs || new Float32Array([
            0,
            0,
            1,
            0,
            1,
            1,
            0,
            1
        ]);
        const indices = options.indices || new Uint32Array([
            0,
            1,
            2,
            0,
            2,
            3
        ]);
        const shrinkToFit = options.shrinkBuffersToFit;
        const positionBuffer = new (0, _bufferMjs.Buffer)({
            data: positions,
            label: "attribute-mesh-positions",
            shrinkToFit,
            usage: (0, _constMjs.BufferUsage).VERTEX | (0, _constMjs.BufferUsage).COPY_DST
        });
        const uvBuffer = new (0, _bufferMjs.Buffer)({
            data: uvs,
            label: "attribute-mesh-uvs",
            shrinkToFit,
            usage: (0, _constMjs.BufferUsage).VERTEX | (0, _constMjs.BufferUsage).COPY_DST
        });
        const indexBuffer = new (0, _bufferMjs.Buffer)({
            data: indices,
            label: "index-mesh-buffer",
            shrinkToFit,
            usage: (0, _constMjs.BufferUsage).INDEX | (0, _constMjs.BufferUsage).COPY_DST
        });
        super({
            attributes: {
                aPosition: {
                    buffer: positionBuffer,
                    format: "float32x2",
                    stride: 8,
                    offset: 0
                },
                aUV: {
                    buffer: uvBuffer,
                    format: "float32x2",
                    stride: 8,
                    offset: 0
                }
            },
            indexBuffer,
            topology: options.topology
        });
        this.batchMode = "auto";
    }
    /** The positions of the mesh. */ get positions() {
        return this.attributes.aPosition.buffer.data;
    }
    set positions(value) {
        this.attributes.aPosition.buffer.data = value;
    }
    /** The UVs of the mesh. */ get uvs() {
        return this.attributes.aUV.buffer.data;
    }
    set uvs(value) {
        this.attributes.aUV.buffer.data = value;
    }
    /** The indices of the mesh. */ get indices() {
        return this.indexBuffer.data;
    }
    set indices(value) {
        this.indexBuffer.data = value;
    }
};
_MeshGeometry.defaultOptions = {
    topology: "triangle-list",
    shrinkBuffersToFit: false
};
let MeshGeometry = _MeshGeometry;

},{"../../../rendering/renderers/shared/buffer/Buffer.mjs":"7xm40","../../../rendering/renderers/shared/buffer/const.mjs":"j5G3o","../../../rendering/renderers/shared/geometry/Geometry.mjs":"2hfYG","../../../utils/logging/deprecation.mjs":"axL6x","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1sFBE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TilingSpriteShader", ()=>TilingSpriteShader);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _compileHighShaderToProgramMjs = require("../../../rendering/high-shader/compileHighShaderToProgram.mjs");
var _localUniformBitMjs = require("../../../rendering/high-shader/shader-bits/localUniformBit.mjs");
var _roundPixelsBitMjs = require("../../../rendering/high-shader/shader-bits/roundPixelsBit.mjs");
var _shaderMjs = require("../../../rendering/renderers/shared/shader/Shader.mjs");
var _uniformGroupMjs = require("../../../rendering/renderers/shared/shader/UniformGroup.mjs");
var _textureMjs = require("../../../rendering/renderers/shared/texture/Texture.mjs");
var _tilingBitMjs = require("./tilingBit.mjs");
"use strict";
let gpuProgram;
let glProgram;
class TilingSpriteShader extends (0, _shaderMjs.Shader) {
    constructor(){
        gpuProgram ?? (gpuProgram = (0, _compileHighShaderToProgramMjs.compileHighShaderGpuProgram)({
            name: "tiling-sprite-shader",
            bits: [
                (0, _localUniformBitMjs.localUniformBit),
                (0, _tilingBitMjs.tilingBit),
                (0, _roundPixelsBitMjs.roundPixelsBit)
            ]
        }));
        glProgram ?? (glProgram = (0, _compileHighShaderToProgramMjs.compileHighShaderGlProgram)({
            name: "tiling-sprite-shader",
            bits: [
                (0, _localUniformBitMjs.localUniformBitGl),
                (0, _tilingBitMjs.tilingBitGl),
                (0, _roundPixelsBitMjs.roundPixelsBitGl)
            ]
        }));
        const tilingUniforms = new (0, _uniformGroupMjs.UniformGroup)({
            uMapCoord: {
                value: new (0, _matrixMjs.Matrix)(),
                type: "mat3x3<f32>"
            },
            uClampFrame: {
                value: new Float32Array([
                    0,
                    0,
                    1,
                    1
                ]),
                type: "vec4<f32>"
            },
            uClampOffset: {
                value: new Float32Array([
                    0,
                    0
                ]),
                type: "vec2<f32>"
            },
            uTextureTransform: {
                value: new (0, _matrixMjs.Matrix)(),
                type: "mat3x3<f32>"
            },
            uSizeAnchor: {
                value: new Float32Array([
                    100,
                    100,
                    0.5,
                    0.5
                ]),
                type: "vec4<f32>"
            }
        });
        super({
            glProgram,
            gpuProgram,
            resources: {
                localUniforms: new (0, _uniformGroupMjs.UniformGroup)({
                    uTransformMatrix: {
                        value: new (0, _matrixMjs.Matrix)(),
                        type: "mat3x3<f32>"
                    },
                    uColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1,
                            1
                        ]),
                        type: "vec4<f32>"
                    },
                    uRound: {
                        value: 0,
                        type: "f32"
                    }
                }),
                tilingUniforms,
                uTexture: (0, _textureMjs.Texture).EMPTY.source,
                uSampler: (0, _textureMjs.Texture).EMPTY.source.style
            }
        });
    }
    updateUniforms(width, height, matrix, anchorX, anchorY, texture) {
        const tilingUniforms = this.resources.tilingUniforms;
        const textureWidth = texture.width;
        const textureHeight = texture.height;
        const textureMatrix = texture.textureMatrix;
        const uTextureTransform = tilingUniforms.uniforms.uTextureTransform;
        uTextureTransform.set(matrix.a * textureWidth / width, matrix.b * textureWidth / height, matrix.c * textureHeight / width, matrix.d * textureHeight / height, matrix.tx / width, matrix.ty / height);
        uTextureTransform.invert();
        tilingUniforms.uniforms.uMapCoord = textureMatrix.mapCoord;
        tilingUniforms.uniforms.uClampFrame = textureMatrix.uClampFrame;
        tilingUniforms.uniforms.uClampOffset = textureMatrix.uClampOffset;
        tilingUniforms.uniforms.uTextureTransform = uTextureTransform;
        tilingUniforms.uniforms.uSizeAnchor[0] = width;
        tilingUniforms.uniforms.uSizeAnchor[1] = height;
        tilingUniforms.uniforms.uSizeAnchor[2] = anchorX;
        tilingUniforms.uniforms.uSizeAnchor[3] = anchorY;
        if (texture) {
            this.resources.uTexture = texture.source;
            this.resources.uSampler = texture.source.style;
        }
    }
}

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","../../../rendering/high-shader/compileHighShaderToProgram.mjs":"fqzoL","../../../rendering/high-shader/shader-bits/localUniformBit.mjs":"dISVV","../../../rendering/high-shader/shader-bits/roundPixelsBit.mjs":"4N63b","../../../rendering/renderers/shared/shader/Shader.mjs":"a3UQR","../../../rendering/renderers/shared/shader/UniformGroup.mjs":"ihTky","../../../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","./tilingBit.mjs":"hwDbc","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"dISVV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localUniformBit", ()=>localUniformBit);
parcelHelpers.export(exports, "localUniformBitGl", ()=>localUniformBitGl);
parcelHelpers.export(exports, "localUniformBitGroup2", ()=>localUniformBitGroup2);
"use strict";
const localUniformBit = {
    name: "local-uniform-bit",
    vertex: {
        header: /* wgsl */ `

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
        main: /* wgsl */ `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
        end: /* wgsl */ `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `
    }
};
const localUniformBitGroup2 = {
    ...localUniformBit,
    vertex: {
        ...localUniformBit.vertex,
        // replace the group!
        header: localUniformBit.vertex.header.replace("group(1)", "group(2)")
    }
};
const localUniformBitGl = {
    name: "local-uniform-bit",
    vertex: {
        header: /* glsl */ `

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
        main: /* glsl */ `
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,
        end: /* glsl */ `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"hwDbc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tilingBit", ()=>tilingBit);
parcelHelpers.export(exports, "tilingBitGl", ()=>tilingBitGl);
"use strict";
const tilingBit = {
    name: "tiling-bit",
    vertex: {
        header: /* wgsl */ `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
        main: /* wgsl */ `
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `
    },
    fragment: {
        header: /* wgsl */ `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
        main: /* wgsl */ `

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `
    }
};
const tilingBitGl = {
    name: "tiling-bit",
    vertex: {
        header: /* glsl */ `
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,
        main: /* glsl */ `
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `
    },
    fragment: {
        header: /* glsl */ `
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,
        main: /* glsl */ `

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7KTAc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuadGeometry", ()=>QuadGeometry);
var _meshGeometryMjs = require("../../mesh/shared/MeshGeometry.mjs");
"use strict";
class QuadGeometry extends (0, _meshGeometryMjs.MeshGeometry) {
    constructor(){
        super({
            positions: new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ]),
            uvs: new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ]),
            indices: new Uint32Array([
                0,
                1,
                2,
                0,
                2,
                3
            ])
        });
    }
}

},{"../../mesh/shared/MeshGeometry.mjs":"jFjg9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fELa7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setPositions", ()=>setPositions);
"use strict";
function setPositions(tilingSprite, positions) {
    const anchorX = tilingSprite.anchor.x;
    const anchorY = tilingSprite.anchor.y;
    positions[0] = -anchorX * tilingSprite.width;
    positions[1] = -anchorY * tilingSprite.height;
    positions[2] = (1 - anchorX) * tilingSprite.width;
    positions[3] = -anchorY * tilingSprite.height;
    positions[4] = (1 - anchorX) * tilingSprite.width;
    positions[5] = (1 - anchorY) * tilingSprite.height;
    positions[6] = -anchorX * tilingSprite.width;
    positions[7] = (1 - anchorY) * tilingSprite.height;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"gp3Ba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setUvs", ()=>setUvs);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _applyMatrixMjs = require("./applyMatrix.mjs");
"use strict";
function setUvs(tilingSprite, uvs) {
    const texture = tilingSprite.texture;
    const width = texture.frame.width;
    const height = texture.frame.height;
    let anchorX = 0;
    let anchorY = 0;
    if (tilingSprite._applyAnchorToTexture) {
        anchorX = tilingSprite.anchor.x;
        anchorY = tilingSprite.anchor.y;
    }
    uvs[0] = uvs[6] = -anchorX;
    uvs[2] = uvs[4] = 1 - anchorX;
    uvs[1] = uvs[3] = -anchorY;
    uvs[5] = uvs[7] = 1 - anchorY;
    const textureMatrix = (0, _matrixMjs.Matrix).shared;
    textureMatrix.copyFrom(tilingSprite._tileTransform.matrix);
    textureMatrix.tx /= tilingSprite.width;
    textureMatrix.ty /= tilingSprite.height;
    textureMatrix.invert();
    textureMatrix.scale(tilingSprite.width / width, tilingSprite.height / height);
    (0, _applyMatrixMjs.applyMatrix)(uvs, 2, 0, textureMatrix);
}

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","./applyMatrix.mjs":"lqZTT","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"lqZTT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyMatrix", ()=>applyMatrix);
"use strict";
function applyMatrix(array, stride, offset, matrix) {
    let index = 0;
    const size = array.length / (stride || 2);
    const a = matrix.a;
    const b = matrix.b;
    const c = matrix.c;
    const d = matrix.d;
    const tx = matrix.tx;
    const ty = matrix.ty;
    offset *= stride;
    while(index < size){
        const x = array[offset];
        const y = array[offset + 1];
        array[offset] = a * x + c * y + tx;
        array[offset + 1] = b * x + d * y + ty;
        offset += stride;
        index++;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"aeaZx":[function(require,module,exports) {
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _nineSliceSpritePipeMjs = require("./NineSliceSpritePipe.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _nineSliceSpritePipeMjs.NineSliceSpritePipe));

},{"../../extensions/Extensions.mjs":"c8doH","./NineSliceSpritePipe.mjs":"iOlGi"}],"iOlGi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NineSliceSpritePipe", ()=>NineSliceSpritePipe);
var _extensionsMjs = require("../../extensions/Extensions.mjs");
var _poolGroupMjs = require("../../utils/pool/PoolGroup.mjs");
var _batchableMeshMjs = require("../mesh/shared/BatchableMesh.mjs");
var _nineSliceGeometryMjs = require("./NineSliceGeometry.mjs");
"use strict";
class NineSliceSpritePipe {
    constructor(renderer){
        this._gpuSpriteHash = /* @__PURE__ */ Object.create(null);
        this._renderer = renderer;
    }
    addRenderable(sprite, _instructionSet) {
        const gpuSprite = this._getGpuSprite(sprite);
        if (sprite._didSpriteUpdate) this._updateBatchableSprite(sprite, gpuSprite);
        this._renderer.renderPipes.batch.addToBatch(gpuSprite);
    }
    updateRenderable(sprite) {
        const gpuSprite = this._gpuSpriteHash[sprite.uid];
        if (sprite._didSpriteUpdate) this._updateBatchableSprite(sprite, gpuSprite);
        gpuSprite.batcher.updateElement(gpuSprite);
    }
    validateRenderable(sprite) {
        const texture = sprite._texture;
        const gpuSprite = this._getGpuSprite(sprite);
        if (gpuSprite.texture._source !== texture._source) return !gpuSprite.batcher.checkAndUpdateTexture(gpuSprite, texture);
        return false;
    }
    destroyRenderable(sprite) {
        const batchableSprite = this._gpuSpriteHash[sprite.uid];
        (0, _poolGroupMjs.BigPool).return(batchableSprite);
        this._gpuSpriteHash[sprite.uid] = null;
    }
    _updateBatchableSprite(sprite, batchableSprite) {
        sprite._didSpriteUpdate = false;
        batchableSprite.geometry.update(sprite);
        batchableSprite.texture = sprite._texture;
    }
    _getGpuSprite(sprite) {
        return this._gpuSpriteHash[sprite.uid] || this._initGPUSprite(sprite);
    }
    _initGPUSprite(sprite) {
        const batchableMesh = new (0, _batchableMeshMjs.BatchableMesh)();
        batchableMesh.geometry = new (0, _nineSliceGeometryMjs.NineSliceGeometry)();
        batchableMesh.mesh = sprite;
        batchableMesh.texture = sprite._texture;
        batchableMesh.roundPixels = this._renderer._roundPixels | sprite._roundPixels;
        this._gpuSpriteHash[sprite.uid] = batchableMesh;
        sprite.on("destroyed", ()=>{
            this.destroyRenderable(sprite);
        });
        return batchableMesh;
    }
    destroy() {
        for(const i in this._gpuSpriteHash){
            const batchableMesh = this._gpuSpriteHash[i];
            batchableMesh.geometry.destroy();
        }
        this._gpuSpriteHash = null;
        this._renderer = null;
    }
}
/** @ignore */ NineSliceSpritePipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "nineSliceSprite"
};

},{"../../extensions/Extensions.mjs":"c8doH","../../utils/pool/PoolGroup.mjs":"bj9CN","../mesh/shared/BatchableMesh.mjs":"7hJEa","./NineSliceGeometry.mjs":"ef3cZ","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"ef3cZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NineSliceGeometry", ()=>NineSliceGeometry);
var _planeGeometryMjs = require("../mesh-plane/PlaneGeometry.mjs");
"use strict";
const _NineSliceGeometry = class _NineSliceGeometry extends (0, _planeGeometryMjs.PlaneGeometry) {
    constructor(options = {}){
        options = {
            ..._NineSliceGeometry.defaultOptions,
            ...options
        };
        super({
            width: options.width,
            height: options.height,
            verticesX: 4,
            verticesY: 4
        });
        this.update(options);
    }
    /**
   * Updates the NineSliceGeometry with the options.
   * @param options - The options of the NineSliceGeometry.
   */ update(options) {
        this.width = options.width ?? this.width;
        this.height = options.height ?? this.height;
        this._originalWidth = options.originalWidth ?? this._originalWidth;
        this._originalHeight = options.originalHeight ?? this._originalHeight;
        this._leftWidth = options.leftWidth ?? this._leftWidth;
        this._rightWidth = options.rightWidth ?? this._rightWidth;
        this._topHeight = options.topHeight ?? this._topHeight;
        this._bottomHeight = options.bottomHeight ?? this._bottomHeight;
        this.updateUvs();
        this.updatePositions();
    }
    /** Updates the positions of the vertices. */ updatePositions() {
        const positions = this.positions;
        const w = this._leftWidth + this._rightWidth;
        const scaleW = this.width > w ? 1 : this.width / w;
        const h = this._topHeight + this._bottomHeight;
        const scaleH = this.height > h ? 1 : this.height / h;
        const scale = Math.min(scaleW, scaleH);
        positions[9] = positions[11] = positions[13] = positions[15] = this._topHeight * scale;
        positions[17] = positions[19] = positions[21] = positions[23] = this.height - this._bottomHeight * scale;
        positions[25] = positions[27] = positions[29] = positions[31] = this.height;
        positions[2] = positions[10] = positions[18] = positions[26] = this._leftWidth * scale;
        positions[4] = positions[12] = positions[20] = positions[28] = this.width - this._rightWidth * scale;
        positions[6] = positions[14] = positions[22] = positions[30] = this.width;
        this.getBuffer("aPosition").update();
    }
    /** Updates the UVs of the vertices. */ updateUvs() {
        const uvs = this.uvs;
        uvs[0] = uvs[8] = uvs[16] = uvs[24] = 0;
        uvs[1] = uvs[3] = uvs[5] = uvs[7] = 0;
        uvs[6] = uvs[14] = uvs[22] = uvs[30] = 1;
        uvs[25] = uvs[27] = uvs[29] = uvs[31] = 1;
        const _uvw = 1 / this._originalWidth;
        const _uvh = 1 / this._originalHeight;
        uvs[2] = uvs[10] = uvs[18] = uvs[26] = _uvw * this._leftWidth;
        uvs[9] = uvs[11] = uvs[13] = uvs[15] = _uvh * this._topHeight;
        uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - _uvw * this._rightWidth;
        uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - _uvh * this._bottomHeight;
        this.getBuffer("aUV").update();
    }
};
/** The default options for the NineSliceGeometry. */ _NineSliceGeometry.defaultOptions = {
    /** The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */ width: 100,
    /** The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */ height: 100,
    /** The width of the left column. */ leftWidth: 10,
    /** The height of the top row. */ topHeight: 10,
    /** The width of the right column. */ rightWidth: 10,
    /** The height of the bottom row. */ bottomHeight: 10,
    /** The original width of the texture */ originalWidth: 100,
    /** The original height of the texture */ originalHeight: 100
};
let NineSliceGeometry = _NineSliceGeometry;

},{"../mesh-plane/PlaneGeometry.mjs":"1ELd5","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"1ELd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlaneGeometry", ()=>PlaneGeometry);
var _deprecationMjs = require("../../utils/logging/deprecation.mjs");
var _meshGeometryMjs = require("../mesh/shared/MeshGeometry.mjs");
"use strict";
const _PlaneGeometry = class _PlaneGeometry extends (0, _meshGeometryMjs.MeshGeometry) {
    constructor(...args){
        super({});
        let options = args[0] ?? {};
        if (typeof options === "number") {
            (0, _deprecationMjs.deprecation)((0, _deprecationMjs.v8_0_0), "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead");
            options = {
                width: options,
                height: args[1],
                verticesX: args[2],
                verticesY: args[3]
            };
        }
        this.build(options);
    }
    /**
   * Refreshes plane coordinates
   * @param options - Options to be applied to plane geometry
   */ build(options) {
        options = {
            ..._PlaneGeometry.defaultOptions,
            ...options
        };
        this.verticesX = this.verticesX ?? options.verticesX;
        this.verticesY = this.verticesY ?? options.verticesY;
        this.width = this.width ?? options.width;
        this.height = this.height ?? options.height;
        const total = this.verticesX * this.verticesY;
        const verts = [];
        const uvs = [];
        const indices = [];
        const verticesX = this.verticesX - 1;
        const verticesY = this.verticesY - 1;
        const sizeX = this.width / verticesX;
        const sizeY = this.height / verticesY;
        for(let i = 0; i < total; i++){
            const x = i % this.verticesX;
            const y = i / this.verticesX | 0;
            verts.push(x * sizeX, y * sizeY);
            uvs.push(x / verticesX, y / verticesY);
        }
        const totalSub = verticesX * verticesY;
        for(let i = 0; i < totalSub; i++){
            const xpos = i % verticesX;
            const ypos = i / verticesX | 0;
            const value = ypos * this.verticesX + xpos;
            const value2 = ypos * this.verticesX + xpos + 1;
            const value3 = (ypos + 1) * this.verticesX + xpos;
            const value4 = (ypos + 1) * this.verticesX + xpos + 1;
            indices.push(value, value2, value3, value2, value4, value3);
        }
        this.buffers[0].data = new Float32Array(verts);
        this.buffers[1].data = new Float32Array(uvs);
        this.indexBuffer.data = new Uint32Array(indices);
        this.buffers[0].update();
        this.buffers[1].update();
        this.indexBuffer.update();
    }
};
_PlaneGeometry.defaultOptions = {
    width: 100,
    height: 100,
    verticesX: 10,
    verticesY: 10
};
let PlaneGeometry = _PlaneGeometry;

},{"../../utils/logging/deprecation.mjs":"axL6x","../mesh/shared/MeshGeometry.mjs":"jFjg9","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"fqc9x":[function(require,module,exports) {
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _filterPipeMjs = require("./FilterPipe.mjs");
var _filterSystemMjs = require("./FilterSystem.mjs");
"use strict";
(0, _extensionsMjs.extensions).add((0, _filterSystemMjs.FilterSystem));
(0, _extensionsMjs.extensions).add((0, _filterPipeMjs.FilterPipe));

},{"../extensions/Extensions.mjs":"c8doH","./FilterPipe.mjs":"5eIVw","./FilterSystem.mjs":"j8YTD"}],"5eIVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilterPipe", ()=>FilterPipe);
var _extensionsMjs = require("../extensions/Extensions.mjs");
"use strict";
class FilterPipe {
    constructor(renderer){
        this._renderer = renderer;
    }
    push(filterEffect, container, instructionSet) {
        const renderPipes = this._renderer.renderPipes;
        renderPipes.batch.break(instructionSet);
        instructionSet.add({
            renderPipeId: "filter",
            canBundle: false,
            action: "pushFilter",
            container,
            filterEffect
        });
    }
    pop(_filterEffect, _container, instructionSet) {
        this._renderer.renderPipes.batch.break(instructionSet);
        instructionSet.add({
            renderPipeId: "filter",
            action: "popFilter",
            canBundle: false
        });
    }
    execute(instruction) {
        if (instruction.action === "pushFilter") this._renderer.filter.push(instruction);
        else if (instruction.action === "popFilter") this._renderer.filter.pop();
    }
    destroy() {
        this._renderer = null;
    }
}
FilterPipe.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLPipes,
        (0, _extensionsMjs.ExtensionType).WebGPUPipes,
        (0, _extensionsMjs.ExtensionType).CanvasPipes
    ],
    name: "filter"
};

},{"../extensions/Extensions.mjs":"c8doH","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"j8YTD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilterSystem", ()=>FilterSystem);
var _extensionsMjs = require("../extensions/Extensions.mjs");
var _matrixMjs = require("../maths/matrix/Matrix.mjs");
var _pointMjs = require("../maths/point/Point.mjs");
var _bindGroupMjs = require("../rendering/renderers/gpu/shader/BindGroup.mjs");
var _geometryMjs = require("../rendering/renderers/shared/geometry/Geometry.mjs");
var _uniformGroupMjs = require("../rendering/renderers/shared/shader/UniformGroup.mjs");
var _textureMjs = require("../rendering/renderers/shared/texture/Texture.mjs");
var _texturePoolMjs = require("../rendering/renderers/shared/texture/TexturePool.mjs");
var _typesMjs = require("../rendering/renderers/types.mjs");
var _boundsMjs = require("../scene/container/bounds/Bounds.mjs");
var _getFastGlobalBoundsMjs = require("../scene/container/bounds/getFastGlobalBounds.mjs");
var _getRenderableBoundsMjs = require("../scene/container/bounds/getRenderableBounds.mjs");
var _warnMjs = require("../utils/logging/warn.mjs");
"use strict";
const quadGeometry = new (0, _geometryMjs.Geometry)({
    attributes: {
        aPosition: {
            buffer: new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ]),
            location: 0,
            format: "float32x2",
            stride: 8,
            offset: 0
        }
    },
    indexBuffer: new Uint32Array([
        0,
        1,
        2,
        0,
        2,
        3
    ])
});
class FilterSystem {
    constructor(renderer){
        this._filterStackIndex = 0;
        this._filterStack = [];
        this._filterGlobalUniforms = new (0, _uniformGroupMjs.UniformGroup)({
            uInputSize: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uInputPixel: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uInputClamp: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uOutputFrame: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uGlobalFrame: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            },
            uOutputTexture: {
                value: new Float32Array(4),
                type: "vec4<f32>"
            }
        });
        this._globalFilterBindGroup = new (0, _bindGroupMjs.BindGroup)({});
        this.renderer = renderer;
    }
    /**
   * The back texture of the currently active filter. Requires the filter to have `blendRequired` set to true.
   * @readonly
   */ get activeBackTexture() {
        return this._activeFilterData?.backTexture;
    }
    push(instruction) {
        const renderer = this.renderer;
        const filters = instruction.filterEffect.filters;
        if (!this._filterStack[this._filterStackIndex]) this._filterStack[this._filterStackIndex] = this._getFilterData();
        const filterData = this._filterStack[this._filterStackIndex];
        this._filterStackIndex++;
        if (filters.length === 0) {
            filterData.skip = true;
            return;
        }
        const bounds = filterData.bounds;
        if (instruction.renderables) (0, _getRenderableBoundsMjs.getGlobalRenderableBounds)(instruction.renderables, bounds);
        else if (instruction.filterEffect.filterArea) {
            bounds.clear();
            bounds.addRect(instruction.filterEffect.filterArea);
            bounds.applyMatrix(instruction.container.worldTransform);
        } else (0, _getFastGlobalBoundsMjs.getFastGlobalBounds)(instruction.container, bounds);
        const colorTextureSource = renderer.renderTarget.rootRenderTarget.colorTexture.source;
        let resolution = colorTextureSource._resolution;
        let padding = 0;
        let antialias = colorTextureSource.antialias;
        let blendRequired = false;
        let enabled = false;
        for(let i = 0; i < filters.length; i++){
            const filter = filters[i];
            resolution = Math.min(resolution, filter.resolution);
            padding += filter.padding;
            if (filter.antialias !== "inherit") {
                if (filter.antialias === "on") antialias = true;
                else antialias = false;
            }
            const isCompatible = !!(filter.compatibleRenderers & renderer.type);
            if (!isCompatible) {
                enabled = false;
                break;
            }
            if (filter.blendRequired && !(renderer.backBuffer?.useBackBuffer ?? true)) {
                (0, _warnMjs.warn)("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options.");
                enabled = false;
                break;
            }
            enabled = filter.enabled || enabled;
            blendRequired = blendRequired || filter.blendRequired;
        }
        if (!enabled) {
            filterData.skip = true;
            return;
        }
        const viewPort = renderer.renderTarget.rootViewPort;
        bounds.scale(resolution).fitBounds(0, viewPort.width, 0, viewPort.height).scale(1 / resolution).pad(padding).ceil();
        if (!bounds.isPositive) {
            filterData.skip = true;
            return;
        }
        filterData.skip = false;
        filterData.bounds = bounds;
        filterData.blendRequired = blendRequired;
        filterData.container = instruction.container;
        filterData.filterEffect = instruction.filterEffect;
        filterData.previousRenderSurface = renderer.renderTarget.renderSurface;
        filterData.inputTexture = (0, _texturePoolMjs.TexturePool).getOptimalTexture(bounds.width, bounds.height, resolution, antialias);
        renderer.renderTarget.bind(filterData.inputTexture, true);
        renderer.globalUniforms.push({
            offset: bounds
        });
    }
    pop() {
        const renderer = this.renderer;
        this._filterStackIndex--;
        const filterData = this._filterStack[this._filterStackIndex];
        if (filterData.skip) return;
        this._activeFilterData = filterData;
        const inputTexture = filterData.inputTexture;
        const bounds = filterData.bounds;
        let backTexture = (0, _textureMjs.Texture).EMPTY;
        renderer.renderTarget.finishRenderPass();
        if (filterData.blendRequired) {
            const previousBounds = this._filterStackIndex > 0 ? this._filterStack[this._filterStackIndex - 1].bounds : null;
            const renderTarget = renderer.renderTarget.getRenderTarget(filterData.previousRenderSurface);
            backTexture = this.getBackTexture(renderTarget, bounds, previousBounds);
        }
        filterData.backTexture = backTexture;
        const filters = filterData.filterEffect.filters;
        this._globalFilterBindGroup.setResource(inputTexture.source.style, 2);
        this._globalFilterBindGroup.setResource(backTexture.source, 3);
        renderer.globalUniforms.pop();
        if (filters.length === 1) {
            filters[0].apply(this, inputTexture, filterData.previousRenderSurface, false);
            (0, _texturePoolMjs.TexturePool).returnTexture(inputTexture);
        } else {
            let flip = filterData.inputTexture;
            let flop = (0, _texturePoolMjs.TexturePool).getOptimalTexture(bounds.width, bounds.height, flip.source._resolution, false);
            let i = 0;
            for(i = 0; i < filters.length - 1; ++i){
                const filter = filters[i];
                filter.apply(this, flip, flop, true);
                const t = flip;
                flip = flop;
                flop = t;
            }
            filters[i].apply(this, flip, filterData.previousRenderSurface, false);
            (0, _texturePoolMjs.TexturePool).returnTexture(flip);
            (0, _texturePoolMjs.TexturePool).returnTexture(flop);
        }
        if (filterData.blendRequired) (0, _texturePoolMjs.TexturePool).returnTexture(backTexture);
    }
    getBackTexture(lastRenderSurface, bounds, previousBounds) {
        const backgroundResolution = lastRenderSurface.colorTexture.source._resolution;
        const backTexture = (0, _texturePoolMjs.TexturePool).getOptimalTexture(bounds.width, bounds.height, backgroundResolution, false);
        let x = bounds.minX;
        let y = bounds.minY;
        if (previousBounds) {
            x -= previousBounds.minX;
            y -= previousBounds.minY;
        }
        x = Math.floor(x * backgroundResolution);
        y = Math.floor(y * backgroundResolution);
        const width = Math.ceil(bounds.width * backgroundResolution);
        const height = Math.ceil(bounds.height * backgroundResolution);
        this.renderer.renderTarget.copyToTexture(lastRenderSurface, backTexture, {
            x,
            y
        }, {
            width,
            height
        }, {
            x: 0,
            y: 0
        });
        return backTexture;
    }
    applyFilter(filter, input, output, clear) {
        const renderer = this.renderer;
        const filterData = this._filterStack[this._filterStackIndex];
        const bounds = filterData.bounds;
        const offset = (0, _pointMjs.Point).shared;
        const previousRenderSurface = filterData.previousRenderSurface;
        const isFinalTarget = previousRenderSurface === output;
        let resolution = this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution;
        let currentIndex = this._filterStackIndex - 1;
        while(currentIndex > 0 && this._filterStack[currentIndex].skip)--currentIndex;
        if (currentIndex > 0) resolution = this._filterStack[currentIndex].inputTexture.source._resolution;
        const filterUniforms = this._filterGlobalUniforms;
        const uniforms = filterUniforms.uniforms;
        const outputFrame = uniforms.uOutputFrame;
        const inputSize = uniforms.uInputSize;
        const inputPixel = uniforms.uInputPixel;
        const inputClamp = uniforms.uInputClamp;
        const globalFrame = uniforms.uGlobalFrame;
        const outputTexture = uniforms.uOutputTexture;
        if (isFinalTarget) {
            let lastIndex = this._filterStackIndex;
            while(lastIndex > 0){
                lastIndex--;
                const filterData2 = this._filterStack[this._filterStackIndex - 1];
                if (!filterData2.skip) {
                    offset.x = filterData2.bounds.minX;
                    offset.y = filterData2.bounds.minY;
                    break;
                }
            }
            outputFrame[0] = bounds.minX - offset.x;
            outputFrame[1] = bounds.minY - offset.y;
        } else {
            outputFrame[0] = 0;
            outputFrame[1] = 0;
        }
        outputFrame[2] = input.frame.width;
        outputFrame[3] = input.frame.height;
        inputSize[0] = input.source.width;
        inputSize[1] = input.source.height;
        inputSize[2] = 1 / inputSize[0];
        inputSize[3] = 1 / inputSize[1];
        inputPixel[0] = input.source.pixelWidth;
        inputPixel[1] = input.source.pixelHeight;
        inputPixel[2] = 1 / inputPixel[0];
        inputPixel[3] = 1 / inputPixel[1];
        inputClamp[0] = 0.5 * inputPixel[2];
        inputClamp[1] = 0.5 * inputPixel[3];
        inputClamp[2] = input.frame.width * inputSize[2] - 0.5 * inputPixel[2];
        inputClamp[3] = input.frame.height * inputSize[3] - 0.5 * inputPixel[3];
        const rootTexture = this.renderer.renderTarget.rootRenderTarget.colorTexture;
        globalFrame[0] = offset.x * resolution;
        globalFrame[1] = offset.y * resolution;
        globalFrame[2] = rootTexture.source.width * resolution;
        globalFrame[3] = rootTexture.source.height * resolution;
        const renderTarget = this.renderer.renderTarget.getRenderTarget(output);
        renderer.renderTarget.bind(output, !!clear);
        if (output instanceof (0, _textureMjs.Texture)) {
            outputTexture[0] = output.frame.width;
            outputTexture[1] = output.frame.height;
        } else {
            outputTexture[0] = renderTarget.width;
            outputTexture[1] = renderTarget.height;
        }
        outputTexture[2] = renderTarget.isRoot ? -1 : 1;
        filterUniforms.update();
        if (renderer.renderPipes.uniformBatch) {
            const batchUniforms = renderer.renderPipes.uniformBatch.getUboResource(filterUniforms);
            this._globalFilterBindGroup.setResource(batchUniforms, 0);
        } else this._globalFilterBindGroup.setResource(filterUniforms, 0);
        this._globalFilterBindGroup.setResource(input.source, 1);
        this._globalFilterBindGroup.setResource(input.source.style, 2);
        filter.groups[0] = this._globalFilterBindGroup;
        renderer.encoder.draw({
            geometry: quadGeometry,
            shader: filter,
            state: filter._state,
            topology: "triangle-list"
        });
        if (renderer.type === (0, _typesMjs.RendererType).WEBGL) renderer.renderTarget.finishRenderPass();
    }
    _getFilterData() {
        return {
            skip: false,
            inputTexture: null,
            bounds: new (0, _boundsMjs.Bounds)(),
            container: null,
            filterEffect: null,
            blendRequired: false,
            previousRenderSurface: null
        };
    }
    /**
   * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
   *
   * Use `outputMatrix * vTextureCoord` in the shader.
   * @param outputMatrix - The matrix to output to.
   * @param {Sprite} sprite - The sprite to map to.
   * @returns The mapped matrix.
   */ calculateSpriteMatrix(outputMatrix, sprite) {
        const data = this._activeFilterData;
        const mappedMatrix = outputMatrix.set(data.inputTexture._source.width, 0, 0, data.inputTexture._source.height, data.bounds.minX, data.bounds.minY);
        const worldTransform = sprite.worldTransform.copyTo((0, _matrixMjs.Matrix).shared);
        worldTransform.invert();
        mappedMatrix.prepend(worldTransform);
        mappedMatrix.scale(1 / sprite.texture.frame.width, 1 / sprite.texture.frame.height);
        mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
        return mappedMatrix;
    }
}
/** @ignore */ FilterSystem.extension = {
    type: [
        (0, _extensionsMjs.ExtensionType).WebGLSystem,
        (0, _extensionsMjs.ExtensionType).WebGPUSystem
    ],
    name: "filter"
};

},{"../extensions/Extensions.mjs":"c8doH","../maths/matrix/Matrix.mjs":"kpkIt","../maths/point/Point.mjs":"dkxvR","../rendering/renderers/gpu/shader/BindGroup.mjs":"8EZE8","../rendering/renderers/shared/geometry/Geometry.mjs":"2hfYG","../rendering/renderers/shared/shader/UniformGroup.mjs":"ihTky","../rendering/renderers/shared/texture/Texture.mjs":"ho7cW","../rendering/renderers/shared/texture/TexturePool.mjs":"amMMm","../rendering/renderers/types.mjs":"fkqYW","../scene/container/bounds/Bounds.mjs":"2E5wx","../scene/container/bounds/getFastGlobalBounds.mjs":"5ls6E","../scene/container/bounds/getRenderableBounds.mjs":"7VnLM","../utils/logging/warn.mjs":"gCz01","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"5ls6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_getGlobalBoundsRecursive", ()=>_getGlobalBoundsRecursive);
parcelHelpers.export(exports, "getFastGlobalBounds", ()=>getFastGlobalBounds);
var _matrixMjs = require("../../../maths/matrix/Matrix.mjs");
var _matrixAndBoundsPoolMjs = require("./utils/matrixAndBoundsPool.mjs");
"use strict";
const tempMatrix = new (0, _matrixMjs.Matrix)();
function getFastGlobalBounds(target, bounds) {
    bounds.clear();
    _getGlobalBoundsRecursive(target, bounds);
    if (!bounds.isValid) bounds.set(0, 0, 0, 0);
    if (!target.isRenderGroupRoot) bounds.applyMatrix(target.renderGroup.worldTransform);
    else bounds.applyMatrix(target.renderGroup.localTransform);
    return bounds;
}
function _getGlobalBoundsRecursive(target, bounds) {
    if (target.localDisplayStatus !== 7 || !target.measurable) return;
    const manageEffects = !!target.effects.length;
    let localBounds = bounds;
    if (target.isRenderGroupRoot || manageEffects) localBounds = (0, _matrixAndBoundsPoolMjs.boundsPool).get().clear();
    if (target.boundsArea) bounds.addRect(target.boundsArea, target.worldTransform);
    else {
        if (target.renderPipeId) {
            const viewBounds = target.bounds;
            localBounds.addFrame(viewBounds.minX, viewBounds.minY, viewBounds.maxX, viewBounds.maxY, target.groupTransform);
        }
        const children = target.children;
        for(let i = 0; i < children.length; i++)_getGlobalBoundsRecursive(children[i], localBounds);
    }
    if (manageEffects) {
        let advanced = false;
        for(let i = 0; i < target.effects.length; i++)if (target.effects[i].addBounds) {
            if (!advanced) {
                advanced = true;
                localBounds.applyMatrix(target.renderGroup.worldTransform);
            }
            target.effects[i].addBounds(localBounds, true);
        }
        if (advanced) {
            localBounds.applyMatrix(target.renderGroup.worldTransform.copyTo(tempMatrix).invert());
            bounds.addBounds(localBounds, target.relativeGroupTransform);
        }
        bounds.addBounds(localBounds);
        (0, _matrixAndBoundsPoolMjs.boundsPool).return(localBounds);
    } else if (target.isRenderGroupRoot) {
        bounds.addBounds(localBounds, target.relativeGroupTransform);
        (0, _matrixAndBoundsPoolMjs.boundsPool).return(localBounds);
    }
}

},{"../../../maths/matrix/Matrix.mjs":"kpkIt","./utils/matrixAndBoundsPool.mjs":"kLzyY","@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}],"7VnLM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGlobalRenderableBounds", ()=>getGlobalRenderableBounds);
"use strict";
function getGlobalRenderableBounds(renderables, bounds) {
    bounds.clear();
    const tempMatrix = bounds.matrix;
    for(let i = 0; i < renderables.length; i++){
        const renderable = renderables[i];
        if (renderable.globalDisplayStatus < 7) continue;
        bounds.matrix = renderable.worldTransform;
        renderable.addBounds(bounds);
    }
    bounds.matrix = tempMatrix;
    return bounds;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6elpC"}]},["klMyx"], null, "parcelRequire4692")

//# sourceMappingURL=browserAll.90bfdf54.js.map
