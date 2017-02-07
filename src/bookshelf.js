import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

//import { bindable } from 'aurelia-framework';

const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);
//const booksUrl = process.env.BackendUrl + '/book/getall';

@inject(HttpClient)
export class Bookshelf {
  constructor(HttpClient){
    this.httpClient = HttpClient;
  }

  async activate(){
    await fetch;

    this.httpClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(process.env.BackendUrl);
    });

    const res = await this.httpClient.fetch('/book/getall');
    this.books =  await res.json();
  }
}
