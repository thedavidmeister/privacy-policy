// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.properties');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,args);
<<<<<<< HEAD
}catch (e18453){var t = e18453;
=======
}catch (e17853){var t = e17853;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return t;
}})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$function,function$,cljs.core.cst$kw$args,args], null);
});
});
/**
 * Creates a property (properties are also generators). A property
 *   is a generator that generates the result of applying the function
 *   under test with the realized arguments. Once realized, the arguments
 *   will be applied to `function` with `apply`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/int gen/int] (fn [a b] (>= (+ a b) a)))
 *   
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap(clojure.test.check.properties.apply_gen(function$),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
<<<<<<< HEAD
var ret__9570__auto___18458 = (function (){
=======
var ret__9569__auto___17858 = (function (){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
/**
 * Macro sugar for `for-all*`. `for-all` lets you name the parameter
 *   and use them in expression, without wrapping them in a lambda. Like
 *   `for-all*`, it returns a property.
 * 
 *   Examples
 * 
 *   (for-all [a gen/int
 *          b gen/int]
 *  (>= (+ a b) a))
 *   
 */
clojure.test.check.properties.for_all = (function clojure$test$check$properties$for_all(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___18459 = arguments.length;
var i__9525__auto___18460 = (0);
while(true){
if((i__9525__auto___18460 < len__9524__auto___18459)){
args__9531__auto__.push((arguments[i__9525__auto___18460]));

var G__18461 = (i__9525__auto___18460 + (1));
i__9525__auto___18460 = G__18461;
=======
var args__9530__auto__ = [];
var len__9523__auto___17859 = arguments.length;
var i__9524__auto___17860 = (0);
while(true){
if((i__9524__auto___17860 < len__9523__auto___17859)){
args__9530__auto__.push((arguments[i__9524__auto___17860]));

var G__17861 = (i__9524__auto___17860 + (1));
i__9524__auto___17860 = G__17861;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((3) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((3)),(0),null)):null);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9531__auto__);
});

clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_),(function (){var x__9200__auto__ = cljs.core.vec(clojure.test.check.properties.binding_gens(bindings));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9200__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(clojure.test.check.properties.binding_vars(bindings)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0))));
});

clojure.test.check.properties.for_all.cljs$lang$maxFixedArity = (3);

<<<<<<< HEAD
clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq18454){
var G__18455 = cljs.core.first(seq18454);
var seq18454__$1 = cljs.core.next(seq18454);
var G__18456 = cljs.core.first(seq18454__$1);
var seq18454__$2 = cljs.core.next(seq18454__$1);
var G__18457 = cljs.core.first(seq18454__$2);
var seq18454__$3 = cljs.core.next(seq18454__$2);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic(G__18455,G__18456,G__18457,seq18454__$3);
=======
clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq17854){
var G__17855 = cljs.core.first(seq17854);
var seq17854__$1 = cljs.core.next(seq17854);
var G__17856 = cljs.core.first(seq17854__$1);
var seq17854__$2 = cljs.core.next(seq17854__$1);
var G__17857 = cljs.core.first(seq17854__$2);
var seq17854__$3 = cljs.core.next(seq17854__$2);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic(G__17855,G__17856,G__17857,seq17854__$3);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

return null;
})()
;
clojure.test.check.properties.for_all.cljs$lang$macro = true;

