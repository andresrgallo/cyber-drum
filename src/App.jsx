import React, { Component } from 'react';

import Drum from './components/Drum.jsx';
import Power from './components/Power.jsx';
import Sound from './components/Sound.jsx';
import Volume from './components/Volume.jsx';
import Bank from './components/Bank.jsx';
import Key from './components/Key.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			power: true,
			bank: true,
			keys: [
				{ name: 'Q', sound: 'Heater 1' },
				{ name: 'W', sound: 'Heater 2' },
				{ name: 'E', sound: 'Heater 3' },
				{ name: 'A', sound: 'Heater 4' },
				{ name: 'S', sound: 'Clap' },
				{ name: 'D', sound: 'Open HH' },
				{ name: 'Z', sound: "Kick 'n Hat" },
				{ name: 'X', sound: 'Kick' },
				{ name: 'C', sound: 'Closed HH' }
			],
			sound: ''
		};
		this.handlePower = this.handlePower.bind(this);
		this.handleBank = this.handleBank.bind(this);
		this.handleKey = this.handleKey.bind(this);
	}

	handlePower(e) {
		this.setState({ power: !this.state.power });
	}

	handleBank(e) {
		this.setState({ bank: !this.state.bank });
	}

	handleKey(keyIndex) {
		console.log('hhhh', keyIndex);
		this.setState({ sound: this.state.keys[keyIndex].sound });
	}

	render() {
		const { keys, power, sound, bank } = this.state;
		const keysList = keys.map((k, index) => (
			<Key key={k.name} index={index} keyObj={k} clickKey={this.handleKey} />
		));
		return (
			<main>
				<h1>Cyber Drum</h1>
				<div className="main-container">
					<div id="drum-wrapper">
						<Drum>{keysList}</Drum>
					</div>
					<div id="controls-wrapper">
						<Power power={power} clickPower={this.handlePower} />
						<Sound sound={sound} />
						<Volume />
						<Bank bank={bank} clickBank={this.handleBank} />
					</div>
				</div>
			</main>
		);
	}
}

export default App;
