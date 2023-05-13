import { CSSProperties, ReactNode } from 'react';
type dataType = {
  content: string;
  link: string;
  children?: dataType[];
  visibled?: boolean;
  icon: ReactNode;
};

interface DropdownProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 菜单配置项
   */
  menu?: string[] | dataType[];
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 选中类型
   * @default hover
   */
  type?: 'hover' | 'click';
  /**
   * @description 菜单弹出位置
   * @default bottom
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export type { DropdownProps, dataType };
