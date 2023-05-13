import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /**
   * @description 按钮整体
   * @default primary
   */
  type?: 'default' | 'primary' | 'danger' | 'dashed' | 'link' | 'text';
  // 按钮图标
  icon?: ReactNode;
  /**
   * @description 按钮形状
   * @default default
   */
  shape?: 'default' | 'circle' | 'round';
  /**
   * @description 按钮大小
   * @default middle
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export type { ButtonProps };
