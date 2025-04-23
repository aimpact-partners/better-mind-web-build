System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/http-suite@0.1.0/api", "zod@3.24.2", "@beyond-js/reactive@2.0.4/entities/collection"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Activity, ActivityTypes, LearningModuleBase, LearningModules, CommunityLearningModule, Credits, Draft, LearningModule, ModuleListItem, ActivityType, IActivityListItem, IOwnerData, IActivityDraftData, ISuggestionResponse, IModuleListItem, ILearningModuleDraft, ICreditsConsumptionsData, IActivityObjective, IActivityBase, IContentTheoryActivity, ICharacterTalkActivity, IDebateActivity, IMultipleChoiceActivity, ISpokenActivity, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk110Config) {
      dependency_3 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk144Session) {
      dependency_4 = _aimpactChatSdk144Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_5 = _beyondJsHttpSuite010Api;
    }, function (_zod2) {
      dependency_6 = _zod2;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_7 = _beyondJsReactive204EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['zod', dependency_6], ['@beyond-js/reactive/entities/collection', dependency_7]]);
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
        hash: 2012764110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 3025287766,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterials = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 2309589962,
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
          var _config = require("@aimpact/ailearn-sdk/config");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 2963111302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityLearningModule = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _suggestions = require("./suggestions");
          var _collection = require("./activities/collection");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 386554553,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class ModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 2950786118,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LearningModuleProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class LearningModuleProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 3179374683,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Suggestions = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class Suggestions extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.reactiveProps(['type', 'content']);
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImxlYXJuaW5nTW9kdWxlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImlzQ29sbGVjdGlvbiIsInNhdmVUaW1lb3V0IiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJhcmdzIiwic2V0UGFyZW50IiwiZ2V0SXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiZ2V0UHJvcGVydGllcyIsInZhbGlkIiwiZXZlcnkiLCJzdGF0ZSIsImNsZWFyIiwidHJpZ2dlciIsImF2YWlsYWJsZVR5cGVzIiwic2V0SXRlbXMiLCJhY3Rpdml0eSIsImluZGV4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwiQWN0aXZpdHkiLCJ1cGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2UiLCJhZGQiLCJtYW51YWwiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImluc3RhbmNlSWQiLCJzYXZlRHJhZnQiLCJyZW9yZGVyIiwicmVtb3ZlIiwiZGVsZXRlIiwiY2xlYW4iLCJnZXRJdGVtUHJvcGVydGllcyIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9hcGkiLCJfc3VnZ2VzdGlvbnMiLCJfbWF0ZXJpYWxzIiwiX2ZhY3RvcnkiLCJJdGVtIiwiYXBpIiwic3VnZ2VzdGlvbnMiLCJzcGVjcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmVwYXJlZCIsIm9iamVjdGl2ZSIsIl9faW5zdGFuY2VJZCIsInN0cnVjdHVyZSIsInVucHVibGlzaGVkIiwicmVhZHlUb1Rlc3QiLCJwcm9ncmVzc0RhdGEiLCJmaWx0ZXIiLCJvdXRwdXQiLCJnZW5lcmFsIiwidmFsaWRhdGVEYXRhIiwiYWdlbnQiLCJwcm9ncmVzc0ZpZWxkcyIsIm5hbWUiLCJlbnRpdHkiLCJzZXR0aW5ncyIsImxheW91dCIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsIkFjdGl2aXR5TWF0ZXJpYWxzIiwiQWN0aXZpdHlTcGVjc0ZhY3RvcnkiLCJTdWdnZXN0aW9ucyIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwicHJvamVjdCIsImFpbGVhcm4iLCJtYXRlcmlhbHMiLCJzZXRQYXJlbnRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZSIsIm5vdGVzIiwicmVsYXRlZCIsImZldGNoaW5nIiwiZ2V0U3VnZ2VzdGlvbnMiLCJhY3Rpdml0eUlkIiwic2F2ZUNoYW5nZXMiLCJzZXRDcmVkaXRzIiwiY3JlZGl0cyIsImUiLCJsb2ciLCIjZ2V0U3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwcm9tcHQiLCJFcnJvciIsInN0cmluZ0Zvcm1hdCIsImVzIiwicHJlZml4Iiwic3VmaXgiLCJlbiIsImRlIiwiZm9ybWF0IiwidXJsIiwiaW1hZ2UiLCJzaXplIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJlbmRwb2ludCIsInNhdmVSZXNwb25zZSIsInBvc3QiLCJwaWN0dXJlIiwic3RhdHVzIiwiZXJyb3IiLCJjbGVhckNvbnRlbnQiLCJzYXZlIiwic2V0TGF5b3V0IiwicHJvcGVydHkiLCJleHBvcnRzIiwiZHJhZnQiLCJlbXB0eURhdGEiLCJhcnRpY2xlIiwic3ludGhlc2lzIiwiaW50cm9kdWN0aW9uIiwiZHlzbGV4aWEiLCJmbGFzaGNhcmQiLCJwcm9wcyIsImdldERhdGEiLCJhdWRpb3NNYXAiLCJnZW5lcmF0ZUNvbnRlbnQiLCJnZW5lcmF0ZUF1ZGlvIiwiUHJvbWlzZSIsImFsbCIsImF1ZGlvcyIsImRlbGV0ZUF1ZGlvIiwiZGVsZXRlQXVkaW9zIiwidW5kZWZpbmVkIiwiQWN0aXZpdHlTcGVjcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZW50cmllcyIsIk9iamVjdCIsImZpZWxkcyIsImtleSIsIm9wdGlvbmFsIiwiaXNBcnJheVZhbGlkIiwiYXJyYXkiLCJrZXlzIiwiZmllbGQiLCJ2YWxpZGF0ZVN0cnVjdHVyZSIsImNvbmZpZyIsImFnZW50RGF0YSIsImdlbmVyYWxEYXRhIiwiYWR2YW5jZWREYXRhIiwiZW1wdHkiLCJpc0VtcHR5IiwiYmFuZCIsImdldExlYXJuaW5nTW9kdWxlIiwiZ2V0UGFyZW50IiwiX3ZhbGlkYXRlRGF0YSIsInN0cnVjdHVyZU5hbWUiLCJlbGVtZW50IiwiZ3JvdXBlZCIsImZpZWxkU3RydWN0dXJlIiwic2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsIl9iYXNlIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5U3BlY3MiLCJ0YXNrIiwicmVxdWlyZWQiLCJyb2xlIiwibGFiZWwiLCJwb3NpdGlvbiIsIm9iamVjdGl2ZXMiLCJhZHZhbmNlZCIsImluc3RydWN0aW9ucyIsIkNoYXRBY3Rpdml0eVNwZWNzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5U3BlY3MiLCJ0b3BpYyIsImF0dGFjaG1lbnRzIiwibXVsdGlwbGUiLCJEZWJhdGVBY3Rpdml0eVNwZWNzIiwic3ViamVjdCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NoYXQiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwicmVnaXN0cnkiLCJyZWdpc3RlciIsImN0b3IiLCJjcmVhdGUiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5U3BlY3MiLCJTcG9rZW5BY3Rpdml0eVNwZWNzIiwiX3pvZCIsInF1ZXN0aW9ucyIsInByb2dyZXNzIiwieiIsIm9iamVjdCIsInF1ZXN0aW9uIiwic3RyaW5nIiwibWluIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJudW1iZXIiLCJpbnQiLCJub25uZWdhdGl2ZSIsInJlZmluZSIsImFuc3dlcnMiLCJhbnN3ZXIiLCJjb3JyZWN0Iiwic3RyIiwiZ2VuZXJhdGVBbnN3ZXJzIiwiYXNzZXNzbWVudCIsImNyaXRlcmlhIiwiX21vZHVsZUFjdGl2aXRpZXMiLCJUeXBlcyIsInR5cGVzIiwiQWN0aXZpdHlUeXBlIiwiQ29udGVudFRoZW9yeSIsImFpQ29udGVudCIsImRlcGVuZGVuY2llcyIsIkRlYmF0ZSIsIkNoYXJhY3RlclRhbGsiLCJNdWx0aXBsZUNob2ljZSIsIlNwb2tlbiIsIkFjdGl2aXR5VHlwZXMiLCJfY29sbGVjdGlvbiIsIkFzc2lnbm1lbnRzIiwiQ29sbGVjdGlvbiIsIkFzc2lnbm1lbnQiLCJjbGFzc3Jvb21zIiwiY2xhc3Nyb29tIiwiY2xhc3Nyb29tSWQiLCJtb2R1bGVJZCIsImFzc2lnbm1lbnQiLCJkYXNoYm9hcmQiLCJsaW5rIiwiTGVhcm5pbmdNb2R1bGVBdWRpZW5jZSIsIl9wcm92aWRlcnMiLCJMZWFybmluZ01vZHVsZUJhc2UiLCJvd25lciIsImF1ZGllbmNlIiwicHJvdmlkZXIiLCJNb2R1bGVQcm92aWRlciIsImxvYWRBdWRpZW5jZSIsImdldEF1ZGllbmNlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIkxlYXJuaW5nTW9kdWxlcyIsImF1ZGllbmNlcyIsImFyY2hpdmVkIiwiTGVhcm5pbmdNb2R1bGVQcm92aWRlciIsIkxlYXJuaW5nTW9kdWxlIiwibG9hZCIsIl9jcmVkaXRzIiwiQ29tbXVuaXR5TGVhcm5pbmdNb2R1bGUiLCJzYXZlZCIsImluc3RhbmNlcyIsImFzc2lnbm1lbnRzIiwiYXZhaWxhYmxlIiwiYWN0aXZpdGllcyIsIkNyZWRpdHMiLCJpbml0aWFsaXplIiwicHVibGlzaCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0Iiwib2JzZXJ2YXRpb25zIiwibW9kdWxlIiwidG90YWwiLCJjb25zdW1lZCIsImRlZmluZVByb3BlcnR5IiwiRHJhZnQiLCJjb21wbGV0ZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwiaXNSZWFjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsInNldFRpbWVvdXQiLCJjb25zdW1lQ29pbnMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImltcHJvdmVtZW50cyIsInNhdmVQaWN0dXJlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiX2Vycm9yIiwiY2xvbmUiLCJkZWxldGVJdGVtIiwidGV4dCIsInJlc3RvcmUiLCJhcmNoaXZlIiwiTW9kdWxlTGlzdEl0ZW0iLCJlbmRwb2ludHMiLCJjb21tdW5pdHkiLCJsaXN0IiwiZ2V0RHJhZnQiLCJvd25lcklkIiwib3JnYW5pemF0aW9uSWQiLCJ0ZXN0QWN0aXZpdHkiLCJkcmFmdElkIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwicm91dGUiLCJkZWxldGVJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJlcnJvclRleHQiLCJzcGxpdCJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2FjdGl2aXRpZXMvbWF0ZXJpYWxzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NoYXJhY3Rlci10YWxrLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvY2hhdC50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL2NvbnRlbnQtdGhlb3J5LnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZGViYXRlLnRzIiwiL2FjdGl2aXRpZXMvc3BlY3MvZmFjdG9yeS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL211bHRpcGxlLWNob2ljZS50cyIsIi9hY3Rpdml0aWVzL3NwZWNzL3Nwb2tlbi50cyIsIi9hY3Rpdml0eS10eXBlcy50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXVkaWVuY2UudHMiLCIvYmFzZS50cyIsIi9jb2xsZWN0aW9uLnRzIiwiL2NvbW11bml0eS50cyIsIi9jcmVkaXRzL2luZGV4LnRzIiwiL3R5cGVzLnRzIiwiL2RyYWZ0LnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiLCIvbGlzdC50cyIsIi9wcm92aWRlcnMvaW5kZXgudHMiLCIvcHJvdmlkZXJzL2xlYXJuaW5nLW1vZHVsZXMudHMiLCIvc3VnZ2VzdGlvbnMvaW5kZXgudHMiLCIvdHlwZXMvYWN0aXZpdGllcy50cyIsIi9vd25lci50cyIsIi9kcmFmdC1pbXByb3ZlbWVudHMudHMiLCIvZHJhZnRzLnRzIiwiL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGVhcm5pbmctbW9kdWxlLWJhc2UudHMiLCIvbGVhcm5pbmctbW9kdWxlLnRzIiwiL3R5cGVzL21vZHVsZS1hY3Rpdml0aWVzLnRzIiwiL3RpbWVTdGFtcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQTs7Ozs7Ozs7O1VBU00sTUFBT0UsVUFBVyxTQUFRSCxNQUFBLENBQUFJLGFBQXlCO1lBQ3hELENBQUFDLGNBQWU7WUFFZixDQUFBQyxHQUFJLEdBQW1DLElBQUlDLEdBQUcsRUFBRTtZQUNoRCxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFGLEdBQUksQ0FBQ0csTUFBTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUNFLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFLLENBQUM7WUFDakU7WUFF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