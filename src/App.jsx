import Header from "./components/Header";
import TasksContainer from "./Components/TasksContainer";
import TasksCount from "./components/TasksCount";
import AddTaskForm from "./Components/AddTaskForm";
const App = () => {
  return (
    <div className="container">
      <Header />
      <AddTaskForm />
      <TasksContainer />
      <TasksCount />
    </div>
  );
};

export default App;
