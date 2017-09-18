// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19416_SHARP_,p2__19417_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19416_SHARP_,p2__19417_SHARP_.getAttribute("static-id"),p2__19417_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19419 = arguments.length;
switch (G__19419) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__19420_19423 = init;
var G__19421_19424 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19420_19423,G__19421_19424) : f.call(null,G__19420_19423,G__19421_19424));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__19425 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__19426 = cljs.core.seq(vec__19425);
var first__19427 = cljs.core.first(seq__19426);
var seq__19426__$1 = cljs.core.next(seq__19426);
var f = first__19427;
var more = seq__19426__$1;
var vec__19428 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19428,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19428,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("8aadbafa26874bccb1751091733b8153")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19431_SHARP_){
return cljs.core.zipmap(p1__19431_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8247__auto__ = (function (){var and__8235__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8235__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8235__auto__;
}
})();
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
var G__19432 = (i + (1));
var G__19433 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19432;
ret = G__19433;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19435 = arguments.length;
switch (G__19435) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__19437 = (i + (1));
i = G__19437;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core.node[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8981__auto__.call(null,this$));
} else {
var m__8981__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8981__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__19438_19441 = hoplon.core.node;
var G__19439_19442 = "string";
var G__19440_19443 = ((function (G__19438_19441,G__19439_19442){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19438_19441,G__19439_19442))
;
goog.object.set(G__19438_19441,G__19439_19442,G__19440_19443);
goog.object.set(hoplon.core.INode,"number",true);

var G__19444_19448 = hoplon.core.node;
var G__19445_19449 = "number";
var G__19446_19450 = ((function (G__19444_19448,G__19445_19449){
return (function (this$){
var G__19447 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19447) : hoplon.core.$text.call(null,G__19447));
});})(G__19444_19448,G__19445_19449))
;
goog.object.set(G__19444_19448,G__19445_19449,G__19446_19450);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19453_SHARP_,p2__19452_SHARP_){
if((p2__19452_SHARP_ == null)){
return p1__19453_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19453_SHARP_,p2__19452_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__19460 = new$__$1;
var vec__19462 = G__19460;
var seq__19463 = cljs.core.seq(vec__19462);
var first__19464 = cljs.core.first(seq__19463);
var seq__19463__$1 = cljs.core.next(seq__19463);
var x = first__19464;
var xs = seq__19463__$1;
var G__19461 = hoplon.core.child_vec(this$);
var vec__19465 = G__19461;
var seq__19466 = cljs.core.seq(vec__19465);
var first__19467 = cljs.core.first(seq__19466);
var seq__19466__$1 = cljs.core.next(seq__19466);
var k = first__19467;
var ks = seq__19466__$1;
var kids = vec__19465;
var G__19460__$1 = G__19460;
var G__19461__$1 = G__19461;
while(true){
var vec__19468 = G__19460__$1;
var seq__19469 = cljs.core.seq(vec__19468);
var first__19470 = cljs.core.first(seq__19469);
var seq__19469__$1 = cljs.core.next(seq__19469);
var x__$1 = first__19470;
var xs__$1 = seq__19469__$1;
var vec__19471 = G__19461__$1;
var seq__19472 = cljs.core.seq(vec__19471);
var first__19473 = cljs.core.first(seq__19472);
var seq__19472__$1 = cljs.core.next(seq__19472);
var k__$1 = first__19473;
var ks__$1 = seq__19472__$1;
var kids__$1 = vec__19471;
if(cljs.core.truth_((function (){var or__8247__auto__ = x__$1;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return k__$1;
}
})())){
var G__19474 = xs__$1;
var G__19475 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__19460__$1 = G__19474;
G__19461__$1 = G__19475;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_19476 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_19476;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_19476,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not(hoplon.core.native_QMARK_(elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_(parent);

var kids_19479 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_19480 = cljs.core.count(cljs.core.deref(kids_19479));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19479,i_19480,child__$1){
return (function (p1__19478_SHARP_,p2__19477_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19479,cljs.core.assoc,i_19480,p2__19477_SHARP_);
});})(kids_19479,i_19480,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19479,cljs.core.assoc,i_19480,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__8235__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8235__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8235__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8235__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8235__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8235__auto__;
}
})())){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_(this$__$1))){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$hoplon$core_SLASH_unexpected_DASH_child_DASH_type,cljs.core.cst$kw$child,child,cljs.core.cst$kw$native_QMARK_,hoplon.core.native_QMARK_(child),cljs.core.cst$kw$managed_QMARK_,hoplon.core.managed_QMARK_(child),cljs.core.cst$kw$this,this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19481_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__19481_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19482_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19482_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__19483_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__19483_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_19484 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_19485 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__19486 = (function (){var and__8235__auto__ = attr_19485;
if(cljs.core.truth_(and__8235__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_19485),kk_19484);
} else {
return and__8235__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__19486)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_19485,cljs.core.assoc,kk_19484,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__19487_SHARP_){
return p1__19487_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__19488_SHARP_){
return p1__19488_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__19489_SHARP_){
return p1__19489_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__19490_SHARP_){
return p1__19490_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8981__auto__.call(null,this$,kvs));
} else {
var m__8981__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8981__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8981__auto__.call(null,this$,kvs));
} else {
var m__8981__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8981__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8981__auto__.call(null,this$,child));
} else {
var m__8981__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8981__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8981__auto__.call(null,this$,child));
} else {
var m__8981__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8981__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8981__auto__.call(null,this$,new$,existing));
} else {
var m__8981__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8981__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8981__auto__.call(null,this$,new$,existing));
} else {
var m__8981__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8981__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19496 = arguments.length;
switch (G__19496) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9547__auto__ = [];
var len__9524__auto___19498 = arguments.length;
var i__9525__auto___19499 = (0);
while(true){
if((i__9525__auto___19499 < len__9524__auto___19498)){
args_arr__9547__auto__.push((arguments[i__9525__auto___19499]));

var G__19500 = (i__9525__auto___19499 + (1));
i__9525__auto___19499 = G__19500;
continue;
} else {
}
break;
}

var argseq__9548__auto__ = (new cljs.core.IndexedSeq(args_arr__9547__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9548__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19492){
var G__19493 = cljs.core.first(seq19492);
var seq19492__$1 = cljs.core.next(seq19492);
var G__19494 = cljs.core.first(seq19492__$1);
var seq19492__$2 = cljs.core.next(seq19492__$1);
var G__19495 = cljs.core.first(seq19492__$2);
var seq19492__$3 = cljs.core.next(seq19492__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19493,G__19494,G__19495,seq19492__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19506 = arguments.length;
switch (G__19506) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9547__auto__ = [];
var len__9524__auto___19508 = arguments.length;
var i__9525__auto___19509 = (0);
while(true){
if((i__9525__auto___19509 < len__9524__auto___19508)){
args_arr__9547__auto__.push((arguments[i__9525__auto___19509]));

var G__19510 = (i__9525__auto___19509 + (1));
i__9525__auto___19509 = G__19510;
continue;
} else {
}
break;
}

var argseq__9548__auto__ = (new cljs.core.IndexedSeq(args_arr__9547__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9548__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19502){
var G__19503 = cljs.core.first(seq19502);
var seq19502__$1 = cljs.core.next(seq19502);
var G__19504 = cljs.core.first(seq19502__$1);
var seq19502__$2 = cljs.core.next(seq19502__$1);
var G__19505 = cljs.core.first(seq19502__$2);
var seq19502__$3 = cljs.core.next(seq19502__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19503,G__19504,G__19505,seq19502__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts19513_19531 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19513_19531){
return (function (ret__18514__auto__,p__19514){
var vec__19515 = p__19514;
var ___18515__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19515,(0),null);
var f__18516__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19515,(1),null);
var sym__18517__auto__ = (f__18516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18516__auto__.cljs$core$IFn$_invoke$arity$0() : f__18516__auto__.call(null));
var G__19518 = ret__18514__auto__;
if(cljs.core.truth_(sym__18517__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19518,sym__18517__auto__);
} else {
return G__19518;
}
});})(opts19513_19531))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19513_19531){
return (function (p1__18513__18518__auto__){
var G__19520 = cljs.core.first(p1__18513__18518__auto__);
var fexpr__19519 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19513_19531);
return (fexpr__19519.cljs$core$IFn$_invoke$arity$1 ? fexpr__19519.cljs$core$IFn$_invoke$arity$1(G__19520) : fexpr__19519.call(null,G__19520));
});})(opts19513_19531))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19513_19531){
return (function (){
var checked__18482__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/privacy-policy/18w8/k5ld58/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19513_19531);
if(cljs.core.truth_(checked__18482__auto__)){
hoplon.core._do_BANG_ = checked__18482__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19513_19531))
], null)))));

