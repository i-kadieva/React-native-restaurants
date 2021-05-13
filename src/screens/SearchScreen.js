import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	const [searchWord, setSearchWord] = useState('');

	return <View>
		<SearchBar
			onSearchWordChange={word => setSearchWord(word)}
			onSearchWordEntered={() => console.log('Entered')}
		 />
		<Text>Search Screen</Text>
		<Text>{searchWord}</Text>
	</View>;
};

export default SearchScreen;
