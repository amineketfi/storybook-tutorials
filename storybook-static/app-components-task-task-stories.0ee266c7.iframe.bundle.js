(self.webpackChunkstorybook_tutorial=self.webpackChunkstorybook_tutorial||[]).push([[528],{"./src/app/components/task/task.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,actionsData:()=>actionsData,default:()=>task_stories});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs");const task_stories={component:__webpack_require__("./src/app/components/task/task.component.ts").m,title:"Task",excludeStories:/.*Data$/},actionsData={onPinTask:(0,chunk_OPEUWD42.aD)("onPinTask"),onArchiveTask:(0,chunk_OPEUWD42.aD)("onArchiveTask")},Template=args=>({props:{...args,onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}}),Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};const Pinned=Template.bind({});Pinned.args={task:{...Default.args.task,state:"TASK_PINNED"}};const Archived=Template.bind({});Archived.args={task:{...Default.args.task,state:"TASK_ARCHIVED"}}},"./src/app/components/task/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>TaskComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,task_componentngResource=__webpack_require__("./src/app/components/task/task.component.scss?ngResource"),task_componentngResource_default=__webpack_require__.n(task_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TaskComponent=((_class=class TaskComponent{constructor(){this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}onPin(id){this.onPinTask.emit(id)}onArchive(id){this.onArchiveTask.emit(id)}}).propDecorators={task:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]},_class);TaskComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sb-task",template:'<div class="list-item {{ task.state }}">\n  <label\n    [attr.aria-label]="\'archiveTask-\' + task.id"\n    for="checked-{{ task.id }}"\n    class="checkbox"\n  >\n    <input\n      type="checkbox"\n      disabled="true"\n      [defaultChecked]="task.state === \'TASK_ARCHIVED\'"\n      name="checked-{{ task.id }}"\n      id="checked-{{ task.id }}"\n    />\n    <span class="checkbox-custom" (click)="onArchive(task.id)"></span>\n  </label>\n  <label\n    [attr.aria-label]="task.title + \'\'"\n    for="title-{{ task.id }}"\n    class="title"\n  >\n    <input\n      type="text"\n      [value]="task.title"\n      readonly="true"\n      id="title-{{ task.id }}"\n      name="title-{{ task.id }}"\n      placeholder="Input title"\n    />\n  </label>\n  <button\n    *ngIf="task.state !== \'TASK_ARCHIVED\'"\n    class="pin-button"\n    [attr.aria-label]="\'pinTask-\' + task.id"\n    (click)="onPin(task.id)"\n  >\n    <span class="icon-star"></span>\n  </button>\n</div>\n',styles:[task_componentngResource_default()]})],TaskComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/components/task/task.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);