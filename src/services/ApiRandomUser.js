import axios from 'axios'

export const getUsers = (total = 5) => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://randomuser.me/api/?results=${total}`)
            resolve(response.data.results)
        } catch (error) {
            reject("Ops, algo deu errado!")
        }

    })


}

