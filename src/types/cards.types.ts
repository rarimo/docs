export type HomeCard = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  list: React.ReactNode[][];
  url: string;
  after?: JSX.Element;
  className?: string;
};
