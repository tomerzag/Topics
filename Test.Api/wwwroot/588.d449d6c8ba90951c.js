"use strict";(self.webpackChunkobjects=self.webpackChunkobjects||[]).push([[588],{588:(Wn,ue,l)=>{l.r(ue),l.d(ue,{HomeModule:()=>zn});var h=l(808),i=l(223),mt=l(340),_t=l(520);let vt=(()=>{class t{constructor(e){this.http=e,this.relatedTopicsUrl=`${mt.N.serverUrl}/api/Topics`}searchRelatedTopic(e){return this.http.get(`${this.relatedTopicsUrl}/search?query=${e}`)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(_t.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var B=l(579);let I=(()=>{class t{constructor(){this.inserted=new B.x,this.clicked=new B.x,this.valuesChanged=new B.x}insert(e){this.inserted.next(e)}click(e){this.clicked.next(e)}changeValues(e){return this.valuesChanged.next(e)}inserted$(){return this.inserted.asObservable()}clicked$(){return this.clicked.asObservable()}valuesChanged$(){return this.valuesChanged.asObservable()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})();function yt(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"ul"),i.TgZ(1,"li"),i.TgZ(2,"a",1),i.NdJ("click",function(){const s=i.CHM(e).$implicit;return i.oxw().clickValue(s)}),i._uU(3),i.qZA(),i.qZA(),i.qZA()}if(2&t){const e=n.$implicit;i.xp6(3),i.hij(" ",e," ")}}let Ct=(()=>{class t{constructor(e){this.sidebarService=e,this.title="Sidebar",this.maxSize=20,this.values=[],this.valueClick=new i.vpe}ngOnInit(){this.sidebarInsertedSubscription=this.sidebarService.inserted$().subscribe(e=>{const r=this.values.map(o=>o.toLowerCase()).indexOf(e.toLowerCase());r>-1&&this.values.splice(r,1),this.values.push(e),this.sidebarService.changeValues(this.values)})}clickValue(e){this.sidebarService.click(e),this.valueClick.emit(e)}ngOnDestroy(){var e;null===(e=this.sidebarInsertedSubscription)||void 0===e||e.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(I))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-sidebar"]],inputs:{title:"title",maxSize:"maxSize",values:"values"},outputs:{valueClick:"valueClick"},decls:3,vars:2,consts:[[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,r){1&e&&(i.TgZ(0,"h4"),i._uU(1),i.qZA(),i.YNc(2,yt,4,1,"ul",0)),2&e&&(i.xp6(1),i.Oqu(r.title),i.xp6(1),i.Q6J("ngForOf",r.values.slice().reverse()))},directives:[h.sg],styles:["a[_ngcontent-%COMP%]:link{color:red}a[_ngcontent-%COMP%]:visited{color:green}a[_ngcontent-%COMP%]:hover{color:#ff69b4}a[_ngcontent-%COMP%]{color:#00f;cursor:pointer}"]}),t})();var Vt=l(76),At=l(306),Mt=l(742),bt=l(421),Dt=l(669),Et=l(403),Ot=l(268),Ft=l(810),wt=l(4);let ce=(()=>{class t{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Qsj),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t}),t})(),v=(()=>{class t extends ce{}return t.\u0275fac=function(){let n;return function(r){return(n||(n=i.n5z(t)))(r||t)}}(),t.\u0275dir=i.lG2({type:t,features:[i.qOj]}),t})();const p=new i.OlP("NgValueAccessor"),Tt={provide:p,useExisting:(0,i.Gpc)(()=>E),multi:!0},Gt=new i.OlP("CompositionEventMode");let E=(()=>{class t extends ce{constructor(e,r,o){super(e,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function xt(){const t=(0,h.q)()?(0,h.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Gt,8))},t.\u0275dir=i.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&i.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[i._Bn([Tt]),i.qOj]}),t})();const u=new i.OlP("NgValidators"),m=new i.OlP("NgAsyncValidators");function Ve(t){return null!=t}function Ae(t){const n=(0,i.QGY)(t)?(0,Vt.D)(t):t;return(0,i.CqO)(n),n}function Me(t){let n={};return t.forEach(e=>{n=null!=e?Object.assign(Object.assign({},n),e):n}),0===Object.keys(n).length?null:n}function be(t,n){return n.map(e=>e(t))}function De(t){return t.map(n=>function Pt(t){return!t.validate}(n)?n:e=>n.validate(e))}function R(t){return null!=t?function Ee(t){if(!t)return null;const n=t.filter(Ve);return 0==n.length?null:function(e){return Me(be(e,n))}}(De(t)):null}function H(t){return null!=t?function Oe(t){if(!t)return null;const n=t.filter(Ve);return 0==n.length?null:function(e){return function St(...t){const n=(0,Dt.jO)(t),{args:e,keys:r}=(0,Mt.D)(t),o=new At.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let f=a,C=a;for(let P=0;P<a;P++){let le=!1;(0,bt.Xf)(e[P]).subscribe(new Et.Q(s,Zn=>{le||(le=!0,C--),d[P]=Zn},()=>f--,void 0,()=>{(!f||!le)&&(C||s.next(r?(0,Ft.n)(r,d):d),s.complete())}))}});return n?o.pipe((0,Ot.Z)(n)):o}(be(e,n).map(Ae)).pipe((0,wt.U)(Me))}}(De(t)):null}function Fe(t,n){return null===t?[n]:Array.isArray(t)?[...t,n]:[t,n]}function U(t){return t?Array.isArray(t)?t:[t]:[]}function O(t,n){return Array.isArray(t)?t.includes(n):t===n}function Ne(t,n){const e=U(n);return U(t).forEach(o=>{O(e,o)||e.push(o)}),e}function Te(t,n){return U(n).filter(e=>!O(t,e))}class xe{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=R(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=H(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n){this.control&&this.control.reset(n)}hasError(n,e){return!!this.control&&this.control.hasError(n,e)}getError(n,e){return this.control?this.control.getError(n,e):null}}class _ extends xe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class c extends xe{get formDirective(){return null}get path(){return null}}let ke=(()=>{class t extends class Ge{constructor(n){this._cd=n}is(n){var e,r,o;return"submitted"===n?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(o=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===o?void 0:o[n])}}{constructor(e){super(e)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(_,2))},t.\u0275dir=i.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[i.qOj]}),t})();function A(t,n){(function L(t,n){const e=function Se(t){return t._rawValidators}(t);null!==n.validator?t.setValidators(Fe(e,n.validator)):"function"==typeof e&&t.setValidators([e]);const r=function we(t){return t._rawAsyncValidators}(t);null!==n.asyncValidator?t.setAsyncValidators(Fe(r,n.asyncValidator)):"function"==typeof r&&t.setAsyncValidators([r]);const o=()=>t.updateValueAndValidity();N(n._rawValidators,o),N(n._rawAsyncValidators,o)})(t,n),n.valueAccessor.writeValue(t.value),function Yt(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&Be(t,n)})}(t,n),function zt(t,n){const e=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}(t,n),function $t(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&Be(t,n),"submit"!==t.updateOn&&t.markAsTouched()})}(t,n),function Lt(t,n){if(n.valueAccessor.setDisabledState){const e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}(t,n)}function N(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Be(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function x(t,n){const e=t.indexOf(n);e>-1&&t.splice(e,1)}const M="VALID",G="INVALID",y="PENDING",b="DISABLED";function Z(t){return(J(t)?t.validators:t)||null}function He(t){return Array.isArray(t)?R(t):t||null}function W(t,n){return(J(n)?n.asyncValidators:t)||null}function Ue(t){return Array.isArray(t)?H(t):t||null}function J(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}const Q=t=>t instanceof K;function qe(t){return(t=>t instanceof $e)(t)?t.value:t.getRawValue()}function Le(t,n){const e=Q(t),r=t.controls;if(!(e?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[n])throw new i.vHH(1001,"")}function Ye(t,n){Q(t),t._forEachChild((r,o)=>{if(void 0===n[o])throw new i.vHH(1002,"")})}class X{constructor(n,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=n,this._rawAsyncValidators=e,this._composedValidatorFn=He(this._rawValidators),this._composedAsyncValidatorFn=Ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===G}get pending(){return this.status==y}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._rawValidators=n,this._composedValidatorFn=He(n)}setAsyncValidators(n){this._rawAsyncValidators=n,this._composedAsyncValidatorFn=Ue(n)}addValidators(n){this.setValidators(Ne(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ne(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Te(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Te(n,this._rawAsyncValidators))}hasValidator(n){return O(this._rawValidators,n)}hasAsyncValidator(n){return O(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=y,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},n),{onlySelf:!0}))}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},n),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=M,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},n),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===y)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator=!0;const e=Ae(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(!1!==e.emitEvent)}get(n){return function Qt(t,n,e){if(null==n||(Array.isArray(n)||(n=n.split(e)),Array.isArray(n)&&0===n.length))return null;let r=t;return n.forEach(o=>{r=Q(r)?r.controls.hasOwnProperty(o)?r.controls[o]:null:(t=>t instanceof Kt)(r)&&r.at(o)||null}),r}(this,n,".")}getError(n,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(G)?G:M}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_isBoxedValue(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){J(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class $e extends X{constructor(n=null,e,r){super(Z(e),W(r,e)),this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=null,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){x(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){x(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){this._isBoxedValue(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}}class K extends X{constructor(n,e,r){super(Z(e),W(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Ye(this,n),Object.keys(n).forEach(r=>{Le(this,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){null!=n&&(Object.keys(n).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,o)=>{r.reset(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=qe(e),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&n(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(n,e,r)=>((e.enabled||this.disabled)&&(n[r]=e.value),n))}_reduceChildren(n,e){let r=n;return this._forEachChild((o,s)=>{r=e(r,o,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Kt extends X{constructor(n,e,r){super(Z(e),W(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[n]}push(n,e={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,r={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),e&&(this.controls.splice(n,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){Ye(this,n),n.forEach((r,o)=>{Le(this,o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){null!=n&&(n.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((r,o)=>{r.reset(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(n=>qe(n))}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_syncPendingControls(){let n=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,r)=>{n(e,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}}const nn={provide:_,useExisting:(0,i.Gpc)(()=>te)},We=(()=>Promise.resolve(null))();let te=(()=>{class t extends _{constructor(e,r,o,s){super(),this.control=new $e,this._registered=!1,this.update=new i.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function $(t,n){if(!n)return null;let e,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===E?e=s:function Jt(t){return Object.getPrototypeOf(t.constructor)===v}(s)?r=s:o=s}),o||r||e||null}(0,s)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),function Y(t,n){if(!t.hasOwnProperty("model"))return!1;const e=t.model;return!!e.isFirstChange()||!Object.is(n,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function S(t,n){return[...n.path,t]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){A(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){We.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const r=e.isDisabled.currentValue,o=""===r||r&&"false"!==r;We.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(c,9),i.Y36(u,10),i.Y36(m,10),i.Y36(p,10))},t.\u0275dir=i.lG2({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([nn]),i.qOj,i.TTD]}),t})(),Qe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({}),t})(),Fn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[Qe]]}),t})(),Sn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[Fn]}),t})(),wn=(()=>{class t{constructor(){this.title="Search",this.search=new i.vpe}ngOnInit(){}onSearch(e){this.search.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-search-input"]],inputs:{title:"title",value:"value"},outputs:{search:"search"},decls:3,vars:2,consts:[[3,"title","ngModel","ngModelChange"],[3,"click"]],template:function(e,r){1&e&&(i.TgZ(0,"input",0),i.NdJ("ngModelChange",function(s){return r.value=s}),i.qZA(),i.TgZ(1,"button",1),i.NdJ("click",function(){return r.value&&r.onSearch(r.value)}),i._uU(2,"Find"),i.qZA()),2&e&&i.Q6J("title",r.title)("ngModel",r.value)},directives:[E,ke,te],styles:[""]}),t})();var Nn=l(313);let Tn=(()=>{class t{constructor(e,r){this.el=e,this.sanitizer=r}ngOnChanges(e){var r;if((null===(r=this.el)||void 0===r?void 0:r.nativeElement)&&"searchTerm"in e){const o=this.el.nativeElement.textContent;if(this.searchTerm){const s=new RegExp(this.searchTerm),a=null==o?void 0:o.replace(s,f=>`<mark>${f}</mark>`),d=this.sanitizer.sanitize(i.q3G.HTML,a);this.content=d}else this.content=o}}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(Nn.H7))},t.\u0275dir=i.lG2({type:t,selectors:[["","highlight",""]],hostVars:1,hostBindings:function(e,r){2&e&&i.Ikx("innerHTML",r.content,i.oJD)},inputs:{searchTerm:["highlight","searchTerm"]},features:[i.TTD]}),t})(),xn=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-topic"]],inputs:{markText:"markText",relatedTopic:"relatedTopic"},decls:4,vars:4,consts:[[1,"tooltip"],["target","_blank",3,"href","highlight","innerHTML"],[1,"tooltiptext"]],template:function(e,r){1&e&&(i.TgZ(0,"p",0),i._UZ(1,"a",1),i.TgZ(2,"span",2),i._uU(3),i.qZA(),i.qZA()),2&e&&(i.xp6(1),i.Q6J("href",null==r.relatedTopic?null:r.relatedTopic.url,i.LSH)("highlight",r.markText)("innerHTML",null==r.relatedTopic?null:r.relatedTopic.title,i.oJD),i.xp6(2),i.Oqu(null==r.relatedTopic?null:r.relatedTopic.url))},directives:[Tn],styles:[".tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;background-color:#000;color:#fff;text-align:center;padding:0 5px;border-radius:6px;position:absolute;z-index:1}.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible}"]}),t})();function Gn(t,n){if(1&t&&i._UZ(0,"app-topic",1),2&t){const e=n.$implicit,r=i.oxw();i.Q6J("relatedTopic",e)("markText",r.markText)}}let kn=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-topic-list"]],inputs:{markText:"markText",relatedTopics:"relatedTopics"},decls:1,vars:1,consts:[[3,"relatedTopic","markText",4,"ngFor","ngForOf"],[3,"relatedTopic","markText"]],template:function(e,r){1&e&&i.YNc(0,Gn,1,2,"app-topic",0),2&e&&i.Q6J("ngForOf",r.relatedTopics)},directives:[h.sg,xn],styles:[""]}),t})();function Pn(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"button",2),i.NdJ("click",function(){const s=i.CHM(e).$implicit;return i.oxw().pageSelected(s)}),i._uU(1),i.qZA()}if(2&t){const e=n.$implicit,r=i.oxw();i.Udp("font-weight",e===r.pageNumber?"bold":""),i.xp6(1),i.hij(" ",e," ")}}let Bn=(()=>{class t{constructor(){this.pageNumber=1,this.pageSize=20,this.length=0,this.pages=[],this.selectPage=new i.vpe}ngOnInit(){}ngOnChanges(e){e.length&&(e.length.currentValue||0===e.length.currentValue)&&(this.pages=Array.from({length:Math.ceil(e.length.currentValue/this.pageSize)},(r,o)=>o+1))}pageSelected(e){this.pageNumber=e,this.selectPage.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-pagination"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",length:"length"},outputs:{selectPage:"selectPage"},features:[i.TTD],decls:5,vars:2,consts:[[1,"pages"],[3,"fontWeight","click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,r){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div"),i.YNc(2,Pn,2,3,"button",1),i.qZA(),i.TgZ(3,"h4"),i._uU(4),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Q6J("ngForOf",r.pages),i.xp6(2),i.hij(" ",r.length," Results "))},directives:[h.sg],styles:[".pages[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})(),In=(()=>{class t{transform(e,r,o){const s=r-1;return(e||[]).slice(s*o,s*o+o)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Yjl({name:"top",type:t,pure:!0}),t})();const Rn=function(){return[]};function Hn(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"div"),i.TgZ(1,"div",6),i._UZ(2,"app-topic-list",7),i.ALo(3,"top"),i.qZA(),i.TgZ(4,"app-pagination",8),i.NdJ("selectPage",function(o){return i.CHM(e),i.oxw().onSelectPage(o)}),i.qZA(),i.qZA()}if(2&t){const e=i.oxw();i.xp6(2),i.Q6J("relatedTopics",i.Dn7(3,5,e.relatedTopics,e.pageNumber,e.pageSize))("markText",e.query),i.xp6(2),i.Q6J("pageNumber",e.pageNumber)("pageSize",e.pageSize)("length",(e.relatedTopics||i.DdM(9,Rn)).length)}}let Un=(()=>{class t{constructor(e,r){this.topicsService=e,this.sidebarService=r,this.pageNumber=1,this.pageSize=10,this.searchHistory=localStorage.getItem("search-history")?JSON.parse(localStorage.getItem("search-history")):[]}ngOnInit(){this.sidebarClickedSubscription=this.sidebarService.clicked$().subscribe(e=>{this.searchRelatedTopics(e)}),this.sidebarValuesChangedSubscription=this.sidebarService.valuesChanged$().subscribe(e=>{localStorage.setItem("search-history",JSON.stringify(e))})}searchRelatedTopics(e){this.pageNumber=1,this.query=e,this.sidebarService.insert(e),this.topicsService.searchRelatedTopic(e).subscribe(r=>{this.relatedTopics=r})}onSelectPage(e){this.pageNumber=e}ngOnDestroy(){var e,r;null===(e=this.sidebarClickedSubscription)||void 0===e||e.unsubscribe(),null===(r=this.sidebarValuesChangedSubscription)||void 0===r||r.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(vt),i.Y36(I))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-home"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize"},decls:6,vars:3,consts:[[1,"home-container"],[1,"sidebar"],["title","Search History",3,"values"],[1,"related-topics"],[3,"value","search"],[4,"ngIf"],[1,"list"],[3,"relatedTopics","markText"],[3,"pageNumber","pageSize","length","selectPage"]],template:function(e,r){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i._UZ(2,"app-sidebar",2),i.qZA(),i.TgZ(3,"div",3),i.TgZ(4,"app-search-input",4),i.NdJ("search",function(s){return r.searchRelatedTopics(s)}),i.qZA(),i.YNc(5,Hn,5,10,"div",5),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Q6J("values",r.searchHistory),i.xp6(2),i.Q6J("value",r.query),i.xp6(1),i.Q6J("ngIf",r.relatedTopics))},directives:[Ct,wn,h.O5,kn,Bn],pipes:[In],styles:[".home-container[_ngcontent-%COMP%]{display:flex;flex:4}.sidebar[_ngcontent-%COMP%]{display:flex;flex:1}.related-topics[_ngcontent-%COMP%]{display:flex;flex:3;flex-direction:column}.related-topics[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{min-height:360px}"]}),t})();var jn=l(118);let qn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[h.ez,Sn]]}),t})(),Ln=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[I],imports:[[h.ez]]}),t})(),gt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[h.ez]]}),t})(),Yn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[h.ez,gt]]}),t})();const $n=[{path:"",component:Un}];let zn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[h.ez,jn.Bz.forChild($n),Yn,qn,Ln,gt]]}),t})()}}]);