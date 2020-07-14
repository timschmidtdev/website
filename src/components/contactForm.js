import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1rem;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
`

const StyledInput = styled.input`
  background-color: #a7b5d4;
  border-radius: 0.2rem;
  border: none;
  font-family: Lato, Arial, Helvetica, sans-serif;
  margin: 0.25rem 0;
  padding: 0.5rem;
`

const StyledTextArea = styled.textarea`
  background-color: #a7b5d4;
  border-radius: 0.2rem;
  border: none;
  font-family: Lato, Arial, Helvetica, sans-serif;
  margin: 0.25rem 0;
  padding: 0.5rem;
`

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
`

const Submit = styled.button`
  font-family: Roboto Slab, Georgia, "Times New Roman", Times, serif;
  line-height: 2rem;
  margin: 0 1rem;
  width: 5rem;
`

const Clear = styled.input`
  font-family: Roboto Slab, Georgia, "Times New Roman", Times, serif;
  line-height: 2rem;
  margin: 0 1rem;
  width: 5rem;
`

const ContactForm = () => {
  return (
    <StyledForm
      method="POST"
      action="https://getform.io/f/394deb70-e23d-4dac-9bc7-82243bf2c679"
    >
      <StyledLabel>
        Name
        <StyledInput type="text" name="name" id="name" aria-label="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" id="email" aria-label="email" />
      </StyledLabel>
      <StyledLabel>
        Subject
        <StyledInput
          type="text"
          name="subject"
          id="subject"
          aria-label="subject"
        />
      </StyledLabel>
      <StyledLabel>
        Message
        <StyledTextArea
          name="message"
          id="message"
          rows="5"
          aria-label="message"
        />
      </StyledLabel>
      <Actions>
        <Submit type="submit" aria-label="submit">
          Submit
        </Submit>
        <Clear type="reset" value="Clear" aria-label="clear form" />
      </Actions>
    </StyledForm>
  )
}

export default ContactForm
