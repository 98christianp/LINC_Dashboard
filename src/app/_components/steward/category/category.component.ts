import { Component, OnInit, Input } from '@angular/core';
import { StewardCategories } from '../../../_model/stewardCategories';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditCategoryComponent} from '../edit-category/edit-category.component';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  imageSource;
  @Input() category: StewardCategories;
  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog, public t: TitleService) { }

  ngOnInit() {
    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.category.icon}`);
  }

  openDialog(){
    this.t.currentTitle = this.category.title;
    this.dialog.open(EditCategoryComponent, {
      data: this.category,
    });
  }

}
