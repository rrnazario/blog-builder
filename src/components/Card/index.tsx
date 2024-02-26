import { CSSProperties } from 'react'
import RoundedButton from '../RoundedButton'
import * as Styled from './styles'

interface CardProps {
    pictureUrl?: string,
    title?: string,
    summary?: string[],
    buttonCaption?: string,
    onClick?: (e: any) => void,
    style?: CSSProperties
}

export default function Card(props: CardProps) {
    return <Styled.Container style={props.style} >
        <Styled.TitleContainer>
            <h2>{props.title}</h2>
        </Styled.TitleContainer>

        <Styled.BackgroundImage src={props.pictureUrl} />

        <Styled.MiddleContainer>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px'
            }}>
                {props.summary && props.summary.map((value, index) => <p key={index}>{value}</p>)}
            </div>
            <RoundedButton caption={props.buttonCaption ?? 'Saiba mais'} style={{
                textAlign: 'center'
            }}
                onClick={props.onClick}
            />
        </Styled.MiddleContainer>

    </Styled.Container>
}