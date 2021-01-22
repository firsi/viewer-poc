import React from "react";
import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import appActions from "@iso/redux/app/actions";
import themes from "./theme.config";
import AppLocale from "./translation";
import useWindowSize from "./useWindowSize";

const { toggleAll } = appActions;
const AppProvider: React.FC = ({ children }): JSX.Element => {
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.LanguageSwitcher.language);
  const currentAppLocale = AppLocale[locale];
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [dispatch, width, height]);
  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        <ThemeProvider theme={themes.customTheme}>{children}</ThemeProvider>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default AppProvider;
