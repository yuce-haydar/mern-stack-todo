import axios from "axios";

const APİ_URL='/api/kullanicilar/' //apimizin uri

const register=async(kullaniciData)=>{
    const response=await axios.post(APİ_URL,kullaniciData);

    if(response.data){//response içinde data bilgisi varsa yazacaz local storageye 
        localStorage.setItem('kullanici',JSON.stringify(response.data))

    }
    return response.data
}

const authService={
    register
}

export default authService