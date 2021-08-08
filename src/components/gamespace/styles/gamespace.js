import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
export const Board = styled.div`
    order: 4;
    border: none;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: grid;
    grid-Template: repeat(3, 1fr) / repeat(3, 1fr);
    width: 320px;
    height: 50vh;
    margin: 0px auto;
    margin-bottom: 3em;

    
`
export const Text = styled.p`
    order: 3
    width: 150px;
    margin: 0 auto;
    color: #d4af37;
    font-weight: bold;
    text-shadow: 2px 2px 5px #FD0000;
    font-size: 1.5rem;
    margin-bottom:0.5em;
`

export const Square = styled.button`
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    border: 2px solid #A6A5F8;
    &:hover{
        background-color: #88F7AA;
    }
    
`

export const Button = styled.button`
    order: 7;
    font-family: 'Hind', sans-serif;
    background-color: #A6A5F8;
    width: 150px;
    margin: 0 auto;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border: none;
    text-shadow: 1px 2px 3px #000;
    font-weight: 700;
    color: #FD0000;
    cursor: pointer;

    &:hover{
        color: #00C369;
    }
`