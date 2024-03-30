import addProductConsumer from "./consumers/addProductConsumer";
import addUserConsumer from "./consumers/addUserConsumer";

export const createSubscribe = () => {
    return {
        addproduct: addProductConsumer,
        adduser:addUserConsumer
    }
}