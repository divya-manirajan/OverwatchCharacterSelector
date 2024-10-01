
export default function TankChars({selectedChars, setSelectedChars}) {
    const tankChars = [
        'D.Va',
        'Doomfist',
        'Junker Queen',
        'Mauga',
        'Orisa',
        'Ramattra',
        'Reinhardt',
        'Roadhog',
        'Sigma',
        'Winston',
        'Wrecking Ball',
        'Zarya'
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
        const allSelected = tankChars.every(char => selectedChars.includes(char));
    
        if (!allSelected) {
            // If not all are selected, select all
            setSelectedChars([...new Set([...selectedChars, ...tankChars])]);
            }
    }
    

    const handleUnselectAllClick = () => {
        setSelectedChars(selectedChars.filter(selectedChar => !tankChars.includes(selectedChar)));
    }

    return (
        <>

        <div className="typeTitle">
            <h4>Tank</h4>
            <button className="allSelect" onClick={handleSelectAllClick}>Select All</button>
            <button className="allUnselect" onClick={handleUnselectAllClick}>Unselect All</button>
        </div>  

        {tankChars.map((tank, index) => (
            <label 
                key={index} 
                onClick={() => handleLabelClick(tank)}
                className={`label ${selectedChars.includes(tank) ? 'selected' : 'unselected'}`} // Apply classes conditionally
                >{tank}</label>
        ))}
    
        </>
    );
}