import React, { useState } from "react";

function Card({name, image}) {
  return <img className="Card" src={image} name={name} alt={name}/>
}

export default Card