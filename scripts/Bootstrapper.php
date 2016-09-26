<?php

use DI\ContainerBuilder;
use QM\Application\Application;

function getContainer()
{
    $builder = new ContainerBuilder();
    $builder->addDefinitions(ROOT . DS . 'config' . DS . 'diDefinitions.php');
    $container = $builder->build();
    return $container;
}

function BootErUp(){
    $container = getContainer();
    $app = $container->get('\QM\Application\Application');
    $app->Run();
}

