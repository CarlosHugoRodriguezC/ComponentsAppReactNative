import React, {useContext, useState} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {lightColors} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChange}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles.switchRow}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}
      <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        style={styles.switchRow}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
