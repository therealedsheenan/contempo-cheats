import React from 'react';
import { ModalConsumer } from './context';

const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, hideModal }) => {
      console.log(props)
      console.log(Component)
      return (
        // Component ? <Component onOk={hideModal} onCancel={hideModal} {...props} /> : null
        Component ? <Component {...props} /> : null
      )
    }}
  </ModalConsumer>
);

export default ModalRoot;
