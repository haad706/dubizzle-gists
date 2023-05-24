import { render } from "@testing-library/react";
import Empty from "./Empty";

describe("Empty", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Empty text="No data found" />);
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { asFragment } = render(<Empty text="No data found" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
