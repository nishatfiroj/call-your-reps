"use client"

import React from "react"
import {
  Button,
  CopyButton,
  GoBackHome,
  Header,
  Input,
  Main,
  Prompt,
  ScriptContainer,
} from "../styled"
import { createFaxCopy } from "../helpers"

export default function Menace() {
  const name: React.Ref<any> = React.useRef(null)

  const onCopyScript = (rep: string) => {
    const faxCopy = createFaxCopy(name.current.value, rep)
    navigator.clipboard.writeText(faxCopy)
  }

  return (
    <Main>
      <GoBackHome href="../">go back to da main page</GoBackHome>

      <Prompt>wanna be really really annoying? lolol</Prompt>
      <h4 style={{ textAlign: "center" }}>
        then fax your representatives! i made this easy for u too
      </h4>
      <ScriptContainer style={{ textAlign: "center" }}>
        stop killing people with our tax money and we'll stop wasting ur printer
        paper lol
      </ScriptContainer>

      <br />
      <br />

      <Header>senator Ossoff</Header>
      <p>PS be really annoying and do it five times lolol</p>
      <Input ref={name} placeholder="type name here" autoFocus></Input>
      <CopyButton onClick={() => onCopyScript("Ossoff")}>
        copy the script here
      </CopyButton>
      <Button
        href="https://faxzero.com/fax_senate/O000174"
        style={{ borderColor: "#8ab8b0", backgroundColor: "#8ab8b0" }}
        target="_blank"
      >
        paste in this link, fill in ur name, email, and number, AND SEND THAT MF
        FAX LMAO
      </Button>

      <br />
      <br />

      <Header>senator Warnock</Header>
      <p>PS be really annoying and do it five times lolol</p>
      <Input ref={name} placeholder="type name here" autoFocus></Input>
      <CopyButton onClick={() => onCopyScript("Warnock")}>
        copy the script here
      </CopyButton>
      <Button
        href="https://faxzero.com/fax_senate/W000790"
        style={{ borderColor: "#8ab8b0", backgroundColor: "#8ab8b0" }}
        target="_blank"
      >
        paste in this link, fill in ur name, email, and number, AND SEND THAT MF
        FAX LMAO
      </Button>
    </Main>
  )
}
