(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"html" "css"}

 :dependencies '[[org.clojure/clojure "1.7.0"]         ;; add CLJ
                 [org.clojure/clojurescript "1.7.170"] ;; add CLJS
                 [adzerk/boot-cljs "1.7.228-2"]
                 [compojure "1.4.0"]
                 [pandeiro/boot-http "0.7.0"]
                 [adzerk/boot-reload "0.4.9"]
                 [adzerk/boot-cljs-repl "0.3.0"]
                 [org.clojars.magomimmo/shoreleave-remote-ring "0.3.1"]
                 [org.clojars.magomimmo/shoreleave-remote "0.3.1"]
                 [hiccups "0.3.0"]
                 [org.clojars.magomimmo/valip "0.4.0-SNAPSHOT"]
                 [javax.servlet/servlet-api "2.5"]
                 [com.cemerick/piggieback "0.2.1"]     ;; needed by bREPL
                 [weasel "0.7.0"]                      ;; needed by bREPL
                 [org.clojars.magomimmo/domina "2.0.0-SNAPSHOT"]
                 [org.clojure/tools.nrepl "0.2.12"]])    ;; needed by bREPL])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])
(deftask dev
  "Launch IFDE"
  []
  (comp
   (serve :dir "target")
   (speak)
   (watch)
   (reload)
   (cljs-repl)
   (cljs)
   (target :dir #{"target"})))

;;  LocalWords:  src cljc
