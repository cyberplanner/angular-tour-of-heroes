import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {HeroService} from "./hero.service";
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap'; // Import the switchMap operator to use later with the route parameters Observable.

@Component({
  selector: 'hero-detail',
  template: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
  constructor(private heroService: HeroService) {}

  @Input() hero: Hero;

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.heroService.getHeroes(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
