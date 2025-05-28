import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employees: Employee[] = [
    { id: 1, name: 'Alice', salary: 52000 },
    { id: 2, name: 'Bob', salary: 61000 },
    { id: 3, name: 'Charlie', salary: 48000 },
    { id: 4, name: 'David', salary: 75000 },
    { id: 5, name: 'Eve', salary: 83000 },
    { id: 6, name: 'Frank', salary: 66000 },
    { id: 7, name: 'Grace', salary: 54000 },
    { id: 8, name: 'Hannah', salary: 72000 },
    { id: 9, name: 'Ivan', salary: 50000 },
    { id: 10, name: 'Judy', salary: 88000 }
  ];
  

  newName = '';
  newSalary: number | null = null;

  get highestSalary(): number {
    return this.employees.length ? Math.max(...this.employees.map(emp => emp.salary)) : 0;
  }

  addEmployee() {
    if (this.newName.trim() && this.newSalary != null) {
      const newId = this.employees.length ? Math.max(...this.employees.map(emp => emp.id)) + 1 : 1;
      const newEmployee = { id: newId, name: this.newName.trim(), salary: this.newSalary };
      this.employees = [...this.employees, newEmployee];
      this.newName = '';
      this.newSalary = null;
    }
  }
  
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  editingRow: number | null = null;
editedName: string = '';
editedSalary: number | null = null;

startEdit(emp: Employee) {
  this.editingRow = emp.id;
  this.editedName = emp.name;
  this.editedSalary = emp.salary;
}

updateEmployee(id: number) {
  this.employees = this.employees.map(emp => {
    if (emp.id === id) {
      return { ...emp, name: this.editedName, salary: this.editedSalary ?? emp.salary };
    }
    return emp;
  });
  this.editingRow = null;
}

  
}
