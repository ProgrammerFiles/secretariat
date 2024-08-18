import { apiService } from "../../config";



const AuthCheck = async (accessToken) => {
    try {
        if (!accessToken) {
            console.error("No accessToken given to AuthCheck function ");
            return false;
        }

        

        const response = await apiService.checkAuth;
        console.log(response);


    } catch (error) {
        console.error("Authentication function Error " + error);
        return false;
    }
}
 
export default AuthCheck;