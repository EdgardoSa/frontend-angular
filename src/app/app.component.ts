import { Component } from '@angular/core';
import { ViewContainerData } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';

  //

  nombreServicio: string;
  descripcionServicio: string;

  //

  mostrarServicios: services[];
  servicios: services[] = [{
                      title: "Electricidad",
                      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,",
                      tag: "Hogar"

                    },
                    {
                      title: "Auxilio mecánico",
                      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,",
                      tag: "Autos"

                    },
                    {
                      title: "Chofer reemplazo",
                      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,",
                      tag: "Autos"

                    },
                    {
                      title: "Médico a domicilio",
                      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,",
                      tag: "Salud"

                    },
                    {
                      title: "Ambulancia",
                      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,",
                      tag: "Salud"

                    },
                    {
                      title: "Gasfitero",
                      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit,",
                      tag: "Hogar"

                    }];


    ngOnInit(){

      //inicializamos los servicios
      this.mostrarServicios = this.servicios;

    }
           
    /**
     * 
     * Metodo que filtra los servicios segun un tag
     * 
     * @param tag tag por el cual buscar
     *
     */
    filtrarServicios(tag): void{

      console.log("TAG: ",tag);

      if(tag === "Todos"){

        this.mostrarServicios = this.servicios;

      }else{

        this.mostrarServicios = this.servicios.filter((element)=>{
          return element.tag === tag;
        });

      }

    }

    /**
     * 
     * Metodo que guarda los cambios
     * 
     */
    grabar(){
      this.servicios.push({
                              title: this.nombreServicio,
                              content: this.descripcionServicio,
                              tag: "Todos"

                            });
    }

    /**
     * 
     * Metodo que cancela los cambios
     * 
     */
    cancelar(){
      this.nombreServicio = "";
      this.descripcionServicio = "";
    }

}

export interface services{

    title: string,
    content: string,
    tag: string

  
}
