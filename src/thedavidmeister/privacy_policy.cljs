(ns thedavidmeister.privacy-policy
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

(h/defelem policy
 [{:keys [entity-name
          entity-description]}]
 [
  (h/h1 (entity-name) "'s Privacy Policy")

  (h/h2 "What is our commitment to the protection of your personal information?")
  (h/p (entity-name) " is " (entity-description))
  (h/p "By accessing our web application, engaging our services, or providing any personal information to us, you agree to be bound by this privacy policy and consent to our use and disclosure of your personal information as explained within this policy.")

  (h/h2 "We are committed to protecting your privacy.")
  (h/p "This Privacy Policy explains how we collect, use, and disclose personal information. It also explains your rights and our processes to request access, updates and corrections to your details.")
  (h/p "It is important to us that you are confident that any personal and sensitive information we hold about you will be treated in a way which ensures protection of your personal information.")])
