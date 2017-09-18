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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19528_SHARP_,p2__19529_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19528_SHARP_,p2__19529_SHARP_.getAttribute("static-id"),p2__19529_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19531 = arguments.length;
switch (G__19531) {
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
var G__19532_19535 = init;
var G__19533_19536 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19532_19535,G__19533_19536) : f.call(null,G__19532_19535,G__19533_19536));

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
var vec__19537 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__19538 = cljs.core.seq(vec__19537);
var first__19539 = cljs.core.first(seq__19538);
var seq__19538__$1 = cljs.core.next(seq__19538);
var f = first__19539;
var more = seq__19538__$1;
var vec__19540 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19540,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19540,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("6406679941474710b57a2eb321056c10")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19543_SHARP_){
return cljs.core.zipmap(p1__19543_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var or__8246__auto__ = (function (){var and__8234__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8234__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__19544 = (i + (1));
var G__19545 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19544;
ret = G__19545;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19547 = arguments.length;
switch (G__19547) {
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

var G__19549 = (i + (1));
i = G__19549;
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core.node[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8980__auto__.call(null,this$));
} else {
var m__8980__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8980__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__19550_19553 = hoplon.core.node;
var G__19551_19554 = "string";
var G__19552_19555 = ((function (G__19550_19553,G__19551_19554){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19550_19553,G__19551_19554))
;
goog.object.set(G__19550_19553,G__19551_19554,G__19552_19555);
goog.object.set(hoplon.core.INode,"number",true);

var G__19556_19560 = hoplon.core.node;
var G__19557_19561 = "number";
var G__19558_19562 = ((function (G__19556_19560,G__19557_19561){
return (function (this$){
var G__19559 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19559) : hoplon.core.$text.call(null,G__19559));
});})(G__19556_19560,G__19557_19561))
;
goog.object.set(G__19556_19560,G__19557_19561,G__19558_19562);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19565_SHARP_,p2__19564_SHARP_){
if((p2__19564_SHARP_ == null)){
return p1__19565_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19565_SHARP_,p2__19564_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__19572 = new$__$1;
var vec__19574 = G__19572;
var seq__19575 = cljs.core.seq(vec__19574);
var first__19576 = cljs.core.first(seq__19575);
var seq__19575__$1 = cljs.core.next(seq__19575);
var x = first__19576;
var xs = seq__19575__$1;
var G__19573 = hoplon.core.child_vec(this$);
var vec__19577 = G__19573;
var seq__19578 = cljs.core.seq(vec__19577);
var first__19579 = cljs.core.first(seq__19578);
var seq__19578__$1 = cljs.core.next(seq__19578);
var k = first__19579;
var ks = seq__19578__$1;
var kids = vec__19577;
var G__19572__$1 = G__19572;
var G__19573__$1 = G__19573;
while(true){
var vec__19580 = G__19572__$1;
var seq__19581 = cljs.core.seq(vec__19580);
var first__19582 = cljs.core.first(seq__19581);
var seq__19581__$1 = cljs.core.next(seq__19581);
var x__$1 = first__19582;
var xs__$1 = seq__19581__$1;
var vec__19583 = G__19573__$1;
var seq__19584 = cljs.core.seq(vec__19583);
var first__19585 = cljs.core.first(seq__19584);
var seq__19584__$1 = cljs.core.next(seq__19584);
var k__$1 = first__19585;
var ks__$1 = seq__19584__$1;
var kids__$1 = vec__19583;
if(cljs.core.truth_((function (){var or__8246__auto__ = x__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return k__$1;
}
})())){
var G__19586 = xs__$1;
var G__19587 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__19572__$1 = G__19586;
G__19573__$1 = G__19587;
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
var kids_19588 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_19588;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_19588,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_19591 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_19592 = cljs.core.count(cljs.core.deref(kids_19591));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19591,i_19592,child__$1){
return (function (p1__19590_SHARP_,p2__19589_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19591,cljs.core.assoc,i_19592,p2__19589_SHARP_);
});})(kids_19591,i_19592,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19591,cljs.core.assoc,i_19592,child__$1);
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

if(cljs.core.truth_((function (){var and__8234__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8234__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8234__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8234__auto__;
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
return (function (p1__19593_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__19593_SHARP_));
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
return (function (p1__19594_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19594_SHARP_], 0)));
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
return (function (p1__19595_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__19595_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_19596 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_19597 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__19598 = (function (){var and__8234__auto__ = attr_19597;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_19597),kk_19596);
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__19598)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_19597,cljs.core.assoc,kk_19596,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__19599_SHARP_){
return p1__19599_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__19600_SHARP_){
return p1__19600_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__19601_SHARP_){
return p1__19601_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__19602_SHARP_){
return p1__19602_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto__.call(null,this$,kvs));
} else {
var m__8980__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto____$1.call(null,this$,kvs));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto__.call(null,this$,kvs));
} else {
var m__8980__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8980__auto____$1.call(null,this$,kvs));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto__.call(null,this$,child));
} else {
var m__8980__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto____$1.call(null,this$,child));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto__.call(null,this$,child));
} else {
var m__8980__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8980__auto____$1.call(null,this$,child));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto__.call(null,this$,new$,existing));
} else {
var m__8980__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto____$1.call(null,this$,new$,existing));
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto__.call(null,this$,new$,existing));
} else {
var m__8980__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8980__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19608 = arguments.length;
switch (G__19608) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___19610 = arguments.length;
var i__9524__auto___19611 = (0);
while(true){
if((i__9524__auto___19611 < len__9523__auto___19610)){
args_arr__9546__auto__.push((arguments[i__9524__auto___19611]));

var G__19612 = (i__9524__auto___19611 + (1));
i__9524__auto___19611 = G__19612;
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19604){
var G__19605 = cljs.core.first(seq19604);
var seq19604__$1 = cljs.core.next(seq19604);
var G__19606 = cljs.core.first(seq19604__$1);
var seq19604__$2 = cljs.core.next(seq19604__$1);
var G__19607 = cljs.core.first(seq19604__$2);
var seq19604__$3 = cljs.core.next(seq19604__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19605,G__19606,G__19607,seq19604__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19618 = arguments.length;
switch (G__19618) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___19620 = arguments.length;
var i__9524__auto___19621 = (0);
while(true){
if((i__9524__auto___19621 < len__9523__auto___19620)){
args_arr__9546__auto__.push((arguments[i__9524__auto___19621]));

var G__19622 = (i__9524__auto___19621 + (1));
i__9524__auto___19621 = G__19622;
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19614){
var G__19615 = cljs.core.first(seq19614);
var seq19614__$1 = cljs.core.next(seq19614);
var G__19616 = cljs.core.first(seq19614__$1);
var seq19614__$2 = cljs.core.next(seq19614__$1);
var G__19617 = cljs.core.first(seq19614__$2);
var seq19614__$3 = cljs.core.next(seq19614__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19615,G__19616,G__19617,seq19614__$3);
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
var opts19625_19643 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19625_19643){
return (function (ret__19129__auto__,p__19626){
var vec__19627 = p__19626;
var ___19130__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(0),null);
var f__19131__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(1),null);
var sym__19132__auto__ = (f__19131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19131__auto__.cljs$core$IFn$_invoke$arity$0() : f__19131__auto__.call(null));
var G__19630 = ret__19129__auto__;
if(cljs.core.truth_(sym__19132__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19630,sym__19132__auto__);
} else {
return G__19630;
}
});})(opts19625_19643))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19625_19643){
return (function (p1__19128__19133__auto__){
var G__19632 = cljs.core.first(p1__19128__19133__auto__);
var fexpr__19631 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19625_19643);
return (fexpr__19631.cljs$core$IFn$_invoke$arity$1 ? fexpr__19631.cljs$core$IFn$_invoke$arity$1(G__19632) : fexpr__19631.call(null,G__19632));
});})(opts19625_19643))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19625_19643){
return (function (){
var checked__19097__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/home/circleci/.boot/cache/tmp/home/circleci/repo/4e/-1zzjnu/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19625_19643);
if(cljs.core.truth_(checked__19097__auto__)){
hoplon.core._do_BANG_ = checked__19097__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19625_19643))
], null)))));