var opts19523 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19523){
return (function (ret__18514__auto__,p__19524){
var vec__19525 = p__19524;
var ___18515__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19525,(0),null);
var f__18516__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19525,(1),null);
var sym__18517__auto__ = (f__18516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18516__auto__.cljs$core$IFn$_invoke$arity$0() : f__18516__auto__.call(null));
var G__19528 = ret__18514__auto__;
if(cljs.core.truth_(sym__18517__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19528,sym__18517__auto__);
} else {
return G__19528;
}
});})(opts19523))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19523){
return (function (p1__18513__18518__auto__){
var G__19530 = cljs.core.first(p1__18513__18518__auto__);
var fexpr__19529 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19523);
return (fexpr__19529.cljs$core$IFn$_invoke$arity$1 ? fexpr__19529.cljs$core$IFn$_invoke$arity$1(G__19530) : fexpr__19529.call(null,G__19530));
});})(opts19523))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19523){
return (function (){
var checked__18482__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/privacy-policy/18w8/k5ld58/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19523);
if(cljs.core.truth_(checked__18482__auto__)){
hoplon.core._on_BANG_ = checked__18482__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19523))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__8980__auto__ = (((this$ == null))?null:this$);
var m__8981__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8980__auto__)]);
if(!((m__8981__auto__ == null))){
return (m__8981__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8981__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8981__auto__.call(null,this$,elem,value));
} else {
var m__8981__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8981__auto____$1 == null))){
return (m__8981__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8981__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8981__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__19534_SHARP_,p2__19533_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__19533_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_(elem,this$__$1,value);

}
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__19536 = arguments.length;
switch (G__19536) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__19538 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19539 = (0);
return setTimeout(G__19538,G__19539);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__19540_19558 = this$;
var G__19541_19559 = "_hoplonWhenDom";
var G__19542_19560 = [f];
goog.object.set(G__19540_19558,G__19541_19559,G__19542_19560);

var G__19543 = ((function (temp__5288__auto__){
return (function (){
var fexpr__19551 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19552 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__19553 = (20);
return setTimeout(G__19552,G__19553);
} else {
var seq__19554_19561 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19555_19562 = null;
var count__19556_19563 = (0);
var i__19557_19564 = (0);
while(true){
if((i__19557_19564 < count__19556_19563)){
var f_19565__$1 = chunk__19555_19562.cljs$core$IIndexed$_nth$arity$2(null,i__19557_19564);
(f_19565__$1.cljs$core$IFn$_invoke$arity$0 ? f_19565__$1.cljs$core$IFn$_invoke$arity$0() : f_19565__$1.call(null));

var G__19566 = seq__19554_19561;
var G__19567 = chunk__19555_19562;
var G__19568 = count__19556_19563;
var G__19569 = (i__19557_19564 + (1));
seq__19554_19561 = G__19566;
chunk__19555_19562 = G__19567;
count__19556_19563 = G__19568;
i__19557_19564 = G__19569;
continue;
} else {
var temp__5290__auto___19570 = cljs.core.seq(seq__19554_19561);
if(temp__5290__auto___19570){
var seq__19554_19571__$1 = temp__5290__auto___19570;
if(cljs.core.chunked_seq_QMARK_(seq__19554_19571__$1)){
var c__9178__auto___19572 = cljs.core.chunk_first(seq__19554_19571__$1);
var G__19573 = cljs.core.chunk_rest(seq__19554_19571__$1);
var G__19574 = c__9178__auto___19572;
var G__19575 = cljs.core.count(c__9178__auto___19572);
var G__19576 = (0);
seq__19554_19561 = G__19573;
chunk__19555_19562 = G__19574;
count__19556_19563 = G__19575;
i__19557_19564 = G__19576;
continue;
} else {
var f_19577__$1 = cljs.core.first(seq__19554_19571__$1);
(f_19577__$1.cljs$core$IFn$_invoke$arity$0 ? f_19577__$1.cljs$core$IFn$_invoke$arity$0() : f_19577__$1.call(null));

var G__19578 = cljs.core.next(seq__19554_19571__$1);
var G__19579 = null;
var G__19580 = (0);
var G__19581 = (0);
seq__19554_19561 = G__19578;
chunk__19555_19562 = G__19579;
count__19556_19563 = G__19580;
i__19557_19564 = G__19581;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5288__auto__))
;
return fexpr__19551();
});})(temp__5288__auto__))
;
var G__19544 = (0);
return setTimeout(G__19543,G__19544);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19590 = args;
var vec__19591 = G__19590;
var seq__19592 = cljs.core.seq(vec__19591);
var first__19593 = cljs.core.first(seq__19592);
var seq__19592__$1 = cljs.core.next(seq__19592);
var arg = first__19593;
var args__$1 = seq__19592__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19590__$1 = G__19590;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19594 = G__19590__$1;
var seq__19595 = cljs.core.seq(vec__19594);
var first__19596 = cljs.core.first(seq__19595);
var seq__19595__$1 = cljs.core.next(seq__19595);
var arg__$1 = first__19596;
var args__$2 = seq__19595__$1;
if(cljs.core.not((function (){var or__8247__auto__ = arg__$1;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19597 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__19590__$1,attr__$2,kids__$2,vec__19594,seq__19595,first__19596,seq__19595__$1,arg__$1,args__$2,attr,kids,G__19590,vec__19591,seq__19592,first__19593,seq__19592__$1,arg,args__$1){
return (function (p1__19582_SHARP_,p2__19583_SHARP_,p3__19584_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19582_SHARP_,p2__19583_SHARP_,p3__19584_SHARP_);
});})(attr__$1,kids__$1,G__19590__$1,attr__$2,kids__$2,vec__19594,seq__19595,first__19596,seq__19595__$1,arg__$1,args__$2,attr,kids,G__19590,vec__19591,seq__19592,first__19593,seq__19592__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19598 = kids__$2;
var G__19599 = args__$2;
attr__$1 = G__19597;
kids__$1 = G__19598;
G__19590__$1 = G__19599;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19600 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19590__$1,attr__$2,kids__$2,vec__19594,seq__19595,first__19596,seq__19595__$1,arg__$1,args__$2,attr,kids,G__19590,vec__19591,seq__19592,first__19593,seq__19592__$1,arg,args__$1){
return (function (p1__19585_SHARP_,p2__19586_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19585_SHARP_,p2__19586_SHARP_,true);
});})(attr__$1,kids__$1,G__19590__$1,attr__$2,kids__$2,vec__19594,seq__19595,first__19596,seq__19595__$1,arg__$1,args__$2,attr,kids,G__19590,vec__19591,seq__19592,first__19593,seq__19592__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19601 = kids__$2;
var G__19602 = args__$2;
attr__$1 = G__19600;
kids__$1 = G__19601;
G__19590__$1 = G__19602;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__19603 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19604 = kids__$2;
var G__19605 = cljs.core.rest(args__$2);
attr__$1 = G__19603;
kids__$1 = G__19604;
G__19590__$1 = G__19605;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19606 = attr__$2;
var G__19607 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19608 = args__$2;
attr__$1 = G__19606;
kids__$1 = G__19607;
G__19590__$1 = G__19608;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19609 = attr__$2;
var G__19610 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19611 = args__$2;
attr__$1 = G__19609;
kids__$1 = G__19610;
G__19590__$1 = G__19611;
continue;
} else {
var G__19612 = attr__$2;
var G__19613 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19614 = args__$2;
attr__$1 = G__19612;
kids__$1 = G__19613;
G__19590__$1 = G__19614;
continue;

}
}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__19616_SHARP_,p2__19615_SHARP_,p3__19617_SHARP_){
hoplon.core._attr_BANG_(p2__19615_SHARP_,p1__19616_SHARP_,p3__19617_SHARP_);

return p1__19616_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19618){
var vec__19619 = p__19618;
var seq__19620 = cljs.core.seq(vec__19619);
var first__19621 = cljs.core.first(seq__19620);
var seq__19620__$1 = cljs.core.next(seq__19620);
var child_cell = first__19621;
var _ = seq__19620__$1;
var kids = vec__19619;
var this$__$1 = this$;
var seq__19622_19626 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19623_19627 = null;
var count__19624_19628 = (0);
var i__19625_19629 = (0);
while(true){
if((i__19625_19629 < count__19624_19628)){
var x_19630 = chunk__19623_19627.cljs$core$IIndexed$_nth$arity$2(null,i__19625_19629);
var temp__5290__auto___19631 = hoplon.core.__GT_node(x_19630);
if(cljs.core.truth_(temp__5290__auto___19631)){
var x_19632__$1 = temp__5290__auto___19631;
hoplon.core.append_child_BANG_(this$__$1,x_19632__$1);
} else {
}

var G__19633 = seq__19622_19626;
var G__19634 = chunk__19623_19627;
var G__19635 = count__19624_19628;
var G__19636 = (i__19625_19629 + (1));
seq__19622_19626 = G__19633;
chunk__19623_19627 = G__19634;
count__19624_19628 = G__19635;
i__19625_19629 = G__19636;
continue;
} else {
var temp__5290__auto___19637 = cljs.core.seq(seq__19622_19626);
if(temp__5290__auto___19637){
var seq__19622_19638__$1 = temp__5290__auto___19637;
if(cljs.core.chunked_seq_QMARK_(seq__19622_19638__$1)){
var c__9178__auto___19639 = cljs.core.chunk_first(seq__19622_19638__$1);
var G__19640 = cljs.core.chunk_rest(seq__19622_19638__$1);
var G__19641 = c__9178__auto___19639;
var G__19642 = cljs.core.count(c__9178__auto___19639);
var G__19643 = (0);
seq__19622_19626 = G__19640;
chunk__19623_19627 = G__19641;
count__19624_19628 = G__19642;
i__19625_19629 = G__19643;
continue;
} else {
var x_19644 = cljs.core.first(seq__19622_19638__$1);
var temp__5290__auto___19645__$1 = hoplon.core.__GT_node(x_19644);
if(cljs.core.truth_(temp__5290__auto___19645__$1)){
var x_19646__$1 = temp__5290__auto___19645__$1;
hoplon.core.append_child_BANG_(this$__$1,x_19646__$1);
} else {
}

var G__19647 = cljs.core.next(seq__19622_19638__$1);
var G__19648 = null;
var G__19649 = (0);
var G__19650 = (0);
seq__19622_19626 = G__19647;
chunk__19623_19627 = G__19648;
count__19624_19628 = G__19649;
i__19625_19629 = G__19650;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9531__auto__ = [];
var len__9524__auto___19657 = arguments.length;
var i__9525__auto___19658 = (0);
while(true){
if((i__9525__auto___19658 < len__9524__auto___19657)){
args__9531__auto__.push((arguments[i__9525__auto___19658]));

var G__19659 = (i__9525__auto___19658 + (1));
i__9525__auto___19658 = G__19659;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((1) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9532__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19653 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653,(1),null);
var G__19656 = this$;
hoplon.core.add_attributes_BANG_(G__19656,attr);

hoplon.core.add_children_BANG_(G__19656,kids);

return G__19656;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19651){
var G__19652 = cljs.core.first(seq19651);
var seq19651__$1 = cljs.core.next(seq19651);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19652,seq19651__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__19661 = arguments.length;
switch (G__19661) {
case 2:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$.getAttribute(cljs.core.name(k));
} else {
var G__19662 = this$.children;
var G__19663 = k;
return goog.object.get(G__19662,G__19663);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8247__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return not_found;
}
});

hoplon.core.lookup_BANG_.cljs$lang$maxFixedArity = 3;

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__19694 = null;
var G__19694__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19694__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19694__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19694__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19694__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19694__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19694__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19694__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19694__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19694__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19694__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19694__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19694__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19694__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19694__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19694__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19694__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19694__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19694__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19694__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19694__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19694__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19694 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19694__1.call(this,self__);
case 2:
return G__19694__2.call(this,self__,a);
case 3:
return G__19694__3.call(this,self__,a,b);
case 4:
return G__19694__4.call(this,self__,a,b,c);
case 5:
return G__19694__5.call(this,self__,a,b,c,d);
case 6:
return G__19694__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19694__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19694__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19694__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19694__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19694__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19694__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19694__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19694__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19694__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19694__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19694__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19694__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19694__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19694__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19694__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19694__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19694.cljs$core$IFn$_invoke$arity$1 = G__19694__1;
G__19694.cljs$core$IFn$_invoke$arity$2 = G__19694__2;
G__19694.cljs$core$IFn$_invoke$arity$3 = G__19694__3;
G__19694.cljs$core$IFn$_invoke$arity$4 = G__19694__4;
G__19694.cljs$core$IFn$_invoke$arity$5 = G__19694__5;
G__19694.cljs$core$IFn$_invoke$arity$6 = G__19694__6;
G__19694.cljs$core$IFn$_invoke$arity$7 = G__19694__7;
G__19694.cljs$core$IFn$_invoke$arity$8 = G__19694__8;
G__19694.cljs$core$IFn$_invoke$arity$9 = G__19694__9;
G__19694.cljs$core$IFn$_invoke$arity$10 = G__19694__10;
G__19694.cljs$core$IFn$_invoke$arity$11 = G__19694__11;
G__19694.cljs$core$IFn$_invoke$arity$12 = G__19694__12;
G__19694.cljs$core$IFn$_invoke$arity$13 = G__19694__13;
G__19694.cljs$core$IFn$_invoke$arity$14 = G__19694__14;
G__19694.cljs$core$IFn$_invoke$arity$15 = G__19694__15;
G__19694.cljs$core$IFn$_invoke$arity$16 = G__19694__16;
G__19694.cljs$core$IFn$_invoke$arity$17 = G__19694__17;
G__19694.cljs$core$IFn$_invoke$arity$18 = G__19694__18;
G__19694.cljs$core$IFn$_invoke$arity$19 = G__19694__19;
G__19694.cljs$core$IFn$_invoke$arity$20 = G__19694__20;
G__19694.cljs$core$IFn$_invoke$arity$21 = G__19694__21;
G__19694.cljs$core$IFn$_invoke$arity$22 = G__19694__22;
return G__19694;
})()
;

Element.prototype.apply = (function (self__,args19665){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19665)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
});

Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});

