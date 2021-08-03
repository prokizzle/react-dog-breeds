import React from "react";
import styled from "styled-components";

const DogBreeds = () => {
  const breeds = [];
  return (
    <Container>
      <List>
        {breeds.map((breed) => (
          <Breed>{breed.name}</Breed>
        ))}
      </List>
    </Container>
  );
};

export default DogBreeds;

const Container = styled.div`
  display: grid;
`;

const List = styled.div`
  display: grid;
`;

const Breed = styled.div`
  display: flex;
`;
