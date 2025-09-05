import java.util.Scanner;
//Elaborado por Emiliano Silva Bedolla (matricula: 124051706)
class inicioPAM
{
    String tipo;
    String porcentaje;
    String fechasParciales;
    String lineamientos;
    String porcentajesParcial;

    public inicioPAM(String tipo, String porcentaje, String fechasParciales, String lineamientos, String porcentajesParcial) 
    {
        this.tipo = tipo;
        this.porcentaje = porcentaje;
        this.fechasParciales = fechasParciales;
        this.lineamientos = lineamientos;
        this.porcentajesParcial = porcentajesParcial;
    }

    public String toString() 
    {
        return
                "\n Tipo: " +tipo+
                "\n Porcentaje: " + porcentaje + 
                "\n Fechas de los parciales: " + fechasParciales +
                "\n Lineamientos:" + lineamientos + 
                "\nPorcentajes del parcial:" + porcentajesParcial;
    }   
}

class reglamentoPoo extends inicioPAM
{
    public reglamentoPoo(String tipo, String porcentaje, String fechasParciales, String lineamientos, String porcentajesParcial)
    {
        super("Reglamento POO", porcentaje, fechasParciales, lineamientos, porcentajesParcial);
    }
}

class lineamientosClass extends inicioPAM
{
    public lineamientosClass(String tipo, String porcentaje, String fechasParciales, String lineamientos, String porcentajesParcial) 
    {
        super("Lineamientos de Classroom", porcentaje, fechasParciales, lineamientos, porcentajesParcial);
    }
}

class fechasParciales extends inicioPAM
{
    public fechasParciales(String tipo, String porcentaje, String fechasParciales, String lineamientos, String porcentajesParcial) 
    {
        super("Fechas de los parciales", porcentaje, fechasParciales, lineamientos, porcentajesParcial);
    }
}   

class porcentajes1Parcial extends inicioPAM
{
    public porcentajes1Parcial(String tipo, String porcentaje, String fechasParciales, String lineamientos, String porcentajesParcial) 
    {
        super("Porcentajes del primer parciales", porcentaje, fechasParciales, lineamientos, porcentajesParcial);
    }
}

class porcentajes2Parcial extends inicioPAM
{
    public porcentajes2Parcial(String tipo, String porcentaje, String fechasParciales, String lineamientos, String porcentajesParcial) 
    {
        super("Porcentajes del segundo parcial", porcentaje, fechasParciales, lineamientos, porcentajesParcial);
    }
}   

class porcentajes3Parcial extends inicioPAM
{
    public porcentajes3Parcial(String tipo, String porcentaje, String fechasParciales, String lineamientos, String porcentajesParcial) 
    {
        super("Porcentajes del tercer parcial", porcentaje, fechasParciales, lineamientos, porcentajesParcial);
    }
}   

public class PAM
{
    public static void main(String[] args) 
    {
        reglamentoPoo reglamento = new reglamentoPoo(" Reglamento POO", "NO APLICA", "NO APLICA", "\n1. Respeto. \n2. Importante la participación activa en orden. \n3. No entregar trabajos incompletos. \n4. No se aplican examenes fuera de tiempo. \n5. Plagio de trabajos = 0 para todos (los que copearon y los que se dejaron). \n6. 3 faltas = Final del parcial. \n7. Calificación Máxima en final 8. ", "NO APLICA");
        lineamientosClass lineamientos = new lineamientosClass(" Lineamientos de Classroom", "NO APLICA", "NO APLICA", "\n1. Entregar los trabajos para su revisión.\n2. Cuando se agregue el trabajo/actividad/tarea siempre checar que se este entregado. \n3. Entregar todas tus actividades en formato PDF. \n4. Las entregas autorizadas con retraso (se calificaran con calificación máxima de 5)", "NO APLICA");
        fechasParciales fechas = new fechasParciales(" Fechas de los parciales", "NO APLICA", "\n1er Parcial: 29/septiembre/2025 \n2do Parcial: 03/noviembre/2025 \n3er Parcial: 01/diciembre/2025 \n Examen Final: 08/diciembre/2025", "NO APLICA", "NO APLICA");
        porcentajes1Parcial porcentaje1 = new porcentajes1Parcial(" Porcentajes del primer parcial", "NO APLICA", "NO APLICA", "\n1. Evidencia de conocimiento: 40% \n2. Evidencia de desempeño: 20%", "Evidencia de producto: 30% \nProyecto Integrador: 10%");
        porcentajes2Parcial porcentaje2 = new porcentajes2Parcial(" Porcentajes del segundo parcial", "NO APLICA", "NO APLICA", "\n1. Evidencia de conocimiento: 40% \n2. Evidencia de desempeño: 20%", "Evidencia de producto: 20% \nProyecto Integrador: 20%");
        porcentajes3Parcial porcentaje3 = new porcentajes3Parcial(" Porcentajes del tercer parcial", "NO APLICA", "NO APLICA", "\n1. Evidencia de conocimiento: 20% \n2. Evidencia de desempeño: 10%", "Evidencia de producto: 40% \nProyecto Integrador: 30%");
        int opcion;
        Scanner scanner = new Scanner(System.in);
        do
        {
            System.out.println("\n Bienvenido a la documentacion de la materia de PAM");
            System.out.println("\n*.°* Menú de Opciones *.°*");
            System.out.println("1. Reglamento de POO");
            System.out.println("2. Lineamientos de Classroom");
            System.out.println("3. Fechas de los examenes parciales");
            System.out.println("4. Porcentajes de Evaluación (Parciales)");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opción (1-5): ");
            opcion = scanner.nextInt();
            switch (opcion) 
            {
                case 1:
                    System.out.println(reglamento.toString());
                    break;
                case 2:
                    System.out.println(lineamientos.toString());
                    break;
                case 3:
                    System.out.println(fechas.toString());
                    break;
                case 4:
                    System.out.println(porcentaje1.toString());
                    System.out.println(porcentaje2.toString());
                    System.out.println(porcentaje3.toString());
                    break;
                case 5:
                    System.out.println("¡Muchas por su visita!");
                    break;
                default:
                    System.out.println("La opción no se encuentra dentro del rango de opciones, por favor, seleccione una opción del 1 al 5.");
                    break;
            }
        }while(opcion != 5);
        scanner.close();
    }
}