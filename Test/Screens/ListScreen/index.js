import React, {useState, useRef, useEffect} from 'react';
import {ScrollView, SafeAreaView, FlatList} from 'react-native';
import {AppHeader} from '../../Components/Hearders';
import {EmptyMessage, ListCard} from '../../Components/Card';
import {position} from '../../Utils/CommanFunctions';
import Toast from 'react-native-easy-toast';
import {commonStyles} from '../../Utils/CommanStyles';
import {connect} from 'react-redux';
import {styles} from './styles';

const ListScreen = props => {
  const toast = useRef(null);

  const [postlist, setPostlist] = useState([]);

  useEffect(() => {
    setPostlist(props?.todo?.todoList);
  }, []);

  const renderPostList = (item, index) => {
    return (
      <ListCard
        isCheked={item.isCheked}
        title={item.textData}
        onPress={() => {
          item.isCheked = !item.isCheked;
          setPostlist([...postlist]);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        headerTitle={'Todo List'}
        onPressMenu={() => props.navigation.goBack()}
        backIcon={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={postlist}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => renderPostList(item, index)}
          ListEmptyComponent={() => <EmptyMessage message={'No data found!'} />}
        />
      </ScrollView>

      <Toast
        ref={toast}
        position={position}
        style={commonStyles.toastStyle}
        textStyle={commonStyles.toastTextStyle}
      />
    </SafeAreaView>
  );
};

export default connect(todo => todo, null)(ListScreen);
