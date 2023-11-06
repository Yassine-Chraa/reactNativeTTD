import { Text, View ,NativeModules} from "react-native"
import useHomeModel from "../viewmodels/HomeModel";
const {CustomModule} = NativeModules;

const Home = ()=>{
    const {userDetails} = useHomeModel();
    CustomModule.createCalendarEvent('test','sjk');
    return(
        <View>
            <Text>FullName: {userDetails?.fullName}</Text>
            <Text>age: {userDetails?.age}</Text>
        </View>
    )
}

export default Home;
