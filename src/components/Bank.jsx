import React from 'react';

const Bank = props => {
	const theBank = props.bank;
	const classList = theBank ? ['on-bank', 'off-bank'] : ['off-bank', 'on-bank'];
	const bankControl = props.power ? (
		<div id="bank-box">
			<div id="bank-on" className={classList[0]} onClick={props.clickBank} />
			<div id="bank-off" className={classList[1]} onClick={props.clickBank} />
		</div>
	) : (
		<div id="bank-box">
			<div id="bank-on" className={'on-bank'} onClick={props.clickBank} />
			<div id="bank-off" className={'off-bank'} onClick={props.clickBank} />
		</div>
	);
	return (
		<div id="bank-wrapper">
			<span id="bank-title">Bank</span>
			{bankControl}
		</div>
	);
};

export default Bank;
