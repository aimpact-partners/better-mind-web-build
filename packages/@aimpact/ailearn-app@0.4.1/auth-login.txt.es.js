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
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 3696637818,
        creator: function (require, exports) {
          exports.txt = {
            "version": "Versión",
            "footer": {
              "intro": "Al crear una cuenta estás aceptando los ",
              "terms": "términos y condiciones",
              "connector": "del servicio y la",
              "privacy": "política de privacidad"
            },
            "tutorials": {
              "webinar": {
                "title": "Webinar online",
                "description": "Todos los jueves 17.30 HS"
              },
              "teachers": "Tutorial para docentes",
              "students": "Tutorial para alumnos"
            },
            "presentation": {
              "title": "Potenciamos la enseñanza y el proceso de aprendizaje con Inteligencia Artificial",
              "contents": "<strong>Crea contenidos curriculares</strong> dinámicos y monitorea el proceso de aprendizaje de los alumnos.",
              "experience": "<strong>Personaliza la experiencia educativa</strong>, adaptándose al ritmo y estilo de aprendizaje de los alumnos.",
              "tutorials": {
                "webinar": {
                  "title": "Webinar online",
                  "description": "Visitá nuestro canal de YouTube"
                },
                "teachers": "Tutorial para docentes",
                "students": "Tutorial para alumnos"
              },
              "socialMedia": "Seguinos en nuestras redes"
            },
            "errors": {
              "unknown": "No se ha podido completar la acción. Por favor, inténtelo de nuevo más tarde."
            },
            "title": "Transformar la educación con el poder de la IA",
            "description": "Nuestra plataforma ofrece tanto un asistente de IA para profesores como un tutor de IA para alumnos. Nuestro objetivo es ofrecer un apoyo integral tanto a los educadores como a los alumnos.",
            "loginTitle": "Inicie sesión",
            "subtitle": "Comience su periodo de prueba",
            "emailLabel": "Correo electrónico",
            "passwordLabel": "Contraseña",
            "termsAndPrivacy": "Al crear una cuenta, aceptas nuestros ",
            "tterms": "Términos de servicio",
            "connector": "y",
            "policy": "Política de privacidad",
            "signInButton": "Inicie sesión",
            "socialLoginTitle": "O inicia sesión con una cuenta de redes sociales",
            "googleSignInButton": "Iniciar sesión con Google",
            "emailSignInButton": "Continuar con tu correo",
            "closeButton": "Cerrar",
            "facebookSignInButton": "Iniciar sesión con Facebook",
            "forgotPasswordLink": "¿Olvidaste tu contraseña?",
            "createAccountLink": "Crear una cuenta nueva",
            "theme": "Modo %them",
            "passwordConditions": {
              "title": "La contraseña debe contener",
              "minimumCharacters": "Al menos 8 caracteres",
              "minimumLetters": "Al menos una letra",
              "minimumSpecial": "Al menos un número o carácter especial"
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