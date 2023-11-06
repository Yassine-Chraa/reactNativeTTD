import { useEffect, useState } from "react";
import { fetchUserDetails } from "../models/user";
import UserInterface from "../interfaces/UserInterface";

const useHomeModel = ()=>{
    const [userDetails,setUserDetails] = useState<UserInterface>();

    const fetchData = async()=>{
        const res = await fetchUserDetails();
        setUserDetails(res);
    }
    
    useEffect(()=>{
        fetchData();
    },[])
    return {userDetails};
}

export default useHomeModel;