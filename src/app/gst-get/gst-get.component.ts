import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/Business_model';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})

export class GstGetComponent implements OnInit {
  businesses: Business[];
  bisnis: any;
  constructor(private bs: BusinessService) { }

  refresh() {
    location.reload();
  }

  ngOnInit() {
    this.getDataBusiness();
  }



  deleteBusiness(business) {
    var yakin = confirm("Hapus data?");
    if (yakin) {
      this.bs.deleteBusiness(business).subscribe(response => {
        console.log('deleted', response);
      });
      this.ngOnInit();
    } else {}
  }

  detailsBusiness(business) {
    this.bs.detailsBusiness(business._id).subscribe( tampil => {
      console.log('Details', tampil);
      this.bisnis = tampil;
      // alert('Details' + ' = ' + 'ID: ' + business._id + ' Nama: ' + business.person_name + ' Business name: ' + business.business_name + ' GST Number: ' + business.business_gst_number);
      this.ngOnInit();
    });
  }

  getDataBusiness() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
      console.log(this.businesses);
    });
  }

}

