import addUser from './addUser'

export default (dependecies: any) => {
    return {
        addusers: addUser(dependecies)
    }
}