import { CSSProperties } from 'react'
import RoundedButton from '../RoundedButton'
import * as Styled from './styles'

interface PresentationCardProps {
    pictureUrl?: string,
    title?: string,
    subtitle?: string,
    summary?: string[],
    buttonCaption?: string,
    onClick?: (e: any) => void,
    style?: CSSProperties
}

export default function PresentationCard(props: PresentationCardProps) {
    return <Styled.Container style={props.style} >
        <Styled.LeftPanel>
            <Styled.Picture src={props.pictureUrl} />
        </Styled.LeftPanel>
        <Styled.RightPanel>
            <h2>{props.title}</h2>
            {props.subtitle && <>
                <h4>{props.subtitle}</h4>
                <br />
            </>}
            {props.summary && props.summary.map((value, index) => <><p key={index}>{value}</p></>)}
            <RoundedButton caption={props.buttonCaption ?? 'Saiba mais'} style={{
                textAlign: 'center',
                maxWidth: '200px',
                borderRadius: '10px',
                border: '2px solid var(--text-secondary)',
                backgroundColor: 'transparent',
                color: 'black'
            }}
                onClick={props.onClick}
            />
        </Styled.RightPanel>

    </Styled.Container>
}