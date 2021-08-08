import React from "react"
import { Container, Board, Text, Button, Square } from "./styles/gamespace"

export default function GameSpace({ children, ...restProps }){
    return <Container {...restProps}>{ children}</Container>
}

GameSpace.Board = function GameBoard({children, ...restProps}){
    return <Board {...restProps}>{children}</Board>
}

GameSpace.Text = function GameText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

GameSpace.Button = function GameButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

GameSpace.Square = function GameSquare({ children, ...restProps}){
    return <Square {...restProps}>{children}</Square>
}