Element.prototype.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19666 = cljs.core.seq(kvs);
var chunk__19668 = null;
var count__19669 = (0);
var i__19670 = (0);
while(true){
if((i__19670 < count__19669)){
var vec__19672 = chunk__19668.cljs$core$IIndexed$_nth$arity$2(null,i__19670);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19672,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19672,(1),null);
var k_19695__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19695__$1);
} else {
e.setAttribute(k_19695__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19695__$1:v));
}

var G__19696 = seq__19666;
var G__19697 = chunk__19668;
var G__19698 = count__19669;
var G__19699 = (i__19670 + (1));
seq__19666 = G__19696;
chunk__19668 = G__19697;
count__19669 = G__19698;
i__19670 = G__19699;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19666);
if(temp__5290__auto__){
var seq__19666__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19666__$1)){
var c__9178__auto__ = cljs.core.chunk_first(seq__19666__$1);
var G__19700 = cljs.core.chunk_rest(seq__19666__$1);
var G__19701 = c__9178__auto__;
var G__19702 = cljs.core.count(c__9178__auto__);
var G__19703 = (0);
seq__19666 = G__19700;
chunk__19668 = G__19701;
count__19669 = G__19702;
i__19670 = G__19703;
continue;
} else {
var vec__19675 = cljs.core.first(seq__19666__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19675,(1),null);
var k_19704__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19704__$1);
} else {
e.setAttribute(k_19704__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19704__$1:v));
}

