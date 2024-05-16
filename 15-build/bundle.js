'use strict';

class Task {
    run() {
        console.log('Текст');
    }
}

class User {
    do(task) {
        task.run();
    }
}

const task = new Task();
const user = new User();
user.do(task);
