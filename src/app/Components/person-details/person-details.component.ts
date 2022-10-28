import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/shared/person.service';
import { Person } from './../../shared/person.model';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  constructor(public personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPerson().subscribe((data) => {
      this.personService.listPerson = data;
    });
  }
  editPerson(selectedPerson: Person) {
    console.warn(selectedPerson);
    this.personService.personData = selectedPerson;
  }
  deletePerson(id: number) {
    if (confirm('Are you really want to remove?')) {
      this.personService.deletePerson(id).subscribe(
        (data) => {
          alert('Successfully Deleted!');
          this.personService.getPerson().subscribe((data) => {
            this.personService.listPerson = data;
          });
        },
        (err) => {
          alert('Failed!!');
        }
      );
    }
  }
}
