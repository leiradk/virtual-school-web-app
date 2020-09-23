import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUtils } from './system.utils';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiHostService {

  // localhost = `http://139.162.238.76/vs/`;
  localhost = 'https://www.twowaydigitalschool.ie/vs/';
  constructor(
    private https: HttpClient
  ) { }
  //post data

  //API for sign-in
  signin(payload) {
    return this.https.post(`${this.localhost}login`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      )
  }

  //api for adding teacher on admin side
  addTeacher(payload) {
    return this.https.post(`${this.localhost}admin/add/teacher`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  //api for adding parent on admin side
  addParent(payload) {
    return this.https.post(`${this.localhost}admin/add/parent`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  //add student admin side
  addStudent(payload) {
    return this.https.post(`${this.localhost}admin/add/student`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //addd classroom admin side
  addClass(payload) {
    return this.https.post(`${this.localhost}teacher/add/class`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //send classroom invitation to students
  sendClassInvites(payload) {
    return this.https.post(`${this.localhost}teacher/send/invite/class`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //save a teachers post for his/her students
  teacherPost(payload) {
    return this.https.post(`${this.localhost}teacher/add/class/post`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  //send comment on the student side
  sendCommentStudent(payload) {
    return this.https.post(`${this.localhost}student/comment/post`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  //send comment of the teacher side
  sendCommentTeacher(payload) {
    return this.https.post(`${this.localhost}teacher/comment/post`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //add classwork for the students
  addClasswork(payload) {
    return this.https.post(`${this.localhost}teacher/add/classwork`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  //submit answer on classwork
  submitClasswork(payload) {
    return this.https.post(`${this.localhost}student/submit/classwork`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //adding student on parent side
  addMyStudent(payload) {
    return this.https.post(`${this.localhost}parent/add/student`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //adding badges for giving to student
  addStudentBadge(payload) {
    return this.https.post(`${this.localhost}teacher/add/badge`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

  //adding module on admin side
  addModule(payload) {
    return this.https.post(`${this.localhost}admin/add/module`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }


  //adding teaching materials on teacher side
  addTeachingMaterials(payload) {
    return this.https.post(`${this.localhost}teacher/add/learning/material`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }
  //adding lesson plan on teacher side
  addLessonPlan(payload) {
    return this.https.post(`${this.localhost}teacher/add/lesson/plan`, payload)
      .pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      );
  }

    //add badge on student
    addBadgeForStudent(payload) {
      return this.https.post(`${this.localhost}teacher/add/badge/student`, payload)
        .pipe(
          map((data: any) => {
            return data;
          }), catchError(error => {
            return throwError(error);
          })
        );
    }

//add an event schedule for the teacher side
addEventScheduleForTeacher(payload) {
  return this.https.post(`${this.localhost}teacher/create/event/schedule`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//put data
//accept classroom invitation on student side
acceptInvitation(payload) {
  return this.https.put(`${this.localhost}student/accept/class/invite`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
//add a user to the archive
addToArchive(payload) {
  return this.https.put(`${this.localhost}admin/add/to/archive/user`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
pullFromArchive(payload) {
  return this.https.put(`${this.localhost}admin/pull/to/archive/user`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
//submit points to a student
submitClassworkPoints(payload) {
  return this.https.put(`${this.localhost}teacher/add/classworks/points`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
//Create Conference room
createConference(payload) {
  return this.https.post(`${this.localhost}create/conference/room`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//update classwork for students
updateClassWork(payload) {
  return this.https.put(`${this.localhost}teacher/update/classwork`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//update classwork for students
updatePassword(payload) {
  return this.https.put(`${this.localhost}update/password`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

updateParentProfile(payload) {
  return this.https.put(`${this.localhost}parent/update/profile`, payload)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}


//get data
//get list teacher for the admin 
getTeacher(token) {
  return this.https.get(`${this.localhost}admin/list/teachers?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

// get list student for the admin
getStudents(token) {
  return this.https.get(`${this.localhost}admin/list/students?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

// get list student for the admin
getParents(token) {
  return this.https.get(`${this.localhost}admin/list/parents?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get classroom for a teacher
getClassroom(token) {
  return this.https.get(`${this.localhost}teacher/get/classes?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    )
}

//get classroom invitation for a student
getClassInvitation(token) {
  return this.https.get(`${this.localhost}student/list/class/invitation?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//search student based on the list
searchStudents(token, yearlevel) {
  return this.https.get(`${this.localhost}list/student?token=${token}&yearlevel=${yearlevel}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//search student based on the list
getClassmates(id, token) {
  return this.https.get(`${this.localhost}student/get/class/joined?classID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all classroom invitations for a student
getInvitedStudents(id, token) {
  return this.https.get(`${this.localhost}teacher/list/invited/by/class?classID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all classroom post on teacher side
getTeacherPosts(id, token) {
  return this.https.get(`${this.localhost}teacher/get/class/post?classID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all classroom post on student side
getStudentPosts(id, token) {
  return this.https.get(`${this.localhost}student/get/class/post?classID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all classroom post on student side
getStudentComments(id, token) {
  return this.https.get(`${this.localhost}student/post/get/comments?postID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
//get all classroom post on teacher side
getTeacherComments(id, token) {
  return this.https.get(`${this.localhost}teacher/post/get/comments?postID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all rooms classwork for the teacher
getClassworkTeacher(id, token) {
  return this.https.get(`${this.localhost}teacher/get/classworks?classID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all rooms classwork for the teacher
getClassworkStudent(id, token) {
  return this.https.get(`${this.localhost}student/get/classworks?classID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

getClassworkSubmissions(id, token) {
  return this.https.get(`${this.localhost}teacher/get/classworks/submitted?classworkID=${id}&token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

getParentProfile(token) {
  return this.https.get(`${this.localhost}parent/get/profile?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

getMyStudents(token) {
  return this.https.get(`${this.localhost}parent/get/students?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}


getMyStudentsClass(token, user) {
  return this.https.get(`${this.localhost}parent/get/student/classrooms?token=${token}&user=${user}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

getStudentClasswork(token, studId, classId) {
  return this.https.get(`${this.localhost}parent/get/student/classwork?token=${token}&studID=${studId}&classID=${classId}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

getStudentgrade(token, studId, classId) {
  return this.https.get(`${this.localhost}parent/get/student/grades?token=${token}&studID=${studId}&classID=${classId}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
//redirect to a conference room student side
getConferenceLink(token, classId) {
  return this.https.get(`${this.localhost}get/conference/url?token=${token}&classID=${classId}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
getMyTeacherList(token) {
  return this.https.get(`${this.localhost}student/get/teachers?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
teacherGetTotalStudents(token) {
  return this.https.get(`${this.localhost}teacher/get/students/total?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
teacherGetTotalClasses(token) {
  return this.https.get(`${this.localhost}teacher/get/classes/total?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
teacherGetTotalParents(token) {
  return this.https.get(`${this.localhost}teacher/get/student/parents/total?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
getBadges(token) {
  return this.https.get(`${this.localhost}teacher/get/badges?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
getAvailableBadges(token, studId, classId) {
  return this.https.get(`${this.localhost}teacher/get/student/available/badges?token=${token}&studID=${studId}&classID=${classId}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

studentGetTotalTeachers(token) {
  return this.https.get(`${this.localhost}student/get/total/teachers?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
studentGetTotalBadge(token) {
  return this.https.get(`${this.localhost}student/get/total/badges?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}
studentGetTotatClasses(token) {
  return this.https.get(`${this.localhost}student/get/total/classes?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get modules for admin
getModule(token) {
  return this.https.get(`${this.localhost}admin/get/modules?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get modules for student
getModuleStudent(token) {
  return this.https.get(`${this.localhost}student/get/modules?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get modules for teacher
getModuleTeacher(token) {
  return this.https.get(`${this.localhost}teacher/get/modules?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all classes post on teacher side
getAllPostOnTeacher(token) {
  return this.https.get(`${this.localhost}teacher/get/all/classes/post?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all classes post on student side
getAllPostOnStudent(token) {
  return this.https.get(`${this.localhost}student/get/all/classes/post?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get all events Scheduled on teacher side
getEventScheduleForTeacher(token) {
  return this.https.get(`${this.localhost}teacher/get/events/schedule?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get teachers teaching materialsteacher side
getTeachingMaterialsTeacher(token) {
  return this.https.get(`${this.localhost}teacher/get/learning/materials?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

//get lesson plan materialsteacher side
getLessonPlanTeacher(token) {
  return this.https.get(`${this.localhost}teacher/get/lesson/plans?token=${token}`)
    .pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error);
      })
    );
}

}

