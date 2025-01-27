import Button from "./Button"
import TrackingButtonComponent from "./TrackingButtonComponent"
const HoC =() =>{
    const ButtonWithTracking = TrackingButtonComponent(Button)
    return(
        <div>
            <h2>This is an example of HoC</h2>
            <Button name="Login"/>
            <ButtonWithTracking name="Login" TrackingInfo={{UserID:"12334",Password:"12134"}}/>
        </div>
    )
}
export default HoC