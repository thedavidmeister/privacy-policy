// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.phone.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cuerdas.core');
goog.require('wheel.dom.traversal');
goog.require('wheel.string.core');
goog.require('cljs.test');
wheel.phone.hoplon.phone = (function wheel$phone$hoplon$phone(p){
var p__$1 = (function (){var fexpr__24834 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__24833,G__24832){
return (G__24832.cljs$core$IFn$_invoke$arity$1 ? G__24832.cljs$core$IFn$_invoke$arity$1(G__24833) : G__24832.call(null,G__24833));
}));
return (fexpr__24834.cljs$core$IFn$_invoke$arity$2 ? fexpr__24834.cljs$core$IFn$_invoke$arity$2(p,cuerdas.core.collapse_whitespace) : fexpr__24834.call(null,p,cuerdas.core.collapse_whitespace));
})();
var G__24835 = cljs.core.cst$kw$class;
var G__24836 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["phone",null], null), null);
var G__24837 = cljs.core.cst$kw$href;
var G__24838 = (function (){var fexpr__24842 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24835,G__24836,G__24837,p__$1){
return (function (G__24841,G__24840){
return ["tel:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24840.cljs$core$IFn$_invoke$arity$1 ? G__24840.cljs$core$IFn$_invoke$arity$1(G__24841) : G__24840.call(null,G__24841)))].join('');
});})(G__24835,G__24836,G__24837,p__$1))
);
return (fexpr__24842.cljs$core$IFn$_invoke$arity$2 ? fexpr__24842.cljs$core$IFn$_invoke$arity$2(p__$1,wheel.string.core.no_space) : fexpr__24842.call(null,p__$1,wheel.string.core.no_space));
})();
var G__24839 = p__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__24835,G__24836,G__24837,G__24838,G__24839) : hoplon.core.a.call(null,G__24835,G__24836,G__24837,G__24838,G__24839));
});
wheel.phone.hoplon._QMARK__QMARK_phone = (function wheel$phone$hoplon$_QMARK__QMARK_phone(){
return cljs.test.test_var(wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var);
});
wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test = (function (){
var el_24849 = wheel.phone.hoplon.phone("+61444 123 456");
try{var values__18132__auto___24850 = (function (){var x__9201__auto__ = el_24849;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:+61444123456\"]"),x__9201__auto__);
})();
var result__18133__auto___24851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18132__auto___24850);
if(cljs.core.truth_(result__18133__auto___24851)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18132__auto___24850),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9201__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18132__auto___24850);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24843){var t__18177__auto___24852 = e24843;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,t__18177__auto___24852,cljs.core.cst$kw$message,null], null));
}
try{var values__18132__auto___24853 = (function (){var x__9201__auto__ = el_24849;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9201__auto__);
})();
var result__18133__auto___24854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18132__auto___24853);
if(cljs.core.truth_(result__18133__auto___24854)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18132__auto___24853),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9201__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18132__auto___24853);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24844){var t__18177__auto___24855 = e24844;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__18177__auto___24855,cljs.core.cst$kw$message,null], null));
}
try{var values__18132__auto___24856 = cljs.core._conj((function (){var x__9201__auto__ = wheel.dom.traversal.text(el_24849);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),"+61444 123 456");
var result__18133__auto___24857 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18132__auto___24856);
if(cljs.core.truth_(result__18133__auto___24857)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18132__auto___24856),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9201__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18132__auto___24856);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24845){var t__18177__auto___24858 = e24845;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__18177__auto___24858,cljs.core.cst$kw$message,null], null));
}
var el = wheel.phone.hoplon.phone("1\n 2   3");
try{var values__18132__auto___24859 = (function (){var x__9201__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:123\"]"),x__9201__auto__);
})();
var result__18133__auto___24860 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18132__auto___24859);
if(cljs.core.truth_(result__18133__auto___24860)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18132__auto___24859),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9201__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18132__auto___24859);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24846){var t__18177__auto___24861 = e24846;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,t__18177__auto___24861,cljs.core.cst$kw$message,null], null));
}
try{var values__18132__auto___24862 = (function (){var x__9201__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9201__auto__);
})();
var result__18133__auto___24863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18132__auto___24862);
if(cljs.core.truth_(result__18133__auto___24863)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18132__auto___24862),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9201__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18132__auto___24862);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24847){var t__18177__auto___24864 = e24847;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__18177__auto___24864,cljs.core.cst$kw$message,null], null));
}
try{var values__18132__auto__ = cljs.core._conj((function (){var x__9201__auto__ = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),"1 2 3");
var result__18133__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18132__auto__);
if(cljs.core.truth_(result__18133__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18132__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9201__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18132__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18133__auto__;
}catch (e24848){var t__18177__auto__ = e24848;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__18177__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var = new cljs.core.Var(function(){return wheel.phone.hoplon._QMARK__QMARK_phone;},cljs.core.cst$sym$wheel$phone$hoplon_SLASH__QMARK__QMARK_phone,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$phone$hoplon,cljs.core.cst$sym$_QMARK__QMARK_phone,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/privacy-policy/19ie/k5ld58/index.html.out/wheel/phone/hoplon.cljs",17,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.phone.hoplon._QMARK__QMARK_phone)?wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test:null)]));
