import React, {useState} from "react"
import {calculateWinner} from "../helpers"

const GameContext = React.createContext()

function GameContextProvider({children}){
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const [undo, setUndo] = useState([])

    const handleClick = (i) => {
        const newBoard = [...board]
        if ( winner || newBoard[i]) return
        newBoard[i] = xIsNext ? "X" : "O"
        setBoard(newBoard)
        setXisNext(!xIsNext)
        setUndo([...undo, i])
    }
    
    const undoMoves = () => {
        const newBoard = [...board]
        const newUndo = [...undo]
        const empty = newBoard.every(element => element === null)
        if (!empty && !winner) {
            return <div onClick = {() => {
                newUndo.splice(-1)
                setUndo(newUndo)
                newBoard[undo[undo.length - 1]] = null               
                setBoard(newBoard)              
                setXisNext(!xIsNext)
                }}>
                Undo
            </div>
        } 
        
        return    
    }
    
    const renderMoves = () => (
        <div onClick = {() => setBoard(Array(9).fill(null))}>
            Start Game
        </div>
    )

    return (
        <GameContext.Provider value = {{board, winner, xIsNext, handleClick, undoMoves, renderMoves}}>
            {children}
        </GameContext.Provider>
    )
}

export {GameContextProvider, GameContext}