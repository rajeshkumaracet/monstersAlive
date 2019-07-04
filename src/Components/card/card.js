import React from "react";
import "./card.css";



export const Card = props => (
     <div className="card-container">
          <img alt="userImages" src={`https://robohash.org/${props.users.id}?set=set2&size=180x180`} />
          <h2>{props.users.name}</h2>
          <p>{props.users.email}</p>
     </div >
)