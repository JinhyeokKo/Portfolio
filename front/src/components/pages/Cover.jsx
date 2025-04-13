import styled from "styled-components";
import {Link} from "react-router-dom";
import ClipboardCopy from "../common/ClipboardCopy.jsx";

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 400;
`;

const Description = styled.p`
    margin: 0;
    font-size: 1.2rem;
`;

const Close = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`

const CloseComment = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const CloseLink = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const LinkItem = styled.span`
    display: inline-block;
    margin: 0 1rem;
    padding-bottom: 0.3rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.textColor};
`

const StyledLink = styled(Link)`
    color: ${(props) => props.theme.textColor};
`

const StyledExternalLink = styled.a`
    color: ${(props) => props.theme.textColor};
`

const Footer = styled.footer`
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    color: #aaa;
`

export default function Cover() {
    return (
        <Section id="cover">
                <Close>
                    <CloseComment>
                        <Title>봐주셔서 감사합니다!</Title>
                        <Description>
                            기술을 익히는 것에서 그치지 않고, 그 기술로 가치를 만들어내는 개발자가 되겠습니다.
                        </Description>
                        <Description>
                            언제나 배움의 자세로, 더 나은 내일을 위해 노력하겠습니다.
                        </Description>
                    </CloseComment>
                    <CloseLink>
                        <LinkItem>
                            <StyledExternalLink href="https://github.com/JinhyeokKo" target="_blank"
                                                rel="noopener noreferrer">Github</StyledExternalLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="/blog">Blog</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="/">Resume</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <ClipboardCopy/>
                        </LinkItem>
                    </CloseLink>
                    <Footer>
                        Jinhyeok Ko
                    </Footer>
                </Close>
        </Section>
    );
}