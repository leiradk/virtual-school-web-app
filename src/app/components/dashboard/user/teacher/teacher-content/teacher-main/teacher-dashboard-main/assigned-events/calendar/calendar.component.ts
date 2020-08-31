import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import Swal from 'sweetalert2'
import { Router } from "@angular/router";
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import "fullcalendar";
import 'sweetalert2/src/sweetalert2.scss'
declare var jQuery: any;

import { ApiHostService } from '../../../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../../../services/system.utils';
// import { $ } from 'protractor';
import * as $ from 'jquery';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {



  addEventDate: any;
  EventData: any;
  calendarOptions: CalendarOptions;
  viewCalendar: boolean = false;
  events: any = [];
  userData: any;
  @ViewChild('fullcalendar') calendarComponent = FullCalendarComponent;
  // events: any = [
  //   {
  //     title: 'My Event 1',
  //     start: '2020-08-19',
  //     description: 'any description',
  //     type: 1 // Custom field
  //   },
  //   {
  //     title: 'My Event',
  //     start: '2020-08-19',
  //     type: 1 // Custom field
  //   },
  //   {
  //     title: 'My Event',
  //     start: '2020-08-19',
  //     type: 1 // Custom field
  //   },
  //   {
  //     title: 'My Event 2',
  //     start: '2020-08-20',
  //     eventContent: "weweweweww",
  //     end: '2020-08-22',
  //     type: 1 // Custom field
  //   },
  //   {
  //     title: 'added Event',
  //     start: '2020-08-19',
  //     type: 1 // Custom field
  //   },
  // ];


  constructor(
    private router: Router,
    private apiHost: ApiHostService,
    private system: SystemUtils) { }

  ngOnInit(): void {
    this.userData = this.system.retrieveItem('userData');
    setTimeout(() => {
      this.fullCalendarOptions();
    }, 3000)

    this.getEvents();
  }
  opensweetalert() {

  }
  fullCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      events: this.events,
      // events: function (info, succesfulCallback, failureCallback) {

      // },
      eventClick: function (info) {
        // this.getDate(event);
      },
      editable: true,

      dateClick: (info) => {
        // console.log(info)
        this.addEventDate = info.dateStr;
        Swal.fire({
          title: 'Create an Event',
          text: info.dateStr,
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Create'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(["/user/t/main/event-scheduler"]);
          }
        })
        // jQuery('#addEvent').modal('show');
      },

    };
  }


  // getDate(event) {
  //   console.log('clicked')
  //   console.log(event)
  // }

  dateClick() {
    const eventSetup = {
      title: this.EventData,
      start: this.addEventDate,
      type: 1 // Custom field
    }
    // this.events.push(eventSetup);
    jQuery('#full-calendar').fullcalendar('renderEvent', eventSetup);
  }

  getEvents() {
    const { token } = this.system.retrieveItem('userData');
    this.apiHost.getEventScheduleForTeacher(token)
      .subscribe((response: any) => {
        console.log(response);
        const { events } = response.body
        this.setEvents(events);
      }, (error: any) => {
        console.log(error)
      })
  }

  setEvents(data) {
    // this.events = data;
    // console.log(this.events.length);
    for (let i = 0; i <= (data.length - 1); i++) {
      const payload = {
        title: data[i].title,
        description: data[i].description,
        start: this.splitDate(data[i].startDate),
        end: this.splitDate(data[i].endDate),
        type: 1
      }
      this.events.push(payload);
      // this.calendarOptions.events.push(payload);
    }
    // this.viewCalendar = true 
    // this.calendarOptions.addEv. = this.events;
    // this.calendarComponent.fullCalendar('')
    // $('full-calendar').fullcalendar('renderEvent', this.events);
    // this.calendarComponent.fullCalendar('refetchEvents');
    this.calendarOptions.eventAdd = this.events



  }

  splitDate(date) {
    const splitDate = date.split(' ');
    return splitDate[0];
  }
}
