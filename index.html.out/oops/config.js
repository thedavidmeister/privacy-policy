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
var args__9531__auto__ = [];
var len__9524__auto___14775 = arguments.length;
var i__9525__auto___14776 = (0);
while(true){
if((i__9525__auto___14776 < len__9524__auto___14775)){
args__9531__auto__.push((arguments[i__9525__auto___14776]));

var G__14777 = (i__9525__auto___14776 + (1));
i__9525__auto___14776 = G__14777;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((1) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9532__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq14773){
var G__14774 = cljs.core.first(seq14773);
var seq14773__$1 = cljs.core.next(seq14773);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14774,seq14773__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14785 = arguments.length;
var i__9525__auto___14786 = (0);
while(true){
if((i__9525__auto___14786 < len__9524__auto___14785)){
args__9531__auto__.push((arguments[i__9525__auto___14786]));

var G__14787 = (i__9525__auto___14786 + (1));
i__9525__auto___14786 = G__14787;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((1) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9532__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14780){
var vec__14781 = p__14780;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(0),null);
var G__14784 = (function (){var or__8247__auto__ = config;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14784) : key.call(null,G__14784));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq14778){
var G__14779 = cljs.core.first(seq14778);
var seq14778__$1 = cljs.core.next(seq14778);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__14779,seq14778__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14794 = arguments.length;
var i__9525__auto___14795 = (0);
while(true){
if((i__9525__auto___14795 < len__9524__auto___14794)){
args__9531__auto__.push((arguments[i__9525__auto___14795]));

var G__14796 = (i__9525__auto___14795 + (1));
i__9525__auto___14795 = G__14796;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((1) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9532__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14790){
var vec__14791 = p__14790;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14791,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8247__auto__ = config;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq14788){
var G__14789 = cljs.core.first(seq14788);
var seq14788__$1 = cljs.core.next(seq14788);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__14789,seq14788__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14802 = arguments.length;
var i__9525__auto___14803 = (0);
while(true){
if((i__9525__auto___14803 < len__9524__auto___14802)){
args__9531__auto__.push((arguments[i__9525__auto___14803]));

var G__14804 = (i__9525__auto___14803 + (1));
i__9525__auto___14803 = G__14804;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14798){
var vec__14799 = p__14798;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq14797){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14797));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14810 = arguments.length;
var i__9525__auto___14811 = (0);
while(true){
if((i__9525__auto___14811 < len__9524__auto___14810)){
args__9531__auto__.push((arguments[i__9525__auto___14811]));

var G__14812 = (i__9525__auto___14811 + (1));
i__9525__auto___14811 = G__14812;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14806){
var vec__14807 = p__14806;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq14805){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14805));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14818 = arguments.length;
var i__9525__auto___14819 = (0);
while(true){
if((i__9525__auto___14819 < len__9524__auto___14818)){
args__9531__auto__.push((arguments[i__9525__auto___14819]));

var G__14820 = (i__9525__auto___14819 + (1));
i__9525__auto___14819 = G__14820;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14814){
var vec__14815 = p__14814;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq14813){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14813));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14826 = arguments.length;
var i__9525__auto___14827 = (0);
while(true){
if((i__9525__auto___14827 < len__9524__auto___14826)){
args__9531__auto__.push((arguments[i__9525__auto___14827]));

var G__14828 = (i__9525__auto___14827 + (1));
i__9525__auto___14827 = G__14828;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__14822){
var vec__14823 = p__14822;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq14821){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14821));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14834 = arguments.length;
var i__9525__auto___14835 = (0);
while(true){
if((i__9525__auto___14835 < len__9524__auto___14834)){
args__9531__auto__.push((arguments[i__9525__auto___14835]));

var G__14836 = (i__9525__auto___14835 + (1));
i__9525__auto___14835 = G__14836;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14830){
var vec__14831 = p__14830;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq14829){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14829));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9531__auto__ = [];
var len__9524__auto___14842 = arguments.length;
var i__9525__auto___14843 = (0);
while(true){
if((i__9525__auto___14843 < len__9524__auto___14842)){
args__9531__auto__.push((arguments[i__9525__auto___14843]));

var G__14844 = (i__9525__auto___14843 + (1));
i__9525__auto___14843 = G__14844;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14838){
var vec__14839 = p__14838;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq14837){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14837));
});

