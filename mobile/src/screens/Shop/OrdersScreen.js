// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuFooter from "../../components/MenuFooter";
import OrderCard from "../../components/OrderCard";

import Icon from "react-native-vector-icons/Entypo";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { useDispatch, useSelector } from "react-redux";
import { orderHistory } from "../../store/actions/order";
import { giveFeedback } from "../../store/actions/shop";
import RatingModal from "../../components/RatingModal";
import { TextInput } from "react-native-paper";

const OrdersScreen = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const initialState = {
    show: false,
    farmerid: null,
    rate: 0,
    comment: "",
  };
  const [feedback, setFeedback] = useState(initialState);
  useEffect(() => {
    (async () => {
      dispatch(orderHistory());
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Orders History</Text>
      </View>

      <SectionList
        sections={orders}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <OrderCard orderItem={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>order #{title}</Text>
        )}
        renderSectionFooter={({ section: { status, farmerid } }) => (
          <View style={styles.sectionFooter}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text>status</Text>
              <Text style={styles.footertext}>{status}</Text>
            </View>

            {status == "complete" && (
              <TouchableOpacity
                onPress={() => {
                  setFeedback((prevState) => ({
                    ...prevState,
                    show: true,
                    farmerid: farmerid,
                  })); // farmer id to give feedback
                }}
              >
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <MatIcon name="comment-multiple-outline" size={31} />
                  <Text>Give us your feedback</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      <KeyboardAvoidingView behavior="padding">
        <Modal
          animationType="slide"
          transparent={true}
          visible={feedback.show}
          onRequestClose={() => {
            setFeedback({ ...initialState });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Rate Farmer</Text>

              <View style={styles.ratingContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setFeedback((prevState) => ({
                      ...prevState,
                      rate: 1,
                    }));
                  }}
                >
                  <Icon
                    name={feedback.rate > 0 ? "star" : "star-outlined"}
                    size={31}
                    color="gold"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setFeedback((prevState) => ({
                      ...prevState,
                      rate: 2,
                    }));
                  }}
                >
                  <Icon
                    name={feedback.rate > 1 ? "star" : "star-outlined"}
                    size={31}
                    color="gold"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setFeedback((prevState) => ({
                      ...prevState,
                      rate: 3,
                    }));
                  }}
                >
                  <Icon
                    name={feedback.rate == 3 ? "star" : "star-outlined"}
                    size={31}
                    color="gold"
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                mode="outlined"
                label="Feedback comment"
                placeholder="Enter Your comment Here"
                multiline
                numberOfLines={4}
                onChangeText={(text) =>
                  setFeedback((prevState) => ({ ...prevState, comment: text }))
                }
                value={feedback.comment}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <View style={styles.feedbackModalAction}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={async () => {
                    await dispatch(giveFeedback(feedback));
                    setFeedback((prevState) => ({ ...prevState, show: false }));
                  }}
                >
                  <Text style={styles.textStyle}>Submit</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "grey" }}
                  onPress={() => {
                    setFeedback({ ...initialState });
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
      <MenuFooter />
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    color: "grey",
    fontWeight: "600",
    textAlign: "center",
  },
  header: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 5,
    color: "grey",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
  },
  footertext: {
    fontSize: 20,
    fontWeight: "600",
  },
  rateFarmerBtn: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionFooter: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  // style for the modal

  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
    minWidth: "75%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

    shadowColor: "#323643",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    marginTop: 7,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  feedbackModalAction: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  feedbackTextInput: { height: 40, borderColor: "gray", borderWidth: 1 },
});
