// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.link.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
wheel.link.hoplon.external = (function wheel$link$hoplon$external(var_args){
var G__24756 = arguments.length;
switch (G__24756) {
case 1:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1 = (function (href){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(href,href);
});

wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2 = (function (href,text){
if(typeof href === 'string'){
} else {
throw (new Error("Assert failed: (string? href)"));
}

var G__24757 = cljs.core.cst$kw$href;
var G__24758 = href;
var G__24759 = cljs.core.cst$kw$target;
var G__24760 = "_blank";
var G__24761 = text;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__24757,G__24758,G__24759,G__24760,G__24761) : hoplon.core.a.call(null,G__24757,G__24758,G__24759,G__24760,G__24761));
});

wheel.link.hoplon.external.cljs$lang$maxFixedArity = 2;

wheel.link.hoplon.external_QMARK_ = (function wheel$link$hoplon$external_QMARK_(l,a,t){
try{var values__18747__auto___24767 = (function (){var x__9200__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a"),x__9200__auto__);
})();
var result__18748__auto___24768 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18747__auto___24767);
if(cljs.core.truth_(result__18748__auto___24768)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18747__auto___24767),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9200__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__18747__auto___24767);
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24763){var t__18792__auto___24769 = e24763;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,t__18792__auto___24769,cljs.core.cst$kw$message,null], null));
}
try{var values__18747__auto___24770 = (function (){var x__9200__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__9200__auto__);
})();
var result__18748__auto___24771 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18747__auto___24770);
if(cljs.core.truth_(result__18748__auto___24771)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18747__auto___24770),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9200__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__18747__auto___24770);
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24764){var t__18792__auto___24772 = e24764;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,t__18792__auto___24772,cljs.core.cst$kw$message,null], null));
}
try{var values__18747__auto___24773 = (function (){var x__9200__auto__ = l;
return cljs.core._conj((function (){var x__9200__auto____$1 = ["[href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"\"]"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto____$1);
})(),x__9200__auto__);
})();
var result__18748__auto___24774 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18747__auto___24773);
if(cljs.core.truth_(result__18748__auto___24774)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18747__auto___24773),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9200__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__18747__auto___24773);
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24765){var t__18792__auto___24775 = e24765;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,t__18792__auto___24775,cljs.core.cst$kw$message,null], null));
}
try{var values__18747__auto__ = (function (){var x__9200__auto__ = t;
return cljs.core._conj((function (){var x__9200__auto____$1 = wheel.dom.traversal.text(l);
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto____$1);
})(),x__9200__auto__);
})();
var result__18748__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18747__auto__);
if(cljs.core.truth_(result__18748__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18747__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9200__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18747__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18748__auto__;
}catch (e24766){var t__18792__auto__ = e24766;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,t__18792__auto__,cljs.core.cst$kw$message,null], null));
}});
wheel.link.hoplon._QMARK__QMARK_external = (function wheel$link$hoplon$_QMARK__QMARK_external(){
return cljs.test.test_var(wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var);
});
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test = (function (){
var es = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos","bars","bars"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos",(hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("bars") : hoplon.core.div.call(null,"bars")),"bars"], null)], null);
var seq__24776 = cljs.core.seq(es);
var chunk__24777 = null;
var count__24778 = (0);
var i__24779 = (0);
while(true){
if((i__24779 < count__24778)){
var vec__24780 = chunk__24777.cljs$core$IIndexed$_nth$arity$2(null,i__24779);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24780,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24780,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24780,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__24786 = seq__24776;
var G__24787 = chunk__24777;
var G__24788 = count__24778;
var G__24789 = (i__24779 + (1));
seq__24776 = G__24786;
chunk__24777 = G__24787;
count__24778 = G__24788;
i__24779 = G__24789;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24776);
if(temp__5290__auto__){
var seq__24776__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24776__$1)){
var c__9177__auto__ = cljs.core.chunk_first(seq__24776__$1);
var G__24790 = cljs.core.chunk_rest(seq__24776__$1);
var G__24791 = c__9177__auto__;
var G__24792 = cljs.core.count(c__9177__auto__);
var G__24793 = (0);
seq__24776 = G__24790;
chunk__24777 = G__24791;
count__24778 = G__24792;
i__24779 = G__24793;
continue;
} else {
var vec__24783 = cljs.core.first(seq__24776__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24783,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__24794 = cljs.core.next(seq__24776__$1);
var G__24795 = null;
var G__24796 = (0);
var G__24797 = (0);
seq__24776 = G__24794;
chunk__24777 = G__24795;
count__24778 = G__24796;
i__24779 = G__24797;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.link.hoplon._QMARK__QMARK_external;},cljs.core.cst$sym$wheel$link$hoplon_SLASH__QMARK__QMARK_external,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$link$hoplon,cljs.core.cst$sym$_QMARK__QMARK_external,"/home/circleci/.boot/cache/tmp/home/circleci/repo/4e/-1zzjnu/index.html.out/wheel/link/hoplon.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.link.hoplon._QMARK__QMARK_external)?wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test:null)]));
