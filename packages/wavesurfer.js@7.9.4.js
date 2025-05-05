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

// .beyond/uimport/wavesurfer.js.7.9.4.js
var wavesurfer_js_7_9_4_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC93YXZlc3VyZmVyLmpzLjcuOS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dhdmVzdXJmZXIuanMvZGlzdC93YXZlc3VyZmVyLmVzbS5qcyJdLCJuYW1lcyI6WyJ3YXZlc3VyZmVyX2pzXzdfOV80X2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ3YXZlc3VyZmVyX2pzXzdfOV80X2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidCIsInQyIiwiZTIiLCJpMiIsInMyIiwiUHJvbWlzZSIsIm4yIiwicjIiLCJvMiIsInQzIiwiaDIiLCJuZXh0IiwidDQiLCJhMiIsInRocm93IiwiZTMiLCJkb25lIiwidmFsdWUiLCJ0aGVuIiwiYXBwbHkiLCJTdXBwcmVzc2VkRXJyb3IiLCJlIiwiY29uc3RydWN0b3IiLCJsaXN0ZW5lcnMiLCJvbiIsIlNldCIsImFkZCIsIm9uY2UiLCJpMyIsImkiLCJ1biIsImRlbGV0ZSIsInVuQWxsIiwiZW1pdCIsImZvckVhY2giLCJkZWNvZGUiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwiZGVjb2RlQXVkaW9EYXRhIiwiZmluYWxseSIsImNsb3NlIiwiY3JlYXRlQnVmZmVyIiwic29tZSIsImxlbmd0aCIsIk1hdGgiLCJhYnMiLCJlNCIsImR1cmF0aW9uIiwibnVtYmVyT2ZDaGFubmVscyIsImdldENoYW5uZWxEYXRhIiwiY29weUZyb21DaGFubmVsIiwiQXVkaW9CdWZmZXIiLCJwcm90b3R5cGUiLCJjb3B5VG9DaGFubmVsIiwicyIsInhtbG5zIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsIm4zIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImFzc2lnbiIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsIm4iLCJyIiwiZnJlZXplIiwiX19wcm90b19fIiwibyIsImZldGNoQmxvYiIsImZldGNoIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiYm9keSIsImhlYWRlcnMiLCJzMyIsImdldFJlYWRlciIsIk51bWJlciIsImdldCIsInJvdW5kIiwiYSIsInJlYWQiLCJjbG9uZSIsImJsb2IiLCJpc0V4dGVybmFsTWVkaWEiLCJtZWRpYSIsIm1lZGlhQ29udHJvbHMiLCJjb250cm9scyIsImF1dG9wbGF5IiwicGxheWJhY2tSYXRlIiwib25NZWRpYUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTcmMiLCJjdXJyZW50U3JjIiwic3JjIiwicmV2b2tlU3JjIiwic3RhcnRzV2l0aCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNhblBsYXlUeXBlIiwic2V0U3JjIiwiQmxvYiIsInR5cGUiLCJjcmVhdGVPYmplY3RVUkwiLCJkZXN0cm95IiwicGF1c2UiLCJyZW1vdmUiLCJsb2FkIiwic2V0TWVkaWFFbGVtZW50IiwicGxheSIsImlzUGxheWluZyIsInBhdXNlZCIsImVuZGVkIiwic2V0VGltZSIsImN1cnJlbnRUaW1lIiwibWF4IiwibWluIiwiZ2V0RHVyYXRpb24iLCJnZXRDdXJyZW50VGltZSIsImdldFZvbHVtZSIsInZvbHVtZSIsInNldFZvbHVtZSIsImdldE11dGVkIiwibXV0ZWQiLCJzZXRNdXRlZCIsImdldFBsYXliYWNrUmF0ZSIsImlzU2Vla2luZyIsInNlZWtpbmciLCJzZXRQbGF5YmFja1JhdGUiLCJwcmVzZXJ2ZXNQaXRjaCIsImdldE1lZGlhRWxlbWVudCIsInNldFNpbmtJZCIsImgiLCJ0aW1lb3V0cyIsImlzU2Nyb2xsYWJsZSIsImF1ZGlvRGF0YSIsInJlc2l6ZU9ic2VydmVyIiwibGFzdENvbnRhaW5lcldpZHRoIiwiaXNEcmFnZ2luZyIsInN1YnNjcmlwdGlvbnMiLCJ1bnN1YnNjcmliZU9uU2Nyb2xsIiwib3B0aW9ucyIsInBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyIiwiY29udGFpbmVyIiwicGFyZW50IiwiaW5pdEh0bWwiLCJzY3JvbGxDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlciIsImNhbnZhc1dyYXBwZXIiLCJwcm9ncmVzc1dyYXBwZXIiLCJjdXJzb3IiLCJpbml0RXZlbnRzIiwiSFRNTEVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImRyYWdUb1NlZWsiLCJpbml0RHJhZyIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwiUmVzaXplT2JzZXJ2ZXIiLCJjcmVhdGVEZWxheSIsIm9uQ29udGFpbmVyUmVzaXplIiwiY2F0Y2giLCJvYnNlcnZlIiwicmVSZW5kZXIiLCJwdXNoIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsMiIsImwzIiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJkMiIsImMyIiwidTIiLCJwIiwiRGF0ZSIsIm5vdyIsIm0iLCJyMyIsImgzIiwibDQiLCJtMiIsInM0IiwibzMiLCJmIiwiYTMiLCJnIiwicmVsYXRlZFRhcmdldCIsImRvY3VtZW50RWxlbWVudCIsInYiLCJiIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJzZXRUaW1lb3V0IiwiZ2V0SGVpZ2h0IiwiaXNOYU4iLCJjbGllbnRIZWlnaHQiLCJldmVyeSIsIm92ZXJsYXkiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiY3NwTm9uY2UiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwic3BsaXRDaGFubmVscyIsInNldE9wdGlvbnMiLCJnZXRXcmFwcGVyIiwiZ2V0V2lkdGgiLCJnZXRTY3JvbGwiLCJzZXRTY3JvbGwiLCJzZXRTY3JvbGxQZXJjZW50YWdlIiwiZGlzY29ubmVjdCIsImNsZWFyVGltZW91dCIsImNvbnZlcnRDb2xvclZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJnZXRQaXhlbFJhdGlvIiwicmVuZGVyQmFyV2F2ZWZvcm0iLCJjYW52YXMiLCJiYXJXaWR0aCIsImJhckdhcCIsImJhclJhZGl1cyIsImJlZ2luUGF0aCIsImJhckFsaWduIiwiZDMiLCJmaWxsIiwiY2xvc2VQYXRoIiwicmVuZGVyTGluZVdhdmVmb3JtIiwibW92ZVRvIiwibGluZVRvIiwicmVuZGVyV2F2ZWZvcm0iLCJmaWxsU3R5bGUiLCJ3YXZlQ29sb3IiLCJyZW5kZXJGdW5jdGlvbiIsImJhckhlaWdodCIsIm5vcm1hbGl6ZSIsImZyb20iLCJyZWR1Y2UiLCJyZW5kZXJTaW5nbGVDYW52YXMiLCJjbG9uZU5vZGUiLCJkcmF3SW1hZ2UiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJwcm9ncmVzc0NvbG9yIiwiZmlsbFJlY3QiLCJyZW5kZXJNdWx0aUNhbnZhcyIsIk1BWF9DQU5WQVNfV0lEVEgiLCJmbG9vciIsIm1hcCIsImk0Iiwic2xpY2UiLCJjZWlsIiwia2V5cyIsIk1BWF9OT0RFUyIsInJlbmRlckNoYW5uZWwiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJyZW5kZXIiLCJtaW5QeFBlclNlYyIsImZpbGxQYXJlbnQiLCJvdmVyZmxvd1giLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlU2Nyb2xsYmFyIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yQ29sb3IiLCJjdXJzb3JXaWR0aCIsInJlc29sdmUiLCJyaWdodCIsInpvb20iLCJzY3JvbGxJbnRvVmlldyIsImF1dG9DZW50ZXIiLCJyZW5kZXJQcm9ncmVzcyIsImNsaXBQYXRoIiwidHJhbnNmb3JtIiwiYXV0b1Njcm9sbCIsImV4cG9ydEltYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsInRvRGF0YVVSTCIsImFsbCIsInRvQmxvYiIsImwiLCJhcmd1bWVudHMiLCJ1bnN1YnNjcmliZSIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsImQiLCJidWZmZXJOb2RlIiwicGxheVN0YXJ0VGltZSIsInBsYXllZER1cmF0aW9uIiwiX211dGVkIiwiX3BsYXliYWNrUmF0ZSIsIl9kdXJhdGlvbiIsImJ1ZmZlciIsImNyb3NzT3JpZ2luIiwiYXVkaW9Db250ZXh0IiwiZ2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiYXJyYXlCdWZmZXIiLCJfcGxheSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsIm9uZW5kZWQiLCJfcGF1c2UiLCJzdG9wQXQiLCJnYWluIiwidGVzdCIsImdldEdhaW5Ob2RlIiwiYyIsImludGVyYWN0IiwidSIsImNyZWF0ZSIsImJhY2tlbmQiLCJhdWRpb1JhdGUiLCJwbHVnaW5zIiwiZGVjb2RlZERhdGEiLCJzdG9wQXRQb3NpdGlvbiIsIm1lZGlhU3Vic2NyaXB0aW9ucyIsImFib3J0Q29udHJvbGxlciIsInRpbWVyIiwicmVuZGVyZXIiLCJpbml0UGxheWVyRXZlbnRzIiwiaW5pdFJlbmRlcmVyRXZlbnRzIiwiaW5pdFRpbWVyRXZlbnRzIiwiaW5pdFBsdWdpbnMiLCJ1cmwiLCJwZWFrcyIsInVwZGF0ZVByb2dyZXNzIiwiZXJyb3IiLCJzZWVrVG8iLCJkZWJvdW5jZVRpbWUiLCJyZWdpc3RlclBsdWdpbiIsInVuc3Vic2NyaWJlUGxheWVyRXZlbnRzIiwiZXhwb3J0UGVha3MiLCJfaW5pdCIsImZpbHRlciIsInNldFNjcm9sbFRpbWUiLCJnZXRBY3RpdmVQbHVnaW5zIiwibG9hZEF1ZGlvIiwiZmV0Y2hQYXJhbXMiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJibG9iTWltZVR5cGUiLCJsb2FkQmxvYiIsImdldERlY29kZWREYXRhIiwiY2hhbm5lbHMiLCJtYXhMZW5ndGgiLCJwcmVjaXNpb24iLCJ0NSIsInRvZ2dsZUludGVyYWN0aW9uIiwicGxheVBhdXNlIiwic2tpcCIsImVtcHR5IiwiYWJvcnQiLCJCYXNlUGx1Z2luIiwib25Jbml0Iiwid2F2ZXN1cmZlciIsImRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMkJBQUE7QUFBQUMsUUFBQSxDQUFBRCwyQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwyQkFBQTs7O0FDQUEsU0FBU08sRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0VBQUMsT0FBTyxLQUFJRCxFQUFBLEtBQUlBLEVBQUEsR0FBRUUsT0FBQSxHQUFXLFVBQVNDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsU0FBU0MsR0FBRUMsRUFBQSxFQUFFO01BQUMsSUFBRztRQUFDQyxFQUFBLENBQUVOLEVBQUEsQ0FBRU8sSUFBQSxDQUFLRixFQUFDLENBQUM7TUFBQyxTQUFPRyxFQUFBLEVBQU47UUFBU0wsRUFBQSxDQUFFSyxFQUFDO01BQUM7SUFBQztJQUFDLFNBQVNDLEdBQUVKLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVVLEtBQUEsQ0FBTUwsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFOO1FBQVNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTRixHQUFFRCxFQUFBLEVBQUU7TUFBQyxJQUFJTSxFQUFBO01BQUVOLEVBQUEsQ0FBRU8sSUFBQSxHQUFLVixFQUFBLENBQUVHLEVBQUEsQ0FBRVEsS0FBSyxLQUFHRixFQUFBLEdBQUVOLEVBQUEsQ0FBRVEsS0FBQSxFQUFNRixFQUFBLFlBQWFaLEVBQUEsR0FBRVksRUFBQSxHQUFFLElBQUlaLEVBQUEsQ0FBRyxVQUFTUyxFQUFBLEVBQUU7UUFBQ0Es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LENBQVEsR0FBRSxNQUFNQSxPQUFBLENBQVE7RUFBQztBQUFDO0FBQUNrTyxDQUFBLENBQUU0QyxVQUFBLEdBQVcsY0FBY3hXLENBQUEsQ0FBQztFQUFDQyxZQUFZckIsRUFBQSxFQUFFO0lBQUMsTUFBTSxHQUFFLEtBQUtpSixhQUFBLEdBQWMsRUFBQyxFQUFFLEtBQUtFLE9BQUEsR0FBUW5KLEVBQUE7RUFBQztFQUFDNlgsT0FBQSxFQUFRLENBQUM7RUFBQ3JCLE1BQU14VyxFQUFBLEVBQUU7SUFBQyxLQUFLOFgsVUFBQSxHQUFXOVgsRUFBQSxFQUFFLEtBQUs2WCxNQUFBLENBQU87RUFBQztFQUFDL1EsUUFBQSxFQUFTO0lBQUMsS0FBSzlFLElBQUEsQ0FBSyxTQUFTLEdBQUUsS0FBS2lILGFBQUEsQ0FBY2hILE9BQUEsQ0FBU2pDLEVBQUEsSUFBR0EsRUFBQSxDQUFFLENBQUU7RUFBQztBQUFDLEdBQUVnVixDQUFBLENBQUUrQyxHQUFBLEdBQUkxVCxDQUFBOzs7QURHcnQ1QixJQUFPMUUsMkJBQUEsR0FBUXFWLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9