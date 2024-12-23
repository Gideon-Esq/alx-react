//dummy test
RTCDTMFSender.prototype.insertDTMF = function (dtmf) {
  this.insertDTMF(dtmf);
};

describe("getFullYear", () => {
  it("should return the current year", () => {
    const date = new Date();
    expect(getFullYear(date)).toBe(date.getFullYear());
  });
});
