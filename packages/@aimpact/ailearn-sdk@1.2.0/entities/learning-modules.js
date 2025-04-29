System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/http-suite@0.1.0/api", "zod@3.24.2", "@beyond-js/reactive@2.0.4/entities/collection"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, LearningModuleBase, LearningModules, CommunityLearningModule, Credits, Draft, LearningModule, ModuleListItem, ActivityType, IActivityListItem, IOwnerData, IActivityDraftData, ISuggestionResponse, IModuleListItem, ILearningModuleDraft, ICreditsConsumptionsData, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    ActivityTypes: void 0,
    LearningModuleBase: void 0,
    LearningModules: void 0,
    CommunityLearningModule: void 0,
    Credits: void 0,
    Draft: void 0,
    LearningModule: void 0,
    ModuleListItem: void 0,
    ActivityType: void 0,
    IActivityListItem: void 0,
    IOwnerData: void 0,
    IActivityDraftData: void 0,
    ISuggestionResponse: void 0,
    IModuleListItem: void 0,
    ILearningModuleDraft: void 0,
    ICreditsConsumptionsData: void 0,
    IActivityObjective: void 0,
    IActivityBase: void 0,
    IContentTheoryActivity: void 0,
    ICharacterTalkActivity: void 0,
    IDebateActivity: void 0,
    IMultipleChoiceActivity: void 0,
    ISpokenActivity: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_1 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsReactive204Model) {
      dependency_2 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_3 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_4 = _aimpactAilearnSdk120Config;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_6 = _beyondJsHttpSuite010Api;
    }, function (_zod2) {
      dependency_7 = _zod2;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_8 = _beyondJsReactive204EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-sdk/startup', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/http-suite/api', dependency_6], ['zod', dependency_7], ['@beyond-js/reactive/entities/collection', dependency_8]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/
      ims.set('./activities/collection', {
        hash: 1705926024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          /**
           * type
           *
           * 1. Contenido/Teoría (ID: content-theory)
           * 2. Conversación (ID: conversation)
           * 3. Multiple-Choice (ID: multiple-choice):
           * 4. Hablado (ID: spoken)
           * 5. Escrito (ID: written) # Esta no la vamos a usar hasta que implementemos la pantalla de assignments
           */
          class Activities extends _model.ReactiveModel {
            #learningModule;
            #map = new Map();
            get items() {
              return [...this.#map.values()].sort((a, b) => a.order - b.order);
            }
            static isCollection = true;
            #saveTimeout;
            constructor(parent, args) {
              super();
              this.#learningModule = parent;
            }
            setParent(parent) {
              this.#learningModule = parent;
            }
            getItems() {
              const data = [];
              this.#map.forEach(item => {
                data.push(item.getProperties());
              });
              return data;
            }
            get valid() {
              return this.items.every(item => {
                return item.state === 'completed';
              });
            }
            clear() {
              this.#map.clear();
              this.trigger('change');
            }
            get availableTypes() {
              return ['content-theory', 'debate', 'multiple-choice', 'character-talk', 'spoken'];
            }
            setItems(data) {
              if (!data) return;
              data.forEach((activity, index) => {
                if (!this.availableTypes.includes(activity.type)) {
                  console.warn('The activity type', activity.type, 'is not available');
                  return;
                }
                if (this.#map.has(activity.id)) {
                  const item = this.#map.get(activity.id);
                  item.set(activity);
                  return;
                }
                const instance = new _item.Activity(this.#learningModule, {
                  ...activity,
                  index
                });
                this.#map.set(instance.id, instance);
              });
              return {
                updated: true
              };
            }
            set(data) {
              if (Array.isArray(data)) {
                return this.setItems(data);
              }
              const response = super.set(data);
              // this.types = data.types;
              return response;
            }
            /**
             * Add a new activity to the learning module when it is a Draft
             *
             * @param type
             * @param manual
             * @returns
             */
            async add(type, manual = false) {
              if (!this.availableTypes.includes(type)) {
                console.warn('The activity type', type, 'is not available');
                return;
              }
              const activity = new _item.Activity(this.#learningModule, {
                type,
                order: this.items.length,
                language: this.#learningModule.language
              });
              this.#map.set(activity.instanceId, activity);
              this.#learningModule.saveDraft();
              return activity;
            }
            /**
             * TODO: Validate this method
             * @param items
             */
            async reorder(items) {
              items.forEach((item, index) => {
                item.order = index;
              });
              return this.#learningModule.saveDraft();
            }
            async remove(id) {
              if (!this.#map.has(id)) {
                console.warn('The activity', id, 'does not exist in the collection');
                return;
              }
              this.#map.delete(id);
              await this.#learningModule.saveDraft();
              this.trigger('change');
            }
            clean() {
              // TODO: Implement this method
            }
            get(id) {
              return this.#map.get(id);
            }
            has(id) {
              return this.#map.has(id);
            }
            getItemProperties() {
              const items = [];
              for (let item of this.items) {
                items.push(item.getProperties());
              }
              return items;
            }
          }
          exports.Activities = Activities;
        }
      });

      /*********************************
      INTERNAL MODULE: ./activities/item
      *********************************/

      ims.set('./activities/item', {
        hash: 700251896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _suggestions = require("../suggestions");
          var _materials = require("./materials");
          var _factory = require("./specs/factory");
          /*bundle*/
          class Activity extends _item.Item {
            #api;
            #suggestions;
            get state() {
              return this.specs.valid && this.title && this.description ? 'completed' : 'processing';
            }
            get prepared() {
              return this.specs.objective && this.title && this.description;
            }
            get id() {
              return this.instanceId;
            }
            get instanceId() {
              //@ts-ignore
              return super.id ?? this.__instanceId;
            }
            #learningModule;
            get parent() {
              return this.#learningModule;
            }
            get objective() {
              return this.specs?.objective;
            }
            get structure() {
              return {};
            }
            get unpublished() {
              return super.unpublished || this.specs.unpublished;
            }
            get readyToTest() {
              return this.progressData.filter(item => !item).length === 0;
            }
            get progressData() {
              const output = [!!this.title, !!this.description];
              if (this.specs.structure.general) output.push(this.specs.validateData('general'));
              // if (this.specs.structure.advanced) output.push(this.specs.validateData('advanced'));
              if (this.specs.structure.agent) output.push(this.specs.validateData('agent'));
              return output;
            }
            get progressFields() {
              return [{
                name: 'title'
              }, {
                name: 'description'
              }, ...this.specs.progressFields];
            }
            constructor(learningModule, args = {}) {
              super({
                ...args,
                entity: 'LearningModuleActivity',
                settings: {
                  layout: 'main-chat-layout'
                },
                properties: ['id', 'type', 'title', 'settings', 'description', 'order', 'types', 'duration', 'picture', 'language', 'pictureSuggestions', 'type', {
                  name: 'materials',
                  value: _materials.ActivityMaterials
                }, {
                  name: 'specs',
                  value: _factory.ActivitySpecsFactory.get(args.type)
                }]
              });
              this.#learningModule = learningModule;
              this.#suggestions = new _suggestions.Suggestions();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.materials.setParents(this, this.#learningModule);
              this.specs?.setParents(this, this.#learningModule);
              this.specs.on('properties.changed', () => {
                this.triggerEvent('properties.changed');
                this.trigger('change');
              });
            }
            async generate({
              notes,
              objective,
              related
            }) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'activities',
                  id: this.#learningModule.id,
                  activity: this.type,
                  objective,
                  activityId: this.id,
                  language: this.language,
                  notes,
                  related
                });
                await this.set(data);
                await this.specs.set(data);
                this.specs.saveChanges();
                this.saveChanges();
                this.#learningModule.setCredits(data.credits);
                this.#learningModule.saveDraft();
                this.trigger('activity.generated');
                return data;
              } catch (e) {
                console.log(e);
              } finally {
                this.fetching = false;
              }
            }
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.#learningModule.set({
                credits: data.credits
              });
              return data;
            }
            /**
             *
             * @param observations
             */
            async generatePicture(prompt = '') {
              if (!prompt) {
                throw new Error('Prompt is required to generate a picture for the activity.');
              }
              const stringFormat = {
                es: {
                  prefix: 'Ilustación:',
                  sufix: 'genera la imagen en formato 16:9.'
                },
                en: {
                  prefix: 'Illustration:',
                  sufix: 'generate the image in 16:9 format.'
                },
                de: {
                  prefix: 'Illustration:',
                  sufix: 'generieren Sie das Bild im 16:9-Format.'
                }
              };
              const format = stringFormat[this.language] ?? stringFormat.en;
              prompt = `${format.prefix} ${prompt} ${format.sufix}`;
              const {
                url
              } = await this.#suggestions.image({
                prompt,
                size: '1792x1024',
                format: 'url'
              });
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoint = `/modules/drafts/${this.#learningModule.id}/activities/${this.id}/image`;
              const saveResponse = await this.#api.post(endpoint, {
                url
              });
              this.#learningModule.set({
                credits: saveResponse.data.credits
              });
              this.#learningModule.trigger('credits.change');
              this.picture = saveResponse.data.picture;
              this.triggerEvent('image.generated');
              if (!saveResponse.status) {
                throw new Error(saveResponse.error);
              }
              return this.picture;
            }
            async clearContent() {
              await this.specs.clear();
              // await this.materials?.clear();
              await this.#learningModule.saveDraft();
            }
            save = async specs => {
              if (specs) await this.set(specs);
              if (!this.unpublished) return;
              this.fetching = true;
              // super.save();
              const response = await this.#learningModule.saveDraft();
              if (specs?.credits) {
                this.#learningModule.setCredits(specs.credits);
              }
              //  persist changes in memory
              this.specs.saveChanges();
              this.trigger('activity.saved');
              this.fetching = false;
              return response;
            };
            remove(id) {
              // TODO: Implement this method
            }
            getProperties() {
              let properties = super.getProperties();
              if (!properties.id) {
                return {
                  ...properties,
                  id: this.instanceId
                };
              }
              return properties;
            }
            async setLayout(layout) {
              if (!['main-chat-layout', 'main-content-layout', 'full-content-layout'].includes(layout)) {
                console.warn('invalid layout', layout);
                return;
              }
              this.set({
                settings: {
                  layout
                }
              });
              await this.#learningModule.saveDraft();
              //  persist changes in memory
              this.trigger('activity.saved');
              this.fetching = false;
              console.log('layout set to', layout);
            }
            validateData(property) {
              if (this[property]) {
                return !!this[property];
              }
              return this.specs.validateData(property);
            }
          }
          exports.Activity = Activity;
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/materials/index
      ********************************************/

      ims.set('./activities/materials/index', {
        hash: 584613522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class ActivityMaterials extends _model.ReactiveModel {
            #api;
            #parent;
            #draft;
            #emptyData = {
              article: '',
              synthesis: '',
              introduction: '',
              dyslexia: '',
              flashcard: {}
            };
            constructor(props = {}) {
              super({
                ...props,
                properties: ['article', 'synthesis', 'introduction', 'dyslexia', 'flashcard', 'audios']
              });
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            setParents = (parent, draft) => {
              this.#parent = parent;
              this.#draft = draft;
            };
            getData() {
              return this.getProperties();
            }
            clear() {
              this.set(this.#emptyData);
            }
            #audiosMap = new Map();
            get audiosMap() {
              return this.#audiosMap;
            }
            async generateContent(notes, objective) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/article`;
                const {
                  status,
                  data
                } = await this.#api.post(url, {
                  title: this.#parent.title,
                  objective: objective ? objective : this.#parent.specs.objective,
                  notes
                });
                this.set(data);
                await this.#draft.saveDraft({
                  credits: data.credits
                });
                this.#draft.trigger('credits.change');
                if (!status) {
                  throw new Error('error generating article material');
                }
                this.set(data);
                return data;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generate(name, notes, objective) {
              this.fetching = true;
              if (name === 'article') return this.generateContent(notes, objective);
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/${name}`;
              const {
                status,
                data
              } = await this.#api.post(url, {
                notes,
                objective
              });
              if (!status) {
                throw new Error('error generating materials');
              }
              this.set(data);
              await this.#draft.saveDraft(data);
              this.fetching = false;
              this.#draft.trigger('credits.change');
              return data;
            }
            async generateAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/audio`;
              const specs = materials ? {
                materials
              } : {};
              const {
                status,
                data
              } = await this.#api.post(url, specs);
              if (!status) {
                throw new Error('error generating article material');
              }
              await Promise.all([this.#draft.set({
                credits: data.credits
              }), this.set({
                audios: {
                  ...this.audios,
                  ...data.audios
                }
              })]);
              this.#draft.trigger('credits.change');
              this.trigger('audios.changed');
              return data;
            }
            async deleteAudio(materials = []) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const url = `/modules/drafts/${this.#draft.id}/activities/${this.#parent.id}/materials/audio`;
              const specs = materials ? {
                materials
              } : {};
              const {
                status,
                data
              } = await this.#api.delete(url, specs);
              if (!status) {
                throw new Error('error generating article material');
              }
              await Promise.all([this.set({
                audios: data.audios
              })]);
              this.trigger('audios.changed');
              // this.#draft.trigger('credits.change');
              return data;
            }
            async deleteAudios() {
              this.set({
                audios: undefined
              });
              return await this.#draft.saveDraft();
            }
          }
          exports.ActivityMaterials = ActivityMaterials;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/base
      ***************************************/

      ims.set('./activities/specs/base', {
        hash: 2520513949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _suggestions = require("../../suggestions");
          class ActivitySpecs extends _model.ReactiveModel {
            get structure() {
              return {};
            }
            #learningModule;
            #parent;
            get parent() {
              return this.#parent;
            }
            ignoredProperties = ['objective'];
            #suggestions;
            get suggestions() {
              return this.#suggestions;
            }
            get progressFields() {
              const entries = Object.entries(this.structure);
              const fields = [];
              for (const [key, value] of entries) {
                if (key === 'grouped') continue;
                fields.push({
                  name: key,
                  optional: value.optional
                });
              }
              return fields;
            }
            get valid() {
              const isArrayValid = (array, fields) => Array.isArray(array) && array.length > 0 && array.every(item => Object.keys(fields).every(field => item[field]));
              const validateStructure = structure => {
                return Object.entries(structure).every(([property, config]) => {
                  if (config.type === 'array') {
                    return isArrayValid(this[property], config.fields);
                  } else if (config.optional) {
                    return true;
                  }
                  return !!this[property];
                });
              };
              return validateStructure(this.structure.general) && validateStructure(this.structure.agent);
            }
            get agentData() {
              return this.validateData('agent');
            }
            get generalData() {
              return this.validateData('general');
            }
            get advancedData() {
              return this.validateData('advanced');
            }
            constructor(args = {
              properties: []
            }) {
              super({
                ...args,
                properties: ['objective', ...args.properties]
              });
              this.#suggestions = new _suggestions.Suggestions();
            }
            empty() {
              let isEmpty = true;
              let band = 0;
              while (isEmpty && band < this.properties.length) {
                if (this.properties[band] === 'objective') {
                  band++;
                  continue;
                }
                //@ts-ignore;
                if (this[this.properties[band]]) {
                  isEmpty = false;
                }
                band++;
              }
              return isEmpty;
            }
            setParents(parent, learningModule) {
              this.#parent = parent;
              this.#learningModule = learningModule;
            }
            set(properties) {
              super.set(properties);
              this.trigger('properties.changed');
              return {
                updated: true
              };
            }
            async clear() {
              this.properties.forEach(property => {
                if (property === 'objective') return;
                //@ts-ignore
                this[property] = undefined;
              });
              this.trigger('specs.cleaned');
            }
            async generate(notes, specs) {
              this.fetching = true;
              try {
                const data = await this.suggestions.generate({
                  type: 'specifications',
                  id: this.#learningModule.id,
                  activityId: this.#parent.id ?? this.#parent.instanceId,
                  activity: this.#parent.type,
                  // todo: in some place the notes is a string, in others it's an object
                  // we need to standardize this
                  notes: typeof notes === 'string' ? notes : notes?.notes,
                  ...specs
                });
                await this.set(data);
                this.saveChanges();
                this.#parent.save(data);
                this.trigger('specs.generated');
                return data;
              } catch (e) {
                this.fetching = false;
                throw e;
              }
            }
            getLearningModule() {
              return this.#learningModule;
            }
            getParent() {
              return this.#parent;
            }
            setCredits(credits) {
              this.#learningModule.set({
                credits
              });
            }
            _validateData(structureName) {
              let band = true;
              if (!this.structure[structureName]) {
                return;
              }
              Object.keys(this.structure[structureName]).forEach(item => {
                const structure = this.structure[structureName][item];
                const property = this[item];
                if (structure.type === 'array' && !!!property?.length) band = false;
                if (structure.type === 'array' && property?.length > 0) {
                  property.forEach(element => {
                    Object.keys(structure.fields).forEach(field => {
                      if (!element[field]) band = false;
                    });
                  });
                }
                if (!property) band = false;
                // if (structure.required && !property) band = false;
              });
              return band;
            }
            validateData(structureName) {
              let band = true;
              const structure = this.structure.grouped ? this.structure[structureName] : this.structure;
              if (!structure) return;
              Object.keys(structure).forEach(item => {
                const fieldStructure = structure[item];
                const property = this[item];
                if (['optional', 'attachments'].includes(item)) return;
                // Validar usando el esquema de Zod si está definido
                if (fieldStructure.schema) {
                  const result = fieldStructure.schema.safeParse(property);
                  if (!result.success) band = false;
                } else {
                  //old logic
                  if (fieldStructure.type === 'array' && !!!property?.length) band = false;
                  if (fieldStructure.type === 'array' && property?.length > 0) {
                    property.forEach(element => {
                      Object.keys(fieldStructure.fields).forEach(field => {
                        if (!element[field]) band = false;
                      });
                    });
                  }
                }
                if (!property) band = false;
              });
              return band;
            }
          }
          exports.ActivitySpecs = ActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/character-talk
      *************************************************/

      ims.set('./activities/specs/character-talk', {
        hash: 1833066880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivitySpecs = void 0;
          var _base = require("./base");
          class CharacterTalkActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                /**
                 *   This is a flag to indicate that the fields are grouped and is used by validateData method
                 *  to know if the fields are grouped or not
                 */
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  role: {
                    label: 'characterRole',
                    position: 1,
                    type: 'textarea',
                    required: true
                  },
                  objectives: {
                    position: 2,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 3,
                    advanced: true,
                    type: 'textarea',
                    optional: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions']
              });
            }
          }
          exports.CharacterTalkActivitySpecs = CharacterTalkActivitySpecs;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/specs/chat
      ***************************************/

      ims.set('./activities/specs/chat', {
        hash: 3437788342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivitySpecs = void 0;
          var _base = require("./base");
          class ChatActivitySpecs extends _base.ActivitySpecs {
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'objectives']
              });
            }
          }
          exports.ChatActivitySpecs = ChatActivitySpecs;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/specs/content-theory
      *************************************************/

      ims.set('./activities/specs/content-theory', {
        hash: 2219931835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivitySpecs = void 0;
          var _base = require("./base");
          class ContentTheoryActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  topic: {
                    position: 1,
                    type: 'input',
                    required: true
                  },
                  objectives: {
                    position: 2,
                    advanced: true,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 5,
                    type: 'textarea',
                    optional: true
                  },
                  attachments: {
                    position: 3,
                    multiple: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'objectives', 'task', 'instructions', 'topic']
              });
            }
          }
          exports.ContentTheoryActivitySpecs = ContentTheoryActivitySpecs;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/debate
      *****************************************/

      ims.set('./activities/specs/debate', {
        hash: 788669142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivitySpecs = void 0;
          var _base = require("./base");
          class DebateActivitySpecs extends _base.ActivitySpecs {
            /**
             * Task, instructions and objectives are common fields for all content activities
             */
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea',
                    required: true
                  }
                },
                agent: {
                  role: {
                    type: 'textarea',
                    required: true,
                    position: 1
                  },
                  subject: {
                    type: 'textarea',
                    required: true,
                    position: 2
                  },
                  objectives: {
                    position: 3,
                    type: 'array',
                    required: true,
                    fields: {
                      name: 'input',
                      objective: 'textarea'
                    }
                  }
                },
                advanced: {
                  optional: true,
                  instructions: {
                    position: 4,
                    advanced: true,
                    type: 'textarea',
                    optional: true
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'role', 'instructions', 'subject', 'objectives', 'task']
              });
            }
          }
          exports.DebateActivitySpecs = DebateActivitySpecs;
        }
      });

      /******************************************
      INTERNAL MODULE: ./activities/specs/factory
      ******************************************/

      ims.set('./activities/specs/factory', {
        hash: 3925601858,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecsFactory = void 0;
          var _characterTalk = require("./character-talk");
          var _chat = require("./chat");
          var _contentTheory = require("./content-theory");
          var _debate = require("./debate");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ActivitySpecsFactory {
            static registry = new Map();
            static register(type, ctor) {
              this.registry.set(type, ctor);
            }
            static create(type) {
              const instance = this.registry.get(type);
              if (!instance) {
                throw new Error(`Activity type "${type}" is not registered.`);
              }
              return new instance();
            }
            static get(type) {
              if (!this.registry.has(type)) {
                console.warn(`the activity type passed is not registered, type: ${type}`);
              }
              return this.registry.get(type);
            }
          }
          // Registering the activity types
          exports.ActivitySpecsFactory = ActivitySpecsFactory;
          ActivitySpecsFactory.register('chat', _chat.ChatActivitySpecs);
          ActivitySpecsFactory.register('debate', _debate.DebateActivitySpecs);
          ActivitySpecsFactory.register('character-talk', _characterTalk.CharacterTalkActivitySpecs);
          ActivitySpecsFactory.register('content-theory', _contentTheory.ContentTheoryActivitySpecs);
          ActivitySpecsFactory.register('multiple-choice', _multipleChoice.MultipleChoiceActivitySpecs);
          ActivitySpecsFactory.register('spoken', _spoken.SpokenActivitySpecs);
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/multiple-choice
      **************************************************/

      ims.set('./activities/specs/multiple-choice', {
        hash: 3018563661,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivitySpecs = void 0;
          var _base = require("./base");
          var _zod = require("zod");
          class MultipleChoiceActivitySpecs extends _base.ActivitySpecs {
            ignoredProperties = ['objective', 'related'];
            get structure() {
              return {
                questions: {
                  required: true,
                  type: 'array',
                  progress: true,
                  schema: _zod.z.array(_zod.z.object({
                    question: _zod.z.string().min(1),
                    options: _zod.z.array(_zod.z.string().min(1)).min(1),
                    correctAnswer: _zod.z.number().int().nonnegative()
                  }).refine(data => data.correctAnswer < data.options.length)),
                  fields: {
                    question: 'input',
                    answers: {
                      type: 'array',
                      fields: {
                        answer: 'input',
                        correct: 'boolean'
                      }
                    }
                  }
                }
              };
            }
            get valid() {
              if (!this.questions || !this.questions.length) return false;
              return this.questions.every(question => {
                return question.question && question.options.length > 0 && question.correctAnswer >= 0 && question.correctAnswer < question.options.length;
              });
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['questions', 'related']
              });
            }
            empty() {
              let isEmpty = true;
              let band = 0;
              while (isEmpty && band < this.properties.length) {
                const str = this.properties[band];
                if (['objective', 'related'].includes(str)) {
                  band++;
                  continue;
                }
                if (this[str]) {
                  isEmpty = false;
                }
                band++;
              }
              return isEmpty;
            }
            async generate(notes, {
              related
            }) {
              const data = await this.suggestions.generate({
                type: 'questions',
                id: this.getLearningModule().id,
                related,
                // todo: in some place the notes is a string, in others it's an object
                // we need to standardize this
                notes: typeof notes === 'string' ? notes : notes?.notes
              });
              if (data.error) {
                return data;
              }
              this.set(data);
              this.parent.save(data);
              this.trigger('specs.generated');
              return data;
            }
            async generateAnswers({
              notes,
              question,
              index
            }) {
              this.fetching = true;
              const data = await this.suggestions.generate({
                type: 'answers',
                id: this.getLearningModule().id,
                question,
                notes
              });
              this.questions[index].options = data.options;
              this.questions[index].correctAnswer = data.correctAnswer;
              this.parent.save(data);
              return this.questions[index];
            }
          }
          exports.MultipleChoiceActivitySpecs = MultipleChoiceActivitySpecs;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/spoken
      *****************************************/

      ims.set('./activities/specs/spoken', {
        hash: 618343526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivitySpecs = void 0;
          var _base = require("./base");
          class SpokenActivitySpecs extends _base.ActivitySpecs {
            get structure() {
              return {
                grouped: true,
                general: {
                  task: {
                    type: 'textarea'
                  }
                },
                agent: {
                  assessment: {
                    type: 'textarea'
                  },
                  criteria: {
                    type: 'array',
                    fields: {
                      name: 'input',
                      subject: 'textarea'
                    }
                  }
                }
              };
            }
            constructor(args = {}) {
              super({
                ...args,
                properties: ['objective', 'task', 'assessment', 'criteria']
              });
            }
          }
          exports.SpokenActivitySpecs = SpokenActivitySpecs;
        }
      });

      /********************************
      INTERNAL MODULE: ./activity-types
      ********************************/

      ims.set('./activity-types', {
        hash: 2374617754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityTypes = void 0;
          var _moduleActivities = require("./types/module-activities");
          class Types {
            #types = [{
              id: _moduleActivities.ActivityType.ContentTheory,
              name: 'Content/Theory',
              specs: ['objective'],
              aiContent: ['title', 'description', 'objective'],
              materials: [{
                name: 'article'
              }, {
                dependencies: 'article',
                name: 'synthesis'
              }, {
                dependencies: 'article',
                name: 'dyslexia'
              }, {
                dependencies: ['article'],
                name: 'audios'
              }],
              fields: ['language']
            }, {
              id: _moduleActivities.ActivityType.Debate,
              name: 'Debate',
              specs: ['objective', 'subject'],
              aiContent: ['title', 'description', 'objective']
            }, {
              id: _moduleActivities.ActivityType.CharacterTalk,
              name: 'Character Talk',
              specs: ['objective', 'role'],
              aiContent: ['title', 'description', 'objective', 'role'],
              fields: ['language']
            }, {
              id: _moduleActivities.ActivityType.MultipleChoice,
              name: 'Multiple-Choice',
              //specs: ['objective', 'related'],
              specs: ['questions'],
              materials: [],
              suggestions: 'questions',
              fields: ['questions', 'language']
            },
            // { id: 'written/spoken', name: 'Spoken' },
            {
              id: _moduleActivities.ActivityType.Spoken,
              name: 'Spoken',
              aiContent: ['title', 'description', 'objective'],
              fields: ['language'],
              specs: ['objective', 'assessment', 'task', {
                name: 'criteria',
                fields: ['name', 'subject']
              }]
            }];
            get items() {
              return this.#types;
            }
            #map = new Map();
            get entries() {
              return this.#map;
            }
            constructor() {
              this.#types.forEach(type => {
                this.#map.set(type.id, type.id);
              });
            }
            get(id) {
              return this.#map.get(id);
            }
          }
          /*bundle*/
          const ActivityTypes = exports.ActivityTypes = new Types();
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/collection
      ****************************************/

      ims.set('./assignments/collection', {
        hash: 3539528715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Assignments extends _collection.Collection {
            #api;
            #parent;
            constructor({
              parent,
              ...args
            } = {
              parent: undefined
            }) {
              super({
                ...args,
                entity: 'Assignments',
                item: _item.Assignment
              });
              this.#parent = parent;
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            #classrooms = new Map();
            get classrooms() {
              return this.#classrooms;
            }
            //@ts-ignore
            set(data) {
              // console.log(3, items);
              if (Array.isArray(data)) data = {
                items: data
              };
              if (!Array.isArray(data.items)) {
                console.warn('se esta asignando assigments sin dato', data, this);
                return;
              }
              this.setItems(data.items);
              this.items.forEach(item => {
                this.#classrooms.set(item.classroom.id, item);
              });
            }
            setItems(items) {
              super.setItems(items);
              this.items.forEach(item => {
                this.#classrooms.set(item.classroom.id, item);
              });
            }
            async add(classroomId) {
              const specs = {
                moduleId: this.#parent.id,
                classroomId
              };
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/assignments', specs);
              if (!response.status) {
                throw new Error(response.error);
              }
              const assignment = new _item.Assignment({
                parent: this,
                ...response.data
              });
              this.#classrooms.set(classroomId, assignment);
              this.#parent.trigger('change');
              // console.log(this.#map);
              return assignment;
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 2225456919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _zod = require("zod");
          /**
           * TODO: Review if this object is really needed.
           */
          class Assignment extends _item.Item {
            get dashboard() {
              return `/dashboard/${this.id}`;
            }
            get link() {
              return `/assignments/${this.id}`;
            }
            schema = _zod.z.object({
              id: _zod.z.string(),
              name: _zod.z.string(),
              description: _zod.z.string().optional()
            });
            constructor(args = {}) {
              super({
                ...args,
                entity: 'Assignments',
                properties: ['classroom', 'id']
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /**************************
      INTERNAL MODULE: ./audience
      **************************/

      ims.set('./audience', {
        hash: 618611988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleAudience = void 0;
          var _model = require("@beyond-js/reactive/model");
          class LearningModuleAudience extends _model.ReactiveModel {
            constructor() {
              super({
                properties: ['category', 'level']
              });
            }
          }
          exports.LearningModuleAudience = LearningModuleAudience;
        }
      });

      /**********************
      INTERNAL MODULE: ./base
      **********************/

      ims.set('./base', {
        hash: 27328805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleBase = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class LearningModuleBase extends _item.Item {
            owner;
            language;
            title;
            description;
            objective;
            picture;
            audience;
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: ['id', 'creator', 'owner', 'language', 'title', 'description', 'objective', 'picture', 'type', 'audience', ...properties]
              });
            }
            async loadAudience(language) {
              const audience = await this.provider.getAudience(language);
              return audience;
            }
          }
          exports.LearningModuleBase = LearningModuleBase;
        }
      });

      /****************************
      INTERNAL MODULE: ./collection
      ****************************/

      ims.set('./collection', {
        hash: 2362661404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModules = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _learningModules = require("./providers/learning-modules");
          /*bundle*/ //your code here
          class LearningModules extends _collection.Collection {
            #audiences = new Map();
            get audiences() {
              return this.#audiences;
            }
            #archived;
            get archived() {
              return this.#archived;
            }
            #type = 'module';
            get type() {
              return this.#type;
            }
            constructor(args = {
              type: 'modules',
              archived: false
            }) {
              super({
                entity: 'LearningModule',
                provider: _learningModules.LearningModuleProvider,
                item: _item.LearningModule,
                ...args
              });
              this.#type = args.type;
              this.#archived = args.archived;
            }
            async load(specs) {
              const response = await super.load(specs);
              return response;
            }
            async loadAudience(language) {
              if (this.#audiences.has(language)) {
                return this.#audiences.get(language);
              }
              const audience = await this.provider.getAudience(language);
              this.#audiences.set(language, audience);
              return audience;
            }
          }
          exports.LearningModules = LearningModules;
        }
      });

      /***************************
      INTERNAL MODULE: ./community
      ***************************/

      ims.set('./community', {
        hash: 3104042166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityLearningModule = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _item = require("@beyond-js/reactive/entities/item");
          var _suggestions = require("./suggestions");
          var _collection = require("./activities/collection");
          var _api = require("@beyond-js/http-suite/api");
          var _credits = require("./credits");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class CommunityLearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
            #api;
            #assignments;
            #credits;
            get credits() {
              return {
                ...this.#credits.getProperties(),
                available: this.#credits.available
              };
            }
            set credits(data) {
              if (!data) return;
              this.#credits.set(data);
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            set activities(value) {
              this.#activities.clear();
              this.#activities.set(value);
              this.triggerEvent();
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                properties: ['id', 'title', 'description', 'status', 'userId', 'picture', 'duration', 'ia', 'audience', 'language', 'objective', 'audience', 'duration', 'audience', 'public', 'playground', 'totalActivities', 'target', 'duration', 'type', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'manual' // let the system know that the module was created manually]
                ]
              }); // super call ends.
              this.#credits = new _credits.Credits();
              this.#suggestions = new _suggestions.Suggestions();
              this.#activities = new _collection.Activities(this);
              this.#activities.on('change', this.triggerEvent);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.initialize({
                ...args
              });
            }
            set(data) {
              const response = super.set(data);
              if (data.assignments) {
                // todo: @jircdev
                this.#assignments.set(data.assignments);
              }
              // if (!this.owner) this.owner = this.creator;
              this.credits = data.credits;
              if (data.activities) {
                this.#activities.set(data.activities);
              }
              return response;
            }
            async saveDraft(specs = {}) {
              const data = {
                ...this.getProperties(),
                ...specs,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.#saved = true;
              const response = super.publish(data);
              CommunityLearningModule.instances.set(this.id, this);
              return response;
            }
            /**
             *
             * This method generates the suggestions for the module and saves the draft
             * @param values
             */
            async getModuleSuggestion(values) {
              try {
                this.fetchingDraft = true;
                this.set(values);
                const data = await this.#getSuggestions({
                  id: this.id,
                  objective: this.objective,
                  type: 'module',
                  observations: values.notes,
                  notes: values.notes
                  // test: true
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                await this.set({
                  ...data,
                  id: data.id,
                  state: 'mudule-generated'
                });
                await this.saveDraft({
                  state: 'confirmed'
                });
                this.fetchingDraft = false;
                this.triggerEvent('activities.generated');
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.#credits.set(data.credits);
              this.trigger('credits.change');
              return data;
            }
            async load() {
              const data = await this.provider.load();
              this.set(data);
              this.activities.setItems(data.activities);
              return data;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new CommunityLearningModule(specs);
              if (specs.id) {
                await module.load();
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
          }
          exports.CommunityLearningModule = CommunityLearningModule;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/index
      *******************************/

      ims.set('./credits/index', {
        hash: 4277097651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            get available() {
              return this.total - this.consumed || 0;
            }
            constructor(args = {}) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/types
      *******************************/

      ims.set('./credits/types', {
        hash: 2037358772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./draft
      ***********************/

      ims.set('./draft', {
        hash: 245711037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Draft = void 0;
          var _collection = require("./activities/collection");
          var _base = require("./base");
          var _credits = require("./credits");
          var _suggestions = require("./suggestions");
          /*bundle */ //your code here
          class Draft extends _base.LearningModuleBase {
            #suggestions;
            #saved;
            get completed() {
              return this.valid && this.activities.valid;
            }
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              type = 'draft',
              ...args
            } = {
              type: 'module'
            }) {
              super({
                id,
                type,
                properties: ['state', 'pictureSuggestions', {
                  name: 'credits',
                  value: _credits.Credits
                }, {
                  name: 'activities',
                  value: _collection.Activities
                }],
                ...args
              });
              this.type = type;
              this.#suggestions = new _suggestions.Suggestions();
              this.activities.setParent(this);
              this.defineReactiveProps(['fetchingDraft']); // TODO: validate it;
            }
            async saveDraft(specs = {
              owner: undefined
            }) {
              let {
                owner
              } = specs;
              const data = {
                ...this.getProperties(),
                ...specs,
                owner: owner ? owner?.isReactive ? owner.getProperties() : owner : this.owner,
                activities: this.activities.getItems(),
                type: 'draft'
              };
              this.set({
                ...data
              });
              // const response = this.getProperties();
              const response = await super.publish();
              this.#saved = true;
              return response;
            }
            /**
             *
             * This method generates the suggestions for the module and saves the draft
             * @param values
             */
            async getModuleSuggestion(values) {
              try {
                this.fetchingDraft = true;
                this.set(values);
                await this.saveDraft();
                const data = await this.#getSuggestions({
                  id: this.id,
                  objective: this.objective,
                  type: 'module',
                  observations: values.notes,
                  notes: values.notes,
                  totalActivities: values.totalActivities
                  // test: true
                });
                if (!data.title) {
                  console.warn('the activity was generated without title', data);
                }
                setTimeout(async () => {
                  await this.saveDraft({
                    ...data,
                    state: 'confirmed'
                  });
                  this.fetchingDraft = false;
                  this.triggerEvent('activities.generated');
                }, 10);
                return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetchingDraft = false;
              }
            }
            async #getSuggestions(specs) {
              const data = await this.#suggestions.generate(specs);
              await this.set(data);
              this.trigger('credits.change');
              return data;
            }
            async load() {
              const data = await this.provider.load();
              this.set(data);
              this.activities.setItems(data.activities);
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              if (!response.status) {
                return response;
              }
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            };
            /**
             * Returns a list of suggestions to be applied to the module
            
             */
            async getObjectiveImprovements({
              objective,
              totalActivities
            }) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'objective',
                  id: this.id,
                  objective
                });
                this.setCredits(data.credits);
                /**
                 * the IDraftImprovement interface is a new structure, so now we need to adapt the response to the new structure
                 */
                return data;
                // return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            setCredits(data) {
              this.credits.set(data);
              this.trigger('credits.change');
            }
            /**
             *
             * Generates a refined objective based on the improvements
             * @param objective The original objective
             * @param improvements The improvements to be applied (array of strings)
             * @returns
             */
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.fetching = true;
                const data = await this.#getSuggestions({
                  type: 'objective-refinements',
                  improvements,
                  id: this.id,
                  objective
                });
                return data;
              } catch (e) {
                throw new Error('ERR_GENERATING_ACTIVITIES');
              } finally {
                this.fetching = false;
              }
            }
            async generatePicture(prompt = '') {
              try {
                if (!prompt) {
                  throw new Error('Prompt is required');
                }
                const stringFormat = {
                  es: {
                    prefix: 'Ilustación:',
                    sufix: 'genera la imagen en formato 16:9.'
                  },
                  en: {
                    prefix: 'Illustration:',
                    sufix: 'generate the image in 16:9 format.'
                  },
                  de: {
                    prefix: 'Illustration:',
                    sufix: 'generieren Sie das Bild im 16:9-Format.'
                  }
                };
                const format = stringFormat[this.language] ?? stringFormat.en;
                prompt = `${format.prefix} ${prompt} ${format.sufix}`;
                const response = await this.#suggestions.image({
                  prompt,
                  size: '1792x1024',
                  format: 'url'
                });
                const saveResponse = await this.provider.savePicture(response.url);
                this.set(saveResponse.data);
                // await this.#credits.set(saveResponse.data.credits);
                this.trigger('credits.change');
                this.picture = `${saveResponse.data.picture}?${performance.now()}`;
                this.triggerEvent('image.generated');
                if (!saveResponse.status) throw new Error('error saving image');
                return this.picture;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Draft = Draft;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 2905388780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor(message, code) {
              super(message); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2999511597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModule = void 0;
          var _error = require("./error");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./assignments/collection");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class LearningModule extends _item.Item {
            #suggestions;
            #saved;
            static instances = new Map();
            get valid() {
              return !!this.id && !!this.title && !!this.description && !!this.objective;
            }
            /**
             *
             * @param id
             * @param type  Let define the type of draft, it can be module or draft. It was used in the "module object", here we use the same
             * for ensuring consistency but in the future it could be removed (pending to check with the product team)
             */
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            }) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: [...properties, 'id', 'title', 'description', 'status', 'userId', 'picture', 'ia', 'language', 'objective', 'public', 'playground', 'target', 'duration', 'type', 'types', 'owner', 'creator', 'timeCreated', 'timeUpdated', 'pictureSuggestions', 'state', 'activities', {
                  name: 'assignments',
                  value: _collection.Assignments
                }, 'manual',
                // {
                // 	name: 'audience',
                // 	value: LearningModuleAudience
                // },
                'audience']
              }); // super call ends.
              this.type = type;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const module = new LearningModule(specs);
              if (specs.id) {
                await module.load();
              }
              if (specs.id) this.instances.set(specs.id, module);
              return module;
            }
            clone(args) {
              return this.provider.clone(args);
            }
            async deleteItem() {
              const response = await this.provider.deleteItem();
              if (!response.status) throw new _error.CustomError(response.error.text, response.error.code);
              return response;
            }
            restore() {
              return this.provider.restore();
            }
            archive() {
              return this.provider.archive();
            }
          }
          exports.LearningModule = LearningModule;
        }
      });

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 572354641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleListItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _providers = require("./providers");
          /*bundle */ //your code here
          class ModuleListItem extends _item.Item {
            owner;
            language;
            title;
            description;
            objective;
            picture;
            audience;
            activities;
            constructor({
              id = undefined,
              properties = [],
              type = 'module',
              ...args
            } = {}) {
              super({
                id,
                entity: 'LearningModule',
                provider: _providers.ModuleProvider,
                ...args,
                properties: ['id', 'creator', 'owner', 'language', 'title', 'description', 'objective', 'picture', 'audience', 'activities']
              });
            }
          }
          exports.ModuleListItem = ModuleListItem;
        }
      });

      /*********************************
      INTERNAL MODULE: ./providers/index
      *********************************/

      ims.set('./providers/index', {
        hash: 344605723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class ModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            } //
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoints = {
                community: `/community/modules/${this.#parent.id}`,
                module: `/modules/${this.#parent.id}`,
                draft: `/modules/drafts/${this.#parent.id}`
              };
              const type = this.#parent.type ?? 'module';
              const {
                status,
                data
              } = await this.#api.get(endpoints[type]);
              if (!status) {
                throw new Error('error loading module');
              }
              return data;
            };
            list = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading module');
              }
              return data;
            };
            async getDraft(id) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${id}`);
              if (!status) {
                throw new Error('error getting module draft');
              }
              return data;
            }
            async delete() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const data = await this.#api.delete(`/modules/drafts/${this.#parent.id}`);
              return data;
            }
            async deleteItem() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const data = await this.#api.delete(`/modules/${this.#parent.id}`);
              return data;
            }
            async publish(specs = {}) {
              if (this.#parent.type === 'draft') return this.saveDraft(specs);
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/modules/drafts/${this.#parent.id}/publish`, specs);
            }
            async saveDraft(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/modules/drafts`, specs);
              if (!response.status) {
                //throw new Error('error saving module draft');
              }
              return response;
            }
            async consumeCoins() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              // return this.#api.post(`/assignments/${this.#parent.id}/coins/consume`, {});
              return this.#api.post(`/modules/drafts/${this.#parent.id}/coins/consume`, {});
            }
            async clone({
              moduleId,
              ownerId,
              entity,
              type
            }) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoints = {
                community: `/community/modules/${moduleId}/clone`,
                module: `/modules/${moduleId}/clone`
              };
              const endpoint = endpoints[type] ?? endpoints.module;
              if (_session.sessionWrapper.user.id === ownerId || entity === 'user') {
                return this.#api.post(endpoint, {});
              }
              return this.#api.post(endpoint, {
                organizationId: ownerId,
                entity
              });
            }
            async savePicture(url) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/modules/drafts/${this.#parent.id}/image`, {
                url
              });
              return response;
            }
            getAudience = async language => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/application/metadata/audience`, {
                language
              });
              if (!status) {
                throw new Error('error getting audience');
              }
              return data;
            };
            testActivity = async (draftId, activityId) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.post(`/modules/drafts/${draftId}/activities/${activityId}/testing`, {});
              return data;
            };
            getActivityTesting = async (draftId, activityId) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
            async archive() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/modules/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/modules/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response;
            }
          }
          exports.ModuleProvider = ModuleProvider;
        }
      });

      /********************************************
      INTERNAL MODULE: ./providers/learning-modules
      ********************************************/

      ims.set('./providers/learning-modules', {
        hash: 198787979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class LearningModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const endpoints = {
                archived: '/modules/archived',
                module: '/modules',
                draft: '/modules/drafts'
              };
              if (this.#parent.archived) {
                const {
                  data
                } = await this.#api.get(`/modules/archived`, specs);
                return data?.items ?? [];
              }
              if (specs?.route === 'community') {
                delete specs.route;
                const {
                  data
                } = await this.#api.get(`/community/modules`, specs);
                return data?.items ?? [];
              }
              const {
                status,
                data
              } = await this.#api.get(`/modules${specs.route}`);
              return data?.items ?? [];
            };
            async deleteItems(id) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const {
                  status,
                  data
                } = await this.#api.delete(`/modules/drafts/${id}`);
                if (!status) {
                  throw new Error('error deleting module');
                }
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            getAudience = async language => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/application/metadata/audience`, {
                language
              });
              if (!status) {
                throw new Error('error getting audience');
              }
              return data;
            };
          }
          exports.LearningModuleProvider = LearningModuleProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./suggestions/index
      ***********************************/

      ims.set('./suggestions/index', {
        hash: 1143965472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Suggestions extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.reactiveProps(['type', 'content']);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async generate(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.post('/suggestions', {
                  ...specs
                });
                if (!response.status) {
                  let {
                    error: {
                      text: errorText
                    },
                    error
                  } = response;
                  if (errorText.includes('The related activity')) {
                    return {
                      error: 'NO_RELATED_ACTIVITY'
                    };
                  }
                  if (errorText.includes('The draft does not have the following parameters to process the suggestion:')) {
                    return {
                      error: 'INCOMPLETE_MODULE',
                      fields: error.split(':')[1]
                    };
                  }
                  return {
                    error
                  };
                }
                return response.data;
              } catch (e) {
                throw new Error(e.message);
              }
            }
            async image(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post('/images/generate', {
                language: 'es',
                ...specs
              });
              if (!response.status) throw new Error(response.error.code);
              /**
               * openai response return an array, the current model (dalle-3) generates always a unique
               * image, so we return always the first element of the array
               */
              return response.data[0];
            }
          }
          exports.Suggestions = Suggestions;
        }
      });

      /**********************************
      INTERNAL MODULE: ./types/activities
      **********************************/

      ims.set('./types/activities', {
        hash: 455536856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityType = void 0;
          /*bundle*/
          var ActivityType;
          (function (ActivityType) {
            ActivityType["Spoken"] = "spoken";
            ActivityType["MultipleChoice"] = "multiple-choice";
            ActivityType["CharacterTalk"] = "character-talk";
            ActivityType["ContentTheory"] = "content-theory";
            ActivityType["Debate"] = "debate";
            ActivityType["Written"] = "written";
          })(ActivityType || (exports.ActivityType = ActivityType = {}));
        }
      });

      /************************************
      INTERNAL MODULE: ./types/common/owner
      ************************************/

      ims.set('./types/common/owner', {
        hash: 3016744349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./types/draft-improvements
      ******************************************/

      ims.set('./types/draft-improvements', {
        hash: 402250074,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./types/drafts
      ******************************/

      ims.set('./types/drafts', {
        hash: 3255660472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 1067830134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./types/interfaces
      **********************************/

      ims.set('./types/interfaces', {
        hash: 3371199714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./types/learning-module-base
      ********************************************/

      ims.set('./types/learning-module-base', {
        hash: 2023505170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./types/learning-module
      ***************************************/

      ims.set('./types/learning-module', {
        hash: 3556353232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./types/module-activities
      *****************************************/

      ims.set('./types/module-activities', {
        hash: 70447942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityType = void 0;
          /*bundle*/
          var ActivityType;
          (function (ActivityType) {
            ActivityType["Spoken"] = "spoken";
            ActivityType["MultipleChoice"] = "multiple-choice";
            ActivityType["CharacterTalk"] = "character-talk";
            ActivityType["ContentTheory"] = "content-theory";
            ActivityType["Debate"] = "debate";
            ActivityType["Written"] = "written";
          })(ActivityType || (exports.ActivityType = ActivityType = {}));
        }
      });

      /*********************************
      INTERNAL MODULE: ./types/timeStamp
      *********************************/

      ims.set('./types/timeStamp', {
        hash: 1228819976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/item",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./activity-types",
        "from": "ActivityTypes",
        "name": "ActivityTypes"
      }, {
        "im": "./base",
        "from": "LearningModuleBase",
        "name": "LearningModuleBase"
      }, {
        "im": "./collection",
        "from": "LearningModules",
        "name": "LearningModules"
      }, {
        "im": "./community",
        "from": "CommunityLearningModule",
        "name": "CommunityLearningModule"
      }, {
        "im": "./credits/index",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./draft",
        "from": "Draft",
        "name": "Draft"
      }, {
        "im": "./item",
        "from": "LearningModule",
        "name": "LearningModule"
      }, {
        "im": "./list",
        "from": "ModuleListItem",
        "name": "ModuleListItem"
      }, {
        "im": "./types/activities",
        "from": "ActivityType",
        "name": "ActivityType"
      }, {
        "im": "./types/activities",
        "from": "IActivityListItem",
        "name": "IActivityListItem"
      }, {
        "im": "./types/common/owner",
        "from": "IOwnerData",
        "name": "IOwnerData"
      }, {
        "im": "./types/drafts",
        "from": "IActivityDraftData",
        "name": "IActivityDraftData"
      }, {
        "im": "./types/index",
        "from": "ISuggestionResponse",
        "name": "ISuggestionResponse"
      }, {
        "im": "./types/learning-module-base",
        "from": "IModuleListItem",
        "name": "IModuleListItem"
      }, {
        "im": "./types/learning-module",
        "from": "ILearningModuleDraft",
        "name": "ILearningModuleDraft"
      }, {
        "im": "./types/learning-module",
        "from": "IOwnerData",
        "name": "IOwnerData"
      }, {
        "im": "./types/learning-module",
        "from": "ICreditsConsumptionsData",
        "name": "ICreditsConsumptionsData"
      }, {
        "im": "./types/module-activities",
        "from": "ActivityType",
        "name": "ActivityType"
      }, {
        "im": "./types/module-activities",
        "from": "IActivityObjective",
        "name": "IActivityObjective"
      }, {
        "im": "./types/module-activities",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types/module-activities",
        "from": "IContentTheoryActivity",
        "name": "IContentTheoryActivity"
      }, {
        "im": "./types/module-activities",
        "from": "ICharacterTalkActivity",
        "name": "ICharacterTalkActivity"
      }, {
        "im": "./types/module-activities",
        "from": "IDebateActivity",
        "name": "IDebateActivity"
      }, {
        "im": "./types/module-activities",
        "from": "IMultipleChoiceActivity",
        "name": "IMultipleChoiceActivity"
      }, {
        "im": "./types/module-activities",
        "from": "ISpokenActivity",
        "name": "ISpokenActivity"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activities/item').Activity : value);
        (require || prop === 'ActivityTypes') && _export("ActivityTypes", ActivityTypes = require ? require('./activity-types').ActivityTypes : value);
        (require || prop === 'LearningModuleBase') && _export("LearningModuleBase", LearningModuleBase = require ? require('./base').LearningModuleBase : value);
        (require || prop === 'LearningModules') && _export("LearningModules", LearningModules = require ? require('./collection').LearningModules : value);
        (require || prop === 'CommunityLearningModule') && _export("CommunityLearningModule", CommunityLearningModule = require ? require('./community').CommunityLearningModule : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./credits/index').Credits : value);
        (require || prop === 'Draft') && _export("Draft", Draft = require ? require('./draft').Draft : value);
        (require || prop === 'LearningModule') && _export("LearningModule", LearningModule = require ? require('./item').LearningModule : value);
        (require || prop === 'ModuleListItem') && _export("ModuleListItem", ModuleListItem = require ? require('./list').ModuleListItem : value);
        (require || prop === 'ActivityType') && _export("ActivityType", ActivityType = require ? require('./types/activities').ActivityType : value);
        (require || prop === 'IActivityListItem') && _export("IActivityListItem", IActivityListItem = require ? require('./types/activities').IActivityListItem : value);
        (require || prop === 'IOwnerData') && _export("IOwnerData", IOwnerData = require ? require('./types/common/owner').IOwnerData : value);
        (require || prop === 'IActivityDraftData') && _export("IActivityDraftData", IActivityDraftData = require ? require('./types/drafts').IActivityDraftData : value);
        (require || prop === 'ISuggestionResponse') && _export("ISuggestionResponse", ISuggestionResponse = require ? require('./types/index').ISuggestionResponse : value);
        (require || prop === 'IModuleListItem') && _export("IModuleListItem", IModuleListItem = require ? require('./types/learning-module-base').IModuleListItem : value);
        (require || prop === 'ILearningModuleDraft') && _export("ILearningModuleDraft", ILearningModuleDraft = require ? require('./types/learning-module').ILearningModuleDraft : value);
        (require || prop === 'IOwnerData') && _export("IOwnerData", IOwnerData = require ? require('./types/learning-module').IOwnerData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./types/learning-module').ICreditsConsumptionsData : value);
        (require || prop === 'ActivityType') && _export("ActivityType", ActivityType = require ? require('./types/module-activities').ActivityType : value);
        (require || prop === 'IActivityObjective') && _export("IActivityObjective", IActivityObjective = require ? require('./types/module-activities').IActivityObjective : value);
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types/module-activities').IActivityBase : value);
        (require || prop === 'IContentTheoryActivity') && _export("IContentTheoryActivity", IContentTheoryActivity = require ? require('./types/module-activities').IContentTheoryActivity : value);
        (require || prop === 'ICharacterTalkActivity') && _export("ICharacterTalkActivity", ICharacterTalkActivity = require ? require('./types/module-activities').ICharacterTalkActivity : value);
        (require || prop === 'IDebateActivity') && _export("IDebateActivity", IDebateActivity = require ? require('./types/module-activities').IDebateActivity : value);
        (require || prop === 'IMultipleChoiceActivity') && _export("IMultipleChoiceActivity", IMultipleChoiceActivity = require ? require('./types/module-activities').IMultipleChoiceActivity : value);
        (require || prop === 'ISpokenActivity') && _export("ISpokenActivity", ISpokenActivity = require ? require('./types/module-activities').ISpokenActivity : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3N1Z2dlc3Rpb25zIiwiX21hdGVyaWFscyIsIl9mYWN0b3J5IiwiSXRlbSIsImFwaSIsInN1Z2dlc3Rpb25zIiwic3BlY3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlcGFyZWQiLCJvYmplY3RpdmUiLCJfX2luc3RhbmNlSWQiLCJzdHJ1Y3R1cmUiLCJ1bnB1Ymxpc2hlZCIsInJlYWR5VG9UZXN0IiwicHJvZ3Jlc3NEYXRhIiwiZmlsdGVyIiwib3V0cHV0IiwiZ2VuZXJhbCIsInZhbGlkYXRlRGF0YSIsImFnZW50IiwicHJvZ3Jlc3NGaWVsZHMiLCJuYW1lIiwiZW50aXR5Iiwic2V0dGluZ3MiLCJsYXlvdXQiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJBY3Rpdml0eU1hdGVyaWFscyIsIkFjdGl2aXR5U3BlY3NGYWN0b3J5IiwiU3VnZ2VzdGlvbnMiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsIm1hdGVyaWFscyIsInNldFBhcmVudHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImdlbmVyYXRlIiwibm90ZXMiLCJyZWxhdGVkIiwiZmV0Y2hpbmciLCJnZXRTdWdnZXN0aW9ucyIsImFjdGl2aXR5SWQiLCJzYXZlQ2hhbmdlcyIsInNldENyZWRpdHMiLCJjcmVkaXRzIiwiZSIsImxvZyIsIiNnZXRTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsInByb21wdCIsIkVycm9yIiwic3RyaW5nRm9ybWF0IiwiZXMiLCJwcmVmaXgiLCJzdWZpeCIsImVuIiwiZGUiLCJmb3JtYXQiLCJ1cmwiLCJpbWFnZSIsInNpemUiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsImVuZHBvaW50Iiwic2F2ZVJlc3BvbnNlIiwicG9zdCIsInBpY3R1cmUiLCJzdGF0dXMiLCJlcnJvciIsImNsZWFyQ29udGVudCIsInNhdmUiLCJzZXRMYXlvdXQiLCJwcm9wZXJ0eSIsImV4cG9ydHMiLCJkcmFmdCIsImVtcHR5RGF0YSIsImFydGljbGUiLCJzeW50aGVzaXMiLCJpbnRyb2R1Y3Rpb24iLCJkeXNsZXhpYSIsImZsYXNoY2FyZCIsInByb3BzIiwiZ2V0RGF0YSIsImF1ZGlvc01hcCIsImdlbmVyYXRlQ29udGVudCIsImdlbmVyYXRlQXVkaW8iLCJQcm9taXNlIiwiYWxsIiwiYXVkaW9zIiwiZGVsZXRlQXVkaW8iLCJkZWxldGVBdWRpb3MiLCJ1bmRlZmluZWQiLCJBY3Rpdml0eVNwZWNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZmllbGRzIiwia2V5Iiwib3B0aW9uYWwiLCJpc0FycmF5VmFsaWQiLCJhcnJheSIsImtleXMiLCJmaWVsZCIsInZhbGlkYXRlU3RydWN0dXJlIiwiY29uZmlnIiwiYWdlbnREYXRhIiwiZ2VuZXJhbERhdGEiLCJhZHZhbmNlZERhdGEiLCJlbXB0eSIsImlzRW1wdHkiLCJiYW5kIiwiZ2V0TGVhcm5pbmdNb2R1bGUiLCJnZXRQYXJlbnQiLCJfdmFsaWRhdGVEYXRhIiwic3RydWN0dXJlTmFtZSIsImVsZW1lbnQiLCJncm91cGVkIiwiZmllbGRTdHJ1Y3R1cmUiLCJzY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiX2Jhc2UiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHlTcGVjcyIsInRhc2siLCJyZXF1aXJlZCIsInJvbGUiLCJsYWJlbCIsInBvc2l0aW9uIiwib2JqZWN0aXZlcyIsImFkdmFuY2VkIiwiaW5zdHJ1Y3Rpb25zIiwiQ2hhdEFjdGl2aXR5U3BlY3MiLCJDb250ZW50VGhlb3J5QWN0aXZpdHlTcGVjcyIsInRvcGljIiwiYXR0YWNobWVudHMiLCJtdWx0aXBsZSIsIkRlYmF0ZUFjdGl2aXR5U3BlY3MiLCJzdWJqZWN0IiwiX2NoYXJhY3RlclRhbGsiLCJfY2hhdCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJyZWdpc3RyeSIsInJlZ2lzdGVyIiwiY3RvciIsImNyZWF0ZSIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlTcGVjcyIsIlNwb2tlbkFjdGl2aXR5U3BlY3MiLCJfem9kIiwicXVlc3Rpb25zIiwicHJvZ3Jlc3MiLCJ6Iiwib2JqZWN0IiwicXVlc3Rpb24iLCJzdHJpbmciLCJtaW4iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIm51bWJlciIsImludCIsIm5vbm5lZ2F0aXZlIiwicmVmaW5lIiwiYW5zd2VycyIsImFuc3dlciIsImNvcnJlY3QiLCJzdHIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJhc3Nlc3NtZW50IiwiY3JpdGVyaWEiLCJfbW9kdWxlQWN0aXZpdGllcyIsIlR5cGVzIiwidHlwZXMiLCJBY3Rpdml0eVR5cGUiLCJDb250ZW50VGhlb3J5IiwiYWlDb250ZW50IiwiZGVwZW5kZW5jaWVzIiwiRGViYXRlIiwiQ2hhcmFjdGVyVGFsayIsIk11bHRpcGxlQ2hvaWNlIiwiU3Bva2VuIiwiQWN0aXZpdHlUeXBlcyIsIl9jb2xsZWN0aW9uIiwiQXNzaWdubWVudHMiLCJDb2xsZWN0aW9uIiwiQXNzaWdubWVudCIsImNsYXNzcm9vbXMiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21JZCIsIm1vZHVsZUlkIiwiYXNzaWdubWVudCIsImRhc2hib2FyZCIsImxpbmsiLCJMZWFybmluZ01vZHVsZUF1ZGllbmNlIiwiX3Byb3ZpZGVycyIsIkxlYXJuaW5nTW9kdWxlQmFzZSIsIm93bmVyIiwiYXVkaWVuY2UiLCJwcm92aWRlciIsIk1vZHVsZVByb3ZpZGVyIiwibG9hZEF1ZGllbmNlIiwiZ2V0QXVkaWVuY2UiLCJfbGVhcm5pbmdNb2R1bGVzIiwiTGVhcm5pbmdNb2R1bGVzIiwiYXVkaWVuY2VzIiwiYXJjaGl2ZWQiLCJMZWFybmluZ01vZHVsZVByb3ZpZGVyIiwiTGVhcm5pbmdNb2R1bGUiLCJsb2FkIiwiX2NyZWRpdHMiLCJDb21tdW5pdHlMZWFybmluZ01vZHVsZSIsInNhdmVkIiwiaW5zdGFuY2VzIiwiYXNzaWdubWVudHMiLCJhdmFpbGFibGUiLCJhY3Rpdml0aWVzIiwiQ3JlZGl0cyIsImluaXRpYWxpemUiLCJwdWJsaXNoIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJvYnNlcnZhdGlvbnMiLCJtb2R1bGUiLCJ0b3RhbCIsImNvbnN1bWVkIiwiZGVmaW5lUHJvcGVydHkiLCJEcmFmdCIsImNvbXBsZXRlZCIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VGltZW91dCIsImNvbnN1bWVDb2lucyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaW1wcm92ZW1lbnRzIiwic2F2ZVBpY3R1cmUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJfZXJyb3IiLCJjbG9uZSIsImRlbGV0ZUl0ZW0iLCJ0ZXh0IiwicmVzdG9yZSIsImFyY2hpdmUiLCJNb2R1bGVMaXN0SXRlbSIsImVuZHBvaW50cyIsImNvbW11bml0eSIsImxpc3QiLCJnZXREcmFmdCIsIm93bmVySWQiLCJvcmdhbml6YXRpb25JZCIsInRlc3RBY3Rpdml0eSIsImRyYWZ0SWQiLCJnZXRBY3Rpdml0eVRlc3RpbmciLCJyb3V0ZSIsImRlbGV0ZUl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsImVycm9yVGV4dCIsInNwbGl0Il0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYWN0aXZpdGllcy9tYXRlcmlhbHMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9iYXNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhcmFjdGVyLXRhbGsudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9jaGF0LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY29udGVudC10aGVvcnkudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9kZWJhdGUudHMiLCIvYWN0aXZpdGllcy9zcGVjcy9mYWN0b3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvbXVsdGlwbGUtY2hvaWNlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3Mvc3Bva2VuLnRzIiwiL2FjdGl2aXR5LXR5cGVzLnRzIiwiL2Fzc2lnbm1lbnRzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hdWRpZW5jZS50cyIsIi9iYXNlLnRzIiwiL2NvbGxlY3Rpb24udHMiLCIvY29tbXVuaXR5LnRzIiwiL2NyZWRpdHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvZHJhZnQudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyIsIi9saXN0LnRzIiwiL3Byb3ZpZGVycy9pbmRleC50cyIsIi9wcm92aWRlcnMvbGVhcm5pbmctbW9kdWxlcy50cyIsIi9zdWdnZXN0aW9ucy9pbmRleC50cyIsIi90eXBlcy9hY3Rpdml0aWVzLnRzIiwiL293bmVyLnRzIiwiL2RyYWZ0LWltcHJvdmVtZW50cy50cyIsIi9kcmFmdHMudHMiLCIvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9sZWFybmluZy1tb2R1bGUtYmFzZS50cyIsIi9sZWFybmluZy1tb2R1bGUudHMiLCIvdHlwZXMvbW9kdWxlLWFjdGl2aXRpZXMudHMiLCIvdGltZVN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUE7Ozs7Ozs7OztVQVNNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxjQUFlO1lBRWYsQ0FBQUMsR0FBSSxHQUFtQyxJQUFJQyxHQUFHLEVBQUU7WUFDaEQsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxDQUFDRSxLQUFLLEdBQUdELENBQUMsQ0FBQ0MsS0FBSyxDQUFDO1lBQ2pFO1lBRUEsT0FBT0MsWUFBWSxH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