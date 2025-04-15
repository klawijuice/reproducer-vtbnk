import {Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {DrawerContentScrollView} from "@react-navigation/drawer";

const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{padding: 30}}>
        <View style={{gap: 5}}>
          <View >

          </View>
          <Text
            numberOfLines={2}>
            hello world
          </Text>

          <TouchableHighlight
            style={{
              width: '100%',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Profile')}>
            <Text
              style={{
                fontSize: 14,
                textDecorationLine: 'underline',
              }}
              >
                mon compte
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <DrawerContentScrollView
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: 0, paddingBottom: 10}}>
          <View
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <View>
              <View
                >
                <Text >Services</Text>
              </View>

            </View>

            <View />


          </View>
        </DrawerContentScrollView>
      </View>
      <View />

    </View>
  );
};
export default CustomDrawer;
