<?php 
namespace app\CitasMedicas\repositorio;
use ConexionBd;

class MedicoRepositorio
{
    // Comprueba si existe el medico
    public function existeMedico(string $numColegiado): bool{
        $sql = 'SELECT NumColegiado FROM Medico WHERE NumColegiado = :numColegiado';
        // var_dump($numColegiado);
        require_once __DIR__.'/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($sql);
            $snt -> bindValue(':numColegiado', $numColegiado);
            $snt -> execute();
            //Fetch devuelve un array
            $fila=$snt ->fetch(\PDO::FETCH_ASSOC);
            // Devuelve true si existe
            return !(empty($fila));
        } catch (\PDOException $th) {
            throw $th;
        }finally{
            if(isset($snt)){
                unset($snt);
                unset($con);
            }
        }
    }

    public function getCitasMedico(string $numColegiado): array{
        $sql= 'SELECT fcita,hcita,apellido + \',\'+nombre as paciente, fnacimiento, genero= case hombre 
        when 1 then hombre 
        when 0 then mujer
        end, observaciones 
        FROM citas as c inner join paciente as p on c.idpaciente=p.idpaciente and idmedico=(select idmedico from medico where numColegiado = :numColegiado) and (fcita= getdate() or fcita = dateadd(day,1,getdate()))';

        require_once __DIR__.'/../../core/conexionBd.inc';

        try {
            $con = (new ConexionBd()) -> getConexion();
            $snt = $con -> prepare($sql);
            $snt -> bindValue(':numColegiado', $numColegiado);
            $snt -> execute();
            //Fetch devuelve un array
            $fila=$snt ->fetchAll(\PDO::FETCH_ASSOC);
            // Devuelve true si existe
            return $fila;
        } catch (\PDOException $th) {
            throw $th;
        }finally{
            if(isset($snt)){
                unset($snt);
                unset($con);
            }
        }
    }
}