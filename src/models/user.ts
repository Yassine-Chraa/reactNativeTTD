import UserInterface from "../interfaces/UserInterface"

export const fetchUserDetails = ():Promise<UserInterface> => {
    return Promise.resolve({
        fullName: "Yassine Chraa",
        age: 22
    })
}