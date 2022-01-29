import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    alert(this.router.snapshot.params["id"]);
    this.route.navigateByUrl("/commande/cart");
  }

}
