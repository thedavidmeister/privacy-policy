// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__24487 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__24487)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__24234__auto__ = data;
var or__8246__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24235__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24235__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24236__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24236__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24237__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24237__auto__)){
return (envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2(data__24234__auto__,"details") : envelope__24237__auto__.call(null,data__24234__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return data__24234__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__24487)){
var G__24489 = (console["error"]);
var G__24490 = msg;
var G__24491 = (function (){var data__24234__auto__ = data;
var or__8246__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24235__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24235__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24236__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24236__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24237__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24237__auto__)){
return (envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2(data__24234__auto__,"details") : envelope__24237__auto__.call(null,data__24234__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return data__24234__auto__;
}
})();
var fexpr__24488 = oops.state.get_console_reporter();
return (fexpr__24488.cljs$core$IFn$_invoke$arity$3 ? fexpr__24488.cljs$core$IFn$_invoke$arity$3(G__24489,G__24490,G__24491) : fexpr__24488.call(null,G__24489,G__24490,G__24491));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24487)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24487)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__24492 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__24492)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__24234__auto__ = data;
var or__8246__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24235__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24235__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24236__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24236__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24237__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24237__auto__)){
return (envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2(data__24234__auto__,"details") : envelope__24237__auto__.call(null,data__24234__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return data__24234__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__24492)){
var G__24494 = (console["warn"]);
var G__24495 = msg;
var G__24496 = (function (){var data__24234__auto__ = data;
var or__8246__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24235__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24235__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24236__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24236__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24237__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24237__auto__)){
return (envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24237__auto__.cljs$core$IFn$_invoke$arity$2(data__24234__auto__,"details") : envelope__24237__auto__.call(null,data__24234__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return data__24234__auto__;
}
})();
var fexpr__24493 = oops.state.get_console_reporter();
return (fexpr__24493.cljs$core$IFn$_invoke$arity$3 ? fexpr__24493.cljs$core$IFn$_invoke$arity$3(G__24494,G__24495,G__24496) : fexpr__24493.call(null,G__24494,G__24495,G__24496));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24492)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24492)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9530__auto__ = [];
var len__9523__auto___24503 = arguments.length;
var i__9524__auto___24504 = (0);
while(true){
if((i__9524__auto___24504 < len__9523__auto___24503)){
args__9530__auto__.push((arguments[i__9524__auto___24504]));

var G__24505 = (i__9524__auto___24504 + (1));
i__9524__auto___24504 = G__24505;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__24499){
var vec__24500 = p__24499;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24500,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq24497){
var G__24498 = cljs.core.first(seq24497);
var seq24497__$1 = cljs.core.next(seq24497);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__24498,seq24497__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_24507 = oops.config.get_child_factory();
var child_factory_24507__$1 = (function (){var G__24508 = child_factory_24507;
var G__24508__$1 = (((G__24508 instanceof cljs.core.Keyword))?G__24508.fqn:null);
switch (G__24508__$1) {
case "js-obj":
return ((function (G__24508,G__24508__$1,child_factory_24507){
return (function (){
return {};
});
;})(G__24508,G__24508__$1,child_factory_24507))

break;
case "js-array":
return ((function (G__24508,G__24508__$1,child_factory_24507){
return (function (){
return [];
});
;})(G__24508,G__24508__$1,child_factory_24507))

break;
default:
return child_factory_24507;

}
})();

var child_obj_24506 = (child_factory_24507__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_24507__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_24507__$1.call(null,obj,key));
(obj[key] = child_obj_24506);

return child_obj_24506;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_24512 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_24512);

return selector_path_24512;
} else {
var selector_path_24513 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_24513);

