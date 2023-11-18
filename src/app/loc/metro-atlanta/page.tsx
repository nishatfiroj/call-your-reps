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

export default function MetroAtlanta() {
  return (
    <Main>
      <GoBackHome href="../">go back to da main page</GoBackHome>

      <br />

      <TheBigHeader>☆ metro atlanta ☆</TheBigHeader>
      <Body>just click the button and read the script, ez pz</Body>

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
          <Body>
            hi, my name is <b>[NAME]</b> and im a constituent from <b>[CITY]</b>
            , georgia. im calling to urge representative McCormick to support
            house resolution 786, which calls for an immediate de-escalation and
            CEASEFIRE in israel and palestine. enough innocent lives have
            already been lost.
          </Body>
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
          <Body>
            hi, my name is <b>[NAME]</b> and im a constituent from <b>[CITY]</b>
            , georgia. im calling to urge senator Ossoff to support an immediate
            de-escalation and CEASEFIRE in israel and palestine. enough innocent
            lives have already been lost.
          </Body>
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
          <Body>
            hi, my name is <b>[NAME]</b> and im a constituent from <b>[CITY]</b>
            , georgia. im calling to urge senator Warnock to support an
            immediate de-escalation and CEASEFIRE in israel and palestine.
            enough innocent lives have already been lost.
          </Body>
        </ScriptContainer>
      </RepContainer>
    </Main>
  )
}
