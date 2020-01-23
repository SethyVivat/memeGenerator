import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.contact.image_url} />
      <h3>{props.contact.name}</h3>
      <p>{props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
