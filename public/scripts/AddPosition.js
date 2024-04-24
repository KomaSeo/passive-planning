function updatePosition(positionInfo){
    const coordinate = positionInfo.coords
    const latitude = coordinate.latitude;
    const longitude = coordinate.longitude;
    $("#latitude").val(latitude);
    $("#longitude").val(longitude);
}
navigator.geolocation.getCurrentPosition(updatePosition,(exception)=>{
    console.log(exception)
})