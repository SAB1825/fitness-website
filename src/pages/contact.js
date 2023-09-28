import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email
    const data = {
      name,
      email,
      message,
    };
    fetch("https://example.com/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={setName} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={setEmail} />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="textarea" name="message" value={message} onChange={setMessage} />
      </Form.Group>
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default ContactForm;
