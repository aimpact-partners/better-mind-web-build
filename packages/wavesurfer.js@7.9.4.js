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

// .beyond/uimport/wavesurfer.js.7.9.4.js
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
var h = class _h extends e {
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
    let d2 = Math.min(_h.MAX_CANVAS_WIDTH, a2, l2),
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
        Object.keys(c2).length > _h.MAX_NODES && (n2.innerHTML = "", r2.innerHTML = "", c2 = {}), u2(e3 - 1), u2(e3), u2(e3 + 1);
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
var u = class _u extends a {
  static create(t2) {
    return new _u(t2);
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

// .beyond/uimport/wavesurfer.js.7.9.4.js
var wavesurfer_js_7_9_4_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC93YXZlc3VyZmVyLmpzLjcuOS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dhdmVzdXJmZXIuanMvZGlzdC93YXZlc3VyZmVyLmVzbS5qcyJdLCJuYW1lcyI6WyJ3YXZlc3VyZmVyX2pzXzdfOV80X2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ3YXZlc3VyZmVyX2pzXzdfOV80X2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidCIsInQyIiwiZTIiLCJpMiIsInMyIiwiUHJvbWlzZSIsIm4yIiwicjIiLCJvMiIsInQzIiwiaDIiLCJuZXh0IiwidDQiLCJhMiIsInRocm93IiwiZTMiLCJkb25lIiwidmFsdWUiLCJ0aGVuIiwiYXBwbHkiLCJTdXBwcmVzc2VkRXJyb3IiLCJlIiwiY29uc3RydWN0b3IiLCJsaXN0ZW5lcnMiLCJvbiIsIlNldCIsImFkZCIsIm9uY2UiLCJpMyIsImkiLCJ1biIsImRlbGV0ZSIsInVuQWxsIiwiZW1pdCIsImZvckVhY2giLCJkZWNvZGUiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwiZGVjb2RlQXVkaW9EYXRhIiwiZmluYWxseSIsImNsb3NlIiwiY3JlYXRlQnVmZmVyIiwic29tZSIsImxlbmd0aCIsIk1hdGgiLCJhYnMiLCJlNCIsImR1cmF0aW9uIiwibnVtYmVyT2ZDaGFubmVscyIsImdldENoYW5uZWxEYXRhIiwiY29weUZyb21DaGFubmVsIiwiQXVkaW9CdWZmZXIiLCJwcm90b3R5cGUiLCJjb3B5VG9DaGFubmVsIiwicyIsInhtbG5zIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsIm4zIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImFzc2lnbiIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsIm4iLCJyIiwiZnJlZXplIiwiX19wcm90b19fIiwibyIsImZldGNoQmxvYiIsImZldGNoIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiYm9keSIsImhlYWRlcnMiLCJzMyIsImdldFJlYWRlciIsIk51bWJlciIsImdldCIsInJvdW5kIiwiYSIsInJlYWQiLCJjbG9uZSIsImJsb2IiLCJpc0V4dGVybmFsTWVkaWEiLCJtZWRpYSIsIm1lZGlhQ29udHJvbHMiLCJjb250cm9scyIsImF1dG9wbGF5IiwicGxheWJhY2tSYXRlIiwib25NZWRpYUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTcmMiLCJjdXJyZW50U3JjIiwic3JjIiwicmV2b2tlU3JjIiwic3RhcnRzV2l0aCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNhblBsYXlUeXBlIiwic2V0U3JjIiwiQmxvYiIsInR5cGUiLCJjcmVhdGVPYmplY3RVUkwiLCJkZXN0cm95IiwicGF1c2UiLCJyZW1vdmUiLCJsb2FkIiwic2V0TWVkaWFFbGVtZW50IiwicGxheSIsImlzUGxheWluZyIsInBhdXNlZCIsImVuZGVkIiwic2V0VGltZSIsImN1cnJlbnRUaW1lIiwibWF4IiwibWluIiwiZ2V0RHVyYXRpb24iLCJnZXRDdXJyZW50VGltZSIsImdldFZvbHVtZSIsInZvbHVtZSIsInNldFZvbHVtZSIsImdldE11dGVkIiwibXV0ZWQiLCJzZXRNdXRlZCIsImdldFBsYXliYWNrUmF0ZSIsImlzU2Vla2luZyIsInNlZWtpbmciLCJzZXRQbGF5YmFja1JhdGUiLCJwcmVzZXJ2ZXNQaXRjaCIsImdldE1lZGlhRWxlbWVudCIsInNldFNpbmtJZCIsImgiLCJfaCIsInRpbWVvdXRzIiwiaXNTY3JvbGxhYmxlIiwiYXVkaW9EYXRhIiwicmVzaXplT2JzZXJ2ZXIiLCJsYXN0Q29udGFpbmVyV2lkdGgiLCJpc0RyYWdnaW5nIiwic3Vic2NyaXB0aW9ucyIsInVuc3Vic2NyaWJlT25TY3JvbGwiLCJvcHRpb25zIiwicGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIiLCJjb250YWluZXIiLCJwYXJlbnQiLCJpbml0SHRtbCIsInNjcm9sbENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyIiwiY2FudmFzV3JhcHBlciIsInByb2dyZXNzV3JhcHBlciIsImN1cnNvciIsImluaXRFdmVudHMiLCJIVE1MRWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhZ1RvU2VlayIsImluaXREcmFnIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJSZXNpemVPYnNlcnZlciIsImNyZWF0ZURlbGF5Iiwib25Db250YWluZXJSZXNpemUiLCJjYXRjaCIsIm9ic2VydmUiLCJyZVJlbmRlciIsInB1c2giLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImwyIiwibDMiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImQyIiwiYzIiLCJ1MiIsInAiLCJEYXRlIiwibm93IiwibSIsInIzIiwiaDMiLCJsNCIsIm0yIiwiczQiLCJvMyIsImYiLCJhMyIsImciLCJyZWxhdGVkVGFyZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwidiIsImIiLCJwYXNzaXZlIiwiY2FwdHVyZSIsInNldFRpbWVvdXQiLCJnZXRIZWlnaHQiLCJpc05hTiIsImNsaWVudEhlaWdodCIsImV2ZXJ5Iiwib3ZlcmxheSIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJjc3BOb25jZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJzcGxpdENoYW5uZWxzIiwic2V0T3B0aW9ucyIsImdldFdyYXBwZXIiLCJnZXRXaWR0aCIsImdldFNjcm9sbCIsInNldFNjcm9sbCIsInNldFNjcm9sbFBlcmNlbnRhZ2UiLCJkaXNjb25uZWN0IiwiY2xlYXJUaW1lb3V0IiwiY29udmVydENvbG9yVmFsdWVzIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImdldFBpeGVsUmF0aW8iLCJyZW5kZXJCYXJXYXZlZm9ybSIsImNhbnZhcyIsImJhcldpZHRoIiwiYmFyR2FwIiwiYmFyUmFkaXVzIiwiYmVnaW5QYXRoIiwiYmFyQWxpZ24iLCJkMyIsImZpbGwiLCJjbG9zZVBhdGgiLCJyZW5kZXJMaW5lV2F2ZWZvcm0iLCJtb3ZlVG8iLCJsaW5lVG8iLCJyZW5kZXJXYXZlZm9ybSIsImZpbGxTdHlsZSIsIndhdmVDb2xvciIsInJlbmRlckZ1bmN0aW9uIiwiYmFySGVpZ2h0Iiwibm9ybWFsaXplIiwiZnJvbSIsInJlZHVjZSIsInJlbmRlclNpbmdsZUNhbnZhcyIsImNsb25lTm9kZSIsImRyYXdJbWFnZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInByb2dyZXNzQ29sb3IiLCJmaWxsUmVjdCIsInJlbmRlck11bHRpQ2FudmFzIiwiTUFYX0NBTlZBU19XSURUSCIsImZsb29yIiwibWFwIiwiaTQiLCJzbGljZSIsImNlaWwiLCJrZXlzIiwiTUFYX05PREVTIiwicmVuZGVyQ2hhbm5lbCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInJlbmRlciIsIm1pblB4UGVyU2VjIiwiZmlsbFBhcmVudCIsIm92ZXJmbG93WCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhpZGVTY3JvbGxiYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3JDb2xvciIsImN1cnNvcldpZHRoIiwicmVzb2x2ZSIsInJpZ2h0Iiwiem9vbSIsInNjcm9sbEludG9WaWV3IiwiYXV0b0NlbnRlciIsInJlbmRlclByb2dyZXNzIiwiY2xpcFBhdGgiLCJ0cmFuc2Zvcm0iLCJhdXRvU2Nyb2xsIiwiZXhwb3J0SW1hZ2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9EYXRhVVJMIiwiYWxsIiwidG9CbG9iIiwibCIsImFyZ3VtZW50cyIsInVuc3Vic2NyaWJlIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwiZCIsImJ1ZmZlck5vZGUiLCJwbGF5U3RhcnRUaW1lIiwicGxheWVkRHVyYXRpb24iLCJfbXV0ZWQiLCJfcGxheWJhY2tSYXRlIiwiX2R1cmF0aW9uIiwiYnVmZmVyIiwiY3Jvc3NPcmlnaW4iLCJhdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJhcnJheUJ1ZmZlciIsIl9wbGF5IiwiY3JlYXRlQnVmZmVyU291cmNlIiwib25lbmRlZCIsIl9wYXVzZSIsInN0b3BBdCIsImdhaW4iLCJ0ZXN0IiwiZ2V0R2Fpbk5vZGUiLCJjIiwiaW50ZXJhY3QiLCJ1IiwiX3UiLCJjcmVhdGUiLCJiYWNrZW5kIiwiYXVkaW9SYXRlIiwicGx1Z2lucyIsImRlY29kZWREYXRhIiwic3RvcEF0UG9zaXRpb24iLCJtZWRpYVN1YnNjcmlwdGlvbnMiLCJhYm9ydENvbnRyb2xsZXIiLCJ0aW1lciIsInJlbmRlcmVyIiwiaW5pdFBsYXllckV2ZW50cyIsImluaXRSZW5kZXJlckV2ZW50cyIsImluaXRUaW1lckV2ZW50cyIsImluaXRQbHVnaW5zIiwidXJsIiwicGVha3MiLCJ1cGRhdGVQcm9ncmVzcyIsImVycm9yIiwic2Vla1RvIiwiZGVib3VuY2VUaW1lIiwicmVnaXN0ZXJQbHVnaW4iLCJ1bnN1YnNjcmliZVBsYXllckV2ZW50cyIsImV4cG9ydFBlYWtzIiwiX2luaXQiLCJmaWx0ZXIiLCJzZXRTY3JvbGxUaW1lIiwiZ2V0QWN0aXZlUGx1Z2lucyIsImxvYWRBdWRpbyIsImZldGNoUGFyYW1zIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwiYmxvYk1pbWVUeXBlIiwibG9hZEJsb2IiLCJnZXREZWNvZGVkRGF0YSIsImNoYW5uZWxzIiwibWF4TGVuZ3RoIiwicHJlY2lzaW9uIiwidDUiLCJ0b2dnbGVJbnRlcmFjdGlvbiIsInBsYXlQYXVzZSIsInNraXAiLCJlbXB0eSIsImFib3J0IiwiQmFzZVBsdWdpbiIsIm9uSW5pdCIsIndhdmVzdXJmZXIiLCJkb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMkJBQUE7OztBQ0FBLFNBQVNPLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtFQUFDLE9BQU8sS0FBSUQsRUFBQSxLQUFJQSxFQUFBLEdBQUVFLE9BQUEsR0FBVyxVQUFTQyxFQUFBLEVBQUVDLEVBQUEsRUFBRTtJQUFDLFNBQVNDLEdBQUVDLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVPLElBQUEsQ0FBS0YsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFFO1FBQUNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTQyxHQUFFSixFQUFBLEVBQUU7TUFBQyxJQUFHO1FBQUNDLEVBQUEsQ0FBRU4sRUFBQSxDQUFFVSxLQUFBLENBQU1MLEVBQUMsQ0FBQztNQUFDLFNBQU9HLEVBQUEsRUFBRTtRQUFDTCxFQUFBLENBQUVLLEVBQUM7TUFBQztJQUFDO0lBQUMsU0FBU0YsR0FBRUQsRUFBQSxFQUFFO01BQUMsSUFBSU0sRUFBQTtNQUFFTixFQUFBLENBQUVPLElBQUEsR0FBS1YsRUFBQSxDQUFFRyxFQUFBLENBQUVRLEtBQUssS0FBR0YsRUFBQSxHQUFFTixFQUFBLENBQUVRLEtBQUEsRUFBTUYsRUFBQSxZQUFhWixFQUFBLEdBQUVZLEVBQUEsR0FBRSxJQUFJWixFQUFBLENBQUcsVUFBU1MsRUFBQSxF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QSxJQUFHQSxFQUFBLENBQUUsQ0FBRSxHQUFFLEtBQUtnVyx1QkFBQSxDQUF3QixHQUFFLEtBQUtiLEtBQUEsQ0FBTTdPLE9BQUEsQ0FBUSxHQUFFLEtBQUs4TyxRQUFBLENBQVM5TyxPQUFBLENBQVEsR0FBRSxNQUFNQSxPQUFBLENBQVE7RUFBQztBQUFDO0FBQUNtTyxDQUFBLENBQUU2QyxVQUFBLEdBQVcsY0FBYzFXLENBQUEsQ0FBQztFQUFDQyxZQUFZckIsRUFBQSxFQUFFO0lBQUMsTUFBTSxHQUFFLEtBQUtrSixhQUFBLEdBQWMsRUFBQyxFQUFFLEtBQUtFLE9BQUEsR0FBUXBKLEVBQUE7RUFBQztFQUFDK1gsT0FBQSxFQUFRLENBQUM7RUFBQ3JCLE1BQU0xVyxFQUFBLEVBQUU7SUFBQyxLQUFLZ1ksVUFBQSxHQUFXaFksRUFBQSxFQUFFLEtBQUsrWCxNQUFBLENBQU87RUFBQztFQUFDalIsUUFBQSxFQUFTO0lBQUMsS0FBSzlFLElBQUEsQ0FBSyxTQUFTLEdBQUUsS0FBS2tILGFBQUEsQ0FBY2pILE9BQUEsQ0FBU2pDLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUU7RUFBQztBQUFDLEdBQUVpVixDQUFBLENBQUVnRCxHQUFBLEdBQUk1VCxDQUFBOzs7QURHcnQ1QixJQUFPMUUsMkJBQUEsR0FBUXNWLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9