import { useContext } from "react";
import AppContext from "../../AppContext";
import { UserSearchHeader } from "./UserSearchHeader/UserSearchHeader";
import { UserSearchInput } from "./UserSearchInput/UserSearchInput";
import { UserSearchList } from "./UserSearchList/UserSearchList";
import { UserSearchWrapper } from "./UserSearchWrapper/UserSearchWrapper";
export const UserSearch = () => {
    const appContext = useContext(AppContext);
    return (
        <UserSearchWrapper>
            <UserSearchHeader title="Users List"/>
            <UserSearchInput handleInputChange={appContext!.handleInputChange} />
            <UserSearchList users={appContext!.users}/>
        </UserSearchWrapper>
    );
}
