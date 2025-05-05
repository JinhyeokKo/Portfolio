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

    @media (max-width: 479px) {
        font-size: 1.7rem;
    }
`;

const Description = styled.p`
    margin: 0;
    font-size: 1.2rem;
`;

const Strong = styled.strong`
    font-weight: 700;
`;

const Close = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 30%;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
`

const CloseLink = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    position: absolute;
    top: 70%;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
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

export default function Cover({isLastPage = false}) {
    return (
        <Section id={isLastPage ? "lastCover" : "cover"}>
            {!isLastPage ? (
                <Comment>
                    <Title>배움과 경험을 통해 끊임없이 나아가는 개발자 <Strong>고진혁</Strong>입니다.</Title>
                    <Description>
                        어떤 분야든 만들고 싶은 것이 생기면 스스로 찾아가며 공부하고, 직접 구현하는 과정을 즐깁니다.
                    </Description>
                    <Description>
                        새로운 기술을 배우는 데 주저하지 않으며, 직접 부딪혀 경험하는 것을 중요하게 생각합니다.
                    </Description>
                    <Description>
                        다양한 경험을 통해 계속해서 성장해 나아가고 싶습니다!</Description>
                </Comment>
            ) : (
                <Close>
                    <Comment>
                        <Title>봐주셔서 감사합니다!</Title>
                        <Description>
                            기술을 익히는 것에서 그치지 않고, 그 기술로 가치를 만들어내는 개발자가 되겠습니다.
                        </Description>
                        <Description>
                            언제나 배움의 자세로, 더 나은 내일을 위해 노력하겠습니다.
                        </Description>
                    </Comment>
                    <CloseLink>
                        <LinkItem>
                            <StyledExternalLink href="https://github.com/JinhyeokKo" target="_blank"
                                                rel="noopener noreferrer">Github</StyledExternalLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledExternalLink href="https://jinhyeokko.github.io/" target="_blank"
                                                rel="noopener noreferrer">Blog</StyledExternalLink>
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
            )}
        </Section>
    );
}