import * as Styled from './styles'
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Icon from './icon'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface SocialMediasProps {
    youtubeUrl?: string,
    instagramUrl?: string,
    tiktokUrl?: string | undefined
    facebookUrl?: string | undefined
    twitterUrl?: string | undefined
    whatsappUrl?: string | undefined
    size?: SizeProp
}

export default function SocialMedias(props: SocialMediasProps) {
    return <Styled.Container>
        {props.instagramUrl && <Icon icon={faInstagram} size={props.size} link={props.instagramUrl} title='Instagram' />}
        {props.youtubeUrl && <Icon icon={faYoutube} size={props.size} link={props.youtubeUrl} title='Youtube' />}
        {props.tiktokUrl && <Icon icon={faTiktok} size={props.size} link={props.tiktokUrl} title='TikTok'/> }
        {props.facebookUrl && <Icon icon={faFacebook} size={props.size} link={props.facebookUrl} title='Facebook'/>}
        {props.twitterUrl && <Icon icon={faTwitter} size={props.size} link={props.twitterUrl} title='Twitter'/>}
        {props.whatsappUrl && <Icon icon={faWhatsapp} size={props.size} link={props.whatsappUrl} title='Whatsapp'/>}
    </Styled.Container>
}