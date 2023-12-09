import styled from "styled-components"
import Link from "next/link"
const Button = styled(Link)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #58355e;
  text-align: center;
`

export function Call({ telephone }: { telephone: string }) {
  return (
    <Button href={`tel:${telephone}`}>
      call, put speaker phone on, and navigate back here
    </Button>
  )
}
