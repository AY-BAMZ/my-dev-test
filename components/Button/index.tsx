import { cn } from '@/lib';
import React from 'react';

interface IButton {
    children: React.ReactNode;
    variant?: string;
    className?: string;
    disabled?: boolean;
}

function Button({
    children,
    variant = 'p',
    className,
    disabled = false,
    ...otherProps
}: IButton) {
    return (
        <button
            className={cn(
                'h-12 rounded-[4px] px-3 flex items-center cursor-pointer justify-center gap-2 w-fit border-solid border-[2px] shadow-md',
                {
                    'bg-primary border-primary-text text-white shadowCustom':
                        variant === 'p',
                },
                {
                    'bg-white text-primary-text border-primary-text shadow-none':
                        variant === 's',
                },
                {
                    'bg-bg-btn text-white': variant === 't',
                    'opacity-50 pointer-events-auto': disabled,
                },

                className
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;
