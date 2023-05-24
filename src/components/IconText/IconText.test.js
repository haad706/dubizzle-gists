import { render } from "@testing-library/react";
import IconText from "./IconText";

describe("IconText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<IconText iconName="code" text="Code" />);
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { asFragment } = render(<IconText iconName="code" text="Code" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
