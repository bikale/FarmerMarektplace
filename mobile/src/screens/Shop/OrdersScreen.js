// @ts-nocheck
import React, { useEffect } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuFooter from "../../components/MenuFooter";
import OrderCard from "../../components/OrderCard";

import { useDispatch, useSelector } from "react-redux";
import { orderHistory } from "../../store/actions/order";

const OrdersScreen = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

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
        renderSectionFooter={({ section: { status } }) => (
          <Text style={styles.footertext}>status {status}</Text>
        )}
      />

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
    fontSize: 17,
    fontWeight: "600",
    color: "grey",
  },
});
