import React from 'react';
import {
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../Utils/Colors';
import Fonts from '../Utils/CustomFont';


const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');





export const EmptyMessage = (props) => {
  const { message,styles } = props;
  return (
      <View style={[{                 
              // height:SCREEN_HEIGHT-280 ,
              height:SCREEN_HEIGHT-150 , 
              justifyContent: "center",
              alignItems: 'center' 
          },styles]}>              
          <Text
              style={{
                  fontSize: 23,
                  alignSelf: 'center',
                  fontFamily: Fonts.RobotoBold,
                  color: Colors.darkGray,
              }}>
              {message}
          </Text>
      </View>
  )
};


export const ListCard = (props)=>{
  const {
    title,
    isCheked,
    onPress
  } = props
  return(
    <TouchableOpacity 
    activeOpacity={0.8}
    onPress={onPress}
    style={{
      backgroundColor:"lightgray",
      padding:30,
      marginVertical:5,
      }}>
        


          <Text style={{
              fontSize:20
          }}>{'Title'} : {title}</Text>
         <Image
  style={{height:30,width:30 }}
  source={isCheked
    ?{uri:"https://e7.pngegg.com/pngimages/739/672/png-clipart-check-mark-x-mark-check-marks-green-check-logo-angle-text.png"}
    :{uri:'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/checkbox_unchecked.png'}
  }

/>
         
         
    </TouchableOpacity>
  )
}





