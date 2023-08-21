import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {colorPalette} from '../../constants/colorPalette';
import Header from './header';
import SearchBar from './searchBar';
import Note from './note';
import MessageSection from './messageSection';

const MessagingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colorPalette.whiteColor}}>
      <Header navigation={navigation} />
      <FlatList
        ListHeaderComponent={() => (
          <>
            {/* <SearchBar />
            <Note /> */}
            <MessageSection />
          </>
        )}
        stickyHeaderIndices={[0]}
        // StickyHeaderComponent={() => <MessageSection />}
      />
    </View>
  );
};

export default MessagingScreen;
