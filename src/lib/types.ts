export type WorkType = {
  title: string;
  name: string;
  subtitle: string;
  pictures: {
    data: {
      url: string;
    }[];
  };
  slug: string;
  cover: {
    url: string;
  };
};

export type PictureType = {
  url: string;
}

export type ExpertiseType = {
  title: string;
  description: string;
  cover: {
    url: string;
  };
};

export type NavbarType = {
  Links: LinkType[];
};

export type LinkType = {
  url: string;
  Label: string;
};
