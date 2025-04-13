import {ContentTitle, Description, ListItem} from "../ui/CommonStyles.jsx";

export default function BlogListItem(props){
    const {blog} = props;
    return (
        <ListItem>
            <ContentTitle>{blog.title}</ContentTitle>
            <Description>{blog.description}</Description>
        </ListItem>
    )
}