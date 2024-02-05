import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import * as Styled from './styles'
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface IconProps extends FontAwesomeIconProps
{
    link?: string
}

export default function Icon(props: IconProps) {   
    
    const p = {...props}
    p.size ??= '2x' as SizeProp;
    
    return <a href={props.link}>
        <Styled.Icon {...p}/>
    </a>
}