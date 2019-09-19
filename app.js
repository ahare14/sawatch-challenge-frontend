// grab the information from the API endpoint so that it readily available for manipulation 
const apiEndpoint = "https://api.sawatchlabs.com/models/13/2017"

grabAPIInformation = (api) => {
  fetch(api)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
}

grabAPIInformation(apiEndpoint)

// order the array using the "vehicle_model" property

sortedArrayByVehicleModel = (vehicles) => {
  const sortedVehicles = vehicles.sort()
}