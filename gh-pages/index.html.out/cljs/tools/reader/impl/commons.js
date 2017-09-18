// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.impl.commons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.tools.reader.impl.commons.number_literal_QMARK_ = (function cljs$tools$reader$impl$commons$number_literal_QMARK_(reader,initch){
return (cljs.tools.reader.impl.utils.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.tools.reader.impl.utils.numeric_QMARK_(reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null))));
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.tools.reader.impl.commons.read_past = (function cljs$tools$reader$impl$commons$read_past(pred,rdr){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(ch) : pred.call(null,ch))){
<<<<<<< HEAD
var G__18742 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__18742;
=======
var G__18142 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__18142;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return ch;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.tools.reader.impl.commons.skip_line = (function cljs$tools$reader$impl$commons$skip_line(reader){
while(true){
if(cljs.tools.reader.impl.utils.newline_QMARK_(reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null))){
} else {
continue;
}
break;
}

return reader;
});
cljs.tools.reader.impl.commons.int_pattern = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/;
cljs.tools.reader.impl.commons.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
cljs.tools.reader.impl.commons.float_pattern = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
cljs.tools.reader.impl.commons.match_int = (function cljs$tools$reader$impl$commons$match_int(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.int_pattern,s));
if(!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((2)) : m.call(null,(2))) == null))){
return (0);
} else {
var negate_QMARK_ = ("-" === (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1))));
<<<<<<< HEAD
var a = ((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))),(10)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))),(16)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))),(8)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))),(function (){var G__18743 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((6)) : m.call(null,(6)));
return parseInt(G__18743);
=======
var a = ((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))),(10)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))),(16)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))),(8)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))),(function (){var G__18143 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((6)) : m.call(null,(6)));
return parseInt(G__18143);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)
))));
var n = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0)));
if((n == null)){
return null;
} else {
<<<<<<< HEAD
var bn = (function (){var G__18744 = n;
var G__18745 = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)));
return parseInt(G__18744,G__18745);
=======
var bn = (function (){var G__18144 = n;
var G__18145 = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)));
return parseInt(G__18144,G__18145);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
var bn__$1 = ((negate_QMARK_)?((-1) * bn):bn);
if(cljs.core.truth_(isNaN(bn__$1))){
return null;
} else {
return bn__$1;
}
}
}
});
cljs.tools.reader.impl.commons.match_ratio = (function cljs$tools$reader$impl$commons$match_ratio(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.ratio_pattern,s));
var numerator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)));
var denominator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((2)) : m.call(null,(2)));
var numerator__$1 = (cljs.core.truth_(cljs.core.re_find(/^\+/,numerator))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(numerator,(1)):numerator);
return (parseInt(numerator__$1) / parseInt(denominator));
});
cljs.tools.reader.impl.commons.match_float = (function cljs$tools$reader$impl$commons$match_float(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.float_pattern,s));
if(!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))) == null))){
<<<<<<< HEAD
var G__18746 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)));
return parseFloat(G__18746);
=======
var G__18146 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)));
return parseFloat(G__18146);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
} else {
return parseFloat(s);
}
});
cljs.tools.reader.impl.commons.matches_QMARK_ = (function cljs$tools$reader$impl$commons$matches_QMARK_(pattern,s){
<<<<<<< HEAD
var vec__18747 = cljs.core.re_find(pattern,s);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18747,(0),null);
=======
var vec__18147 = cljs.core.re_find(pattern,s);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(0),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (match === s);
});
cljs.tools.reader.impl.commons.match_number = (function cljs$tools$reader$impl$commons$match_number(s){
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.int_pattern,s)){
return cljs.tools.reader.impl.commons.match_int(s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.float_pattern,s)){
return cljs.tools.reader.impl.commons.match_float(s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.ratio_pattern,s)){
return cljs.tools.reader.impl.commons.match_ratio(s);
} else {
return null;
}
}
}
});
/**
 * Parses a string into a vector of the namespace and symbol
 */
