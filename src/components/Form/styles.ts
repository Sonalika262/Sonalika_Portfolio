import styled from "styled-components";


const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 10px;

  h2 {
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input,
  textarea {
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.7rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const ContainerSucces = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  text-align: center;
  background-color: #e6ffe6;
  border-radius: 10px;

  h3 {
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.7rem 1.5rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;