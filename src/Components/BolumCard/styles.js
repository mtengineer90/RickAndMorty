import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#8bb6fc',
    borderWidth: 1,
    borderRadius: 5,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 10,
    marginTop: 5,
    height: 120,
    padding: 10,
    backgroundColor: '#bad4ff',
  },
  columun: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  columuntext: {
    marginTop: 20,
  },
  row: {
    flex: 1,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontext: {
    color:'#c9dfff',
    flex: 1,
    textAlignVertical: 'center',
  },
  header: {
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    width: 90,
    backgroundColor: '#4d6994',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles; 