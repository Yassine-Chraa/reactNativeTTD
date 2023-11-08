import { Text, View} from "react-native"
import useHomeModel from "../viewmodels/HomeModel";

const Home = ()=>{
    const {userDetails} = useHomeModel();
   
    return(
        <View>
            <Text>FullName: {userDetails?.fullName}</Text>
            <Text>age: {userDetails?.age}</Text>
        </View>
    )
}

export default Home;
