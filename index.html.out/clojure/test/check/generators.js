// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('goog.string');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8934__auto__,k__8935__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return this__8934__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8935__auto__,null);
});

<<<<<<< HEAD
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8937__auto__,k16548,else__8938__auto__){
var self__ = this;
var this__8937__auto____$1 = this;
var G__16552 = k16548;
var G__16552__$1 = (((G__16552 instanceof cljs.core.Keyword))?G__16552.fqn:null);
switch (G__16552__$1) {
=======
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8936__auto__,k15948,else__8937__auto__){
var self__ = this;
var this__8936__auto____$1 = this;
var G__15952 = k15948;
var G__15952__$1 = (((G__15952 instanceof cljs.core.Keyword))?G__15952.fqn:null);
switch (G__15952__$1) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "gen":
return self__.gen;

break;
default:
<<<<<<< HEAD
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16548,else__8938__auto__);
=======
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15948,else__8937__auto__);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8948__auto__,writer__8949__auto__,opts__8950__auto__){
var self__ = this;
var this__8948__auto____$1 = this;
var pr_pair__8951__auto__ = ((function (this__8948__auto____$1){
return (function (keyval__8952__auto__){
return cljs.core.pr_sequential_writer(writer__8949__auto__,cljs.core.pr_writer,""," ","",opts__8950__auto__,keyval__8952__auto__);
});})(this__8948__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8949__auto__,pr_pair__8951__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__8950__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gen,self__.gen],null))], null),self__.__extmap));
});

<<<<<<< HEAD
clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16547){
var self__ = this;
var G__16547__$1 = this;
return (new cljs.core.RecordIter((0),G__16547__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
=======
clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15947){
var self__ = this;
var G__15947__$1 = this;
return (new cljs.core.RecordIter((0),G__15947__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8932__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8929__auto__){
var self__ = this;
var this__8929__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8938__auto__){
var self__ = this;
var this__8938__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8930__auto__){
var self__ = this;
<<<<<<< HEAD
var this__8931__auto____$1 = this;
var h__8703__auto__ = self__.__hash;
if(!((h__8703__auto__ == null))){
return h__8703__auto__;
} else {
var h__8703__auto____$1 = (function (){var fexpr__16553 = ((function (h__8703__auto__,this__8931__auto____$1){
return (function (coll__8932__auto__){
return (236843149 ^ cljs.core.hash_unordered_coll(coll__8932__auto__));
});})(h__8703__auto__,this__8931__auto____$1))
;
return fexpr__16553(this__8931__auto____$1);
=======
var this__8930__auto____$1 = this;
var h__8702__auto__ = self__.__hash;
if(!((h__8702__auto__ == null))){
return h__8702__auto__;
} else {
var h__8702__auto____$1 = (function (){var fexpr__15953 = ((function (h__8702__auto__,this__8930__auto____$1){
return (function (coll__8931__auto__){
return (236843149 ^ cljs.core.hash_unordered_coll(coll__8931__auto__));
});})(h__8702__auto__,this__8930__auto____$1))
;
return fexpr__15953(this__8930__auto____$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
self__.__hash = h__8702__auto____$1;

return h__8702__auto____$1;
}
});

<<<<<<< HEAD
clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16549,other16550){
var self__ = this;
var this16549__$1 = this;
return (!((other16550 == null))) && ((this16549__$1.constructor === other16550.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16549__$1.gen,other16550.gen)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16549__$1.__extmap,other16550.__extmap));
=======
clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15949,other15950){
var self__ = this;
var this15949__$1 = this;
return (!((other15950 == null))) && ((this15949__$1.constructor === other15950.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15949__$1.gen,other15950.gen)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15949__$1.__extmap,other15950.__extmap));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8943__auto__,k__8944__auto__){
var self__ = this;
var this__8943__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gen,null], null), null),k__8944__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8943__auto____$1),self__.__meta),k__8944__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8944__auto__)),null));
}
});

<<<<<<< HEAD
clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8942__auto__,k__8943__auto__,G__16547){
var self__ = this;
var this__8942__auto____$1 = this;
var pred__16554 = cljs.core.keyword_identical_QMARK_;
var expr__16555 = k__8943__auto__;
if(cljs.core.truth_((function (){var G__16557 = cljs.core.cst$kw$gen;
var G__16558 = expr__16555;
return (pred__16554.cljs$core$IFn$_invoke$arity$2 ? pred__16554.cljs$core$IFn$_invoke$arity$2(G__16557,G__16558) : pred__16554.call(null,G__16557,G__16558));
})())){
return (new clojure.test.check.generators.Generator(G__16547,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8943__auto__,G__16547),null));
=======
clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8941__auto__,k__8942__auto__,G__15947){
var self__ = this;
var this__8941__auto____$1 = this;
var pred__15954 = cljs.core.keyword_identical_QMARK_;
var expr__15955 = k__8942__auto__;
if(cljs.core.truth_((function (){var G__15957 = cljs.core.cst$kw$gen;
var G__15958 = expr__15955;
return (pred__15954.cljs$core$IFn$_invoke$arity$2 ? pred__15954.cljs$core$IFn$_invoke$arity$2(G__15957,G__15958) : pred__15954.call(null,G__15957,G__15958));
})())){
return (new clojure.test.check.generators.Generator(G__15947,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8942__auto__,G__15947),null));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8946__auto__){
var self__ = this;
var this__8946__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gen,self__.gen],null))], null),self__.__extmap));
});

