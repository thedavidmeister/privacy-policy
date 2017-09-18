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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18816_SHARP_,p2__18817_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18816_SHARP_,p2__18817_SHARP_.getAttribute("static-id"),p2__18817_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__18819 = arguments.length;
switch (G__18819) {
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
var G__18820_18823 = init;
var G__18821_18824 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18820_18823,G__18821_18824) : f.call(null,G__18820_18823,G__18821_18824));

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
var vec__18825 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__18826 = cljs.core.seq(vec__18825);
var first__18827 = cljs.core.first(seq__18826);
var seq__18826__$1 = cljs.core.next(seq__18826);
var f = first__18827;
var more = seq__18826__$1;
var vec__18828 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18828,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18828,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("0023ef6d25f148d7a5a8f7aa123caf67")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__18831_SHARP_){
return cljs.core.zipmap(p1__18831_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__18832 = (i + (1));
var G__18833 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__18832;
ret = G__18833;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__18835 = arguments.length;
switch (G__18835) {
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

var G__18837 = (i + (1));
i = G__18837;
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

var G__18838_18841 = hoplon.core.node;
var G__18839_18842 = "string";
var G__18840_18843 = ((function (G__18838_18841,G__18839_18842){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__18838_18841,G__18839_18842))
;
goog.object.set(G__18838_18841,G__18839_18842,G__18840_18843);
goog.object.set(hoplon.core.INode,"number",true);

var G__18844_18848 = hoplon.core.node;
var G__18845_18849 = "number";
var G__18846_18850 = ((function (G__18844_18848,G__18845_18849){
return (function (this$){
var G__18847 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__18847) : hoplon.core.$text.call(null,G__18847));
});})(G__18844_18848,G__18845_18849))
;
goog.object.set(G__18844_18848,G__18845_18849,G__18846_18850);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18853_SHARP_,p2__18852_SHARP_){
if((p2__18852_SHARP_ == null)){
return p1__18853_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__18853_SHARP_,p2__18852_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__18860 = new$__$1;
var vec__18862 = G__18860;
var seq__18863 = cljs.core.seq(vec__18862);
var first__18864 = cljs.core.first(seq__18863);
var seq__18863__$1 = cljs.core.next(seq__18863);
var x = first__18864;
var xs = seq__18863__$1;
var G__18861 = hoplon.core.child_vec(this$);
var vec__18865 = G__18861;
var seq__18866 = cljs.core.seq(vec__18865);
var first__18867 = cljs.core.first(seq__18866);
var seq__18866__$1 = cljs.core.next(seq__18866);
var k = first__18867;
var ks = seq__18866__$1;
var kids = vec__18865;
var G__18860__$1 = G__18860;
var G__18861__$1 = G__18861;
while(true){
var vec__18868 = G__18860__$1;
var seq__18869 = cljs.core.seq(vec__18868);
var first__18870 = cljs.core.first(seq__18869);
var seq__18869__$1 = cljs.core.next(seq__18869);
var x__$1 = first__18870;
var xs__$1 = seq__18869__$1;
var vec__18871 = G__18861__$1;
var seq__18872 = cljs.core.seq(vec__18871);
var first__18873 = cljs.core.first(seq__18872);
var seq__18872__$1 = cljs.core.next(seq__18872);
var k__$1 = first__18873;
var ks__$1 = seq__18872__$1;
var kids__$1 = vec__18871;
if(cljs.core.truth_((function (){var or__8246__auto__ = x__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return k__$1;
}
})())){
var G__18874 = xs__$1;
var G__18875 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__18860__$1 = G__18874;
G__18861__$1 = G__18875;
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
var kids_18876 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_18876;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_18876,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_18879 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_18880 = cljs.core.count(cljs.core.deref(kids_18879));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_18879,i_18880,child__$1){
return (function (p1__18878_SHARP_,p2__18877_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18879,cljs.core.assoc,i_18880,p2__18877_SHARP_);
});})(kids_18879,i_18880,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18879,cljs.core.assoc,i_18880,child__$1);
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
return (function (p1__18881_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__18881_SHARP_));
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
return (function (p1__18882_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18882_SHARP_], 0)));
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
return (function (p1__18883_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__18883_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_18884 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_18885 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__18886 = (function (){var and__8234__auto__ = attr_18885;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_18885),kk_18884);
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__18886)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_18885,cljs.core.assoc,kk_18884,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__18887_SHARP_){
return p1__18887_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__18888_SHARP_){
return p1__18888_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__18889_SHARP_){
return p1__18889_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__18890_SHARP_){
return p1__18890_SHARP_.hoplonKids;
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
var G__18896 = arguments.length;
switch (G__18896) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___18898 = arguments.length;
var i__9524__auto___18899 = (0);
while(true){
if((i__9524__auto___18899 < len__9523__auto___18898)){
args_arr__9546__auto__.push((arguments[i__9524__auto___18899]));

var G__18900 = (i__9524__auto___18899 + (1));
i__9524__auto___18899 = G__18900;
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

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq18892){
var G__18893 = cljs.core.first(seq18892);
var seq18892__$1 = cljs.core.next(seq18892);
var G__18894 = cljs.core.first(seq18892__$1);
var seq18892__$2 = cljs.core.next(seq18892__$1);
var G__18895 = cljs.core.first(seq18892__$2);
var seq18892__$3 = cljs.core.next(seq18892__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18893,G__18894,G__18895,seq18892__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__18906 = arguments.length;
switch (G__18906) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___18908 = arguments.length;
var i__9524__auto___18909 = (0);
while(true){
if((i__9524__auto___18909 < len__9523__auto___18908)){
args_arr__9546__auto__.push((arguments[i__9524__auto___18909]));

var G__18910 = (i__9524__auto___18909 + (1));
i__9524__auto___18909 = G__18910;
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

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq18902){
var G__18903 = cljs.core.first(seq18902);
var seq18902__$1 = cljs.core.next(seq18902);
var G__18904 = cljs.core.first(seq18902__$1);
var seq18902__$2 = cljs.core.next(seq18902__$1);
var G__18905 = cljs.core.first(seq18902__$2);
var seq18902__$3 = cljs.core.next(seq18902__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18903,G__18904,G__18905,seq18902__$3);
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
var opts18913_18931 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18913_18931){
return (function (ret__17914__auto__,p__18914){
var vec__18915 = p__18914;
var ___17915__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18915,(0),null);
var f__17916__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18915,(1),null);
var sym__17917__auto__ = (f__17916__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17916__auto__.cljs$core$IFn$_invoke$arity$0() : f__17916__auto__.call(null));
var G__18918 = ret__17914__auto__;
if(cljs.core.truth_(sym__17917__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18918,sym__17917__auto__);
} else {
return G__18918;
}
});})(opts18913_18931))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18913_18931){
return (function (p1__17913__17918__auto__){
var G__18920 = cljs.core.first(p1__17913__17918__auto__);
var fexpr__18919 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18913_18931);
return (fexpr__18919.cljs$core$IFn$_invoke$arity$1 ? fexpr__18919.cljs$core$IFn$_invoke$arity$1(G__18920) : fexpr__18919.call(null,G__18920));
});})(opts18913_18931))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18913_18931){
return (function (){
var checked__17882__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/home/circleci/.boot/cache/tmp/home/circleci/repo/49/-1zzjnu/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts18913_18931);
if(cljs.core.truth_(checked__17882__auto__)){
hoplon.core._do_BANG_ = checked__17882__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts18913_18931))
], null)))));

