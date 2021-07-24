/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,react/no-array-index-key */
import React, { useState } from 'react';

import './List.css';

const list = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () =>
    setItems((prevState) => prevState.items.concat(prevState.items.length + 1));

  const removeItemHandler = (selIndex) =>
    setItems((prevState) =>
      prevState.items.filter((item, index) => index !== selIndex)
    );

  const listItems = items.map((item, index) => (
    <li
      key={index}
      className="ListItem"
      onClick={() => removeItemHandler(index)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <button type="button" className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};

export default list;