return selector_path_24513;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_24514 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_24514);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_24516 = (function (){var path_24515 = oops.core.build_path_dynamically(selector);

return path_24515;
})();
var len_24517 = path_24516.length;
var i_24518 = (0);
var obj_24519 = obj;
while(true){
if((i_24518 < len_24517)){
var mode_24520 = (path_24516[i_24518]);
var key_24521 = (path_24516[(i_24518 + (1))]);
var next_obj_24522 = oops.core.get_key_dynamically(obj_24519,key_24521,mode_24520);
var G__24523 = mode_24520;
switch (G__24523) {
case (0):
var G__24525 = (i_24518 + (2));
var G__24526 = next_obj_24522;
i_24518 = G__24525;
obj_24519 = G__24526;
continue;

break;
case (1):
if(!((next_obj_24522 == null))){
var G__24527 = (i_24518 + (2));
var G__24528 = next_obj_24522;
i_24518 = G__24527;
obj_24519 = G__24528;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24522 == null))){
var G__24529 = (i_24518 + (2));
var G__24530 = next_obj_24522;
i_24518 = G__24529;
obj_24519 = G__24530;
continue;
} else {
var G__24531 = (i_24518 + (2));
var G__24532 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24519,key_24521) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24519,key_24521));
i_24518 = G__24531;
obj_24519 = G__24532;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24523)].join('')));

}
} else {
return obj_24519;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_24534 = (function (){var path_24533 = oops.core.build_path_dynamically(selector);

return path_24533;
})();
var len_24535 = path_24534.length;
if((len_24535 < (4))){
return [obj,(function (){var path_24537 = path_24534;
var len_24538 = path_24537.length;
var i_24539 = (0);
var obj_24540 = obj;
while(true){
if((i_24539 < len_24538)){
var mode_24541 = (path_24537[i_24539]);
var key_24542 = (path_24537[(i_24539 + (1))]);
var next_obj_24543 = oops.core.get_key_dynamically(obj_24540,key_24542,mode_24541);
var G__24558 = mode_24541;
switch (G__24558) {
case (0):
var G__24562 = (i_24539 + (2));
var G__24563 = next_obj_24543;
i_24539 = G__24562;
obj_24540 = G__24563;
continue;

break;
case (1):
if(!((next_obj_24543 == null))){
var G__24564 = (i_24539 + (2));
var G__24565 = next_obj_24543;
i_24539 = G__24564;
obj_24540 = G__24565;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24543 == null))){
var G__24566 = (i_24539 + (2));
var G__24567 = next_obj_24543;
i_24539 = G__24566;
obj_24540 = G__24567;
continue;
} else {
var G__24568 = (i_24539 + (2));
var G__24569 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24540,key_24542) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24540,key_24542));
i_24539 = G__24568;
obj_24540 = G__24569;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24558)].join('')));

}
} else {
return obj_24540;
}
break;
}
})()];
} else {
var target_obj_24536 = (function (){var path_24544 = path_24534.slice((0),(len_24535 - (2)));
var len_24545 = path_24544.length;
var i_24546 = (0);
var obj_24547 = obj;
while(true){
if((i_24546 < len_24545)){
var mode_24548 = (path_24544[i_24546]);
var key_24549 = (path_24544[(i_24546 + (1))]);
var next_obj_24550 = oops.core.get_key_dynamically(obj_24547,key_24549,mode_24548);
var G__24559 = mode_24548;
switch (G__24559) {
case (0):
var G__24571 = (i_24546 + (2));
var G__24572 = next_obj_24550;
i_24546 = G__24571;
obj_24547 = G__24572;
continue;

break;
case (1):
if(!((next_obj_24550 == null))){
var G__24573 = (i_24546 + (2));
var G__24574 = next_obj_24550;
i_24546 = G__24573;
obj_24547 = G__24574;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24550 == null))){
var G__24575 = (i_24546 + (2));
var G__24576 = next_obj_24550;
i_24546 = G__24575;
obj_24547 = G__24576;
continue;
} else {
var G__24577 = (i_24546 + (2));
var G__24578 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24547,key_24549) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24547,key_24549));
i_24546 = G__24577;
obj_24547 = G__24578;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24559)].join('')));

}
} else {
return obj_24547;
}
break;
}
})();
return [target_obj_24536,(function (){var path_24551 = [(path_24534[(len_24535 - (2))]),(path_24534[(len_24535 - (1))])];
var len_24552 = path_24551.length;
var i_24553 = (0);
var obj_24554 = target_obj_24536;
while(true){
if((i_24553 < len_24552)){
var mode_24555 = (path_24551[i_24553]);
var key_24556 = (path_24551[(i_24553 + (1))]);
var next_obj_24557 = oops.core.get_key_dynamically(obj_24554,key_24556,mode_24555);
var G__24560 = mode_24555;
switch (G__24560) {
case (0):
var G__24580 = (i_24553 + (2));
var G__24581 = next_obj_24557;
i_24553 = G__24580;
obj_24554 = G__24581;
continue;

break;
case (1):
if(!((next_obj_24557 == null))){
var G__24582 = (i_24553 + (2));
var G__24583 = next_obj_24557;
i_24553 = G__24582;
obj_24554 = G__24583;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24557 == null))){
var G__24584 = (i_24553 + (2));
var G__24585 = next_obj_24557;
i_24553 = G__24584;
obj_24554 = G__24585;
continue;
} else {
var G__24586 = (i_24553 + (2));
var G__24587 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24554,key_24556) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24554,key_24556));
i_24553 = G__24586;
obj_24554 = G__24587;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24560)].join('')));

}
} else {
return obj_24554;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_24589 = (function (){var path_24588 = oops.core.build_path_dynamically(selector);

return path_24588;
})();
var len_24592 = path_24589.length;
var parent_obj_path_24593 = path_24589.slice((0),(len_24592 - (2)));
var key_24590 = (path_24589[(len_24592 - (1))]);
var mode_24591 = (path_24589[(len_24592 - (2))]);
var parent_obj_24594 = (function (){var path_24595 = parent_obj_path_24593;
var len_24596 = path_24595.length;
var i_24597 = (0);
var obj_24598 = obj;
while(true){
if((i_24597 < len_24596)){
var mode_24599 = (path_24595[i_24597]);
var key_24600 = (path_24595[(i_24597 + (1))]);
var next_obj_24601 = oops.core.get_key_dynamically(obj_24598,key_24600,mode_24599);
var G__24602 = mode_24599;
switch (G__24602) {
case (0):
var G__24604 = (i_24597 + (2));
var G__24605 = next_obj_24601;
i_24597 = G__24604;
obj_24598 = G__24605;
continue;

break;
case (1):
if(!((next_obj_24601 == null))){
var G__24606 = (i_24597 + (2));
var G__24607 = next_obj_24601;
i_24597 = G__24606;
obj_24598 = G__24607;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24601 == null))){
var G__24608 = (i_24597 + (2));
var G__24609 = next_obj_24601;
i_24597 = G__24608;
obj_24598 = G__24609;
continue;
} else {
var G__24610 = (i_24597 + (2));
var G__24611 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24598,key_24600) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24598,key_24600));
i_24597 = G__24610;
obj_24598 = G__24611;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24602)].join('')));

}
} else {
return obj_24598;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_24594,key_24590,val,mode_24591);
});