var opts18923 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18923){
return (function (ret__17914__auto__,p__18924){
var vec__18925 = p__18924;
var ___17915__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(0),null);
var f__17916__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(1),null);
var sym__17917__auto__ = (f__17916__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17916__auto__.cljs$core$IFn$_invoke$arity$0() : f__17916__auto__.call(null));
var G__18928 = ret__17914__auto__;
if(cljs.core.truth_(sym__17917__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18928,sym__17917__auto__);
} else {
return G__18928;
}
});})(opts18923))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18923){
return (function (p1__17913__17918__auto__){
var G__18930 = cljs.core.first(p1__17913__17918__auto__);
var fexpr__18929 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18923);
return (fexpr__18929.cljs$core$IFn$_invoke$arity$1 ? fexpr__18929.cljs$core$IFn$_invoke$arity$1(G__18930) : fexpr__18929.call(null,G__18930));
});})(opts18923))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18923){
return (function (){
var checked__17882__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/home/circleci/.boot/cache/tmp/home/circleci/repo/49/-1zzjnu/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts18923);
if(cljs.core.truth_(checked__17882__auto__)){
hoplon.core._on_BANG_ = checked__17882__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts18923))
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
return (function (p1__18934_SHARP_,p2__18933_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__18933_SHARP_);
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
var G__18936 = arguments.length;
switch (G__18936) {
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
var G__18938 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18939 = (0);
return setTimeout(G__18938,G__18939);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__18940_18958 = this$;
var G__18941_18959 = "_hoplonWhenDom";
var G__18942_18960 = [f];
goog.object.set(G__18940_18958,G__18941_18959,G__18942_18960);

var G__18943 = ((function (temp__5288__auto__){
return (function (){
var fexpr__18951 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__18952 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__18953 = (20);
return setTimeout(G__18952,G__18953);
} else {
var seq__18954_18961 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__18955_18962 = null;
var count__18956_18963 = (0);
var i__18957_18964 = (0);
while(true){
if((i__18957_18964 < count__18956_18963)){
var f_18965__$1 = chunk__18955_18962.cljs$core$IIndexed$_nth$arity$2(null,i__18957_18964);
(f_18965__$1.cljs$core$IFn$_invoke$arity$0 ? f_18965__$1.cljs$core$IFn$_invoke$arity$0() : f_18965__$1.call(null));

var G__18966 = seq__18954_18961;
var G__18967 = chunk__18955_18962;
var G__18968 = count__18956_18963;
var G__18969 = (i__18957_18964 + (1));
seq__18954_18961 = G__18966;
chunk__18955_18962 = G__18967;
count__18956_18963 = G__18968;
i__18957_18964 = G__18969;
continue;
} else {
var temp__5290__auto___18970 = cljs.core.seq(seq__18954_18961);
if(temp__5290__auto___18970){
var seq__18954_18971__$1 = temp__5290__auto___18970;
if(cljs.core.chunked_seq_QMARK_(seq__18954_18971__$1)){
var c__9177__auto___18972 = cljs.core.chunk_first(seq__18954_18971__$1);
var G__18973 = cljs.core.chunk_rest(seq__18954_18971__$1);
var G__18974 = c__9177__auto___18972;
var G__18975 = cljs.core.count(c__9177__auto___18972);
var G__18976 = (0);
seq__18954_18961 = G__18973;
chunk__18955_18962 = G__18974;
count__18956_18963 = G__18975;
i__18957_18964 = G__18976;
continue;
} else {
var f_18977__$1 = cljs.core.first(seq__18954_18971__$1);
(f_18977__$1.cljs$core$IFn$_invoke$arity$0 ? f_18977__$1.cljs$core$IFn$_invoke$arity$0() : f_18977__$1.call(null));

var G__18978 = cljs.core.next(seq__18954_18971__$1);
var G__18979 = null;
var G__18980 = (0);
var G__18981 = (0);
seq__18954_18961 = G__18978;
chunk__18955_18962 = G__18979;
count__18956_18963 = G__18980;
i__18957_18964 = G__18981;
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
return fexpr__18951();
});})(temp__5288__auto__))
;
var G__18944 = (0);
return setTimeout(G__18943,G__18944);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__18990 = args;
var vec__18991 = G__18990;
var seq__18992 = cljs.core.seq(vec__18991);
var first__18993 = cljs.core.first(seq__18992);
var seq__18992__$1 = cljs.core.next(seq__18992);
var arg = first__18993;
var args__$1 = seq__18992__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__18990__$1 = G__18990;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__18994 = G__18990__$1;
var seq__18995 = cljs.core.seq(vec__18994);
var first__18996 = cljs.core.first(seq__18995);
var seq__18995__$1 = cljs.core.next(seq__18995);
var arg__$1 = first__18996;
var args__$2 = seq__18995__$1;
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
var G__18997 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__18990__$1,attr__$2,kids__$2,vec__18994,seq__18995,first__18996,seq__18995__$1,arg__$1,args__$2,attr,kids,G__18990,vec__18991,seq__18992,first__18993,seq__18992__$1,arg,args__$1){
return (function (p1__18982_SHARP_,p2__18983_SHARP_,p3__18984_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18982_SHARP_,p2__18983_SHARP_,p3__18984_SHARP_);
});})(attr__$1,kids__$1,G__18990__$1,attr__$2,kids__$2,vec__18994,seq__18995,first__18996,seq__18995__$1,arg__$1,args__$2,attr,kids,G__18990,vec__18991,seq__18992,first__18993,seq__18992__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18998 = kids__$2;
var G__18999 = args__$2;
attr__$1 = G__18997;
kids__$1 = G__18998;
G__18990__$1 = G__18999;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19000 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__18990__$1,attr__$2,kids__$2,vec__18994,seq__18995,first__18996,seq__18995__$1,arg__$1,args__$2,attr,kids,G__18990,vec__18991,seq__18992,first__18993,seq__18992__$1,arg,args__$1){
return (function (p1__18985_SHARP_,p2__18986_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18985_SHARP_,p2__18986_SHARP_,true);
});})(attr__$1,kids__$1,G__18990__$1,attr__$2,kids__$2,vec__18994,seq__18995,first__18996,seq__18995__$1,arg__$1,args__$2,attr,kids,G__18990,vec__18991,seq__18992,first__18993,seq__18992__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19001 = kids__$2;
var G__19002 = args__$2;
attr__$1 = G__19000;
kids__$1 = G__19001;
G__18990__$1 = G__19002;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__19003 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19004 = kids__$2;
var G__19005 = cljs.core.rest(args__$2);
attr__$1 = G__19003;
kids__$1 = G__19004;
G__18990__$1 = G__19005;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19006 = attr__$2;
var G__19007 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19008 = args__$2;
attr__$1 = G__19006;
kids__$1 = G__19007;
G__18990__$1 = G__19008;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19009 = attr__$2;
var G__19010 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19011 = args__$2;
attr__$1 = G__19009;
kids__$1 = G__19010;
G__18990__$1 = G__19011;
continue;
} else {
var G__19012 = attr__$2;
var G__19013 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19014 = args__$2;
attr__$1 = G__19012;
kids__$1 = G__19013;
G__18990__$1 = G__19014;
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
return cljs.core.reduce_kv((function (p1__19016_SHARP_,p2__19015_SHARP_,p3__19017_SHARP_){
hoplon.core._attr_BANG_(p2__19015_SHARP_,p1__19016_SHARP_,p3__19017_SHARP_);

return p1__19016_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19018){
var vec__19019 = p__19018;
var seq__19020 = cljs.core.seq(vec__19019);
var first__19021 = cljs.core.first(seq__19020);
var seq__19020__$1 = cljs.core.next(seq__19020);
var child_cell = first__19021;
var _ = seq__19020__$1;
var kids = vec__19019;
var this$__$1 = this$;
var seq__19022_19026 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19023_19027 = null;
var count__19024_19028 = (0);
var i__19025_19029 = (0);
while(true){
if((i__19025_19029 < count__19024_19028)){
var x_19030 = chunk__19023_19027.cljs$core$IIndexed$_nth$arity$2(null,i__19025_19029);
var temp__5290__auto___19031 = hoplon.core.__GT_node(x_19030);
if(cljs.core.truth_(temp__5290__auto___19031)){
var x_19032__$1 = temp__5290__auto___19031;
hoplon.core.append_child_BANG_(this$__$1,x_19032__$1);
} else {
}

var G__19033 = seq__19022_19026;
var G__19034 = chunk__19023_19027;
var G__19035 = count__19024_19028;
var G__19036 = (i__19025_19029 + (1));
seq__19022_19026 = G__19033;
chunk__19023_19027 = G__19034;
count__19024_19028 = G__19035;
i__19025_19029 = G__19036;
continue;
} else {
var temp__5290__auto___19037 = cljs.core.seq(seq__19022_19026);
if(temp__5290__auto___19037){
var seq__19022_19038__$1 = temp__5290__auto___19037;
if(cljs.core.chunked_seq_QMARK_(seq__19022_19038__$1)){
var c__9177__auto___19039 = cljs.core.chunk_first(seq__19022_19038__$1);
var G__19040 = cljs.core.chunk_rest(seq__19022_19038__$1);
var G__19041 = c__9177__auto___19039;
var G__19042 = cljs.core.count(c__9177__auto___19039);
var G__19043 = (0);
seq__19022_19026 = G__19040;
chunk__19023_19027 = G__19041;
count__19024_19028 = G__19042;
i__19025_19029 = G__19043;
continue;
} else {
var x_19044 = cljs.core.first(seq__19022_19038__$1);
var temp__5290__auto___19045__$1 = hoplon.core.__GT_node(x_19044);
if(cljs.core.truth_(temp__5290__auto___19045__$1)){
var x_19046__$1 = temp__5290__auto___19045__$1;
hoplon.core.append_child_BANG_(this$__$1,x_19046__$1);
} else {
}

var G__19047 = cljs.core.next(seq__19022_19038__$1);
var G__19048 = null;
var G__19049 = (0);
var G__19050 = (0);
seq__19022_19026 = G__19047;
chunk__19023_19027 = G__19048;
count__19024_19028 = G__19049;
i__19025_19029 = G__19050;
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
var len__9523__auto___19057 = arguments.length;
var i__9524__auto___19058 = (0);
while(true){
if((i__9524__auto___19058 < len__9523__auto___19057)){
args__9530__auto__.push((arguments[i__9524__auto___19058]));

var G__19059 = (i__9524__auto___19058 + (1));
i__9524__auto___19058 = G__19059;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19053 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053,(1),null);
var G__19056 = this$;
hoplon.core.add_attributes_BANG_(G__19056,attr);

hoplon.core.add_children_BANG_(G__19056,kids);

return G__19056;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19051){
var G__19052 = cljs.core.first(seq19051);
var seq19051__$1 = cljs.core.next(seq19051);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19052,seq19051__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__19061 = arguments.length;
switch (G__19061) {
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
var G__19062 = this$.children;
var G__19063 = k;
return goog.object.get(G__19062,G__19063);

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
var G__19094 = null;
var G__19094__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19094__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19094__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19094__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19094__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19094__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19094__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19094__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19094__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19094__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19094__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19094__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19094__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19094__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19094__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19094__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19094__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19094__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19094__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19094__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19094__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19094__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19094 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19094__1.call(this,self__);
case 2:
return G__19094__2.call(this,self__,a);
case 3:
return G__19094__3.call(this,self__,a,b);
case 4:
return G__19094__4.call(this,self__,a,b,c);
case 5:
return G__19094__5.call(this,self__,a,b,c,d);
case 6:
return G__19094__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19094__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19094__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19094__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19094__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19094__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19094__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19094__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19094__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19094__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19094__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19094__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19094__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19094__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19094__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19094__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19094__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19094.cljs$core$IFn$_invoke$arity$1 = G__19094__1;
G__19094.cljs$core$IFn$_invoke$arity$2 = G__19094__2;
G__19094.cljs$core$IFn$_invoke$arity$3 = G__19094__3;
G__19094.cljs$core$IFn$_invoke$arity$4 = G__19094__4;
G__19094.cljs$core$IFn$_invoke$arity$5 = G__19094__5;
G__19094.cljs$core$IFn$_invoke$arity$6 = G__19094__6;
G__19094.cljs$core$IFn$_invoke$arity$7 = G__19094__7;
G__19094.cljs$core$IFn$_invoke$arity$8 = G__19094__8;
G__19094.cljs$core$IFn$_invoke$arity$9 = G__19094__9;
G__19094.cljs$core$IFn$_invoke$arity$10 = G__19094__10;
G__19094.cljs$core$IFn$_invoke$arity$11 = G__19094__11;
G__19094.cljs$core$IFn$_invoke$arity$12 = G__19094__12;
G__19094.cljs$core$IFn$_invoke$arity$13 = G__19094__13;
G__19094.cljs$core$IFn$_invoke$arity$14 = G__19094__14;
G__19094.cljs$core$IFn$_invoke$arity$15 = G__19094__15;
G__19094.cljs$core$IFn$_invoke$arity$16 = G__19094__16;
G__19094.cljs$core$IFn$_invoke$arity$17 = G__19094__17;
G__19094.cljs$core$IFn$_invoke$arity$18 = G__19094__18;
G__19094.cljs$core$IFn$_invoke$arity$19 = G__19094__19;
G__19094.cljs$core$IFn$_invoke$arity$20 = G__19094__20;
G__19094.cljs$core$IFn$_invoke$arity$21 = G__19094__21;
G__19094.cljs$core$IFn$_invoke$arity$22 = G__19094__22;
return G__19094;
})()
;

Element.prototype.apply = (function (self__,args19065){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19065)));
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
var seq__19066 = cljs.core.seq(kvs);
var chunk__19068 = null;
var count__19069 = (0);
var i__19070 = (0);
while(true){
if((i__19070 < count__19069)){
var vec__19072 = chunk__19068.cljs$core$IIndexed$_nth$arity$2(null,i__19070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19072,(1),null);
var k_19095__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19095__$1);
} else {
e.setAttribute(k_19095__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19095__$1:v));
}

var G__19096 = seq__19066;
var G__19097 = chunk__19068;
var G__19098 = count__19069;
var G__19099 = (i__19070 + (1));
seq__19066 = G__19096;
chunk__19068 = G__19097;
count__19069 = G__19098;
i__19070 = G__19099;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19066);
if(temp__5290__auto__){
var seq__19066__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19066__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__19066__$1);
var G__19100 = cljs.core.chunk_rest(seq__19066__$1);
var G__19101 = c__9177__auto__;
var G__19102 = cljs.core.count(c__9177__auto__);
var G__19103 = (0);
seq__19066 = G__19100;
chunk__19068 = G__19101;
count__19069 = G__19102;
i__19070 = G__19103;
continue;
} else {
var vec__19075 = cljs.core.first(seq__19066__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(1),null);
var k_19104__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19104__$1);
} else {
e.setAttribute(k_19104__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19104__$1:v));
}

var G__19105 = cljs.core.next(seq__19066__$1);
var G__19106 = null;
var G__19107 = (0);
var G__19108 = (0);
seq__19066 = G__19105;
chunk__19068 = G__19106;
count__19069 = G__19107;
i__19070 = G__19108;
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
var seq__19078 = cljs.core.seq(kvs);
var chunk__19079 = null;
var count__19080 = (0);
var i__19081 = (0);
while(true){
if((i__19081 < count__19080)){
var vec__19082 = chunk__19079.cljs$core$IIndexed$_nth$arity$2(null,i__19081);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19082,(1),null);
var G__19085_19109 = e.style;
var G__19086_19110 = cljs.core.name(k);
var G__19087_19111 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19085_19109,G__19086_19110,G__19087_19111);

var G__19112 = seq__19078;
var G__19113 = chunk__19079;
var G__19114 = count__19080;
var G__19115 = (i__19081 + (1));
seq__19078 = G__19112;
chunk__19079 = G__19113;
count__19080 = G__19114;
i__19081 = G__19115;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19078);
if(temp__5290__auto__){
var seq__19078__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19078__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__19078__$1);
var G__19116 = cljs.core.chunk_rest(seq__19078__$1);
var G__19117 = c__9177__auto__;
var G__19118 = cljs.core.count(c__9177__auto__);
var G__19119 = (0);
seq__19078 = G__19116;
chunk__19079 = G__19117;
count__19080 = G__19118;
i__19081 = G__19119;
continue;
} else {
var vec__19088 = cljs.core.first(seq__19078__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19088,(1),null);
var G__19091_19120 = e.style;
var G__19092_19121 = cljs.core.name(k);
var G__19093_19122 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19091_19120,G__19092_19121,G__19093_19122);

var G__19123 = cljs.core.next(seq__19078__$1);
var G__19124 = null;
var G__19125 = (0);
var G__19126 = (0);
seq__19078 = G__19123;
chunk__19079 = G__19124;
count__19080 = G__19125;
i__19081 = G__19126;
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
var G__19130__delegate = function (args){
var vec__19127 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19127,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19127,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__19130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19131__i = 0, G__19131__a = new Array(arguments.length -  0);
while (G__19131__i < G__19131__a.length) {G__19131__a[G__19131__i] = arguments[G__19131__i + 0]; ++G__19131__i;}
  args = new cljs.core.IndexedSeq(G__19131__a,0,null);
} 
return G__19130__delegate.call(this,args);};
G__19130.cljs$lang$maxFixedArity = 0;
G__19130.cljs$lang$applyTo = (function (arglist__19132){
var args = cljs.core.seq(arglist__19132);
return G__19130__delegate(args);
});
G__19130.cljs$core$IFn$_invoke$arity$variadic = G__19130__delegate;
return G__19130;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__19136__delegate = function (args){
var vec__19133 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19133,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19133,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__19136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19137__i = 0, G__19137__a = new Array(arguments.length -  0);
while (G__19137__i < G__19137__a.length) {G__19137__a[G__19137__i] = arguments[G__19137__i + 0]; ++G__19137__i;}
  args = new cljs.core.IndexedSeq(G__19137__a,0,null);
} 
return G__19136__delegate.call(this,args);};
G__19136.cljs$lang$maxFixedArity = 0;
G__19136.cljs$lang$applyTo = (function (arglist__19138){
var args = cljs.core.seq(arglist__19138);
return G__19136__delegate(args);
});
G__19136.cljs$core$IFn$_invoke$arity$variadic = G__19136__delegate;
return G__19136;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9530__auto__ = [];
var len__9523__auto___19140 = arguments.length;
var i__9524__auto___19141 = (0);
while(true){
if((i__9524__auto___19141 < len__9523__auto___19140)){
args__9530__auto__.push((arguments[i__9524__auto___19141]));

var G__19142 = (i__9524__auto___19141 + (1));
i__9524__auto___19141 = G__19142;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq19139){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19139));
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
hoplon.core.$text = (function hoplon$core$$text(p1__19143_SHARP_){
return document.createTextNode(p1__19143_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19144_SHARP_){
return document.createComment(p1__19144_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19145 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19146 = (0);
return setTimeout(G__19145,G__19146);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__19147_SHARP_){
var e = p1__19147_SHARP_.target;
if(cljs.core.truth_((function (){var or__8246__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__19147_SHARP_.preventDefault();
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
var G__19148 = elem;
var G__19149 = cljs.core.cst$kw$attr;
var G__19150 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19148,G__19149,G__19150) : hoplon.core.do_BANG_.call(null,G__19148,G__19149,G__19150));
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
var items_seq = (function (){var fexpr__19155 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19153,G__19154){
return (G__19153.cljs$core$IFn$_invoke$arity$1 ? G__19153.cljs$core$IFn$_invoke$arity$1(G__19154) : G__19153.call(null,G__19154));
});})(on_deck))
);
return (fexpr__19155.cljs$core$IFn$_invoke$arity$2 ? fexpr__19155.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19155.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19151_SHARP_){
var fexpr__19159 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19158,G__19157,G__19156){
return (G__19156.cljs$core$IFn$_invoke$arity$3 ? G__19156.cljs$core$IFn$_invoke$arity$3(G__19157,G__19158,null) : G__19156.call(null,G__19157,G__19158,null));
});})(on_deck,items_seq))
);
return (fexpr__19159.cljs$core$IFn$_invoke$arity$3 ? fexpr__19159.cljs$core$IFn$_invoke$arity$3(p1__19151_SHARP_,items_seq,cljs.core.nth) : fexpr__19159.call(null,p1__19151_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19152_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19152_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19152_SHARP_,cljs.core.rest);

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
var seq__19160 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19161 = null;
var count__19162 = (0);
var i__19163 = (0);
while(true){
if((i__19163 < count__19162)){
var i = chunk__19161.cljs$core$IIndexed$_nth$arity$2(null,i__19163);
var e_19166 = (function (){var or__8246__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__19164 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19164) : tpl.call(null,G__19164));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19166);

var G__19167 = seq__19160;
var G__19168 = chunk__19161;
var G__19169 = count__19162;
var G__19170 = (i__19163 + (1));
seq__19160 = G__19167;
chunk__19161 = G__19168;
count__19162 = G__19169;
i__19163 = G__19170;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19160);
if(temp__5290__auto__){
var seq__19160__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19160__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__19160__$1);
var G__19171 = cljs.core.chunk_rest(seq__19160__$1);
var G__19172 = c__9177__auto__;
var G__19173 = cljs.core.count(c__9177__auto__);
var G__19174 = (0);
seq__19160 = G__19171;
chunk__19161 = G__19172;
count__19162 = G__19173;
i__19163 = G__19174;
continue;
} else {
var i = cljs.core.first(seq__19160__$1);
var e_19175 = (function (){var or__8246__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var G__19165 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19165) : tpl.call(null,G__19165));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19175);

