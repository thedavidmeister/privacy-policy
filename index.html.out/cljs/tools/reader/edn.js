// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.edn');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');


cljs.tools.reader.edn.macro_terminating_QMARK_ = (function cljs$tools$reader$edn$macro_terminating_QMARK_(ch){
var and__8234__auto__ = !(("#" === ch));
if(and__8234__auto__){
var and__8234__auto____$1 = !(("'" === ch));
if(and__8234__auto____$1){
var and__8234__auto____$2 = !((":" === ch));
if(and__8234__auto____$2){
return (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
} else {
return and__8234__auto____$2;
}
} else {
return and__8234__auto____$1;
}
} else {
return and__8234__auto__;
}
});
cljs.tools.reader.edn.not_constituent_QMARK_ = (function cljs$tools$reader$edn$not_constituent_QMARK_(ch){
return (("@" === ch)) || (("`" === ch)) || (("~" === ch));
});
cljs.tools.reader.edn.read_token = (function cljs$tools$reader$edn$read_token(var_args){
<<<<<<< HEAD
var G__18953 = arguments.length;
switch (G__18953) {
=======
var G__18353 = arguments.length;
switch (G__18353) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 3:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = (function (rdr,kind,initch){
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4(rdr,kind,initch,true);
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,initch,validate_leading_QMARK_){
if(cljs.core.not(initch)){
return cljs.tools.reader.impl.errors.throw_eof_at_start(rdr,kind);
} else {
if(cljs.core.truth_((function (){var and__8234__auto__ = validate_leading_QMARK_;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.tools.reader.edn.not_constituent_QMARK_(initch);
} else {
return and__8234__auto__;
}
})())){
return cljs.tools.reader.impl.errors.throw_bad_char(rdr,kind,initch);
} else {
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread(rdr,initch);

return initch;
})()
;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (cljs.tools.reader.edn.macro_terminating_QMARK_(ch)) || ((ch == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(cljs.tools.reader.edn.not_constituent_QMARK_(ch)){
return cljs.tools.reader.impl.errors.throw_bad_char(rdr,kind,ch);
} else {
<<<<<<< HEAD
var G__18956 = (function (){var G__18954 = sb;
G__18954.append(cljs.tools.reader.reader_types.read_char(rdr));

return G__18954;
})();
var G__18957 = cljs.tools.reader.reader_types.peek_char(rdr);
sb = G__18956;
ch = G__18957;
=======
var G__18356 = (function (){var G__18354 = sb;
G__18354.append(cljs.tools.reader.reader_types.read_char(rdr));

return G__18354;
})();
var G__18357 = cljs.tools.reader.reader_types.peek_char(rdr);
sb = G__18356;
ch = G__18357;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
break;
}

}
}
});

cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = 4;

cljs.tools.reader.edn.read_dispatch = (function cljs$tools$reader$edn$read_dispatch(rdr,_,opts){
var temp__5288__auto__ = cljs.tools.reader.reader_types.read_char(rdr);
if(cljs.core.truth_(temp__5288__auto__)){
var ch = temp__5288__auto__;
var temp__5288__auto____$1 = (cljs.tools.reader.edn.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.dispatch_macros.call(null,ch));
if(cljs.core.truth_(temp__5288__auto____$1)){
var dm = temp__5288__auto____$1;
return (dm.cljs$core$IFn$_invoke$arity$3 ? dm.cljs$core$IFn$_invoke$arity$3(rdr,ch,opts) : dm.call(null,rdr,ch,opts));
} else {
<<<<<<< HEAD
var temp__5288__auto____$2 = (function (){var G__18958 = (function (){var G__18961 = rdr;
cljs.tools.reader.reader_types.unread(G__18961,ch);

return G__18961;
})();
var G__18959 = ch;
var G__18960 = opts;
return (cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3 ? cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3(G__18958,G__18959,G__18960) : cljs.tools.reader.edn.read_tagged.call(null,G__18958,G__18959,G__18960));
=======
var temp__5288__auto____$2 = (function (){var G__18358 = (function (){var G__18361 = rdr;
cljs.tools.reader.reader_types.unread(G__18361,ch);

return G__18361;
})();
var G__18359 = ch;
var G__18360 = opts;
return (cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3 ? cljs.tools.reader.edn.read_tagged.cljs$core$IFn$_invoke$arity$3(G__18358,G__18359,G__18360) : cljs.tools.reader.edn.read_tagged.call(null,G__18358,G__18359,G__18360));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
if(cljs.core.truth_(temp__5288__auto____$2)){
var obj = temp__5288__auto____$2;
return obj;
} else {
return cljs.tools.reader.impl.errors.throw_no_dispatch(rdr,ch);
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_at_dispatch(rdr);
}
});
cljs.tools.reader.edn.read_unmatched_delimiter = (function cljs$tools$reader$edn$read_unmatched_delimiter(rdr,ch,opts){
return cljs.tools.reader.impl.errors.throw_unmatch_delimiter(rdr,ch);
});
cljs.tools.reader.edn.read_unicode_char = (function cljs$tools$reader$edn$read_unicode_char(var_args){
<<<<<<< HEAD
var G__18963 = arguments.length;
switch (G__18963) {
=======
var G__18363 = arguments.length;
switch (G__18363) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 4:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count(token) === l)){
} else {
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal(null,token);
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),base);
if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),token);
} else {
<<<<<<< HEAD
var G__18965 = (i + (1));
var G__18966 = (d + (uc * base));
i = G__18965;
uc = G__18966;
=======
var G__18365 = (i + (1));
var G__18366 = (d + (uc * base));
i = G__18365;
uc = G__18366;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code(initch,base);
while(true){
if((uc === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,initch);
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char(rdr);
if(cljs.core.truth_((function (){var or__8246__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__8246__auto__){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_len(rdr,i,length);
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code(ch,base);
cljs.tools.reader.reader_types.read_char(rdr);

if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,ch);
} else {
<<<<<<< HEAD
var G__18967 = (i + (1));
var G__18968 = (d + (uc * base));
i = G__18967;
uc = G__18968;
=======
var G__18367 = (i + (1));
var G__18368 = (d + (uc * base));
i = G__18367;
uc = G__18368;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.edn.upper_limit = ("\uD7FF" | (0));
cljs.tools.reader.edn.lower_limit = ("\uE000" | (0));
cljs.tools.reader.edn.read_char_STAR_ = (function cljs$tools$reader$edn$read_char_STAR_(rdr,backslash,opts){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
if(!((ch == null))){
var token = (((cljs.tools.reader.edn.macro_terminating_QMARK_(ch)) || (cljs.tools.reader.edn.not_constituent_QMARK_(ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''):cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4(rdr,cljs.core.cst$kw$character,ch,false));
var token_len = cljs.core.count(token);
if(((1) === token_len)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,(0));
} else {
if((token === "newline")){
return "\n";
} else {
if((token === "space")){
return " ";
} else {
if((token === "tab")){
return "\t";
} else {
if((token === "backspace")){
return "\b";
} else {
if((token === "formfeed")){
return "\f";
} else {
if((token === "return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),(4),(16));
var ic = c.charCodeAt();
if(((ic > cljs.tools.reader.edn.upper_limit)) && ((ic < cljs.tools.reader.edn.lower_limit))){
return cljs.tools.reader.impl.errors.throw_invalid_character_literal(rdr,c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.impl.errors.throw_invalid_octal_len(rdr,token);
} else {
var uc = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),len,(8));
if(((uc | (0)) > (255))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return uc;
}
}
} else {
return cljs.tools.reader.impl.errors.throw_unsupported_character(rdr,token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
});
cljs.tools.reader.edn.starting_line_col_info = (function cljs$tools$reader$edn$starting_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number(rdr),(((cljs.tools.reader.reader_types.get_column_number(rdr) | (0)) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.edn.read_delimited = (function cljs$tools$reader$edn$read_delimited(kind,delim,rdr,opts){
<<<<<<< HEAD
var vec__18969 = cljs.tools.reader.edn.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969,(1),null);
=======
var vec__18369 = cljs.tools.reader.edn.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18369,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18369,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var delim__$1 = cljs.tools.reader.impl.utils.char$(delim);
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,start_line,start_column,cljs.core.count(a));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(delim__$1,cljs.tools.reader.impl.utils.char$(ch))){
return cljs.core.persistent_BANG_(a);
} else {
var temp__5288__auto__ = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(temp__5288__auto__)){
var macrofn = temp__5288__auto__;
var mret = (macrofn.cljs$core$IFn$_invoke$arity$3 ? macrofn.cljs$core$IFn$_invoke$arity$3(rdr,ch,opts) : macrofn.call(null,rdr,ch,opts));
<<<<<<< HEAD
var G__18977 = ((!((mret === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret):a);
a = G__18977;
continue;
} else {
var o = (function (){var G__18972 = (function (){var G__18976 = rdr;
cljs.tools.reader.reader_types.unread(G__18976,ch);

return G__18976;
})();
var G__18973 = true;
var G__18974 = null;
var G__18975 = opts;
return (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__18972,G__18973,G__18974,G__18975) : cljs.tools.reader.edn.read.call(null,G__18972,G__18973,G__18974,G__18975));
})();
var G__18978 = ((!((o === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o):a);
a = G__18978;
=======
var G__18377 = ((!((mret === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret):a);
a = G__18377;
continue;
} else {
var o = (function (){var G__18372 = (function (){var G__18376 = rdr;
cljs.tools.reader.reader_types.unread(G__18376,ch);

return G__18376;
})();
var G__18373 = true;
var G__18374 = null;
var G__18375 = opts;
return (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__18372,G__18373,G__18374,G__18375) : cljs.tools.reader.edn.read.call(null,G__18372,G__18373,G__18374,G__18375));
})();
var G__18378 = ((!((o === rdr)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o):a);
a = G__18378;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
}
break;
}
});
cljs.tools.reader.edn.read_list = (function cljs$tools$reader$edn$read_list(rdr,_,opts){
var the_list = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$list,")",rdr,opts);
if(cljs.core.empty_QMARK_(the_list)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,the_list);
}
});
cljs.tools.reader.edn.read_vector = (function cljs$tools$reader$edn$read_vector(rdr,_,opts){
return cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$vector,"]",rdr,opts);
});
cljs.tools.reader.edn.read_map = (function cljs$tools$reader$edn$read_map(rdr,_,opts){
<<<<<<< HEAD
var vec__18979 = cljs.tools.reader.edn.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18979,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18979,(1),null);
=======
var vec__18379 = cljs.tools.reader.edn.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(1),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var the_map = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$map,"}",rdr,opts);
var map_count = cljs.core.count(the_map);
var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),the_map);
var key_set = cljs.core.set(ks);
if(cljs.core.odd_QMARK_(map_count)){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,start_line,start_column,the_map);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(key_set),cljs.core.count(ks))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$map,ks);
}

if((map_count <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array(the_map),true,true);
} else {
return cljs.core.PersistentHashMap.fromArray(cljs.core.to_array(the_map),true);
}
});
cljs.tools.reader.edn.read_number = (function cljs$tools$reader$edn$read_number(rdr,initch,opts){
<<<<<<< HEAD
var sb = (function (){var G__18982 = (new goog.string.StringBuffer());
G__18982.append(initch);

return G__18982;
=======
var sb = (function (){var G__18382 = (new goog.string.StringBuffer());
G__18382.append(initch);

return G__18382;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})();
var ch = cljs.tools.reader.reader_types.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var or__8246__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__8246__auto__){
return or__8246__auto__;
} else {
var or__8246__auto____$1 = (cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.edn.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.edn.macros.call(null,ch));
if(cljs.core.truth_(or__8246__auto____$1)){
return or__8246__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
cljs.tools.reader.reader_types.unread(rdr,ch);

var or__8246__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid_number(rdr,s);
}
} else {
<<<<<<< HEAD
var G__18984 = (function (){var G__18983 = sb;
G__18983.append(ch);

return G__18983;
})();
var G__18985 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__18984;
ch = G__18985;
=======
var G__18384 = (function (){var G__18383 = sb;
G__18383.append(ch);

return G__18383;
})();
var G__18385 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__18384;
ch = G__18385;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
break;
}
});
cljs.tools.reader.edn.escape_char = (function cljs$tools$reader$edn$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
<<<<<<< HEAD
var G__18986 = ch;
switch (G__18986) {
=======
var G__18386 = ch;
switch (G__18386) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char(rdr);
<<<<<<< HEAD
if(((-1) === (function (){var G__18987 = (ch__$1 | (0));
var G__18988 = (16);
return parseInt(G__18987,G__18988);
=======
if(((-1) === (function (){var G__18387 = (ch__$1 | (0));
var G__18388 = (16);
return parseInt(G__18387,G__18388);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})())){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_escape(rdr,ch__$1);
} else {
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_(ch)){
var ch__$1 = cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_escape_char(rdr,ch);
}

}
});
cljs.tools.reader.edn.read_string_STAR_ = (function cljs$tools$reader$edn$read_string_STAR_(rdr,_,opts){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char(rdr);
while(true){
<<<<<<< HEAD
var G__18990 = ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18990)){
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",sb], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__18990)){
var G__18993 = (function (){var G__18991 = sb;
G__18991.append(cljs.tools.reader.edn.escape_char(sb,rdr));

return G__18991;
})();
var G__18994 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__18993;
ch = G__18994;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__18990)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
var G__18995 = (function (){var G__18992 = sb;
G__18992.append(ch);

return G__18992;
})();
var G__18996 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__18995;
ch = G__18996;
=======
var G__18390 = ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18390)){
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",sb], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__18390)){
var G__18393 = (function (){var G__18391 = sb;
G__18391.append(cljs.tools.reader.edn.escape_char(sb,rdr));

return G__18391;
})();
var G__18394 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__18393;
ch = G__18394;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__18390)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
var G__18395 = (function (){var G__18392 = sb;
G__18392.append(ch);

return G__18392;
})();
var G__18396 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__18395;
ch = G__18396;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;

}
}
}
break;
}
});
cljs.tools.reader.edn.read_symbol = (function cljs$tools$reader$edn$read_symbol(rdr,initch){
var temp__5290__auto__ = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(rdr,cljs.core.cst$kw$symbol,initch);
if(cljs.core.truth_(temp__5290__auto__)){
var token = temp__5290__auto__;
<<<<<<< HEAD
var G__18997 = token;
switch (G__18997) {
=======
var G__18397 = token;
switch (G__18397) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return cljs.core.cst$sym$_SLASH_;

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var or__8246__auto__ = (function (){var temp__5290__auto____$1 = cljs.tools.reader.impl.commons.parse_symbol(token);
if(cljs.core.truth_(temp__5290__auto____$1)){
var p = temp__5290__auto____$1;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0))),(p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1))));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid(rdr,cljs.core.cst$kw$symbol,token);
}

}
} else {
return null;
}
});
cljs.tools.reader.edn.read_keyword = (function cljs$tools$reader$edn$read_keyword(reader,initch,opts){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch))){
var token = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(reader,cljs.core.cst$kw$keyword,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol(token);
if(cljs.core.truth_((function (){var and__8234__auto__ = s;
if(cljs.core.truth_(and__8234__auto__)){
return ((-1) === token.indexOf("::"));
} else {
return and__8234__auto__;
}
})())){
var ns = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((0)) : s.call(null,(0)));
var name = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((1)) : s.call(null,(1)));
if((":" === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,(0)))){
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,token);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon(reader);
}
});
cljs.tools.reader.edn.wrapping_reader = (function cljs$tools$reader$edn$wrapping_reader(sym){
return (function (rdr,_,opts){
var x__9200__auto__ = sym;
return cljs.core._conj((function (){var x__9200__auto____$1 = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
return cljs.core._conj(cljs.core.List.EMPTY,x__9200__auto____$1);
})(),x__9200__auto__);
});
});
cljs.tools.reader.edn.read_meta = (function cljs$tools$reader$edn$read_meta(rdr,_,opts){
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata(rdr,m);
}

var o = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(o),m], 0)));
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target(rdr,o);
}
});
cljs.tools.reader.edn.read_set = (function cljs$tools$reader$edn$read_set(rdr,_,opts){
var coll = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$set,"}",rdr,opts);
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$set,coll);
}