<<<<<<< HEAD
clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8934__auto__,G__16547){
var self__ = this;
var this__8934__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__16547,self__.__extmap,self__.__hash));
=======
clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8933__auto__,G__15947){
var self__ = this;
var this__8933__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__15947,self__.__extmap,self__.__hash));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8939__auto__,entry__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8940__auto__)){
return this__8939__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8940__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8940__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8939__auto____$1,entry__8940__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gen], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__8972__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__8972__auto__,writer__8973__auto__){
return cljs.core._write(writer__8973__auto__,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

<<<<<<< HEAD
clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__16551){
return (new clojure.test.check.generators.Generator(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(G__16551),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16551,cljs.core.cst$kw$gen)),null));
=======
clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__15951){
return (new clojure.test.check.generators.Generator(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(G__15951),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15951,cljs.core.cst$kw$gen)),null));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
<<<<<<< HEAD
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__16560,rnd,size){
var map__16561 = p__16560;
var map__16561__$1 = ((((!((map__16561 == null)))?((((map__16561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16561):map__16561);
var generator_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,cljs.core.cst$kw$gen);
=======
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__15960,rnd,size){
var map__15961 = p__15960;
var map__15961__$1 = ((((!((map__15961 == null)))?((((map__15961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15961):map__15961);
var generator_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15961__$1,cljs.core.cst$kw$gen);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (generator_fn.cljs$core$IFn$_invoke$arity$2 ? generator_fn.cljs$core$IFn$_invoke$arity$2(rnd,size) : generator_fn.call(null,rnd,size));
});
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen((function (rnd,size){
return value;
}));
});
<<<<<<< HEAD
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__16563){
var map__16564 = p__16563;
var map__16564__$1 = ((((!((map__16564 == null)))?((((map__16564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16564):map__16564);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16564__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__16564,map__16564__$1,h){
return (function (rnd,size){
var G__16566 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(rnd,size) : h.call(null,rnd,size));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__16566) : k.call(null,G__16566));
});})(map__16564,map__16564__$1,h))
);
});
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__16567,k){
var map__16568 = p__16567;
var map__16568__$1 = ((((!((map__16568 == null)))?((((map__16568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16568):map__16568);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16568__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__16568,map__16568__$1,h){
return (function (rnd,size){
var vec__16570 = clojure.test.check.random.split(rnd);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16570,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16570,(1),null);
var inner = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(r1,size) : h.call(null,r1,size));
var map__16573 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(inner) : k.call(null,inner));
var map__16573__$1 = ((((!((map__16573 == null)))?((((map__16573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16573):map__16573);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16573__$1,cljs.core.cst$kw$gen);
return (result.cljs$core$IFn$_invoke$arity$2 ? result.cljs$core$IFn$_invoke$arity$2(r2,size) : result.call(null,r2,size));
});})(map__16568,map__16568__$1,h))
=======
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__15963){
var map__15964 = p__15963;
var map__15964__$1 = ((((!((map__15964 == null)))?((((map__15964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15964):map__15964);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15964__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__15964,map__15964__$1,h){
return (function (rnd,size){
var G__15966 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(rnd,size) : h.call(null,rnd,size));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15966) : k.call(null,G__15966));
});})(map__15964,map__15964__$1,h))
);
});
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__15967,k){
var map__15968 = p__15967;
var map__15968__$1 = ((((!((map__15968 == null)))?((((map__15968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15968):map__15968);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15968__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__15968,map__15968__$1,h){
return (function (rnd,size){
var vec__15970 = clojure.test.check.random.split(rnd);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(1),null);
var inner = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(r1,size) : h.call(null,r1,size));
var map__15973 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(inner) : k.call(null,inner));
var map__15973__$1 = ((((!((map__15973 == null)))?((((map__15973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15973):map__15973);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15973__$1,cljs.core.cst$kw$gen);
return (result.cljs$core$IFn$_invoke$arity$2 ? result.cljs$core$IFn$_invoke$arity$2(r2,size) : result.call(null,r2,size));
});})(map__15968,map__15968__$1,h))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
});
/**
 * Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
<<<<<<< HEAD
var vec__16575 = clojure.test.check.random.split(rr);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16575,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16575,(1),null);
=======
var vec__15975 = clojure.test.check.random.split(rr);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15975,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15975,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.cons(r1,(clojure.test.check.generators.lazy_random_states.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.lazy_random_states.cljs$core$IFn$_invoke$arity$1(r2) : clojure.test.check.generators.lazy_random_states.call(null,r2)));
}),null,null));
});
/**
 * Takes a sequence of generators and returns a generator of sequences (er, vectors).
 */
clojure.test.check.generators.gen_seq__GT_seq_gen = (function clojure$test$check$generators$gen_seq__GT_seq_gen(gens){
return clojure.test.check.generators.make_gen((function (rnd,size){
<<<<<<< HEAD
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__16578_SHARP_,p2__16579_SHARP_){
return clojure.test.check.generators.call_gen(p1__16578_SHARP_,p2__16579_SHARP_,size);
=======
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__15978_SHARP_,p2__15979_SHARP_){
return clojure.test.check.generators.call_gen(p1__15978_SHARP_,p2__15979_SHARP_,size);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),gens,clojure.test.check.random.split_n(rnd,cljs.core.count(gens)));
}));
});
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to fmap must be a generator","\n","(generator? gen)"].join('')));
}

