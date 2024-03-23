import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class BehaviouralSubjectService {

    private searchQuerySubject = new Subject<string>();

    searchQuery$ = this.searchQuerySubject.asObservable();

    constructor() { }

    setSearchQuery(query: string) {
        this.searchQuerySubject.next(query);
    }

    clearSearchQuery() {
        this.searchQuerySubject.next("");
        this.searchQuerySubject.unsubscribe();
    }
}