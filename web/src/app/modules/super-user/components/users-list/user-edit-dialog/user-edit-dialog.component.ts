import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SuperUserService } from "src/app/common/services/super-user.service";

@Component({
  selector: "app-user-edit-dialog",
  templateUrl: "./user-edit-dialog.component.html",
  styleUrls: ["./user-edit-dialog.component.css"],
})
export class UserEditDialogComponent implements OnInit {
  changeStatusForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private superService: SuperUserService
  ) {
    this.changeStatusForm = formBuilder.group({
      userStatus: [this.data["active"], Validators.required],
    });
  }
  onChangeStatus() {
    this.superService
      .changeUserStatus(
        this.data["_id"],
        this.changeStatusForm.value.userStatus
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  ngOnInit(): void {}
}