var G__19705 = cljs.core.next(seq__19666__$1);
var G__19706 = null;
var G__19707 = (0);
var G__19708 = (0);
seq__19666 = G__19705;
chunk__19668 = G__19706;
count__19669 = G__19707;
i__19670 = G__19708;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19678 = cljs.core.seq(kvs);
var chunk__19679 = null;
var count__19680 = (0);
var i__19681 = (0);
while(true){
if((i__19681 < count__19680)){
var vec__19682 = chunk__19679.cljs$core$IIndexed$_nth$arity$2(null,i__19681);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19682,(1),null);
var G__19685_19709 = e.style;
var G__19686_19710 = cljs.core.name(k);
var G__19687_19711 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19685_19709,G__19686_19710,G__19687_19711);

var G__19712 = seq__19678;
var G__19713 = chunk__19679;
var G__19714 = count__19680;
var G__19715 = (i__19681 + (1));
seq__19678 = G__19712;
chunk__19679 = G__19713;
count__19680 = G__19714;
i__19681 = G__19715;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19678);
if(temp__5290__auto__){
var seq__19678__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19678__$1)){
var c__9178__auto__ = cljs.core.chunk_first(seq__19678__$1);
var G__19716 = cljs.core.chunk_rest(seq__19678__$1);
var G__19717 = c__9178__auto__;
var G__19718 = cljs.core.count(c__9178__auto__);
var G__19719 = (0);
seq__19678 = G__19716;
chunk__19679 = G__19717;
count__19680 = G__19718;
i__19681 = G__19719;
continue;
} else {
var vec__19688 = cljs.core.first(seq__19678__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(1),null);
var G__19691_19720 = e.style;
var G__19692_19721 = cljs.core.name(k);
var G__19693_19722 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19691_19720,G__19692_19721,G__19693_19722);

