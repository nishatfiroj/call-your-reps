"use client"
import { Main, Button, Prompt } from "./styled"

export default function Home() {
  return (
    <Main>
      <Prompt>
        hi hi - if you want to learn how to do calls with as little anxiety as
        possible, click the button that represents your home
      </Prompt>
      <Button href="/loc/metro-atlanta">metro atlanta</Button>
      <Button href="/loc/manhattan">manhattan</Button>
    </Main>
  )
}
