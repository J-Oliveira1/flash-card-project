import React, { useState } from 'react';

const AddNewFlashcard = ({addingNewFlashcard}) => {

    const [definition, setDefinition] = useState('');
    const [word, setWord] = useState('');

    function handlesubmit(event) {
        event.preventDefault();
        alert(`New Card Added!`);
        let newCard = {
            definition: definition,
            word: word,
        };
        addingNewFlashcard(newCard);
        setDefinition("")
        setWord("")
    }
    return ( 
        <form onSubmit={handlesubmit}>
            <label>Enter title....</label>
            < input type='text' value={word} onChange={(event) => setWord(event.target.value)} />
            <label>Enter definition....</label>
            <input type='text' value={definition} onChange={(event) => setDefinition(event.target.value)}/>
            <button type='submit'>Save</button>
        </form>
     );
}
 
export default AddNewFlashcard;