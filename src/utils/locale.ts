// https://gist.github.com/realmyst/1262561
export const declOfNum = (number: number, titles: Array<string>) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