var opts19635 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19635){
return (function (ret__19129__auto__,p__19636){
var vec__19637 = p__19636;
var ___19130__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19637,(0),null);
var f__19131__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19637,(1),null);
var sym__19132__auto__ = (f__19131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19131__auto__.cljs$core$IFn$_invoke$arity$0() : f__19131__auto__.call(null));
var G__19640 = ret__19129__auto__;
if(cljs.core.truth_(sym__19132__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19640,sym__19132__auto__);
} else {
return G__19640;
}
});})(opts19635))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19635){
return (function (p1__19128__19133__auto__){
var G__19642 = cljs.core.first(p1__19128__19133__auto__);
var fexpr__19641 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19635);
return (fexpr__19641.cljs$core$IFn$_invoke$arity$1 ? fexpr__19641.cljs$core$IFn$_invoke$arity$1(G__19642) : fexpr__19641.call(null,G__19642));
});})(opts19635))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19635){
return (function (){
var checked__19097__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/home/circleci/.boot/cache/tmp/home/circleci/repo/4e/-1zzjnu/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19635);
if(cljs.core.truth_(checked__19097__auto__)){
hoplon.core._on_BANG_ = checked__19097__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19635))
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
var x__8979__auto__ = (((this$ == null))?null:this$);
var m__8980__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8980__auto__.call(null,this$,elem,value));
} else {
var m__8980__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8980__auto____$1.call(null,this$,elem,value));
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
return (function (p1__19646_SHARP_,p2__19645_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__19645_SHARP_);
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
var G__19648 = arguments.length;
switch (G__19648) {
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
var G__19650 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19651 = (0);
return setTimeout(G__19650,G__19651);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__19652_19670 = this$;
var G__19653_19671 = "_hoplonWhenDom";
var G__19654_19672 = [f];
goog.object.set(G__19652_19670,G__19653_19671,G__19654_19672);

var G__19655 = ((function (temp__5288__auto__){
return (function (){
var fexpr__19663 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19664 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__19665 = (20);
return setTimeout(G__19664,G__19665);
} else {
var seq__19666_19673 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19667_19674 = null;
var count__19668_19675 = (0);
var i__19669_19676 = (0);
while(true){
if((i__19669_19676 < count__19668_19675)){
var f_19677__$1 = chunk__19667_19674.cljs$core$IIndexed$_nth$arity$2(null,i__19669_19676);
(f_19677__$1.cljs$core$IFn$_invoke$arity$0 ? f_19677__$1.cljs$core$IFn$_invoke$arity$0() : f_19677__$1.call(null));

var G__19678 = seq__19666_19673;
var G__19679 = chunk__19667_19674;
var G__19680 = count__19668_19675;
var G__19681 = (i__19669_19676 + (1));
seq__19666_19673 = G__19678;
chunk__19667_19674 = G__19679;
count__19668_19675 = G__19680;
i__19669_19676 = G__19681;
continue;
} else {
var temp__5290__auto___19682 = cljs.core.seq(seq__19666_19673);
if(temp__5290__auto___19682){
var seq__19666_19683__$1 = temp__5290__auto___19682;
if(cljs.core.chunked_seq_QMARK_(seq__19666_19683__$1)){
var c__9177__auto___19684 = cljs.core.chunk_first(seq__19666_19683__$1);
var G__19685 = cljs.core.chunk_rest(seq__19666_19683__$1);
var G__19686 = c__9177__auto___19684;
var G__19687 = cljs.core.count(c__9177__auto___19684);
var G__19688 = (0);
seq__19666_19673 = G__19685;
chunk__19667_19674 = G__19686;
count__19668_19675 = G__19687;
i__19669_19676 = G__19688;
continue;
} else {
var f_19689__$1 = cljs.core.first(seq__19666_19683__$1);
(f_19689__$1.cljs$core$IFn$_invoke$arity$0 ? f_19689__$1.cljs$core$IFn$_invoke$arity$0() : f_19689__$1.call(null));

var G__19690 = cljs.core.next(seq__19666_19683__$1);
var G__19691 = null;
var G__19692 = (0);
var G__19693 = (0);
seq__19666_19673 = G__19690;
chunk__19667_19674 = G__19691;
count__19668_19675 = G__19692;
i__19669_19676 = G__19693;
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
return fexpr__19663();
});})(temp__5288__auto__))
;
var G__19656 = (0);
return setTimeout(G__19655,G__19656);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19702 = args;
var vec__19703 = G__19702;
var seq__19704 = cljs.core.seq(vec__19703);
var first__19705 = cljs.core.first(seq__19704);
var seq__19704__$1 = cljs.core.next(seq__19704);
var arg = first__19705;
var args__$1 = seq__19704__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19702__$1 = G__19702;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19706 = G__19702__$1;
var seq__19707 = cljs.core.seq(vec__19706);
var first__19708 = cljs.core.first(seq__19707);
var seq__19707__$1 = cljs.core.next(seq__19707);
var arg__$1 = first__19708;
var args__$2 = seq__19707__$1;
if(cljs.core.not((function (){var or__8246__auto__ = arg__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19709 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__19702__$1,attr__$2,kids__$2,vec__19706,seq__19707,first__19708,seq__19707__$1,arg__$1,args__$2,attr,kids,G__19702,vec__19703,seq__19704,first__19705,seq__19704__$1,arg,args__$1){
return (function (p1__19694_SHARP_,p2__19695_SHARP_,p3__19696_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19694_SHARP_,p2__19695_SHARP_,p3__19696_SHARP_);
});})(attr__$1,kids__$1,G__19702__$1,attr__$2,kids__$2,vec__19706,seq__19707,first__19708,seq__19707__$1,arg__$1,args__$2,attr,kids,G__19702,vec__19703,seq__19704,first__19705,seq__19704__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19710 = kids__$2;
var G__19711 = args__$2;
attr__$1 = G__19709;
kids__$1 = G__19710;
G__19702__$1 = G__19711;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19712 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19702__$1,attr__$2,kids__$2,vec__19706,seq__19707,first__19708,seq__19707__$1,arg__$1,args__$2,attr,kids,G__19702,vec__19703,seq__19704,first__19705,seq__19704__$1,arg,args__$1){
return (function (p1__19697_SHARP_,p2__19698_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19697_SHARP_,p2__19698_SHARP_,true);
});})(attr__$1,kids__$1,G__19702__$1,attr__$2,kids__$2,vec__19706,seq__19707,first__19708,seq__19707__$1,arg__$1,args__$2,attr,kids,G__19702,vec__19703,seq__19704,first__19705,seq__19704__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19713 = kids__$2;
var G__19714 = args__$2;
attr__$1 = G__19712;
kids__$1 = G__19713;
G__19702__$1 = G__19714;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__19715 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19716 = kids__$2;
var G__19717 = cljs.core.rest(args__$2);
attr__$1 = G__19715;
kids__$1 = G__19716;
G__19702__$1 = G__19717;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19718 = attr__$2;
var G__19719 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19720 = args__$2;
attr__$1 = G__19718;
kids__$1 = G__19719;
G__19702__$1 = G__19720;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19721 = attr__$2;
var G__19722 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19723 = args__$2;
attr__$1 = G__19721;
kids__$1 = G__19722;
G__19702__$1 = G__19723;
continue;
} else {
var G__19724 = attr__$2;
var G__19725 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19726 = args__$2;
attr__$1 = G__19724;
kids__$1 = G__19725;
G__19702__$1 = G__19726;
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
return cljs.core.reduce_kv((function (p1__19728_SHARP_,p2__19727_SHARP_,p3__19729_SHARP_){
hoplon.core._attr_BANG_(p2__19727_SHARP_,p1__19728_SHARP_,p3__19729_SHARP_);

return p1__19728_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19730){
var vec__19731 = p__19730;
var seq__19732 = cljs.core.seq(vec__19731);
var first__19733 = cljs.core.first(seq__19732);
var seq__19732__$1 = cljs.core.next(seq__19732);
var child_cell = first__19733;
var _ = seq__19732__$1;
var kids = vec__19731;
var this$__$1 = this$;
var seq__19734_19738 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19735_19739 = null;
var count__19736_19740 = (0);
var i__19737_19741 = (0);
while(true){
if((i__19737_19741 < count__19736_19740)){
var x_19742 = chunk__19735_19739.cljs$core$IIndexed$_nth$arity$2(null,i__19737_19741);
var temp__5290__auto___19743 = hoplon.core.__GT_node(x_19742);
if(cljs.core.truth_(temp__5290__auto___19743)){
var x_19744__$1 = temp__5290__auto___19743;
hoplon.core.append_child_BANG_(this$__$1,x_19744__$1);
} else {
}

var G__19745 = seq__19734_19738;
var G__19746 = chunk__19735_19739;
var G__19747 = count__19736_19740;
var G__19748 = (i__19737_19741 + (1));
seq__19734_19738 = G__19745;
chunk__19735_19739 = G__19746;
count__19736_19740 = G__19747;
i__19737_19741 = G__19748;
continue;
} else {
var temp__5290__auto___19749 = cljs.core.seq(seq__19734_19738);
if(temp__5290__auto___19749){
var seq__19734_19750__$1 = temp__5290__auto___19749;
if(cljs.core.chunked_seq_QMARK_(seq__19734_19750__$1)){
var c__9177__auto___19751 = cljs.core.chunk_first(seq__19734_19750__$1);
var G__19752 = cljs.core.chunk_rest(seq__19734_19750__$1);
var G__19753 = c__9177__auto___19751;
var G__19754 = cljs.core.count(c__9177__auto___19751);
var G__19755 = (0);
seq__19734_19738 = G__19752;
chunk__19735_19739 = G__19753;
count__19736_19740 = G__19754;
i__19737_19741 = G__19755;
continue;
} else {
var x_19756 = cljs.core.first(seq__19734_19750__$1);
var temp__5290__auto___19757__$1 = hoplon.core.__GT_node(x_19756);
if(cljs.core.truth_(temp__5290__auto___19757__$1)){
var x_19758__$1 = temp__5290__auto___19757__$1;
hoplon.core.append_child_BANG_(this$__$1,x_19758__$1);
} else {
}

var G__19759 = cljs.core.next(seq__19734_19750__$1);
var G__19760 = null;
var G__19761 = (0);
var G__19762 = (0);
seq__19734_19738 = G__19759;
chunk__19735_19739 = G__19760;
count__19736_19740 = G__19761;
i__19737_19741 = G__19762;
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
var args__9530__auto__ = [];
var len__9523__auto___19769 = arguments.length;
var i__9524__auto___19770 = (0);
while(true){
if((i__9524__auto___19770 < len__9523__auto___19769)){
args__9530__auto__.push((arguments[i__9524__auto___19770]));

var G__19771 = (i__9524__auto___19770 + (1));
i__9524__auto___19770 = G__19771;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19765 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(1),null);
var G__19768 = this$;
hoplon.core.add_attributes_BANG_(G__19768,attr);

hoplon.core.add_children_BANG_(G__19768,kids);

return G__19768;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19763){
var G__19764 = cljs.core.first(seq19763);
var seq19763__$1 = cljs.core.next(seq19763);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19764,seq19763__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__19773 = arguments.length;
switch (G__19773) {
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
var G__19774 = this$.children;
var G__19775 = k;
return goog.object.get(G__19774,G__19775);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8246__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
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
var G__19806 = null;
var G__19806__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19806__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19806__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19806__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19806__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19806__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19806__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19806__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19806__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19806__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19806__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19806__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19806__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19806__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19806__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19806__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19806__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19806__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19806__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19806__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19806__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19806__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19806 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19806__1.call(this,self__);
case 2:
return G__19806__2.call(this,self__,a);
case 3:
return G__19806__3.call(this,self__,a,b);
case 4:
return G__19806__4.call(this,self__,a,b,c);
case 5:
return G__19806__5.call(this,self__,a,b,c,d);
case 6:
return G__19806__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19806__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19806__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19806__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19806__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19806__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19806__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19806__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19806__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19806__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19806__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19806__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19806__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19806__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19806__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19806__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19806__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19806.cljs$core$IFn$_invoke$arity$1 = G__19806__1;
G__19806.cljs$core$IFn$_invoke$arity$2 = G__19806__2;
G__19806.cljs$core$IFn$_invoke$arity$3 = G__19806__3;
G__19806.cljs$core$IFn$_invoke$arity$4 = G__19806__4;
G__19806.cljs$core$IFn$_invoke$arity$5 = G__19806__5;
G__19806.cljs$core$IFn$_invoke$arity$6 = G__19806__6;
G__19806.cljs$core$IFn$_invoke$arity$7 = G__19806__7;
G__19806.cljs$core$IFn$_invoke$arity$8 = G__19806__8;
G__19806.cljs$core$IFn$_invoke$arity$9 = G__19806__9;
G__19806.cljs$core$IFn$_invoke$arity$10 = G__19806__10;
G__19806.cljs$core$IFn$_invoke$arity$11 = G__19806__11;
G__19806.cljs$core$IFn$_invoke$arity$12 = G__19806__12;
G__19806.cljs$core$IFn$_invoke$arity$13 = G__19806__13;
G__19806.cljs$core$IFn$_invoke$arity$14 = G__19806__14;
G__19806.cljs$core$IFn$_invoke$arity$15 = G__19806__15;
G__19806.cljs$core$IFn$_invoke$arity$16 = G__19806__16;
G__19806.cljs$core$IFn$_invoke$arity$17 = G__19806__17;
G__19806.cljs$core$IFn$_invoke$arity$18 = G__19806__18;
G__19806.cljs$core$IFn$_invoke$arity$19 = G__19806__19;
G__19806.cljs$core$IFn$_invoke$arity$20 = G__19806__20;
G__19806.cljs$core$IFn$_invoke$arity$21 = G__19806__21;
G__19806.cljs$core$IFn$_invoke$arity$22 = G__19806__22;
return G__19806;
})()
;

Element.prototype.apply = (function (self__,args19777){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19777)));
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
var seq__19778 = cljs.core.seq(kvs);
var chunk__19780 = null;
var count__19781 = (0);
var i__19782 = (0);
while(true){
if((i__19782 < count__19781)){
var vec__19784 = chunk__19780.cljs$core$IIndexed$_nth$arity$2(null,i__19782);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19784,(1),null);
var k_19807__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19807__$1);
} else {
e.setAttribute(k_19807__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19807__$1:v));
}

var G__19808 = seq__19778;
var G__19809 = chunk__19780;
var G__19810 = count__19781;
var G__19811 = (i__19782 + (1));
seq__19778 = G__19808;
chunk__19780 = G__19809;
count__19781 = G__19810;
i__19782 = G__19811;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19778);
if(temp__5290__auto__){
var seq__19778__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19778__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__19778__$1);
var G__19812 = cljs.core.chunk_rest(seq__19778__$1);
var G__19813 = c__9177__auto__;
var G__19814 = cljs.core.count(c__9177__auto__);
var G__19815 = (0);
seq__19778 = G__19812;
chunk__19780 = G__19813;
count__19781 = G__19814;
i__19782 = G__19815;
continue;
} else {
var vec__19787 = cljs.core.first(seq__19778__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19787,(1),null);
var k_19816__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19816__$1);
} else {
e.setAttribute(k_19816__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19816__$1:v));
}

var G__19817 = cljs.core.next(seq__19778__$1);
var G__19818 = null;
var G__19819 = (0);
var G__19820 = (0);
seq__19778 = G__19817;
chunk__19780 = G__19818;
count__19781 = G__19819;
i__19782 = G__19820;
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
var seq__19790 = cljs.core.seq(kvs);
var chunk__19791 = null;
var count__19792 = (0);
var i__19793 = (0);
while(true){
if((i__19793 < count__19792)){
var vec__19794 = chunk__19791.cljs$core$IIndexed$_nth$arity$2(null,i__19793);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19794,(1),null);
var G__19797_19821 = e.style;
var G__19798_19822 = cljs.core.name(k);
var G__19799_19823 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19797_19821,G__19798_19822,G__19799_19823);

var G__19824 = seq__19790;
var G__19825 = chunk__19791;
var G__19826 = count__19792;
var G__19827 = (i__19793 + (1));
seq__19790 = G__19824;
chunk__19791 = G__19825;
count__19792 = G__19826;
i__19793 = G__19827;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19790);
if(temp__5290__auto__){
var seq__19790__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19790__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__19790__$1);
var G__19828 = cljs.core.chunk_rest(seq__19790__$1);
var G__19829 = c__9177__auto__;
var G__19830 = cljs.core.count(c__9177__auto__);
var G__19831 = (0);
seq__19790 = G__19828;
chunk__19791 = G__19829;
count__19792 = G__19830;
i__19793 = G__19831;
continue;
} else {
var vec__19800 = cljs.core.first(seq__19790__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19800,(1),null);
var G__19803_19832 = e.style;
var G__19804_19833 = cljs.core.name(k);
var G__19805_19834 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19803_19832,G__19804_19833,G__19805_19834);

var G__19835 = cljs.core.next(seq__19790__$1);
var G__19836 = null;
var G__19837 = (0);
var G__19838 = (0);
seq__19790 = G__19835;
chunk__19791 = G__19836;
count__19792 = G__19837;
i__19793 = G__19838;
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
var G__19842__delegate = function (args){
var vec__19839 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19839,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19839,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__19842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19843__i = 0, G__19843__a = new Array(arguments.length -  0);
while (G__19843__i < G__19843__a.length) {G__19843__a[G__19843__i] = arguments[G__19843__i + 0]; ++G__19843__i;}
  args = new cljs.core.IndexedSeq(G__19843__a,0,null);
} 
return G__19842__delegate.call(this,args);};
G__19842.cljs$lang$maxFixedArity = 0;
G__19842.cljs$lang$applyTo = (function (arglist__19844){
var args = cljs.core.seq(arglist__19844);
return G__19842__delegate(args);
});
G__19842.cljs$core$IFn$_invoke$arity$variadic = G__19842__delegate;
return G__19842;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__19848__delegate = function (args){
var vec__19845 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__19848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19849__i = 0, G__19849__a = new Array(arguments.length -  0);
while (G__19849__i < G__19849__a.length) {G__19849__a[G__19849__i] = arguments[G__19849__i + 0]; ++G__19849__i;}
  args = new cljs.core.IndexedSeq(G__19849__a,0,null);
} 
return G__19848__delegate.call(this,args);};
G__19848.cljs$lang$maxFixedArity = 0;
G__19848.cljs$lang$applyTo = (function (arglist__19850){
var args = cljs.core.seq(arglist__19850);
return G__19848__delegate(args);
});
G__19848.cljs$core$IFn$_invoke$arity$variadic = G__19848__delegate;
return G__19848;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9530__auto__ = [];
var len__9523__auto___19852 = arguments.length;
var i__9524__auto___19853 = (0);
while(true){
if((i__9524__auto___19853 < len__9523__auto___19852)){
args__9530__auto__.push((arguments[i__9524__auto___19853]));

var G__19854 = (i__9524__auto___19853 + (1));
i__9524__auto___19853 = G__19854;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19851){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19851));
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
hoplon.core.$text = (function hoplon$core$$text(p1__19855_SHARP_){
return document.createTextNode(p1__19855_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19856_SHARP_){
return document.createComment(p1__19856_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19857 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19858 = (0);
return setTimeout(G__19857,G__19858);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__19859_SHARP_){
var e = p1__19859_SHARP_.target;
if(cljs.core.truth_((function (){var or__8246__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__19859_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9299__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9303__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9303__auto__,method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19860 = elem;
var G__19861 = cljs.core.cst$kw$attr;
var G__19862 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19860,G__19861,G__19862) : hoplon.core.do_BANG_.call(null,G__19860,G__19861,G__19862));
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
hoplon.core.on_BANG_ = (function (){var method_table__9299__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9300__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9301__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9302__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9303__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__,hierarchy__9303__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9303__auto__,method_table__9299__auto__,prefer_table__9300__auto__,method_cache__9301__auto__,cached_hierarchy__9302__auto__));
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
var items_seq = (function (){var fexpr__19867 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19865,G__19866){
return (G__19865.cljs$core$IFn$_invoke$arity$1 ? G__19865.cljs$core$IFn$_invoke$arity$1(G__19866) : G__19865.call(null,G__19866));
});})(on_deck))
);
return (fexpr__19867.cljs$core$IFn$_invoke$arity$2 ? fexpr__19867.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19867.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19863_SHARP_){
var fexpr__19871 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19870,G__19869,G__19868){
return (G__19868.cljs$core$IFn$_invoke$arity$3 ? G__19868.cljs$core$IFn$_invoke$arity$3(G__19869,G__19870,null) : G__19868.call(null,G__19869,G__19870,null));
});})(on_deck,items_seq))
);
return (fexpr__19871.cljs$core$IFn$_invoke$arity$3 ? fexpr__19871.cljs$core$IFn$_invoke$arity$3(p1__19863_SHARP_,items_seq,cljs.core.nth) : fexpr__19871.call(null,p1__19863_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19864_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19864_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19864_SHARP_,cljs.core.rest);

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
var seq__19872 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19873 = null;
var count__19874 = (0);
var i__19875 = (0);
while(true){
if((i__19875 < count__19874)){
var i = chunk__19873.cljs$core$IIndexed$_nth$arity$2(null,i__19875);
var e_19878 = (function (){var or__8246__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__19876 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19876) : tpl.call(null,G__19876));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19878);

var G__19879 = seq__19872;
var G__19880 = chunk__19873;
var G__19881 = count__19874;
var G__19882 = (i__19875 + (1));
seq__19872 = G__19879;
chunk__19873 = G__19880;
count__19874 = G__19881;
i__19875 = G__19882;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19872);
if(temp__5290__auto__){
var seq__19872__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19872__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__19872__$1);
var G__19883 = cljs.core.chunk_rest(seq__19872__$1);
var G__19884 = c__9177__auto__;
var G__19885 = cljs.core.count(c__9177__auto__);
var G__19886 = (0);
seq__19872 = G__19883;
chunk__19873 = G__19884;
count__19874 = G__19885;
i__19875 = G__19886;
continue;
} else {
var i = cljs.core.first(seq__19872__$1);
var e_19887 = (function (){var or__8246__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__19877 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19877) : tpl.call(null,G__19877));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19887);

