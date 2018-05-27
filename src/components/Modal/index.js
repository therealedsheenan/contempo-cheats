import React from "react";
import { Modal, Button } from "antd";
import PropTypes from "prop-types";

import { ModalProvider, ModalConsumer } from "./context";

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

const Modal3 = ({ hideModal, ...otherProps }) => (
	<Modal
		title="Modal 3"
		visible
		onCancel={hideModal}
		onOk={hideModal}
		{...otherProps}
	>
		<p>This is modal 3</p>
	</Modal>
);

export default class ModalComponent extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>Modal</h1>
					<p>
						Modal implementation with React's createContext method with Ant
						design.
					</p>
				</div>
				<ModalProvider>
					<ModalConsumer>
						{({ component: Component, hideModal, props }) =>
							Component ? <Component onCancel={hideModal} {...props} /> : null
						}
					</ModalConsumer>
					<ModalConsumer>
						{({ showModal, hideModal }) => {
							return (
								<React.Fragment>
									{/* set additional props on modal here... */}
									<Button
										type="primary"
										onClick={() =>
											showModal(Modal1, {
												onCancel: () => {
													hideModal();
													console.log("cancel 1");
												}
											})
										}
									>
										Modal 1
									</Button>
									<Button type="primary" onClick={() => showModal(Modal2)}>
										Modal 2
									</Button>
									<Button
										type="primary"
										onClick={() =>
											showModal(Modal3, {
												onCancel: () => {
													console.log("cancel 3");
													hideModal();
												}
											})
										}
									>
										Modal 3
									</Button>
								</React.Fragment>
							);
						}}
					</ModalConsumer>
				</ModalProvider>
			</div>
		);
	}
}

Modal1.propTypes = {
	hideModal: PropTypes.func.isRequired
};

Modal2.propTypes = {
	hideModal: PropTypes.func.isRequired
};

Modal3.propTypes = {
	hideModal: PropTypes.func.isRequired
};
