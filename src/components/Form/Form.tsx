import React, { useRef, useState, FormEvent } from 'react';
import * as emailjs from '@emailjs/browser';
import { Container, ContainerSucces } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha'; 
import validator from 'validator';

export function Form() {
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null); 

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const verifyEmail = (value: string) => {
    setValidEmail(validator.isEmail(value));
  };

  const sendEmail = async (e: FormEvent) => { // Made async to await reset
    e.preventDefault();
    if (!form.current) return;

    if (!validEmail || !message.trim() || !captchaToken) {
      toast.error('Please fill all fields and complete the CAPTCHA.', {
        position: 'bottom-left',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm('service_i0jjzis', 'template_fcb0rza', form.current, {
        publicKey: 'o0xTZjf1rz0Uo5G2b',
      });
      toast.success('Email successfully sent!', {
        position: 'bottom-left',
      });
      setIsSubmitted(true);
    } catch (error: any) {
      toast.error(`Failed to send: ${error.text || 'Unknown error'}`, {
        position: 'bottom-left',
      });
    } finally {
      setIsSubmitting(false);
      setCaptchaToken(null);
      // Explicitly reset reCAPTCHA widget after submission
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  if (isSubmitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch! We'll get back to you soon!!!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsSubmitted(false);
            // Optionally clear form fields if returning to the form
            setEmail('');
            setValidEmail(false);
            setMessage('');
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="from_name"
          required
        />

        <input
          placeholder="Email"
          id="email"
          type="email"
          name="from_email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            verifyEmail(e.target.value);
          }}
          required
        />

        <textarea
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcHlZUrAAAAAIApe5d06yOnVnKGpMYb5q7bVmhv"
          onChange={(token) => setCaptchaToken(token)}
          onExpired={() => setCaptchaToken(null)}
        />

        <button
          type="submit"
          disabled={!validEmail || !message.trim() || !captchaToken || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}