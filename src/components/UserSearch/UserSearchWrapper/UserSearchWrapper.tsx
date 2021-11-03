import { ReactNode } from "react";
import './UserSearchWrapper.css';
interface UserSearchWrapperProps { children: ReactNode }
export const UserSearchWrapper = ({ children }: UserSearchWrapperProps) => <div className="userSearch__wrapper"> {children}</div>;