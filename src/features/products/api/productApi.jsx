import { api } from "../../../../../react Reux thunk/src/config/api"

export const getAllProduct = async(search,limit, pageParams) => {
    
    let url = search ? `/search?q=${search}` : ''

    try {
        let res = await api.get(`/products${url}?limit=${limit}&skip=${pageParams}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllCategories = async() => {
    try {
        let res = await api.get('/products/category-list')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getProductByCategory = async(cat,limit,useParams) => {

    let url = cat=='All Categories' ? '' :  `${cat}?limit=${limit}&skip={pageParams}`
    
    try {
        let res = await api.get(`/products/category/${url}`)
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}