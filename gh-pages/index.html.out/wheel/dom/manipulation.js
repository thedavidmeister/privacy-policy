// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.manipulation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
wheel.dom.manipulation.document_append_BANG_ = (function wheel$dom$manipulation$document_append_BANG_(el){
if(cljs.core.truth_(document.body)){
} else {
document.body = document.createElement("body");
}

return document.body.appendChild(el);
});
wheel.dom.manipulation.document_remove_BANG_ = (function wheel$dom$manipulation$document_remove_BANG_(el){
if(cljs.core.truth_(document.body)){
return document.body.removeChild(el);
} else {
return null;
}
});
