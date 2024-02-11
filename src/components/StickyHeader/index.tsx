import { ReactElement } from 'react';
import * as Styled from './styles'
import Logo from '../Logo';

interface StickyHeaderProps {
    children?: ReactElement<any, any>[];
}
function StickyHeader({ children }: StickyHeaderProps) {
    window.onscroll = () => {
        const header = document.getElementById("myHeader");
        const sticky = header?.offsetTop ?? -1;
        if (window.pageYOffset > sticky) {
            header?.classList.add("sticky");
        } else {
            header?.classList.remove("sticky");
        }
    }

    return <>
        <Styled.Container>
            <Logo spin />
            <div className="header" id="myHeader">
                <nav>
                    <a href="/html/">Sobre</a> |&nbsp; 
                    <a href="/css/">Contato</a> |&nbsp;
                    <a href="/js/">Blog</a>
                </nav>
            </div>
        </Styled.Container>
        {children}
    </>
}

export default StickyHeader;
