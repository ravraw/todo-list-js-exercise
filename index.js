// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  taskTitles.push(title);
  taskDescription.push(description);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const description = taskDescription[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(
    ` ${taskIndex + 1} > ${title} : ${description} has${
      complete ? ' ' : ' not '
    }been completed`
  );
}

// DRIVER CODE BELOW

newTask('Clean Cat Litter', 'Clean the cat litter and ensure cat is clean'); // task 0
newTask('Do Laundry', 'Wash all dirty ,fold and keep clean laundry'); // task 1
newTask(
  'Object oriented programing',
  'Complete lecture on object oriented programing'
);

logTaskState(2); // Clean Cat Litter has not been completed
//completeTask(2);
//logTaskState(2); // Clean Cat Litter has been completed
