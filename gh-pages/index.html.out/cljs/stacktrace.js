// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__9299__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9303__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__))
,cljs.core.cst$kw$default,hierarchy__9303__auto__,method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__8246__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
<<<<<<< HEAD
var vec__16336 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__16342,p__16343){
var vec__16344 = p__16342;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(1),null);
var vec__16347 = p__16343;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(1),null);
=======
var vec__15736 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__15742,p__15743){
var vec__15744 = p__15742;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15744,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15744,(1),null);
var vec__15747 = p__15743;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15747,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15747,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
<<<<<<< HEAD
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16336,(0),null);
var vec__16339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16336,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16339,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16339,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16350 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__16350,"(","");
} else {
return G__16350;
}
})(),cljs.stacktrace.parse_int((function (){var G__16351 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__16351,")","");
} else {
return G__16351;
}
})()),cljs.stacktrace.parse_int((function (){var G__16352 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__16352,")","");
} else {
return G__16352;
=======
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15736,(0),null);
var vec__15739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15736,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15750 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__15750,"(","");
} else {
return G__15750;
}
})(),cljs.stacktrace.parse_int((function (){var G__15751 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__15751,")","");
} else {
return G__15751;
}
})()),cljs.stacktrace.parse_int((function (){var G__15752 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__15752,")","");
} else {
return G__15752;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
<<<<<<< HEAD
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__16353,file,p__16354){
var map__16355 = p__16353;
var map__16355__$1 = ((((!((map__16355 == null)))?((((map__16355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16355):map__16355);
var repl_env = map__16355__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,cljs.core.cst$kw$port);
var map__16356 = p__16354;
var map__16356__$1 = ((((!((map__16356 == null)))?((((map__16356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16356):map__16356);
var opts = map__16356__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16356__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8247__auto__ = host_port;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__15753,file,p__15754){
var map__15755 = p__15753;
var map__15755__$1 = ((((!((map__15755 == null)))?((((map__15755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15755):map__15755);
var repl_env = map__15755__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,cljs.core.cst$kw$port);
var map__15756 = p__15754;
var map__15756__$1 = ((((!((map__15756 == null)))?((((map__15756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15756):map__15756);
var opts = map__15756__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15756__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8246__auto__ = host_port;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8246__auto__ = (function (){var and__8234__auto__ = asset_path;
if(cljs.core.truth_(and__8234__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),"/"].join('')),"");
} else {
var temp__5288__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5288__auto__)){
var asset_root = temp__5288__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
<<<<<<< HEAD
var vec__16359 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(1),null);
var vec__16362 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(2),null);
if(cljs.core.truth_((function (){var and__8235__auto__ = file;
if(cljs.core.truth_(and__8235__auto__)){
var and__8235__auto____$1 = function$;
if(cljs.core.truth_(and__8235__auto____$1)){
var and__8235__auto____$2 = line;
if(cljs.core.truth_(and__8235__auto____$2)){
=======
var vec__15759 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15759,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15759,(1),null);
var vec__15762 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15762,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15762,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15762,(2),null);
if(cljs.core.truth_((function (){var and__8234__auto__ = file;
if(cljs.core.truth_(and__8234__auto__)){
var and__8234__auto____$1 = function$;
if(cljs.core.truth_(and__8234__auto____$1)){
var and__8234__auto____$2 = line;
if(cljs.core.truth_(and__8234__auto____$2)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return column;
} else {
return and__8234__auto____$2;
}
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16367_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__16367_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16366_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__16366_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16365_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16365_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__16368 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16368,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16368,(1),null);
var vec__16371 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16371,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16371,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16371,(2),null);
if(cljs.core.truth_((function (){var and__8235__auto__ = file;
if(cljs.core.truth_(and__8235__auto__)){
var and__8235__auto____$1 = function$;
if(cljs.core.truth_(and__8235__auto____$1)){
var and__8235__auto____$2 = line;
if(cljs.core.truth_(and__8235__auto____$2)){
=======
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15767_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__15767_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15766_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__15766_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15765_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15765_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__15768 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(1),null);
var vec__15771 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(2),null);
if(cljs.core.truth_((function (){var and__8234__auto__ = file;
if(cljs.core.truth_(and__8234__auto__)){
var and__8234__auto____$1 = function$;
if(cljs.core.truth_(and__8234__auto____$1)){
var and__8234__auto____$2 = line;
if(cljs.core.truth_(and__8234__auto____$2)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return column;
} else {
return and__8234__auto____$2;
}
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16376_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__16376_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16375_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__16375_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16374_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16374_SHARP_,"Error");
=======
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15776_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__15776_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15775_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__15775_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15774_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15774_SHARP_,"Error");
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
<<<<<<< HEAD
var vec__16377 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(1),null);
var vec__16380 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(2),null);
if(cljs.core.truth_((function (){var and__8235__auto__ = file;
if(cljs.core.truth_(and__8235__auto__)){
var and__8235__auto____$1 = function$;
if(cljs.core.truth_(and__8235__auto____$1)){
var and__8235__auto____$2 = line;
if(cljs.core.truth_(and__8235__auto____$2)){
=======
var vec__15777 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(1),null);
var vec__15780 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(2),null);
if(cljs.core.truth_((function (){var and__8234__auto__ = file;
if(cljs.core.truth_(and__8234__auto__)){
var and__8234__auto____$1 = function$;
if(cljs.core.truth_(and__8234__auto____$1)){
var and__8234__auto____$2 = line;
if(cljs.core.truth_(and__8234__auto____$2)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return column;
} else {
return and__8234__auto____$2;
}
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16385_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__16385_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16384_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16384_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16383_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16383_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__16386){
var map__16387 = p__16386;
var map__16387__$1 = ((((!((map__16387 == null)))?((((map__16387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16387):map__16387);
var opts = map__16387__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16387__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__16387,map__16387__$1,opts,output_dir){
=======
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15785_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__15785_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15784_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15784_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15783_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15783_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__15786){
var map__15787 = p__15786;
var map__15787__$1 = ((((!((map__15787 == null)))?((((map__15787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15787):map__15787);
var opts = map__15787__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15787__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__15787,map__15787__$1,opts,output_dir){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
<<<<<<< HEAD
var vec__16395 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16395,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16395,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__16398 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16398,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16398,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8235__auto__ = line;
if(cljs.core.truth_(and__8235__auto__)){
=======
var vec__15795 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15795,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15795,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__15798 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15798,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15798,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8234__auto__ = line;
if(cljs.core.truth_(and__8234__auto__)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return !(clojure.string.blank_QMARK_(line));
} else {
return and__8234__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
<<<<<<< HEAD
});})(map__16387,map__16387__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__16401){
var map__16402 = p__16401;
var map__16402__$1 = ((((!((map__16402 == null)))?((((map__16402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16402):map__16402);
var opts = map__16402__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16402__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__16402,map__16402__$1,opts,output_dir){
=======
});})(map__15787,map__15787__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__15801){
var map__15802 = p__15801;
var map__15802__$1 = ((((!((map__15802 == null)))?((((map__15802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15802):map__15802);
var opts = map__15802__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15802__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__15802,map__15802__$1,opts,output_dir){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
<<<<<<< HEAD
var vec__16410 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16410,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16410,(1),null);
var vec__16413 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16413,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16413,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8235__auto__ = line_part;
if(cljs.core.truth_(and__8235__auto__)){
=======
var vec__15810 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15810,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15810,(1),null);
var vec__15813 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15813,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15813,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8234__auto__ = line_part;
if(cljs.core.truth_(and__8234__auto__)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__8234__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
<<<<<<< HEAD
});})(map__16402,map__16402__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__16416){
var map__16417 = p__16416;
var map__16417__$1 = ((((!((map__16417 == null)))?((((map__16417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16417):map__16417);
var opts = map__16417__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__16417,map__16417__$1,opts,output_dir){
=======
});})(map__15802,map__15802__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__15816){
var map__15817 = p__15816;
var map__15817__$1 = ((((!((map__15817 == null)))?((((map__15817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15817):map__15817);
var opts = map__15817__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15817__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__15817,map__15817__$1,opts,output_dir){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__8234__auto__ = x;
if(cljs.core.truth_(and__8234__auto__)){
return !(clojure.string.blank_QMARK_(x));
} else {
return and__8234__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
<<<<<<< HEAD
});})(map__16417,map__16417__$1,opts,output_dir))
;
var process_frame = ((function (map__16417,map__16417__$1,opts,output_dir){
=======
});})(map__15817,map__15817__$1,opts,output_dir))
;
var process_frame = ((function (map__15817,map__15817__$1,opts,output_dir){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
<<<<<<< HEAD
var vec__16426 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16426,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16426,(1),null);
var vec__16429 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__16432 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__16432,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__16432;
=======
var vec__15826 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15826,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15826,(1),null);
var vec__15829 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__15832 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__15832,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__15832;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})():file_part),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,parse_source_loc_info(line_part),cljs.core.cst$kw$column,parse_source_loc_info(col_part)], null);
}
}
<<<<<<< HEAD
});})(map__16417,map__16417__$1,opts,output_dir))
=======
});})(map__15817,map__15817__$1,opts,output_dir))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
<<<<<<< HEAD
return cljs.core.last((function (){var or__8247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__16433_SHARP_){
return (p1__16433_SHARP_ <= (column__$1 - (1)));
=======
return cljs.core.last((function (){var or__8246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__15833_SHARP_){
return (p1__15833_SHARP_ <= (column__$1 - (1)));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
<<<<<<< HEAD
return (function (p1__16434_SHARP_,p2__16435_SHARP_){
return (p1__16434_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16434_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__16435_SHARP_) : p1__16434_SHARP_.call(null,p2__16435_SHARP_));
=======
return (function (p1__15834_SHARP_,p2__15835_SHARP_){
return (p1__15834_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15834_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__15835_SHARP_) : p1__15834_SHARP_.call(null,p2__15835_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5288__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5288__auto__)){
var columns = temp__5288__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
<<<<<<< HEAD
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__16436,sms,opts){
var map__16437 = p__16436;
var map__16437__$1 = ((((!((map__16437 == null)))?((((map__16437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16437):map__16437);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16437__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16437__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16437__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16437__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__16439 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16439,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16439,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16439,(2),null);
=======
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__15836,sms,opts){
var map__15837 = p__15836;
var map__15837__$1 = ((((!((map__15837 == null)))?((((map__15837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15837):map__15837);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__15839 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(2),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?["NO_SOURCE_FILE",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
<<<<<<< HEAD
var G__16445 = arguments.length;
switch (G__16445) {
=======
var G__15845 = arguments.length;
switch (G__15845) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
<<<<<<< HEAD
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__16442_SHARP_){
return cljs.stacktrace.mapped_frame(p1__16442_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__16443_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16443_SHARP_,cljs.core.cst$kw$call);
=======
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__15842_SHARP_){
return cljs.stacktrace.mapped_frame(p1__15842_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__15843_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15843_SHARP_,cljs.core.cst$kw$call);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
<<<<<<< HEAD
var G__16448 = arguments.length;
switch (G__16448) {
=======
var G__15848 = arguments.length;
switch (G__15848) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
<<<<<<< HEAD
var sb__9372__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16449_16460 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16450_16461 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16449_16460,_STAR_print_fn_STAR_16450_16461,sb__9372__auto__){
return (function (x__9373__auto__){
return sb__9372__auto__.append(x__9373__auto__);
});})(_STAR_print_newline_STAR_16449_16460,_STAR_print_fn_STAR_16450_16461,sb__9372__auto__))
;

try{var seq__16451_16462 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__16452_16463 = null;
var count__16453_16464 = (0);
var i__16454_16465 = (0);
while(true){
if((i__16454_16465 < count__16453_16464)){
var map__16455_16466 = chunk__16452_16463.cljs$core$IIndexed$_nth$arity$2(null,i__16454_16465);
var map__16455_16467__$1 = ((((!((map__16455_16466 == null)))?((((map__16455_16466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16455_16466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16455_16466):map__16455_16466);
var function_16468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16455_16467__$1,cljs.core.cst$kw$function);
var file_16469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16455_16467__$1,cljs.core.cst$kw$file);
var line_16470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16455_16467__$1,cljs.core.cst$kw$line);
var column_16471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16455_16467__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_16468)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_16468)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16469),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_16470)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16470)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_16471)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_16471)].join(''):null)),")"].join('')], 0));

var G__16472 = seq__16451_16462;
var G__16473 = chunk__16452_16463;
var G__16474 = count__16453_16464;
var G__16475 = (i__16454_16465 + (1));
seq__16451_16462 = G__16472;
chunk__16452_16463 = G__16473;
count__16453_16464 = G__16474;
i__16454_16465 = G__16475;
continue;
} else {
var temp__5290__auto___16476 = cljs.core.seq(seq__16451_16462);
if(temp__5290__auto___16476){
var seq__16451_16477__$1 = temp__5290__auto___16476;
if(cljs.core.chunked_seq_QMARK_(seq__16451_16477__$1)){
var c__9178__auto___16478 = cljs.core.chunk_first(seq__16451_16477__$1);
var G__16479 = cljs.core.chunk_rest(seq__16451_16477__$1);
var G__16480 = c__9178__auto___16478;
var G__16481 = cljs.core.count(c__9178__auto___16478);
var G__16482 = (0);
seq__16451_16462 = G__16479;
chunk__16452_16463 = G__16480;
count__16453_16464 = G__16481;
i__16454_16465 = G__16482;
continue;
} else {
var map__16457_16483 = cljs.core.first(seq__16451_16477__$1);
var map__16457_16484__$1 = ((((!((map__16457_16483 == null)))?((((map__16457_16483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16457_16483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16457_16483):map__16457_16483);
var function_16485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16457_16484__$1,cljs.core.cst$kw$function);
var file_16486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16457_16484__$1,cljs.core.cst$kw$file);
var line_16487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16457_16484__$1,cljs.core.cst$kw$line);
var column_16488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16457_16484__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_16485)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_16485)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16486),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_16487)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16487)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_16488)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_16488)].join(''):null)),")"].join('')], 0));

var G__16489 = cljs.core.next(seq__16451_16477__$1);
var G__16490 = null;
var G__16491 = (0);
var G__16492 = (0);
seq__16451_16462 = G__16489;
chunk__16452_16463 = G__16490;
count__16453_16464 = G__16491;
i__16454_16465 = G__16492;
=======
var sb__9371__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15849_15860 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15850_15861 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15849_15860,_STAR_print_fn_STAR_15850_15861,sb__9371__auto__){
return (function (x__9372__auto__){
return sb__9371__auto__.append(x__9372__auto__);
});})(_STAR_print_newline_STAR_15849_15860,_STAR_print_fn_STAR_15850_15861,sb__9371__auto__))
;

try{var seq__15851_15862 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__15852_15863 = null;
var count__15853_15864 = (0);
var i__15854_15865 = (0);
while(true){
if((i__15854_15865 < count__15853_15864)){
var map__15855_15866 = chunk__15852_15863.cljs$core$IIndexed$_nth$arity$2(null,i__15854_15865);
var map__15855_15867__$1 = ((((!((map__15855_15866 == null)))?((((map__15855_15866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15855_15866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15855_15866):map__15855_15866);
var function_15868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855_15867__$1,cljs.core.cst$kw$function);
var file_15869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855_15867__$1,cljs.core.cst$kw$file);
var line_15870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855_15867__$1,cljs.core.cst$kw$line);
var column_15871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15855_15867__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_15868)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_15868)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15869),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_15870)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15870)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_15871)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_15871)].join(''):null)),")"].join('')], 0));

var G__15872 = seq__15851_15862;
var G__15873 = chunk__15852_15863;
var G__15874 = count__15853_15864;
var G__15875 = (i__15854_15865 + (1));
seq__15851_15862 = G__15872;
chunk__15852_15863 = G__15873;
count__15853_15864 = G__15874;
i__15854_15865 = G__15875;
continue;
} else {
var temp__5290__auto___15876 = cljs.core.seq(seq__15851_15862);
if(temp__5290__auto___15876){
var seq__15851_15877__$1 = temp__5290__auto___15876;
if(cljs.core.chunked_seq_QMARK_(seq__15851_15877__$1)){
var c__9177__auto___15878 = cljs.core.chunk_first(seq__15851_15877__$1);
var G__15879 = cljs.core.chunk_rest(seq__15851_15877__$1);
var G__15880 = c__9177__auto___15878;
var G__15881 = cljs.core.count(c__9177__auto___15878);
var G__15882 = (0);
seq__15851_15862 = G__15879;
chunk__15852_15863 = G__15880;
count__15853_15864 = G__15881;
i__15854_15865 = G__15882;
continue;
} else {
var map__15857_15883 = cljs.core.first(seq__15851_15877__$1);
var map__15857_15884__$1 = ((((!((map__15857_15883 == null)))?((((map__15857_15883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15857_15883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15857_15883):map__15857_15883);
var function_15885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857_15884__$1,cljs.core.cst$kw$function);
var file_15886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857_15884__$1,cljs.core.cst$kw$file);
var line_15887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857_15884__$1,cljs.core.cst$kw$line);
var column_15888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857_15884__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_15885)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_15885)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15886),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_15887)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15887)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_15888)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_15888)].join(''):null)),")"].join('')], 0));

var G__15889 = cljs.core.next(seq__15851_15877__$1);
var G__15890 = null;
var G__15891 = (0);
var G__15892 = (0);
seq__15851_15862 = G__15889;
chunk__15852_15863 = G__15890;
count__15853_15864 = G__15891;
i__15854_15865 = G__15892;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}
<<<<<<< HEAD
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16450_16461;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16449_16460;
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15850_15861;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15849_15860;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9371__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

