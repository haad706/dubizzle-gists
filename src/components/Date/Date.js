import styled from "styled-components";
import PropTypes from "prop-types";
import { getFormattedDate } from "utils/helper";

export const Date = ({ label, time }) => {
  return (
    <Wrapper>
      <p>{label}:</p>
      <p>{getFormattedDate(time)}</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
`;

Date.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Date;
