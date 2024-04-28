import React, { useState } from 'react';
import myImage from '../assets/images/cta.jpeg'

const data = [
    { title: "Title 1", description: "This is the first card" },
    { title: "Title 2", description: "This is the second card" },
    { title: "Title 3", description: "This is the third card" },
  ];


  function handleClick() {
    alert('You clicked me!');
  }

function Card(props) {
    const [isHover,setHover] = useState(false);
    function handleClick() {
        setHover(true)
      }
    return (
      <div className="{isHover ? 'card hover':'card '} flex-1 gap-y-4 in-card " onMouseOver={handleClick}>
        <img src={myImage} alt="myImage" className="rounded-3xl hover:rounded-none ease-in duration-300 "/>
        <h2 className='text-3xl uppercase'>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
  }

  function CardList() {
    return (
      <div className="card-list cta flex-1 space-x-4">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    );
  }

  export default CardList;