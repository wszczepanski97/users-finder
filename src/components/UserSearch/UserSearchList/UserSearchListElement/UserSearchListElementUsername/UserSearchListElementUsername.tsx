import './UserSearchListElementUsername.css';
export interface UserSearchListElementUsernameProps { username: string; };

export const UserSearchListElementUsername = ({ username }: UserSearchListElementUsernameProps) => (
        <span className="userSearch__listElementUsername">
            {`@${username}`}
        </span>
);