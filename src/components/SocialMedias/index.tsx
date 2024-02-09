import * as Styled from './styles'
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Icon from './icon'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface SocialMediasProps {
    youtube?: boolean,
    youtubeUrl?: string,
    instagram?: boolean,
    instagramUrl?: string,
    tiktok?: boolean,
    tiktokUrl?: string | undefined
    facebook?: boolean,
    facebookUrl?: string | undefined
    twitter?: boolean,
    twitterUrl?: string | undefined
    size?: SizeProp
}

export default function SocialMedias(props: SocialMediasProps) {
    return <Styled.Container>
        {props.instagram && <Icon icon={faInstagram} size={props.size} link={props.instagramUrl} />}
        {props.youtube && <Icon icon={faYoutube} size={props.size} link={props.youtubeUrl} />}
        {props.tiktok && <Icon icon={faTiktok} size={props.size} link={props.tiktokUrl}/>}
        {props.facebook && <Icon icon={faFacebook} size={props.size} link={props.facebookUrl}/>}
        {props.twitter && <Icon icon={faTwitter} size={props.size} link={props.twitterUrl}/>}
    </Styled.Container>
}