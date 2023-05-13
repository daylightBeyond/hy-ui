import cs from 'classnames';
import React, { forwardRef, useContext } from 'react';
import { GlobalCtx } from '../ConfigProvider';
import { GlobalConfigProps } from '../ConfigProvider/interface';
import { DropdownProps } from './interface';

const Dropdown = (props: DropdownProps) => {
  const {
    className,
    style,
    menu,
    disabled,
    type = 'hover',
    position = 'bottom',
  } = props;

  const { prefixCls } = useContext(GlobalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className);

  return <div>index</div>;
};

const forwardRefDropdown = forwardRef<unknown, DropdownProps>(Dropdown);

forwardRefDropdown.displayName = 'Dropdown';

export default Dropdown;
