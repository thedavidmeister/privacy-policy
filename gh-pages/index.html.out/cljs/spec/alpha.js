// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__8979__auto__ = (((spec == null))?null:spec);
var m__8980__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8980__auto__.call(null,spec,x));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8980__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__8979__auto__ = (((spec == null))?null:spec);
var m__8980__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8980__auto__.call(null,spec,y));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8980__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__8979__auto__ = (((spec == null))?null:spec);
var m__8980__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$5 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8980__auto__.call(null,spec,path,via,in$,x));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8980__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__8979__auto__ = (((spec == null))?null:spec);
var m__8980__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8980__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8980__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__8979__auto__ = (((spec == null))?null:spec);
var m__8980__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8980__auto__.call(null,spec,gfn));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8980__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__8979__auto__ = (((spec == null))?null:spec);
var m__8980__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__8980__auto__.call(null,spec));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__8980__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
<<<<<<< HEAD
var G__15156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__15156;
=======
var G__14616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__14616;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__8246__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__8234__auto__ = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__8234__auto__)){
return x;
} else {
return and__8234__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__8246__auto__ = (function (){var and__8234__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__8234__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
var or__8246__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__8246__auto____$2)){
return or__8246__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name((cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.alpha.regex_spec_impl.call(null,s,null)),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__8246__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
<<<<<<< HEAD
var G__15161 = arguments.length;
switch (G__15161) {
=======
var G__14621 = arguments.length;
switch (G__14621) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto__.call(null,_));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8980__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__8979__auto__ = (((_ == null))?null:_);
var m__8980__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__8979__auto__)]);
if(!((m__8980__auto__ == null))){
return (m__8980__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__8980__auto__.call(null,_,form));
} else {
var m__8980__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__8980__auto____$1 == null))){
return (m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8980__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__8980__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

<<<<<<< HEAD
var G__15163_15170 = cljs.spec.alpha.specize_STAR_;
var G__15164_15171 = "_";
var G__15165_15172 = ((function (G__15163_15170,G__15164_15171){
return (function() {
var G__15173 = null;
var G__15173__1 = (function (o){
var G__15166 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
var G__15167 = o;
var G__15168 = null;
var G__15169 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__15166,G__15167,G__15168,G__15169) : cljs.spec.alpha.spec_impl.call(null,G__15166,G__15167,G__15168,G__15169));
});
var G__15173__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__15173 = function(o,form){
switch(arguments.length){
case 1:
return G__15173__1.call(this,o);
case 2:
return G__15173__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15173.cljs$core$IFn$_invoke$arity$1 = G__15173__1;
G__15173.cljs$core$IFn$_invoke$arity$2 = G__15173__2;
return G__15173;
})()
;})(G__15163_15170,G__15164_15171))
;
goog.object.set(G__15163_15170,G__15164_15171,G__15165_15172);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__15175 = arguments.length;
switch (G__15175) {
=======
var G__14623_14630 = cljs.spec.alpha.specize_STAR_;
var G__14624_14631 = "_";
var G__14625_14632 = ((function (G__14623_14630,G__14624_14631){
return (function() {
var G__14633 = null;
var G__14633__1 = (function (o){
var G__14626 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
var G__14627 = o;
var G__14628 = null;
var G__14629 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__14626,G__14627,G__14628,G__14629) : cljs.spec.alpha.spec_impl.call(null,G__14626,G__14627,G__14628,G__14629));
});
var G__14633__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__14633 = function(o,form){
switch(arguments.length){
case 1:
return G__14633__1.call(this,o);
case 2:
return G__14633__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14633.cljs$core$IFn$_invoke$arity$1 = G__14633__1;
G__14633.cljs$core$IFn$_invoke$arity$2 = G__14633__2;
return G__14633;
})()
;})(G__14623_14630,G__14624_14631))
;
goog.object.set(G__14623_14630,G__14624_14631,G__14625_14632);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__14635 = arguments.length;
switch (G__14635) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__8246__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__8246__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__8234__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__8234__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__8234__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = (form instanceof cljs.core.Symbol);
if(and__8234__auto__){
return cljs.core.namespace(form);
} else {
return and__8234__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn,gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5290__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__5290__auto__)){
var probs = temp__5290__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,probs,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value,x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
<<<<<<< HEAD
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__15177_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__15177_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__9372__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15178_15224 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15179_15225 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15178_15224,_STAR_print_fn_STAR_15179_15225,sb__9372__auto__,problems){
return (function (x__9373__auto__){
return sb__9372__auto__.append(x__9373__auto__);
});})(_STAR_print_newline_STAR_15178_15224,_STAR_print_fn_STAR_15179_15225,sb__9372__auto__,problems))
;

try{var seq__15180_15226 = cljs.core.seq(problems);
var chunk__15181_15227 = null;
var count__15182_15228 = (0);
var i__15183_15229 = (0);
while(true){
if((i__15183_15229 < count__15182_15228)){
var map__15184_15230 = chunk__15181_15227.cljs$core$IIndexed$_nth$arity$2(null,i__15183_15229);
var map__15184_15231__$1 = ((((!((map__15184_15230 == null)))?((((map__15184_15230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15184_15230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15184_15230):map__15184_15230);
var prob_15232 = map__15184_15231__$1;
var path_15233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184_15231__$1,cljs.core.cst$kw$path);
var pred_15234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184_15231__$1,cljs.core.cst$kw$pred);
var val_15235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184_15231__$1,cljs.core.cst$kw$val);
var reason_15236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184_15231__$1,cljs.core.cst$kw$reason);
var via_15237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184_15231__$1,cljs.core.cst$kw$via);
var in_15238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184_15231__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_15238)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_15238], 0)),""], 0));
=======
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__14637_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__14637_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__9371__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14638_14684 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14639_14685 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14638_14684,_STAR_print_fn_STAR_14639_14685,sb__9371__auto__,problems){
return (function (x__9372__auto__){
return sb__9371__auto__.append(x__9372__auto__);
});})(_STAR_print_newline_STAR_14638_14684,_STAR_print_fn_STAR_14639_14685,sb__9371__auto__,problems))
;

try{var seq__14640_14686 = cljs.core.seq(problems);
var chunk__14641_14687 = null;
var count__14642_14688 = (0);
var i__14643_14689 = (0);
while(true){
if((i__14643_14689 < count__14642_14688)){
var map__14644_14690 = chunk__14641_14687.cljs$core$IIndexed$_nth$arity$2(null,i__14643_14689);
var map__14644_14691__$1 = ((((!((map__14644_14690 == null)))?((((map__14644_14690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14644_14690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14644_14690):map__14644_14690);
var prob_14692 = map__14644_14691__$1;
var path_14693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644_14691__$1,cljs.core.cst$kw$path);
var pred_14694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644_14691__$1,cljs.core.cst$kw$pred);
var val_14695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644_14691__$1,cljs.core.cst$kw$val);
var reason_14696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644_14691__$1,cljs.core.cst$kw$reason);
var via_14697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644_14691__$1,cljs.core.cst$kw$via);
var in_14698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644_14691__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_14698)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_14698], 0)),""], 0));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_15235], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_15237)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_15237)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_15233)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_15233], 0))], 0));
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_14695], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_14697)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_14697)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_14693)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_14693], 0))], 0));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_15234)], 0));

if(cljs.core.truth_(reason_15236)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_15236], 0));
} else {
}

var seq__15186_15239 = cljs.core.seq(prob_15232);
var chunk__15187_15240 = null;
var count__15188_15241 = (0);
var i__15189_15242 = (0);
while(true){
if((i__15189_15242 < count__15188_15241)){
var vec__15190_15243 = chunk__15187_15240.cljs$core$IIndexed$_nth$arity$2(null,i__15189_15242);
var k_15244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190_15243,(0),null);
var v_15245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190_15243,(1),null);
if(cljs.core.truth_((function (){var fexpr__15193 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15193.cljs$core$IFn$_invoke$arity$1 ? fexpr__15193.cljs$core$IFn$_invoke$arity$1(k_15244) : fexpr__15193.call(null,k_15244));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15244], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15245], 0));
}

var G__15246 = seq__15186_15239;
var G__15247 = chunk__15187_15240;
var G__15248 = count__15188_15241;
var G__15249 = (i__15189_15242 + (1));
seq__15186_15239 = G__15246;
chunk__15187_15240 = G__15247;
count__15188_15241 = G__15248;
i__15189_15242 = G__15249;
continue;
} else {
var temp__5290__auto___15250 = cljs.core.seq(seq__15186_15239);
if(temp__5290__auto___15250){
var seq__15186_15251__$1 = temp__5290__auto___15250;
if(cljs.core.chunked_seq_QMARK_(seq__15186_15251__$1)){
var c__9178__auto___15252 = cljs.core.chunk_first(seq__15186_15251__$1);
var G__15253 = cljs.core.chunk_rest(seq__15186_15251__$1);
var G__15254 = c__9178__auto___15252;
var G__15255 = cljs.core.count(c__9178__auto___15252);
var G__15256 = (0);
seq__15186_15239 = G__15253;
chunk__15187_15240 = G__15254;
count__15188_15241 = G__15255;
i__15189_15242 = G__15256;
continue;
} else {
var vec__15194_15257 = cljs.core.first(seq__15186_15251__$1);
var k_15258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194_15257,(0),null);
var v_15259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15194_15257,(1),null);
if(cljs.core.truth_((function (){var fexpr__15197 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15197.cljs$core$IFn$_invoke$arity$1 ? fexpr__15197.cljs$core$IFn$_invoke$arity$1(k_15258) : fexpr__15197.call(null,k_15258));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15258], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15259], 0));
}

var G__15260 = cljs.core.next(seq__15186_15251__$1);
var G__15261 = null;
var G__15262 = (0);
var G__15263 = (0);
seq__15186_15239 = G__15260;
chunk__15187_15240 = G__15261;
count__15188_15241 = G__15262;
i__15189_15242 = G__15263;
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_14694)], 0));

if(cljs.core.truth_(reason_14696)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_14696], 0));
} else {
}

var seq__14646_14699 = cljs.core.seq(prob_14692);
var chunk__14647_14700 = null;
var count__14648_14701 = (0);
var i__14649_14702 = (0);
while(true){
if((i__14649_14702 < count__14648_14701)){
var vec__14650_14703 = chunk__14647_14700.cljs$core$IIndexed$_nth$arity$2(null,i__14649_14702);
var k_14704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14650_14703,(0),null);
var v_14705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14650_14703,(1),null);
if(cljs.core.truth_((function (){var fexpr__14653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14653.cljs$core$IFn$_invoke$arity$1 ? fexpr__14653.cljs$core$IFn$_invoke$arity$1(k_14704) : fexpr__14653.call(null,k_14704));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14704], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14705], 0));
}

var G__14706 = seq__14646_14699;
var G__14707 = chunk__14647_14700;
var G__14708 = count__14648_14701;
var G__14709 = (i__14649_14702 + (1));
seq__14646_14699 = G__14706;
chunk__14647_14700 = G__14707;
count__14648_14701 = G__14708;
i__14649_14702 = G__14709;
continue;
} else {
var temp__5290__auto___14710 = cljs.core.seq(seq__14646_14699);
if(temp__5290__auto___14710){
var seq__14646_14711__$1 = temp__5290__auto___14710;
if(cljs.core.chunked_seq_QMARK_(seq__14646_14711__$1)){
var c__9177__auto___14712 = cljs.core.chunk_first(seq__14646_14711__$1);
var G__14713 = cljs.core.chunk_rest(seq__14646_14711__$1);
var G__14714 = c__9177__auto___14712;
var G__14715 = cljs.core.count(c__9177__auto___14712);
var G__14716 = (0);
seq__14646_14699 = G__14713;
chunk__14647_14700 = G__14714;
count__14648_14701 = G__14715;
i__14649_14702 = G__14716;
continue;
} else {
var vec__14654_14717 = cljs.core.first(seq__14646_14711__$1);
var k_14718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14654_14717,(0),null);
var v_14719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14654_14717,(1),null);
if(cljs.core.truth_((function (){var fexpr__14657 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14657.cljs$core$IFn$_invoke$arity$1 ? fexpr__14657.cljs$core$IFn$_invoke$arity$1(k_14718) : fexpr__14657.call(null,k_14718));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14718], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14719], 0));
}

var G__14720 = cljs.core.next(seq__14646_14711__$1);
var G__14721 = null;
var G__14722 = (0);
var G__14723 = (0);
seq__14646_14699 = G__14720;
chunk__14647_14700 = G__14721;
count__14648_14701 = G__14722;
i__14649_14702 = G__14723;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

<<<<<<< HEAD
var G__15264 = seq__15180_15226;
var G__15265 = chunk__15181_15227;
var G__15266 = count__15182_15228;
var G__15267 = (i__15183_15229 + (1));
seq__15180_15226 = G__15264;
chunk__15181_15227 = G__15265;
count__15182_15228 = G__15266;
i__15183_15229 = G__15267;
continue;
} else {
var temp__5290__auto___15268 = cljs.core.seq(seq__15180_15226);
if(temp__5290__auto___15268){
var seq__15180_15269__$1 = temp__5290__auto___15268;
if(cljs.core.chunked_seq_QMARK_(seq__15180_15269__$1)){
var c__9178__auto___15270 = cljs.core.chunk_first(seq__15180_15269__$1);
var G__15271 = cljs.core.chunk_rest(seq__15180_15269__$1);
var G__15272 = c__9178__auto___15270;
var G__15273 = cljs.core.count(c__9178__auto___15270);
var G__15274 = (0);
seq__15180_15226 = G__15271;
chunk__15181_15227 = G__15272;
count__15182_15228 = G__15273;
i__15183_15229 = G__15274;
continue;
} else {
var map__15198_15275 = cljs.core.first(seq__15180_15269__$1);
var map__15198_15276__$1 = ((((!((map__15198_15275 == null)))?((((map__15198_15275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15198_15275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15198_15275):map__15198_15275);
var prob_15277 = map__15198_15276__$1;
var path_15278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15198_15276__$1,cljs.core.cst$kw$path);
var pred_15279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15198_15276__$1,cljs.core.cst$kw$pred);
var val_15280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15198_15276__$1,cljs.core.cst$kw$val);
var reason_15281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15198_15276__$1,cljs.core.cst$kw$reason);
var via_15282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15198_15276__$1,cljs.core.cst$kw$via);
var in_15283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15198_15276__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_15283)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_15283], 0)),""], 0));
=======
var G__14724 = seq__14640_14686;
var G__14725 = chunk__14641_14687;
var G__14726 = count__14642_14688;
var G__14727 = (i__14643_14689 + (1));
seq__14640_14686 = G__14724;
chunk__14641_14687 = G__14725;
count__14642_14688 = G__14726;
i__14643_14689 = G__14727;
continue;
} else {
var temp__5290__auto___14728 = cljs.core.seq(seq__14640_14686);
if(temp__5290__auto___14728){
var seq__14640_14729__$1 = temp__5290__auto___14728;
if(cljs.core.chunked_seq_QMARK_(seq__14640_14729__$1)){
var c__9177__auto___14730 = cljs.core.chunk_first(seq__14640_14729__$1);
var G__14731 = cljs.core.chunk_rest(seq__14640_14729__$1);
var G__14732 = c__9177__auto___14730;
var G__14733 = cljs.core.count(c__9177__auto___14730);
var G__14734 = (0);
seq__14640_14686 = G__14731;
chunk__14641_14687 = G__14732;
count__14642_14688 = G__14733;
i__14643_14689 = G__14734;
continue;
} else {
var map__14658_14735 = cljs.core.first(seq__14640_14729__$1);
var map__14658_14736__$1 = ((((!((map__14658_14735 == null)))?((((map__14658_14735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14658_14735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14658_14735):map__14658_14735);
var prob_14737 = map__14658_14736__$1;
var path_14738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658_14736__$1,cljs.core.cst$kw$path);
var pred_14739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658_14736__$1,cljs.core.cst$kw$pred);
var val_14740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658_14736__$1,cljs.core.cst$kw$val);
var reason_14741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658_14736__$1,cljs.core.cst$kw$reason);
var via_14742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658_14736__$1,cljs.core.cst$kw$via);
var in_14743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658_14736__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_14743)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_14743], 0)),""], 0));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_15280], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_15282)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_15282)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_15278)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_15278], 0))], 0));
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_14740], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_14742)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_14742)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_14738)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_14738], 0))], 0));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_15279)], 0));

