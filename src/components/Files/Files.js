import styled from "styled-components";
import { IconText } from "components";
import { isEmpty } from "utils/helper";
export const Files = ({ files }) => {
  /**
   * incase of no files
   */
  if (isEmpty(files)) {
    return <p>No files found</p>;
  }

  return (
    <FilesWrapper>
      {files.map(({ filename, raw_url: rawUrl }) => (
        <IconText
          iconName="file"
          link={rawUrl}
          text={filename}
          key={filename}
        />
      ))}
    </FilesWrapper>
  );
};

const FilesWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;
  flex-wrap: wrap;
`;

export default Files;
