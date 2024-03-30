import { IUserData } from '@/lib/Schemas/task';
import Image from 'next/image';
import React from 'react';

type IUserDetails = {
    data: IUserData;
};
function UserDetails({ data }: IUserDetails) {
    return (
        <div className="w-full flex gap-5 bg-primary px-8 py-5 min-h-[120px] text-white ">
            <Image
                src={data.image}
                alt=""
                width={50}
                height={50}
                className="w-[50px] h-[50px] aspect-square object-cover"
            />
            <span>
                <p className="shadowCustom">
                    {data.prefix} {data.name}
                </p>
                <p className="text-[25px] font-thin italic drop-shadow-sm shadowCustom">
                    {data.message}
                </p>
            </span>
        </div>
    );
}

export default UserDetails;
