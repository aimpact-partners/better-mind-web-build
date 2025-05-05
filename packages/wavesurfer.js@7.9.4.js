System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["wavesurfer.js","7.9.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/wavesurfer.js.7.9.4.js
var wavesurfer_js_7_9_4_exports = {};
__export(wavesurfer_js_7_9_4_exports, {
  default: () => wavesurfer_js_7_9_4_default
});
module.exports = __toCommonJS(wavesurfer_js_7_9_4_exports);

// node_modules/wavesurfer.js/dist/wavesurfer.esm.js
function t(t2, e2, i2, s2) {
  return new (i2 || (i2 = Promise))(function (n2, r2) {
    function o2(t3) {
      try {
        h2(s2.next(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function a2(t3) {
      try {
        h2(s2.throw(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function h2(t3) {
      var e3;
      t3.done ? n2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function (t4) {
        t4(e3);
      })).then(o2, a2);
    }
    h2((s2 = s2.apply(t2, e2 || [])).next());
  });
}
"function" == typeof SuppressedError && SuppressedError;
var e = class {
  constructor() {
    this.listeners = {};
  }
  on(t2, e2, i2) {
    if (this.listeners[t2] || (this.listeners[t2] = /* @__PURE__ */new Set()), this.listeners[t2].add(e2), null == i2 ? void 0 : i2.once) {
      const i3 = () => {
        this.un(t2, i3), this.un(t2, e2);
      };
      return this.on(t2, i3), i3;
    }
    return () => this.un(t2, e2);
  }
  un(t2, e2) {
    var i2;
    null === (i2 = this.listeners[t2]) || void 0 === i2 || i2.delete(e2);
  }
  once(t2, e2) {
    return this.on(t2, e2, {
      once: true
    });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t2, ...e2) {
    this.listeners[t2] && this.listeners[t2].forEach(t3 => t3(...e2));
  }
};
var i = {
  decode: function (e2, i2) {
    return t(this, void 0, void 0, function* () {
      const t2 = new AudioContext({
        sampleRate: i2
      });
      return t2.decodeAudioData(e2).finally(() => t2.close());
    });
  },
  createBuffer: function (t2, e2) {
    return "number" == typeof t2[0] && (t2 = [t2]), function (t3) {
      const e3 = t3[0];
      if (e3.some(t4 => t4 > 1 || t4 < -1)) {
        const i2 = e3.length;
        let s2 = 0;
        for (let t4 = 0; t4 < i2; t4++) {
          const i3 = Math.abs(e3[t4]);
          i3 > s2 && (s2 = i3);
        }
        for (const e4 of t3) for (let t4 = 0; t4 < i2; t4++) e4[t4] /= s2;
      }
    }(t2), {
      duration: e2,
      length: t2[0].length,
      sampleRate: t2[0].length / e2,
      numberOfChannels: t2.length,
      getChannelData: e3 => null == t2 ? void 0 : t2[e3],
      copyFromChannel: AudioBuffer.prototype.copyFromChannel,
      copyToChannel: AudioBuffer.prototype.copyToChannel
    };
  }
};
function s(t2, e2) {
  const i2 = e2.xmlns ? document.createElementNS(e2.xmlns, t2) : document.createElement(t2);
  for (const [t3, n2] of Object.entries(e2)) if ("children" === t3) for (const [t4, n3] of Object.entries(e2)) "string" == typeof n3 ? i2.appendChild(document.createTextNode(n3)) : i2.appendChild(s(t4, n3));else "style" === t3 ? Object.assign(i2.style, n2) : "textContent" === t3 ? i2.textContent = n2 : i2.setAttribute(t3, n2.toString());
  return i2;
}
function n(t2, e2, i2) {
  const n2 = s(t2, e2 || {});
  return null == i2 || i2.appendChild(n2), n2;
}
var r = Object.freeze({
  __proto__: null,
  createElement: n,
  default: n
});
var o = {
  fetchBlob: function (e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      const n2 = yield fetch(e2, s2);
      if (n2.status >= 400) throw new Error(`Failed to fetch ${e2}: ${n2.status} (${n2.statusText})`);
      return function (e3, i3) {
        t(this, void 0, void 0, function* () {
          if (!e3.body || !e3.headers) return;
          const s3 = e3.body.getReader(),
            n3 = Number(e3.headers.get("Content-Length")) || 0;
          let r2 = 0;
          const o2 = e4 => t(this, void 0, void 0, function* () {
              r2 += (null == e4 ? void 0 : e4.length) || 0;
              const t2 = Math.round(r2 / n3 * 100);
              i3(t2);
            }),
            a2 = () => t(this, void 0, void 0, function* () {
              let t2;
              try {
                t2 = yield s3.read();
              } catch (t3) {
                return;
              }
              t2.done || (o2(t2.value), yield a2());
            });
          a2();
        });
      }(n2.clone(), i2), n2.blob();
    });
  }
};
var a = class extends e {
  constructor(t2) {
    super(), this.isExternalMedia = false, t2.media ? (this.media = t2.media, this.isExternalMedia = true) : this.media = document.createElement("audio"), t2.mediaControls && (this.media.controls = true), t2.autoplay && (this.media.autoplay = true), null != t2.playbackRate && this.onMediaEvent("canplay", () => {
      null != t2.playbackRate && (this.media.playbackRate = t2.playbackRate);
    }, {
      once: true
    });
  }
  onMediaEvent(t2, e2, i2) {
    return this.media.addEventListener(t2, e2, i2), () => this.media.removeEventListener(t2, e2, i2);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const t2 = this.getSrc();
    t2.startsWith("blob:") && URL.revokeObjectURL(t2);
  }
  canPlayType(t2) {
    return "" !== this.media.canPlayType(t2);
  }
  setSrc(t2, e2) {
    const i2 = this.getSrc();
    if (t2 && i2 === t2) return;
    this.revokeSrc();
    const s2 = e2 instanceof Blob && (this.canPlayType(e2.type) || !t2) ? URL.createObjectURL(e2) : t2;
    i2 && (this.media.src = "");
    try {
      this.media.src = s2;
    } catch (e3) {
      this.media.src = t2;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.media.remove(), this.revokeSrc(), this.media.src = "", this.media.load());
  }
  setMediaElement(t2) {
    this.media = t2;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      return this.media.play();
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(t2) {
    this.media.currentTime = Math.max(0, Math.min(t2, this.getDuration()));
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(t2) {
    this.media.volume = t2;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(t2) {
    this.media.muted = t2;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(t2, e2) {
    null != e2 && (this.media.preservesPitch = e2), this.media.playbackRate = t2;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(t2) {
    return this.media.setSinkId(t2);
  }
};
var h = class extends e {
  constructor(t2, e2) {
    super(), this.timeouts = [], this.isScrollable = false, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = false, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = t2;
    const i2 = this.parentFromOptionsContainer(t2.container);
    this.parent = i2;
    const [s2, n2] = this.initHtml();
    i2.appendChild(s2), this.container = s2, this.scrollContainer = n2.querySelector(".scroll"), this.wrapper = n2.querySelector(".wrapper"), this.canvasWrapper = n2.querySelector(".canvases"), this.progressWrapper = n2.querySelector(".progress"), this.cursor = n2.querySelector(".cursor"), e2 && n2.appendChild(e2), this.initEvents();
  }
  parentFromOptionsContainer(t2) {
    let e2;
    if ("string" == typeof t2 ? e2 = document.querySelector(t2) : t2 instanceof HTMLElement && (e2 = t2), !e2) throw new Error("Container not found");
    return e2;
  }
  initEvents() {
    const t2 = t3 => {
      const e2 = this.wrapper.getBoundingClientRect(),
        i2 = t3.clientX - e2.left,
        s2 = t3.clientY - e2.top;
      return [i2 / e2.width, s2 / e2.height];
    };
    if (this.wrapper.addEventListener("click", e2 => {
      const [i2, s2] = t2(e2);
      this.emit("click", i2, s2);
    }), this.wrapper.addEventListener("dblclick", e2 => {
      const [i2, s2] = t2(e2);
      this.emit("dblclick", i2, s2);
    }), true !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const {
          scrollLeft: t3,
          scrollWidth: e2,
          clientWidth: i2
        } = this.scrollContainer,
        s2 = t3 / e2,
        n2 = (t3 + i2) / e2;
      this.emit("scroll", s2, n2, t3, t3 + i2);
    }), "function" == typeof ResizeObserver) {
      const t3 = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        t3().then(() => this.onContainerResize()).catch(() => {});
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const t2 = this.parent.clientWidth;
    t2 === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t2, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function (t2, e2, i2, s2, n2 = 3, r2 = 0, o2 = 100) {
      if (!t2) return () => {};
      const a2 = matchMedia("(pointer: coarse)").matches;
      let h2 = () => {};
      const l2 = l3 => {
        if (l3.button !== r2) return;
        l3.preventDefault(), l3.stopPropagation();
        let d2 = l3.clientX,
          c2 = l3.clientY,
          u2 = false;
        const p = Date.now(),
          m = s3 => {
            if (s3.preventDefault(), s3.stopPropagation(), a2 && Date.now() - p < o2) return;
            const r3 = s3.clientX,
              h3 = s3.clientY,
              l4 = r3 - d2,
              m2 = h3 - c2;
            if (u2 || Math.abs(l4) > n2 || Math.abs(m2) > n2) {
              const s4 = t2.getBoundingClientRect(),
                {
                  left: n3,
                  top: o3
                } = s4;
              u2 || (null == i2 || i2(d2 - n3, c2 - o3), u2 = true), e2(l4, m2, r3 - n3, h3 - o3), d2 = r3, c2 = h3;
            }
          },
          f = e3 => {
            if (u2) {
              const i3 = e3.clientX,
                n3 = e3.clientY,
                r3 = t2.getBoundingClientRect(),
                {
                  left: o3,
                  top: a3
                } = r3;
              null == s2 || s2(i3 - o3, n3 - a3);
            }
            h2();
          },
          g = t3 => {
            t3.relatedTarget && t3.relatedTarget !== document.documentElement || f(t3);
          },
          v = t3 => {
            u2 && (t3.stopPropagation(), t3.preventDefault());
          },
          b = t3 => {
            u2 && t3.preventDefault();
          };
        document.addEventListener("pointermove", m), document.addEventListener("pointerup", f), document.addEventListener("pointerout", g), document.addEventListener("pointercancel", g), document.addEventListener("touchmove", b, {
          passive: false
        }), document.addEventListener("click", v, {
          capture: true
        }), h2 = () => {
          document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", f), document.removeEventListener("pointerout", g), document.removeEventListener("pointercancel", g), document.removeEventListener("touchmove", b), setTimeout(() => {
            document.removeEventListener("click", v, {
              capture: true
            });
          }, 10);
        };
      };
      return t2.addEventListener("pointerdown", l2), () => {
        h2(), t2.removeEventListener("pointerdown", l2);
      };
    }(this.wrapper, (t2, e2, i2) => {
      this.emit("drag", Math.max(0, Math.min(1, i2 / this.wrapper.getBoundingClientRect().width)));
    }, t2 => {
      this.isDragging = true, this.emit("dragstart", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }, t2 => {
      this.isDragging = false, this.emit("dragend", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(t2, e2) {
    var i2;
    const s2 = (null === (i2 = this.audioData) || void 0 === i2 ? void 0 : i2.numberOfChannels) || 1;
    if (null == t2) return 128;
    if (!isNaN(Number(t2))) return Number(t2);
    if ("auto" === t2) {
      const t3 = this.parent.clientHeight || 128;
      return (null == e2 ? void 0 : e2.every(t4 => !t4.overlay)) ? t3 / s2 : t3;
    }
    return 128;
  }
  initHtml() {
    const t2 = document.createElement("div"),
      e2 = t2.attachShadow({
        mode: "open"
      }),
      i2 = this.options.cspNonce && "string" == typeof this.options.cspNonce ? this.options.cspNonce.replace(/"/g, "") : "";
    return e2.innerHTML = `
      <style${i2 ? ` nonce="${i2}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [t2, e2];
  }
  setOptions(t2) {
    if (this.options.container !== t2.container) {
      const e2 = this.parentFromOptionsContainer(t2.container);
      e2.appendChild(this.container), this.parent = e2;
    }
    true !== t2.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t2, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(t2) {
    this.scrollContainer.scrollLeft = t2;
  }
  setScrollPercentage(t2) {
    const {
        scrollWidth: e2
      } = this.scrollContainer,
      i2 = e2 * t2;
    this.setScroll(i2);
  }
  destroy() {
    var t2, e2;
    this.subscriptions.forEach(t3 => t3()), this.container.remove(), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect(), null === (e2 = this.unsubscribeOnScroll) || void 0 === e2 || e2.forEach(t3 => t3()), this.unsubscribeOnScroll = [];
  }
  createDelay(t2 = 10) {
    let e2, i2;
    const s2 = () => {
      e2 && clearTimeout(e2), i2 && i2();
    };
    return this.timeouts.push(s2), () => new Promise((n2, r2) => {
      s2(), i2 = r2, e2 = setTimeout(() => {
        e2 = void 0, i2 = void 0, n2();
      }, t2);
    });
  }
  convertColorValues(t2) {
    if (!Array.isArray(t2)) return t2 || "";
    if (t2.length < 2) return t2[0] || "";
    const e2 = document.createElement("canvas"),
      i2 = e2.getContext("2d"),
      s2 = e2.height * (window.devicePixelRatio || 1),
      n2 = i2.createLinearGradient(0, 0, 0, s2),
      r2 = 1 / (t2.length - 1);
    return t2.forEach((t3, e3) => {
      const i3 = e3 * r2;
      n2.addColorStop(i3, t3);
    }), n2;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(t2, e2, i2, s2) {
    const n2 = t2[0],
      r2 = t2[1] || t2[0],
      o2 = n2.length,
      {
        width: a2,
        height: h2
      } = i2.canvas,
      l2 = h2 / 2,
      d2 = this.getPixelRatio(),
      c2 = e2.barWidth ? e2.barWidth * d2 : 1,
      u2 = e2.barGap ? e2.barGap * d2 : e2.barWidth ? c2 / 2 : 0,
      p = e2.barRadius || 0,
      m = a2 / (c2 + u2) / o2,
      f = p && "roundRect" in i2 ? "roundRect" : "rect";
    i2.beginPath();
    let g = 0,
      v = 0,
      b = 0;
    for (let t3 = 0; t3 <= o2; t3++) {
      const o3 = Math.round(t3 * m);
      if (o3 > g) {
        const t4 = Math.round(v * l2 * s2),
          n3 = t4 + Math.round(b * l2 * s2) || 1;
        let r3 = l2 - t4;
        "top" === e2.barAlign ? r3 = 0 : "bottom" === e2.barAlign && (r3 = h2 - n3), i2[f](g * (c2 + u2), r3, c2, n3, p), g = o3, v = 0, b = 0;
      }
      const a3 = Math.abs(n2[t3] || 0),
        d3 = Math.abs(r2[t3] || 0);
      a3 > v && (v = a3), d3 > b && (b = d3);
    }
    i2.fill(), i2.closePath();
  }
  renderLineWaveform(t2, e2, i2, s2) {
    const n2 = e3 => {
      const n3 = t2[e3] || t2[0],
        r2 = n3.length,
        {
          height: o2
        } = i2.canvas,
        a2 = o2 / 2,
        h2 = i2.canvas.width / r2;
      i2.moveTo(0, a2);
      let l2 = 0,
        d2 = 0;
      for (let t3 = 0; t3 <= r2; t3++) {
        const r3 = Math.round(t3 * h2);
        if (r3 > l2) {
          const t4 = a2 + (Math.round(d2 * a2 * s2) || 1) * (0 === e3 ? -1 : 1);
          i2.lineTo(l2, t4), l2 = r3, d2 = 0;
        }
        const o3 = Math.abs(n3[t3] || 0);
        o3 > d2 && (d2 = o3);
      }
      i2.lineTo(l2, a2);
    };
    i2.beginPath(), n2(0), n2(1), i2.fill(), i2.closePath();
  }
  renderWaveform(t2, e2, i2) {
    if (i2.fillStyle = this.convertColorValues(e2.waveColor), e2.renderFunction) return void e2.renderFunction(t2, i2);
    let s2 = e2.barHeight || 1;
    if (e2.normalize) {
      const e3 = Array.from(t2[0]).reduce((t3, e4) => Math.max(t3, Math.abs(e4)), 0);
      s2 = e3 ? 1 / e3 : 1;
    }
    e2.barWidth || e2.barGap || e2.barAlign ? this.renderBarWaveform(t2, e2, i2, s2) : this.renderLineWaveform(t2, e2, i2, s2);
  }
  renderSingleCanvas(t2, e2, i2, s2, n2, r2, o2) {
    const a2 = this.getPixelRatio(),
      h2 = document.createElement("canvas");
    h2.width = Math.round(i2 * a2), h2.height = Math.round(s2 * a2), h2.style.width = `${i2}px`, h2.style.height = `${s2}px`, h2.style.left = `${Math.round(n2)}px`, r2.appendChild(h2);
    const l2 = h2.getContext("2d");
    if (this.renderWaveform(t2, e2, l2), h2.width > 0 && h2.height > 0) {
      const t3 = h2.cloneNode(),
        i3 = t3.getContext("2d");
      i3.drawImage(h2, 0, 0), i3.globalCompositeOperation = "source-in", i3.fillStyle = this.convertColorValues(e2.progressColor), i3.fillRect(0, 0, h2.width, h2.height), o2.appendChild(t3);
    }
  }
  renderMultiCanvas(t2, e2, i2, s2, n2, r2) {
    const o2 = this.getPixelRatio(),
      {
        clientWidth: a2
      } = this.scrollContainer,
      l2 = i2 / o2;
    let d2 = Math.min(h.MAX_CANVAS_WIDTH, a2, l2),
      c2 = {};
    if (0 === d2) return;
    if (e2.barWidth || e2.barGap) {
      const t3 = e2.barWidth || 0.5,
        i3 = t3 + (e2.barGap || t3 / 2);
      d2 % i3 != 0 && (d2 = Math.floor(d2 / i3) * i3);
    }
    const u2 = i3 => {
        if (i3 < 0 || i3 >= p) return;
        if (c2[i3]) return;
        c2[i3] = true;
        const o3 = i3 * d2,
          a3 = Math.min(l2 - o3, d2);
        if (a3 <= 0) return;
        const h2 = t2.map(t3 => {
          const e3 = Math.floor(o3 / l2 * t3.length),
            i4 = Math.floor((o3 + a3) / l2 * t3.length);
          return t3.slice(e3, i4);
        });
        this.renderSingleCanvas(h2, e2, a3, s2, o3, n2, r2);
      },
      p = Math.ceil(l2 / d2);
    if (!this.isScrollable) {
      for (let t3 = 0; t3 < p; t3++) u2(t3);
      return;
    }
    const m = this.scrollContainer.scrollLeft / l2,
      f = Math.floor(m * p);
    if (u2(f - 1), u2(f), u2(f + 1), p > 1) {
      const t3 = this.on("scroll", () => {
        const {
            scrollLeft: t4
          } = this.scrollContainer,
          e3 = Math.floor(t4 / l2 * p);
        Object.keys(c2).length > h.MAX_NODES && (n2.innerHTML = "", r2.innerHTML = "", c2 = {}), u2(e3 - 1), u2(e3), u2(e3 + 1);
      });
      this.unsubscribeOnScroll.push(t3);
    }
  }
  renderChannel(t2, e2, i2, s2) {
    var {
        overlay: n2
      } = e2,
      r2 = function (t3, e3) {
        var i3 = {};
        for (var s3 in t3) Object.prototype.hasOwnProperty.call(t3, s3) && e3.indexOf(s3) < 0 && (i3[s3] = t3[s3]);
        if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
          var n3 = 0;
          for (s3 = Object.getOwnPropertySymbols(t3); n3 < s3.length; n3++) e3.indexOf(s3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, s3[n3]) && (i3[s3[n3]] = t3[s3[n3]]);
        }
        return i3;
      }(e2, ["overlay"]);
    const o2 = document.createElement("div"),
      a2 = this.getHeight(r2.height, r2.splitChannels);
    o2.style.height = `${a2}px`, n2 && s2 > 0 && (o2.style.marginTop = `-${a2}px`), this.canvasWrapper.style.minHeight = `${a2}px`, this.canvasWrapper.appendChild(o2);
    const h2 = o2.cloneNode();
    this.progressWrapper.appendChild(h2), this.renderMultiCanvas(t2, r2, i2, a2, o2, h2);
  }
  render(e2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      this.timeouts.forEach(t3 => t3()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
      const i2 = this.getPixelRatio(),
        s2 = this.scrollContainer.clientWidth,
        n2 = Math.ceil(e2.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = n2 > s2;
      const r2 = this.options.fillParent && !this.isScrollable,
        o2 = (r2 ? s2 : n2) * i2;
      if (this.wrapper.style.width = r2 ? "100%" : `${n2}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e2, this.emit("render"), this.options.splitChannels) for (let i3 = 0; i3 < e2.numberOfChannels; i3++) {
        const s3 = Object.assign(Object.assign({}, this.options), null === (t2 = this.options.splitChannels) || void 0 === t2 ? void 0 : t2[i3]);
        this.renderChannel([e2.getChannelData(i3)], s3, o2, i3);
      } else {
        const t3 = [e2.getChannelData(0)];
        e2.numberOfChannels > 1 && t3.push(e2.getChannelData(1)), this.renderChannel(t3, this.options, o2, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach(t3 => t3()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const {
        scrollWidth: t2
      } = this.scrollContainer,
      {
        right: e2
      } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && t2 !== this.scrollContainer.scrollWidth) {
      const {
        right: t3
      } = this.progressWrapper.getBoundingClientRect();
      let i2 = t3 - e2;
      i2 *= 2, i2 = i2 < 0 ? Math.floor(i2) : Math.ceil(i2), i2 /= 2, this.scrollContainer.scrollLeft += i2;
    }
  }
  zoom(t2) {
    this.options.minPxPerSec = t2, this.reRender();
  }
  scrollIntoView(t2, e2 = false) {
    const {
        scrollLeft: i2,
        scrollWidth: s2,
        clientWidth: n2
      } = this.scrollContainer,
      r2 = t2 * s2,
      o2 = i2,
      a2 = i2 + n2,
      h2 = n2 / 2;
    if (this.isDragging) {
      const t3 = 30;
      r2 + t3 > a2 ? this.scrollContainer.scrollLeft += t3 : r2 - t3 < o2 && (this.scrollContainer.scrollLeft -= t3);
    } else {
      (r2 < o2 || r2 > a2) && (this.scrollContainer.scrollLeft = r2 - (this.options.autoCenter ? h2 : 0));
      const t3 = r2 - i2 - h2;
      e2 && this.options.autoCenter && t3 > 0 && (this.scrollContainer.scrollLeft += Math.min(t3, 10));
    }
    {
      const t3 = this.scrollContainer.scrollLeft,
        e3 = t3 / s2,
        i3 = (t3 + n2) / s2;
      this.emit("scroll", e3, i3, t3, t3 + n2);
    }
  }
  renderProgress(t2, e2) {
    if (isNaN(t2)) return;
    const i2 = 100 * t2;
    this.canvasWrapper.style.clipPath = `polygon(${i2}% 0, 100% 0, 100% 100%, ${i2}% 100%)`, this.progressWrapper.style.width = `${i2}%`, this.cursor.style.left = `${i2}%`, this.cursor.style.transform = `translateX(-${100 === Math.round(i2) ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(t2, e2);
  }
  exportImage(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      const t2 = this.canvasWrapper.querySelectorAll("canvas");
      if (!t2.length) throw new Error("No waveform data");
      if ("dataURL" === s2) {
        const s3 = Array.from(t2).map(t3 => t3.toDataURL(e2, i2));
        return Promise.resolve(s3);
      }
      return Promise.all(Array.from(t2).map(t3 => new Promise((s3, n2) => {
        t3.toBlob(t4 => {
          t4 ? s3(t4) : n2(new Error("Could not export image"));
        }, e2, i2);
      })));
    });
  }
};
h.MAX_CANVAS_WIDTH = 8e3, h.MAX_NODES = 10;
var l = class extends e {
  constructor() {
    super(...arguments), this.unsubscribe = () => {};
  }
  start() {
    this.unsubscribe = this.on("tick", () => {
      requestAnimationFrame(() => {
        this.emit("tick");
      });
    }), this.emit("tick");
  }
  stop() {
    this.unsubscribe();
  }
  destroy() {
    this.unsubscribe();
  }
};
var d = class extends e {
  constructor(t2 = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = false, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = true, this.crossOrigin = null, this.seeking = false, this.autoplay = false, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t2, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return t(this, void 0, void 0, function* () {});
  }
  get src() {
    return this.currentSrc;
  }
  set src(t2) {
    if (this.currentSrc = t2, this._duration = void 0, !t2) return this.buffer = null, void this.emit("emptied");
    fetch(t2).then(e2 => {
      if (e2.status >= 400) throw new Error(`Failed to fetch ${t2}: ${e2.status} (${e2.statusText})`);
      return e2.arrayBuffer();
    }).then(e2 => this.currentSrc !== t2 ? null : this.audioContext.decodeAudioData(e2)).then(e2 => {
      this.currentSrc === t2 && (this.buffer = e2, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var t2;
    if (!this.paused) return;
    this.paused = false, null === (t2 = this.bufferNode) || void 0 === t2 || t2.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let e2 = this.playedDuration * this._playbackRate;
    (e2 >= this.duration || e2 < 0) && (e2 = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, e2), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var t2;
    this.paused = true, null === (t2 = this.bufferNode) || void 0 === t2 || t2.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(t2) {
    const e2 = t2 - this.currentTime,
      i2 = this.bufferNode;
    null == i2 || i2.stop(this.audioContext.currentTime + e2), null == i2 || i2.addEventListener("ended", () => {
      i2 === this.bufferNode && (this.bufferNode = null, this.pause());
    }, {
      once: true
    });
  }
  setSinkId(e2) {
    return t(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(e2);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t2) {
    this._playbackRate = t2, this.bufferNode && (this.bufferNode.playbackRate.value = t2);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(t2) {
    const e2 = !this.paused;
    e2 && this._pause(), this.playedDuration = t2 / this._playbackRate, e2 && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var t2, e2;
    return null !== (t2 = this._duration) && void 0 !== t2 ? t2 : (null === (e2 = this.buffer) || void 0 === e2 ? void 0 : e2.duration) || 0;
  }
  set duration(t2) {
    this._duration = t2;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(t2) {
    this.gainNode.gain.value = t2, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(t2) {
    this._muted !== t2 && (this._muted = t2, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(t2) {
    return /^(audio|video)\//.test(t2);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const t2 = [];
    if (!this.buffer) return t2;
    const e2 = this.buffer.numberOfChannels;
    for (let i2 = 0; i2 < e2; i2++) t2.push(this.buffer.getChannelData(i2));
    return t2;
  }
};
var c = {
  waveColor: "#999",
  progressColor: "#555",
  cursorWidth: 1,
  minPxPerSec: 0,
  fillParent: true,
  interact: true,
  dragToSeek: false,
  autoScroll: true,
  autoCenter: true,
  sampleRate: 8e3
};
var u = class extends a {
  static create(t2) {
    return new u(t2);
  }
  constructor(t2) {
    const e2 = t2.media || ("WebAudio" === t2.backend ? new d() : void 0);
    super({
      media: e2,
      mediaControls: t2.mediaControls,
      autoplay: t2.autoplay,
      playbackRate: t2.audioRate
    }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, c, t2), this.timer = new l();
    const i2 = e2 ? void 0 : this.getMediaElement();
    this.renderer = new h(this.options, i2), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const s2 = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const {
        peaks: t3,
        duration: e3
      } = this.options;
      (s2 || t3 && e3) && this.load(s2, t3, e3).catch(() => null);
    });
  }
  updateProgress(t2 = this.getCurrentTime()) {
    return this.renderer.renderProgress(t2 / this.getDuration(), this.isPlaying()), t2;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const t2 = this.updateProgress();
        this.emit("timeupdate", t2), this.emit("audioprocess", t2), null != this.stopAtPosition && this.isPlaying() && t2 >= this.stopAtPosition && this.pause();
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const t2 = this.updateProgress();
      this.emit("timeupdate", t2);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("ended", () => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", () => {
      var t2;
      this.emit("error", null !== (t2 = this.getMediaElement().error) && void 0 !== t2 ? t2 : new Error("Media error")), this.stopAtPosition = null;
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (t2, e2) => {
      this.options.interact && (this.seekTo(t2), this.emit("interaction", t2 * this.getDuration()), this.emit("click", t2, e2));
    }), this.renderer.on("dblclick", (t2, e2) => {
      this.emit("dblclick", t2, e2);
    }), this.renderer.on("scroll", (t2, e2, i2, s2) => {
      const n2 = this.getDuration();
      this.emit("scroll", t2 * n2, e2 * n2, i2, s2);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", t2 => {
      this.emit("dragstart", t2);
    }), this.renderer.on("dragend", t2 => {
      this.emit("dragend", t2);
    }));
    {
      let t2;
      this.subscriptions.push(this.renderer.on("drag", e2 => {
        if (!this.options.interact) return;
        let i2;
        this.renderer.renderProgress(e2), clearTimeout(t2), this.isPlaying() ? i2 = 0 : true === this.options.dragToSeek ? i2 = 200 : "object" == typeof this.options.dragToSeek && void 0 !== this.options.dragToSeek && (i2 = this.options.dragToSeek.debounceTime), t2 = setTimeout(() => {
          this.seekTo(e2);
        }, i2), this.emit("interaction", e2 * this.getDuration()), this.emit("drag", e2);
      }));
    }
  }
  initPlugins() {
    var t2;
    (null === (t2 = this.options.plugins) || void 0 === t2 ? void 0 : t2.length) && this.options.plugins.forEach(t3 => {
      this.registerPlugin(t3);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach(t2 => t2()), this.mediaSubscriptions = [];
  }
  setOptions(t2) {
    this.options = Object.assign({}, this.options, t2), t2.duration && !t2.peaks && (this.decodedData = i.createBuffer(this.exportPeaks(), t2.duration)), t2.peaks && t2.duration && (this.decodedData = i.createBuffer(t2.peaks, t2.duration)), this.renderer.setOptions(this.options), t2.audioRate && this.setPlaybackRate(t2.audioRate), null != t2.mediaControls && (this.getMediaElement().controls = t2.mediaControls);
  }
  registerPlugin(t2) {
    return t2._init(this), this.plugins.push(t2), this.subscriptions.push(t2.once("destroy", () => {
      this.plugins = this.plugins.filter(e2 => e2 !== t2);
    })), t2;
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(t2) {
    return this.renderer.setScroll(t2);
  }
  setScrollTime(t2) {
    const e2 = t2 / this.getDuration();
    this.renderer.setScrollPercentage(e2);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e2, s2, n2, r2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      if (this.emit("load", e2), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !s2 && !n2) {
        const i2 = this.options.fetchParams || {};
        window.AbortController && !i2.signal && (this.abortController = new AbortController(), i2.signal = null === (t2 = this.abortController) || void 0 === t2 ? void 0 : t2.signal);
        const n3 = t3 => this.emit("loading", t3);
        s2 = yield o.fetchBlob(e2, n3, i2);
        const r3 = this.options.blobMimeType;
        r3 && (s2 = new Blob([s2], {
          type: r3
        }));
      }
      this.setSrc(e2, s2);
      const a2 = yield new Promise(t3 => {
        const e3 = r2 || this.getDuration();
        e3 ? t3(e3) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => t3(this.getDuration()), {
          once: true
        }));
      });
      if (!e2 && !s2) {
        const t3 = this.getMediaElement();
        t3 instanceof d && (t3.duration = a2);
      }
      if (n2) this.decodedData = i.createBuffer(n2, a2 || 0);else if (s2) {
        const t3 = yield s2.arrayBuffer();
        this.decodedData = yield i.decode(t3, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e2, void 0, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  loadBlob(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e2, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  zoom(t2) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(t2), this.emit("zoom", t2);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({
    channels: t2 = 2,
    maxLength: e2 = 8e3,
    precision: i2 = 1e4
  } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const s2 = Math.min(t2, this.decodedData.numberOfChannels),
      n2 = [];
    for (let t3 = 0; t3 < s2; t3++) {
      const s3 = this.decodedData.getChannelData(t3),
        r2 = [],
        o2 = s3.length / e2;
      for (let t4 = 0; t4 < e2; t4++) {
        const e3 = s3.slice(Math.floor(t4 * o2), Math.ceil((t4 + 1) * o2));
        let n3 = 0;
        for (let t5 = 0; t5 < e3.length; t5++) {
          const i3 = e3[t5];
          Math.abs(i3) > Math.abs(n3) && (n3 = i3);
        }
        r2.push(Math.round(n3 * i2) / i2);
      }
      n2.push(r2);
    }
    return n2;
  }
  getDuration() {
    let t2 = super.getDuration() || 0;
    return 0 !== t2 && t2 !== 1 / 0 || !this.decodedData || (t2 = this.decodedData.duration), t2;
  }
  toggleInteraction(t2) {
    this.options.interact = t2;
  }
  setTime(t2) {
    this.stopAtPosition = null, super.setTime(t2), this.updateProgress(t2), this.emit("timeupdate", t2);
  }
  seekTo(t2) {
    const e2 = this.getDuration() * t2;
    this.setTime(e2);
  }
  play(e2, i2) {
    const s2 = Object.create(null, {
      play: {
        get: () => super.play
      }
    });
    return t(this, void 0, void 0, function* () {
      null != e2 && this.setTime(e2);
      const t2 = yield s2.play.call(this);
      return null != i2 && (this.media instanceof d ? this.media.stopAt(i2) : this.stopAtPosition = i2), t2;
    });
  }
  playPause() {
    return t(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(t2) {
    this.setTime(this.getCurrentTime() + t2);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(t2) {
    this.unsubscribePlayerEvents(), super.setMediaElement(t2), this.initPlayerEvents();
  }
  exportImage() {
    return t(this, arguments, void 0, function* (t2 = "image/png", e2 = 1, i2 = "dataURL") {
      return this.renderer.exportImage(t2, e2, i2);
    });
  }
  destroy() {
    var t2;
    this.emit("destroy"), null === (t2 = this.abortController) || void 0 === t2 || t2.abort(), this.plugins.forEach(t3 => t3.destroy()), this.subscriptions.forEach(t3 => t3()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
};
u.BasePlugin = class extends e {
  constructor(t2) {
    super(), this.subscriptions = [], this.options = t2;
  }
  onInit() {}
  _init(t2) {
    this.wavesurfer = t2, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach(t2 => t2());
  }
}, u.dom = r;

// .beyond/uimport/temp/wavesurfer.js.7.9.4.js
var wavesurfer_js_7_9_4_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3dhdmVzdXJmZXIuanMuNy45LjQuanMiLCIuLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIl0sIm5hbWVzIjpbIndhdmVzdXJmZXJfanNfN185XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIndhdmVzdXJmZXJfanNfN185XzRfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ0IiwidDIiLCJlMiIsImkyIiwiczIiLCJQcm9taXNlIiwibjIiLCJyMiIsIm8yIiwidDMiLCJoMiIsIm5leHQiLCJ0NCIsImEyIiwidGhyb3ciLCJlMyIsImRvbmUiLCJ2YWx1ZSIsInRoZW4iLCJhcHBseSIsIlN1cHByZXNzZWRFcnJvciIsImUiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVycyIsIm9uIiwiU2V0IiwiYWRkIiwib25jZSIsImkzIiwiaSIsInVuIiwiZGVsZXRlIiwidW5BbGwiLCJlbWl0IiwiZm9yRWFjaCIsImRlY29kZSIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJmaW5hbGx5IiwiY2xvc2UiLCJjcmVhdGVCdWZmZXIiLCJzb21lIiwibGVuZ3RoIiwiTWF0aCIsImFicyIsImU0IiwiZHVyYXRpb24iLCJudW1iZXJPZkNoYW5uZWxzIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb3B5RnJvbUNoYW5uZWwiLCJBdWRpb0J1ZmZlciIsInByb3RvdHlwZSIsImNvcHlUb0NoYW5uZWwiLCJzIiwieG1sbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwibjMiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiYXNzaWduIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwibiIsInIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJvIiwiZmV0Y2hCbG9iIiwiZmV0Y2giLCJzdGF0dXMiLCJFcnJvciIsInN0YXR1c1RleHQiLCJib2R5IiwiaGVhZGVycyIsInMzIiwiZ2V0UmVhZGVyIiwiTnVtYmVyIiwiZ2V0Iiwicm91bmQiLCJhIiwicmVhZCIsImNsb25lIiwiYmxvYiIsImlzRXh0ZXJuYWxNZWRpYSIsIm1lZGlhIiwibWVkaWFDb250cm9scyIsImNvbnRyb2xzIiwiYXV0b3BsYXkiLCJwbGF5YmFja1JhdGUiLCJvbk1lZGlhRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNyYyIsImN1cnJlbnRTcmMiLCJzcmMiLCJyZXZva2VTcmMiLCJzdGFydHNXaXRoIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY2FuUGxheVR5cGUiLCJzZXRTcmMiLCJCbG9iIiwidHlwZSIsImNyZWF0ZU9iamVjdFVSTCIsImRlc3Ryb3kiLCJwYXVzZSIsInJlbW92ZSIsImxvYWQiLCJzZXRNZWRpYUVsZW1lbnQiLCJwbGF5IiwiaXNQbGF5aW5nIiwicGF1c2VkIiwiZW5kZWQiLCJzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJtYXgiLCJtaW4iLCJnZXREdXJhdGlvbiIsImdldEN1cnJlbnRUaW1lIiwiZ2V0Vm9sdW1lIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwiZ2V0TXV0ZWQiLCJtdXRlZCIsInNldE11dGVkIiwiZ2V0UGxheWJhY2tSYXRlIiwiaXNTZWVraW5nIiwic2Vla2luZyIsInNldFBsYXliYWNrUmF0ZSIsInByZXNlcnZlc1BpdGNoIiwiZ2V0TWVkaWFFbGVtZW50Iiwic2V0U2lua0lkIiwiaCIsInRpbWVvdXRzIiwiaXNTY3JvbGxhYmxlIiwiYXVkaW9EYXRhIiwicmVzaXplT2JzZXJ2ZXIiLCJsYXN0Q29udGFpbmVyV2lkdGgiLCJpc0RyYWdnaW5nIiwic3Vic2NyaXB0aW9ucyIsInVuc3Vic2NyaWJlT25TY3JvbGwiLCJvcHRpb25zIiwicGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIiLCJjb250YWluZXIiLCJwYXJlbnQiLCJpbml0SHRtbCIsInNjcm9sbENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyIiwiY2FudmFzV3JhcHBlciIsInByb2dyZXNzV3JhcHBlciIsImN1cnNvciIsImluaXRFdmVudHMiLCJIVE1MRWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhZ1RvU2VlayIsImluaXREcmFnIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJSZXNpemVPYnNlcnZlciIsImNyZWF0ZURlbGF5Iiwib25Db250YWluZXJSZXNpemUiLCJjYXRjaCIsIm9ic2VydmUiLCJyZVJlbmRlciIsInB1c2giLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImwyIiwibDMiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImQyIiwiYzIiLCJ1MiIsInAiLCJEYXRlIiwibm93IiwibSIsInIzIiwiaDMiLCJsNCIsIm0yIiwiczQiLCJvMyIsImYiLCJhMyIsImciLCJyZWxhdGVkVGFyZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwidiIsImIiLCJwYXNzaXZlIiwiY2FwdHVyZSIsInNldFRpbWVvdXQiLCJnZXRIZWlnaHQiLCJpc05hTiIsImNsaWVudEhlaWdodCIsImV2ZXJ5Iiwib3ZlcmxheSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjc3BOb25jZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJzcGxpdENoYW5uZWxzIiwic2V0T3B0aW9ucyIsImdldFdyYXBwZXIiLCJnZXRXaWR0aCIsImdldFNjcm9sbCIsInNldFNjcm9sbCIsInNldFNjcm9sbFBlcmNlbnRhZ2UiLCJkaXNjb25uZWN0IiwiY2xlYXJUaW1lb3V0IiwiY29udmVydENvbG9yVmFsdWVzIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImdldFBpeGVsUmF0aW8iLCJyZW5kZXJCYXJXYXZlZm9ybSIsImNhbnZhcyIsImJhcldpZHRoIiwiYmFyR2FwIiwiYmFyUmFkaXVzIiwiYmVnaW5QYXRoIiwiYmFyQWxpZ24iLCJkMyIsImZpbGwiLCJjbG9zZVBhdGgiLCJyZW5kZXJMaW5lV2F2ZWZvcm0iLCJtb3ZlVG8iLCJsaW5lVG8iLCJyZW5kZXJXYXZlZm9ybSIsImZpbGxTdHlsZSIsIndhdmVDb2xvciIsInJlbmRlckZ1bmN0aW9uIiwiYmFySGVpZ2h0Iiwibm9ybWFsaXplIiwiZnJvbSIsInJlZHVjZSIsInJlbmRlclNpbmdsZUNhbnZhcyIsImNsb25lTm9kZSIsImRyYXdJbWFnZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInByb2dyZXNzQ29sb3IiLCJmaWxsUmVjdCIsInJlbmRlck11bHRpQ2FudmFzIiwiTUFYX0NBTlZBU19XSURUSCIsImZsb29yIiwibWFwIiwiaTQiLCJzbGljZSIsImNlaWwiLCJrZXlzIiwiTUFYX05PREVTIiwicmVuZGVyQ2hhbm5lbCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInJlbmRlciIsIm1pblB4UGVyU2VjIiwiZmlsbFBhcmVudCIsIm92ZXJmbG93WCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVTY3JvbGxiYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3JDb2xvciIsImN1cnNvcldpZHRoIiwicmVzb2x2ZSIsInJpZ2h0Iiwiem9vbSIsInNjcm9sbEludG9WaWV3IiwiYXV0b0NlbnRlciIsInJlbmRlclByb2dyZXNzIiwiY2xpcFBhdGgiLCJ0cmFuc2Zvcm0iLCJhdXRvU2Nyb2xsIiwiZXhwb3J0SW1hZ2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9EYXRhVVJMIiwiYWxsIiwidG9CbG9iIiwibCIsImFyZ3VtZW50cyIsInVuc3Vic2NyaWJlIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwiZCIsImJ1ZmZlck5vZGUiLCJwbGF5U3RhcnRUaW1lIiwicGxheWVkRHVyYXRpb24iLCJfbXV0ZWQiLCJfcGxheWJhY2tSYXRlIiwiX2R1cmF0aW9uIiwiYnVmZmVyIiwiY3Jvc3NPcmlnaW4iLCJhdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJhcnJheUJ1ZmZlciIsIl9wbGF5IiwiY3JlYXRlQnVmZmVyU291cmNlIiwib25lbmRlZCIsIl9wYXVzZSIsInN0b3BBdCIsImdhaW4iLCJ0ZXN0IiwiZ2V0R2Fpbk5vZGUiLCJjIiwiaW50ZXJhY3QiLCJ1IiwiY3JlYXRlIiwiYmFja2VuZCIsImF1ZGlvUmF0ZSIsInBsdWdpbnMiLCJkZWNvZGVkRGF0YSIsInN0b3BBdFBvc2l0aW9uIiwibWVkaWFTdWJzY3JpcHRpb25zIiwiYWJvcnRDb250cm9sbGVyIiwidGltZXIiLCJyZW5kZXJlciIsImluaXRQbGF5ZXJFdmVudHMiLCJpbml0UmVuZGVyZXJFdmVudHMiLCJpbml0VGltZXJFdmVudHMiLCJpbml0UGx1Z2lucyIsInVybCIsInBlYWtzIiwidXBkYXRlUHJvZ3Jlc3MiLCJlcnJvciIsInNlZWtUbyIsImRlYm91bmNlVGltZSIsInJlZ2lzdGVyUGx1Z2luIiwidW5zdWJzY3JpYmVQbGF5ZXJFdmVudHMiLCJleHBvcnRQZWFrcyIsIl9pbml0IiwiZmlsdGVyIiwic2V0U2Nyb2xsVGltZSIsImdldEFjdGl2ZVBsdWdpbnMiLCJsb2FkQXVkaW8iLCJmZXRjaFBhcmFtcyIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsImJsb2JNaW1lVHlwZSIsImxvYWRCbG9iIiwiZ2V0RGVjb2RlZERhdGEiLCJjaGFubmVscyIsIm1heExlbmd0aCIsInByZWNpc2lvbiIsInQ1IiwidG9nZ2xlSW50ZXJhY3Rpb24iLCJwbGF5UGF1c2UiLCJza2lwIiwiZW1wdHkiLCJhYm9ydCIsIkJhc2VQbHVnaW4iLCJvbkluaXQiLCJ3YXZlc3VyZmVyIiwiZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwyQkFBQTtBQUFBQyxRQUFBLENBQUFELDJCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDJCQUFBOzs7QUNBQSxTQUFTTyxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7RUFBQyxPQUFPLEtBQUlELEVBQUEsS0FBSUEsRUFBQSxHQUFFRSxPQUFBLEdBQVcsVUFBU0MsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxTQUFTQyxHQUFFQyxFQUFBLEVBQUU7TUFBQyxJQUFHO1FBQUNDLEVBQUEsQ0FBRU4sRUFBQSxDQUFFTyxJQUFBLENBQUtGLEVBQUMsQ0FBQztNQUFDLFNBQU9HLEVBQUEsRUFBTjtRQUFTTCxFQUFBLENBQUVLLEVBQUM7TUFBQztJQUFDO0lBQUMsU0FBU0MsR0FBRUosRUFBQSxFQUFFO01BQUMsSUFBRztRQUFDQyxFQUFBLENBQUVOLEVBQUEsQ0FBRVUsS0FBQSxDQUFNTCxFQUFDLENBQUM7TUFBQyxTQUFPRyxFQUFBLEVBQU47UUFBU0wsRUFBQSxDQUFFSyxFQUFDO01BQUM7SUFBQztJQUFDLFNBQVNGLEdBQUVELEVBQUEsRUFBRTtNQUFDLElBQUlNLEVBQUE7TUFBRU4sRUFBQSxDQUFFTyxJQUFBLEdBQUtWLEVBQUEsQ0FBRUcsRUFBQSxDQUFFUSxLQUFLLEtBQUdGLEVBQUEsR0FBRU4sRUFBQSxDQUFFUSxLQUFBLEVBQU1GLEVBQUEsWUFBYVosRUFBQSxHQUFFWSxFQUFBLEdBQUUsSUFBSVosRUFBQSxDQUFHLFVBQVNTLEVBQUEsRUFBRTtRQUFDQSxFQUFBLENBQUVHLEVBQUM7TUFBQyxDQUFFLEdBQUdHLElBQUEsQ0FBS1YsRUFBQSxFQUFFSyxFQUFDO0lBQUM7SUFBQ0gsRUFBQSxFQUFHTixFQUFBLEdBQUVBLEVBQUEsQ0FBRWUsS0FBQSxDQUFNbEIsRUFBQSxFQUFFQyxFQUFBLElBQUcsRUFBRSxHQUFHUyxJQUFBLENBQUssQ0FBQztFQUFDLENBQUU7QUFBQztBQUFDLGNBQVksT0FBT1MsZUFBQSxJQUFpQkEsZUFBQTtBQUFnQixJQUFNQyxDQUFBLEdBQU4sTUFBTztFQUFDQyxZQUFBLEVBQWE7SUFBQyxLQUFLQyxTQUFBLEdBQVUsQ0FBQztFQUFDO0VBQUNDLEdBQUd2QixFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBRyxLQUFLb0IsU0FBQSxDQUFVdEIsRUFBQSxNQUFLLEtBQUtzQixTQUFBLENBQVV0QixFQUFBLElBQUcsbUJBQUl3QixHQUFBLEtBQUssS0FBS0YsU0FBQSxDQUFVdEIsRUFBQSxFQUFHeUIsR0FBQSxDQUFJeEIsRUFBQyxHQUFFLFFBQU1DLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUV3QixJQUFBLEVBQUs7TUFBQyxNQUFNQyxFQUFBLEdBQUVDLENBQUEsS0FBSTtRQUFDLEtBQUtDLEVBQUEsQ0FBRzdCLEVBQUEsRUFBRTJCLEVBQUMsR0FBRSxLQUFLRSxFQUFBLENBQUc3QixFQUFBLEVBQUVDLEVBQUM7TUFBQztNQUFFLE9BQU8sS0FBS3NCLEVBQUEsQ0FBR3ZCLEVBQUEsRUFBRTJCLEVBQUMsR0FBRUEsRUFBQTtJQUFDO0lBQUMsT0FBTSxNQUFJLEtBQUtFLEVBQUEsQ0FBRzdCLEVBQUEsRUFBRUMsRUFBQztFQUFDO0VBQUM0QixHQUFHN0IsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxJQUFJQyxFQUFBO0lBQUUsVUFBUUEsRUFBQSxHQUFFLEtBQUtvQixTQUFBLENBQVV0QixFQUFBLE1BQUssV0FBU0UsRUFBQSxJQUFHQSxFQUFBLENBQUU0QixNQUFBLENBQU83QixFQUFDO0VBQUM7RUFBQ3lCLEtBQUsxQixFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE9BQU8sS0FBS3NCLEVBQUEsQ0FBR3ZCLEVBQUEsRUFBRUMsRUFBQSxFQUFFO01BQUN5QixJQUFBLEVBQUs7SUFBRSxDQUFDO0VBQUM7RUFBQ0ssTUFBQSxFQUFPO0lBQUMsS0FBS1QsU0FBQSxHQUFVLENBQUM7RUFBQztFQUFDVSxLQUFLaEMsRUFBQSxLQUFLQyxFQUFBLEVBQUU7SUFBQyxLQUFLcUIsU0FBQSxDQUFVdEIsRUFBQSxLQUFJLEtBQUtzQixTQUFBLENBQVV0QixFQUFBLEVBQUdpQyxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxHQUFHUCxFQUFDLENBQUU7RUFBQztBQUFDO0FBQUMsSUFBTTJCLENBQUEsR0FBRTtFQUFDTSxNQUFBLEVBQU8sU0FBQUEsQ0FBU2pDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0gsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxNQUFNQyxFQUFBLEdBQUUsSUFBSW1DLFlBQUEsQ0FBYTtRQUFDQyxVQUFBLEVBQVdsQztNQUFDLENBQUM7TUFBRSxPQUFPRixFQUFBLENBQUVxQyxlQUFBLENBQWdCcEMsRUFBQyxFQUFFcUMsT0FBQSxDQUFTLE1BQUl0QyxFQUFBLENBQUV1QyxLQUFBLENBQU0sQ0FBRTtJQUFDLENBQUU7RUFBQztFQUFFQyxZQUFBLEVBQWEsU0FBQUEsQ0FBU3hDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBTSxZQUFVLE9BQU9ELEVBQUEsQ0FBRSxPQUFLQSxFQUFBLEdBQUUsQ0FBQ0EsRUFBQyxJQUFHLFVBQVNRLEVBQUEsRUFBRTtNQUFDLE1BQU1NLEVBQUEsR0FBRU4sRUFBQSxDQUFFO01BQUcsSUFBR00sRUFBQSxDQUFFMkIsSUFBQSxDQUFNOUIsRUFBQSxJQUFHQSxFQUFBLEdBQUUsS0FBR0EsRUFBQSxHQUFFLEVBQUcsR0FBRTtRQUFDLE1BQU1ULEVBQUEsR0FBRVksRUFBQSxDQUFFNEIsTUFBQTtRQUFPLElBQUl2QyxFQUFBLEdBQUU7UUFBRSxTQUFRUSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFVCxFQUFBLEVBQUVTLEVBQUEsSUFBSTtVQUFDLE1BQU1nQixFQUFBLEdBQUVnQixJQUFBLENBQUtDLEdBQUEsQ0FBSTlCLEVBQUEsQ0FBRUgsRUFBQSxDQUFFO1VBQUVnQixFQUFBLEdBQUV4QixFQUFBLEtBQUlBLEVBQUEsR0FBRXdCLEVBQUE7UUFBRTtRQUFDLFdBQVVrQixFQUFBLElBQUtyQyxFQUFBLEVBQUUsU0FBUUcsRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRVQsRUFBQSxFQUFFUyxFQUFBLElBQUlrQyxFQUFBLENBQUVsQyxFQUFBLEtBQUlSLEVBQUE7TUFBQztJQUFDLEVBQUVILEVBQUMsR0FBRTtNQUFDOEMsUUFBQSxFQUFTN0MsRUFBQTtNQUFFeUMsTUFBQSxFQUFPMUMsRUFBQSxDQUFFLEdBQUcwQyxNQUFBO01BQU9OLFVBQUEsRUFBV3BDLEVBQUEsQ0FBRSxHQUFHMEMsTUFBQSxHQUFPekMsRUFBQTtNQUFFOEMsZ0JBQUEsRUFBaUIvQyxFQUFBLENBQUUwQyxNQUFBO01BQU9NLGNBQUEsRUFBZWxDLEVBQUEsSUFBRyxRQUFNZCxFQUFBLEdBQUUsU0FBT0EsRUFBQSxDQUFFYyxFQUFBO01BQUdtQyxlQUFBLEVBQWdCQyxXQUFBLENBQVlDLFNBQUEsQ0FBVUYsZUFBQTtNQUFnQkcsYUFBQSxFQUFjRixXQUFBLENBQVlDLFNBQUEsQ0FBVUM7SUFBYTtFQUFDO0FBQUM7QUFBRSxTQUFTQyxFQUFFckQsRUFBQSxFQUFFQyxFQUFBLEVBQUU7RUFBQyxNQUFNQyxFQUFBLEdBQUVELEVBQUEsQ0FBRXFELEtBQUEsR0FBTUMsUUFBQSxDQUFTQyxlQUFBLENBQWdCdkQsRUFBQSxDQUFFcUQsS0FBQSxFQUFNdEQsRUFBQyxJQUFFdUQsUUFBQSxDQUFTRSxhQUFBLENBQWN6RCxFQUFDO0VBQUUsV0FBUyxDQUFDUSxFQUFBLEVBQUVILEVBQUMsS0FBSXFELE1BQUEsQ0FBT0MsT0FBQSxDQUFRMUQsRUFBQyxHQUFFLElBQUcsZUFBYU8sRUFBQSxFQUFFLFdBQVMsQ0FBQ0csRUFBQSxFQUFFaUQsRUFBQyxLQUFJRixNQUFBLENBQU9DLE9BQUEsQ0FBUTFELEVBQUMsR0FBRSxZQUFVLE9BQU8yRCxFQUFBLEdBQUUxRCxFQUFBLENBQUUyRCxXQUFBLENBQVlOLFFBQUEsQ0FBU08sY0FBQSxDQUFlRixFQUFDLENBQUMsSUFBRTFELEVBQUEsQ0FBRTJELFdBQUEsQ0FBWVIsQ0FBQSxDQUFFMUMsRUFBQSxFQUFFaUQsRUFBQyxDQUFDLE9BQU0sWUFBVXBELEVBQUEsR0FBRWtELE1BQUEsQ0FBT0ssTUFBQSxDQUFPN0QsRUFBQSxDQUFFOEQsS0FBQSxFQUFNM0QsRUFBQyxJQUFFLGtCQUFnQkcsRUFBQSxHQUFFTixFQUFBLENBQUUrRCxXQUFBLEdBQVk1RCxFQUFBLEdBQUVILEVBQUEsQ0FBRWdFLFlBQUEsQ0FBYTFELEVBQUEsRUFBRUgsRUFBQSxDQUFFOEQsUUFBQSxDQUFTLENBQUM7RUFBRSxPQUFPakUsRUFBQTtBQUFDO0FBQUMsU0FBU2tFLEVBQUVwRSxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0VBQUMsTUFBTUcsRUFBQSxHQUFFZ0QsQ0FBQSxDQUFFckQsRUFBQSxFQUFFQyxFQUFBLElBQUcsQ0FBQyxDQUFDO0VBQUUsT0FBTyxRQUFNQyxFQUFBLElBQUdBLEVBQUEsQ0FBRTJELFdBQUEsQ0FBWXhELEVBQUMsR0FBRUEsRUFBQTtBQUFDO0FBQUMsSUFBSWdFLENBQUEsR0FBRVgsTUFBQSxDQUFPWSxNQUFBLENBQU87RUFBQ0MsU0FBQSxFQUFVO0VBQUtkLGFBQUEsRUFBY1csQ0FBQTtFQUFFMUUsT0FBQSxFQUFRMEU7QUFBQyxDQUFDO0FBQUUsSUFBTUksQ0FBQSxHQUFFO0VBQUNDLFNBQUEsRUFBVSxTQUFBQSxDQUFTeEUsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE9BQU9KLENBQUEsQ0FBRSxNQUFLLFFBQU8sUUFBUSxhQUFXO01BQUMsTUFBTU0sRUFBQSxHQUFFLE1BQU1xRSxLQUFBLENBQU16RSxFQUFBLEVBQUVFLEVBQUM7TUFBRSxJQUFHRSxFQUFBLENBQUVzRSxNQUFBLElBQVEsS0FBSSxNQUFNLElBQUlDLEtBQUEsQ0FBTSxtQkFBbUIzRSxFQUFBLEtBQU1JLEVBQUEsQ0FBRXNFLE1BQUEsS0FBV3RFLEVBQUEsQ0FBRXdFLFVBQUEsR0FBYTtNQUFFLE9BQU8sVUFBUy9ELEVBQUEsRUFBRWEsRUFBQSxFQUFFO1FBQUM1QixDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztVQUFDLElBQUcsQ0FBQ2UsRUFBQSxDQUFFZ0UsSUFBQSxJQUFNLENBQUNoRSxFQUFBLENBQUVpRSxPQUFBLEVBQVE7VUFBTyxNQUFNQyxFQUFBLEdBQUVsRSxFQUFBLENBQUVnRSxJQUFBLENBQUtHLFNBQUEsQ0FBVTtZQUFFckIsRUFBQSxHQUFFc0IsTUFBQSxDQUFPcEUsRUFBQSxDQUFFaUUsT0FBQSxDQUFRSSxHQUFBLENBQUksZ0JBQWdCLENBQUMsS0FBRztVQUFFLElBQUk3RSxFQUFBLEdBQUU7VUFBRSxNQUFNQyxFQUFBLEdBQUVzQyxFQUFBLElBQUc5QyxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztjQUFDTyxFQUFBLEtBQUksUUFBTXVDLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUVILE1BQUEsS0FBUztjQUFFLE1BQU0xQyxFQUFBLEdBQUUyQyxJQUFBLENBQUt5QyxLQUFBLENBQU05RSxFQUFBLEdBQUVzRCxFQUFBLEdBQUUsR0FBRztjQUFFakMsRUFBQSxDQUFFM0IsRUFBQztZQUFDLENBQUU7WUFBRVksRUFBQSxHQUFFeUUsQ0FBQSxLQUFJdEYsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7Y0FBQyxJQUFJQyxFQUFBO2NBQUUsSUFBRztnQkFBQ0EsRUFBQSxHQUFFLE1BQU1nRixFQUFBLENBQUVNLElBQUEsQ0FBSztjQUFDLFNBQU85RSxFQUFBLEVBQU47Z0JBQVM7Y0FBTTtjQUFDUixFQUFBLENBQUVlLElBQUEsS0FBT1IsRUFBQSxDQUFFUCxFQUFBLENBQUVnQixLQUFLLEdBQUUsTUFBTUosRUFBQSxDQUFFO1lBQUUsQ0FBRTtVQUFFQSxFQUFBLENBQUU7UUFBQyxDQUFFO01BQUMsRUFBRVAsRUFBQSxDQUFFa0YsS0FBQSxDQUFNLEdBQUVyRixFQUFDLEdBQUVHLEVBQUEsQ0FBRW1GLElBQUEsQ0FBSztJQUFDLENBQUU7RUFBQztBQUFDO0FBQUUsSUFBTUgsQ0FBQSxHQUFOLGNBQWdCakUsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEVBQUU7SUFBQyxNQUFNLEdBQUUsS0FBS3lGLGVBQUEsR0FBZ0IsT0FBR3pGLEVBQUEsQ0FBRTBGLEtBQUEsSUFBTyxLQUFLQSxLQUFBLEdBQU0xRixFQUFBLENBQUUwRixLQUFBLEVBQU0sS0FBS0QsZUFBQSxHQUFnQixRQUFJLEtBQUtDLEtBQUEsR0FBTW5DLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE9BQU8sR0FBRXpELEVBQUEsQ0FBRTJGLGFBQUEsS0FBZ0IsS0FBS0QsS0FBQSxDQUFNRSxRQUFBLEdBQVMsT0FBSTVGLEVBQUEsQ0FBRTZGLFFBQUEsS0FBVyxLQUFLSCxLQUFBLENBQU1HLFFBQUEsR0FBUyxPQUFJLFFBQU03RixFQUFBLENBQUU4RixZQUFBLElBQWMsS0FBS0MsWUFBQSxDQUFhLFdBQVcsTUFBSTtNQUFDLFFBQU0vRixFQUFBLENBQUU4RixZQUFBLEtBQWUsS0FBS0osS0FBQSxDQUFNSSxZQUFBLEdBQWE5RixFQUFBLENBQUU4RixZQUFBO0lBQWEsR0FBRztNQUFDcEUsSUFBQSxFQUFLO0lBQUUsQ0FBQztFQUFDO0VBQUNxRSxhQUFhL0YsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE9BQU8sS0FBS3dGLEtBQUEsQ0FBTU0sZ0JBQUEsQ0FBaUJoRyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQyxHQUFFLE1BQUksS0FBS3dGLEtBQUEsQ0FBTU8sbUJBQUEsQ0FBb0JqRyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQztFQUFDO0VBQUNnRyxPQUFBLEVBQVE7SUFBQyxPQUFPLEtBQUtSLEtBQUEsQ0FBTVMsVUFBQSxJQUFZLEtBQUtULEtBQUEsQ0FBTVUsR0FBQSxJQUFLO0VBQUU7RUFBQ0MsVUFBQSxFQUFXO0lBQUMsTUFBTXJHLEVBQUEsR0FBRSxLQUFLa0csTUFBQSxDQUFPO0lBQUVsRyxFQUFBLENBQUVzRyxVQUFBLENBQVcsT0FBTyxLQUFHQyxHQUFBLENBQUlDLGVBQUEsQ0FBZ0J4RyxFQUFDO0VBQUM7RUFBQ3lHLFlBQVl6RyxFQUFBLEVBQUU7SUFBQyxPQUFNLE9BQUssS0FBSzBGLEtBQUEsQ0FBTWUsV0FBQSxDQUFZekcsRUFBQztFQUFDO0VBQUMwRyxPQUFPMUcsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxNQUFNQyxFQUFBLEdBQUUsS0FBS2dHLE1BQUEsQ0FBTztJQUFFLElBQUdsRyxFQUFBLElBQUdFLEVBQUEsS0FBSUYsRUFBQSxFQUFFO0lBQU8sS0FBS3FHLFNBQUEsQ0FBVTtJQUFFLE1BQU1sRyxFQUFBLEdBQUVGLEVBQUEsWUFBYTBHLElBQUEsS0FBTyxLQUFLRixXQUFBLENBQVl4RyxFQUFBLENBQUUyRyxJQUFJLEtBQUcsQ0FBQzVHLEVBQUEsSUFBR3VHLEdBQUEsQ0FBSU0sZUFBQSxDQUFnQjVHLEVBQUMsSUFBRUQsRUFBQTtJQUFFRSxFQUFBLEtBQUksS0FBS3dGLEtBQUEsQ0FBTVUsR0FBQSxHQUFJO0lBQUksSUFBRztNQUFDLEtBQUtWLEtBQUEsQ0FBTVUsR0FBQSxHQUFJakcsRUFBQTtJQUFDLFNBQU9XLEVBQUEsRUFBTjtNQUFTLEtBQUs0RSxLQUFBLENBQU1VLEdBQUEsR0FBSXBHLEVBQUE7SUFBQztFQUFDO0VBQUM4RyxRQUFBLEVBQVM7SUFBQyxLQUFLckIsZUFBQSxLQUFrQixLQUFLQyxLQUFBLENBQU1xQixLQUFBLENBQU0sR0FBRSxLQUFLckIsS0FBQSxDQUFNc0IsTUFBQSxDQUFPLEdBQUUsS0FBS1gsU0FBQSxDQUFVLEdBQUUsS0FBS1gsS0FBQSxDQUFNVSxHQUFBLEdBQUksSUFBRyxLQUFLVixLQUFBLENBQU11QixJQUFBLENBQUs7RUFBRTtFQUFDQyxnQkFBZ0JsSCxFQUFBLEVBQUU7SUFBQyxLQUFLMEYsS0FBQSxHQUFNMUYsRUFBQTtFQUFDO0VBQUNtSCxLQUFBLEVBQU07SUFBQyxPQUFPcEgsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxPQUFPLEtBQUsyRixLQUFBLENBQU15QixJQUFBLENBQUs7SUFBQyxDQUFFO0VBQUM7RUFBQ0osTUFBQSxFQUFPO0lBQUMsS0FBS3JCLEtBQUEsQ0FBTXFCLEtBQUEsQ0FBTTtFQUFDO0VBQUNLLFVBQUEsRUFBVztJQUFDLE9BQU0sQ0FBQyxLQUFLMUIsS0FBQSxDQUFNMkIsTUFBQSxJQUFRLENBQUMsS0FBSzNCLEtBQUEsQ0FBTTRCLEtBQUE7RUFBSztFQUFDQyxRQUFRdkgsRUFBQSxFQUFFO0lBQUMsS0FBSzBGLEtBQUEsQ0FBTThCLFdBQUEsR0FBWTdFLElBQUEsQ0FBSzhFLEdBQUEsQ0FBSSxHQUFFOUUsSUFBQSxDQUFLK0UsR0FBQSxDQUFJMUgsRUFBQSxFQUFFLEtBQUsySCxXQUFBLENBQVksQ0FBQyxDQUFDO0VBQUM7RUFBQ0EsWUFBQSxFQUFhO0lBQUMsT0FBTyxLQUFLakMsS0FBQSxDQUFNNUMsUUFBQTtFQUFRO0VBQUM4RSxlQUFBLEVBQWdCO0lBQUMsT0FBTyxLQUFLbEMsS0FBQSxDQUFNOEIsV0FBQTtFQUFXO0VBQUNLLFVBQUEsRUFBVztJQUFDLE9BQU8sS0FBS25DLEtBQUEsQ0FBTW9DLE1BQUE7RUFBTTtFQUFDQyxVQUFVL0gsRUFBQSxFQUFFO0lBQUMsS0FBSzBGLEtBQUEsQ0FBTW9DLE1BQUEsR0FBTzlILEVBQUE7RUFBQztFQUFDZ0ksU0FBQSxFQUFVO0lBQUMsT0FBTyxLQUFLdEMsS0FBQSxDQUFNdUMsS0FBQTtFQUFLO0VBQUNDLFNBQVNsSSxFQUFBLEVBQUU7SUFBQyxLQUFLMEYsS0FBQSxDQUFNdUMsS0FBQSxHQUFNakksRUFBQTtFQUFDO0VBQUNtSSxnQkFBQSxFQUFpQjtJQUFDLE9BQU8sS0FBS3pDLEtBQUEsQ0FBTUksWUFBQTtFQUFZO0VBQUNzQyxVQUFBLEVBQVc7SUFBQyxPQUFPLEtBQUsxQyxLQUFBLENBQU0yQyxPQUFBO0VBQU87RUFBQ0MsZ0JBQWdCdEksRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxRQUFNQSxFQUFBLEtBQUksS0FBS3lGLEtBQUEsQ0FBTTZDLGNBQUEsR0FBZXRJLEVBQUEsR0FBRyxLQUFLeUYsS0FBQSxDQUFNSSxZQUFBLEdBQWE5RixFQUFBO0VBQUM7RUFBQ3dJLGdCQUFBLEVBQWlCO0lBQUMsT0FBTyxLQUFLOUMsS0FBQTtFQUFLO0VBQUMrQyxVQUFVekksRUFBQSxFQUFFO0lBQUMsT0FBTyxLQUFLMEYsS0FBQSxDQUFNK0MsU0FBQSxDQUFVekksRUFBQztFQUFDO0FBQUM7QUFBQyxJQUFNMEksQ0FBQSxHQUFOLGNBQWdCdEgsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU0sR0FBRSxLQUFLMEksUUFBQSxHQUFTLEVBQUMsRUFBRSxLQUFLQyxZQUFBLEdBQWEsT0FBRyxLQUFLQyxTQUFBLEdBQVUsTUFBSyxLQUFLQyxjQUFBLEdBQWUsTUFBSyxLQUFLQyxrQkFBQSxHQUFtQixHQUFFLEtBQUtDLFVBQUEsR0FBVyxPQUFHLEtBQUtDLGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS0MsbUJBQUEsR0FBb0IsRUFBQyxFQUFFLEtBQUtELGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS0UsT0FBQSxHQUFRbkosRUFBQTtJQUFFLE1BQU1FLEVBQUEsR0FBRSxLQUFLa0osMEJBQUEsQ0FBMkJwSixFQUFBLENBQUVxSixTQUFTO0lBQUUsS0FBS0MsTUFBQSxHQUFPcEosRUFBQTtJQUFFLE1BQUssQ0FBQ0MsRUFBQSxFQUFFRSxFQUFDLElBQUUsS0FBS2tKLFFBQUEsQ0FBUztJQUFFckosRUFBQSxDQUFFMkQsV0FBQSxDQUFZMUQsRUFBQyxHQUFFLEtBQUtrSixTQUFBLEdBQVVsSixFQUFBLEVBQUUsS0FBS3FKLGVBQUEsR0FBZ0JuSixFQUFBLENBQUVvSixhQUFBLENBQWMsU0FBUyxHQUFFLEtBQUtDLE9BQUEsR0FBUXJKLEVBQUEsQ0FBRW9KLGFBQUEsQ0FBYyxVQUFVLEdBQUUsS0FBS0UsYUFBQSxHQUFjdEosRUFBQSxDQUFFb0osYUFBQSxDQUFjLFdBQVcsR0FBRSxLQUFLRyxlQUFBLEdBQWdCdkosRUFBQSxDQUFFb0osYUFBQSxDQUFjLFdBQVcsR0FBRSxLQUFLSSxNQUFBLEdBQU94SixFQUFBLENBQUVvSixhQUFBLENBQWMsU0FBUyxHQUFFeEosRUFBQSxJQUFHSSxFQUFBLENBQUV3RCxXQUFBLENBQVk1RCxFQUFDLEdBQUUsS0FBSzZKLFVBQUEsQ0FBVztFQUFDO0VBQUNWLDJCQUEyQnBKLEVBQUEsRUFBRTtJQUFDLElBQUlDLEVBQUE7SUFBRSxJQUFHLFlBQVUsT0FBT0QsRUFBQSxHQUFFQyxFQUFBLEdBQUVzRCxRQUFBLENBQVNrRyxhQUFBLENBQWN6SixFQUFDLElBQUVBLEVBQUEsWUFBYStKLFdBQUEsS0FBYzlKLEVBQUEsR0FBRUQsRUFBQSxHQUFHLENBQUNDLEVBQUEsRUFBRSxNQUFNLElBQUkyRSxLQUFBLENBQU0scUJBQXFCO0lBQUUsT0FBTzNFLEVBQUE7RUFBQztFQUFDNkosV0FBQSxFQUFZO0lBQUMsTUFBTTlKLEVBQUEsR0FBRVEsRUFBQSxJQUFHO01BQUMsTUFBTVAsRUFBQSxHQUFFLEtBQUt5SixPQUFBLENBQVFNLHFCQUFBLENBQXNCO1FBQUU5SixFQUFBLEdBQUVNLEVBQUEsQ0FBRXlKLE9BQUEsR0FBUWhLLEVBQUEsQ0FBRWlLLElBQUE7UUFBSy9KLEVBQUEsR0FBRUssRUFBQSxDQUFFMkosT0FBQSxHQUFRbEssRUFBQSxDQUFFbUssR0FBQTtNQUFJLE9BQU0sQ0FBQ2xLLEVBQUEsR0FBRUQsRUFBQSxDQUFFb0ssS0FBQSxFQUFNbEssRUFBQSxHQUFFRixFQUFBLENBQUVxSyxNQUFNO0lBQUM7SUFBRSxJQUFHLEtBQUtaLE9BQUEsQ0FBUTFELGdCQUFBLENBQWlCLFNBQVMvRixFQUFBLElBQUc7TUFBQyxNQUFLLENBQUNDLEVBQUEsRUFBRUMsRUFBQyxJQUFFSCxFQUFBLENBQUVDLEVBQUM7TUFBRSxLQUFLK0IsSUFBQSxDQUFLLFNBQVE5QixFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFLEdBQUUsS0FBS3VKLE9BQUEsQ0FBUTFELGdCQUFBLENBQWlCLFlBQVkvRixFQUFBLElBQUc7TUFBQyxNQUFLLENBQUNDLEVBQUEsRUFBRUMsRUFBQyxJQUFFSCxFQUFBLENBQUVDLEVBQUM7TUFBRSxLQUFLK0IsSUFBQSxDQUFLLFlBQVc5QixFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFLEdBQUUsU0FBSyxLQUFLZ0osT0FBQSxDQUFRb0IsVUFBQSxJQUFZLFlBQVUsT0FBTyxLQUFLcEIsT0FBQSxDQUFRb0IsVUFBQSxJQUFZLEtBQUtDLFFBQUEsQ0FBUyxHQUFFLEtBQUtoQixlQUFBLENBQWdCeEQsZ0JBQUEsQ0FBaUIsVUFBVSxNQUFJO01BQUMsTUFBSztVQUFDeUUsVUFBQSxFQUFXakssRUFBQTtVQUFFa0ssV0FBQSxFQUFZekssRUFBQTtVQUFFMEssV0FBQSxFQUFZeks7UUFBQyxJQUFFLEtBQUtzSixlQUFBO1FBQWdCckosRUFBQSxHQUFFSyxFQUFBLEdBQUVQLEVBQUE7UUFBRUksRUFBQSxJQUFHRyxFQUFBLEdBQUVOLEVBQUEsSUFBR0QsRUFBQTtNQUFFLEtBQUsrQixJQUFBLENBQUssVUFBUzdCLEVBQUEsRUFBRUUsRUFBQSxFQUFFRyxFQUFBLEVBQUVBLEVBQUEsR0FBRU4sRUFBQztJQUFDLENBQUUsR0FBRSxjQUFZLE9BQU8wSyxjQUFBLEVBQWU7TUFBQyxNQUFNcEssRUFBQSxHQUFFLEtBQUtxSyxXQUFBLENBQVksR0FBRztNQUFFLEtBQUsvQixjQUFBLEdBQWUsSUFBSThCLGNBQUEsQ0FBZ0IsTUFBSTtRQUFDcEssRUFBQSxDQUFFLEVBQUVTLElBQUEsQ0FBTSxNQUFJLEtBQUs2SixpQkFBQSxDQUFrQixDQUFFLEVBQUVDLEtBQUEsQ0FBTyxNQUFJLENBQUMsQ0FBRTtNQUFDLENBQUUsR0FBRSxLQUFLakMsY0FBQSxDQUFla0MsT0FBQSxDQUFRLEtBQUt4QixlQUFlO0lBQUM7RUFBQztFQUFDc0Isa0JBQUEsRUFBbUI7SUFBQyxNQUFNOUssRUFBQSxHQUFFLEtBQUtzSixNQUFBLENBQU9xQixXQUFBO0lBQVkzSyxFQUFBLEtBQUksS0FBSytJLGtCQUFBLElBQW9CLFdBQVMsS0FBS0ksT0FBQSxDQUFRbUIsTUFBQSxLQUFTLEtBQUt2QixrQkFBQSxHQUFtQi9JLEVBQUEsRUFBRSxLQUFLaUwsUUFBQSxDQUFTO0VBQUU7RUFBQ1QsU0FBQSxFQUFVO0lBQUMsS0FBS3ZCLGFBQUEsQ0FBY2lDLElBQUEsQ0FBSyxVQUFTbEwsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFRSxFQUFBLEdBQUUsR0FBRUMsRUFBQSxHQUFFLEdBQUVDLEVBQUEsR0FBRSxLQUFJO01BQUMsSUFBRyxDQUFDUCxFQUFBLEVBQUUsT0FBTSxNQUFJLENBQUM7TUFBRSxNQUFNWSxFQUFBLEdBQUV1SyxVQUFBLENBQVcsbUJBQW1CLEVBQUVDLE9BQUE7TUFBUSxJQUFJM0ssRUFBQSxHQUFFaUksQ0FBQSxLQUFJLENBQUM7TUFBRSxNQUFNMkMsRUFBQSxHQUFFQyxFQUFBLElBQUc7UUFBQyxJQUFHQSxFQUFBLENBQUVDLE1BQUEsS0FBU2pMLEVBQUEsRUFBRTtRQUFPZ0wsRUFBQSxDQUFFRSxjQUFBLENBQWUsR0FBRUYsRUFBQSxDQUFFRyxlQUFBLENBQWdCO1FBQUUsSUFBSUMsRUFBQSxHQUFFSixFQUFBLENBQUVyQixPQUFBO1VBQVEwQixFQUFBLEdBQUVMLEVBQUEsQ0FBRW5CLE9BQUE7VUFBUXlCLEVBQUEsR0FBRTtRQUFHLE1BQU1DLENBQUEsR0FBRUMsSUFBQSxDQUFLQyxHQUFBLENBQUk7VUFBRUMsQ0FBQSxHQUFFaEgsRUFBQSxJQUFHO1lBQUMsSUFBR0EsRUFBQSxDQUFFd0csY0FBQSxDQUFlLEdBQUV4RyxFQUFBLENBQUV5RyxlQUFBLENBQWdCLEdBQUU3SyxFQUFBLElBQUdrTCxJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFFRixDQUFBLEdBQUV0TCxFQUFBLEVBQUU7WUFBTyxNQUFNMEwsRUFBQSxHQUFFakgsRUFBQSxDQUFFaUYsT0FBQTtjQUFRaUMsRUFBQSxHQUFFbEgsRUFBQSxDQUFFbUYsT0FBQTtjQUFRZ0MsRUFBQSxHQUFFRixFQUFBLEdBQUVQLEVBQUE7Y0FBRVUsRUFBQSxHQUFFRixFQUFBLEdBQUVQLEVBQUE7WUFBRSxJQUFHQyxFQUFBLElBQUdqSixJQUFBLENBQUtDLEdBQUEsQ0FBSXVKLEVBQUMsSUFBRTlMLEVBQUEsSUFBR3NDLElBQUEsQ0FBS0MsR0FBQSxDQUFJd0osRUFBQyxJQUFFL0wsRUFBQSxFQUFFO2NBQUMsTUFBTWdNLEVBQUEsR0FBRXJNLEVBQUEsQ0FBRWdLLHFCQUFBLENBQXNCO2dCQUFFO2tCQUFDRSxJQUFBLEVBQUt0RyxFQUFBO2tCQUFFd0csR0FBQSxFQUFJa0M7Z0JBQUMsSUFBRUQsRUFBQTtjQUFFVCxFQUFBLEtBQUksUUFBTTFMLEVBQUEsSUFBR0EsRUFBQSxDQUFFd0wsRUFBQSxHQUFFOUgsRUFBQSxFQUFFK0gsRUFBQSxHQUFFVyxFQUFDLEdBQUVWLEVBQUEsR0FBRSxPQUFJM0wsRUFBQSxDQUFFa00sRUFBQSxFQUFFQyxFQUFBLEVBQUVILEVBQUEsR0FBRXJJLEVBQUEsRUFBRXNJLEVBQUEsR0FBRUksRUFBQyxHQUFFWixFQUFBLEdBQUVPLEVBQUEsRUFBRU4sRUFBQSxHQUFFTyxFQUFBO1lBQUM7VUFBQztVQUFFSyxDQUFBLEdBQUV6TCxFQUFBLElBQUc7WUFBQyxJQUFHOEssRUFBQSxFQUFFO2NBQUMsTUFBTWpLLEVBQUEsR0FBRWIsRUFBQSxDQUFFbUosT0FBQTtnQkFBUXJHLEVBQUEsR0FBRTlDLEVBQUEsQ0FBRXFKLE9BQUE7Z0JBQVE4QixFQUFBLEdBQUVqTSxFQUFBLENBQUVnSyxxQkFBQSxDQUFzQjtnQkFBRTtrQkFBQ0UsSUFBQSxFQUFLb0MsRUFBQTtrQkFBRWxDLEdBQUEsRUFBSW9DO2dCQUFDLElBQUVQLEVBQUE7Y0FBRSxRQUFNOUwsRUFBQSxJQUFHQSxFQUFBLENBQUV3QixFQUFBLEdBQUUySyxFQUFBLEVBQUUxSSxFQUFBLEdBQUU0SSxFQUFDO1lBQUM7WUFBQy9MLEVBQUEsQ0FBRTtVQUFDO1VBQUVnTSxDQUFBLEdBQUVqTSxFQUFBLElBQUc7WUFBQ0EsRUFBQSxDQUFFa00sYUFBQSxJQUFlbE0sRUFBQSxDQUFFa00sYUFBQSxLQUFnQm5KLFFBQUEsQ0FBU29KLGVBQUEsSUFBaUJKLENBQUEsQ0FBRS9MLEVBQUM7VUFBQztVQUFFb00sQ0FBQSxHQUFFcE0sRUFBQSxJQUFHO1lBQUNvTCxFQUFBLEtBQUlwTCxFQUFBLENBQUVpTCxlQUFBLENBQWdCLEdBQUVqTCxFQUFBLENBQUVnTCxjQUFBLENBQWU7VUFBRTtVQUFFcUIsQ0FBQSxHQUFFck0sRUFBQSxJQUFHO1lBQUNvTCxFQUFBLElBQUdwTCxFQUFBLENBQUVnTCxjQUFBLENBQWU7VUFBQztRQUFFakksUUFBQSxDQUFTeUMsZ0JBQUEsQ0FBaUIsZUFBY2dHLENBQUMsR0FBRXpJLFFBQUEsQ0FBU3lDLGdCQUFBLENBQWlCLGFBQVl1RyxDQUFDLEdBQUVoSixRQUFBLENBQVN5QyxnQkFBQSxDQUFpQixjQUFheUcsQ0FBQyxHQUFFbEosUUFBQSxDQUFTeUMsZ0JBQUEsQ0FBaUIsaUJBQWdCeUcsQ0FBQyxHQUFFbEosUUFBQSxDQUFTeUMsZ0JBQUEsQ0FBaUIsYUFBWTZHLENBQUEsRUFBRTtVQUFDQyxPQUFBLEVBQVE7UUFBRSxDQUFDLEdBQUV2SixRQUFBLENBQVN5QyxnQkFBQSxDQUFpQixTQUFRNEcsQ0FBQSxFQUFFO1VBQUNHLE9BQUEsRUFBUTtRQUFFLENBQUMsR0FBRXRNLEVBQUEsR0FBRWlJLENBQUEsS0FBSTtVQUFDbkYsUUFBQSxDQUFTMEMsbUJBQUEsQ0FBb0IsZUFBYytGLENBQUMsR0FBRXpJLFFBQUEsQ0FBUzBDLG1CQUFBLENBQW9CLGFBQVlzRyxDQUFDLEdBQUVoSixRQUFBLENBQVMwQyxtQkFBQSxDQUFvQixjQUFhd0csQ0FBQyxHQUFFbEosUUFBQSxDQUFTMEMsbUJBQUEsQ0FBb0IsaUJBQWdCd0csQ0FBQyxHQUFFbEosUUFBQSxDQUFTMEMsbUJBQUEsQ0FBb0IsYUFBWTRHLENBQUMsR0FBRUcsVUFBQSxDQUFZLE1BQUk7WUFBQ3pKLFFBQUEsQ0FBUzBDLG1CQUFBLENBQW9CLFNBQVEyRyxDQUFBLEVBQUU7Y0FBQ0csT0FBQSxFQUFRO1lBQUUsQ0FBQztVQUFDLEdBQUcsRUFBRTtRQUFDO01BQUM7TUFBRSxPQUFPL00sRUFBQSxDQUFFZ0csZ0JBQUEsQ0FBaUIsZUFBY3FGLEVBQUMsR0FBRSxNQUFJO1FBQUM1SyxFQUFBLENBQUUsR0FBRVQsRUFBQSxDQUFFaUcsbUJBQUEsQ0FBb0IsZUFBY29GLEVBQUM7TUFBQztJQUFDLEVBQUUsS0FBSzNCLE9BQUEsRUFBUyxDQUFDMUosRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLEtBQUs4QixJQUFBLENBQUssUUFBT1csSUFBQSxDQUFLOEUsR0FBQSxDQUFJLEdBQUU5RSxJQUFBLENBQUsrRSxHQUFBLENBQUksR0FBRXhILEVBQUEsR0FBRSxLQUFLd0osT0FBQSxDQUFRTSxxQkFBQSxDQUFzQixFQUFFSyxLQUFLLENBQUMsQ0FBQztJQUFDLEdBQUlySyxFQUFBLElBQUc7TUFBQyxLQUFLZ0osVUFBQSxHQUFXLE1BQUcsS0FBS2hILElBQUEsQ0FBSyxhQUFZVyxJQUFBLENBQUs4RSxHQUFBLENBQUksR0FBRTlFLElBQUEsQ0FBSytFLEdBQUEsQ0FBSSxHQUFFMUgsRUFBQSxHQUFFLEtBQUswSixPQUFBLENBQVFNLHFCQUFBLENBQXNCLEVBQUVLLEtBQUssQ0FBQyxDQUFDO0lBQUMsR0FBSXJLLEVBQUEsSUFBRztNQUFDLEtBQUtnSixVQUFBLEdBQVcsT0FBRyxLQUFLaEgsSUFBQSxDQUFLLFdBQVVXLElBQUEsQ0FBSzhFLEdBQUEsQ0FBSSxHQUFFOUUsSUFBQSxDQUFLK0UsR0FBQSxDQUFJLEdBQUUxSCxFQUFBLEdBQUUsS0FBSzBKLE9BQUEsQ0FBUU0scUJBQUEsQ0FBc0IsRUFBRUssS0FBSyxDQUFDLENBQUM7SUFBQyxDQUFFLENBQUM7RUFBQztFQUFDNEMsVUFBVWpOLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBSUMsRUFBQTtJQUFFLE1BQU1DLEVBQUEsSUFBRyxVQUFRRCxFQUFBLEdBQUUsS0FBSzJJLFNBQUEsS0FBWSxXQUFTM0ksRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRTZDLGdCQUFBLEtBQW1CO0lBQUUsSUFBRyxRQUFNL0MsRUFBQSxFQUFFLE9BQU87SUFBSSxJQUFHLENBQUNrTixLQUFBLENBQU1oSSxNQUFBLENBQU9sRixFQUFDLENBQUMsR0FBRSxPQUFPa0YsTUFBQSxDQUFPbEYsRUFBQztJQUFFLElBQUcsV0FBU0EsRUFBQSxFQUFFO01BQUMsTUFBTVEsRUFBQSxHQUFFLEtBQUs4SSxNQUFBLENBQU82RCxZQUFBLElBQWM7TUFBSSxRQUFPLFFBQU1sTixFQUFBLEdBQUUsU0FBT0EsRUFBQSxDQUFFbU4sS0FBQSxDQUFPek0sRUFBQSxJQUFHLENBQUNBLEVBQUEsQ0FBRTBNLE9BQVEsS0FBRzdNLEVBQUEsR0FBRUwsRUFBQSxHQUFFSyxFQUFBO0lBQUM7SUFBQyxPQUFPO0VBQUc7RUFBQytJLFNBQUEsRUFBVTtJQUFDLE1BQU12SixFQUFBLEdBQUV1RCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxLQUFLO01BQUV4RCxFQUFBLEdBQUVELEVBQUEsQ0FBRXNOLFlBQUEsQ0FBYTtRQUFDQyxJQUFBLEVBQUs7TUFBTSxDQUFDO01BQUVyTixFQUFBLEdBQUUsS0FBS2lKLE9BQUEsQ0FBUXFFLFFBQUEsSUFBVSxZQUFVLE9BQU8sS0FBS3JFLE9BQUEsQ0FBUXFFLFFBQUEsR0FBUyxLQUFLckUsT0FBQSxDQUFRcUUsUUFBQSxDQUFTQyxPQUFBLENBQVEsTUFBSyxFQUFFLElBQUU7SUFBRyxPQUFPeE4sRUFBQSxDQUFFeU4sU0FBQSxHQUFVO0FBQUEsY0FBaUJ4TixFQUFBLEdBQUUsV0FBV0EsRUFBQSxNQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBa3VCLEtBQUsrTSxTQUFBLENBQVUsS0FBSzlELE9BQUEsQ0FBUW1CLE1BQUEsRUFBTyxLQUFLbkIsT0FBQSxDQUFRd0UsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwakMsQ0FBQzNOLEVBQUEsRUFBRUMsRUFBQztFQUFDO0VBQUMyTixXQUFXNU4sRUFBQSxFQUFFO0lBQUMsSUFBRyxLQUFLbUosT0FBQSxDQUFRRSxTQUFBLEtBQVlySixFQUFBLENBQUVxSixTQUFBLEVBQVU7TUFBQyxNQUFNcEosRUFBQSxHQUFFLEtBQUttSiwwQkFBQSxDQUEyQnBKLEVBQUEsQ0FBRXFKLFNBQVM7TUFBRXBKLEVBQUEsQ0FBRTRELFdBQUEsQ0FBWSxLQUFLd0YsU0FBUyxHQUFFLEtBQUtDLE1BQUEsR0FBT3JKLEVBQUE7SUFBQztJQUFDLFNBQUtELEVBQUEsQ0FBRXVLLFVBQUEsSUFBWSxZQUFVLE9BQU8sS0FBS3BCLE9BQUEsQ0FBUW9CLFVBQUEsSUFBWSxLQUFLQyxRQUFBLENBQVMsR0FBRSxLQUFLckIsT0FBQSxHQUFRbkosRUFBQSxFQUFFLEtBQUtpTCxRQUFBLENBQVM7RUFBQztFQUFDNEMsV0FBQSxFQUFZO0lBQUMsT0FBTyxLQUFLbkUsT0FBQTtFQUFPO0VBQUNvRSxTQUFBLEVBQVU7SUFBQyxPQUFPLEtBQUt0RSxlQUFBLENBQWdCbUIsV0FBQTtFQUFXO0VBQUNvRCxVQUFBLEVBQVc7SUFBQyxPQUFPLEtBQUt2RSxlQUFBLENBQWdCaUIsVUFBQTtFQUFVO0VBQUN1RCxVQUFVaE8sRUFBQSxFQUFFO0lBQUMsS0FBS3dKLGVBQUEsQ0FBZ0JpQixVQUFBLEdBQVd6SyxFQUFBO0VBQUM7RUFBQ2lPLG9CQUFvQmpPLEVBQUEsRUFBRTtJQUFDLE1BQUs7UUFBQzBLLFdBQUEsRUFBWXpLO01BQUMsSUFBRSxLQUFLdUosZUFBQTtNQUFnQnRKLEVBQUEsR0FBRUQsRUFBQSxHQUFFRCxFQUFBO0lBQUUsS0FBS2dPLFNBQUEsQ0FBVTlOLEVBQUM7RUFBQztFQUFDNEcsUUFBQSxFQUFTO0lBQUMsSUFBSTlHLEVBQUEsRUFBRUMsRUFBQTtJQUFFLEtBQUtnSixhQUFBLENBQWNoSCxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFLEdBQUUsS0FBSzZJLFNBQUEsQ0FBVXJDLE1BQUEsQ0FBTyxHQUFFLFVBQVFoSCxFQUFBLEdBQUUsS0FBSzhJLGNBQUEsS0FBaUIsV0FBUzlJLEVBQUEsSUFBR0EsRUFBQSxDQUFFa08sVUFBQSxDQUFXLEdBQUUsVUFBUWpPLEVBQUEsR0FBRSxLQUFLaUosbUJBQUEsS0FBc0IsV0FBU2pKLEVBQUEsSUFBR0EsRUFBQSxDQUFFZ0MsT0FBQSxDQUFTekIsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRSxHQUFFLEtBQUswSSxtQkFBQSxHQUFvQixFQUFDO0VBQUM7RUFBQzJCLFlBQVk3SyxFQUFBLEdBQUUsSUFBRztJQUFDLElBQUlDLEVBQUEsRUFBRUMsRUFBQTtJQUFFLE1BQU1DLEVBQUEsR0FBRWtELENBQUEsS0FBSTtNQUFDcEQsRUFBQSxJQUFHa08sWUFBQSxDQUFhbE8sRUFBQyxHQUFFQyxFQUFBLElBQUdBLEVBQUEsQ0FBRTtJQUFDO0lBQUUsT0FBTyxLQUFLeUksUUFBQSxDQUFTdUMsSUFBQSxDQUFLL0ssRUFBQyxHQUFFLE1BQUksSUFBSUMsT0FBQSxDQUFTLENBQUNDLEVBQUEsRUFBRUMsRUFBQSxLQUFJO01BQUNILEVBQUEsQ0FBRSxHQUFFRCxFQUFBLEdBQUVJLEVBQUEsRUFBRUwsRUFBQSxHQUFFK00sVUFBQSxDQUFZLE1BQUk7UUFBQy9NLEVBQUEsR0FBRSxRQUFPQyxFQUFBLEdBQUUsUUFBT0csRUFBQSxDQUFFO01BQUMsR0FBR0wsRUFBQztJQUFDLENBQUU7RUFBQztFQUFDb08sbUJBQW1CcE8sRUFBQSxFQUFFO0lBQUMsSUFBRyxDQUFDcU8sS0FBQSxDQUFNQyxPQUFBLENBQVF0TyxFQUFDLEdBQUUsT0FBT0EsRUFBQSxJQUFHO0lBQUcsSUFBR0EsRUFBQSxDQUFFMEMsTUFBQSxHQUFPLEdBQUUsT0FBTzFDLEVBQUEsQ0FBRSxNQUFJO0lBQUcsTUFBTUMsRUFBQSxHQUFFc0QsUUFBQSxDQUFTRSxhQUFBLENBQWMsUUFBUTtNQUFFdkQsRUFBQSxHQUFFRCxFQUFBLENBQUVzTyxVQUFBLENBQVcsSUFBSTtNQUFFcE8sRUFBQSxHQUFFRixFQUFBLENBQUVxSyxNQUFBLElBQVFrRSxNQUFBLENBQU9DLGdCQUFBLElBQWtCO01BQUdwTyxFQUFBLEdBQUVILEVBQUEsQ0FBRXdPLG9CQUFBLENBQXFCLEdBQUUsR0FBRSxHQUFFdk8sRUFBQztNQUFFRyxFQUFBLEdBQUUsS0FBR04sRUFBQSxDQUFFMEMsTUFBQSxHQUFPO0lBQUcsT0FBTzFDLEVBQUEsQ0FBRWlDLE9BQUEsQ0FBUyxDQUFDekIsRUFBQSxFQUFFTSxFQUFBLEtBQUk7TUFBQyxNQUFNYSxFQUFBLEdBQUViLEVBQUEsR0FBRVIsRUFBQTtNQUFFRCxFQUFBLENBQUVzTyxZQUFBLENBQWFoTixFQUFBLEVBQUVuQixFQUFDO0lBQUMsQ0FBRSxHQUFFSCxFQUFBO0VBQUM7RUFBQ3VPLGNBQUEsRUFBZTtJQUFDLE9BQU9qTSxJQUFBLENBQUs4RSxHQUFBLENBQUksR0FBRStHLE1BQUEsQ0FBT0MsZ0JBQUEsSUFBa0IsQ0FBQztFQUFDO0VBQUNJLGtCQUFrQjdPLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLE1BQU1FLEVBQUEsR0FBRUwsRUFBQSxDQUFFO01BQUdNLEVBQUEsR0FBRU4sRUFBQSxDQUFFLE1BQUlBLEVBQUEsQ0FBRTtNQUFHTyxFQUFBLEdBQUVGLEVBQUEsQ0FBRXFDLE1BQUE7TUFBTztRQUFDMkgsS0FBQSxFQUFNekosRUFBQTtRQUFFMEosTUFBQSxFQUFPN0o7TUFBQyxJQUFFUCxFQUFBLENBQUU0TyxNQUFBO01BQU96RCxFQUFBLEdBQUU1SyxFQUFBLEdBQUU7TUFBRWlMLEVBQUEsR0FBRSxLQUFLa0QsYUFBQSxDQUFjO01BQUVqRCxFQUFBLEdBQUUxTCxFQUFBLENBQUU4TyxRQUFBLEdBQVM5TyxFQUFBLENBQUU4TyxRQUFBLEdBQVNyRCxFQUFBLEdBQUU7TUFBRUUsRUFBQSxHQUFFM0wsRUFBQSxDQUFFK08sTUFBQSxHQUFPL08sRUFBQSxDQUFFK08sTUFBQSxHQUFPdEQsRUFBQSxHQUFFekwsRUFBQSxDQUFFOE8sUUFBQSxHQUFTcEQsRUFBQSxHQUFFLElBQUU7TUFBRUUsQ0FBQSxHQUFFNUwsRUFBQSxDQUFFZ1AsU0FBQSxJQUFXO01BQUVqRCxDQUFBLEdBQUVwTCxFQUFBLElBQUcrSyxFQUFBLEdBQUVDLEVBQUEsSUFBR3JMLEVBQUE7TUFBRWdNLENBQUEsR0FBRVYsQ0FBQSxJQUFHLGVBQWMzTCxFQUFBLEdBQUUsY0FBWTtJQUFPQSxFQUFBLENBQUVnUCxTQUFBLENBQVU7SUFBRSxJQUFJekMsQ0FBQSxHQUFFO01BQUVHLENBQUEsR0FBRTtNQUFFQyxDQUFBLEdBQUU7SUFBRSxTQUFRck0sRUFBQSxHQUFFLEdBQUVBLEVBQUEsSUFBR0QsRUFBQSxFQUFFQyxFQUFBLElBQUk7TUFBQyxNQUFNOEwsRUFBQSxHQUFFM0osSUFBQSxDQUFLeUMsS0FBQSxDQUFNNUUsRUFBQSxHQUFFd0wsQ0FBQztNQUFFLElBQUdNLEVBQUEsR0FBRUcsQ0FBQSxFQUFFO1FBQUMsTUFBTTlMLEVBQUEsR0FBRWdDLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTXdILENBQUEsR0FBRXZCLEVBQUEsR0FBRWxMLEVBQUM7VUFBRXlELEVBQUEsR0FBRWpELEVBQUEsR0FBRWdDLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTXlILENBQUEsR0FBRXhCLEVBQUEsR0FBRWxMLEVBQUMsS0FBRztRQUFFLElBQUk4TCxFQUFBLEdBQUVaLEVBQUEsR0FBRTFLLEVBQUE7UUFBRSxVQUFRVixFQUFBLENBQUVrUCxRQUFBLEdBQVNsRCxFQUFBLEdBQUUsSUFBRSxhQUFXaE0sRUFBQSxDQUFFa1AsUUFBQSxLQUFXbEQsRUFBQSxHQUFFeEwsRUFBQSxHQUFFbUQsRUFBQSxHQUFHMUQsRUFBQSxDQUFFcU0sQ0FBQSxFQUFHRSxDQUFBLElBQUdkLEVBQUEsR0FBRUMsRUFBQSxHQUFHSyxFQUFBLEVBQUVOLEVBQUEsRUFBRS9ILEVBQUEsRUFBRWlJLENBQUMsR0FBRVksQ0FBQSxHQUFFSCxFQUFBLEVBQUVNLENBQUEsR0FBRSxHQUFFQyxDQUFBLEdBQUU7TUFBQztNQUFDLE1BQU1MLEVBQUEsR0FBRTdKLElBQUEsQ0FBS0MsR0FBQSxDQUFJdkMsRUFBQSxDQUFFRyxFQUFBLEtBQUksQ0FBQztRQUFFNE8sRUFBQSxHQUFFek0sSUFBQSxDQUFLQyxHQUFBLENBQUl0QyxFQUFBLENBQUVFLEVBQUEsS0FBSSxDQUFDO01BQUVnTSxFQUFBLEdBQUVJLENBQUEsS0FBSUEsQ0FBQSxHQUFFSixFQUFBLEdBQUc0QyxFQUFBLEdBQUV2QyxDQUFBLEtBQUlBLENBQUEsR0FBRXVDLEVBQUE7SUFBRTtJQUFDbFAsRUFBQSxDQUFFbVAsSUFBQSxDQUFLLEdBQUVuUCxFQUFBLENBQUVvUCxTQUFBLENBQVU7RUFBQztFQUFDQyxtQkFBbUJ2UCxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxNQUFNRSxFQUFBLEdBQUVTLEVBQUEsSUFBRztNQUFDLE1BQU04QyxFQUFBLEdBQUU1RCxFQUFBLENBQUVjLEVBQUEsS0FBSWQsRUFBQSxDQUFFO1FBQUdNLEVBQUEsR0FBRXNELEVBQUEsQ0FBRWxCLE1BQUE7UUFBTztVQUFDNEgsTUFBQSxFQUFPL0o7UUFBQyxJQUFFTCxFQUFBLENBQUU0TyxNQUFBO1FBQU9sTyxFQUFBLEdBQUVMLEVBQUEsR0FBRTtRQUFFRSxFQUFBLEdBQUVQLEVBQUEsQ0FBRTRPLE1BQUEsQ0FBT3pFLEtBQUEsR0FBTS9KLEVBQUE7TUFBRUosRUFBQSxDQUFFc1AsTUFBQSxDQUFPLEdBQUU1TyxFQUFDO01BQUUsSUFBSXlLLEVBQUEsR0FBRTtRQUFFSyxFQUFBLEdBQUU7TUFBRSxTQUFRbEwsRUFBQSxHQUFFLEdBQUVBLEVBQUEsSUFBR0YsRUFBQSxFQUFFRSxFQUFBLElBQUk7UUFBQyxNQUFNeUwsRUFBQSxHQUFFdEosSUFBQSxDQUFLeUMsS0FBQSxDQUFNNUUsRUFBQSxHQUFFQyxFQUFDO1FBQUUsSUFBR3dMLEVBQUEsR0FBRVosRUFBQSxFQUFFO1VBQUMsTUFBTTFLLEVBQUEsR0FBRUMsRUFBQSxJQUFHK0IsSUFBQSxDQUFLeUMsS0FBQSxDQUFNc0csRUFBQSxHQUFFOUssRUFBQSxHQUFFVCxFQUFDLEtBQUcsTUFBSSxNQUFJVyxFQUFBLEdBQUUsS0FBRztVQUFHWixFQUFBLENBQUV1UCxNQUFBLENBQU9wRSxFQUFBLEVBQUUxSyxFQUFDLEdBQUUwSyxFQUFBLEdBQUVZLEVBQUEsRUFBRVAsRUFBQSxHQUFFO1FBQUM7UUFBQyxNQUFNWSxFQUFBLEdBQUUzSixJQUFBLENBQUtDLEdBQUEsQ0FBSWdCLEVBQUEsQ0FBRXBELEVBQUEsS0FBSSxDQUFDO1FBQUU4TCxFQUFBLEdBQUVaLEVBQUEsS0FBSUEsRUFBQSxHQUFFWSxFQUFBO01BQUU7TUFBQ3BNLEVBQUEsQ0FBRXVQLE1BQUEsQ0FBT3BFLEVBQUEsRUFBRXpLLEVBQUM7SUFBQztJQUFFVixFQUFBLENBQUVnUCxTQUFBLENBQVUsR0FBRTdPLEVBQUEsQ0FBRSxDQUFDLEdBQUVBLEVBQUEsQ0FBRSxDQUFDLEdBQUVILEVBQUEsQ0FBRW1QLElBQUEsQ0FBSyxHQUFFblAsRUFBQSxDQUFFb1AsU0FBQSxDQUFVO0VBQUM7RUFBQ0ksZUFBZTFQLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxJQUFHQSxFQUFBLENBQUV5UCxTQUFBLEdBQVUsS0FBS3ZCLGtCQUFBLENBQW1Cbk8sRUFBQSxDQUFFMlAsU0FBUyxHQUFFM1AsRUFBQSxDQUFFNFAsY0FBQSxFQUFlLE9BQU8sS0FBSzVQLEVBQUEsQ0FBRTRQLGNBQUEsQ0FBZTdQLEVBQUEsRUFBRUUsRUFBQztJQUFFLElBQUlDLEVBQUEsR0FBRUYsRUFBQSxDQUFFNlAsU0FBQSxJQUFXO0lBQUUsSUFBRzdQLEVBQUEsQ0FBRThQLFNBQUEsRUFBVTtNQUFDLE1BQU1qUCxFQUFBLEdBQUV1TixLQUFBLENBQU0yQixJQUFBLENBQUtoUSxFQUFBLENBQUUsRUFBRSxFQUFFaVEsTUFBQSxDQUFRLENBQUN6UCxFQUFBLEVBQUVxQyxFQUFBLEtBQUlGLElBQUEsQ0FBSzhFLEdBQUEsQ0FBSWpILEVBQUEsRUFBRW1DLElBQUEsQ0FBS0MsR0FBQSxDQUFJQyxFQUFDLENBQUMsR0FBRyxDQUFDO01BQUUxQyxFQUFBLEdBQUVXLEVBQUEsR0FBRSxJQUFFQSxFQUFBLEdBQUU7SUFBQztJQUFDYixFQUFBLENBQUU4TyxRQUFBLElBQVU5TyxFQUFBLENBQUUrTyxNQUFBLElBQVEvTyxFQUFBLENBQUVrUCxRQUFBLEdBQVMsS0FBS04saUJBQUEsQ0FBa0I3TyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFDLElBQUUsS0FBS29QLGtCQUFBLENBQW1CdlAsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQztFQUFDO0VBQUMrUCxtQkFBbUJsUSxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVFLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxNQUFNSyxFQUFBLEdBQUUsS0FBS2dPLGFBQUEsQ0FBYztNQUFFbk8sRUFBQSxHQUFFOEMsUUFBQSxDQUFTRSxhQUFBLENBQWMsUUFBUTtJQUFFaEQsRUFBQSxDQUFFNEosS0FBQSxHQUFNMUgsSUFBQSxDQUFLeUMsS0FBQSxDQUFNbEYsRUFBQSxHQUFFVSxFQUFDLEdBQUVILEVBQUEsQ0FBRTZKLE1BQUEsR0FBTzNILElBQUEsQ0FBS3lDLEtBQUEsQ0FBTWpGLEVBQUEsR0FBRVMsRUFBQyxHQUFFSCxFQUFBLENBQUV1RCxLQUFBLENBQU1xRyxLQUFBLEdBQU0sR0FBR25LLEVBQUEsTUFBTU8sRUFBQSxDQUFFdUQsS0FBQSxDQUFNc0csTUFBQSxHQUFPLEdBQUduSyxFQUFBLE1BQU1NLEVBQUEsQ0FBRXVELEtBQUEsQ0FBTWtHLElBQUEsR0FBSyxHQUFHdkgsSUFBQSxDQUFLeUMsS0FBQSxDQUFNL0UsRUFBQyxPQUFNQyxFQUFBLENBQUV1RCxXQUFBLENBQVlwRCxFQUFDO0lBQUUsTUFBTTRLLEVBQUEsR0FBRTVLLEVBQUEsQ0FBRThOLFVBQUEsQ0FBVyxJQUFJO0lBQUUsSUFBRyxLQUFLbUIsY0FBQSxDQUFlMVAsRUFBQSxFQUFFQyxFQUFBLEVBQUVvTCxFQUFDLEdBQUU1SyxFQUFBLENBQUU0SixLQUFBLEdBQU0sS0FBRzVKLEVBQUEsQ0FBRTZKLE1BQUEsR0FBTyxHQUFFO01BQUMsTUFBTTlKLEVBQUEsR0FBRUMsRUFBQSxDQUFFMFAsU0FBQSxDQUFVO1FBQUV4TyxFQUFBLEdBQUVuQixFQUFBLENBQUUrTixVQUFBLENBQVcsSUFBSTtNQUFFNU0sRUFBQSxDQUFFeU8sU0FBQSxDQUFVM1AsRUFBQSxFQUFFLEdBQUUsQ0FBQyxHQUFFa0IsRUFBQSxDQUFFME8sd0JBQUEsR0FBeUIsYUFBWTFPLEVBQUEsQ0FBRWdPLFNBQUEsR0FBVSxLQUFLdkIsa0JBQUEsQ0FBbUJuTyxFQUFBLENBQUVxUSxhQUFhLEdBQUUzTyxFQUFBLENBQUU0TyxRQUFBLENBQVMsR0FBRSxHQUFFOVAsRUFBQSxDQUFFNEosS0FBQSxFQUFNNUosRUFBQSxDQUFFNkosTUFBTSxHQUFFL0osRUFBQSxDQUFFc0QsV0FBQSxDQUFZckQsRUFBQztJQUFDO0VBQUM7RUFBQ2dRLGtCQUFrQnhRLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUUsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxNQUFNQyxFQUFBLEdBQUUsS0FBS3FPLGFBQUEsQ0FBYztNQUFFO1FBQUNqRSxXQUFBLEVBQVkvSjtNQUFDLElBQUUsS0FBSzRJLGVBQUE7TUFBZ0I2QixFQUFBLEdBQUVuTCxFQUFBLEdBQUVLLEVBQUE7SUFBRSxJQUFJbUwsRUFBQSxHQUFFL0ksSUFBQSxDQUFLK0UsR0FBQSxDQUFJZ0IsQ0FBQSxDQUFFK0gsZ0JBQUEsRUFBaUI3UCxFQUFBLEVBQUV5SyxFQUFDO01BQUVNLEVBQUEsR0FBRSxDQUFDO0lBQUUsSUFBRyxNQUFJRCxFQUFBLEVBQUU7SUFBTyxJQUFHekwsRUFBQSxDQUFFOE8sUUFBQSxJQUFVOU8sRUFBQSxDQUFFK08sTUFBQSxFQUFPO01BQUMsTUFBTXhPLEVBQUEsR0FBRVAsRUFBQSxDQUFFOE8sUUFBQSxJQUFVO1FBQUdwTixFQUFBLEdBQUVuQixFQUFBLElBQUdQLEVBQUEsQ0FBRStPLE1BQUEsSUFBUXhPLEVBQUEsR0FBRTtNQUFHa0wsRUFBQSxHQUFFL0osRUFBQSxJQUFHLE1BQUkrSixFQUFBLEdBQUUvSSxJQUFBLENBQUsrTixLQUFBLENBQU1oRixFQUFBLEdBQUUvSixFQUFDLElBQUVBLEVBQUE7SUFBRTtJQUFDLE1BQU1pSyxFQUFBLEdBQUVqSyxFQUFBLElBQUc7UUFBQyxJQUFHQSxFQUFBLEdBQUUsS0FBR0EsRUFBQSxJQUFHa0ssQ0FBQSxFQUFFO1FBQU8sSUFBR0YsRUFBQSxDQUFFaEssRUFBQSxHQUFHO1FBQU9nSyxFQUFBLENBQUVoSyxFQUFBLElBQUc7UUFBRyxNQUFNMkssRUFBQSxHQUFFM0ssRUFBQSxHQUFFK0osRUFBQTtVQUFFYyxFQUFBLEdBQUU3SixJQUFBLENBQUsrRSxHQUFBLENBQUkyRCxFQUFBLEdBQUVpQixFQUFBLEVBQUVaLEVBQUM7UUFBRSxJQUFHYyxFQUFBLElBQUcsR0FBRTtRQUFPLE1BQU0vTCxFQUFBLEdBQUVULEVBQUEsQ0FBRTJRLEdBQUEsQ0FBS25RLEVBQUEsSUFBRztVQUFDLE1BQU1NLEVBQUEsR0FBRTZCLElBQUEsQ0FBSytOLEtBQUEsQ0FBTXBFLEVBQUEsR0FBRWpCLEVBQUEsR0FBRTdLLEVBQUEsQ0FBRWtDLE1BQU07WUFBRWtPLEVBQUEsR0FBRWpPLElBQUEsQ0FBSytOLEtBQUEsRUFBT3BFLEVBQUEsR0FBRUUsRUFBQSxJQUFHbkIsRUFBQSxHQUFFN0ssRUFBQSxDQUFFa0MsTUFBTTtVQUFFLE9BQU9sQyxFQUFBLENBQUVxUSxLQUFBLENBQU0vUCxFQUFBLEVBQUU4UCxFQUFDO1FBQUMsQ0FBRTtRQUFFLEtBQUtWLGtCQUFBLENBQW1CelAsRUFBQSxFQUFFUixFQUFBLEVBQUV1TSxFQUFBLEVBQUVyTSxFQUFBLEVBQUVtTSxFQUFBLEVBQUVqTSxFQUFBLEVBQUVDLEVBQUM7TUFBQztNQUFFdUwsQ0FBQSxHQUFFbEosSUFBQSxDQUFLbU8sSUFBQSxDQUFLekYsRUFBQSxHQUFFSyxFQUFDO0lBQUUsSUFBRyxDQUFDLEtBQUs5QyxZQUFBLEVBQWE7TUFBQyxTQUFRcEksRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRXFMLENBQUEsRUFBRXJMLEVBQUEsSUFBSW9MLEVBQUEsQ0FBRXBMLEVBQUM7TUFBRTtJQUFNO0lBQUMsTUFBTXdMLENBQUEsR0FBRSxLQUFLeEMsZUFBQSxDQUFnQmlCLFVBQUEsR0FBV1ksRUFBQTtNQUFFa0IsQ0FBQSxHQUFFNUosSUFBQSxDQUFLK04sS0FBQSxDQUFNMUUsQ0FBQSxHQUFFSCxDQUFDO0lBQUUsSUFBR0QsRUFBQSxDQUFFVyxDQUFBLEdBQUUsQ0FBQyxHQUFFWCxFQUFBLENBQUVXLENBQUMsR0FBRVgsRUFBQSxDQUFFVyxDQUFBLEdBQUUsQ0FBQyxHQUFFVixDQUFBLEdBQUUsR0FBRTtNQUFDLE1BQU1yTCxFQUFBLEdBQUUsS0FBS2UsRUFBQSxDQUFHLFVBQVUsTUFBSTtRQUFDLE1BQUs7WUFBQ2tKLFVBQUEsRUFBVzlKO1VBQUMsSUFBRSxLQUFLNkksZUFBQTtVQUFnQjFJLEVBQUEsR0FBRTZCLElBQUEsQ0FBSytOLEtBQUEsQ0FBTS9QLEVBQUEsR0FBRTBLLEVBQUEsR0FBRVEsQ0FBQztRQUFFbkksTUFBQSxDQUFPcU4sSUFBQSxDQUFLcEYsRUFBQyxFQUFFakosTUFBQSxHQUFPZ0csQ0FBQSxDQUFFc0ksU0FBQSxLQUFZM1EsRUFBQSxDQUFFcU4sU0FBQSxHQUFVLElBQUdwTixFQUFBLENBQUVvTixTQUFBLEdBQVUsSUFBRy9CLEVBQUEsR0FBRSxDQUFDLElBQUdDLEVBQUEsQ0FBRTlLLEVBQUEsR0FBRSxDQUFDLEdBQUU4SyxFQUFBLENBQUU5SyxFQUFDLEdBQUU4SyxFQUFBLENBQUU5SyxFQUFBLEdBQUUsQ0FBQztNQUFDLENBQUU7TUFBRSxLQUFLb0ksbUJBQUEsQ0FBb0JnQyxJQUFBLENBQUsxSyxFQUFDO0lBQUM7RUFBQztFQUFDeVEsY0FBY2pSLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLElBQUc7UUFBQ2tOLE9BQUEsRUFBUWhOO01BQUMsSUFBRUosRUFBQTtNQUFFSyxFQUFBLEdBQUUsVUFBU0UsRUFBQSxFQUFFTSxFQUFBLEVBQUU7UUFBQyxJQUFJYSxFQUFBLEdBQUUsQ0FBQztRQUFFLFNBQVFxRCxFQUFBLElBQUt4RSxFQUFBLEVBQUVrRCxNQUFBLENBQU9QLFNBQUEsQ0FBVStOLGNBQUEsQ0FBZUMsSUFBQSxDQUFLM1EsRUFBQSxFQUFFd0UsRUFBQyxLQUFHbEUsRUFBQSxDQUFFc1EsT0FBQSxDQUFRcE0sRUFBQyxJQUFFLE1BQUlyRCxFQUFBLENBQUVxRCxFQUFBLElBQUd4RSxFQUFBLENBQUV3RSxFQUFBO1FBQUksSUFBRyxRQUFNeEUsRUFBQSxJQUFHLGNBQVksT0FBT2tELE1BQUEsQ0FBTzJOLHFCQUFBLEVBQXNCO1VBQUMsSUFBSXpOLEVBQUEsR0FBRTtVQUFFLEtBQUlvQixFQUFBLEdBQUV0QixNQUFBLENBQU8yTixxQkFBQSxDQUFzQjdRLEVBQUMsR0FBRW9ELEVBQUEsR0FBRW9CLEVBQUEsQ0FBRXRDLE1BQUEsRUFBT2tCLEVBQUEsSUFBSTlDLEVBQUEsQ0FBRXNRLE9BQUEsQ0FBUXBNLEVBQUEsQ0FBRXBCLEVBQUEsQ0FBRSxJQUFFLEtBQUdGLE1BQUEsQ0FBT1AsU0FBQSxDQUFVbU8sb0JBQUEsQ0FBcUJILElBQUEsQ0FBSzNRLEVBQUEsRUFBRXdFLEVBQUEsQ0FBRXBCLEVBQUEsQ0FBRSxNQUFJakMsRUFBQSxDQUFFcUQsRUFBQSxDQUFFcEIsRUFBQSxLQUFJcEQsRUFBQSxDQUFFd0UsRUFBQSxDQUFFcEIsRUFBQTtRQUFJO1FBQUMsT0FBT2pDLEVBQUE7TUFBQyxFQUFFMUIsRUFBQSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQUUsTUFBTU0sRUFBQSxHQUFFZ0QsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztNQUFFN0MsRUFBQSxHQUFFLEtBQUtxTSxTQUFBLENBQVUzTSxFQUFBLENBQUVnSyxNQUFBLEVBQU9oSyxFQUFBLENBQUVxTixhQUFhO0lBQUVwTixFQUFBLENBQUV5RCxLQUFBLENBQU1zRyxNQUFBLEdBQU8sR0FBRzFKLEVBQUEsTUFBTVAsRUFBQSxJQUFHRixFQUFBLEdBQUUsTUFBSUksRUFBQSxDQUFFeUQsS0FBQSxDQUFNdU4sU0FBQSxHQUFVLElBQUkzUSxFQUFBLE9BQU8sS0FBSytJLGFBQUEsQ0FBYzNGLEtBQUEsQ0FBTXdOLFNBQUEsR0FBVSxHQUFHNVEsRUFBQSxNQUFNLEtBQUsrSSxhQUFBLENBQWM5RixXQUFBLENBQVl0RCxFQUFDO0lBQUUsTUFBTUUsRUFBQSxHQUFFRixFQUFBLENBQUU0UCxTQUFBLENBQVU7SUFBRSxLQUFLdkcsZUFBQSxDQUFnQi9GLFdBQUEsQ0FBWXBELEVBQUMsR0FBRSxLQUFLK1AsaUJBQUEsQ0FBa0J4USxFQUFBLEVBQUVNLEVBQUEsRUFBRUosRUFBQSxFQUFFVSxFQUFBLEVBQUVMLEVBQUEsRUFBRUUsRUFBQztFQUFDO0VBQUNnUixPQUFPeFIsRUFBQSxFQUFFO0lBQUMsT0FBT0YsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxJQUFJQyxFQUFBO01BQUUsS0FBSzJJLFFBQUEsQ0FBUzFHLE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUUsR0FBRSxLQUFLbUksUUFBQSxHQUFTLEVBQUMsRUFBRSxLQUFLZ0IsYUFBQSxDQUFjK0QsU0FBQSxHQUFVLElBQUcsS0FBSzlELGVBQUEsQ0FBZ0I4RCxTQUFBLEdBQVUsSUFBRyxRQUFNLEtBQUt2RSxPQUFBLENBQVFrQixLQUFBLEtBQVEsS0FBS2IsZUFBQSxDQUFnQnhGLEtBQUEsQ0FBTXFHLEtBQUEsR0FBTSxZQUFVLE9BQU8sS0FBS2xCLE9BQUEsQ0FBUWtCLEtBQUEsR0FBTSxHQUFHLEtBQUtsQixPQUFBLENBQVFrQixLQUFBLE9BQVUsS0FBS2xCLE9BQUEsQ0FBUWtCLEtBQUE7TUFBTyxNQUFNbkssRUFBQSxHQUFFLEtBQUswTyxhQUFBLENBQWM7UUFBRXpPLEVBQUEsR0FBRSxLQUFLcUosZUFBQSxDQUFnQm1CLFdBQUE7UUFBWXRLLEVBQUEsR0FBRXNDLElBQUEsQ0FBS21PLElBQUEsQ0FBSzdRLEVBQUEsQ0FBRTZDLFFBQUEsSUFBVSxLQUFLcUcsT0FBQSxDQUFRdUksV0FBQSxJQUFhLEVBQUU7TUFBRSxLQUFLOUksWUFBQSxHQUFhdkksRUFBQSxHQUFFRixFQUFBO01BQUUsTUFBTUcsRUFBQSxHQUFFLEtBQUs2SSxPQUFBLENBQVF3SSxVQUFBLElBQVksQ0FBQyxLQUFLL0ksWUFBQTtRQUFhckksRUFBQSxJQUFHRCxFQUFBLEdBQUVILEVBQUEsR0FBRUUsRUFBQSxJQUFHSCxFQUFBO01BQUUsSUFBRyxLQUFLd0osT0FBQSxDQUFRMUYsS0FBQSxDQUFNcUcsS0FBQSxHQUFNL0osRUFBQSxHQUFFLFNBQU8sR0FBR0QsRUFBQSxNQUFNLEtBQUttSixlQUFBLENBQWdCeEYsS0FBQSxDQUFNNE4sU0FBQSxHQUFVLEtBQUtoSixZQUFBLEdBQWEsU0FBTyxVQUFTLEtBQUtZLGVBQUEsQ0FBZ0JxSSxTQUFBLENBQVVDLE1BQUEsQ0FBTyxlQUFjLENBQUMsQ0FBQyxLQUFLM0ksT0FBQSxDQUFRNEksYUFBYSxHQUFFLEtBQUtsSSxNQUFBLENBQU83RixLQUFBLENBQU1nTyxlQUFBLEdBQWdCLEdBQUcsS0FBSzdJLE9BQUEsQ0FBUThJLFdBQUEsSUFBYSxLQUFLOUksT0FBQSxDQUFRbUgsYUFBQSxJQUFnQixLQUFLekcsTUFBQSxDQUFPN0YsS0FBQSxDQUFNcUcsS0FBQSxHQUFNLEdBQUcsS0FBS2xCLE9BQUEsQ0FBUStJLFdBQUEsTUFBZ0IsS0FBS3JKLFNBQUEsR0FBVTVJLEVBQUEsRUFBRSxLQUFLK0IsSUFBQSxDQUFLLFFBQVEsR0FBRSxLQUFLbUgsT0FBQSxDQUFRd0UsYUFBQSxFQUFjLFNBQVFoTSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFMUIsRUFBQSxDQUFFOEMsZ0JBQUEsRUFBaUJwQixFQUFBLElBQUk7UUFBQyxNQUFNcUQsRUFBQSxHQUFFdEIsTUFBQSxDQUFPSyxNQUFBLENBQU9MLE1BQUEsQ0FBT0ssTUFBQSxDQUFPLENBQUMsR0FBRSxLQUFLb0YsT0FBTyxHQUFFLFVBQVFuSixFQUFBLEdBQUUsS0FBS21KLE9BQUEsQ0FBUXdFLGFBQUEsS0FBZ0IsV0FBUzNOLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUUyQixFQUFBLENBQUU7UUFBRSxLQUFLc1AsYUFBQSxDQUFjLENBQUNoUixFQUFBLENBQUUrQyxjQUFBLENBQWVyQixFQUFDLENBQUMsR0FBRXFELEVBQUEsRUFBRXpFLEVBQUEsRUFBRW9CLEVBQUM7TUFBQyxPQUFLO1FBQUMsTUFBTW5CLEVBQUEsR0FBRSxDQUFDUCxFQUFBLENBQUUrQyxjQUFBLENBQWUsQ0FBQyxDQUFDO1FBQUUvQyxFQUFBLENBQUU4QyxnQkFBQSxHQUFpQixLQUFHdkMsRUFBQSxDQUFFMEssSUFBQSxDQUFLakwsRUFBQSxDQUFFK0MsY0FBQSxDQUFlLENBQUMsQ0FBQyxHQUFFLEtBQUtpTyxhQUFBLENBQWN6USxFQUFBLEVBQUUsS0FBSzJJLE9BQUEsRUFBUTVJLEVBQUEsRUFBRSxDQUFDO01BQUM7TUFBQ0gsT0FBQSxDQUFRK1IsT0FBQSxDQUFRLEVBQUVsUixJQUFBLENBQU0sTUFBSSxLQUFLZSxJQUFBLENBQUssVUFBVSxDQUFFO0lBQUMsQ0FBRTtFQUFDO0VBQUNpSixTQUFBLEVBQVU7SUFBQyxJQUFHLEtBQUsvQixtQkFBQSxDQUFvQmpILE9BQUEsQ0FBU3pCLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUUsR0FBRSxLQUFLMEksbUJBQUEsR0FBb0IsRUFBQyxFQUFFLENBQUMsS0FBS0wsU0FBQSxFQUFVO0lBQU8sTUFBSztRQUFDNkIsV0FBQSxFQUFZMUs7TUFBQyxJQUFFLEtBQUt3SixlQUFBO01BQWdCO1FBQUM0SSxLQUFBLEVBQU1uUztNQUFDLElBQUUsS0FBSzJKLGVBQUEsQ0FBZ0JJLHFCQUFBLENBQXNCO0lBQUUsSUFBRyxLQUFLeUgsTUFBQSxDQUFPLEtBQUs1SSxTQUFTLEdBQUUsS0FBS0QsWUFBQSxJQUFjNUksRUFBQSxLQUFJLEtBQUt3SixlQUFBLENBQWdCa0IsV0FBQSxFQUFZO01BQUMsTUFBSztRQUFDMEgsS0FBQSxFQUFNNVI7TUFBQyxJQUFFLEtBQUtvSixlQUFBLENBQWdCSSxxQkFBQSxDQUFzQjtNQUFFLElBQUk5SixFQUFBLEdBQUVNLEVBQUEsR0FBRVAsRUFBQTtNQUFFQyxFQUFBLElBQUcsR0FBRUEsRUFBQSxHQUFFQSxFQUFBLEdBQUUsSUFBRXlDLElBQUEsQ0FBSytOLEtBQUEsQ0FBTXhRLEVBQUMsSUFBRXlDLElBQUEsQ0FBS21PLElBQUEsQ0FBSzVRLEVBQUMsR0FBRUEsRUFBQSxJQUFHLEdBQUUsS0FBS3NKLGVBQUEsQ0FBZ0JpQixVQUFBLElBQVl2SyxFQUFBO0lBQUM7RUFBQztFQUFDbVMsS0FBS3JTLEVBQUEsRUFBRTtJQUFDLEtBQUttSixPQUFBLENBQVF1SSxXQUFBLEdBQVkxUixFQUFBLEVBQUUsS0FBS2lMLFFBQUEsQ0FBUztFQUFDO0VBQUNxSCxlQUFldFMsRUFBQSxFQUFFQyxFQUFBLEdBQUUsT0FBRztJQUFDLE1BQUs7UUFBQ3dLLFVBQUEsRUFBV3ZLLEVBQUE7UUFBRXdLLFdBQUEsRUFBWXZLLEVBQUE7UUFBRXdLLFdBQUEsRUFBWXRLO01BQUMsSUFBRSxLQUFLbUosZUFBQTtNQUFnQmxKLEVBQUEsR0FBRU4sRUFBQSxHQUFFRyxFQUFBO01BQUVJLEVBQUEsR0FBRUwsRUFBQTtNQUFFVSxFQUFBLEdBQUVWLEVBQUEsR0FBRUcsRUFBQTtNQUFFSSxFQUFBLEdBQUVKLEVBQUEsR0FBRTtJQUFFLElBQUcsS0FBSzJJLFVBQUEsRUFBVztNQUFDLE1BQU14SSxFQUFBLEdBQUU7TUFBR0YsRUFBQSxHQUFFRSxFQUFBLEdBQUVJLEVBQUEsR0FBRSxLQUFLNEksZUFBQSxDQUFnQmlCLFVBQUEsSUFBWWpLLEVBQUEsR0FBRUYsRUFBQSxHQUFFRSxFQUFBLEdBQUVELEVBQUEsS0FBSSxLQUFLaUosZUFBQSxDQUFnQmlCLFVBQUEsSUFBWWpLLEVBQUE7SUFBRSxPQUFLO01BQUMsQ0FBQ0YsRUFBQSxHQUFFQyxFQUFBLElBQUdELEVBQUEsR0FBRU0sRUFBQSxNQUFLLEtBQUs0SSxlQUFBLENBQWdCaUIsVUFBQSxHQUFXbkssRUFBQSxJQUFHLEtBQUs2SSxPQUFBLENBQVFvSixVQUFBLEdBQVc5UixFQUFBLEdBQUU7TUFBSSxNQUFNRCxFQUFBLEdBQUVGLEVBQUEsR0FBRUosRUFBQSxHQUFFTyxFQUFBO01BQUVSLEVBQUEsSUFBRyxLQUFLa0osT0FBQSxDQUFRb0osVUFBQSxJQUFZL1IsRUFBQSxHQUFFLE1BQUksS0FBS2dKLGVBQUEsQ0FBZ0JpQixVQUFBLElBQVk5SCxJQUFBLENBQUsrRSxHQUFBLENBQUlsSCxFQUFBLEVBQUUsRUFBRTtJQUFFO0lBQUM7TUFBQyxNQUFNQSxFQUFBLEdBQUUsS0FBS2dKLGVBQUEsQ0FBZ0JpQixVQUFBO1FBQVczSixFQUFBLEdBQUVOLEVBQUEsR0FBRUwsRUFBQTtRQUFFd0IsRUFBQSxJQUFHbkIsRUFBQSxHQUFFSCxFQUFBLElBQUdGLEVBQUE7TUFBRSxLQUFLNkIsSUFBQSxDQUFLLFVBQVNsQixFQUFBLEVBQUVhLEVBQUEsRUFBRW5CLEVBQUEsRUFBRUEsRUFBQSxHQUFFSCxFQUFDO0lBQUM7RUFBQztFQUFDbVMsZUFBZXhTLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsSUFBR2lOLEtBQUEsQ0FBTWxOLEVBQUMsR0FBRTtJQUFPLE1BQU1FLEVBQUEsR0FBRSxNQUFJRixFQUFBO0lBQUUsS0FBSzJKLGFBQUEsQ0FBYzNGLEtBQUEsQ0FBTXlPLFFBQUEsR0FBUyxXQUFXdlMsRUFBQSwyQkFBNEJBLEVBQUEsV0FBVyxLQUFLMEosZUFBQSxDQUFnQjVGLEtBQUEsQ0FBTXFHLEtBQUEsR0FBTSxHQUFHbkssRUFBQSxLQUFLLEtBQUsySixNQUFBLENBQU83RixLQUFBLENBQU1rRyxJQUFBLEdBQUssR0FBR2hLLEVBQUEsS0FBSyxLQUFLMkosTUFBQSxDQUFPN0YsS0FBQSxDQUFNME8sU0FBQSxHQUFVLGVBQWUsUUFBTS9QLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTWxGLEVBQUMsSUFBRSxLQUFLaUosT0FBQSxDQUFRK0ksV0FBQSxHQUFZLFFBQU8sS0FBS3RKLFlBQUEsSUFBYyxLQUFLTyxPQUFBLENBQVF3SixVQUFBLElBQVksS0FBS0wsY0FBQSxDQUFldFMsRUFBQSxFQUFFQyxFQUFDO0VBQUM7RUFBQzJTLFlBQVkzUyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0osQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxNQUFNQyxFQUFBLEdBQUUsS0FBSzJKLGFBQUEsQ0FBY2tKLGdCQUFBLENBQWlCLFFBQVE7TUFBRSxJQUFHLENBQUM3UyxFQUFBLENBQUUwQyxNQUFBLEVBQU8sTUFBTSxJQUFJa0MsS0FBQSxDQUFNLGtCQUFrQjtNQUFFLElBQUcsY0FBWXpFLEVBQUEsRUFBRTtRQUFDLE1BQU02RSxFQUFBLEdBQUVxSixLQUFBLENBQU0yQixJQUFBLENBQUtoUSxFQUFDLEVBQUUyUSxHQUFBLENBQUtuUSxFQUFBLElBQUdBLEVBQUEsQ0FBRXNTLFNBQUEsQ0FBVTdTLEVBQUEsRUFBRUMsRUFBQyxDQUFFO1FBQUUsT0FBT0UsT0FBQSxDQUFRK1IsT0FBQSxDQUFRbk4sRUFBQztNQUFDO01BQUMsT0FBTzVFLE9BQUEsQ0FBUTJTLEdBQUEsQ0FBSTFFLEtBQUEsQ0FBTTJCLElBQUEsQ0FBS2hRLEVBQUMsRUFBRTJRLEdBQUEsQ0FBS25RLEVBQUEsSUFBRyxJQUFJSixPQUFBLENBQVMsQ0FBQzRFLEVBQUEsRUFBRTNFLEVBQUEsS0FBSTtRQUFDRyxFQUFBLENBQUV3UyxNQUFBLENBQVFyUyxFQUFBLElBQUc7VUFBQ0EsRUFBQSxHQUFFcUUsRUFBQSxDQUFFckUsRUFBQyxJQUFFTixFQUFBLENBQUUsSUFBSXVFLEtBQUEsQ0FBTSx3QkFBd0IsQ0FBQztRQUFDLEdBQUczRSxFQUFBLEVBQUVDLEVBQUM7TUFBQyxDQUFFLENBQUUsQ0FBQztJQUFDLENBQUU7RUFBQztBQUFDO0FBQUN3SSxDQUFBLENBQUUrSCxnQkFBQSxHQUFpQixLQUFJL0gsQ0FBQSxDQUFFc0ksU0FBQSxHQUFVO0FBQUcsSUFBTWlDLENBQUEsR0FBTixjQUFnQjdSLENBQUEsQ0FBQztFQUFDQyxZQUFBLEVBQWE7SUFBQyxNQUFNLEdBQUc2UixTQUFTLEdBQUUsS0FBS0MsV0FBQSxHQUFZLE1BQUksQ0FBQztFQUFDO0VBQUNDLE1BQUEsRUFBTztJQUFDLEtBQUtELFdBQUEsR0FBWSxLQUFLNVIsRUFBQSxDQUFHLFFBQVEsTUFBSTtNQUFDOFIscUJBQUEsQ0FBdUIsTUFBSTtRQUFDLEtBQUtyUixJQUFBLENBQUssTUFBTTtNQUFDLENBQUU7SUFBQyxDQUFFLEdBQUUsS0FBS0EsSUFBQSxDQUFLLE1BQU07RUFBQztFQUFDc1IsS0FBQSxFQUFNO0lBQUMsS0FBS0gsV0FBQSxDQUFZO0VBQUM7RUFBQ3JNLFFBQUEsRUFBUztJQUFDLEtBQUtxTSxXQUFBLENBQVk7RUFBQztBQUFDO0FBQUMsSUFBTUksQ0FBQSxHQUFOLGNBQWdCblMsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEdBQUUsSUFBSW1DLFlBQUEsSUFBYTtJQUFDLE1BQU0sR0FBRSxLQUFLcVIsVUFBQSxHQUFXLE1BQUssS0FBS0MsYUFBQSxHQUFjLEdBQUUsS0FBS0MsY0FBQSxHQUFlLEdBQUUsS0FBS0MsTUFBQSxHQUFPLE9BQUcsS0FBS0MsYUFBQSxHQUFjLEdBQUUsS0FBS0MsU0FBQSxHQUFVLFFBQU8sS0FBS0MsTUFBQSxHQUFPLE1BQUssS0FBSzNOLFVBQUEsR0FBVyxJQUFHLEtBQUtrQixNQUFBLEdBQU8sTUFBRyxLQUFLME0sV0FBQSxHQUFZLE1BQUssS0FBSzFMLE9BQUEsR0FBUSxPQUFHLEtBQUt4QyxRQUFBLEdBQVMsT0FBRyxLQUFLRyxnQkFBQSxHQUFpQixLQUFLekUsRUFBQSxFQUFHLEtBQUswRSxtQkFBQSxHQUFvQixLQUFLcEUsRUFBQSxFQUFHLEtBQUttUyxZQUFBLEdBQWFoVSxFQUFBLEVBQUUsS0FBS2lVLFFBQUEsR0FBUyxLQUFLRCxZQUFBLENBQWFFLFVBQUEsQ0FBVyxHQUFFLEtBQUtELFFBQUEsQ0FBU0UsT0FBQSxDQUFRLEtBQUtILFlBQUEsQ0FBYUksV0FBVztFQUFDO0VBQUNuTixLQUFBLEVBQU07SUFBQyxPQUFPbEgsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVcsQ0FBQyxDQUFFO0VBQUM7RUFBQyxJQUFJcUcsSUFBQSxFQUFLO0lBQUMsT0FBTyxLQUFLRCxVQUFBO0VBQVU7RUFBQyxJQUFJQyxJQUFJcEcsRUFBQSxFQUFFO0lBQUMsSUFBRyxLQUFLbUcsVUFBQSxHQUFXbkcsRUFBQSxFQUFFLEtBQUs2VCxTQUFBLEdBQVUsUUFBTyxDQUFDN1QsRUFBQSxFQUFFLE9BQU8sS0FBSzhULE1BQUEsR0FBTyxNQUFLLEtBQUssS0FBSzlSLElBQUEsQ0FBSyxTQUFTO0lBQUUwQyxLQUFBLENBQU0xRSxFQUFDLEVBQUVpQixJQUFBLENBQU1oQixFQUFBLElBQUc7TUFBQyxJQUFHQSxFQUFBLENBQUUwRSxNQUFBLElBQVEsS0FBSSxNQUFNLElBQUlDLEtBQUEsQ0FBTSxtQkFBbUI1RSxFQUFBLEtBQU1DLEVBQUEsQ0FBRTBFLE1BQUEsS0FBVzFFLEVBQUEsQ0FBRTRFLFVBQUEsR0FBYTtNQUFFLE9BQU81RSxFQUFBLENBQUVvVSxXQUFBLENBQVk7SUFBQyxDQUFFLEVBQUVwVCxJQUFBLENBQU1oQixFQUFBLElBQUcsS0FBS2tHLFVBQUEsS0FBYW5HLEVBQUEsR0FBRSxPQUFLLEtBQUtnVSxZQUFBLENBQWEzUixlQUFBLENBQWdCcEMsRUFBQyxDQUFFLEVBQUVnQixJQUFBLENBQU1oQixFQUFBLElBQUc7TUFBQyxLQUFLa0csVUFBQSxLQUFhbkcsRUFBQSxLQUFJLEtBQUs4VCxNQUFBLEdBQU83VCxFQUFBLEVBQUUsS0FBSytCLElBQUEsQ0FBSyxnQkFBZ0IsR0FBRSxLQUFLQSxJQUFBLENBQUssU0FBUyxHQUFFLEtBQUs2RCxRQUFBLElBQVUsS0FBS3NCLElBQUEsQ0FBSztJQUFFLENBQUU7RUFBQztFQUFDbU4sTUFBQSxFQUFPO0lBQUMsSUFBSXRVLEVBQUE7SUFBRSxJQUFHLENBQUMsS0FBS3FILE1BQUEsRUFBTztJQUFPLEtBQUtBLE1BQUEsR0FBTyxPQUFHLFVBQVFySCxFQUFBLEdBQUUsS0FBS3dULFVBQUEsS0FBYSxXQUFTeFQsRUFBQSxJQUFHQSxFQUFBLENBQUVrTyxVQUFBLENBQVcsR0FBRSxLQUFLc0YsVUFBQSxHQUFXLEtBQUtRLFlBQUEsQ0FBYU8sa0JBQUEsQ0FBbUIsR0FBRSxLQUFLVCxNQUFBLEtBQVMsS0FBS04sVUFBQSxDQUFXTSxNQUFBLEdBQU8sS0FBS0EsTUFBQSxHQUFRLEtBQUtOLFVBQUEsQ0FBVzFOLFlBQUEsQ0FBYTlFLEtBQUEsR0FBTSxLQUFLNFMsYUFBQSxFQUFjLEtBQUtKLFVBQUEsQ0FBV1csT0FBQSxDQUFRLEtBQUtGLFFBQVE7SUFBRSxJQUFJaFUsRUFBQSxHQUFFLEtBQUt5VCxjQUFBLEdBQWUsS0FBS0UsYUFBQTtJQUFjLENBQUMzVCxFQUFBLElBQUcsS0FBSzZDLFFBQUEsSUFBVTdDLEVBQUEsR0FBRSxPQUFLQSxFQUFBLEdBQUUsR0FBRSxLQUFLeVQsY0FBQSxHQUFlLElBQUcsS0FBS0YsVUFBQSxDQUFXSixLQUFBLENBQU0sS0FBS1ksWUFBQSxDQUFheE0sV0FBQSxFQUFZdkgsRUFBQyxHQUFFLEtBQUt3VCxhQUFBLEdBQWMsS0FBS08sWUFBQSxDQUFheE0sV0FBQSxFQUFZLEtBQUtnTSxVQUFBLENBQVdnQixPQUFBLEdBQVEsTUFBSTtNQUFDLEtBQUtoTixXQUFBLElBQWEsS0FBSzFFLFFBQUEsS0FBVyxLQUFLaUUsS0FBQSxDQUFNLEdBQUUsS0FBSy9FLElBQUEsQ0FBSyxPQUFPO0lBQUU7RUFBQztFQUFDeVMsT0FBQSxFQUFRO0lBQUMsSUFBSXpVLEVBQUE7SUFBRSxLQUFLcUgsTUFBQSxHQUFPLE1BQUcsVUFBUXJILEVBQUEsR0FBRSxLQUFLd1QsVUFBQSxLQUFhLFdBQVN4VCxFQUFBLElBQUdBLEVBQUEsQ0FBRXNULElBQUEsQ0FBSyxHQUFFLEtBQUtJLGNBQUEsSUFBZ0IsS0FBS00sWUFBQSxDQUFheE0sV0FBQSxHQUFZLEtBQUtpTSxhQUFBO0VBQWE7RUFBQ3RNLEtBQUEsRUFBTTtJQUFDLE9BQU9wSCxDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLEtBQUtzSCxNQUFBLEtBQVMsS0FBS2lOLEtBQUEsQ0FBTSxHQUFFLEtBQUt0UyxJQUFBLENBQUssTUFBTTtJQUFFLENBQUU7RUFBQztFQUFDK0UsTUFBQSxFQUFPO0lBQUMsS0FBS00sTUFBQSxLQUFTLEtBQUtvTixNQUFBLENBQU8sR0FBRSxLQUFLelMsSUFBQSxDQUFLLE9BQU87RUFBRTtFQUFDMFMsT0FBTzFVLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxHQUFFLEtBQUt3SCxXQUFBO01BQVl0SCxFQUFBLEdBQUUsS0FBS3NULFVBQUE7SUFBVyxRQUFNdFQsRUFBQSxJQUFHQSxFQUFBLENBQUVvVCxJQUFBLENBQUssS0FBS1UsWUFBQSxDQUFheE0sV0FBQSxHQUFZdkgsRUFBQyxHQUFFLFFBQU1DLEVBQUEsSUFBR0EsRUFBQSxDQUFFOEYsZ0JBQUEsQ0FBaUIsU0FBUyxNQUFJO01BQUM5RixFQUFBLEtBQUksS0FBS3NULFVBQUEsS0FBYSxLQUFLQSxVQUFBLEdBQVcsTUFBSyxLQUFLek0sS0FBQSxDQUFNO0lBQUUsR0FBRztNQUFDckYsSUFBQSxFQUFLO0lBQUUsQ0FBQztFQUFDO0VBQUMrRyxVQUFVeEksRUFBQSxFQUFFO0lBQUMsT0FBT0YsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxPQUFPLEtBQUtpVSxZQUFBLENBQWF2TCxTQUFBLENBQVV4SSxFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUMsSUFBSTZGLGFBQUEsRUFBYztJQUFDLE9BQU8sS0FBSzhOLGFBQUE7RUFBYTtFQUFDLElBQUk5TixhQUFhOUYsRUFBQSxFQUFFO0lBQUMsS0FBSzRULGFBQUEsR0FBYzVULEVBQUEsRUFBRSxLQUFLd1QsVUFBQSxLQUFhLEtBQUtBLFVBQUEsQ0FBVzFOLFlBQUEsQ0FBYTlFLEtBQUEsR0FBTWhCLEVBQUE7RUFBRTtFQUFDLElBQUl3SCxZQUFBLEVBQWE7SUFBQyxRQUFPLEtBQUtILE1BQUEsR0FBTyxLQUFLcU0sY0FBQSxHQUFlLEtBQUtBLGNBQUEsSUFBZ0IsS0FBS00sWUFBQSxDQUFheE0sV0FBQSxHQUFZLEtBQUtpTSxhQUFBLEtBQWdCLEtBQUtHLGFBQUE7RUFBYTtFQUFDLElBQUlwTSxZQUFZeEgsRUFBQSxFQUFFO0lBQUMsTUFBTUMsRUFBQSxHQUFFLENBQUMsS0FBS29ILE1BQUE7SUFBT3BILEVBQUEsSUFBRyxLQUFLd1UsTUFBQSxDQUFPLEdBQUUsS0FBS2YsY0FBQSxHQUFlMVQsRUFBQSxHQUFFLEtBQUs0VCxhQUFBLEVBQWMzVCxFQUFBLElBQUcsS0FBS3FVLEtBQUEsQ0FBTSxHQUFFLEtBQUt0UyxJQUFBLENBQUssU0FBUyxHQUFFLEtBQUtBLElBQUEsQ0FBSyxZQUFZO0VBQUM7RUFBQyxJQUFJYyxTQUFBLEVBQVU7SUFBQyxJQUFJOUMsRUFBQSxFQUFFQyxFQUFBO0lBQUUsT0FBTyxVQUFRRCxFQUFBLEdBQUUsS0FBSzZULFNBQUEsS0FBWSxXQUFTN1QsRUFBQSxHQUFFQSxFQUFBLElBQUcsVUFBUUMsRUFBQSxHQUFFLEtBQUs2VCxNQUFBLEtBQVMsV0FBUzdULEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUU2QyxRQUFBLEtBQVc7RUFBQztFQUFDLElBQUlBLFNBQVM5QyxFQUFBLEVBQUU7SUFBQyxLQUFLNlQsU0FBQSxHQUFVN1QsRUFBQTtFQUFDO0VBQUMsSUFBSThILE9BQUEsRUFBUTtJQUFDLE9BQU8sS0FBS21NLFFBQUEsQ0FBU1UsSUFBQSxDQUFLM1QsS0FBQTtFQUFLO0VBQUMsSUFBSThHLE9BQU85SCxFQUFBLEVBQUU7SUFBQyxLQUFLaVUsUUFBQSxDQUFTVSxJQUFBLENBQUszVCxLQUFBLEdBQU1oQixFQUFBLEVBQUUsS0FBS2dDLElBQUEsQ0FBSyxjQUFjO0VBQUM7RUFBQyxJQUFJaUcsTUFBQSxFQUFPO0lBQUMsT0FBTyxLQUFLMEwsTUFBQTtFQUFNO0VBQUMsSUFBSTFMLE1BQU1qSSxFQUFBLEVBQUU7SUFBQyxLQUFLMlQsTUFBQSxLQUFTM1QsRUFBQSxLQUFJLEtBQUsyVCxNQUFBLEdBQU8zVCxFQUFBLEVBQUUsS0FBSzJULE1BQUEsR0FBTyxLQUFLTSxRQUFBLENBQVMvRixVQUFBLENBQVcsSUFBRSxLQUFLK0YsUUFBQSxDQUFTRSxPQUFBLENBQVEsS0FBS0gsWUFBQSxDQUFhSSxXQUFXO0VBQUU7RUFBQzNOLFlBQVl6RyxFQUFBLEVBQUU7SUFBQyxPQUFNLG1CQUFtQjRVLElBQUEsQ0FBSzVVLEVBQUM7RUFBQztFQUFDNlUsWUFBQSxFQUFhO0lBQUMsT0FBTyxLQUFLWixRQUFBO0VBQVE7RUFBQ2pSLGVBQUEsRUFBZ0I7SUFBQyxNQUFNaEQsRUFBQSxHQUFFLEVBQUM7SUFBRSxJQUFHLENBQUMsS0FBSzhULE1BQUEsRUFBTyxPQUFPOVQsRUFBQTtJQUFFLE1BQU1DLEVBQUEsR0FBRSxLQUFLNlQsTUFBQSxDQUFPL1EsZ0JBQUE7SUFBaUIsU0FBUTdDLEVBQUEsR0FBRSxHQUFFQSxFQUFBLEdBQUVELEVBQUEsRUFBRUMsRUFBQSxJQUFJRixFQUFBLENBQUVrTCxJQUFBLENBQUssS0FBSzRJLE1BQUEsQ0FBTzlRLGNBQUEsQ0FBZTlDLEVBQUMsQ0FBQztJQUFFLE9BQU9GLEVBQUE7RUFBQztBQUFDO0FBQUMsSUFBTThVLENBQUEsR0FBRTtFQUFDbEYsU0FBQSxFQUFVO0VBQU9VLGFBQUEsRUFBYztFQUFPNEIsV0FBQSxFQUFZO0VBQUVSLFdBQUEsRUFBWTtFQUFFQyxVQUFBLEVBQVc7RUFBR29ELFFBQUEsRUFBUztFQUFHeEssVUFBQSxFQUFXO0VBQUdvSSxVQUFBLEVBQVc7RUFBR0osVUFBQSxFQUFXO0VBQUduUSxVQUFBLEVBQVc7QUFBRztBQUFFLElBQU00UyxDQUFBLEdBQU4sY0FBZ0IzUCxDQUFBLENBQUM7RUFBQyxPQUFPNFAsT0FBT2pWLEVBQUEsRUFBRTtJQUFDLE9BQU8sSUFBSWdWLENBQUEsQ0FBRWhWLEVBQUM7RUFBQztFQUFDcUIsWUFBWXJCLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxDQUFFMEYsS0FBQSxLQUFRLGVBQWExRixFQUFBLENBQUVrVixPQUFBLEdBQVEsSUFBSTNCLENBQUEsS0FBRTtJQUFRLE1BQU07TUFBQzdOLEtBQUEsRUFBTXpGLEVBQUE7TUFBRTBGLGFBQUEsRUFBYzNGLEVBQUEsQ0FBRTJGLGFBQUE7TUFBY0UsUUFBQSxFQUFTN0YsRUFBQSxDQUFFNkYsUUFBQTtNQUFTQyxZQUFBLEVBQWE5RixFQUFBLENBQUVtVjtJQUFTLENBQUMsR0FBRSxLQUFLQyxPQUFBLEdBQVEsRUFBQyxFQUFFLEtBQUtDLFdBQUEsR0FBWSxNQUFLLEtBQUtDLGNBQUEsR0FBZSxNQUFLLEtBQUtyTSxhQUFBLEdBQWMsRUFBQyxFQUFFLEtBQUtzTSxrQkFBQSxHQUFtQixFQUFDLEVBQUUsS0FBS0MsZUFBQSxHQUFnQixNQUFLLEtBQUtyTSxPQUFBLEdBQVF6RixNQUFBLENBQU9LLE1BQUEsQ0FBTyxDQUFDLEdBQUUrUSxDQUFBLEVBQUU5VSxFQUFDLEdBQUUsS0FBS3lWLEtBQUEsR0FBTSxJQUFJeEMsQ0FBQTtJQUFFLE1BQU0vUyxFQUFBLEdBQUVELEVBQUEsR0FBRSxTQUFPLEtBQUt1SSxlQUFBLENBQWdCO0lBQUUsS0FBS2tOLFFBQUEsR0FBUyxJQUFJaE4sQ0FBQSxDQUFFLEtBQUtTLE9BQUEsRUFBUWpKLEVBQUMsR0FBRSxLQUFLeVYsZ0JBQUEsQ0FBaUIsR0FBRSxLQUFLQyxrQkFBQSxDQUFtQixHQUFFLEtBQUtDLGVBQUEsQ0FBZ0IsR0FBRSxLQUFLQyxXQUFBLENBQVk7SUFBRSxNQUFNM1YsRUFBQSxHQUFFLEtBQUtnSixPQUFBLENBQVE0TSxHQUFBLElBQUssS0FBSzdQLE1BQUEsQ0FBTyxLQUFHO0lBQUc5RixPQUFBLENBQVErUixPQUFBLENBQVEsRUFBRWxSLElBQUEsQ0FBTSxNQUFJO01BQUMsS0FBS2UsSUFBQSxDQUFLLE1BQU07TUFBRSxNQUFLO1FBQUNnVSxLQUFBLEVBQU14VixFQUFBO1FBQUVzQyxRQUFBLEVBQVNoQztNQUFDLElBQUUsS0FBS3FJLE9BQUE7TUFBUSxDQUFDaEosRUFBQSxJQUFHSyxFQUFBLElBQUdNLEVBQUEsS0FBSSxLQUFLbUcsSUFBQSxDQUFLOUcsRUFBQSxFQUFFSyxFQUFBLEVBQUVNLEVBQUMsRUFBRWlLLEtBQUEsQ0FBTyxNQUFJLElBQUs7SUFBQyxDQUFFO0VBQUM7RUFBQ2tMLGVBQWVqVyxFQUFBLEdBQUUsS0FBSzRILGNBQUEsQ0FBZSxHQUFFO0lBQUMsT0FBTyxLQUFLOE4sUUFBQSxDQUFTbEQsY0FBQSxDQUFleFMsRUFBQSxHQUFFLEtBQUsySCxXQUFBLENBQVksR0FBRSxLQUFLUCxTQUFBLENBQVUsQ0FBQyxHQUFFcEgsRUFBQTtFQUFDO0VBQUM2VixnQkFBQSxFQUFpQjtJQUFDLEtBQUs1TSxhQUFBLENBQWNpQyxJQUFBLENBQUssS0FBS3VLLEtBQUEsQ0FBTWxVLEVBQUEsQ0FBRyxRQUFRLE1BQUk7TUFBQyxJQUFHLENBQUMsS0FBSzZHLFNBQUEsQ0FBVSxHQUFFO1FBQUMsTUFBTXBJLEVBQUEsR0FBRSxLQUFLaVcsY0FBQSxDQUFlO1FBQUUsS0FBS2pVLElBQUEsQ0FBSyxjQUFhaEMsRUFBQyxHQUFFLEtBQUtnQyxJQUFBLENBQUssZ0JBQWVoQyxFQUFDLEdBQUUsUUFBTSxLQUFLc1YsY0FBQSxJQUFnQixLQUFLbE8sU0FBQSxDQUFVLEtBQUdwSCxFQUFBLElBQUcsS0FBS3NWLGNBQUEsSUFBZ0IsS0FBS3ZPLEtBQUEsQ0FBTTtNQUFDO0lBQUMsQ0FBRSxDQUFDO0VBQUM7RUFBQzRPLGlCQUFBLEVBQWtCO0lBQUMsS0FBS3ZPLFNBQUEsQ0FBVSxNQUFJLEtBQUtwRixJQUFBLENBQUssTUFBTSxHQUFFLEtBQUt5VCxLQUFBLENBQU1yQyxLQUFBLENBQU0sSUFBRyxLQUFLbUMsa0JBQUEsQ0FBbUJySyxJQUFBLENBQUssS0FBS25GLFlBQUEsQ0FBYSxjQUFjLE1BQUk7TUFBQyxNQUFNL0YsRUFBQSxHQUFFLEtBQUtpVyxjQUFBLENBQWU7TUFBRSxLQUFLalUsSUFBQSxDQUFLLGNBQWFoQyxFQUFDO0lBQUMsQ0FBRSxHQUFFLEtBQUsrRixZQUFBLENBQWEsUUFBUSxNQUFJO01BQUMsS0FBSy9ELElBQUEsQ0FBSyxNQUFNLEdBQUUsS0FBS3lULEtBQUEsQ0FBTXJDLEtBQUEsQ0FBTTtJQUFDLENBQUUsR0FBRSxLQUFLck4sWUFBQSxDQUFhLFNBQVMsTUFBSTtNQUFDLEtBQUsvRCxJQUFBLENBQUssT0FBTyxHQUFFLEtBQUt5VCxLQUFBLENBQU1uQyxJQUFBLENBQUssR0FBRSxLQUFLZ0MsY0FBQSxHQUFlO0lBQUksQ0FBRSxHQUFFLEtBQUt2UCxZQUFBLENBQWEsV0FBVyxNQUFJO01BQUMsS0FBSzBQLEtBQUEsQ0FBTW5DLElBQUEsQ0FBSyxHQUFFLEtBQUtnQyxjQUFBLEdBQWU7SUFBSSxDQUFFLEdBQUUsS0FBS3ZQLFlBQUEsQ0FBYSxTQUFTLE1BQUk7TUFBQyxLQUFLL0QsSUFBQSxDQUFLLGNBQWEsS0FBSzJGLFdBQUEsQ0FBWSxDQUFDLEdBQUUsS0FBSzNGLElBQUEsQ0FBSyxRQUFRLEdBQUUsS0FBS3NULGNBQUEsR0FBZTtJQUFJLENBQUUsR0FBRSxLQUFLdlAsWUFBQSxDQUFhLFdBQVcsTUFBSTtNQUFDLEtBQUsvRCxJQUFBLENBQUssV0FBVSxLQUFLNEYsY0FBQSxDQUFlLENBQUM7SUFBQyxDQUFFLEdBQUUsS0FBSzdCLFlBQUEsQ0FBYSxTQUFTLE1BQUk7TUFBQyxJQUFJL0YsRUFBQTtNQUFFLEtBQUtnQyxJQUFBLENBQUssU0FBUSxVQUFRaEMsRUFBQSxHQUFFLEtBQUt3SSxlQUFBLENBQWdCLEVBQUUwTixLQUFBLEtBQVEsV0FBU2xXLEVBQUEsR0FBRUEsRUFBQSxHQUFFLElBQUk0RSxLQUFBLENBQU0sYUFBYSxDQUFDLEdBQUUsS0FBSzBRLGNBQUEsR0FBZTtJQUFJLENBQUUsQ0FBQztFQUFDO0VBQUNNLG1CQUFBLEVBQW9CO0lBQUMsS0FBSzNNLGFBQUEsQ0FBY2lDLElBQUEsQ0FBSyxLQUFLd0ssUUFBQSxDQUFTblUsRUFBQSxDQUFHLFNBQVMsQ0FBQ3ZCLEVBQUEsRUFBRUMsRUFBQSxLQUFJO01BQUMsS0FBS2tKLE9BQUEsQ0FBUTRMLFFBQUEsS0FBVyxLQUFLb0IsTUFBQSxDQUFPblcsRUFBQyxHQUFFLEtBQUtnQyxJQUFBLENBQUssZUFBY2hDLEVBQUEsR0FBRSxLQUFLMkgsV0FBQSxDQUFZLENBQUMsR0FBRSxLQUFLM0YsSUFBQSxDQUFLLFNBQVFoQyxFQUFBLEVBQUVDLEVBQUM7SUFBRSxDQUFFLEdBQUUsS0FBS3lWLFFBQUEsQ0FBU25VLEVBQUEsQ0FBRyxZQUFZLENBQUN2QixFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLEtBQUsrQixJQUFBLENBQUssWUFBV2hDLEVBQUEsRUFBRUMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLeVYsUUFBQSxDQUFTblUsRUFBQSxDQUFHLFVBQVUsQ0FBQ3ZCLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsS0FBSTtNQUFDLE1BQU1FLEVBQUEsR0FBRSxLQUFLc0gsV0FBQSxDQUFZO01BQUUsS0FBSzNGLElBQUEsQ0FBSyxVQUFTaEMsRUFBQSxHQUFFSyxFQUFBLEVBQUVKLEVBQUEsR0FBRUksRUFBQSxFQUFFSCxFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFLEdBQUUsS0FBS3VWLFFBQUEsQ0FBU25VLEVBQUEsQ0FBRyxVQUFVLE1BQUk7TUFBQyxLQUFLUyxJQUFBLENBQUssUUFBUTtJQUFDLENBQUUsR0FBRSxLQUFLMFQsUUFBQSxDQUFTblUsRUFBQSxDQUFHLFlBQVksTUFBSTtNQUFDLEtBQUtTLElBQUEsQ0FBSyxnQkFBZ0I7SUFBQyxDQUFFLEdBQUUsS0FBSzBULFFBQUEsQ0FBU25VLEVBQUEsQ0FBRyxhQUFhdkIsRUFBQSxJQUFHO01BQUMsS0FBS2dDLElBQUEsQ0FBSyxhQUFZaEMsRUFBQztJQUFDLENBQUUsR0FBRSxLQUFLMFYsUUFBQSxDQUFTblUsRUFBQSxDQUFHLFdBQVd2QixFQUFBLElBQUc7TUFBQyxLQUFLZ0MsSUFBQSxDQUFLLFdBQVVoQyxFQUFDO0lBQUMsQ0FBRSxDQUFDO0lBQUU7TUFBQyxJQUFJQSxFQUFBO01BQUUsS0FBS2lKLGFBQUEsQ0FBY2lDLElBQUEsQ0FBSyxLQUFLd0ssUUFBQSxDQUFTblUsRUFBQSxDQUFHLFFBQVF0QixFQUFBLElBQUc7UUFBQyxJQUFHLENBQUMsS0FBS2tKLE9BQUEsQ0FBUTRMLFFBQUEsRUFBUztRQUFPLElBQUk3VSxFQUFBO1FBQUUsS0FBS3dWLFFBQUEsQ0FBU2xELGNBQUEsQ0FBZXZTLEVBQUMsR0FBRWtPLFlBQUEsQ0FBYW5PLEVBQUMsR0FBRSxLQUFLb0gsU0FBQSxDQUFVLElBQUVsSCxFQUFBLEdBQUUsSUFBRSxTQUFLLEtBQUtpSixPQUFBLENBQVFvQixVQUFBLEdBQVdySyxFQUFBLEdBQUUsTUFBSSxZQUFVLE9BQU8sS0FBS2lKLE9BQUEsQ0FBUW9CLFVBQUEsSUFBWSxXQUFTLEtBQUtwQixPQUFBLENBQVFvQixVQUFBLEtBQWFySyxFQUFBLEdBQUUsS0FBS2lKLE9BQUEsQ0FBUW9CLFVBQUEsQ0FBVzZMLFlBQUEsR0FBY3BXLEVBQUEsR0FBRWdOLFVBQUEsQ0FBWSxNQUFJO1VBQUMsS0FBS21KLE1BQUEsQ0FBT2xXLEVBQUM7UUFBQyxHQUFHQyxFQUFDLEdBQUUsS0FBSzhCLElBQUEsQ0FBSyxlQUFjL0IsRUFBQSxHQUFFLEtBQUswSCxXQUFBLENBQVksQ0FBQyxHQUFFLEtBQUszRixJQUFBLENBQUssUUFBTy9CLEVBQUM7TUFBQyxDQUFFLENBQUM7SUFBQztFQUFDO0VBQUM2VixZQUFBLEVBQWE7SUFBQyxJQUFJOVYsRUFBQTtJQUFFLENBQUMsVUFBUUEsRUFBQSxHQUFFLEtBQUttSixPQUFBLENBQVFpTSxPQUFBLEtBQVUsV0FBU3BWLEVBQUEsR0FBRSxTQUFPQSxFQUFBLENBQUUwQyxNQUFBLEtBQVMsS0FBS3lHLE9BQUEsQ0FBUWlNLE9BQUEsQ0FBUW5ULE9BQUEsQ0FBU3pCLEVBQUEsSUFBRztNQUFDLEtBQUs2VixjQUFBLENBQWU3VixFQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUM4Vix3QkFBQSxFQUF5QjtJQUFDLEtBQUtmLGtCQUFBLENBQW1CdFQsT0FBQSxDQUFTakMsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRSxHQUFFLEtBQUt1VixrQkFBQSxHQUFtQixFQUFDO0VBQUM7RUFBQzNILFdBQVc1TixFQUFBLEVBQUU7SUFBQyxLQUFLbUosT0FBQSxHQUFRekYsTUFBQSxDQUFPSyxNQUFBLENBQU8sQ0FBQyxHQUFFLEtBQUtvRixPQUFBLEVBQVFuSixFQUFDLEdBQUVBLEVBQUEsQ0FBRThDLFFBQUEsSUFBVSxDQUFDOUMsRUFBQSxDQUFFZ1csS0FBQSxLQUFRLEtBQUtYLFdBQUEsR0FBWXpULENBQUEsQ0FBRVksWUFBQSxDQUFhLEtBQUsrVCxXQUFBLENBQVksR0FBRXZXLEVBQUEsQ0FBRThDLFFBQVEsSUFBRzlDLEVBQUEsQ0FBRWdXLEtBQUEsSUFBT2hXLEVBQUEsQ0FBRThDLFFBQUEsS0FBVyxLQUFLdVMsV0FBQSxHQUFZelQsQ0FBQSxDQUFFWSxZQUFBLENBQWF4QyxFQUFBLENBQUVnVyxLQUFBLEVBQU1oVyxFQUFBLENBQUU4QyxRQUFRLElBQUcsS0FBSzRTLFFBQUEsQ0FBUzlILFVBQUEsQ0FBVyxLQUFLekUsT0FBTyxHQUFFbkosRUFBQSxDQUFFbVYsU0FBQSxJQUFXLEtBQUs3TSxlQUFBLENBQWdCdEksRUFBQSxDQUFFbVYsU0FBUyxHQUFFLFFBQU1uVixFQUFBLENBQUUyRixhQUFBLEtBQWdCLEtBQUs2QyxlQUFBLENBQWdCLEVBQUU1QyxRQUFBLEdBQVM1RixFQUFBLENBQUUyRixhQUFBO0VBQWM7RUFBQzBRLGVBQWVyVyxFQUFBLEVBQUU7SUFBQyxPQUFPQSxFQUFBLENBQUV3VyxLQUFBLENBQU0sSUFBSSxHQUFFLEtBQUtwQixPQUFBLENBQVFsSyxJQUFBLENBQUtsTCxFQUFDLEdBQUUsS0FBS2lKLGFBQUEsQ0FBY2lDLElBQUEsQ0FBS2xMLEVBQUEsQ0FBRTBCLElBQUEsQ0FBSyxXQUFXLE1BQUk7TUFBQyxLQUFLMFQsT0FBQSxHQUFRLEtBQUtBLE9BQUEsQ0FBUXFCLE1BQUEsQ0FBUXhXLEVBQUEsSUFBR0EsRUFBQSxLQUFJRCxFQUFFO0lBQUMsQ0FBRSxDQUFDLEdBQUVBLEVBQUE7RUFBQztFQUFDNk4sV0FBQSxFQUFZO0lBQUMsT0FBTyxLQUFLNkgsUUFBQSxDQUFTN0gsVUFBQSxDQUFXO0VBQUM7RUFBQ0MsU0FBQSxFQUFVO0lBQUMsT0FBTyxLQUFLNEgsUUFBQSxDQUFTNUgsUUFBQSxDQUFTO0VBQUM7RUFBQ0MsVUFBQSxFQUFXO0lBQUMsT0FBTyxLQUFLMkgsUUFBQSxDQUFTM0gsU0FBQSxDQUFVO0VBQUM7RUFBQ0MsVUFBVWhPLEVBQUEsRUFBRTtJQUFDLE9BQU8sS0FBSzBWLFFBQUEsQ0FBUzFILFNBQUEsQ0FBVWhPLEVBQUM7RUFBQztFQUFDMFcsY0FBYzFXLEVBQUEsRUFBRTtJQUFDLE1BQU1DLEVBQUEsR0FBRUQsRUFBQSxHQUFFLEtBQUsySCxXQUFBLENBQVk7SUFBRSxLQUFLK04sUUFBQSxDQUFTekgsbUJBQUEsQ0FBb0JoTyxFQUFDO0VBQUM7RUFBQzBXLGlCQUFBLEVBQWtCO0lBQUMsT0FBTyxLQUFLdkIsT0FBQTtFQUFPO0VBQUN3QixVQUFVM1csRUFBQSxFQUFFRSxFQUFBLEVBQUVFLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT1AsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxJQUFJQyxFQUFBO01BQUUsSUFBRyxLQUFLZ0MsSUFBQSxDQUFLLFFBQU8vQixFQUFDLEdBQUUsQ0FBQyxLQUFLa0osT0FBQSxDQUFRekQsS0FBQSxJQUFPLEtBQUswQixTQUFBLENBQVUsS0FBRyxLQUFLTCxLQUFBLENBQU0sR0FBRSxLQUFLc08sV0FBQSxHQUFZLE1BQUssS0FBS0MsY0FBQSxHQUFlLE1BQUssQ0FBQ25WLEVBQUEsSUFBRyxDQUFDRSxFQUFBLEVBQUU7UUFBQyxNQUFNSCxFQUFBLEdBQUUsS0FBS2lKLE9BQUEsQ0FBUTBOLFdBQUEsSUFBYSxDQUFDO1FBQUVySSxNQUFBLENBQU9zSSxlQUFBLElBQWlCLENBQUM1VyxFQUFBLENBQUU2VyxNQUFBLEtBQVMsS0FBS3ZCLGVBQUEsR0FBZ0IsSUFBSXNCLGVBQUEsSUFBZ0I1VyxFQUFBLENBQUU2VyxNQUFBLEdBQU8sVUFBUS9XLEVBQUEsR0FBRSxLQUFLd1YsZUFBQSxLQUFrQixXQUFTeFYsRUFBQSxHQUFFLFNBQU9BLEVBQUEsQ0FBRStXLE1BQUE7UUFBUSxNQUFNblQsRUFBQSxHQUFFcEQsRUFBQSxJQUFHLEtBQUt3QixJQUFBLENBQUssV0FBVXhCLEVBQUM7UUFBRUwsRUFBQSxHQUFFLE1BQU1xRSxDQUFBLENBQUVDLFNBQUEsQ0FBVXhFLEVBQUEsRUFBRTJELEVBQUEsRUFBRTFELEVBQUM7UUFBRSxNQUFNK0wsRUFBQSxHQUFFLEtBQUs5QyxPQUFBLENBQVE2TixZQUFBO1FBQWEvSyxFQUFBLEtBQUk5TCxFQUFBLEdBQUUsSUFBSXdHLElBQUEsQ0FBSyxDQUFDeEcsRUFBQyxHQUFFO1VBQUN5RyxJQUFBLEVBQUtxRjtRQUFDLENBQUM7TUFBRTtNQUFDLEtBQUt2RixNQUFBLENBQU96RyxFQUFBLEVBQUVFLEVBQUM7TUFBRSxNQUFNUyxFQUFBLEdBQUUsTUFBTSxJQUFJUixPQUFBLENBQVNJLEVBQUEsSUFBRztRQUFDLE1BQU1NLEVBQUEsR0FBRVIsRUFBQSxJQUFHLEtBQUtxSCxXQUFBLENBQVk7UUFBRTdHLEVBQUEsR0FBRU4sRUFBQSxDQUFFTSxFQUFDLElBQUUsS0FBS3lVLGtCQUFBLENBQW1CckssSUFBQSxDQUFLLEtBQUtuRixZQUFBLENBQWEsa0JBQWtCLE1BQUl2RixFQUFBLENBQUUsS0FBS21ILFdBQUEsQ0FBWSxDQUFDLEdBQUc7VUFBQ2pHLElBQUEsRUFBSztRQUFFLENBQUMsQ0FBQztNQUFDLENBQUU7TUFBRSxJQUFHLENBQUN6QixFQUFBLElBQUcsQ0FBQ0UsRUFBQSxFQUFFO1FBQUMsTUFBTUssRUFBQSxHQUFFLEtBQUtnSSxlQUFBLENBQWdCO1FBQUVoSSxFQUFBLFlBQWErUyxDQUFBLEtBQUkvUyxFQUFBLENBQUVzQyxRQUFBLEdBQVNsQyxFQUFBO01BQUU7TUFBQyxJQUFHUCxFQUFBLEVBQUUsS0FBS2dWLFdBQUEsR0FBWXpULENBQUEsQ0FBRVksWUFBQSxDQUFhbkMsRUFBQSxFQUFFTyxFQUFBLElBQUcsQ0FBQyxXQUFVVCxFQUFBLEVBQUU7UUFBQyxNQUFNSyxFQUFBLEdBQUUsTUFBTUwsRUFBQSxDQUFFa1UsV0FBQSxDQUFZO1FBQUUsS0FBS2dCLFdBQUEsR0FBWSxNQUFNelQsQ0FBQSxDQUFFTSxNQUFBLENBQU8xQixFQUFBLEVBQUUsS0FBSzJJLE9BQUEsQ0FBUS9HLFVBQVU7TUFBQztNQUFDLEtBQUtpVCxXQUFBLEtBQWMsS0FBS3JULElBQUEsQ0FBSyxVQUFTLEtBQUsyRixXQUFBLENBQVksQ0FBQyxHQUFFLEtBQUsrTixRQUFBLENBQVNqRSxNQUFBLENBQU8sS0FBSzRELFdBQVcsSUFBRyxLQUFLclQsSUFBQSxDQUFLLFNBQVEsS0FBSzJGLFdBQUEsQ0FBWSxDQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNWLEtBQUtoSCxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsT0FBT0osQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxJQUFHO1FBQUMsT0FBTyxNQUFNLEtBQUs2VyxTQUFBLENBQVUzVyxFQUFBLEVBQUUsUUFBT0MsRUFBQSxFQUFFQyxFQUFDO01BQUMsU0FBT0gsRUFBQSxFQUFOO1FBQVMsTUFBTSxLQUFLZ0MsSUFBQSxDQUFLLFNBQVFoQyxFQUFDLEdBQUVBLEVBQUE7TUFBQztJQUFDLENBQUU7RUFBQztFQUFDaVgsU0FBU2hYLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxPQUFPSixDQUFBLENBQUUsTUFBSyxRQUFPLFFBQVEsYUFBVztNQUFDLElBQUc7UUFBQyxPQUFPLE1BQU0sS0FBSzZXLFNBQUEsQ0FBVSxJQUFHM1csRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUM7TUFBQyxTQUFPSCxFQUFBLEVBQU47UUFBUyxNQUFNLEtBQUtnQyxJQUFBLENBQUssU0FBUWhDLEVBQUMsR0FBRUEsRUFBQTtNQUFDO0lBQUMsQ0FBRTtFQUFDO0VBQUNxUyxLQUFLclMsRUFBQSxFQUFFO0lBQUMsSUFBRyxDQUFDLEtBQUtxVixXQUFBLEVBQVksTUFBTSxJQUFJelEsS0FBQSxDQUFNLGlCQUFpQjtJQUFFLEtBQUs4USxRQUFBLENBQVNyRCxJQUFBLENBQUtyUyxFQUFDLEdBQUUsS0FBS2dDLElBQUEsQ0FBSyxRQUFPaEMsRUFBQztFQUFDO0VBQUNrWCxlQUFBLEVBQWdCO0lBQUMsT0FBTyxLQUFLN0IsV0FBQTtFQUFXO0VBQUNrQixZQUFZO0lBQUNZLFFBQUEsRUFBU25YLEVBQUEsR0FBRTtJQUFFb1gsU0FBQSxFQUFVblgsRUFBQSxHQUFFO0lBQUlvWCxTQUFBLEVBQVVuWCxFQUFBLEdBQUU7RUFBRyxJQUFFLENBQUMsR0FBRTtJQUFDLElBQUcsQ0FBQyxLQUFLbVYsV0FBQSxFQUFZLE1BQU0sSUFBSXpRLEtBQUEsQ0FBTSxvQ0FBb0M7SUFBRSxNQUFNekUsRUFBQSxHQUFFd0MsSUFBQSxDQUFLK0UsR0FBQSxDQUFJMUgsRUFBQSxFQUFFLEtBQUtxVixXQUFBLENBQVl0UyxnQkFBZ0I7TUFBRTFDLEVBQUEsR0FBRSxFQUFDO0lBQUUsU0FBUUcsRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRUwsRUFBQSxFQUFFSyxFQUFBLElBQUk7TUFBQyxNQUFNd0UsRUFBQSxHQUFFLEtBQUtxUSxXQUFBLENBQVlyUyxjQUFBLENBQWV4QyxFQUFDO1FBQUVGLEVBQUEsR0FBRSxFQUFDO1FBQUVDLEVBQUEsR0FBRXlFLEVBQUEsQ0FBRXRDLE1BQUEsR0FBT3pDLEVBQUE7TUFBRSxTQUFRVSxFQUFBLEdBQUUsR0FBRUEsRUFBQSxHQUFFVixFQUFBLEVBQUVVLEVBQUEsSUFBSTtRQUFDLE1BQU1HLEVBQUEsR0FBRWtFLEVBQUEsQ0FBRTZMLEtBQUEsQ0FBTWxPLElBQUEsQ0FBSytOLEtBQUEsQ0FBTS9QLEVBQUEsR0FBRUosRUFBQyxHQUFFb0MsSUFBQSxDQUFLbU8sSUFBQSxFQUFNblEsRUFBQSxHQUFFLEtBQUdKLEVBQUMsQ0FBQztRQUFFLElBQUlxRCxFQUFBLEdBQUU7UUFBRSxTQUFRMFQsRUFBQSxHQUFFLEdBQUVBLEVBQUEsR0FBRXhXLEVBQUEsQ0FBRTRCLE1BQUEsRUFBTzRVLEVBQUEsSUFBSTtVQUFDLE1BQU0zVixFQUFBLEdBQUViLEVBQUEsQ0FBRXdXLEVBQUE7VUFBRzNVLElBQUEsQ0FBS0MsR0FBQSxDQUFJakIsRUFBQyxJQUFFZ0IsSUFBQSxDQUFLQyxHQUFBLENBQUlnQixFQUFDLE1BQUlBLEVBQUEsR0FBRWpDLEVBQUE7UUFBRTtRQUFDckIsRUFBQSxDQUFFNEssSUFBQSxDQUFLdkksSUFBQSxDQUFLeUMsS0FBQSxDQUFNeEIsRUFBQSxHQUFFMUQsRUFBQyxJQUFFQSxFQUFDO01BQUM7TUFBQ0csRUFBQSxDQUFFNkssSUFBQSxDQUFLNUssRUFBQztJQUFDO0lBQUMsT0FBT0QsRUFBQTtFQUFDO0VBQUNzSCxZQUFBLEVBQWE7SUFBQyxJQUFJM0gsRUFBQSxHQUFFLE1BQU0ySCxXQUFBLENBQVksS0FBRztJQUFFLE9BQU8sTUFBSTNILEVBQUEsSUFBR0EsRUFBQSxLQUFJLElBQUUsS0FBRyxDQUFDLEtBQUtxVixXQUFBLEtBQWNyVixFQUFBLEdBQUUsS0FBS3FWLFdBQUEsQ0FBWXZTLFFBQUEsR0FBVTlDLEVBQUE7RUFBQztFQUFDdVgsa0JBQWtCdlgsRUFBQSxFQUFFO0lBQUMsS0FBS21KLE9BQUEsQ0FBUTRMLFFBQUEsR0FBUy9VLEVBQUE7RUFBQztFQUFDdUgsUUFBUXZILEVBQUEsRUFBRTtJQUFDLEtBQUtzVixjQUFBLEdBQWUsTUFBSyxNQUFNL04sT0FBQSxDQUFRdkgsRUFBQyxHQUFFLEtBQUtpVyxjQUFBLENBQWVqVyxFQUFDLEdBQUUsS0FBS2dDLElBQUEsQ0FBSyxjQUFhaEMsRUFBQztFQUFDO0VBQUNtVyxPQUFPblcsRUFBQSxFQUFFO0lBQUMsTUFBTUMsRUFBQSxHQUFFLEtBQUswSCxXQUFBLENBQVksSUFBRTNILEVBQUE7SUFBRSxLQUFLdUgsT0FBQSxDQUFRdEgsRUFBQztFQUFDO0VBQUNrSCxLQUFLbEgsRUFBQSxFQUFFQyxFQUFBLEVBQUU7SUFBQyxNQUFNQyxFQUFBLEdBQUV1RCxNQUFBLENBQU91UixNQUFBLENBQU8sTUFBSztNQUFDOU4sSUFBQSxFQUFLO1FBQUNoQyxHQUFBLEVBQUlBLENBQUEsS0FBSSxNQUFNZ0M7TUFBSTtJQUFDLENBQUM7SUFBRSxPQUFPcEgsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxRQUFNRSxFQUFBLElBQUcsS0FBS3NILE9BQUEsQ0FBUXRILEVBQUM7TUFBRSxNQUFNRCxFQUFBLEdBQUUsTUFBTUcsRUFBQSxDQUFFZ0gsSUFBQSxDQUFLZ0ssSUFBQSxDQUFLLElBQUk7TUFBRSxPQUFPLFFBQU1qUixFQUFBLEtBQUksS0FBS3dGLEtBQUEsWUFBaUI2TixDQUFBLEdBQUUsS0FBSzdOLEtBQUEsQ0FBTWdQLE1BQUEsQ0FBT3hVLEVBQUMsSUFBRSxLQUFLb1YsY0FBQSxHQUFlcFYsRUFBQSxHQUFHRixFQUFBO0lBQUMsQ0FBRTtFQUFDO0VBQUN3WCxVQUFBLEVBQVc7SUFBQyxPQUFPelgsQ0FBQSxDQUFFLE1BQUssUUFBTyxRQUFRLGFBQVc7TUFBQyxPQUFPLEtBQUtxSCxTQUFBLENBQVUsSUFBRSxLQUFLTCxLQUFBLENBQU0sSUFBRSxLQUFLSSxJQUFBLENBQUs7SUFBQyxDQUFFO0VBQUM7RUFBQ21NLEtBQUEsRUFBTTtJQUFDLEtBQUt2TSxLQUFBLENBQU0sR0FBRSxLQUFLUSxPQUFBLENBQVEsQ0FBQztFQUFDO0VBQUNrUSxLQUFLelgsRUFBQSxFQUFFO0lBQUMsS0FBS3VILE9BQUEsQ0FBUSxLQUFLSyxjQUFBLENBQWUsSUFBRTVILEVBQUM7RUFBQztFQUFDMFgsTUFBQSxFQUFPO0lBQUMsS0FBS3pRLElBQUEsQ0FBSyxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxJQUFJO0VBQUM7RUFBQ0MsZ0JBQWdCbEgsRUFBQSxFQUFFO0lBQUMsS0FBS3NXLHVCQUFBLENBQXdCLEdBQUUsTUFBTXBQLGVBQUEsQ0FBZ0JsSCxFQUFDLEdBQUUsS0FBSzJWLGdCQUFBLENBQWlCO0VBQUM7RUFBQy9DLFlBQUEsRUFBYTtJQUFDLE9BQU83UyxDQUFBLENBQUUsTUFBS21ULFNBQUEsRUFBVSxRQUFRLFdBQVVsVCxFQUFBLEdBQUUsYUFBWUMsRUFBQSxHQUFFLEdBQUVDLEVBQUEsR0FBRSxXQUFVO01BQUMsT0FBTyxLQUFLd1YsUUFBQSxDQUFTOUMsV0FBQSxDQUFZNVMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUM7SUFBQyxDQUFFO0VBQUM7RUFBQzRHLFFBQUEsRUFBUztJQUFDLElBQUk5RyxFQUFBO0lBQUUsS0FBS2dDLElBQUEsQ0FBSyxTQUFTLEdBQUUsVUFBUWhDLEVBQUEsR0FBRSxLQUFLd1YsZUFBQSxLQUFrQixXQUFTeFYsRUFBQSxJQUFHQSxFQUFBLENBQUUyWCxLQUFBLENBQU0sR0FBRSxLQUFLdkMsT0FBQSxDQUFRblQsT0FBQSxDQUFTekIsRUFBQSxJQUFHQSxFQUFBLENBQUVzRyxPQUFBLENBQVEsQ0FBRSxHQUFFLEtBQUttQyxhQUFBLENBQWNoSCxPQUFBLENBQVN6QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFLEdBQUUsS0FBSzhWLHVCQUFBLENBQXdCLEdBQUUsS0FBS2IsS0FBQSxDQUFNM08sT0FBQSxDQUFRLEdBQUUsS0FBSzRPLFFBQUEsQ0FBUzVPLE9BQUEsQ0FBUSxHQUFFLE1BQU1BLE9BQUEsQ0FBUTtFQUFDO0FBQUM7QUFBQ2tPLENBQUEsQ0FBRTRDLFVBQUEsR0FBVyxjQUFjeFcsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEVBQUU7SUFBQyxNQUFNLEdBQUUsS0FBS2lKLGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS0UsT0FBQSxHQUFRbkosRUFBQTtFQUFDO0VBQUM2WCxPQUFBLEVBQVEsQ0FBQztFQUFDckIsTUFBTXhXLEVBQUEsRUFBRTtJQUFDLEtBQUs4WCxVQUFBLEdBQVc5WCxFQUFBLEVBQUUsS0FBSzZYLE1BQUEsQ0FBTztFQUFDO0VBQUMvUSxRQUFBLEVBQVM7SUFBQyxLQUFLOUUsSUFBQSxDQUFLLFNBQVMsR0FBRSxLQUFLaUgsYUFBQSxDQUFjaEgsT0FBQSxDQUFTakMsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRTtFQUFDO0FBQUMsR0FBRWdWLENBQUEsQ0FBRStDLEdBQUEsR0FBSTFULENBQUE7OztBREdydDVCLElBQU8xRSwyQkFBQSxHQUFRcVYsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=