import React from 'react';
import BottomSheetScreen from '../screens/bottomsheet/BottomSheetScreen';
import {createStackNavigator} from '@react-navigation/stack';
import CustomBottomSheet from '../screens/custombottomsheet/CustomBottomSheet';
import {Height, Width} from '../themes';

const Stack = createStackNavigator();

const BottomSheetStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomSheetScreen"
        component={BottomSheetScreen}
        options={{
          title: 'Bottom Sheet',
          headerTitleStyle: {
            fontSize: Width * 0.045,
          },
          headerStyle: {
            height: Height * 0.08, 
          },
        }}
      />
      <Stack.Screen
        name="CustomBottomSheet"
        component={CustomBottomSheet}
        options={{presentation: 'transparentModal', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default BottomSheetStack;
