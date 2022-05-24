const { searchingString, sum } = require("./script");

const dbMock = [
  "bp.blogspot.com",
  "feedburner.com",
  "vimeo.com",
  "developers.google.com",
  "search.google.com",
  "pt.wikipedia.org",
  "theguardian.com",
  "gravatar.com",
  "mail.ru",
];

describe("searchingString", () => {
  it("this is a silly test should be say Hello", () => {
    expect("Hello").toBe("Hello");
  });

  it("This is a searchingString function", () => {
    expect(searchingString(dbMock, "test")).toStrictEqual([]);
    expect(searchingString(dbMock, "com")).toStrictEqual([
      "bp.blogspot.com",
      "feedburner.com",
      "vimeo.com",
    ]);
    expect(searchingString(dbMock, "bp")).toEqual(["bp.blogspot.com"]);
  });

  it("Work with undefined and null input", () => {
    expect(searchingString(dbMock, undefined)).toEqual([]);
    expect(searchingString(dbMock, null)).toEqual([]);
  });

  it("does not return more than 3 matchs", () => {
    expect(searchingString(dbMock, ".com").length).toEqual(3);
  });
});

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
