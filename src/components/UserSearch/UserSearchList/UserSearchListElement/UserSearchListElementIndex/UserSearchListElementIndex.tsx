import './UserSearchListElementIndex.css';
export interface UserSearchListElementIndexProps { id: number; };

export const UserSearchListElementIndex = ({ id }: UserSearchListElementIndexProps) => (
    <span className="userSearch__listElementIndex">{id}</span>
);