import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  buylaptop: Promise<any>;
  buylaptop2: any;
  fetch1data: any;
  constructor() { }
  promisVal;
  dell = {
    brand: 'dell',
    harddisk: '2 tb',
    color: 'black'
  }
  hp = {
    brand: 'hp',
    harddisk: '1 tb',
    color: 'silver'
  }
  notAvail = {
    brand: 'not available',
    status: 'failed'
  }
  dellAvailable() {
    return true

  }
  hpAvailable() {
    return false
  }
  ngOnInit(): void {
    // let buylaptop=new Promise(function(resolve,reject){
    //   resolve('Promise is resolved')
    // })
    this.buylaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is reject');
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell)
        }, 3000)

      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve(this.hp)
        }, 3000)
      } else {
        reject(this.notAvail)
      }
    })
    // buylaptop.then(res => {
    //   console.log("Then code => ", res);

    // }).catch(res => {
    //   console.log("Catch code => ", res);

    // })
  }
  //With Promise
  fetch1() {
    this.buylaptop.then(res => {
      console.log(res);
      this.fetch1data = JSON.stringify(res);
    })

  }
  //exp 02 with async await
  async fetch2() {
    let data = await this.buylaptop;
    console.log(data);

  }

  serviceCall() {
    this.buylaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
  }
  // with fetch api
  async fetch3() {
    //promise
    this.serviceCall();
    // this.buylaptop2.then(res =>{
    //   console.log(res);
    // })
  let res=  await this.buylaptop2;
  console.log(res);
  
  }
}
