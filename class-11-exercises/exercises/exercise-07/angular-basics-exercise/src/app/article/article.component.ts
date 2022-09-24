import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title:string = 'nisl purus in mollis nunc';
  content:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Sed id semper risus in hendrerit gravida rutrum. Purus sit amet volutpat consequat. Nunc faucibus a pellentesque sit amet porttitor. Ornare aenean euismod elementum nisi quis eleifend quam. Ipsum dolor sit amet consectetur adipiscing. Vivamus at augue eget arcu dictum varius. Odio facilisis mauris sit amet massa vitae tortor condimentum. Accumsan lacus vel facilisis volutpat. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Amet dictum sit amet justo donec. Nunc vel risus commodo viverra maecenas accumsan. Et netus et malesuada fames ac turpis egestas.';
  isTechRelated:boolean = true;

  
}
