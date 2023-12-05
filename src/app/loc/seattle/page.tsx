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

export default function Seattle() {
  return (
    <Main>
      <GoBackHome href="../">go back to da main page</GoBackHome>

      <br />

      <TheBigHeader>✳︎ seattle ✳︎</TheBigHeader>
      <p>just click the button and read the script, ez pz</p>

      <br />

      <Header>representative Jayapal</Header>
      <RepContainer>
        <CallContainer>
          <Prompt>call:</Prompt>

          <Button href="tel:2022253106">
            call, put speaker phone on, and navigate back here
          </Button>
        </CallContainer>

        <ScriptContainer>
          <Prompt>script:</Prompt>
          <Body rep="Jayapal" loc="Seattle, Washington" />
        </ScriptContainer>
      </RepContainer>
      <br />
      <br />

      <Header>senator Cantwell</Header>
      <CallContainer>
        <Prompt>call:</Prompt>
        <Button href="tel:2124864430">
          call, put speaker phone on, and navigate back here
        </Button>
      </CallContainer>
      <ScriptContainer>
        <Prompt>script:</Prompt>
        <Body rep="Cantwell" loc="Seattle, Washington" senator />
      </ScriptContainer>

      <br />
      <br />

      <Header>senator Murray</Header>
      <RepContainer>
        <CallContainer>
          <Prompt>call:</Prompt>
          <Button href="tel:2022242621">
            call, put speaker phone on, and navigate back here
          </Button>
        </CallContainer>
        <ScriptContainer>
          <Prompt>script:</Prompt>
          <Body rep="Murray" loc="Seattle, Washington" senator />
        </ScriptContainer>
      </RepContainer>
    </Main>
  )
}
