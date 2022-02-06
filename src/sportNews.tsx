import NewsCommand from "./default/newsCommand";

export default function latestNews() {
  return NewsCommand({
    feedUrl: "http://feeds.nos.nl/nossportalgemeen",
  });
}
