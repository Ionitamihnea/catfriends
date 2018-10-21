import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-purple br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='cats' src={`https://robohash.org/${id}?set=set4`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
