import React from 'react';

const Key = props => {
	const { index } = props;
	const classSelection = props.power
		? [' key key-power-on']
		: [' key key-power-off'];
	return (
		<span
			className={props.classTag + classSelection}
			onClick={() => props.clickKey(index)}
		>
			{props.keyObj.name}
		</span>
	);
};

export default Key;
