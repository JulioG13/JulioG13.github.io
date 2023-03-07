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
      fecha: "2022-2023",
      ubicacion: "Monterrey, Nuevo León",
      puesto: "Intern en Process y IT",
      empresa: "CEMEX",
      idiomas: [
        { descripcion: "Inglés B2" },
      ],
      lenguajes: [
        {
          descripcion: "C++ , Pyhton"
        },
      ]
    };

    let education2 = {
      grado: "Preparatoria",
      fechas: "2015-2018",
      escuela: "PREPA TEC: CAMPUS CEGL",
    }

    let education3 = {
      grado: "Ingeniería en Tecnologías Computacionales",
      fechas: "2019 hasta la actualidad",
      escuela: "ITESM",
    }

    this.workExperience.push(work1);
    this.educationList.push(education2);
    this.educationList.push(education3);

  }

}
