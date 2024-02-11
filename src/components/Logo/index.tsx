import * as Styled from './styles'

interface LogoProps {
  /** Configures a spin logo */
  spin?: boolean,
}

function Logo({ spin }: LogoProps) {
  return <Styled.Container $spin={spin}>
      <img src='/logo.png' alt="Logo" />
    </Styled.Container>;
}

export default Logo;
