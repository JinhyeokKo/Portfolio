import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {WavyRectButton, WavyRingButton} from "../ui/WavyButton.jsx";
import {getAnimation} from "../../styles/animation.jsx";
import styled from "styled-components";
import useFadeAnimation from "../../styles/useFadeAnimation.jsx";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: ${(props) => {
        return getAnimation(props.$animation)
    }};
`;

const ItemSet = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    position: relative;
`
const NameBox = styled.div`
    font-size: 2rem;
    font-weight: 400;
    position: absolute;
    top: 2rem;
    left: 2rem;
`;

const ColorBox = styled.div`
    font-size: 2rem;
    font-weight: 400;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
`;

const ButtonBox = styled.div`
    display: flex;
    position: absolute;
    bottom: 2rem;
    gap: 1rem;
`

const ColorBoxSet = styled.div`
    display: flex;
`

const ColorSampleBox = styled.div`
    background: ${(props) => props.$color};
    height: 1rem;
    width: 1rem;
`

const colorPairs = [
    {base: "#74ebd5", hover: "#26c6da"},
    {base: "#ffb347", hover: "#ff8f00"},
    {base: "#f78ca0", hover: "#ec407a"},
    {base: "#a18cd1", hover: "#7e57c2"},
    {base: "#43e97b", hover: "#00c853"},
    {base: "#3064d0", hover: "#0064c1"},
];

const routes = ['/profile', '/project', '/blog', '/github', '/resume', '/feedback'];

export default function Menu() {
    const [isWide, setIsWide] = useState(window.innerWidth >= window.innerHeight);
    const navigate = useNavigate();
    const [buttonColors, setButtonColors] = useState([0, 1, 2, 3, 4, 5]);
    const [visible, setVisible] = useState(true);
    const { animation, triggerFadeOut } = useFadeAnimation();

    useEffect(() => {
        const handleResize = () => {
            setIsWide(window.innerWidth >= window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleColorChange = () => {
        setVisible(false); // 사라지기
        setTimeout(() => {
            // 각 버튼마다 다른 색상으로 변경
            setButtonColors(prev =>
                prev.map(colorIdx => (colorIdx + 1) % colorPairs.length)
            );
            setVisible(true); // 다시 등장
        }, 300);
    };

    const shuffleColors = () => {
        setVisible(false);
        setTimeout(() => {
            const shuffled = [...Array(6)].map(() =>
                Math.floor(Math.random() * colorPairs.length)
            );
            setButtonColors(shuffled);
            setVisible(true);
        }, 300);
    };

    const rows = isWide ? [[0, 1, 2], [3, 4, 5]] : [[0, 1], [2, 3], [4, 5]];

    return (
        <Container $animation={animation}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{position: 'relative', marginBottom: '2rem'}}>
                    <ItemSet>
                        {row.map((i) => {
                            const isGithub = routes[i] === '/github';
                            const label = routes[i] ? routes[i].replace('/', '') : 'Soon';
                            const button = (
                                <WavyRectButton
                                    key={i}
                                    onClick={() => {
                                        if (!isGithub && routes[i]) {
                                                triggerFadeOut(() => navigate(routes[i]));
                                        }
                                    }}
                                    label={label}
                                    color={colorPairs[buttonColors[i]]}
                                    visible={visible}
                                />
                            );

                            return isGithub ? (
                                <a key={i} href="https://github.com/JinhyeokKo" target="_blank" rel="noopener noreferrer">
                                    {button}
                                </a>
                            ) : (
                                button
                            );
                        })}
                    </ItemSet>
                </div>
            ))}
            <ButtonBox>
                <WavyRingButton onClick={handleColorChange} label={"cycle"} color={colorPairs[buttonColors[0]]}
                                visible={true}/>
                <WavyRingButton onClick={shuffleColors} label={"random"} color={colorPairs[buttonColors[2]]}
                                visible={true}/>
            </ButtonBox>
            <ColorBox>
                {colorPairs.map((i, colorIdx) => (
                    <ColorBoxSet key={colorIdx}>
                        <ColorSampleBox $color={i.base}></ColorSampleBox>
                        <ColorSampleBox $color={i.hover}></ColorSampleBox>
                    </ColorBoxSet>
                ))}
            </ColorBox>
            <NameBox>Jinhyeok Portfolio</NameBox>
        </Container>
    )
}