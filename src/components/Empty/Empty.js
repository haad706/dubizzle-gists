import styled from "styled-components";
import PropTypes from "prop-types";
import EmptyContainerImage from "assets/no-data.svg";

export const Empty = ({ text }) => {
  return (
    <Container>
      <img src={EmptyContainerImage} alt="no-gists-found" />
      <h3>{text}</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  img {
    width: 170px;
  }
`;

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Empty;
