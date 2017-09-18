// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.array');
goog.require('goog.object');





javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__5290__auto__ = pri_map.shift();
if(cljs.core.truth_(temp__5290__auto__)){
var next = temp__5290__auto__;
var old = next.prev;
var new$ = (function (){var temp__5288__auto__ = next.thunk;
if(cljs.core.truth_(temp__5288__auto__)){
var f = temp__5288__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old)){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);

<<<<<<< HEAD
var sinks_16160 = next.sinks;
var n__9290__auto___16161 = sinks_16160.length;
var i_16162 = (0);
while(true){
if((i_16162 < n__9290__auto___16161)){
var G__16157_16163 = pri_map;
var G__16158_16164 = (sinks_16160[i_16162]);
var G__16159_16165 = javelin.core.cmp_rank;
goog.array.binaryInsert(G__16157_16163,G__16158_16164,G__16159_16165);

var G__16166 = (i_16162 + (1));
i_16162 = G__16166;
=======
var sinks_15620 = next.sinks;
var n__9289__auto___15621 = sinks_15620.length;
var i_15622 = (0);
while(true){
if((i_15622 < n__9289__auto___15621)){
var G__15617_15623 = pri_map;
var G__15618_15624 = (sinks_15620[i_15622]);
var G__15619_15625 = javelin.core.cmp_rank;
goog.array.binaryInsert(G__15617_15623,G__15618_15624,G__15619_15625);

var G__15626 = (i_15622 + (1));
i_15622 = G__15626;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}
} else {
}

<<<<<<< HEAD
var G__16167 = pri_map;
pri_map = G__16167;
=======
var G__15627 = pri_map;
pri_map = G__15627;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return null;
}
break;
}
});
/**
 * If x is a Cell dereferences x and returns the value, otherwise returns x.
 */
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return cljs.core.deref(x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cmp_rank = (function javelin$core$cmp_rank(a,b){
var a__$1 = a.rank;
var b__$1 = b.rank;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1)){
return (0);
} else {
return (a__$1 - b__$1);
}
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return goog.array.binaryInsert(javelin.core._STAR_tx_STAR_,c,javelin.core.cmp_rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
<<<<<<< HEAD
}catch (e16168){if((e16168 instanceof Error)){
var _ = e16168;
return null;
} else {
throw e16168;
=======
}catch (e15628){if((e15628 instanceof Error)){
var _ = e15628;
return null;
} else {
throw e15628;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
<<<<<<< HEAD
var G__16169 = c;
javelin.core.add_sync_BANG_(G__16169);

return G__16169;
} else {
var G__16170 = c;
javelin.core.propagate_STAR_([G__16170]);

return G__16170;
=======
var G__15629 = c;
javelin.core.add_sync_BANG_(G__15629);

return G__15629;
} else {
var G__15630 = c;
javelin.core.propagate_STAR_([G__15630]);

return G__15630;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
});
/**
 * Unlinks this Cell from the cell graph and resets all internal state. Watches
 *   are preserved when keep-watches? is true, otherwise they are all removed.
 */
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
<<<<<<< HEAD
var G__16173 = arguments.length;
switch (G__16173) {
=======
var G__15633 = arguments.length;
switch (G__15633) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,null);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,keep_watches_QMARK_){
var srcs = this$.sources;
this$.sources = [];

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;

this$.numwatches = (0);
}

var n__9289__auto__ = srcs.length;
var i = (0);
while(true){
<<<<<<< HEAD
if((i < n__9290__auto__)){
var temp__5290__auto___16178 = (function (){var G__16174 = (srcs[i]);
return (javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16174) : javelin.core.cell_QMARK_.call(null,G__16174));
})();
if(cljs.core.truth_(temp__5290__auto___16178)){
var c_16179 = temp__5290__auto___16178;
var G__16175_16180 = c_16179.sinks;
var G__16176_16181 = ((function (i,G__16175_16180,c_16179,temp__5290__auto___16178,n__9290__auto__,srcs){
return (function (p1__16171_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16171_SHARP_,this$);
});})(i,G__16175_16180,c_16179,temp__5290__auto___16178,n__9290__auto__,srcs))
;
goog.array.removeIf(G__16175_16180,G__16176_16181);
} else {
}

var G__16182 = (i + (1));
i = G__16182;
=======
if((i < n__9289__auto__)){
var temp__5290__auto___15638 = (function (){var G__15634 = (srcs[i]);
return (javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15634) : javelin.core.cell_QMARK_.call(null,G__15634));
})();
if(cljs.core.truth_(temp__5290__auto___15638)){
var c_15639 = temp__5290__auto___15638;
var G__15635_15640 = c_15639.sinks;
var G__15636_15641 = ((function (i,G__15635_15640,c_15639,temp__5290__auto___15638,n__9289__auto__,srcs){
return (function (p1__15631_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15631_SHARP_,this$);
});})(i,G__15635_15640,c_15639,temp__5290__auto___15638,n__9289__auto__,srcs))
;
goog.array.removeIf(G__15635_15640,G__15636_15641);
} else {
}

