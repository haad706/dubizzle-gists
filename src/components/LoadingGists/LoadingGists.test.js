import { render } from "@testing-library/react";
import LoadingGists from "./LoadingGists";

describe("LoadingGists", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LoadingGists />);
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { asFragment } = render(<LoadingGists />);
    expect(asFragment()).toMatchSnapshot();
  });
});
