import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
    selector: 'app-loading',
    template: `
        <div class='loading-wrapper' *ngIf="loadingService.isLoading$ | async">
            <div class="loading">
                <div class="loading-block"></div>
                Getting content...
            </div>
        </div>
    `,
    styles: [
        `
            .loading-wrapper {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background: #ffffff;
                z-index: 9999;
            }

            .loading {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                color: purple;
                font-size: 1.4rem;
            }

            .loading-block {
                display: block;
                width: 50px;
                height: 50px;
                border-left: 1.5px solid purple;
                border-radius: 50%;
                animation: rotate 1s infinite;
            }

            @keyframes rotate {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
        `
    ]
})
export class LoadingComponent {
    constructor(public loadingService: LoadingService) {
    }
}