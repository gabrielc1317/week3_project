import { useState } from 'react'
import './App.css'
import Card from './components/Card';

const App = () =>{

  const weapons = [
    { weapon: "Hammer", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/4/4b/Grapple_Hammer_Icon.png/54px-Grapple_Hammer_Icon.png" },
    { weapon: "Sword", color: "blue", image: "https://brawlhalla.wiki.gg/images/thumb/3/32/Sword_Icon.png/54px-Sword_Icon.png?ee9e04" },
    { weapon: "Blasters", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/a/a3/Blasters_Icon.png/54px-Blasters_Icon.png?9bd8fb" },
    { weapon: "Rocket Lance", color: "blue", image: "https://brawlhalla.wiki.gg/images/thumb/9/9f/Rocket_Lance_Icon.png/54px-Rocket_Lance_Icon.png?39ae3b" },
    { weapon: "Spear", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/2/26/Spear_Icon.png/54px-Spear_Icon.png?e71511" },
    { weapon: "Katars", color: "blue", image: "https://brawlhalla.wiki.gg/images/thumb/9/97/Katars_Icon.png/54px-Katars_Icon.png?de60b3" },
    { weapon: "Axe", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/d/d6/Axe_Icon.png/54px-Axe_Icon.png?f1c5fb" },
    { weapon: "Bow", color: "blue", image: "https://brawlhalla.wiki.gg/images/thumb/0/05/Bow_Icon.png/54px-Bow_Icon.png?de8415" },
    { weapon: "Gauntlets", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/8/85/Gauntlets_Icon.png/54px-Gauntlets_Icon.png" },
    { weapon: "Scythe", color: "blue", image: "https://brawlhalla.wiki.gg/images/thumb/e/ea/Scythe_Icon.png/54px-Scythe_Icon.png?3f43aa" },
    { weapon: "Cannon", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/6/6b/Cannon_Icon.png/54px-Cannon_Icon.png?d1a95e" },
    { weapon: "Orb", color: "blue", image: "https://brawlhalla.wiki.gg/images/thumb/0/08/Orb_Icon.png/54px-Orb_Icon.png" },
    { weapon: "Greatsword", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/7/7f/Greatsword_Icon.png/54px-Greatsword_Icon.png?f204e4" },
    { weapon: "Battle Boots", color: "blue", image: "https://brawlhalla.wiki.gg/images/thumb/4/4e/Battle_Boots_Icon.png/54px-Battle_Boots_Icon.png?7c5c70" },
    { weapon: "Chakram", color: "green", image: "https://brawlhalla.wiki.gg/images/thumb/2/21/Chakram_Icon.png/54px-Chakram_Icon.png?1d6946" }
  ];

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const currentWeapon = weapons[index];

  const handleNext = () => {
    setFlipped(false);
    setIndex((index) => (index + 1) % weapons.length);
  };

  return(
  <div className='container'>
      <h1>Brawlhalla Weapon Quiz</h1>
      <Card image={currentWeapon.image} weapon={currentWeapon.weapon} color={currentWeapon.color} flipped={flipped} onFlip={() =>setFlipped(!flipped)} />
      <button onClick={handleNext}>Next</button>
    </div>

)




}

export default App
