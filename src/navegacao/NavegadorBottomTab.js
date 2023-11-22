import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaAjuda from '../telas/TelaAjuda'
import TelaHome from '../telas/TelaHome'
import TelaPerfil from '../telas/TelaPerfil'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function NavegadorBottomTab(){
    return(
        <Tab.Navigator> 
            <Tab.Screen
                name="home"
                component={TelaHome}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name={"newspaper"}/>
                        }
                        return <Ionicons size={size} color={color} name={"newspaper-outline"}/>
                    }
                }}
            />

            <Tab.Screen
                name="ajuda"
                component={TelaAjuda}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name={"information-circle"}/>
                        }

                        return <Ionicons size={size} color={color} name={"information-circle-outline"}/>
                    }
                }}
            />

            <Tab.Screen
                name="perfil"
                component={TelaPerfil}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name={"person-circle-sharp"}/>
                        }
                        return <Ionicons size={size} color={color} name={"person-circle-outline"}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}