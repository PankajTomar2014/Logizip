import React, {useRef, useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {CustomButton} from '../../Components/Button';
import {CustomTextInput} from '../../Components/Input';
import Toast from 'react-native-easy-toast';
import {IS_IOS, position} from '../../Utils/CommanFunctions';
import {connect} from 'react-redux';
import {styles} from './styles';
import {commonStyles} from '../../Utils/CommanStyles';
import {addListAction} from '../../Redux/Action/addListAction';

const SignIn = props => {
  const toast = useRef(null);

  const [textData, setTextData] = useState('');
  const [errorText, setTextError] = useState('');

  const onContinue = async () => {
    if (textData == '') {
      setTextError('Please enter text');
    } else if (textData.length < 5) {
      setTextError('Please enter at least 5 character');
    } else {
      addData();
    }
  };

  const addData = () => {
    props.navigation.navigate('ListScreen');

    const newData = [{textData: textData}];
    const oldData = props.todo.todoList;

    props.addListAction(newData.concat(oldData));
    setTimeout(() => {
      setTextData('');
      setTextError('');
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={[
            styles.container,
            {justifyContent: 'center'},
          ]}>
          {errorText != '' ? (
            <Text style={commonStyles.errText}>{errorText}</Text>
          ) : null}
          <CustomTextInput
            label={'Email'}
            autoCapitalize={'none'}
            placeholder={'Enter text'}
            defaultValue={textData}
            onChangeText={text => {
              setTextData('');
              setTextError('');
              setTextData(text);
            }}
          />
          <CustomButton onPressBtn={() => onContinue()} title={'Continue'} />
        </ScrollView>
      </KeyboardAvoidingView>
      <Toast
        ref={toast}
        position={position}
        style={commonStyles.toastStyle}
        textStyle={commonStyles.toastTextStyle}
      />
    </SafeAreaView>
  );
};

export default connect(({todo}) => ({todo}), {addListAction})(SignIn);
