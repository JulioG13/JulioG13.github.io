import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience: Array<any> = [];

  //Cambiar education -------
  educationList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2019-2020",
      ubicacion: "Mazatlán, Sinaloa",
      puesto: "Ayudante Administrativo",
      empresa: "Impulsa Inmuebles",
      logros: [
        { descripcion: "Agilización de documentación administrativa" },
      ]
    };

    let education1 = {
      grado: "Secundaria",
      fechas: "2012-2015",
      escuela: "Instituto Cultural de Occidente",
    }

    let education2 = {
      grado: "Preparatoria",
      fechas: "2015-2018",
      escuela: "Instituto Cultural de Occidente",
    }

    let education3 = {
      grado: "Ingeniería en Tecnologías Computacionales",
      fechas: "2020 hasta la actualidad",
      escuela: "ITESM",
    }

    this.workExperience.push(work1);

    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);

  }

}
