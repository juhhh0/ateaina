export type Work = {
  title: string;
  slug: string;
  cover: {
    url: string;
  };
};

export type Expertise = {
  title: string;
  description: string;
  cover: {
    url: string;
  };
};

export type NavbarType = {
  Links: LinkType[];
}

export type LinkType = {
  url: string;
  Label: string;
};
