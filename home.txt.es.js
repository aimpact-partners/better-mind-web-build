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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/home",
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
        hash: 234772958,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Unirse",
              "assign": "Asignar",
              "create": "Crear",
              "register": "Registrar",
              "activities": "Generar actividades",
              "refine": "Refinar",
              "generate": "Generar",
              "imported": "Importado",
              "save": "Guardar",
              "continue": "Continuar",
              "clean": "Limpiar",
              "activity": "Actividades",
              "update": "Subir Documento",
              "edit": "Editar",
              "delete": "Eliminar",
              "cancel": "Cancelar",
              "next": "Siguiente",
              "back": "Atrás",
              "link": "Vincular",
              "gTooltip": "Aula importada desde Google",
              "import": "Importar"
            },
            "assign": {
              "title": {
                "share": "Asignar módulo a aulas",
                "dashboard": "Acceder a dashboard de la asignación"
              },
              "assigned": "Asignado",
              "noAssigned": "No hay aulas asignadas",
              "module": "Módulo",
              "messages": {
                "copied": "Enlace copiado al portapapeles",
                "assigned": "Módulo asignado al aula {classroom}"
              },
              "item": {
                "description": "El item no tiene descripción"
              },
              "actions": {
                "dashboard": "Dashboard",
                "copy": "Copiar link",
                "test": "Probar",
                "navigate": "Navegar",
                "createClassroom": "Crear aula",
                "assign": {
                  "button": "Asignar",
                  "label": "El módulo no ha sido asignado a esta Aula"
                }
              },
              "errors": {
                "default": "No se ha podido asignar el módulo a esta Aula, por favor inténtelo de nuevo más tarde o contacte al administador"
              },
              "empty": {
                "share": {
                  "text": "Atención",
                  "description": "Aún no posees aulas creadas, debes crear una para poder asignar esta actividad.",
                  "action": "Crear aula"
                },
                "dashboard": {
                  "description": "Módulo sin asignaciones"
                }
              }
            },
            "tour": {
              "buttons": {
                "nextBtnText": "Siguiente",
                "prevBtnText": "Anterior",
                "doneBtnText": "Listo"
              },
              "teacher": {
                "step0": {
                  "title": "Bienvenido a tu perfil",
                  "description": "Aquí puedes personalizar tu experiencia en RVD.AI Rivadavia. Podrás  actualizar tu información personal, indicar  tu idioma de preferencia, configurar opciones de accesibilidad y ajustar la velocidad del audio."
                },
                "drafts": {
                  "title": "Módulos en borrador",
                  "description": "Trabaja en tus módulos de aprendizaje en estado de borrador hasta que estén listos para ser publicados y asignados a un aula. Aquí quedarán guardados para que puedas editarlos según tus necesidades. ¡Comienza creando tu primer módulo!"
                },
                "community": {
                  "title": "Comunidad",
                  "description": "Explora nuestra colección de módulos de aprendizaje creados por expertos. Encuentra una variedad de contenidos listos para usar en tus aulas. Puedes editar y personalizar estos módulos según tus criterios para adaptarlos a las necesidades de tus alumnos."
                },
                "classrooms": {
                  "title": "Aulas",
                  "description": "En este espacio puedes crear aulas donde podrás agrupar a tus alumnos y asignarles los módulos de aprendizaje que publiques. Organiza tu clases de manera efectiva y personalizada. ¡Empieza a crear tus aulas y transforma la experiencia educativa!"
                },
                "step3": {
                  "title": "¿Necesitas ayuda?",
                  "description": "Encuentra toda la información en nuestros tutoriales diseñados para ayudarte a sacar el máximo provecho de RVD.AI. Aprende a crear módulos de aprendizaje, gestionar tus aulas y utilizar todas las herramientas que ofrecemos. ¡Explora nuestros tutoriales y navega la plataforma!"
                },
                "modules": {
                  "title": "Mis módulos de aprendizaje",
                  "description": "En esta sección se verán los módulos que el usuario ha creado."
                },
                "assignments": {
                  "title": "Mis asignaciones",
                  "description": "Aquí puedes ver todos los módulos que te han sido asignados dentro de tus aulas. Estas asignaciones contienen el contenido de aprendizaje que debes completar. ¡Explora tus asignaciones y continúa tu camino de aprendizaje!"
                }
              },
              "student": {
                "step0": {
                  "title": "Bienvenido a tu perfil",
                  "description": "Aquí puedes personalizar tu experiencia en RVD.AI Rivadavia. Podrás  actualizar tu información personal, indicar  tu idioma de preferencia, configurar opciones de accesibilidad y ajustar la velocidad del audio."
                },
                "classrooms": {
                  "title": "Aulas",
                  "description": "Aquí puedes ver todas las aulas a las que perteneces. Explora los módulos de aprendizaje asignados, revisa el contenido y mantente al día con tus clases. También puedes unirte a nuevas aulas utilizando un código. ¡Descubre todo lo que puedes aprender en tus aulas!"
                },
                "assignments": {
                  "title": "Mis asignaciones",
                  "description": "Aquí puedes ver todos los módulos que te han sido asignados dentro de tus aulas. Estas asignaciones contienen el contenido de aprendizaje que debes completar. ¡Explora tus asignaciones y continúa tu camino de aprendizaje!"
                }
              }
            },
            "errors": {
              "default": "No se ha podido realizar la operación. Por favor, inténtelo de nuevo."
            },
            "title": "¡Bienvenido!",
            "profile": {
              "edit": "Ir a mi perfil"
            },
            "assignments": {
              "title": "Mis Asignaciones",
              "activities": "Mis Actividades",
              "item": {
                "description": "Esta asignación no posee descripción u objetivo"
              },
              "actions": {
                "link": "Entrar"
              }
            },
            "modules": {
              "title": "Mis Módulos de aprendizaje",
              "empty": "No posees módulos de aprendizaje aún",
              "action": "Publicar un módulo",
              "activities": "Mis Actividades",
              "items": {
                "description": "Este módulo no posee descripción u objetivo",
                "title": "Este módulo no posee título"
              }
            },
            "drafts": {
              "title": "Mis Borradores",
              "empty": {
                "description": "No posees borradores aún",
                "action": "Crear uno nuevo"
              },
              "action": "Crear",
              "items": {
                "description": "Este módulo no posee descripción u objetivo",
                "title": "Este borrador no posee título"
              }
            },
            "community": {
              "title": "Comunidad",
              "actions": {
                "link": "Ver todo",
                "test": "Demo",
                "use": "Crear una versión propia"
              }
            },
            "classrooms": {
              "title": "Mis Aulas",
              "action": "Crear",
              "actions": {
                "create": "Crear",
                "join": "Unirme"
              },
              "empty": {
                "description": "Agrupa a tus alumnos en espacios de trabajo y asigna módulos de aprendizaje personalizados.",
                "action": "Crea tu primer aula"
              },
              "items": {
                "description": "Esta aula no posee descripción u objetivo"
              }
            },
            "students": {
              "title": "Mis Estudiantes"
            },
            "members": {
              "children": "Mis Hijos"
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