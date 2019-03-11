import React from 'react';

const Sound = props => {
	return (
		<div id="sound-wrapper">
			<div id="sound-box">
				<span id="sound-name">{props.sound}</span>
			</div>
		</div>
	);
};

export default Sound;
