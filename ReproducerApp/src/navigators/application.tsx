import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Dimensions, StatusBar,StyleSheet} from "react-native";

export type ApplicationStackParamList = {
  Home: undefined;
  Welcom: undefined;
  Services: undefined;
    FormAddMember: undefined;
    FormAddOwner: undefined;
  OuvrireCompte: {reference?: string};
    OuvrirCompteMorale: {reference?: string};
    StatusDemande: {reference?: string};
  Contacts: {pageType: string};
  Aide: undefined;
  AgenceDAB: undefined;
  DetailLocalisation: undefined;
  OffresPromo: undefined;
  FormePriseRDV: {form: any};
  SouscriptionGestionNoAuth: {form: any};
  NoAuthRdv: {form: any};
};

const Stack = createNativeStackNavigator<ApplicationStackParamList>();
const ApplicationStack = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
          <Stack.Navigator
            initialRouteName="Welcom"

          >
            <Stack.Screen
              name="Welcom"
              component={Welcom}
              options={{
                animation: 'fade',
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                animation: 'fade',
                headerShown: false,
              }}
            />

          </Stack.Navigator>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
export default ApplicationStack;