var G__19723 = cljs.core.next(seq__19678__$1);
var G__19724 = null;
var G__19725 = (0);
var G__19726 = (0);
seq__19678 = G__19723;
chunk__19679 = G__19724;
count__19680 = G__19725;
i__19681 = G__19726;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.appendChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){
return (function() { 
var G__19730__delegate = function (args){
var vec__19727 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19727,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19727,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__19730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19731__i = 0, G__19731__a = new Array(arguments.length -  0);
while (G__19731__i < G__19731__a.length) {G__19731__a[G__19731__i] = arguments[G__19731__i + 0]; ++G__19731__i;}
  args = new cljs.core.IndexedSeq(G__19731__a,0,null);
} 
return G__19730__delegate.call(this,args);};
G__19730.cljs$lang$maxFixedArity = 0;
G__19730.cljs$lang$applyTo = (function (arglist__19732){
var args = cljs.core.seq(arglist__19732);
return G__19730__delegate(args);
});
G__19730.cljs$core$IFn$_invoke$arity$variadic = G__19730__delegate;
return G__19730;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__19736__delegate = function (args){
var vec__19733 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19733,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19733,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__19736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19737__i = 0, G__19737__a = new Array(arguments.length -  0);
while (G__19737__i < G__19737__a.length) {G__19737__a[G__19737__i] = arguments[G__19737__i + 0]; ++G__19737__i;}
  args = new cljs.core.IndexedSeq(G__19737__a,0,null);
} 
return G__19736__delegate.call(this,args);};
G__19736.cljs$lang$maxFixedArity = 0;
G__19736.cljs$lang$applyTo = (function (arglist__19738){
var args = cljs.core.seq(arglist__19738);
return G__19736__delegate(args);
});
G__19736.cljs$core$IFn$_invoke$arity$variadic = G__19736__delegate;
return G__19736;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9531__auto__ = [];
var len__9524__auto___19740 = arguments.length;
var i__9525__auto___19741 = (0);
while(true){
if((i__9525__auto___19741 < len__9524__auto___19740)){
args__9531__auto__.push((arguments[i__9525__auto___19741]));

var G__19742 = (i__9525__auto___19741 + (1));
i__9525__auto___19741 = G__19742;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19739){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19739));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton(document.head);
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton(document.body);
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19743_SHARP_){
return document.createTextNode(p1__19743_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19744_SHARP_){
return document.createComment(p1__19744_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19745 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19746 = (0);
return setTimeout(G__19745,G__19746);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__19747_SHARP_){
var e = p1__19747_SHARP_.target;
if(cljs.core.truth_((function (){var or__8247__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__19747_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9303__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9304__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__,hierarchy__9304__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__,hierarchy__9304__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9304__auto__,method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19748 = elem;
var G__19749 = cljs.core.cst$kw$attr;
var G__19750 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19748,G__19749,G__19750) : hoplon.core.do_BANG_.call(null,G__19748,G__19749,G__19750));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9303__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9304__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__,hierarchy__9304__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__,hierarchy__9304__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9304__auto__,method_table__9300__auto__,prefer_table__9301__auto__,method_cache__9302__auto__,cached_hierarchy__9303__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19755 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19753,G__19754){
return (G__19753.cljs$core$IFn$_invoke$arity$1 ? G__19753.cljs$core$IFn$_invoke$arity$1(G__19754) : G__19753.call(null,G__19754));
});})(on_deck))
);
return (fexpr__19755.cljs$core$IFn$_invoke$arity$2 ? fexpr__19755.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19755.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19751_SHARP_){
var fexpr__19759 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19757,G__19756,G__19758){
return (G__19756.cljs$core$IFn$_invoke$arity$3 ? G__19756.cljs$core$IFn$_invoke$arity$3(G__19757,G__19758,null) : G__19756.call(null,G__19757,G__19758,null));
});})(on_deck,items_seq))
);
return (fexpr__19759.cljs$core$IFn$_invoke$arity$3 ? fexpr__19759.cljs$core$IFn$_invoke$arity$3(items_seq,cljs.core.nth,p1__19751_SHARP_) : fexpr__19759.call(null,items_seq,cljs.core.nth,p1__19751_SHARP_));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19752_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19752_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19752_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19760 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19761 = null;
var count__19762 = (0);
var i__19763 = (0);
while(true){
if((i__19763 < count__19762)){
var i = chunk__19761.cljs$core$IIndexed$_nth$arity$2(null,i__19763);
var e_19766 = (function (){var or__8247__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
var G__19764 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19764) : tpl.call(null,G__19764));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19766);

var G__19767 = seq__19760;
var G__19768 = chunk__19761;
var G__19769 = count__19762;
var G__19770 = (i__19763 + (1));
seq__19760 = G__19767;
chunk__19761 = G__19768;
count__19762 = G__19769;
i__19763 = G__19770;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19760);
if(temp__5290__auto__){
var seq__19760__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19760__$1)){
var c__9178__auto__ = cljs.core.chunk_first(seq__19760__$1);
var G__19771 = cljs.core.chunk_rest(seq__19760__$1);
var G__19772 = c__9178__auto__;
var G__19773 = cljs.core.count(c__9178__auto__);
var G__19774 = (0);
seq__19760 = G__19771;
chunk__19761 = G__19772;
count__19762 = G__19773;
i__19763 = G__19774;
continue;
} else {
var i = cljs.core.first(seq__19760__$1);
var e_19775 = (function (){var or__8247__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
var G__19765 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19765) : tpl.call(null,G__19765));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19775);

