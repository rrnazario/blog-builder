import { CSSProperties } from 'react'
import RoundedButton from '../RoundedButton'
import * as Styled from './styles'

interface PresentationCardProps {
    pictureUrl?: string,
    title?: string,
    subtitle?: string,
    summary?: string,
    buttonCaption?: string,
    onClick?: (e: any) => void,
    style?: CSSProperties
}

export default function PresentationCard(props: PresentationCardProps) {
    return <Styled.Container onClick={props.onClick} style={props.style} >
        <Styled.LeftPanel>
            <Styled.Picture src={props.pictureUrl} />
        </Styled.LeftPanel>
        <Styled.RightPanel>
            <h2>{props.title}</h2>
            <br />
            {props.subtitle && <>                
                <h4>{props.subtitle}</h4>
                <br />
            </>}
            <p>{props.summary}</p>
            <br />
            <p>{props.summary}</p>
            <br />
            <p>{props.summary}</p>
            <br />
            <RoundedButton caption={props.buttonCaption ?? 'Saiba mais'} style={{
                textAlign: 'center',
                maxWidth: '200px',
                borderRadius: '10px',
                border: '2px solid var(--text-secondary)',
                backgroundColor: 'transparent',
                color: 'black'
            }} />
        </Styled.RightPanel>

    </Styled.Container>
}