var G__19888 = cljs.core.next(seq__19872__$1);
var G__19889 = null;
var G__19890 = (0);
var G__19891 = (0);
seq__19872 = G__19888;
chunk__19873 = G__19889;
count__19874 = G__19890;
i__19875 = G__19891;
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
var n__9289__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9289__auto__)){
var e_19892 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19892);

var G__19893 = (_ + (1));
_ = G__19893;
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
var args__9530__auto__ = [];
var len__9523__auto___19903 = arguments.length;
var i__9524__auto___19904 = (0);
while(true){
if((i__9524__auto___19904 < len__9523__auto___19903)){
args__9530__auto__.push((arguments[i__9524__auto___19904]));

var G__19905 = (i__9524__auto___19904 + (1));
i__9524__auto___19904 = G__19905;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19895){
var vec__19896 = p__19895;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19896,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19902 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19896,default$){
return (function (G__19899,G__19901,G__19900){
var or__8246__auto__ = (function (){var and__8234__auto__ = (G__19899.cljs$core$IFn$_invoke$arity$1 ? G__19899.cljs$core$IFn$_invoke$arity$1(G__19900) : G__19899.call(null,G__19900));
if(cljs.core.truth_(and__8234__auto__)){
return G__19900;
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return G__19901;
}
});})(c,vec__19896,default$))
);
return (fexpr__19902.cljs$core$IFn$_invoke$arity$3 ? fexpr__19902.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19902.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19896,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19896,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19894){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19894));
});

