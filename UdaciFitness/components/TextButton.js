import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase } from 'react-native'

export default function TextButton({ children, onPress, style = {} }) {
  return (<TouchableOpacity onPress={onPress}><Text style={[styles.reset, style]}>{children}</Text></TouchableOpacity>)
}