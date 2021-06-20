import {Component, VERSION, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-plot-booking-form',
  templateUrl: './plot-booking-form.component.html',
  styleUrls: ['./plot-booking-form.component.scss']
})
export class PlotBookingFormComponent implements OnInit {


  name = 'Angular ' + VERSION.major;
  customerImage: any = {};
  nomineeImage: any = {};

  fileAttrForCustomer = 'Select Image';
  fileAttrForNominee = 'Select Image';


  constructor() {
  }

  ngOnInit(): void {
  }

  customerImageUpload(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttrForCustomer = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttrForCustomer += file.name;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.customerImage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
     // this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttrForCustomer = 'Choose File';
    }
  }


  nomineeImageUpload(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttrForNominee = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttrForNominee += file.name;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.nomineeImage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      // this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttrForNominee = 'Choose File';
    }
  }
}
