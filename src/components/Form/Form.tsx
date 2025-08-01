import React, { useRef, useState, FormEvent } from 'react';
import * as emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import validator from 'validator';

export function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const verifyEmail = (val: string) => setValidEmail(validator.isEmail(val));

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current || !validEmail || !message.trim()) {
      toast.error('Please fill all fields correctly.', { position: 'bottom-left', autoClose: 3000 });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_y1yzvyw',
        'template_yfth2hp',
        form.current,
        { publicKey: 'nJLv0uln8dVz-gfER' }
      );
      toast.success('Email successfully sent!', { position: 'bottom-left', autoClose: 3000 });
      setIsSubmitted(true);
    } catch (err: any) {
      toast.error(`Failed to send: ${err.text || 'Unknown error.'}`, { position: 'bottom-left', autoClose: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Container>
        <h3>Thanks for getting in touch! We'll get back to you soon!</h3>
        <SubmitButton
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsSubmitted(false);
            setEmail(''); setValidEmail(false); setMessage('');
          }}
        >
          Back to the top
        </SubmitButton>
        <ToastContainer />
      </Container>
    );
  }

  return (
    <Container>
      <h1>Get in touch using the form</h1>
      <FormTag ref={form} onSubmit={sendEmail}>
        <Input
          placeholder="Name"
          name="from_name"
          required
        />
        <Input
          placeholder="Email"
          name="from_email"
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); verifyEmail(e.target.value); }}
          required
        />
        <Textarea
          placeholder="Send a message to get started."
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <SubmitButton
          type="submit"
          disabled={!validEmail || !message.trim() || isSubmitting}
        >
          Submit
        </SubmitButton>
      </FormTag>
      <ToastContainer />
    </Container>
  );
}

const Container = styled.div`
  /* transparent wrapper, form centered */
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: #fff;

  h1 {
    text-align: center;         /* center the heading */
    margin-bottom: 3rem;        /* add space below */
    font-size: 2.5rem;
  }

  h3 {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 1.8rem;
  }
`;

const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;                  /* increased gap */
`;

const field = `
  width: 100%;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: rgba(255,255,255,0.7);
  }

  &:focus {
    border-color: #00ff80;
    box-shadow: 0 0 0 3px rgba(0,255,128,0.3);
  }
`;

const Input = styled.input`
  ${field}
  height: 4rem;                 /* taller inputs */
`;

const Textarea = styled.textarea`
  ${field}
  min-height: 12rem;            /* larger textarea */
  resize: none;
`;

const SubmitButton = styled.button`
  margin: 1.5rem auto 0;
  display: block;
  padding: 1rem 2rem;
  background-color: #00ff80;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background-color: #00e673; }
  &:disabled {
    background-color: #555;
    color: #ccc;
    cursor: not-allowed;
  }
`;
