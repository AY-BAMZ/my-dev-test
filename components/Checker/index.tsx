import { cn } from '@/lib';
import React from 'react';
import CheckedIcon from '@/assets/icons/checked.svg';
import UnCheckedIcon from '@/assets/icons/un_checked.svg';

interface IChecked {
    checked: boolean;
    size?: number;
    setChecked: (checked: boolean) => void;
}

function Checker({ checked, setChecked, size = 32 }: IChecked) {
    return (
        <>
            {checked ? (
                <button aria-label="UnCheck">
                    <CheckedIcon
                        onClick={() => setChecked(!checked)}
                        style={{ fontSize: size }}
                        className={cn(' cursor-pointer')}
                    />
                </button>
            ) : (
                <button aria-label="Check">
                    <UnCheckedIcon
                        onClick={() => setChecked(!checked)}
                        style={{ fontSize: size }}
                        className={cn('cursor-pointer')}
                    />
                </button>
            )}
        </>
    );
}

export default Checker;
