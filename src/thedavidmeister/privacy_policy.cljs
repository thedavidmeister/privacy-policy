(ns thedavidmeister.privacy-policy)

(defn policy
 [& {:keys [entity-name]}]
 [
  (h/h1 (j/cell= (str entity-name "'s Privacy Policy")))])
