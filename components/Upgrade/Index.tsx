import React from 'react';
import Cup from '@/assets/icons/cup.svg';

export default function Upgrade() {
    return (
        <div className="w-full h-[120px] flex p-5 relative bg-secondary border-solid border-[2px] border-secondary-border items-center gap-4">
            <Cup />
            <p className="text-[18px] text-primary-text font-medium">
                Go Pro Upgrade Now
            </p>
            <span className="text-[18px] w-[66px] h-[70px] flex items-center justify-center absolute top-0 right-5 bg-primary-text text-white">
                $1
            </span>
        </div>
    );
}
