import {ContentTitle, Description, Item} from "../ui/CommonStyles.jsx";
import styled from "styled-components";
import useDevice from "../../context/device/useDevice.jsx";

const Button = styled.button`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    background: none;
    border: solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
    border-top: 1px;
    border-left: 1px;
    border-radius: 0;
`;

const Img = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    max-height: 50%;
`

const Text = styled.div`
    position: absolute;
    top: 50%;
`

const Tag = styled.span`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow: 0 0.1rem 0.1rem 0 ${(props) => props.theme.boxShadow};
    background: ${(props) => props.theme.boxBackground};
    padding: 0 0.5rem 0.25rem;
    border-radius: 0.3rem;
`

export default function ProjectListItem(props) {
    const {project} = props;
    const { inputDevice } = useDevice();
    const isTouchDevice = inputDevice === 'touch';

    const handleOpenModal = () => {
        if (props.onOpenModal) {
            props.onOpenModal(project);
        }
    };

    return (
        <>
            <Item $isTouchDevice={isTouchDevice}>
                <Img src={project.logo}/>
                <Button onClick={handleOpenModal}>Details</Button>
                <Tag>{project.tag}</Tag>
                <Text>
                    <ContentTitle>{project.title}</ContentTitle>
                    <Description>{project.description}</Description>
                </Text>
            </Item>
        </>
    )
}