System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/auth-login",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 2668415778,
        creator: function (require, exports) {
          exports.txt = {
            "version": "Version",
            "footer": {
              "intro": "By creating an account you are agreeing to the ",
              "terms": "terms and conditions",
              "connector": "of service and the",
              "privacy": "privacy policy"
            },
            "tutorials": {
              "webinar": {
                "title": "Online webinar",
                "description": "Every Thursday 5.30 PM"
              },
              "teachers": "Tutorial for teachers",
              "students": "Tutorial for students"
            },
            "presentation": {
              "title": "We empower teaching and learning processes with Artificial Intelligence",
              "contents": "<strong>Create dynamic curricular contents</strong> and monitor students' learning process.",
              "experience": "<strong>Personalize the educational experience</strong>, adapting to students' learning pace and style.",
              "tutorials": {
                "webinar": {
                  "title": "Online webinar",
                  "description": "Visit our YouTube channel"
                },
                "teachers": "Tutorial for teachers",
                "students": "Tutorial for students"
              },
              "socialMedia": "Follow us on our social media"
            },
            "errors": {
              "unknown": "The action could not be completed. Please try again later."
            },
            "title": "Transforming education with the power of AI",
            "description": "Our platform offers both an assistant AI for teachers and an AI tutor for students. We aim to provide comprehensive support for both educators and learners alike.",
            "loginTitle": "Login",
            "subtitle": "Start your trial period",
            "emailLabel": "Email",
            "passwordLabel": "Password",
            "termsAndPrivacy": "By creating an account you agree to",
            "terms": "Terms of Service",
            "connector": "and",
            "policy": "Privacy Policy",
            "signInButton": "Sign in",
            "closeButton": "Close",
            "socialLoginTitle": "Or sign in with social login",
            "googleSignInButton": "Google Sign In",
            "emailSignInButton": "Continue with email",
            "facebookSignInButton": "Facebook Sign In",
            "forgotPasswordLink": "Forgot your password?",
            "createAccountLink": "Create a new account?",
            "theme": "theme Mode",
            "passwordConditions": {
              "title": "Password must contain",
              "minimumCharacters": "At least 8 characters",
              "minimumLetters": "At least one letter",
              "minimumSpecial": "At least one number or special character"
            }
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});