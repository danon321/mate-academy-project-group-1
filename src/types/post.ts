import { User } from './user';

export type Post = {
  id: number;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  date: Date;
  image: string | null;
  // userId: number;
  user: User;
};
