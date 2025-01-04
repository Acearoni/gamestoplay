import React, { useState } from 'react';

const Display = (props) => {
    const { gamesToPlay, setGamesToPlay } = props
    
    const toggleGamePlayed = (game) => {
        const updatedGameList = gamesToPlay.map((gameFromMap) => {
            if (gameFromMap === game) {
                gameFromMap.hasPlayed = !gameFromMap.hasPlayed
            }
            return gameFromMap;
        })
        setGamesToPlay(updatedGameList)
    }

    const removeFromPlayList = (game) => {
        const updatedGameList = gamesToPlay.filter((gameFromFilter) => gameFromFilter !== game)
        setGamesToPlay(updatedGameList)
    }

    return (
        <div>
            <h2>Your Games</h2>
            {
                gamesToPlay.map((game, idx) => (
                    <div key={idx} style={{ border: '2px solid red' }}>
                        {
                            game.hasPlayed ?
                                <h3 style={{ textDecoration: 'line-through' }}>Title: {game.title}</h3> :
                                <h3>Title: {game.title}</h3>
                        }
                        <h3>Developer: {game.developer} </h3>
                        <h3>Genre: {game.genre}</h3>
                        <h3>Release Year: {game.releaseYear}</h3>
                        <input type='checkbox' onClick={() => toggleGamePlayed(game)} defaultChecked={game.hasPlayed} />
                        <button onClick={()=>removeFromPlayList(game)}>Remove From List To Play</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;