<<<<<<< HEAD
return clojure.test.check.generators.gen_fmap((function (p1__16580_SHARP_){
return clojure.test.check.rose_tree.fmap(f,p1__16580_SHARP_);
=======
return clojure.test.check.generators.gen_fmap((function (p1__15980_SHARP_){
return clojure.test.check.rose_tree.fmap(f,p1__15980_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),gen);
});
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators.
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.pure(value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(k){
return (function (rose){
return clojure.test.check.generators.gen_fmap(clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen((function (rnd,size){
<<<<<<< HEAD
return clojure.test.check.rose_tree.fmap((function (p1__16581_SHARP_){
return clojure.test.check.generators.call_gen(p1__16581_SHARP_,rnd,size);
=======
return clojure.test.check.rose_tree.fmap((function (p1__15981_SHARP_){
return clojure.test.check.generators.call_gen(p1__15981_SHARP_,rnd,size);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),clojure.test.check.rose_tree.fmap(k,rose));
})));
});
});
/**
 * Create a new generator that passes the result of `gen` into function
 *   `k`. `k` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator which first generates a vector of integers, and
 *   then chooses a random element from that vector:
 * 
 *    (gen/bind (gen/such-that not-empty (gen/vector gen/int))
 *              ;; this function takes a realized vector,
 *              ;; and then returns a new generator which
 *              ;; chooses a random element from it
 *              gen/elements)
 * 
 *   
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,k){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to bind must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(generator,clojure.test.check.generators.bind_helper(k));
});
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),max_size));
});
/**
 * Return a sequence of realized values from `generator`.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
<<<<<<< HEAD
var G__16585 = arguments.length;
switch (G__16585) {
=======
var G__15985 = arguments.length;
switch (G__15985) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2(generator,(100));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (r,size_seq){
<<<<<<< HEAD
return (function (p1__16582_SHARP_,p2__16583_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,p1__16582_SHARP_,p2__16583_SHARP_));
=======
return (function (p1__15982_SHARP_,p2__15983_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,p1__15982_SHARP_,p2__15983_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states(r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
<<<<<<< HEAD
var G__16588 = arguments.length;
switch (G__16588) {
=======
var G__15988 = arguments.length;
switch (G__15988) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2(generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to sample must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_samples,clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1(generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;

/**
 * Returns a single sample value from the generator, using a default
 *   size of 30.
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
<<<<<<< HEAD
var G__16591 = arguments.length;
switch (G__16591) {
=======
var G__15991 = arguments.length;
switch (G__15991) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2(generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 2;

clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
<<<<<<< HEAD
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16593_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__16593_SHARP_);
}),cljs.core.iterate((function (p1__16594_SHARP_){
return cljs.core.quot(p1__16594_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16595_SHARP_){
return (integer - p1__16595_SHARP_);
=======
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15993_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__15993_SHARP_);
}),cljs.core.iterate((function (p1__15994_SHARP_){
return cljs.core.quot(p1__15994_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15995_SHARP_){
return (integer - p1__15995_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),clojure.test.check.generators.halfs(integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose(value,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.int_rose_tree,clojure.test.check.generators.shrink_int(value)));
});
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
<<<<<<< HEAD
return cljs.core.long$((function (){var G__16596 = (lower + ((factor * (1.0 + upper)) - (factor * lower)));
return Math.floor(G__16596);
=======
return cljs.core.long$((function (){var G__15996 = (lower + ((factor * (1.0 + upper)) - (factor * lower)));
return Math.floor(G__15996);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})());
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long(clojure.test.check.random.rand_double(rnd),lower,upper);
});
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen((function (rnd,size){
var sized_gen__$1 = (sized_gen.cljs$core$IFn$_invoke$arity$1 ? sized_gen.cljs$core$IFn$_invoke$arity$1(size) : sized_gen.call(null,size));
return clojure.test.check.generators.call_gen(sized_gen__$1,rnd,size);
}));
});
/**
 * Create a new generator with `size` always bound to `n`.
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","Second arg to resize must be a generator","\n","(generator? generator)"].join('')));
}

<<<<<<< HEAD
var map__16597 = generator;
var map__16597__$1 = ((((!((map__16597 == null)))?((((map__16597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16597):map__16597);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16597__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__16597,map__16597__$1,gen){
return (function (rnd,_size){
return (gen.cljs$core$IFn$_invoke$arity$2 ? gen.cljs$core$IFn$_invoke$arity$2(rnd,n) : gen.call(null,rnd,n));
});})(map__16597,map__16597__$1,gen))
=======
var map__15997 = generator;
var map__15997__$1 = ((((!((map__15997 == null)))?((((map__15997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15997):map__15997);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15997__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__15997,map__15997__$1,gen){
return (function (rnd,_size){
return (gen.cljs$core$IFn$_invoke$arity$2 ? gen.cljs$core$IFn$_invoke$arity$2(rnd,n) : gen.call(null,rnd,n));
});})(map__15997,map__15997__$1,gen))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
});
/**
 * Create a new generator that modifies the size parameter by the given function. Intended to
 * support generators with sizes that need to grow at different rates compared to the normal
 * linear scaling.
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized((function (n){
return clojure.test.check.generators.resize((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n)),generator);
}));
});
/**
 * Create a generator that returns numbers in the range
 *   `lower` to `upper`, inclusive.
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen((function (rnd,_size){
var value = clojure.test.check.generators.rand_range(rnd,lower,upper);
return clojure.test.check.rose_tree.filter(((function (value){
<<<<<<< HEAD
return (function (p1__16599_SHARP_){
return ((p1__16599_SHARP_ >= lower)) && ((p1__16599_SHARP_ <= upper));
=======
return (function (p1__15999_SHARP_){
return ((p1__15999_SHARP_ >= lower)) && ((p1__15999_SHARP_ <= upper));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(value))
,clojure.test.check.generators.int_rose_tree(value));
}));
});
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *   Examples:
 * 
 *    (one-of [gen/int gen/boolean (gen/vector gen/int)])
 * 
 *   
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Arg to one-of must be a collection of generators","\n","(every? generator? generators)"].join('')));
}

<<<<<<< HEAD
return clojure.test.check.generators.bind(clojure.test.check.generators.choose((0),(cljs.core.count(generators) - (1))),(function (p1__16600_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(generators,p1__16600_SHARP_);
}));
});
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__16601,n){
while(true){
var vec__16602 = p__16601;
var seq__16603 = cljs.core.seq(vec__16602);
var first__16604 = cljs.core.first(seq__16603);
var seq__16603__$1 = cljs.core.next(seq__16603);
var h = first__16604;
var tail = seq__16603__$1;
var vec__16605 = h;
var chance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16605,(0),null);
var gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16605,(1),null);
if((n <= chance)){
return gen;
} else {
var G__16608 = tail;
var G__16609 = (n - chance);
p__16601 = G__16608;
n = G__16609;
=======
return clojure.test.check.generators.bind(clojure.test.check.generators.choose((0),(cljs.core.count(generators) - (1))),(function (p1__16000_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(generators,p1__16000_SHARP_);
}));
});
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__16001,n){
while(true){
var vec__16002 = p__16001;
var seq__16003 = cljs.core.seq(vec__16002);
var first__16004 = cljs.core.first(seq__16003);
var seq__16003__$1 = cljs.core.next(seq__16003);
var h = first__16004;
var tail = seq__16003__$1;
var vec__16005 = h;
var chance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16005,(0),null);
var gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16005,(1),null);
if((n <= chance)){
return gen;
} else {
var G__16008 = tail;
var G__16009 = (n - chance);
p__16001 = G__16008;
n = G__16009;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
break;
}
});
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods
 * 
 *   Examples:
 * 
 *    (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])
 *   
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
<<<<<<< HEAD
if(cljs.core.every_QMARK_((function (p__16611){
var vec__16612 = p__16611;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(1),null);
var and__8235__auto__ = typeof x === 'number';
if(and__8235__auto__){
=======
if(cljs.core.every_QMARK_((function (p__16011){
var vec__16012 = p__16011;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16012,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16012,(1),null);
var and__8234__auto__ = typeof x === 'number';
if(and__8234__auto__){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return clojure.test.check.generators.generator_QMARK_(g);
} else {
return and__8234__auto__;
}
}),pairs)){
} else {
throw (new Error(["Assert failed: ","Arg to frequency must be a list of [num generator] pairs","\n","(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)"].join('')));
}

var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs));
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((1),total),((function (total){
<<<<<<< HEAD
return (function (p1__16610_SHARP_){
return clojure.test.check.generators.pick(pairs,clojure.test.check.rose_tree.root(p1__16610_SHARP_));
=======
return (function (p1__16010_SHARP_){
return clojure.test.check.generators.pick(pairs,clojure.test.check.rose_tree.root(p1__16010_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(total))
);
});
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *   Examples:
 * 
 *    (gen/elements [:foo :bar :baz])
 *   
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq(coll)){
} else {
throw (new Error(["Assert failed: ","elements cannot be called with an empty collection","\n","(seq coll)"].join('')));
}

var v = cljs.core.vec(coll);
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(cljs.core.count(v) - (1))),((function (v){
<<<<<<< HEAD
return (function (p1__16615_SHARP_){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.fmap(v,p1__16615_SHARP_));
=======
return (function (p1__16015_SHARP_){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.fmap(v,p1__16015_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(v))
);
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(max_tries,pred,gen,tries_left,rng,size){
while(true){
if((tries_left === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Couldn't satisfy such-that predicate after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_tries)," tries."].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
<<<<<<< HEAD
var vec__16616 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616,(1),null);
var value = clojure.test.check.generators.call_gen(gen,r1,size);
if(cljs.core.truth_((function (){var G__16619 = clojure.test.check.rose_tree.root(value);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__16619) : pred.call(null,G__16619));
})())){
return clojure.test.check.rose_tree.filter(pred,value);
} else {
var G__16620 = max_tries;
var G__16621 = pred;
var G__16622 = gen;
var G__16623 = (tries_left - (1));
var G__16624 = r2;
var G__16625 = (size + (1));
max_tries = G__16620;
pred = G__16621;
gen = G__16622;
tries_left = G__16623;
rng = G__16624;
size = G__16625;
=======
var vec__16016 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16016,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16016,(1),null);
var value = clojure.test.check.generators.call_gen(gen,r1,size);
if(cljs.core.truth_((function (){var G__16019 = clojure.test.check.rose_tree.root(value);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__16019) : pred.call(null,G__16019));
})())){
return clojure.test.check.rose_tree.filter(pred,value);
} else {
var G__16020 = max_tries;
var G__16021 = pred;
var G__16022 = gen;
var G__16023 = (tries_left - (1));
var G__16024 = r2;
var G__16025 = (size + (1));
max_tries = G__16020;
pred = G__16021;
gen = G__16022;
tries_left = G__16023;
rng = G__16024;
size = G__16025;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
break;
}
});
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be throw. You can pass an optional
 *   third argument to change the number of times tried. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 *   
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
<<<<<<< HEAD
var G__16627 = arguments.length;
switch (G__16627) {
=======
var G__16027 = arguments.length;
switch (G__16027) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to such-that must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.make_gen((function (rand_seed,size){
return clojure.test.check.generators.such_that_helper(max_tries,pred,gen,max_tries,rand_seed,size);
}));
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/not-empty (gen/vector gen/boolean))
 *   
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to not-empty must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,gen);
});
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to no-shrink must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind(gen,(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.PersistentVector.EMPTY));
}));
});
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to shrink-2 must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind(gen,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 *   
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___16630 = arguments.length;
var i__9525__auto___16631 = (0);
while(true){
if((i__9525__auto___16631 < len__9524__auto___16630)){
args__9531__auto__.push((arguments[i__9525__auto___16631]));

var G__16632 = (i__9525__auto___16631 + (1));
i__9525__auto___16631 = G__16632;
=======
var args__9530__auto__ = [];
var len__9523__auto___16030 = arguments.length;
var i__9524__auto___16031 = (0);
while(true){
if((i__9524__auto___16031 < len__9523__auto___16030)){
args__9530__auto__.push((arguments[i__9524__auto___16031]));

var G__16032 = (i__9524__auto___16031 + (1));
i__9524__auto___16031 = G__16032;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Args to tuple must be generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(generators),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.zip(cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq16629){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16629));
=======
clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq16029){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16029));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 *   (Really returns a long)
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.choose((- size),size);
}));
/**
 * Generates natural numbers, starting at zero. Shrinks to zero.
 */
<<<<<<< HEAD
clojure.test.check.generators.nat = clojure.test.check.generators.fmap((function (p1__16633_SHARP_){
var G__16634 = cljs.core.long$(p1__16633_SHARP_);
return Math.abs(G__16634);
=======
clojure.test.check.generators.nat = clojure.test.check.generators.fmap((function (p1__16033_SHARP_){
var G__16034 = cljs.core.long$(p1__16033_SHARP_);
return Math.abs(G__16034);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),clojure.test.check.generators.int$);
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
<<<<<<< HEAD
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap((function (p1__16635_SHARP_){
return ((-1) * p1__16635_SHARP_);
=======
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap((function (p1__16035_SHARP_){
return ((-1) * p1__16035_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),clojure.test.check.generators.nat);
/**
 * Generate strictly positive integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap(cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Generate strictly negative integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap(cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Create a generator whose elements are chosen from `gen`. The count of the
 *   vector will be bounded by the `size` generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
<<<<<<< HEAD
var G__16638 = arguments.length;
switch (G__16638) {
=======
var G__16038 = arguments.length;
switch (G__16038) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","Arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

<<<<<<< HEAD
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__16636_SHARP_){
return clojure.test.check.generators.choose((0),p1__16636_SHARP_);
=======
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__16036_SHARP_){
return clojure.test.check.generators.choose((0),p1__16036_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose(min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.filter((function (v){
return ((cljs.core.count(v) >= min_elements)) && ((cljs.core.count(v) <= max_elements));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to list must be a generator","\n","(generator? generator)"].join('')));
}

<<<<<<< HEAD
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__16640_SHARP_){
return clojure.test.check.generators.choose((0),p1__16640_SHARP_);
=======
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__16040_SHARP_){
return clojure.test.check.generators.choose((0),p1__16040_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.list,roses));
}));
}));
});
<<<<<<< HEAD
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__16641){
var vec__16642 = p__16641;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16642,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16642,(1),null);
=======
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__16041){
var vec__16042 = p__16041;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coll,i2,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i1) : coll.call(null,i1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i1,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i2) : coll.call(null,i2))], 0));
});
/**
 * Create a generator that generates random permutations of `coll`. Shrinks
 *   toward the original collection: `coll`. `coll` will be turned into a vector,
 *   if it's not already.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var index_gen = clojure.test.check.generators.choose((0),(cljs.core.count(coll) - (1)));
return clojure.test.check.generators.fmap(((function (index_gen){
<<<<<<< HEAD
return (function (p1__16645_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.swap,cljs.core.vec(coll),p1__16645_SHARP_);
=======
return (function (p1__16045_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.swap,cljs.core.vec(coll),p1__16045_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(index_gen))
,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index_gen,index_gen], 0)),(0),((2) * cljs.core.count(coll))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *   Examples:
 * 
 *  (gen/hash-map :a gen/boolean :b gen/nat)
 *   
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___16648 = arguments.length;
var i__9525__auto___16649 = (0);
while(true){
if((i__9525__auto___16649 < len__9524__auto___16648)){
args__9531__auto__.push((arguments[i__9525__auto___16649]));

var G__16650 = (i__9525__auto___16649 + (1));
i__9525__auto___16649 = G__16650;
=======
var args__9530__auto__ = [];
var len__9523__auto___16048 = arguments.length;
var i__9524__auto___16049 = (0);
while(true){
if((i__9524__auto___16049 < len__9523__auto___16048)){
args__9530__auto__.push((arguments[i__9524__auto___16049]));

var G__16050 = (i__9524__auto___16049 + (1));
i__9524__auto___16049 = G__16050;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),kvs);
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(kvs));
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error(["Assert failed: ","Value args to hash-map must be generators","\n","(every? generator? vs)"].join('')));
}

return clojure.test.check.generators.fmap(((function (ks,vs){
<<<<<<< HEAD
return (function (p1__16646_SHARP_){
return cljs.core.zipmap(ks,p1__16646_SHARP_);
=======
return (function (p1__16046_SHARP_){
return cljs.core.zipmap(ks,p1__16046_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(ks,vs))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq16647){
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16647));
=======
clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq16047){
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16047));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return !((cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(s,k) == null));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) && ((cljs.core.count(rose_trees) < min_elements))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Couldn't generate enough distinct elements!",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$gen,gen,cljs.core.cst$kw$max_DASH_tries,max_tries,cljs.core.cst$kw$num_DASH_elements,num_elements,cljs.core.cst$kw$so_DASH_far,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,cljs.core.persistent_BANG_(rose_trees))], null));
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rose_trees),num_elements))){
return clojure.test.check.rose_tree.shrink(((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
<<<<<<< HEAD
var G__16657__delegate = function (rest__16651_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,rest__16651_SHARP_);
};
var G__16657 = function (var_args){
var rest__16651_SHARP_ = null;
if (arguments.length > 0) {
var G__16658__i = 0, G__16658__a = new Array(arguments.length -  0);
while (G__16658__i < G__16658__a.length) {G__16658__a[G__16658__i] = arguments[G__16658__i + 0]; ++G__16658__i;}
  rest__16651_SHARP_ = new cljs.core.IndexedSeq(G__16658__a,0,null);
} 
return G__16657__delegate.call(this,rest__16651_SHARP_);};
G__16657.cljs$lang$maxFixedArity = 0;
G__16657.cljs$lang$applyTo = (function (arglist__16659){
var rest__16651_SHARP_ = cljs.core.seq(arglist__16659);
return G__16657__delegate(rest__16651_SHARP_);
});
G__16657.cljs$core$IFn$_invoke$arity$variadic = G__16657__delegate;
return G__16657;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,(function (){var G__16652 = rng__$1;
var G__16653 = cljs.core.persistent_BANG_(rose_trees);
return (shuffle_fn.cljs$core$IFn$_invoke$arity$2 ? shuffle_fn.cljs$core$IFn$_invoke$arity$2(G__16652,G__16653) : shuffle_fn.call(null,G__16652,G__16653));
})());
} else {
var vec__16654 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16654,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16654,(1),null);
=======
var G__16057__delegate = function (rest__16051_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,rest__16051_SHARP_);
};
var G__16057 = function (var_args){
var rest__16051_SHARP_ = null;
if (arguments.length > 0) {
var G__16058__i = 0, G__16058__a = new Array(arguments.length -  0);
while (G__16058__i < G__16058__a.length) {G__16058__a[G__16058__i] = arguments[G__16058__i + 0]; ++G__16058__i;}
  rest__16051_SHARP_ = new cljs.core.IndexedSeq(G__16058__a,0,null);
} 
return G__16057__delegate.call(this,rest__16051_SHARP_);};
G__16057.cljs$lang$maxFixedArity = 0;
G__16057.cljs$lang$applyTo = (function (arglist__16059){
var rest__16051_SHARP_ = cljs.core.seq(arglist__16059);
return G__16057__delegate(rest__16051_SHARP_);
});
G__16057.cljs$core$IFn$_invoke$arity$variadic = G__16057__delegate;
return G__16057;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,(function (){var G__16052 = rng__$1;
var G__16053 = cljs.core.persistent_BANG_(rose_trees);
return (shuffle_fn.cljs$core$IFn$_invoke$arity$2 ? shuffle_fn.cljs$core$IFn$_invoke$arity$2(G__16052,G__16053) : shuffle_fn.call(null,G__16052,G__16053));
})());
} else {
var vec__16054 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16054,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16054,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var rose = clojure.test.check.generators.call_gen(gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root(rose);
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(root) : key_fn.call(null,root));
if(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_(s,k))){
<<<<<<< HEAD
var G__16660 = rose_trees;
var G__16661 = s;
var G__16662 = rng2;
var G__16663 = (size__$1 + (1));
var G__16664 = (tries + (1));
rose_trees = G__16660;
s = G__16661;
rng__$1 = G__16662;
size__$1 = G__16663;
tries = G__16664;
continue;
} else {
var G__16665 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(rose_trees,rose);
var G__16666 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,k);
var G__16667 = rng2;
var G__16668 = size__$1;
var G__16669 = (0);
rose_trees = G__16665;
s = G__16666;
rng__$1 = G__16667;
size__$1 = G__16668;
tries = G__16669;
=======
var G__16060 = rose_trees;
var G__16061 = s;
var G__16062 = rng2;
var G__16063 = (size__$1 + (1));
var G__16064 = (tries + (1));
rose_trees = G__16060;
s = G__16061;
rng__$1 = G__16062;
size__$1 = G__16063;
tries = G__16064;
continue;
} else {
var G__16065 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(rose_trees,rose);
var G__16066 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,k);
var G__16067 = rng2;
var G__16068 = size__$1;
var G__16069 = (0);
rose_trees = G__16065;
s = G__16066;
rng__$1 = G__16067;
size__$1 = G__16068;
tries = G__16069;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__8246__auto__ = cljs.core.empty_QMARK_(coll);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty(coll);
var v = cljs.core.vec(coll);
var card = cljs.core.count(coll);
var dec_card = (card - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (empty_coll,v,card,dec_card){
<<<<<<< HEAD
return (function (p__16670,idx){
var vec__16671 = p__16670;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(0),null);
var rng__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(1),null);
var vec__16674 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16674,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16674,(1),null);
=======
return (function (p__16070,idx){
var vec__16071 = p__16070;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16071,(0),null);
var rng__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16071,(1),null);
var vec__16074 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16074,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16074,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var swap_idx = clojure.test.check.generators.rand_range(rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap(v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(card))));
});
<<<<<<< HEAD
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__16683){
var map__16684 = p__16683;
var map__16684__$1 = ((((!((map__16684 == null)))?((((map__16684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16684):map__16684);
var num_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16684__$1,cljs.core.cst$kw$num_DASH_elements);
var min_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16684__$1,cljs.core.cst$kw$min_DASH_elements);
var max_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16684__$1,cljs.core.cst$kw$max_DASH_elements);
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16684__$1,cljs.core.cst$kw$max_DASH_tries,(10));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (_rng,coll){
return coll;
});})(map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
=======
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__16083){
var map__16084 = p__16083;
var map__16084__$1 = ((((!((map__16084 == null)))?((((map__16084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16084):map__16084);
var num_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16084__$1,cljs.core.cst$kw$num_DASH_elements);
var min_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16084__$1,cljs.core.cst$kw$min_DASH_elements);
var max_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16084__$1,cljs.core.cst$kw$max_DASH_elements);
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16084__$1,cljs.core.cst$kw$max_DASH_tries,(10));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (_rng,coll){
return coll;
});})(map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
var hard_min_elements = (function (){var or__8246__auto__ = num_elements;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = min_elements;
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
<<<<<<< HEAD
var size_pred = ((function (shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16677_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_elements,cljs.core.count(p1__16677_SHARP_));
});})(shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
=======
var size_pred = ((function (shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16077_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_elements,cljs.core.count(p1__16077_SHARP_));
});})(shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
if(((min_elements == null)) && ((max_elements == null))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

<<<<<<< HEAD
return clojure.test.check.generators.make_gen(((function (size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16678_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__16678_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries));
});})(size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
=======
return clojure.test.check.generators.make_gen(((function (size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16078_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__16078_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries));
});})(size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
} else {
var min_elements__$1 = (function (){var or__8246__auto__ = min_elements;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
<<<<<<< HEAD
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16679_SHARP_){
return ((min_elements__$1 <= cljs.core.count(p1__16679_SHARP_))) && ((cljs.core.count(p1__16679_SHARP_) <= max_elements));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16680_SHARP_){
return (min_elements__$1 <= cljs.core.count(p1__16680_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
);
return clojure.test.check.generators.gen_bind((cljs.core.truth_(max_elements)?clojure.test.check.generators.choose(min_elements__$1,max_elements):clojure.test.check.generators.sized(((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16681_SHARP_){
return clojure.test.check.generators.choose(min_elements__$1,(min_elements__$1 + p1__16681_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root(num_elements_rose);
return clojure.test.check.generators.make_gen(((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16682_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__16682_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16684,map__16684__$1,num_elements,min_elements,max_elements,max_tries))
=======
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16079_SHARP_){
return ((min_elements__$1 <= cljs.core.count(p1__16079_SHARP_))) && ((cljs.core.count(p1__16079_SHARP_) <= max_elements));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16080_SHARP_){
return (min_elements__$1 <= cljs.core.count(p1__16080_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
);
return clojure.test.check.generators.gen_bind((cljs.core.truth_(max_elements)?clojure.test.check.generators.choose(min_elements__$1,max_elements):clojure.test.check.generators.sized(((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16081_SHARP_){
return clojure.test.check.generators.choose(min_elements__$1,(min_elements__$1 + p1__16081_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root(num_elements_rose);
return clojure.test.check.generators.make_gen(((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__16082_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__16082_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__16084,map__16084__$1,num_elements,min_elements,max_elements,max_tries))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
);
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
<<<<<<< HEAD
var G__16687 = arguments.length;
switch (G__16687) {
=======
var G__16087 = arguments.length;
switch (G__16087) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
<<<<<<< HEAD
var G__16690 = arguments.length;
switch (G__16690) {
=======
var G__16090 = arguments.length;
switch (G__16090) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
<<<<<<< HEAD
var G__16693 = arguments.length;
switch (G__16693) {
=======
var G__16093 = arguments.length;
switch (G__16093) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
<<<<<<< HEAD
var G__16696 = arguments.length;
switch (G__16696) {
=======
var G__16096 = arguments.length;
switch (G__16096) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
<<<<<<< HEAD
var G__16699 = arguments.length;
switch (G__16699) {
=======
var G__16099 = arguments.length;
switch (G__16099) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = 2;

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
<<<<<<< HEAD
var G__16702 = arguments.length;
switch (G__16702) {
=======
var G__16102 = arguments.length;
switch (G__16102) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to sorted-set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.sorted_set(),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = 2;

/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
<<<<<<< HEAD
var G__16705 = arguments.length;
switch (G__16705) {
=======
var G__16105 = arguments.length;
switch (G__16105) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3(key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key_gen,val_gen], 0)),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = 3;

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen((function (rnd,_size){
return clojure.test.check.rose_tree.pure(clojure.test.check.random.rand_long(rnd));
}));
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((53),(2))) - (1));
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER);
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
});
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
<<<<<<< HEAD
var res = (function (){var G__16707 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs(G__16707);
} else {
return G__16707;
=======
var res = (function (){var G__16107 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs(G__16107);
} else {
return G__16107;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})();
while(true){
if(((min <= res)) && ((res <= max))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if(((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max))){
return res_SINGLEQUOTE_;
} else {
<<<<<<< HEAD
var G__16710 = ((function (){var G__16708 = res;
if(cljs.core.odd_QMARK_(res)){
var fexpr__16709 = (((res < (0)))?cljs.core.inc:cljs.core.dec);
return (fexpr__16709.cljs$core$IFn$_invoke$arity$1 ? fexpr__16709.cljs$core$IFn$_invoke$arity$1(G__16708) : fexpr__16709.call(null,G__16708));
} else {
return G__16708;
}
})() / (2));
res = G__16710;
=======
var G__16110 = ((function (){var G__16108 = res;
if(cljs.core.odd_QMARK_(res)){
var fexpr__16109 = (((res < (0)))?cljs.core.inc:cljs.core.dec);
return (fexpr__16109.cljs$core$IFn$_invoke$arity$1 ? fexpr__16109.cljs$core$IFn$_invoke$arity$1(G__16108) : fexpr__16109.call(null,G__16108));
} else {
return G__16108;
}
})() / (2));
res = G__16110;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized((function (size){
var size__$1 = (function (){var x__8598__auto__ = size;
var y__8599__auto__ = (1);
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
})();
var max_bit_count = (function (){var x__8605__auto__ = size__$1;
var y__8606__auto__ = (54);
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
})();
return clojure.test.check.generators.gen_fmap(((function (size__$1,max_bit_count){
return (function (rose){
<<<<<<< HEAD
var vec__16711 = clojure.test.check.rose_tree.root(rose);
var bit_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16711,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16711,(1),null);
=======
var vec__16111 = clojure.test.check.rose_tree.root(rose);
var bit_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return clojure.test.check.generators.int_rose_tree(clojure.test.check.generators.long__GT_large_integer(bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.choose((1),max_bit_count),clojure.test.check.generators.gen_raw_long], 0)));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 */
<<<<<<< HEAD
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__16717){
var map__16718 = p__16717;
var map__16718__$1 = ((((!((map__16718 == null)))?((((map__16718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16718):map__16718);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16718__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16718__$1,cljs.core.cst$kw$max);
var min__$1 = (function (){var or__8247__auto__ = min;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__16117){
var map__16118 = p__16117;
var map__16118__$1 = ((((!((map__16118 == null)))?((((map__16118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16118):map__16118);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16118__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16118__$1,cljs.core.cst$kw$max);
var min__$1 = (function (){var or__8246__auto__ = min;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__8246__auto__ = max;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

<<<<<<< HEAD
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(((function (min__$1,max__$1,map__16718,map__16718__$1,min,max){
return (function (p1__16714_SHARP_){
return ((min__$1 <= p1__16714_SHARP_)) && ((p1__16714_SHARP_ <= max__$1));
});})(min__$1,max__$1,map__16718,map__16718__$1,min,max))
,((((min__$1 <= (0))) && (((0) <= max__$1)))?clojure.test.check.generators.large_integer_STAR__STAR_(min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__16718,map__16718__$1,min,max){
return (function (p1__16715_SHARP_){
return (max__$1 + p1__16715_SHARP_);
});})(min__$1,max__$1,map__16718,map__16718__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((min__$1 - max__$1),(0))):clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__16718,map__16718__$1,min,max){
return (function (p1__16716_SHARP_){
return (min__$1 + p1__16716_SHARP_);
});})(min__$1,max__$1,map__16718,map__16718__$1,min,max))
=======
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(((function (min__$1,max__$1,map__16118,map__16118__$1,min,max){
return (function (p1__16114_SHARP_){
return ((min__$1 <= p1__16114_SHARP_)) && ((p1__16114_SHARP_ <= max__$1));
});})(min__$1,max__$1,map__16118,map__16118__$1,min,max))
,((((min__$1 <= (0))) && (((0) <= max__$1)))?clojure.test.check.generators.large_integer_STAR__STAR_(min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__16118,map__16118__$1,min,max){
return (function (p1__16115_SHARP_){
return (max__$1 + p1__16115_SHARP_);
});})(min__$1,max__$1,map__16118,map__16118__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((min__$1 - max__$1),(0))):clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__16118,map__16118__$1,min,max){
return (function (p1__16116_SHARP_){
return (min__$1 + p1__16116_SHARP_);
});})(min__$1,max__$1,map__16118,map__16118__$1,min,max))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,clojure.test.check.generators.large_integer_STAR__STAR_((0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_(cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE);
clojure.test.check.generators.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
<<<<<<< HEAD
return clojure.test.check.generators.choose((0),(function (){var G__16720 = cljs.core.long$(bit_count);
switch (G__16720) {
=======
return clojure.test.check.generators.choose((0),(function (){var G__16120 = cljs.core.long$(bit_count);
switch (G__16120) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
<<<<<<< HEAD
return clojure.test.check.generators.fmap((function (p__16721){
var vec__16722 = p__16721;
var upper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(0),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__16725 = (bit_count - (32));
return (clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1(G__16725) : clojure.test.check.generators.uniform_integer.call(null,G__16725));
=======
return clojure.test.check.generators.fmap((function (p__16121){
var vec__16122 = p__16121;
var upper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16122,(0),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16122,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__16125 = (bit_count - (32));
return (clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1(G__16125) : clojure.test.check.generators.uniform_integer.call(null,G__16125));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})(),(clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1((32)) : clojure.test.check.generators.uniform_integer.call(null,(32)))], 0)));
}
});
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
<<<<<<< HEAD
var G__16727 = ((out * (2)) + (n__$1 & (1)));
var G__16728 = (n__$1 / (2));
var G__16729 = (out_shifter / (2));
out = G__16727;
n__$1 = G__16728;
out_shifter = G__16729;
=======
var G__16127 = ((out * (2)) + (n__$1 & (1)));
var G__16128 = (n__$1 / (2));
var G__16129 = (out_shifter / (2));
out = G__16127;
n__$1 = G__16128;
out_shifter = G__16129;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap(clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(function (){var x__8605__auto__ = size;
var y__8606__auto__ = (52);
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer(clojure.test.check.rose_tree.root(rose));
}));
})));
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
<<<<<<< HEAD
var res = (function (){var G__16730 = (Math.log(x__$1) * Math.LOG2E);
return Math.floor(G__16730);
=======
var res = (function (){var G__16130 = (Math.log(x__$1) * Math.LOG2E);
return Math.floor(G__16130);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
var t = clojure.test.check.generators.scalb(x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized((function (size){
var qs8 = ((1) << cljs.core.quot((function (){var x__8605__auto__ = (200);
var y__8606__auto__ = size;
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
})(),(8)));
if(((lb <= (0))) && (((0) <= ub))){
return clojure.test.check.generators.choose((function (){var x__8598__auto__ = lb;
var y__8599__auto__ = (- qs8);
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
})(),(function (){var x__8605__auto__ = ub;
var y__8606__auto__ = qs8;
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose((function (){var x__8598__auto__ = lb;
var y__8599__auto__ = (ub - qs8);
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose(lb,(function (){var x__8605__auto__ = ub;
var y__8606__auto__ = (lb + qs8);
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
})());

}
}
}));
});
if(((lower_bound == null)) && ((upper_bound == null))){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(1023)),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0));
} else {
var lower_bound__$1 = (function (){var or__8246__auto__ = lower_bound;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__8246__auto__ = upper_bound;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__8598__auto__ = (-1023);
var y__8599__auto__ = clojure.test.check.generators.get_exponent(lower_bound__$1);
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
})();
var ubexp = (function (){var x__8598__auto__ = (-1023);
var y__8599__auto__ = clojure.test.check.generators.get_exponent(upper_bound__$1);
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(lbexp,ubexp),clojure.test.check.generators.return$(1.0)], 0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(ubexp,lbexp),clojure.test.check.generators.return$(-1.0)], 0));
} else {
return clojure.test.check.generators.fmap(((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
<<<<<<< HEAD
return (function (p__16731){
var vec__16732 = p__16731;
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16732,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16732,(1),null);
var pair = vec__16732;
=======
return (function (p__16131){
var vec__16132 = p__16131;
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16132,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16132,(1),null);
var pair = vec__16132;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if((((sign < (0))) && ((lbexp < exp))) || (((sign > (0))) && ((ubexp < exp)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(function (){var x__8598__auto__ = ubexp;
var y__8599__auto__ = lbexp;
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
})()),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0)));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
<<<<<<< HEAD
var vec__16735 = (function (){var G__16738 = exp;
var G__16739 = (- sign);
return (clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2(G__16738,G__16739) : clojure.test.check.generators.block_bounds.call(null,G__16738,G__16739));
})();
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16735,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16735,(1),null);
=======
var vec__16135 = (function (){var G__16138 = exp;
var G__16139 = (- sign);
return (clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2(G__16138,G__16139) : clojure.test.check.generators.block_bounds.call(null,G__16138,G__16139));
})();
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16135,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16135,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb(1.0,exp),clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if(((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

<<<<<<< HEAD
var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__16740_SHARP_){
return ((lower_bound <= p1__16740_SHARP_)) && ((p1__16740_SHARP_ <= upper_bound));
}):(function (p1__16741_SHARP_){
return (lower_bound <= p1__16741_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__16742_SHARP_){
return (p1__16742_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap(((function (pred){
return (function (p__16743){
var vec__16744 = p__16743;
var vec__16747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16744,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16747,(1),null);
var significand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16744,(1),null);
=======
var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__16140_SHARP_){
return ((lower_bound <= p1__16140_SHARP_)) && ((p1__16140_SHARP_ <= upper_bound));
}):(function (p1__16141_SHARP_){
return (lower_bound <= p1__16141_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__16142_SHARP_){
return (p1__16142_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap(((function (pred){
return (function (p__16143){
var vec__16144 = p__16143;
var vec__16147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16144,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16147,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16147,(1),null);
var significand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16144,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb(base,exp) * sign);
if(cljs.core.truth_((function (){var or__8246__auto__ = (pred == null);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}
})())){
return x;
} else {
<<<<<<< HEAD
var vec__16750 = clojure.test.check.generators.block_bounds(exp,sign);
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(1),null);
var block_lb = (function (){var G__16753 = low;
if(cljs.core.truth_(lower_bound)){
var x__8599__auto__ = G__16753;
var y__8600__auto__ = lower_bound;
return ((x__8599__auto__ > y__8600__auto__) ? x__8599__auto__ : y__8600__auto__);
} else {
return G__16753;
}
})();
var block_ub = (function (){var G__16754 = high;
if(cljs.core.truth_(upper_bound)){
var x__8606__auto__ = G__16754;
var y__8607__auto__ = upper_bound;
return ((x__8606__auto__ < y__8607__auto__) ? x__8606__auto__ : y__8607__auto__);
} else {
return G__16754;
=======
var vec__16150 = clojure.test.check.generators.block_bounds(exp,sign);
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16150,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16150,(1),null);
var block_lb = (function (){var G__16153 = low;
if(cljs.core.truth_(lower_bound)){
var x__8598__auto__ = G__16153;
var y__8599__auto__ = lower_bound;
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
} else {
return G__16153;
}
})();
var block_ub = (function (){var G__16154 = high;
if(cljs.core.truth_(upper_bound)){
var x__8605__auto__ = G__16154;
var y__8606__auto__ = upper_bound;
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
} else {
return G__16154;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__8598__auto__ = (function (){var x__8605__auto__ = x__$1;
var y__8606__auto__ = block_ub;
return ((x__8605__auto__ < y__8606__auto__) ? x__8605__auto__ : y__8606__auto__);
})();
var y__8599__auto__ = block_lb;
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.double_exp_and_sign(lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand], 0)));
<<<<<<< HEAD
var G__16755 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(pred,G__16755);
} else {
return G__16755;
=======
var G__16155 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(pred,G__16155);
} else {
return G__16155;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
<<<<<<< HEAD
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__16756){
var map__16757 = p__16756;
var map__16757__$1 = ((((!((map__16757 == null)))?((((map__16757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16757):map__16757);
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16757__$1,cljs.core.cst$kw$infinite_QMARK_,true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16757__$1,cljs.core.cst$kw$NaN_QMARK_,true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16757__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16757__$1,cljs.core.cst$kw$max);
var frequency_arg = (function (){var G__16759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite(min,max)], null)], null);
var G__16759__$1 = (((((min == null))?((max == null)) || ((0.0 <= max)):(((max == null))?(min <= 0.0):((min <= 0.0)) && ((0.0 <= max)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__16759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(0.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(-0.0)], null)], 0)):G__16759);
var G__16759__$2 = (cljs.core.truth_((function (){var and__8235__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__8235__auto__)){
=======
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__16156){
var map__16157 = p__16156;
var map__16157__$1 = ((((!((map__16157 == null)))?((((map__16157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16157):map__16157);
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16157__$1,cljs.core.cst$kw$infinite_QMARK_,true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16157__$1,cljs.core.cst$kw$NaN_QMARK_,true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16157__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16157__$1,cljs.core.cst$kw$max);
var frequency_arg = (function (){var G__16159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite(min,max)], null)], null);
var G__16159__$1 = (((((min == null))?((max == null)) || ((0.0 <= max)):(((max == null))?(min <= 0.0):((min <= 0.0)) && ((0.0 <= max)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__16159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(0.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(-0.0)], null)], 0)):G__16159);
var G__16159__$2 = (cljs.core.truth_((function (){var and__8234__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__8234__auto__)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (max == null);
} else {
return and__8234__auto__;
}
<<<<<<< HEAD
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16759__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.POS_INFINITY)], null)):G__16759__$1);
var G__16759__$3 = (cljs.core.truth_((function (){var and__8235__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__8235__auto__)){
=======
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16159__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.POS_INFINITY)], null)):G__16159__$1);
var G__16159__$3 = (cljs.core.truth_((function (){var and__8234__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__8234__auto__)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (min == null);
} else {
return and__8234__auto__;
}
<<<<<<< HEAD
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16759__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NEG_INFINITY)], null)):G__16759__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16759__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NAN)], null));
} else {
return G__16759__$3;
=======
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16159__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NEG_INFINITY)], null)):G__16159__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16159__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NAN)], null));
} else {
return G__16159__$3;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(frequency_arg))){
return cljs.core.second(cljs.core.first(frequency_arg));
} else {
return clojure.test.check.generators.frequency(frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((0),(255)));
/**
 * Generate only ascii character.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((32),(126)));
/**
 * Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((48),(57)),clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generate alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null));
/**
 * Generate characters that can be the char following first of a keyword.
 */
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate characters that can be the first char of a keyword.
 */
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char$));
/**
 * Generate ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_ascii));
/**
 * Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$((function (){var and__8234__auto__ = d;
if(cljs.core.truth_(and__8234__auto__)){
var and__8234__auto____$1 = (("+" === c)) || (("-" === c));
if(and__8234__auto____$1){
return clojure.test.check.generators.digit_QMARK_(d);
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
})());
});
/**
 * Generate the segment of a namespace.
 */
<<<<<<< HEAD
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap((function (p__16760){
var vec__16761 = p__16760;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__16764){
var vec__16765 = p__16764;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(0),null);
var vec__16768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16768,(0),null);
=======
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap((function (p__16160){
var vec__16161 = p__16160;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16161,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16161,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__16164){
var vec__16165 = p__16164;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(0),null);
var vec__16168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16168,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0))));
/**
 * Generate a namespace (or nil for no namespace).
 */
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap((function (v){
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.namespace_segment));
/**
 * Generate segments of a keyword (between \:)
 */
<<<<<<< HEAD
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap((function (p__16771){
var vec__16772 = p__16771;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16772,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16772,(1),null);
=======
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap((function (p__16171){
var vec__16172 = p__16171;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16172,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16172,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate segments of a keyword that can be first (between \:)
 */
<<<<<<< HEAD
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap((function (p__16775){
var vec__16776 = p__16775;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16776,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16776,(1),null);
=======
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap((function (p__16175){
var vec__16176 = p__16175;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16176,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16176,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate keywords without namespaces.
 */
<<<<<<< HEAD
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap((function (p__16779){
var vec__16780 = p__16779;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16780,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16780,(1),null);
=======
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap((function (p__16179){
var vec__16180 = p__16179;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.keyword_segment_rest)], 0)));
/**
 * Generate keywords with optional namespaces.
 */
<<<<<<< HEAD
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap((function (p__16783){
var vec__16784 = p__16783;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16784,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16784,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16784,(2),null);
=======
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap((function (p__16183){
var vec__16184 = p__16183;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(2),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
/**
 * Generate symbols without namespaces.
 */
<<<<<<< HEAD
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__16787){
var vec__16788 = p__16787;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16788,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16788,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__16791){
var vec__16792 = p__16791;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16792,(0),null);
var vec__16795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16792,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(0),null);
=======
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__16187){
var vec__16188 = p__16187;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16188,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16188,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__16191){
var vec__16192 = p__16191;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(0),null);
var vec__16195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16192,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16195,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generate symbols with optional namespaces.
 */
<<<<<<< HEAD
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__16798){
var vec__16799 = p__16798;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(2),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__16802){
var vec__16803 = p__16802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16803,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16803,(1),null);
var vec__16806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16803,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(0),null);
=======
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__16198){
var vec__16199 = p__16198;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16199,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16199,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16199,(2),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__16202){
var vec__16203 = p__16202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16203,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16203,(1),null);
var vec__16206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16203,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
<<<<<<< HEAD
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap((function (p__16809){
var vec__16810 = p__16809;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(1),null);
=======
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap((function (p__16209){
var vec__16210 = p__16209;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16210,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16210,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (a / b);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.int$,clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.zero_QMARK_),clojure.test.check.generators.int$)], 0)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink(clojure.test.check.generators.fmap((function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return (nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1(idx) : nibbles.call(null,idx)).toString((16));
});
var rhex = (((nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1((15)) : nibbles.call(null,(15))) & (3)) + (8)).toString((16));
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((7))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((9))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((10))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((11))),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((12))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((13))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((14))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((17))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((18))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((19))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((20))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((21))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((22))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((23))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((24))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((25))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((26))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((27))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((28))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((29))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((30)))].join(''));
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.choose((0),(15)),(31))));
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(inner_type),clojure.test.check.generators.list(inner_type),clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2(inner_type,inner_type)], null));
});
clojure.test.check.generators.recursive_helper = (function clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,height){
if((height === (0))){
return clojure.test.check.generators.resize(scalar_size,scalar_gen);
} else {
<<<<<<< HEAD
return clojure.test.check.generators.resize(children_size,(function (){var G__16813 = (function (){var G__16814 = container_gen_fn;
var G__16815 = scalar_gen;
var G__16816 = scalar_size;
var G__16817 = children_size;
var G__16818 = (height - (1));
return (clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5(G__16814,G__16815,G__16816,G__16817,G__16818) : clojure.test.check.generators.recursive_helper.call(null,G__16814,G__16815,G__16816,G__16817,G__16818));
})();
return (container_gen_fn.cljs$core$IFn$_invoke$arity$1 ? container_gen_fn.cljs$core$IFn$_invoke$arity$1(G__16813) : container_gen_fn.call(null,G__16813));
=======
return clojure.test.check.generators.resize(children_size,(function (){var G__16213 = (function (){var G__16214 = container_gen_fn;
var G__16215 = scalar_gen;
var G__16216 = scalar_size;
var G__16217 = children_size;
var G__16218 = (height - (1));
return (clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5(G__16214,G__16215,G__16216,G__16217,G__16218) : clojure.test.check.generators.recursive_helper.call(null,G__16214,G__16215,G__16216,G__16217,G__16218));
})();
return (container_gen_fn.cljs$core$IFn$_invoke$arity$1 ? container_gen_fn.cljs$core$IFn$_invoke$arity$1(G__16213) : container_gen_fn.call(null,G__16213));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})());
}
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 *   
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(scalar_gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to recursive-gen must be a generator","\n","(generator? scalar-gen)"].join('')));
}

return clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.bind(clojure.test.check.generators.choose((1),(5)),(function (height){
<<<<<<< HEAD
var children_size = (function (){var G__16819 = size;
var G__16820 = ((1) / height);
return Math.pow(G__16819,G__16820);
=======
var children_size = (function (){var G__16219 = size;
var G__16220 = ((1) / height);
return Math.pow(G__16219,G__16220);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
return clojure.test.check.generators.recursive_helper(container_gen_fn,scalar_gen,size,children_size,height);
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);
<<<<<<< HEAD
var ret__9570__auto___16829 = (function (){
=======
var ret__9569__auto___16229 = (function (){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___16830 = arguments.length;
var i__9525__auto___16831 = (0);
while(true){
if((i__9525__auto___16831 < len__9524__auto___16830)){
args__9531__auto__.push((arguments[i__9525__auto___16831]));

var G__16832 = (i__9525__auto___16831 + (1));
i__9525__auto___16831 = G__16832;
=======
var args__9530__auto__ = [];
var len__9523__auto___16230 = arguments.length;
var i__9524__auto___16231 = (0);
while(true){
if((i__9524__auto___16231 < len__9523__auto___16230)){
args__9530__auto__.push((arguments[i__9524__auto___16231]));

var G__16232 = (i__9524__auto___16231 + (1));
i__9524__auto___16231 = G__16232;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((3) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9531__auto__);
});

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ","First arg to gen/let must be a vector of bindings.","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw (new Error(["Assert failed: ","gen/let requires an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}

if(cljs.core.empty_QMARK_(bindings)){
<<<<<<< HEAD
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__9201__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16821__auto__),(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16821__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16821__auto__),(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16821__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
=======
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__9200__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16221__auto__),(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16221__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16221__auto__),(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$val__16221__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0))));
} else {
<<<<<<< HEAD
var vec__16826 = bindings;
var seq__16827 = cljs.core.seq(vec__16826);
var first__16828 = cljs.core.first(seq__16827);
var seq__16827__$1 = cljs.core.next(seq__16827);
var binding = first__16828;
var first__16828__$1 = cljs.core.first(seq__16827__$1);
var seq__16827__$2 = cljs.core.next(seq__16827__$1);
var gen = first__16828__$1;
var more = seq__16827__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),(function (){var x__9201__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9201__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9201__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9201__auto__ = binding;
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
=======
var vec__16226 = bindings;
var seq__16227 = cljs.core.seq(vec__16226);
var first__16228 = cljs.core.first(seq__16227);
var seq__16227__$1 = cljs.core.next(seq__16227);
var binding = first__16228;
var first__16228__$1 = cljs.core.first(seq__16227__$1);
var seq__16227__$2 = cljs.core.next(seq__16227__$1);
var gen = first__16228__$1;
var more = seq__16227__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),(function (){var x__9200__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9200__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9200__auto__ = binding;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$generators_SLASH_let),(function (){var x__9200__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(more))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0))));
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

<<<<<<< HEAD
clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq16822){
var G__16823 = cljs.core.first(seq16822);
var seq16822__$1 = cljs.core.next(seq16822);
var G__16824 = cljs.core.first(seq16822__$1);
var seq16822__$2 = cljs.core.next(seq16822__$1);
var G__16825 = cljs.core.first(seq16822__$2);
var seq16822__$3 = cljs.core.next(seq16822__$2);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic(G__16823,G__16824,G__16825,seq16822__$3);
=======
clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq16222){
var G__16223 = cljs.core.first(seq16222);
var seq16222__$1 = cljs.core.next(seq16222);
var G__16224 = cljs.core.first(seq16222__$1);
var seq16222__$2 = cljs.core.next(seq16222__$1);
var G__16225 = cljs.core.first(seq16222__$2);
var seq16222__$3 = cljs.core.next(seq16222__$2);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic(G__16223,G__16224,G__16225,seq16222__$3);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

return null;
})()
;
clojure.test.check.generators.let$.cljs$lang$macro = true;

