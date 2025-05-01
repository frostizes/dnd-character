import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS


function StatsPage() {
  // Initial stats
  const [hp, setHp] = useState(60); // Starting health points
  const [initiative, setInitiative] = useState(2); // Starting initiative modifier
  const [armorClass, setArmorClass] = useState(18); // Starting armor class

  // Character ability scores
  const [strength, setStrength] = useState(16);
  const [dexterity, setDexterity] = useState(14);
  const [constitution, setConstitution] = useState(14);
  const [intelligence, setIntelligence] = useState(8);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(18);

  // Adjust HP
  const increaseHp = () => setHp(prevHp => prevHp + 1);
  const decreaseHp = () => setHp(prevHp => Math.max(prevHp - 1, 0)); // Prevent HP from going below 0

  return (
    <div className="stats-page p-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">Character Stats</h2>
      </header>

      {/* Health Section */}
      <div className="stat-box bg-dark text-white p-3 rounded mb-4">
        <h3>Health</h3>
        <div className="d-flex justify-content-between">
          <div>
            <p>HP: {hp}</p>
            <button className="btn btn-success me-2" onClick={increaseHp}>Increase HP</button>
            <button className="btn btn-danger" onClick={decreaseHp}>Decrease HP</button>
          </div>
        </div>
      </div>

      {/* Initiative Section */}
      <div className="stat-box bg-dark text-white p-3 rounded mb-4">
        <h3>Initiative</h3>
        <p>Initiative Modifier: {initiative}</p>
      </div>

      {/* Armor Class Section */}
      <div className="stat-box bg-dark text-white p-3 rounded mb-4">
        <h3>Armor Class (AC)</h3>
        <p>Armor Class: {armorClass}</p>
      </div>

      {/* Ability Scores Section */}
      <div className="stat-box bg-dark text-white p-3 rounded">
        <h3>Ability Scores</h3>
        <div className="row">
          <div className="col-4">
            <p>Strength: {strength}</p>
          </div>
          <div className="col-4">
            <p>Dexterity: {dexterity}</p>
          </div>
          <div className="col-4">
            <p>Constitution: {constitution}</p>
          </div>
          <div className="col-4">
            <p>Intelligence: {intelligence}</p>
          </div>
          <div className="col-4">
            <p>Wisdom: {wisdom}</p>
          </div>
          <div className="col-4">
            <p>Charisma: {charisma}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
