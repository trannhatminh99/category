import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../category.service';
import {DetailService} from '../detail.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail;
  id;
  subreddit;

  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subreddit = this.route.snapshot.paramMap.get('subreddit');
    console.log(this.id);
    console.log(this.subreddit);
    this.detail = this.detailService.getdetail(this.subreddit, this.id);
      // https://www.reddit.com/r/AskReddit/comments/f7ib73/.json
      // https://www.reddit.com/r/AskReddit/comments/f7ngvs/.json
    // https://www.reddit.com/r/wholesomememes/comments/f7nh6u/.json
  }


}