var G__15642 = (i + (1));
i = G__15642;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return null;
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = 2;

javelin.core.set_formula_BANG__STAR_ = (function javelin$core$set_formula_BANG__STAR_(this$,f,sources,updatefn){
if(cljs.core.truth_(f)){
this$.constant = true;

<<<<<<< HEAD
this$.sources = (function (){var G__16183 = sources;
G__16183.push(f);

return G__16183;
})();

var n__9290__auto___16184 = this$.sources.length;
var i_16185 = (0);
while(true){
if((i_16185 < n__9290__auto___16184)){
var source_16186 = (this$.sources[i_16185]);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_16186) : javelin.core.cell_QMARK_.call(null,source_16186)))){
if(cljs.core.truth_((function (){var and__8235__auto__ = this$.constant;
if(cljs.core.truth_(and__8235__auto__)){
return cljs.core.not(source_16186.constant);
=======
this$.sources = (function (){var G__15643 = sources;
G__15643.push(f);

return G__15643;
})();

var n__9289__auto___15644 = this$.sources.length;
var i_15645 = (0);
while(true){
if((i_15645 < n__9289__auto___15644)){
var source_15646 = (this$.sources[i_15645]);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_15646) : javelin.core.cell_QMARK_.call(null,source_15646)))){
if(cljs.core.truth_((function (){var and__8234__auto__ = this$.constant;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not(source_15646.constant);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return and__8234__auto__;
}
})())){
this$.constant = false;
} else {
}

<<<<<<< HEAD
source_16186.sinks.push(this$);

if((source_16186.rank > this$.rank)){
var q_16187 = [source_16186];
while(true){
var temp__5290__auto___16188 = q_16187.shift();
if(cljs.core.truth_(temp__5290__auto___16188)){
var dep_16189 = temp__5290__auto___16188;
dep_16189.rank = javelin.core.next_rank();

var G__16190 = q_16187.concat(dep_16189.sinks);
q_16187 = G__16190;
=======
source_15646.sinks.push(this$);

if((source_15646.rank > this$.rank)){
var q_15647 = [source_15646];
while(true){
var temp__5290__auto___15648 = q_15647.shift();
if(cljs.core.truth_(temp__5290__auto___15648)){
var dep_15649 = temp__5290__auto___15648;
dep_15649.rank = javelin.core.next_rank();

var G__15650 = q_15647.concat(dep_15649.sinks);
q_15647 = G__15650;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}
} else {
}
} else {
}

<<<<<<< HEAD
var G__16191 = (i_16185 + (1));
i_16185 = G__16191;
=======
var G__15651 = (i_15645 + (1));
i_15645 = G__15651;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

this$.thunk = (function (){
var argv = this$.sources.slice();
var f__$1 = javelin.core.deref_STAR_(argv.pop());
<<<<<<< HEAD
var n__9290__auto___16192 = argv.length;
var i_16193 = (0);
while(true){
if((i_16193 < n__9290__auto___16192)){
(argv[i_16193] = javelin.core.deref_STAR_((argv[i_16193])));

var G__16194 = (i_16193 + (1));
i_16193 = G__16194;
=======
var n__9289__auto___15652 = argv.length;
var i_15653 = (0);
while(true){
if((i_15653 < n__9289__auto___15652)){
(argv[i_15653] = javelin.core.deref_STAR_((argv[i_15653])));

var G__15654 = (i_15653 + (1));
i_15653 = G__15654;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

return this$.state = f__$1.apply(null,argv);
});

this$.update = updatefn;
} else {
}

return javelin.core.propagate_BANG_(this$);
});
/**
 * Given a Cell and optional formula function f and the cells f depends on,
 *   sources, updates the formula for this cell in place. If f and/or sources
 *   is not spcified they are set to nil.
 */
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
<<<<<<< HEAD
var G__16196 = arguments.length;
switch (G__16196) {
=======
var G__15656 = arguments.length;
switch (G__15656) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,null,null,null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,[],null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,sources){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(sources),null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,sources,updatefn){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(sources),updatefn);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.constant = constant;
this.numwatches = numwatches;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
});
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object [javelin.core.Cell ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.state], 0)),"]"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update,self__.constant,self__.numwatches));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
<<<<<<< HEAD
var fexpr__16198_16215 = this$__$1.update;
(fexpr__16198_16215.cljs$core$IFn$_invoke$arity$1 ? fexpr__16198_16215.cljs$core$IFn$_invoke$arity$1(x) : fexpr__16198_16215.call(null,x));
=======
var fexpr__15658_15675 = this$__$1.update;
(fexpr__15658_15675.cljs$core$IFn$_invoke$arity$1 ? fexpr__15658_15675.cljs$core$IFn$_invoke$arity$1(x) : fexpr__15658_15675.call(null,x));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16199 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16199) : f.call(null,G__16199));
=======
return cljs.core.reset_BANG_(this$__$1,(function (){var G__15659 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15659) : f.call(null,G__15659));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16200 = this$__$1.state;
var G__16201 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16200,G__16201) : f.call(null,G__16200,G__16201));
=======
return cljs.core.reset_BANG_(this$__$1,(function (){var G__15660 = this$__$1.state;
var G__15661 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15660,G__15661) : f.call(null,G__15660,G__15661));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16202 = this$__$1.state;
var G__16203 = a;
var G__16204 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16202,G__16203,G__16204) : f.call(null,G__16202,G__16203,G__16204));
=======
return cljs.core.reset_BANG_(this$__$1,(function (){var G__15662 = this$__$1.state;
var G__15663 = a;
var G__15664 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15662,G__15663,G__15664) : f.call(null,G__15662,G__15663,G__15664));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
if(((0) < this$__$1.numwatches)){
<<<<<<< HEAD
var seq__16205 = cljs.core.seq(self__.watches);
var chunk__16206 = null;
var count__16207 = (0);
var i__16208 = (0);
while(true){
if((i__16208 < count__16207)){
var vec__16209 = chunk__16206.cljs$core$IIndexed$_nth$arity$2(null,i__16208);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__16216 = seq__16205;
var G__16217 = chunk__16206;
var G__16218 = count__16207;
var G__16219 = (i__16208 + (1));
seq__16205 = G__16216;
chunk__16206 = G__16217;
count__16207 = G__16218;
i__16208 = G__16219;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__16205);
if(temp__5290__auto__){
var seq__16205__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16205__$1)){
var c__9178__auto__ = cljs.core.chunk_first(seq__16205__$1);
var G__16220 = cljs.core.chunk_rest(seq__16205__$1);
var G__16221 = c__9178__auto__;
var G__16222 = cljs.core.count(c__9178__auto__);
var G__16223 = (0);
seq__16205 = G__16220;
chunk__16206 = G__16221;
count__16207 = G__16222;
i__16208 = G__16223;
continue;
} else {
var vec__16212 = cljs.core.first(seq__16205__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16212,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16212,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__16224 = cljs.core.next(seq__16205__$1);
var G__16225 = null;
var G__16226 = (0);
var G__16227 = (0);
seq__16205 = G__16224;
chunk__16206 = G__16225;
count__16207 = G__16226;
i__16208 = G__16227;
=======
var seq__15665 = cljs.core.seq(self__.watches);
var chunk__15666 = null;
var count__15667 = (0);
var i__15668 = (0);
while(true){
if((i__15668 < count__15667)){
var vec__15669 = chunk__15666.cljs$core$IIndexed$_nth$arity$2(null,i__15668);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15669,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15669,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__15676 = seq__15665;
var G__15677 = chunk__15666;
var G__15678 = count__15667;
var G__15679 = (i__15668 + (1));
seq__15665 = G__15676;
chunk__15666 = G__15677;
count__15667 = G__15678;
i__15668 = G__15679;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__15665);
if(temp__5290__auto__){
var seq__15665__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15665__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__15665__$1);
var G__15680 = cljs.core.chunk_rest(seq__15665__$1);
var G__15681 = c__9177__auto__;
var G__15682 = cljs.core.count(c__9177__auto__);
var G__15683 = (0);
seq__15665 = G__15680;
chunk__15666 = G__15681;
count__15667 = G__15682;
i__15668 = G__15683;
continue;
} else {
var vec__15672 = cljs.core.first(seq__15665__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15672,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15672,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__15684 = cljs.core.next(seq__15665__$1);
var G__15685 = null;
var G__15686 = (0);
var G__15687 = (0);
seq__15665 = G__15684;
chunk__15666 = G__15685;
count__15667 = G__15686;
i__15668 = G__15687;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1.watches,k)){
} else {
this$__$1.numwatches = (this$__$1.numwatches + (1));
}

return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1.watches,k)){
this$__$1.numwatches = (this$__$1.numwatches - (1));

return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
} else {
return null;
}
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update,cljs.core.cst$sym$constant,cljs.core.cst$sym$numwatches], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches));
});

