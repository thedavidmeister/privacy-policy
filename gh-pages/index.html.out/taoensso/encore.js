// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(91),(0)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
<<<<<<< HEAD
var G__22825 = arguments.length;
switch (G__22825) {
=======
var G__21029 = arguments.length;
switch (G__21029) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
<<<<<<< HEAD
var vec__22826 = (((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826,(1),null);
var vec__22829 = (((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22829,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22829,(1),null);
=======
var vec__21030 = (((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(1),null);
var vec__21033 = (((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21033,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21033,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
<<<<<<< HEAD
var G__22834 = arguments.length;
switch (G__22834) {
=======
var G__21038 = arguments.length;
switch (G__21038) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
<<<<<<< HEAD
var readers__$1 = (cljs.core.truth_((function (){var G__22835 = readers;
var G__22836 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__22835,G__22836) : taoensso.encore.kw_identical_QMARK_.call(null,G__22835,G__22836));
})())?(function (){var G__22837 = cljs.core.symbol;
var G__22838 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__22837,G__22838) : taoensso.encore.map_keys.call(null,G__22837,G__22838));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__22839 = default$;
var G__22840 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__22839,G__22840) : taoensso.encore.kw_identical_QMARK_.call(null,G__22839,G__22840));
=======
var readers__$1 = (cljs.core.truth_((function (){var G__21039 = readers;
var G__21040 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21039,G__21040) : taoensso.encore.kw_identical_QMARK_.call(null,G__21039,G__21040));
})())?(function (){var G__21041 = cljs.core.symbol;
var G__21042 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__21041,G__21042) : taoensso.encore.map_keys.call(null,G__21041,G__21042));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__21043 = default$;
var G__21044 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21043,G__21044) : taoensso.encore.kw_identical_QMARK_.call(null,G__21043,G__21044));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
<<<<<<< HEAD
var G__22843 = arguments.length;
switch (G__22843) {
=======
var G__21047 = arguments.length;
switch (G__21047) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
<<<<<<< HEAD
var _STAR_print_level_STAR_22844 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_22845 = cljs.core._STAR_print_length_STAR_;
=======
var _STAR_print_level_STAR_21048 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_21049 = cljs.core._STAR_print_length_STAR_;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
<<<<<<< HEAD
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_22845;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_22844;
=======
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_21049;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_21048;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
<<<<<<< HEAD
var b2__21189__auto__ = (function (){var or__8247__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
var b2__19393__auto__ = (function (){var or__8246__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
<<<<<<< HEAD
if(cljs.core.truth_(b2__21189__auto__)){
var data_map = b2__21189__auto__;
=======
if(cljs.core.truth_(b2__19393__auto__)){
var data_map = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__8234__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__8234__auto__){
var and__8234__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8234__auto____$1)){
return true;
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__8234__auto__ = (x instanceof cljs.core.Symbol);
if(and__8234__auto__){
var and__8234__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8234__auto____$1)){
return true;
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__8234__auto__ = (x instanceof cljs.core.Keyword);
if(and__8234__auto__){
var and__8234__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8234__auto____$1)){
return true;
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__8234__auto__ = typeof x === 'number';
if(and__8234__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__8234__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return null;
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
<<<<<<< HEAD
var b2__21189__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__21189__auto__)){
var ns = b2__21189__auto__;
=======
var b2__19393__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__19393__auto__)){
var ns = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__21189__auto__)){
var n = b2__21189__auto__;
=======
var b2__19393__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__19393__auto__)){
var n = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__21189__auto__)){
var n = b2__21189__auto__;
=======
var b2__19393__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__19393__auto__)){
var n = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__21189__auto__)){
var n = b2__21189__auto__;
=======
var b2__19393__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__19393__auto__)){
var n = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__21189__auto__)){
var n = b2__21189__auto__;
=======
var b2__19393__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__19393__auto__)){
var n = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__21189__auto__)){
var n = b2__21189__auto__;
=======
var b2__19393__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__19393__auto__)){
var n = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__21189__auto__)){
var f = b2__21189__auto__;
=======
var b2__19393__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__19393__auto__)){
var f = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__21189__auto__)){
var email = b2__21189__auto__;
=======
var b2__19393__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__19393__auto__)){
var email = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return clojure.string.lower_case(email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
<<<<<<< HEAD
}catch (e22851){if((e22851 instanceof Error)){
var _ = e22851;
return false;
} else {
throw e22851;
=======
}catch (e21055){if((e21055 instanceof Error)){
var _ = e21055;
return false;
} else {
throw e21055;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
<<<<<<< HEAD
var G__22853 = arguments.length;
switch (G__22853) {
=======
var G__21057 = arguments.length;
switch (G__21057) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join(''))," failure against arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`as-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(as_name)),"` failed against: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__8246__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
<<<<<<< HEAD
var G__22856 = arguments.length;
switch (G__22856) {
=======
var G__21060 = arguments.length;
switch (G__21060) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
<<<<<<< HEAD
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__22860){
var vec__22861 = p__22860;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861,(1),null);
=======
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__21064){
var vec__21065 = p__21064;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21065,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21065,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
<<<<<<< HEAD
var inc_22867 = (function (n){
=======
var inc_21071 = (function (n){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
<<<<<<< HEAD
taoensso.encore.reduce_indexed = ((function (inc_22867){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_22867){
return (function (acc,in$){
var G__22864 = acc;
var G__22865 = cljs.core._vreset_BANG_(i,inc_22867(cljs.core._deref(i)));
var G__22866 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__22864,G__22865,G__22866) : rf.call(null,G__22864,G__22865,G__22866));
});})(i,inc_22867))
,init,coll);
});})(inc_22867))
=======
taoensso.encore.reduce_indexed = ((function (inc_21071){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_21071){
return (function (acc,in$){
var G__21068 = acc;
var G__21069 = cljs.core._vreset_BANG_(i,inc_21071(cljs.core._deref(i)));
var G__21070 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__21068,G__21069,G__21070) : rf.call(null,G__21068,G__21069,G__21070));
});})(i,inc_21071))
,init,coll);
});})(inc_21071))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
<<<<<<< HEAD
var G__22868 = acc;
var G__22869 = k;
var G__22870 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22868,G__22869,G__22870) : f.call(null,G__22868,G__22869,G__22870));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22872_SHARP_,p2__22871_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__22871_SHARP_) : proc.call(null,p2__22871_SHARP_));
=======
var G__21072 = acc;
var G__21073 = k;
var G__21074 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21072,G__21073,G__21074) : f.call(null,G__21072,G__21073,G__21074));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21076_SHARP_,p2__21075_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__21075_SHARP_) : proc.call(null,p2__21075_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
<<<<<<< HEAD
cljs.core.reduce_kv((function (p1__22875_SHARP_,p2__22873_SHARP_,p3__22874_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__22873_SHARP_,p3__22874_SHARP_) : proc.call(null,p2__22873_SHARP_,p3__22874_SHARP_));
=======
cljs.core.reduce_kv((function (p1__21079_SHARP_,p2__21077_SHARP_,p3__21078_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__21077_SHARP_,p3__21078_SHARP_) : proc.call(null,p2__21077_SHARP_,p3__21078_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
<<<<<<< HEAD
taoensso.encore.reduce_kvs((function (p1__22878_SHARP_,p2__22876_SHARP_,p3__22877_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__22876_SHARP_,p3__22877_SHARP_) : proc.call(null,p2__22876_SHARP_,p3__22877_SHARP_));
=======
taoensso.encore.reduce_kvs((function (p1__21082_SHARP_,p2__21080_SHARP_,p3__21081_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__21080_SHARP_,p3__21081_SHARP_) : proc.call(null,p2__21080_SHARP_,p3__21081_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
<<<<<<< HEAD
taoensso.encore.reduce_obj((function (p1__22881_SHARP_,p2__22879_SHARP_,p3__22880_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__22879_SHARP_,p3__22880_SHARP_) : proc.call(null,p2__22879_SHARP_,p3__22880_SHARP_));
=======
taoensso.encore.reduce_obj((function (p1__21085_SHARP_,p2__21083_SHARP_,p3__21084_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__21083_SHARP_,p3__21084_SHARP_) : proc.call(null,p2__21083_SHARP_,p3__21084_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
<<<<<<< HEAD
var b2__21189__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__21189__auto__)){
var p = b2__21189__auto__;
=======
var b2__19393__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__19393__auto__)){
var p = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
<<<<<<< HEAD
var b2__21189__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__21189__auto__)){
var p = b2__21189__auto__;
=======
var b2__19393__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__19393__auto__)){
var p = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
<<<<<<< HEAD
var inc_22883 = (function (n){
=======
var inc_21087 = (function (n){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
<<<<<<< HEAD
taoensso.encore.idx_fn = ((function (inc_22883){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_22883){
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_22883(cljs.core._deref(idx_)));
});
;})(idx_,inc_22883))
});})(inc_22883))
=======
taoensso.encore.idx_fn = ((function (inc_21087){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_21087){
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_21087(cljs.core._deref(idx_)));
});
;})(idx_,inc_21087))
});})(inc_21087))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
<<<<<<< HEAD
var G__22885 = arguments.length;
switch (G__22885) {
=======
var G__21089 = arguments.length;
switch (G__21089) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
<<<<<<< HEAD
return ((function (){var G__22886 = (x - y);
return Math.abs(G__22886);
=======
return ((function (){var G__21090 = (x - y);
return Math.abs(G__21090);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})() < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
<<<<<<< HEAD
return ((function (){var G__22887 = (x - y);
return Math.abs(G__22887);
=======
return ((function (){var G__21091 = (x - y);
return Math.abs(G__21091);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})() < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
<<<<<<< HEAD
var G__22890 = arguments.length;
switch (G__22890) {
=======
var G__21094 = arguments.length;
switch (G__21094) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
<<<<<<< HEAD
var rounded = (function (){var G__22891 = type;
var G__22891__$1 = (((G__22891 instanceof cljs.core.Keyword))?G__22891.fqn:null);
switch (G__22891__$1) {
=======
var rounded = (function (){var G__21095 = type;
var G__21095__$1 = (((G__21095 instanceof cljs.core.Keyword))?G__21095.fqn:null);
switch (G__21095__$1) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
<<<<<<< HEAD
var G__22894 = n;
return Math.round(G__22894);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__22895 = (n * 10.0);
return Math.round(G__22895);
=======
var G__21098 = n;
return Math.round(G__21098);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__21099 = (n * 10.0);
return Math.round(G__21099);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
<<<<<<< HEAD
return ((function (){var G__22896 = (n * 100.0);
return Math.round(G__22896);
=======
return ((function (){var G__21100 = (n * 100.0);
return Math.round(G__21100);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
<<<<<<< HEAD
var G__22898 = arguments.length;
switch (G__22898) {
=======
var G__21102 = arguments.length;
switch (G__21102) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

<<<<<<< HEAD
taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__22899){
var map__22900 = p__22899;
var map__22900__$1 = ((((!((map__22900 == null)))?((((map__22900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22900):map__22900);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22900__$1,cljs.core.cst$kw$factor,(1000));
=======
taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__21103){
var map__21104 = p__21103;
var map__21104__$1 = ((((!((map__21104 == null)))?((((map__21104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21104):map__21104);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21104__$1,cljs.core.cst$kw$factor,(1000));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
<<<<<<< HEAD
return cljs.core.with_meta(x,(function (){var G__22903 = cljs.core.meta(x);
var G__22904 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__22903,G__22904) : taoensso.encore.merge.call(null,G__22903,G__22904));
=======
return cljs.core.with_meta(x,(function (){var G__21107 = cljs.core.meta(x);
var G__21108 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__21107,G__21108) : taoensso.encore.merge.call(null,G__21107,G__21108));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
<<<<<<< HEAD
var G__22910 = arguments.length;
switch (G__22910) {
=======
var G__21114 = arguments.length;
switch (G__21114) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___22912 = arguments.length;
var i__9525__auto___22913 = (0);
while(true){
if((i__9525__auto___22913 < len__9524__auto___22912)){
args_arr__9547__auto__.push((arguments[i__9525__auto___22913]));

var G__22914 = (i__9525__auto___22913 + (1));
i__9525__auto___22913 = G__22914;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21116 = arguments.length;
var i__9524__auto___21117 = (0);
while(true){
if((i__9524__auto___21117 < len__9523__auto___21116)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21117]));

var G__21118 = (i__9524__auto___21117 + (1));
i__9524__auto___21117 = G__21118;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9547__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
<<<<<<< HEAD
var and__8235__auto__ = taoensso.encore.some_QMARK_(x);
if(and__8235__auto__){
var and__8235__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__8235__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__8235__auto____$1,and__8235__auto__){
return (function (p1__22905_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22905_SHARP_,x);
});})(and__8235__auto____$1,and__8235__auto__))
=======
var and__8234__auto__ = taoensso.encore.some_QMARK_(x);
if(and__8234__auto__){
var and__8234__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__8234__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__8234__auto____$1,and__8234__auto__){
return (function (p1__21109_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21109_SHARP_,x);
});})(and__8234__auto____$1,and__8234__auto__))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,more);
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
});

<<<<<<< HEAD
taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq22907){
var G__22908 = cljs.core.first(seq22907);
var seq22907__$1 = cljs.core.next(seq22907);
var G__22909 = cljs.core.first(seq22907__$1);
var seq22907__$2 = cljs.core.next(seq22907__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22908,G__22909,seq22907__$2);
=======
taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq21111){
var G__21112 = cljs.core.first(seq21111);
var seq21111__$1 = cljs.core.next(seq21111);
var G__21113 = cljs.core.first(seq21111__$1);
var seq21111__$2 = cljs.core.next(seq21111__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21112,G__21113,seq21111__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
<<<<<<< HEAD
var G__22920 = arguments.length;
switch (G__22920) {
=======
var G__21124 = arguments.length;
switch (G__21124) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___22922 = arguments.length;
var i__9525__auto___22923 = (0);
while(true){
if((i__9525__auto___22923 < len__9524__auto___22922)){
args_arr__9547__auto__.push((arguments[i__9525__auto___22923]));

var G__22924 = (i__9525__auto___22923 + (1));
i__9525__auto___22923 = G__22924;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21126 = arguments.length;
var i__9524__auto___21127 = (0);
while(true){
if((i__9524__auto___21127 < len__9523__auto___21126)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21127]));

var G__21128 = (i__9524__auto___21127 + (1));
i__9524__auto___21127 = G__21128;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

<<<<<<< HEAD
taoensso.encore.nnil.cljs$lang$applyTo = (function (seq22916){
var G__22917 = cljs.core.first(seq22916);
var seq22916__$1 = cljs.core.next(seq22916);
var G__22918 = cljs.core.first(seq22916__$1);
var seq22916__$2 = cljs.core.next(seq22916__$1);
var G__22919 = cljs.core.first(seq22916__$2);
var seq22916__$3 = cljs.core.next(seq22916__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__22917,G__22918,G__22919,seq22916__$3);
=======
taoensso.encore.nnil.cljs$lang$applyTo = (function (seq21120){
var G__21121 = cljs.core.first(seq21120);
var seq21120__$1 = cljs.core.next(seq21120);
var G__21122 = cljs.core.first(seq21120__$1);
var seq21120__$2 = cljs.core.next(seq21120__$1);
var G__21123 = cljs.core.first(seq21120__$2);
var seq21120__$3 = cljs.core.next(seq21120__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__21121,G__21122,G__21123,seq21120__$3);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
<<<<<<< HEAD
var vec__22925 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22925,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__21189__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__21189__auto__)){
var s = b2__21189__auto__;
=======
var vec__21129 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21129,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21129,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__19393__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__19393__auto__)){
var s = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
<<<<<<< HEAD
})(),cljs.core.cst$kw$qualifier,(function (){var b2__21189__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__21189__auto__)){
var s = b2__21189__auto__;
=======
})(),cljs.core.cst$kw$qualifier,(function (){var b2__19393__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__19393__auto__)){
var s = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
<<<<<<< HEAD
var vec__22929 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22929,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22929,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22929,(2),null);
var vec__22932 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22932,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22932,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22932,(2),null);
var vec__22935 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__22929,xc,yc,zc,vec__22932,xm,ym,zm){
return (function (p1__22928_SHARP_){
var or__8247__auto__ = p1__22928_SHARP_;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return (0);
}
});})(vec__22929,xc,yc,zc,vec__22932,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(2),null);
=======
var vec__21133 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21133,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21133,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21133,(2),null);
var vec__21136 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,(2),null);
var vec__21139 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__21133,xc,yc,zc,vec__21136,xm,ym,zm){
return (function (p1__21132_SHARP_){
var or__8246__auto__ = p1__21132_SHARP_;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
});})(vec__21133,xc,yc,zc,vec__21136,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21139,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21139,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21139,(2),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
<<<<<<< HEAD
var G__22939 = arguments.length;
switch (G__22939) {
=======
var G__21143 = arguments.length;
switch (G__21143) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___22942 = arguments.length;
var i__9525__auto___22943 = (0);
while(true){
if((i__9525__auto___22943 < len__9524__auto___22942)){
args__9531__auto__.push((arguments[i__9525__auto___22943]));

var G__22944 = (i__9525__auto___22943 + (1));
i__9525__auto___22943 = G__22944;
=======
var args__9530__auto__ = [];
var len__9523__auto___21146 = arguments.length;
var i__9524__auto___21147 = (0);
while(true){
if((i__9524__auto___21147 < len__9523__auto___21146)){
args__9530__auto__.push((arguments[i__9524__auto___21147]));

var G__21148 = (i__9524__auto___21147 + (1));
i__9524__auto___21147 = G__21148;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq22941){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22941));
=======
taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq21145){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21145));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
<<<<<<< HEAD
var G__22946 = arguments.length;
switch (G__22946) {
=======
var G__21150 = arguments.length;
switch (G__21150) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

<<<<<<< HEAD
var sentinel_22955 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_22955){
return (function taoensso$encore$oget_in(var_args){
var G__22951 = arguments.length;
switch (G__22951) {
=======
var sentinel_21159 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_21159){
return (function taoensso$encore$oget_in(var_args){
var G__21155 = arguments.length;
switch (G__21155) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(sentinel_22955))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_22955){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_22955))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_22955){
=======
});})(sentinel_21159))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_21159){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_21159))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_21159){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
<<<<<<< HEAD
var o__$2 = (function (){var G__22952 = o__$1;
var G__22953 = cljs.core.first(ks__$1);
var G__22954 = sentinel_22955;
return goog.object.get(G__22952,G__22953,G__22954);
})();
if((o__$2 === sentinel_22955)){
return not_found;
} else {
var G__22957 = o__$2;
var G__22958 = cljs.core.next(ks__$1);
o__$1 = G__22957;
ks__$1 = G__22958;
=======
var o__$2 = (function (){var G__21156 = o__$1;
var G__21157 = cljs.core.first(ks__$1);
var G__21158 = sentinel_21159;
return goog.object.get(G__21156,G__21157,G__21158);
})();
if((o__$2 === sentinel_21159)){
return not_found;
} else {
var G__21161 = o__$2;
var G__21162 = cljs.core.next(ks__$1);
o__$1 = G__21161;
ks__$1 = G__21162;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return o__$1;
}
break;
}
<<<<<<< HEAD
});})(sentinel_22955))
=======
});})(sentinel_21159))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
<<<<<<< HEAD
var G__22963 = arguments.length;
switch (G__22963) {
=======
var G__21167 = arguments.length;
switch (G__21167) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___22970 = arguments.length;
var i__9525__auto___22971 = (0);
while(true){
if((i__9525__auto___22971 < len__9524__auto___22970)){
args_arr__9547__auto__.push((arguments[i__9525__auto___22971]));

var G__22972 = (i__9525__auto___22971 + (1));
i__9525__auto___22971 = G__22972;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21174 = arguments.length;
var i__9524__auto___21175 = (0);
while(true){
if((i__9524__auto___21175 < len__9523__auto___21174)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21175]));

var G__21176 = (i__9524__auto___21175 + (1));
i__9524__auto___21175 = G__21176;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9547__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

<<<<<<< HEAD
taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq22960){
var G__22961 = cljs.core.first(seq22960);
var seq22960__$1 = cljs.core.next(seq22960);
var G__22962 = cljs.core.first(seq22960__$1);
var seq22960__$2 = cljs.core.next(seq22960__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__22961,G__22962,seq22960__$2);
=======
taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq21164){
var G__21165 = cljs.core.first(seq21164);
var seq21164__$1 = cljs.core.next(seq21164);
var G__21166 = cljs.core.first(seq21164__$1);
var seq21164__$2 = cljs.core.next(seq21164__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__21165,G__21166,seq21164__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
<<<<<<< HEAD
var G__22968 = arguments.length;
switch (G__22968) {
=======
var G__21172 = arguments.length;
switch (G__21172) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___22974 = arguments.length;
var i__9525__auto___22975 = (0);
while(true){
if((i__9525__auto___22975 < len__9524__auto___22974)){
args_arr__9547__auto__.push((arguments[i__9525__auto___22975]));

var G__22976 = (i__9525__auto___22975 + (1));
i__9525__auto___22975 = G__22976;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21178 = arguments.length;
var i__9524__auto___21179 = (0);
while(true){
if((i__9524__auto___21179 < len__9523__auto___21178)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21179]));

var G__21180 = (i__9524__auto___21179 + (1));
i__9524__auto___21179 = G__21180;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9547__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

<<<<<<< HEAD
taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq22965){
var G__22966 = cljs.core.first(seq22965);
var seq22965__$1 = cljs.core.next(seq22965);
var G__22967 = cljs.core.first(seq22965__$1);
var seq22965__$2 = cljs.core.next(seq22965__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__22966,G__22967,seq22965__$2);
=======
taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq21169){
var G__21170 = cljs.core.first(seq21169);
var seq21169__$1 = cljs.core.next(seq21169);
var G__21171 = cljs.core.first(seq21169__$1);
var seq21169__$2 = cljs.core.next(seq21169__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__21170,G__21171,seq21169__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
<<<<<<< HEAD
var G__22982 = arguments.length;
switch (G__22982) {
=======
var G__21186 = arguments.length;
switch (G__21186) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___22996 = arguments.length;
var i__9525__auto___22997 = (0);
while(true){
if((i__9525__auto___22997 < len__9524__auto___22996)){
args_arr__9547__auto__.push((arguments[i__9525__auto___22997]));

var G__22998 = (i__9525__auto___22997 + (1));
i__9525__auto___22997 = G__22998;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21200 = arguments.length;
var i__9524__auto___21201 = (0);
while(true){
if((i__9524__auto___21201 < len__9523__auto___21200)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21201]));

var G__21202 = (i__9524__auto___21201 + (1));
i__9524__auto___21201 = G__21202;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

<<<<<<< HEAD
taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq22978){
var G__22979 = cljs.core.first(seq22978);
var seq22978__$1 = cljs.core.next(seq22978);
var G__22980 = cljs.core.first(seq22978__$1);
var seq22978__$2 = cljs.core.next(seq22978__$1);
var G__22981 = cljs.core.first(seq22978__$2);
var seq22978__$3 = cljs.core.next(seq22978__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__22979,G__22980,G__22981,seq22978__$3);
=======
taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq21182){
var G__21183 = cljs.core.first(seq21182);
var seq21182__$1 = cljs.core.next(seq21182);
var G__21184 = cljs.core.first(seq21182__$1);
var seq21182__$2 = cljs.core.next(seq21182__$1);
var G__21185 = cljs.core.first(seq21182__$2);
var seq21182__$3 = cljs.core.next(seq21182__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__21183,G__21184,G__21185,seq21182__$3);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
<<<<<<< HEAD
var G__22988 = arguments.length;
switch (G__22988) {
=======
var G__21192 = arguments.length;
switch (G__21192) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___23000 = arguments.length;
var i__9525__auto___23001 = (0);
while(true){
if((i__9525__auto___23001 < len__9524__auto___23000)){
args_arr__9547__auto__.push((arguments[i__9525__auto___23001]));

var G__23002 = (i__9525__auto___23001 + (1));
i__9525__auto___23001 = G__23002;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21204 = arguments.length;
var i__9524__auto___21205 = (0);
while(true){
if((i__9524__auto___21205 < len__9523__auto___21204)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21205]));

var G__21206 = (i__9524__auto___21205 + (1));
i__9524__auto___21205 = G__21206;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

<<<<<<< HEAD
taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq22984){
var G__22985 = cljs.core.first(seq22984);
var seq22984__$1 = cljs.core.next(seq22984);
var G__22986 = cljs.core.first(seq22984__$1);
var seq22984__$2 = cljs.core.next(seq22984__$1);
var G__22987 = cljs.core.first(seq22984__$2);
var seq22984__$3 = cljs.core.next(seq22984__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__22985,G__22986,G__22987,seq22984__$3);
=======
taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq21188){
var G__21189 = cljs.core.first(seq21188);
var seq21188__$1 = cljs.core.next(seq21188);
var G__21190 = cljs.core.first(seq21188__$1);
var seq21188__$2 = cljs.core.next(seq21188__$1);
var G__21191 = cljs.core.first(seq21188__$2);
var seq21188__$3 = cljs.core.next(seq21188__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__21189,G__21190,G__21191,seq21188__$3);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
<<<<<<< HEAD
var G__22994 = arguments.length;
switch (G__22994) {
=======
var G__21198 = arguments.length;
switch (G__21198) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___23004 = arguments.length;
var i__9525__auto___23005 = (0);
while(true){
if((i__9525__auto___23005 < len__9524__auto___23004)){
args_arr__9547__auto__.push((arguments[i__9525__auto___23005]));

var G__23006 = (i__9525__auto___23005 + (1));
i__9525__auto___23005 = G__23006;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21208 = arguments.length;
var i__9524__auto___21209 = (0);
while(true){
if((i__9524__auto___21209 < len__9523__auto___21208)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21209]));

var G__21210 = (i__9524__auto___21209 + (1));
i__9524__auto___21209 = G__21210;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

<<<<<<< HEAD
taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq22990){
var G__22991 = cljs.core.first(seq22990);
var seq22990__$1 = cljs.core.next(seq22990);
var G__22992 = cljs.core.first(seq22990__$1);
var seq22990__$2 = cljs.core.next(seq22990__$1);
var G__22993 = cljs.core.first(seq22990__$2);
var seq22990__$3 = cljs.core.next(seq22990__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__22991,G__22992,G__22993,seq22990__$3);
=======
taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq21194){
var G__21195 = cljs.core.first(seq21194);
var seq21194__$1 = cljs.core.next(seq21194);
var G__21196 = cljs.core.first(seq21194__$1);
var seq21194__$2 = cljs.core.next(seq21194__$1);
var G__21197 = cljs.core.first(seq21194__$2);
var seq21194__$3 = cljs.core.next(seq21194__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__21195,G__21196,G__21197,seq21194__$3);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
<<<<<<< HEAD
var G__23008 = arguments.length;
switch (G__23008) {
=======
var G__21212 = arguments.length;
switch (G__21212) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
<<<<<<< HEAD
var G__23011 = arguments.length;
switch (G__23011) {
=======
var G__21215 = arguments.length;
switch (G__21215) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
<<<<<<< HEAD
var vec__23013 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23013,(0),null);
=======
var vec__21217 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21217,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
<<<<<<< HEAD
var vec__23016 = xs__$1;
var seq__23017 = cljs.core.seq(vec__23016);
var first__23018 = cljs.core.first(seq__23017);
var seq__23017__$1 = cljs.core.next(seq__23017);
var x1 = first__23018;
var xn = seq__23017__$1;
if(xn){
var G__23019 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__23020 = xn;
butlast = G__23019;
xs__$1 = G__23020;
=======
var vec__21220 = xs__$1;
var seq__21221 = cljs.core.seq(vec__21220);
var first__21222 = cljs.core.first(seq__21221);
var seq__21221__$1 = cljs.core.next(seq__21221);
var x1 = first__21222;
var xn = seq__21221__$1;
if(xn){
var G__21223 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__21224 = xn;
butlast = G__21223;
xs__$1 = G__21224;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23023 = arguments.length;
var i__9525__auto___23024 = (0);
while(true){
if((i__9525__auto___23024 < len__9524__auto___23023)){
args__9531__auto__.push((arguments[i__9525__auto___23024]));

var G__23025 = (i__9525__auto___23024 + (1));
i__9525__auto___23024 = G__23025;
=======
var args__9530__auto__ = [];
var len__9523__auto___21227 = arguments.length;
var i__9524__auto___21228 = (0);
while(true){
if((i__9524__auto___21228 < len__9523__auto___21227)){
args__9530__auto__.push((arguments[i__9524__auto___21228]));

var G__21229 = (i__9524__auto___21228 + (1));
i__9524__auto___21228 = G__21229;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.mapply.cljs$lang$applyTo = (function (seq23021){
var G__23022 = cljs.core.first(seq23021);
var seq23021__$1 = cljs.core.next(seq23021);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__23022,seq23021__$1);
=======
taoensso.encore.mapply.cljs$lang$applyTo = (function (seq21225){
var G__21226 = cljs.core.first(seq21225);
var seq21225__$1 = cljs.core.next(seq21225);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__21226,seq21225__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
<<<<<<< HEAD
var G__23030 = arguments.length;
switch (G__23030) {
=======
var G__21234 = arguments.length;
switch (G__21234) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___23032 = arguments.length;
var i__9525__auto___23033 = (0);
while(true){
if((i__9525__auto___23033 < len__9524__auto___23032)){
args_arr__9547__auto__.push((arguments[i__9525__auto___23033]));

var G__23034 = (i__9525__auto___23033 + (1));
i__9525__auto___23033 = G__23034;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21236 = arguments.length;
var i__9524__auto___21237 = (0);
while(true){
if((i__9524__auto___21237 < len__9523__auto___21236)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21237]));

var G__21238 = (i__9524__auto___21237 + (1));
i__9524__auto___21237 = G__21238;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9547__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
});

<<<<<<< HEAD
taoensso.encore.into_all.cljs$lang$applyTo = (function (seq23027){
var G__23028 = cljs.core.first(seq23027);
var seq23027__$1 = cljs.core.next(seq23027);
var G__23029 = cljs.core.first(seq23027__$1);
var seq23027__$2 = cljs.core.next(seq23027__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__23028,G__23029,seq23027__$2);
=======
taoensso.encore.into_all.cljs$lang$applyTo = (function (seq21231){
var G__21232 = cljs.core.first(seq21231);
var seq21231__$1 = cljs.core.next(seq21231);
var G__21233 = cljs.core.first(seq21231__$1);
var seq21231__$2 = cljs.core.next(seq21231__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__21232,G__21233,seq21231__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
<<<<<<< HEAD
var G__23036 = arguments.length;
switch (G__23036) {
=======
var G__21240 = arguments.length;
switch (G__21240) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
<<<<<<< HEAD
var G__23039 = arguments.length;
switch (G__23039) {
=======
var G__21243 = arguments.length;
switch (G__21243) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
<<<<<<< HEAD
var G__23041 = null;
var G__23041__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23041__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__23041__2 = (function (acc,input){
=======
var G__21245 = null;
var G__21245__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21245__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__21245__2 = (function (acc,input){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
<<<<<<< HEAD
G__23041 = function(acc,input){
switch(arguments.length){
case 0:
return G__23041__0.call(this);
case 1:
return G__23041__1.call(this,acc);
case 2:
return G__23041__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23041.cljs$core$IFn$_invoke$arity$0 = G__23041__0;
G__23041.cljs$core$IFn$_invoke$arity$1 = G__23041__1;
G__23041.cljs$core$IFn$_invoke$arity$2 = G__23041__2;
return G__23041;
=======
G__21245 = function(acc,input){
switch(arguments.length){
case 0:
return G__21245__0.call(this);
case 1:
return G__21245__1.call(this,acc);
case 2:
return G__21245__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__21245.cljs$core$IFn$_invoke$arity$0 = G__21245__0;
G__21245.cljs$core$IFn$_invoke$arity$1 = G__21245__1;
G__21245.cljs$core$IFn$_invoke$arity$2 = G__21245__2;
return G__21245;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
<<<<<<< HEAD
return taoensso.encore.revery_QMARK_((function (p1__23042_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__23042_SHARP_));
=======
return taoensso.encore.revery_QMARK_((function (p1__21246_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__21246_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
<<<<<<< HEAD
var G__23044 = arguments.length;
switch (G__23044) {
=======
var G__21248 = arguments.length;
switch (G__21248) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
<<<<<<< HEAD
var b2__21189__auto__ = cljs.core.seq(ks);
if(b2__21189__auto__){
var ks_seq = b2__21189__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__21189__auto____$1 = cljs.core.next(ks_seq);
if(b2__21189__auto____$1){
var ks__$1 = b2__21189__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__23045 = f;
var G__23046 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23045,G__23046) : taoensso.encore.kw_identical_QMARK_.call(null,G__23045,G__23046));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__23047 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23047) : f.call(null,G__23047));
})();
if(cljs.core.truth_((function (){var G__23048 = v;
var G__23049 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23048,G__23049) : taoensso.encore.kw_identical_QMARK_.call(null,G__23048,G__23049));
=======
var b2__19393__auto__ = cljs.core.seq(ks);
if(b2__19393__auto__){
var ks_seq = b2__19393__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__19393__auto____$1 = cljs.core.next(ks_seq);
if(b2__19393__auto____$1){
var ks__$1 = b2__19393__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__21249 = f;
var G__21250 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21249,G__21250) : taoensso.encore.kw_identical_QMARK_.call(null,G__21249,G__21250));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__21251 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21251) : f.call(null,G__21251));
})();
if(cljs.core.truth_((function (){var G__21252 = v;
var G__21253 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21252,G__21253) : taoensso.encore.kw_identical_QMARK_.call(null,G__21252,G__21253));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
<<<<<<< HEAD
var G__23052 = arguments.length;
switch (G__23052) {
=======
var G__21256 = arguments.length;
switch (G__21256) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
<<<<<<< HEAD
var G__23059 = arguments.length;
switch (G__23059) {
=======
var G__21263 = arguments.length;
switch (G__21263) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___23061 = arguments.length;
var i__9525__auto___23062 = (0);
while(true){
if((i__9525__auto___23062 < len__9524__auto___23061)){
args_arr__9547__auto__.push((arguments[i__9525__auto___23062]));

var G__23063 = (i__9525__auto___23062 + (1));
i__9525__auto___23062 = G__23063;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21265 = arguments.length;
var i__9524__auto___21266 = (0);
while(true){
if((i__9524__auto___21266 < len__9523__auto___21265)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21266]));

var G__21267 = (i__9524__auto___21266 + (1));
i__9524__auto___21266 = G__21267;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

<<<<<<< HEAD
taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq23055){
var G__23056 = cljs.core.first(seq23055);
var seq23055__$1 = cljs.core.next(seq23055);
var G__23057 = cljs.core.first(seq23055__$1);
var seq23055__$2 = cljs.core.next(seq23055__$1);
var G__23058 = cljs.core.first(seq23055__$2);
var seq23055__$3 = cljs.core.next(seq23055__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__23056,G__23057,G__23058,seq23055__$3);
=======
taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq21259){
var G__21260 = cljs.core.first(seq21259);
var seq21259__$1 = cljs.core.next(seq21259);
var G__21261 = cljs.core.first(seq21259__$1);
var seq21259__$2 = cljs.core.next(seq21259__$1);
var G__21262 = cljs.core.first(seq21259__$2);
var seq21259__$3 = cljs.core.next(seq21259__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__21260,G__21261,G__21262,seq21259__$3);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
<<<<<<< HEAD
var G__23068 = arguments.length;
switch (G__23068) {
=======
var G__21272 = arguments.length;
switch (G__21272) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___23070 = arguments.length;
var i__9525__auto___23071 = (0);
while(true){
if((i__9525__auto___23071 < len__9524__auto___23070)){
args_arr__9547__auto__.push((arguments[i__9525__auto___23071]));

var G__23072 = (i__9525__auto___23071 + (1));
i__9525__auto___23071 = G__23072;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21274 = arguments.length;
var i__9524__auto___21275 = (0);
while(true){
if((i__9524__auto___21275 < len__9523__auto___21274)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21275]));

var G__21276 = (i__9524__auto___21275 + (1));
i__9524__auto___21275 = G__21276;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9547__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

<<<<<<< HEAD
taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq23065){
var G__23066 = cljs.core.first(seq23065);
var seq23065__$1 = cljs.core.next(seq23065);
var G__23067 = cljs.core.first(seq23065__$1);
var seq23065__$2 = cljs.core.next(seq23065__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__23066,G__23067,seq23065__$2);
=======
taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq21269){
var G__21270 = cljs.core.first(seq21269);
var seq21269__$1 = cljs.core.next(seq21269);
var G__21271 = cljs.core.first(seq21269__$1);
var seq21269__$2 = cljs.core.next(seq21269__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__21270,G__21271,seq21269__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
<<<<<<< HEAD
var G__23073 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__23074 = cljs.core.next(s1);
var G__23075 = cljs.core.next(s2);
v = G__23073;
s1 = G__23074;
s2 = G__23075;
=======
var G__21277 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__21278 = cljs.core.next(s1);
var G__21279 = cljs.core.next(s2);
v = G__21277;
s1 = G__21278;
s2 = G__21279;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
<<<<<<< HEAD
var not_found_23082 = {};
taoensso.encore._merge_with = ((function (not_found_23082){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_23082){
=======
var not_found_21286 = {};
taoensso.encore._merge_with = ((function (not_found_21286){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_21286){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
<<<<<<< HEAD
return cljs.core.reduce_kv(((function (not_found_23082){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_23082);
if((lv === not_found_23082)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__23078 = rv;
var G__23079 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23078,G__23079) : taoensso.encore.kw_identical_QMARK_.call(null,G__23078,G__23079));
=======
return cljs.core.reduce_kv(((function (not_found_21286){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_21286);
if((lv === not_found_21286)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__21282 = rv;
var G__21283 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21282,G__21283) : taoensso.encore.kw_identical_QMARK_.call(null,G__21282,G__21283));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__8234__auto__)){
return (cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv));
} else {
return and__8234__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23080 = new_rv;
var G__23081 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23080,G__23081) : taoensso.encore.kw_identical_QMARK_.call(null,G__23080,G__23081));
=======
if(cljs.core.truth_((function (){var G__21284 = new_rv;
var G__21285 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21284,G__21285) : taoensso.encore.kw_identical_QMARK_.call(null,G__21284,G__21285));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
<<<<<<< HEAD
});})(not_found_23082))
,(function (){var or__8247__auto__ = acc;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
});})(not_found_21286))
,(function (){var or__8246__auto__ = acc;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
<<<<<<< HEAD
});})(not_found_23082))
,null,maps);
});})(not_found_23082))
=======
});})(not_found_21286))
,null,maps);
});})(not_found_21286))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23089 = arguments.length;
var i__9525__auto___23090 = (0);
while(true){
if((i__9525__auto___23090 < len__9524__auto___23089)){
args__9531__auto__.push((arguments[i__9525__auto___23090]));

var G__23091 = (i__9525__auto___23090 + (1));
i__9525__auto___23090 = G__23091;
=======
var args__9530__auto__ = [];
var len__9523__auto___21293 = arguments.length;
var i__9524__auto___21294 = (0);
while(true){
if((i__9524__auto___21294 < len__9523__auto___21293)){
args__9530__auto__.push((arguments[i__9524__auto___21294]));

var G__21295 = (i__9524__auto___21294 + (1));
i__9524__auto___21294 = G__21295;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.merge.cljs$lang$applyTo = (function (seq23083){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23083));
=======
taoensso.encore.merge.cljs$lang$applyTo = (function (seq21287){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21287));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23092 = arguments.length;
var i__9525__auto___23093 = (0);
while(true){
if((i__9525__auto___23093 < len__9524__auto___23092)){
args__9531__auto__.push((arguments[i__9525__auto___23093]));

var G__23094 = (i__9525__auto___23093 + (1));
i__9525__auto___23093 = G__23094;
=======
var args__9530__auto__ = [];
var len__9523__auto___21296 = arguments.length;
var i__9524__auto___21297 = (0);
while(true){
if((i__9524__auto___21297 < len__9523__auto___21296)){
args__9530__auto__.push((arguments[i__9524__auto___21297]));

var G__21298 = (i__9524__auto___21297 + (1));
i__9524__auto___21297 = G__21298;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq23084){
var G__23085 = cljs.core.first(seq23084);
var seq23084__$1 = cljs.core.next(seq23084);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__23085,seq23084__$1);
=======
taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq21288){
var G__21289 = cljs.core.first(seq21288);
var seq21288__$1 = cljs.core.next(seq21288);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__21289,seq21288__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23095 = arguments.length;
var i__9525__auto___23096 = (0);
while(true){
if((i__9525__auto___23096 < len__9524__auto___23095)){
args__9531__auto__.push((arguments[i__9525__auto___23096]));

var G__23097 = (i__9525__auto___23096 + (1));
i__9525__auto___23096 = G__23097;
=======
var args__9530__auto__ = [];
var len__9523__auto___21299 = arguments.length;
var i__9524__auto___21300 = (0);
while(true){
if((i__9524__auto___21300 < len__9523__auto___21299)){
args__9530__auto__.push((arguments[i__9524__auto___21300]));

var G__21301 = (i__9524__auto___21300 + (1));
i__9524__auto___21300 = G__21301;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq23086){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23086));
=======
taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq21290){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21290));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23098 = arguments.length;
var i__9525__auto___23099 = (0);
while(true){
if((i__9525__auto___23099 < len__9524__auto___23098)){
args__9531__auto__.push((arguments[i__9525__auto___23099]));

var G__23100 = (i__9525__auto___23099 + (1));
i__9525__auto___23099 = G__23100;
=======
var args__9530__auto__ = [];
var len__9523__auto___21302 = arguments.length;
var i__9524__auto___21303 = (0);
while(true){
if((i__9524__auto___21303 < len__9523__auto___21302)){
args__9530__auto__.push((arguments[i__9524__auto___21303]));

var G__21304 = (i__9524__auto___21303 + (1));
i__9524__auto___21303 = G__21304;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq23087){
var G__23088 = cljs.core.first(seq23087);
var seq23087__$1 = cljs.core.next(seq23087);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__23088,seq23087__$1);
=======
taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq21291){
var G__21292 = cljs.core.first(seq21291);
var seq21291__$1 = cljs.core.next(seq21291);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__21292,seq21291__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = cljs.core.cst$sym$clojure$lang$IAtom;
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
<<<<<<< HEAD
var v1 = (function (){var G__23101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23101) : f.call(null,G__23101));
=======
var v1 = (function (){var G__21305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21305) : f.call(null,G__21305));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref(atom_);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23102 = f;
var G__23103 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23102,G__23103) : taoensso.encore.kw_identical_QMARK_.call(null,G__23102,G__23103));
=======
if(cljs.core.truth_((function (){var G__21306 = f;
var G__21307 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21306,G__21307) : taoensso.encore.kw_identical_QMARK_.call(null,G__21306,G__21307));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
<<<<<<< HEAD
var G__23104 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__23105 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__23104,G__23105) : return$.call(null,G__23104,G__23105));
=======
var G__21308 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__21309 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21308,G__21309) : return$.call(null,G__21308,G__21309));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
<<<<<<< HEAD
var m1 = (cljs.core.truth_((function (){var G__23106 = v1;
var G__23107 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23106,G__23107) : taoensso.encore.kw_identical_QMARK_.call(null,G__23106,G__23107));
=======
var m1 = (cljs.core.truth_((function (){var G__21310 = v1;
var G__21311 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21310,G__21311) : taoensso.encore.kw_identical_QMARK_.call(null,G__21310,G__21311));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
<<<<<<< HEAD
var G__23108 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__23109 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__23108,G__23109) : return$.call(null,G__23108,G__23109));
=======
var G__21312 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__21313 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21312,G__21313) : return$.call(null,G__21312,G__21313));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
<<<<<<< HEAD
var b2__21189__auto__ = cljs.core.seq(ks);
if(b2__21189__auto__){
var ks_seq = b2__21189__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__23110 = f;
var G__23111 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23110,G__23111) : taoensso.encore.kw_identical_QMARK_.call(null,G__23110,G__23111));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__21189__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__21189__auto__))
=======
var b2__19393__auto__ = cljs.core.seq(ks);
if(b2__19393__auto__){
var ks_seq = b2__19393__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__21314 = f;
var G__21315 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21314,G__21315) : taoensso.encore.kw_identical_QMARK_.call(null,G__21314,G__21315));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__19393__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__19393__auto__))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,ks);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
<<<<<<< HEAD
var G__23112 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__23113 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__23112,G__23113) : return$.call(null,G__23112,G__23113));
=======
var G__21316 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__21317 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21316,G__21317) : return$.call(null,G__21316,G__21317));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
<<<<<<< HEAD
var m1 = (cljs.core.truth_((function (){var G__23114 = v1;
var G__23115 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23114,G__23115) : taoensso.encore.kw_identical_QMARK_.call(null,G__23114,G__23115));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__21189__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__21189__auto__))
=======
var m1 = (cljs.core.truth_((function (){var G__21318 = v1;
var G__21319 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21318,G__21319) : taoensso.encore.kw_identical_QMARK_.call(null,G__21318,G__21319));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__19393__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__19393__auto__))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,ks):cljs.core.assoc_in(m0,ks,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
<<<<<<< HEAD
var b2__21189__auto__ = cljs.core.seq(ks);
if(b2__21189__auto__){
var ks_seq = b2__21189__auto__;
=======
var b2__19393__auto__ = cljs.core.seq(ks);
if(b2__19393__auto__){
var ks_seq = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
<<<<<<< HEAD
var G__23116 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__23117 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__23116,G__23117) : return$.call(null,G__23116,G__23117));
=======
var G__21320 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__21321 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21320,G__21321) : return$.call(null,G__21320,G__21321));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
<<<<<<< HEAD
var return_23120 = (function (v0,v1){
=======
var return_21324 = (function (v0,v1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
<<<<<<< HEAD
taoensso.encore.swap_val_BANG_ = ((function (return_23120){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__23119 = arguments.length;
switch (G__23119) {
=======
taoensso.encore.swap_val_BANG_ = ((function (return_21324){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__21323 = arguments.length;
switch (G__21323) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(return_23120))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_23120){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_23120,atom_,k,null,f);
});})(return_23120))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_23120){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_23120,atom_,k,not_found,f);
});})(return_23120))
=======
});})(return_21324))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21324){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_21324,atom_,k,null,f);
});})(return_21324))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21324){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_21324,atom_,k,not_found,f);
});})(return_21324))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

<<<<<<< HEAD
var return_23124 = (function (v0,v1){
=======
var return_21328 = (function (v0,v1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
<<<<<<< HEAD
taoensso.encore.reset_val_BANG_ = ((function (return_23124){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__23123 = arguments.length;
switch (G__23123) {
=======
taoensso.encore.reset_val_BANG_ = ((function (return_21328){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__21327 = arguments.length;
switch (G__21327) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(return_23124))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_23124){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_23124,atom_,k,null,val);
});})(return_23124))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_23124){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_23124,atom_,k,not_found,val);
});})(return_23124))
=======
});})(return_21328))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21328){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_21328,atom_,k,null,val);
});})(return_21328))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21328){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_21328,atom_,k,not_found,val);
});})(return_21328))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

<<<<<<< HEAD
var return_23128 = (function (v0,v1){
=======
var return_21332 = (function (v0,v1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
<<<<<<< HEAD
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_23128){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__23127 = arguments.length;
switch (G__23127) {
=======
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_21332){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__21331 = arguments.length;
switch (G__21331) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(return_23128))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_23128){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_23128,atom_,k,null,f);
});})(return_23128))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_23128){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_23128,atom_,k,not_found,f);
});})(return_23128))
=======
});})(return_21332))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21332){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_21332,atom_,k,null,f);
});})(return_21332))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21332){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_21332,atom_,k,not_found,f);
});})(return_21332))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
<<<<<<< HEAD
var G__23131 = arguments.length;
switch (G__23131) {
=======
var G__21335 = arguments.length;
switch (G__21335) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
<<<<<<< HEAD
var vec__23132 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23132,(0),null);
=======
var vec__21336 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21336,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

<<<<<<< HEAD
var not_found_23138 = {};
=======
var not_found_21342 = {};
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
<<<<<<< HEAD
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_23138){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_23138,new_val);
=======
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_21342){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_21342,new_val);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
<<<<<<< HEAD
});})(not_found_23138))
;
var return_23141 = (function (v0,v1){
=======
});})(not_found_21342))
;
var return_21345 = (function (v0,v1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
<<<<<<< HEAD
taoensso.encore.swap_in_BANG_ = ((function (return_23141){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__23140 = arguments.length;
switch (G__23140) {
=======
taoensso.encore.swap_in_BANG_ = ((function (return_21345){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__21344 = arguments.length;
switch (G__21344) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(return_23141))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_23141){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_23141,atom_,f);
});})(return_23141))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_23141){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_23141,atom_,ks,null,f);
});})(return_23141))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_23141){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_23141,atom_,ks,not_found,f);
});})(return_23141))
=======
});})(return_21345))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_21345){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_21345,atom_,f);
});})(return_21345))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21345){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_21345,atom_,ks,null,f);
});})(return_21345))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21345){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_21345,atom_,ks,not_found,f);
});})(return_21345))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

<<<<<<< HEAD
var return_23145 = (function (v0,v1){
=======
var return_21349 = (function (v0,v1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
<<<<<<< HEAD
taoensso.encore.reset_in_BANG_ = ((function (return_23145){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__23144 = arguments.length;
switch (G__23144) {
=======
taoensso.encore.reset_in_BANG_ = ((function (return_21349){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__21348 = arguments.length;
switch (G__21348) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(return_23145))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_23145){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_23145,atom_,val);
});})(return_23145))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_23145){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_23145,atom_,ks,null,val);
});})(return_23145))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_23145){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_23145,atom_,ks,not_found,val);
});})(return_23145))
=======
});})(return_21349))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_21349){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_21349,atom_,val);
});})(return_21349))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21349){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_21349,atom_,ks,null,val);
});})(return_21349))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21349){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_21349,atom_,ks,not_found,val);
});})(return_21349))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

<<<<<<< HEAD
var return_23149 = (function (v0,v1){
=======
var return_21353 = (function (v0,v1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
<<<<<<< HEAD
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_23149){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__23148 = arguments.length;
switch (G__23148) {
=======
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_21353){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__21352 = arguments.length;
switch (G__21352) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(return_23149))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_23149){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_23149,atom_,f);
});})(return_23149))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_23149){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_23149,atom_,ks,null,f);
});})(return_23149))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_23149){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_23149,atom_,ks,not_found,f);
});})(return_23149))
=======
});})(return_21353))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_21353){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_21353,atom_,f);
});})(return_21353))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21353){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_21353,atom_,ks,null,f);
});})(return_21353))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21353){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_21353,atom_,ks,not_found,f);
});})(return_21353))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
<<<<<<< HEAD
taoensso.encore.now_nano = (function (){var b2__21189__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__21189__auto__)){
var perf = b2__21189__auto__;
var b2__21189__auto____$1 = (function (){var or__8247__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
taoensso.encore.now_nano = (function (){var b2__19393__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__19393__auto__)){
var perf = b2__19393__auto__;
var b2__19393__auto____$1 = (function (){var or__8246__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
var or__8246__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
var or__8246__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__8246__auto____$2)){
return or__8246__auto____$2;
} else {
var or__8246__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__8246__auto____$3)){
return or__8246__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
<<<<<<< HEAD
if(cljs.core.truth_(b2__21189__auto____$1)){
var f = b2__21189__auto____$1;
return ((function (f,b2__21189__auto____$1,perf,b2__21189__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__21189__auto____$1,perf,b2__21189__auto__))
} else {
return ((function (b2__21189__auto____$1,perf,b2__21189__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__21189__auto____$1,perf,b2__21189__auto__))
}
} else {
return ((function (b2__21189__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__21189__auto__))
=======
if(cljs.core.truth_(b2__19393__auto____$1)){
var f = b2__19393__auto____$1;
return ((function (f,b2__19393__auto____$1,perf,b2__19393__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__19393__auto____$1,perf,b2__19393__auto__))
} else {
return ((function (b2__19393__auto____$1,perf,b2__19393__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__19393__auto____$1,perf,b2__19393__auto__))
}
} else {
return ((function (b2__19393__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__19393__auto__))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
<<<<<<< HEAD
var G__23159__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__23153 = x1;
var G__23154 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23153,G__23154) : taoensso.encore.kw_identical_QMARK_.call(null,G__23153,G__23154));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__23155 = x2;
var G__23156 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23155,G__23156) : taoensso.encore.kw_identical_QMARK_.call(null,G__23155,G__23156));
=======
var G__21363__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__21357 = x1;
var G__21358 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21357,G__21358) : taoensso.encore.kw_identical_QMARK_.call(null,G__21357,G__21358));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__21359 = x2;
var G__21360 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21359,G__21360) : taoensso.encore.kw_identical_QMARK_.call(null,G__21359,G__21360));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23157 = x1;
var G__23158 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23157,G__23158) : taoensso.encore.kw_identical_QMARK_.call(null,G__23157,G__23158));
=======
if(cljs.core.truth_((function (){var G__21361 = x1;
var G__21362 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21361,G__21362) : taoensso.encore.kw_identical_QMARK_.call(null,G__21361,G__21362));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
<<<<<<< HEAD
var G__23159 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__23160__i = 0, G__23160__a = new Array(arguments.length -  0);
while (G__23160__i < G__23160__a.length) {G__23160__a[G__23160__i] = arguments[G__23160__i + 0]; ++G__23160__i;}
  xs = new cljs.core.IndexedSeq(G__23160__a,0,null);
} 
return G__23159__delegate.call(this,xs);};
G__23159.cljs$lang$maxFixedArity = 0;
G__23159.cljs$lang$applyTo = (function (arglist__23161){
var xs = cljs.core.seq(arglist__23161);
return G__23159__delegate(xs);
});
G__23159.cljs$core$IFn$_invoke$arity$variadic = G__23159__delegate;
return G__23159;
=======
var G__21363 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__21364__i = 0, G__21364__a = new Array(arguments.length -  0);
while (G__21364__i < G__21364__a.length) {G__21364__a[G__21364__i] = arguments[G__21364__i + 0]; ++G__21364__i;}
  xs = new cljs.core.IndexedSeq(G__21364__a,0,null);
} 
return G__21363__delegate.call(this,xs);};
G__21363.cljs$lang$maxFixedArity = 0;
G__21363.cljs$lang$applyTo = (function (arglist__21365){
var xs = cljs.core.seq(arglist__21365);
return G__21363__delegate(xs);
});
G__21363.cljs$core$IFn$_invoke$arity$variadic = G__21363__delegate;
return G__21363;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
<<<<<<< HEAD
var G__23162__delegate = function (args){
return cljs.core.deref((function (){var or__8247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
var G__21366__delegate = function (args){
return cljs.core.deref((function (){var or__8246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__8246__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__8246__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__8246__auto__,cache_))
,null))]);
}
});})(or__8246__auto__,cache_))
),args);
}
})());
};
<<<<<<< HEAD
var G__23162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23163__i = 0, G__23163__a = new Array(arguments.length -  0);
while (G__23163__i < G__23163__a.length) {G__23163__a[G__23163__i] = arguments[G__23163__i + 0]; ++G__23163__i;}
  args = new cljs.core.IndexedSeq(G__23163__a,0,null);
} 
return G__23162__delegate.call(this,args);};
G__23162.cljs$lang$maxFixedArity = 0;
G__23162.cljs$lang$applyTo = (function (arglist__23164){
var args = cljs.core.seq(arglist__23164);
return G__23162__delegate(args);
});
G__23162.cljs$core$IFn$_invoke$arity$variadic = G__23162__delegate;
return G__23162;
=======
var G__21366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21367__i = 0, G__21367__a = new Array(arguments.length -  0);
while (G__21367__i < G__21367__a.length) {G__21367__a[G__21367__i] = arguments[G__21367__i + 0]; ++G__21367__i;}
  args = new cljs.core.IndexedSeq(G__21367__a,0,null);
} 
return G__21366__delegate.call(this,args);};
G__21366.cljs$lang$maxFixedArity = 0;
G__21366.cljs$lang$applyTo = (function (arglist__21368){
var args = cljs.core.seq(arglist__21368);
return G__21366__delegate(args);
});
G__21366.cljs$core$IFn$_invoke$arity$variadic = G__21366__delegate;
return G__21366;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
<<<<<<< HEAD
var G__23166 = arguments.length;
switch (G__23166) {
=======
var G__21370 = arguments.length;
switch (G__21370) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
<<<<<<< HEAD
var e_23190 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
=======
var e_21394 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
<<<<<<< HEAD
}catch (e23167){if((e23167 instanceof Error)){
var e = e23167;
return e;
} else {
throw e23167;

}
}})();
if((e_23190 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1736,"(pos-int? ttl-ms)",ttl_ms,e_23190,null);
=======
}catch (e21371){if((e21371 instanceof Error)){
var e = e21371;
return e;
} else {
throw e21371;

}
}})();
if((e_21394 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1736,"(pos-int? ttl-ms)",ttl_ms,e_21394,null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
<<<<<<< HEAD
var G__23191__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__23168 = a1;
var G__23169 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23168,G__23169) : taoensso.encore.kw_identical_QMARK_.call(null,G__23168,G__23169));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__23170 = a2;
var G__23171 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23170,G__23171) : taoensso.encore.kw_identical_QMARK_.call(null,G__23170,G__23171));
=======
var G__21395__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__21372 = a1;
var G__21373 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21372,G__21373) : taoensso.encore.kw_identical_QMARK_.call(null,G__21372,G__21373));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__21374 = a2;
var G__21375 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21374,G__21375) : taoensso.encore.kw_identical_QMARK_.call(null,G__21374,G__21375));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
<<<<<<< HEAD
var latch_23192 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_23192);
=======
var latch_21396 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_21396);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

return true;
})()
){
<<<<<<< HEAD
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_23192,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_23192,instant,a1,cache_,latch_,ttl_ms__$1){
=======
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_21396,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_21396,instant,a1,cache_,latch_,ttl_ms__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
<<<<<<< HEAD
});})(latch_23192,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__8247__auto__ = m;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
});})(latch_21396,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__8246__auto__ = m;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
<<<<<<< HEAD
});})(latch_23192,instant,a1,cache_,latch_,ttl_ms__$1))
=======
});})(latch_21396,instant,a1,cache_,latch_,ttl_ms__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
} else {
}
} else {
}

<<<<<<< HEAD
var fresh_QMARK_ = (function (){var G__23172 = a1;
var G__23173 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23172,G__23173) : taoensso.encore.kw_identical_QMARK_.call(null,G__23172,G__23173));
=======
var fresh_QMARK_ = (function (){var G__21376 = a1;
var G__21377 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21376,G__21377) : taoensso.encore.kw_identical_QMARK_.call(null,G__21376,G__21377));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__8246__auto__ = (_QMARK_e == null);
if(or__8246__auto__){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref(e.delay);
}
};
<<<<<<< HEAD
var G__23191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23193__i = 0, G__23193__a = new Array(arguments.length -  0);
while (G__23193__i < G__23193__a.length) {G__23193__a[G__23193__i] = arguments[G__23193__i + 0]; ++G__23193__i;}
  args = new cljs.core.IndexedSeq(G__23193__a,0,null);
} 
return G__23191__delegate.call(this,args);};
G__23191.cljs$lang$maxFixedArity = 0;
G__23191.cljs$lang$applyTo = (function (arglist__23194){
var args = cljs.core.seq(arglist__23194);
return G__23191__delegate(args);
});
G__23191.cljs$core$IFn$_invoke$arity$variadic = G__23191__delegate;
return G__23191;
=======
var G__21395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21397__i = 0, G__21397__a = new Array(arguments.length -  0);
while (G__21397__i < G__21397__a.length) {G__21397__a[G__21397__i] = arguments[G__21397__i + 0]; ++G__21397__i;}
  args = new cljs.core.IndexedSeq(G__21397__a,0,null);
} 
return G__21395__delegate.call(this,args);};
G__21395.cljs$lang$maxFixedArity = 0;
G__21395.cljs$lang$applyTo = (function (arglist__21398){
var args = cljs.core.seq(arglist__21398);
return G__21395__delegate(args);
});
G__21395.cljs$core$IFn$_invoke$arity$variadic = G__21395__delegate;
return G__21395;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var fexpr__23176 = (function (x){
var or__8247__auto__ = (x == null);
if(or__8247__auto__){
return or__8247__auto__;
} else {
var fexpr__23178 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__23178.cljs$core$IFn$_invoke$arity$1 ? fexpr__23178.cljs$core$IFn$_invoke$arity$1(x) : fexpr__23178.call(null,x));
}
});
return fexpr__23176(ttl_ms);
=======
if(cljs.core.truth_((function (){var fexpr__21380 = (function (x){
var or__8246__auto__ = (x == null);
if(or__8246__auto__){
return or__8246__auto__;
} else {
var fexpr__21382 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__21382.cljs$core$IFn$_invoke$arity$1 ? fexpr__21382.cljs$core$IFn$_invoke$arity$1(x) : fexpr__21382.call(null,x));
}
});
return fexpr__21380(ttl_ms);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1787,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

<<<<<<< HEAD
var e_23195 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
=======
var e_21399 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
<<<<<<< HEAD
}catch (e23179){if((e23179 instanceof Error)){
var e = e23179;
return e;
} else {
throw e23179;

}
}})();
if((e_23195 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1788,"(pos-int? cache-size)",cache_size,e_23195,null);
=======
}catch (e21383){if((e21383 instanceof Error)){
var e = e21383;
return e;
} else {
throw e21383;

}
}})();
if((e_21399 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1788,"(pos-int? cache-size)",cache_size,e_21399,null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}

var tick_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__8246__auto__ = ttl_ms;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$(cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
<<<<<<< HEAD
var G__23196__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__23180 = a1;
var G__23181 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23180,G__23181) : taoensso.encore.kw_identical_QMARK_.call(null,G__23180,G__23181));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__23182 = a2;
var G__23183 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23182,G__23183) : taoensso.encore.kw_identical_QMARK_.call(null,G__23182,G__23183));
=======
var G__21400__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__21384 = a1;
var G__21385 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21384,G__21385) : taoensso.encore.kw_identical_QMARK_.call(null,G__21384,G__21385));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__21386 = a2;
var G__21387 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21386,G__21387) : taoensso.encore.kw_identical_QMARK_.call(null,G__21386,G__21387));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
<<<<<<< HEAD
var latch_23197 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_23197);
=======
var latch_21401 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_21401);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

return true;
})()
){
if(ttl_ms_QMARK_){
<<<<<<< HEAD
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
=======
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
<<<<<<< HEAD
});})(latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8247__auto__ = m;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
});})(latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8246__auto__ = m;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
<<<<<<< HEAD
});})(latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
=======
});})(latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
} else {
}

<<<<<<< HEAD
var snapshot_23198 = cljs.core.deref(cache_);
var n_to_gc_23199 = (cljs.core.count(snapshot_23198) - cache_size__$1);
if((n_to_gc_23199 > (64))){
var ks_to_gc_23200 = (function (){var G__23184 = n_to_gc_23199;
var G__23185 = ((function (G__23184,snapshot_23198,n_to_gc_23199,latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_23198,k);
return (e.tick_lru + e.tick_lfu);
});})(G__23184,snapshot_23198,n_to_gc_23199,latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__23186 = cljs.core.keys(snapshot_23198);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__23184,G__23185,G__23186) : taoensso.encore.top.call(null,G__23184,G__23185,G__23186));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_23200,snapshot_23198,n_to_gc_23199,latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_23200,snapshot_23198,n_to_gc_23199,latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_23200,snapshot_23198,n_to_gc_23199,latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8247__auto__ = m;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_23200));
});})(ks_to_gc_23200,snapshot_23198,n_to_gc_23199,latch_23197,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
=======
var snapshot_21402 = cljs.core.deref(cache_);
var n_to_gc_21403 = (cljs.core.count(snapshot_21402) - cache_size__$1);
if((n_to_gc_21403 > (64))){
var ks_to_gc_21404 = (function (){var G__21388 = n_to_gc_21403;
var G__21389 = ((function (G__21388,snapshot_21402,n_to_gc_21403,latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_21402,k);
return (e.tick_lru + e.tick_lfu);
});})(G__21388,snapshot_21402,n_to_gc_21403,latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__21390 = cljs.core.keys(snapshot_21402);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__21388,G__21389,G__21390) : taoensso.encore.top.call(null,G__21388,G__21389,G__21390));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_21404,snapshot_21402,n_to_gc_21403,latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_21404,snapshot_21402,n_to_gc_21403,latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_21404,snapshot_21402,n_to_gc_21403,latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8246__auto__ = m;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_21404));
});})(ks_to_gc_21404,snapshot_21402,n_to_gc_21403,latch_21401,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
} else {
}
} else {
}
} else {
}

<<<<<<< HEAD
var fresh_QMARK_ = (function (){var G__23187 = a1;
var G__23188 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23187,G__23188) : taoensso.encore.kw_identical_QMARK_.call(null,G__23187,G__23188));
=======
var fresh_QMARK_ = (function (){var G__21391 = a1;
var G__21392 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21391,G__21392) : taoensso.encore.kw_identical_QMARK_.call(null,G__21391,G__21392));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__8246__auto__ = (_QMARK_e == null);
if(or__8246__auto__){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref(e.delay);
}
};
<<<<<<< HEAD
var G__23196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23201__i = 0, G__23201__a = new Array(arguments.length -  0);
while (G__23201__i < G__23201__a.length) {G__23201__a[G__23201__i] = arguments[G__23201__i + 0]; ++G__23201__i;}
  args = new cljs.core.IndexedSeq(G__23201__a,0,null);
} 
return G__23196__delegate.call(this,args);};
G__23196.cljs$lang$maxFixedArity = 0;
G__23196.cljs$lang$applyTo = (function (arglist__23202){
var args = cljs.core.seq(arglist__23202);
return G__23196__delegate(args);
});
G__23196.cljs$core$IFn$_invoke$arity$variadic = G__23196__delegate;
return G__23196;
=======
var G__21400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21405__i = 0, G__21405__a = new Array(arguments.length -  0);
while (G__21405__i < G__21405__a.length) {G__21405__a[G__21405__i] = arguments[G__21405__i + 0]; ++G__21405__i;}
  args = new cljs.core.IndexedSeq(G__21405__a,0,null);
} 
return G__21400__delegate.call(this,args);};
G__21400.cljs$lang$maxFixedArity = 0;
G__21400.cljs$lang$applyTo = (function (arglist__21406){
var args = cljs.core.seq(arglist__21406);
return G__21400__delegate(args);
});
G__21400.cljs$core$IFn$_invoke$arity$variadic = G__21400__delegate;
return G__21400;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_sid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

<<<<<<< HEAD
var limit_spec_23215 = (function (n,ms){
=======
var limit_spec_21419 = (function (n,ms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
<<<<<<< HEAD
}catch (e23203){if((e23203 instanceof Error)){
var e = e23203;
return e;
} else {
throw e23203;
=======
}catch (e21407){if((e21407 instanceof Error)){
var e = e21407;
return e;
} else {
throw e21407;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1888,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
<<<<<<< HEAD
}catch (e23204){if((e23204 instanceof Error)){
var e = e23204;
return e;
} else {
throw e23204;
=======
}catch (e21408){if((e21408 instanceof Error)){
var e = e21408;
return e;
} else {
throw e21408;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1888,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
<<<<<<< HEAD
taoensso.encore.coerce_limit_specs = ((function (limit_spec_23215){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_23215){
return (function (acc,sid,p__23205){
var vec__23206 = p__23205;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_23215(n,ms));
});})(limit_spec_23215))
=======
taoensso.encore.coerce_limit_specs = ((function (limit_spec_21419){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_21419){
return (function (acc,sid,p__21409){
var vec__21410 = p__21409;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21410,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21410,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_21419(n,ms));
});})(limit_spec_21419))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
<<<<<<< HEAD
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_23215){
return (function (acc,p__23209){
var vec__23210 = p__23209;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__8247__auto__ = _QMARK_id;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return cljs.core._vreset_BANG_(i,(function (){var G__23214 = cljs.core._deref(i);
var fexpr__23213 = ((function (G__23214,or__8247__auto__,vec__23210,n,ms,_QMARK_id,i,limit_spec_23215){
return (function (i__$1){
return (i__$1 + (1));
});})(G__23214,or__8247__auto__,vec__23210,n,ms,_QMARK_id,i,limit_spec_23215))
;
return fexpr__23213(G__23214);
})());
}
})(),limit_spec_23215(n,ms));
});})(i,limit_spec_23215))
=======
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_21419){
return (function (acc,p__21413){
var vec__21414 = p__21413;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21414,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21414,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21414,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__8246__auto__ = _QMARK_id;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core._vreset_BANG_(i,(function (){var G__21418 = cljs.core._deref(i);
var fexpr__21417 = ((function (G__21418,or__8246__auto__,vec__21414,n,ms,_QMARK_id,i,limit_spec_21419){
return (function (i__$1){
return (i__$1 + (1));
});})(G__21418,or__8246__auto__,vec__21414,n,ms,_QMARK_id,i,limit_spec_21419))
;
return fexpr__21417(G__21418);
})());
}
})(),limit_spec_21419(n,ms));
});})(i,limit_spec_21419))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
<<<<<<< HEAD
});})(limit_spec_23215))
=======
});})(limit_spec_21419))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
<<<<<<< HEAD
var latch_23222 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_23222);
=======
var latch_21426 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_21426);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

return true;
})()
){
<<<<<<< HEAD
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_23222,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_23222,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_23222,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__21189__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__21189__auto__)){
var s = b2__21189__auto__;
=======
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_21426,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_21426,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_21426,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__19393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__19393__auto__)){
var s = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
<<<<<<< HEAD
});})(latch_23222,instant,latch_,reqs_,specs__$1))
=======
});})(latch_21426,instant,latch_,reqs_,specs__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
<<<<<<< HEAD
});})(latch_23222,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__8247__auto__ = reqs;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
});})(latch_21426,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__8246__auto__ = reqs;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
<<<<<<< HEAD
});})(latch_23222,instant,latch_,reqs_,specs__$1))
=======
});})(latch_21426,instant,latch_,reqs_,specs__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
<<<<<<< HEAD
var b2__21189__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__21189__auto__)){
var s = b2__21189__auto__;
=======
var b2__19393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__19393__auto__)){
var s = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__8246__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return _QMARK_hits;
}
})())){
<<<<<<< HEAD
var b2__21189__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__21189__auto__)){
var h = b2__21189__auto__;
=======
var b2__19393__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__19393__auto__)){
var h = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
<<<<<<< HEAD
var b2__21189__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__21189__auto__)){
var l = b2__21189__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__21189__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__21189__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__21189__auto____$1)){
var e = b2__21189__auto____$1;
=======
var b2__19393__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__19393__auto__)){
var l = b2__19393__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__19393__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__19393__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__19393__auto____$1)){
var e = b2__19393__auto____$1;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
<<<<<<< HEAD
});})(b2__21189__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
=======
});})(b2__19393__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23216 = cmd;
var G__23217 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23216,G__23217) : taoensso.encore.kw_identical_QMARK_.call(null,G__23216,G__23217));
})())){
if(cljs.core.truth_((function (){var G__23218 = req_id;
var G__23219 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23218,G__23219) : taoensso.encore.kw_identical_QMARK_.call(null,G__23218,G__23219));
=======
if(cljs.core.truth_((function (){var G__21420 = cmd;
var G__21421 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21420,G__21421) : taoensso.encore.kw_identical_QMARK_.call(null,G__21420,G__21421));
})())){
if(cljs.core.truth_((function (){var G__21422 = req_id;
var G__21423 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21422,G__21423) : taoensso.encore.kw_identical_QMARK_.call(null,G__21422,G__21423));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23220 = cmd;
var G__23221 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23220,G__23221) : taoensso.encore.kw_identical_QMARK_.call(null,G__23220,G__23221));
=======
if(cljs.core.truth_((function (){var G__21424 = cmd;
var G__21425 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21424,G__21425) : taoensso.encore.kw_identical_QMARK_.call(null,G__21424,G__21425));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,cmd,cljs.core.cst$kw$req_DASH_id,req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
<<<<<<< HEAD
var vec__23223 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223,(1),null);
=======
var vec__21427 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21427,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21427,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
<<<<<<< HEAD
var G__23230 = arguments.length;
switch (G__23230) {
=======
var G__21434 = arguments.length;
switch (G__21434) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___23232 = arguments.length;
var i__9525__auto___23233 = (0);
while(true){
if((i__9525__auto___23233 < len__9524__auto___23232)){
args_arr__9547__auto__.push((arguments[i__9525__auto___23233]));

var G__23234 = (i__9525__auto___23233 + (1));
i__9525__auto___23233 = G__23234;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___21436 = arguments.length;
var i__9524__auto___21437 = (0);
while(true){
if((i__9524__auto___21437 < len__9523__auto___21436)){
args_arr__9546__auto__.push((arguments[i__9524__auto___21437]));

var G__21438 = (i__9524__auto___21437 + (1));
i__9524__auto___21437 = G__21438;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9547__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

<<<<<<< HEAD
taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq23227){
var G__23228 = cljs.core.first(seq23227);
var seq23227__$1 = cljs.core.next(seq23227);
var G__23229 = cljs.core.first(seq23227__$1);
var seq23227__$2 = cljs.core.next(seq23227__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__23228,G__23229,seq23227__$2);
=======
taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq21431){
var G__21432 = cljs.core.first(seq21431);
var seq21431__$1 = cljs.core.next(seq21431);
var G__21433 = cljs.core.first(seq21431__$1);
var seq21431__$2 = cljs.core.next(seq21431__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__21432,G__21433,seq21431__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
<<<<<<< HEAD
var G__23236 = arguments.length;
switch (G__23236) {
=======
var G__21440 = arguments.length;
switch (G__21440) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__8234__auto__ = separator;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__8234__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
<<<<<<< HEAD
var G__23239 = arguments.length;
switch (G__23239) {
=======
var G__21443 = arguments.length;
switch (G__21443) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
<<<<<<< HEAD
var G__23242 = arguments.length;
switch (G__23242) {
=======
var G__21446 = arguments.length;
switch (G__21446) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
<<<<<<< HEAD
var G__23245 = arguments.length;
switch (G__23245) {
=======
var G__21449 = arguments.length;
switch (G__21449) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
<<<<<<< HEAD
var G__23248__delegate = function (args){
var G__23247 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__23247) : replacement.call(null,G__23247));
};
var G__23248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23249__i = 0, G__23249__a = new Array(arguments.length -  0);
while (G__23249__i < G__23249__a.length) {G__23249__a[G__23249__i] = arguments[G__23249__i + 0]; ++G__23249__i;}
  args = new cljs.core.IndexedSeq(G__23249__a,0,null);
} 
return G__23248__delegate.call(this,args);};
G__23248.cljs$lang$maxFixedArity = 0;
G__23248.cljs$lang$applyTo = (function (arglist__23250){
var args = cljs.core.seq(arglist__23250);
return G__23248__delegate(args);
});
G__23248.cljs$core$IFn$_invoke$arity$variadic = G__23248__delegate;
return G__23248;
=======
var G__21452__delegate = function (args){
var G__21451 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__21451) : replacement.call(null,G__21451));
};
var G__21452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21453__i = 0, G__21453__a = new Array(arguments.length -  0);
while (G__21453__i < G__21453__a.length) {G__21453__a[G__21453__i] = arguments[G__21453__i + 0]; ++G__21453__i;}
  args = new cljs.core.IndexedSeq(G__21453__a,0,null);
} 
return G__21452__delegate.call(this,args);};
G__21452.cljs$lang$maxFixedArity = 0;
G__21452.cljs$lang$applyTo = (function (arglist__21454){
var args = cljs.core.seq(arglist__21454);
return G__21452__delegate(args);
});
G__21452.cljs$core$IFn$_invoke$arity$variadic = G__21452__delegate;
return G__21452;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__8246__auto__ = fmt;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23253 = arguments.length;
var i__9525__auto___23254 = (0);
while(true){
if((i__9525__auto___23254 < len__9524__auto___23253)){
args__9531__auto__.push((arguments[i__9525__auto___23254]));

var G__23255 = (i__9525__auto___23254 + (1));
i__9525__auto___23254 = G__23255;
=======
var args__9530__auto__ = [];
var len__9523__auto___21457 = arguments.length;
var i__9524__auto___21458 = (0);
while(true){
if((i__9524__auto___21458 < len__9523__auto___21457)){
args__9530__auto__.push((arguments[i__9524__auto___21458]));

var G__21459 = (i__9524__auto___21458 + (1));
i__9524__auto___21458 = G__21459;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.format.cljs$lang$applyTo = (function (seq23251){
var G__23252 = cljs.core.first(seq23251);
var seq23251__$1 = cljs.core.next(seq23251);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__23252,seq23251__$1);
=======
taoensso.encore.format.cljs$lang$applyTo = (function (seq21455){
var G__21456 = cljs.core.first(seq21455);
var seq21455__$1 = cljs.core.next(seq21455);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__21456,seq21455__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__8246__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23257 = arguments.length;
var i__9525__auto___23258 = (0);
while(true){
if((i__9525__auto___23258 < len__9524__auto___23257)){
args__9531__auto__.push((arguments[i__9525__auto___23258]));

var G__23259 = (i__9525__auto___23258 + (1));
i__9525__auto___23258 = G__23259;
=======
var args__9530__auto__ = [];
var len__9523__auto___21461 = arguments.length;
var i__9524__auto___21462 = (0);
while(true){
if((i__9524__auto___21462 < len__9523__auto___21461)){
args__9530__auto__.push((arguments[i__9524__auto___21462]));

var G__21463 = (i__9524__auto___21462 + (1));
i__9524__auto___21462 = G__21463;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.path.cljs$lang$applyTo = (function (seq23256){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23256));
=======
taoensso.encore.path.cljs$lang$applyTo = (function (seq21460){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21460));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
<<<<<<< HEAD
var G__23261 = arguments.length;
switch (G__23261) {
=======
var G__21465 = arguments.length;
switch (G__21465) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23264 = arguments.length;
var i__9525__auto___23265 = (0);
while(true){
if((i__9525__auto___23265 < len__9524__auto___23264)){
args__9531__auto__.push((arguments[i__9525__auto___23265]));

var G__23266 = (i__9525__auto___23265 + (1));
i__9525__auto___23265 = G__23266;
=======
var args__9530__auto__ = [];
var len__9523__auto___21468 = arguments.length;
var i__9524__auto___21469 = (0);
while(true){
if((i__9524__auto___21469 < len__9523__auto___21468)){
args__9530__auto__.push((arguments[i__9524__auto___21469]));

var G__21470 = (i__9524__auto___21469 + (1));
i__9524__auto___21469 = G__21470;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.into_str.cljs$lang$applyTo = (function (seq23263){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23263));
=======
taoensso.encore.into_str.cljs$lang$applyTo = (function (seq21467){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21467));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
<<<<<<< HEAD
var sentinel_23271 = {};
var nil__GT_sentinel_23272 = ((function (sentinel_23271){
return (function (x){
if((x == null)){
return sentinel_23271;
} else {
return x;
}
});})(sentinel_23271))
;
var sentinel__GT_nil_23273 = ((function (sentinel_23271,nil__GT_sentinel_23272){
return (function (x){
if((x === sentinel_23271)){
=======
var sentinel_21475 = {};
var nil__GT_sentinel_21476 = ((function (sentinel_21475){
return (function (x){
if((x == null)){
return sentinel_21475;
} else {
return x;
}
});})(sentinel_21475))
;
var sentinel__GT_nil_21477 = ((function (sentinel_21475,nil__GT_sentinel_21476){
return (function (x){
if((x === sentinel_21475)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return null;
} else {
return x;
}
<<<<<<< HEAD
});})(sentinel_23271,nil__GT_sentinel_23272))
=======
});})(sentinel_21475,nil__GT_sentinel_21476))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
<<<<<<< HEAD
taoensso.encore.reduce_top = ((function (sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273){
return (function taoensso$encore$reduce_top(var_args){
var G__23270 = arguments.length;
switch (G__23270) {
=======
taoensso.encore.reduce_top = ((function (sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477){
return (function taoensso$encore$reduce_top(var_args){
var G__21474 = arguments.length;
switch (G__21474) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
<<<<<<< HEAD
});})(sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273){
=======
});})(sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__8605__auto__ = coll_size;
var y__8606__auto__ = cljs.core.long$(n);
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
<<<<<<< HEAD
});})(sentinel_23271,nil__GT_sentinel_23272,sentinel__GT_nil_23273))
=======
});})(sentinel_21475,nil__GT_sentinel_21476,sentinel__GT_nil_21477))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
<<<<<<< HEAD
var G__23276 = arguments.length;
switch (G__23276) {
=======
var G__21480 = arguments.length;
switch (G__21480) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
<<<<<<< HEAD
var G__23279 = arguments.length;
switch (G__23279) {
=======
var G__21483 = arguments.length;
switch (G__21483) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23298 = arguments.length;
var i__9525__auto___23299 = (0);
while(true){
if((i__9525__auto___23299 < len__9524__auto___23298)){
args__9531__auto__.push((arguments[i__9525__auto___23299]));

var G__23300 = (i__9525__auto___23299 + (1));
i__9525__auto___23299 = G__23300;
=======
var args__9530__auto__ = [];
var len__9523__auto___21502 = arguments.length;
var i__9524__auto___21503 = (0);
while(true){
if((i__9524__auto___21503 < len__9523__auto___21502)){
args__9530__auto__.push((arguments[i__9524__auto___21503]));

var G__21504 = (i__9524__auto___21503 + (1));
i__9524__auto___21503 = G__21504;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__23294){
var map__23295 = p__23294;
var map__23295__$1 = ((((!((map__23295 == null)))?((((map__23295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23295):map__23295);
var opts = map__23295__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,cljs.core.cst$kw$ms);
taoensso.truss.impl.revery_QMARK_(((function (map__23295,map__23295__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_((function (){var fexpr__23297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null);
return (fexpr__23297.cljs$core$IFn$_invoke$arity$1 ? fexpr__23297.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__23297.call(null,__in));
=======
taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__21498){
var map__21499 = p__21498;
var map__21499__$1 = ((((!((map__21499 == null)))?((((map__21499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21499):map__21499);
var opts = map__21499__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,cljs.core.cst$kw$ms);
taoensso.truss.impl.revery_QMARK_(((function (map__21499,map__21499__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_((function (){var fexpr__21501 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null);
return (fexpr__21501.cljs$core$IFn$_invoke$arity$1 ? fexpr__21501.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__21501.call(null,__in));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2391,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
<<<<<<< HEAD
});})(map__23295,map__23295__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
=======
});})(map__21499,map__21499__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.ms.cljs$lang$applyTo = (function (seq23293){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23293));
=======
taoensso.encore.ms.cljs$lang$applyTo = (function (seq21497){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21497));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
<<<<<<< HEAD
var G__23315__delegate = function (xs){
var b2__21189__auto__ = console.log;
if(cljs.core.truth_(b2__21189__auto__)){
var f = b2__21189__auto__;
=======
var G__21519__delegate = function (xs){
var b2__19393__auto__ = console.log;
if(cljs.core.truth_(b2__19393__auto__)){
var f = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
<<<<<<< HEAD
var G__23315 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__23316__i = 0, G__23316__a = new Array(arguments.length -  0);
while (G__23316__i < G__23316__a.length) {G__23316__a[G__23316__i] = arguments[G__23316__i + 0]; ++G__23316__i;}
  xs = new cljs.core.IndexedSeq(G__23316__a,0,null);
} 
return G__23315__delegate.call(this,xs);};
G__23315.cljs$lang$maxFixedArity = 0;
G__23315.cljs$lang$applyTo = (function (arglist__23317){
var xs = cljs.core.seq(arglist__23317);
return G__23315__delegate(xs);
});
G__23315.cljs$core$IFn$_invoke$arity$variadic = G__23315__delegate;
return G__23315;
})()
:(function() { 
var G__23318__delegate = function (xs){
return null;
};
var G__23318 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__23319__i = 0, G__23319__a = new Array(arguments.length -  0);
while (G__23319__i < G__23319__a.length) {G__23319__a[G__23319__i] = arguments[G__23319__i + 0]; ++G__23319__i;}
  xs = new cljs.core.IndexedSeq(G__23319__a,0,null);
} 
return G__23318__delegate.call(this,xs);};
G__23318.cljs$lang$maxFixedArity = 0;
G__23318.cljs$lang$applyTo = (function (arglist__23320){
var xs = cljs.core.seq(arglist__23320);
return G__23318__delegate(xs);
});
G__23318.cljs$core$IFn$_invoke$arity$variadic = G__23318__delegate;
return G__23318;
=======
var G__21519 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__21520__i = 0, G__21520__a = new Array(arguments.length -  0);
while (G__21520__i < G__21520__a.length) {G__21520__a[G__21520__i] = arguments[G__21520__i + 0]; ++G__21520__i;}
  xs = new cljs.core.IndexedSeq(G__21520__a,0,null);
} 
return G__21519__delegate.call(this,xs);};
G__21519.cljs$lang$maxFixedArity = 0;
G__21519.cljs$lang$applyTo = (function (arglist__21521){
var xs = cljs.core.seq(arglist__21521);
return G__21519__delegate(xs);
});
G__21519.cljs$core$IFn$_invoke$arity$variadic = G__21519__delegate;
return G__21519;
})()
:(function() { 
var G__21522__delegate = function (xs){
return null;
};
var G__21522 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__21523__i = 0, G__21523__a = new Array(arguments.length -  0);
while (G__21523__i < G__21523__a.length) {G__21523__a[G__21523__i] = arguments[G__21523__i + 0]; ++G__21523__i;}
  xs = new cljs.core.IndexedSeq(G__21523__a,0,null);
} 
return G__21522__delegate.call(this,xs);};
G__21522.cljs$lang$maxFixedArity = 0;
G__21522.cljs$lang$applyTo = (function (arglist__21524){
var xs = cljs.core.seq(arglist__21524);
return G__21522__delegate(xs);
});
G__21522.cljs$core$IFn$_invoke$arity$variadic = G__21522__delegate;
return G__21522;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23321 = arguments.length;
var i__9525__auto___23322 = (0);
while(true){
if((i__9525__auto___23322 < len__9524__auto___23321)){
args__9531__auto__.push((arguments[i__9525__auto___23322]));

var G__23323 = (i__9525__auto___23322 + (1));
i__9525__auto___23322 = G__23323;
=======
var args__9530__auto__ = [];
var len__9523__auto___21525 = arguments.length;
var i__9524__auto___21526 = (0);
while(true){
if((i__9524__auto___21526 < len__9523__auto___21525)){
args__9530__auto__.push((arguments[i__9524__auto___21526]));

var G__21527 = (i__9524__auto___21526 + (1));
i__9524__auto___21526 = G__21527;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
<<<<<<< HEAD
var G__23306 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__23306) : taoensso.encore.console_log.call(null,G__23306));
=======
var G__21510 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__21510) : taoensso.encore.console_log.call(null,G__21510));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.logp.cljs$lang$applyTo = (function (seq23305){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23305));
=======
taoensso.encore.logp.cljs$lang$applyTo = (function (seq21509){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21509));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23324 = arguments.length;
var i__9525__auto___23325 = (0);
while(true){
if((i__9525__auto___23325 < len__9524__auto___23324)){
args__9531__auto__.push((arguments[i__9525__auto___23325]));

var G__23326 = (i__9525__auto___23325 + (1));
i__9525__auto___23325 = G__23326;
=======
var args__9530__auto__ = [];
var len__9523__auto___21528 = arguments.length;
var i__9524__auto___21529 = (0);
while(true){
if((i__9524__auto___21529 < len__9523__auto___21528)){
args__9530__auto__.push((arguments[i__9524__auto___21529]));

var G__21530 = (i__9524__auto___21529 + (1));
i__9524__auto___21529 = G__21530;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
<<<<<<< HEAD
var G__23308 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return alert(G__23308);
=======
var G__21512 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return alert(G__21512);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.encore.sayp.cljs$lang$applyTo = (function (seq23307){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23307));
=======
taoensso.encore.sayp.cljs$lang$applyTo = (function (seq21511){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21511));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23327 = arguments.length;
var i__9525__auto___23328 = (0);
while(true){
if((i__9525__auto___23328 < len__9524__auto___23327)){
args__9531__auto__.push((arguments[i__9525__auto___23328]));

var G__23329 = (i__9525__auto___23328 + (1));
i__9525__auto___23328 = G__23329;
=======
var args__9530__auto__ = [];
var len__9523__auto___21531 = arguments.length;
var i__9524__auto___21532 = (0);
while(true){
if((i__9524__auto___21532 < len__9523__auto___21531)){
args__9530__auto__.push((arguments[i__9524__auto___21532]));

var G__21533 = (i__9524__auto___21532 + (1));
i__9524__auto___21532 = G__21533;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
var G__23311 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__23311) : taoensso.encore.console_log.call(null,G__23311));
=======
var G__21515 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__21515) : taoensso.encore.console_log.call(null,G__21515));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.logf.cljs$lang$applyTo = (function (seq23309){
var G__23310 = cljs.core.first(seq23309);
var seq23309__$1 = cljs.core.next(seq23309);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__23310,seq23309__$1);
=======
taoensso.encore.logf.cljs$lang$applyTo = (function (seq21513){
var G__21514 = cljs.core.first(seq21513);
var seq21513__$1 = cljs.core.next(seq21513);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__21514,seq21513__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23330 = arguments.length;
var i__9525__auto___23331 = (0);
while(true){
if((i__9525__auto___23331 < len__9524__auto___23330)){
args__9531__auto__.push((arguments[i__9525__auto___23331]));

var G__23332 = (i__9525__auto___23331 + (1));
i__9525__auto___23331 = G__23332;
=======
var args__9530__auto__ = [];
var len__9523__auto___21534 = arguments.length;
var i__9524__auto___21535 = (0);
while(true){
if((i__9524__auto___21535 < len__9523__auto___21534)){
args__9530__auto__.push((arguments[i__9524__auto___21535]));

var G__21536 = (i__9524__auto___21535 + (1));
i__9524__auto___21535 = G__21536;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
var G__23314 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__23314);
=======
var G__21518 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__21518);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.sayf.cljs$lang$applyTo = (function (seq23312){
var G__23313 = cljs.core.first(seq23312);
var seq23312__$1 = cljs.core.next(seq23312);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__23313,seq23312__$1);
=======
taoensso.encore.sayf.cljs$lang$applyTo = (function (seq21516){
var G__21517 = cljs.core.first(seq21516);
var seq21516__$1 = cljs.core.next(seq21516);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__21517,seq21516__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__21189__auto__)){
var js_win = b2__21189__auto__;
var b2__21189__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__21189__auto____$1)){
var loc = b2__21189__auto____$1;
=======
var b2__19393__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__19393__auto__)){
var js_win = b2__19393__auto__;
var b2__19393__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__19393__auto____$1)){
var loc = b2__19393__auto____$1;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
<<<<<<< HEAD
return (function (){var G__23333 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__23333);
=======
return (function (){var G__21537 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__21537);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})().toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
<<<<<<< HEAD
var e_23351 = (function (){try{if(cljs.core.map_QMARK_(params)){
=======
var e_21555 = (function (){try{if(cljs.core.map_QMARK_(params)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
<<<<<<< HEAD
}catch (e23334){if((e23334 instanceof Error)){
var e = e23334;
return e;
} else {
throw e23334;

}
}})();
if((e_23351 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2694,"(map? params)",params,e_23351,null);
=======
}catch (e21538){if((e21538 instanceof Error)){
var e = e21538;
return e;
} else {
throw e21538;

}
}})();
if((e_21555 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2694,"(map? params)",params,e_21555,null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}

if(cljs.core.truth_((function (){var and__8234__auto__ = typeof FormData !== 'undefined';
if(and__8234__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__8234__auto__;
}
})())){
var form_data = (new FormData());
<<<<<<< HEAD
var seq__23335_23352 = cljs.core.seq(params);
var chunk__23336_23353 = null;
var count__23337_23354 = (0);
var i__23338_23355 = (0);
while(true){
if((i__23338_23355 < count__23337_23354)){
var vec__23339_23356 = chunk__23336_23353.cljs$core$IIndexed$_nth$arity$2(null,i__23338_23355);
var k_23357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339_23356,(0),null);
var v_23358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339_23356,(1),null);
form_data.append(cljs.core.name(k_23357),v_23358);

var G__23359 = seq__23335_23352;
var G__23360 = chunk__23336_23353;
var G__23361 = count__23337_23354;
var G__23362 = (i__23338_23355 + (1));
seq__23335_23352 = G__23359;
chunk__23336_23353 = G__23360;
count__23337_23354 = G__23361;
i__23338_23355 = G__23362;
continue;
} else {
var temp__5290__auto___23363 = cljs.core.seq(seq__23335_23352);
if(temp__5290__auto___23363){
var seq__23335_23364__$1 = temp__5290__auto___23363;
if(cljs.core.chunked_seq_QMARK_(seq__23335_23364__$1)){
var c__9178__auto___23365 = cljs.core.chunk_first(seq__23335_23364__$1);
var G__23366 = cljs.core.chunk_rest(seq__23335_23364__$1);
var G__23367 = c__9178__auto___23365;
var G__23368 = cljs.core.count(c__9178__auto___23365);
var G__23369 = (0);
seq__23335_23352 = G__23366;
chunk__23336_23353 = G__23367;
count__23337_23354 = G__23368;
i__23338_23355 = G__23369;
continue;
} else {
var vec__23342_23370 = cljs.core.first(seq__23335_23364__$1);
var k_23371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23342_23370,(0),null);
var v_23372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23342_23370,(1),null);
form_data.append(cljs.core.name(k_23371),v_23372);

var G__23373 = cljs.core.next(seq__23335_23364__$1);
var G__23374 = null;
var G__23375 = (0);
var G__23376 = (0);
seq__23335_23352 = G__23373;
chunk__23336_23353 = G__23374;
count__23337_23354 = G__23375;
i__23338_23355 = G__23376;
=======
var seq__21539_21556 = cljs.core.seq(params);
var chunk__21540_21557 = null;
var count__21541_21558 = (0);
var i__21542_21559 = (0);
while(true){
if((i__21542_21559 < count__21541_21558)){
var vec__21543_21560 = chunk__21540_21557.cljs$core$IIndexed$_nth$arity$2(null,i__21542_21559);
var k_21561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21543_21560,(0),null);
var v_21562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21543_21560,(1),null);
form_data.append(cljs.core.name(k_21561),v_21562);

var G__21563 = seq__21539_21556;
var G__21564 = chunk__21540_21557;
var G__21565 = count__21541_21558;
var G__21566 = (i__21542_21559 + (1));
seq__21539_21556 = G__21563;
chunk__21540_21557 = G__21564;
count__21541_21558 = G__21565;
i__21542_21559 = G__21566;
continue;
} else {
var temp__5290__auto___21567 = cljs.core.seq(seq__21539_21556);
if(temp__5290__auto___21567){
var seq__21539_21568__$1 = temp__5290__auto___21567;
if(cljs.core.chunked_seq_QMARK_(seq__21539_21568__$1)){
var c__9177__auto___21569 = cljs.core.chunk_first(seq__21539_21568__$1);
var G__21570 = cljs.core.chunk_rest(seq__21539_21568__$1);
var G__21571 = c__9177__auto___21569;
var G__21572 = cljs.core.count(c__9177__auto___21569);
var G__21573 = (0);
seq__21539_21556 = G__21570;
chunk__21540_21557 = G__21571;
count__21541_21558 = G__21572;
i__21542_21559 = G__21573;
continue;
} else {
var vec__21546_21574 = cljs.core.first(seq__21539_21568__$1);
var k_21575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21546_21574,(0),null);
var v_21576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21546_21574,(1),null);
form_data.append(cljs.core.name(k_21575),v_21576);

var G__21577 = cljs.core.next(seq__21539_21568__$1);
var G__21578 = null;
var G__21579 = (0);
var G__21580 = (0);
seq__21539_21556 = G__21577;
chunk__21540_21557 = G__21578;
count__21541_21558 = G__21579;
i__21542_21559 = G__21580;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var fexpr__23347 = ((function (url_encode,adaptive_encode){
=======
if(cljs.core.truth_((function (){var fexpr__21551 = ((function (url_encode,adaptive_encode){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var or__8246__auto__ = (x == null);
if(or__8246__auto__){
return or__8246__auto__;
} else {
<<<<<<< HEAD
var fexpr__23349 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__23349.cljs$core$IFn$_invoke$arity$1 ? fexpr__23349.cljs$core$IFn$_invoke$arity$1(x) : fexpr__23349.call(null,x));
}
});})(url_encode,adaptive_encode))
;
return fexpr__23347(params);
=======
var fexpr__21553 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__21553.cljs$core$IFn$_invoke$arity$1 ? fexpr__21553.cljs$core$IFn$_invoke$arity$1(x) : fexpr__21553.call(null,x));
}
});})(url_encode,adaptive_encode))
;
return fexpr__21551(params);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2706,"([:or nil? map?] params)",params,null,null);
}

<<<<<<< HEAD
var G__23350 = method;
var G__23350__$1 = (((G__23350 instanceof cljs.core.Keyword))?G__23350.fqn:null);
switch (G__23350__$1) {
=======
var G__21554 = method;
var G__21554__$1 = (((G__21554 instanceof cljs.core.Keyword))?G__21554.fqn:null);
switch (G__21554__$1) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23350__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21554__$1)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
<<<<<<< HEAD
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__23379,callback_fn){
var map__23380 = p__23379;
var map__23380__$1 = ((((!((map__23380 == null)))?((((map__23380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23380):map__23380);
var opts = map__23380__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23380__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23380__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23380__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23380__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23380__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23380__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__23384 = ((function (map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
=======
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__21583,callback_fn){
var map__21584 = p__21583;
var map__21584__$1 = ((((!((map__21584 == null)))?((((map__21584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21584):map__21584);
var opts = map__21584__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21584__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21584__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21584__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21584__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21584__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21584__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__21588 = ((function (map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var or__8246__auto__ = (x == null);
if(or__8246__auto__){
return or__8246__auto__;
} else {
<<<<<<< HEAD
var fexpr__23386 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__23386.cljs$core$IFn$_invoke$arity$1 ? fexpr__23386.cljs$core$IFn$_invoke$arity$1(x) : fexpr__23386.call(null,x));
}
});})(map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return fexpr__23384(timeout_ms);
=======
var fexpr__21590 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__21590.cljs$core$IFn$_invoke$arity$1 ? fexpr__21590.cljs$core$IFn$_invoke$arity$1(x) : fexpr__21590.call(null,x));
}
});})(map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return fexpr__21588(timeout_ms);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2738,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

<<<<<<< HEAD
var b2__21189__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__21189__auto__)){
var xhr = b2__21189__auto__;
try{var timeout_ms__$1 = (function (){var or__8247__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
var b2__19393__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__19393__auto__)){
var xhr = b2__19393__auto__;
try{var timeout_ms__$1 = (function (){var or__8246__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return timeout_ms;
}
})();
<<<<<<< HEAD
var xhr_method = (function (){var G__23392 = method;
var G__23392__$1 = (((G__23392 instanceof cljs.core.Keyword))?G__23392.fqn:null);
switch (G__23392__$1) {
=======
var xhr_method = (function (){var G__21596 = method;
var G__21596__$1 = (((G__21596 instanceof cljs.core.Keyword))?G__21596.fqn:null);
switch (G__21596__$1) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23392__$1)].join('')));

}
})();
var vec__23389 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23389,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23389,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__23378_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__23378_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21596__$1)].join('')));

}
})();
var vec__21593 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21593,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21593,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__21582_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__21582_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
<<<<<<< HEAD
var G__23393_23412 = xhr;
var G__23394_23413 = G__23393_23412;
var G__23395_23414 = goog.net.EventType.READY;
var G__23396_23415 = ((function (G__23394_23413,G__23395_23414,G__23393_23412,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__23394_23413,G__23395_23414,G__23393_23412,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__23394_23413,G__23395_23414,G__23396_23415);

var G__23397_23416 = G__23393_23412;
var G__23398_23417 = goog.net.EventType.COMPLETE;
var G__23399_23418 = ((function (G__23397_23416,G__23398_23417,G__23393_23412,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__23400 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__23397_23416,G__23398_23417,G__23393_23412,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__23397_23416,G__23398_23417,G__23393_23412,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
=======
var G__21597_21616 = xhr;
var G__21598_21617 = G__21597_21616;
var G__21599_21618 = goog.net.EventType.READY;
var G__21600_21619 = ((function (G__21598_21617,G__21599_21618,G__21597_21616,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__21598_21617,G__21599_21618,G__21597_21616,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__21598_21617,G__21599_21618,G__21600_21619);

var G__21601_21620 = G__21597_21616;
var G__21602_21621 = goog.net.EventType.COMPLETE;
var G__21603_21622 = ((function (G__21601_21620,G__21602_21621,G__21597_21616,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__21604 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__21601_21620,G__21602_21621,G__21597_21616,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__21601_21620,G__21602_21621,G__21597_21616,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
if(cljs.core.truth_(match_QMARK_("/edn"))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
<<<<<<< HEAD
try{var G__23404 = resp_type__$1;
var G__23404__$1 = (((G__23404 instanceof cljs.core.Keyword))?G__23404.fqn:null);
switch (G__23404__$1) {
=======
try{var G__21608 = resp_type__$1;
var G__21608__$1 = (((G__21608 instanceof cljs.core.Keyword))?G__21608.fqn:null);
switch (G__21608__$1) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23404__$1)].join('')));

}
}catch (e23403){if((e23403 instanceof Error)){
var _e = e23403;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e23403;
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21608__$1)].join('')));

}
}catch (e21607){if((e21607 instanceof Error)){
var _e = e21607;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e21607;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
<<<<<<< HEAD
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23400,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23400,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23400,(2),null);
var G__23405 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__23405) : callback_fn.call(null,G__23405));
});})(G__23397_23416,G__23398_23417,G__23393_23412,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__23397_23416,G__23398_23417,G__23399_23418);


var b2__21189__auto___23420__$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__21189__auto___23420__$1)){
var pf_23421 = b2__21189__auto___23420__$1;
var G__23406_23422 = xhr;
var G__23407_23423 = goog.net.EventType.PROGRESS;
var G__23408_23424 = ((function (G__23406_23422,G__23407_23423,pf_23421,b2__21189__auto___23420__$1,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
=======
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21604,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21604,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21604,(2),null);
var G__21609 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__21609) : callback_fn.call(null,G__21609));
});})(G__21601_21620,G__21602_21621,G__21597_21616,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__21601_21620,G__21602_21621,G__21603_21622);


var b2__19393__auto___21624__$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__19393__auto___21624__$1)){
var pf_21625 = b2__19393__auto___21624__$1;
var G__21610_21626 = xhr;
var G__21611_21627 = goog.net.EventType.PROGRESS;
var G__21612_21628 = ((function (G__21610_21626,G__21611_21627,pf_21625,b2__19393__auto___21624__$1,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__8234__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__8234__auto__;
}
})())?(loaded / total):null);
<<<<<<< HEAD
var G__23409 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_23421.cljs$core$IFn$_invoke$arity$1 ? pf_23421.cljs$core$IFn$_invoke$arity$1(G__23409) : pf_23421.call(null,G__23409));
});})(G__23406_23422,G__23407_23423,pf_23421,b2__21189__auto___23420__$1,timeout_ms__$1,xhr_method,vec__23389,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__21189__auto__,map__23380,map__23380__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listen(G__23406_23422,G__23407_23423,G__23408_23424);
=======
var G__21613 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_21625.cljs$core$IFn$_invoke$arity$1 ? pf_21625.cljs$core$IFn$_invoke$arity$1(G__21613) : pf_21625.call(null,G__21613));
});})(G__21610_21626,G__21611_21627,pf_21625,b2__19393__auto___21624__$1,timeout_ms__$1,xhr_method,vec__21593,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19393__auto__,map__21584,map__21584__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listen(G__21610_21626,G__21611_21627,G__21612_21628);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
}

xhr.setTimeoutInterval((function (){var or__8246__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
<<<<<<< HEAD
}catch (e23387){if((e23387 instanceof Error)){
var e = e23387;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__23388_23425 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__23388_23425) : callback_fn.call(null,G__23388_23425));

return null;
} else {
throw e23387;

}
}} else {
var G__23410_23426 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__23410_23426) : callback_fn.call(null,G__23410_23426));
=======
}catch (e21591){if((e21591 instanceof Error)){
var e = e21591;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__21592_21629 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__21592_21629) : callback_fn.call(null,G__21592_21629));

return null;
} else {
throw e21591;

}
}} else {
var G__21614_21630 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__21614_21630) : callback_fn.call(null,G__21614_21630));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
<<<<<<< HEAD
return clojure.string.replace(clojure.string.replace((function (){var G__23427 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var G__23428 = s;
return encodeURIComponent(G__23427,G__23428);
=======
return clojure.string.replace(clojure.string.replace((function (){var G__21631 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var G__21632 = s;
return encodeURIComponent(G__21631,G__21632);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23435 = arguments.length;
var i__9525__auto___23436 = (0);
while(true){
if((i__9525__auto___23436 < len__9524__auto___23435)){
args__9531__auto__.push((arguments[i__9525__auto___23436]));

var G__23437 = (i__9525__auto___23436 + (1));
i__9525__auto___23436 = G__23437;
=======
var args__9530__auto__ = [];
var len__9523__auto___21639 = arguments.length;
var i__9524__auto___21640 = (0);
while(true){
if((i__9524__auto___21640 < len__9523__auto___21639)){
args__9530__auto__.push((arguments[i__9524__auto___21640]));

var G__21641 = (i__9524__auto___21640 + (1));
i__9524__auto___21640 = G__21641;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__23431){
var vec__23432 = p__23431;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23432,(0),null);
=======
taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21635){
var vec__21636 = p__21635;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq23429){
var G__23430 = cljs.core.first(seq23429);
var seq23429__$1 = cljs.core.next(seq23429);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__23430,seq23429__$1);
=======
taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq21633){
var G__21634 = cljs.core.first(seq21633);
var seq21633__$1 = cljs.core.next(seq21633);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__21634,seq21633__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode((function (){var or__8246__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
<<<<<<< HEAD
return join((function (){var iter__9129__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__23438(s__23439){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__23439__$1 = s__23439;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23439__$1);
if(temp__5290__auto__){
var s__23439__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23439__$2)){
var c__9127__auto__ = cljs.core.chunk_first(s__23439__$2);
var size__9128__auto__ = cljs.core.count(c__9127__auto__);
var b__23441 = cljs.core.chunk_buffer(size__9128__auto__);
if((function (){var i__23440 = (0);
while(true){
if((i__23440 < size__9128__auto__)){
var vec__23442 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9127__auto__,i__23440);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23442,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__23441,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__8247__auto__ = cljs.core.seq(v);
if(or__8247__auto__){
return or__8247__auto__;
=======
return join((function (){var iter__9128__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__21642(s__21643){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__21643__$1 = s__21643;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__21643__$1);
if(temp__5290__auto__){
var s__21643__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21643__$2)){
var c__9126__auto__ = cljs.core.chunk_first(s__21643__$2);
var size__9127__auto__ = cljs.core.count(c__9126__auto__);
var b__21645 = cljs.core.chunk_buffer(size__9127__auto__);
if((function (){var i__21644 = (0);
while(true){
if((i__21644 < size__9127__auto__)){
var vec__21646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9126__auto__,i__21644);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21646,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__21645,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__8246__auto__ = cljs.core.seq(v);
if(or__8246__auto__){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

<<<<<<< HEAD
var G__23448 = (i__23440 + (1));
i__23440 = G__23448;
continue;
} else {
var G__23449 = (i__23440 + (1));
i__23440 = G__23449;
=======
var G__21652 = (i__21644 + (1));
i__21644 = G__21652;
continue;
} else {
var G__21653 = (i__21644 + (1));
i__21644 = G__21653;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons(cljs.core.chunk(b__23441),taoensso$encore$format_query_string_$_iter__23438(cljs.core.chunk_rest(s__23439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23441),null);
}
} else {
var vec__23445 = cljs.core.first(s__23439__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23445,(1),null);
=======
return cljs.core.chunk_cons(cljs.core.chunk(b__21645),taoensso$encore$format_query_string_$_iter__21642(cljs.core.chunk_rest(s__21643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21645),null);
}
} else {
var vec__21649 = cljs.core.first(s__21643__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21649,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21649,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__8246__auto__ = cljs.core.seq(v);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
<<<<<<< HEAD
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__23438(cljs.core.rest(s__23439__$2)));
} else {
var G__23450 = cljs.core.rest(s__23439__$2);
s__23439__$1 = G__23450;
=======
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__21642(cljs.core.rest(s__21643__$2)));
} else {
var G__21654 = cljs.core.rest(s__21643__$2);
s__21643__$1 = G__21654;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__9128__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
<<<<<<< HEAD
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__21189__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__21189__auto__)){
var cur = b2__21189__auto__;
=======
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__19393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__19393__auto__)){
var cur = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23460 = arguments.length;
var i__9525__auto___23461 = (0);
while(true){
if((i__9525__auto___23461 < len__9524__auto___23460)){
args__9531__auto__.push((arguments[i__9525__auto___23461]));

var G__23462 = (i__9525__auto___23461 + (1));
i__9525__auto___23461 = G__23462;
=======
var args__9530__auto__ = [];
var len__9523__auto___21664 = arguments.length;
var i__9524__auto___21665 = (0);
while(true){
if((i__9524__auto___21665 < len__9523__auto___21664)){
args__9530__auto__.push((arguments[i__9524__auto___21665]));

var G__21666 = (i__9524__auto___21665 + (1));
i__9524__auto___21665 = G__21666;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__23453){
var vec__23454 = p__23453;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23454,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23454,(1),null);
=======
taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21657){
var vec__21658 = p__21657;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21658,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21658,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((clojure.string.blank_QMARK_(s)) || (!(taoensso.encore.str_contains_QMARK_(s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
<<<<<<< HEAD
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__23454,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__21189__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__21189__auto__)){
var vec__23457 = b2__21189__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23457,(1),null);
=======
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__21658,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__19393__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__19393__auto__)){
var vec__21661 = b2__19393__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21661,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
<<<<<<< HEAD
});})(s__$1,vec__23454,keywordize_QMARK_,encoding))
=======
});})(s__$1,vec__21658,keywordize_QMARK_,encoding))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq23451){
var G__23452 = cljs.core.first(seq23451);
var seq23451__$1 = cljs.core.next(seq23451);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__23452,seq23451__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__23463 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__21189__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__21189__auto__)){
var qstr = b2__21189__auto__;
=======
taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq21655){
var G__21656 = cljs.core.first(seq21655);
var seq21655__$1 = cljs.core.next(seq21655);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__21656,seq21655__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__21667 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21667,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21667,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__19393__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__19393__auto__)){
var qstr = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
<<<<<<< HEAD
var G__23466__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__23466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23467__i = 0, G__23467__a = new Array(arguments.length -  0);
while (G__23467__i < G__23467__a.length) {G__23467__a[G__23467__i] = arguments[G__23467__i + 0]; ++G__23467__i;}
  args = new cljs.core.IndexedSeq(G__23467__a,0,null);
} 
return G__23466__delegate.call(this,args);};
G__23466.cljs$lang$maxFixedArity = 0;
G__23466.cljs$lang$applyTo = (function (arglist__23468){
var args = cljs.core.seq(arglist__23468);
return G__23466__delegate(args);
});
G__23466.cljs$core$IFn$_invoke$arity$variadic = G__23466__delegate;
return G__23466;
=======
var G__21670__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__21670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21671__i = 0, G__21671__a = new Array(arguments.length -  0);
while (G__21671__i < G__21671__a.length) {G__21671__a[G__21671__i] = arguments[G__21671__i + 0]; ++G__21671__i;}
  args = new cljs.core.IndexedSeq(G__21671__a,0,null);
} 
return G__21670__delegate.call(this,args);};
G__21670.cljs$lang$maxFixedArity = 0;
G__21670.cljs$lang$applyTo = (function (arglist__21672){
var args = cljs.core.seq(arglist__21672);
return G__21670__delegate(args);
});
G__21670.cljs$core$IFn$_invoke$arity$variadic = G__21670__delegate;
return G__21670;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,f,cljs.core.cst$kw$type,cljs.core.type(f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_(x,"*")){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"$"].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$whitelist.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$blacklist.cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x))){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23471 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23471) : match_QMARK_.call(null,G__23471));
=======
if(cljs.core.truth_((function (){var G__21675 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21675) : match_QMARK_.call(null,G__21675));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
<<<<<<< HEAD
var vec__23472 = match_fns;
var seq__23473 = cljs.core.seq(vec__23472);
var first__23474 = cljs.core.first(seq__23473);
var seq__23473__$1 = cljs.core.next(seq__23473);
var m1 = first__23474;
var mn = seq__23473__$1;
if(mn){
return ((function (match_fns,vec__23472,seq__23473,first__23474,seq__23473__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__23472,seq__23473,first__23474,seq__23473__$1,m1,mn,compile1){
return (function (p1__23469_SHARP_){
return (p1__23469_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23469_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__23469_SHARP_.call(null,ns_str));
});})(match_fns,vec__23472,seq__23473,first__23474,seq__23473__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__23472,seq__23473,first__23474,seq__23473__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__23472,seq__23473,first__23474,seq__23473__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__23472,seq__23473,first__23474,seq__23473__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__23475 = match_fns;
var seq__23476 = cljs.core.seq(vec__23475);
var first__23477 = cljs.core.first(seq__23476);
var seq__23476__$1 = cljs.core.next(seq__23476);
var m1 = first__23477;
var mn = seq__23476__$1;
if(mn){
return ((function (match_fns,vec__23475,seq__23476,first__23477,seq__23476__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__23475,seq__23476,first__23477,seq__23476__$1,m1,mn,white,compile1){
return (function (p1__23470_SHARP_){
return (p1__23470_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23470_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__23470_SHARP_.call(null,ns_str));
});})(match_fns,vec__23475,seq__23476,first__23477,seq__23476__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__23475,seq__23476,first__23477,seq__23476__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__23475,seq__23476,first__23477,seq__23476__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__23475,seq__23476,first__23477,seq__23476__$1,m1,mn,white,compile1))
=======
var vec__21676 = match_fns;
var seq__21677 = cljs.core.seq(vec__21676);
var first__21678 = cljs.core.first(seq__21677);
var seq__21677__$1 = cljs.core.next(seq__21677);
var m1 = first__21678;
var mn = seq__21677__$1;
if(mn){
return ((function (match_fns,vec__21676,seq__21677,first__21678,seq__21677__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__21676,seq__21677,first__21678,seq__21677__$1,m1,mn,compile1){
return (function (p1__21673_SHARP_){
return (p1__21673_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21673_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__21673_SHARP_.call(null,ns_str));
});})(match_fns,vec__21676,seq__21677,first__21678,seq__21677__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__21676,seq__21677,first__21678,seq__21677__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__21676,seq__21677,first__21678,seq__21677__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__21676,seq__21677,first__21678,seq__21677__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__21679 = match_fns;
var seq__21680 = cljs.core.seq(vec__21679);
var first__21681 = cljs.core.first(seq__21680);
var seq__21680__$1 = cljs.core.next(seq__21680);
var m1 = first__21681;
var mn = seq__21680__$1;
if(mn){
return ((function (match_fns,vec__21679,seq__21680,first__21681,seq__21680__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__21679,seq__21680,first__21681,seq__21680__$1,m1,mn,white,compile1){
return (function (p1__21674_SHARP_){
return (p1__21674_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21674_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__21674_SHARP_.call(null,ns_str));
});})(match_fns,vec__21679,seq__21680,first__21681,seq__21680__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__21679,seq__21680,first__21681,seq__21680__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__21679,seq__21680,first__21681,seq__21680__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__21679,seq__21680,first__21681,seq__21680__$1,m1,mn,white,compile1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})():null);
if(cljs.core.truth_((function (){var and__8234__auto__ = white;
if(cljs.core.truth_(and__8234__auto__)){
return black;
} else {
return and__8234__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23478 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__23478) : white.call(null,G__23478));
=======
if(cljs.core.truth_((function (){var G__21682 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__21682) : white.call(null,G__21682));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23479 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__23479) : black.call(null,G__23479));
=======
if(cljs.core.truth_((function (){var G__21683 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__21683) : black.call(null,G__21683));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__8980__auto__.call(null,_,msecs,f));
} else {
var m__8980__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__8980__auto____$1.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return cljs.core.cst$kw$timeout_SLASH_pending;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return cljs.core.cst$kw$timeout_SLASH_cancelled;
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto__.call(null,_));
} else {
var m__8980__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto__.call(null,_));
} else {
var m__8980__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto__.call(null,_));
} else {
var m__8980__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto__.call(null,_));
} else {
var m__8980__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto__.call(null,_));
} else {
var m__8980__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto__.call(null,_));
} else {
var m__8980__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
<<<<<<< HEAD
return cljs.core.not((function (){var G__23484 = cljs.core.deref(self__.result__);
var G__23485 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23484,G__23485) : taoensso.encore.kw_identical_QMARK_.call(null,G__23484,G__23485));
=======
return cljs.core.not((function (){var G__21688 = cljs.core.deref(self__.result__);
var G__21689 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21688,G__21689) : taoensso.encore.kw_identical_QMARK_.call(null,G__21688,G__21689));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})());
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
<<<<<<< HEAD
var G__23486 = cljs.core.deref(self__.result__);
var G__23487 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23486,G__23487) : taoensso.encore.kw_identical_QMARK_.call(null,G__23486,G__23487));
=======
var G__21690 = cljs.core.deref(self__.result__);
var G__21691 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21690,G__21691) : taoensso.encore.kw_identical_QMARK_.call(null,G__21690,G__21691));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
<<<<<<< HEAD
var G__23488 = cljs.core.deref(self__.result__);
var G__23489 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23488,G__23489) : taoensso.encore.kw_identical_QMARK_.call(null,G__23488,G__23489));
=======
var G__21692 = cljs.core.deref(self__.result__);
var G__21693 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21692,G__21693) : taoensso.encore.kw_identical_QMARK_.call(null,G__21692,G__21693));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result__,cljs.core.cst$sym$udt], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
<<<<<<< HEAD
var G__23491 = arguments.length;
switch (G__23491) {
=======
var G__21695 = arguments.length;
switch (G__21695) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref(result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
<<<<<<< HEAD
var impl_23493 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_23493,msecs__$1,cas_f);
=======
var impl_21697 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_21697,msecs__$1,cas_f);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

<<<<<<< HEAD
taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__23495){
var map__23496 = p__23495;
var map__23496__$1 = ((((!((map__23496 == null)))?((((map__23496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23496):map__23496);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23496__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23496__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9201__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__23494__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9201__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__23494__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9201__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
=======
taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__21699){
var map__21700 = p__21699;
var map__21700__$1 = ((((!((map__21700 == null)))?((((map__21700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21700):map__21700);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21700__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21700__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9200__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__21698__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9200__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__21698__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9200__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23624 = arguments.length;
var i__9525__auto___23625 = (0);
while(true){
if((i__9525__auto___23625 < len__9524__auto___23624)){
args__9531__auto__.push((arguments[i__9525__auto___23625]));

var G__23626 = (i__9525__auto___23625 + (1));
i__9525__auto___23625 = G__23626;
=======
var args__9530__auto__ = [];
var len__9523__auto___21828 = arguments.length;
var i__9524__auto___21829 = (0);
while(true){
if((i__9524__auto___21829 < len__9523__auto___21828)){
args__9530__auto__.push((arguments[i__9524__auto___21829]));

var G__21830 = (i__9524__auto___21829 + (1));
i__9524__auto___21829 = G__21830;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__23504){
var vec__23505 = p__23504;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__8247__auto__ = type;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__21708){
var vec__21709 = p__21708;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21709,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21709,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__8246__auto__ = type;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.round.cljs$lang$applyTo = (function (seq23502){
var G__23503 = cljs.core.first(seq23502);
var seq23502__$1 = cljs.core.next(seq23502);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__23503,seq23502__$1);
=======
taoensso.encore.round.cljs$lang$applyTo = (function (seq21706){
var G__21707 = cljs.core.first(seq21706);
var seq21706__$1 = cljs.core.next(seq21706);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__21707,seq21706__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
<<<<<<< HEAD
var G__23509 = arguments.length;
switch (G__23509) {
=======
var G__21713 = arguments.length;
switch (G__21713) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23628 = arguments.length;
var i__9525__auto___23629 = (0);
while(true){
if((i__9525__auto___23629 < len__9524__auto___23628)){
args__9531__auto__.push((arguments[i__9525__auto___23629]));

var G__23630 = (i__9525__auto___23629 + (1));
i__9525__auto___23629 = G__23630;
=======
var args__9530__auto__ = [];
var len__9523__auto___21832 = arguments.length;
var i__9524__auto___21833 = (0);
while(true){
if((i__9524__auto___21833 < len__9523__auto___21832)){
args__9530__auto__.push((arguments[i__9524__auto___21833]));

var G__21834 = (i__9524__auto___21833 + (1));
i__9524__auto___21833 = G__21834;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.join_once.cljs$lang$applyTo = (function (seq23510){
var G__23511 = cljs.core.first(seq23510);
var seq23510__$1 = cljs.core.next(seq23510);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__23511,seq23510__$1);
=======
taoensso.encore.join_once.cljs$lang$applyTo = (function (seq21714){
var G__21715 = cljs.core.first(seq21714);
var seq21714__$1 = cljs.core.next(seq21714);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__21715,seq21714__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
<<<<<<< HEAD
var ids_QMARK_ = taoensso.encore.rsome((function (p__23512){
var vec__23513 = p__23512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23513,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23513,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23513,(2),null);
=======
var ids_QMARK_ = taoensso.encore.rsome((function (p__21716){
var vec__21717 = p__21716;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(2),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
<<<<<<< HEAD
var G__23631__delegate = function (args){
var b2__21189__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__21189__auto__)){
var vec__23516 = b2__21189__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23516,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23516,(1),null);
=======
var G__21835__delegate = function (args){
var b2__19393__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__19393__auto__)){
var vec__21720 = b2__19393__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21720,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21720,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
<<<<<<< HEAD
var G__23631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23632__i = 0, G__23632__a = new Array(arguments.length -  0);
while (G__23632__i < G__23632__a.length) {G__23632__a[G__23632__i] = arguments[G__23632__i + 0]; ++G__23632__i;}
  args = new cljs.core.IndexedSeq(G__23632__a,0,null);
} 
return G__23631__delegate.call(this,args);};
G__23631.cljs$lang$maxFixedArity = 0;
G__23631.cljs$lang$applyTo = (function (arglist__23633){
var args = cljs.core.seq(arglist__23633);
return G__23631__delegate(args);
});
G__23631.cljs$core$IFn$_invoke$arity$variadic = G__23631__delegate;
return G__23631;
=======
var G__21835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21836__i = 0, G__21836__a = new Array(arguments.length -  0);
while (G__21836__i < G__21836__a.length) {G__21836__a[G__21836__i] = arguments[G__21836__i + 0]; ++G__21836__i;}
  args = new cljs.core.IndexedSeq(G__21836__a,0,null);
} 
return G__21835__delegate.call(this,args);};
G__21835.cljs$lang$maxFixedArity = 0;
G__21835.cljs$lang$applyTo = (function (arglist__21837){
var args = cljs.core.seq(arglist__21837);
return G__21835__delegate(args);
});
G__21835.cljs$core$IFn$_invoke$arity$variadic = G__21835__delegate;
return G__21835;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
<<<<<<< HEAD
var G__23634__delegate = function (args){
var b2__21189__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__21189__auto__)){
var backoff = b2__21189__auto__;
=======
var G__21838__delegate = function (args){
var b2__19393__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__19393__auto__)){
var backoff = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
<<<<<<< HEAD
var G__23634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23635__i = 0, G__23635__a = new Array(arguments.length -  0);
while (G__23635__i < G__23635__a.length) {G__23635__a[G__23635__i] = arguments[G__23635__i + 0]; ++G__23635__i;}
  args = new cljs.core.IndexedSeq(G__23635__a,0,null);
} 
return G__23634__delegate.call(this,args);};
G__23634.cljs$lang$maxFixedArity = 0;
G__23634.cljs$lang$applyTo = (function (arglist__23636){
var args = cljs.core.seq(arglist__23636);
return G__23634__delegate(args);
});
G__23634.cljs$core$IFn$_invoke$arity$variadic = G__23634__delegate;
return G__23634;
=======
var G__21838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21839__i = 0, G__21839__a = new Array(arguments.length -  0);
while (G__21839__i < G__21839__a.length) {G__21839__a[G__21839__i] = arguments[G__21839__i + 0]; ++G__21839__i;}
  args = new cljs.core.IndexedSeq(G__21839__a,0,null);
} 
return G__21838__delegate.call(this,args);};
G__21838.cljs$lang$maxFixedArity = 0;
G__21838.cljs$lang$applyTo = (function (arglist__21840){
var args = cljs.core.seq(arglist__21840);
return G__21838__delegate(args);
});
G__21838.cljs$core$IFn$_invoke$arity$variadic = G__21838__delegate;
return G__21838;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
<<<<<<< HEAD
var G__23637__delegate = function (args){
var b2__21189__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__21189__auto__)){
var backoff_ms = b2__21189__auto__;
=======
var G__21841__delegate = function (args){
var b2__19393__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__19393__auto__)){
var backoff_ms = b2__19393__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
<<<<<<< HEAD
var G__23637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23638__i = 0, G__23638__a = new Array(arguments.length -  0);
while (G__23638__i < G__23638__a.length) {G__23638__a[G__23638__i] = arguments[G__23638__i + 0]; ++G__23638__i;}
  args = new cljs.core.IndexedSeq(G__23638__a,0,null);
} 
return G__23637__delegate.call(this,args);};
G__23637.cljs$lang$maxFixedArity = 0;
G__23637.cljs$lang$applyTo = (function (arglist__23639){
var args = cljs.core.seq(arglist__23639);
return G__23637__delegate(args);
});
G__23637.cljs$core$IFn$_invoke$arity$variadic = G__23637__delegate;
return G__23637;
=======
var G__21841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21842__i = 0, G__21842__a = new Array(arguments.length -  0);
while (G__21842__i < G__21842__a.length) {G__21842__a[G__21842__i] = arguments[G__21842__i + 0]; ++G__21842__i;}
  args = new cljs.core.IndexedSeq(G__21842__a,0,null);
} 
return G__21841__delegate.call(this,args);};
G__21841.cljs$lang$maxFixedArity = 0;
G__21841.cljs$lang$applyTo = (function (arglist__21843){
var args = cljs.core.seq(arglist__21843);
return G__21841__delegate(args);
});
G__21841.cljs$core$IFn$_invoke$arity$variadic = G__21841__delegate;
return G__21841;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23640 = arguments.length;
var i__9525__auto___23641 = (0);
while(true){
if((i__9525__auto___23641 < len__9524__auto___23640)){
args__9531__auto__.push((arguments[i__9525__auto___23641]));

var G__23642 = (i__9525__auto___23641 + (1));
i__9525__auto___23641 = G__23642;
=======
var args__9530__auto__ = [];
var len__9523__auto___21844 = arguments.length;
var i__9524__auto___21845 = (0);
while(true){
if((i__9524__auto___21845 < len__9523__auto___21844)){
args__9530__auto__.push((arguments[i__9524__auto___21845]));

var G__21846 = (i__9524__auto___21845 + (1));
i__9524__auto___21845 = G__21846;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__23521){
var vec__23522 = p__23521;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23522,(0),null);
var b2__21189__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__21189__auto__)){
var js_win = b2__21189__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__8247__auto__ = nattempt;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__21725){
var vec__21726 = p__21725;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(0),null);
var b2__19393__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__19393__auto__)){
var js_win = b2__19393__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__8246__auto__ = nattempt;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq23519){
var G__23520 = cljs.core.first(seq23519);
var seq23519__$1 = cljs.core.next(seq23519);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23520,seq23519__$1);
=======
taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq21723){
var G__21724 = cljs.core.first(seq21723);
var seq21723__$1 = cljs.core.next(seq21723);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21724,seq21723__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23643 = arguments.length;
var i__9525__auto___23644 = (0);
while(true){
if((i__9525__auto___23644 < len__9524__auto___23643)){
args__9531__auto__.push((arguments[i__9525__auto___23644]));

var G__23645 = (i__9525__auto___23644 + (1));
i__9525__auto___23644 = G__23645;
=======
var args__9530__auto__ = [];
var len__9523__auto___21847 = arguments.length;
var i__9524__auto___21848 = (0);
while(true){
if((i__9524__auto___21848 < len__9523__auto___21847)){
args__9530__auto__.push((arguments[i__9524__auto___21848]));

var G__21849 = (i__9524__auto___21848 + (1));
i__9524__auto___21848 = G__21849;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23527 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23527) : taoensso.encore.log_QMARK_.call(null,G__23527));
=======
if(cljs.core.truth_((function (){var G__21731 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21731) : taoensso.encore.log_QMARK_.call(null,G__21731));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.tracef.cljs$lang$applyTo = (function (seq23525){
var G__23526 = cljs.core.first(seq23525);
var seq23525__$1 = cljs.core.next(seq23525);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__23526,seq23525__$1);
=======
taoensso.encore.tracef.cljs$lang$applyTo = (function (seq21729){
var G__21730 = cljs.core.first(seq21729);
var seq21729__$1 = cljs.core.next(seq21729);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__21730,seq21729__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23646 = arguments.length;
var i__9525__auto___23647 = (0);
while(true){
if((i__9525__auto___23647 < len__9524__auto___23646)){
args__9531__auto__.push((arguments[i__9525__auto___23647]));

var G__23648 = (i__9525__auto___23647 + (1));
i__9525__auto___23647 = G__23648;
=======
var args__9530__auto__ = [];
var len__9523__auto___21850 = arguments.length;
var i__9524__auto___21851 = (0);
while(true){
if((i__9524__auto___21851 < len__9523__auto___21850)){
args__9530__auto__.push((arguments[i__9524__auto___21851]));

var G__21852 = (i__9524__auto___21851 + (1));
i__9524__auto___21851 = G__21852;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23530 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23530) : taoensso.encore.log_QMARK_.call(null,G__23530));
=======
if(cljs.core.truth_((function (){var G__21734 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21734) : taoensso.encore.log_QMARK_.call(null,G__21734));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.debugf.cljs$lang$applyTo = (function (seq23528){
var G__23529 = cljs.core.first(seq23528);
var seq23528__$1 = cljs.core.next(seq23528);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__23529,seq23528__$1);
=======
taoensso.encore.debugf.cljs$lang$applyTo = (function (seq21732){
var G__21733 = cljs.core.first(seq21732);
var seq21732__$1 = cljs.core.next(seq21732);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__21733,seq21732__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23649 = arguments.length;
var i__9525__auto___23650 = (0);
while(true){
if((i__9525__auto___23650 < len__9524__auto___23649)){
args__9531__auto__.push((arguments[i__9525__auto___23650]));

var G__23651 = (i__9525__auto___23650 + (1));
i__9525__auto___23650 = G__23651;
=======
var args__9530__auto__ = [];
var len__9523__auto___21853 = arguments.length;
var i__9524__auto___21854 = (0);
while(true){
if((i__9524__auto___21854 < len__9523__auto___21853)){
args__9530__auto__.push((arguments[i__9524__auto___21854]));

var G__21855 = (i__9524__auto___21854 + (1));
i__9524__auto___21854 = G__21855;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23533 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23533) : taoensso.encore.log_QMARK_.call(null,G__23533));
=======
if(cljs.core.truth_((function (){var G__21737 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21737) : taoensso.encore.log_QMARK_.call(null,G__21737));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.infof.cljs$lang$applyTo = (function (seq23531){
var G__23532 = cljs.core.first(seq23531);
var seq23531__$1 = cljs.core.next(seq23531);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__23532,seq23531__$1);
=======
taoensso.encore.infof.cljs$lang$applyTo = (function (seq21735){
var G__21736 = cljs.core.first(seq21735);
var seq21735__$1 = cljs.core.next(seq21735);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__21736,seq21735__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23652 = arguments.length;
var i__9525__auto___23653 = (0);
while(true){
if((i__9525__auto___23653 < len__9524__auto___23652)){
args__9531__auto__.push((arguments[i__9525__auto___23653]));

var G__23654 = (i__9525__auto___23653 + (1));
i__9525__auto___23653 = G__23654;
=======
var args__9530__auto__ = [];
var len__9523__auto___21856 = arguments.length;
var i__9524__auto___21857 = (0);
while(true){
if((i__9524__auto___21857 < len__9523__auto___21856)){
args__9530__auto__.push((arguments[i__9524__auto___21857]));

var G__21858 = (i__9524__auto___21857 + (1));
i__9524__auto___21857 = G__21858;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23536 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23536) : taoensso.encore.log_QMARK_.call(null,G__23536));
=======
if(cljs.core.truth_((function (){var G__21740 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21740) : taoensso.encore.log_QMARK_.call(null,G__21740));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.warnf.cljs$lang$applyTo = (function (seq23534){
var G__23535 = cljs.core.first(seq23534);
var seq23534__$1 = cljs.core.next(seq23534);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__23535,seq23534__$1);
=======
taoensso.encore.warnf.cljs$lang$applyTo = (function (seq21738){
var G__21739 = cljs.core.first(seq21738);
var seq21738__$1 = cljs.core.next(seq21738);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__21739,seq21738__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23655 = arguments.length;
var i__9525__auto___23656 = (0);
while(true){
if((i__9525__auto___23656 < len__9524__auto___23655)){
args__9531__auto__.push((arguments[i__9525__auto___23656]));

var G__23657 = (i__9525__auto___23656 + (1));
i__9525__auto___23656 = G__23657;
=======
var args__9530__auto__ = [];
var len__9523__auto___21859 = arguments.length;
var i__9524__auto___21860 = (0);
while(true){
if((i__9524__auto___21860 < len__9523__auto___21859)){
args__9530__auto__.push((arguments[i__9524__auto___21860]));

var G__21861 = (i__9524__auto___21860 + (1));
i__9524__auto___21860 = G__21861;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23539 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23539) : taoensso.encore.log_QMARK_.call(null,G__23539));
=======
if(cljs.core.truth_((function (){var G__21743 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21743) : taoensso.encore.log_QMARK_.call(null,G__21743));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.errorf.cljs$lang$applyTo = (function (seq23537){
var G__23538 = cljs.core.first(seq23537);
var seq23537__$1 = cljs.core.next(seq23537);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__23538,seq23537__$1);
=======
taoensso.encore.errorf.cljs$lang$applyTo = (function (seq21741){
var G__21742 = cljs.core.first(seq21741);
var seq21741__$1 = cljs.core.next(seq21741);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__21742,seq21741__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23658 = arguments.length;
var i__9525__auto___23659 = (0);
while(true){
if((i__9525__auto___23659 < len__9524__auto___23658)){
args__9531__auto__.push((arguments[i__9525__auto___23659]));

var G__23660 = (i__9525__auto___23659 + (1));
i__9525__auto___23659 = G__23660;
=======
var args__9530__auto__ = [];
var len__9523__auto___21862 = arguments.length;
var i__9524__auto___21863 = (0);
while(true){
if((i__9524__auto___21863 < len__9523__auto___21862)){
args__9530__auto__.push((arguments[i__9524__auto___21863]));

var G__21864 = (i__9524__auto___21863 + (1));
i__9524__auto___21863 = G__21864;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23542 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23542) : taoensso.encore.log_QMARK_.call(null,G__23542));
=======
if(cljs.core.truth_((function (){var G__21746 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21746) : taoensso.encore.log_QMARK_.call(null,G__21746));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq23540){
var G__23541 = cljs.core.first(seq23540);
var seq23540__$1 = cljs.core.next(seq23540);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__23541,seq23540__$1);
=======
taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq21744){
var G__21745 = cljs.core.first(seq21744);
var seq21744__$1 = cljs.core.next(seq21744);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__21745,seq21744__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23661 = arguments.length;
var i__9525__auto___23662 = (0);
while(true){
if((i__9525__auto___23662 < len__9524__auto___23661)){
args__9531__auto__.push((arguments[i__9525__auto___23662]));

var G__23663 = (i__9525__auto___23662 + (1));
i__9525__auto___23662 = G__23663;
=======
var args__9530__auto__ = [];
var len__9523__auto___21865 = arguments.length;
var i__9524__auto___21866 = (0);
while(true){
if((i__9524__auto___21866 < len__9523__auto___21865)){
args__9530__auto__.push((arguments[i__9524__auto___21866]));

var G__21867 = (i__9524__auto___21866 + (1));
i__9524__auto___21866 = G__21867;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
<<<<<<< HEAD
if(cljs.core.truth_((function (){var G__23545 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23545) : taoensso.encore.log_QMARK_.call(null,G__23545));
=======
if(cljs.core.truth_((function (){var G__21749 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21749) : taoensso.encore.log_QMARK_.call(null,G__21749));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.reportf.cljs$lang$applyTo = (function (seq23543){
var G__23544 = cljs.core.first(seq23543);
var seq23543__$1 = cljs.core.next(seq23543);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__23544,seq23543__$1);
=======
taoensso.encore.reportf.cljs$lang$applyTo = (function (seq21747){
var G__21748 = cljs.core.first(seq21747);
var seq21747__$1 = cljs.core.next(seq21747);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__21748,seq21747__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23664 = arguments.length;
var i__9525__auto___23665 = (0);
while(true){
if((i__9525__auto___23665 < len__9524__auto___23664)){
args__9531__auto__.push((arguments[i__9525__auto___23665]));

var G__23666 = (i__9525__auto___23665 + (1));
i__9525__auto___23665 = G__23666;
=======
var args__9530__auto__ = [];
var len__9523__auto___21868 = arguments.length;
var i__9524__auto___21869 = (0);
while(true){
if((i__9524__auto___21869 < len__9523__auto___21868)){
args__9530__auto__.push((arguments[i__9524__auto___21869]));

var G__21870 = (i__9524__auto___21869 + (1));
i__9524__auto___21869 = G__21870;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__23548){
var vec__23549 = p__23548;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23549,(0),null);
var comparator = (function (){var or__8247__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__21752){
var vec__21753 = p__21752;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21753,(0),null);
var comparator = (function (){var or__8246__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return taoensso.encore.rcompare;
}
})();
<<<<<<< HEAD
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__23549,_QMARK_comparator){
return (function (p1__23498_SHARP_,p2__23499_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__23498_SHARP_,p2__23499_SHARP_) : comparator.call(null,p1__23498_SHARP_,p2__23499_SHARP_)) > (0))){
return p2__23499_SHARP_;
} else {
return p1__23498_SHARP_;
}
});})(comparator,vec__23549,_QMARK_comparator))
=======
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__21753,_QMARK_comparator){
return (function (p1__21702_SHARP_,p2__21703_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__21702_SHARP_,p2__21703_SHARP_) : comparator.call(null,p1__21702_SHARP_,p2__21703_SHARP_)) > (0))){
return p2__21703_SHARP_;
} else {
return p1__21702_SHARP_;
}
});})(comparator,vec__21753,_QMARK_comparator))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.greatest.cljs$lang$applyTo = (function (seq23546){
var G__23547 = cljs.core.first(seq23546);
var seq23546__$1 = cljs.core.next(seq23546);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__23547,seq23546__$1);
=======
taoensso.encore.greatest.cljs$lang$applyTo = (function (seq21750){
var G__21751 = cljs.core.first(seq21750);
var seq21750__$1 = cljs.core.next(seq21750);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__21751,seq21750__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23667 = arguments.length;
var i__9525__auto___23668 = (0);
while(true){
if((i__9525__auto___23668 < len__9524__auto___23667)){
args__9531__auto__.push((arguments[i__9525__auto___23668]));

var G__23669 = (i__9525__auto___23668 + (1));
i__9525__auto___23668 = G__23669;
=======
var args__9530__auto__ = [];
var len__9523__auto___21871 = arguments.length;
var i__9524__auto___21872 = (0);
while(true){
if((i__9524__auto___21872 < len__9523__auto___21871)){
args__9530__auto__.push((arguments[i__9524__auto___21872]));

var G__21873 = (i__9524__auto___21872 + (1));
i__9524__auto___21872 = G__21873;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__23554){
var vec__23555 = p__23554;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,(0),null);
var comparator = (function (){var or__8247__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__21758){
var vec__21759 = p__21758;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21759,(0),null);
var comparator = (function (){var or__8246__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return taoensso.encore.rcompare;
}
})();
<<<<<<< HEAD
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__23555,_QMARK_comparator){
return (function (p1__23500_SHARP_,p2__23501_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__23500_SHARP_,p2__23501_SHARP_) : comparator.call(null,p1__23500_SHARP_,p2__23501_SHARP_)) < (0))){
return p2__23501_SHARP_;
} else {
return p1__23500_SHARP_;
}
});})(comparator,vec__23555,_QMARK_comparator))
=======
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__21759,_QMARK_comparator){
return (function (p1__21704_SHARP_,p2__21705_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__21704_SHARP_,p2__21705_SHARP_) : comparator.call(null,p1__21704_SHARP_,p2__21705_SHARP_)) < (0))){
return p2__21705_SHARP_;
} else {
return p1__21704_SHARP_;
}
});})(comparator,vec__21759,_QMARK_comparator))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.least.cljs$lang$applyTo = (function (seq23552){
var G__23553 = cljs.core.first(seq23552);
var seq23552__$1 = cljs.core.next(seq23552);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__23553,seq23552__$1);
=======
taoensso.encore.least.cljs$lang$applyTo = (function (seq21756){
var G__21757 = cljs.core.first(seq21756);
var seq21756__$1 = cljs.core.next(seq21756);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__21757,seq21756__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__8246__auto__ = x;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
<<<<<<< HEAD
var fexpr__23562 = (function (p__23563,seen__$1){
while(true){
var vec__23564 = p__23563;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,(0),null);
var xs__$1 = vec__23564;
var b2__21189__auto__ = cljs.core.seq(xs__$1);
if(b2__21189__auto__){
var s = b2__21189__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__23670 = cljs.core.rest(s);
var G__23671 = seen__$1;
p__23563 = G__23670;
seen__$1 = G__23671;
=======
var fexpr__21766 = (function (p__21767,seen__$1){
while(true){
var vec__21768 = p__21767;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21768,(0),null);
var xs__$1 = vec__21768;
var b2__19393__auto__ = cljs.core.seq(xs__$1);
if(b2__19393__auto__){
var s = b2__19393__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__21874 = cljs.core.rest(s);
var G__21875 = seen__$1;
p__21767 = G__21874;
seen__$1 = G__21875;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
});
<<<<<<< HEAD
return fexpr__23562(xs,seen);
=======
return fexpr__21766(xs,seen);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
<<<<<<< HEAD
var G__23568 = arguments.length;
switch (G__23568) {
=======
var G__21772 = arguments.length;
switch (G__21772) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
<<<<<<< HEAD
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__23569,in$){
var vec__23570 = p__23569;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23570,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23570,(1),null);
=======
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21773,in$){
var vec__21774 = p__21773;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21774,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21774,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
<<<<<<< HEAD
:(cljs.core.truth_((function (){var G__23573 = kf;
var G__23574 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23573,G__23574) : taoensso.encore.kw_identical_QMARK_.call(null,G__23573,G__23574));
=======
:(cljs.core.truth_((function (){var G__21777 = kf;
var G__21778 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21777,G__21778) : taoensso.encore.kw_identical_QMARK_.call(null,G__21777,G__21778));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23673 = arguments.length;
var i__9525__auto___23674 = (0);
while(true){
if((i__9525__auto___23674 < len__9524__auto___23673)){
args__9531__auto__.push((arguments[i__9525__auto___23674]));

var G__23675 = (i__9525__auto___23674 + (1));
i__9525__auto___23674 = G__23675;
=======
var args__9530__auto__ = [];
var len__9523__auto___21877 = arguments.length;
var i__9524__auto___21878 = (0);
while(true){
if((i__9524__auto___21878 < len__9523__auto___21877)){
args__9530__auto__.push((arguments[i__9524__auto___21878]));

var G__21879 = (i__9524__auto___21878 + (1));
i__9524__auto___21878 = G__21879;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__23577){
var vec__23578 = p__23577;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23578,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23578,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__23578,kf,vf){
return (function (_,v){
return v;
});})(vec__23578,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__23578,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__23578,kf,vf))
:(cljs.core.truth_((function (){var G__23581 = kf;
var G__23582 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23581,G__23582) : taoensso.encore.kw_identical_QMARK_.call(null,G__23581,G__23582));
})())?((function (vf__$1,vec__23578,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__23578,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__23578,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__23578,kf,vf))
=======
taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__21781){
var vec__21782 = p__21781;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21782,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21782,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__21782,kf,vf){
return (function (_,v){
return v;
});})(vec__21782,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__21782,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__21782,kf,vf))
:(cljs.core.truth_((function (){var G__21785 = kf;
var G__21786 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21785,G__21786) : taoensso.encore.kw_identical_QMARK_.call(null,G__21785,G__21786));
})())?((function (vf__$1,vec__21782,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__21782,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__21782,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__21782,kf,vf))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.as_map.cljs$lang$applyTo = (function (seq23575){
var G__23576 = cljs.core.first(seq23575);
var seq23575__$1 = cljs.core.next(seq23575);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__23576,seq23575__$1);
=======
taoensso.encore.as_map.cljs$lang$applyTo = (function (seq21779){
var G__21780 = cljs.core.first(seq21779);
var seq21779__$1 = cljs.core.next(seq21779);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__21780,seq21779__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23676 = arguments.length;
var i__9525__auto___23677 = (0);
while(true){
if((i__9525__auto___23677 < len__9524__auto___23676)){
args__9531__auto__.push((arguments[i__9525__auto___23677]));

var G__23678 = (i__9525__auto___23677 + (1));
i__9525__auto___23677 = G__23678;
=======
var args__9530__auto__ = [];
var len__9523__auto___21880 = arguments.length;
var i__9524__auto___21881 = (0);
while(true){
if((i__9524__auto___21881 < len__9523__auto___21880)){
args__9530__auto__.push((arguments[i__9524__auto___21881]));

var G__21882 = (i__9524__auto___21881 + (1));
i__9524__auto___21881 = G__21882;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((2) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9531__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
taoensso.encore.memoized.cljs$lang$applyTo = (function (seq23583){
var G__23584 = cljs.core.first(seq23583);
var seq23583__$1 = cljs.core.next(seq23583);
var G__23585 = cljs.core.first(seq23583__$1);
var seq23583__$2 = cljs.core.next(seq23583__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__23584,G__23585,seq23583__$2);
=======
taoensso.encore.memoized.cljs$lang$applyTo = (function (seq21787){
var G__21788 = cljs.core.first(seq21787);
var seq21787__$1 = cljs.core.next(seq21787);
var G__21789 = cljs.core.first(seq21787__$1);
var seq21787__$2 = cljs.core.next(seq21787__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__21788,G__21789,seq21787__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__8605__auto__ = signed_idx;
var y__8606__auto__ = max_idx;
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
} else {
var x__8598__auto__ = (0);
var y__8599__auto__ = (signed_idx + max_idx);
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23679 = arguments.length;
var i__9525__auto___23680 = (0);
while(true){
if((i__9525__auto___23680 < len__9524__auto___23679)){
args__9531__auto__.push((arguments[i__9525__auto___23680]));

var G__23681 = (i__9525__auto___23680 + (1));
i__9525__auto___23680 = G__23681;
=======
var args__9530__auto__ = [];
var len__9523__auto___21883 = arguments.length;
var i__9524__auto___21884 = (0);
while(true){
if((i__9524__auto___21884 < len__9523__auto___21883)){
args__9530__auto__.push((arguments[i__9524__auto___21884]));

var G__21885 = (i__9524__auto___21884 + (1));
i__9524__auto___21884 = G__21885;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((2) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__23589){
var map__23590 = p__23589;
var map__23590__$1 = ((((!((map__23590 == null)))?((((map__23590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23590):map__23590);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23590__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23590__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__21648__auto__ = (start_idx_STAR_ + max_len);
var n2__21649__auto__ = xlen;
if((n1__21648__auto__ > n2__21649__auto__)){
return n2__21649__auto__;
} else {
return n1__21648__auto__;
=======
taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__21793){
var map__21794 = p__21793;
var map__21794__$1 = ((((!((map__21794 == null)))?((((map__21794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21794):map__21794);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21794__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21794__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__19852__auto__ = (start_idx_STAR_ + max_len);
var n2__19853__auto__ = xlen;
if((n1__19852__auto__ > n2__19853__auto__)){
return n2__19853__auto__;
} else {
return n1__19852__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq23586){
var G__23587 = cljs.core.first(seq23586);
var seq23586__$1 = cljs.core.next(seq23586);
var G__23588 = cljs.core.first(seq23586__$1);
var seq23586__$2 = cljs.core.next(seq23586__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__23587,G__23588,seq23586__$2);
=======
taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq21790){
var G__21791 = cljs.core.first(seq21790);
var seq21790__$1 = cljs.core.next(seq21790);
var G__21792 = cljs.core.first(seq21790__$1);
var seq21790__$2 = cljs.core.next(seq21790__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__21791,G__21792,seq21790__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23682 = arguments.length;
var i__9525__auto___23683 = (0);
while(true){
if((i__9525__auto___23683 < len__9524__auto___23682)){
args__9531__auto__.push((arguments[i__9525__auto___23683]));

var G__23684 = (i__9525__auto___23683 + (1));
i__9525__auto___23683 = G__23684;
=======
var args__9530__auto__ = [];
var len__9523__auto___21886 = arguments.length;
var i__9524__auto___21887 = (0);
while(true){
if((i__9524__auto___21887 < len__9523__auto___21886)){
args__9530__auto__.push((arguments[i__9524__auto___21887]));

var G__21888 = (i__9524__auto___21887 + (1));
i__9524__auto___21887 = G__21888;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((2) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__23595){
var vec__23596 = p__23595;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(0),null);
var vec__23599 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599,(1),null);
=======
taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__21799){
var vec__21800 = p__21799;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(0),null);
var vec__21803 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
taoensso.encore.substr.cljs$lang$applyTo = (function (seq23592){
var G__23593 = cljs.core.first(seq23592);
var seq23592__$1 = cljs.core.next(seq23592);
var G__23594 = cljs.core.first(seq23592__$1);
var seq23592__$2 = cljs.core.next(seq23592__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__23593,G__23594,seq23592__$2);
=======
taoensso.encore.substr.cljs$lang$applyTo = (function (seq21796){
var G__21797 = cljs.core.first(seq21796);
var seq21796__$1 = cljs.core.next(seq21796);
var G__21798 = cljs.core.first(seq21796__$1);
var seq21796__$2 = cljs.core.next(seq21796__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__21797,G__21798,seq21796__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23685 = arguments.length;
var i__9525__auto___23686 = (0);
while(true){
if((i__9525__auto___23686 < len__9524__auto___23685)){
args__9531__auto__.push((arguments[i__9525__auto___23686]));

var G__23687 = (i__9525__auto___23686 + (1));
i__9525__auto___23686 = G__23687;
=======
var args__9530__auto__ = [];
var len__9523__auto___21889 = arguments.length;
var i__9524__auto___21890 = (0);
while(true){
if((i__9524__auto___21890 < len__9523__auto___21889)){
args__9530__auto__.push((arguments[i__9524__auto___21890]));

var G__21891 = (i__9524__auto___21890 + (1));
i__9524__auto___21890 = G__21891;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((2) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__23605){
var vec__23606 = p__23605;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23606,(0),null);
var vec__23609 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(1),null);
=======
taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__21809){
var vec__21810 = p__21809;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21810,(0),null);
var vec__21813 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21813,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21813,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq23602){
var G__23603 = cljs.core.first(seq23602);
var seq23602__$1 = cljs.core.next(seq23602);
var G__23604 = cljs.core.first(seq23602__$1);
var seq23602__$2 = cljs.core.next(seq23602__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23603,G__23604,seq23602__$2);
=======
taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq21806){
var G__21807 = cljs.core.first(seq21806);
var seq21806__$1 = cljs.core.next(seq21806);
var G__21808 = cljs.core.first(seq21806__$1);
var seq21806__$2 = cljs.core.next(seq21806__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21807,G__21808,seq21806__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
<<<<<<< HEAD
var vec__23614 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23614,(0),null);
=======
var vec__21818 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21818,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
<<<<<<< HEAD
var G__23688 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__23689 = cljs.core.next(ks__$1);
var G__23690 = cljs.core.next(vs__$1);
m = G__23688;
ks__$1 = G__23689;
vs__$1 = G__23690;
=======
var G__21892 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__21893 = cljs.core.next(ks__$1);
var G__21894 = cljs.core.next(vs__$1);
m = G__21892;
ks__$1 = G__21893;
vs__$1 = G__21894;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23691 = arguments.length;
var i__9525__auto___23692 = (0);
while(true){
if((i__9525__auto___23692 < len__9524__auto___23691)){
args__9531__auto__.push((arguments[i__9525__auto___23692]));

var G__23693 = (i__9525__auto___23692 + (1));
i__9525__auto___23692 = G__23693;
=======
var args__9530__auto__ = [];
var len__9523__auto___21895 = arguments.length;
var i__9524__auto___21896 = (0);
while(true){
if((i__9524__auto___21896 < len__9523__auto___21895)){
args__9530__auto__.push((arguments[i__9524__auto___21896]));

var G__21897 = (i__9524__auto___21896 + (1));
i__9524__auto___21896 = G__21897;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
<<<<<<< HEAD
var vec__23619 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(2),null);
var f = (cljs.core.truth_((function (){var G__23622 = type;
var G__23623 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23622,G__23623) : taoensso.encore.kw_identical_QMARK_.call(null,G__23622,G__23623));
})())?((function (vec__23619,type,ks,valf){
return (function (_){
return valf;
});})(vec__23619,type,ks,valf))
=======
var vec__21823 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21823,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21823,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21823,(2),null);
var f = (cljs.core.truth_((function (){var G__21826 = type;
var G__21827 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21826,G__21827) : taoensso.encore.kw_identical_QMARK_.call(null,G__21826,G__21827));
})())?((function (vec__21823,type,ks,valf){
return (function (_){
return valf;
});})(vec__21823,type,ks,valf))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
:valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq23617){
var G__23618 = cljs.core.first(seq23617);
var seq23617__$1 = cljs.core.next(seq23617);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__23618,seq23617__$1);
=======
taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq21821){
var G__21822 = cljs.core.first(seq21821);
var seq21821__$1 = cljs.core.next(seq21821);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__21822,seq21821__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

