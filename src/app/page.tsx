"use client"
import StyledComponentsRegistry from "./registry"
import { Main, Button, Prompt, MenaceButton } from "./styled"

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <Main>
        <Prompt>
          hi hi - if you want to learn how to do calls with as little anxiety as
          possible, click the button that represents your home
        </Prompt>

        <Button href="/loc/metro-atlanta">metro atlanta</Button>
        <Button href="/loc/manhattan">manhattan</Button>
        <Button href="/loc/seattle">seattle</Button>
        <MenaceButton href="/menace">
          ʍҽղąçҽ ʍօժҽ ƒօɾ ցҽօɾցìą ѵօէҽɾʂ
        </MenaceButton>
      </Main>
    </StyledComponentsRegistry>
  )
}
