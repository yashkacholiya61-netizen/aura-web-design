import Types "types/contact";
import ContactMixin "mixins/contact-api";
import List "mo:core/List";

actor {
  let submissions = List.empty<Types.ContactSubmission>();

  include ContactMixin(submissions);
};
