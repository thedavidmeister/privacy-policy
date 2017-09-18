(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  thedavidmeister.privacy-policy
  taoensso.timbre))

(defn placeholder
 [k]
 #(h/span
   :css {:color "red"}
   "<" (name k) ">"))

(h/html
 (h/body
  (let [ks [:entity-name
            :entity-description

            :contact-details
            :unsubscribe-email-address

            :credit-enquiry-acknowledgement-turnaround
            :credit-enquiry-turnaround
            :correction-acknowledgement-turnaround
            :correction-turnaround
            :complaint-acknowledgement-turnaround
            :complaint-turnaround]]
   (thedavidmeister.privacy-policy/policy
    (zipmap
     ks
     (map
      placeholder
      ks))))))
