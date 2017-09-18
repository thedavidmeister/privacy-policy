(ns thedavidmeister.privacy-policy
 (:require
  [hoplon.core :as h]))

(defn policy
 [& {:keys [entity-name]}]
 [
  (h/h1 (j/cell= (str entity-name "'s Privacy Policy")))])
