(self.webpackChunkstorybook_tutorial=self.webpackChunkstorybook_tutorial||[]).push([[644,528],{"./src/app/components/pure-task-list/pure-task-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Loading:()=>Loading,WithPinnedTasks:()=>WithPinnedTasks,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_pure_task_list_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/pure-task-list/pure-task-list.component.ts"),_task_task_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/task/task.component.ts"),_task_task_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/task/task.stories.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_pure_task_list_component__WEBPACK_IMPORTED_MODULE_1__.C,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_pure_task_list_component__WEBPACK_IMPORTED_MODULE_1__.C,_task_task_component__WEBPACK_IMPORTED_MODULE_2__.m],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div style="margin: 3em">${story}</div>`))],title:"PureTaskList"},Template=args=>({props:{...args,onPinTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_3__.actionsData.onPinTask,onArchiveTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_3__.actionsData.onArchiveTask}}),Default=Template.bind({});Default.args={tasks:[{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"1",title:"Task 1"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"2",title:"Task 2"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"3",title:"Task 3"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"4",title:"Task 4"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"5",title:"Task 5"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"6",title:"Task 6"}]};const WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[...Default.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]};const Loading=Template.bind({});Loading.args={tasks:[],loading:!0};const Empty=Template.bind({});Empty.args={...Loading.args,loading:!1}},"./src/app/components/task/task.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,actionsData:()=>actionsData,default:()=>task_stories});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs");const task_stories={component:__webpack_require__("./src/app/components/task/task.component.ts").m,title:"Task",excludeStories:/.*Data$/},actionsData={onPinTask:(0,chunk_OPEUWD42.aD)("onPinTask"),onArchiveTask:(0,chunk_OPEUWD42.aD)("onArchiveTask")},Template=args=>({props:{...args,onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}}),Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};const Pinned=Template.bind({});Pinned.args={task:{...Default.args.task,state:"TASK_PINNED"}};const Archived=Template.bind({});Archived.args={task:{...Default.args.task,state:"TASK_ARCHIVED"}}},"./src/app/components/pure-task-list/pure-task-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>PureTaskListComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,pure_task_list_componentngResource=__webpack_require__("./src/app/components/pure-task-list/pure-task-list.component.scss?ngResource"),pure_task_list_componentngResource_default=__webpack_require__.n(pure_task_list_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let PureTaskListComponent=((_class=class PureTaskListComponent{constructor(){this.tasksInOrder=[],this.loading=!1,this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}set tasks(arr){const initialTasks=[...arr?.filter((t=>"TASK_PINNED"===t?.state)),...arr?.filter((t=>"TASK_PINNED"!==t?.state))];this.tasksInOrder=initialTasks.filter((t=>"TASK_INBOX"===t.state||"TASK_PINNED"===t.state))}}).propDecorators={loading:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}],tasks:[{type:core.Input}]},_class);PureTaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sb-pure-task-list",template:'<div class="list-items">\n  <sb-task\n    *ngFor="let task of tasksInOrder"\n    [task]="task"\n    (onArchiveTask)="onArchiveTask.emit($event)"\n    (onPinTask)="onPinTask.emit($event)"\n  >\n  </sb-task>\n  <div *ngIf="tasksInOrder.length === 0 && !loading" class="wrapper-message">\n    <span class="icon-check"></span>\n    <p class="title-message">You have no tasks</p>\n    <p class="subtitle-message">Sit back and relax</p>\n  </div>\n  <div *ngIf="loading">\n    <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">\n      <span class="glow-checkbox"></span>\n      <span class="glow-text">\n        <span>Loading</span> <span>cool</span> <span>state</span>\n      </span>\n    </div>\n  </div>\n</div>\n',styles:[pure_task_list_componentngResource_default()]})],PureTaskListComponent)},"./src/app/components/task/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>TaskComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,task_componentngResource=__webpack_require__("./src/app/components/task/task.component.scss?ngResource"),task_componentngResource_default=__webpack_require__.n(task_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TaskComponent=((_class=class TaskComponent{constructor(){this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}onPin(id){this.onPinTask.emit(id)}onArchive(id){this.onArchiveTask.emit(id)}}).propDecorators={task:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]},_class);TaskComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sb-task",template:'<div class="list-item {{ task.state }}">\n  <label\n    [attr.aria-label]="\'archiveTask-\' + task.id"\n    for="checked-{{ task.id }}"\n    class="checkbox"\n  >\n    <input\n      type="checkbox"\n      disabled="true"\n      [defaultChecked]="task.state === \'TASK_ARCHIVED\'"\n      name="checked-{{ task.id }}"\n      id="checked-{{ task.id }}"\n    />\n    <span class="checkbox-custom" (click)="onArchive(task.id)"></span>\n  </label>\n  <label\n    [attr.aria-label]="task.title + \'\'"\n    for="title-{{ task.id }}"\n    class="title"\n  >\n    <input\n      type="text"\n      [value]="task.title"\n      readonly="true"\n      id="title-{{ task.id }}"\n      name="title-{{ task.id }}"\n      placeholder="Input title"\n    />\n  </label>\n  <button\n    *ngIf="task.state !== \'TASK_ARCHIVED\'"\n    class="pin-button"\n    [attr.aria-label]="\'pinTask-\' + task.id"\n    (click)="onPin(task.id)"\n  >\n    <span class="icon-star"></span>\n  </button>\n</div>\n',styles:[task_componentngResource_default()]})],TaskComponent)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/components/pure-task-list/pure-task-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/task/task.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);