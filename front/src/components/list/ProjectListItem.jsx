import {Button, ContentTitle, Description, Item} from "../ui/CommonStyles.jsx";
import {useState} from "react";
import Modal from "../ui/Modal.jsx";
import {Markdown} from "../ui/Markdown.jsx";



export default function ProjectListItem(props) {
    const {project} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Item>
                <Button onClick={() => setIsModalOpen(true)}>자세히 보기</Button>
                <ContentTitle>{project.title}</ContentTitle>
                <Description>{project.description}</Description>
            </Item>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Markdown url={project.url}/>
            </Modal>
        </>
    )
}