// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19801 = arguments.length;
switch (G__19801) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9547__auto__ = [];
var len__9524__auto___19815 = arguments.length;
var i__9525__auto___19816 = (0);
while(true){
if((i__9525__auto___19816 < len__9524__auto___19815)){
args_arr__9547__auto__.push((arguments[i__9525__auto___19816]));

var G__19817 = (i__9525__auto___19816 + (1));
i__9525__auto___19816 = G__19817;
continue;
} else {
}
break;
}

var argseq__9548__auto__ = (new cljs.core.IndexedSeq(args_arr__9547__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9548__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19802 = cljs.core.seq(kvs);
var chunk__19804 = null;
var count__19805 = (0);
var i__19806 = (0);
while(true){
if((i__19806 < count__19805)){
var vec__19808 = chunk__19804.cljs$core$IIndexed$_nth$arity$2(null,i__19806);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19808,(1),null);
var k_19818__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19818__$1);
} else {
e.attr(k_19818__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19818__$1:v));
}

var G__19819 = seq__19802;
var G__19820 = chunk__19804;
var G__19821 = count__19805;
var G__19822 = (i__19806 + (1));
seq__19802 = G__19819;
chunk__19804 = G__19820;
count__19805 = G__19821;
i__19806 = G__19822;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19802);
if(temp__5290__auto__){
var seq__19802__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19802__$1)){
var c__9178__auto__ = cljs.core.chunk_first(seq__19802__$1);
var G__19823 = cljs.core.chunk_rest(seq__19802__$1);
var G__19824 = c__9178__auto__;
var G__19825 = cljs.core.count(c__9178__auto__);
var G__19826 = (0);
seq__19802 = G__19823;
chunk__19804 = G__19824;
count__19805 = G__19825;
i__19806 = G__19826;
continue;
} else {
var vec__19811 = cljs.core.first(seq__19802__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(1),null);
var k_19827__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19827__$1);
} else {
e.attr(k_19827__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19827__$1:v));
}

