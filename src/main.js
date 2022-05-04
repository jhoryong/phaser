import Phaser from 'phaser'

import Scene1 from './scenes/Scene1'

const config = {
	type: Phaser.AUTO,
	scaleMode: Phaser.Scale.FIT,
	width: 800,
	height: 600,
	parent: 'mydiv',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Scene1]
}

export default new Phaser.Game(config)