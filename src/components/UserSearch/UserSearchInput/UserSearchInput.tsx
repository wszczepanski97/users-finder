import './UserSearchInput.css'
interface UserSearchInputProps { handleInputChange: React.ChangeEventHandler<HTMLInputElement> }
export const UserSearchInput = ({ handleInputChange }: UserSearchInputProps) => (
    <input type="text" placeholder="Search by user name..." className="userSearch__input" onChange={(e) => handleInputChange(e)} />
);