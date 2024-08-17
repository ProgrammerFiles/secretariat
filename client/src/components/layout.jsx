import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { styled } from "@mui/system";


const LayoutContainer = styled(Container)(({ theme }) => ({
    border: '1px solid blue',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
}))


const Layout = () => {
    return ( 
        <LayoutContainer disableGutters maxWidth="xxl">
            <Outlet/>
        </LayoutContainer>
     );
}
 
export default Layout;