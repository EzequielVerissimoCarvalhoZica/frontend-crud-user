import React from 'react';
import { Form } from 'react-bootstrap';

export default function CustomInput({
  handleChange, value, inputName, placeHolder, type, id, text,
}) {
  return (
    <Form.Group className="mb-3" controlId={`exampleForm.ControlInput${id}`}>
      <Form.Control
        name={inputName}
        onChange={(e) => { handleChange(e); }}
        pattern={type === 'tel' ? '[0-9]{2} [0-9]{5}-[0-9]{4}' : undefined}
        required={type === 'password'}
        value={value}
        type={type}
        placeholder={placeHolder}
        autoFocus
      />
      { text.show && <Form.Text>{text.data}</Form.Text>}
    </Form.Group>
  );
}
