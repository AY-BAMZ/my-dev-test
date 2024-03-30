import React from 'react';
import Checker from '../Checker';
import { cn } from '@/lib';
import Button from '../Button';
import { ITask } from '@/lib/Schemas/task';
import { useGeneralContext } from '@/context/GeneralContext';

function TaskComponent({
    data,
    onClick,
}: {
    data: ITask;
    onClick: () => void;
}) {
    const { setEditingTaskId, setActive, handleToggleCompleted } =
        useGeneralContext();
    const handleSetActive = (data: ITask) => {
        setActive(data);
        setEditingTaskId(data.id);
        setOpen(true);
    };
    return (
        <div
            className="flex items-center gap-4 w-full p-6 py-7 bg-white shadow-md rounded-md cursor-pointer"
            onClick={onClick}
        >
            <Checker
                setChecked={() => handleToggleCompleted(data.id)}
                checked={data.completed}
            />
            <p
                className={cn('flex-grow ', {
                    'cancelText text-black-500': data.completed,
                })}
            >
                {data.text}
            </p>
            <Button variant="s" onClick={() => handleSetActive(data)}>
                Edit
            </Button>
        </div>
    );
}

export default TaskComponent;
