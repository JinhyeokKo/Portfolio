import styled from "styled-components";
import {
    siHtml5,
    siCss3,
    siJavascript,
    siReact,
    siVite,
    siStyledcomponents,
    siSpringboot,
    siMysql,
    siSqlite,
    siEspressif,
    siStmicroelectronics,

} from "simple-icons";
import {useEffect, useState} from "react";

const back = [
    siSpringboot,
    siMysql,
    siSqlite,
];

const front = [
    siHtml5,
    siCss3,
    siJavascript,
    siReact,
    siVite,
    siStyledcomponents,
]

const mcu = [
    siEspressif,
    siStmicroelectronics,
]

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
    @media (max-width: 479px){
        gap: 1rem;
    }
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: ${props => props.theme.textColor};
`;

const IconSvg = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
    @media (max-width: 479px) {
        width: 2rem;
        height: 2rem;
    }
`;

export default function TechIcons ({category}) {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        if(category==="front"){
            setIcons(front);
        }else if(category==="back"){
            setIcons(back);
        }else if(category==="mcu"){
            setIcons(mcu);
        }else{
            setIcons([]);
        }
    },[category])

    return (
        <IconWrapper>
            {icons.map((icon) => (
                <IconItem key={icon.title}>
                    <IconSvg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill={`#${icon.hex}`}
                    >
                        <title>{icon.title}</title>
                        <path d={icon.path} />
                    </IconSvg>
                    {icon.title}
                </IconItem>
            ))}
        </IconWrapper>
    );
};
