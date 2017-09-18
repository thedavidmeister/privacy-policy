// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.clojure_test');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed){
clojure.test.check.clojure_test.report_trial(property,num_trials,num_trials);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,true,cljs.core.cst$kw$num_DASH_tests,num_trials,cljs.core.cst$kw$seed,seed], null);
});
/**
 * True if the value is not falsy or an exception
 */
clojure.test.check.not_falsey_or_exception_QMARK_ = (function clojure$test$check$not_falsey_or_exception_QMARK_(value){
var and__8234__auto__ = value;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not(clojure.test.check.impl.exception_like_QMARK_(value));
} else {
return and__8234__auto__;
}
});
/**
 * Tests `property` `num-tests` times.
 *   Takes optional keys `:seed` and `:max-size`. The seed parameter
 *   can be used to re-run previous tests, as the seed used is returned
 *   after a test is run. The max-size can be used to control the 'size'
 *   of generated values. The size will start at 0, and grow up to
 *   max-size, as the number of tests increases. Generators will use
 *   the size parameter to bound their growth. This prevents, for example,
 *   generating a five-thousand element vector on the very first test.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 *    (quick-check 100 p)
 *   
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___18430 = arguments.length;
var i__9525__auto___18431 = (0);
while(true){
if((i__9525__auto___18431 < len__9524__auto___18430)){
args__9531__auto__.push((arguments[i__9525__auto___18431]));

var G__18432 = (i__9525__auto___18431 + (1));
i__9525__auto___18431 = G__18432;
=======
var args__9530__auto__ = [];
var len__9523__auto___17830 = arguments.length;
var i__9524__auto___17831 = (0);
while(true){
if((i__9524__auto___17831 < len__9523__auto___17830)){
args__9530__auto__.push((arguments[i__9524__auto___17831]));

var G__17832 = (i__9524__auto___17831 + (1));
i__9524__auto___17831 = G__17832;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((2) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9531__auto__);
});

<<<<<<< HEAD
clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__18418){
var map__18419 = p__18418;
var map__18419__$1 = ((((!((map__18419 == null)))?((((map__18419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18419):map__18419);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,cljs.core.cst$kw$seed);
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18419__$1,cljs.core.cst$kw$max_DASH_size,(200));
var vec__18421 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18421,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18421,(1),null);
=======
clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__17818){
var map__17819 = p__17818;
var map__17819__$1 = ((((!((map__17819 == null)))?((((map__17819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17819):map__17819);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17819__$1,cljs.core.cst$kw$seed);
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17819__$1,cljs.core.cst$kw$max_DASH_size,(200));
var vec__17821 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17821,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17821,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete(property,num_tests,created_seed);
} else {
<<<<<<< HEAD
var vec__18424 = size_seq__$1;
var seq__18425 = cljs.core.seq(vec__18424);
var first__18426 = cljs.core.first(seq__18425);
var seq__18425__$1 = cljs.core.next(seq__18425);
var size = first__18426;
var rest_size_seq = seq__18425__$1;
var vec__18427 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18427,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18427,(1),null);
=======
var vec__17824 = size_seq__$1;
var seq__17825 = cljs.core.seq(vec__17824);
var first__17826 = cljs.core.first(seq__17825);
var seq__17825__$1 = cljs.core.next(seq__17825);
var size = first__17826;
var rest_size_seq = seq__17825__$1;
var vec__17827 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17827,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17827,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var result_map_rose = clojure.test.check.generators.call_gen(property,r1,size);
var result_map = clojure.test.check.rose_tree.root(result_map_rose);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result_map);
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(result_map);
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
clojure.test.check.clojure_test.report_trial(property,so_far,num_tests);

<<<<<<< HEAD
var G__18433 = (so_far + (1));
var G__18434 = rest_size_seq;
var G__18435 = r2;
so_far = G__18433;
size_seq__$1 = G__18434;
rstate = G__18435;
=======
var G__17833 = (so_far + (1));
var G__17834 = rest_size_seq;
var G__17835 = r2;
so_far = G__17833;
size_seq__$1 = G__17834;
rstate = G__17835;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return (clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5(property,result_map_rose,so_far,size,created_seed) : clojure.test.check.failure.call(null,property,result_map_rose,so_far,size,created_seed));
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq18415){
var G__18416 = cljs.core.first(seq18415);
var seq18415__$1 = cljs.core.next(seq18415);
var G__18417 = cljs.core.first(seq18415__$1);
var seq18415__$2 = cljs.core.next(seq18415__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__18416,G__18417,seq18415__$2);
=======
clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq17815){
var G__17816 = cljs.core.first(seq17815);
var seq17815__$1 = cljs.core.next(seq17815);
var G__17817 = cljs.core.first(seq17815__$1);
var seq17815__$2 = cljs.core.next(seq17815__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__17816,G__17817,seq17815__$2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$total_DASH_nodes_DASH_visited,total_nodes_visited,cljs.core.cst$kw$depth,depth,cljs.core.cst$kw$result,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(smallest),cljs.core.cst$kw$smallest,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree){
var shrinks_this_depth = clojure.test.check.rose_tree.children(rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root(rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_(nodes)){
return clojure.test.check.smallest_shrink(total_nodes_visited,depth,current_smallest);
} else {
<<<<<<< HEAD
var vec__18436 = nodes;
var seq__18437 = cljs.core.seq(vec__18436);
var first__18438 = cljs.core.first(seq__18437);
var seq__18437__$1 = cljs.core.next(seq__18437);
var head = first__18438;
var tail = seq__18437__$1;
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
var G__18439 = tail;
var G__18440 = current_smallest;
var G__18441 = (total_nodes_visited + (1));
var G__18442 = depth;
nodes = G__18439;
current_smallest = G__18440;
total_nodes_visited = G__18441;
depth = G__18442;
=======
var vec__17836 = nodes;
var seq__17837 = cljs.core.seq(vec__17836);
var first__17838 = cljs.core.first(seq__17837);
var seq__17837__$1 = cljs.core.next(seq__17837);
var head = first__17838;
var tail = seq__17837__$1;
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
var G__17839 = tail;
var G__17840 = current_smallest;
var G__17841 = (total_nodes_visited + (1));
var G__17842 = depth;
nodes = G__17839;
current_smallest = G__17840;
total_nodes_visited = G__17841;
depth = G__17842;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
var temp__5288__auto__ = cljs.core.seq(clojure.test.check.rose_tree.children(head));
if(temp__5288__auto__){
var children = temp__5288__auto__;
<<<<<<< HEAD
var G__18443 = children;
var G__18444 = clojure.test.check.rose_tree.root(head);
var G__18445 = (total_nodes_visited + (1));
var G__18446 = (depth + (1));
nodes = G__18443;
current_smallest = G__18444;
total_nodes_visited = G__18445;
depth = G__18446;
continue;
} else {
var G__18447 = tail;
var G__18448 = clojure.test.check.rose_tree.root(head);
var G__18449 = (total_nodes_visited + (1));
var G__18450 = depth;
nodes = G__18447;
current_smallest = G__18448;
total_nodes_visited = G__18449;
depth = G__18450;
=======
var G__17843 = children;
var G__17844 = clojure.test.check.rose_tree.root(head);
var G__17845 = (total_nodes_visited + (1));
var G__17846 = (depth + (1));
nodes = G__17843;
current_smallest = G__17844;
total_nodes_visited = G__17845;
depth = G__17846;
continue;
} else {
var G__17847 = tail;
var G__17848 = clojure.test.check.rose_tree.root(head);
var G__17849 = (total_nodes_visited + (1));
var G__17850 = depth;
nodes = G__17847;
current_smallest = G__17848;
total_nodes_visited = G__17849;
depth = G__17850;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed){
var root = clojure.test.check.rose_tree.root(failing_rose_tree);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(root);
var failing_args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(root);
clojure.test.check.clojure_test.report_failure(property,result,trial_number,failing_args);

return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$seed,seed,cljs.core.cst$kw$failing_DASH_size,size,cljs.core.cst$kw$num_DASH_tests,(trial_number + (1)),cljs.core.cst$kw$fail,cljs.core.vec(failing_args),cljs.core.cst$kw$shrunk,clojure.test.check.shrink_loop(failing_rose_tree)], null);
});
