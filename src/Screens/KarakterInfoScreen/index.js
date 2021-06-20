import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const KarakterInfoScreen = ({route}) => {
  const {name, image, status, gender, species, type} = route.params;
  return (
    <View>
      <Image style={styles.image} source={{uri: image}} />
      <Text>
        <Text style={{fontWeight: 'bold'}}>Ad :</Text>
        {name}
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Cinsiyet :</Text>
        {gender}
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Durum :</Text>
        {status}
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Tür :</Text>
        {species}
      </Text>
    </View>
  );
};
export default KarakterInfoScreen;
