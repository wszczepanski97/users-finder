import { User } from "../../../../fetchRequest";
import { UserSearchListElementIndex } from "./UserSearchListElementIndex/UserSearchListElementIndex";
import { UserSearchListElementName } from "./UserSearchListElementName/UserSearchListElementName";
import { UserSearchListElementUsername } from "./UserSearchListElementUsername/UserSearchListElementUsername";
import { UserSearchListElementWrapper } from "./UserSearchListElementWrapper /UserSearchListElementWrapper";
import 'animate.css';
interface UserSearchListElementProps { item: User; }
export const UserSearchListElement = ({ item: {id, name, username} }: UserSearchListElementProps) => (
    <UserSearchListElementWrapper>
        <UserSearchListElementIndex id={id} />
        <UserSearchListElementName name={name} />
        <UserSearchListElementUsername username={username} />
    </UserSearchListElementWrapper>
);