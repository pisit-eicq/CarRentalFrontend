

export default async function getCar(id:string) {
    const response=await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${id}`);
    if(!response.ok){
        throw new Error("Fail to fetch cars");
    }

    return await response.json();
}