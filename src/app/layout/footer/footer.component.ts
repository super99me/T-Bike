import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/common/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [Constants]
})
export class FooterComponent implements OnInit {

  constructor(
    public constant: Constants
  ) {}

  ngOnInit(): void {
  }

}
