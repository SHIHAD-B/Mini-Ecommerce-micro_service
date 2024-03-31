import addProductConsumer from "./consumers/addProductConsumer";


export const createSubscribe = () => {
    return {
        addproduct: addProductConsumer,
    }
}