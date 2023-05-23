import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "redux/store";
import { GistList, Header } from "components";
import GlobalStyles from "GlobalStyle";

const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Provider store={store}>
        <Header />
        <GlobalStyles />
        <GistList />
      </Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
