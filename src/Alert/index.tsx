import cs from 'classnames';
import React, { useContext } from 'react';
import { GlobalCtx } from '../ConfigProvider';
import { GlobalConfigProps } from '../ConfigProvider/interface';
import { AlertProps } from './interface';

const Alert = (props: AlertProps) => {
  const { className, style, type = 'waring', title } = props;
  const prefixCls = useContext(GlobalCtx) as GlobalConfigProps;
  const alertPrefixCls = prefixCls + 'alert';

  const classNames = cs(
    alertPrefixCls,
    {
      [`${alertPrefixCls}-success`]: type === 'success',
      [`${alertPrefixCls}-info`]: type === 'info',
      [`${alertPrefixCls}-warning`]: type === 'waring',
      [`${alertPrefixCls}-error`]: type === 'error',
    },
    className,
  );

  return (
    <div className={classNames} style={style}>
      {title}
    </div>
  );
};

export default Alert;
