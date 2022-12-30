import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";
import MultipleSelectList from "../components/MultipleSelectedList";
// import MultipleSelectList from "../components/MultipleSelectList";

function GroupScheduleMaking() {

  // datepicker
  const [dateStart, setDateStart] = useState(new Date())
  const [openStart, setOpenStart] = useState(false)
  const [dateEnd, setDateEnd] = useState(new Date())
  const [openEnd, setOpenEnd] = useState(false)
  const [startYear,setStartYear] = useState<number>(0)
  const [startMonth,setStartMonth] = useState<number>(0)
  const [startDay,setStartDay] = useState<number>(0)
  const [startHour,setStartHour] = useState<number>(0)
  const [startMinute,setStartMinute] = useState<number>(0)
  const [endYear,setEndYear] = useState<number>(0)
  const [endMonth,setEndMonth] = useState<number>(0)
  const [endDay,setEndDay] = useState<number>(0)
  const [endHour,setEndHour] = useState<number>(0)
  const [endMinute,setEndMinute] = useState<number>(0)


  useEffect(() => {
    setStartYear(dateStart.getFullYear())
    setStartMonth(dateStart.getMonth() +1)
    setStartDay(dateStart.getDate())
    setStartHour(dateStart.getHours() + 9)
    setStartMinute(dateStart.getMinutes())
  },[dateStart])
  useEffect(() => {
    setEndYear(dateEnd.getFullYear())
    setEndMonth(dateEnd.getMonth() +1)
    setEndDay(dateEnd.getDate())
    setEndHour(dateEnd.getHours() + 9)
    setEndMinute(dateEnd.getMinutes())
  
  },[dateEnd])


  //dropdown
  const [selected, setSelected] = React.useState([]);
  const data = [
    {key:'1', value:'Mobiles', image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"},
    {key:'2', value:'Appliances', image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"},
    {key:'3', value:'Cameras', image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"},
    {key:'4', value:'Computers', image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"},
    {key:'5', value:'Vegetables', image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"},
    {key:'6', value:'Diary Products', image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"},
    {key:'7', value:'Drinks', image : "https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg"},
  ]

  const styles = StyleSheet.create({
    titleBox: {

    },

    textInput: {
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 10,
      height: 40,
      borderTopWidth:0,
      borderLeftWidth:0,
      borderRightWidth:0,
      borderColor: 'gray',
      borderWidth: 1
    },

    eventBox: {
      
    },

    dateBox: {
      flexDirection : 'row',
      justifyContent: "center"
    
    }


  })

  return (
    <View>
      <View style={{}}>
        <Text>safd</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="제목"
          />
      </View>
      <View>
        <TextInput 
          style={styles.textInput}
          placeholder="장소"
        />
      </View>
      <View style={styles.dateBox}>
        <Text onPress={() => setOpenStart(true)} >{startYear}년 {startMonth}월 {startDay}일 {startHour} : {startMinute}</Text>
        <DatePicker
          modal
          open={openStart}
          date={dateStart}
          onConfirm={(date) => {
            setOpenStart(false)
            setDateStart(date)
          }}
          onCancel={() => {
            setOpenStart(false)
          }}
        />

        <Text onPress={() => setOpenEnd(true)} >{endHour} : {endMinute} {endDay}일 {endMonth}월 {endYear}년   </Text>
        <DatePicker
          modal
          open={openEnd}
          date={dateEnd}
          onConfirm={(date) => {
            setOpenEnd(false)
            setDateEnd(date)
          }}
          onCancel={() => {
            setOpenEnd(false)
          }}
        />
      </View>
      
      <MultipleSelectList 
        setSelected={(val:any) => setSelected(val)} 
        data={data}   
        save="value"
        // onSelect={() => alert(selected)} 
        label="Categories"
      />

    </View>

    
  )
}

export default GroupScheduleMaking;
