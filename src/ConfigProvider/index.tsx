import React, { createContext } from "react";
import { GlobalConfigProps } from './interface';

export const GlobalCtx = createContext<GlobalConfigProps>({
  prefixCls: 'hy',
  darkTheme: false,
} as GlobalConfigProps);

const ConfigProvider = (props: GlobalConfigProps) => {
  const { children } = props;

  return <GlobalCtx.Provider value={props}>{children}</GlobalCtx.Provider>
};

export default ConfigProvider;