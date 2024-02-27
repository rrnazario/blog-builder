import * as Styled from './styles';

interface VideoProps {
    url: string;
}

export default function Video({ url }: VideoProps) {
    return <Styled.Frame
        key={url}
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    />
}
