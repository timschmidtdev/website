import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 26rem;
  justify-content: space-around;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

export default function ContactForm() {
  return (
    <StyledForm method="POST" action="https://getform.io/f/394deb70-e23d-4dac-9bc7-82243bf2c679">
      <p>ooof... rough styling. I'll get around to it.</p>
      <StyledLabel>
        Name
        <input type="text" name="name" id="name" aria-label="name"/>
      </StyledLabel>
      <StyledLabel>
        Email
        <input type="email" name="email" id="email" aria-label="email"/>
      </StyledLabel>
      <StyledLabel>
        Subject
        <input type="text" name="subject" id="subject" aria-label="subject"/>
      </StyledLabel>
      <StyledLabel>
        Message
        <textarea name="message" id="message" rows="5" aria-label="message"/>
      </StyledLabel>
      <button type="submit" aria-label="submit">Submit</button>
      <input type="reset" value="Clear" aria-label="clear form"/>
    </StyledForm>
  )
}
