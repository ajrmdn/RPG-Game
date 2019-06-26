import { Character, Weapon } from './game.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {
  let player = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
  const stick = new Weapon('stick', 1);
  console.log(player);
  console.log(player.checkMana(-30));
  console.log(player.checkMana(-500));
});