var G__19176 = cljs.core.next(seq__19160__$1);
var G__19177 = null;
var G__19178 = (0);
var G__19179 = (0);
seq__19160 = G__19176;
chunk__19161 = G__19177;
count__19162 = G__19178;
i__19163 = G__19179;
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
var e_19180 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19180);

var G__19181 = (_ + (1));
_ = G__19181;
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
var len__9523__auto___19191 = arguments.length;
var i__9524__auto___19192 = (0);
while(true){
if((i__9524__auto___19192 < len__9523__auto___19191)){
args__9530__auto__.push((arguments[i__9524__auto___19192]));

var G__19193 = (i__9524__auto___19192 + (1));
i__9524__auto___19192 = G__19193;
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19183){
var vec__19184 = p__19183;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19184,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19190 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19184,default$){
return (function (G__19187,G__19189,G__19188){
var or__8246__auto__ = (function (){var and__8234__auto__ = (G__19187.cljs$core$IFn$_invoke$arity$1 ? G__19187.cljs$core$IFn$_invoke$arity$1(G__19188) : G__19187.call(null,G__19188));
if(cljs.core.truth_(and__8234__auto__)){
return G__19188;
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return G__19189;
}
});})(c,vec__19184,default$))
);
return (fexpr__19190.cljs$core$IFn$_invoke$arity$3 ? fexpr__19190.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19190.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19184,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19184,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19182){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19182));
});