if(cljs.core.truth_(reason_15281)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_15281], 0));
} else {
}

var seq__15200_15284 = cljs.core.seq(prob_15277);
var chunk__15201_15285 = null;
var count__15202_15286 = (0);
var i__15203_15287 = (0);
while(true){
if((i__15203_15287 < count__15202_15286)){
var vec__15204_15288 = chunk__15201_15285.cljs$core$IIndexed$_nth$arity$2(null,i__15203_15287);
var k_15289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15204_15288,(0),null);
var v_15290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15204_15288,(1),null);
if(cljs.core.truth_((function (){var fexpr__15207 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15207.cljs$core$IFn$_invoke$arity$1 ? fexpr__15207.cljs$core$IFn$_invoke$arity$1(k_15289) : fexpr__15207.call(null,k_15289));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15289], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15290], 0));
}

var G__15291 = seq__15200_15284;
var G__15292 = chunk__15201_15285;
var G__15293 = count__15202_15286;
var G__15294 = (i__15203_15287 + (1));
seq__15200_15284 = G__15291;
chunk__15201_15285 = G__15292;
count__15202_15286 = G__15293;
i__15203_15287 = G__15294;
continue;
} else {
var temp__5290__auto___15295__$1 = cljs.core.seq(seq__15200_15284);
if(temp__5290__auto___15295__$1){
var seq__15200_15296__$1 = temp__5290__auto___15295__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15200_15296__$1)){
var c__9178__auto___15297 = cljs.core.chunk_first(seq__15200_15296__$1);
var G__15298 = cljs.core.chunk_rest(seq__15200_15296__$1);
var G__15299 = c__9178__auto___15297;
var G__15300 = cljs.core.count(c__9178__auto___15297);
var G__15301 = (0);
seq__15200_15284 = G__15298;
chunk__15201_15285 = G__15299;
count__15202_15286 = G__15300;
i__15203_15287 = G__15301;
continue;
} else {
var vec__15208_15302 = cljs.core.first(seq__15200_15296__$1);
var k_15303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208_15302,(0),null);
var v_15304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208_15302,(1),null);
if(cljs.core.truth_((function (){var fexpr__15211 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15211.cljs$core$IFn$_invoke$arity$1 ? fexpr__15211.cljs$core$IFn$_invoke$arity$1(k_15303) : fexpr__15211.call(null,k_15303));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15303], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15304], 0));
}

var G__15305 = cljs.core.next(seq__15200_15296__$1);
var G__15306 = null;
var G__15307 = (0);
var G__15308 = (0);
seq__15200_15284 = G__15305;
chunk__15201_15285 = G__15306;
count__15202_15286 = G__15307;
i__15203_15287 = G__15308;
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_14739)], 0));

if(cljs.core.truth_(reason_14741)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_14741], 0));
} else {
}

var seq__14660_14744 = cljs.core.seq(prob_14737);
var chunk__14661_14745 = null;
var count__14662_14746 = (0);
var i__14663_14747 = (0);
while(true){
if((i__14663_14747 < count__14662_14746)){
var vec__14664_14748 = chunk__14661_14745.cljs$core$IIndexed$_nth$arity$2(null,i__14663_14747);
var k_14749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664_14748,(0),null);
var v_14750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664_14748,(1),null);
if(cljs.core.truth_((function (){var fexpr__14667 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14667.cljs$core$IFn$_invoke$arity$1 ? fexpr__14667.cljs$core$IFn$_invoke$arity$1(k_14749) : fexpr__14667.call(null,k_14749));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14749], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14750], 0));
}

var G__14751 = seq__14660_14744;
var G__14752 = chunk__14661_14745;
var G__14753 = count__14662_14746;
var G__14754 = (i__14663_14747 + (1));
seq__14660_14744 = G__14751;
chunk__14661_14745 = G__14752;
count__14662_14746 = G__14753;
i__14663_14747 = G__14754;
continue;
} else {
var temp__5290__auto___14755__$1 = cljs.core.seq(seq__14660_14744);
if(temp__5290__auto___14755__$1){
var seq__14660_14756__$1 = temp__5290__auto___14755__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14660_14756__$1)){
var c__9177__auto___14757 = cljs.core.chunk_first(seq__14660_14756__$1);
var G__14758 = cljs.core.chunk_rest(seq__14660_14756__$1);
var G__14759 = c__9177__auto___14757;
var G__14760 = cljs.core.count(c__9177__auto___14757);
var G__14761 = (0);
seq__14660_14744 = G__14758;
chunk__14661_14745 = G__14759;
count__14662_14746 = G__14760;
i__14663_14747 = G__14761;
continue;
} else {
var vec__14668_14762 = cljs.core.first(seq__14660_14756__$1);
var k_14763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14668_14762,(0),null);
var v_14764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14668_14762,(1),null);
if(cljs.core.truth_((function (){var fexpr__14671 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14671.cljs$core$IFn$_invoke$arity$1 ? fexpr__14671.cljs$core$IFn$_invoke$arity$1(k_14763) : fexpr__14671.call(null,k_14763));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14763], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14764], 0));
}

var G__14765 = cljs.core.next(seq__14660_14756__$1);
var G__14766 = null;
var G__14767 = (0);
var G__14768 = (0);
seq__14660_14744 = G__14765;
chunk__14661_14745 = G__14766;
count__14662_14746 = G__14767;
i__14663_14747 = G__14768;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

<<<<<<< HEAD
var G__15309 = cljs.core.next(seq__15180_15269__$1);
var G__15310 = null;
var G__15311 = (0);
var G__15312 = (0);
seq__15180_15226 = G__15309;
chunk__15181_15227 = G__15310;
count__15182_15228 = G__15311;
i__15183_15229 = G__15312;
=======
var G__14769 = cljs.core.next(seq__14640_14729__$1);
var G__14770 = null;
var G__14771 = (0);
var G__14772 = (0);
seq__14640_14686 = G__14769;
chunk__14641_14687 = G__14770;
count__14642_14688 = G__14771;
i__14643_14689 = G__14772;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}

<<<<<<< HEAD
var seq__15212_15313 = cljs.core.seq(ed);
var chunk__15213_15314 = null;
var count__15214_15315 = (0);
var i__15215_15316 = (0);
while(true){
if((i__15215_15316 < count__15214_15315)){
var vec__15216_15317 = chunk__15213_15314.cljs$core$IIndexed$_nth$arity$2(null,i__15215_15316);
var k_15318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216_15317,(0),null);
var v_15319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15216_15317,(1),null);
if(cljs.core.truth_((function (){var fexpr__15219 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__15219.cljs$core$IFn$_invoke$arity$1 ? fexpr__15219.cljs$core$IFn$_invoke$arity$1(k_15318) : fexpr__15219.call(null,k_15318));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15318], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15319], 0));
=======
var seq__14672_14773 = cljs.core.seq(ed);
var chunk__14673_14774 = null;
var count__14674_14775 = (0);
var i__14675_14776 = (0);
while(true){
if((i__14675_14776 < count__14674_14775)){
var vec__14676_14777 = chunk__14673_14774.cljs$core$IIndexed$_nth$arity$2(null,i__14675_14776);
var k_14778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14676_14777,(0),null);
var v_14779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14676_14777,(1),null);
if(cljs.core.truth_((function (){var fexpr__14679 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__14679.cljs$core$IFn$_invoke$arity$1 ? fexpr__14679.cljs$core$IFn$_invoke$arity$1(k_14778) : fexpr__14679.call(null,k_14778));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14778], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14779], 0));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

<<<<<<< HEAD
var G__15320 = seq__15212_15313;
var G__15321 = chunk__15213_15314;
var G__15322 = count__15214_15315;
var G__15323 = (i__15215_15316 + (1));
seq__15212_15313 = G__15320;
chunk__15213_15314 = G__15321;
count__15214_15315 = G__15322;
i__15215_15316 = G__15323;
continue;
} else {
var temp__5290__auto___15324 = cljs.core.seq(seq__15212_15313);
if(temp__5290__auto___15324){
var seq__15212_15325__$1 = temp__5290__auto___15324;
if(cljs.core.chunked_seq_QMARK_(seq__15212_15325__$1)){
var c__9178__auto___15326 = cljs.core.chunk_first(seq__15212_15325__$1);
var G__15327 = cljs.core.chunk_rest(seq__15212_15325__$1);
var G__15328 = c__9178__auto___15326;
var G__15329 = cljs.core.count(c__9178__auto___15326);
var G__15330 = (0);
seq__15212_15313 = G__15327;
chunk__15213_15314 = G__15328;
count__15214_15315 = G__15329;
i__15215_15316 = G__15330;
continue;
} else {
var vec__15220_15331 = cljs.core.first(seq__15212_15325__$1);
var k_15332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220_15331,(0),null);
var v_15333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220_15331,(1),null);
if(cljs.core.truth_((function (){var fexpr__15223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__15223.cljs$core$IFn$_invoke$arity$1 ? fexpr__15223.cljs$core$IFn$_invoke$arity$1(k_15332) : fexpr__15223.call(null,k_15332));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15332], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15333], 0));
=======
var G__14780 = seq__14672_14773;
var G__14781 = chunk__14673_14774;
var G__14782 = count__14674_14775;
var G__14783 = (i__14675_14776 + (1));
seq__14672_14773 = G__14780;
chunk__14673_14774 = G__14781;
count__14674_14775 = G__14782;
i__14675_14776 = G__14783;
continue;
} else {
var temp__5290__auto___14784 = cljs.core.seq(seq__14672_14773);
if(temp__5290__auto___14784){
var seq__14672_14785__$1 = temp__5290__auto___14784;
if(cljs.core.chunked_seq_QMARK_(seq__14672_14785__$1)){
var c__9177__auto___14786 = cljs.core.chunk_first(seq__14672_14785__$1);
var G__14787 = cljs.core.chunk_rest(seq__14672_14785__$1);
var G__14788 = c__9177__auto___14786;
var G__14789 = cljs.core.count(c__9177__auto___14786);
var G__14790 = (0);
seq__14672_14773 = G__14787;
chunk__14673_14774 = G__14788;
count__14674_14775 = G__14789;
i__14675_14776 = G__14790;
continue;
} else {
var vec__14680_14791 = cljs.core.first(seq__14672_14785__$1);
var k_14792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680_14791,(0),null);
var v_14793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680_14791,(1),null);
if(cljs.core.truth_((function (){var fexpr__14683 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__14683.cljs$core$IFn$_invoke$arity$1 ? fexpr__14683.cljs$core$IFn$_invoke$arity$1(k_14792) : fexpr__14683.call(null,k_14792));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14792], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14793], 0));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

