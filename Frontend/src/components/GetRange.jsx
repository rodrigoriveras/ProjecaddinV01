import * as React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { getData, getData01, getData02, setup } from "../office-document";


// const CreateTable = () => {


// }

const GetRange = () => {
//   const [text, setText] = useState("Some text.");

//   const handleTextInsertion = async () => {
    
//     await getData();
//   };

//   const handleTextChange = async (event) => {
//     setText(event.target.value);
//   };

  return (
    <Container>
    <Button variant="primary" onClick={setup}>
     Setup Table
    </Button>
     <h1> {setup}</h1>

    <Button variant="primary" onClick={getData}>
     Get
    </Button>
     <h1> {getData}</h1>

     <Button variant="primary" onClick={getData01}>
     Send
    </Button>
     <h1> {getData01}</h1> 

         <Button variant="primary" onClick={getData02}>
     Sendtablr
    </Button>     


  </Container>
  );
};
export default GetRange;
