import axios from "axios";
import {API_KEY, BASE_URL} from "../consts/api.ts";

export const getRecipe = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}${id}/information`, {
            params: {
                apiKey: API_KEY,
            }
        });

        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка Axios:', error.message);
        } else {
            console.error('Ошибка:', error);
        }
    }
}
