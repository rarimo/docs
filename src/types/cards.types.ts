export type HomeCard = {
  id?: string
  title: string
  IconName: React.ComponentType<React.ComponentProps<'svg'>>
  list: React.ReactNode[][]
  url: string
  after?: JSX.Element
  className?: string
}