<<<<<<< HEAD
var G__15334 = cljs.core.next(seq__15212_15325__$1);
var G__15335 = null;
var G__15336 = (0);
var G__15337 = (0);
seq__15212_15313 = G__15334;
chunk__15213_15314 = G__15335;
count__15214_15315 = G__15336;
i__15215_15316 = G__15337;
=======
var G__14794 = cljs.core.next(seq__14672_14785__$1);
var G__14795 = null;
var G__14796 = (0);
var G__14797 = (0);
seq__14672_14773 = G__14794;
chunk__14673_14774 = G__14795;
count__14674_14775 = G__14796;
i__14675_14776 = G__14797;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}
<<<<<<< HEAD
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15179_15225;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15178_15224;
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14639_14685;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14638_14684;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9371__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
<<<<<<< HEAD
var sb__9372__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15338_15340 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15339_15341 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15338_15340,_STAR_print_fn_STAR_15339_15341,sb__9372__auto__){
return (function (x__9373__auto__){
return sb__9372__auto__.append(x__9373__auto__);
});})(_STAR_print_newline_STAR_15338_15340,_STAR_print_fn_STAR_15339_15341,sb__9372__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15339_15341;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15338_15340;
=======
var sb__9371__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14798_14800 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14799_14801 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14798_14800,_STAR_print_fn_STAR_14799_14801,sb__9371__auto__){
return (function (x__9372__auto__){
return sb__9371__auto__.append(x__9372__auto__);
});})(_STAR_print_newline_STAR_14798_14800,_STAR_print_fn_STAR_14799_14801,sb__9371__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14799_14801;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14798_14800;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9371__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__5288__auto__ = (function (){var or__8246__auto__ = (function (){var temp__5290__auto__ = (function (){var or__8246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__8246__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__5290__auto__)){
var gfn = temp__5290__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5288__auto__)){
var g = temp__5288__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5288__auto__,spec__$1){
<<<<<<< HEAD
return (function (p1__15342_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__15342_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__15342_SHARP_));
=======
return (function (p1__14802_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__14802_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__14802_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(g,temp__5288__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
<<<<<<< HEAD
var G__15344 = arguments.length;
switch (G__15344) {
=======
var G__14804 = arguments.length;
switch (G__14804) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit,cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__8234__auto__ = cljs.core.ident_QMARK_(k);
if(and__8234__auto__){
return cljs.core.namespace(k);
} else {
return and__8234__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__8246__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.alpha.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__5290__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5290__auto__)){
var arg_spec = temp__5290__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec$alpha_SLASH_args,args);
<<<<<<< HEAD
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9372__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15346_15348 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15347_15349 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15346_15348,_STAR_print_fn_STAR_15347_15349,sb__9372__auto__,ed,arg_spec,temp__5290__auto__,specs){
return (function (x__9373__auto__){
return sb__9372__auto__.append(x__9373__auto__);
});})(_STAR_print_newline_STAR_15346_15348,_STAR_print_fn_STAR_15347_15349,sb__9372__auto__,ed,arg_spec,temp__5290__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15347_15349;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15346_15348;
=======
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9371__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14806_14808 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14807_14809 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14806_14808,_STAR_print_fn_STAR_14807_14809,sb__9371__auto__,ed,arg_spec,temp__5290__auto__,specs){
return (function (x__9372__auto__){
return sb__9371__auto__.append(x__9372__auto__);
});})(_STAR_print_newline_STAR_14806_14808,_STAR_print_fn_STAR_14807_14809,sb__9371__auto__,ed,arg_spec,temp__5290__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14807_14809;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14806_14808;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9371__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__8246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
<<<<<<< HEAD
var G__15351 = arguments.length;
switch (G__15351) {
=======
var G__14811 = arguments.length;
switch (G__14811) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5288__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__5288__auto__)){
var spec = temp__5288__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
<<<<<<< HEAD
var G__15354 = arguments.length;
switch (G__15354) {
=======
var G__14814 = arguments.length;
switch (G__14814) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
<<<<<<< HEAD
var G__15357 = arguments.length;
switch (G__15357) {
=======
var G__14817 = arguments.length;
switch (G__14817) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,form,cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
<<<<<<< HEAD
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__15362){
var map__15363 = p__15362;
var map__15363__$1 = ((((!((map__15363 == null)))?((((map__15363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15363):map__15363);
var argm = map__15363__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15363__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15359_SHARP_){
var or__8247__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__15359_SHARP_) : k__GT_s.call(null,p1__15359_SHARP_));
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return p1__15359_SHARP_;
}
});})(k__GT_s,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15365 !== 'undefined'){
=======
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__14822){
var map__14823 = p__14822;
var map__14823__$1 = ((((!((map__14823 == null)))?((((map__14823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14823):map__14823);
var argm = map__14823__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14823__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__14819_SHARP_){
var or__8246__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__14819_SHARP_) : k__GT_s.call(null,p1__14819_SHARP_));
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return p1__14819_SHARP_;
}
});})(k__GT_s,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14825 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15365 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__15363,req_specs,req,id,req_keys,opt_specs,p__15362,k__GT_s,pred_forms,meta15366){
=======
cljs.spec.alpha.t_cljs$spec$alpha14825 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__14823,req,id,req_keys,opt_specs,p__14822,k__GT_s,pred_forms,meta14826){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__15363 = map__15363;
this.req_specs = req_specs;
this.map__14823 = map__14823;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
<<<<<<< HEAD
this.p__15362 = p__15362;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta15366 = meta15366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15367,meta15366__$1){
var self__ = this;
var _15367__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15365(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__15363,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.p__15362,self__.k__GT_s,self__.pred_forms,meta15366__$1));
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15367){
var self__ = this;
var _15367__$1 = this;
return self__.meta15366;
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
this.p__14822 = p__14822;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta14826 = meta14826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_14827,meta14826__$1){
var self__ = this;
var _14827__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14825(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.map__14823,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.p__14822,self__.k__GT_s,self__.pred_forms,meta14826__$1));
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_14827){
var self__ = this;
var _14827__$1 = this;
return self__.meta14826;
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
<<<<<<< HEAD
var G__15374 = m;
var vec__15375 = G__15374;
var seq__15376 = cljs.core.seq(vec__15375);
var first__15377 = cljs.core.first(seq__15376);
var seq__15376__$1 = cljs.core.next(seq__15376);
var vec__15378 = first__15377;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15378,(1),null);
var ks = seq__15376__$1;
var keys = vec__15375;
var ret__$1 = ret;
var G__15374__$1 = G__15374;
while(true){
var ret__$2 = ret__$1;
var vec__15381 = G__15374__$1;
var seq__15382 = cljs.core.seq(vec__15381);
var first__15383 = cljs.core.first(seq__15382);
var seq__15382__$1 = cljs.core.next(seq__15382);
var vec__15384 = first__15383;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15384,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15384,(1),null);
var ks__$1 = seq__15382__$1;
var keys__$1 = vec__15381;
=======
var G__14834 = m;
var vec__14835 = G__14834;
var seq__14836 = cljs.core.seq(vec__14835);
var first__14837 = cljs.core.first(seq__14836);
var seq__14836__$1 = cljs.core.next(seq__14836);
var vec__14838 = first__14837;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(1),null);
var ks = seq__14836__$1;
var keys = vec__14835;
var ret__$1 = ret;
var G__14834__$1 = G__14834;
while(true){
var ret__$2 = ret__$1;
var vec__14841 = G__14834__$1;
var seq__14842 = cljs.core.seq(vec__14841);
var first__14843 = cljs.core.first(seq__14842);
var seq__14842__$1 = cljs.core.next(seq__14842);
var vec__14844 = first__14843;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844,(1),null);
var ks__$1 = seq__14842__$1;
var keys__$1 = vec__14841;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__5288__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__5288__auto__)){
var s = temp__5288__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__15403 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__15404 = ks__$1;
ret__$1 = G__15403;
G__15374__$1 = G__15404;
continue;
}
} else {
var G__15405 = ret__$2;
var G__15406 = ks__$1;
ret__$1 = G__15405;
G__15374__$1 = G__15406;
=======
var G__14863 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__14864 = ks__$1;
ret__$1 = G__14863;
G__14834__$1 = G__14864;
continue;
}
} else {
var G__14865 = ret__$2;
var G__14866 = ks__$1;
ret__$1 = G__14865;
G__14834__$1 = G__14866;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
<<<<<<< HEAD
var G__15390 = cljs.core.keys(m);
var vec__15391 = G__15390;
var seq__15392 = cljs.core.seq(vec__15391);
var first__15393 = cljs.core.first(seq__15392);
var seq__15392__$1 = cljs.core.next(seq__15392);
var k = first__15393;
var ks = seq__15392__$1;
var keys = vec__15391;
var ret__$1 = ret;
var G__15390__$1 = G__15390;
while(true){
var ret__$2 = ret__$1;
var vec__15394 = G__15390__$1;
var seq__15395 = cljs.core.seq(vec__15394);
var first__15396 = cljs.core.first(seq__15395);
var seq__15395__$1 = cljs.core.next(seq__15395);
var k__$1 = first__15396;
var ks__$1 = seq__15395__$1;
var keys__$1 = vec__15394;
=======
var G__14850 = cljs.core.keys(m);
var vec__14851 = G__14850;
var seq__14852 = cljs.core.seq(vec__14851);
var first__14853 = cljs.core.first(seq__14852);
var seq__14852__$1 = cljs.core.next(seq__14852);
var k = first__14853;
var ks = seq__14852__$1;
var keys = vec__14851;
var ret__$1 = ret;
var G__14850__$1 = G__14850;
while(true){
var ret__$2 = ret__$1;
var vec__14854 = G__14850__$1;
var seq__14855 = cljs.core.seq(vec__14854);
var first__14856 = cljs.core.first(seq__14855);
var seq__14855__$1 = cljs.core.next(seq__14855);
var k__$1 = first__14856;
var ks__$1 = seq__14855__$1;
var keys__$1 = vec__14854;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
<<<<<<< HEAD
var G__15407 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__15408 = ks__$1;
ret__$1 = G__15407;
G__15390__$1 = G__15408;
continue;
} else {
var G__15409 = ret__$2;
var G__15410 = ks__$1;
ret__$1 = G__15409;
G__15390__$1 = G__15410;
=======
var G__14867 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__14868 = ks__$1;
ret__$1 = G__14867;
G__14850__$1 = G__14868;
continue;
} else {
var G__14869 = ret__$2;
var G__14870 = ks__$1;
ret__$1 = G__14869;
G__14850__$1 = G__14870;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return ret__$2;
}
break;
}
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
<<<<<<< HEAD
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5290__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5290__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
<<<<<<< HEAD
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5290__auto__){
var probs = temp__5290__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15360_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__15360_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5290__auto__){
var probs = temp__5290__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__14820_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__14820_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,probs);
} else {
return null;
}
<<<<<<< HEAD
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__15397){
var vec__15398 = p__15397;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398,(1),null);
if(cljs.core.truth_((function (){var or__8247__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__8247__auto__){
return or__8247__auto__;
=======
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__14857){
var vec__14858 = p__14857;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14858,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14858,(1),null);
if(cljs.core.truth_((function (){var or__8246__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__8246__auto__){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
<<<<<<< HEAD
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
<<<<<<< HEAD
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
<<<<<<< HEAD
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15361_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__15361_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__14821_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__14821_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
], 0));
} else {
return null;
}
}
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__15401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__15401) : cljs.spec.alpha.map_spec_impl.call(null,G__15401));
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__15402 = cljs.core.PersistentVector.EMPTY;
var G__15402__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15402,cljs.core.cst$kw$req,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__15402);
var G__15402__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15402__$1,cljs.core.cst$kw$opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__15402__$1);
var G__15402__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15402__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__15402__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15402__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__15402__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$map__15363,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$p__15362,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta15366], null);
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15365.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15365.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15365";

cljs.spec.alpha.t_cljs$spec$alpha15365.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15365");
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15365 = ((function (k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha15365(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__15363__$2,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__15362__$1,k__GT_s__$1,pred_forms__$1,meta15366){
return (new cljs.spec.alpha.t_cljs$spec$alpha15365(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__15363__$2,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__15362__$1,k__GT_s__$1,pred_forms__$1,meta15366));
});})(k__GT_s,keys__GT_specnames,id,map__15363,map__15363__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__14861 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__14861) : cljs.spec.alpha.map_spec_impl.call(null,G__14861));
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__14862 = cljs.core.PersistentVector.EMPTY;
var G__14862__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14862,cljs.core.cst$kw$req,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__14862);
var G__14862__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14862__$1,cljs.core.cst$kw$opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__14862__$1);
var G__14862__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14862__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__14862__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14862__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__14862__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$map__14823,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$p__14822,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta14826], null);
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14825.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14825.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14825";

cljs.spec.alpha.t_cljs$spec$alpha14825.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14825");
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14825 = ((function (k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha14825(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__14823__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__14822__$1,k__GT_s__$1,pred_forms__$1,meta14826){
return (new cljs.spec.alpha.t_cljs$spec$alpha14825(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__14823__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,p__14822__$1,k__GT_s__$1,pred_forms__$1,meta14826));
});})(k__GT_s,keys__GT_specnames,id,map__14823,map__14823__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15365(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__15363__$1,req_specs,req,id,req_keys,opt_specs,p__15362,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14825(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__14823__$1,req,id,req_keys,opt_specs,p__14822,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
<<<<<<< HEAD
var G__15412 = arguments.length;
switch (G__15412) {
=======
var G__14872 = arguments.length;
switch (G__14872) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
<<<<<<< HEAD
var G__15413 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__15413,gfn);
} else {
return G__15413;
=======
var G__14873 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__14873,gfn);
} else {
return G__14873;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
<<<<<<< HEAD
var G__15414 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__15414,gfn);
} else {
return G__15414;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15415 !== 'undefined'){
=======
var G__14874 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__14874,gfn);
} else {
return G__14874;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14875 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415 = (function (form,pred,gfn,cpred_QMARK_,unc,meta15416){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875 = (function (form,pred,gfn,cpred_QMARK_,unc,meta14876){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
<<<<<<< HEAD
this.meta15416 = meta15416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15417,meta15416__$1){
var self__ = this;
var _15417__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15415(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta15416__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15417){
var self__ = this;
var _15417__$1 = this;
return self__.meta15416;
});

cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
this.meta14876 = meta14876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14877,meta14876__$1){
var self__ = this;
var _14877__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14875(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta14876__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14877){
var self__ = this;
var _14877__$1 = this;
return self__.meta14876;
});

cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
return self__.form;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta15416], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15415.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15415.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15415";

cljs.spec.alpha.t_cljs$spec$alpha15415.cljs$lang$ctorPrWriter = (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15415");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha15415 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15415(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15416){
return (new cljs.spec.alpha.t_cljs$spec$alpha15415(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15416));
=======
cljs.spec.alpha.t_cljs$spec$alpha14875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta14876], null);
});

cljs.spec.alpha.t_cljs$spec$alpha14875.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14875.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14875";

