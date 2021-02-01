import { Component, OnInit } from '@angular/core';
import { ApplicationRegistrationService } from 'src/app/application-registration.service';
import { UserCitizen } from 'src/app/user-citizen';

@Component({
  selector: 'app-application-registration',
  templateUrl: './application-registration.component.html',
  styleUrls: ['./application-registration.component.scss'],
})
export class ApplicationRegistrationComponent implements OnInit {

  ApplicationRegistration: UserCitizen[];
  newUserCitizen: UserCitizen = new UserCitizen();
  constructor(private applicationRegistrationService: ApplicationRegistrationService) {

   }

  ngOnInit(): void {

  }
    onSaveClick()
    {
      this.applicationRegistrationService.insertUserCitizen(this.newUserCitizen).subscribe((response)=>{
        var p: UserCitizen = new UserCitizen();
        p.FirstName = response.FirstName;
        p.LastName = response.LastName;
        p.DateOfBirth = response.DateOfBirth;
        p.Gender = response.Gender;
        p.EmailId = response.EmailId;
        p.StateName = response.StateName;
        p.SSNNo = response.SSNNo;
        p.PhoneNumber = response.PhoneNumber;
        this.ApplicationRegistration.push();

        this.newUserCitizen.FirstName = null;
        this.newUserCitizen.LastName = null;
        this.newUserCitizen.DateOfBirth = null;
        this.newUserCitizen.EmailId = null;
        this.newUserCitizen.Gender = null;
        this.newUserCitizen.SSNNo = null;
        this.newUserCitizen.StateName = null;
        this.newUserCitizen.PhoneNumber = null;
      }, (error) => {
        console.log(error);
      });
    }

  }