return the_set;
});
cljs.tools.reader.edn.read_discard = (function cljs$tools$reader$edn$read_discard(rdr,_,opts){
<<<<<<< HEAD
var G__19000 = rdr;
(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__19000,true,null,true) : cljs.tools.reader.edn.read.call(null,G__19000,true,null,true));

return G__19000;
});
cljs.tools.reader.edn.read_namespaced_map = (function cljs$tools$reader$edn$read_namespaced_map(rdr,_,opts){
var token = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(rdr,cljs.core.cst$kw$namespaced_DASH_map,cljs.tools.reader.reader_types.read_char(rdr));
var temp__5288__auto__ = (function (){var G__19001 = token;
var G__19001__$1 = (((G__19001 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__19001));
if((G__19001__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__19001__$1);
=======
var G__18400 = rdr;
(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(G__18400,true,null,true) : cljs.tools.reader.edn.read.call(null,G__18400,true,null,true));

return G__18400;
});
cljs.tools.reader.edn.read_namespaced_map = (function cljs$tools$reader$edn$read_namespaced_map(rdr,_,opts){
var token = cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3(rdr,cljs.core.cst$kw$namespaced_DASH_map,cljs.tools.reader.reader_types.read_char(rdr));
var temp__5288__auto__ = (function (){var G__18401 = token;
var G__18401__$1 = (((G__18401 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__18401));
if((G__18401__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__18401__$1);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
}
})();
if(cljs.core.truth_(temp__5288__auto__)){
var ns = temp__5288__auto__;
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.edn.read_delimited(cljs.core.cst$kw$namespaced_DASH_map,"}",rdr,opts);
if(cljs.core.odd_QMARK_(cljs.core.count(items))){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,null,null,items);
} else {
}

var keys = cljs.tools.reader.impl.utils.namespace_keys([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),items));
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(items));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.set(keys)),cljs.core.count(keys))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$namespaced_DASH_map,keys);
}

return cljs.core.zipmap(keys,vals);
} else {
return cljs.tools.reader.impl.errors.throw_ns_map_no_map(rdr,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_ns(rdr,token);
}
});
cljs.tools.reader.edn.macros = (function cljs$tools$reader$edn$macros(ch){
<<<<<<< HEAD
var G__19002 = ch;
switch (G__19002) {
=======
var G__18402 = ch;
switch (G__18402) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "\"":
return cljs.tools.reader.edn.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.edn.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "(":
return cljs.tools.reader.edn.read_list;

break;
case ")":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.edn.read_vector;

break;
case "]":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.edn.read_map;

break;
case "}":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.edn.read_char_STAR_;

break;
case "#":
return cljs.tools.reader.edn.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.edn.dispatch_macros = (function cljs$tools$reader$edn$dispatch_macros(ch){
<<<<<<< HEAD
var G__19004 = ch;
switch (G__19004) {
=======
var G__18404 = ch;
switch (G__18404) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "{":
return cljs.tools.reader.edn.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader("Unreadable form");

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.edn.read_discard;

break;
case ":":
return cljs.tools.reader.edn.read_namespaced_map;

break;
default:
return null;

}
});
cljs.tools.reader.edn.read_tagged = (function cljs$tools$reader$edn$read_tagged(rdr,initch,opts){
var tag = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
var object = (cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,opts) : cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.impl.errors.throw_bad_reader_tag(rdr,"Reader tag must be a symbol");
} else {
}

var temp__5288__auto__ = (function (){var or__8246__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$readers.cljs$core$IFn$_invoke$arity$1(opts),tag);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader.default_data_readers.call(null,tag));
}
})();
if(cljs.core.truth_(temp__5288__auto__)){
var f = temp__5288__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(object) : f.call(null,object));
} else {
var temp__5288__auto____$1 = cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5288__auto____$1)){
var d = temp__5288__auto____$1;
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(tag,object) : d.call(null,tag,object));
} else {
return cljs.tools.reader.impl.errors.throw_unknown_reader_tag(rdr,tag);
}
}
});
/**
 * Reads the first object from an IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.tools.reader.edn.read = (function cljs$tools$reader$edn$read(var_args){
<<<<<<< HEAD
var G__19007 = arguments.length;
switch (G__19007) {
=======
var G__18407 = arguments.length;
switch (G__18407) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,reader);
});

<<<<<<< HEAD
cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__19008,reader){
var map__19009 = p__19008;
var map__19009__$1 = ((((!((map__19009 == null)))?((((map__19009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19009):map__19009);
var opts = map__19009__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19009__$1,cljs.core.cst$kw$eof);
=======
cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__18408,reader){
var map__18409 = p__18408;
var map__18409__$1 = ((((!((map__18409 == null)))?((((map__18409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18409):map__18409);
var opts = map__18409__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18409__$1,cljs.core.cst$kw$eof);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
var eof_error_QMARK_ = !(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$eof));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,opts);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
try{while(true){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(cljs.core.truth_(eof_error_QMARK_)){
return cljs.tools.reader.impl.errors.throw_eof_error(reader,null);
} else {
return eof;
}
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.edn.read_number(reader,ch,opts);
} else {
var f = cljs.tools.reader.edn.macros(ch);
if(cljs.core.truth_(f)){
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(reader,ch,opts) : f.call(null,reader,ch,opts));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.edn.read_symbol(reader,ch);
}

}
}
}
break;
}
<<<<<<< HEAD
}catch (e19011){if((e19011 instanceof Error)){
var e = e19011;
=======
}catch (e18411){if((e18411 instanceof Error)){
var e = e18411;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.tools.reader.impl.utils.ex_info_QMARK_(e)){
var d = cljs.core.ex_data(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number(reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number(reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name(reader)], null):null)], 0)),e);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number(reader),cljs.core.cst$kw$column,cljs.tools.reader.reader_types.get_column_number(reader),cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name(reader)], null):null)], 0)),e);
}
} else {
<<<<<<< HEAD
throw e19011;
=======
throw e18411;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433

}
}});

cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per clojure.tools.reader.edn/read
 */
cljs.tools.reader.edn.read_string = (function cljs$tools$reader$edn$read_string(var_args){
<<<<<<< HEAD
var G__19014 = arguments.length;
switch (G__19014) {
=======
var G__18414 = arguments.length;
switch (G__18414) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$eof,null], null),s);
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__8234__auto__ = s;
if(cljs.core.truth_(and__8234__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"");
} else {
return and__8234__auto__;
}
})())){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(opts,cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
});

cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = 2;

