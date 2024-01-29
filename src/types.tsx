export type Card = {
  type?: "person" | "group",
  size?: number,
  icon?: string,
  title?: string,
  titleSize?: number,
  info?: string,
  comment?: string,
}