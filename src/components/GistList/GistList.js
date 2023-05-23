import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LoadingGists, Gist, Empty } from "components";
import { getPublicGists } from "services/gistService";
import {
  setGists,
  startLoadingGists,
  stopLoadingGists,
} from "redux/slices/gistSlice";
import { isEmpty } from "utils/helper";

export const GistList = () => {
  const dispatch = useDispatch();
  const { gists, loadingGists } = useSelector((state) => state.gistsSlice);

  useEffect(() => {
    const getGists = async () => {
      dispatch(startLoadingGists());
      try {
        const { data } = await getPublicGists();
        dispatch(setGists(data));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(stopLoadingGists());
      }
    };

    /**
     * getting gists on mount
     */
    getGists();
  }, []);

  /**
   * Loading UI for gist list
   */
  if (loadingGists) {
    return <LoadingGists count={4} />;
  }

  /**
   * No Gist Found
   */
  if (isEmpty(gists)) {
    return <Empty text="No Gists found" />;
  }

  /**
   * Gist List
   */
  return (
    <GistListWrapper>
      {gists.map((gist) => (
        <Gist {...gist} />
      ))}
    </GistListWrapper>
  );
};

const GistListWrapper = styled.div`
  max-width: 700px;
  margin: 80px auto 0;
`;

export default GistList;
