import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from 'src/model/model';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GithubPortfolioService {

  constructor(private http: HttpClient) { }
  
  getGithubData(username: string) {
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    let projet = this.http.get<Projet[]>(apiUrl);
    console.log(projet);
    return projet;
  }
  
}
