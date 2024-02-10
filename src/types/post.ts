import { User } from './user';

export type Post = {
  id: number;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  date: Date;
  image: File | null;
  category: string;
  user: User;
  tags?: string[];
};
