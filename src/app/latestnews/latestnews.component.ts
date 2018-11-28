import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
import { ImagePreloadDirective } from '../image-preload.directive';
import { InitialsPipe } from '../initials.pipe'
@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.scss']
})
export class LatestnewsComponent implements OnInit {
  newses: any = []; // newses array to store news from API
  toggle = {}; //for toggling more news content

  constructor(public newsapiservice: NewsapiService) { }

  ngOnInit() {
    //call getNews
    this.getNews();
  }

  // Getting all news from service and store it an array
  getNews() {
    this.newses = [];
    this.newsapiservice.getNews().subscribe((data) => {
      console.log(data.articles);
      this.newses = data.articles;
    })
  }

  //Show dummy image if image is not loaded from api url
  isImgLoaded() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('load', function () {
          alert('image is loaded');
        });
        element.bind('error', function () {
          alert('image could not be loaded');
        });
      }
    };
  }

  //setting  random background color for avatar
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  //hide /show detail content
  showHide(i) {
    this.toggle[i] = !this.toggle[i];

  }
}
