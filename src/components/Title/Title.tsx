type TitleType = {
  message: string
}

export const Title = ({ message }: TitleType) => {
  return <h1>{ message }</h1>
}