cljs.spec.alpha.t_cljs$spec$alpha14875.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14875");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha14875 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14875(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta14876){
return (new cljs.spec.alpha.t_cljs$spec$alpha14875(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta14876));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15415(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14875(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
<<<<<<< HEAD
var G__15425 = arguments.length;
switch (G__15425) {
=======
var G__14885 = arguments.length;
switch (G__14885) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
<<<<<<< HEAD
return (function (p1__15419_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__8235__auto__ = cljs.core._get_method(mm,(function (){var fexpr__15427 = cljs.core._dispatch_fn(mm);
return (fexpr__15427.cljs$core$IFn$_invoke$arity$1 ? fexpr__15427.cljs$core$IFn$_invoke$arity$1(p1__15419_SHARP_) : fexpr__15427.call(null,p1__15419_SHARP_));
})());
if(cljs.core.truth_(and__8235__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__15419_SHARP_) : mm.call(null,p1__15419_SHARP_));
=======
return (function (p1__14879_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__8234__auto__ = cljs.core._get_method(mm,(function (){var fexpr__14887 = cljs.core._dispatch_fn(mm);
return (fexpr__14887.cljs$core$IFn$_invoke$arity$1 ? fexpr__14887.cljs$core$IFn$_invoke$arity$1(p1__14879_SHARP_) : fexpr__14887.call(null,p1__14879_SHARP_));
})());
if(cljs.core.truth_(and__8234__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__14879_SHARP_) : mm.call(null,p1__14879_SHARP_));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return and__8234__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
<<<<<<< HEAD
return (function (p1__15420_SHARP_){
var fexpr__15428 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__15428.cljs$core$IFn$_invoke$arity$1 ? fexpr__15428.cljs$core$IFn$_invoke$arity$1(p1__15420_SHARP_) : fexpr__15428.call(null,p1__15420_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__15421_SHARP_,p2__15422_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15421_SHARP_,retag,p2__15422_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15429 !== 'undefined'){
=======
return (function (p1__14880_SHARP_){
var fexpr__14888 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__14888.cljs$core$IFn$_invoke$arity$1 ? fexpr__14888.cljs$core$IFn$_invoke$arity$1(p1__14880_SHARP_) : fexpr__14888.call(null,p1__14880_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__14881_SHARP_,p2__14882_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14881_SHARP_,retag,p2__14882_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14889 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta15430){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta14890){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
<<<<<<< HEAD
this.meta15430 = meta15430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_15431,meta15430__$1){
var self__ = this;
var _15431__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15429(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta15430__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_15431){
var self__ = this;
var _15431__$1 = this;
return self__.meta15430;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
=======
this.meta14890 = meta14890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_14891,meta14890__$1){
var self__ = this;
var _14891__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14889(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta14890__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_14891){
var self__ = this;
var _14891__$1 = this;
return self__.meta14890;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5288__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5288__auto__)){
var pred = temp__5288__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5288__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5288__auto__)){
var pred = temp__5288__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__5288__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5288__auto__)){
var pred = temp__5288__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
<<<<<<< HEAD
return (function (p__15432){
var vec__15433 = p__15432;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(1),null);
=======
return (function (p__14892){
var vec__14893 = p__14892;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
<<<<<<< HEAD
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__15433,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__15433,k,f,___$1,id,predx,dval,tag){
return (function (p1__15423_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__15423_SHARP_,k) : self__.tag.call(null,p1__15423_SHARP_,k));
});})(rmap__$1,p,vec__15433,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__9201__auto__ = self__.form;
return cljs.core._conj((function (){var x__9201__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto____$1);
})(),x__9201__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__15433,k,f,___$1,id,predx,dval,tag))
=======
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__14893,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__14893,k,f,___$1,id,predx,dval,tag){
return (function (p1__14883_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__14883_SHARP_,k) : self__.tag.call(null,p1__14883_SHARP_,k));
});})(rmap__$1,p,vec__14893,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__9200__auto__ = self__.form;
return cljs.core._conj((function (){var x__9200__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto____$1);
})(),x__9200__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__14893,k,f,___$1,id,predx,dval,tag))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
<<<<<<< HEAD
return (function (p__15436){
var vec__15437 = p__15436;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(0),null);
=======
return (function (p__14896){
var vec__14897 = p__14896;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.spec.alpha.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec),(function (){var x__9200__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15429.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta15430], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15429.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15429.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15429";

cljs.spec.alpha.t_cljs$spec$alpha15429.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15429");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15429 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15429(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15430){
return (new cljs.spec.alpha.t_cljs$spec$alpha15429(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15430));
=======
cljs.spec.alpha.t_cljs$spec$alpha14889.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta14890], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha14889.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14889.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14889";

cljs.spec.alpha.t_cljs$spec$alpha14889.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14889");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14889 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14889(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta14890){
return (new cljs.spec.alpha.t_cljs$spec$alpha14889(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta14890));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(id,predx,dval,tag))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15429(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14889(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
<<<<<<< HEAD
var G__15442 = arguments.length;
switch (G__15442) {
=======
var G__14902 = arguments.length;
switch (G__14902) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15443 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14903 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443 = (function (forms,preds,gfn,specs,cnt,meta15444){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903 = (function (forms,preds,gfn,specs,cnt,meta14904){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
<<<<<<< HEAD
this.meta15444 = meta15444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_15445,meta15444__$1){
var self__ = this;
var _15445__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15443(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta15444__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_15445){
var self__ = this;
var _15445__$1 = this;
return self__.meta15444;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
=======
this.meta14904 = meta14904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_14905,meta14904__$1){
var self__ = this;
var _14905__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14903(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta14904__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_14905){
var self__ = this;
var _14905__$1 = this;
return self__.meta14904;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__15447 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__15448 = (i + (1));
ret = G__15447;
i = G__15448;
=======
var G__14907 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__14908 = (i + (1));
ret = G__14907;
i = G__14908;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
break;
}
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
<<<<<<< HEAD
var G__15449 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__15450 = (i + (1));
ret = G__15449;
i = G__15450;
=======
var G__14909 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__14910 = (i + (1));
ret = G__14909;
i = G__14910;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
break;
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple),self__.forms)));
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15443.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta15444], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15443.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15443.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15443";

cljs.spec.alpha.t_cljs$spec$alpha15443.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15443");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15443 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15443(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15444){
return (new cljs.spec.alpha.t_cljs$spec$alpha15443(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15444));
=======
cljs.spec.alpha.t_cljs$spec$alpha14903.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta14904], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha14903.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14903.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14903";

cljs.spec.alpha.t_cljs$spec$alpha14903.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14903");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14903 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14903(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta14904){
return (new cljs.spec.alpha.t_cljs$spec$alpha14903(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta14904));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(specs,cnt))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15443(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14903(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
<<<<<<< HEAD
var x15451 = v;
x15451.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x15451.cljs$core$IMapEntry$_key$arity$1 = ((function (x15451){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x15451))
;

x15451.cljs$core$IMapEntry$_val$arity$1 = ((function (x15451){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x15451))
;

return x15451;
=======
var x14911 = v;
x14911.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x14911.cljs$core$IMapEntry$_key$arity$1 = ((function (x14911){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x14911))
;

x14911.cljs$core$IMapEntry$_val$arity$1 = ((function (x14911){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x14911))
;

return x14911;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
<<<<<<< HEAD
var cform = (function (){var G__15452 = cljs.core.count(preds);
switch (G__15452) {
case (2):
return ((function (G__15452,id,kps,specs){
=======
var cform = (function (){var G__14912 = cljs.core.count(preds);
switch (G__14912) {
case (2):
return ((function (G__14912,id,kps,specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
<<<<<<< HEAD
;})(G__15452,id,kps,specs))

break;
case (3):
return ((function (G__15452,id,kps,specs){
=======
;})(G__14912,id,kps,specs))

break;
case (3):
return ((function (G__14912,id,kps,specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$2))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
<<<<<<< HEAD
;})(G__15452,id,kps,specs))

break;
default:
return ((function (G__15452,id,kps,specs){
=======
;})(G__14912,id,kps,specs))

break;
default:
return ((function (G__14912,id,kps,specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
<<<<<<< HEAD
var G__15461 = (i + (1));
i = G__15461;
=======
var G__14921 = (i + (1));
i = G__14921;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
break;
}
});
<<<<<<< HEAD
;})(G__15452,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15453 !== 'undefined'){
=======
;})(G__14912,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14913 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta15454){
=======
cljs.spec.alpha.t_cljs$spec$alpha14913 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta14914){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
<<<<<<< HEAD
this.meta15454 = meta15454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_15455,meta15454__$1){
var self__ = this;
var _15455__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15453(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta15454__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_15455){
var self__ = this;
var _15455__$1 = this;
return self__.meta15454;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
=======
this.meta14914 = meta14914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_14915,meta14914__$1){
var self__ = this;
var _14915__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14913(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta14914__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_14915){
var self__ = this;
var _14915__$1 = this;
return self__.meta14914;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__15456){
var self__ = this;
var vec__15457 = p__15456;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(1),null);
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__14916){
var self__ = this;
var vec__14917 = p__14916;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14917,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14917,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15453.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta15454], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15453.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15453.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15453";

cljs.spec.alpha.t_cljs$spec$alpha15453.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15453");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15453 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha15453(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15454){
return (new cljs.spec.alpha.t_cljs$spec$alpha15453(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15454));
=======
cljs.spec.alpha.t_cljs$spec$alpha14913.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta14914], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14913.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14913.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14913";

cljs.spec.alpha.t_cljs$spec$alpha14913.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14913");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14913 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha14913(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta14914){
return (new cljs.spec.alpha.t_cljs$spec$alpha14913(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta14914));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(id,kps,specs,cform))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15453(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__15468 = preds;
var vec__15470 = G__15468;
var seq__15471 = cljs.core.seq(vec__15470);
var first__15472 = cljs.core.first(seq__15471);
var seq__15471__$1 = cljs.core.next(seq__15471);
var pred = first__15472;
var preds__$1 = seq__15471__$1;
var G__15469 = forms;
var vec__15473 = G__15469;
var seq__15474 = cljs.core.seq(vec__15473);
var first__15475 = cljs.core.first(seq__15474);
var seq__15474__$1 = cljs.core.next(seq__15474);
var form = first__15475;
var forms__$1 = seq__15474__$1;
var ret__$1 = ret;
var G__15468__$1 = G__15468;
var G__15469__$1 = G__15469;
while(true){
var ret__$2 = ret__$1;
var vec__15476 = G__15468__$1;
var seq__15477 = cljs.core.seq(vec__15476);
var first__15478 = cljs.core.first(seq__15477);
var seq__15477__$1 = cljs.core.next(seq__15477);
var pred__$1 = first__15478;
var preds__$2 = seq__15477__$1;
var vec__15479 = G__15469__$1;
var seq__15480 = cljs.core.seq(vec__15479);
var first__15481 = cljs.core.first(seq__15480);
var seq__15480__$1 = cljs.core.next(seq__15480);
var form__$1 = first__15481;
var forms__$2 = seq__15480__$1;
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14913(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__14928 = preds;
var vec__14930 = G__14928;
var seq__14931 = cljs.core.seq(vec__14930);
var first__14932 = cljs.core.first(seq__14931);
var seq__14931__$1 = cljs.core.next(seq__14931);
var pred = first__14932;
var preds__$1 = seq__14931__$1;
var G__14929 = forms;
var vec__14933 = G__14929;
var seq__14934 = cljs.core.seq(vec__14933);
var first__14935 = cljs.core.first(seq__14934);
var seq__14934__$1 = cljs.core.next(seq__14934);
var form = first__14935;
var forms__$1 = seq__14934__$1;
var ret__$1 = ret;
var G__14928__$1 = G__14928;
var G__14929__$1 = G__14929;
while(true){
var ret__$2 = ret__$1;
var vec__14936 = G__14928__$1;
var seq__14937 = cljs.core.seq(vec__14936);
var first__14938 = cljs.core.first(seq__14937);
var seq__14937__$1 = cljs.core.next(seq__14937);
var pred__$1 = first__14938;
var preds__$2 = seq__14937__$1;
var vec__14939 = G__14929__$1;
var seq__14940 = cljs.core.seq(vec__14939);
var first__14941 = cljs.core.first(seq__14940);
var seq__14940__$1 = cljs.core.next(seq__14940);
var form__$1 = first__14941;
var forms__$2 = seq__14940__$1;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__15482 = nret;
var G__15483 = preds__$2;
var G__15484 = forms__$2;
ret__$1 = G__15482;
G__15468__$1 = G__15483;
G__15469__$1 = G__15484;
=======
var G__14942 = nret;
var G__14943 = preds__$2;
var G__14944 = forms__$2;
ret__$1 = G__14942;
G__14928__$1 = G__14943;
G__14929__$1 = G__14944;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
<<<<<<< HEAD
var G__15491 = forms;
var vec__15493 = G__15491;
var seq__15494 = cljs.core.seq(vec__15493);
var first__15495 = cljs.core.first(seq__15494);
var seq__15494__$1 = cljs.core.next(seq__15494);
var form = first__15495;
var forms__$1 = seq__15494__$1;
var G__15492 = preds;
var vec__15496 = G__15492;
var seq__15497 = cljs.core.seq(vec__15496);
var first__15498 = cljs.core.first(seq__15497);
var seq__15497__$1 = cljs.core.next(seq__15497);
var pred = first__15498;
var preds__$1 = seq__15497__$1;
var ret__$1 = ret;
var G__15491__$1 = G__15491;
var G__15492__$1 = G__15492;
while(true){
var ret__$2 = ret__$1;
var vec__15499 = G__15491__$1;
var seq__15500 = cljs.core.seq(vec__15499);
var first__15501 = cljs.core.first(seq__15500);
var seq__15500__$1 = cljs.core.next(seq__15500);
var form__$1 = first__15501;
var forms__$2 = seq__15500__$1;
var vec__15502 = G__15492__$1;
var seq__15503 = cljs.core.seq(vec__15502);
var first__15504 = cljs.core.first(seq__15503);
var seq__15503__$1 = cljs.core.next(seq__15503);
var pred__$1 = first__15504;
var preds__$2 = seq__15503__$1;
=======
var G__14951 = forms;
var vec__14953 = G__14951;
var seq__14954 = cljs.core.seq(vec__14953);
var first__14955 = cljs.core.first(seq__14954);
var seq__14954__$1 = cljs.core.next(seq__14954);
var form = first__14955;
var forms__$1 = seq__14954__$1;
var G__14952 = preds;
var vec__14956 = G__14952;
var seq__14957 = cljs.core.seq(vec__14956);
var first__14958 = cljs.core.first(seq__14957);
var seq__14957__$1 = cljs.core.next(seq__14957);
var pred = first__14958;
var preds__$1 = seq__14957__$1;
var ret__$1 = ret;
var G__14951__$1 = G__14951;
var G__14952__$1 = G__14952;
while(true){
var ret__$2 = ret__$1;
var vec__14959 = G__14951__$1;
var seq__14960 = cljs.core.seq(vec__14959);
var first__14961 = cljs.core.first(seq__14960);
var seq__14960__$1 = cljs.core.next(seq__14960);
var form__$1 = first__14961;
var forms__$2 = seq__14960__$1;
var vec__14962 = G__14952__$1;
var seq__14963 = cljs.core.seq(vec__14962);
var first__14964 = cljs.core.first(seq__14963);
var seq__14963__$1 = cljs.core.next(seq__14963);
var pred__$1 = first__14964;
var preds__$2 = seq__14963__$1;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
<<<<<<< HEAD
var G__15505 = nret;
var G__15506 = forms__$2;
var G__15507 = preds__$2;
ret__$1 = G__15505;
G__15491__$1 = G__15506;
G__15492__$1 = G__15507;
=======
var G__14965 = nret;
var G__14966 = forms__$2;
var G__14967 = preds__$2;
ret__$1 = G__14965;
G__14951__$1 = G__14966;
G__14952__$1 = G__14967;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
<<<<<<< HEAD
var cform = (function (){var G__15510 = cljs.core.count(preds);
switch (G__15510) {
case (2):
return ((function (G__15510,specs){
=======
var cform = (function (){var G__14970 = cljs.core.count(preds);
switch (G__14970) {
case (2):
return ((function (G__14970,specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
<<<<<<< HEAD
;})(G__15510,specs))

break;
case (3):
return ((function (G__15510,specs){
=======
;})(G__14970,specs))

break;
case (3):
return ((function (G__14970,specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
<<<<<<< HEAD
;})(G__15510,specs))

break;
default:
return ((function (G__15510,specs){
=======
;})(G__14970,specs))

break;
default:
return ((function (G__14970,specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__15515 = nret;
var G__15516 = (i + (1));
ret = G__15515;
i = G__15516;
=======
var G__14975 = nret;
var G__14976 = (i + (1));
ret = G__14975;
i = G__14976;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return ret;
}
break;
}
});
<<<<<<< HEAD
;})(G__15510,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15511 !== 'undefined'){
=======
;})(G__14970,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14971 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511 = (function (forms,preds,gfn,specs,cform,meta15512){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971 = (function (forms,preds,gfn,specs,cform,meta14972){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
<<<<<<< HEAD
this.meta15512 = meta15512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_15513,meta15512__$1){
var self__ = this;
var _15513__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15511(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta15512__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_15513){
var self__ = this;
var _15513__$1 = this;
return self__.meta15512;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
=======
this.meta14972 = meta14972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_14973,meta14972__$1){
var self__ = this;
var _14973__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14971(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta14972__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_14973){
var self__ = this;
var _14973__$1 = this;
return self__.meta14972;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
<<<<<<< HEAD
return (function (p1__15509_SHARP_,p2__15508_SHARP_){
return cljs.spec.alpha.unform(p2__15508_SHARP_,p1__15509_SHARP_);
=======
return (function (p1__14969_SHARP_,p2__14968_SHARP_){
return cljs.spec.alpha.unform(p2__14968_SHARP_,p1__14969_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_and),self__.forms)));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15511.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta15512], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15511.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15511.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15511";

cljs.spec.alpha.t_cljs$spec$alpha15511.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15511");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15511 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha15511(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15512){
return (new cljs.spec.alpha.t_cljs$spec$alpha15511(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15512));
=======
cljs.spec.alpha.t_cljs$spec$alpha14971.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta14972], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14971.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14971.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14971";

cljs.spec.alpha.t_cljs$spec$alpha14971.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14971");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14971 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha14971(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta14972){
return (new cljs.spec.alpha.t_cljs$spec$alpha14971(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta14972));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(specs,cform))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15511(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14971(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__8246__auto__ = kfn;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__8246__auto__ = kform;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = count;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__8234__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9200__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = (function (){var or__8246__auto__ = min_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__8234__auto__)){
return !((((function (){var or__8246__auto__ = min_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__8246__auto__ = max_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (9007199254740991);
}
})())));
} else {
return and__8234__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__9200__auto__ = (function (){var or__8246__auto__ = min_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),(function (){var x__9200__auto__ = (function (){var or__8246__auto__ = max_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (9007199254740991);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = distinct;
if(cljs.core.truth_(and__8234__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__8234__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15525 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14985 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525 = (function (forms,preds,gfn,meta15526){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta15526 = meta15526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15527,meta15526__$1){
var self__ = this;
var _15527__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15525(self__.forms,self__.preds,self__.gfn,meta15526__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15527){
var self__ = this;
var _15527__$1 = this;
return self__.meta15526;
});

cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
cljs.spec.alpha.t_cljs$spec$alpha14985 = (function (forms,preds,gfn,meta14986){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta14986 = meta14986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14987,meta14986__$1){
var self__ = this;
var _14987__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14985(self__.forms,self__.preds,self__.gfn,meta14986__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14987){
var self__ = this;
var _14987__$1 = this;
return self__.meta14986;
});

cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__15517_SHARP_,p2__15518_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__15517_SHARP_,x,p2__15518_SHARP_);
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__14977_SHARP_,p2__14978_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__14977_SHARP_,x,p2__14978_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__15519_SHARP_){
return cljs.spec.alpha.unform(p1__15519_SHARP_,x);
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__14979_SHARP_){
return cljs.spec.alpha.unform(p1__14979_SHARP_,x);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__15520_SHARP_,p2__15521_SHARP_){
return cljs.spec.alpha.explain_1(p1__15520_SHARP_,p2__15521_SHARP_,path,via,in$,x);
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__14980_SHARP_,p2__14981_SHARP_){
return cljs.spec.alpha.explain_1(p1__14980_SHARP_,p2__14981_SHARP_,path,via,in$,x);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(___$1))
,self__.forms,self__.preds));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$1){
<<<<<<< HEAD
return (function (p1__15522_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__15522_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__15523_SHARP_,p2__15524_SHARP_){
return cljs.spec.alpha.gensub(p1__15523_SHARP_,overrides,path,rmap,p2__15524_SHARP_);
=======
return (function (p1__14982_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__14982_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__14983_SHARP_,p2__14984_SHARP_){
return cljs.spec.alpha.gensub(p1__14983_SHARP_,overrides,path,rmap,p2__14984_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_merge),self__.forms)));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta15526], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15525.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15525.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15525";

cljs.spec.alpha.t_cljs$spec$alpha15525.cljs$lang$ctorPrWriter = (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15525");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha15525 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha15525(forms__$1,preds__$1,gfn__$1,meta15526){
return (new cljs.spec.alpha.t_cljs$spec$alpha15525(forms__$1,preds__$1,gfn__$1,meta15526));
=======
cljs.spec.alpha.t_cljs$spec$alpha14985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta14986], null);
});

cljs.spec.alpha.t_cljs$spec$alpha14985.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14985.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14985";

cljs.spec.alpha.t_cljs$spec$alpha14985.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14985");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha14985 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha14985(forms__$1,preds__$1,gfn__$1,meta14986){
return (new cljs.spec.alpha.t_cljs$spec$alpha14985(forms__$1,preds__$1,gfn__$1,meta14986));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15525(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14985(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
<<<<<<< HEAD
var G__15533 = arguments.length;
switch (G__15533) {
=======
var G__14993 = arguments.length;
switch (G__14993) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

<<<<<<< HEAD
cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__15534,gfn){
var map__15535 = p__15534;
var map__15535__$1 = ((((!((map__15535 == null)))?((((map__15535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15535):map__15535);
var opts = map__15535__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15535__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$into);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15535__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15528_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__15528_SHARP_);
});})(conform_into,spec,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__14994,gfn){
var map__14995 = p__14994;
var map__14995__$1 = ((((!((map__14995 == null)))?((((map__14995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14995):map__14995);
var opts = map__14995__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14995__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$into);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14995__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14988_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__14988_SHARP_);
});})(conform_into,spec,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
var kfn__$1 = (function (){var or__8246__auto__ = kfn;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
<<<<<<< HEAD
return ((function (or__8247__auto__,conform_into,spec,check_QMARK_,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__8247__auto__,conform_into,spec,check_QMARK_,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
return ((function (or__8246__auto__,conform_into,spec,check_QMARK_,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__8246__auto__,conform_into,spec,check_QMARK_,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = cljs.core.map_QMARK_(x);
if(and__8234__auto__){
var or__8246__auto__ = (function (){var and__8234__auto____$1 = kind;
if(cljs.core.truth_(and__8234__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__8234__auto____$1;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__8234__auto__;
}
})())){
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15529_SHARP_){
return cljs.core.empty((function (){var or__8247__auto__ = conform_into;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
} else {
return p1__15529_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14989_SHARP_){
return cljs.core.empty((function (){var or__8246__auto__ = conform_into;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return p1__14989_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,addcv,cljs.core.identity], null);

}
}
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15537 !== 'undefined'){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14997 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15537 = (function (form,max_count,check_QMARK_,gfn,gen_max,map__15535,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,p__15534,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta15538){
this.form = form;
this.max_count = max_count;
=======
cljs.spec.alpha.t_cljs$spec$alpha14997 = (function (form,max_count,p__14994,check_QMARK_,gfn,gen_max,pred,cpred,map__14995,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta14998){
this.form = form;
this.max_count = max_count;
this.p__14994 = p__14994;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.map__15535 = map__15535;
this.pred = pred;
this.cpred = cpred;
this.map__14995 = map__14995;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.p__15534 = p__15534;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
<<<<<<< HEAD
this.meta15538 = meta15538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_15539,meta15538__$1){
var self__ = this;
var _15539__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15537(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.map__15535,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.p__15534,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta15538__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_15539){
var self__ = this;
var _15539__$1 = this;
return self__.meta15538;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
this.meta14998 = meta14998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_14999,meta14998__$1){
var self__ = this;
var _14999__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14997(self__.form,self__.max_count,self__.p__14994,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.map__14995,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta14998__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_14999){
var self__ = this;
var _14999__$1 = this;
return self__.meta14998;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
<<<<<<< HEAD
var vec__15540 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15546 = cljs.core.seq(x);
var vec__15547 = G__15546;
var seq__15548 = cljs.core.seq(vec__15547);
var first__15549 = cljs.core.first(seq__15548);
var seq__15548__$1 = cljs.core.next(seq__15548);
var v = first__15549;
var vs = seq__15548__$1;
var vseq = vec__15547;
var ret__$1 = ret;
var i__$1 = i;
var G__15546__$1 = G__15546;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15550 = G__15546__$1;
var seq__15551 = cljs.core.seq(vec__15550);
var first__15552 = cljs.core.first(seq__15551);
var seq__15551__$1 = cljs.core.next(seq__15551);
var v__$1 = first__15552;
var vs__$1 = seq__15551__$1;
var vseq__$1 = vec__15550;
=======
var vec__15000 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15006 = cljs.core.seq(x);
var vec__15007 = G__15006;
var seq__15008 = cljs.core.seq(vec__15007);
var first__15009 = cljs.core.first(seq__15008);
var seq__15008__$1 = cljs.core.next(seq__15008);
var v = first__15009;
var vs = seq__15008__$1;
var vseq = vec__15007;
var ret__$1 = ret;
var i__$1 = i;
var G__15006__$1 = G__15006;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15010 = G__15006__$1;
var seq__15011 = cljs.core.seq(vec__15010);
var first__15012 = cljs.core.first(seq__15011);
var seq__15011__$1 = cljs.core.next(seq__15011);
var v__$1 = first__15012;
var vs__$1 = seq__15011__$1;
var vseq__$1 = vec__15010;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__15583 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__15584 = (i__$2 + (1));
var G__15585 = vs__$1;
ret__$1 = G__15583;
i__$1 = G__15584;
G__15546__$1 = G__15585;
=======
var G__15043 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__15044 = (i__$2 + (1));
var G__15045 = vs__$1;
ret__$1 = G__15043;
i__$1 = G__15044;
G__15006__$1 = G__15045;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__8598__auto__ = (1);
var y__8599__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
<<<<<<< HEAD
var G__15586 = (i + step);
i = G__15586;
=======
var G__15046 = (i + step);
i = G__15046;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
<<<<<<< HEAD
var G__15556 = cljs.core.seq(x);
var vec__15557 = G__15556;
var seq__15558 = cljs.core.seq(vec__15557);
var first__15559 = cljs.core.first(seq__15558);
var seq__15558__$1 = cljs.core.next(seq__15558);
var v = first__15559;
var vs = seq__15558__$1;
var vseq = vec__15557;
var i__$1 = i;
var G__15556__$1 = G__15556;
while(true){
var i__$2 = i__$1;
var vec__15560 = G__15556__$1;
var seq__15561 = cljs.core.seq(vec__15560);
var first__15562 = cljs.core.first(seq__15561);
var seq__15561__$1 = cljs.core.next(seq__15561);
var v__$1 = first__15562;
var vs__$1 = seq__15561__$1;
var vseq__$1 = vec__15560;
=======
var G__15016 = cljs.core.seq(x);
var vec__15017 = G__15016;
var seq__15018 = cljs.core.seq(vec__15017);
var first__15019 = cljs.core.first(seq__15018);
var seq__15018__$1 = cljs.core.next(seq__15018);
var v = first__15019;
var vs = seq__15018__$1;
var vseq = vec__15017;
var i__$1 = i;
var G__15016__$1 = G__15016;
while(true){
var i__$2 = i__$1;
var vec__15020 = G__15016__$1;
var seq__15021 = cljs.core.seq(vec__15020);
var first__15022 = cljs.core.first(seq__15021);
var seq__15021__$1 = cljs.core.next(seq__15021);
var v__$1 = first__15022;
var vs__$1 = seq__15021__$1;
var vseq__$1 = vec__15020;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
<<<<<<< HEAD
var G__15587 = (i__$2 + (1));
var G__15588 = vs__$1;
i__$1 = G__15587;
G__15556__$1 = G__15588;
=======
var G__15047 = (i__$2 + (1));
var G__15048 = vs__$1;
i__$1 = G__15047;
G__15016__$1 = G__15048;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;

}
}
break;
}
}

}
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
<<<<<<< HEAD
var vec__15563 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15569 = cljs.core.seq(x);
var vec__15570 = G__15569;
var seq__15571 = cljs.core.seq(vec__15570);
var first__15572 = cljs.core.first(seq__15571);
var seq__15571__$1 = cljs.core.next(seq__15571);
var v = first__15572;
var vs = seq__15571__$1;
var vseq = vec__15570;
var ret__$1 = ret;
var i__$1 = i;
var G__15569__$1 = G__15569;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15573 = G__15569__$1;
var seq__15574 = cljs.core.seq(vec__15573);
var first__15575 = cljs.core.first(seq__15574);
var seq__15574__$1 = cljs.core.next(seq__15574);
var v__$1 = first__15575;
var vs__$1 = seq__15574__$1;
var vseq__$1 = vec__15573;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__15589 = (function (){var G__15576 = ret__$2;
var G__15577 = i__$2;
var G__15578 = v__$1;
var G__15579 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__15576,G__15577,G__15578,G__15579) : add.call(null,G__15576,G__15577,G__15578,G__15579));
})();
var G__15590 = (i__$2 + (1));
var G__15591 = vs__$1;
ret__$1 = G__15589;
i__$1 = G__15590;
G__15569__$1 = G__15591;
=======
var vec__15023 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15023,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15023,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15023,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15029 = cljs.core.seq(x);
var vec__15030 = G__15029;
var seq__15031 = cljs.core.seq(vec__15030);
var first__15032 = cljs.core.first(seq__15031);
var seq__15031__$1 = cljs.core.next(seq__15031);
var v = first__15032;
var vs = seq__15031__$1;
var vseq = vec__15030;
var ret__$1 = ret;
var i__$1 = i;
var G__15029__$1 = G__15029;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15033 = G__15029__$1;
var seq__15034 = cljs.core.seq(vec__15033);
var first__15035 = cljs.core.first(seq__15034);
var seq__15034__$1 = cljs.core.next(seq__15034);
var v__$1 = first__15035;
var vs__$1 = seq__15034__$1;
var vseq__$1 = vec__15033;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__15049 = (function (){var G__15036 = ret__$2;
var G__15037 = i__$2;
var G__15038 = v__$1;
var G__15039 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__15036,G__15037,G__15038,G__15039) : add.call(null,G__15036,G__15037,G__15038,G__15039));
})();
var G__15050 = (i__$2 + (1));
var G__15051 = vs__$1;
ret__$1 = G__15049;
i__$1 = G__15050;
G__15029__$1 = G__15051;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
break;
}
} else {
return x;
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__8246__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
<<<<<<< HEAD
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__15581 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__8247__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__15041 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__8246__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
<<<<<<< HEAD
});})(or__8247__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__15580 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__15580.cljs$core$IFn$_invoke$arity$1 ? fexpr__15580.cljs$core$IFn$_invoke$arity$1(G__15581) : fexpr__15580.call(null,G__15581));
})());
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(or__8246__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__15040 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__15040.cljs$core$IFn$_invoke$arity$1 ? fexpr__15040.cljs$core$IFn$_invoke$arity$1(G__15041) : fexpr__15040.call(null,G__15041));
})());
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
<<<<<<< HEAD
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15530_SHARP_){
if(cljs.core.empty_QMARK_(p1__15530_SHARP_)){
return p1__15530_SHARP_;
} else {
return cljs.core.empty(p1__15530_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15531_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__15531_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__15531_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__8247__auto__ = self__.min_count;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14990_SHARP_){
if(cljs.core.empty_QMARK_(p1__14990_SHARP_)){
return p1__14990_SHARP_;
} else {
return cljs.core.empty(p1__14990_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14991_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__14991_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__14991_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__8246__auto__ = self__.min_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__8246__auto__ = self__.max_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var x__8598__auto__ = self__.gen_max;
var y__8599__auto__ = ((2) * (function (){var or__8246__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return (0);
}
})());
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__8246__auto__ = self__.min_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__8246__auto__ = self__.min_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})(),(function (){var or__8246__auto__ = self__.max_count;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var x__8598__auto__ = self__.gen_max;
var y__8599__auto__ = ((2) * (function (){var or__8246__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return (0);
}
})());
return ((x__8598__auto__ > y__8599__auto__) ? x__8598__auto__ : y__8599__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
<<<<<<< HEAD
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
var or__8246__auto__ = self__.describe_form;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_every),(function (){var x__9200__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$map__15535,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$p__15534,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta15538], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15537.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15537.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15537";

cljs.spec.alpha.t_cljs$spec$alpha15537.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15537");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15537 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15537(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__15535__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,p__15534__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15538){
return (new cljs.spec.alpha.t_cljs$spec$alpha15537(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__15535__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,p__15534__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15538));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15535,map__15535__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$p__14994,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$map__14995,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta14998], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14997.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14997.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14997";

cljs.spec.alpha.t_cljs$spec$alpha14997.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14997");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14997 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14997(form__$1,max_count__$1,p__14994__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,map__14995__$2,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta14998){
return (new cljs.spec.alpha.t_cljs$spec$alpha14997(form__$1,max_count__$1,p__14994__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,map__14995__$2,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta14998));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14995,map__14995__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15537(form,max_count,check_QMARK_,gfn,gen_max,map__15535__$1,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,p__15534,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha14997(form,max_count,p__14994,check_QMARK_,gfn,gen_max,pred,cpred,map__14995__$1,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
<<<<<<< HEAD
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__15592){
var map__15593 = p__15592;
var map__15593__$1 = ((((!((map__15593 == null)))?((((map__15593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15593):map__15593);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__15595){
var map__15596 = p__15595;
var map__15596__$1 = ((((!((map__15596 == null)))?((((map__15596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15596):map__15596);
var vec__15597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$ps);
var seq__15598 = cljs.core.seq(vec__15597);
var first__15599 = cljs.core.first(seq__15598);
var seq__15598__$1 = cljs.core.next(seq__15598);
var p1 = first__15599;
var pr = seq__15598__$1;
var ps = vec__15597;
var vec__15600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$ks);
var seq__15601 = cljs.core.seq(vec__15600);
var first__15602 = cljs.core.first(seq__15601);
var seq__15601__$1 = cljs.core.next(seq__15601);
var k1 = first__15602;
var kr = seq__15601__$1;
var ks = vec__15600;
var vec__15603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$forms);
var seq__15604 = cljs.core.seq(vec__15603);
var first__15605 = cljs.core.first(seq__15604);
var seq__15604__$1 = cljs.core.next(seq__15604);
var f1 = first__15605;
var fr = seq__15604__$1;
var forms = vec__15603;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$rep_PLUS_);
=======
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__15052){
var map__15053 = p__15052;
var map__15053__$1 = ((((!((map__15053 == null)))?((((map__15053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15053):map__15053);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15053__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__15055){
var map__15056 = p__15055;
var map__15056__$1 = ((((!((map__15056 == null)))?((((map__15056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15056):map__15056);
var vec__15057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15056__$1,cljs.core.cst$kw$ps);
var seq__15058 = cljs.core.seq(vec__15057);
var first__15059 = cljs.core.first(seq__15058);
var seq__15058__$1 = cljs.core.next(seq__15058);
var p1 = first__15059;
var pr = seq__15058__$1;
var ps = vec__15057;
var vec__15060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15056__$1,cljs.core.cst$kw$ks);
var seq__15061 = cljs.core.seq(vec__15060);
var first__15062 = cljs.core.first(seq__15061);
var seq__15061__$1 = cljs.core.next(seq__15061);
var k1 = first__15062;
var kr = seq__15061__$1;
var ks = vec__15060;
var vec__15063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15056__$1,cljs.core.cst$kw$forms);
var seq__15064 = cljs.core.seq(vec__15063);
var first__15065 = cljs.core.first(seq__15064);
var seq__15064__$1 = cljs.core.next(seq__15064);
var f1 = first__15065;
var fr = seq__15064__$1;
var forms = vec__15063;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15056__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15056__$1,cljs.core.cst$kw$rep_PLUS_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
<<<<<<< HEAD
var G__15607 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__15607) : cljs.spec.alpha.pcat_STAR_.call(null,G__15607));
=======
var G__15067 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__15067) : cljs.spec.alpha.pcat_STAR_.call(null,G__15067));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___15609 = arguments.length;
var i__9525__auto___15610 = (0);
while(true){
if((i__9525__auto___15610 < len__9524__auto___15609)){
args__9531__auto__.push((arguments[i__9525__auto___15610]));

var G__15611 = (i__9525__auto___15610 + (1));
i__9525__auto___15610 = G__15611;
=======
var args__9530__auto__ = [];
var len__9523__auto___15069 = arguments.length;
var i__9524__auto___15070 = (0);
while(true){
if((i__9524__auto___15070 < len__9523__auto___15069)){
args__9530__auto__.push((arguments[i__9524__auto___15070]));

var G__15071 = (i__9524__auto___15070 + (1));
i__9524__auto___15070 = G__15071;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq15608){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15608));
=======
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq15068){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15068));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9200__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),(function (){var x__9200__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_),(function (){var x__9200__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__8246__auto__ = ks;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return forms;
}
})())){
<<<<<<< HEAD
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15612_SHARP_){
var G__15614 = cljs.core.first(p1__15612_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15614) : f.call(null,G__15614));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8247__auto__ = cljs.core.seq(ks);
if(or__8247__auto__){
return or__8247__auto__;
=======
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15072_SHARP_){
var G__15074 = cljs.core.first(p1__15072_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15074) : f.call(null,G__15074));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8246__auto__ = cljs.core.seq(ks);
if(or__8246__auto__){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8246__auto__ = cljs.core.seq(forms);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
<<<<<<< HEAD
return (function (p1__15613_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__15613_SHARP_,(2));
=======
return (function (p1__15073_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__15073_SHARP_,(2));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
<<<<<<< HEAD
var vec__15615 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__15618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615,(0),null);
var seq__15619 = cljs.core.seq(vec__15618);
var first__15620 = cljs.core.first(seq__15619);
var seq__15619__$1 = cljs.core.next(seq__15619);
var p1 = first__15620;
var pr = seq__15619__$1;
var ps__$1 = vec__15618;
var vec__15621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15621,(0),null);
var ks__$1 = vec__15621;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615,(2),null);
=======
var vec__15075 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__15078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15075,(0),null);
var seq__15079 = cljs.core.seq(vec__15078);
var first__15080 = cljs.core.first(seq__15079);
var seq__15079__$1 = cljs.core.next(seq__15079);
var p1 = first__15080;
var pr = seq__15079__$1;
var ps__$1 = vec__15078;
var vec__15081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15075,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15081,(0),null);
var ks__$1 = vec__15081;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15075,(2),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___15625 = arguments.length;
var i__9525__auto___15626 = (0);
while(true){
if((i__9525__auto___15626 < len__9524__auto___15625)){
args__9531__auto__.push((arguments[i__9525__auto___15626]));

var G__15627 = (i__9525__auto___15626 + (1));
i__9525__auto___15626 = G__15627;
=======
var args__9530__auto__ = [];
var len__9523__auto___15085 = arguments.length;
var i__9524__auto___15086 = (0);
while(true){
if((i__9524__auto___15086 < len__9523__auto___15085)){
args__9530__auto__.push((arguments[i__9524__auto___15086]));

var G__15087 = (i__9524__auto___15086 + (1));
i__9524__auto___15086 = G__15087;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((0) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__9531__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq15624){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15624));
=======
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq15084){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15084));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__8234__auto__ = p1;
if(cljs.core.truth_(and__8234__auto__)){
return p2;
} else {
return and__8234__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__8246__auto__ = p1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__8246__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil);
if(or__8246__auto__){
return or__8246__auto__;
} else {
<<<<<<< HEAD
var or__8247__auto____$1 = (function (){var and__8235__auto__ = (function (){var G__15639 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__15638 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null);
return (fexpr__15638.cljs$core$IFn$_invoke$arity$1 ? fexpr__15638.cljs$core$IFn$_invoke$arity$1(G__15639) : fexpr__15638.call(null,G__15639));
=======
var or__8246__auto____$1 = (function (){var and__8234__auto__ = (function (){var G__15099 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__15098 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null);
return (fexpr__15098.cljs$core$IFn$_invoke$arity$1 ? fexpr__15098.cljs$core$IFn$_invoke$arity$1(G__15099) : fexpr__15098.call(null,G__15099));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__8234__auto__;
}
})();
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
<<<<<<< HEAD
var map__15640 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15640__$1 = ((((!((map__15640 == null)))?((((map__15640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15640):map__15640);
var p__$1 = map__15640__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15640__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15640__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15640__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15640__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15640__$1,cljs.core.cst$kw$forms);
var G__15642 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15642)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15642)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15642)){
var and__8235__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__8235__auto__)){
var or__8247__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
var map__15100 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15100__$1 = ((((!((map__15100 == null)))?((((map__15100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15100):map__15100);
var p__$1 = map__15100__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15100__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15100__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15100__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15100__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15100__$1,cljs.core.cst$kw$forms);
var G__15102 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15102)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15102)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15102)){
var and__8234__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__8234__auto__)){
var or__8246__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
var ret = cljs.spec.alpha.and_preds((cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(ret));
}
} else {
return and__8234__auto__;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15642)){
var or__8247__auto__ = (p1 === p2);
if(or__8247__auto__){
return or__8247__auto__;
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15102)){
var or__8246__auto__ = (p1 === p2);
if(or__8246__auto__){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15642)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15642)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15642)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15102)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15102)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15102)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
<<<<<<< HEAD
var map__15643 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15643__$1 = ((((!((map__15643 == null)))?((((map__15643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15643):map__15643);
var p__$1 = map__15643__$1;
var vec__15644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643__$1,cljs.core.cst$kw$ps);
var seq__15645 = cljs.core.seq(vec__15644);
var first__15646 = cljs.core.first(seq__15645);
var seq__15645__$1 = cljs.core.next(seq__15645);
var p0 = first__15646;
var pr = seq__15645__$1;
var ps = vec__15644;
var vec__15647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15647,(0),null);
var ks = vec__15647;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643__$1,cljs.core.cst$kw$forms);
var G__15651 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15651)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15651)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15651)){
=======
var map__15103 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15103__$1 = ((((!((map__15103 == null)))?((((map__15103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15103):map__15103);
var p__$1 = map__15103__$1;
var vec__15104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15103__$1,cljs.core.cst$kw$ps);
var seq__15105 = cljs.core.seq(vec__15104);
var first__15106 = cljs.core.first(seq__15105);
var seq__15105__$1 = cljs.core.next(seq__15105);
var p0 = first__15106;
var pr = seq__15105__$1;
var ps = vec__15104;
var vec__15107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15103__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15107,(0),null);
var ks = vec__15107;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15103__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15103__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15103__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15103__$1,cljs.core.cst$kw$forms);
var G__15111 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15111)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15111)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15111)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil;
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15651)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15651)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15651)){
var vec__15652 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__15655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15655,(0),null);
var vec__15658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15658,(0),null);
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15111)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15111)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15111)){
var vec__15112 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__15115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15115,(0),null);
var vec__15118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil:(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15651)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15111)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
<<<<<<< HEAD
var map__15665 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15665__$1 = ((((!((map__15665 == null)))?((((map__15665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15665):map__15665);
var p__$1 = map__15665__$1;
var vec__15666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$ps);
var seq__15667 = cljs.core.seq(vec__15666);
var first__15668 = cljs.core.first(seq__15667);
var seq__15667__$1 = cljs.core.next(seq__15667);
var p0 = first__15668;
var pr = seq__15667__$1;
var ps = vec__15666;
var vec__15669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15669,(0),null);
var ks = vec__15669;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__15673 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15673)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15673)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15673)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15662_SHARP_,p2__15661_SHARP_){
return cljs.spec.alpha.unform(p2__15661_SHARP_,p1__15662_SHARP_);
});})(G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15673)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15663_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__15663_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__15663_SHARP_));
});})(G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15673)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15664_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__15664_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__15664_SHARP_));
});})(G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__15674 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__15675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__15674,G__15675) : cljs.spec.alpha.op_unform.call(null,G__15674,G__15675));
} else {
return null;
}
});})(G__15673,map__15665,map__15665__$1,p__$1,vec__15666,seq__15667,first__15668,seq__15667__$1,p0,pr,ps,vec__15669,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15673)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__15676 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15676,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15676,(1),null);
var G__15679 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__15680 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__15679,G__15680) : cljs.spec.alpha.op_unform.call(null,G__15679,G__15680));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15673)].join('')));
=======
var map__15125 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15125__$1 = ((((!((map__15125 == null)))?((((map__15125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15125):map__15125);
var p__$1 = map__15125__$1;
var vec__15126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$ps);
var seq__15127 = cljs.core.seq(vec__15126);
var first__15128 = cljs.core.first(seq__15127);
var seq__15127__$1 = cljs.core.next(seq__15127);
var p0 = first__15128;
var pr = seq__15127__$1;
var ps = vec__15126;
var vec__15129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15129,(0),null);
var ks = vec__15129;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15125__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__15133 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15133)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15133)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15133)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15122_SHARP_,p2__15121_SHARP_){
return cljs.spec.alpha.unform(p2__15121_SHARP_,p1__15122_SHARP_);
});})(G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15133)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15123_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__15123_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__15123_SHARP_));
});})(G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15133)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__15124_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__15124_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__15124_SHARP_));
});})(G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__15134 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__15135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__15134,G__15135) : cljs.spec.alpha.op_unform.call(null,G__15134,G__15135));
} else {
return null;
}
});})(G__15133,map__15125,map__15125__$1,p__$1,vec__15126,seq__15127,first__15128,seq__15127__$1,p0,pr,ps,vec__15129,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15133)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__15136 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15136,(1),null);
var G__15139 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__15140 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__15139,G__15140) : cljs.spec.alpha.op_unform.call(null,G__15139,G__15140));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15133)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
<<<<<<< HEAD
var map__15681 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15681__$1 = ((((!((map__15681 == null)))?((((map__15681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15681):map__15681);
var p__$1 = map__15681__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15681__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15681__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15681__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__15681,map__15681__$1,p__$1,op,ps,splice){
=======
var map__15141 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15141__$1 = ((((!((map__15141 == null)))?((((map__15141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15141):map__15141);
var p__$1 = map__15141__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__15141,map__15141__$1,p__$1,op,ps,splice){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
<<<<<<< HEAD
var G__15684 = r;
var G__15685 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__15683 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__15683.cljs$core$IFn$_invoke$arity$2 ? fexpr__15683.cljs$core$IFn$_invoke$arity$2(G__15684,G__15685) : fexpr__15683.call(null,G__15684,G__15685));
}
});})(map__15681,map__15681__$1,p__$1,op,ps,splice))
;
var G__15686 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15686)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15686)){
=======
var G__15144 = r;
var G__15145 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__15143 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__15143.cljs$core$IFn$_invoke$arity$2 ? fexpr__15143.cljs$core$IFn$_invoke$arity$2(G__15144,G__15145) : fexpr__15143.call(null,G__15144,G__15145));
}
});})(map__15141,map__15141__$1,p__$1,op,ps,splice))
;
var G__15146 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15146)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15146)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15686)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15146)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15686)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15146)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15686)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15686)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15686)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15146)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15146)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15146)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
<<<<<<< HEAD
var map__15688 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15688__$1 = ((((!((map__15688 == null)))?((((map__15688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15688):map__15688);
var p__$1 = map__15688__$1;
var vec__15689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$ps);
var seq__15690 = cljs.core.seq(vec__15689);
var first__15691 = cljs.core.first(seq__15690);
var seq__15690__$1 = cljs.core.next(seq__15690);
var p0 = first__15691;
var pr = seq__15690__$1;
var ps = vec__15689;
var vec__15692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$ks);
var seq__15693 = cljs.core.seq(vec__15692);
var first__15694 = cljs.core.first(seq__15693);
var seq__15693__$1 = cljs.core.next(seq__15693);
var k0 = first__15694;
var kr = seq__15693__$1;
var ks = vec__15692;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__15696 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15696)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15696)){
=======
var map__15148 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15148__$1 = ((((!((map__15148 == null)))?((((map__15148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15148):map__15148);
var p__$1 = map__15148__$1;
var vec__15149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$ps);
var seq__15150 = cljs.core.seq(vec__15149);
var first__15151 = cljs.core.first(seq__15150);
var seq__15150__$1 = cljs.core.next(seq__15150);
var p0 = first__15151;
var pr = seq__15150__$1;
var ps = vec__15149;
var vec__15152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$ks);
var seq__15153 = cljs.core.seq(vec__15152);
var first__15154 = cljs.core.first(seq__15153);
var seq__15153__$1 = cljs.core.next(seq__15153);
var k0 = first__15154;
var kr = seq__15153__$1;
var ks = vec__15152;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__15156 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15156)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15156)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15696)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15156)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var temp__5290__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__5290__auto__)){
var p1__$1 = temp__5290__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15696)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__15697 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__15698 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__15697,G__15698) : cljs.spec.alpha.deriv.call(null,G__15697,G__15698));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15696)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15696,map__15688,map__15688__$1,p__$1,vec__15689,seq__15690,first__15691,seq__15690__$1,p0,pr,ps,vec__15692,seq__15693,first__15694,seq__15693__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__15687_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__15687_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__15687_SHARP_,x));
});})(G__15696,map__15688,map__15688__$1,p__$1,vec__15689,seq__15690,first__15691,seq__15690__$1,p0,pr,ps,vec__15692,seq__15693,first__15694,seq__15693__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15696)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__15699 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__15700 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__15699,G__15700) : cljs.spec.alpha.deriv.call(null,G__15699,G__15700));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15696)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15156)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__15157 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__15158 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__15157,G__15158) : cljs.spec.alpha.deriv.call(null,G__15157,G__15158));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15156)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15156,map__15148,map__15148__$1,p__$1,vec__15149,seq__15150,first__15151,seq__15150__$1,p0,pr,ps,vec__15152,seq__15153,first__15154,seq__15153__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__15147_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__15147_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__15147_SHARP_,x));
});})(G__15156,map__15148,map__15148__$1,p__$1,vec__15149,seq__15150,first__15151,seq__15150__$1,p0,pr,ps,vec__15152,seq__15153,first__15154,seq__15153__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15156)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__15159 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__15160 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__15159,G__15160) : cljs.spec.alpha.deriv.call(null,G__15159,G__15160));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15156)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
<<<<<<< HEAD
var map__15701 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15701__$1 = ((((!((map__15701 == null)))?((((map__15701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15701):map__15701);
var p__$1 = map__15701__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__15703 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15703)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15703)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15703)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15703)){
=======
var map__15161 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15161__$1 = ((((!((map__15161 == null)))?((((map__15161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15161):map__15161);
var p__$1 = map__15161__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__15163 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15163)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15163)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15163)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15163)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__9200__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__8246__auto__ = cljs.core.seq(ks);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15703)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15163)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__9200__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15703)){
var x__9201__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_);
return cljs.core._conj((function (){var x__9201__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9201__auto____$1);
})(),x__9201__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15703)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15163)){
var x__9200__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_);
return cljs.core._conj((function (){var x__9200__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto____$1);
})(),x__9200__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15163)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
<<<<<<< HEAD
var vec__15704 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15704,(0),null);
var input__$1 = vec__15704;
var map__15707 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15707__$1 = ((((!((map__15707 == null)))?((((map__15707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15707):map__15707);
var p__$1 = map__15707__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,cljs.core.cst$kw$p2);
=======
var vec__15164 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15164,(0),null);
var input__$1 = vec__15164;
var map__15167 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15167__$1 = ((((!((map__15167 == null)))?((((map__15167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15167):map__15167);
var p__$1 = map__15167__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15167__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15167__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15167__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15167__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15167__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15167__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15167__$1,cljs.core.cst$kw$p2);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var via__$1 = (function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
<<<<<<< HEAD
var insufficient = ((function (vec__15704,x,input__$1,map__15707,map__15707__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__15704,x,input__$1,map__15707,map__15707__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__15709 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15709)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15709)){
=======
var insufficient = ((function (vec__15164,x,input__$1,map__15167,map__15167__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__15164,x,input__$1,map__15167,map__15167__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__15169 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15169)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15169)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15709)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15169)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,cljs.spec.alpha.op_describe(p1));
}
} else {
var temp__5288__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__5288__auto__)){
var p1__$1 = temp__5288__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
<<<<<<< HEAD
var G__15710 = cljs.spec.alpha.op_describe(p1);
var G__15711 = p1;
var G__15712 = path;
var G__15713 = via__$1;
var G__15714 = in$;
var G__15715 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__15710,G__15711,G__15712,G__15713,G__15714,G__15715) : cljs.spec.alpha.op_explain.call(null,G__15710,G__15711,G__15712,G__15713,G__15714,G__15715));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15709)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8247__auto__ = cljs.core.seq(ks);
if(or__8247__auto__){
return or__8247__auto__;
=======
var G__15170 = cljs.spec.alpha.op_describe(p1);
var G__15171 = p1;
var G__15172 = path;
var G__15173 = via__$1;
var G__15174 = in$;
var G__15175 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__15170,G__15171,G__15172,G__15173,G__15174,G__15175) : cljs.spec.alpha.op_explain.call(null,G__15170,G__15171,G__15172,G__15173,G__15174,G__15175));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15169)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8246__auto__ = cljs.core.seq(ks);
if(or__8246__auto__){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8246__auto__ = cljs.core.seq(forms);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
<<<<<<< HEAD
var vec__15716 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__15709,vec__15704,x,input__$1,map__15707,map__15707__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__15719){
var vec__15720 = p__15719;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15720,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__15709,vec__15704,x,input__$1,map__15707,map__15707__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15716,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15716,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15716,(2),null);
=======
var vec__15176 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__15169,vec__15164,x,input__$1,map__15167,map__15167__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__15179){
var vec__15180 = p__15179;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__15169,vec__15164,x,input__$1,map__15167,map__15167__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(2),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__8246__auto__ = form__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15709)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__15709,vec__15704,x,input__$1,map__15707,map__15707__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__15723 = (function (){var or__8247__auto__ = form__$1;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15169)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__15169,vec__15164,x,input__$1,map__15167,map__15167__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__15183 = (function (){var or__8246__auto__ = form__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
<<<<<<< HEAD
var G__15724 = pred;
var G__15725 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__15726 = via__$1;
var G__15727 = in$;
var G__15728 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__15723,G__15724,G__15725,G__15726,G__15727,G__15728) : cljs.spec.alpha.op_explain.call(null,G__15723,G__15724,G__15725,G__15726,G__15727,G__15728));
});})(G__15709,vec__15704,x,input__$1,map__15707,map__15707__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__8247__auto__ = cljs.core.seq(ks);
if(or__8247__auto__){
return or__8247__auto__;
=======
var G__15184 = pred;
var G__15185 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__15186 = via__$1;
var G__15187 = in$;
var G__15188 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__15183,G__15184,G__15185,G__15186,G__15187,G__15188) : cljs.spec.alpha.op_explain.call(null,G__15183,G__15184,G__15185,G__15186,G__15187,G__15188));
});})(G__15169,vec__15164,x,input__$1,map__15167,map__15167__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__8246__auto__ = cljs.core.seq(ks);
if(or__8246__auto__){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8246__auto__ = cljs.core.seq(forms);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15709)){
var G__15729 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__15730 = p1;
var G__15731 = path;
var G__15732 = via__$1;
var G__15733 = in$;
var G__15734 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__15729,G__15730,G__15731,G__15732,G__15733,G__15734) : cljs.spec.alpha.op_explain.call(null,G__15729,G__15730,G__15731,G__15732,G__15733,G__15734));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15709)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15169)){
var G__15189 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__15190 = p1;
var G__15191 = path;
var G__15192 = via__$1;
var G__15193 = in$;
var G__15194 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__15189,G__15190,G__15191,G__15192,G__15193,G__15194) : cljs.spec.alpha.op_explain.call(null,G__15189,G__15190,G__15191,G__15192,G__15193,G__15194));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15169)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
<<<<<<< HEAD
var map__15736 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15736__$1 = ((((!((map__15736 == null)))?((((map__15736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15736):map__15736);
var p__$1 = map__15736__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15736__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
=======
var map__15196 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__15196__$1 = ((((!((map__15196 == null)))?((((map__15196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15196):map__15196);
var p__$1 = map__15196__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15196__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__8234__auto__ = rmap__$1;
if(cljs.core.truth_(and__8234__auto__)){
var and__8234__auto____$1 = id;
if(cljs.core.truth_(and__8234__auto____$1)){
var and__8234__auto____$2 = k;
if(cljs.core.truth_(and__8234__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__8234__auto____$2;
}
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
<<<<<<< HEAD
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__15738 = p__$2;
var G__15739 = overrides;
var G__15740 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__15741 = rmap__$1;
var G__15742 = (function (){var or__8247__auto__ = f__$1;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__15198 = p__$2;
var G__15199 = overrides;
var G__15200 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__15201 = rmap__$1;
var G__15202 = (function (){var or__8246__auto__ = f__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return p__$2;
}
})();
<<<<<<< HEAD
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__15738,G__15739,G__15740,G__15741,G__15742) : cljs.spec.alpha.re_gen.call(null,G__15738,G__15739,G__15740,G__15741,G__15742));
});})(map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__15743 = p__$2;
var G__15744 = overrides;
var G__15745 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__15746 = rmap__$1;
var G__15747 = (function (){var or__8247__auto__ = f__$1;
if(cljs.core.truth_(or__8247__auto__)){
return or__8247__auto__;
=======
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__15198,G__15199,G__15200,G__15201,G__15202) : cljs.spec.alpha.re_gen.call(null,G__15198,G__15199,G__15200,G__15201,G__15202));
});})(map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__15203 = p__$2;
var G__15204 = overrides;
var G__15205 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__15206 = rmap__$1;
var G__15207 = (function (){var or__8246__auto__ = f__$1;
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return p__$2;
}
})();
<<<<<<< HEAD
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__15743,G__15744,G__15745,G__15746,G__15747) : cljs.spec.alpha.re_gen.call(null,G__15743,G__15744,G__15745,G__15746,G__15747));
}
}
});})(map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
=======
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__15203,G__15204,G__15205,G__15206,G__15207) : cljs.spec.alpha.re_gen.call(null,G__15203,G__15204,G__15205,G__15206,G__15207));
}
}
});})(map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__8246__auto__ = cljs.core.seq(ks__$1);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8246__auto__ = cljs.core.seq(forms__$1);
if(or__8246__auto__){
return or__8246__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
<<<<<<< HEAD
});})(map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
=======
});})(map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
;
var or__8246__auto__ = (function (){var temp__5290__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__5290__auto__)){
var g = temp__5290__auto__;
<<<<<<< HEAD
var G__15749 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__15749)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15749)){
=======
var G__15209 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__15209)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15209)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
<<<<<<< HEAD
var G__15750 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15750)){
=======
var G__15210 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__15210)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15750)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15210)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var temp__5290__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5290__auto__)){
var g = temp__5290__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15750)){
var G__15751 = p1;
var G__15752 = overrides;
var G__15753 = path;
var G__15754 = rmap__$1;
var G__15755 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__15751,G__15752,G__15753,G__15754,G__15755) : cljs.spec.alpha.re_gen.call(null,G__15751,G__15752,G__15753,G__15754,G__15755));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15750)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__15210)){
var G__15211 = p1;
var G__15212 = overrides;
var G__15213 = path;
var G__15214 = rmap__$1;
var G__15215 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__15211,G__15212,G__15213,G__15214,G__15215) : cljs.spec.alpha.re_gen.call(null,G__15211,G__15212,G__15213,G__15214,G__15215));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__15210)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15750)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__15210)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15750)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__15210)){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__5290__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__5290__auto__)){
var g = temp__5290__auto__;
<<<<<<< HEAD
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5290__auto__,G__15750,or__8247__auto____$1,or__8247__auto__,map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__15735_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__15735_SHARP_);
});})(g,temp__5290__auto__,G__15750,or__8247__auto____$1,or__8247__auto__,map__15736,map__15736__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
=======
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5290__auto__,G__15210,or__8246__auto____$1,or__8246__auto__,map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__15195_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__15195_SHARP_);
});})(g,temp__5290__auto__,G__15210,or__8246__auto____$1,or__8246__auto__,map__15196,map__15196__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
,cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15750)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15210)].join('')));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}
}
}
}
}
} else {
return null;
}
}
}
});
<<<<<<< HEAD
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__15756){
while(true){
var vec__15757 = p__15756;
var seq__15758 = cljs.core.seq(vec__15757);
var first__15759 = cljs.core.first(seq__15758);
var seq__15758__$1 = cljs.core.next(seq__15758);
var x = first__15759;
var xs = seq__15758__$1;
var data = vec__15757;
=======
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__15216){
while(true){
var vec__15217 = p__15216;
var seq__15218 = cljs.core.seq(vec__15217);
var first__15219 = cljs.core.first(seq__15218);
var seq__15218__$1 = cljs.core.next(seq__15218);
var x = first__15219;
var xs = seq__15218__$1;
var data = vec__15217;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
var temp__5288__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__5288__auto__)){
var dp = temp__5288__auto__;
<<<<<<< HEAD
var G__15760 = dp;
var G__15761 = xs;
p = G__15760;
p__15756 = G__15761;
=======
var G__15220 = dp;
var G__15221 = xs;
p = G__15220;
p__15216 = G__15221;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
<<<<<<< HEAD
var G__15765 = input;
var vec__15766 = G__15765;
var seq__15767 = cljs.core.seq(vec__15766);
var first__15768 = cljs.core.first(seq__15767);
var seq__15767__$1 = cljs.core.next(seq__15767);
var x = first__15768;
var xs = seq__15767__$1;
var data = vec__15766;
var i = (0);
var p__$1 = p;
var G__15765__$1 = G__15765;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__15769 = G__15765__$1;
var seq__15770 = cljs.core.seq(vec__15769);
var first__15771 = cljs.core.first(seq__15770);
var seq__15770__$1 = cljs.core.next(seq__15770);
var x__$1 = first__15771;
var xs__$1 = seq__15770__$1;
var data__$1 = vec__15769;
=======
var G__15225 = input;
var vec__15226 = G__15225;
var seq__15227 = cljs.core.seq(vec__15226);
var first__15228 = cljs.core.first(seq__15227);
var seq__15227__$1 = cljs.core.next(seq__15227);
var x = first__15228;
var xs = seq__15227__$1;
var data = vec__15226;
var i = (0);
var p__$1 = p;
var G__15225__$1 = G__15225;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__15229 = G__15225__$1;
var seq__15230 = cljs.core.seq(vec__15229);
var first__15231 = cljs.core.first(seq__15230);
var seq__15230__$1 = cljs.core.next(seq__15230);
var x__$1 = first__15231;
var xs__$1 = seq__15230__$1;
var data__$1 = vec__15229;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5288__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var dp = temp__5288__auto__;
<<<<<<< HEAD
var G__15772 = dp;
var G__15773 = xs__$1;
var G__15774 = (i__$2 + (1));
p__$1 = G__15772;
G__15765__$1 = G__15773;
i__$1 = G__15774;
=======
var G__15232 = dp;
var G__15233 = xs__$1;
var G__15234 = (i__$2 + (1));
p__$1 = G__15232;
G__15225__$1 = G__15233;
i__$1 = G__15234;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat)){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(re),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__8246__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(p__$2),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15775 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15235 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775 = (function (re,gfn,meta15776){
this.re = re;
this.gfn = gfn;
this.meta15776 = meta15776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15777,meta15776__$1){
var self__ = this;
var _15777__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15775(self__.re,self__.gfn,meta15776__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15777){
var self__ = this;
var _15777__$1 = this;
return self__.meta15776;
});

cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235 = (function (re,gfn,meta15236){
this.re = re;
this.gfn = gfn;
this.meta15236 = meta15236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15237,meta15236__$1){
var self__ = this;
var _15237__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15235(self__.re,self__.gfn,meta15236__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15237){
var self__ = this;
var _15237__$1 = this;
return self__.meta15236;
});

cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(self__.re),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta15776], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15775.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15775.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15775";

cljs.spec.alpha.t_cljs$spec$alpha15775.cljs$lang$ctorPrWriter = (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15775");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha15775 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha15775(re__$1,gfn__$1,meta15776){
return (new cljs.spec.alpha.t_cljs$spec$alpha15775(re__$1,gfn__$1,meta15776));
=======
cljs.spec.alpha.t_cljs$spec$alpha15235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta15236], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15235.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15235.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15235";

cljs.spec.alpha.t_cljs$spec$alpha15235.cljs$lang$ctorPrWriter = (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15235");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha15235 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha15235(re__$1,gfn__$1,meta15236){
return (new cljs.spec.alpha.t_cljs$spec$alpha15235(re__$1,gfn__$1,meta15236));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15775(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15235(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__8234__auto__ = cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cret));
if(and__8234__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__8234__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
<<<<<<< HEAD
return (function (p1__15778_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__15778_SHARP_);
=======
return (function (p1__15238_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__15238_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(g))
], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__5288__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5288__auto__)){
<<<<<<< HEAD
var vec__15779 = temp__5288__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15779,(0),null);
=======
var vec__15239 = temp__5288__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15782 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15242 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta15783){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta15243){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
<<<<<<< HEAD
this.meta15783 = meta15783;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_15784,meta15783__$1){
var self__ = this;
var _15784__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15782(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta15783__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_15784){
var self__ = this;
var _15784__$1 = this;
return self__.meta15783;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
=======
this.meta15243 = meta15243;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_15244,meta15243__$1){
var self__ = this;
var _15244__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15242(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta15243__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_15244){
var self__ = this;
var _15244__$1 = this;
return self__.meta15243;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
<<<<<<< HEAD
}catch (e15785){if((e15785 instanceof Error)){
var t = e15785;
return t;
} else {
throw e15785;
=======
}catch (e15245){if((e15245 instanceof Error)){
var t = e15245;
return t;
} else {
throw e15245;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cret))){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$3,specs){
return (function() { 
<<<<<<< HEAD
var G__15788__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9372__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15786_15789 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15787_15790 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15786_15789,_STAR_print_fn_STAR_15787_15790,sb__9372__auto__,___$3,specs){
return (function (x__9373__auto__){
return sb__9372__auto__.append(x__9373__auto__);
});})(_STAR_print_newline_STAR_15786_15789,_STAR_print_fn_STAR_15787_15790,sb__9372__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15787_15790;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15786_15789;
=======
var G__15248__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9371__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15246_15249 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15247_15250 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15246_15249,_STAR_print_fn_STAR_15247_15250,sb__9371__auto__,___$3,specs){
return (function (x__9372__auto__){
return sb__9371__auto__.append(x__9372__auto__);
});})(_STAR_print_newline_STAR_15246_15249,_STAR_print_fn_STAR_15247_15250,sb__9371__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15247_15250;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15246_15249;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9371__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
<<<<<<< HEAD
var G__15788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15791__i = 0, G__15791__a = new Array(arguments.length -  0);
while (G__15791__i < G__15791__a.length) {G__15791__a[G__15791__i] = arguments[G__15791__i + 0]; ++G__15791__i;}
  args = new cljs.core.IndexedSeq(G__15791__a,0,null);
} 
return G__15788__delegate.call(this,args);};
G__15788.cljs$lang$maxFixedArity = 0;
G__15788.cljs$lang$applyTo = (function (arglist__15792){
var args = cljs.core.seq(arglist__15792);
return G__15788__delegate(args);
});
G__15788.cljs$core$IFn$_invoke$arity$variadic = G__15788__delegate;
return G__15788;
=======
var G__15248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15251__i = 0, G__15251__a = new Array(arguments.length -  0);
while (G__15251__i < G__15251__a.length) {G__15251__a[G__15251__i] = arguments[G__15251__i + 0]; ++G__15251__i;}
  args = new cljs.core.IndexedSeq(G__15251__a,0,null);
} 
return G__15248__delegate.call(this,args);};
G__15248.cljs$lang$maxFixedArity = 0;
G__15248.cljs$lang$applyTo = (function (arglist__15252){
var args = cljs.core.seq(arglist__15252);
return G__15248__delegate(args);
});
G__15248.cljs$core$IFn$_invoke$arity$variadic = G__15248__delegate;
return G__15248;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9200__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__9200__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__9200__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})()], 0))));
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15782.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta15783], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15782.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15782.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15782";

