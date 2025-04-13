import {lazy, Suspense, useEffect, useState} from "react";
import Intro from "./components/pages/Intro.jsx";
import {GlobalStyles} from "./components/ui/Global.jsx";
import RootProvider from "./context/RootProvider.jsx";

const Router = lazy(() => import("./router/Router.jsx"));

export default function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        import("./router/Router.jsx");
    }, []);

    return (
        <RootProvider>
            <GlobalStyles/>
            {
                showIntro ? (
                    <Intro onFinish={() => setShowIntro(false)}/>
                ) : (<Suspense fallback={null}>
                        <Router/>
                    </Suspense>

                )
            }
        </RootProvider>
    )
}
