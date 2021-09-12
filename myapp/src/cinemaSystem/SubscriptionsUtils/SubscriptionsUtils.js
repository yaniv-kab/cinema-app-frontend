import ApiDAL from "../DALs/ApiDAL";
const SubscriptionsURL = "https://mern-cinema-subswebserver.herokuapp.com/api/subscriptions"

const getAllSubscriptions = () => {
    return ApiDAL.getAllData(SubscriptionsURL)
}
const addSubscription = (obj) => {
    return ApiDAL.addData(SubscriptionsURL, obj)
}
const updateSubscription = (id, obj) => {
    return ApiDAL.updateData(SubscriptionsURL, id, obj)
}
const deleteSubscription = (id) => {
    return ApiDAL.deleteData(SubscriptionsURL, id)
}
export default { getAllSubscriptions, addSubscription, updateSubscription, deleteSubscription }