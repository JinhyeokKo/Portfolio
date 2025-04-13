import ThemeProvider from './theme/ThemeProvider';
import DeviceProvider from './device/DeviceProvider';

export default function RootProvider({ children }) {
    return (
        <DeviceProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </DeviceProvider>
    );
}