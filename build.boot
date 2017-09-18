(def project 'thedavidmeister/privacy-policy)
(def description "My privacy policy")
(def version "0.1.0-SNAPSHOT")
(def url "https://github.com/thedavidmeister/privacy-policy")

(set-env!
 :source-paths #{"src"}
 :dependencies
 '[[org.clojure/clojure "1.9.0-alpha19"]
   [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]
   [hoplon "7.1.0-SNAPSHOT"]
   [org.clojure/clojurescript "1.9.908"]
   [thedavidmeister/wheel "0.3.0-SNAPSHOT"]

   [adzerk/boot-cljs "2.1.3" :scope "test"]
   [adzerk/bootlaces "0.1.13" :scope "test"]
   [crisptrutski/boot-cljs-test "0.3.4" :scope "test"]
   [com.taoensso/timbre "4.10.0" :scope "test"]
   [tailrecursion/boot-jetty "0.1.3" :scope "test"]
   [adzerk/boot-reload "0.5.2" :scope "test"]])

(task-options!
 pom {:project project
      :version version
      :description description
      :url url
      :scm {:url url}})

(require
 '[adzerk.bootlaces :refer :all]
 '[thedavidmeister.boot-github-pages :refer :all]
 '[hoplon.boot-hoplon :refer [hoplon]]
 '[adzerk.boot-cljs :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[tailrecursion.boot-jetty :refer [serve]])
(bootlaces! version)

(deftask dev
 []
 (set-env! :source-paths #(conj % "demo"))
 (comp
  (watch)
  (notify)
  (hoplon)
  (reload)
  (cljs)
  (serve
   :port 8000)))

(deftask deploy
 []
 (set-env! :source-paths #(conj % "demo"))
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced)
  (target
   :dir #{"gh-pages"})
  (github-pages)
  (build-jar)
  (push-snapshot)))
