import { LightningElement, api } from 'lwc';
import logo from '@salesforce/resourceUrl/logo';
import plus from '@salesforce/resourceUrl/plus';
import bin from '@salesforce/resourceUrl/bin';
import preview from '@salesforce/resourceUrl/preview';
import download from '@salesforce/resourceUrl/download';
import pen from '@salesforce/resourceUrl/pen';
import dashboard from '@salesforce/resourceUrl/dashboard';
import searchimg from '@salesforce/resourceUrl/search';
import forms from '@salesforce/apex/qf_home.forms';
import status from '@salesforce/apex/qf_home.status';
import search from '@salesforce/apex/qf_home.search';
import deleteform from '@salesforce/apex/qf_home.deleteform';
import count from '@salesforce/apex/qf_home.count';


export default class Qf_home extends LightningElement {
    preview = preview;
    logo = logo;
    plus = plus;
    bin =bin;
    download = download;
    pen =pen;
    dashboard = dashboard;
    search = searchimg;
    formlist;
    searchkey;
    indexs = 0;
    countdata;

    connectedCallback(){
        forms().then(result => {
			this.formlist = result;
      this.indexs = 0;
		})
    count().then(result => {
      if(result < 99){
			this.countdata = 'There are '+result+' New Form';
      }
      else{
        this.countdata = 'There are 99+ New Form';
      }
		})
    }
    changestatus(event){
        const id = event.target.dataset.id;
        status({id: id, value:this.searchkey}).then(result => {
          this.indexs = 0;
          this.formlist = result;
		})
    }
    searchvalue(event){
        this.searchkey = event.target.value;
        search({value: this.searchkey}).then(result => {
          this.formlist = result;  
        })
        count({value: this.searchkey}).then(result => {
          if(result < 99){
          this.countdata = 'There are '+result+' New Form';
          }
          else{
            this.countdata = 'There are 99+ New Form';
          }
        })
    }
    deleteforms(event){
        console.log(event.target.dataset.id);
        
        deleteform({id: event.target.dataset.id, value:this.searchkey}).then(result => {
          
          this.formlist = result;

          count({value: this.searchkey}).then(result => {
            if(result < 99){
            this.countdata = 'There are '+result+' New Form';
            }
            else{
              this.countdata = 'There are 99+ New Form';
            }
          })
          this.indexs = 0;
        })
        
       
    }
     get index() {
         return this.indexs += 1;
    }
}