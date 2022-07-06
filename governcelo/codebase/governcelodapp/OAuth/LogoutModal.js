import React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';

export default class LogoutModal extends React.Component{

  state = {
  };

  

  componentDidMount = async () => {
    
  };

  render(){
    return (
			<View style={styles.centeredView}>
				<Modal
					animationType="none"
					visible={true}
					transparent={true}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text>Governcelo has been denied authorization. Please log in</Text>
						</View>
					</View>
				</Modal>
			</View>
    );
  }
  
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 2,
    padding: 10,
    width: '80%',
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 25
  }
});