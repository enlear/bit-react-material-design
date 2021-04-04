import React, { useState } from 'react';
import { Textfield } from './textfield';

// sets the Component preview in gallery view
export const BasicTextfield = () => {
  return <Textfield label="Text Input" />;
};

export const BasicTextfieldChange = () => {
  const [text, setText] = useState("");

  return <div>
    <Textfield label="Text Input" onChange={(e) => { setText(e.target.value); }} />
    <p>Text input: {text}</p>
  </div>;
};
