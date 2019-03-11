import React from 'react';

const Key = props => {
	const { index } = props;
	return (
		<span id="key" onClick={() => props.clickKey(index)}>
			{props.keyObj.name}
		</span>
	);
};

export default Key;
