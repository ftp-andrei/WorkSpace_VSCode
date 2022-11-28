<?php
// Estructura excepciones
class UsuarioException extends Exception
{
    private array $error = [];
    public function __construct(array $error, string $mensaje = '')
    {
        if (!empty($mensaje)) {
            parent::__construct($mensaje);
            $this->error = $error;
        }
    }

    public function getError(): array
    {
        return $this->error;
    }
}
