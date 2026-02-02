import React from 'react';
import { classNames } from '../../utils';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'default' | 'pill' | 'circle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  block?: boolean;
  shape?: ButtonShape;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  block = false,
  shape = 'default',
  children,
  className,
  disabled,
  href,
  ...props
}) => {
  const classes = classNames(
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    `ds-button--${shape}`,
    {
      'ds-button--block': block,
      'ds-button--loading': loading,
      'ds-button--icon-only': icon && !children,
    },
    className
  );

  const content = (
    <>
      {loading && (
        <span className="ds-button__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              className="ds-button__spinner-track"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="ds-button__spinner-path"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      {icon && iconPosition === 'left' && (
        <span className="ds-button__icon ds-button__icon--left">{icon}</span>
      )}
      {children && <span className="ds-button__text">{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className="ds-button__icon ds-button__icon--right">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled || loading}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
