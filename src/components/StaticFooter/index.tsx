import * as Styled from './styles'
import Logo from '../Logo';

interface StaticFooterProps {
    spinLogo?: boolean;
}

function StaticFooter({ spinLogo }: StaticFooterProps) {
    return <Styled.Container>
        <Logo spin={spinLogo} />
        <Styled.Detail>
            <p>ecusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                consequuntur! </p>
        </Styled.Detail>
        <h3>...</h3>

        <Styled.DevFooter>
            <p>2024 - Desenvolvido por <a href='https://linktr.ee/zariosoft' target='_blank' rel="noreferrer">ZarioSoft</a></p>
        </Styled.DevFooter>
    </Styled.Container>
}

export default StaticFooter;
