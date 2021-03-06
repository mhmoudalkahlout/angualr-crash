import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

    @Input() task!: Task;
    faTimes = faTimes;
    @Output() btnDeleteTask: EventEmitter<Task> = new EventEmitter();
    @Output() btnToggleReminder: EventEmitter<Task> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onDelete(task: Task) {
        this.btnDeleteTask.emit(task)
    }

    onToggle(task: Task) {
        this.btnToggleReminder.emit(task)
    }

}
