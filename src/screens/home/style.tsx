import { StyleSheet } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:"space-between", 
        alignItems:"center"
    },
    
    gradient1:{
        width:"100%", 
        height:"100%", 
        justifyContent:"space-around", 
        alignItems:"center"
    },

    view1:{
        width:"100%",
        height:"30%",
        flexDirection:"row", 
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:20
    },

    botao1:{
        position:"absolute", 
        top:30, 
        right:20, 
        width:55,
        height:55, 
        backgroundColor:"#ffffffff", 
        justifyContent:"center", 
        alignItems:"center", 
        borderRadius:40, 
        elevation:10
    },

    view2:{
        width:"100%", 
        height:"70%", 
        backgroundColor:"#6aadfa00"
    },

    animatedView1:{
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '90%',
        height:80,
        marginVertical:10,
        shadowColor:"#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        flexDirection:"row",
    },

    botao2:{
        width:"100%", 
        height:"100%", 
        justifyContent:"space-between"
    },

    view3:{
        width:"100%", 
        height:"100%", 
        backgroundColor:"#22442200",
        alignItems:"center", 
        justifyContent:"space-around"
    },
    
    texto1:{
        fontFamily:"bold",
        fontSize:20
    },

    texto2:{
        fontFamily:"light", 
        fontSize:15
    },

    animatedView2:{
        width:"100%", 
        height:"100%", 
        justifyContent:"center", 
        alignItems:"center", 
    },

    view4:{
        justifyContent:"center", 
        alignItems:"center"
    },

    texto3:{
        fontSize:30, 
        fontFamily:"bold", 
        color:"#ffffff"
    },

    view5:{
        justifyContent:"center", 
        alignItems:"center", 
        position:"absolute", 
        top:10
    },

    imagem1:{
        width:100, 
        height:100, 
        position:"absolute", 
        bottom:100, 
        right:10, 
        tintColor:"#fdfdfd"
    },

    imagem2:{
        width:100, 
        height:100, 
        position:"absolute",
        top: -100, 
        right:10, 
        tintColor:"#fdfdfd",  
        transform: [{ scaleY: -1 }]
    },

    modal1:{
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"
    },

    gradient2:{
        width:"100%", 
        height:"100%", 
        justifyContent:"space-around", 
        alignItems:"center"
    },

    texto4:{
        fontSize:50,
        fontFamily:"bold", 
        color:"#ffffffff",  
        textShadowColor: '#8a8888',         
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 3,  
    },

    view6:{
        width:"90%", 
        height:90, 
        backgroundColor:"#ffffff", 
        flexDirection:"row",
        padding:10, 
        alignItems:"center", 
        justifyContent:"space-around", 
        borderRadius:10, 
        elevation:10
    },

    texto5:{
        fontSize:25,
        fontFamily:"light",                                     
    },

    view7:{
        width:"90%", 
        height:70, 
        backgroundColor:"#ffffff", 
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-around", 
        borderRadius:10, 
        elevation:10
    },

    texto6:{
        fontSize:20, 
        fontFamily:"light"
    },

    view8:{
        width:"90%", 
        height:70, 
        backgroundColor:"#ffffff", 
        alignItems:"center", 
        justifyContent:"space-around", 
        borderRadius:10, 
        elevation:10
    },

    view9:{
        width:"90%", 
        height:70, 
        backgroundColor:"#ffffff", 
        alignItems:"center", 
        justifyContent:"space-around", 
        borderRadius:10, 
        elevation:10
    },

    texto7:{
        fontSize:30, 
        fontFamily:"light"
    },

  

    botao3:{
        position:"absolute",
        width:80, 
        height:80, 
        top:20,
        right:20,
        backgroundColor:"#ffffffff", 
        justifyContent:"center", 
        alignItems:"center", 
        borderRadius:50, 
        elevation:10, 
        shadowColor:"#ff0a0a"
    },
    

    botao4:{
        position:"absolute", 
        alignItems:"center", 
        justifyContent:"center", 
        width:80, 
        height:80, 
        elevation:10, 
        backgroundColor:"#ffffffff", 
        borderRadius:50, 
        top:20, 
        left:20
    },

    botao5:{
        width:70, 
        height:70, 
        justifyContent:"center", 
        alignItems:"center", 
        borderRadius:50,
        position:"absolute", 
        bottom:20, 
        right:10, 
        backgroundColor:"#ffffffff", 
        elevation:10
    },

    imagem3:{
        width:40, 
        height:40
    },

    
})