var G__19828 = cljs.core.next(seq__19802__$1);
var G__19829 = null;
var G__19830 = (0);
var G__19831 = (0);
seq__19802 = G__19828;
chunk__19804 = G__19829;
count__19805 = G__19830;
i__19806 = G__19831;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19797){
var G__19798 = cljs.core.first(seq19797);
var seq19797__$1 = cljs.core.next(seq19797);
var G__19799 = cljs.core.first(seq19797__$1);
var seq19797__$2 = cljs.core.next(seq19797__$1);
var G__19800 = cljs.core.first(seq19797__$2);
var seq19797__$3 = cljs.core.next(seq19797__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19798,G__19799,G__19800,seq19797__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19837 = arguments.length;
switch (G__19837) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9547__auto__ = [];
var len__9524__auto___19849 = arguments.length;
var i__9525__auto___19850 = (0);
while(true){
if((i__9525__auto___19850 < len__9524__auto___19849)){
args_arr__9547__auto__.push((arguments[i__9525__auto___19850]));

var G__19851 = (i__9525__auto___19850 + (1));
i__9525__auto___19850 = G__19851;
continue;
} else {
}
break;
}

var argseq__9548__auto__ = (new cljs.core.IndexedSeq(args_arr__9547__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9548__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19838 = cljs.core.seq(kvs);
var chunk__19839 = null;
var count__19840 = (0);
var i__19841 = (0);
while(true){
if((i__19841 < count__19840)){
var vec__19842 = chunk__19839.cljs$core$IIndexed$_nth$arity$2(null,i__19841);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19842,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19852 = seq__19838;
var G__19853 = chunk__19839;
var G__19854 = count__19840;
var G__19855 = (i__19841 + (1));
seq__19838 = G__19852;
chunk__19839 = G__19853;
count__19840 = G__19854;
i__19841 = G__19855;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19838);
if(temp__5290__auto__){
var seq__19838__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19838__$1)){
var c__9178__auto__ = cljs.core.chunk_first(seq__19838__$1);
var G__19856 = cljs.core.chunk_rest(seq__19838__$1);
var G__19857 = c__9178__auto__;
var G__19858 = cljs.core.count(c__9178__auto__);
var G__19859 = (0);
seq__19838 = G__19856;
chunk__19839 = G__19857;
count__19840 = G__19858;
i__19841 = G__19859;
continue;
} else {
var vec__19845 = cljs.core.first(seq__19838__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19860 = cljs.core.next(seq__19838__$1);
var G__19861 = null;
var G__19862 = (0);
var G__19863 = (0);
seq__19838 = G__19860;
chunk__19839 = G__19861;
count__19840 = G__19862;
i__19841 = G__19863;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19833){
var G__19834 = cljs.core.first(seq19833);
var seq19833__$1 = cljs.core.next(seq19833);
var G__19835 = cljs.core.first(seq19833__$1);
var seq19833__$2 = cljs.core.next(seq19833__$1);
var G__19836 = cljs.core.first(seq19833__$2);
var seq19833__$3 = cljs.core.next(seq19833__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19834,G__19835,G__19836,seq19833__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19865 = arguments.length;
switch (G__19865) {
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
var G__19868 = arguments.length;
switch (G__19868) {
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
var G__19870 = elem;
var G__19871 = cljs.core.cst$kw$attr;
var G__19872 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19870,G__19871,G__19872) : hoplon.core.do_BANG_.call(null,G__19870,G__19871,G__19872));
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
var G__19873__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19873 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19874__i = 0, G__19874__a = new Array(arguments.length -  2);
while (G__19874__i < G__19874__a.length) {G__19874__a[G__19874__i] = arguments[G__19874__i + 2]; ++G__19874__i;}
  args = new cljs.core.IndexedSeq(G__19874__a,0,null);
} 
return G__19873__delegate.call(this,elem,_,args);};
G__19873.cljs$lang$maxFixedArity = 2;
G__19873.cljs$lang$applyTo = (function (arglist__19875){
var elem = cljs.core.first(arglist__19875);
arglist__19875 = cljs.core.next(arglist__19875);
var _ = cljs.core.first(arglist__19875);
var args = cljs.core.rest(arglist__19875);
return G__19873__delegate(elem,_,args);
});
G__19873.cljs$core$IFn$_invoke$arity$variadic = G__19873__delegate;
return G__19873;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19876 = cljs.core.seq(clmap);
var chunk__19877 = null;
var count__19878 = (0);
var i__19879 = (0);
while(true){
if((i__19879 < count__19878)){
var vec__19880 = chunk__19877.cljs$core$IIndexed$_nth$arity$2(null,i__19879);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19886 = seq__19876;
var G__19887 = chunk__19877;
var G__19888 = count__19878;
var G__19889 = (i__19879 + (1));
seq__19876 = G__19886;
chunk__19877 = G__19887;
count__19878 = G__19888;
i__19879 = G__19889;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19876);
if(temp__5290__auto__){
var seq__19876__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19876__$1)){
var c__9178__auto__ = cljs.core.chunk_first(seq__19876__$1);
var G__19890 = cljs.core.chunk_rest(seq__19876__$1);
var G__19891 = c__9178__auto__;
var G__19892 = cljs.core.count(c__9178__auto__);
var G__19893 = (0);
seq__19876 = G__19890;
chunk__19877 = G__19891;
count__19878 = G__19892;
i__19879 = G__19893;
continue;
} else {
var vec__19883 = cljs.core.first(seq__19876__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19894 = cljs.core.next(seq__19876__$1);
var G__19895 = null;
var G__19896 = (0);
var G__19897 = (0);
seq__19876 = G__19894;
chunk__19877 = G__19895;
count__19878 = G__19896;
i__19879 = G__19897;
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
var G__19898 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19899 = (0);
return setTimeout(G__19898,G__19899);
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
var G__19900_19906 = elem;
var G__19901_19907 = cljs.core.cst$kw$focus;
var G__19902_19908 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19900_19906,G__19901_19907,G__19902_19908) : hoplon.core.do_BANG_.call(null,G__19900_19906,G__19901_19907,G__19902_19908));

var G__19903 = elem;
var G__19904 = cljs.core.cst$kw$select;
var G__19905 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19903,G__19904,G__19905) : hoplon.core.do_BANG_.call(null,G__19903,G__19904,G__19905));
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
return (function (){var G__19909 = this$__$1.target;
return jQuery(G__19909);
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
