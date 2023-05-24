import dayjs from "dayjs";
import { DATE_FORMAT, DEBOUNCE_TIMEOUT } from "utils/constants";

/**
 * Responsible for debounce
 */
export const debounceFunction = () => {
  let timeoutInstance = null;
  return (callback) => {
    /**
     * clearing old timeout if any
     */
    if (timeoutInstance) clearTimeout(timeoutInstance);
    timeoutInstance = setTimeout(callback, DEBOUNCE_TIMEOUT);
  };
};

/**
 * it will create a closure for timeoutInstance since invoked already
 */
export const debounce = debounceFunction();

/**
 * Responsible to return formatted date in "DD/MM/YYYY" format
 * @param {string} time - time locale from API
 * @return {string} formatted date
 */
export const getFormattedDate = (time) => dayjs(time).format(DATE_FORMAT);

/**
 * Responsible to return if given value is empty or not
 * able to check for multiple data types
 * @param {any} value - value that needs to be checked
 * @return {boolean} true/false based on emptiness
 */
export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
