import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS



function SpellsPage() {
  // Spell slots for level 6 Warlock / Paladin
  const [spellSlots, setSpellSlots] = useState({
    cantrip: 3,   // Warlock cantrips
    level1: 4,    // Warlock level 1 + Paladin level 1
    level2: 4,    // Warlock level 2 + Paladin level 2
    level3: 1,    // Warlock level 3
    level4: 1,    // Warlock level 4
  });

  // Combined spells for Warlock and Paladin
  const combinedSpells = {
    cantrip: [
      { name: 'Eldritch Blast', details: 'A beam of crackling energy. Range: 120 ft, Damage: 1d10 force damage.' },
      { name: 'Thaumaturgy', details: 'You manifest a minor wonder. Duration: 1 minute.' },
      { name: 'Chill Touch', details: 'You create a ghostly skeletal hand. Range: 120 ft, Damage: 1d8 necrotic damage.' },
    ],
    level1: [
      { name: 'Hex', details: 'Choose a target and deal extra damage. Duration: 1 hour.' },
      { name: 'Shield of Faith', details: 'A shimmering field appears around a creature. Duration: Concentration, up to 10 minutes.' },
      { name: 'Bless', details: 'You bless up to three creatures. Duration: Concentration, up to 1 minute.' },
      { name: 'Armor of Agathys', details: 'A protective magical force surrounds you. Duration: 1 hour.' },
    ],
    level2: [
      { name: 'Misty Step', details: 'You teleport 30 feet. Instantaneous.' },
      { name: 'Hold Person', details: 'Paralyze a humanoid target. Duration: Concentration, up to 1 minute.' },
      { name: 'Lesser Restoration', details: 'You touch a creature and cure a condition. Instantaneous.' },
      { name: 'Aid', details: 'Bolster the health of allies. Duration: 8 hours.' },
    ],
    level3: [
      { name: 'Counterspell', details: 'Interrupt another caster. Instantaneous.' },
      { name: 'Dispel Magic', details: 'End a spell’s effect. Instantaneous.' },
      { name: 'Aura of Vitality', details: 'Healing aura for creatures. Duration: Concentration, up to 1 minute.' },
    ],
    level4: [
      { name: 'Greater Invisibility', details: 'Make a creature invisible. Duration: Concentration, up to 1 minute.' },
    ],
  };

  // State to handle modal visibility and selected spell details
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(null);

  // Helper function to get the number of spell slots for each level
  const getAvailableSlots = (level) => {
    return spellSlots[level] || 0;
  };

  // Function to open the modal with the selected spell's details
  const openSpellDetails = (spell) => {
    setSelectedSpell(spell);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedSpell(null);
  };

  return (
    <div className="spells-page p-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">Spells</h2>
      </header>

      {/* Merged Spells by Level with Spell Slots */}
      {Object.keys(combinedSpells).map((spellLevel, index) => (
        <div className="stat-box bg-dark text-white p-3 rounded mb-4" key={index}>
          <h3>{spellLevel.charAt(0).toUpperCase() + spellLevel.slice(1)} Spells</h3>
          <p>Available Spell Slots: {getAvailableSlots(spellLevel)}</p>
          <ul>
            {combinedSpells[spellLevel].map((spell, idx) => (
              <li
                key={idx}
                className="d-flex align-items-center mb-2"
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => openSpellDetails(spell)}
              >
                <span>{spell.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Modal for Spell Details */}
      {modalVisible && selectedSpell && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content p-4" onClick={(e) => e.stopPropagation()}>
            <h4>{selectedSpell.name}</h4>
            <p><strong>Details:</strong> {selectedSpell.details}</p>
            <button className="btn btn-danger" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpellsPage;
