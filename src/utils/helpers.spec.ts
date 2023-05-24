import { DEBOUNCE_TIMEOUT } from "./constants";
import { debounceFunction, getFormattedDate, isEmpty } from "./helper";

const mockFunction = jest.fn();

describe("debounceFunction", () => {
  it("should call debounce callback function after delay and only once", () => {
    /**
     * Use fake timers
     */
    jest.useFakeTimers();

    /**
     * Create an instance of the debounce function
     */
    const debounce = debounceFunction();

    /**
     * Invoke the debounce function multiple times within the delay period
     */
    debounce(mockFunction);
    debounce(mockFunction);
    debounce(mockFunction);

    /**
     * Ensure that the mock function is not called immediately
     */
    expect(mockFunction).not.toBeCalled();

    /**
     * Advance timers by the debounce timeout
     */
    jest.advanceTimersByTime(DEBOUNCE_TIMEOUT);

    /**
     * Ensure that the mock function is called only once after the delay
     */
    expect(mockFunction).toBeCalledTimes(1);

    /**
     * Restore original timers
     */
    jest.useRealTimers();
  });
});

describe("getFormattedDate", () => {
  it("should return formatted date", () => {
    const formattedDate = getFormattedDate("2023-05-24T06:51:40Z");
    expect(formattedDate).toBe("24/05/2023");
  });
});

describe("isEmpty", () => {
  it("should return true when undefined is passed", () => {
    let name;
    expect(isEmpty(name)).toBe(true);
  });

  it("should return false when name is passed", () => {
    const name = "javascript";
    expect(isEmpty(name)).toBe(false);
  });

  it("should return true when variable passed is null", () => {
    const address = null;
    expect(isEmpty(address)).toBe(true);
  });

  it("should return true when variable passed is empty object", () => {
    const address = {};
    expect(isEmpty(address)).toBe(true);
  });

  it("should return false when variable passed is not null", () => {
    const address = {
      addressLine: "PECHS block 2",
      city: "Karachi",
      zipCode: "12000",
    };
    expect(isEmpty(address)).toBe(false);
  });

  it("should return true when empty array passed", () => {
    const rollNumbers = [];
    expect(isEmpty(rollNumbers)).toBe(true);
  });

  it("should return false when empty array passed", () => {
    const rollNumbers = [2001, 2003, 2005, 2007];
    expect(isEmpty(rollNumbers)).toBe(false);
  });
});
