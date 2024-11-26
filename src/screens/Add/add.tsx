import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Platform, ScrollView, Modal, ActivityIndicator, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LottieView from 'lottie-react-native';
import WheelColorPicker from 'react-native-wheel-color-picker';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

export default function Add({navigation}) {
  const [fontsLoaded] = useFonts({
    "bold": require("../../fonts/bold.ttf"),
    "regular": require("../../fonts/regular.ttf"),
    "light": require("../../fonts/light.ttf"),
  })

 
 
  
  
 
  const [corEvento,setCorEvento] = useState("#ffffffff");
  const [titulo,setTitulo] = useState("");
  const [descricao,setDescricao] = useState("");
  const [prioridade,setPrioridade] = useState("");
  const [local,setLocal] = useState("");

  const [aviso,setAviso] = useState(false);

  const [dia, setDia] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
 
  const formatDate = (dia) => {
    return `${dia.getDate()}/${dia.getMonth() + 1}/${dia.getFullYear()}`;
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDia(selectedDate);
    }
  };

  const [time, setTime] = useState(new Date());
  const [showPickerTime, setShowPickerTime] = useState(false);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours % 12 || 12; // Converte para 12h AM/PM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const amPm = hours < 12 ? 'AM' : 'PM';
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };

  const showTimePicker = () => {
    setShowPickerTime(true);
  };

  const onChangeTime = (event, selectedTime) => {
    setShowPickerTime(Platform.OS === 'ios'); // Em Android, fecha automaticamente após a seleção
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const addItem = async() => {
    
    if(time === null || titulo === "" || descricao === "" || prioridade === "" || local === ""){
      setAviso(true);
    }
   
    const diaID = new Date();
    console.log(diaID)
    const transformaDia = JSON.stringify(diaID)

    const novoItem = JSON.stringify([diaID, titulo, descricao, formatDate(dia), formatTime(time), local, prioridade, corEvento]);
    await AsyncStorage.setItem(`${transformaDia}`, novoItem);
    console.log("Novos item adicionado : ", novoItem);  
    navigation.navigate("Home")

}
//id, descricao,dia,hora,titulo,cor, prioridade, local

  if(!fontsLoaded){
    return(<ActivityIndicator/>);
  }
 
  return (
    <View style={styles.container}>
      <StatusBar translucent />

      <View style={styles.view1}>
        <LottieView source={require("../../animations/animação1.json")}
                    autoPlay={true}
                    loop={false}
                    style={{width:"100%", height:"100%"}}/>
      </View>

      <View style={styles.view2}>
        <ScrollView style={{width:"100%",}} contentContainerStyle={{justifyContent:"center", alignItems:"center", paddingBottom:40, paddingTop:20}}>

       
            <View style={styles.view4}>

                <Text style={styles.text1}>
                  Titulo do Evento
                </Text>

                <TextInput placeholder='Ex: Trabalho da faculdade'
                           style={styles.textinput1}
                           value={titulo}
                           onChangeText={setTitulo}/>

            </View>
            

      
            <View style={styles.view4}>

                <Text style={styles.text1}>
                  Descrição do Evento
                </Text>

                <TextInput placeholder='Ex: O trabalho sera feito no laboratório...'
                           style={styles.textinput1}
                           multiline={true}
                           numberOfLines={5}
                           value={descricao}
                           onChangeText={setDescricao}/>

            
            </View>

        
            <View style={styles.view4}>

              <View style={{width:"100%", alignItems:"center", justifyContent:"center"}}>
                  <Text style={styles.text1}>
                    Selecione dia e Hora do Evento
                  </Text>
              </View>


              <View style={{flexDirection:"row"}}>
                  <TextInput placeholder='Ex : 12/02/2002'
                                style={styles.textinput3}
                                value={formatDate(dia)}
                                onFocus={showDatePicker}/>
                  
                  <TextInput placeholder='Ex : 02:45'
                                style={styles.textinput3}
                                value={formatTime(time)}
                                onFocus={showTimePicker}/>


              </View>
            

            </View>
            


       
            <View style={styles.view4}>

                <Text style={styles.text1}>
                  Local do Evento
                </Text>
                <TextInput placeholder='Ex: Rua dos tupiniquis, 1320'
                           style={styles.textinput1}
                           value={local}
                           onChangeText={(setLocal)}/>

            </View>
           


        <View style={styles.view15}>
            <View style={styles.view17}>
                <Text style={styles.text1}>
                  Nível de Prioridade
                </Text>
            </View>
            <View style={styles.view16}>

               <TouchableOpacity  onPress={() => setPrioridade("Baixo")}
                                  style={{...styles.botao1, backgroundColor:"#f8cd0dff", shadowColor:"#f0c817ff"}}>
                  <Text style={styles.texto2}>Baixo</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={() => setPrioridade("Médio")}
                                  style={{...styles.botao1, backgroundColor:"#f8770dff", shadowColor:"#f07917ff"}}>
                  <Text style={styles.texto2}>Médio</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={() => setPrioridade("Alto")}
                                  style={{...styles.botao1, backgroundColor:"#f8280dff", shadowColor:"#f01717ff"}}>
                  <Text style={styles.texto2}>Alto</Text>
               </TouchableOpacity>

            </View>
          
        </View>

        <View style={styles.view18}>

              <Text style={styles.text1}>
                        Cor do Evento
                </Text>
            <View style={styles.view19}>

                <WheelColorPicker thumbSize={20} sliderSize={20} onColorChangeComplete={(color) => setCorEvento(color)}/>

            </View>
          
        </View>

      <TouchableOpacity style={styles.botao2} onPress={addItem}>
        <LinearGradient colors={["#ff9f67", "#f1dc1c"]}
                        style={styles.linear1}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                                            >
              <Text style={styles.text3}>Adicionar</Text>
        </LinearGradient>
      
      </TouchableOpacity>

      </ScrollView>

      
      {showPicker && (
        <DateTimePicker
          value={dia}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
       {showPickerTime && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}


        <Modal animationType="slide"
               transparent={true}
               visible={aviso}
               onRequestClose={() => setAviso(false)}
               style={styles.modal1}>

                <View style={styles.view21}>

                  <View style={styles.view22}>
                    <Text style={styles.text4}>Um dos campos não foi preenchido.</Text>
                    <TouchableOpacity style={styles.botao4} onPress={() => setAviso(false)}>
                        <LinearGradient colors={["#fc4444ff", "#ff7c7c"]}
                            style={styles.linear2}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                                                >
                                <Text style={styles.text5}>Ok</Text>
                        </LinearGradient>

                    </TouchableOpacity>
                  </View>

                </View>

        </Modal>

      </View>
      
       
    </View>
  );
}


