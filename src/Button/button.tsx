import React, { useContext, useMemo, forwardRef } from 'react';
import cs from "classnames";
import { ButtonProps } from './interface';
import { GlobalConfigProps } from '../ConfigProvider/interface';
import { GlobalCtx } from '../ConfigProvider/index';
import './style/index.less';

const Button = (props: ButtonProps) => {
  const { 
    type = "default",
    icon,
    shape = "default",
    size = "middle",
    className,
    disabled = false,
    style,
    children,
    onClick
  } = props;

  const { prefixCls } = useContext(GlobalCtx) as GlobalConfigProps;
  const btnPrefixCls = prefixCls + '-btn';

  const classes = cs(btnPrefixCls, {
    [`${btnPrefixCls}-default`]: type === 'default',
    [`${btnPrefixCls}-primary`]: type === 'primary',
    [`${btnPrefixCls}-danger`]: type === 'danger',
    [`${btnPrefixCls}-dashed`]: type === 'dashed',
    [`${btnPrefixCls}-text`]: type === 'text',
    [`${btnPrefixCls}-link`]: type === 'link',
  }, className);

  return (
    <button
      type='button'
      className={classes}
      style={style}
    >
      <span>
        {icon}
        {children}
      </span>
    </button>
  )
};

export default Button;