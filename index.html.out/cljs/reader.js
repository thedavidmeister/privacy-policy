// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
<<<<<<< HEAD
var G__19040 = b.append("0");
b = G__19040;
=======
var G__18440 = b.append("0");
b = G__18440;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__8234__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__8234__auto__)){
var or__8246__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__8234__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
<<<<<<< HEAD
var vec__19041 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(10),null);
var v = vec__19041;
=======
var vec__18441 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18441,(10),null);
var v = vec__18441;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__8246__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__8246__auto__)){
return or__8246__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__19044 = months__$1;
var G__19045 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__19044,G__19045) : cljs.reader.days_in_month.call(null,G__19044,G__19045));
=======
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__18444 = months__$1;
var G__18445 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__18444,G__18445) : cljs.reader.days_in_month.call(null,G__18444,G__18445));
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5288__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5288__auto__)){
<<<<<<< HEAD
var vec__19046 = temp__5288__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(7),null);
=======
var vec__18446 = temp__5288__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18446,(7),null);
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
<<<<<<< HEAD
var seq__19049_19071 = cljs.core.seq(form);
var chunk__19050_19072 = null;
var count__19051_19073 = (0);
var i__19052_19074 = (0);
while(true){
if((i__19052_19074 < count__19051_19073)){
var x_19075 = chunk__19050_19072.cljs$core$IIndexed$_nth$arity$2(null,i__19052_19074);
arr.push(x_19075);

var G__19076 = seq__19049_19071;
var G__19077 = chunk__19050_19072;
var G__19078 = count__19051_19073;
var G__19079 = (i__19052_19074 + (1));
seq__19049_19071 = G__19076;
chunk__19050_19072 = G__19077;
count__19051_19073 = G__19078;
i__19052_19074 = G__19079;
continue;
} else {
var temp__5290__auto___19080 = cljs.core.seq(seq__19049_19071);
if(temp__5290__auto___19080){
var seq__19049_19081__$1 = temp__5290__auto___19080;
if(cljs.core.chunked_seq_QMARK_(seq__19049_19081__$1)){
var c__9178__auto___19082 = cljs.core.chunk_first(seq__19049_19081__$1);
var G__19083 = cljs.core.chunk_rest(seq__19049_19081__$1);
var G__19084 = c__9178__auto___19082;
var G__19085 = cljs.core.count(c__9178__auto___19082);
var G__19086 = (0);
seq__19049_19071 = G__19083;
chunk__19050_19072 = G__19084;
count__19051_19073 = G__19085;
i__19052_19074 = G__19086;
continue;
} else {
var x_19087 = cljs.core.first(seq__19049_19081__$1);
arr.push(x_19087);

var G__19088 = cljs.core.next(seq__19049_19081__$1);
var G__19089 = null;
var G__19090 = (0);
var G__19091 = (0);
seq__19049_19071 = G__19088;
chunk__19050_19072 = G__19089;
count__19051_19073 = G__19090;
i__19052_19074 = G__19091;
=======
var seq__18449_18471 = cljs.core.seq(form);
var chunk__18450_18472 = null;
var count__18451_18473 = (0);
var i__18452_18474 = (0);
while(true){
if((i__18452_18474 < count__18451_18473)){
var x_18475 = chunk__18450_18472.cljs$core$IIndexed$_nth$arity$2(null,i__18452_18474);
arr.push(x_18475);

var G__18476 = seq__18449_18471;
var G__18477 = chunk__18450_18472;
var G__18478 = count__18451_18473;
var G__18479 = (i__18452_18474 + (1));
seq__18449_18471 = G__18476;
chunk__18450_18472 = G__18477;
count__18451_18473 = G__18478;
i__18452_18474 = G__18479;
continue;
} else {
var temp__5290__auto___18480 = cljs.core.seq(seq__18449_18471);
if(temp__5290__auto___18480){
var seq__18449_18481__$1 = temp__5290__auto___18480;
if(cljs.core.chunked_seq_QMARK_(seq__18449_18481__$1)){
var c__9177__auto___18482 = cljs.core.chunk_first(seq__18449_18481__$1);
var G__18483 = cljs.core.chunk_rest(seq__18449_18481__$1);
var G__18484 = c__9177__auto___18482;
var G__18485 = cljs.core.count(c__9177__auto___18482);
var G__18486 = (0);
seq__18449_18471 = G__18483;
chunk__18450_18472 = G__18484;
count__18451_18473 = G__18485;
i__18452_18474 = G__18486;
continue;
} else {
var x_18487 = cljs.core.first(seq__18449_18481__$1);
arr.push(x_18487);

var G__18488 = cljs.core.next(seq__18449_18481__$1);
var G__18489 = null;
var G__18490 = (0);
var G__18491 = (0);
seq__18449_18471 = G__18488;
chunk__18450_18472 = G__18489;
count__18451_18473 = G__18490;
i__18452_18474 = G__18491;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = {};
<<<<<<< HEAD
var seq__19055_19092 = cljs.core.seq(form);
var chunk__19056_19093 = null;
var count__19057_19094 = (0);
var i__19058_19095 = (0);
while(true){
if((i__19058_19095 < count__19057_19094)){
var vec__19059_19096 = chunk__19056_19093.cljs$core$IIndexed$_nth$arity$2(null,i__19058_19095);
var k_19097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19059_19096,(0),null);
var v_19098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19059_19096,(1),null);
var G__19062_19099 = obj;
var G__19063_19100 = cljs.core.name(k_19097);
var G__19064_19101 = v_19098;
goog.object.set(G__19062_19099,G__19063_19100,G__19064_19101);

var G__19102 = seq__19055_19092;
var G__19103 = chunk__19056_19093;
var G__19104 = count__19057_19094;
var G__19105 = (i__19058_19095 + (1));
seq__19055_19092 = G__19102;
chunk__19056_19093 = G__19103;
count__19057_19094 = G__19104;
i__19058_19095 = G__19105;
continue;
} else {
var temp__5290__auto___19106 = cljs.core.seq(seq__19055_19092);
if(temp__5290__auto___19106){
var seq__19055_19107__$1 = temp__5290__auto___19106;
if(cljs.core.chunked_seq_QMARK_(seq__19055_19107__$1)){
var c__9178__auto___19108 = cljs.core.chunk_first(seq__19055_19107__$1);
var G__19109 = cljs.core.chunk_rest(seq__19055_19107__$1);
var G__19110 = c__9178__auto___19108;
var G__19111 = cljs.core.count(c__9178__auto___19108);
var G__19112 = (0);
seq__19055_19092 = G__19109;
chunk__19056_19093 = G__19110;
count__19057_19094 = G__19111;
i__19058_19095 = G__19112;
continue;
} else {
var vec__19065_19113 = cljs.core.first(seq__19055_19107__$1);
var k_19114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065_19113,(0),null);
var v_19115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065_19113,(1),null);
var G__19068_19116 = obj;
var G__19069_19117 = cljs.core.name(k_19114);
var G__19070_19118 = v_19115;
goog.object.set(G__19068_19116,G__19069_19117,G__19070_19118);

var G__19119 = cljs.core.next(seq__19055_19107__$1);
var G__19120 = null;
var G__19121 = (0);
var G__19122 = (0);
seq__19055_19092 = G__19119;
chunk__19056_19093 = G__19120;
count__19057_19094 = G__19121;
i__19058_19095 = G__19122;
=======
var seq__18455_18492 = cljs.core.seq(form);
var chunk__18456_18493 = null;
var count__18457_18494 = (0);
var i__18458_18495 = (0);
while(true){
if((i__18458_18495 < count__18457_18494)){
var vec__18459_18496 = chunk__18456_18493.cljs$core$IIndexed$_nth$arity$2(null,i__18458_18495);
var k_18497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459_18496,(0),null);
var v_18498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459_18496,(1),null);
var G__18462_18499 = obj;
var G__18463_18500 = cljs.core.name(k_18497);
var G__18464_18501 = v_18498;
goog.object.set(G__18462_18499,G__18463_18500,G__18464_18501);

var G__18502 = seq__18455_18492;
var G__18503 = chunk__18456_18493;
var G__18504 = count__18457_18494;
var G__18505 = (i__18458_18495 + (1));
seq__18455_18492 = G__18502;
chunk__18456_18493 = G__18503;
count__18457_18494 = G__18504;
i__18458_18495 = G__18505;
continue;
} else {
var temp__5290__auto___18506 = cljs.core.seq(seq__18455_18492);
if(temp__5290__auto___18506){
var seq__18455_18507__$1 = temp__5290__auto___18506;
if(cljs.core.chunked_seq_QMARK_(seq__18455_18507__$1)){
var c__9177__auto___18508 = cljs.core.chunk_first(seq__18455_18507__$1);
var G__18509 = cljs.core.chunk_rest(seq__18455_18507__$1);
var G__18510 = c__9177__auto___18508;
var G__18511 = cljs.core.count(c__9177__auto___18508);
var G__18512 = (0);
seq__18455_18492 = G__18509;
chunk__18456_18493 = G__18510;
count__18457_18494 = G__18511;
i__18458_18495 = G__18512;
continue;
} else {
var vec__18465_18513 = cljs.core.first(seq__18455_18507__$1);
var k_18514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465_18513,(0),null);
var v_18515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465_18513,(1),null);
var G__18468_18516 = obj;
var G__18469_18517 = cljs.core.name(k_18514);
var G__18470_18518 = v_18515;
goog.object.set(G__18468_18516,G__18469_18517,G__18470_18518);

var G__18519 = cljs.core.next(seq__18455_18507__$1);
var G__18520 = null;
var G__18521 = (0);
var G__18522 = (0);
seq__18455_18492 = G__18519;
chunk__18456_18493 = G__18520;
count__18457_18494 = G__18521;
i__18458_18495 = G__18522;
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$inst,cljs.reader.read_date,cljs.core.cst$sym$uuid,cljs.reader.read_uuid,cljs.core.cst$sym$queue,cljs.reader.read_queue,cljs.core.cst$sym$js,cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
<<<<<<< HEAD
var G__19124 = arguments.length;
switch (G__19124) {
=======
var G__18524 = arguments.length;
switch (G__18524) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),reader);
});

<<<<<<< HEAD
cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__19125,reader){
var map__19126 = p__19125;
var map__19126__$1 = ((((!((map__19126 == null)))?((((map__19126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19126):map__19126);
var opts = map__19126__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19126__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,((function (map__19126,map__19126__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__19126,map__19126__$1,opts,eof))
=======
cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__18525,reader){
var map__18526 = p__18525;
var map__18526__$1 = ((((!((map__18526 == null)))?((((map__18526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18526):map__18526);
var opts = map__18526__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18526__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,((function (map__18526,map__18526__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__18526,map__18526__$1,opts,eof))
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
<<<<<<< HEAD
var G__19130 = arguments.length;
switch (G__19130) {
=======
var G__18530 = arguments.length;
switch (G__18530) {
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
