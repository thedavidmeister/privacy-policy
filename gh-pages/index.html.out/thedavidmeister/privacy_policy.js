// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('thedavidmeister.privacy_policy');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
thedavidmeister.privacy_policy.policy = (function thedavidmeister$privacy_policy$policy(var_args){
var args__9531__auto__ = [];
var len__9524__auto___19038 = arguments.length;
var i__9525__auto___19039 = (0);
while(true){
if((i__9525__auto___19039 < len__9524__auto___19038)){
args__9531__auto__.push((arguments[i__9525__auto___19039]));

var G__19040 = (i__9525__auto___19039 + (1));
i__9525__auto___19039 = G__19040;
continue;
} else {
}
break;
}

var argseq__9532__auto__ = ((((0) < args__9531__auto__.length))?(new cljs.core.IndexedSeq(args__9531__auto__.slice((0)),(0),null)):null);
return thedavidmeister.privacy_policy.policy.cljs$core$IFn$_invoke$arity$variadic(argseq__9532__auto__);
});

thedavidmeister.privacy_policy.policy.cljs$core$IFn$_invoke$arity$variadic = (function (p__19035){
var map__19036 = p__19035;
var map__19036__$1 = ((((!((map__19036 == null)))?((((map__19036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19036):map__19036);
var entity_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19036__$1,cljs.core.cst$kw$entity_DASH_name);
var entity_description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19036__$1,cljs.core.cst$kw$entity_DASH_description);
if(cljs.core.truth_(entity_name)){
} else {
throw (new Error("Assert failed: entity-name"));
}

if(cljs.core.truth_(entity_description)){
} else {
throw (new Error("Assert failed: entity-description"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hoplon.core.h1.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$2(entity_name,"'s Privacy Policy") : hoplon.core.h1.call(null,entity_name,"'s Privacy Policy")),(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("What is our commitment to the protection of your personal information?") : hoplon.core.h2.call(null,"What is our commitment to the protection of your personal information?")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(entity_name," is ",entity_description) : hoplon.core.p.call(null,entity_name," is ",entity_description)),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("By accessing our web application, engaging our services, or providing any personal information to us, you agree to be bound by this privacy policy and consent to our use and disclosure of your personal information as explained within this policy.") : hoplon.core.p.call(null,"By accessing our web application, engaging our services, or providing any personal information to us, you agree to be bound by this privacy policy and consent to our use and disclosure of your personal information as explained within this policy."))], null);
});

thedavidmeister.privacy_policy.policy.cljs$lang$maxFixedArity = (0);

thedavidmeister.privacy_policy.policy.cljs$lang$applyTo = (function (seq19034){
return thedavidmeister.privacy_policy.policy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19034));
});

