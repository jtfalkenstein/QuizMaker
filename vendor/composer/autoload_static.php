<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6b3ef9348a6efba56c6f726aa2c48b75
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Katzgrau\\KLogger\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Katzgrau\\KLogger\\' => 
        array (
            0 => __DIR__ . '/..' . '/katzgrau/klogger/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Psr\\Log\\' => 
            array (
                0 => __DIR__ . '/..' . '/psr/log',
            ),
        ),
    );

    public static $classMap = array (
        'Katzgrau\\KLogger\\Logger' => __DIR__ . '/..' . '/katzgrau/klogger/src/Logger.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6b3ef9348a6efba56c6f726aa2c48b75::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6b3ef9348a6efba56c6f726aa2c48b75::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit6b3ef9348a6efba56c6f726aa2c48b75::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit6b3ef9348a6efba56c6f726aa2c48b75::$classMap;

        }, null, ClassLoader::class);
    }
}
