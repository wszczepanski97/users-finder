import './UserSearchListElementWrapper.css';
export interface UserSearchListElementWrapperProps { children: React.ReactNode };

export const UserSearchListElementWrapper = ({ children }: UserSearchListElementWrapperProps) => (
    <div className="userSearch__listElementWrapper animate__animated animate__pulse animate__delay-15s">
        {children}
    </div>
);