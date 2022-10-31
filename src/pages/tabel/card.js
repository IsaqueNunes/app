import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from "react-native";
import { auth, db } from '../../../firebase';
import { collection,onSnapshot,querySnapshot} from "firebase/firestore";

const Card = () =>{
    const [table, setTable] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(querySnapshot);
    const unsub = onSnapshot(collection(db, "travels"), (querySnapshot) => {
        console.log("Current data: ", querySnapshot.data());
    });
    
    return (
        <View style={styles.container}> 
            <Text>CardScreen</Text>
            <FlatList 
                data={table}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.item}>
                        <Text>{item.driverId}</Text>
                        <Text>{item.datetime}</Text>
                        <Text>{item.destination}</Text>
                        <Text>{item.origin}</Text>  
                        <Text>{item.carPlate}</Text>
                        <Text>{item.passengers}</Text>
                    </TouchableOpacity> 
                )}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 40,
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        backgroundColor: "#49efb5",
        borderRadius: 50,
        alignItems: 'center',
        JustifyContent: 'center',
    },
})
export default Card;