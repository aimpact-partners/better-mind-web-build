System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-sdk",
        "version": "1.4.4",
        "languages": {
          "default": "en",
          "supported": ["en", "es", "pr"]
        },
        "environment": "development",
        "global.css": true,
        "layout": "main-layout",
        "params": {
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          },
          "baseUrl": "https://dev.app.rvd.ai",
          "apis": {
            "chat": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});