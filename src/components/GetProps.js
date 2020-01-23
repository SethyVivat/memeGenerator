import React from "react";
import ContactCard from "./ContactCard";

function GetProps() {
  return (
    <div>
      <h1>Hello World</h1>
      <ContactCard
      contact={{
            name:"Joshie Joshie",
            email:"joshijoshi@gmail.com",
            image_url:"https://buyyourswag.com/imageUpload/2019095d8093d9d97b6.jpg"
        }}

      />
      <ContactCard
        contact={{
            name:"backy backy",
            email:"backybacky@gmail.com",
            image_url:"https://buyyourswag.com/imageUpload/2019095d809515511de.jpg"
        }}

      />
      <ContactCard
        contact={{
            name:"longthea123",
            email:"longthea123@gmail.com",
            image_url:"https://buyyourswag.com/imageUpload/2019095d8095256871c.jpg"
        }}

      />
      <ContactCard
        contact={{
            name:"white Joshie",
            email:"whitejoshi@gmail.com",
            image_url:"https://buyyourswag.com/imageUpload/2019095d822b3409db0.jpg"
        }}

      />
    </div>
  );
}

export default GetProps;
