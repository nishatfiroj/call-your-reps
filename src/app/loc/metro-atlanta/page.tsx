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

export default function MetroAtlanta() {
  return (
    <Main>
      <div>
        <GoBackHome href="../">go back to da main page</GoBackHome>
      </div>

      <br />

      <TheBigHeader>☆ metro atlanta ☆</TheBigHeader>
      <Body>just click the button and read the script, ez pz</Body>

      <br />

      <Header>representative McCormick</Header>
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
          <Button href="tel:2022254272">
            call, put speaker phone on, and navigate back here
          </Button>
          <Body>
            hi, my name is <b>[NAME]</b> and I'm a constituent from{" "}
            <b>[CITY]</b>, georgia. I'm calling to urge representative McCormick
            to support house resolution 786, which calls for an immediate
            de-escalation and CEASEFIRE in israel and palestine. enough innocent
            lives have already been lost.
          </Body>
        </div>
      </div>

      <br />
      <br />

      <Header>senator Ossoff</Header>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Prompt>call:</Prompt>
          <Prompt>script:</Prompt>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button href="tel:2022243521">
              call, put speaker phone on, wait to hear mr Ossoff to speak and
              then press 2, and navigate back here
            </Button>
            <Body>
              hi, my name is <b>[NAME]</b> and I'm a constituent from{" "}
              <b>[CITY]</b>, georgia. I'm calling to urge senator Ossoff to
              support an immediate de-escalation and CEASEFIRE in israel and
              palestine. enough innocent lives have already been lost.
            </Body>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Header>senator Warnock</Header>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Prompt>call:</Prompt>
          <Prompt>script:</Prompt>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button href="tel:2022243643">
              call, put speaker phone on, and navigate back here
            </Button>
            <Body>
              hi, my name is <b>[NAME]</b> and I'm a constituent from{" "}
              <b>[CITY]</b>, georgia. I'm calling to urge senator Warnock to
              support an immediate de-escalation and CEASEFIRE in israel and
              palestine. enough innocent lives have already been lost.
            </Body>
          </div>
        </div>
      </div>
    </Main>
  )
}
