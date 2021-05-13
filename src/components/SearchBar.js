import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ onSearchWordChange, onSearchWordEntered }) => {
	return <View style={style.backgroundStyle}>
		<Feather name='search' style={style.iconStyle} />
		<TextInput
			autoCapitalize='none'
			autoCompleteType='off'
			placeholder="Search"
			onChangeText={onSearchWordChange}
			onEndEditing={onSearchWordEntered}
			style={style.inputStyle} />
	</View>;
};

const style = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0eeee',
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		marginHorizontal: 15,
		marginTop: 10
	},
	iconStyle: {
		alignSelf: 'center',
		fontSize: 35,
		height: 50,
		marginHorizontal: 15
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	}
});

export default SearchBar;
