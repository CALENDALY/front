import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";

function GroupScheduleMaking() {
  const [dateStart, setDateStart] = useState(new Date())
  const [openStart, setOpenStart] = useState(false)
  const [dateEnd, setDateEnd] = useState(new Date())
  const [openEnd, setOpenEnd] = useState(false)
  const [startYear,setStartYear] = useState<number>(0)
  const [startMonth,setStartMonth] = useState<number>(0)
  const [startDay,setStartDay] = useState<number>(0)
  const [endYear,setEndYear] = useState<number>(0)
  const [endMonth,setEndMonth] = useState<number>(0)
  const [endDay,setEndDay] = useState<number>(0)
  useEffect(() => {
    setStartYear(dateStart.getFullYear())
    setStartMonth(dateStart.getMonth() +1)
    setStartDay(dateStart.getDate())
  
  },[dateStart])
  useEffect(() => {
    setEndYear(dateEnd.getFullYear())
    setEndMonth(dateEnd.getMonth() +1)
    setEndDay(dateEnd.getDate())
  
  },[dateEnd])
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
      <View style={styles.eventBox}>
        <Text onPress={() => setOpenStart(true)} >{startYear}년 {startMonth}월 {startDay}일</Text>
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

        <Text onPress={() => setOpenEnd(true)} >{endYear}년 {endMonth}월 {endDay}일</Text>
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
    </View>
  )
}

export default GroupScheduleMaking;
