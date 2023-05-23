import PropTypes from "prop-types";
import styled from "styled-components";

export const LoadingGists = ({ count }) => {
  /**
   * skeletons can be increased/descreased using count
   */
  return (
    <Wrapper>
      {Array(count)
        .fill("")
        .map((_) => (
          <Skeleton>Loading...</Skeleton>
        ))}
    </Wrapper>
  );
};

const Skeleton = styled.div`
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  border-radius: 10px;
  height: 170px;
  background-color: #efefef;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 80px auto 0;
`;

LoadingGists.defaultProps = {
  count: 2,
};

LoadingGists.propTypes = {
  count: PropTypes.number,
};

export default LoadingGists;
