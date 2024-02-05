import * as Styled from './styles'

interface RoundedButtonProps {
    caption: string,
    onClick?: (e: any) => void,
}

export default function RoundedButton({ onClick, caption }: RoundedButtonProps) {
    return <Styled.Container onClick={onClick}>{caption}</Styled.Container>
}