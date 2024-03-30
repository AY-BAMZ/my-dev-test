import Button from '@/components/Button';
import Input from '@/components/Input';
import { useGeneralContext } from '@/context/GeneralContext';
import React, { useState } from 'react';

function TaskManagerWidget() {
    const [task, setTask] = useState('');
    const {
        active,
        setActive,
        handleAddTask,
        handleEditTask,
        handleDeleteTask,
        editingTaskId,
        newTaskText,
        setNewTaskText,
        open,
        setOpen,
    } = useGeneralContext();
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTask(e.target.value);
    // };
    return (
        <div className="flex flex-col w-full h-screen overflow-y-scroll pr-0">
            <span className="w-full flex items-center justify-center gap-5 bg-primary px-8 py-5 h-[120px] text-white z-10">
                <p className="text-[24px] shadowCustom">Edit Task</p>
            </span>
            {open && (
                <span className="text-[18px] w-[66px] h-[70px] lg:hidden flex items-center justify-center top-0 left-5 bg-primary-text text-white">
                    X
                </span>
            )}
            <span className="flex-grow p-6 flex flex-col gap-2">
                <p>Task Name</p>
                {editingTaskId ? (
                    <Input
                        value={active.text}
                        onChange={(e) =>
                            setActive({ ...active, text: e.target.value })
                        }
                        placeholder="Enter task"
                    />
                ) : (
                    <Input
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        placeholder="Enter task"
                    />
                )}
            </span>
            <span className="flex gap-3 p-6">
                {editingTaskId && (
                    <Button
                        onClick={() => handleDeleteTask(editingTaskId)}
                        className="bg-danger border-danger-border"
                    >
                        Delete
                    </Button>
                )}
                {editingTaskId ? (
                    <Button
                        className="flex-grow"
                        onClick={() => handleEditTask(active.id, active.text)}
                    >
                        Save
                    </Button>
                ) : (
                    <Button className="flex-grow" onClick={handleAddTask}>
                        Create Task
                    </Button>
                )}
            </span>
        </div>
    );
}

export default TaskManagerWidget;
