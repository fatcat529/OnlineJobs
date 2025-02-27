import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH } from '../../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');

    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };
    const { t } = useTranslation();

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    return (
        <Container>
            <View style={Logins.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={Logins.container}>
                        <View style={Style.MinViewContent}>
                            <View style={Logins.ManViewLogins}>
                                <Image style={Logins.imagesetus} resizeMode='cover' source={images.App_logo} />
                            </View>
                            <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
                            <Spacing space={SH(20)} />
                            <View style={Logins.InputSpaceView}>
                                <Input
                                    placeholder={t("Mobile_Number")}
                                    onChangeText={(value) => setMobileNumber(value)}
                                    value={mobileNumber}
                                    inputType="numeric"
                                    maxLength={10}
                                    placeholderTextColor={Colors.gray_text_color}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Style.FlexRowPassword}>
                                <TextInput
                                    style={Style.InputPassword}
                                    name="password"
                                    value={TextInputPassword}
                                    placeholder={t("Password_Text")}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={Colors.gray_text_color}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(text) => setTextInputPassword(text)}
                                />
                                <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }}>
                                    <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={25} style={Logins.eyeiconset} />
                                </TouchableOpacity>
                            </View>
                            <Spacing space={SH(10)} />
                            <View style={Logins.ViewTextStyle}>
                                <Text style={Logins.textStyle}>{t("Dont_Have_Account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Logins.LoginButton}>
                                <Button
                                    title={t("Login_Text")}
                                    onPress={() => navigation.navigate(RouteName.OTP_VERYFY_SCREEN)}
                                />
                            </View>
                            <Spacing space={SH(10)} />
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.Forget_Password)}>
                                <Text style={Logins.Forgetpasswordstyles}>{t("Forgot_Password")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}
export default LoginScreen;
