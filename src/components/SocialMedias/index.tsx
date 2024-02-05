import * as Styled from './styles'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Icon from './icon'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface SocialMediasProps {
    youtube?: boolean,
    instagram: boolean,
    tiktok?: boolean,
    facebook?: boolean,
    twitter?: boolean,
    size?: SizeProp
}

export default function SocialMedias(props: SocialMediasProps) {
    return <Styled.Container>
        {props.instagram && <Icon icon={faInstagram} size={props.size} />}
        {props.youtube && <Icon icon={faYoutube} size={props.size} />}
    </Styled.Container>
}