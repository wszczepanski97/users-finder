import './UserSearchListElementName.css';
export interface UserSearchListElementNameProps { name: string; };

export const UserSearchListElementName = ({ name }: UserSearchListElementNameProps) => (
    <span className="userSearch__listElementName" > {name}</span>
);