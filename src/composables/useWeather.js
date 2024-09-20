//este archivo llama al helper q hace la llamada a la api y actualiza store
import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

export const useWeather = async () => {
    const temperatura = await getTemperatura();
    const weatherStore = useWeatherStore()
    weatherStore.temperatura = temperatura
}