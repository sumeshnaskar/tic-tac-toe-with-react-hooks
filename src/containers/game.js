import React, {useContext} from 'react'
import { GameSpace } from '../components'
import { GameContext } from '../components/GameContext'

export function GameContainer(){
    const { board, winner, xIsNext, handleClick, renderMoves, undoMoves} = useContext(GameContext)
    return(        
            <GameSpace>
                <GameSpace.Board>
                    {board.map((square, i) => (
                        <GameSpace.Square key={i} onClick={() => handleClick(i)}>
                            {square}
                        </GameSpace.Square>
                    ))}
                </GameSpace.Board>
                <GameSpace.Text>
                    {winner ? 'Winner: ' + winner : 'Player  ' + (xIsNext ? 'X' : 'O')} 
                </GameSpace.Text>
                <GameSpace.Button>{renderMoves()}</GameSpace.Button>
                <GameSpace.Button>{undoMoves()}</GameSpace.Button>
            </GameSpace>
    )
}
