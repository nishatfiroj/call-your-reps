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

export default function MetroAtlanta() {
  return (
    <Main>
      <GoBackHome href="../">go back to da main page</GoBackHome>

      <br />

      <TheBigHeader>☆ metro atlanta ☆</TheBigHeader>
      <p>just click the button and read the script, ez pz</p>

      <br />

      <Header>representative McCormick</Header>
      <RepContainer>
        <CallContainer>
          <Prompt>call:</Prompt>
          <Button href="tel:2022254272">
            call, put speaker phone on, and navigate back here
          </Button>
        </CallContainer>
        <ScriptContainer>
          <Prompt>script:</Prompt>
          <Body rep="McCormick" loc="[CITY], georgia" />
        </ScriptContainer>
      </RepContainer>

      <br />
      <br />

      <Header>senator Ossoff</Header>
      <RepContainer>
        <CallContainer>
          <Prompt>call:</Prompt>
          <Button href="tel:2022243521">
            call, put speaker phone on, wait to hear mr Ossoff to speak and then
            press 2, and navigate back here
          </Button>
        </CallContainer>
        <ScriptContainer>
          <Prompt>script:</Prompt>
          <Body rep="Ossoff" loc="[CITY], georgia" senator />
        </ScriptContainer>
      </RepContainer>

      <br />
      <br />

      <Header>senator Warnock</Header>
      <RepContainer>
        <CallContainer>
          <Prompt>call:</Prompt>
          <Button href="tel:2022243643">
            call, put speaker phone on, and navigate back here
          </Button>
        </CallContainer>
        <ScriptContainer>
          <Prompt>script:</Prompt>
          <Body rep="Warnock" loc="[CITY], georgia" senator />
        </ScriptContainer>
      </RepContainer>
    </Main>
  )
}
