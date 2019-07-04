import React from "react";
import { Card } from "../Components/card/card";
import "./card-style.css";


export const CardList = props => {
     console.log(props);
     return (
          <div className="card-list">
               {props.name.map(name => (
                    <Card key={name.id} users={name} />
               ))}
          </div>
     )
}

