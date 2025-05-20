System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-sdk",
        "version": "1.2.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es", "de"]
        },
        "environment": "development",
        "global.css": true,
        "params": {
          "project": "ailearn",
          "baseUrl": "https://dev.app.rvd.ai",
          "apis": {
            "rvd": {
              "ailearn": "https://dev.ailearn.api.aimpact.partners",
              "chat": "https://dev.agents.api.aimpact.partners"
            },
            "better-mind": {
              "ailearn": "https://better-mind-api-1062406359948.europe-west10.run.app/",
              "chat": "https://agents-api-883367315651.europe-west10.run.app/"
            }
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});