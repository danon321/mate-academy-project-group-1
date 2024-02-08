export const randomId = (idLength: number) => {
  const availableChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    randomString += availableChars.charAt(randomIndex);
  }

  return Number(randomString);
};
