export type Card = {
  type?: "person" | "group",
  size?: number,
  icon?: React.ReactNode,
  title?: string,
  titleColor?: string,
  titleSize?: number,
  info?: string,
  comment?: string,
  rightNode?: React.ReactNode,
}