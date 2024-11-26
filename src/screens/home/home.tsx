import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { useState, useEffect, useCallback, useRef } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView, ActivityIndicator, Image, Modal, Animated } from "react-native";
import { styles } from "./style";




export default function Home({navigation}){


    const [fontsLoaded] = useFonts({
        "bold": require("../../fonts/bold.ttf"),
        "regular": require("../../fonts/regular.ttf"),
        "light": require("../../fonts/light.ttf"),
      })



    const [eventos,setEventos] = useState([]);
    const base = [];

    const pegarTarefas = async() => {
      
        const todasAsChaves = await AsyncStorage.getAllKeys();
        const todosItens = await AsyncStorage.multiGet(todasAsChaves);
        console.log(todosItens);
        for(let i = 0; i < todasAsChaves.length; i++){
            const transforma = JSON.parse(todosItens[i][1]);
            console.log("Item : ", transforma);
            base.push(transforma);
        }

        setEventos(base);
    }

    


    const [combo,setCombo] = useState([]);
    const [janelaInfo,setJanelaInfo] = useState(false);
    const janela = (descricao,dia,hora,titulo,cor, prioridade, local, id) => {
        setCombo([id, descricao,dia,hora,titulo,cor, prioridade, local]);
        console.log(combo[0]);
        setJanelaInfo(true)
    }


    const deleta = async(id) => {
        try{
            const idN = JSON.stringify(id);
             console.log(idN);
            await AsyncStorage.removeItem(idN);
            console.log("Item deletado");
            setJanelaInfo(false);
            pegarTarefas()
        }catch(error){
            console.log(error);
        }
    }

    const fadeNada = useRef(new Animated.Value(0)).current;
    const [animaSlide,setAnimaSlide] = useState(new Animated.Value(300));

    const atualiza = () => {
        
        pegarTarefas();
        Animated.timing(animaSlide, {
            toValue:0,
            duration:1500,
            useNativeDriver:true,
        }).start();
    }
    


    useEffect(() => {
        pegarTarefas();
        Animated.timing(fadeNada, {
            toValue:1,
            duration:2000,
            useNativeDriver:true,
        }).start();

        Animated.timing(animaSlide, {
            toValue:0,
            duration:1500,
            useNativeDriver:true,
        }).start();
        
    },[]);

   

    if(!fontsLoaded){
        return(<ActivityIndicator/>);
      }


    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true}/>
            <LinearGradient colors={["#569aff", "#ad82e6", "#e4936dff"]}
                            style={styles.gradient1}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>

            <View style={styles.view1}>
                
                    <LottieView source={require("../../animations/fundinho.json")}
                                autoPlay={true}
                                loop={true}
                                style={{width:190, height:190, }} 
                                speed={0.4}/>

           
            <TouchableOpacity style={styles.botao1} onPress={() => atualiza()}>
                <Image source={require("../../images/refresh.png")} style={{width:40, height:40}}/> 
            </TouchableOpacity>
                
            </View>

            <View style={styles.view2}>
            
            {eventos.length > 0 ? (
                <ScrollView style={{width:"100%"}} contentContainerStyle={{justifyContent:"flex-start", alignItems:"center"}}>
                {eventos.map(item => (
                        
                            <Animated.View key={item[0]} style={{...styles.animatedView1, transform:[{translateX:animaSlide}]}}>
                                
                                <TouchableOpacity style={styles.botao2} onPress={() => janela(item[2],item[3],item[4],item[1],item[7],item[6],item[5],item[0])}>
                               
                                            <View style={styles.view3}>
                                                <Text style={styles.texto1}>{item[1]}</Text>
                                                <Text style={styles.texto2}>{item[3]}</Text>
                                            </View>

                                </TouchableOpacity>
                               
                            </Animated.View>
                        
                    
                    
                ))}
            </ScrollView>
            ) : (
                <Animated.View style={{...styles.animatedView2, opacity:fadeNada}}> 
                    <View style={styles.view4}> 
                        <Text style={styles.texto3}>Sem eventos marcados</Text>
                        <Text style={styles.texto3}>Adicione um novo...</Text>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.texto3}>Aperte para atualizar</Text>
                    </View>
                    <Image source={require("../../images/seta.png")} resizeMode="contain" style={styles.imagem1}/>
                    <Image source={require("../../images/seta.png")} resizeMode="contain" style={styles.imagem2}/>
                </Animated.View>
            )}

            
            
            
            <Modal animationType="slide"
                   transparent={false}
                   visible={janelaInfo}
                   onRequestClose={() => setJanelaInfo(false)}
                   style={styles.modal1}>
                <StatusBar backgroundColor="#55a2fa"/>
                
                <LinearGradient colors={["#55a2fa", "#f09b62ff",combo[5]]}
                                style={styles.gradient2}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}>
                    <LottieView source={require("../../animations/carinha2.json")}
                                autoPlay={true}
                                loop={true}
                                style={{width:190, height:190, }} />
                           
                            <Text style={styles.texto4}>{combo[4]}</Text>

                            <View style={styles.view6}>
                                <ScrollView horizontal={true}>
                                <Text style={styles.texto5}>{combo[1]}</Text>
                                </ScrollView>
                            
                            </View>

                            
                            
                            <View style={styles.view7}>
                                    <Text style={styles.texto6}>Dia : {combo[2]}</Text>
                                    <Text style={styles.texto6}>Horário : {combo[3]}</Text>
                            </View>

                            <View style={styles.view8}>
                                    <Text style={styles.texto6}>Local :{combo[7]}</Text>
                            </View>

                            <View style={styles.view9}>
                                <Text style={styles.texto7}>Prioridade : {combo[6]}</Text>
                            </View>
                
                        
                    
                    <TouchableOpacity style={styles.botao4} onPress={() => setJanelaInfo(false)}>
                    <LottieView source={require("../../animations/voltar.json")}
                                autoPlay={true}
                                loop={false}
                                style={{width:60, height:60, }} 
                                speed={0.5}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleta(combo[0])}
                                             style={styles.botao3}>
                                <Image source={require("../../images/bin.png")} style={{...styles.imagem3, tintColor:"#ff0909ff"}}/>
                    </TouchableOpacity>

                </LinearGradient>

            </Modal>
                        <TouchableOpacity   onPress={() => navigation.navigate("Add")}
                                            style={styles.botao5}>
                                           <Image source={require("../../images/calendario.png")} style={styles.imagem3}/> 
                        </TouchableOpacity>
                
            </View>
            </LinearGradient>
        </SafeAreaView>
    )
}