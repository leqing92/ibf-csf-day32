import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { CustomValidator } from '../../validator/custom-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  //field
  userForm !: FormGroup;
  foodArray !: FormArray;
  // user !: User;
  user : User = new User("", "", "", []);

  //must put the "private"
  constructor(private formBuilder : FormBuilder){

  }

  //custom validator

  //create form object
  ngOnInit(): void {
    //create food array
    this.foodArray = this.formBuilder.array([]);

    this.userForm = this.formBuilder.group({
      lastname : this.formBuilder.control<string>("", [Validators.required, Validators.minLength(5), Validators.maxLength(50), CustomValidator.nonWhiteSpace]),
      firstname : this.formBuilder.control<string>("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      email : this.formBuilder.control<string>("", [Validators.required, Validators.email, CustomValidator.checkWhiteSpace]),
      foods : this.foodArray
      // food : this.formBuilder.array([])
    })

  }
  
  //add new row of food
  addNewFood(){
    const foodItem = this.formBuilder.group({
      food: this.formBuilder.control("")
    });
    this.foodArray.push(foodItem);
  }

  deleteFood(index: number){
    if(this.foodArray.length > 0){
      this.foodArray.removeAt(index);
    }
  }

  //submit button
  processUserForm(){
    const userInfo = this.userForm.value as User;
    console.log(userInfo)
  }

  
}
