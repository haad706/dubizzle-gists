import { render } from "@testing-library/react";
import Date from "./Date";

describe("Date", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Date time="2023-05-24T06:51:40Z" label="Created At" />
    );
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { asFragment } = render(
      <Date time="2023-05-24T06:51:40Z" label="Created At" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
