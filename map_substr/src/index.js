import emojipedia from "./emojipedia";

const emojiMeanings = emojipedia.map((x) => x.meaning);
const truncated = emojiMeanings.map((meaning) => meaning.substr(0, 100));
console.log(truncated);

