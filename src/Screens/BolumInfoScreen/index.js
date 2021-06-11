import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Router from '../../router';

import styles from './styles';

const BolumInfoScreen = ({navigation, route}) => {
  const {characters} = route.params;
  const {name, air_date, bolum} = route.params;
  const [charInfo, setCharInfo] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  //functions
  const getCharcount = () => {
    characters.forEach(function (item, index, arr) {
      arr[index] = item.slice(42) + ',';
    });
  };
  const fetchChar = async () => {
    try {
      getCharcount();
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${characters}`,
      );
      const responseJson = await response.json();
      setCharInfo(responseJson);
      setisLoading(false);
      return responseJson;
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    fetchChar();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('KarakterInfo', item)}>
        <View style={styles.container}>
          <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
          <View style={styles.KarakterInfoContainer}>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text>Durum:{item.status}</Text>
            <Text>Cinsiyet:{item.gender}</Text>
            <Text>Tür:{item.species}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.activitIndicator}>
        <ActivityIndicator size="large" color="#7ec4fc" />
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Bölüm:{name}</Text>
        </View>
        <View>
          <Text>{bolum}</Text>
          <Text>{name}</Text>
          <Text>{air_date}</Text>
        </View>
        <FlatList
          style={styles.flatList}
          data={charInfo}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
};
export default BolumInfoScreen;
