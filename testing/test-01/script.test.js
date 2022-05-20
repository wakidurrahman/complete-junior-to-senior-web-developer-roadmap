// const searchingString = require("./script");
const { sum, searchingString } = require("./script");

dbMock = [
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

it("This is a test", () => {
  expect("hello").toBe("hello");
});

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
