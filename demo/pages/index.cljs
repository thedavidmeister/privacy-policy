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
            :credit-enquiry-acknowledgement-turnaround
            :credit-enquiry-turnaround
            :privacy-email-address
            :correction-acknowledgement-turnaround
            :correction-turnaround]]
   (thedavidmeister.privacy-policy/policy
    (zipmap
     ks
     (map
      placeholder
      ks))))))
