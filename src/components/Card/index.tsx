import RoundedButton from '../RoundedButton'
import * as Styled from './styles'

interface CardProps {
    pictureUrl?: string,
    title?: string,
    summary?: string,
    buttonCaption?: string,
    onClick?: (e: any) => void,
}

export default function Card(props: CardProps) {
    return <Styled.Container backgroundUrl={props.pictureUrl} onClick={props.onClick}  >
        <h2>{props.title}</h2>

        <Styled.SummaryContainer>
            <p>{props.summary}</p>
            <RoundedButton caption={props.buttonCaption ?? 'Saiba mais'} style={{
                textAlign: 'center'
            }}/>
        </Styled.SummaryContainer>

    </Styled.Container>
}