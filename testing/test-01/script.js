const websiteDatabase = [
  "apple.com",
  "youtube.com",
  "google.com",
  "blogger.com",
  "microsoft.com",
  "play.google.com",
  "support.google.com",
  "linkedin.com",
  "maps.google.com",
  "en.wikipedia.org",
  "wordpress.org",
  "docs.google.com",
  "cloudflare.com",
  "mozilla.org",
  "youtu.be",
  "drive.google.com",
  "sites.google.com",
  "googleusercontent.com",
  "plus.google.com",
  "accounts.google.com",
  "whatsapp.com",
  "adobe.com",
  "europa.eu",
  "github.com",
  "es.wikipedia.org",
  "vk.com",
  "istockphoto.com",
  "uol.com.br",
  "facebook.com",
  "amazon.com",
  "t.me",
];

// searching algorithms
const searchingString = (databaseName, searchInput) => {
  const matches = databaseName.filter((eachItem) => {
    return eachItem.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(searchingString(websiteDatabase, "z"));
