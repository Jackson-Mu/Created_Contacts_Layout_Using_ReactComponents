import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contacts) {
  return (
    <Card
      id={contacts.id}
      key={contacts.id}
      name={contacts.name}
      img={contacts.img}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">
        Beatifully Designed Contacts using React Components
      </h1>

      <Avatar img="https://petzpark.com.au/cdn/shop/articles/Breeds_Thumbnails_4_1_800x.jpg?v=1638423816 " />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
