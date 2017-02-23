import { Component, OnInit } from '@angular/core';
import {ProjectDetailService} from '../services/project-detail.service'
import { ActivatedRoute,Router } from '@angular/router';
import {ProjectDetail} from '../model/project-detail'

@Component({
  selector: 'app-ver-proyecto',
  templateUrl: './ver-proyecto.component.html',
  styleUrls: ['./ver-proyecto.component.css'],
    providers:[ProjectDetailService]

})
export class VerProyectoComponent implements OnInit {

  private proyectoId: string;
  private sub: any;
  private projectDetail: ProjectDetail;

  constructor( private projectDetailService:ProjectDetailService,
    private routeActivated: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
      this.sub = this.routeActivated.params.subscribe(params => {
        this.proyectoId = params['id'];
        this.projectDetailService.getByName(this.proyectoId).subscribe(r=>{
          console.log(r);
          if(r.length==0)
            this.router.navigate(['/wizard', this.proyectoId ]);
          else
            this.projectDetail=r[0];
        }
    )});
  }

}
