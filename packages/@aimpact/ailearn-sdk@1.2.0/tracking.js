System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.0/api", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/reactive@2.0.5/entities/collection", "@aimpact/chat-sdk@1.5.4/core", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Activity, Assignments, Assignment, Credits, TrackingDashboard, ParticipantProvider, Tracking, IActivityListItem, IActivityBase, TrackingStatusType, IActivityTrackingBase, IDashboard, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assignments: void 0,
    Assignment: void 0,
    Credits: void 0,
    TrackingDashboard: void 0,
    ParticipantProvider: void 0,
    Tracking: void 0,
    IActivityListItem: void 0,
    IActivityBase: void 0,
    TrackingStatusType: void 0,
    IActivityTrackingBase: void 0,
    IDashboard: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_1 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk154Session) {
      dependency_2 = _aimpactChatSdk154Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_3 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_5 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_6 = _beyondJsReactive205EntitiesCollection;
    }, function (_aimpactChatSdk154Core) {
      dependency_7 = _aimpactChatSdk154Core;
    }, function (_beyondJsReactive205Model) {
      dependency_8 = _beyondJsReactive205Model;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/tracking"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/startup', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@aimpact/media-manager/uploader', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/config', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./HADERCODED
      ****************************/
      ims.set('./HADERCODED', {
        hash: 4029911701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HARDCODED_RESPONSE = void 0;
          const HARDCODED_RESPONSE = exports.HARDCODED_RESPONSE = {
            status: true,
            data: {
              id: '0138c77d-c3ae-4b86-a943-f86320d6cb14',
              classroom: {
                id: '7d1848f3-1a65-4723-a5ad-c085216a51f6',
                name: '1° - Técnicas de Mezcla',
                picture: ''
              },
              module: {
                id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                creator: {
                  id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                  name: 'Docente Mezcla Tamaba',
                  photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                },
                owner: {
                  id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                  name: 'Instituto Terciario Tamaba',
                  photoUrl: ''
                },
                language: 'es',
                title: 'Introducción al Estudio de Grabación',
                description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                audience: {
                  category: 'higher-education',
                  level: 'tertiary-education',
                  format: 'Educación Superior',
                  entity: 'Referencias Académicas para Educación Superior'
                },
                activities: {
                  count: 5,
                  types: ['content-theory', 'character-talk', 'debate', 'multiple-choice', 'spoken']
                }
              },
              payer: 'module-owner',
              code: 'AEPSKUT',
              public: false,
              activities: {
                order: ['5b56ad68-53c2-43da-86b9-e7d6c4409966', 'e90b3b7f-2569-491b-8290-2ad1842056e8', 'fe93270f-cd49-430e-81bc-817449c280f0', 'b0074f49-5100-4731-b771-db3befd44577', '5bed3375-873d-414f-a52d-577e382f3091'],
                items: {
                  '5b56ad68-53c2-43da-86b9-e7d6c4409966': {
                    id: '5b56ad68-53c2-43da-86b9-e7d6c4409966',
                    type: 'content-theory',
                    title: 'Explorando el Estudio de Grabación',
                    description: 'Actividad centrada en la identificación y análisis de los dos espacios fundamentales en un Estudio de Grabación.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        article: 'Un estudio de grabación es un espacio diseñado específicamente para la grabación, mezcla y en ciertos casos tambien el proceso de masterización. Comprender los elementos esenciales de un estudio de grabación permite apreciar su papel crucial en el proceso de producción musical.\n\nEl control room es el espacio donde se encuentran los dipositivos que nos permiten realizar las diferentes tareas. La consola Anlogica de Estudio, El Dispositivo de Grabación Multicanal, el Sistema de Monitoreo y los Procesadores de Señal Externos. La importancia radica en que permite al ingeniero de sonido tener un control absoluto sobre todos los aspectos de la grabación o mezcla. Aquí se gestionan las señales que provienen de las diferentes espacios del estudio.\n\nLa sala de grabación, o live room, es donde los músicos ejecutan sus piezas. Esta sala está diseñada para optimizar la acústica y proporcionar un entorno sonoro adecuado. Sus dimensiones y materiales influyen en el resultado final. Es fundamental para la producción musical, ya que facilita la captación de la interpretación de los músicos, asegurando que cada matiz se registre con claridad.\n\nEl tratamiento acústico es un componente fundamental en un estudio de grabación. Este se logra a través de diversas herramientas acusticas, El tratamiento Acustico se divide fundamentalmente en dos instancias. Aislación, terminos de aislar el Recinto donde trabajamos de elementos externos y  viceversa. La otra instancia es el tratamiento de los Recintos del Estudio, para obtener espacios con un comportamiento acorde a los estandares de diversos criterios, relacionados con la respuesta en Frecuencia del Recinto y el RT60.\n\nAdemás, el estudio cuenta con áreas específicas como la Iso Booth, o cabina de aislación, que se utilizan principalmente para grabaciones vocales o de instrumentos donde se requiere un control aún más riguroso de esa fuente sonora y su relación o interacción con otras fuentes sonoras.\n\nLa sala de control es donde se lleva a cabo una parte crítica del proceso de producción musical. Aquí se busca dar forma al sonido final a través de la manipulación de la mezcla de diferentes señales. La calidad de esta sala influye en la decisión sobre niveles, distribución de señales dentro de la iamgen estereo y todas las alternativas de procesamiento. Permitiendo a los productores y músicos articular su visión creativa en el producto final.\n\nEl uso del equipo técnico es otro pilar fundamental en el estudio de grabación. Desde micrófonos y accesorios hasta los mencionados procesadores de señal, cada una de estas herramientas tiene su función específica. La selección del equipo adecuado para cada sesión es crucial, ya que puede alterar radicalmente el sonido obtenido y, por ende, la percepción y recepción de la música por parte del público.\n\nPor último, el personal especializado que opera en un estudio de grabación juega un papel decisivo en el éxito del proceso de producción musical. Tecnicas/os de grabación y Mezcla, Productoras/es, Asistentes trabajan conjuntamente en diferentes etapas, aportando su conocimiento y experiencia para optimizar el resultado final.\n\nEn resumen, un estudio de grabación no es solo un espacio físico, sino un ecosistema complejo donde cada elemento, desde los espacios fisicos hasta el personal, contribuyen al proceso creativo. Conocer estos elementos y sus funciones es fundamental para cualquier alumno que desee profundizar en el ámbito de la producción musical.',
                        synthesis: '- **Estudio de grabación**\n  - Espacio para *grabación*, *mezcla* y en ciertos casos *masterización*\n  - Rol *crucial* en producción musical\n\n- **Control room**\n  - Equipos: \n    - **Consola analógica**\n    - **Grabador multicanal**\n    - **Sistema de monitoreo**\n    - **Procesadores de señal externos**\n  - Control *absoluto* sobre grabación y mezcla\n  - Gestión de *señales* del estudio\n\n- **Sala de grabación (live room)**\n  - Espacio para *ejecución* musical\n  - Diseñada para *optimizar acústica*\n  - Influencia de *dimensiones* y *materiales*\n  - Captación de *matices sonoros* \n\n- **Tratamiento acústico**\n  - Componentes *fundamentales*\n  - **Aislación**: separación de elementos externos \n  - **Tratamiento de recintos**: \n    - Comportamiento acústico acorde a *estándares*\n    - *Respuesta en frecuencia* y *RT60*\n\n- **Iso Booth**\n  - Cabina de *aislación*\n  - Uso en grabaciones de *voces* e *instrumentos*\n  - Control *riguroso* de fuente sonora\n\n- **Sala de control**\n  - *Formación* del sonido final\n  - Manipulación de *mezcla de señales*\n  - Influencia en *niveles* y *distribución* de señales\n  - Permite articular *visión creativa*\n\n- **Equipo técnico**\n  - Herramientas: *micrófonos*, *accesorios*, *procesadores*\n  - Selección adecuada impacta en *sonido* y *percepción*\n\n- **Personal especializado**\n  - Rola clave en el éxito del proceso\n  - Técnicos de *grabación* y *mezcla*\n  - Productores y *asistentes* \n  - Aportan *conocimiento* y *experiencia*\n\n- **Resumen**\n  - Estudio como *ecosistema complejo*\n  - Conocimiento de *elementos* y *funciones* esencial para la producción musical',
                        dyslexia: 'Un estudio de grabación es un lugar donde se crea música y otros sonidos. En este espacio se graba, mezcla. Es importante entender cómo funciona un estudio para valorar su papel en la música.\n\nEl control room es la sala principal. Aquí están los dispositivos que ayudan a grabar y mezclar. Hay una consola que controla el sonido. También hay un dispositivo para grabar muchos sonidos a la vez. La mezcla se escucha en altavoces llamados monitores. Este espacio permite al ingeniero de sonido controlar todo lo que se graba.\n\nLa sala de grabación, o recording room, es el lugar donde los músicos tocan. Está diseñada para que suene bien. La forma y los materiales de la sala afectan cómo se escucha la música. Es clave para grabar la interpretación de los músicos. Así, cada detalle se escucha con claridad.\n\nEl tratamiento acústico es muy importante en un estudio. Esto significa eliminar los ruidos de afuera y mejorar el sonido dentro del estudio. Hay dos partes en el tratamiento acústico. Primero, la aislación, que evita que el ruido exterior entre. Segundo, el tratamiento, que mejora cómo suena el espacio donde se graba.\n\nTambién hay áreas especiales como la Iso Booth, que es una cabina aislada. Se usa para grabar voces e instrumentos de manera más controlada. En este lugar, el sonido se mantiene limpio y sin distracciones.\n\nLa sala de control es donde se produce el sonido final. Aquí se mezcla el sonido de diferentes grabaciones. La calidad de esta sala es muy importante. Ayuda a los productores y músicos a lograr su idea de cómo debe sonar la canción.\n\nEl equipo técnico es esencial en el estudio. Hay micrófonos, procesadores y otros instrumentos que ayudan durante las diferentes etapas. Elegir el equipo correcto es crucial. Esto puede cambiar mucho cómo suena la música, y cómo la escucha el público.\n\nEl personal que trabaja en un estudio es clave. Hay técnicos de grabación, mezcladores y asistentes. Todos colaboran en las diferentes etapas del proceso. Su experiencia mejora el resultado final.\n\nPara resumir, un estudio de grabación es más que solo un lugar. Es un sistema donde cada parte, desde el espacio hasta las personas, ayuda a crear música. Conocer estos elementos es importante para cualquier estudiante que quiera aprender sobre producción musical.',
                        audios: {
                          article: {
                            status: true,
                            url: 'https://ailearn.api.aimpact.partners/activities/5b56ad68-53c2-43da-86b9-e7d6c4409966/materials/article/audio'
                          }
                        }
                      },
                      specs: {
                        topic: 'Espacios del Estudio de Grabación',
                        task: 'Investiga y presenta detalladamente los dos espacios que componen el Estudio de Grabación: la Sala de Control y la Sala de Grabación. Describe sus características, funciones y cómo interactúan entre sí durante el proceso de producción musical. Utiliza ejemplos prácticos y visuales para respaldar tu presentación.',
                        objectives: [{
                          name: 'Identificación de Espacios',
                          objective: 'Reconocer y describir la Sala de Control y la Sala de Grabación como elementos clave en la Producción Musical.'
                        }, {
                          name: 'Análisis Funcional',
                          objective: 'Analizar las funciones específicas y la importancia de cada sala en el proceso de grabación y producción.'
                        }],
                        instructions: 'Presentar los dos espacios fundamentales que componen el Estudio de Grabación. Sala de Control (Control Room), Sala de Grabación (Recording/Tracking Room).'
                      }
                    },
                    settings: {
                      layout: 'main-content-layout'
                    }
                  },
                  'e90b3b7f-2569-491b-8290-2ad1842056e8': {
                    id: 'e90b3b7f-2569-491b-8290-2ad1842056e8',
                    type: 'character-talk',
                    title: 'Conversación con un Productor Musical',
                    description: 'Explora y reflexiona sobre las decisiones técnicas y creativas en un estudio de grabación a través de un diálogo con un famoso productor musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Eres un productor musical reconocido que comparte su experiencia y responde a las preguntas sobre la mezcla y la producción en un estudio.',
                        task: 'Interactúa con el productor musical haciendo preguntas sobre su trabajo en el estudio. Reflexiona sobre las decisiones que toma durante el proceso de mezcla y cómo estas afectan el resultado final de la música. Aprovecha esta oportunidad para aprender sobre las técnicas y la creatividad en la producción musical.',
                        objectives: [{
                          name: 'Decisiones técnicas',
                          objective: 'Entender las decisiones técnicas cruciales al mezclar música.'
                        }, {
                          name: 'Creatividad en producción',
                          objective: 'Fomentar la creatividad al elegir elementos sonoros y técnicas de producción.'
                        }, {
                          name: 'Formulación de preguntas',
                          objective: 'Desarrollar habilidades para formular preguntas relevantes sobre producción musical.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'fe93270f-cd49-430e-81bc-817449c280f0': {
                    id: 'fe93270f-cd49-430e-81bc-817449c280f0',
                    type: 'debate',
                    title: 'Defensa del Estudio de Grabación',
                    description: 'Un debate enfocado en la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical frente a herramientas digitales.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Docente',
                        subject: 'La relevancia del estudio de grabación de Grbaciòn y los dispositivos analogicos que lo componen como estándar en la producción musical.',
                        task: 'Vas a participar en un debate donde deberás defender la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical. Presenta tus argumentos de manera clara y concisa, y utiliza ejemplos que respalden tu postura. También tendrás que anticipar las objeciones que pueda presentar el chatbot y prepararte para responder a ellas con lógica y claridad.',
                        objectives: [{
                          name: 'Argumentación',
                          objective: 'Desarrollar habilidades de argumentación en la defensa de los estudios de grabación.'
                        }, {
                          name: 'Pensamiento Crítico',
                          objective: 'Fomentar el pensamiento crítico al comparar dispositivos analógicos y digitales.'
                        }, {
                          name: 'Competencias Emocionales',
                          objective: 'Incorporar la autoconfianza y la gestión emocional durante el debate.'
                        }, {
                          name: 'Metacognición',
                          objective: 'Reflexionar sobre el proceso de argumentación y los propios pensamientos en el debate.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'b0074f49-5100-4731-b771-db3befd44577': {
                    id: 'b0074f49-5100-4731-b771-db3befd44577',
                    type: 'multiple-choice',
                    title: 'Evaluación sobre el Estudio de Grabación en Producción Musical',
                    description: 'Esta actividad tiene como objetivo evaluar tu comprensión sobre el funcionamiento y los elementos esenciales de un estudio de grabación, así como su papel en la producción musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        assessment: '{"title":"Evaluación sobre el Estudio de Grabación en Producción Musical","questions":[{"question":"¿Cuál es el propósito principal de un estudio de grabación?","options":["Mejorar la calidad visual de las grabaciones","Diseñar espacios para ensayar","Proveer un espacio adecuado para la grabación, mezcla y en ciertos casos la masterización de un Proyecto Musical.  ","Almacenar instrumentos musicales"],"correctAnswer":2},{"question":"¿Qué función cumple la sala de control en un estudio de grabación?","options":["Grabar las voces de los músicos","Cambiar la acústica del recinto","Dar forma al sonido final mediante mezcla","Aislar instrumentos ruidosos"],"correctAnswer":2},{"question":"¿Qué aspecto es fundamental en el tratamiento acústico de un estudio?","options":["La estética de los muebles","La capacitación del personal","La respuesta en frecuencia del recinto y el rt60.","La variedad de instrumentos disponibles"],"correctAnswer":2},{"question":"¿Qué es una Iso Booth en un estudio de grabación?","options":["Una sala destinada para la mezcla","Un espacio para grabaciones en un ambiente controlado","Un área de descanso para los músicos","Un equipo de grabación multicanal"],"correctAnswer":1},{"question":"¿Por qué es importante la selección de equipo técnico en un estudio de grabación?","options":["Asegura que el estudio esté ordenado","Aumenta la velocidad de grabación","Puede alterar radicalmente el sonido obtenido","Facilita el trabajo del personal administrativo"],"correctAnswer":2}]}'
                      },
                      specs: {
                        task: '',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  '5bed3375-873d-414f-a52d-577e382f3091': {
                    id: '5bed3375-873d-414f-a52d-577e382f3091',
                    type: 'spoken',
                    title: 'Diferencias en Mezclas de Sonido',
                    description: 'Exposición sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida, mostrando claridad en la comprensión del tema.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        assessment: 'El estudiante debe exponer oralmente las diferencias entre los tipos de mezcla indicados. Evalúa la claridad de la presentación, la profundidad del contenido, la estructura lógica de la exposición y el cumplimiento del tiempo asignado. Asegúrate de leer la transcripción del discurso para una evaluación precisa.',
                        criteria: [{
                          name: 'Claridad',
                          subject: 'El estudiante debe presentar sus ideas de manera clara y comprensible, empleando un lenguaje apropiado para el tema abordado.'
                        }, {
                          name: 'Contenido',
                          subject: 'La presentación debe incluir las diferencias clave entre Out The Box, In The Box e Híbrida, evidenciando un buen dominio del tema.'
                        }, {
                          name: 'Estructura',
                          subject: 'La exposición debe tener una introducción clara, un desarrollo coherente y una conclusión que resuma las ideas principales.'
                        }, {
                          name: 'Tiempo',
                          subject: 'El hablante debe realizar la presentación dentro del tiempo estipulado de tres minutos, administrando el tiempo de manera efectiva.'
                        }],
                        task: 'Prepara una exposición de no más de tres minutos sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida. Asegúrate de abordar las características distintivas de cada tipo de mezcla, estructurando tu presentación con una introducción, desarrollo y conclusión clara. Mantén un lenguaje técnico apropiado y asegúrate de terminar tu exposición en el tiempo indicado.',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  }
                }
              },
              teachers: [{
                uid: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                name: 'Docente Mezcla Tamaba',
                photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
              }],
              archived: false,
              access: 'approved',
              accessed: false,
              community: false
            }
          };
        }
      });

      /****************************
      INTERNAL MODULE: ./HARCODED_2
      ****************************/

      ims.set('./HARCODED_2', {
        hash: 151410810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HARDCODED2 = void 0;
          const HARDCODED2 = exports.HARDCODED2 = {
            status: true,
            data: {
              id: '0138c77d-c3ae-4b86-a943-f86320d6cb14',
              classroom: {
                id: '7d1848f3-1a65-4723-a5ad-c085216a51f6',
                name: '1° - Técnicas de Mezcla',
                picture: ''
              },
              module: {
                id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                creator: {
                  id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                  name: 'Docente Mezcla Tamaba',
                  photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                },
                owner: {
                  id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                  name: 'Instituto Terciario Tamaba',
                  photoUrl: ''
                },
                language: 'es',
                title: 'Introducción al Estudio de Grabación',
                description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                audience: {
                  category: 'higher-education',
                  level: 'tertiary-education',
                  format: 'Educación Superior',
                  entity: 'Referencias Académicas para Educación Superior'
                },
                activities: {
                  count: 5,
                  types: ['content-theory', 'character-talk', 'debate', 'multiple-choice', 'spoken']
                }
              },
              payer: 'module-owner',
              code: 'AEPSKUT',
              public: false,
              activities: {
                order: ['5b56ad68-53c2-43da-86b9-e7d6c4409966', 'e90b3b7f-2569-491b-8290-2ad1842056e8', 'fe93270f-cd49-430e-81bc-817449c280f0', 'b0074f49-5100-4731-b771-db3befd44577', '5bed3375-873d-414f-a52d-577e382f3091'],
                items: {
                  '5b56ad68-53c2-43da-86b9-e7d6c4409966': {
                    id: '5b56ad68-53c2-43da-86b9-e7d6c4409966',
                    type: 'content-theory',
                    title: 'Explorando el Estudio de Grabación',
                    description: 'Actividad centrada en la identificación y análisis de los dos espacios fundamentales en un Estudio de Grabación.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        article: 'Un estudio de grabación es un espacio diseñado específicamente para la grabación, mezcla y en ciertos casos tambien el proceso de masterización. Comprender los elementos esenciales de un estudio de grabación permite apreciar su papel crucial en el proceso de producción musical.\n\nEl control room es el espacio donde se encuentran los dipositivos que nos permiten realizar las diferentes tareas. La consola Anlogica de Estudio, El Dispositivo de Grabación Multicanal, el Sistema de Monitoreo y los Procesadores de Señal Externos. La importancia radica en que permite al ingeniero de sonido tener un control absoluto sobre todos los aspectos de la grabación o mezcla. Aquí se gestionan las señales que provienen de las diferentes espacios del estudio.\n\nLa sala de grabación, o live room, es donde los músicos ejecutan sus piezas. Esta sala está diseñada para optimizar la acústica y proporcionar un entorno sonoro adecuado. Sus dimensiones y materiales influyen en el resultado final. Es fundamental para la producción musical, ya que facilita la captación de la interpretación de los músicos, asegurando que cada matiz se registre con claridad.\n\nEl tratamiento acústico es un componente fundamental en un estudio de grabación. Este se logra a través de diversas herramientas acusticas, El tratamiento Acustico se divide fundamentalmente en dos instancias. Aislación, terminos de aislar el Recinto donde trabajamos de elementos externos y  viceversa. La otra instancia es el tratamiento de los Recintos del Estudio, para obtener espacios con un comportamiento acorde a los estandares de diversos criterios, relacionados con la respuesta en Frecuencia del Recinto y el RT60.\n\nAdemás, el estudio cuenta con áreas específicas como la Iso Booth, o cabina de aislación, que se utilizan principalmente para grabaciones vocales o de instrumentos donde se requiere un control aún más riguroso de esa fuente sonora y su relación o interacción con otras fuentes sonoras.\n\nLa sala de control es donde se lleva a cabo una parte crítica del proceso de producción musical. Aquí se busca dar forma al sonido final a través de la manipulación de la mezcla de diferentes señales. La calidad de esta sala influye en la decisión sobre niveles, distribución de señales dentro de la iamgen estereo y todas las alternativas de procesamiento. Permitiendo a los productores y músicos articular su visión creativa en el producto final.\n\nEl uso del equipo técnico es otro pilar fundamental en el estudio de grabación. Desde micrófonos y accesorios hasta los mencionados procesadores de señal, cada una de estas herramientas tiene su función específica. La selección del equipo adecuado para cada sesión es crucial, ya que puede alterar radicalmente el sonido obtenido y, por ende, la percepción y recepción de la música por parte del público.\n\nPor último, el personal especializado que opera en un estudio de grabación juega un papel decisivo en el éxito del proceso de producción musical. Tecnicas/os de grabación y Mezcla, Productoras/es, Asistentes trabajan conjuntamente en diferentes etapas, aportando su conocimiento y experiencia para optimizar el resultado final.\n\nEn resumen, un estudio de grabación no es solo un espacio físico, sino un ecosistema complejo donde cada elemento, desde los espacios fisicos hasta el personal, contribuyen al proceso creativo. Conocer estos elementos y sus funciones es fundamental para cualquier alumno que desee profundizar en el ámbito de la producción musical.',
                        synthesis: '- **Estudio de grabación**\n  - Espacio para *grabación*, *mezcla* y en ciertos casos *masterización*\n  - Rol *crucial* en producción musical\n\n- **Control room**\n  - Equipos: \n    - **Consola analógica**\n    - **Grabador multicanal**\n    - **Sistema de monitoreo**\n    - **Procesadores de señal externos**\n  - Control *absoluto* sobre grabación y mezcla\n  - Gestión de *señales* del estudio\n\n- **Sala de grabación (live room)**\n  - Espacio para *ejecución* musical\n  - Diseñada para *optimizar acústica*\n  - Influencia de *dimensiones* y *materiales*\n  - Captación de *matices sonoros* \n\n- **Tratamiento acústico**\n  - Componentes *fundamentales*\n  - **Aislación**: separación de elementos externos \n  - **Tratamiento de recintos**: \n    - Comportamiento acústico acorde a *estándares*\n    - *Respuesta en frecuencia* y *RT60*\n\n- **Iso Booth**\n  - Cabina de *aislación*\n  - Uso en grabaciones de *voces* e *instrumentos*\n  - Control *riguroso* de fuente sonora\n\n- **Sala de control**\n  - *Formación* del sonido final\n  - Manipulación de *mezcla de señales*\n  - Influencia en *niveles* y *distribución* de señales\n  - Permite articular *visión creativa*\n\n- **Equipo técnico**\n  - Herramientas: *micrófonos*, *accesorios*, *procesadores*\n  - Selección adecuada impacta en *sonido* y *percepción*\n\n- **Personal especializado**\n  - Rola clave en el éxito del proceso\n  - Técnicos de *grabación* y *mezcla*\n  - Productores y *asistentes* \n  - Aportan *conocimiento* y *experiencia*\n\n- **Resumen**\n  - Estudio como *ecosistema complejo*\n  - Conocimiento de *elementos* y *funciones* esencial para la producción musical',
                        dyslexia: 'Un estudio de grabación es un lugar donde se crea música y otros sonidos. En este espacio se graba, mezcla. Es importante entender cómo funciona un estudio para valorar su papel en la música.\n\nEl control room es la sala principal. Aquí están los dispositivos que ayudan a grabar y mezclar. Hay una consola que controla el sonido. También hay un dispositivo para grabar muchos sonidos a la vez. La mezcla se escucha en altavoces llamados monitores. Este espacio permite al ingeniero de sonido controlar todo lo que se graba.\n\nLa sala de grabación, o recording room, es el lugar donde los músicos tocan. Está diseñada para que suene bien. La forma y los materiales de la sala afectan cómo se escucha la música. Es clave para grabar la interpretación de los músicos. Así, cada detalle se escucha con claridad.\n\nEl tratamiento acústico es muy importante en un estudio. Esto significa eliminar los ruidos de afuera y mejorar el sonido dentro del estudio. Hay dos partes en el tratamiento acústico. Primero, la aislación, que evita que el ruido exterior entre. Segundo, el tratamiento, que mejora cómo suena el espacio donde se graba.\n\nTambién hay áreas especiales como la Iso Booth, que es una cabina aislada. Se usa para grabar voces e instrumentos de manera más controlada. En este lugar, el sonido se mantiene limpio y sin distracciones.\n\nLa sala de control es donde se produce el sonido final. Aquí se mezcla el sonido de diferentes grabaciones. La calidad de esta sala es muy importante. Ayuda a los productores y músicos a lograr su idea de cómo debe sonar la canción.\n\nEl equipo técnico es esencial en el estudio. Hay micrófonos, procesadores y otros instrumentos que ayudan durante las diferentes etapas. Elegir el equipo correcto es crucial. Esto puede cambiar mucho cómo suena la música, y cómo la escucha el público.\n\nEl personal que trabaja en un estudio es clave. Hay técnicos de grabación, mezcladores y asistentes. Todos colaboran en las diferentes etapas del proceso. Su experiencia mejora el resultado final.\n\nPara resumir, un estudio de grabación es más que solo un lugar. Es un sistema donde cada parte, desde el espacio hasta las personas, ayuda a crear música. Conocer estos elementos es importante para cualquier estudiante que quiera aprender sobre producción musical.',
                        audios: {
                          article: {
                            status: true,
                            url: 'https://ailearn.api.aimpact.partners/activities/5b56ad68-53c2-43da-86b9-e7d6c4409966/materials/article/audio'
                          }
                        }
                      },
                      specs: {
                        topic: 'Espacios del Estudio de Grabación',
                        task: 'Investiga y presenta detalladamente los dos espacios que componen el Estudio de Grabación: la Sala de Control y la Sala de Grabación. Describe sus características, funciones y cómo interactúan entre sí durante el proceso de producción musical. Utiliza ejemplos prácticos y visuales para respaldar tu presentación.',
                        objectives: [{
                          name: 'Identificación de Espacios',
                          objective: 'Reconocer y describir la Sala de Control y la Sala de Grabación como elementos clave en la Producción Musical.'
                        }, {
                          name: 'Análisis Funcional',
                          objective: 'Analizar las funciones específicas y la importancia de cada sala en el proceso de grabación y producción.'
                        }],
                        instructions: 'Presentar los dos espacios fundamentales que componen el Estudio de Grabación. Sala de Control (Control Room), Sala de Grabación (Recording/Tracking Room).'
                      }
                    },
                    settings: {
                      layout: 'main-content-layout'
                    }
                  },
                  'e90b3b7f-2569-491b-8290-2ad1842056e8': {
                    id: 'e90b3b7f-2569-491b-8290-2ad1842056e8',
                    type: 'character-talk',
                    title: 'Conversación con un Productor Musical',
                    description: 'Explora y reflexiona sobre las decisiones técnicas y creativas en un estudio de grabación a través de un diálogo con un famoso productor musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Eres un productor musical reconocido que comparte su experiencia y responde a las preguntas sobre la mezcla y la producción en un estudio.',
                        task: 'Interactúa con el productor musical haciendo preguntas sobre su trabajo en el estudio. Reflexiona sobre las decisiones que toma durante el proceso de mezcla y cómo estas afectan el resultado final de la música. Aprovecha esta oportunidad para aprender sobre las técnicas y la creatividad en la producción musical.',
                        objectives: [{
                          name: 'Decisiones técnicas',
                          objective: 'Entender las decisiones técnicas cruciales al mezclar música.'
                        }, {
                          name: 'Creatividad en producción',
                          objective: 'Fomentar la creatividad al elegir elementos sonoros y técnicas de producción.'
                        }, {
                          name: 'Formulación de preguntas',
                          objective: 'Desarrollar habilidades para formular preguntas relevantes sobre producción musical.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'fe93270f-cd49-430e-81bc-817449c280f0': {
                    id: 'fe93270f-cd49-430e-81bc-817449c280f0',
                    type: 'debate',
                    title: 'Defensa del Estudio de Grabación',
                    description: 'Un debate enfocado en la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical frente a herramientas digitales.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        role: 'Docente',
                        subject: 'La relevancia del estudio de grabación de Grbaciòn y los dispositivos analogicos que lo componen como estándar en la producción musical.',
                        task: 'Vas a participar en un debate donde deberás defender la importancia de los estudios de grabación y los dispositivos analógicos en la producción musical. Presenta tus argumentos de manera clara y concisa, y utiliza ejemplos que respalden tu postura. También tendrás que anticipar las objeciones que pueda presentar el chatbot y prepararte para responder a ellas con lógica y claridad.',
                        objectives: [{
                          name: 'Argumentación',
                          objective: 'Desarrollar habilidades de argumentación en la defensa de los estudios de grabación.'
                        }, {
                          name: 'Pensamiento Crítico',
                          objective: 'Fomentar el pensamiento crítico al comparar dispositivos analógicos y digitales.'
                        }, {
                          name: 'Competencias Emocionales',
                          objective: 'Incorporar la autoconfianza y la gestión emocional durante el debate.'
                        }, {
                          name: 'Metacognición',
                          objective: 'Reflexionar sobre el proceso de argumentación y los propios pensamientos en el debate.'
                        }],
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  'b0074f49-5100-4731-b771-db3befd44577': {
                    id: 'b0074f49-5100-4731-b771-db3befd44577',
                    type: 'multiple-choice',
                    title: 'Evaluación sobre el Estudio de Grabación en Producción Musical',
                    description: 'Esta actividad tiene como objetivo evaluar tu comprensión sobre el funcionamiento y los elementos esenciales de un estudio de grabación, así como su papel en la producción musical.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {
                        assessment: '{"title":"Evaluación sobre el Estudio de Grabación en Producción Musical","questions":[{"question":"¿Cuál es el propósito principal de un estudio de grabación?","options":["Mejorar la calidad visual de las grabaciones","Diseñar espacios para ensayar","Proveer un espacio adecuado para la grabación, mezcla y en ciertos casos la masterización de un Proyecto Musical.  ","Almacenar instrumentos musicales"],"correctAnswer":2},{"question":"¿Qué función cumple la sala de control en un estudio de grabación?","options":["Grabar las voces de los músicos","Cambiar la acústica del recinto","Dar forma al sonido final mediante mezcla","Aislar instrumentos ruidosos"],"correctAnswer":2},{"question":"¿Qué aspecto es fundamental en el tratamiento acústico de un estudio?","options":["La estética de los muebles","La capacitación del personal","La respuesta en frecuencia del recinto y el rt60.","La variedad de instrumentos disponibles"],"correctAnswer":2},{"question":"¿Qué es una Iso Booth en un estudio de grabación?","options":["Una sala destinada para la mezcla","Un espacio para grabaciones en un ambiente controlado","Un área de descanso para los músicos","Un equipo de grabación multicanal"],"correctAnswer":1},{"question":"¿Por qué es importante la selección de equipo técnico en un estudio de grabación?","options":["Asegura que el estudio esté ordenado","Aumenta la velocidad de grabación","Puede alterar radicalmente el sonido obtenido","Facilita el trabajo del personal administrativo"],"correctAnswer":2}]}'
                      },
                      specs: {
                        task: '',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  },
                  '5bed3375-873d-414f-a52d-577e382f3091': {
                    id: '5bed3375-873d-414f-a52d-577e382f3091',
                    type: 'spoken',
                    title: 'Diferencias en Mezclas de Sonido',
                    description: 'Exposición sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida, mostrando claridad en la comprensión del tema.',
                    language: 'es',
                    picture: '',
                    module: {
                      id: 'c083dd01-36f5-4c7b-8f52-2a5100d52ae0',
                      creator: {
                        id: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                        name: 'Docente Mezcla Tamaba',
                        photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
                      },
                      objective: 'Analizar el concepto Estudio de Grabación como herramienta fundamental en la Producción Musical.',
                      title: 'Introducción al Estudio de Grabación',
                      description: 'Este módulo se centra en el análisis del estudio de grabación como una herramienta esencial en la producción musical, explorando sus elementos técnicos y creativos.',
                      language: 'es',
                      picture: 'https://ailearn.api.aimpact.partners/modules/c083dd01-36f5-4c7b-8f52-2a5100d52ae0/picture',
                      audience: {
                        category: 'higher-education',
                        level: 'tertiary-education',
                        format: 'Educación Superior',
                        entity: 'Referencias Académicas para Educación Superior'
                      },
                      public: true,
                      status: 'active',
                      type: 'module',
                      timeCreated: 1743372113244,
                      timeUpdated: 1743372113244,
                      owner: {
                        id: 'a4b45f4b-4342-4351-ba65-3464b4e82ce3',
                        name: 'Instituto Terciario Tamaba',
                        photoUrl: ''
                      },
                      ai: true
                    },
                    resources: {
                      materials: {},
                      specs: {
                        assessment: 'El estudiante debe exponer oralmente las diferencias entre los tipos de mezcla indicados. Evalúa la claridad de la presentación, la profundidad del contenido, la estructura lógica de la exposición y el cumplimiento del tiempo asignado. Asegúrate de leer la transcripción del discurso para una evaluación precisa.',
                        criteria: [{
                          name: 'Claridad',
                          subject: 'El estudiante debe presentar sus ideas de manera clara y comprensible, empleando un lenguaje apropiado para el tema abordado.'
                        }, {
                          name: 'Contenido',
                          subject: 'La presentación debe incluir las diferencias clave entre Out The Box, In The Box e Híbrida, evidenciando un buen dominio del tema.'
                        }, {
                          name: 'Estructura',
                          subject: 'La exposición debe tener una introducción clara, un desarrollo coherente y una conclusión que resuma las ideas principales.'
                        }, {
                          name: 'Tiempo',
                          subject: 'El hablante debe realizar la presentación dentro del tiempo estipulado de tres minutos, administrando el tiempo de manera efectiva.'
                        }],
                        task: 'Prepara una exposición de no más de tres minutos sobre las diferencias entre la mezcla Out The Box y las mezclas In The Box e Híbrida. Asegúrate de abordar las características distintivas de cada tipo de mezcla, estructurando tu presentación con una introducción, desarrollo y conclusión clara. Mantén un lenguaje técnico apropiado y asegúrate de terminar tu exposición en el tiempo indicado.',
                        objectives: '',
                        instructions: ''
                      }
                    },
                    settings: {
                      layout: 'main-chat-layout'
                    }
                  }
                }
              },
              teachers: [{
                uid: 'qRTrEUtIhVV8jwLPBNOCx2cSMaq1',
                name: 'Docente Mezcla Tamaba',
                photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ4_6Wg8clPeLzfWsOVX0Dob0TP8c0TganBLSh7uJSdb5hMyA=s96-c'
              }],
              archived: false,
              access: 'approved',
              accessed: false,
              community: false
            }
          };
        }
      });

      /****************************
      INTERNAL MODULE: ./HARDCODED3
      ****************************/

      ims.set('./HARDCODED3', {
        hash: 2468639777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HARDCODED = void 0;
          const HARDCODED = exports.HARDCODED = {
            "status": true,
            "data": {
              "id": "eb7b5bf0-e64b-4d18-bf6b-9dfdc6906a51",
              "classroom": {
                "id": "7d1848f3-1a65-4723-a5ad-c085216a51f6",
                "name": "Técnicas de Mezcla",
                "picture": ""
              },
              "module": {
                "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                "creator": {
                  "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                  "name": "Guido Alfonsi",
                  "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                },
                "language": "es",
                "title": "Live Looping",
                "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                "duration": "15",
                "audience": "6to año",
                "owner": {
                  "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                  "name": "Instituto Terciario Tamaba",
                  "photoUrl": ""
                }
              },
              "payer": "module-owner",
              "code": "AIN9KRG",
              "public": false,
              "activities": {
                "order": ["49dda241-1a8b-4f04-9472-f88ea064651f", "5b0f86e2-0496-4ebc-80c8-9c28924eb12c", "dd07950d-9705-4051-a6e7-4ee3a16a25fe", "46eb3701-4fd2-427b-babb-fca9a5dba92a", "215d4030-bbd3-4297-8c28-184ff8aba623", "d924379f-4f53-4df8-999e-eb4b8d74b281", "18ff5738-0a07-40b4-bd4c-088758b4da35"],
                "items": {
                  "49dda241-1a8b-4f04-9472-f88ea064651f": {
                    "id": "49dda241-1a8b-4f04-9472-f88ea064651f",
                    "objective": "El alumno comprenderá qué es el live looping y su evolución en la música contemporánea.",
                    "type": "content-theory",
                    "title": "Fundamentos del Live Looping",
                    "description": "Exploración de los conceptos básicos del live looping y su historia, incluyendo ejemplos famosos de artistas que usan esta técnica.",
                    "language": "es",
                    "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/82c2d2d5-799a-4bc0-a69c-06a3a20cdf96/picture",
                    "duration": 30,
                    "module": {
                      "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                      "creator": {
                        "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                        "name": "Guido Alfonsi",
                        "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                      },
                      "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                      "title": "Live Looping",
                      "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                      "language": "es",
                      "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                      "duration": "15",
                      "audience": "6to año",
                      "public": true,
                      "status": "active",
                      "type": "module",
                      "timeCreated": 1740070992173,
                      "timeUpdated": 1740070992173,
                      "owner": {
                        "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                        "name": "Instituto Terciario Tamaba",
                        "photoUrl": ""
                      },
                      "ai": true
                    },
                    "resources": {
                      "materials": {
                        "article": "El live looping es una técnica fascinante que permite registrar (grabar) y reproducir fragmentos de señales audio y señales MIDI de manera cíclica y simultánea. Además de la posibilidad de registrar, el live looping también te ofrece la posibilidad de procesar tus señales de audio en tiempo real. Construí una composición en vivo, capa por capa. Esta práctica, con raíces en la música académica, ha trascendido géneros y conquistado la escena musical contemporánea, brindando a personas de todas las disciplinas posibilidades ilimitadas.\n\nPioneros y Evolución Tecnológica\nDesde la década del 60 (Siglo XX), muchos artistas exploraron las posibilidades de la repetición y la reiteración. No obstante, la evolución tecnológica ha catapultado el live looping a una nueva dimensión. Hoy, músicos solistas y bandas por igual, aprovechan está técnica para crear performances únicas. \n\nTu Primer Acercamiento al Live Looping con Ableton Live y Akai APC Key 25\nTe presentamos, a continuación, una breve guía para comenzar a experimentar con Ableton Live y el controlador Akai APC Key 25:\n\n1. Conexión:\nConectá el Akai APC Key 25 a tu computadora mediante un cable USB.\nAsegurate de tener Ableton Live instalado y actualizado.\n\n2. Configuración en Ableton Live:\nAbrí Ableton Live y creá un nuevo proyecto.\nPaso 1 - Andá a \"Preferencias\" > \"Midi Sync\".\nPaso 2 - En la sección \"Midi Sync\", activá el control MIDI para el Akai APC Key 25.\n\n3. Creación de Canal de Audio:\nEn la \"Vista de Sesión\", hacé clic en \"Crear\" > \"Canal de Audio\".\n\n4. Ajuste de Tempo y Tipo de Compás:\nEstablecé el tempo y el tipo de compás deseados en la esquina superior izquierda.\n\n5. Configuración de Entrada de Audio:\nEn el canal de audio, seleccioná la entrada de audio (micrófono o instrumento).\nActivá el monitoreo para escuchar la señal en tiempo real.\n\n6. Registro / grabación de un fragmento de Audio (Clip):\nHacé clic en el botón de grabación del canal de audio.\nPresioná el botón de grabación en el controlador para capturar tu primer loop.\n\n7. Exploración Creativa:\nUtilizá las funciones de reproducción y sobregrabación del controlador para añadir capas y construir tu composición.\n\n8. Procesamiento de Señal:\nAñadí procesos a tus señales de audio desde la sección \"Efectos de Audio\" para enriquecer tu narrativa.\n\nYa estás dentro del Universo de la experimentación y la creatividad, ya sos parte del live looping.",
                        "synthesis": "- **Live Looping**\n  - _Técnica fascinante_\n  - _Grabar y reproducir_ señales audio y MIDI\n  - _Procesamiento en tiempo real_\n  - _Construcción en vivo_, capa por capa\n  - _Raíces en la música académica_\n\n- **Pioneros y Evolución Tecnológica**\n  - _Desde la década del 60_\n  - _Exploración de repetición y reiteración_\n  - _Catapulta a nueva dimensión_ \n  - _Utilizado por músicos solistas y bandas_\n\n- **Guía para Live Looping con Ableton Live y Akai APC Key 25**\n  - **Conexión**\n    - _Cable USB Akai APC Key 25_\n    - _Ableton Live instalado y actualizado_\n\n  - **Configuración en Ableton Live**\n    - _Nuevo proyecto_\n    - _Preferencias > Midi Sync_\n    - _Activar control MIDI Akai APC Key 25_\n\n  - **Creación de Canal de Audio**\n    - _Vista de Sesión > Crear > Canal de Audio_\n\n  - **Ajuste de Tempo y Tipo de Compás**\n    - _Establecer tempo y compás en esquina superior izquierda_\n\n  - **Configuración de Entrada de Audio**\n    - _Seleccionar entrada (micrófono/instrumento)_\n    - _Activar monitoreo para señal en tiempo real_\n\n  - **Registro/Grabación de Fragmento de Audio**\n    - _Clic en botón de grabación del canal_\n    - _Presionar botón de grabación en controlador_\n\n  - **Exploración Creativa**\n    - _Utilizar funciones de reproducción y sobregrabación_\n    - _Añadir capas y construir composición_\n\n  - **Procesamiento de Señal**\n    - _Agregar efectos desde \"Efectos de Audio\"_\n    - _Enriquecer narrativa_",
                        "dyslexia": "El live looping es una técnica que permite grabar y reproducir sonidos de manera cíclica, es decir, repetitiva. Puedes grabar audio, que son los sonidos que escuchamos, y también MIDI, que es un tipo de información musical que indica notas y ritmos. Puedes procesar estos sonidos en tiempo real. Esto significa que puedes hacer cambios mientras tocas. \n\nEl live looping tiene raíces en la música clásica, pero hoy se usa en muchos estilos diferentes. Muchos músicos solistas y bandas utilizan esta técnica. Es una forma de crear música única.\n\nPara empezar con el live looping, necesitarás un programa llamado Ableton Live y un controlador llamado Akai APC Key 25. Aquí te explico cómo hacerlo, paso a paso.\n\nPrimero, conecta tu Akai APC Key 25 a la computadora usando un cable USB. Asegúrate de que el programa Ableton Live esté instalado y actualizado.\n\nLuego, abre Ableton Live y crea un nuevo proyecto. Ve a \"Preferencias\" y después a \"Midi Sync\". Activa la opción para el Akai APC Key 25.\n\nAhora, crea un canal de audio. Haz clic en \"Crear\" y luego en \"Canal de Audio\".\n\nDespués, debes establecer el tempo, que es la velocidad de la música, y el tipo de compás en la esquina superior izquierda de la pantalla.\n\nLuego, selecciona la entrada de audio en tu canal de audio. Puedes elegir un micrófono o un instrumento. Activa el monitoreo. Esto te permitirá escuchar lo que estás grabando en tiempo real.\n\nPara grabar un sonido, haz clic en el botón de grabación del canal de audio. Luego, presiona el botón de grabación en el Akai APC Key 25 para capturar tu primer loop.\n\nAhora es tiempo de ser creativo. Usa las funciones de reproducción y sobregrabación del controlador. Puedes añadir más capas a tu música y crear una composición.\n\nFinalmente, puedes agregar efectos a tus sonidos desde la sección de \"Efectos de Audio\". Esto hará que tu música suene más rica y emocionante.\n\nHas comenzado a experimentar con el live looping. Ya eres parte de un mundo creativo y lleno de posibilidades. ¿Te gustaría intentar grabar diferentes sonidos? ¿Qué tipos de música quieres crear?",
                        "audios": {
                          "dyslexia": {
                            "url": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/49dda241-1a8b-4f04-9472-f88ea064651f/materials/dyslexia/audio"
                          }
                        }
                      },
                      "specs": {
                        "topic": "Live Looping en la música contemporánea",
                        "task": "Investiga y comprende el concepto de live looping. Describe su evolución en la música contemporánea y proporciona ejemplos de artistas que lo utilizan en su obra. Asegúrate de incluir cómo este recurso afecta la creatividad y la producción musical en distintos géneros.",
                        "objectives": [{
                          "name": "Definición",
                          "objective": "Comprender qué es el live looping y su significado en la música."
                        }, {
                          "name": "Evolución",
                          "objective": "Analizar la evolución del live looping a través de ejemplos de artistas contemporáneos."
                        }, {
                          "name": "Aplicación",
                          "objective": "Identificar cómo se utiliza el live looping en diferentes géneros musicales."
                        }],
                        "instructions": ""
                      }
                    }
                  },
                  "5b0f86e2-0496-4ebc-80c8-9c28924eb12c": {
                    "id": "5b0f86e2-0496-4ebc-80c8-9c28924eb12c",
                    "objective": "",
                    "type": "multiple-choice",
                    "title": "Quiz sobre conceptos del Live Looping",
                    "description": "Una actividad de opción múltiple que evalúa la comprensión de los conceptos vistos en el módulo, utilizando preguntas sobre el live looping y el uso de Ableton Live.",
                    "language": "es",
                    "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/538000e7-2a1d-4b53-bf7d-a90afee1403d/picture",
                    "duration": 20,
                    "module": {
                      "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                      "creator": {
                        "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                        "name": "Guido Alfonsi",
                        "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                      },
                      "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                      "title": "Live Looping",
                      "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                      "language": "es",
                      "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                      "duration": "15",
                      "audience": "6to año",
                      "public": true,
                      "status": "active",
                      "type": "module",
                      "timeCreated": 1740070992173,
                      "timeUpdated": 1740070992173,
                      "owner": {
                        "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                        "name": "Instituto Terciario Tamaba",
                        "photoUrl": ""
                      },
                      "ai": true
                    },
                    "resources": {
                      "materials": {
                        "assessment": "{\"title\":\"Quiz sobre conceptos del Live Looping\",\"questions\":[{\"question\":\"¿Cuál es la función principal del Akai APC Key 25 en el live looping?\",\"options\":[\"Mejorar la calidad del audio\",\"Controlar Ableton Live de manera intuitiva\",\"Aumentar el volumen de las pistas\",\"Sustituir a la computadora\"],\"correctAnswer\":1},{\"question\":\"¿Qué software se utiliza comúnmente junto al Akai APC Key 25 para live looping?\",\"options\":[\"FL Studio\",\"Cubase\",\"Ableton Live\",\"Pro Tools\"],\"correctAnswer\":2},{\"question\":\"¿Qué permite el live looping en una presentación musical?\",\"options\":[\"Grabar y reproducir audio en tiempo real\",\"Modificar la música después de la presentación\",\"Solo utilizar instrumentos acústicos\",\"Limitar la creatividad del músico\"],\"correctAnswer\":0},{\"question\":\"¿Cuál de las siguientes características del APC Key 25 es crucial para la creación musical?\",\"options\":[\"Suspiro de aire\",\"Controles de mezcla y efectos\",\"Altavoces integrados\",\"Grabar video\"],\"correctAnswer\":1},{\"question\":\"En Ableton Live, ¿qué es lo que se manipula principalmente para el live looping?\",\"options\":[\"La señal MIDI\",\"Los efectos de video\",\"Las imágenes de fondo\",\"La iluminación del escenario\"],\"correctAnswer\":0}]}"
                      },
                      "specs": {
                        "task": "",
                        "objectives": "",
                        "instructions": ""
                      }
                    }
                  },
                  "dd07950d-9705-4051-a6e7-4ee3a16a25fe": {
                    "id": "dd07950d-9705-4051-a6e7-4ee3a16a25fe",
                    "objective": "Al finalizar esta actividad, los estudiantes deberán ser capaces de identificar y utilizar las principales funcionalidades de Ableton Live, aplicándolas en la creación de loops musicales.",
                    "type": "content-theory",
                    "title": "Introducción a las Funcionalidades de Ableton Live",
                    "description": "Esta actividad tiene como objetivo proporcionar a los estudiantes una comprensión profunda de las funcionalidades de Ableton Live, centrándose en cómo se pueden utilizar para la creación musical y el live looping. Se abordarán aspectos como la interfaz del software, herramientas de edición, efectos de audio, y técnicas básicas de looping. Al final de la sesión, los estudiantes deberán tener las nociones básicas para comenzar a manipular el software en su proceso de creación musical.",
                    "language": "es",
                    "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/23d12a0c-87a4-4494-a668-09f9cc748389/picture",
                    "duration": 0,
                    "module": {
                      "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                      "creator": {
                        "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                        "name": "Guido Alfonsi",
                        "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                      },
                      "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                      "title": "Live Looping",
                      "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                      "language": "es",
                      "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                      "duration": "15",
                      "audience": "6to año",
                      "public": true,
                      "status": "active",
                      "type": "module",
                      "timeCreated": 1740070992173,
                      "timeUpdated": 1740070992173,
                      "owner": {
                        "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                        "name": "Instituto Terciario Tamaba",
                        "photoUrl": ""
                      },
                      "ai": true
                    },
                    "resources": {
                      "materials": {
                        "article": "Ableton Live es un software de producción musical (DAW) ampliamente utilizado por músicos, productores y DJs por su flexibilidad y funcionalidad. Su diseño se basa en dos vistas principales: la Vista Sesión y la Vista Arranger. La Vista Sesión es ideal para la improvisación y la creación de loops, donde las regiones de audio (clips) y regiones MIDI se organizan en columnas, permitiendo activar y desactivar elementos rápidamente. Esto facilita la experimentación, ya que puedes probar diferentes combinaciones de señales en tiempo real, lo que resulta útil para la creación de arreglos musicales instantáneos.\nEn la parte superior de la Vista Sesión se encuentran los canales. Cada canal puede contener una señal de Audio o datos MIDI y contiene regiones o clips que representan fragmentos de una señal. Al seleccionar una región o clip, el área de contenido muestra detalles sobre él, donde puedes editar parámetros como la duración, el tempo y los procesos aplicados. La función 'Warp' es esencial, ya que permite ajustar el tempo de las regiones o clips de audio para que se sincronicen perfectamente con el Tempo Map del Proyecto, independientemente de su tempo original.\nLa Vista Arranger, en cambio, se utiliza para estructurar el arreglo o canción completa. En esta vista, los canales se organizan de forma horizontal y podes arrastrar y soltar regiones para definir el orden de una composición. Podes utilizar la barra de herramientas para agregar transiciones, como fundidos, cortes y definir la duración de cada sección. La automatización es otra herramienta poderosa en esta vista, permitiéndote modificar parámetros a lo largo del tiempo, como el nivel, el paneo y los parámetros de los procesos aplicados.\nEl navegador, ubicado a la izquierda, es un recurso importante para explorar y organizar tus elementos. Puedes buscar instrumentos virtuales, procesos y sonidos pregrabados. Una vez que encuentras un evento que te gusta, podes arrastrarlo directamente a un canal. Ableton Live incluye una amplia gama de instrumentos y procesos nativos que podes utilizar para enriquecer tus producciones. También es posible cargar samples/muestras desde tu propia librería personal y utilizarlas en tus proyectos.\nLos procesos de audio, que se encuentran en el navegador, permiten modificar las señales presentes en cada canal. Podes aplicar procesos como reverb, delay, compresión y ecualización para dar forma a tu mezcla. Cada proceso puede ajustarse mediante diferentes parámetros, lo que brinda un amplio rango de posibilidades creativas. Experimentar con estos procesos en diferentes canales ayudará a entender cómo influyen en el resultado final de un proyecto.\nEl MIDI desempeña un papel fundamental en la creación y la producción músical. Ableton Live permite la grabación y edición de datos MIDI, lo que es esencial para utilizar instrumentos virtuales. Al crear un canal MIDI, podes ingresar eventos MIDI utilizando un teclado MIDI o dibujando directamente en el editor de piano. Desde ahí podes ajustar la duración, la velocidad y otros aspectos de cada nota, lo que te dará control total sobre la interpretación musical.\nPara facilitar el flujo de trabajo, Ableton Live también incluye una función de 'session loop', ideal para ensayar. Está función te permite grabar ideas rápidamente y reproducirlas en un bucle para experimentarlas. Esta funcionalidad es perfecta para la creación de bases rítmicas y melódicas, permitiendo explorar distintas variaciones y progresiones de acordes sin la presión de tener que definir inmediatamente un arreglo completo.\nAl final, entender las funcionalidades de Ableton Live te permitirá crear música de manera más efectiva. Al conocer la interacción entre la Vista Sesión y la Vista Arranger, cómo utilizar el navegador, trabajar con MIDI y aplicar procesos, tendrás las herramientas necesarias para comenzar a componer tus propios loops. Con práctica y experimentación, tu creatividad podrá fluir a través de este potente software.",
                        "synthesis": "- **Ableton Live**\n  - DAW popular\n  - Músicos, productores, DJs\n\n- **Vistas principales**\n  - **Vista Sesión**\n    - Improvisación y loops\n    - Organiza clips en columnas\n    - Activación/desactivación rápida\n    - Experimentación en tiempo real\n  - **Vista Arranger**\n    - Estructura de la canción\n    - Organización horizontal de canales\n    - Arrastrar y soltar regiones\n    - Inserción de transiciones\n      - Fundidos\n      - Cortes\n    - Automatización de parámetros\n\n- **Navegador**\n  - Ubicación: izquierda\n  - Exploración y organización de elementos\n  - Búsqueda de instrumentos y sonidos\n  - Arrastrar eventos a canales\n\n- **Procesos de audio**\n  - Modificación de señales en canales\n  - Aplicar efectos:\n    - Reverb\n    - Delay\n    - Compresión\n    - Ecualización\n  - Ajustes de parámetros\n\n- **MIDI en producción musical**\n  - Grabación y edición de datos MIDI\n  - Creación de canal MIDI\n  - Ingreso mediante teclado MIDI o editor de piano\n  - Control de duración y velocidad\n\n- **Session Loop**\n  - Función para ensayar\n  - Grabación rápida de ideas\n  - Reproducción en bucle\n  - Exploración de variaciones y acordes\n\n- **Conclusión**\n  - Comprender funcionalidades clave\n  - Interacción entre vistas\n  - Uso del navegador y procesos\n  - Práctica y experimentación para creatividad",
                        "introduction": "",
                        "dyslexia": "Ableton Live es un programa para hacer música. Es usado por músicos y DJs. Este programa tiene dos partes principales: la Vista Sesión y la Vista Arranger.\n\nLa Vista Sesión es buena para improvisar y crear loops. Un loop es un fragmento de música que se repite. Aquí, las partes de música se organizan en columnas. Puedes encender y apagar los clips de música fácilmente. Esto permite probar diferentes sonidos de forma rápida. Por ejemplo, puedes mezclar sonidos de guitarra con electrónicos en tiempo real para ver cómo suenan juntos.\n\nEn la parte de arriba de la Vista Sesión hay canales. Cada canal puede tener sonidos o datos MIDI. MIDI es un tipo de información que se usa para controlar instrumentos en el programa. Cuando eliges un clip, puedes ver sus detalles. Puedes cambiar cosas como la duración y el tempo. El 'Warp' es una herramienta importante que ayuda a que todos los sonidos tengan el mismo tempo. Esto significa que todos suenan en el mismo ritmo, aunque tengan tempos diferentes al principio.\n\nLa Vista Arranger es para organizar la canción completa. Aquí los canales están en filas. Puedes arrastrar y soltar clips para cambiar el orden de la música. También hay una barra de herramientas que permite añadir transiciones. Por ejemplo, puedes hacer que la música suba o baje poco a poco con un fundido. La automatización te ayuda a cambiar cosas como el volumen a lo largo del tiempo.\n\nA la izquierda de la pantalla está el navegador. Este es un lugar para buscar sonidos e instrumentos. Puedes encontrar muchos sonidos y arrastrarlos a un canal. Ableton Live tiene muchos sonidos y herramientas que puedes usar. También puedes usar tus propios sonidos almacenados en tu computadora.\n\nLos procesos de audio están en el navegador. Estos te permiten cambiar los sonidos en cada canal. Puedes añadir efectos como reverb, que hace que suene lejano, o delay, que repite el sonido. Jugar con estos procesos en diferentes sonidos te ayudará a ver cómo cambian la música.\n\nEl MIDI es muy importante para hacer música. En Ableton Live puedes grabar y editar datos MIDI. Para usar un instrumento virtual, necesitas un canal MIDI. Puedes escribir eventos MIDI usando un teclado o dibujando en el programa. Desde allí puedes cambiar cosas como la duración y la velocidad de cada nota.\n\nAbleton Live también tiene una función llamada 'session loop'. Esta función es buena para ensayar. Puedes grabar ideas y reproducirlas en un bucle. Esto significa que puedes escuchar la misma parte de música repetidamente. Es útil para crear ritmos y melodías, y explorar variaciones sin presionarte.\n\nAl final, aprender a usar Ableton Live te ayudará a hacer música mejor. Conocer las dos vistas, cómo buscar sonidos, trabajar con MIDI y aplicar efectos te dará herramientas para comenzar a crear. Con práctica, tu creatividad puede fluir y podrás hacer tu propia música. \n\nRecuerda, Ableton Live tiene muchas posibilidades. Prueba, experimenta y diviértete creando.",
                        "flashcard": {},
                        "audios": {
                          "article": {
                            "status": true,
                            "url": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/dd07950d-9705-4051-a6e7-4ee3a16a25fe/materials/article/audio"
                          },
                          "dyslexia": {
                            "status": true,
                            "url": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/dd07950d-9705-4051-a6e7-4ee3a16a25fe/materials/dyslexia/audio"
                          }
                        }
                      },
                      "specs": {
                        "topic": "Funcionalidades de Ableton Live",
                        "task": "Explora las funcionalidades de Ableton Live y utiliza estas herramientas para crear al menos tres loops musicales originales. Asegúrate de aplicar diferentes técnicas de edición y manipulación de audio. Al finalizar, presenta tus loops junto con una breve descripción del proceso creativo que seguiste y las funcionalidades que utilizaste en cada uno.",
                        "objectives": [{
                          "name": "Identificación de funcionalidades",
                          "objective": "Capacitar a los estudiantes para que reconozcan las principales herramientas de Ableton Live y su aplicación en la producción musical."
                        }, {
                          "name": "Creación de loops",
                          "objective": "Desarrollar la habilidad de los estudiantes para crear loops musicales utilizando las funcionalidades aprendidas en Ableton Live."
                        }],
                        "instructions": "ejercicios relacionados"
                      }
                    }
                  },
                  "46eb3701-4fd2-427b-babb-fca9a5dba92a": {
                    "id": "46eb3701-4fd2-427b-babb-fca9a5dba92a",
                    "objective": "",
                    "type": "multiple-choice",
                    "title": "Ableton Live",
                    "description": "Selecciona la opción correcta sobre Ableton Live",
                    "language": "es",
                    "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/5508fcc6-8e4b-49a4-8361-a5f85e8788a3/picture",
                    "duration": 0,
                    "module": {
                      "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                      "creator": {
                        "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                        "name": "Guido Alfonsi",
                        "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                      },
                      "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                      "title": "Live Looping",
                      "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                      "language": "es",
                      "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                      "duration": "15",
                      "audience": "6to año",
                      "public": true,
                      "status": "active",
                      "type": "module",
                      "timeCreated": 1740070992173,
                      "timeUpdated": 1740070992173,
                      "owner": {
                        "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                        "name": "Instituto Terciario Tamaba",
                        "photoUrl": ""
                      },
                      "ai": true
                    },
                    "resources": {
                      "materials": {
                        "assessment": "{\"title\":\"Ableton Live\",\"questions\":[{\"question\":\"¿Cuál de las siguientes opciones permite grabar audio en Ableton Live?\",\"options\":[\"Clip de MIDI\",\"Clip de audio\",\"Automatización\",\"Efecto de retorno\"],\"correctAnswer\":1},{\"question\":\"¿Qué elemento se utiliza para disparar clips en Ableton Live?\",\"options\":[\"Escena\",\"Línea de tiempo\",\"Controlador MIDI\",\"Grupos\"],\"correctAnswer\":0},{\"question\":\"¿Cuál es la función del 'Session View' en Ableton Live?\",\"options\":[\"Modificar efectos\",\"Grabar MIDI\",\"Disparar clips y escenas\",\"Exportar audio\"],\"correctAnswer\":2},{\"question\":\"¿Qué tipo de archivo se utiliza principalmente para almacenar MIDI en Ableton Live?\",\"options\":[\"Archivo de audio .wav\",\"Archivo de proyecto .als\",\"Archivo MIDI .mid\",\"Archivo de clip .aif\"],\"correctAnswer\":2},{\"question\":\"¿Cuál de estos efectos se puede aplicar a un clip de audio en Ableton Live?\",\"options\":[\"Compresor\",\"Metrónomo\",\"Escala\",\"Conector de red\"],\"correctAnswer\":0}]}"
                      },
                      "specs": {
                        "task": "",
                        "objectives": "",
                        "instructions": ""
                      }
                    }
                  },
                  "215d4030-bbd3-4297-8c28-184ff8aba623": {
                    "id": "215d4030-bbd3-4297-8c28-184ff8aba623",
                    "objective": "Los alumnos entenderán el funcionamiento de cada control del Akai APC Key 25 y cómo interactúa con Ableton Live para facilitar la creación musical.",
                    "type": "content-theory",
                    "title": "Introducción al Akai APC Key 25",
                    "description": "En esta actividad se explorarán los diferentes controles del Akai APC Key 25, un controlador MIDI especialmente diseñado para trabajar con Ableton Live. Los estudiantes aprenderán sobre la disposición de los botones, faders y pads, así como su función en la creación musical mediante técnicas de live looping.",
                    "language": "es",
                    "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/dd10c349-24db-4b9c-a5f9-7aba8725473a/picture",
                    "duration": 0,
                    "module": {
                      "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                      "creator": {
                        "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                        "name": "Guido Alfonsi",
                        "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                      },
                      "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                      "title": "Live Looping",
                      "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                      "language": "es",
                      "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                      "duration": "15",
                      "audience": "6to año",
                      "public": true,
                      "status": "active",
                      "type": "module",
                      "timeCreated": 1740070992173,
                      "timeUpdated": 1740070992173,
                      "owner": {
                        "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                        "name": "Instituto Terciario Tamaba",
                        "photoUrl": ""
                      },
                      "ai": true
                    },
                    "resources": {
                      "materials": {
                        "article": "El Akai APC Key 25 es un controlador MIDI diseñado específicamente para trabajar en conjunto con el software Ableton Live, una de las herramientas más populares para la producción musical. Este equipo combina la funcionalidad de un controlador tradicional con la facilidad de un teclado, lo que lo convierte en una excelente opción para quienes buscan crear y ejecutar música de manera eficiente.\nEl APC Key 25 cuenta con 25 teclas de tamaño estándar que permiten ejecutar piezas musicales. Estas teclas son sensitivas (reconocen cambios a la intensidad de la ejecución), lo que significa que los cambios dinámicos de la frase musical afectarán la reproducción y el registro. Para familiarizarse con él concepto de un controlador sensitivo, podes comenzar tocando una melodia o un acorde, tanto durante la ejecución, cómo luego observando la información MIDI registrada, vas a verificar qué cada uno de los eventos Note On (mensaje MIDI qué se utiliza para declarar la activación de una Tecla), tiene asociado un valor de Velocity diferente. (El Velocity es el Mensaje del Protocolo MIDI, qué codifica en valores entre 0 y 127 la intensidad con la qué se presionó una Tecla).\nUno de los elementos más destacados del Akai APC Key 25 es su matriz de 8x8 pads. Cada uno de estos pads se ilumina y se puede programar para lanzar eventos o clips en Ableton Live. Cada pad se puede asignar a un evento o clip específico, lo que te brinda la posibilidad de activar y desactivar rápidamente cada evento. Podes empezar la práctica asignando diferentes eventos a cada pad y luego intentar lanzar algunos de manera secuencial, lo que te ayudará a entender cómo se relacionan los eventos o clips entre sí.\nEn la parte superior del controlador, encontrarás los botones de “Track”, “Scene” y los potenciómetros de nivel. Los botones de \"Track\" permiten seleccionar diferentes canales dentro de tu proyecto. Por lo tanto, un ejercicio útil sería asignar instrumentos o muestras de audio a cada canal y experimentar con las señales asociadas a cada uno mientras tocas. Al usar el botón de \"Scene\", puedes lanzar todas las pistas de una escena a la vez, facilitando su composición en vivo. \nLos potenciómetros de nivel, ubicados en el lado derecho, son ideales para ajustar el nivel de cada canal sin necesidad de utilizar el mouse. Puedes realizar un ejercicio de mezcla práctico donde vayas ajustando los niveles de los diferentes canales mientras escuchas, el resultado de esos cambios.\nAdemás, el APC Key 25 tiene botones asignables que se pueden usar para funciones específicas en Ableton Live, como las funciones de transporte (reproducir, pausar y detener). Familiarizarse con estos botones es esencial, por lo que te recomiendo que hagas una práctica donde utilices únicamente el APC Key 25 para controlar la reproducción de tu proyecto, evitando el uso del mouse.\nFinalmente, el Akai APC Key 25 también cuenta con una sección de transposición de la altura tonal (pitch bend) y modulación, representadas por dos sliders. Estos controles en formato deslizable (sliders) se pueden mapear (asignar) a diferentes controles dentro de Ableton Live, lo que te permitirá alterar la altura tonal, la intensidad, etc de tus señales en tiempo real. Para practicar, intenta asignar cada slider a parámetros de procesos cómo una reverb o un delay y explora cómo su ese cambio/ajuste afecta tu mezcla.\nA medida que vas explorando el Akai APC Key 25 junto con Ableton Live, es importante dedicar tiempo a cada uno de los controles y funciones que ofrece. La práctica regular te permitirá sentirte cada vez más cerca utilizando tanto el controlador como el software, facilitando tu proceso creativo y mejorando tus habilidades en la creación musical.",
                        "synthesis": "- **Akai APC Key 25**\n  - Controlador **MIDI**\n  - Diseñado para **Ableton Live**\n  - Combina **controlador tradicional** con **teclado**\n\n- **Teclas**\n  - **25 teclas** de tamaño estándar\n  - **Sensitivas**: reconocen intensidad (velocity)\n    - **Velocity**: 0 a 127\n    - **Note On**: activación de teclas\n\n- **Matriz de Pads**\n  - **8x8 pads**\n  - Iluminación para **eventos/clips** en Ableton Live\n  - **Asignación**: eventos específicos a cada pad\n\n- **Controles en la parte superior**\n  - **Botones de Track**: seleccionar canales\n  - **Botón de Scene**: lanzar pistas de una escena\n  - **Potenciómetros de nivel**: ajuste de niveles sin mouse\n\n- **Botones Asignables**\n  - Funciones de **transporte** (reproducir, pausar, detener)\n  - Práctica: controlar reproducción con APC Key 25 solo\n\n- **Sección de Transposición y Modulación**\n  - **Sliders** para **pitch bend** y **modulación**\n  - Mapear a controles en Ableton Live\n    - Ejemplo: asignar a reverb o delay\n\n- **Práctica Regular**\n  - Familiarizarse con controles y funciones\n  - Mejora de habilidades en **creación musical**",
                        "introduction": "",
                        "dyslexia": "El Akai APC Key 25 es un controlador MIDI que trabaja con el software Ableton Live. Esto es una herramienta muy popular para hacer música. El controlador tiene funciones de un teclado y un controlador tradicional. Esto lo hace ideal para crear y ejecutar música de manera fácil.\n\nEl APC Key 25 tiene 25 teclas. Estas son de tamaño estándar y permiten tocar piezas musicales. Las teclas son sensitivas. Esto significa que pueden sentir cuán fuerte tocas. Si tocas más fuerte, suena más fuerte. Un ejercicio simple es tocar una melodía o un acorde y luego ver cómo se registran las notas en el software. Cada toque tiene un valor diferente llamado \"Velocity\". Este valor va de 0 a 127 y indica la intensidad de tu toque.\n\nEl controlador tiene 64 pads organizados en una matriz de 8x8. Cada pad se ilumina y puedes programarlo para que active eventos o clips en Ableton Live. Puedes empezar por asignar diferentes clips a cada pad. Luego, intenta activarlos uno tras otro. Así aprenderás a relacionar los eventos.\n\nEn la parte superior del controlador, hay botones que dicen \"Track\", \"Scene\" y potenciómetros de nivel. Los botones de \"Track\" te permiten seleccionar canales en tu proyecto. Un ejercicio útil es asignar diferentes instrumentos a cada canal. Al usar los botones de \"Scene\", puedes activar todas las pistas de una escena al mismo tiempo. Esto ayuda a hacer música en vivo.\n\nLos potenciómetros de nivel están a la derecha. Estos son para ajustar el volumen de cada canal sin usar el mouse. Puedes practicar mezclando los niveles de los canales y escuchar cómo cambia el sonido.\n\nEl APC Key 25 también tiene botones adicionales que puedes usar para funciones como reproducir, pausar y detener. Es buena idea practicar con estos botones y tratar de controlar tu proyecto sin usar el mouse.\n\nAdemás, el controlador tiene dos sliders para cambiar la altura tonal (pitch bend) y la modulación. Estos sliders pueden ser asignados a diferentes controles en Ableton Live. Puedes probar asignar un slider a efectos como reverb o delay. Escucha cómo cambian los sonidos al usar los sliders.\n\nEs muy importante que practiques con cada control y función del Akai APC Key 25 y Ableton Live. Cuanto más practiques, más fácil te será usar el controlador y crear música. Recuerda que la práctica regular mejora tus habilidades.",
                        "flashcard": {},
                        "audios": {
                          "article": {
                            "url": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/215d4030-bbd3-4297-8c28-184ff8aba623/materials/article/audio"
                          }
                        }
                      },
                      "specs": {
                        "topic": "Akai APC Key 25 y Ableton Live",
                        "task": "Explora cada control del Akai APC Key 25 utilizando la guía proporcionada. Realiza los ejercicios prácticos para comprobar tu comprensión sobre cómo cada control interactúa con Ableton Live. Al finalizar, reflexiona sobre cómo estos controles pueden facilitar tu proceso de creación musical.",
                        "objectives": [{
                          "name": "Conocimiento técnico",
                          "objective": "Comprender el funcionamiento de cada control del Akai APC Key 25."
                        }, {
                          "name": "Interacción software",
                          "objective": "Analizar cómo los controles del Akai APC Key 25 interactúan con Ableton Live para la creación musical."
                        }, {
                          "name": "Práctica musical",
                          "objective": "Desarrollar habilidades prácticas en la implementación de los controles del Akai APC Key 25 en proyectos musicales."
                        }],
                        "instructions": "Sigue la guía extensa y detallada con paso a paso y ejercicios prácticos."
                      }
                    }
                  },
                  "d924379f-4f53-4df8-999e-eb4b8d74b281": {
                    "id": "d924379f-4f53-4df8-999e-eb4b8d74b281",
                    "objective": "",
                    "type": "multiple-choice",
                    "title": "Akai APC Key 25",
                    "description": "Selecciona la opción correcta que identifica la función de cada uno de los botones del controlador Akai APC Key 25 utilizados en la creación de loops en Ableton Live.",
                    "language": "es",
                    "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/97e98f52-cda1-43f3-aa18-00ada9ea3eec/picture",
                    "duration": 0,
                    "module": {
                      "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                      "creator": {
                        "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                        "name": "Guido Alfonsi",
                        "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                      },
                      "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                      "title": "Live Looping",
                      "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                      "language": "es",
                      "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                      "duration": "15",
                      "audience": "6to año",
                      "public": true,
                      "status": "active",
                      "type": "module",
                      "timeCreated": 1740070992173,
                      "timeUpdated": 1740070992173,
                      "owner": {
                        "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                        "name": "Instituto Terciario Tamaba",
                        "photoUrl": ""
                      },
                      "ai": true
                    },
                    "resources": {
                      "materials": {
                        "assessment": "{\"title\":\"Akai APC Key 25\",\"questions\":[{\"question\":\"¿Cuántas teclas tiene el Akai APC Key 25?\",\"options\":[\"25\",\"32\",\"16\",\"44\"],\"correctAnswer\":0},{\"question\":\"¿Qué función tienen los botones de 'Track' en el APC Key 25?\",\"options\":[\"Seleccionar diferentes pistas\",\"Ajustar el volumen\",\"Asignar clips\",\"Activar la modulación\"],\"correctAnswer\":0},{\"question\":\"¿Cuál es la disposición de los pads en el APC Key 25?\",\"options\":[\"8x8\",\"4x4\",\"6x6\",\"2x10\"],\"correctAnswer\":0},{\"question\":\"¿Qué permiten hacer los sliders de pitch bend y modulación?\",\"options\":[\"Alterar el tempo\",\"Controlar el volumen\",\"Modificar tono o amplitud\",\"Seleccionar escenas\"],\"correctAnswer\":2},{\"question\":\"¿Qué función tienen las perillas de volumen en el APC Key 25?\",\"options\":[\"Activar clips\",\"Ajustar el nivel de volumen de cada pista\",\"Cambiar el tempo\",\"Seleccionar el instrumento\"],\"correctAnswer\":1}]}"
                      },
                      "specs": {
                        "task": "",
                        "objectives": "",
                        "instructions": ""
                      }
                    }
                  },
                  "18ff5738-0a07-40b4-bd4c-088758b4da35": {
                    "id": "18ff5738-0a07-40b4-bd4c-088758b4da35",
                    "objective": "El alumno podrá expresar y defender su punto de vista sobre los efectos de la tecnología en la música actual.",
                    "type": "debate",
                    "title": "El impacto de la tecnología en la música",
                    "description": "Discusión sobre cómo las nuevas tecnologías, como el live looping, han transformado la producción musical y el papel del músico.",
                    "language": "es",
                    "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/activities/a1089cfd-6fc6-40fc-8921-f019edee29e2/picture",
                    "duration": 40,
                    "module": {
                      "id": "cc4a3fb1-84d8-4115-ba58-cd4aba91c47a",
                      "creator": {
                        "id": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                        "name": "Guido Alfonsi",
                        "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
                      },
                      "objective": "Introducir el arte del live looping con el controlador Akai APC Key 25 y Ableton Live, desarrollando habilidades en la creación musical con el uso de nuevas tecnologías.",
                      "title": "Live Looping",
                      "description": "Este módulo tiene como objetivo introducir a los alumnos en el arte del live looping utilizando el controlador Akai APC Key 25 y el software Ableton Live, fomentando la creatividad y el uso de tecnologías actuales en la creación musical.",
                      "language": "es",
                      "picture": "https://ailearn-http-d7gw5k2ica-uc.a.run.app/modules/cc4a3fb1-84d8-4115-ba58-cd4aba91c47a/picture",
                      "duration": "15",
                      "audience": "6to año",
                      "public": true,
                      "status": "active",
                      "type": "module",
                      "timeCreated": 1740070992173,
                      "timeUpdated": 1740070992173,
                      "owner": {
                        "id": "a4b45f4b-4342-4351-ba65-3464b4e82ce3",
                        "name": "Instituto Terciario Tamaba",
                        "photoUrl": ""
                      },
                      "ai": true
                    },
                    "resources": {
                      "materials": {},
                      "specs": {
                        "role": "Intérprete de live looping, dj y músico.",
                        "subject": "Efectos de la tecnología en la música actual",
                        "task": "Participa en un debate sobre los efectos de la tecnología en la música actual. Tienes que expresar y defender tu punto de vista, considerando tanto los aspectos positivos como negativos. Escucha atentamente las respuestas del chatbot y argumenta tus ideas de manera clara y convincente, desarrollando tu pensamiento crítico y habilidades comunicativas.",
                        "objectives": [{
                          "name": "Argumentación efectiva",
                          "objective": "Desarrollar la capacidad de argumentar y defender un punto de vista sobre un tema contemporáneo."
                        }, {
                          "name": "Pensamiento crítico",
                          "objective": "Fomentar el análisis crítico de cómo la tecnología influye en la creación y percepción de la música."
                        }, {
                          "name": "Conexiones emocionales",
                          "objective": "Reflexionar sobre cómo la tecnología afecta emocionalmente a los artistas y oyentes."
                        }, {
                          "name": "Metacognición",
                          "objective": "Promover la autoconciencia en el proceso de formación de opiniones y la gestión de argumentos."
                        }],
                        "instructions": ""
                      }
                    }
                  }
                }
              },
              "teachers": [{
                "uid": "67FGRegtcXVOZuqC6Sse7MIPtQw1",
                "name": "Guido Alfonsi",
                "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocI44V5_Dd2nIISOR0QxrxOh3zp3N9ejrt-rdvOlthCUdJr_Wg=s96-c"
              }],
              "access": "approved",
              "accessed": false,
              "community": false
            }
          };
        }
      });

      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/

      ims.set('./activities/collection-provider', {
        hash: 3089474622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _api = require("@beyond-js/http-suite/api");
          class ActivityCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
              if (!status) {
                throw new Error('error loading activity');
              }
              // if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            list = this.load;
            publish = async specs => {
              if (specs.type == 'assessment') {
                delete specs.type;
                return this.assessment(specs.params);
              }
              return this.spoken(specs.data);
            };
            assessment = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data,
                error
              } = await this.#api.post('/activities/assessments/completion', specs);
              if (error) {
                throw new Error('error processing assessment');
              }
              return {
                status,
                data
              };
            };
            spoken = async specs => {
              const props = Object.getOwnPropertyNames(specs);
              const form = new FormData();
              props.forEach(prop => {
                form.append(prop, specs[prop]);
              });
              const xhr = new _uploader.XHRLoader();
              xhr.bearer(_session.sessionWrapper.user.token);
              const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              this.triggerEvent();
              return json.data;
            };
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityCollectionProvider = ActivityCollectionProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/

      ims.set('./activities/collection', {
        hash: 74674477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _ = require("./");
          var _provider = require("./provider");
          class Activities extends _collection.Collection {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'activity',
                item: _.Activity,
                provider: _provider.ActivityProvider
              });
              const {
                parent,
                loadChat = false,
                ...specs
              } = props;
              this.#tracking = parent;
              this.#loadChat = loadChat;
            }
            set = data => {
              if (!data || Object.keys(data).length === 0) {
                return;
              }
              this.#order = data.order;
              let items = Object.values(data.items);
              const module = this.#tracking.module.getProperties();
              items = data.order.map(id => ({
                ...data.items[id],
                module,
                parent: this,
                loadChat: true
              }));
              this.setItems(items);
              this.items.forEach(item => {
                item.setTracking(this.#tracking);
                item.processMaterials();
              });
              return data;
            };
            async loadActivity({
              id
            }) {
              if (this.map.has(id)) return this.map.get(id);
              // const instance = new Activity({ id, assignmentId: this.tracking.assignmentId, tracking: this.tracking });
              const instance = new _.Activity({
                parent: this,
                id,
                loadChat: this.#loadChat,
                assignmentId: this.tracking.modelId,
                testing: this.tracking.testing,
                tracking: this.tracking
              });
              // instance.setTracking(this.#tracking);
              await instance.load();
              instance.trigger('credits.change');
              this.#tracking.trigger('credits.change');
              return instance;
            }
          }
          exports.Activities = Activities;
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 2059445287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          var _credits = require("../credits");
          var _provider = require("./provider");
          /*bundle*/
          class Activity extends _item.Item {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #analysis;
            get analysis() {
              return this.#analysis;
            }
            get objectives() {
              return this.resources?.specs?.objectives;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            #testing;
            get testing() {
              return this.#testing;
            }
            #loadChat;
            getMaterials() {
              return this.resources?.materials ? this.resources.materials : this.materials;
            }
            getSpecs() {
              return this.resources?.specs ? this.resources.specs : this.specs;
            }
            constructor({
              parent,
              id,
              testing = false,
              ...specs
            }) {
              super({
                id,
                entity: 'Activities',
                ...specs,
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'materials', 'settings', 'specs', 'chat', 'module', {
                  name: 'credits',
                  value: _credits.Credits
                }, 'data', 'user'],
                provider: _provider.ActivityProvider
              });
              if (specs.tracking) this.setTracking(specs.tracking);
              this.#testing = testing;
              let {
                assignmentId,
                data,
                loadChat
              } = specs;
              this.#loadChat = loadChat;
              assignmentId = assignmentId ? assignmentId : parent.tracking.assignmentId;
              this.startup(assignmentId, data);
            }
            setTracking(tracking) {
              this.#tracking = tracking;
              this.#tracking.on('credits.change', () => {
                this.set({
                  credits: this.#tracking.credits.getProperties()
                });
                this.trigger('credits.change');
              });
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
              if (this.#loadChat && this.getProperty('chat')) {
                this.loadChat(this.getProperty('chat'));
              }
            }
            async loadChat(data) {
              const chat = new _core.Chat({
                id: data.id,
                language: this.language
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: data.id
              });
              this.triggerEvent('chat.loaded');
            }
            load = async (specs = {}) => {
              if (!specs.id) specs.id = this.getProperty('id');
              specs.assignmentId = this.#assignmentId;
              const data = this.testing ? await this.provider.loadTestingActivity(this.tracking.getProperty('id'), this.getProperty('id')) : await super.load(specs);
              await this.set({
                ...data.activity,
                credits: data.credits,
                module: data.module
              });
              //when the activity is loaded in assignments view, the tracking is not loaded.
              this.#tracking.set(data);
              this.#tracking.trigger('credits.change');
              //todo: this code must be removed when the reactive model is fixed
              this.#process();
              return data;
            };
            #process() {
              if (this.materials?.assessment) {
                this.#assessment = JSON.parse(this.materials.assessment);
              }
              if (this.resources?.materials?.assessment) {
                this.#assessment = JSON.parse(this.resources.materials.assessment);
              }
            }
            processMaterials() {
              return this.#process();
            }
            async publish({
              params,
              type
            }) {
              try {
                const response = await this.provider.publish({
                  params,
                  type
                });
                this.#tracking = response.data.tracking;
                this.#assessment.selection = 'results';
                this.data = response.data.tracking;
              } catch (e) {
                throw new Error('error publishing spoken activity');
              }
            }
            async publishSpoken({
              params,
              type
            }) {
              if (!params.draftId) params.assignmentId = params.assignmentId ?? this.#assignmentId;
              params.activityId = params.activityId ?? this.id;
              const data = await this.provider.publish({
                data: params,
                type
              });
              this.set({
                data
              });
              this.#analysis = data.analysis;
              this.#feedback = data.feedback;
              this.#competenciesFeedback = data.competenciesFeedback;
            }
            set = data => {
              const response = super.set(data);
              this.#process();
              this.trigger('change');
              return response;
            };
            consumeCoins = async () => {
              return this.#tracking.consumeCoins();
            };
          }
          exports.Activity = Activity;
        }
      });

      /*************************************
      INTERNAL MODULE: ./activities/provider
      *************************************/

      ims.set('./activities/provider', {
        hash: 2933913951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
              if (!status) {
                throw new Error('error loading activity');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            loadTestingActivity = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
            list = this.load;
            publish = async specs => {
              if (specs.type == 'assessment') {
                delete specs.type;
                return this.assessment(specs.params);
              }
              return this.spoken(specs.data);
            };
            assessment = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data,
                error
              } = await this.#api.post('/activities/assessments/completion', specs);
              if (error) {
                throw new Error('error processing assessment');
              }
              return {
                status,
                data
              };
            };
            spoken = async specs => {
              const props = Object.getOwnPropertyNames(specs);
              const form = new FormData();
              props.forEach(prop => {
                form.append(prop, specs[prop]);
              });
              const xhr = new _uploader.XHRLoader();
              xhr.bearer(await _session.sessionWrapper.user.token);
              const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              return json.data;
            };
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityProvider = ActivityProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/collection
      ****************************************/

      ims.set('./assignments/collection', {
        hash: 2173799384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          /*bundle*/
          class Assignments extends _collection.Collection {
            constructor() {
              super({
                entity: 'assignments',
                item: _item.Assignment
              });
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 1328445365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle */
          class Assignment extends _item.Item {
            constructor(args) {
              super({
                entity: 'assignments',
                properties: ['id', 'title', 'description', 'name'],
                ...args
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /*************************
      INTERNAL MODULE: ./credits
      *************************/

      ims.set('./credits', {
        hash: 2299380065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(args) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /********************************************
      INTERNAL MODULE: ./dashboard/activities/index
      ********************************************/

      ims.set('./dashboard/activities/index', {
        hash: 3676316793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class DashboardActivities extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardActivities',
                item: _item.DashboardActivity
              });
              this.#parent = parent;
            }
            /**
             * Processes the activities data by sorting the items according to the given order.
             * It then updates the items structure accordingly.
             *
             * @param {IDashboard["activities"]} activities - The activities data containing the order array and items record.
             
             */
            // @ts-ignore
            set(data) {
              const items = data.order.map(id => data.items[id]);
              super.setItems(items);
              //@ts-ignore
              return super.set(items);
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
          }
          exports.DashboardActivities = DashboardActivities;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./dashboard/activities/item
      *******************************************/

      ims.set('./dashboard/activities/item', {
        hash: 1697760133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class DashboardActivity extends _item.Item {
            #parent;
            #dashboard;
            get participants() {
              return this.#dashboard?.participants.items.filter(participant => participant.activities.has(this.id)) ?? [];
            }
            get assessment() {
              return JSON.parse(this.resources?.materials?.assessment ?? '{}');
            }
            constructor({
              parent,
              ...args
            } = {}) {
              super({
                ...args,
                entity: 'DashboardParticipants',
                properties: ['id', 'type', 'language', 'title', 'description', 'picture', 'settings', 'materials', 'specs', 'resources']
              });
              this.#parent = parent;
              this.#dashboard = parent.parent;
            }
          }
          exports.DashboardActivity = DashboardActivity;
        }
      });

      /*********************************
      INTERNAL MODULE: ./dashboard/index
      *********************************/

      ims.set('./dashboard/index', {
        hash: 3873797573,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingDashboard = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participants = require("./participants");
          var _dashboard = require("./providers/dashboard");
          /*bundle*/
          class TrackingDashboard extends _item.Item {
            get isUserCreator() {
              return _session.sessionWrapper.user.id === this.module.creator?.id;
            }
            get totalParticipants() {
              return this.participants.items.length;
            }
            constructor({
              id,
              ...specs
            } = {}) {
              super({
                id,
                ...specs,
                entity: 'Dashboard',
                properties: ['id', 'classroom', 'module', 'archived', {
                  name: 'activities',
                  value: _activities.DashboardActivities
                }, {
                  name: 'participants',
                  value: _participants.Participants
                }],
                provider: _dashboard.DashboardProvider
              });
            }
            set(data) {
              const response = super.set(data);
              return response;
            }
            async archive() {
              const data = await this.provider.archive();
              this.set({
                archived: data.archived
              });
              return data;
            }
            async restore() {
              const data = await this.provider.restore();
              this.set({
                archived: data.archived
              });
              return data;
            }
          }
          exports.TrackingDashboard = TrackingDashboard;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/index
      *********************************************************/

      ims.set('./dashboard/participants/activities/index', {
        hash: 225838489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ParticipantActivities extends _model.ReactiveModel {
            #data;
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            constructor(parent) {
              super();
              if (!parent) console.trace(2, parent);
              this.#parent = parent;
              this.#data = {};
            }
            setData(data) {
              this.#data = data;
            }
            set(data) {
              data.forEach(item => {
                if (this.#map.has(item.id)) {
                  this.#map.get(item.id).set(item);
                  return;
                }
                this.#map.set(item.id, new _item.ParticipantActivity({
                  parent: this,
                  ...item
                }));
              });
              return data;
            }
            /**
             * @deprecated
             * @param activities
             */
            check(activities) {
              const types = {
                spoken: _spoken.ParticipantSpokenActivity,
                detault: _item.ParticipantActivity,
                'multiple-choice': _multipleChoice.ParticipantMultipleChoiceActivity
              };
              const currents = Object.keys(this.#data);
              currents.forEach(id => {
                if (!activities.has(id)) {
                  console.warn('something wrong, this activity is not loaded in dashboard tracking: ', id);
                  return;
                }
                const activity = activities.get(id);
                if (this.has(id)) {
                  this.get(activity.id).set(this.#data[id]?.data ?? this.#data[id]);
                  return this.get(activity.id);
                }
                const Activity = types[activity.type] || types.detault;
                const data = this.#data[id]?.data ?? this.#data[id];
                const instance = new Activity({
                  parent: this,
                  activity,
                  ...data
                });
                this.#map.set(activity.id, instance);
                return instance;
              });
            }
          }
          exports.ParticipantActivities = ParticipantActivities;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/item
      ********************************************************/

      ims.set('./dashboard/participants/activities/item', {
        hash: 1072921300,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            get activity() {
              return this.dashboard?.activities?.get(this.id);
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            get assessment() {
              const data = this.activity.assessment;
              if (this.activity.type === 'multiple-choice') {
                return {
                  title: data.title,
                  questions: data.questions.map((item, index) => {
                    return {
                      ...item,
                      ...this.responses[index]
                    };
                  })
                };
              }
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              parent,
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['id', 'alerts', 'messages', 'interactions', 'progress', 'synthesis', 'attempts', 'chat', 'data', 'counters', 'responses', ...properties]
              });
              this.#parent = parent;
            }
            async loadChat() {
              if (!this.chat || !this.chat?.id) {
                console.warn('The activity does not have a chat id');
                return;
              }
              const chat = new _core.Chat({
                id: this.chat.id
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: this.chat.id
              });
              this.triggerEvent('chat.loaded');
            }
          }
          exports.ParticipantActivity = ParticipantActivity;
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/multiple-choice
      *******************************************************************/

      ims.set('./dashboard/participants/activities/multiple-choice', {
        hash: 4142976364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantMultipleChoiceActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get questions() {
              try {
                return JSON.parse(this?.activity.resources.materials.assessment).questions;
              } catch (e) {
                console.warn(e);
              }
            }
            get participationData() {
              return this.questions?.map((question, index) => {
                return {
                  ...question,
                  answer: this.responses?.[index].answer,
                  accuracy: this.responses?.[index].accuracy
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'activity', 'counters', 'responses', ...properties]
              });
              this.#objectives = properties;
            }
          }
          exports.ParticipantMultipleChoiceActivity = ParticipantMultipleChoiceActivity;
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/spoken
      **********************************************************/

      ims.set('./dashboard/participants/activities/spoken', {
        hash: 1641659011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantSpokenActivity extends _item.Item {
            get icons() {
              if (this.assessment) {
                return Object.keys(this.assessment).map(key => this.assessment[key]);
              }
              return [];
            }
            get totalPoints() {
              return this.assessment?.reduce((acc, objective) => acc + this.assessment[objective].points, 0);
            }
            get assessment() {
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['activity', 'attempts']
              });
            }
          }
          exports.ParticipantSpokenActivity = ParticipantSpokenActivity;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./dashboard/participants/index
      **********************************************/

      ims.set('./dashboard/participants/index', {
        hash: 3470754433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participants = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class Participants extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            get dashboard() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardParticipants',
                item: _item.Participant
              });
              this.#parent = parent;
            }
            set(data) {
              const sort = (a, b) => {
                return a.user.name?.localeCompare(b.user.name);
              };
              if (Array.isArray(data)) {
                const items = data.sort((a, b) => a.name?.localeCompare(b.name));
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              } else {
                const ids = Object.keys(data);
                const items = ids.map(id => ({
                  id,
                  ...data[id]
                })).sort(sort);
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              }
            }
          }
          exports.Participants = Participants;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/item
      *********************************************/

      ims.set('./dashboard/participants/item', {
        hash: 3841754010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participant = require("../providers/participant");
          var _credits = require("../../credits");
          var _user = require("./user");
          class Participant extends _item.Item {
            #activitiesData;
            get assignmentId() {
              return this.#parent.dashboard.id;
            }
            #parent;
            get dashboard() {
              return this.#parent?.dashboard;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                provider: _participant.ParticipantProvider,
                properties: ['id', {
                  name: 'user',
                  value: _user.UserData
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              // console.log(-1, this?.dashboard);
              this.#parent = parent;
              this.#activities = new _activities.ParticipantActivities(this);
              this.setActivities(args.activities);
            }
            setActivities(elements) {
              if (Array.isArray(elements.order)) {
                const activitiesData = elements.order.filter(id => !!elements.items[id]?.data);
                const activities = activitiesData.map(id => {
                  const item = {
                    ...elements.items[id]
                  };
                  const {
                    data
                  } = item;
                  delete item.data;
                  return {
                    ...item,
                    ...data
                  };
                });
                this.#activities.set(activities);
              } else {
                const ids = Object.keys(elements);
                const activities = ids.map(id => {
                  const data = elements[id]?.data ?? elements[id];
                  return {
                    id,
                    ...data
                  };
                });
                this.#activities.set(activities);
              }
            }
            set(data) {
              this.setActivities(data.activities);
              return super.set({
                ...data
              });
            }
            async load() {
              // console.log(1, 'loading', this.user.id);
              const data = await super.load({
                userId: this.user.id ?? this.user.uid
              });
              super.ready = true;
              return data;
            }
            enableAI = async () => {
              const data = await this.provider.enableAI({
                userId: this.user.id
              });
              this.credits.set(data.credits);
              this.trigger('credits.changed');
              this.trigger('change');
            };
          }
          exports.Participant = Participant;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/user
      *********************************************/

      ims.set('./dashboard/participants/user', {
        hash: 3284649687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class UserData extends _item.Item {
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                properties: ['photoUrl', 'name', 'id']
              });
            }
          }
          exports.UserData = UserData;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./dashboard/providers/dashboard
      ***********************************************/

      ims.set('./dashboard/providers/dashboard', {
        hash: 3196296927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            async load() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${this.#parent.id}/dashboard`);
              if (!status) {
                throw new Error('error loading dashboard');
              }
              return data;
            }
            async archive() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
          }
          exports.DashboardProvider = DashboardProvider;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./dashboard/providers/participant
      *************************************************/

      ims.set('./dashboard/providers/participant', {
        hash: 2354565700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${this.#parent.assignmentId}/tracking`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            enableAI = async props => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const {
                data,
                status
              } = await this.#api.post(`/assignments/${this.#parent.assignmentId}/ai/enable`, props);
              if (!status) {
                console.log(data);
                throw new Error('error enabling AI');
              }
              return data;
            };
          }
          exports.ParticipantProvider = ParticipantProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 385040768,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor({
              texts,
              code
            }) {
              super(texts); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3441500721,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _credits = require("./credits");
          var _provider = require("./provider");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class Tracking extends _item.Item {
            #api;
            #modelId;
            modelType = 'tracking';
            get modelId() {
              return this.#modelId;
            }
            get assignmentId() {
              return this.#modelId;
            }
            #order;
            get order() {
              return this.#order;
            }
            static #instances = new Map();
            constructor({
              id,
              chat,
              testing
            }) {
              super({
                id,
                entity: 'Tracking',
                provider: _provider.TrackingProvider,
                properties: ['id', {
                  name: 'module',
                  value: _learningModules.ModuleListItem
                }, 'status', 'user', 'community', 'access', 'accessed', 'assignment', 'realtime', {
                  name: 'classroom',
                  value: _classrooms.Classroom
                }, {
                  name: 'activities',
                  value: _collection.Activities,
                  properties: {
                    loadChat: true
                  }
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              //@ts-ignore;
              this.reactiveProps(['loadChat', 'testing']);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.loadChat = !!chat;
              this.testing = testing;
              this.#modelId = id;
            }
            async loadTesting({
              id,
              activityId
            }) {
              return this.provider.getActivityTesting(id, activityId);
            }
            async load(specs = {}) {
              if (!specs.id) specs.id = this.getProperty('id');
              const data = this.testing ? await this.loadTesting(specs) : await super.load(specs);
              this.classroom.set(data.classroom);
              this.getProperty('activities').items.map(item => {
                item.set({
                  credits: data.credits
                });
              });
              if (data.activities) {
                // await this.#activities.setData(data.activities);
                this.#order = data.activities.order;
              }
              this.ready = true;
              // this.#activities = data.activities;
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              if (!response.status) return response;
              //await this.credits.set(response.data.credits);
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            };
            async accessToAssignment() {
              const specs = {
                id: this.#modelId
              };
              const data = await this.provider.access(specs);
              this.set(data);
            }
            static get({
              id,
              userId,
              chat,
              testing = false
            }) {
              const trackingId = `${id}.${userId}`;
              if (this.#instances.has(trackingId)) {
                return this.#instances.get(trackingId);
              }
              const instance = new Tracking({
                id,
                chat,
                testing
              });
              this.#instances.set(trackingId, instance);
              return instance;
            }
            async setCredits(data) {
              await this.credits.set(data);
              this.trigger('credits.change');
            }
            async requestClassroomAccess() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/classrooms/${this.classroom.id}/request`, {});
              if (!response.status && response.error?.code === 38) {
                console.error(response.error);
                return response;
              }
              if (response.data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.modelId
                });
              } else {
                await this.set({
                  access: response.data.status
                });
              }
              return response;
            }
          }
          exports.Tracking = Tracking;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 3553442921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _error = require("./error");
          class TrackingProvider {
            #api;
            #parent;
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${specs.id}/tracking`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (error) {
                throw new _error.CustomError(error);
              }
              if (!status) {
                throw new Error('error loading class');
              }
              return data;
            };
            async access(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
              if (!response.status) {
                throw new Error(`Error accessing assignment: ${response.error}`);
              }
              return response.data;
            }
            consumeCoins = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            };
            getActivityTesting = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
          }
          exports.TrackingProvider = TrackingProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./types/activity
      ********************************/

      ims.set('./types/activity', {
        hash: 3025505518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var ActivityTypeEnum;
          (function (ActivityTypeEnum) {
            ActivityTypeEnum["ContentTheory"] = "content-theory";
            ActivityTypeEnum["CharacterTalk"] = "character-talk";
            ActivityTypeEnum["Debate"] = "debate";
            ActivityTypeEnum["MultipleChoice"] = "multiple-choice";
            ActivityTypeEnum["Spoken"] = "spoken";
          })(ActivityTypeEnum || (ActivityTypeEnum = {}));
        }
      });

      /*********************************
      INTERNAL MODULE: ./types/dashboard
      *********************************/

      ims.set('./types/dashboard', {
        hash: 2151938038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityStatus = void 0;
          /**
           * Represents the possible statuses of an activity.
           */
          var ActivityStatus;
          (function (ActivityStatus) {
            ActivityStatus["PENDING"] = "pending";
            ActivityStatus["IN_PROGRESS"] = "in-progress";
            ActivityStatus["COMPLETED"] = "completed";
            ActivityStatus["OUTSTANDING"] = "outstanding";
          })(ActivityStatus || (exports.ActivityStatus = ActivityStatus = {}));
        }
      });

      /********************************
      INTERNAL MODULE: ./types/response
      ********************************/

      ims.set('./types/response', {
        hash: 1501783281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./types/tracking
      ********************************/

      ims.set('./types/tracking', {
        hash: 3168921732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/index",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./assignments/collection",
        "from": "Assignments",
        "name": "Assignments"
      }, {
        "im": "./assignments/item",
        "from": "Assignment",
        "name": "Assignment"
      }, {
        "im": "./credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./dashboard/index",
        "from": "TrackingDashboard",
        "name": "TrackingDashboard"
      }, {
        "im": "./dashboard/providers/participant",
        "from": "ParticipantProvider",
        "name": "ParticipantProvider"
      }, {
        "im": "./index",
        "from": "Tracking",
        "name": "Tracking"
      }, {
        "im": "./types/activity",
        "from": "IActivityListItem",
        "name": "IActivityListItem"
      }, {
        "im": "./types/activity",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types/dashboard",
        "from": "TrackingStatusType",
        "name": "TrackingStatusType"
      }, {
        "im": "./types/dashboard",
        "from": "IActivityTrackingBase",
        "name": "IActivityTrackingBase"
      }, {
        "im": "./types/dashboard",
        "from": "IDashboard",
        "name": "IDashboard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activities/index').Activity : value);
        (require || prop === 'Assignments') && _export("Assignments", Assignments = require ? require('./assignments/collection').Assignments : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./assignments/item').Assignment : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./credits').Credits : value);
        (require || prop === 'TrackingDashboard') && _export("TrackingDashboard", TrackingDashboard = require ? require('./dashboard/index').TrackingDashboard : value);
        (require || prop === 'ParticipantProvider') && _export("ParticipantProvider", ParticipantProvider = require ? require('./dashboard/providers/participant').ParticipantProvider : value);
        (require || prop === 'Tracking') && _export("Tracking", Tracking = require ? require('./index').Tracking : value);
        (require || prop === 'IActivityListItem') && _export("IActivityListItem", IActivityListItem = require ? require('./types/activity').IActivityListItem : value);
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types/activity').IActivityBase : value);
        (require || prop === 'TrackingStatusType') && _export("TrackingStatusType", TrackingStatusType = require ? require('./types/dashboard').TrackingStatusType : value);
        (require || prop === 'IActivityTrackingBase') && _export("IActivityTrackingBase", IActivityTrackingBase = require ? require('./types/dashboard').IActivityTrackingBase : value);
        (require || prop === 'IDashboard') && _export("IDashboard", IDashboard = require ? require('./types/dashboard').IDashboard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIQVJEQ09ERURfUkVTUE9OU0UiLCJleHBvcnRzIiwic3RhdHVzIiwiZGF0YSIsImlkIiwiY2xhc3Nyb29tIiwibmFtZSIsInBpY3R1cmUiLCJtb2R1bGUiLCJjcmVhdG9yIiwicGhvdG9VcmwiLCJvd25lciIsImxhbmd1YWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsImF1ZGllbmNlIiwiY2F0ZWdvcnkiLCJsZXZlbCIsImZvcm1hdCIsImVudGl0eSIsImFjdGl2aXRpZXMiLCJjb3VudCIsInR5cGVzIiwicGF5ZXIiLCJjb2RlIiwicHVibGljIiwib3JkZXIiLCJpdGVtcyIsInR5cGUiLCJ0aW1lQ3JlYXRlZCIsInRpbWVVcGRhdGVkIiwiYWkiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJ1cmwiLCJzcGVjcyIsInRvcGljIiwidGFzayIsIm9iamVjdGl2ZXMiLCJpbnN0cnVjdGlvbnMiLCJzZXR0aW5ncyIsImxheW91dCIsInJvbGUiLCJzdWJqZWN0IiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwidGVhY2hlcnMiLCJ1aWQiLCJhcmNoaXZlZCIsImFjY2VzcyIsImFjY2Vzc2VkIiwiY29tbXVuaXR5IiwiSEFSRENPREVEMiIsIkhBUkRDT0RFRCIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX2FwaSIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImxvYWQiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImdldCIsImFzc2lnbm1lbnRJZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJwYXJhbXMiLCJzcG9rZW4iLCJlcnJvciIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwidXBsb2FkIiwianNvbiIsInRyaWdnZXJFdmVudCIsImNvbnN1bWVDb2lucyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIml0ZW0iLCJBY3Rpdml0eSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInNldCIsImtleXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwibWFwIiwic2V0SXRlbXMiLCJzZXRUcmFja2luZyIsInByb2Nlc3NNYXRlcmlhbHMiLCJsb2FkQWN0aXZpdHkiLCJoYXMiLCJpbnN0YW5jZSIsIm1vZGVsSWQiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsIl9jb3JlIiwiX2l0ZW0iLCJfY3JlZGl0cyIsIkl0ZW0iLCJmZWVkYmFjayIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiYW5hbHlzaXMiLCJjaGF0TW9kZWwiLCJnZXRNYXRlcmlhbHMiLCJnZXRTcGVjcyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxvYWRBbGwiLCJsb2FkVGVzdGluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJzZWxlY3Rpb24iLCJlIiwicHVibGlzaFNwb2tlbiIsImRyYWZ0SWQiLCJhY3Rpdml0eUlkIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTG9hZCIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImFyZ3MiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiRGFzaGJvYXJkQWN0aXZpdGllcyIsIkRhc2hib2FyZEFjdGl2aXR5IiwiZGFzaGJvYXJkIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGFydGljaXBhbnQiLCJfYWN0aXZpdGllcyIsIl9wYXJ0aWNpcGFudHMiLCJfZGFzaGJvYXJkIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJpc1VzZXJDcmVhdG9yIiwidG90YWxQYXJ0aWNpcGFudHMiLCJQYXJ0aWNpcGFudHMiLCJEYXNoYm9hcmRQcm92aWRlciIsImFyY2hpdmUiLCJyZXN0b3JlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsIk1hcCIsImNvbnNvbGUiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImN1cnJlbnRzIiwid2FybiIsInF1ZXN0aW9ucyIsImluZGV4IiwicmVzcG9uc2VzIiwiYXR0ZW1wdHMiLCJ0cmFuc2NyaXB0aW9uIiwib2JqZWN0aXZlc0tleXMiLCJrZXkiLCJwYXJ0aWNpcGF0aW9uRGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJpY29ucyIsInRvdGFsUG9pbnRzIiwicmVkdWNlIiwiYWNjIiwicG9pbnRzIiwiUGFydGljaXBhbnQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiQXJyYXkiLCJpc0FycmF5IiwiaWRzIiwiX3BhcnRpY2lwYW50IiwiX3VzZXIiLCJhY3Rpdml0aWVzRGF0YSIsIlBhcnRpY2lwYW50UHJvdmlkZXIiLCJVc2VyRGF0YSIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZXJJZCIsInJlYWR5IiwiZW5hYmxlQUkiLCJ0ZXh0IiwibG9nIiwiQ3VzdG9tRXJyb3IiLCJtZXNzYWdlIiwidGV4dHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJNb2R1bGVMaXN0SXRlbSIsIkNsYXNzcm9vbSIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImFjY2Vzc1RvQXNzaWdubWVudCIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsInRvTG93ZXJDYXNlIiwiX2Vycm9yIiwiQWN0aXZpdHlUeXBlRW51bSIsIkFjdGl2aXR5U3RhdHVzIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvSEFERVJDT0RFRC50cyIsIi9IQVJDT0RFRF8yLnRzIiwiL0hBUkRDT0RFRDMudHMiLCIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2NyZWRpdHMudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9kYXNoYm9hcmQvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaXRlbS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL3VzZXIudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9kYXNoYm9hcmQudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9wYXJ0aWNpcGFudC50cyIsIi9lcnJvci50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi90eXBlcy9hY3Rpdml0eS50cyIsIi90eXBlcy9kYXNoYm9hcmQudHMiLCIvcmVzcG9uc2UudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLGtCQUFrQixHQUFBQyxPQUFBLENBQUFELGtCQUFBLEdBQUc7WUFDakNFLE1BQU0sRUFBRSxJQUFJO1lBQ1pDLElBQUksRUFBRTtjQUNMQyxFQUFFLEVBQUUsc0NBQXNDO2NBQzFDQyxTQUFTLEVBQUU7Z0JBQ1ZELEVBQUUsRUFBRSxzQ0FBc0M7Z0JBQzFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsTUFBTSxFQUFFO2dCQUNQSixFQUFFLEVBQUUsc0NBQXNDO2dCQUMxQ0ssT0FBTyxFQUFFO2tCQUNSTCxFQUFFLEVBQUUsOEJBQThCO2tCQUNsQ0UsSUFBSSxFQUFFLHVCQUF1QjtrQkFDN0JJLFFBQVEsRUFDUDtpQkFDRDtnQkFDREMsS0FBSyxFQUFFO2tCQUNOUCxFQUFFLEVBQUUsc0NBQXNDO2tCQUMxQ0UsSUFBSSxFQUFFLDRCQUE0QjtrQkFDbENJLFFBQVEsRUFBRTtpQkFDVjtnQkFDREUsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLEtBQUssRUFBRSxzQ0FBc0M7Z0JBQzdDQyxXQUFXLEVBQ1Ysc0tBQXNLO2dCQUN2S1AsT0FBTyxF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LENBQUFSLEdBQUksQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FFdkIsT0FBTyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDb0IsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQW5CLE1BQU8sQ0FBQ1ksWUFBWSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7WUFDckYsQ0FBQztZQUVEc0ssa0JBQWtCLEdBQUcsTUFBQUEsQ0FBT3hGLE9BQU8sRUFBRUMsVUFBVSxLQUFJO2NBQ2xELE1BQU1wRixLQUFLLEdBQUcsTUFBTVosUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztjQUM3QyxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztjQUV2QixNQUFNO2dCQUFFdkUsTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQThELEdBQUksQ0FBQ1ksR0FBRyxDQUFDLG1CQUFtQitFLE9BQU8sZUFBZUMsVUFBVSxVQUFVLENBQUM7Y0FDM0csT0FBTzFKLElBQUk7WUFDWixDQUFDOztVQUNERixPQUFBLENBQUE4TyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDRCxJQUFLWSxnQkFNSjtVQU5ELFdBQUtBLGdCQUFnQjtZQUNwQkEsZ0JBQUEsb0NBQWdDO1lBQ2hDQSxnQkFBQSxvQ0FBZ0M7WUFDaENBLGdCQUFBLHFCQUFpQjtZQUNqQkEsZ0JBQUEsc0NBQWtDO1lBQ2xDQSxnQkFBQSxxQkFBaUI7VUFDbEIsQ0FBQyxFQU5JQSxnQkFBZ0IsS0FBaEJBLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEckI7OztVQUdBLElBQVlDLGNBS1g7VUFMRCxXQUFZQSxjQUFjO1lBQ3pCQSxjQUFBLHVCQUFtQjtZQUNuQkEsY0FBQSwrQkFBMkI7WUFDM0JBLGNBQUEsMkJBQXVCO1lBQ3ZCQSxjQUFBLCtCQUEyQjtVQUM1QixDQUFDLEVBTFdBLGNBQWMsS0FBQTNQLE9BQUEsQ0FBQTJQLGNBQUEsR0FBZEEsY0FBYzs7Ozs7Ozs7Ozs7VUNuQzFCOztVQUVBckssTUFBQSxDQUFBc0ssY0FBQSxDQUFBNVAsT0FBQTtZQUNBeUksS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBbkQsTUFBQSxDQUFBc0ssY0FBQSxDQUFBNVAsT0FBQTtZQUNBeUksS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119