import { CSSProperties } from 'react';
export interface AlertProps {
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 类型
   * @default info
   */
  type?: 'success' | 'info' | 'waring' | 'error';
  /**
   * @description 标题
   * @default ''
   */
  title?: string;
}
