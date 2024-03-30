import Button from '@/components/Button';
import TaskComponent from '@/components/TaskComponent';
import Upgrade from '@/components/Upgrade/Index';
import UserDetails from '@/components/UserDetails';
import { useGeneralContext } from '@/context/GeneralContext';
import { cn } from '@/lib';
import { ITask } from '@/lib/Schemas/task';
import React from 'react';

function TodoWidget() {
    const { tasks, userData, setActive, setIsEditing } = useGeneralContext();

    const handleSetActive = (item: ITask) => {
        setActive(item);
    };

    return (
        <div
            className={cn(
                'flex flex-col w-full m-0 p-0 h-full shadowRight z-40 relative'
            )}
        >
            <UserDetails data={userData} />
            <Upgrade />
            <span className="flex flex-col gap-6 p-5 overflow-y-scroll h-full">
                {tasks.map((item, index: number) => (
                    <TaskComponent
                        key={index}
                        data={item}
                        onClick={() => handleSetActive(item as ITask)}
                    />
                ))}
            </span>
            <Button className="text-[36px] font-semibold w-[60px] h-[60px] rounded-full absolute bottom-5 right-5">
                +
            </Button>
        </div>
    );
}

export default TodoWidget;
