import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import './App.css';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="App">
      <h1>React Animations</h1>

      <button
        type="button"
        className="Button"
        onClick={() => setShowBlock(!showBlock)}
      >
        Toggle
      </button>
      <Transition
        in={showBlock}
        timeout={300}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={() => console.log('onEntered')}
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={() => console.log('onExited')}
      >
        {(state) => (
          <div
            style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exiting' ? 0 : 1,
            }}
          />
        )}
      </Transition>

      <button type="button" className="Button" onClick={showModal}>
        Open Modal
      </button>
      <Modal closed={closeModal} show={modalIsOpen} />
      <Transition in={modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
        {(state) => <Backdrop show={state} />}
      </Transition>

      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};
export default App;
