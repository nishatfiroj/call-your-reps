"use client"
import {
  Main,
  Prompt,
  Header,
  Body,
  TheBigHeader,
  Button,
  GoBackHome,
} from "../../styled"

export default function Manhattan() {
  return (
    <Main>
      <div>
        <GoBackHome href="../">go back to da main page</GoBackHome>
      </div>

      <br />

      <TheBigHeader>♧ manhattan ♧</TheBigHeader>
      <Body>just click the button and read the script, ez pz</Body>

      <br />

      <Header>representative Nadler</Header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Prompt>call:</Prompt>
          <Prompt>script:</Prompt>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button href="tel:2123677350">
            call, put speaker phone on, and navigate back here
          </Button>
          <Body>
            hi, my name is <b>[NAME]</b> and im a constituent from Manhattan. im
            calling to urge representative Nadler to support house resolution
            786, which calls for an immediate de-escalation and CEASEFIRE in
            israel and palestine. enough innocent lives have already been lost.
          </Body>
        </div>
      </div>

      <br />
      <br />

      <Header>senator Schumer</Header>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Prompt>call:</Prompt>
          <Prompt>script:</Prompt>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button href="tel:2124864430">
              call, put speaker phone on, and navigate back here
            </Button>
            <Body>
              hi, my name is <b>[NAME]</b> and im a constituent from Manhattan.
              im calling to urge senator Schumer to support an immediate
              de-escalation and CEASEFIRE in israel and palestine. enough
              innocent lives have already been lost.
            </Body>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Header>senator Gillibrand</Header>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Prompt>call:</Prompt>
          <Prompt>script:</Prompt>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button href="tel:2022244451">
              call, put speaker phone on, and navigate back here
            </Button>
            <Body>
              hi, my name is <b>[NAME]</b> and im a constituent from Manhattan.
              im calling to urge senator Gillibrand to support an immediate
              de-escalation and CEASEFIRE in israel and palestine. enough
              innocent lives have already been lost.
            </Body>
          </div>
        </div>
      </div>
    </Main>
  )
}
