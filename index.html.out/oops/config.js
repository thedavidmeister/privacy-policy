// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('oops.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,cljs.core.cst$kw$warning_DASH_reporting,cljs.core.cst$kw$use_DASH_envelope,cljs.core.cst$kw$error_DASH_reporting,cljs.core.cst$kw$expected_DASH_function_DASH_value,cljs.core.cst$kw$child_DASH_factory,cljs.core.cst$kw$invalid_DASH_selector,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,cljs.core.cst$kw$missing_DASH_object_DASH_key],[cljs.core.cst$kw$warn,cljs.core.cst$kw$console,true,cljs.core.cst$kw$throw,cljs.core.cst$kw$error,cljs.core.cst$kw$js_DASH_obj,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,true,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$error]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15220 = arguments.length;
var i__9524__auto___15221 = (0);
while(true){
if((i__9524__auto___15221 < len__9523__auto___15220)){
args__9530__auto__.push((arguments[i__9524__auto___15221]));

var G__15222 = (i__9524__auto___15221 + (1));
i__9524__auto___15221 = G__15222;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq15218){
var G__15219 = cljs.core.first(seq15218);
var seq15218__$1 = cljs.core.next(seq15218);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15219,seq15218__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15230 = arguments.length;
var i__9524__auto___15231 = (0);
while(true){
if((i__9524__auto___15231 < len__9523__auto___15230)){
args__9530__auto__.push((arguments[i__9524__auto___15231]));

var G__15232 = (i__9524__auto___15231 + (1));
i__9524__auto___15231 = G__15232;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__15225){
var vec__15226 = p__15225;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(0),null);
var G__15229 = (function (){var or__8246__auto__ = config;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__15229) : key.call(null,G__15229));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq15223){
var G__15224 = cljs.core.first(seq15223);
var seq15223__$1 = cljs.core.next(seq15223);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__15224,seq15223__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15239 = arguments.length;
var i__9524__auto___15240 = (0);
while(true){
if((i__9524__auto___15240 < len__9523__auto___15239)){
args__9530__auto__.push((arguments[i__9524__auto___15240]));

var G__15241 = (i__9524__auto___15240 + (1));
i__9524__auto___15240 = G__15241;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__15235){
var vec__15236 = p__15235;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8246__auto__ = config;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq15233){
var G__15234 = cljs.core.first(seq15233);
var seq15233__$1 = cljs.core.next(seq15233);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__15234,seq15233__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15247 = arguments.length;
var i__9524__auto___15248 = (0);
while(true){
if((i__9524__auto___15248 < len__9523__auto___15247)){
args__9530__auto__.push((arguments[i__9524__auto___15248]));

var G__15249 = (i__9524__auto___15248 + (1));
i__9524__auto___15248 = G__15249;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__15243){
var vec__15244 = p__15243;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq15242){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15242));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15255 = arguments.length;
var i__9524__auto___15256 = (0);
while(true){
if((i__9524__auto___15256 < len__9523__auto___15255)){
args__9530__auto__.push((arguments[i__9524__auto___15256]));

var G__15257 = (i__9524__auto___15256 + (1));
i__9524__auto___15256 = G__15257;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__15251){
var vec__15252 = p__15251;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq15250){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15250));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15263 = arguments.length;
var i__9524__auto___15264 = (0);
while(true){
if((i__9524__auto___15264 < len__9523__auto___15263)){
args__9530__auto__.push((arguments[i__9524__auto___15264]));

var G__15265 = (i__9524__auto___15264 + (1));
i__9524__auto___15264 = G__15265;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__15259){
var vec__15260 = p__15259;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15260,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq15258){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15258));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15271 = arguments.length;
var i__9524__auto___15272 = (0);
while(true){
if((i__9524__auto___15272 < len__9523__auto___15271)){
args__9530__auto__.push((arguments[i__9524__auto___15272]));

var G__15273 = (i__9524__auto___15272 + (1));
i__9524__auto___15272 = G__15273;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__15267){
var vec__15268 = p__15267;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15268,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq15266){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15266));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15279 = arguments.length;
var i__9524__auto___15280 = (0);
while(true){
if((i__9524__auto___15280 < len__9523__auto___15279)){
args__9530__auto__.push((arguments[i__9524__auto___15280]));

var G__15281 = (i__9524__auto___15280 + (1));
i__9524__auto___15280 = G__15281;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15275){
var vec__15276 = p__15275;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15276,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq15274){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15274));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9530__auto__ = [];
var len__9523__auto___15287 = arguments.length;
var i__9524__auto___15288 = (0);
while(true){
if((i__9524__auto___15288 < len__9523__auto___15287)){
args__9530__auto__.push((arguments[i__9524__auto___15288]));

var G__15289 = (i__9524__auto___15288 + (1));
i__9524__auto___15288 = G__15289;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15283){
var vec__15284 = p__15283;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq15282){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15282));
});

