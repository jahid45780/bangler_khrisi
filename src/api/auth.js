import axiosSecure from "."

// user save from database
export const saveUser = async user =>{
    const currentUser = {
        email: user.email,
        photo: user.photoURL,
        role:'guest',
        status:'Verified'
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}



// save room data in database
export const addProduct = async (productData)=>{
    const {data} = await axiosSecure.post('/addProduct', productData)
    return data
}