import React from "react";

function Pill(text,image,onClick){
  return(
    <span  className="pills-list" onClick={onClick}>
        <image src={image} alt={text}></image>
     <span>{text}</span>
    </span>
  )

}
export default Pill;