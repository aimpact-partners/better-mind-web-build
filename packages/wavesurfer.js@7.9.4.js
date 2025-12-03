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

// .beyond/uimport/temp/wavesurfer.js.7.9.4.js
var wavesurfer_js_7_9_4_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3dhdmVzdXJmZXIuanMuNy45LjQuanMiLCIuLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIl0sIm5hbWVzIjpbIndhdmVzdXJmZXJfanNfN185XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIndhdmVzdXJmZXJfanNfN185XzRfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ0IiwidDIiLCJlMiIsImkyIiwiczIiLCJQcm9taXNlIiwibjIiLCJyMiIsIm8yIiwidDMiLCJoMiIsIm5leHQiLCJ0NCIsImEyIiwidGhyb3ciLCJlMyIsImRvbmUiLCJ2YWx1ZSIsInRoZW4iLCJhcHBseSIsIlN1cHByZXNzZWRFcnJvciIsImUiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVycyIsIm9uIiwiU2V0IiwiYWRkIiwib25jZSIsImkzIiwiaSIsInVuIiwiZGVsZXRlIiwidW5BbGwiLCJlbWl0IiwiZm9yRWFjaCIsImRlY29kZSIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJmaW5hbGx5IiwiY2xvc2UiLCJjcmVhdGVCdWZmZXIiLCJzb21lIiwibGVuZ3RoIiwiTWF0aCIsImFicyIsImU0IiwiZHVyYXRpb24iLCJudW1iZXJPZkNoYW5uZWxzIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb3B5RnJvbUNoYW5uZWwiLCJBdWRpb0J1ZmZlciIsInByb3RvdHlwZSIsImNvcHlUb0NoYW5uZWwiLCJzIiwieG1sbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwibjMiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiYXNzaWduIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwibiIsInIiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJvIiwiZmV0Y2hCbG9iIiwiZmV0Y2giLCJzdGF0dXMiLCJFcnJvciIsInN0YXR1c1RleHQiLCJib2R5IiwiaGVhZGVycyIsInMzIiwiZ2V0UmVhZGVyIiwiTnVtYmVyIiwiZ2V0Iiwicm91bmQiLCJhIiwicmVhZCIsImNsb25lIiwiYmxvYiIsImlzRXh0ZXJuYWxNZWRpYSIsIm1lZGlhIiwibWVkaWFDb250cm9scyIsImNvbnRyb2xzIiwiYXV0b3BsYXkiLCJwbGF5YmFja1JhdGUiLCJvbk1lZGlhRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNyYyIsImN1cnJlbnRTcmMiLCJzcmMiLCJyZXZva2VTcmMiLCJzdGFydHNXaXRoIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY2FuUGxheVR5cGUiLCJzZXRTcmMiLCJCbG9iIiwidHlwZSIsImNyZWF0ZU9iamVjdFVSTCIsImRlc3Ryb3kiLCJwYXVzZSIsInJlbW92ZSIsImxvYWQiLCJzZXRNZWRpYUVsZW1lbnQiLCJwbGF5IiwiaXNQbGF5aW5nIiwicGF1c2VkIiwiZW5kZWQiLCJzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJtYXgiLCJtaW4iLCJnZXREdXJhdGlvbiIsImdldEN1cnJlbnRUaW1lIiwiZ2V0Vm9sdW1lIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwiZ2V0TXV0ZWQiLCJtdXRlZCIsInNldE11dGVkIiwiZ2V0UGxheWJhY2tSYXRlIiwiaXNTZWVraW5nIiwic2Vla2luZyIsInNldFBsYXliYWNrUmF0ZSIsInByZXNlcnZlc1BpdGNoIiwiZ2V0TWVkaWFFbGVtZW50Iiwic2V0U2lua0lkIiwiaCIsIl9oIiwidGltZW91dHMiLCJpc1Njcm9sbGFibGUiLCJhdWRpb0RhdGEiLCJyZXNpemVPYnNlcnZlciIsImxhc3RDb250YWluZXJXaWR0aCIsImlzRHJhZ2dpbmciLCJzdWJzY3JpcHRpb25zIiwidW5zdWJzY3JpYmVPblNjcm9sbCIsIm9wdGlvbnMiLCJwYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudCIsImluaXRIdG1sIiwic2Nyb2xsQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXIiLCJjYW52YXNXcmFwcGVyIiwicHJvZ3Jlc3NXcmFwcGVyIiwiY3Vyc29yIiwiaW5pdEV2ZW50cyIsIkhUTUxFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkcmFnVG9TZWVrIiwiaW5pdERyYWciLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsIlJlc2l6ZU9ic2VydmVyIiwiY3JlYXRlRGVsYXkiLCJvbkNvbnRhaW5lclJlc2l6ZSIsImNhdGNoIiwib2JzZXJ2ZSIsInJlUmVuZGVyIiwicHVzaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibDIiLCJsMyIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZDIiLCJjMiIsInUyIiwicCIsIkRhdGUiLCJub3ciLCJtIiwicjMiLCJoMyIsImw0IiwibTIiLCJzNCIsIm8zIiwiZiIsImEzIiwiZyIsInJlbGF0ZWRUYXJnZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2IiwiYiIsInBhc3NpdmUiLCJjYXB0dXJlIiwic2V0VGltZW91dCIsImdldEhlaWdodCIsImlzTmFOIiwiY2xpZW50SGVpZ2h0IiwiZXZlcnkiLCJvdmVybGF5IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImNzcE5vbmNlIiwicmVwbGFjZSIsImlubmVySFRNTCIsInNwbGl0Q2hhbm5lbHMiLCJzZXRPcHRpb25zIiwiZ2V0V3JhcHBlciIsImdldFdpZHRoIiwiZ2V0U2Nyb2xsIiwic2V0U2Nyb2xsIiwic2V0U2Nyb2xsUGVyY2VudGFnZSIsImRpc2Nvbm5lY3QiLCJjbGVhclRpbWVvdXQiLCJjb252ZXJ0Q29sb3JWYWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZ2V0UGl4ZWxSYXRpbyIsInJlbmRlckJhcldhdmVmb3JtIiwiY2FudmFzIiwiYmFyV2lkdGgiLCJiYXJHYXAiLCJiYXJSYWRpdXMiLCJiZWdpblBhdGgiLCJiYXJBbGlnbiIsImQzIiwiZmlsbCIsImNsb3NlUGF0aCIsInJlbmRlckxpbmVXYXZlZm9ybSIsIm1vdmVUbyIsImxpbmVUbyIsInJlbmRlcldhdmVmb3JtIiwiZmlsbFN0eWxlIiwid2F2ZUNvbG9yIiwicmVuZGVyRnVuY3Rpb24iLCJiYXJIZWlnaHQiLCJub3JtYWxpemUiLCJmcm9tIiwicmVkdWNlIiwicmVuZGVyU2luZ2xlQ2FudmFzIiwiY2xvbmVOb2RlIiwiZHJhd0ltYWdlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicHJvZ3Jlc3NDb2xvciIsImZpbGxSZWN0IiwicmVuZGVyTXVsdGlDYW52YXMiLCJNQVhfQ0FOVkFTX1dJRFRIIiwiZmxvb3IiLCJtYXAiLCJpNCIsInNsaWNlIiwiY2VpbCIsImtleXMiLCJNQVhfTk9ERVMiLCJyZW5kZXJDaGFubmVsIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibWFyZ2luVG9wIiwibWluSGVpZ2h0IiwicmVuZGVyIiwibWluUHhQZXJTZWMiLCJmaWxsUGFyZW50Iiwib3ZlcmZsb3dYIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGlkZVNjcm9sbGJhciIsImJhY2tncm91bmRDb2xvciIsImN1cnNvckNvbG9yIiwiY3Vyc29yV2lkdGgiLCJyZXNvbHZlIiwicmlnaHQiLCJ6b29tIiwic2Nyb2xsSW50b1ZpZXciLCJhdXRvQ2VudGVyIiwicmVuZGVyUHJvZ3Jlc3MiLCJjbGlwUGF0aCIsInRyYW5zZm9ybSIsImF1dG9TY3JvbGwiLCJleHBvcnRJbWFnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b0RhdGFVUkwiLCJhbGwiLCJ0b0Jsb2IiLCJsIiwiYXJndW1lbnRzIiwidW5zdWJzY3JpYmUiLCJzdGFydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0b3AiLCJkIiwiYnVmZmVyTm9kZSIsInBsYXlTdGFydFRpbWUiLCJwbGF5ZWREdXJhdGlvbiIsIl9tdXRlZCIsIl9wbGF5YmFja1JhdGUiLCJfZHVyYXRpb24iLCJidWZmZXIiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImFycmF5QnVmZmVyIiwiX3BsYXkiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJvbmVuZGVkIiwiX3BhdXNlIiwic3RvcEF0IiwiZ2FpbiIsInRlc3QiLCJnZXRHYWluTm9kZSIsImMiLCJpbnRlcmFjdCIsInUiLCJfdSIsImNyZWF0ZSIsImJhY2tlbmQiLCJhdWRpb1JhdGUiLCJwbHVnaW5zIiwiZGVjb2RlZERhdGEiLCJzdG9wQXRQb3NpdGlvbiIsIm1lZGlhU3Vic2NyaXB0aW9ucyIsImFib3J0Q29udHJvbGxlciIsInRpbWVyIiwicmVuZGVyZXIiLCJpbml0UGxheWVyRXZlbnRzIiwiaW5pdFJlbmRlcmVyRXZlbnRzIiwiaW5pdFRpbWVyRXZlbnRzIiwiaW5pdFBsdWdpbnMiLCJ1cmwiLCJwZWFrcyIsInVwZGF0ZVByb2dyZXNzIiwiZXJyb3IiLCJzZWVrVG8iLCJkZWJvdW5jZVRpbWUiLCJyZWdpc3RlclBsdWdpbiIsInVuc3Vic2NyaWJlUGxheWVyRXZlbnRzIiwiZXhwb3J0UGVha3MiLCJfaW5pdCIsImZpbHRlciIsInNldFNjcm9sbFRpbWUiLCJnZXRBY3RpdmVQbHVnaW5zIiwibG9hZEF1ZGlvIiwiZmV0Y2hQYXJhbXMiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJibG9iTWltZVR5cGUiLCJsb2FkQmxvYiIsImdldERlY29kZWREYXRhIiwiY2hhbm5lbHMiLCJtYXhMZW5ndGgiLCJwcmVjaXNpb24iLCJ0NSIsInRvZ2dsZUludGVyYWN0aW9uIiwicGxheVBhdXNlIiwic2tpcCIsImVtcHR5IiwiYWJvcnQiLCJCYXNlUGx1Z2luIiwib25Jbml0Iiwid2F2ZXN1cmZlciIsImRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMkJBQUE7QUFBQUMsUUFBQSxDQUFBRCwyQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwyQkFBQTs7O0FDQUEsU0FBU08sRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0VBQUMsT0FBTyxLQUFJRCxFQUFBLEtBQUlBLEVBQUEsR0FBRUUsT0FBQSxHQUFXLFVBQVNDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsU0FBU0MsR0FBRUMsRUFBQSxFQUFFO01BQUMsSUFBRztRQUFDQyxFQUFBLENBQUVOLEVBQUEsQ0FBRU8sSUFBQSxDQUFLRixFQUFDLENBQUM7TUFBQyxTQUFPRyxFQUFBLEVBQUU7UUFBQ0wsRUFBQSxDQUFFSyxFQUFDO01BQUM7SUFBQztJQUFDLFNBQVNDLEdBQUVKLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVVLEtBQUEsQ0FBTUwsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFFO1FBQUNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTRixHQUFFRCxFQUFBLEVBQUU7TUFBQyxJQUFJTSxFQUFBO01BQUVOLEVBQUEsQ0FBRU8sSUFBQSxHQUFLVixFQUFBLENBQUVHLEVBQUEsQ0FBRVEsS0FBSyxLQUFHRixFQUFBLEdBQUVOLEVBQUEsQ0FBRVEsS0FBQSxFQUFNRixFQUFBLFlBQWFaLEVBQUEsR0FBRVksRUFBQSxHQUFFLElBQUlaLEVBQUEsQ0FBRyxVQUFTUyxF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QixFQUFBLElBQUdBLEVBQUEsQ0FBRSxDQUFFLEdBQUUsS0FBS2dXLHVCQUFBLENBQXdCLEdBQUUsS0FBS2IsS0FBQSxDQUFNN08sT0FBQSxDQUFRLEdBQUUsS0FBSzhPLFFBQUEsQ0FBUzlPLE9BQUEsQ0FBUSxHQUFFLE1BQU1BLE9BQUEsQ0FBUTtFQUFDO0FBQUM7QUFBQ21PLENBQUEsQ0FBRTZDLFVBQUEsR0FBVyxjQUFjMVcsQ0FBQSxDQUFDO0VBQUNDLFlBQVlyQixFQUFBLEVBQUU7SUFBQyxNQUFNLEdBQUUsS0FBS2tKLGFBQUEsR0FBYyxFQUFDLEVBQUUsS0FBS0UsT0FBQSxHQUFRcEosRUFBQTtFQUFDO0VBQUMrWCxPQUFBLEVBQVEsQ0FBQztFQUFDckIsTUFBTTFXLEVBQUEsRUFBRTtJQUFDLEtBQUtnWSxVQUFBLEdBQVdoWSxFQUFBLEVBQUUsS0FBSytYLE1BQUEsQ0FBTztFQUFDO0VBQUNqUixRQUFBLEVBQVM7SUFBQyxLQUFLOUUsSUFBQSxDQUFLLFNBQVMsR0FBRSxLQUFLa0gsYUFBQSxDQUFjakgsT0FBQSxDQUFTakMsRUFBQSxJQUFHQSxFQUFBLENBQUUsQ0FBRTtFQUFDO0FBQUMsR0FBRWlWLENBQUEsQ0FBRWdELEdBQUEsR0FBSTVULENBQUE7OztBREdydDVCLElBQU8xRSwyQkFBQSxHQUFRc1YsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=