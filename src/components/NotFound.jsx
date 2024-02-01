import React from 'react'
import { Container, Image } from 'react-bootstrap'
import notFavorites from "../assets/not-favorite.png"
import notFoundPages from "../assets/not-found-page.jpg"

export default function NotFound({type}) {
  return (
    <Container style={{display:"flex", justifyContent:"center"}}>
      <Image src={type === "notFound" ? notFoundPages : notFavorites} fluid />
    </Container>
  )
}
