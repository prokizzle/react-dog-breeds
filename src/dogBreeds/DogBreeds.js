import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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

  console.log({ breeds });

  return (
    <Container>
      <List>
        {Object.keys(breeds).map((breed) => (
          <Breed>{breed}</Breed>
        ))}
      </List>
    </Container>
  );
};

export default DogBreeds;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const List = styled.div`
  display: grid;
`;

const Breed = styled.div`
  display: flex;
`;
