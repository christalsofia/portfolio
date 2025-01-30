export interface CustomButtonProps {
  icon?: React.ReactNode
  title?: string
  containerStyles?: string
  handleClick?: () => void
}

export interface ProjectListProps {
  title: string
  description: string
  tags: string[]
  image: string
  alt: string
  link: string
}