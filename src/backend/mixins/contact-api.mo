import Types "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";
import Principal "mo:core/Principal";

mixin (submissions : List.List<Types.ContactSubmission>) {
  var nextId : Nat = 0;

  public shared func submitContact(
    name : Text,
    email : Text,
    projectType : Text,
    message : Text,
  ) : async { #ok : Text; #err : Text } {
    if (name == "" or email == "" or projectType == "" or message == "") {
      return #err("All fields are required");
    };
    let id = nextId;
    nextId += 1;
    ignore ContactLib.submit(submissions, id, name, email, projectType, message);
    #ok("Contact submission received");
  };

  public query func getContacts() : async [Types.ContactSubmission] {
    ContactLib.list(submissions);
  };
};
