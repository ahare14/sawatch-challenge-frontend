const apiEndpoint = "https://api.sawatchlabs.com/models/13/2017"
const sawatchTable = document.querySelector("#swt-table-body")

// grab the information from the API endpoint so that it readily available for manipulation 
grabAPIInformation = (api) => {
  fetch(api)
    .then(response => response.json())
    .then(result => sortedArrayByVehicleModel(result))
    .catch(error => console.error(error))
}

// order the array using the "vehicle_model" property
sortedArrayByVehicleModel = (vehicles) => {
  const sortedVehicles = vehicles.data.sort(compareVehicleName)
  sortedVehicles.map(vehicle => appendVehicleAttributesToTable(vehicle))
}

// compare function for the sorting function so that models are being orederd correctly
compareVehicleName = (vehicle1, vehicle2) => {
  let compareValue = 0 
  if (vehicle1.vehicle_model > vehicle2.vehicle_model) {
    compareValue = 1
  } else if (vehicle1.vehicle_model < vehicle2.vehicle_model) {
    compareValue = -1
  }
  return compareValue
}

// finally append table rows to the existing table so that:
//  year, make, model, displacement, cylinders, class are showing
appendVehicleAttributesToTable = (vehicle) => {
  const newVehicleRow = sawatchTable.insertRow(-1)
  const { vehicle_year, make, vehicle_model, displacement, cylinders } = vehicle
  const vehicleClass = vehicle.class
  newVehicleRow.innerHTML = 
    `<td>${vehicle_year}</td>
    <td>${make}</td>
    <td>${vehicle_model}</td>
    <td>${displacement}</td>
    <td>${cylinders}</td>
    <td>${vehicleClass}</td>`
}

// call the function to run the app
grabAPIInformation(apiEndpoint)