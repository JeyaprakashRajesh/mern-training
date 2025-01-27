const TrackingButtonComponent = (Component)=>{
    return ((props)=>{
        console.log("HoC Tracking")
        const handleClick=()=>{
            console.log("Logged",props.TrackingInfo)
        }
        return(
            <div onClick={handleClick}>
                <h3>This is the HoC</h3>
                <Component {...props}/>
            </div>
            
        )
    })
}
export default TrackingButtonComponent