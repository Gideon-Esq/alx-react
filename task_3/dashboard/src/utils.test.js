// utils.test.js
/*in task_3/dashboard/src/utils.test.js:

Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
Write a test to check that getFooterCopy returns the correct string when the argument is true or false
Write a test checking the returned string for getLatestNotification
*/
import utils from "./utils";

describe("Utils Functions", () => {
  // Test for getFullYear function
  describe("getFullYear", () => {
    it("should return the current year", () => {
      const currentYear = 2024;
      const mockDate = new Date(2024, 0, 1);
      const originalDate = global.Date;
      global.Date = jest.fn(() => mockDate);

      expect(utils.getFullYear()).toBe(currentYear);

      global.Date = originalDate;
    });
  });

  // Test for getFooterCopy function
  describe("getFooterCopy", () => {
    it("should return the correct string for true argument", () => {
      expect(utils.getFooterCopy(true)).toBe("ALX");
    });

    it("should return the correct string for false argument", () => {
      expect(utils.getFooterCopy(false)).toBe("ALX main dashboard");
    });
  });

  // Test for getLatestNotification function
  describe("getLatestNotification", () => {
    it("should return the correct string", () => {
      const expectedNotification = (
        <span>
          <strong>Urgent requirement</strong> - complete by EOD
        </span>
      );
      expect(utils.getLatestNotification()).toEqual(expectedNotification);
    });
  });
});
