import React from "react";

// Exporting the contactData array
export const contactData = [
  {
    id: 1,
    icon: "/assets/img/contact-1/1.svg",
    address: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
  },
  {
    id: 2,
    icon: "/assets/img/contact-1/2.svg",
    phoneNumber: "+(1) 123 456 7890",
  },
  {
    id: 3,
    icon: "/assets/img/contact-1/3.svg",
    email: "hi@educrat.com",
  },
];

// Example usage of contactData in a React component
function ContactList() {
  return (
    <div className="contact-container">
      {contactData.map((contact) => (
        <div key={contact.id} className="contact-item">
          <img src={contact.icon} alt={`Contact ${contact.id}`} />
          {contact.address && <p>{contact.address}</p>}
          {contact.phoneNumber && <p>{contact.phoneNumber}</p>}
          {contact.email && <p>{contact.email}</p>}
        </div>
      ))}
    </div>
  );
}

export default ContactList;
