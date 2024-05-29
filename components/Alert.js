import React from "react";

export default function Alert(props) {
    //makeing success capitalized
    const capitalized = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //IMP : here the below line bcz by default props is null so in this it will do that if props null then it wont execute the next statement
    props.alert &&
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
        
      </div>
    </div>
  );
}
