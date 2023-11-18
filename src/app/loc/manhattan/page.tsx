"use client"
import {
  Main,
  Prompt,
  Header,
  Body,
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
      <Body>just click the button and read the script, ez pz</Body>

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
          <Body>
            hi, my name is <b>[NAME]</b> and im a constituent from Manhattan. im
            calling to urge representative Nadler to support house resolution
            786, which calls for an immediate de-escalation and CEASEFIRE in
            israel and palestine. enough innocent lives have already been lost.
          </Body>
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
        <Body>
          hi, my name is <b>[NAME]</b> and im a constituent from Manhattan. im
          calling to urge senator Schumer to support an immediate de-escalation
          and CEASEFIRE in israel and palestine. enough innocent lives have
          already been lost.
        </Body>
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
          <Body>
            hi, my name is <b>[NAME]</b> and im a constituent from Manhattan. im
            calling to urge senator Gillibrand to support an immediate
            de-escalation and CEASEFIRE in israel and palestine. enough innocent
            lives have already been lost.
          </Body>
        </ScriptContainer>
      </RepContainer>
    </Main>
  )
}
