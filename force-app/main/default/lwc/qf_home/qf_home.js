import { LightningElement } from 'lwc';
import logo from '@salesforce/resourceUrl/logo';
import plus from '@salesforce/resourceUrl/plus';
import bin from '@salesforce/resourceUrl/bin';
import download from '@salesforce/resourceUrl/download';
import menu from '@salesforce/resourceUrl/menu';
import pen from '@salesforce/resourceUrl/pen';
import dashboard from '@salesforce/resourceUrl/dashboard';
import search from '@salesforce/resourceUrl/search';

export default class Qf_home extends LightningElement {

    logo = logo;
    plus = plus;
    bin =bin;
    download = download;
    menu =menu;
    pen =pen;
    dashboard = dashboard;
    search = search;
}