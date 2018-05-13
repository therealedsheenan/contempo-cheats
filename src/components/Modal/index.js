import React from 'react';
import { Modal, Button } from 'antd';

import { ModalProvider, ModalConsumer } from './context';
import Root from './root'

const Modal1 = ({ hideModal, ...otherProps }) => (
  <Modal
    title="Modal 1"
    visible
    onCancel={hideModal}
    onOk={hideModal}
    {...otherProps}
  >
    <p>This is modal 1</p>
  </Modal>
);

const Modal2 = ({ hideModal, ...otherProps }) => (
  <Modal
    title="Modal 2"
    visible
    onCancel={hideModal}
    onOk={hideModal}
    {...otherProps}
  >
    <p>This is modal 2</p>
  </Modal>
);

const Modal3 = (props) => {
  return (
    <Modal
      title="Modal 3"
      visible
      onCancel={() => { console.log('cancelled') }}
      // onOk={() => {console.log('ok!')}}
    >
      <p>This is modal 3</p>
    </Modal>
  );
}

export default class ModalComponent extends React.Component {
  render () {
    return (
      <div>
        <div>
          <h1>Modal</h1>
          <p>Modal implementation with React's createContext method with Ant design.</p>
        </div>
        <ModalProvider>
          <ModalConsumer>
            {({ component: Component, hideModal, props }) => {
              console.log(props)
              return (
                Component ? <Component onCancel={() => console.log('cancelled')} /> : null
              )
            }}
          </ModalConsumer>
          <ModalConsumer>
            {({ showModal }) => {
              return (
                <React.Fragment>
                  {/* set additional props on modal here... */}
                  <Button type="primary" onClick={() => showModal(Modal1)}>Modal 1</Button>
                  <Button type="primary" onClick={() => showModal(Modal2)}>Modal 2</Button>
                  <Button type="primary" onClick={() => showModal(Modal3, {
                    onCancel: () => { console.log('cancelled') },
                    onOk: () => {console.log('ok!')}
                  })}>Modal 3</Button>
                </React.Fragment>
              )
            }}
          </ModalConsumer>
        </ModalProvider>
      </div>
    )
  }
}