"use client"
import { Body } from "@/app/components"
import {
  Main,
  Prompt,
  Header,
  TheBigHeader,
  Button,
  GoBackHome,
  RepContainer,
  CallContainer,
  ScriptContainer,
} from "../../styled"

export default function Manhattan() {
  return (
    <Main>
      <GoBackHome href="../">go back to da main page</GoBackHome>

      <br />

      <TheBigHeader>♧ manhattan ♧</TheBigHeader>
      <p>just click the button and read the script, ez pz</p>

      <br />

      <Header>representative Nadler</Header>
      <RepContainer>
        <CallContainer>
          <Prompt>call:</Prompt>

          <Button href="tel:2123677350">
            call, put speaker phone on, and navigate back here
          </Button>
        </CallContainer>

        <ScriptContainer>
          <Prompt>script:</Prompt>
          <Body rep="Nadler" loc="Manhattan, New York" />
        </ScriptContainer>
      </RepContainer>
      <br />
      <br />

      <Header>senator Schumer</Header>
      <CallContainer>
        <Prompt>call:</Prompt>
        <Button href="tel:2124864430">
          call, put speaker phone on, and navigate back here
        </Button>
      </CallContainer>
      <ScriptContainer>
        <Prompt>script:</Prompt>
        <Body rep="Schumer" loc="[BOROUGH], New York" senator />
      </ScriptContainer>

      <br />
      <br />

      <Header>senator Gillibrand</Header>
      <RepContainer>
        <CallContainer>
          <Prompt>call:</Prompt>
          <Button href="tel:2022244451">
            call, put speaker phone on, and navigate back here
          </Button>
        </CallContainer>
        <ScriptContainer>
          <Prompt>script:</Prompt>
          <Body rep="Gillibrand" loc="[BOROUGH], New York" senator />
        </ScriptContainer>
      </RepContainer>
    </Main>
  )
}
