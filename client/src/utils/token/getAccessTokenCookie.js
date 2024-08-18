import { Cookie } from "../../utils/libs"


const getAccessToken = () => {
    try {
        const accessToken = Cookie.get("SP_ACCESS_TOKEN");

        if (!accessToken) {
            return false;
        }

        return accessToken;

    } catch (error) {
        console.error("Access token extraction function error " + error);
        return false;
    }
}

export default getAccessToken;