cljs.tools.reader.impl.commons.parse_symbol = (function cljs$tools$reader$impl$commons$parse_symbol(token){
if((("" === token)) || (/:$/.test(token) === true) || (/^::/.test(token) === true)){
return null;
} else {
var ns_idx = token.indexOf("/");
var ns = (((ns_idx > (0)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),ns_idx):null);
if(!((ns == null))){
var ns_idx__$1 = (ns_idx + (1));
if((ns_idx__$1 === cljs.core.count(token))){
return null;
} else {
var sym = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,ns_idx__$1);
if((!(cljs.tools.reader.impl.utils.numeric_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym,(0))))) && (!(("" === sym))) && (/:$/.test(ns) === false) && (((sym === "/")) || (((-1) === sym.indexOf("/"))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,sym], null);
} else {
return null;
}
}
} else {
if(((token === "/")) || (((-1) === token.indexOf("/")))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,token], null);
} else {
return null;
}
}
}
});
cljs.tools.reader.impl.commons.read_comment = (function cljs$tools$reader$impl$commons$read_comment(var_args){
<<<<<<< HEAD
var args__9531__auto__ = [];
var len__9524__auto___18752 = arguments.length;
var i__9525__auto___18753 = (0);
while(true){
if((i__9525__auto___18753 < len__9524__auto___18752)){
args__9531__auto__.push((arguments[i__9525__auto___18753]));

var G__18754 = (i__9525__auto___18753 + (1));
i__9525__auto___18753 = G__18754;
=======
var args__9530__auto__ = [];
var len__9523__auto___18152 = arguments.length;
var i__9524__auto___18153 = (0);
while(true){
if((i__9524__auto___18153 < len__9523__auto___18152)){
args__9530__auto__.push((arguments[i__9524__auto___18153]));

var G__18154 = (i__9524__auto___18153 + (1));
i__9524__auto___18153 = G__18154;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
}
break;
}

var argseq__9531__auto__ = ((((1) < args__9530__auto__.length))?(new cljs.core.IndexedSeq(args__9530__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9531__auto__);
});

cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,_){
return cljs.tools.reader.impl.commons.skip_line(rdr);
});

cljs.tools.reader.impl.commons.read_comment.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
cljs.tools.reader.impl.commons.read_comment.cljs$lang$applyTo = (function (seq18750){
var G__18751 = cljs.core.first(seq18750);
var seq18750__$1 = cljs.core.next(seq18750);
return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic(G__18751,seq18750__$1);
=======
cljs.tools.reader.impl.commons.read_comment.cljs$lang$applyTo = (function (seq18150){
var G__18151 = cljs.core.first(seq18150);
var seq18150__$1 = cljs.core.next(seq18150);
return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic(G__18151,seq18150__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
});

cljs.tools.reader.impl.commons.throwing_reader = (function cljs$tools$reader$impl$commons$throwing_reader(msg){
return (function() { 
<<<<<<< HEAD
var G__18755__delegate = function (rdr,_){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
};
var G__18755 = function (rdr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__18756__i = 0, G__18756__a = new Array(arguments.length -  1);
while (G__18756__i < G__18756__a.length) {G__18756__a[G__18756__i] = arguments[G__18756__i + 1]; ++G__18756__i;}
  _ = new cljs.core.IndexedSeq(G__18756__a,0,null);
} 
return G__18755__delegate.call(this,rdr,_);};
G__18755.cljs$lang$maxFixedArity = 1;
G__18755.cljs$lang$applyTo = (function (arglist__18757){
var rdr = cljs.core.first(arglist__18757);
var _ = cljs.core.rest(arglist__18757);
return G__18755__delegate(rdr,_);
});
G__18755.cljs$core$IFn$_invoke$arity$variadic = G__18755__delegate;
return G__18755;
=======
var G__18155__delegate = function (rdr,_){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
};
var G__18155 = function (rdr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__18156__i = 0, G__18156__a = new Array(arguments.length -  1);
while (G__18156__i < G__18156__a.length) {G__18156__a[G__18156__i] = arguments[G__18156__i + 1]; ++G__18156__i;}
  _ = new cljs.core.IndexedSeq(G__18156__a,0,null);
} 
return G__18155__delegate.call(this,rdr,_);};
G__18155.cljs$lang$maxFixedArity = 1;
G__18155.cljs$lang$applyTo = (function (arglist__18157){
var rdr = cljs.core.first(arglist__18157);
var _ = cljs.core.rest(arglist__18157);
return G__18155__delegate(rdr,_);
});
G__18155.cljs$core$IFn$_invoke$arity$variadic = G__18155__delegate;
return G__18155;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})()
;
});
