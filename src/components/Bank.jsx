import React from 'react';

const Bank = props => {
	const theBank = props.bank;
	const classList = theBank ? ['on-bank', 'off-bank'] : ['off-bank', 'on-bank'];
	return (
		<div id="bank-wrapper">
			<span id="bank-title">Bank</span>
			<div id="bank-box">
				<div id="bank-on" className={classList[0]} onClick={props.clickBank} />
				<div id="bank-off" className={classList[1]} onClick={props.clickBank} />
			</div>
		</div>
	);
};

export default Bank;
