import styled from "styled-components";

const Button = styled.button`
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.textColor};
    background: none;
    border: none;
    
    &:hover {
        color: #505af2;
    }
`

export default function ClipboardCopy () {
    const email = 'jinhyeok.ko@outlook.kr';

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert('이메일이 클립보드에 복사되었습니다!');
        }).catch((error) => {
            alert('복사 실패: ' + error);
        });
    };

    return (
        <div>
            <Button onClick={handleCopy}>
                Email
            </Button>
        </div>
    );
};
