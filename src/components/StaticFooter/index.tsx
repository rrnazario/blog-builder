import * as Styled from './styles'
import Logo from '../Logo';

interface StaticFooterProps {
    spinLogo?: boolean;
}

function StaticFooter({ spinLogo }: StaticFooterProps) {
    return <Styled.Container>
        <Logo spin={spinLogo} />
        <Styled.DevFooter>
            <p>2024</p>
            <p>Desenvolvido por <a href='http://t.me/rrnazario' target='_blank' rel="noreferrer">ZarioSoft</a></p>
        </Styled.DevFooter>
    </Styled.Container>
}

export default StaticFooter;
