import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const CustomCheckInput = ({ isCircularCheckBox = false, label = 'label' }) => {
  const [value, setValue] = useState(null)
  const onCheckBoxPressHandler = () => {
    setValue(!value)
  }
  return (
    <TouchableOpacity
      onPress={() => {
        onCheckBoxPressHandler();
      }}
      style={styles.checkboxContainer}>
      <View
        style={
          [!!value
            ? isCircularCheckBox
              ? styles.checkboxCheckedCricular
              : styles.checkboxChecked
            : isCircularCheckBox
              ? styles.checkboxUncheckedCricular
              : styles.checkboxUnchecked, {
            marginRight: '2.5%'
          }]
        }>
        {!!value && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <View style={styles.labelContainer}>
        <Text style={!!value ? styles.labelActive : styles.labelUnActive}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomCheckInput