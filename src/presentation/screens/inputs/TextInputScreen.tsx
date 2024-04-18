import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Card} from '../../components/ui/Card';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onValueChange = (value: string, field: keyof typeof form) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />

          <Card>
            <TextInput
              style={[globalStyles.input]}
              placeholder="Nombre Completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              autoComplete={'off'}
              value={form.name}
              onChangeText={value => onValueChange(value, 'name')}
              placeholderTextColor={colors.text}
            />
          </Card>
          <View style={{height: 10}} />
          <Card>
            <TextInput
              style={[globalStyles.input]}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize={'none'}
              autoCorrect={false}
              autoComplete={'off'}
              value={form.email}
              onChangeText={value => onValueChange(value, 'email')}
              placeholderTextColor={colors.text}
            />
          </Card>
          <View style={{height: 10}} />
          <Card>
            <TextInput
              style={[globalStyles.input]}
              placeholder="Telefono"
              keyboardType="phone-pad"
              autoCapitalize={'none'}
              autoCorrect={false}
              autoComplete={'off'}
              value={form.phone}
              placeholderTextColor={colors.text}
              onChangeText={value => onValueChange(value, 'phone')}
            />
          </Card>

          <View style={{height: 20}} />

          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>
          <Text>{JSON.stringify(form, null, 5)}</Text>

          <View style={{height: 20}} />
          <Card>
            <TextInput
              style={[globalStyles.input]}
              placeholder="Nombre Completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              autoComplete={'off'}
              value={form.name}
              placeholderTextColor={colors.text}
              onChangeText={value => onValueChange(value, 'name')}
            />
          </Card>
        </CustomView>
        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
