import Types "../types/contact";
import List "mo:core/List";
import Order "mo:core/Order";
import Time "mo:core/Time";

module {
  public type ContactSubmission = Types.ContactSubmission;

  public func submit(
    submissions : List.List<ContactSubmission>,
    id : Nat,
    name : Text,
    email : Text,
    projectType : Text,
    message : Text,
  ) : ContactSubmission {
    let entry : ContactSubmission = {
      id;
      name;
      email;
      projectType;
      message;
      timestamp = Time.now();
    };
    submissions.add(entry);
    entry;
  };

  public func list(submissions : List.List<ContactSubmission>) : [ContactSubmission] {
    let cmp : (ContactSubmission, ContactSubmission) -> Order.Order =
      func(a, b) { if (b.timestamp > a.timestamp) #less else if (b.timestamp < a.timestamp) #greater else #equal };
    submissions.sort(cmp).toArray();
  };
};
