import React, { useState } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className="Button" onClick={showModal}>Open Modal</button>
      <h3>Animating Lists</h3>
      {modalIsOpen && <Modal closed={closeModal} show={modalIsOpen} />}
      {modalIsOpen && <Backdrop show={modalIsOpen} />}
      <List />
    </div>
  );
};

export default App;
