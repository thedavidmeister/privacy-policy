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

var G__20561 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20561)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20308__auto__ = data;
var or__8247__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20309__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20309__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20310__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20310__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20311__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20311__auto__)){
return (envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2(data__20308__auto__,"details") : envelope__20311__auto__.call(null,data__20308__auto__,"details"));
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
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return data__20308__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20561)){
var G__20563 = (console["error"]);
var G__20564 = msg;
var G__20565 = (function (){var data__20308__auto__ = data;
var or__8247__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20309__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20309__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20310__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20310__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20311__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20311__auto__)){
return (envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2(data__20308__auto__,"details") : envelope__20311__auto__.call(null,data__20308__auto__,"details"));
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
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return data__20308__auto__;
}
})();
var fexpr__20562 = oops.state.get_console_reporter();
return (fexpr__20562.cljs$core$IFn$_invoke$arity$3 ? fexpr__20562.cljs$core$IFn$_invoke$arity$3(G__20563,G__20564,G__20565) : fexpr__20562.call(null,G__20563,G__20564,G__20565));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20561)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20561)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20566 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20566)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20308__auto__ = data;
var or__8247__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20309__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20309__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20310__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20310__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20311__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20311__auto__)){
return (envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2(data__20308__auto__,"details") : envelope__20311__auto__.call(null,data__20308__auto__,"details"));
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
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return data__20308__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20566)){
var G__20568 = (console["warn"]);
var G__20569 = msg;
var G__20570 = (function (){var data__20308__auto__ = data;
var or__8247__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20309__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20309__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20310__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20310__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20311__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20311__auto__)){
return (envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20311__auto__.cljs$core$IFn$_invoke$arity$2(data__20308__auto__,"details") : envelope__20311__auto__.call(null,data__20308__auto__,"details"));
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
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return data__20308__auto__;
}
})();
var fexpr__20567 = oops.state.get_console_reporter();
return (fexpr__20567.cljs$core$IFn$_invoke$arity$3 ? fexpr__20567.cljs$core$IFn$_invoke$arity$3(G__20568,G__20569,G__20570) : fexpr__20567.call(null,G__20568,G__20569,G__20570));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20566)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20566)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9531__auto__ = [];
var len__9524__auto___20577 = arguments.length;
var i__9525__auto___20578 = (0);
while(true){
if((i__9525__auto___20578 < len__9524__auto___20577)){
args__9531__auto__.push((arguments[i__9525__auto___20578]));

var G__20579 = (i__9525__auto___20578 + (1));
i__9525__auto___20578 = G__20579;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((1) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9532__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20573){
var vec__20574 = p__20573;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20574,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20571){
var G__20572 = cljs.core.first(seq20571);
var seq20571__$1 = cljs.core.next(seq20571);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20572,seq20571__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20581 = oops.config.get_child_factory();
var child_factory_20581__$1 = (function (){var G__20582 = child_factory_20581;
var G__20582__$1 = (((G__20582 instanceof cljs.core.Keyword))?G__20582.fqn:null);
switch (G__20582__$1) {
case "js-obj":
return ((function (G__20582,G__20582__$1,child_factory_20581){
return (function (){
return {};
});
;})(G__20582,G__20582__$1,child_factory_20581))

break;
case "js-array":
return ((function (G__20582,G__20582__$1,child_factory_20581){
return (function (){
return [];
});
;})(G__20582,G__20582__$1,child_factory_20581))

break;
default:
return child_factory_20581;

}
})();

var child_obj_20580 = (child_factory_20581__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20581__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20581__$1.call(null,obj,key));
(obj[key] = child_obj_20580);

return child_obj_20580;
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
var selector_path_20586 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20586);

return selector_path_20586;
} else {
var selector_path_20587 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_20587);

return selector_path_20587;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_20588 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_20588);
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
var path_20590 = (function (){var path_20589 = oops.core.build_path_dynamically(selector);

return path_20589;
})();
var len_20591 = path_20590.length;
var i_20592 = (0);
var obj_20593 = obj;
while(true){
if((i_20592 < len_20591)){
var mode_20594 = (path_20590[i_20592]);
var key_20595 = (path_20590[(i_20592 + (1))]);
var next_obj_20596 = oops.core.get_key_dynamically(obj_20593,key_20595,mode_20594);
var G__20597 = mode_20594;
switch (G__20597) {
case (0):
var G__20599 = (i_20592 + (2));
var G__20600 = next_obj_20596;
i_20592 = G__20599;
obj_20593 = G__20600;
continue;

break;
case (1):
if(!((next_obj_20596 == null))){
var G__20601 = (i_20592 + (2));
var G__20602 = next_obj_20596;
i_20592 = G__20601;
obj_20593 = G__20602;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20596 == null))){
var G__20603 = (i_20592 + (2));
var G__20604 = next_obj_20596;
i_20592 = G__20603;
obj_20593 = G__20604;
continue;
} else {
var G__20605 = (i_20592 + (2));
var G__20606 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20593,key_20595) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20593,key_20595));
i_20592 = G__20605;
obj_20593 = G__20606;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20597)].join('')));

}
} else {
return obj_20593;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_20608 = (function (){var path_20607 = oops.core.build_path_dynamically(selector);

return path_20607;
})();
var len_20609 = path_20608.length;
if((len_20609 < (4))){
return [obj,(function (){var path_20611 = path_20608;
var len_20612 = path_20611.length;
var i_20613 = (0);
var obj_20614 = obj;
while(true){
if((i_20613 < len_20612)){
var mode_20615 = (path_20611[i_20613]);
var key_20616 = (path_20611[(i_20613 + (1))]);
var next_obj_20617 = oops.core.get_key_dynamically(obj_20614,key_20616,mode_20615);
var G__20632 = mode_20615;
switch (G__20632) {
case (0):
var G__20636 = (i_20613 + (2));
var G__20637 = next_obj_20617;
i_20613 = G__20636;
obj_20614 = G__20637;
continue;

break;
case (1):
if(!((next_obj_20617 == null))){
var G__20638 = (i_20613 + (2));
var G__20639 = next_obj_20617;
i_20613 = G__20638;
obj_20614 = G__20639;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20617 == null))){
var G__20640 = (i_20613 + (2));
var G__20641 = next_obj_20617;
i_20613 = G__20640;
obj_20614 = G__20641;
continue;
} else {
var G__20642 = (i_20613 + (2));
var G__20643 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20614,key_20616) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20614,key_20616));
i_20613 = G__20642;
obj_20614 = G__20643;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20632)].join('')));

}
} else {
return obj_20614;
}
break;
}
})()];
} else {
var target_obj_20610 = (function (){var path_20618 = path_20608.slice((0),(len_20609 - (2)));
var len_20619 = path_20618.length;
var i_20620 = (0);
var obj_20621 = obj;
while(true){
if((i_20620 < len_20619)){
var mode_20622 = (path_20618[i_20620]);
var key_20623 = (path_20618[(i_20620 + (1))]);
var next_obj_20624 = oops.core.get_key_dynamically(obj_20621,key_20623,mode_20622);
var G__20633 = mode_20622;
switch (G__20633) {
case (0):
var G__20645 = (i_20620 + (2));
var G__20646 = next_obj_20624;
i_20620 = G__20645;
obj_20621 = G__20646;
continue;

break;
case (1):
if(!((next_obj_20624 == null))){
var G__20647 = (i_20620 + (2));
var G__20648 = next_obj_20624;
i_20620 = G__20647;
obj_20621 = G__20648;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20624 == null))){
var G__20649 = (i_20620 + (2));
var G__20650 = next_obj_20624;
i_20620 = G__20649;
obj_20621 = G__20650;
continue;
} else {
var G__20651 = (i_20620 + (2));
var G__20652 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20621,key_20623) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20621,key_20623));
i_20620 = G__20651;
obj_20621 = G__20652;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20633)].join('')));

}
} else {
return obj_20621;
}
break;
}
})();
return [target_obj_20610,(function (){var path_20625 = [(path_20608[(len_20609 - (2))]),(path_20608[(len_20609 - (1))])];
var len_20626 = path_20625.length;
var i_20627 = (0);
var obj_20628 = target_obj_20610;
while(true){
if((i_20627 < len_20626)){
var mode_20629 = (path_20625[i_20627]);
var key_20630 = (path_20625[(i_20627 + (1))]);
var next_obj_20631 = oops.core.get_key_dynamically(obj_20628,key_20630,mode_20629);
var G__20634 = mode_20629;
switch (G__20634) {
case (0):
var G__20654 = (i_20627 + (2));
var G__20655 = next_obj_20631;
i_20627 = G__20654;
obj_20628 = G__20655;
continue;

break;
case (1):
if(!((next_obj_20631 == null))){
var G__20656 = (i_20627 + (2));
var G__20657 = next_obj_20631;
i_20627 = G__20656;
obj_20628 = G__20657;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20631 == null))){
var G__20658 = (i_20627 + (2));
var G__20659 = next_obj_20631;
i_20627 = G__20658;
obj_20628 = G__20659;
continue;
} else {
var G__20660 = (i_20627 + (2));
var G__20661 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20628,key_20630) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20628,key_20630));
i_20627 = G__20660;
obj_20628 = G__20661;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20634)].join('')));

}
} else {
return obj_20628;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_20663 = (function (){var path_20662 = oops.core.build_path_dynamically(selector);

return path_20662;
})();
var len_20666 = path_20663.length;
var parent_obj_path_20667 = path_20663.slice((0),(len_20666 - (2)));
var key_20664 = (path_20663[(len_20666 - (1))]);
var mode_20665 = (path_20663[(len_20666 - (2))]);
var parent_obj_20668 = (function (){var path_20669 = parent_obj_path_20667;
var len_20670 = path_20669.length;
var i_20671 = (0);
var obj_20672 = obj;
while(true){
if((i_20671 < len_20670)){
var mode_20673 = (path_20669[i_20671]);
var key_20674 = (path_20669[(i_20671 + (1))]);
var next_obj_20675 = oops.core.get_key_dynamically(obj_20672,key_20674,mode_20673);
var G__20676 = mode_20673;
switch (G__20676) {
case (0):
var G__20678 = (i_20671 + (2));
var G__20679 = next_obj_20675;
i_20671 = G__20678;
obj_20672 = G__20679;
continue;

break;
case (1):
if(!((next_obj_20675 == null))){
var G__20680 = (i_20671 + (2));
var G__20681 = next_obj_20675;
i_20671 = G__20680;
obj_20672 = G__20681;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20675 == null))){
var G__20682 = (i_20671 + (2));
var G__20683 = next_obj_20675;
i_20671 = G__20682;
obj_20672 = G__20683;
continue;
} else {
var G__20684 = (i_20671 + (2));
var G__20685 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20672,key_20674) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20672,key_20674));
i_20671 = G__20684;
obj_20672 = G__20685;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20676)].join('')));

}
} else {
return obj_20672;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_20668,key_20664,val,mode_20665);
});
