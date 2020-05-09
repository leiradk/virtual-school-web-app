import { Component, OnInit, HostListener } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { ApiHostService } from '../../../../../../../services/api-host.service';
import { SystemUtils } from '../../../../../../../services/system.utils';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss',
    '../../../../../../../../assets/teacher/css/classwork/style.css',
    '../../../../../../../../assets/teacher/css/classwork/bootstrap-datepicker.css',
    '../../../../../../../../assets/teacher/css/classwork/nestable.css',
    '../../../../../../../../assets/teacher/css/classwork/summernote.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class DetailsComponent implements OnInit {
  public classWorkForm: FormGroup;
  model: NgbDateStruct;
  p: number = 1;
  searchText;
  viewList: number = 5;
  file: any;
  classDetails: any;
  userData: any;
  error: any;
  errorMessage: any;
  placement = 'bottom';
  base64textString: any;
  constructor(
    private apiService: ApiHostService,
    private system: SystemUtils,
    private fb: FormBuilder,
  ) {
    this.workFormModel();
  }

  ngOnInit(): void {
    this.classDetails = this.system.retrieveItem('classDetails');
    this.userData = this.system.retrieveItem('userData');
    this.getClasswork(this.classDetails, this.userData);

    this.file = [{
      file: 'file',
      filename: 'filename',
      date: 'date'
    }]
  }
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  public tools: object = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

  public value: string = `
    <p>The RichTextEditor triggers events based on its actions. </p>
    <p> The events can be used as an extension point to perform custom operations.</p>`

  getClasswork(classID, userID) {
    const { token } = userID;
    const { id } = classID;

    this.apiService.getClassworkTeacher(id, token)
      .subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        const { message, status } = error.error;

        if (status === 404) {
          this.error = true;
          this.errorMessage = message;
          console.log(message);
        }
      })
  }
  get workTitle() {
    return this.classWorkForm.get("workTitle") as FormControl;
  }
  get points() {
    return this.classWorkForm.get("points") as FormControl;
  }
  get instruction() {
    return this.classWorkForm.get("instruction") as FormControl;
  }
  get dueDate() {
    return this.classWorkForm.get("dueDate") as FormControl;
  }
  // get workFile() {
  //   return this.classWorkForm.get("workFile") as FormControl;
  // }


  workFormModel() {
    this.classWorkForm = this.fb.group({
      workTitle: [null, Validators.required],
      points: [null, Validators.required],
      instruction: [null, Validators.required],
      dueDate: [null, Validators.required],
      // workFile: [null, Validators.required]
    });
  }
  onSubmit() {
    console.log(this.classWorkForm)
    
  }

  onFileChange(event) {
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();

      reader.onload = this.handleFile.bind(this);

      reader.readAsBinaryString(file);
      // console.log(reader.readAsBinaryString(file));

    }
  }
  handleFile(event) {
    var binaryString = event.target.result;
    // console.log(binaryString);
    this.base64textString = btoa(binaryString);   
    console.log(btoa(binaryString));
    this.classWorkForm.value.workFile = this.base64textString;
    // console.log(this.classWorkForm)
  }
}
