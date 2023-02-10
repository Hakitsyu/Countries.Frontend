import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';

@Injectable()
export class LoadingService {
    private _subject: BehaviorSubject<boolean>;
    private _queue: Set<string>
    public isLoading$: Observable<boolean>;

    constructor() {
        this._subject = new BehaviorSubject(false);
        this._queue = new Set();
        this.isLoading$ = this._subject.asObservable();
    }

    queue(id?: string) {
        if (!id)
            id = this.generateRandomId();
        
        this._queue.add(id);
        console.log('EPA');
        this.reloadLoading();
    }

    unqueue(id?: string) {
        if (!this.containsInQueue()) return;
        if (!id) 
            id = this.getFirstInQueue();
            
        this._queue.delete(id);
        this.reloadLoading();
    }

    private containsInQueue(): boolean {
        return this._queue.size > 0;
    }

    private getFirstInQueue(): string {
        const arr = Array.from(this._queue);
        return arr[0];
    }

    private generateRandomId() {
        const maxSize = 10;
        const numbers = '0123456789';
        let result = '';

        for (let i = 0; i < maxSize; i++)
            result+= numbers.charAt(Math.floor(Math.random() * numbers.length) - 1);
        
        return result;
    }

    private reloadLoading() {
        this._subject.next(this.needLoading());
    }

    private needLoading() {
        return this._queue.size > 0;
    }
}