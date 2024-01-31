export interface Card {
  leftNode?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  summary?: React.ReactNode;
  rightNode?: React.ReactNode;
  onClick?: () => void;
}

export type Group = {
  id: string,
  icon?: string;
  title?: string,
  info?: string,
  summary?: string
}

export type Person = {
  id: string;
  avatar?: string;
  name?: string;
  info?: string;
  summary?: string;
}