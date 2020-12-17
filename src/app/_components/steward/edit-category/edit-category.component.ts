import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import { ApiService} from '../../../_services/api.service';
import { TitleService} from '../title.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  fileToUpload: File = null;
  title: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private sanitizer: DomSanitizer,
              private api: ApiService,
              public t: TitleService) {
  }

  ngOnInit() {
    this.title = this.t.currentTitle;
  }
  save() {
    this.api.sendCategory(this.data, this.title)
      .subscribe(res =>{
        console.log(res);
      });
  }
  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsDataURL(files.item(0));
    this.fileToUpload = files.item(0);
    reader.onload = () => {
      let x = '';
      if (typeof reader.result === 'string') {
        x = reader.result.split(',')[1];
      }
      this.data.icon = x;
    };
  }
}
