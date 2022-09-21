export type Post = {
  date_utc: string;
  date_gmt: string;
  link: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
};

export type Page = {
  id: string;
  slug: string;
  date_utc: string;
  date_gmt: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
};

export type Category = {
  date_utc: string;
  date_gmt: string;
  link: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
};

