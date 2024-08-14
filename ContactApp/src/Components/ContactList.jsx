import React from "react";

const ContactList =(props)=>{
  console.log(props);
  const renderContactList = props.contacts.map((items) =>{
    return(
      <div className="item">
        <div className="content">
          <div className="header">{items.name}</div>
          <div>{items.email}</div>
        </div>
        <i className="trash alternate outline icon"></i>
      </div>
    )
  })
  return(
    <div className="ui celled list">
      {renderContactList}
    </div>
  );
}

export default ContactList;