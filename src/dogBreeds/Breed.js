import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

const Breed = ({ name }) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    const fetchImg = async () => {
      const {
        data: { message },
      } = await axios.get(`https://dog.ceo/api/breed/${name}/images`);
      setImg(message[0]);
    };
    fetchImg();
  }, [name]);

  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <CardThumbnail>
        <Image src={img} />
      </CardThumbnail>
    </Card>
  );
};

export default Breed;

Breed.propTypes = {
  name: PropTypes.string.isRequired,
};

Breed.defaultProps = {
  name: "",
};

const Image = styled.img`
  height: 100px;
  object-fit: cover;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  flex: 1;
  margin-bottom: 0.5rem;
`;

const CardThumbnail = styled.div`
  flex: 1;
`;
