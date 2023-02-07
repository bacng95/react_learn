import JwtService from "./jwtService";

export default function axiosIntance(overrideConfig) {
    const axios = new JwtService(overrideConfig)

    return {
        axios
    }
}