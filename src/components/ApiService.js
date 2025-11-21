const BASE_API="https://jsonplaceholder.typicode.com"

export const usersData= async()=>{
    const response= await fetch(`${BASE_API}/users`)
    const data=response.json()
    if(!response.ok){
        throw new Error("Failed to fetch data");   
    }

    return data

}

export const createuser=async(user)=>{
    const response= await fetch(`${BASE_API}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        });
        
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }

        return response.json()
}

export const updateUser=async(id,user)=>{
    const response=await fetch(`${BASE_API}/users/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)
    });

    if(!response.ok){
        throw new Error("failed to Update User");        
    }

    return response.json();
};


export const deleteUser=async (id)=>{
    const response=await fetch(`${BASE_API}/users/${id}`,{
        method:'DELETE'
    });
    if(!response.ok){
            throw new Error("Failed to delete data");   
        }
    return true
}