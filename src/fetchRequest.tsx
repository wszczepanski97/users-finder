export const fetchUsers = (inputEvent?: React.ChangeEvent<HTMLInputElement>) => (
    fetch(inputEvent ? `https://jsonplaceholder.typicode.com/users?name=${inputEvent.target.value}` : "https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
);

export interface User {
    id: number;
    name: string;
    username: string;
}