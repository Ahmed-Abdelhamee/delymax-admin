import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Shop } from 'src/app/shared/interfaces/shop';
import { Slider } from 'src/app/shared/interfaces/slider';
import { State } from 'src/app/shared/interfaces/state';
import { Town } from 'src/app/shared/interfaces/town';
import { DataService } from 'src/app/shared/service/data.service';
import { ProductService } from 'src/app/shared/service/product.service';


export class DomainSlider extends Slider {

}
@Component({
  selector: 'app-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.scss']
})
export class AddSliderComponent implements OnInit {

  @ViewChild('photos', { static: true }) photos;
  SliderForm: FormGroup;
  slider : DomainSlider;
  id:any;
  lang:any;
  states:State[]=[];
  shops:Shop[]=[];
  shopsF:Shop[]=[];
  towns:Town[]=[];
  selectedTown:string;
  selectedState:string;
  public allLang = true;
  public mode: 'edit' | 'add';
  private formSubscription: Subscription;
  private SliderSubscription: Subscription;
  constructor(private dataService:DataService,private _domSanitizer: DomSanitizer,
    private fb: FormBuilder,private route:ActivatedRoute,private router:Router,private toastr:ToastrService,private productService:ProductService) { 
      this.initForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams["id"];
    this.lang = this.route.snapshot.queryParams["lang"];
    this.getTowns();
    if(this.id){
      this.mode='edit'
      this.getSlider(this.id);
      this.initForm();
     
    }else{
      this.mode='add'
      this.constructSlider();
      this.initForm();
    }
    if(this.lang){
      console.log(this.lang)
    }
  }
  getSlider(id: any) {
    if(this.lang=='AR'){
      this.SliderSubscription = this.dataService.getSliderAR(this.id).subscribe(cat=>{  
        this.selectedTown = cat.town;
        this.selectedState = cat.state;
        this.getStates();
        this.getShops();
        this.syncSlider(cat);
       
        this.initForm();
        
      })
    }else{
      this.SliderSubscription = this.dataService.getSlider(this.id).subscribe(cat=>{  
        this.selectedTown = cat.town;
        this.selectedState = cat.state;
        this.getStates();
        this.getShops();
        this.syncSlider(cat);
        this.initForm();
        
      })
    }
    
  }

  getShops(){

      this.productService.getZoneshops(this.selectedState).subscribe(res => {
      
        this.shops = res;
        this.shopsF = res;
      });
    
  
  }

  getStates(){
    console.log(this.selectedTown)
    this.dataService.getStates(this.selectedTown).subscribe(states=>{
      this.states = states;
    })
  }

  getTowns(){
    this.dataService.getTowns().subscribe(towns=>{
      this.towns = towns;
    })
  }
  constructSlider() {
    const slider = new Slider();
    this.syncSlider(slider);
    this.initForm();
  }
  syncSlider(slider) {
    const id = this.createId(slider);
    const image = this.handleImageURLs(slider);
    this.slider = {
      ...slider,
      id,
      image
    };
  }

  private onFormChanges() {
    this.formSubscription = this.SliderForm.valueChanges.subscribe(
      (formFieldValues) => {
        const slider = { ...this.slider, ...formFieldValues };
        this.syncSlider(slider);
      }
    );
  }
  private handleImageURLs(slider: Slider): string {
    if (slider.image ) {
      return slider.image;
    }
    return '';
  }


  private createId(slider: Slider): string {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = slider.id || randomId+"";
    if (id === "1") {
      id = randomId+"";
    }
    return id;
  }

  constructMockSlider() {
    new Slider();
  }

  private initForm() {
    this.SliderForm = this.fb.group({
      title: [""]
        ,
        town: [this.slider && this.slider.town,
          Validators.required]
          ,
          state: [this.slider && this.slider.state,
            Validators.required]
            ,
            shopId: [""]
              ,
      id:[ {
          value: this.slider && this.slider.id,
          disabled: true
        },
        [Validators.required]
       ]
    });
    this.onFormChanges();
  
  }
  allLangs(){
    if(this.allLang){
    this.allLang = false;  
    console.log(this.allLang)
    }else{
      this.allLang = true;
      console.log(this.allLang)
    }
      
   }
   onKey(value) { 
    this.shopsF = this.search(value);
    }
    search(value: string) { 
      let filter = value.toLowerCase();
      return this.shops.filter(option => option.name.toLowerCase().startsWith(filter));
    }
  onAddSlider() {
    this.syncSlider({ ...this.slider, ...this.SliderForm.value });
    const sliderToSubmit = this.slider;
    const files: FileList = this.photos.nativeElement.files;
    if (this.mode === 'add' && files.length > 0) {
      this.addSlider(sliderToSubmit, files);
    } else if (this.mode === 'edit') {
      console.log('update')
      this.updateSlider(sliderToSubmit, files);
    } else {

      return;
    }

  }
  updateSlider(slider, files: FileList) {
    this.SliderSubscription.unsubscribe();
    if(this.lang=='AR'){
      this.dataService.updateSliderAR({ slider, files }).subscribe(
        (response: Slider) => {
          this.router.navigate(['/settings/home-settings']);
        },
        (error) => this.toastr.error('Could not update your Slider')
      );
    }else{
      this.dataService.updateSlider({ slider, files }).subscribe(
        (response: Slider) => {
          this.router.navigate(['/settings/home-settings']);
        },
        (error) => this.toastr.error('Could not update your Slider')
      );
    
      }
  }
  addSlider(slider, files: FileList) {
   
    if(this.allLang){
      this.dataService.addSliderAR({ slider, files });
      this.dataService.addSlider({ slider, files });
      this.router.navigate(['/settings/home-settings']);
    }else{
      if(this.lang =='AR'){
        this.dataService.addSliderAR({ slider, files }); 
       }else{
       this.dataService.addSlider({ slider, files });    
       }
       this.router.navigate(['/products/Slider']);
    }
  }

}
