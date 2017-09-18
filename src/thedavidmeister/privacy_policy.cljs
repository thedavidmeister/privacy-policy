(ns thedavidmeister.privacy-policy
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

(defn policy
 [& {:keys [entity-name
            entity-description]}]
 {:pre [entity-name
        entity-description]}
 [
  (h/h1 entity-name "'s Privacy Policy")

  (h/h2 "What is our commitment to the protection of your personal information?")
  (h/p entity-name " is " entity-description)
  (h/p "By accessing our web application, engaging our services, or providing any personal information to us, you agree to be bound by this privacy policy and consent to our use and disclosure of your personal information as explained within this policy.")])
