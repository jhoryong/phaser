import Phaser from 'phaser'
import Scene1 from './src/scenes/Scene1'

// Phaser 게임 설정
const config = {
    type: Phaser.AUTO, // 자동으로 Phaser.WEBGL 을 쓰게 만듦. Device 가 지원하지 않을 경우 Phaser.CANVAS 사용

    // game canvas 사이즈
    width: 800,
    height: 600,

    // 물리 사용
    physics: {
        default: 'arcade', // arcade 모드
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },

    scene: [Scene1]
};

export default new Phaser.Game(config)