import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/Task';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  imports: [AddTaskComponent, TaskItemComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    }

    deleteTask(task: Task) {
        this.taskService
        .deleteTask(task)
        .subscribe(
            () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        );
    }

    toggleReminder(task: Task) {
        task.reminder = !task.reminder;
        this.taskService.updateTaskReminder(task).subscribe();
    }

    addTask(task: Task) {
        this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
    }
}
