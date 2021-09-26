export type Post = {
  meta: {
    author: string;
    title: string;
    url: string;
  };
  category: string;
  comments: number;
  created_at: number;
  upvotes: number;
}

export type OrderByOption = 'Date' | 'Comments'
