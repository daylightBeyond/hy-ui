import { ReactNode } from "react";

interface GlobalConfigProps {
  children?: ReactNode,
  /**
   * @description 全局组件类名前缀
   * @default hy
   */
  prefixCls?: any,
  /**
   * @description 深色模式
   * @default false
   */
  darkTheme?: boolean
};

export type { GlobalConfigProps };