import { createContext } from 'react';
import { User } from './fetchRequest';
interface AppContextInterface {
    users: User[];
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;