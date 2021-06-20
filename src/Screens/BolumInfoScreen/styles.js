import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  touchable: {borderBottomWidth: 1, borderBottomColor: 'black', marginStart: 1},
  KarakterInfoContainer: {flexDirection: 'column'},
  headerContainer: {
    height: 40,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#4d6994',
  },
  header: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color:'white'
  },
  flatList: {
    marginBottom: 100,
  },
  activitIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
