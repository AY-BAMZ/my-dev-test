import React, { LegacyRef, forwardRef } from 'react';
import { cn } from '@/lib';
import { isEmptyOrUndefined } from '@/lib/helper';

interface IInput {
    placeholder?: string;
    type?: string;
    className?: string | TailwindClasses;
    containerClassName?: string | TailwindClasses;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched?: boolean;
    error?: string;
    label?: string;
    note?: string;
}
const Input = forwardRef(
    (
        {
            placeholder,
            type,
            className,
            containerClassName,
            value,
            onChange,
            touched,
            error,
            label,
            note,
            ...otherProps
        }: IInput,
        ref: LegacyRef<HTMLInputElement> | undefined
    ) => {
        return (
            <div className={cn('mb-4', containerClassName)}>
                {label && (
                    <label className="font-light block text-xs mb-1">
                        {label}
                    </label>
                )}
                <input
                    placeholder={placeholder}
                    type={type}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    className={cn(
                        'text-primary-text w-full bg-[#f9f9f9] h-[48px] px-4 border-solid rounded-[9px] placeholder:text-black-400 outline-none border-[#00000018] border-[1px]',
                        className,
                        {
                            'border-danger-deep':
                                typeof touched === 'boolean' &&
                                touched &&
                                isEmptyOrUndefined(error),
                        }
                    )}
                    {...otherProps}
                />
                {note && (
                    <span className="font-light block text-xs mt-1">
                        {note}
                    </span>
                )}
                {touched && error && (
                    <span className="font-light block text-xs mt-1 text-danger-deep">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
