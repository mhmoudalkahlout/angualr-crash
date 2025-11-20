import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, FaIconComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})

export class TaskItemComponent {

    @Input() task!: Task;
    @Output() btnDeleteTask: EventEmitter<Task> = new EventEmitter();
    @Output() btnToggleReminder: EventEmitter<Task> = new EventEmitter();

    faTimes = faTimes;

    onDelete(task: Task) {
        this.btnDeleteTask.emit(task)
    }

    onToggle(task: Task) {
        this.btnToggleReminder.emit(task)
    }
}
