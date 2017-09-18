// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('goog.dom');
goog.require('cljs.spec.alpha');
goog.require('clojure.test.check.generators');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$dom_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.cst$sym$goog$dom_SLASH_isElement,cljs.core.cst$kw$gen,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_constantly,cljs.core.list(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap,cljs.core.cst$sym$cljs$core_SLASH_apply,cljs.core.list(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH_div,cljs.core.cst$sym$hoplon$core_SLASH_span,cljs.core.cst$sym$hoplon$core_SLASH_p], null))))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$goog$dom_SLASH_isElement,goog.dom.isElement,cljs.core.constantly(clojure.test.check.generators.fmap(cljs.core.apply,clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.div,hoplon.core.span,hoplon.core.p], null)))),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$dom_SLASH_selector,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
wheel.dom.data.el_QMARK_ = (function wheel$dom$data$el_QMARK_(el){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$dom_SLASH_element,el);
});
wheel.dom.data.sel_QMARK_ = (function wheel$dom$data$sel_QMARK_(s){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$dom_SLASH_selector,s);
});
wheel.dom.data.el_or_sel_QMARK_ = (function wheel$dom$data$el_or_sel_QMARK_(el_or_sel){
var or__8247__auto__ = wheel.dom.data.el_QMARK_(el_or_sel);
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return wheel.dom.data.sel_QMARK_(el_or_sel);
}
});
