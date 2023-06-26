import {createContext, useState} from 'react'
export const MyContext = createContext();
export function MyContextProvider({children}) {
    const [sharedState, setSharedState] = useState(false);
    const toggleShareBoolean = () => {
        setSharedState((prevState) => !prevState);
    };

    return (
        <MyContext.Provider value={{sharedState, toggleShareBoolean}}>
            {children}
        </MyContext.Provider>
    )
}