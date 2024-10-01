
export default function SupportChars({selectedChars,setSelectedChars}) {
    const supportChars = [
        'Ana',
        'Baptiste',
        'Brigitte',
        'Illari',
        'Juno',
        'Kiriko',
        'Lifeweaver',
        'Lúcio',
        'Mercy',
        'Moira',
        'Zenyatta'
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
        const allSelected = supportChars.every(char => selectedChars.includes(char));
    
        if (!allSelected) {
            // If not all are selected, select all
            setSelectedChars([...new Set([...selectedChars, ...supportChars])]);
            }
    }
    

    const handleUnselectAllClick = () => {
        setSelectedChars(selectedChars.filter(selectedChar => !supportChars.includes(selectedChar)));
    }

    return (
        <>
        <div className="typeTitle">
            <h4>Support</h4>
            <button className="allSelect" onClick={handleSelectAllClick}>Select All</button>
            <button className="allUnselect" onClick={handleUnselectAllClick}>Unselect All</button>
        </div>        
        {supportChars.map((support, index) => (
            <label 
                key={index} 
                onClick={() => handleLabelClick(support)}
                className={`label ${selectedChars.includes(support) ? 'selected' : 'unselected'}`} // Apply classes conditionally
                >{support}</label>
        ))}
    
        </>
    );
}