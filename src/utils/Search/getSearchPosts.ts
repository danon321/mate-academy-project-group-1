import { Post } from '../../types/post';

export const getSearchPosts = (
  posts: Post[],
  search: string | null,
) => {
  let filtered = posts;
  let filterQuery;

  if (search) {
    filterQuery = filtered
      .filter(post => post.title.toLowerCase()
        .includes(search.toLowerCase() || ''));
    filtered = filterQuery;
  }

  return filtered;
};