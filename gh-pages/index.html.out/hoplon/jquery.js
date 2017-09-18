// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__23727 = arguments.length;
switch (G__23727) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___23741 = arguments.length;
var i__9524__auto___23742 = (0);
while(true){
if((i__9524__auto___23742 < len__9523__auto___23741)){
args_arr__9546__auto__.push((arguments[i__9524__auto___23742]));

var G__23743 = (i__9524__auto___23742 + (1));
i__9524__auto___23742 = G__23743;
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23728 = cljs.core.seq(kvs);
var chunk__23730 = null;
var count__23731 = (0);
var i__23732 = (0);
while(true){
if((i__23732 < count__23731)){
var vec__23734 = chunk__23730.cljs$core$IIndexed$_nth$arity$2(null,i__23732);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(1),null);
var k_23744__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_23744__$1);
} else {
e.attr(k_23744__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23744__$1:v));
}

var G__23745 = seq__23728;
var G__23746 = chunk__23730;
var G__23747 = count__23731;
var G__23748 = (i__23732 + (1));
seq__23728 = G__23745;
chunk__23730 = G__23746;
count__23731 = G__23747;
i__23732 = G__23748;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__23728);
if(temp__5290__auto__){
var seq__23728__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23728__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__23728__$1);
var G__23749 = cljs.core.chunk_rest(seq__23728__$1);
var G__23750 = c__9177__auto__;
var G__23751 = cljs.core.count(c__9177__auto__);
var G__23752 = (0);
seq__23728 = G__23749;
chunk__23730 = G__23750;
count__23731 = G__23751;
i__23732 = G__23752;
continue;
} else {
var vec__23737 = cljs.core.first(seq__23728__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23737,(1),null);
var k_23753__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_23753__$1);
} else {
e.attr(k_23753__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23753__$1:v));
}

