import TaskManagerWidget from '@/widgets/task';
import TodoWidget from '@/widgets/todo';

export default function Home() {
    return (
        <main className={`flex w-full relative`}>
            <div className="h-screen">
                <TodoWidget />
            </div>
            <div className="lg:flex flex-grow p-0 hidden">
                <TaskManagerWidget />
            </div>
            <div className="lg:hidden flex-grow p-0 absolute z-50 bg-white w-screen">
                <TaskManagerWidget />
            </div>
        </main>
    );
}
