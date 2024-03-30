import TaskManagerWidget from '@/widgets/task';
import TodoWidget from '@/widgets/todo';

export default function Home() {
    return (
        <main className={`flex w-full`}>
            <div className="h-screen">
                <TodoWidget />
            </div>
            <div className="flex-grow p-0">
                <TaskManagerWidget />
            </div>
        </main>
    );
}
