import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = (props) => {
  const {
    style,
    opacity,
    gradient,
    color,
    startColor,
    endColor,
    end,
    start,
    locations,
    shadow,
    children,
  } = props;

  if (gradient) {
    return (
      <TouchableOpacity
        style={[styles.button, styles.green]}
        activeOpacity={opacity}
        {...props}
      >
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={[styles.button, styles.shadow]}
          colors={[startColor, endColor]}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.button, styles.shadow, styles.white]}
      activeOpacity={opacity || 0.8}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
Button.defaultProps = {
  startColor: "#0AC4BA",
  endColor: "#2BDA8E",
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: "#FFFFFF",
};

export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    height: 55,
    justifyContent: "center",
    marginVertical: 6,
  },
  shadow: {
    shadowColor: "#323643",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  green: { backgroundColor: "#0AC4BA" },
  white: { backgroundColor: "#FFF" },
});
