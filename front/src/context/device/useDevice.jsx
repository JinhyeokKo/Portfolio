import {useContext} from "react";
import DeviceContext from "./DeviceContext.jsx";

export default function useDevice (){
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error("useDevice must be used within a DeviceProvider");
    }
    return context;
}