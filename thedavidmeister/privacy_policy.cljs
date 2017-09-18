(ns thedavidmeister.privacy-policy
 (:require
  [hoplon.core :as h]
<<<<<<< HEAD
  [javelin.core :as j]
  wheel.legalese.hoplon
  wheel.link.hoplon
  wheel.phone.hoplon
  [cljs.test :refer-macros [deftest is]]))

(h/defelem policy
 [{:keys [entity-name
          entity-description

          contact-details
          unsubscribe-email-address

          credit-enquiry-acknowledgement-turnaround
          credit-enquiry-turnaround
          correction-acknowledgement-turnaround
          correction-turnaround
          complaint-acknowledgement-turnaround
          complaint-turnaround]}]
 (let [australian-privacy-principles (partial wheel.legalese.hoplon/legislature "Australian Privacy Principles")
       privacy-act (partial wheel.legalese.hoplon/legislature "Privacy Act 1988 (C’th)")
       oaic-link (partial wheel.link.hoplon/external "http://www.oaic.gov.au")
       oaic-phone (partial wheel.phone.hoplon/phone "1300 363 992")]
  [
   (h/h1 (entity-name) "'s Privacy Policy")

   (h/h2 "What is our commitment to the protection of your personal information?")
   (h/p (entity-name) " is " (entity-description))
   (h/p "By accessing our web application, engaging our services, or providing any personal information to us, you agree to be bound by this privacy policy and consent to our use and disclosure of your personal information as explained within this policy.")

   (h/h2 "We are committed to protecting your privacy.")
   (h/p "This Privacy Policy explains how we collect, use, and disclose personal information. It also explains your rights and our processes to request access, updates and corrections to your details.")
   (h/p "It is important to us that you are confident that any personal and sensitive information we hold about you will be treated in a way which ensures protection of your personal information.")
   (h/p "Our commitment in respect of personal information is to abide by the " (australian-privacy-principles) " for the protection of personal information, as set out in the " (privacy-act) " and any other relevant law.")

   (wheel.legalese.hoplon/clause-list
    "We collect, record and may use personal and sensitive information about you;-"
    ["to perform the services you have engaged us to perform;"
     "for the purposes for which we have collected it;";
     "for a purpose disclosed to you;"
     "for a purpose authorised by you;";
     "for a purpose required or authorised by law;"
     "to improve our application and services; or"
     ["as otherwise allowed under the " (privacy-act) "."]])

   (h/h2 "Personal information")
   (h/p "When we refer to personal information we mean information from which your identity is reasonably apparent. This information may include information or an opinion about you.")
   (h/p "The kinds of personal information we may collect about you include your name, date of birth, place of birth, address and other contact information, account details, occupation, and any other information we may need to identify you or provide our services.")
   (h/p "We may collect personal information from you directly, or via your use of our application or services. We will only collect personal information which is reasonably necessary for, or directly related to, our functions and activities.")
   (h/p "The personal information we hold about you may also include credit information or sensitive information about you.")

   (h/h2 "Credit information")
   (h/p "In the course of providing our services to you, we may collect and hold credit information about you.")
   (h/p "Credit information is information which is usually exchanged between credit and finance providers, credit reporting bodies and other entities that are involved in managing credit.")
   (h/p "The type of credit information that we might hold about you may include details of your liabilities in respect of consumer credit, commercial credit, default information, and information about court proceedings.")
   (h/p "If you disclose personal and sensitive information about a third party to us; we will assume you have that person’s express authority to do so.")
   (h/p "If we collect or hold credit information about you, we do so to assist in the management of our relationship with you.")
   (wheel.legalese.hoplon/clause-list
    "You may:-"
    ["access any credit information that we hold about you;"
     "seek the update or correction of this information; or"
     "enquire about how we have used your credit information,"]
    "by contacting us regarding the same.")
   (h/p "We will acknowledge your enquiry within " (credit-enquiry-acknowledgement-turnaround) " and provide you with the outcome of our investigation within " (credit-enquiry-turnaround) " of the date of your enquiry.")

   (h/h2 "Credit Card Information")
   (h/p "We do not receive or store any credit card information. All payments are handled by a secure third party payment gateway.")
   (h/p "We will not request your credit card details in any support request. Please do not provide your credit card information by email or support ticket as this may compromise your security.")

   (h/h3 "Stripe payment gateway")
   (h/p "We use Stripe for payment, analytics, and other business services. Stripe collects identifying information about the devices that connect to its services. Stripe uses this information to operate and improve the services it provides to us, including for fraud detection.")
   (h/p "You can learn more about Stripe and read its privacy policy at " (wheel.link.hoplon/external "https://stripe.com/privacy") ".")

   (h/h2 "Sensitive information")
   (h/p "Sensitive information is any information about a person’s racial or ethnic origin, political opinion, membership of a political association, religious beliefs or affiliations, philosophical beliefs, membership of a professional, or trade association, membership of a trade union, sexual preferences or practices, criminal record or health information.")
   (h/p "We will not ask you to disclose sensitive information about you unless it is reasonably necessary for providing our services to you. However, if you elect to provide unsolicited sensitive information, it may be captured and stored.")

   (h/h2 "Marketing")
   (h/p "If you subscribe to our mailing list, or create an account with our application, we may use your contact details to send you marketing materials. You may opt-out at any time by notice by email to " (unsubscribe-email-address) ", or through the unsubscribe link found in all marketing emails we send.")
   (h/p "We use a third party system to manage our marketing campaigns, and we may disclose your contact details to our service providers for this purpose. Our service providers are not permitted to sell, use or disclose your contact details or contact you for any other purpose unless required by law.")
   (h/p "We may include third party offers in marketing materials we send to you.")
   (h/p "We do not sell, trade or rent your contact details or any other personal information to any third party.")

   (h/h2 "Social Media")
   (h/p "We market our products and services through social media (Facebook, Twitter, etc.). Where you choose to engage with our brand on social media, we may use and republish your comments, likes, tweets, etc. for support and marketing purposes.")

   (h/h2 "Knowledge Articles")
   (h/p "If you have a need for support, or have assisted us to resolve a bug, other users or developers may have experienced the same issue. We may use and republish information related to a support request (including information originally provided for other purposes) in public knowledge articles about the support issue. We will remove your personal information before publishing these articles.")

   (h/h2 "Anonymity and Pseudonymity")
   (h/p "Please note that we collect and use temporary session data (such as cookies), which may include identifiers such as your IP address, for analytics purposes, and to provide the application and related services. You may wish to employ technical measures (e.g. blocking cookies) if you wish to ensure complete anonymity, although these measures impact on the performance of our application, and some or all features may become unavailable.")

   (h/h2 "Overseas Data Disclosure")
   (h/p "We use a wide variety of third party software and services as we seek to use the best solution available for each task. A full list is not practical, but includes our email, CRM, analytics software, email marketing, project management, bug tracking, time tracking and accounting solutions. Your personal information may be accessible to these our providers as we use their services. Of those providers located overseas, most are located in the US. For example, our email service is provided by Google.")

   (h/h2 "Why we collect your personal information")
   (wheel.legalese.hoplon/clause-list
    "We collect personal information for the purposes of:-"
    ["providing the services you have requested;"
     "improving our application and the products and services we provide; and"
     "managing our relationship with you."])
   (wheel.legalese.hoplon/clause-list
    "This occurs when:-"
    ["you engage our services;"
     "order or subscribe to products from us;"
     "make enquiries with us;"
     "attend a presentation or seminar provided by us;"
     "sign up to receive information from us;"
     "apply for a position with us; or"
     "provide services to us."])
   (h/p "We may also collect personal information about you from third parties, which is reasonably necessary for, or directly related to, the provision of products and services to you.")
   (h/p "If you wish to purchase any products or services, we may require you to verify your identity at the time of purchase.")

   (h/h2 "Do we use browser data storage (e.g. cookies)?")
   (h/p "We use data storage technologies very similar to cookies such as HTML5 local and session storage when you visit our website, for the purpose of providing you with a better and more customised service. These technologies are used by us to collect and store your personal information as part of providing and improving our products and services.")
   (wheel.legalese.hoplon/clause-list
    "We use browser data storage for different purposes such as:"
    ["to allocate a unique number to your internet browser;"
     "to customise our website for you;"
     "for statistical purposes;"
     "for security purposes; or"
     "to authenticate or identify whether you are registered on our web site, without requiring you to re-enter details each time you log on to our web site."])
   (h/p "If at any time you do not wish to store this data or wish to delete existing data, you may manually configure your browser to disable storage or may manually delete existing data from your hard drive. However by deleting or refusing to store data you may delay, slow down or block your access to, or use of, areas of our web site.")

   (h/h2 "IP addresses")
   (h/p "Your IP address is the identifier for your computer when you are using the internet.")
   (h/p "It may be necessary for us to collect your IP address for your interaction with various parts of our website.")

   (h/h2 "Do we disclose your personal information?")
   (wheel.legalese.hoplon/clause-list
    "We may disclose your personal information to the following parties:-"
    ["external service providers, so they can provide the service we have contracted out to them;"
     "companies that provide information and infrastructure systems to us;"
     "anybody who represents you;"
     "anyone, where you have provided your consent;"
     "investors, agents, advisers, or any entity that has an interest in our business; or"
     "organisations that provide products or services used or marketed by us."])
   (wheel.legalese.hoplon/clause-list
    "Furthermore your personal and sensitive information may be required to be disclosed to others such as:-"
    ["our officers, shareholders, staff and contractors;"
     "our insurers, accountants, advisors, consultants and other experts, lawyers and Counsel;"
     "a Court, Commissioner, Tribunal, Board or Society."])
   (wheel.legalese.hoplon/clause-list
    "Prior to disclosing any of your personal information to another person or organisation, we will take all reasonable steps to satisfy us that:-"
    ["the person or organisation has a commitment to protecting your personal information at least equal to our commitment, or"
     "you have consented to use making the disclosure."])
   (h/p "However, we may disclose your personal and sensitive information to others even if they do not have a privacy policy equivalent to ours.")
   (h/p "We are not liable for the use of your personal or sensitive information after it has been properly disclosed to a third party.")
   (h/p "We may use cloud storage to store the personal information we hold about you. The cloud storage and the IT servers may be located outside Australia.")

   (h/h2 "Updating your personal information")
   (h/p "It is important to us that the personal information we hold about you is accurate and up to date.")
   (h/p "During the course of our relationship with you we may ask you to inform us if any of your personal information has changed.")
   (h/p "If you wish to make any changes to your personal information, you may update it through the web application or contact us. We will generally rely on you to ensure the information we hold about you is accurate or complete.")

   (h/h2 "Access and correction to your personal information")
   (h/p "We will provide you with access to the personal information we hold about you.")
   (h/p "You may request access to any of the personal information that we hold about you at any time.")
   (h/p "Depending on the type of request that you make, we may respond to your request immediately. Otherwise, we usually respond to you within seven days of receiving your request.  We may need to contact other entities to properly investigate your request. ")
   (h/p "There may be situations where we are not required to provide you with access to your personal information, for example, if the information relates to existing or anticipated legal proceedings, or if your request is vexatious.")
   (h/p "An explanation will be provided to you if we deny you access to the personal information we hold about you.")
   (h/p "If any of the personal information we hold about you is incorrect, inaccurate or out of date, you may request that we correct the information.  If appropriate, we will correct the personal information at the time of the request. Otherwise, we will provide an initial response to you within " (correction-acknowledgement-turnaround) " of receiving your request.  Where reasonable, and after our investigation, we will provide you with details about whether we have corrected the personal information within " (correction-turnaround) ".")
   (h/p "We may need to consult with other entities as part of our investigation.")
   (h/p "If we refuse to correct your personal information, we will provide you with our reasons for not correcting the information.")

   (h/h2 "Using government identifiers")
   (h/p "If we collect government identifiers relating to you we will not use or disclose this information other than required by law.")

   (h/h2 "How safe and secure is your personal information that we hold?")
   (h/p "We will take reasonable steps to protect your personal information by storing it in a secure environment.")
   (h/p "We may store your personal information in paper or electronic form or both.")
   (h/p "We will also take reasonable steps to protect any personal information from misuse, loss and unauthorised access, modification or disclosure.")

   (h/h2 "What to do if you are not satisfied with the way we handle your personal information?")
   (h/p "If you are dissatisfied with how we have dealt with your personal information, or you have a complaint about our compliance with the " (privacy-act) ", please contact us.")
   (h/p "We will acknowledge your complaint within " (complaint-acknowledgement-turnaround) ", and provide you with a decision on your complaint within " (complaint-turnaround) ".")
   (h/p "If you are dissatisfied with the response of our complaints officer you may make a complaint to the Privacy Commissioner which can be contacted via the Office of the Australian Information Commissioner website (" (oaic-link) ") or on " (oaic-phone) ".")

   (h/h2 "Further information")
   (h/p "You may request further information about the way we manage your personal information by contacting us.")

   (h/h2 "How to contact us about this privacy policy")
   (contact-details)

   (h/h2 "Change in our privacy policy")
   (h/p "We are constantly reviewing all of our policies and attempt to keep up to date with market expectations.  Technology is constantly changing, as is the law and market \"best practices\". ")
   (h/p "As a consequence we may change this privacy policy from time to time or as the need arises.")]))

; TESTS

(deftest ??policy
 (let [p (policy)]
  (is (= ["Estimate Work’s Privacy Policy"]
       (wheel.dom.traversal/find-text p "h1")))
  (is (= ["What is our commitment to the protection of your personal information?"
          "We are committed to protecting your privacy."
          "Personal information"
          "Credit information"
          "Credit Card Information"
          "Sensitive information"
          "Marketing"
          "Social Media"
          "Knowledge Articles"
          "Anonymity and Pseudonymity"
          "Overseas Data Disclosure"
          "Why we collect your personal information"
          "Do we use browser data storage (e.g. cookies)?"
          "IP addresses"
          "Do we disclose your personal information?"
          "Updating your personal information"
          "Access and correction to your personal information"
          "Using government identifiers"
          "How safe and secure is your personal information that we hold?"
          "What to do if you are not satisfied with the way we handle your personal information?"
          "Further information"
          "How to contact us about this privacy policy"
          "Change in our privacy policy"]
       (wheel.dom.traversal/find-text p "h2")))
  (is (= ["Stripe"]
       (wheel.dom.traversal/find-text p "h3")))))
=======
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
>>>>>>> 8b70c17b901fab469e16dd483ddb3667567b0433
