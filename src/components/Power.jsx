import React from 'react';

const Power = props => {
	const powerState = props.power;
	const classList = powerState
		? ['on-power', 'off-power']
		: ['off-power', 'on-power'];
	return (
		<div id="power-wrapper">
			<span id="power-title">Power</span>
			<div id="power-box">
				<div
					id="power-on"
					className={classList[0]}
					onClick={props.clickPower}
				/>
				<div
					id="power-off"
					className={classList[1]}
					onClick={props.clickPower}
				/>
			</div>
		</div>
	);
};

export default Power;
