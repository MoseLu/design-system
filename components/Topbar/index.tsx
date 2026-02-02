import React from 'react';
import './Topbar.css';

export interface TopbarButton {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}

export interface TopbarProps {
  /** 顶栏标题 */
  title: string;
  /** Logo 图标 */
  logo?: React.ReactNode;
  /** 左侧额外内容 */
  left?: React.ReactNode;
  /** 右侧内容 */
  right?: React.ReactNode;
  /** 导航按钮 */
  buttons?: TopbarButton[];
  /** 固定定位 */
  fixed?: boolean;
  /** 主题 */
  theme?: 'light' | 'dark';
  /** 自定义类名 */
  className?: string;
  /** 样式对象 */
  style?: React.CSSProperties;
}

export const Topbar: React.FC<TopbarProps> = ({
  title,
  logo,
  left,
  right,
  buttons = [],
  fixed = false,
  theme = 'light',
  className = '',
  style,
}) => {
  return (
    <header
      className={`ds-topbar ${fixed ? 'ds-topbar--fixed' : ''} ds-topbar--${theme} ${className}`}
      style={style}
    >
      <div className="ds-topbar__container">
        {/* 左侧区域 */}
        <div className="ds-topbar__left">
          {logo && <div className="ds-topbar__logo">{logo}</div>}
          <h1 className="ds-topbar__title">{title}</h1>
          {left}
        </div>

        {/* 中间区域（导航按钮） */}
        {buttons.length > 0 && (
          <nav className="ds-topbar__nav" role="navigation" aria-label="主导航">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`ds-topbar__button ${button.active ? 'ds-topbar__button--active' : ''}`}
                onClick={button.onClick}
                disabled={button.disabled}
                aria-current={button.active ? 'page' : undefined}
              >
                {button.icon && <span className="ds-topbar__button-icon">{button.icon}</span>}
                {button.text}
              </button>
            ))}
          </nav>
        )}

        {/* 右侧区域 */}
        <div className="ds-topbar__right">{right}</div>
      </div>
    </header>
  );
};

Topbar.displayName = 'Topbar';

export default Topbar;
