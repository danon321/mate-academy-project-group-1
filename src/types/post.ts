export const fullDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const result = `${year}.${month}.${day} time: ${hour}:${minutes}`;

  return result;
};

export interface PostType {
  id: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  date: string;
}
