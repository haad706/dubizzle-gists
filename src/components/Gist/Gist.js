import styled from "styled-components";
import PropTypes from "prop-types";
import { Date, Files, IconText, UserTitle } from "components";

export const Gist = ({
  files = {},
  owner = {},
  forks_url: forksUrl,
  comments,
  comments_url: commentsUrl,
  created_at: createdAt,
  updated_at: updatedAt,
  description,
}) => {
  const { login, avatar_url: avatarImageUrl } = owner;

  const numberOfFiles = Object.keys(files).length;

  return (
    <CardWrapper>
      <HeaderWrapper>
        <UserTitle name={login} imageSrc={avatarImageUrl} />
        <HeaderInfoWrapper>
          <IconText iconName="code" text={`${numberOfFiles} Files`} />
          <IconText iconName="repo-forked" text="Forks" link={forksUrl} />
          <IconText
            iconName="comment"
            text={`${comments} Comments`}
            link={commentsUrl}
          />
          <IconText iconName="star" text="Stars" />
        </HeaderInfoWrapper>
      </HeaderWrapper>
      <DateWrapper>
        <Date label="Created at" time={createdAt} />
        <Date label="Updated at" time={updatedAt} />
      </DateWrapper>
      {description && <h4>{description}</h4>}
      <Files files={Object.values(files)} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  h4 {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

Gist.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string.isRequired,
      raw_url: PropTypes.string.isRequired,
    })
  ),
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatarImageUrl: PropTypes.string.isRequired,
  }),
  forksUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  commentsUrl: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Gist;
