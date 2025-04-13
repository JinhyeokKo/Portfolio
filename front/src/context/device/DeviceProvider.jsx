import DeviceContext from "./DeviceContext.jsx";
import useInputMethod from "./useInputMethod.jsx";

export default function DeviceProvider ({ children }) {
    const inputMethod = useInputMethod();
    return (
        <DeviceContext.Provider value={{inputMethod}}>
            {children}
        </DeviceContext.Provider>
    );
};