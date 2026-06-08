const https = require('https');

const emojis = [
  'Coin/3D/coin_3d.png',
  'Shield/3D/shield_3d.png',
  'High%20voltage/3D/high_voltage_3d.png',
  'Fire/3D/fire_3d.png',
  'Money%20with%20wings/3D/money_with_wings_3d.png',
  'Droplet/3D/droplet_3d.png',
  'Telescope/3D/telescope_3d.png',
  'Globe%20with%20meridians/3D/globe_with_meridians_3d.png',
  'Gem%20stone/3D/gem_stone_3d.png',
  'Brain/3D/brain_3d.png',
  'Chart%20increasing/3D/chart_increasing_3d.png',
  'Bank/3D/bank_3d.png',
  'Key/3D/key_3d.png',
  'Lock/3D/lock_3d.png',
  'Rocket/3D/rocket_3d.png',
  'Light%20bulb/3D/light_bulb_3d.png',
  'Books/3D/books_3d.png',
  'Magnifying%20glass%20tilted%20right/3D/magnifying_glass_tilted_right_3d.png',
  'Memo/3D/memo_3d.png',
  'Hourglass%20done/3D/hourglass_done_3d.png'
];

const EMOJI_BASE = 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets';

async function check() {
  for (const path of emojis) {
    const url = `${EMOJI_BASE}/${path}`;
    await new Promise(resolve => {
      https.get(url, (res) => {
        if (res.statusCode !== 200) {
          console.log(`FAILED: ${path} (Status: ${res.statusCode})`);
        } else {
          console.log(`OK: ${path}`);
        }
        resolve();
      }).on('error', (e) => {
        console.log(`ERROR: ${path} - ${e.message}`);
        resolve();
      });
    });
  }
}

check();
