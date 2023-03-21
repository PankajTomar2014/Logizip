import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../Utils/Colors';
import Images from '../Utils/Icons';
import Fonts from '../Utils/CustomFont';
import {ImageButton} from './Button';
import {commonStyles} from '../Utils/CommanStyles';

export const AppHeader = (props) => {
  const { onPressMenu,backIcon, isNeedTitle, headerTitle} =props;

  const height = 50;

  return (
    <View
      style={[
        {
          height: height,
          flexDirection: 'row',
          alignSelf: 'center',
          backgroundColor: Colors.white,
          width: '100%',
          paddingHorizontal: 15,
        },  
      ]}>
      {backIcon&&
      <ImageButton
        onPress={onPressMenu}
        icon={Images.backIcon}
        iconStyle={commonStyles.headerIconStyle}
        containerStyle={{width: '10%', height: height}}
      />}

      <View
        style={{
          height: height,
          justifyContent: 'center',
          backgroundColor: Colors.white,
          width: '60%',
        }}>
       
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={{
              paddingRight: 15,
              fontSize: 16,
              marginLeft: 10,
              fontFamily: Fonts.RobotoBold,
              color: Colors.darkGray,
            }}>
            {headerTitle}
          </Text>
      
      </View>

   
    </View>
  );
};
