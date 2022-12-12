<?php

namespace app\educacion\agenda\fuente\modelo\exception;

class AppException extends \Exception
{
    private array $errores;
    public function __construct(array $errores, string $mensaje = '')
    {
        parent::__construct($mensaje);
        $this->errores = $errores;
    }
    public function getErrores(): array
    {
        return $this->errores;
    }
}
