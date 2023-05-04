(self.webpackChunkstorybook_tutorial=self.webpackChunkstorybook_tutorial||[]).push([[566],{"./src/app/components/pure-inbox-screen/pure-inbox-screen.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,WithInteractions:()=>WithInteractions,default:()=>pure_inbox_screen_stories});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),ngxs_store=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,pure_inbox_screen_componentngResource=__webpack_require__("./src/app/components/pure-inbox-screen/pure-inbox-screen.component.scss?ngResource"),pure_inbox_screen_componentngResource_default=__webpack_require__.n(pure_inbox_screen_componentngResource);let PureInboxScreenComponent=((_class=class PureInboxScreenComponent{}).propDecorators={error:[{type:core.Input}]},_class);PureInboxScreenComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sb-pure-inbox-screen",template:'<div *ngIf="error" class="page lists-show">\n  <div class="wrapper-message">\n    <span class="icon-face-sad"></span>\n    <p class="title-message">Oh no!</p>\n    <p class="subtitle-message">Something went wrong</p>\n  </div>\n</div>\n\n<div *ngIf="!error" class="page lists-show">\n  <nav>\n    <h1 class="title-page">Taskbox</h1>\n  </nav>\n  <sb-task-list></sb-task-list>\n</div>\n',styles:[pure_inbox_screen_componentngResource_default()]})],PureInboxScreenComponent);var task_component=__webpack_require__("./src/app/components/task/task.component.ts");var task_list_componentngResource=__webpack_require__("./src/app/components/task-list/task-list.component.scss?ngResource"),task_list_componentngResource_default=__webpack_require__.n(task_list_componentngResource),ngxs_store_operators=__webpack_require__("./node_modules/@ngxs/store/fesm2015/ngxs-store-operators.js");const actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK";class ArchiveTask{constructor(payload){this.payload=payload}}ArchiveTask.type=actions_ARCHIVE_TASK;class PinTask{constructor(payload){this.payload=payload}}PinTask.type=actions_PIN_TASK;let TasksState=class TasksState{static getError(state){return state.error}static getAllTasks(state){return state.tasks}pinTask({getState,setState},{payload}){const task=getState().tasks.find((task=>task.id===payload));if(task){const updatedTask={...task,state:"TASK_PINNED"};setState((0,ngxs_store_operators.r$)({tasks:(0,ngxs_store_operators.$G)((pinnedTask=>pinnedTask?.id===payload),updatedTask)}))}}archiveTask({getState,setState},{payload}){const task=getState().tasks.find((task=>task.id===payload));if(task){const updatedTask={...task,state:"TASK_ARCHIVED"};setState((0,ngxs_store_operators.r$)({tasks:(0,ngxs_store_operators.$G)((archivedTask=>archivedTask?.id===payload),updatedTask)}))}}};var task_list_component_class;(0,tslib_es6.gn)([(0,ngxs_store.aU)(PinTask)],TasksState.prototype,"pinTask",null),(0,tslib_es6.gn)([(0,ngxs_store.aU)(ArchiveTask)],TasksState.prototype,"archiveTask",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)()],TasksState,"getError",null),(0,tslib_es6.gn)([(0,ngxs_store.Qf)()],TasksState,"getAllTasks",null),TasksState=(0,tslib_es6.gn)([(0,ngxs_store.ZM)({name:"taskbox",defaults:{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],status:"idle",error:!1}}),(0,core.Injectable)()],TasksState);let TaskListComponent=((task_list_component_class=class TaskListComponent{constructor(store){this.store=store,this.tasks$=store.select((state=>state.taskbox.tasks))}archiveTask(id){this.store.dispatch(new ArchiveTask(id))}pinTask(id){this.store.dispatch(new PinTask(id))}}).ctorParameters=()=>[{type:ngxs_store.yh}],task_list_component_class);TaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sb-task-list",template:'<sb-pure-task-list\n  [tasks]="tasks$ | async"\n  (onArchiveTask)="archiveTask($event)"\n  (onPinTask)="pinTask($event)"\n></sb-pure-task-list>\n',styles:[task_list_componentngResource_default()]})],TaskListComponent);var pure_task_list_component=__webpack_require__("./src/app/components/pure-task-list/pure-task-list.component.ts");let TaskModule=class TaskModule{};TaskModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,ngxs_store.$l.forFeature([TasksState])],exports:[task_component.m,TaskListComponent],declarations:[task_component.m,TaskListComponent,pure_task_list_component.C],providers:[]})],TaskModule);const environment_production=!1,pure_inbox_screen_stories={component:PureInboxScreenComponent,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,TaskModule,ngxs_store.$l.forRoot([TasksState],{developmentMode:!environment_production})]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(ngxs_store.$l.forRoot([TasksState],{developmentMode:!environment_production})),(0,core.importProvidersFrom)(ngxs_store.yh)]})],title:"PureInboxScreen"},Template=args=>({props:args}),Default=Template.bind({}),Error=Template.bind({});Error.args={error:!0};const WithInteractions=Template.bind({});WithInteractions.play=function(){var _ref=(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,esm.uh)(canvasElement);yield esm.BX.click(canvas.getByLabelText("pinTask-1")),yield esm.BX.click(canvas.getByLabelText("pinTask-3"))}));return function(_x){return _ref.apply(this,arguments)}}()},"./src/app/components/pure-task-list/pure-task-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>PureTaskListComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,pure_task_list_componentngResource=__webpack_require__("./src/app/components/pure-task-list/pure-task-list.component.scss?ngResource"),pure_task_list_componentngResource_default=__webpack_require__.n(pure_task_list_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let PureTaskListComponent=((_class=class PureTaskListComponent{constructor(){this.tasksInOrder=[],this.loading=!1,this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}set tasks(arr){const initialTasks=[...arr?.filter((t=>"TASK_PINNED"===t?.state)),...arr?.filter((t=>"TASK_PINNED"!==t?.state))];this.tasksInOrder=initialTasks.filter((t=>"TASK_INBOX"===t.state||"TASK_PINNED"===t.state))}}).propDecorators={loading:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}],tasks:[{type:core.Input}]},_class);PureTaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sb-pure-task-list",template:'<div class="list-items">\n  <sb-task\n    *ngFor="let task of tasksInOrder"\n    [task]="task"\n    (onArchiveTask)="onArchiveTask.emit($event)"\n    (onPinTask)="onPinTask.emit($event)"\n  >\n  </sb-task>\n  <div *ngIf="tasksInOrder.length === 0 && !loading" class="wrapper-message">\n    <span class="icon-check"></span>\n    <p class="title-message">You have no tasks</p>\n    <p class="subtitle-message">Sit back and relax</p>\n  </div>\n  <div *ngIf="loading">\n    <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">\n      <span class="glow-checkbox"></span>\n      <span class="glow-text">\n        <span>Loading</span> <span>cool</span> <span>state</span>\n      </span>\n    </div>\n  </div>\n</div>\n',styles:[pure_task_list_componentngResource_default()]})],PureTaskListComponent)},"./src/app/components/task/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>TaskComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,task_componentngResource=__webpack_require__("./src/app/components/task/task.component.scss?ngResource"),task_componentngResource_default=__webpack_require__.n(task_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TaskComponent=((_class=class TaskComponent{constructor(){this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}onPin(id){this.onPinTask.emit(id)}onArchive(id){this.onArchiveTask.emit(id)}}).propDecorators={task:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]},_class);TaskComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"sb-task",template:'<div class="list-item {{ task.state }}">\n  <label\n    [attr.aria-label]="\'archiveTask-\' + task.id"\n    for="checked-{{ task.id }}"\n    class="checkbox"\n  >\n    <input\n      type="checkbox"\n      disabled="true"\n      [defaultChecked]="task.state === \'TASK_ARCHIVED\'"\n      name="checked-{{ task.id }}"\n      id="checked-{{ task.id }}"\n    />\n    <span class="checkbox-custom" (click)="onArchive(task.id)"></span>\n  </label>\n  <label\n    [attr.aria-label]="task.title + \'\'"\n    for="title-{{ task.id }}"\n    class="title"\n  >\n    <input\n      type="text"\n      [value]="task.title"\n      readonly="true"\n      id="title-{{ task.id }}"\n      name="title-{{ task.id }}"\n      placeholder="Input title"\n    />\n  </label>\n  <button\n    *ngIf="task.state !== \'TASK_ARCHIVED\'"\n    class="pin-button"\n    [attr.aria-label]="\'pinTask-\' + task.id"\n    (click)="onPin(task.id)"\n  >\n    <span class="icon-star"></span>\n  </button>\n</div>\n',styles:[task_componentngResource_default()]})],TaskComponent)},"./src/app/components/pure-inbox-screen/pure-inbox-screen.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/pure-task-list/pure-task-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/task-list/task-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/task/task.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"?4f7e":()=>{}}]);