cljs.spec.alpha.t_cljs$spec$alpha15782.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15782");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15782 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha15782(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15783){
return (new cljs.spec.alpha.t_cljs$spec$alpha15782(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15783));
=======
cljs.spec.alpha.t_cljs$spec$alpha15242.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta15243], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15242.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15242.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15242";

cljs.spec.alpha.t_cljs$spec$alpha15242.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15242");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15242 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha15242(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15243){
return (new cljs.spec.alpha.t_cljs$spec$alpha15242(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15243));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(specs))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15782(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15793_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__15793_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__15793_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15794_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__15794_SHARP_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__15793_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__15793_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__15793_SHARP_));
}),null,true,(function (p1__15794_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15795){
var vec__15796 = p__15795;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15796,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__15794_SHARP_);
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15242(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15253_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__15253_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__15253_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15254_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__15254_SHARP_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__15253_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__15253_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__15253_SHARP_));
}),null,true,(function (p1__15254_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15255){
var vec__15256 = p__15255;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15256,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__15254_SHARP_);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15799 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15259 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799 = (function (spec,meta15800){
this.spec = spec;
this.meta15800 = meta15800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_15801,meta15800__$1){
var self__ = this;
var _15801__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15799(self__.spec,meta15800__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_15801){
var self__ = this;
var _15801__$1 = this;
return self__.meta15800;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15259 = (function (spec,meta15260){
this.spec = spec;
this.meta15260 = meta15260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_15261,meta15260__$1){
var self__ = this;
var _15261__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15259(self__.spec,meta15260__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_15261){
var self__ = this;
var _15261__$1 = this;
return self__.meta15260;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return x;
}
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__15802 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__15802) : cljs.spec.alpha.nonconforming.call(null,G__15802));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15799.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__15262 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__15262) : cljs.spec.alpha.nonconforming.call(null,G__15262));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15259.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nonconforming),(function (){var x__9200__auto__ = cljs.spec.alpha.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})())));
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15799.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta15800], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15799.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15799.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15799";

