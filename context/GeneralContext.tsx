import { ITask, IUserData } from '@/lib/Schemas/task';
import React, {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

interface GeneralContextType {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    isEditing: boolean;
    setIsEditing: Dispatch<SetStateAction<boolean>>;
    active: ITask | null;
    setActive: (item: ITask) => void;
    userData: IUserData;
    handleAddTask: () => void;
    handleEditTask: () => void;
    handleDeleteTask: () => void;
    children: React.ReactNode;
}
export const GeneralContext = createContext<GeneralContextType>({});

const GeneralProvider: React.FC = (props: PropsWithChildren) => {
    const [isEditing, setIsEditing] = useState(false);
    const [active, setActive] = useState(null);
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState([
        {
            text: 'Training at the Gym',
            completed: true,
            id: 'srbtbsrgbstr',
        },
        {
            text: 'Training at the Gym',
            completed: false,
            id: 'etbagnsgnhsjsdhd',
        },
        {
            text: 'Training at the Gym',
            completed: true,
            id: 'nmhcbwwrbawrbawr',
        },
    ]);

    const userData = {
        name: 'John',
        image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1711816060/Ellipse_2_bg9c9b.png',
        message: 'What are  your plans for today?',
        prefix: 'Hello ,',
    };

    const [newTaskText, setNewTaskText] = useState<string>('');
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

    const generateRandomId = (length: number): string => {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    };

    const handleAddTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask: ITask = {
                text: newTaskText,
                completed: false,
                id: generateRandomId(12),
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }
    };

    const handleEditTask = (id: string, newText: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
        setEditingTaskId(null);
    };

    const handleToggleCompleted = (id: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (id: string) => {
        console.log('id :>> ', id);
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <GeneralContext.Provider
            value={{
                tasks,
                setTasks,
                isEditing,
                setIsEditing,
                active,
                setActive,
                userData,
                handleAddTask,
                handleEditTask,
                handleToggleCompleted,
                handleDeleteTask,
                newTaskText,
                setNewTaskText,
                editingTaskId,
                setEditingTaskId,
                open,
                setOpen,
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    );
};

export const useGeneralContext = () => {
    const context = useContext(GeneralContext);
    return context;
};

export default GeneralProvider;
