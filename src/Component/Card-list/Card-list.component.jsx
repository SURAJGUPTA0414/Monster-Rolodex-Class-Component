import React from "react";
import './Card-list.styles.css'
import Card from "../Card/Card.component";

class CardList extends React.Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {

            const {name,id,email} = monster;
            return(
                <Card 
                    name={name}
                    id={id}
                    email={email}
                />
          
        )})}
      </div>
    );
  }
}

export default CardList;