var G__23754 = cljs.core.next(seq__23728__$1);
var G__23755 = null;
var G__23756 = (0);
var G__23757 = (0);
seq__23728 = G__23754;
chunk__23730 = G__23755;
count__23731 = G__23756;
i__23732 = G__23757;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq23723){
var G__23724 = cljs.core.first(seq23723);
var seq23723__$1 = cljs.core.next(seq23723);
var G__23725 = cljs.core.first(seq23723__$1);
var seq23723__$2 = cljs.core.next(seq23723__$1);
var G__23726 = cljs.core.first(seq23723__$2);
var seq23723__$3 = cljs.core.next(seq23723__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23724,G__23725,G__23726,seq23723__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__23763 = arguments.length;
switch (G__23763) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9546__auto__ = [];
var len__9523__auto___23775 = arguments.length;
var i__9524__auto___23776 = (0);
while(true){
if((i__9524__auto___23776 < len__9523__auto___23775)){
args_arr__9546__auto__.push((arguments[i__9524__auto___23776]));

var G__23777 = (i__9524__auto___23776 + (1));
i__9524__auto___23776 = G__23777;
continue;
} else {
}
break;
}

var argseq__9547__auto__ = (new cljs.core.IndexedSeq(args_arr__9546__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9547__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23764 = cljs.core.seq(kvs);
var chunk__23765 = null;
var count__23766 = (0);
var i__23767 = (0);
while(true){
if((i__23767 < count__23766)){
var vec__23768 = chunk__23765.cljs$core$IIndexed$_nth$arity$2(null,i__23767);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23768,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23778 = seq__23764;
var G__23779 = chunk__23765;
var G__23780 = count__23766;
var G__23781 = (i__23767 + (1));
seq__23764 = G__23778;
chunk__23765 = G__23779;
count__23766 = G__23780;
i__23767 = G__23781;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__23764);
if(temp__5290__auto__){
var seq__23764__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23764__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__23764__$1);
var G__23782 = cljs.core.chunk_rest(seq__23764__$1);
var G__23783 = c__9177__auto__;
var G__23784 = cljs.core.count(c__9177__auto__);
var G__23785 = (0);
seq__23764 = G__23782;
chunk__23765 = G__23783;
count__23766 = G__23784;
i__23767 = G__23785;
continue;
} else {
var vec__23771 = cljs.core.first(seq__23764__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23771,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23786 = cljs.core.next(seq__23764__$1);
var G__23787 = null;
var G__23788 = (0);
var G__23789 = (0);
seq__23764 = G__23786;
chunk__23765 = G__23787;
count__23766 = G__23788;
i__23767 = G__23789;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq23759){
var G__23760 = cljs.core.first(seq23759);
var seq23759__$1 = cljs.core.next(seq23759);
var G__23761 = cljs.core.first(seq23759__$1);
var seq23759__$2 = cljs.core.next(seq23759__$1);
var G__23762 = cljs.core.first(seq23759__$2);
var seq23759__$3 = cljs.core.next(seq23759__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23760,G__23761,G__23762,seq23759__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__23791 = arguments.length;
switch (G__23791) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var G__23794 = arguments.length;
switch (G__23794) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__23796 = elem;
var G__23797 = cljs.core.cst$kw$attr;
var G__23798 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23796,G__23797,G__23798) : hoplon.core.do_BANG_.call(null,G__23796,G__23797,G__23798));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__23799__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__23799 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__23800__i = 0, G__23800__a = new Array(arguments.length -  2);
while (G__23800__i < G__23800__a.length) {G__23800__a[G__23800__i] = arguments[G__23800__i + 2]; ++G__23800__i;}
  args = new cljs.core.IndexedSeq(G__23800__a,0,null);
} 
return G__23799__delegate.call(this,elem,_,args);};
G__23799.cljs$lang$maxFixedArity = 2;
G__23799.cljs$lang$applyTo = (function (arglist__23801){
var elem = cljs.core.first(arglist__23801);
arglist__23801 = cljs.core.next(arglist__23801);
var _ = cljs.core.first(arglist__23801);
var args = cljs.core.rest(arglist__23801);
return G__23799__delegate(elem,_,args);
});
G__23799.cljs$core$IFn$_invoke$arity$variadic = G__23799__delegate;
return G__23799;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__23802 = cljs.core.seq(clmap);
var chunk__23803 = null;
var count__23804 = (0);
var i__23805 = (0);
while(true){
if((i__23805 < count__23804)){
var vec__23806 = chunk__23803.cljs$core$IIndexed$_nth$arity$2(null,i__23805);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23812 = seq__23802;
var G__23813 = chunk__23803;
var G__23814 = count__23804;
var G__23815 = (i__23805 + (1));
seq__23802 = G__23812;
chunk__23803 = G__23813;
count__23804 = G__23814;
i__23805 = G__23815;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__23802);
if(temp__5290__auto__){
var seq__23802__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23802__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__23802__$1);
var G__23816 = cljs.core.chunk_rest(seq__23802__$1);
var G__23817 = c__9177__auto__;
var G__23818 = cljs.core.count(c__9177__auto__);
var G__23819 = (0);
seq__23802 = G__23816;
chunk__23803 = G__23817;
count__23804 = G__23818;
i__23805 = G__23819;
continue;
} else {
var vec__23809 = cljs.core.first(seq__23802__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23809,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23809,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23820 = cljs.core.next(seq__23802__$1);
var G__23821 = null;
var G__23822 = (0);
var G__23823 = (0);
seq__23802 = G__23820;
chunk__23803 = G__23821;
count__23804 = G__23822;
i__23805 = G__23823;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_class);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__23824 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__23825 = (0);
return setTimeout(G__23824,G__23825);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__23826_23832 = elem;
var G__23827_23833 = cljs.core.cst$kw$focus;
var G__23828_23834 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23826_23832,G__23827_23833,G__23828_23834) : hoplon.core.do_BANG_.call(null,G__23826_23832,G__23827_23833,G__23828_23834));

var G__23829 = elem;
var G__23830 = cljs.core.cst$kw$select;
var G__23831 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23829,G__23830,G__23831) : hoplon.core.do_BANG_.call(null,G__23829,G__23830,G__23831));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__23835 = this$__$1.target;
return jQuery(G__23835);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
