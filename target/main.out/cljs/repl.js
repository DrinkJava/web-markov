// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6952_6966 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6953_6967 = null;
var count__6954_6968 = (0);
var i__6955_6969 = (0);
while(true){
if((i__6955_6969 < count__6954_6968)){
var f_6970 = cljs.core._nth.call(null,chunk__6953_6967,i__6955_6969);
cljs.core.println.call(null,"  ",f_6970);

var G__6971 = seq__6952_6966;
var G__6972 = chunk__6953_6967;
var G__6973 = count__6954_6968;
var G__6974 = (i__6955_6969 + (1));
seq__6952_6966 = G__6971;
chunk__6953_6967 = G__6972;
count__6954_6968 = G__6973;
i__6955_6969 = G__6974;
continue;
} else {
var temp__4425__auto___6975 = cljs.core.seq.call(null,seq__6952_6966);
if(temp__4425__auto___6975){
var seq__6952_6976__$1 = temp__4425__auto___6975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6952_6976__$1)){
var c__5756__auto___6977 = cljs.core.chunk_first.call(null,seq__6952_6976__$1);
var G__6978 = cljs.core.chunk_rest.call(null,seq__6952_6976__$1);
var G__6979 = c__5756__auto___6977;
var G__6980 = cljs.core.count.call(null,c__5756__auto___6977);
var G__6981 = (0);
seq__6952_6966 = G__6978;
chunk__6953_6967 = G__6979;
count__6954_6968 = G__6980;
i__6955_6969 = G__6981;
continue;
} else {
var f_6982 = cljs.core.first.call(null,seq__6952_6976__$1);
cljs.core.println.call(null,"  ",f_6982);

var G__6983 = cljs.core.next.call(null,seq__6952_6976__$1);
var G__6984 = null;
var G__6985 = (0);
var G__6986 = (0);
seq__6952_6966 = G__6983;
chunk__6953_6967 = G__6984;
count__6954_6968 = G__6985;
i__6955_6969 = G__6986;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6987 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4953__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4953__auto__)){
return or__4953__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6987);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6987)))?cljs.core.second.call(null,arglists_6987):arglists_6987));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6957 = null;
var count__6958 = (0);
var i__6959 = (0);
while(true){
if((i__6959 < count__6958)){
var vec__6960 = cljs.core._nth.call(null,chunk__6957,i__6959);
var name = cljs.core.nth.call(null,vec__6960,(0),null);
var map__6961 = cljs.core.nth.call(null,vec__6960,(1),null);
var map__6961__$1 = ((((!((map__6961 == null)))?((((map__6961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6961):map__6961);
var doc = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6988 = seq__6956;
var G__6989 = chunk__6957;
var G__6990 = count__6958;
var G__6991 = (i__6959 + (1));
seq__6956 = G__6988;
chunk__6957 = G__6989;
count__6958 = G__6990;
i__6959 = G__6991;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6956);
if(temp__4425__auto__){
var seq__6956__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6956__$1)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,seq__6956__$1);
var G__6992 = cljs.core.chunk_rest.call(null,seq__6956__$1);
var G__6993 = c__5756__auto__;
var G__6994 = cljs.core.count.call(null,c__5756__auto__);
var G__6995 = (0);
seq__6956 = G__6992;
chunk__6957 = G__6993;
count__6958 = G__6994;
i__6959 = G__6995;
continue;
} else {
var vec__6963 = cljs.core.first.call(null,seq__6956__$1);
var name = cljs.core.nth.call(null,vec__6963,(0),null);
var map__6964 = cljs.core.nth.call(null,vec__6963,(1),null);
var map__6964__$1 = ((((!((map__6964 == null)))?((((map__6964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6964):map__6964);
var doc = cljs.core.get.call(null,map__6964__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6964__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6996 = cljs.core.next.call(null,seq__6956__$1);
var G__6997 = null;
var G__6998 = (0);
var G__6999 = (0);
seq__6956 = G__6996;
chunk__6957 = G__6997;
count__6958 = G__6998;
i__6959 = G__6999;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map