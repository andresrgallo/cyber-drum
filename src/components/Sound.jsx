import React from 'react';

const Sound = props => {
	const spanContent = props.power && props.sound;
	return (
		<div id="sound-wrapper">
			<div id="sound-box">
				<span id="sound-name">{spanContent}</span>
			</div>
		</div>
	);
};

export default Sound;
