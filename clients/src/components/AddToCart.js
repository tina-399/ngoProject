import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import QuantityButtons from './QuantityButtons';
import Alert from './Alert';

const AddToCart = ({ product }) => {
	const { addToCart } = useCartContext();
	const { _id, stock, colors } = product;

	const [mainColor, setMainColor] = useState(colors[0]);
	const [quantity, setQuantity] = useState(1);
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: ''
	});

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const increase = () => {
		setQuantity((oldQuantity) => {
			let newQuantity = oldQuantity + 1;
			if (newQuantity > stock) {
				showAlert(true, 'danger', 'Maximum number in stock reached');
				newQuantity = stock;
			}
			return newQuantity;
		});
	};

	const decrease = () => {
		setQuantity((oldQuantity) => {
			let newQuantity = oldQuantity - 1;
			if (newQuantity < 1) {
				showAlert(true, 'danger', 'Cannot have negative number for a product');
				newQuantity = 1;
			}
			return newQuantity;
		});
	};

	return (
		<Wrapper>
			<div className="colors">
				<span> colors : </span>
				<div>
					{colors.map((color, index) => {
						return (
							<button
								key={index}
								style={{ background: color }}
								className={
									mainColor === color ? 'color-btn active' : 'color-btn'
								}
								onClick={() => setMainColor(color)}
							>
								{mainColor === color ? <FaCheck /> : null}
							</button>
						);
					})}
				</div>
			</div>
			{alert.show && <Alert {...alert} removeAlert={showAlert} />}
			<div className="btn-container">
				<QuantityButtons
					quantity={quantity}
					increase={increase}
					decrease={decrease}
				/>
				<Link
					to="/cart"
					className="btn"
					onClick={() => addToCart(_id, mainColor, quantity, product)}
				>
					add to cart
				</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 2rem;
	.colors {
		display: grid;
		grid-template-columns: 125px 1fr;
		align-items: center;
		margin-bottom: 1rem;
		span {
			text-transform: capitalize;
			font-weight: 700;
		}
		div {
			display: flex;
		}
	}
	.color-btn {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.75rem;
			color: var(--clr-white);
		}
	}
	.active {
		opacity: 1;
	}
	.btn-container {
		margin-top: 2rem;
	}

	.btn {
		margin-top: 1rem;
		width: 140px;
	}
`;
export default AddToCart;
