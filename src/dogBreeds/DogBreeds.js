import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Breed from "./Breed";

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  useEffect(() => {
    const fetchBreeds = async () => {
      const {
        data: { message },
      } = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreeds(message);
    };
    fetchBreeds();
  }, []);

  const filteredBreeds = () => {
    const names = Object.keys(breeds);
    return names.filter(
      (name) => filterTerm === "" || name.includes(filterTerm)
    );
  };

  const handleInput = ({ target: { value } }) => setFilterTerm(value);

  return (
    <Container>
      <StickyHeader>
        <Input
          type="text"
          placeholder="filter by breed..."
          onInput={handleInput}
        />
      </StickyHeader>
      <List>
        {filteredBreeds().map((breed) => (
          <ListItem>
            <Breed name={breed}></Breed>
          </ListItem>
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

const StickyHeader = styled.div`
  position: fixed;
  z-index: 1000;
  height: 50px;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
`;

const List = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: row;
  gap: 10px;
  margin-top: 80px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
`;

const ListItem = styled.div``;

const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;
