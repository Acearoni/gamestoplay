import React, { useState, useTransition } from 'react';

const Form = (props) => {
    const {gamesToPlay, setGamesToPlay} = props
    const [title, setTitle] = useState('')
    const [developer, setDeveloper] = useState('')
    const [genre, setGenre] = useState('Third Person') //Set to DropDown
    const [releaseYear, setReleaseYear] = useState(1980)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Submitted');
        const newGame = { //Object of data packaged together, such as a new game.
            title,
            developer,
            genre,
            releaseYear,
            hasPlayed: false
        }
        setGamesToPlay([...gamesToPlay, newGame])
        setTitle('')
        setDeveloper('')
        setGenre('')
        setReleaseYear(1980)
    }

    return (
        <div>
            <h2>Add A Game To Your Play List</h2>
            <form onSubmit={submitHandler}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Developer:</label>
                <input type="text" value={developer} onChange={(e) => setDeveloper(e.target.value)} />
            </div>
            <div>
                <label>Genre:</label>
                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value="Third Person">Third Person</option>
                    <option value="First Person">First Person</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Sports">Sports</option>
                    <option value="Puzzle">Puzzle</option>
                </select>
            </div>
            <div>
                <label>Release Year:</label>
                <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
            </div>
            <button>Add Game</button>
            </form>
        </div>
    );
}

export default Form;