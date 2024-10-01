import React from 'react';

export default function DamageChars({selectedChars, setSelectedChars}) {
    const damageChars = [
        'Ashe',
        'Bastion',
        'Cassidy',
        'Echo',
        'Genji',
        'Hanzo',
        'Junkrat',
        'Mei',
        'Pharah',
        'Reaper',
        'Sojourn',
        'Soldier: 76',
        'Sombra',
        'Symmetra',
        'Torbjörn',
        'Tracer',
        'Venture',
        'Widowmaker'
    ];

    const handleLabelClick = (char) => {
        if (selectedChars.includes(char)) {
            // Remove character if already selected
            setSelectedChars(selectedChars.filter(selectedChar => selectedChar !== char));
        } else {
            // Add character if not already selected
            setSelectedChars([...selectedChars, char]);
        }
    }

    const handleSelectAllClick = () => {
        // Check if all damageChars are selected
        const allSelected = damageChars.every(char => selectedChars.includes(char));
    
        if (!allSelected) {
            // If not all are selected, select all
            setSelectedChars([...new Set([...selectedChars, ...damageChars])]);
            }
    }
    

    const handleUnselectAllClick = () => {
        setSelectedChars(selectedChars.filter(selectedChar => !damageChars.includes(selectedChar)));
    }

    return (
        <>
        <div className='typeTitle'>
            <h4>Damage</h4>
            <button className='allSelect' onClick={handleSelectAllClick}>Select All</button>
            <button className='allUnselect' onClick={handleUnselectAllClick}>Unselect All</button>
        </div>
        {damageChars.map((damage, index) => (
            <label 
                key={index} 
                onClick={() => handleLabelClick(damage)}
                className={`label ${selectedChars.includes(damage) ? 'selected' : 'unselected'}`} // Apply classes conditionally
                >{damage}</label>
        ))}
    
        </>
    );
}