(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  thedavidmeister.privacy-policy))

(h/html
 (h/body
  (thedavidmeister.privacy-policy/policy
   :entity-name "<entity-name>")))
