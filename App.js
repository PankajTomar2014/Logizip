import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './Test/Navigation/RootStack';
import store from './Test/Redux/Store';
import { Provider } from 'react-redux';

export default App = () => {
  return (
    <NavigationContainer>    
      <Provider store={store}>
        <MainStack />        
      </Provider>  
    </NavigationContainer>
  );
};

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import MainStack from './src/Navigation/RootStack';
// import store from './src/Redux/Store';
// import { Provider } from 'react-redux';

// export default App = () => {
//   return (
//     <NavigationContainer>    
//       <Provider store={store}>
//         <MainStack />        
//       </Provider>  
//     </NavigationContainer>
//   );
// };


// import React ,{ useState,useRef }from 'react';
// import { View,Image ,Text,TouchableOpacity,StyleSheet} from 'react-native';
// import Toast from 'react-native-easy-toast';
// import { pickImageGallary } from './src/Comonents/ImagePicker';
// import { awsConfig, IS_IOS, position } from './src/Utils/CommanFunctions';
// import { commonStyles } from './src/Utils/CommanStyles';
// import Amplify, {Storage} from 'aws-amplify';

// // Amplify.configure(awsConfig.config);

// console.log("config-----",Amplify)


// const App = () => {
//   const toast = useRef(null);
//   const [progressText, setProgressText] = useState('');
//   const [isLoading, setisLoading] = useState(false);
//   const [asset, setAsset] = useState(null);

  

//   const onGetImageGallery = ( )=>{
//     pickImageGallary().then((response)=>{      
//         if(response.data){
//               const imagePath = IS_IOS ? response.data.sourceURL : response.data.path; 
//               setAsset(imagePath);
//               console.log("assets---------",imagePath);
              
//         }else{
//             toast.current.show(response.error, 3000, () => {});
//         }
//     })
//     .catch((error)=>{
//       toast.current.show(error.message, 3000, () => {});
//     });        
// }









//   const fetchResourceFromURI = async uri => {
//     try{
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       console.log("fetchResource---->",blob);
//       // return blob;
//     }catch(error){
//       toast.current.show(error.message, 1000, () => {});
//     }
  
//   };
//   const uploadResource = async () => {
//     // if (isLoading) return;
//     setisLoading(true);
//     const img = await fetchResourceFromURI(asset);
//     return Storage.put(asset, img, {
//       level: 'public',
//       contentType: "PNG",
//       // contentType: asset.type,
//       progressCallback(uploadProgress) {
//         setProgressText(
//           `Progress: ${Math.round(
//             (uploadProgress.loaded / uploadProgress.total) * 100,
//           )} %`,
//         );
//         console.log(
//           `Progress: ${uploadProgress.loaded}/${uploadProgress.total}`,
//         );
//       },
//     })
//       .then(res => {
//         setProgressText('Upload Done: 100%');
//         setAsset(null);
//         setisLoading(false);
//         Storage.get(res.key)
//           .then(result => console.log(result))
//           .catch(err => {
//             setProgressText('Upload Error');
//             console.log(err);
//           });
//       })
//       .catch(error => {
//         toast.current.show(error.message, 1000, () => {});
//         setisLoading(false);
//         setProgressText('Upload Error');
//         console.log(err);
//       });
//   };


//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={()=>onGetImageGallery()}>
//         <Text style={styles.button}>SELECT {asset ? 'ANOTHER' : ''} FILE</Text>
//       </TouchableOpacity>

      
//       {asset && (<Image
//             style={styles.selectedImage}
//             source={{uri: asset}}
//           />)}
//       {/* {asset ? (
//         asset.type.split('/')[0] === 'image' ? (
//           <Image
//             style={styles.selectedImage}
//             source={{uri: asset?.uri ?? ''}}
//           />
//         ) : (
//           <Video
//             style={styles.selectedImage}
//             source={{uri: asset?.uri ?? ''}}
//           />
//         )
//       ) : null} */}
//       {asset && (
//         <>
//           <TouchableOpacity onPress={()=> uploadResource()}>
//             <Text style={styles.button}>UPLOAD</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setAsset(null)}>
//             <Text style={styles.cancelButton}>Remove Selected Image</Text>
//           </TouchableOpacity>
//         </>
//       )}
//       <Text>{progressText}</Text>

//               <Toast
//                     ref={toast}
//                     position={position}
//                     style={commonStyles.toastStyle}
//                     textStyle={commonStyles.toastTextStyle}
//                 />

//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   button: {
//     fontSize: 20,
//     color: '#fff',
//     backgroundColor: 'blue',
//     paddingVertical: 20,
//     paddingHorizontal: 30,
//     marginHorizontal: 20,
//     marginVertical: 10,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   cancelButton: {
//     backgroundColor: '#fff',
//     color: 'blue',
//   },
//   selectedImage: {
//     width: 175,
//     height: 200,
//     marginTop: 20,
//     backgroundColor:'gray',
//     borderRadius:20,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });






// export default App;
