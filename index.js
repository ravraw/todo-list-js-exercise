function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    newTask: function(title, description) {
      this.tasks.push({
        title,
        description,
        complete: false
      });
    },
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(
        `  ${this.title} : ${this.description} has${
          this.complete ? ' ' : ' not '
        }been completed`
      );
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
//console.log(tasks);
// console.log(logTaskState(task1));
task1.logTaskState();
task1.completeTask();
task1.logTaskState();
