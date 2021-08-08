import React from "react"
import { Title, Container } from "./styles/header"

export default function Header({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Title = function HeaderTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}