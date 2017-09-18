(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  thedavidmeister.privacy-policy
  taoensso.timbre))

(defn placeholder
 [k]
 (h/span
  :css {:color "red"}
  "<" (name k) ">"))

(h/html
 (h/body
  (let [ks [:entity-name :entity-description]]
   (thedavidmeister.privacy-policy/policy
    (taoensso.timbre/spy
     (zipmap
      ks
      (map
       placeholder
       ks)))))))