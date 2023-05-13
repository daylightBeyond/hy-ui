import cs from 'classnames';
import React, { useContext } from 'react';
import { GlobalCtx } from '../ConfigProvider/index';
import { GlobalConfigProps } from '../ConfigProvider/interface';
import { ButtonProps } from './interface';
import './style/index.less';

const Button = (props: ButtonProps) => {
  const {
    type = 'default',
    icon,
    shape = 'default',
    size = 'middle',
    className,
    disabled = false,
    style,
    children,
    onClick,
  } = props;

  const { prefixCls } = useContext(GlobalCtx) as GlobalConfigProps;
  const btnPrefixCls = prefixCls + '-btn';

  const classNames = cs(
    btnPrefixCls,
    {
      [`${btnPrefixCls}-default`]: type === 'default',
      [`${btnPrefixCls}-primary`]: type === 'primary',
      [`${btnPrefixCls}-danger`]: type === 'danger',
      [`${btnPrefixCls}-dashed`]: type === 'dashed',
      [`${btnPrefixCls}-text`]: type === 'text',
      [`${btnPrefixCls}-link`]: type === 'link',
    },
    className,
  );

  return (
    <button type="button" className={classNames} style={style}>
      <span>
        {icon}
        {children}
      </span>
    </button>
  );
};

export default Button;
