// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23703 = arguments.length;
var i__9525__auto___23704 = (0);
while(true){
if((i__9525__auto___23704 < len__9524__auto___23703)){
args__9531__auto__.push((arguments[i__9525__auto___23704]));

var G__23705 = (i__9525__auto___23704 + (1));
i__9525__auto___23704 = G__23705;
=======
var args__9530__auto__ = [];
var len__9523__auto___21907 = arguments.length;
var i__9524__auto___21908 = (0);
while(true){
if((i__9524__auto___21908 < len__9523__auto___21907)){
args__9530__auto__.push((arguments[i__9524__auto___21908]));

var G__21909 = (i__9524__auto___21908 + (1));
i__9524__auto___21908 = G__21909;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__23697){
var vec__23698 = p__23697;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23698,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__23698,_opts){
return (function (data){
var map__23701 = data;
var map__23701__$1 = ((((!((map__23701 == null)))?((((map__23701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23701):map__23701);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23701__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
});})(vec__23698,_opts))
=======
taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__21901){
var vec__21902 = p__21901;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21902,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__21902,_opts){
return (function (data){
var map__21905 = data;
var map__21905__$1 = ((((!((map__21905 == null)))?((((map__21905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21905):map__21905);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
});})(vec__21902,_opts))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq23696){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23696));
=======
taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq21900){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21900));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___23715 = arguments.length;
var i__9525__auto___23716 = (0);
while(true){
if((i__9525__auto___23716 < len__9524__auto___23715)){
args__9531__auto__.push((arguments[i__9525__auto___23716]));

var G__23717 = (i__9525__auto___23716 + (1));
i__9525__auto___23716 = G__23717;
=======
var args__9530__auto__ = [];
var len__9523__auto___21919 = arguments.length;
var i__9524__auto___21920 = (0);
while(true){
if((i__9524__auto___21920 < len__9523__auto___21919)){
args__9530__auto__.push((arguments[i__9524__auto___21920]));

var G__21921 = (i__9524__auto___21920 + (1));
i__9524__auto___21920 = G__21921;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

<<<<<<< HEAD
taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__23707){
var vec__23708 = p__23707;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__23708,opts){
return (function (level){
var or__8247__auto__ = (function (){var G__23712 = level;
var G__23712__$1 = (((G__23712 instanceof cljs.core.Keyword))?G__23712.fqn:null);
switch (G__23712__$1) {
=======
taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__21911){
var vec__21912 = p__21911;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21912,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__21912,opts){
return (function (level){
var or__8246__auto__ = (function (){var G__21916 = level;
var G__21916__$1 = (((G__21916 instanceof cljs.core.Keyword))?G__21916.fqn:null);
switch (G__21916__$1) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23712__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21916__$1)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return console.log;
}
<<<<<<< HEAD
});})(vec__23708,opts))
;
return ((function (level__GT_logger,vec__23708,opts){
=======
});})(vec__21912,opts))
;
return ((function (level__GT_logger,vec__21912,opts){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (data){
var temp__5290__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5290__auto__)){
var logger = temp__5290__auto__;
if(cljs.core.truth_((function (){var or__8246__auto__ = cljs.core.cst$kw$raw_DASH_console_QMARK_.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
<<<<<<< HEAD
var output = (function (){var G__23714 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_QMARK_err,null], 0));
var fexpr__23713 = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__23713.cljs$core$IFn$_invoke$arity$1 ? fexpr__23713.cljs$core$IFn$_invoke$arity$1(G__23714) : fexpr__23713.call(null,G__23714));
=======
var output = (function (){var G__21918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_QMARK_err,null], 0));
var fexpr__21917 = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__21917.cljs$core$IFn$_invoke$arity$1 ? fexpr__21917.cljs$core$IFn$_invoke$arity$1(G__21918) : fexpr__21917.call(null,G__21918));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
var args = (function (){var vargs = cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data);
var temp__5288__auto__ = cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5288__auto__)){
var err = temp__5288__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
<<<<<<< HEAD
;})(level__GT_logger,vec__23708,opts))
})():((function (vec__23708,opts){
return (function (data){
return null;
});})(vec__23708,opts))
=======
;})(level__GT_logger,vec__21912,opts))
})():((function (vec__21912,opts){
return (function (data){
return null;
});})(vec__21912,opts))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq23706){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23706));
=======
taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq21910){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21910));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
