import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';

const BolumCard = ({item, bolum, bolumName, tarih, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.columun}>
          <Text style={styles.header}> {bolumName} </Text>
          <Text style={styles.columuntext}> {bolum}</Text>
          <Text style={styles.columuntext}> {tarih}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('BolumInfo', item)}>
              <Text style={styles.buttontext}>{bolum} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default BolumCard; 