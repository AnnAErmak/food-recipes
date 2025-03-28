import axios from "axios";
import {API_KEY, BASE_URL} from "../consts/api.ts";

export const getRecipes = async () => {
    try {
        const response = await axios.get(`${BASE_URL}complexSearch`, {
            params: {
                apiKey: API_KEY,
                number: 10
            }
        });

        return response.data.results;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка Axios:', error.message);
        } else {
            console.error('Ошибка:', error);
        }
    }
}