cljs.spec.alpha.t_cljs$spec$alpha15799.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15799");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15799 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha15799(spec__$2,meta15800){
return (new cljs.spec.alpha.t_cljs$spec$alpha15799(spec__$2,meta15800));
=======
cljs.spec.alpha.t_cljs$spec$alpha15259.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta15260], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15259.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15259.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15259";

cljs.spec.alpha.t_cljs$spec$alpha15259.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15259");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15259 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha15259(spec__$2,meta15260){
return (new cljs.spec.alpha.t_cljs$spec$alpha15259(spec__$2,meta15260));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(spec__$1))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15799(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15259(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15803 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15263 !== 'undefined'){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803 = (function (form,pred,gfn,spec,meta15804){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263 = (function (form,pred,gfn,spec,meta15264){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
<<<<<<< HEAD
this.meta15804 = meta15804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_15805,meta15804__$1){
var self__ = this;
var _15805__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15803(self__.form,self__.pred,self__.gfn,self__.spec,meta15804__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_15805){
var self__ = this;
var _15805__$1 = this;
return self__.meta15804;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
=======
this.meta15264 = meta15264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_15265,meta15264__$1){
var self__ = this;
var _15265__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15263(self__.form,self__.pred,self__.gfn,self__.spec,meta15264__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_15265){
var self__ = this;
var _15265__$1 = this;
return self__.meta15264;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(self__.spec,x);
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__8246__auto__ = cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable),(function (){var x__9200__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto__);
})())));
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15803.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta15804], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15803.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15803.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15803";

cljs.spec.alpha.t_cljs$spec$alpha15803.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8918__auto__,writer__8919__auto__,opt__8920__auto__){
return cljs.core._write(writer__8919__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15803");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15803 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha15803(form__$1,pred__$1,gfn__$1,spec__$1,meta15804){
return (new cljs.spec.alpha.t_cljs$spec$alpha15803(form__$1,pred__$1,gfn__$1,spec__$1,meta15804));
=======
cljs.spec.alpha.t_cljs$spec$alpha15263.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta15264], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15263.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15263.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15263";

cljs.spec.alpha.t_cljs$spec$alpha15263.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8917__auto__,writer__8918__auto__,opt__8919__auto__){
return cljs.core._write(writer__8918__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15263");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15263 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha15263(form__$1,pred__$1,gfn__$1,spec__$1,meta15264){
return (new cljs.spec.alpha.t_cljs$spec$alpha15263(form__$1,pred__$1,gfn__$1,spec__$1,meta15264));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});})(spec))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15803(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15263(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
<<<<<<< HEAD
var G__15808 = arguments.length;
switch (G__15808) {
=======
var G__15268 = arguments.length;
switch (G__15268) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
<<<<<<< HEAD
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15806_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15806_SHARP_,cljs.spec.alpha.conform(spec,p1__15806_SHARP_)],null));
=======
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15266_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15266_SHARP_,cljs.spec.alpha.conform(spec,p1__15266_SHARP_)],null));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__8234__auto__ = cljs.core.inst_QMARK_(inst);
if(and__8234__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__8234__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__8234__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8234__auto__)){
return val.lessThan(end);
} else {
return and__8234__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__8234__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8234__auto__)){
return val.lessThan(end);
} else {
return and__8234__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed)], 0));
<<<<<<< HEAD
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9372__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15810_15812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15811_15813 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15810_15812,_STAR_print_fn_STAR_15811_15813,sb__9372__auto__,ed){
return (function (x__9373__auto__){
return sb__9372__auto__.append(x__9373__auto__);
});})(_STAR_print_newline_STAR_15810_15812,_STAR_print_fn_STAR_15811_15813,sb__9372__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15811_15813;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15810_15812;
=======
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9371__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15270_15272 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15271_15273 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15270_15272,_STAR_print_fn_STAR_15271_15273,sb__9371__auto__,ed){
return (function (x__9372__auto__){
return sb__9371__auto__.append(x__9372__auto__);
});})(_STAR_print_newline_STAR_15270_15272,_STAR_print_fn_STAR_15271_15273,sb__9371__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15271_15273;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15270_15272;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9371__auto__)].join('');
})())].join('')));
}
});
