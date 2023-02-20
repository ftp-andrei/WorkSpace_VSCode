<?php
namespace app\ejercicios\repositorio;
class NavidadRepositorio{
    public function suma(int $num1,int $num2):string{
        return "La suma de ".$num1." + ".$num2." es: ".bcadd($num1,$num2,0);
    }
    
    public function resta(int $num1,int $num2):string{
        return "La resta de ".$num1." - ".$num2." es: ".bcsub($num1,$num2,0);
    }

    public function multiplicacion(int $num1,int $num2):string{
        return "La multiplicación de ".$num1." * ".$num2." es: ".bcmul($num1,$num2,0);
    }

    public function division(int $num1,int $num2):string{
        if($num2!=0){
            return "La division de ".$num1." / ".$num2." es: ".bcdiv($num1,$num2,2);
        }else{
            return "No se puede dividir por 0";
        }
    }

    public function calcVolumen(int $num1,int $num2):string{
        return "Volumen: " . bcmul(pi(), bcmul(bcpow(bcdiv($num2, 2, 2), 2, 2), $num1, 2), 2);
    }
}

?>