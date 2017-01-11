// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6191_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6191_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4425__auto__)){
var changed__$1 = temp__4425__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6196 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6197 = null;
var count__6198 = (0);
var i__6199 = (0);
while(true){
if((i__6199 < count__6198)){
var s = cljs.core._nth.call(null,chunk__6197,i__6199);
var temp__4425__auto___6200 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6200)){
var sheet_6201 = temp__4425__auto___6200;
var temp__4425__auto___6202__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_6201.href,changed);
if(cljs.core.truth_(temp__4425__auto___6202__$1)){
var href_uri_6203 = temp__4425__auto___6202__$1;
sheet_6201.ownerNode.href = href_uri_6203.makeUnique().toString();
} else {
}
} else {
}

var G__6204 = seq__6196;
var G__6205 = chunk__6197;
var G__6206 = count__6198;
var G__6207 = (i__6199 + (1));
seq__6196 = G__6204;
chunk__6197 = G__6205;
count__6198 = G__6206;
i__6199 = G__6207;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6196);
if(temp__4425__auto__){
var seq__6196__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6196__$1)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,seq__6196__$1);
var G__6208 = cljs.core.chunk_rest.call(null,seq__6196__$1);
var G__6209 = c__5756__auto__;
var G__6210 = cljs.core.count.call(null,c__5756__auto__);
var G__6211 = (0);
seq__6196 = G__6208;
chunk__6197 = G__6209;
count__6198 = G__6210;
i__6199 = G__6211;
continue;
} else {
var s = cljs.core.first.call(null,seq__6196__$1);
var temp__4425__auto___6212__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6212__$1)){
var sheet_6213 = temp__4425__auto___6212__$1;
var temp__4425__auto___6214__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_6213.href,changed);
if(cljs.core.truth_(temp__4425__auto___6214__$2)){
var href_uri_6215 = temp__4425__auto___6214__$2;
sheet_6213.ownerNode.href = href_uri_6215.makeUnique().toString();
} else {
}
} else {
}

var G__6216 = cljs.core.next.call(null,seq__6196__$1);
var G__6217 = null;
var G__6218 = (0);
var G__6219 = (0);
seq__6196 = G__6216;
chunk__6197 = G__6217;
count__6198 = G__6218;
i__6199 = G__6219;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6224 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6225 = null;
var count__6226 = (0);
var i__6227 = (0);
while(true){
if((i__6227 < count__6226)){
var s = cljs.core._nth.call(null,chunk__6225,i__6227);
var temp__4425__auto___6228 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6228)){
var image_6229 = temp__4425__auto___6228;
var temp__4425__auto___6230__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_6229.src,changed);
if(cljs.core.truth_(temp__4425__auto___6230__$1)){
var href_uri_6231 = temp__4425__auto___6230__$1;
image_6229.src = href_uri_6231.makeUnique().toString();
} else {
}
} else {
}

var G__6232 = seq__6224;
var G__6233 = chunk__6225;
var G__6234 = count__6226;
var G__6235 = (i__6227 + (1));
seq__6224 = G__6232;
chunk__6225 = G__6233;
count__6226 = G__6234;
i__6227 = G__6235;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6224);
if(temp__4425__auto__){
var seq__6224__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6224__$1)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,seq__6224__$1);
var G__6236 = cljs.core.chunk_rest.call(null,seq__6224__$1);
var G__6237 = c__5756__auto__;
var G__6238 = cljs.core.count.call(null,c__5756__auto__);
var G__6239 = (0);
seq__6224 = G__6236;
chunk__6225 = G__6237;
count__6226 = G__6238;
i__6227 = G__6239;
continue;
} else {
var s = cljs.core.first.call(null,seq__6224__$1);
var temp__4425__auto___6240__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6240__$1)){
var image_6241 = temp__4425__auto___6240__$1;
var temp__4425__auto___6242__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_6241.src,changed);
if(cljs.core.truth_(temp__4425__auto___6242__$2)){
var href_uri_6243 = temp__4425__auto___6242__$2;
image_6241.src = href_uri_6243.makeUnique().toString();
} else {
}
} else {
}

