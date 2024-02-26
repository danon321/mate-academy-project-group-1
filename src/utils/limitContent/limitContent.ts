export const limitContent = (content: string, maxChars: number) => {
  if (content.length > maxChars) {
    return content.slice(0, maxChars) + '...';
  }
  return content;
};
