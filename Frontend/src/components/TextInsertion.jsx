import * as React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { insertText } from "../office-document";

const TextInsertion = () => {
  const [text, setText] = useState("Some text.");

  const handleTextInsertion = async () => {
    
    await insertText(text);
  };

  const handleTextChange = async (event) => {
    setText(event.target.value);
  };

  return (
    <Container>
    <Form>
     <Form.Group className="mb-3">
      <Form.Label>Username</Form.Label>
       <Form.Control
              type="text"
              placeholder="Enter username"
              value={text}
       onChange={handleTextChange}
     />
    </Form.Group>
    <Button variant="primary" onClick={handleTextInsertion}>
     Login
    </Button>
   </Form>
  </Container>
  );
};
export default TextInsertion;