/**
 * Returns c if c is a Cell, nil otherwise.
 */
javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){

if(cljs.core.truth_((function (){var and__8234__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8234__auto__)){
return c.thunk;
} else {
return and__8234__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){

if(cljs.core.truth_((function (){var and__8234__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8234__auto__)){
return c.update;
} else {
return and__8234__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){

if(cljs.core.truth_((function (){var and__8234__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__8234__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.constant_QMARK_ = (function javelin$core$constant_QMARK_(c){

if(cljs.core.truth_((function (){var and__8234__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8234__auto__)){
return c.constant;
} else {
return and__8234__auto__;
}
})())){
return c;
} else {
return null;
}
});
/**
 * Converts c to an input cell in place, setting its contents to x. It's okay
 *   if c was already an input cell. Changes will be propagated to any cells that
 *   depend on c.
 */
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1(c);
});
/**
 * Returns a function that returns a formula cell with f as its formula, and
 *   if updatefn is provided the returned cell is a lens.
 * 
 *   See also: the javelin.core/cell= macro.
 * 
 *    (def x (cell 100))
 *    (def y (cell 200))
 * 
 *    (def z1 (cell= (+ x y)))
 *    (def z2 ((formula +) x y))
 * 
 *   The formula cells z1 and z2 are equivalent.
 */
javelin.core.formula = (function javelin$core$formula(var_args){
<<<<<<< HEAD
var G__16229 = arguments.length;
switch (G__16229) {
=======
var G__15689 = arguments.length;
switch (G__15689) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$1 = (function (f){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2(f,null);
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$2 = (function (f,updatefn){
return (function (){
<<<<<<< HEAD
return javelin.core.set_formula_BANG__STAR_((function (){var G__16230 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__16230) : javelin.core.cell.call(null,G__16230));
=======
return javelin.core.set_formula_BANG__STAR_((function (){var G__15690 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__15690) : javelin.core.cell.call(null,G__15690));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})(),f,Array.prototype.slice.call(arguments),updatefn);
});
});

javelin.core.formula.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new lens whose value is the same as c's with update function f.
 *   This is equivalent to ((formula identity f) c).
 */
javelin.core.lens = (function javelin$core$lens(c,f){
<<<<<<< HEAD
var fexpr__16232 = javelin.core.formula.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,f);
return (fexpr__16232.cljs$core$IFn$_invoke$arity$1 ? fexpr__16232.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16232.call(null,c));
=======
var fexpr__15692 = javelin.core.formula.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,f);
return (fexpr__15692.cljs$core$IFn$_invoke$arity$1 ? fexpr__15692.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15692.call(null,c));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
/**
 * Returns a new input cell containing value x. The :meta option can be used
 *   to create the cell with the given metadata map.
 */
javelin.core.cell = (function javelin$core$cell(var_args){
<<<<<<< HEAD
var G__16236 = arguments.length;
switch (G__16236) {
=======
var G__15696 = arguments.length;
switch (G__15696) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
<<<<<<< HEAD
var args_arr__9547__auto__ = [];
var len__9524__auto___16241 = arguments.length;
var i__9525__auto___16242 = (0);
while(true){
if((i__9525__auto___16242 < len__9524__auto___16241)){
args_arr__9547__auto__.push((arguments[i__9525__auto___16242]));

var G__16243 = (i__9525__auto___16242 + (1));
i__9525__auto___16242 = G__16243;
=======
var args_arr__9546__auto__ = [];
var len__9523__auto___15701 = arguments.length;
var i__9524__auto___15702 = (0);
while(true){
if((i__9524__auto___15702 < len__9523__auto___15701)){
args_arr__9546__auto__.push((arguments[i__9524__auto___15702]));

var G__15703 = (i__9524__auto___15702 + (1));
i__9524__auto___15702 = G__15703;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9547__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new javelin.core.Cell(null,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

<<<<<<< HEAD
javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__16237){
var map__16238 = p__16237;
var map__16238__$1 = ((((!((map__16238 == null)))?((((map__16238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16238):map__16238);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16238__$1,cljs.core.cst$kw$meta);
return (new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq16234){
var G__16235 = cljs.core.first(seq16234);
var seq16234__$1 = cljs.core.next(seq16234);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__16235,seq16234__$1);
=======
javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__15697){
var map__15698 = p__15697;
var map__15698__$1 = ((((!((map__15698 == null)))?((((map__15698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15698):map__15698);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,cljs.core.cst$kw$meta);
return (new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq15694){
var G__15695 = cljs.core.first(seq15694);
var seq15694__$1 = cljs.core.next(seq15694);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__15695,seq15694__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

/**
 * This function is deprecated, please use #'javelin.core/formula instead.
 */
javelin.core.lift = javelin.core.formula;
/**
 * Calls the thunk with no arguments within a transaction. Propagation of
 *   updates to formula cells is deferred until the transaction is complete.
 *   Input cells *will* update during the transaction. Transactions may be
 *   nested.
 * 
 *   See also: the javelin.core/dosync macro.
 */
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
<<<<<<< HEAD
var _STAR_tx_STAR_16244 = javelin.core._STAR_tx_STAR_;
=======
var _STAR_tx_STAR_15704 = javelin.core._STAR_tx_STAR_;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
javelin.core._STAR_tx_STAR_ = [];

try{(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

var tx = javelin.core._STAR_tx_STAR_;
<<<<<<< HEAD
var _STAR_tx_STAR_16245 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_16245;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_16244;
=======
var _STAR_tx_STAR_15705 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_15705;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_15704;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}}
});
/**
 * Given a number of cells, returns a formula cell whose value is a seq of
 *   values from cells that changed in the last update. Note that multiple cells
 *   may update atomically, which is why the formula's value is a seq.
 * 
 *   Consider:
 * 
 *    (def a (cell {:x 1 :y 2}))
 *    (def x (cell= (:x a)))
 *    (def y (cell= (:y a)))
 *    (def z (alts! x y))
 * 
 *   then,
 * 
 *    (deref z) ;=> (1 2)
 * 
 *    (swap! a assoc :x 42)
 *    (deref z) ;=> (42)
 * 
 *    (reset! a {:x 10 :y 20})
 *    (deref z) ;=> (10 20)
 *   
 */
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___16252 = arguments.length;
var i__9525__auto___16253 = (0);
while(true){
if((i__9525__auto___16253 < len__9524__auto___16252)){
args__9531__auto__.push((arguments[i__9525__auto___16253]));

var G__16254 = (i__9525__auto___16253 + (1));
i__9525__auto___16253 = G__16254;
=======
var args__9530__auto__ = [];
var len__9523__auto___15712 = arguments.length;
var i__9524__auto___15713 = (0);
while(true){
if((i__9524__auto___15713 < len__9523__auto___15712)){
args__9530__auto__.push((arguments[i__9524__auto___15713]));

var G__15714 = (i__9524__auto___15713 + (1));
i__9524__auto___15713 = G__15714;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none));
var tag_neq = ((function (olds){
<<<<<<< HEAD
return (function (p1__16246_SHARP_,p2__16247_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__16246_SHARP_,p2__16247_SHARP_),p2__16247_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__16249_SHARP_,p2__16248_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__16249_SHARP_,p2__16248_SHARP_))));
=======
return (function (p1__15706_SHARP_,p2__15707_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__15706_SHARP_,p2__15707_SHARP_),p2__15707_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__15709_SHARP_,p2__15708_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__15709_SHARP_,p2__15708_SHARP_))));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
<<<<<<< HEAD
var G__16255__delegate = function (rest__16250_SHARP_){
var news = diff(cljs.core.deref(olds),rest__16250_SHARP_);
cljs.core.reset_BANG_(olds,rest__16250_SHARP_);

return news;
};
var G__16255 = function (var_args){
var rest__16250_SHARP_ = null;
if (arguments.length > 0) {
var G__16256__i = 0, G__16256__a = new Array(arguments.length -  0);
while (G__16256__i < G__16256__a.length) {G__16256__a[G__16256__i] = arguments[G__16256__i + 0]; ++G__16256__i;}
  rest__16250_SHARP_ = new cljs.core.IndexedSeq(G__16256__a,0,null);
} 
return G__16255__delegate.call(this,rest__16250_SHARP_);};
G__16255.cljs$lang$maxFixedArity = 0;
G__16255.cljs$lang$applyTo = (function (arglist__16257){
var rest__16250_SHARP_ = cljs.core.seq(arglist__16257);
return G__16255__delegate(rest__16250_SHARP_);
});
G__16255.cljs$core$IFn$_invoke$arity$variadic = G__16255__delegate;
return G__16255;
=======
var G__15715__delegate = function (rest__15710_SHARP_){
var news = diff(cljs.core.deref(olds),rest__15710_SHARP_);
cljs.core.reset_BANG_(olds,rest__15710_SHARP_);

return news;
};
var G__15715 = function (var_args){
var rest__15710_SHARP_ = null;
if (arguments.length > 0) {
var G__15716__i = 0, G__15716__a = new Array(arguments.length -  0);
while (G__15716__i < G__15716__a.length) {G__15716__a[G__15716__i] = arguments[G__15716__i + 0]; ++G__15716__i;}
  rest__15710_SHARP_ = new cljs.core.IndexedSeq(G__15716__a,0,null);
} 
return G__15715__delegate.call(this,rest__15710_SHARP_);};
G__15715.cljs$lang$maxFixedArity = 0;
G__15715.cljs$lang$applyTo = (function (arglist__15717){
var rest__15710_SHARP_ = cljs.core.seq(arglist__15717);
return G__15715__delegate(rest__15710_SHARP_);
});
G__15715.cljs$core$IFn$_invoke$arity$variadic = G__15715__delegate;
return G__15715;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula.cljs$core$IFn$_invoke$arity$1(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq16251){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16251));
=======
javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq15711){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15711));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   returns a seq of formula cells such that the ith formula cell is equivalent
 *   to (cell= (f (nth c i))).
 */
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
<<<<<<< HEAD
var cseq = (function (){var fexpr__16259 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.seq);
return (fexpr__16259.cljs$core$IFn$_invoke$arity$1 ? fexpr__16259.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16259.call(null,c));
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__16258_SHARP_){
var fexpr__16260 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth));
return (fexpr__16260.cljs$core$IFn$_invoke$arity$2 ? fexpr__16260.cljs$core$IFn$_invoke$arity$2(cseq,p1__16258_SHARP_) : fexpr__16260.call(null,cseq,p1__16258_SHARP_));
=======
var cseq = (function (){var fexpr__15719 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.seq);
return (fexpr__15719.cljs$core$IFn$_invoke$arity$1 ? fexpr__15719.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15719.call(null,c));
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__15718_SHARP_){
var fexpr__15720 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth));
return (fexpr__15720.cljs$core$IFn$_invoke$arity$2 ? fexpr__15720.cljs$core$IFn$_invoke$arity$2(cseq,p1__15718_SHARP_) : fexpr__15720.call(null,cseq,p1__15718_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.deref(cseq))));
});
/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   calls f for side effects once for each item in c, passing one argument: a
 *   formula cell equivalent to (cell= (nth c i)) for the ith item in c. Whenever
 *   c grows beyond its previous maximum size f is called as above for each item
 *   beyond the maximum size. Nothing happens when c shrinks.
 * 
 *   See also: the javelin.core/cell-doseq macro.
 * 
 *   Consider:
 * 
 *    (def things (cell [:a :b :c]))
 *    (cell-doseq*
 *      things
 *      (fn doit [x]
 *        (prn :creating @x)
 *        (add-watch x nil #(prn :updating %3 %4))))
 * 
 *    ;; the following is printed:
 * 
 *    :creating :a
 *    :creating :b
 *    :creating :c
 * 
 *   Shrink things by removing the last item:
 * 
 *    (swap! things pop)
 * 
 *    ;; the following is printed (because the 3rd item in things is now nil,
 *    ;; since things only contains 2 items) -- note that the doit function is
 *    ;; not called (or we would see a :creating message):
 * 
 *    :updating :c nil
 * 
 *   Grow things such that it is one item larger than it ever was:
 * 
 *    (swap! things into [:u :v])
 * 
 *    ;; the following is printed (because things now has 4 items, so the 3rd
 *    ;; item is now :u and the max size increases by one with the new item :v):
 * 
 *    :updating nil :u
 *    :creating :v
 * 
 *   A weird imagination is most useful to gain full advantage of all the features.
 */
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(c,f){
var pool_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
<<<<<<< HEAD
var fexpr__16265 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (pool_size){
return (function (items){
var cnt = cljs.core.count(items);
if((cljs.core.deref(pool_size) < cnt)){
var n__9290__auto___16270 = (cnt - cljs.core.deref(pool_size));
var i_16271 = (0);
while(true){
if((i_16271 < n__9290__auto___16270)){
var G__16266_16272 = (function (){var G__16268 = c;
var G__16269 = (i_16271 + cljs.core.deref(pool_size));
var fexpr__16267 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(javelin.core.safe_nth);
return (fexpr__16267.cljs$core$IFn$_invoke$arity$2 ? fexpr__16267.cljs$core$IFn$_invoke$arity$2(G__16268,G__16269) : fexpr__16267.call(null,G__16268,G__16269));
})();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16266_16272) : f.call(null,G__16266_16272));

var G__16273 = (i_16271 + (1));
i_16271 = G__16273;
=======
var fexpr__15725 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (pool_size){
return (function (items){
var cnt = cljs.core.count(items);
if((cljs.core.deref(pool_size) < cnt)){
var n__9289__auto___15730 = (cnt - cljs.core.deref(pool_size));
var i_15731 = (0);
while(true){
if((i_15731 < n__9289__auto___15730)){
var G__15726_15732 = (function (){var G__15728 = c;
var G__15729 = (i_15731 + cljs.core.deref(pool_size));
var fexpr__15727 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(javelin.core.safe_nth);
return (fexpr__15727.cljs$core$IFn$_invoke$arity$2 ? fexpr__15727.cljs$core$IFn$_invoke$arity$2(G__15728,G__15729) : fexpr__15727.call(null,G__15728,G__15729));
})();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15726_15732) : f.call(null,G__15726_15732));

var G__15733 = (i_15731 + (1));
i_15731 = G__15733;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_(pool_size,cnt);
} else {
return null;
}
});})(pool_size))
);
<<<<<<< HEAD
return (fexpr__16265.cljs$core$IFn$_invoke$arity$1 ? fexpr__16265.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16265.call(null,c));
=======
return (fexpr__15725.cljs$core$IFn$_invoke$arity$1 ? fexpr__15725.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15725.call(null,c));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
