import { render } from "@testing-library/react";
import UserTitle from "./UserTitle";

describe("UserTitle", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <UserTitle
        imageSrc="https://avatars.githubusercontent.com/u/127468175?v=4"
        name="dubizzle"
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { asFragment } = render(
      <UserTitle
        imageSrc="https://avatars.githubusercontent.com/u/127468175?v=4"
        name="dubizzle"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