var G__6244 = cljs.core.next.call(null,seq__6224__$1);
var G__6245 = null;
var G__6246 = (0);
var G__6247 = (0);
seq__6224 = G__6244;
chunk__6225 = G__6245;
count__6226 = G__6246;
i__6227 = G__6247;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6250){
var map__6253 = p__6250;
var map__6253__$1 = ((((!((map__6253 == null)))?((((map__6253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6253):map__6253);
var on_jsload = cljs.core.get.call(null,map__6253__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6253,map__6253__$1,on_jsload){
return (function (p1__6248_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6248_SHARP_,".js");
});})(map__6253,map__6253__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6253,map__6253__$1,on_jsload){
return (function (p1__6249_SHARP_){
return goog.Uri.parse(p1__6249_SHARP_).makeUnique();
});})(js_files,map__6253,map__6253__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6253,map__6253__$1,on_jsload){
return (function() { 
var G__6255__delegate = function (_){
return on_jsload.call(null);
};
var G__6255 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6256__i = 0, G__6256__a = new Array(arguments.length -  0);
while (G__6256__i < G__6256__a.length) {G__6256__a[G__6256__i] = arguments[G__6256__i + 0]; ++G__6256__i;}
  _ = new cljs.core.IndexedSeq(G__6256__a,0);
} 
return G__6255__delegate.call(this,_);};
G__6255.cljs$lang$maxFixedArity = 0;
G__6255.cljs$lang$applyTo = (function (arglist__6257){
var _ = cljs.core.seq(arglist__6257);
return G__6255__delegate(_);
});
G__6255.cljs$core$IFn$_invoke$arity$variadic = G__6255__delegate;
return G__6255;
})()
;})(js_files,map__6253,map__6253__$1,on_jsload))
,((function (js_files,map__6253,map__6253__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6253,map__6253__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6262_6266 = cljs.core.seq.call(null,things_to_log);
var chunk__6263_6267 = null;
var count__6264_6268 = (0);
var i__6265_6269 = (0);
while(true){
if((i__6265_6269 < count__6264_6268)){
var t_6270 = cljs.core._nth.call(null,chunk__6263_6267,i__6265_6269);
console.log(t_6270);

var G__6271 = seq__6262_6266;
var G__6272 = chunk__6263_6267;
var G__6273 = count__6264_6268;
var G__6274 = (i__6265_6269 + (1));
seq__6262_6266 = G__6271;
chunk__6263_6267 = G__6272;
count__6264_6268 = G__6273;
i__6265_6269 = G__6274;
continue;
} else {
var temp__4425__auto___6275 = cljs.core.seq.call(null,seq__6262_6266);
if(temp__4425__auto___6275){
var seq__6262_6276__$1 = temp__4425__auto___6275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6262_6276__$1)){
var c__5756__auto___6277 = cljs.core.chunk_first.call(null,seq__6262_6276__$1);
var G__6278 = cljs.core.chunk_rest.call(null,seq__6262_6276__$1);
var G__6279 = c__5756__auto___6277;
var G__6280 = cljs.core.count.call(null,c__5756__auto___6277);
var G__6281 = (0);
seq__6262_6266 = G__6278;
chunk__6263_6267 = G__6279;
count__6264_6268 = G__6280;
i__6265_6269 = G__6281;
continue;
} else {
var t_6282 = cljs.core.first.call(null,seq__6262_6276__$1);
console.log(t_6282);

var G__6283 = cljs.core.next.call(null,seq__6262_6276__$1);
var G__6284 = null;
var G__6285 = (0);
var G__6286 = (0);
seq__6262_6266 = G__6283;
chunk__6263_6267 = G__6284;
count__6264_6268 = G__6285;
i__6265_6269 = G__6286;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__6287_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__6287_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__6289 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__6289);

adzerk.boot_reload.reload.reload_css.call(null,G__6289);

adzerk.boot_reload.reload.reload_img.call(null,G__6289);

return G__6289;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map