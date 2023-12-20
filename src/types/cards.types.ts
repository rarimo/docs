export type Card = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  list: (string | JSX.Element)[][];
  url: string;
  after?: JSX.Element;
  className?: string;
};
