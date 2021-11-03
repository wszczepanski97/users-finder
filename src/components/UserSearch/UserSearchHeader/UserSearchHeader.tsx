interface UserSearchHeaderProps { title: string; }
export const UserSearchHeader = ({ title }: UserSearchHeaderProps) => <h1 style={{fontFamily:'monospace', fontSize: 30}}>{title}</h1>;