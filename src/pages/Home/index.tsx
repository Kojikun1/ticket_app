import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import convertDate from '../../utils/convertData';
import base_url from "../../../base_url";
import CustomButton from '../../components/CustomButton';
import Card from '../../components/Card';
import { TicketData } from '../../types/interfaces';

export default function HomeScreen() {
    const [data, setData] = useState<TicketData[]>([]);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    
    const navigation = useNavigation();

  
    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      //@ts-ignore
      setDate(currentDate);
      console.log(convertDate(currentDate));
    };

    async function fetchData(){
      setIsLoading(true);
            fetch(`${base_url}${convertDate(date)}`)
            .then(data => data.json())
            .then(response => {
              setData(response);
              setIsLoading(false);
            }).catch(error => {
              console.log(error);
              setIsLoading(false);
            })
    }
  
    useEffect(()=> {
         fetchData();
         console.log(date);
    },[date]);

  return (
    <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
            <CustomButton 
             onPress={() => setShow(true) }
             title="Escolher Data"
            />
            <Text style={styles.calendar}>{convertDate(date)}</Text>
            {show && 
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onChange}
        />}
        </View>
        <View style={styles.itemsContainer} >
           {isLoading ? 
           <ActivityIndicator size="large" color="#0000ff" /> :
           data && data.length !== 0 ?  
           <FlatList
               data={data}
               renderItem={({item}) => {
                 return (
                   <Card item={item} onPress={() => navigation.navigate("Description", {item: item})}/>
                 )
               }}
               keyExtractor={(item) => item.id}
               initialNumToRender={5}
               onRefresh={fetchData}
               refreshing={isLoading}
               contentContainerStyle={{alignItems: "center"}}
            /> : <Text style={styles.notFound}>Ingressos não disponiveis para essa data</Text>}
        </View>
   <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsContainer: {
    flex: 5,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    fontSize: 18,
    alignSelf: 'center'
  },
  notFound: {
     fontSize: 18,
  }
});
