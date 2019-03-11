import React from 'react';

const Volume = () => {
	return (
		<div id="volume-wrapper">
			<input
				name="volume"
				type="range"
				min="0"
				max="1"
				step="0.01"
				id="volume-bar"
				//value="0.5"
			/>
		</div>
	);
};

export default Volume;
