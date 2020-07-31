import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GithubService {
  githubApi = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: no-any
  fetchReleases(owner = 'ng-alain', repo = 'ng-alain'): Observable<any> {
    return this.http.get(`${this.githubApi}/repos/${owner}/${repo}/releases`);
  }

  // tslint:disable-next-line: no-any
  fetchIssues(keyword: string): Observable<any> {
    return this.http.get(`${this.githubApi}/search/issues?q=is:issue repo:ng-alain/ng-alain ${keyword}&per_page=5`);
  }
}
