import { CSSProperties } from 'react'
import RoundedButton from '../RoundedButton'
import * as Styled from './styles'

interface CardProps {
    pictureUrl?: string,
    title?: string,
    summary?: string,
    buttonCaption?: string,
    onClick?: (e: any) => void,
    style?: CSSProperties
}

export default function Card(props: CardProps) {
    return <Styled.Container onClick={props.onClick} style={props.style} >
        <Styled.TitleContainer>
            <h2>{props.title}</h2>
        </Styled.TitleContainer>

        <Styled.BackgroundImage src={props.pictureUrl} />

        <Styled.MiddleContainer>
            <p>{props.summary}</p>
            <RoundedButton caption={props.buttonCaption ?? 'Saiba mais'} style={{
                textAlign: 'center'
            }} />
        </Styled.MiddleContainer>

    </Styled.Container>
}