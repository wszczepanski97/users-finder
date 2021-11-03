import { User } from "../../../fetchRequest";
import { UserSearchListElement } from "./UserSearchListElement/UserSearchListElement";
import './UserSearchList.css';
interface UserSearchListProps { users: User[]; }

export const UserSearchList = ({ users }: UserSearchListProps) => (
    <ul className="userSearch__list">{users.map(item => <UserSearchListElement key={item.id} item={item} />)}</ul>
);