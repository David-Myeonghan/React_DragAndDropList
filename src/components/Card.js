import React, { useState, useEffect } from 'react';

function Card(props) {
	// const [isDragging, setIsDragging] = useState(false);

	const dragStart = (e) => {
		const target = e.target;

		e.dataTransfer.setData('card_id', target.id);

		// setIsDragging(true);

		// to make it invisible
		setTimeout(() => {
			target.style.display = 'none';
		}, 0);
	};

	const dragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const drop = (e) => {
		e.preventDefault();
		// setIsDragging(false);
	};

	return (
		<div
			id={props.id}
			className={props.className}
			draggable={props.draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}
			onDrop={drop}
		>
			{props.children}
		</div>
	);
}

export default Card;
