import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <View style={{marginHorizontal: 18, marginTop: 8}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#edebeb',
          width: '100%',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{marginLeft: 8}}
          color="gray"
        />
        <Text style={{marginLeft: 20, color: 'gray', fontSize: 16}}>
          Search
        </Text>
      </View>
    </View>
  );
};

export default SearchBar;
