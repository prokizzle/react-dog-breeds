import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Breed from "./Breed";

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    const fetchBreeds = async () => {
      const {
        data: { message },
      } = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreeds(message);
    };
    fetchBreeds();
  }, []);

  return (
    <Container>
      <List>
        {Object.keys(breeds).map((breed) => (
          <Breed name={breed}></Breed>
        ))}
      </List>
    </Container>
  );
};

export default DogBreeds;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
