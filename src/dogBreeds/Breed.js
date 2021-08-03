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
  max-width: 300px;
  /* max-height: 250px; */
  min-witdh: 120px;
  object-fit: cover;
  border-radius: 10px;
`;

const Card = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solter
  border-radius: 5px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
  position: relative;
  top: 35px;
  left: 10px;
`;

const CardThumbnail = styled.div`
  flex: 1;
`;