var G__19776 = cljs.core.next(seq__19760__$1);
var G__19777 = null;
var G__19778 = (0);
var G__19779 = (0);
seq__19760 = G__19776;
chunk__19761 = G__19777;
count__19762 = G__19778;
i__19763 = G__19779;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9290__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9290__auto__)){
var e_19780 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19780);

var G__19781 = (_ + (1));
_ = G__19781;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__9531__auto__ = [];
var len__9524__auto___19791 = arguments.length;
var i__9525__auto___19792 = (0);
while(true){
if((i__9525__auto___19792 < len__9524__auto___19791)){
args__9531__auto__.push((arguments[i__9525__auto___19792]));

var G__19793 = (i__9525__auto___19792 + (1));
i__9525__auto___19792 = G__19793;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19783){
var vec__19784 = p__19783;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19784,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19790 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19784,default$){
return (function (G__19787,G__19789,G__19788){
var or__8247__auto__ = (function (){var and__8235__auto__ = (G__19787.cljs$core$IFn$_invoke$arity$1 ? G__19787.cljs$core$IFn$_invoke$arity$1(G__19788) : G__19787.call(null,G__19788));
if(cljs.core.truth_(and__8235__auto__)){
return G__19788;
} else {
return and__8235__auto__;
}
})();
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return G__19789;
}
});})(c,vec__19784,default$))
);
return (fexpr__19790.cljs$core$IFn$_invoke$arity$3 ? fexpr__19790.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19790.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19784,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19784,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19782){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19782));
});

