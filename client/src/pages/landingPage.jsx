import { Container } from "@mui/material";
import { styled } from "@mui/system";
import images from "../assets";
import { SigninForm } from "../components";


const LandingPageContainer = styled(Container)(({ theme }) => ({
    border: '1px solid red',
    height: '100vh',
    backgroundImage: `url(${images['splogo']})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    display: 'flex',
    alignItems: 'center',
}))


const LandingPage = () => {
    return ( 
        <LandingPageContainer>
            <SigninForm/>
        </LandingPageContainer>
     );
}
 
export default LandingPage;