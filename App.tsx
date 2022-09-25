
import { 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity,
  Animated  
} from 'react-native';
import 'react-native-reanimated'
import { MotiView } from "moti";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image 
        source={require("./src/assets/logo.png")}
        />
      </View>
      <MotiView
        from={{translateY: 300, opacity: 0,}}
        animate={{translateY: 0,opacity: 1,}}
        transition={{type: 'spring',duration: 1000, delay: 500}}
        style={styles.containerInput}
      >

        <TextInput 
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChange={()=>{}}
        />

        <TextInput 
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChange={()=>{}}
        />
        
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnRegisterText}>Criar conta gratuita </Text>
        </TouchableOpacity>

      </MotiView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  containerInput:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    height: 45,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    paddingHorizontal: 16,
  },
  btnSubmit:{
    backgroundColor: "#35aaff",
    width: "90%",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  btnSubmitText: {
    color: '#fff',
    fontSize: 18,

  },
  btnRegister: {
    marginTop: 10
  },
  btnRegisterText: {
    color: '#fff'
  }
})
