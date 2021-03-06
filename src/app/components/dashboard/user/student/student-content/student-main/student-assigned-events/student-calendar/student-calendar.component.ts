import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import Swal from 'sweetalert2'
import { Router } from "@angular/router";
import 'sweetalert2/src/sweetalert2.scss'
declare var jQuery: any;

@Component({
  selector: 'app-student-calendar',
  templateUrl: './student-calendar.component.html',
  styleUrls: ['./student-calendar.component.scss']
})
export class StudentCalendarComponent implements OnInit {
  addEventDate: any;
  EventData: any;
  calendarOptions: CalendarOptions;

  events: any = [
    {
      title: 'My Event',
      start: '2020-08-19',
      type: 1 // Custom field
    },
    {
      title: 'My Event',
      start: '2020-08-19',
      type: 1 // Custom field
    },
    {
      title: 'My Event',
      start: '2020-08-19',
      type: 1 // Custom field
    },
    {
      title: 'My Event 2',
      start: '2020-08-20',
      eventContent: "weweweweww",
      end: '2020-08-22',
      type: 1 // Custom field
    },
    {
      title: 'added Event',
      start: '2020-08-19',
      type: 1 // Custom field
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fullCalendarOptions();


  }
  opensweetalert() {

  }
  fullCalendarOptions() {
    console.log('refresh')
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      events: this.events,
      // eventClick: function (info) {
      //   console.log(info)
      // },
      // dateClick: (info) => {
      //   this.addEventDate = info.dateStr;
      //   console.log(this.addEventDate)
      //   Swal.fire({
      //     title: 'Create an Event',
      //     text: info.dateStr,
      //     icon: 'question',
      //     showCancelButton: true,
      //     confirmButtonColor: '#3085d6',
      //     cancelButtonColor: '#d33',
      //     confirmButtonText: 'Create'
      //   }).then((result) => {
      //     if (result.value) {
      //       this.router.navigate(["/user/s/main/event-scheduler"]);
      //     }
      //   })
      // },

    };
  }


  // getDate(event) {
  //   console.log('clicked')
  //   console.log(event)
  // }

  dateClick() {
    console.log('clicked', this.addEventDate)
    const eventSetup = {
      title: this.EventData,
      start: this.addEventDate,
      type: 1 // Custom field
    }
    this.events.push(eventSetup);
    jQuery('#full-calendar').fullcalendar('renderEvent', eventSetup);
  }
}
