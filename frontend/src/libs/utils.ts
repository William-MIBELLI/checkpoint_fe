function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char, ind) =>  127397 + char.charCodeAt(ind));
  return String.fromCodePoint(...codePoints);
}