import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loading } from "./Loading";

export const AppLayout = () => {
    const navigation = useNavigation();
    // console.log(navigation);

    if (navigation.state === "loading") return <Loading />

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}