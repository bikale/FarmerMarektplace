import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { FarmerService } from "src/app/common/services/farmer.service";

@Component({
  selector: "app-add-product-dialog",
  templateUrl: "./add-product-dialog.component.html",
  styleUrls: ["./add-product-dialog.component.css"],
})
export class AddProductDialogComponent implements OnInit {
  addProductForm;
  constructor(private fb: FormBuilder, private farmerService: FarmerService) {
    this.addProductForm = fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      quantity: ["", Validators.required],
      photo: ["", [Validators.required, this.validFileExtensions]],
      description: ["", Validators.required],
    });
  }

  get photo() {
    return this.addProductForm.get("photo");
  }
  get name() {
    return this.addProductForm.get("name");
  }

  ngOnInit(): void {}
  onAddProduct(productImageRef) {
    const formData = new FormData();
    formData.append(
      "image",
      productImageRef.files[0],
      productImageRef.files[0]["name"]
    );
    formData.append("name", this.addProductForm.value.name);
    formData.append("price", this.addProductForm.value.price);
    formData.append("quantity", this.addProductForm.value.quantity);
 
    formData.append("description", this.addProductForm.value.description);
    this.farmerService.addProduct(formData).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  validFileExtensions(control: FormControl) {
    if (
      control.value.endsWith(".jpeg") ||
      control.value.endsWith(".jpg") ||
      control.value.endsWith(".png")
    ) {
      return null;
    }

    return { invalid: true };
  }
}
