import ToDo from '../ToDo';

import './CompletedToDos.css';

const CompletedToDos = (props) => {
  // Create output of all complete ToDos
  const completedToDos = props.completedToDoValues.map((curr) => {
    return (
      <ToDo
        key={curr.key}
        id={curr.key}
        title={curr.title}
        datetime={curr.datetime}
        isComplete={true}
        addChecked={null}
        removeChecked={null}
      />
    );
  });

  if (completedToDos.length > 0) {
    return (
      <div className="completed-to-dos">
        <h2>Completed</h2>
        {completedToDos}
      </div>
    );
  } else {
    return null;
  }
};

export default CompletedToDos;
