-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-07-2022 a las 16:54:31
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-05:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sanfranciscoambato`
--
CREATE DATABASE IF NOT EXISTS `sanfranciscoambato` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci;
USE `sanfranciscoambato`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogoagencias`
--

CREATE TABLE `catalogoagencias` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `agencia` varchar(100) COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `catalogoagencias`
--

INSERT INTO `catalogoagencias` (`id`, `agencia`) VALUES
('C8316EC0-35ED-4270-B450-19C419779F100', 'AGENCIA TISALEO'),
('C8316EC0-35ED-4270-B450-19C419779F101', 'AGENCIA PATATE'),
('C8316EC0-35ED-4270-B450-19C419779F102', 'AGENCIA QUERO'),
('C8316EC0-35ED-4270-B450-19C419779F103', 'AGENCIA MOCHA'),
('C8316EC0-35ED-4270-B450-19C419779F104', 'AGENCIA MAYORISTA'),
('C8316EC0-35ED-4270-B450-19C419779F105', 'AGENCIA RIOBAMBA'),
('C8316EC0-35ED-4270-B450-19C419779F106', 'AGENCIA SALCEDO'),
('C8316EC0-35ED-4270-B450-19C419779F107', 'AGENCIA LATACUNGA'),
('C8316EC0-35ED-4270-B450-19C419779F108', 'AGENCIA SAQUISILÍ\n'),
('C8316EC0-35ED-4270-B450-19C419779F109', 'AGENCIA TAMBILLO'),
('C8316EC0-35ED-4270-B450-19C419779F110', 'AGENCIA CONOCOTO '),
('C8316EC0-35ED-4270-B450-19C419779F111', 'AGENCIA SANGOLQUÍ\n'),
('C8316EC0-35ED-4270-B450-19C419779F112', 'AGENCIA ALANGASI'),
('C8316EC0-35ED-4270-B450-19C419779F113', 'AGENCIA VILLAFLORA'),
('C8316EC0-35ED-4270-B450-19C419779F114', 'AGENCIA CARCELEN'),
('C8316EC0-35ED-4270-B450-19C419779F115', 'AGENCIA EL QUINCHE'),
('C8316EC0-35ED-4270-B450-19C419779F116', 'AGENCIA STO DOMINGO '),
('C8316EC0-35ED-4270-B450-19C419779F117', 'AGENCIA MACAS'),
('C8316EC0-35ED-4270-B450-19C419779F118', 'AGENCIA PALORA'),
('C8316EC0-35ED-4270-B450-19C419779F119', 'AGENCIA EL CHACO'),
('C8316EC0-35ED-4270-B450-19C419779F120', 'AGENCIA TENA'),
('C8316EC0-35ED-4270-B450-19C419779F121', 'AGENCIA PUYO '),
('C8316EC0-35ED-4270-B450-19C419779F122', 'AGENCIA PUYO TERMINAL'),
('C8316EC0-35ED-4270-B450-19C419779F123', 'AGENCIA SANTA CLARA'),
('C8316EC0-35ED-4270-B450-19C419779F94', 'AGENCIA MATRIZ'),
('C8316EC0-35ED-4270-B450-19C419779F95', 'AGENCIA SUR'),
('C8316EC0-35ED-4270-B450-19C419779F96', 'AGENCIA IZAMBA'),
('C8316EC0-35ED-4270-B450-19C419779F97', 'AGENCIA PÍLLARO'),
('C8316EC0-35ED-4270-B450-19C419779F98', 'AGENCIA PELILEO'),
('C8316EC0-35ED-4270-B450-19C419779F99', 'AGENCIA CEVALLOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogoareas`
--

CREATE TABLE `catalogoareas` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `area` varchar(150) COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `catalogoareas`
--

INSERT INTO `catalogoareas` (`id`, `area`) VALUES
('4839FF7A-652E-4F52-9A6B-05214E1CCC15', 'Operaciones'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC16', 'Operación/Call Center'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC17', 'Call Center'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC18', 'Legal'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC20', 'No especificada'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC21', 'Marketing y Negocios'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC22', 'Negocios'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC23', 'Atención al Cliente'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC24', 'Cobranzas'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC25', 'Riesgos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogocargos`
--

CREATE TABLE `catalogocargos` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `area` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `cargo` varchar(150) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `catalogocargos`
--

INSERT INTO `catalogocargos` (`id`, `area`, `cargo`) VALUES
('4839FF7A-652E-4F52-9A6B-05214E1CCC22', 'Marketing y Negocios', 'ANALISTA DE  NEGOCIOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC23', 'Marketing y Negocios', 'ANALISTA DE CREDITOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC24', 'Marketing y Negocios', 'ANALISTA DE DATOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC25', 'Marketing y Negocios', 'ANALISTA DE MARKETING'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC26', 'Marketing y Negocios', 'ASISTENTE DE MARKETING'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC27', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC28', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC29', 'Marketing y Negocios', 'GESTOR DE PASIVOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC30', 'Marketing y Negocios', 'GESTOR SENIOR DE NEGOCIOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC31', 'Marketing y Negocios', 'OPERATIVO DE CALL CENTER NEGOCIOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC32', 'Marketing y Negocios', 'PROMOTOR'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC33', 'Operaciones', 'ASISTENTE ADMINISTRATIVO'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC34', 'Operaciones', 'ASISTENTE DE OPERACIONES'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC35', 'Operaciones', 'CAJERO'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC36', 'Operaciones', 'CAJERO GENERAL'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC37', 'Operaciones', 'JEFE DE OPERACIONES'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC38', 'Operaciones', 'OPERATIVO DE CREDITO'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC39', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC40', 'Operaciones', 'OPERATIVO GENERAL'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC41', 'Negocios', 'JEFE NACIONAL DE NEGOCIOS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC42', 'Atención al Cliente', 'JEFATURA DE ATENCIÓN AL CLIENTE Y RESPONSABILIDAD SOCIAL'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC43', 'Cobranzas', 'JEFATURA DE COBRANZAS'),
('4839FF7A-652E-4F52-9A6B-05214E1CCC44', 'Riesgos', 'OFICIAL DE SEGURIDAD DE LA INFORMACIÓN');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogoincidencias`
--

CREATE TABLE `catalogoincidencias` (
  `id` varchar(150) NOT NULL,
  `producto` varchar(100) NOT NULL,
  `incidencia` varchar(50) NOT NULL,
  `stincidencia` varchar(500) DEFAULT NULL,
  `area` varchar(100) DEFAULT NULL,
  `casignacion` varchar(1000) DEFAULT NULL,
  `pasignado` varchar(1000) DEFAULT NULL,
  `tiemporespuesta` varchar(22) DEFAULT NULL,
  `tipotiempo` varchar(10) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `catalogoincidencias`
--

INSERT INTO `catalogoincidencias` (`id`, `producto`, `incidencia`, `stincidencia`, `area`, `casignacion`, `pasignado`, `tiemporespuesta`, `tipotiempo`, `isActive`) VALUES
('ACFE97AC-8590-F54F-BD38-4DC8EFC07055', 'Crédito', 'Requerimientos', 'Saldos pendientes de crédito y cuota a cancelar', 'Marketing y Negocios', 'gustavo.echeverria@coac-sanfra.com,diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ECHEVERRIA SORIA HERNAN GUSTAVO,ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '20', 'minuto', 1),
('FD6625E6-C7E7-989F-9B09-63EA2560C5B0', 'Crédito', 'Requerimientos', 'Información para renovación de créditos', 'Negocios', 'diana.ulloa@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA', '15', 'minuto', 1),
('B9A4691D-D267-C76B-832E-80535479B72E', 'Crédito', 'Requerimientos', 'Solicitud de precancelación de créditos', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '15', 'minuto', 1),
('D55909D4-6887-1D61-9BE3-360D5D5CCBE4', 'Crédito', 'Requerimientos', 'Información y requisitos para créditos', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '30', 'minuto', 1),
('5E46BD4D-B10F-03EE-8DDF-B77D63F6C2E0', 'Crédito', 'Reclamos', 'Deficiente comunicación por parte del gestor de negocios', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '1', 'dia', 1),
('FEE6AE58-DAB2-0C7D-9CA1-3579C11DD6F9', 'Crédito', 'Requerimientos', 'Estado de solicitud de crédito', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '15', 'minuto', 1),
('00A12B10-5321-0F4E-B0B7-2F300A24C1F4', 'Crédito', 'Reclamos', 'Recargas por gastos extrajudiciales', 'Cobranzas', 'diana.rosero@coac-sanfra.com', 'DIANA ANDREA ROSERO JIMENEZ ', '30', 'minuto', 1),
('7B4DB031-4FB4-AEEF-8A0F-71E1994ADC39', 'Canal Web', 'Requerimientos', 'Desbloqueo PIN transaccional', 'Operaciones', 'paul.noboa@coac-sanfra.com,diana.sanchez@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,SANCHEZ CISNEROS DIANA MARISELA', '30', 'minuto', 1),
('A500CD37-6261-111C-8B4C-4D49D0FB38D8', 'San Fra en línea', 'Requerimientos', 'Bloqueo San Fra en línea', 'Operaciones', 'innovation_leader@kimobill.com', 'MONICA VIERA', '30', 'minuto', 1),
('ABF40F5A-541A-01F5-9DE6-5DFDEA133B52', 'CALL CENTER', 'Requerimientos', 'Cupos para transferencias', 'Operaciones', 'paul.noboa@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR', '0', 'inmediato', 1),
('C1E440C0-1AAF-0BCA-959A-F1908E61400D', 'Canal Web', 'Requerimientos', 'Información y tutorial de registro y transferencias', 'Operaciones', 'paul.noboa@coac-sanfra.com,diana.sanchez@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,SANCHEZ CISNEROS DIANA MARISELA', '1', 'hora', 1),
('80C7223F-612B-5AE7-8C2B-28BD91E43FD7', 'Canal Web', 'Requerimientos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com,diana.sanchez@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,SANCHEZ CISNEROS DIANA MARISELA', '1', 'dia', 1),
('905D2D77-9281-0233-8B34-02C511FC6C90', 'Atención al cliente', 'Requerimientos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('594CFAD0-47B1-B46A-A32E-11AB61DCE976', 'Depósitos a plazo fijo', 'Reclamos', 'Demora en la atención', 'Cobranzas', 'diana.rosero@coac-sanfra.com', 'DIANA ANDREA ROSERO JIMENEZ ', '10', 'minuto', 1),
('8241579E-3D48-DF1F-9F5D-3706AD17A258', 'Depósitos a plazo fijo', 'Reclamos', 'Inclusión de firmas', 'Cobranzas', 'diana.rosero@coac-sanfra.com', 'DIANA ANDREA ROSERO JIMENEZ ', '5', 'minuto', 1),
('FFAE6069-E9E4-D658-B8CC-5707583131B8', 'Depósitos a plazo fijo', 'Reclamos', 'Demora en revisión de documentos legales y sus respectivos informes', 'Legal', 'soraya.lopez@coac-sanfra.com', 'SORAYA ARACELLY LOPEZ BARRIONUEVO ', '1', 'dia', 1),
('5966EBDD-E763-136D-A937-EBFAACB136FF', 'Depósitos a plazo fijo', 'Reclamos', 'Llenar formularios para verificación', 'Cobranzas', 'diana.rosero@coac-sanfra.com', 'DIANA ANDREA ROSERO JIMENEZ ', '10', 'minuto', 1),
('E7513409-523A-AF43-B8D8-207D65DDC7B3', 'Información', 'Reclamos', 'Otros', 'Marketing y Negocios', 'christian.miranda@coac-sanfra.com', 'MIRANDA MIRANDA CHRISTIAN PATRICIO', '1', 'dia', 1),
('0231C6F9-59A6-3689-AB90-93B7D9DED593', 'Depósitos a plazo fijo', 'Requerimientos', 'Información para inversión', 'Cobranzas', 'diana.rosero@coac-sanfra.com', 'DIANA ANDREA ROSERO JIMENEZ ', '5', 'minuto', 1),
('9A5FE1CB-BF04-25C6-AA57-0E06BA24E052', 'Depósitos a plazo fijo', 'Requerimientos', 'Solicitud de reimpresión', 'Operaciones', 'paul.noboa@coac-sanfra.com,alexandra.mayorga@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,MAYORGA BACCA MARIA ALEXANDRA', '15', 'minuto', 1),
('6FD4674C-7625-31E2-8C51-213773B5C164', 'Depósitos a plazo fijo', 'Requerimientos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR', '1', 'dia', 1),
('0D20E64D-3B5D-96DF-896D-7B4B944A755D', 'Canal Web', 'Reclamos', 'Estado y tiempo de efectivización de transferencias', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('EC2C2BFA-5C00-BC2C-B7D7-831AD52C48C0', 'Canal Web', 'Reclamos', 'Usurpación de usuarios y contraseñas por terceros (fishing)', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com,diana.sanchez@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH,SANCHEZ CISNEROS DIANA MARISELA', '10', 'dia', 1),
('2D9A6222-66F4-C604-B0FF-B7AAD442D572', 'Canal Web', 'Requerimientos', 'Actualización de datos', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'hora', 1),
('9AFDF1E1-CCE0-2BA5-9769-205F9029B875', 'Crédito', 'Reclamos', 'Débitos para aportes de socios y creación de plan futuro', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '5', 'minuto', 1),
('FCAB8FF4-64FB-AEDD-9941-E0D78A187AB0', 'Crédito', 'Reclamos', 'Tiempo de respuesta de la solicitud de crédito', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '1', 'dia', 1),
('9A86D784-3A78-174F-A6B9-20AB97ACF95F', 'Crédito', 'Reclamos', 'Repetir la firma por inconformidad de las firmas', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '1', 'hora', 1),
('B1097368-FBE5-A92E-B071-7468D090B218', 'Atención al cliente', 'Reclamos', 'Debitos no autorizados', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'hora', 1),
('2926E199-A9FE-373F-847F-CB0CA3F031BA', 'Atención al cliente', 'Requerimientos', 'Bloqueo de cuenta por perdida y robo de documento', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '5', 'minuto', 1),
('A37CC8F2-7AA3-E309-80D2-AD764CD36030', 'Atención al cliente', 'Reclamos', 'Mala atención', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '30', 'minuto', 1),
('C37C5102-4B79-4272-94A4-C25A6CC2670A', 'Atención al cliente', 'Requerimientos', 'Estado de la cuenta de ahorro a la vista', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '10', 'minuto', 1),
('0CCDC893-25C7-2639-B956-BD391D282D28', 'Atención al cliente', 'Requerimientos', 'Resumen de movimientos de la cuenta', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '5', 'minuto', 1),
('53BFD81A-BBE5-4C04-B4FA-00D250678276', 'Atención al cliente', 'Requerimientos', 'Estado y vencimiento de Plan Futuro', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '5', 'minuto', 1),
('E4BBB3D8-04C0-500D-BAFC-F07DCE905161', 'Atención al cliente', 'Reclamos', 'Bloqueo de valores no autorizados', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '5', 'minuto', 1),
('5C962742-6C93-C825-99EA-38112C4ADB2D', 'Atención al cliente', 'Requerimientos', 'Información de beneficio de fondo mortuorio', 'Atención al Cliente', 'norma.lopez@coac-sanfra.com', 'LOPEZ LOPEZ NORMA GUADALUPE', '10', 'minuto', 1),
('C2348994-9B94-5738-BADD-787CC6F27E46', 'Atención al cliente', 'Reclamos', 'Llenar formularios para verificación', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('AC3FD67A-9134-53C9-8084-55479812874B', 'Atención al cliente', 'Reclamos', 'Demora en la atención', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '2', 'hora', 1),
('F21F2650-12BA-9EFD-A33B-2192209013F1', 'Atención al cliente', 'Requerimientos', 'Solicitud de reimpresión', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.compaul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETHNOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '5', 'minuto', 1),
('66565C44-B6F9-099C-A90D-1895507751D9', 'ATM', 'Reclamos', 'ATM sin funcionamiento', 'Operaciones', 'paul.noboa@coac-sanfra.com,alvaro.flores@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,FLORES MOYA ALVARO VINICIO', '1', 'dia', 1),
('C7BA6FCC-7B94-F05A-8251-AD076742476E', 'Tarjeta de crédito', 'Requerimientos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('EA8D4F42-B875-96E3-A27D-4E318EE8E083', 'Cajas', 'Reclamos', 'Demora en la atención', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '30', 'minuto', 1),
('E0FC3D1B-0919-67D9-880B-27D7BDA18F2A', 'Tarjeta de crédito', 'Reclamos', 'Duplicidad en transacciones', 'Operaciones', 'paul.noboa@coac-sanfra.com,alexandra.mayorga@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,MAYORGA BACCA MARIA ALEXANDRA', '30', 'minuto', 1),
('11E8471A-F946-4733-95F5-7845ECA7539F', 'Tarjeta de crédito', 'Requerimientos', 'Estatus de la solicitud', 'Marketing y Negocios', 'diana.ulloa@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA', '15', 'minuto', 1),
('E9E765D8-7D70-6A06-932B-C8EABA0488B1', 'Tarjeta de debito', 'Reclamos', 'Duplicidad en transacciones', 'Operaciones', '', '', '1', 'dia', 1),
('B5EBA637-1137-8B4B-8BDC-7D63F92E9655', 'Tarjeta de crédito', 'Requerimientos', 'Información y requisitos tarjeta de crédito', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '30', 'minuto', 1),
('2C9A343A-0F5E-EE5B-A09C-94CF53335826', 'Cajas', 'Requerimientos', 'Solicitud de reimpresión', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '30', 'minuto', 1),
('8288D053-4B3B-B0BA-9F63-BE4F1D3BE7D4', 'Cajas', 'Requerimientos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('8C290CFC-EFB6-8CEC-8DA1-E6947F89089D', 'ATM', 'Reclamos', 'No se procesó la transacción', 'Operaciones', 'paul.noboa@coac-sanfra.com,alvaro.flores@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,FLORES MOYA ALVARO VINICIO', '30', 'minuto', 1),
('06BD7D5B-F1C0-6394-AE6A-C79D3746E9B1', 'ATM', 'Requerimientos', 'Solicitud de cámaras de seguridad', 'Operaciones', 'paul.noboa@coac-sanfra.com,alvaro.flores@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,FLORES MOYA ALVARO VINICIO', '2', 'dia', 1),
('FC1267F0-CC09-6228-82FF-F8FAB65928E9', 'ATM', 'Reclamos', 'Entrega de billetes en deterioro', 'Operaciones', 'paul.noboa@coac-sanfra.com,alvaro.flores@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,FLORES MOYA ALVARO VINICIO', '30', 'minuto', 1),
('81D1DA5B-B7C2-C058-8468-A830106F062F', 'Cajas', 'Reclamos', 'Transacciones mal efectuadas', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('404AFD19-D9B5-B761-8A87-A255F718E51D', 'ATM', 'Requerimientos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com,alvaro.flores@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,FLORES MOYA ALVARO VINICIO', '1', 'dia', 1),
('D3DC0847-8B10-01E1-B944-E378A9E317F5', 'Tarjeta de debito', 'Reclamos', 'No se pudo utilizar en locales comerciales', 'Operaciones', 'paul.noboa@coac-sanfra.com,alexandra.mayorga@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,MAYORGA BACCA MARIA ALEXANDRA', '1', 'dia', 1),
('FA1BE50E-667A-D100-BECD-DB59906035F6', 'Tarjeta de debito', 'Requerimientos', 'Uso de la tarjeta en el exterior', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '30', 'minuto', 1),
('9D6494F4-F1BC-1D42-91EC-F0D543CA3295', 'Tarjeta de debito', 'Requerimientos', 'Información y requisitos tarjeta de débito', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '15', 'minuto', 1),
('79200278-A456-AC58-BFB9-05D9E0691DA8', 'Tarjeta de debito', 'Requerimientos', 'Bloqueos de tarjeta de débito ', 'Operaciones', 'paul.noboa@coac-sanfra.com,alexandra.mayorga@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,MAYORGA BACCA MARIA ALEXANDRA', '15', 'minuto', 1),
('C1E3C9B5-25CD-2DA9-ADB0-9DBA1F69DDF6', 'Tarjeta de debito', 'Requerimientos', 'Desbloqueos de tarjeta de débito ', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '30', 'minuto', 1),
('F42A2551-8211-D5B2-AC2D-8C1312F95283', 'Tarjeta de debito', 'Requerimientos', 'Estatus de la solicitud', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '15', 'minuto', 1),
('32229E51-DD8A-DCCA-82ED-7FF77D1D2853', 'Tarjeta de debito', 'Requerimientos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('86C93137-9778-FED4-B712-A08D1D19584D', 'Tarjeta de crédito', 'Reclamos', 'No se pudo utilizar en locales comerciales', 'Operaciones', '', '', '30', 'minuto', 1),
('F9B13510-F936-56E5-9EDD-94BABBE5EB68', 'Atención al cliente', 'Reclamos', 'Demora en acreditación de sueldos, por convenios establecidos', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'hora', 1),
('71999D58-C323-B66B-86E0-2807325B3879', 'Información', 'Reclamos', 'Imagen e infraestructura', 'Marketing y Negocios', '', '', '1', 'dia', 1),
('9FD0104B-72A5-B2B5-A189-F2EF04592C4C', 'Información', 'Reclamos', 'No contestan los teléfonos', 'Marketing y Negocios', 'christian.miranda@coac-sanfra.com', 'MIRANDA MIRANDA CHRISTIAN PATRICIO', '1', 'dia', 1),
('FC5001B1-7152-EAE2-AD77-26EDAC0CBAFA', 'Tarjeta de crédito', 'Reclamos', 'Recargas por gastos extrajudiciales', 'Cobranzas', '', '', '30', 'minuto', 1),
('43106150-C5C2-F99C-96AB-24497BF70F38', 'Depósitos a plazo fijo', 'Reclamos', 'Mala atención', 'Cobranzas', 'diana.rosero@coac-sanfra.com', 'DIANA ANDREA ROSERO JIMENEZ ', '10', 'minuto', 1),
('98E98262-234C-5F59-9A9E-1666869E921F', 'Crédito', 'Requerimientos', 'Otros', 'Negocios', 'diana.ulloa@coac-sanfra.com,fredy.zurita@coac-sanfra.com', 'ULLOA ULLOA DIANA GABRIELA,ZURITA VASQUEZ FREDY ENIN', '1', 'dia', 1),
('2FEBF30D-B291-1B25-8F23-366F5A8C2B45', 'Cajas', 'Reclamos', 'Llenar formularios para verificación', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '30', 'minuto', 1),
('BB56946E-5D53-F725-824D-67EBE07EF1F6', 'Cajas', 'Requerimientos', 'Solicitud de cámaras de seguridad', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '2', 'dia', 1),
('85D07CD7-1DE7-E028-82BB-0E20906A202B', 'Cajas', 'Reclamos', 'Mala atención', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '2', 'dia', 1),
('25F485B5-DC2A-7F03-A048-54E1AD2279C1', 'Canal Web', 'Reclamos', 'Tiempo de respuesta activación usuario', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'dia', 1),
('8EF67C66-83C0-76B4-B65C-EE3C49BC54B3', 'Cajas', 'Reclamos', 'Repetición de papeletas', 'Operaciones', 'paul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.compaul.noboa@coac-sanfra.com,paulina.rivera@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETHNOBOA VALAREZO PAUL VLADIMIR,RIVERA GUERRERO PAULINA ELIZABETH', '1', 'hora', 1),
('0E4C2B75-6296-92AF-9270-E4E88358FFC7', 'Canal Web', 'Reclamos', 'Cupos para transferencias', 'Operaciones', 'paul.noboa@coac-sanfra.com,diana.sanchez@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,SANCHEZ CISNEROS DIANA MARISELA', '30', 'minuto', 1),
('F0324575-2397-922B-B1F4-E62ABBF6EBA2', 'Tarjeta de debito', 'Reclamos', 'Otros', 'Operaciones', 'paul.noboa@coac-sanfra.com,alvaro.flores@coac-sanfra.com', 'NOBOA VALAREZO PAUL VLADIMIR,FLORES MOYA ALVARO VINICIO', '1', 'dia', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogoproductos`
--

CREATE TABLE `catalogoproductos` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `producto` varchar(300) COLLATE latin1_general_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `catalogoproductos`
--

INSERT INTO `catalogoproductos` (`id`, `producto`, `isActive`) VALUES
('E3467CD1-1AF0-4C64-AF24-B05CDB75C1E1', 'Cajas', 1),
('D42F32F6-3129-CF0B-84F0-54FA6864B2D5', 'ATM', 1),
('E3467CD1-1AF0-4C64-AF24-B05CDB75C1E4', 'Canal Web', 1),
('E3467CD1-1AF0-4C64-AF24-B05CDB75C1E5', 'Crédito', 1),
('71AE4014-9060-901B-B703-B28E0CDDBCE9', 'Tarjeta de debito', 1),
('18F4502D-7F3B-4370-90D5-7F724794561B', 'Tarjeta de crédito', 1),
('9D75EEA4-E537-725D-B2BD-DE5E04ECE413', 'Atención al cliente', 1),
('5AAF9F64-42E5-D01F-90DE-F1FE5B736CC8', 'Depósitos a plazo fijo', 1),
('40438EAE-03D9-85F3-9C63-EC4F77C60ED1', 'Información', 1),
('71CCAEBE-8060-501C-B1FB-64D0C6FB5A7D', 'CALL CENTER', 1),
('88B668CC-345D-AA31-8012-3D06EFCC292A', 'San Fra en línea', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogosubtiposincidencia`
--

CREATE TABLE `catalogosubtiposincidencia` (
  `id` varchar(36) NOT NULL,
  `stincidencia` varchar(500) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `catalogosubtiposincidencia`
--

INSERT INTO `catalogosubtiposincidencia` (`id`, `stincidencia`, `isActive`) VALUES
('9EB5126D-98B6-CF00-9D39-21D4D4797794', 'Cupos para transferencias', 1),
('EC13F7CA-C615-C090-8AAB-5F6EC0B70A1F', 'Actualización de datos', 0),
('34FD90BA-32F2-A668-BA67-72FAEDFA316F', 'Usurpación de usuarios y contraseñas por terceros (fishing)', 1),
('070AEF8E-728C-081F-909A-94F3F177331F', 'Estado y tiempo de efectivización de transferencias', 1),
('04E26411-3B3E-2A83-90EB-E8080B19B87F', 'Desbloqueo PIN transaccional', 1),
('DE7082AE-E133-2694-9070-9D546DE2CC1D', 'Bloqueo usuario Móvil', 0),
('5DE67AEF-4F99-A7EC-B9DC-CE9D7EA741F8', 'Información y tutorial de registro y transferencias', 1),
('769BACEA-4DD3-4AEE-8F47-079F43BADC14', 'Repetir la firma por inconformidad de las firmas', 1),
('0D31381D-ED82-88EA-8E11-7FDDFF3A5E9A', 'Débitos para aportes de socios y creación de plan futuro', 1),
('B50A4774-47D7-9800-9B99-BBA1F322312C', 'Deficiente comunicación por parte del gestor de negocios', 1),
('89324EF6-63AB-32EC-BD94-2505C7AC9631', 'Tiempo de respuesta de la solicitud de crédito', 1),
('F60B4BAD-118F-D2D6-ACAD-B9F72C2DF902', 'Estado de solicitud de crédito', 1),
('907BA0C0-1C75-BA1B-9D4A-54C3C1C43BA5', 'Información y requisitos para créditos', 1),
('64129FF7-04A5-F087-959E-1E2E4A385F08', 'Solicitud de precancelación de créditos', 1),
('8AE5CCA5-D51B-EE44-92DA-AE94239CA2E9', 'Saldos pendientes de crédito y cuota a cancelar', 1),
('5FB8E634-1D3D-2626-9CD7-B120928B1988', 'Información para renovación de créditos', 1),
('895687FA-42B8-9872-987A-591904F2CD55', 'Recargas por gastos extrajudiciales', 1),
('A7CDD9B3-66C6-B4CC-9B92-75E907A15E60', 'No contestan los teléfonos', 1),
('CC3A9011-29CF-243D-B6FF-A4AC5A5DD6A6', 'Imagen e infraestructura', 1),
('615D722C-0251-DC79-A082-843B09251CA3', 'prueba', 1),
('B307542E-3CBD-07DE-AFE2-82BF0124F24F', 'Estado de la cuenta de ahorro a la vista', 1),
('FB4B3BA7-75BE-DAC5-A1AD-927585687C4B', 'Demora en acreditación de sueldos, por convenios establecidos', 1),
('B8D25291-662D-9640-BC20-AD4FC092A97B', 'Bloqueo de cuenta por perdida y robo de documento', 1),
('9B2DD849-9B19-269C-B556-8ECEBF897E4A', 'Inclusión de firmas', 1),
('5C5D9458-F82E-84B7-A957-04BB085A2C4D', 'Demora en revisión de documentos legales y sus respectivos informes', 1),
('5EA49A6A-43BD-B00A-A430-5A2253841C10', 'Llenar formularios para verificación', 1),
('F852ACE2-B7A4-C303-93D1-39B9DF40AFAB', 'Información para inversión', 1),
('86BB7326-9F34-B765-93CE-17AD6A022858', 'Solicitud de reimpresión', 1),
('6B534BCB-7B2C-EB99-9822-AB13A97795C8', 'Tiempo de respuesta activación usuario', 1),
('8BEF0795-F5FA-9B33-99B0-F04847EB4EB8', 'Mala atención', 1),
('E2CC2C4E-ADD2-B85B-B15F-B3734EBCC597', 'Repetición de papeletas', 1),
('A62304BC-9061-DDB5-A16D-5A53DA762E05', 'Demora en la atención', 1),
('09B37AF2-7448-BB2F-B45E-C8237A91335D', 'Transacciones mal efectuadas', 1),
('169D5F79-7F91-3B50-8B6A-F4344B68E263', 'Llenar formularios para verificación', 1),
('309AD41E-CE58-A2C5-B392-048325F5CE0D', 'Solicitud de cámaras de seguridad', 1),
('57D4E1F5-6F73-54DA-8786-287AAEB0C1D3', 'Solicitud de reimpresión', 1),
('FE6365A2-570E-DA46-AB2D-E545070F5B22', 'Otros', 1),
('F7639C2B-9711-32F9-BD59-E17FF85EAE77', 'ATM sin funcionamiento', 1),
('E98FE706-17F5-CAB4-8FB9-AED1BCA8269D', 'No se procesó la transacción', 1),
('76E61098-F96A-FD6B-96DD-6EA6D3047FB1', 'Entrega de billetes en deterioro', 1),
('0373ED8C-3FC5-8CCD-A97C-813D7EC317D3', 'Duplicidad en transacciones', 1),
('839B802F-3A7E-B6CF-AE85-971113A72F75', 'No se pudo utilizar en locales comerciales', 1),
('9A90B12F-7748-FE02-AB22-DA950020F8E6', 'Uso de la tarjeta en el exterior', 1),
('478040DD-7C00-7586-86D0-C7C9F787652A', 'Información y requisitos tarjeta de débito', 1),
('3ED88BA1-CAF5-FF60-9E7A-3C503FAEFC7A', 'Bloqueos de tarjeta de débito ', 1),
('BBA3B277-CAA3-0D5F-82BB-295617C01510', 'Desbloqueos de tarjeta de débito ', 1),
('41FB1A5F-EB1D-9B9D-A220-7F78FD9BD4E5', 'Estatus de la solicitud', 1),
('812B949B-F22B-33CF-8527-2548BEB0A21F', 'Duplicidad en transacciones', 1),
('12BBD5CC-A7F0-39E6-B7BC-28CC6DE57576', 'No se pudo utilizar en locales comerciales', 1),
('7B933013-8C96-B605-9539-BE09C61E99C1', 'Información y requisitos tarjeta de crédito', 1),
('BB5518F5-EE3D-CD06-A7C5-FA45540F2441', 'Estatus de la solicitud', 1),
('16A929B4-FDC7-E0C0-BD5B-D54A67ABE16B', 'Recargos por gastos extrajudiciales', 1),
('4FEF16A0-167D-4E24-8B79-081BDD203BFE', 'Llenar formularios para verificación', 1),
('75C1267B-8788-F425-9C51-7E7544793E56', 'Solicitud de reimpresión', 1),
('1240E0AB-7141-A42C-A826-1D596681B8B5', 'Bloqueo de valores no autorizados', 1),
('DDFBA898-20AA-17A1-BCEC-3859DD9430F7', 'Debitos no autorizados', 1),
('5580E8F1-1E99-66C1-A3E0-32954F6049A9', 'Información de beneficio de fondo mortuorio', 1),
('C022FD3B-5E70-DF72-A9BB-AADF7D4B2A43', 'Estado y vencimiento de Plan Futuro', 1),
('1A0A1D82-B780-EFCA-8A04-736946DD343E', 'Resumen de movimientos de la cuenta', 1),
('6A93844E-87BB-DB45-ADF7-CEDE86CC6559', 'SEGUIMIENTO DE DIFERIDOS', 1),
('86B4E12C-B15B-A6BC-8D32-44B3FF9D6157', 'Bloqueo San Fra en línea', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogotiposincidencia`
--

CREATE TABLE `catalogotiposincidencia` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `tipoincidencia` varchar(300) COLLATE latin1_general_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `catalogotiposincidencia`
--

INSERT INTO `catalogotiposincidencia` (`id`, `tipoincidencia`, `isActive`) VALUES
('601BCEAF-9FDC-4692-87B2-1DFCB799D602', 'Requerimientos', 1),
('601BCEAF-9FDC-4692-87B2-1DFCB799D603', 'Sugerencias', 1),
('175D2794-9A77-BCDC-AD86-AED10E609A0C', 'Reclamos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `cedula` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `name` varchar(500) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `phone` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `createdate` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codes`
--

CREATE TABLE `codes` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `code` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `codes`
--

INSERT INTO `codes` (`id`, `code`) VALUES
('07680E-FFE5-4579-AAD6-5CFF6C95D01C', 765062),
('CD15B8BA-BF66-492C-A075-0B8553C547A1', 452282),
('DD7E8AE6-18A6-442C-A355-C2D2A828E942', 773192),
('661457E7-196F-42AE-882F-7ACDC2C537FA', 367602),
('F8426F26-A80C-4757-AC56-E39197274294', 427660),
('7893EE7A-1A6B-440A-AAD1-F540CAE2C79D', 306726),
('4F39DB55-D30B-4121-99E5-767BD704BD22', 709670),
('E1ED9213-8D72-48AA-B889-FBEE8572A3DD', 870306),
('0F049AF5-4031-4DC2-9444-213EBE6370B5', 336295),
('FE96C0B6-228D-438C-B4A9-7060EEE2779E', 610325),
('2F59EBFD-609D-4429-A18C-31EE84371E93', 388587),
('D104818E-4D47-4B87-84AE-D56ADA2DB7A2', 994083),
('AE797CEE-4E1F-4ADD-B786-B4C74105F70E', 367843),
('E287CD69-D3B8-4978-A6AE-5C21ABE3A0C1', 663921),
('854F1162-54ED-4E41-A447-7CAE3C7DC1C8', 880824),
('D84BFB6B-7EBC-4258-964D-1C656E64B8D9', 614315),
('FD4B3ABD-0593-43D9-B18B-A76E0577502D', 103325),
('D7F6E61B-E0D3-4A60-B5C2-17F6CA333942', 387829),
('266AFCF6-209C-417E-9850-00148F86ABC2', 939373),
('34DF32C3-98AE-4779-9B01-39E175C91F38', 703078),
('E396BD0B-B2F2-4229-AD71-D917D098F95E', 180004),
('3220CDEA-277B-470C-BCE0-AEEA5693B8F1', 534365),
('698D4ECD-6146-41C7-99B7-36ECD9BD96DE', 760099),
('AEB032E6-82F9-4D5E-AF12-B981E98AE78D', 262148),
('47361DFA-ABDD-4611-BE9F-C82150BF3C12', 581119),
('5A50FBE1-532C-415D-9A78-5C0192DA3C23', 328999),
('4CE95936-9F2B-428C-A07A-984E98CE9B26', 335326),
('A72DA88D-C81B-4577-8FD3-8D7AA2F5B3A1', 532944),
('4ACB4F1C-7625-415F-A160-112CD26A1E05', 477292),
('D75B7DD7-A3E1-4EDF-BC03-3F27A39FB9C7', 103725),
('6FC6FD60-300A-4700-945E-53A56AB76877', 354734),
('5D1C78B9-7E48-43E7-A9A7-4337E6F8C1F1', 347319),
('C6021C40-0F03-439B-8732-D2214FD52B36', 248619),
('A9F360D8-95FC-4DC8-B8C3-979E3E30F68E', 630527),
('F66A1862-268E-4B16-AF99-C65D11D574E9', 368057),
('7B4F54B0-625E-4255-8147-7655E6F891B0', 663003),
('00926CA8-5CAB-4BD9-A210-B4D65B44CD9A', 278458),
('5B777F6A-D3A8-448F-B58D-C2C75E756873', 661520),
('A4C14BDE-E1CE-4335-AABD-46FE519EC3BA', 371134),
('D53087DC-B753-4030-A942-409F14EDAFB0', 733277),
('B96C4224-7A41-415D-9018-22510F0C42ED', 996124),
('101B280F-E197-4385-B021-46440F232065', 138266),
('310C676A-0F20-4748-A2C6-504DE2E5C100', 232310),
('82A3912E-502F-42D8-9B7B-659448342FC9', 451559),
('B5CA6869-786C-4217-9AC4-0CD259DEAA33', 607718),
('5BA8D341-D1D1-45A7-8862-4F31B7A2E13C', 495865),
('4DA689A3-373E-4158-A942-3160D503EAAD', 665365),
('F16493BF-E74A-4B2A-BD45-77C040530060', 123252),
('CC207EBC-6586-4445-9011-3CB1B25084C5', 154258),
('90AB07E4-7AEB-4E15-B230-7E466BA90828', 967790),
('C49BE498-03C4-4F8B-9B92-29C0FA3F7417', 514738),
('B4EABEBC-4945-433E-8211-56DD88C79924', 260412),
('E15937EC-7D47-4C9B-816F-086944EF4F30', 236153),
('87CD9706-62B6-4446-989E-4A08CCE526DC', 731755),
('0BBD5D1D-3876-48DD-9CE6-CB18EAC358D4', 522585),
('5A6BEA26-3A9F-4373-ABD0-9C23E0D53C66', 297561),
('4EC6EA7F-95C2-49D7-8EB1-6C8D766621BC', 963904),
('A837BC75-11BA-4298-9517-7C90F7803BC9', 279185),
('DF4B7634-D120-4F42-826B-3B38F1855DED', 961201),
('2150E09C-7A65-4191-8CCD-A14D5E076F57', 878913),
('067F175F-9B1A-4158-A00D-BCAD0179482E', 753368),
('B0982536-0515-480C-907B-F588A2B7CD5D', 441673),
('A9C54A6A-965E-41D6-9B0B-CECE60E81333', 544990),
('B4C0E676-CB96-4646-822E-CBCDFD0DD5F0', 676869),
('2C22FFAA-9E2F-43B4-B800-BE4ED3421FAC', 918709),
('F72319A1-91FA-4CD5-BAB2-4243574D0ACF', 496982),
('4ACD6F50-B0D2-472A-B17D-535974E2C956', 167177),
('32C7DED9-85D9-444F-912F-B43B8F09F4AE', 312089),
('9999733E-B737-4753-B088-CB345C70307E', 417814),
('6CA94BAB-2D18-4954-ACBD-B74CF17EA36E', 295394),
('F89E64EA-0518-405E-AD95-2910F12F07F0', 394618),
('F3AEABF0-03A6-4B13-91AC-F68175E5F4AF', 598454),
('1F2955D9-2778-45A7-BA26-BC9731E50EA6', 591585),
('0B2CD809-555A-4F45-B1E9-966518B879AC', 364198),
('7BB7E650-7920-4B98-9516-8FD256793A97', 465453),
('E54F8DB4-0656-4DA9-B195-A2BB56A6EC6D', 740196),
('BA0848A0-5F78-49A6-A25B-63031D865097', 177231),
('2FC3F7D8-5EB6-45B9-A547-5434B6AEBDE4', 245922),
('8A9D76C9-7CD5-47C5-BDAE-5A54A972CD6E', 866485),
('E555CBEA-D49D-4D8B-9433-B50D8AACA2C9', 490984),
('65B51C84-B922-46C4-9063-64D75DB9813D', 215281),
('7F45BAE7-7114-4E4D-A7DA-5FF786017D64', 365445),
('C1629611-5444-4C62-A495-D4766E96F6BE', 205946),
('81DC7B22-E6A9-468B-9B04-06DA40A95A04', 857325),
('083129B4-EC4E-41F6-8E6B-4AAF29C10AB4', 130734),
('215DE0B6-B367-4F66-8DFB-DEF82C4BF6CC', 752022),
('75B74FFB-A3B4-464C-AC48-EE624CC5D531', 355419),
('40A6FC2E-CEFF-45E3-92E8-78E25834050E', 138282),
('22C47558-707D-4B47-AA38-F86A48E115D5', 886388),
('4FCDDF80-D70E-498E-B2D6-CCC9F50F338E', 845431),
('EF738451-4799-4D0C-9806-B9CB4342212A', 592909),
('E526C087-4244-416B-ACBB-4715B5DD2E4F', 787814),
('BE306B79-A5BC-4700-88A2-9786749D0AEC', 561665),
('63BF2948-5CF0-4CC1-94BB-1E58654F7503', 403878),
('513DC840-C79F-41F5-B4A5-D7179EDA064C', 747734),
('59964644-5005-4204-8E70-827B26E6D20A', 169533),
('925AF07B-752C-4CCA-AE3E-154EC6187BD1', 999646),
('5BB95628-FA6B-4698-818E-0A6E1563EC0C', 666796),
('97F8D294-A46F-44C5-BC17-CC6796370F16', 663750),
('A05D124E-28B2-4F6A-A162-B826FA02A893', 571988),
('B8984525-0A22-4E53-B90E-0834E13B6713', 784680),
('3219F941-059C-4AD2-9B56-AF350DFA9109', 868108),
('9AF8B086-121A-49B3-B271-6C5802A21815', 785417),
('C64B3586-6863-47A5-BAAE-57DBAC1A8EC8', 919688),
('7832DBAF-0FB9-4BA0-AE1E-603D7708440C', 220656),
('F3DB3B56-8AC3-4497-95BD-5F17CD49B8A8', 973808),
('6E464589-0580-4349-A84C-6B4926A1C55F', 855195),
('1165B7BB-5E6B-442F-834C-8F5A2531E7AE', 865799),
('9E3CECCC-D348-43FB-9C0C-B7B64C31B979', 616487),
('C2ECB9BD-C401-42F5-87FB-48406355B716', 105774),
('83E6C3D0-5C76-48BF-8AB6-B1E22D92A3AC', 890889),
('3A50350F-D63F-4EB7-A2DE-2F4039542C0F', 920649),
('7332EEBF-A9E2-442F-BB3F-904923461146', 708521),
('6522CD5B-B603-42B9-B3A1-C04BE9D3D6C1', 435977),
('11035693-178E-49FB-9D26-CADF3CE8D773', 745159),
('37A64E3D-61D6-402F-9E82-E148DED92648', 971061),
('76A865A6-DC81-4589-A11B-9A1DF226D30F', 812579),
('AE674721-35CC-495A-94AB-3BB1DFC2149E', 265026),
('C84DA6D6-0F37-4B27-888B-EA235BA45DAA', 338087),
('D7380385-9AFC-4FC8-84F9-B7D8F8B0554B', 703893),
('253B8008-EFD7-4FC7-ACD8-0D97CF8B4376', 692495),
('20ADD7B7-375F-44AE-90FA-C70CEC59D406', 787356),
('0D4CC86A-6D47-462E-9BAB-D89FFE9C26E8', 740159),
('146AB244-2AF2-4214-BE14-0BFCCD68F714', 885805),
('F2357A33-3A73-4A84-AEA0-7FCBDFDE59A6', 178790),
('9EBA4A07-1EB2-4C4F-9E7F-DF6F3FA17110', 151189),
('DD194727-BE24-4EE4-9ED9-91311D60E1FD', 529159),
('17D90670-01EB-48C1-A82C-569427EFBE80', 864268),
('E7E90C57-A6D9-4425-B89A-5A6B99B9E1A0', 553506),
('811057F6-1D5E-4B12-9755-854E217245C5', 260348),
('A30D7310-0E60-4E18-94C5-AC26F18692B5', 911649),
('50C3E907-A7AD-4427-814C-2D2DB21CABAA', 701965),
('7C47677D-7F1B-4AE3-AEBE-3088A5261FF5', 551840),
('8B39CDCE-47CA-48A1-83EE-0227C64F3B78', 285494),
('FE6B3891-B05D-4724-BD63-EF45194B761C', 193852),
('AEA29256-AC83-4309-AC58-C33746221192', 931382),
('F2AECFBE-392C-4B01-9A87-783698FA811C', 437356),
('F799D6D3-06A5-4C87-B08A-B2AE1E7F683F', 254322),
('604C9568-A5E6-45F0-8320-DEF7898BCB9E', 342211),
('E8853979-238F-43F9-A50E-A89374F7936C', 759944),
('611B90D7-8A6A-46B9-BFAE-7683A4CD4DB5', 544236),
('9CC3D92A-D822-4E68-939B-EDF58DBC07C3', 823610),
('C846EA32-BAFC-42CE-9EB7-696BFB06CFEC', 528831),
('50DC8A77-707C-47B4-B641-9229A7256C08', 691511),
('C441646E-1F6C-4DF0-A274-78E8813C9E5F', 917200),
('C9338106-939D-4279-B52B-088E5F38716E', 786757),
('F51C3DEE-1295-469C-A8A9-03195D4B6187', 823162),
('442AD301-4617-46D0-9FB0-CD706488A55B', 761435),
('D744E990-13D0-4DDD-9E52-7AABDDDCB4E1', 717519),
('40282408-3049-4BC4-A6A5-C260BA0C9F2A', 927648),
('6143335F-C332-415D-BFB3-040D19CCA728', 271337),
('9835F322-EA35-464A-9788-F0107D0FFDA4', 820909),
('5C1FA369-E50A-4458-8E7E-2D657B89616B', 930918),
('A33B2E96-2DDC-44A0-AE76-09D0DB3EB757', 370047),
('66915CD9-E28A-44BB-BFD8-2C0B77F89F1F', 741297),
('DBA76496-E8B5-4595-B5E6-4FD63B66306E', 980981),
('30F1916F-1B75-44F0-9DDF-2AD4B2AE4B81', 676160),
('C321B71D-6FCE-43B8-85AA-FC973F15B19B', 907524),
('9A365C08-65A4-46C9-AB0C-EBEB3749170E', 124248),
('8BC0C334-BE65-4A6B-87B6-1EF974EB8D3E', 185951),
('FD5AF897-AE1E-40A6-943C-40A83D07440B', 464049),
('38EC0CB1-1558-4103-816E-7BC9F5693811', 122562),
('56B036DC-57D5-4AA0-AF85-FD03257501D1', 775495),
('3792F4A7-252A-467B-B1D9-6644A0AFA5D2', 669611),
('B24C7ACE-411E-4542-908E-7EB2B6D04F32', 697407),
('C47787EE-8A57-4C59-BB99-07D0227A4668', 858102),
('1B966DE6-B16F-45D4-9608-1A8DEB01A5AF', 843484),
('1CD4F947-562B-44BC-8BF8-DE9086F9962F', 971760),
('C0FFEF8D-B6BF-4BF7-820A-BB10040268CF', 814790),
('4A781244-8BCC-4D72-AE35-D048302E71E5', 299338),
('C61C774C-4636-4A20-ACFB-73D3D53D2F7B', 538136),
('2F77CB92-C2EB-4CCB-BD87-2FC17A727D10', 574884),
('BE100248-5B4E-41F2-9C63-A5D55199F1BB', 276648),
('58B7C913-F6D6-446D-9B56-F41BC5D1EF84', 860958),
('FE8FB84F-61AB-4EFE-B3B9-DD58F6387FFD', 474692),
('5836A1EC-1E9B-49B3-AA00-852530E06A9E', 997698),
('1ACF5439-5AC3-41A0-8CA5-EB0378F3108D', 436325),
('CA8009D1-8FA6-4033-B34A-60A7F82C853D', 583675),
('1AF99035-A142-4C37-837D-898261F71B6B', 155284),
('640BBFC4-BD55-4C2B-9F88-4F9617DBF247', 112599),
('8FCD044A-950D-41E1-973D-90E6CE857DE3', 275640),
('88016407-9F34-40B7-A723-D32E30AC6DA1', 827995),
('36C56409-9E28-49C9-9D84-BFD45067A05F', 691489),
('3CF2EF71-3B0C-4C96-AD25-26E908F00F3B', 552874),
('D07E5E83-B862-415F-A9FF-3F7AC8F3FAD2', 255213),
('C5EDA5B2-42A8-4C47-BECD-1C90C2FCFC56', 193658),
('73FD9748-EA69-49F3-9B72-57D41B6AFCCC', 435778),
('EB0C9DA8-F8D1-43C8-85F3-443F1785A64D', 190796),
('09EF64BA-12E5-4AF6-89B8-972217151341', 277249),
('1579D6EF-D1D6-4264-9D56-DD7726EFAA02', 697210),
('6420B620-57AA-401C-B7E6-EAA71CFA262D', 689875),
('AD16E0A6-4BD3-4FA8-89E7-934DDC06AD41', 762559),
('CCF5ECD6-6FD0-4F71-9287-A2686ADC1623', 456188),
('C20B06B6-3813-478E-8080-9E3EA9829E69', 302130),
('5BD0833B-55B3-405D-837D-697D09DA2226', 809633),
('E8984B2A-D605-48C9-9D1E-90A6C9CD8FB4', 688724),
('BBFD85B6-D623-4FD6-9CD2-2372E107B7F9', 643980),
('9481AA25-82BF-43B0-AE6B-DE9F9F9B026A', 397149),
('FF118FF6-7DB7-4E91-B225-324D7AF8B773', 375725),
('20E40355-85EC-43E1-BE1C-DCFCEF3505B6', 701947),
('0ECDED48-78A5-477E-AF93-5057949FA20A', 657844),
('2D71908C-2FC0-43F1-A4D2-004E40282807', 167147),
('763E9EA8-E066-4EEA-8F27-BC1373272CD7', 130850),
('500B085D-2838-4DEB-95B5-37BD02AC7504', 387321),
('FB7336CA-8489-4FD9-BCC1-5363C6B44BCC', 296300),
('06541F74-BEF1-41DB-A006-3E87C85D7F9A', 706797),
('C16C25F3-FFF2-4D59-B870-80CAAAC711FF', 171626),
('251328C4-320A-4D5F-8774-1753C53D44DC', 517687),
('B8808915-AB39-45B5-9803-FA49FCD717B1', 111145),
('5F1A403E-0FB0-4A87-BD88-AC62D28E5D02', 939615),
('B547AD48-96E4-4154-97AA-CE696DE80D3A', 667356),
('7643879A-885A-40FD-B11E-331B8E8F202B', 914184),
('A41B4DCC-B059-45B7-9767-8162DB665002', 658172),
('FFAC8862-E351-450A-9CAC-4C1784D699B7', 907811),
('C8C332F2-BB39-4DA1-9975-C83940000C3C', 507932),
('54684431-BDA5-409E-B65B-213D1C2F8B4D', 137088),
('2931F685-D7A8-4B0E-864C-6C737B179EAA', 567846),
('780621CB-ABEB-460E-AB57-907A86D66E17', 837709),
('D6437F37-4538-4D7D-B94B-13708046C45D', 385237),
('85B8B939-9C23-4AE8-BA88-1F78F7798DE5', 970815),
('0400DEE7-A67A-4477-92A9-D152ECC13152', 423702),
('43B6A8D8-636B-4AEA-9AFE-44977AD0A845', 497196),
('F5D3649A-FE9C-432C-BC6B-66BD29F40251', 522121),
('C23EEA5B-A26D-4EAB-BEE4-0C39B8E7FC8A', 679083),
('A06A1589-E835-4981-9639-05B1940C2D10', 633851),
('A2E2B402-47FE-400E-ACE8-304A4AB266B5', 127549),
('B3F713A0-9F68-451D-AD15-49CCF31F45C4', 763426),
('C69AB2BE-08F6-4AE2-8855-6DBC3F45942F', 627238),
('D4337B2D-2AD1-4CB8-8789-A4FBCF584932', 193782),
('DA8D08C3-FE66-487C-9FFE-88F0FA228BC6', 789777),
('55E4A1B0-8EC9-41FB-B6C0-CB43A334ABE2', 211103),
('7FAF9AB1-0800-4CA4-BE32-B88262BBA018', 457262),
('E2A45C2C-1147-463C-AA74-551942CA3BCC', 848491),
('DC2E0E94-42ED-4164-8557-A6F4D5BC800D', 917087),
('7152D447-F7EB-4D03-BCA6-5E56863D26AC', 608457),
('A7562DDA-B24B-40F4-B083-DC008D786B11', 540358),
('E91078F3-DC2F-4F30-AE9F-09C295B848A3', 807284),
('965A8829-90FB-428C-B0EB-5B3225A17E70', 746551),
('C3ED0C04-FEC2-4538-8F65-CCBF3C0FDD98', 131451),
('E025F9A4-66D7-4813-A9A9-0838F642EB80', 791158),
('5FC13873-CCD6-437F-B7A8-93D2E8A31CA7', 324648),
('FAFB10B7-5C21-445A-9E49-4620FB3D4D75', 614330),
('E6DD59B6-936D-400A-B612-41FA95A752DD', 245297),
('1A5CD5FF-75F3-4EC7-8336-CF304B0D8D08', 902178),
('E054F20F-F2CB-4170-BA4F-CE087E884A2B', 841596),
('D293113E-C57C-4053-AC8B-7A0B6755A374', 737356),
('D491ADEB-4CDB-4F98-B492-CA00AEB92F24', 174438),
('61EA92AB-D6E6-4E1D-950C-8E86ABAF7949', 640241),
('396D3481-64C5-4DEC-8E63-D4FD07ABF780', 815161),
('0BE0E58E-CC18-4F30-888C-AE6CE6079FF2', 773822),
('FFAACFCB-37B3-41CF-92C7-DE033279EFD5', 122784),
('0AAC2B27-7ACF-4BBA-8031-C33025ADF1C2', 888530),
('91B7CE55-7FE2-4CF3-A2F0-A6320C8844C5', 910228),
('E4EA8E5D-2299-48BD-A486-DA9E3E179CA3', 542147),
('CD6B3774-FA81-4FE7-BD07-50614653E001', 980680),
('85B78688-AF48-42DD-B248-6984573006EE', 883346),
('AFC9A960-791E-45F7-89D5-88BF05FF8EB4', 624071),
('2496FD6A-44F4-4142-8BC9-A43A059125D0', 132073),
('35D36BD9-CC98-444F-9811-0EA4E3E42351', 140986),
('C19033BE-56F5-47AE-9B89-ADC840787A16', 622527),
('5A077CA3-8F44-4CB4-A901-1D44871BD283', 266835),
('BB9C7548-D387-4415-94F3-26D15EAE8003', 742056),
('DF033A15-B9B3-4C3E-AC95-9B2B8C4DFA35', 453684),
('DCC7A432-D328-4F3D-8ED1-26D64A11F181', 732970),
('44610316-C024-488C-A47C-E71FD8565C8A', 221883),
('AA914F28-B754-4636-B514-CAF17CFF76DC', 201218),
('91C92660-0F30-4779-8058-5243373C31E7', 531635),
('9B29AF10-8D38-4E7E-8C28-0540A67E88B1', 210506),
('3E402D3C-A7B7-4726-B4E4-F82B8DED2767', 974495),
('7516AB92-24A5-40FE-B961-1C12603A6935', 290218),
('A4884C5D-C552-4B30-99A8-74B9CD76A1F4', 365705),
('39D70634-0823-45FA-83FE-46AB94C48674', 655619),
('2F0C47F9-7858-4FE7-846B-13009F72CEE8', 662017),
('F9554A27-E74E-4094-A225-6EA6D42EF7E4', 872035),
('A810CBB7-99B6-4AA6-AEFA-74A3E361EAFA', 918682),
('D17302A6-964F-4C7C-859E-BCE177EE7E15', 248505),
('20394169-2CBF-4830-B473-E1CEDC357EFF', 269512),
('B6F32CAC-3A66-4108-A66C-EB9B6A951694', 567897),
('BA5C5E49-0293-492A-8C14-4BB442635548', 327089),
('71CD7F81-7CED-47F5-8299-EF3A4A974761', 749989),
('FF2A33F1-2EAE-4B48-A731-BC16B6B1DCAD', 826813),
('E6561A9E-211E-4C45-B6A4-8E33FEC95F95', 819361),
('D32456FB-410C-492D-A40A-1BFE88F0C50E', 189092),
('7A117A42-8FAB-43B4-B91C-FDBB3839C1A5', 789322),
('B471219E-5AFF-418F-9FAE-C046E237A724', 776101),
('E323188A-B8DD-4017-845C-B7D0EEA75705', 125076),
('5284584B-D417-4614-9E48-526124B58EAB', 934400),
('6D9E74E6-39FA-4521-BDDD-7F0E1F6F65B1', 567240),
('7AC0CA7B-5970-4380-A770-7234F12FA5C9', 994122),
('19C8BD30-D029-4403-9C19-DDF28DB0F5F8', 940792),
('57E4396D-B47B-4770-92B4-F31F6EE11DC2', 612368),
('42FBA304-6F80-4C4B-B8FF-2B4E85C960BC', 204106),
('C018775C-1FBA-4527-91E6-7549B8361240', 568788),
('81D159CC-D82F-4A74-BD4C-1B268258E76F', 892711),
('253F265B-2C59-4A5A-B0DE-E79A0C57E986', 227579),
('8ECB52C6-224F-4D81-912B-322AB2D73D97', 373185),
('5C493FC8-8E43-490E-BFDD-ACD9358C313F', 318393),
('19BFC090-948D-4BF6-9D7C-6C6BE2583B9B', 746468),
('ADFC010E-00C0-4B01-8827-7D32FAB21B74', 681846),
('D02B4DC9-B95D-401D-8A1E-5B58446D07FE', 551962),
('A8703332-900D-4A48-B1E9-A48A1DE74700', 491881),
('4C92A8F0-82BB-4BAF-AD4B-A5288286D1C1', 867570),
('CD87A0EE-E87E-4F2A-ABCE-E23EF15CF45C', 788022),
('867909E3-F24A-4E7F-BEF1-F6843A5EB669', 860967),
('293CAF4C-4C53-4666-BB0D-78C069F89986', 536644),
('B8CC5D57-5EC8-481F-84C7-EE884408906E', 421983),
('E785B3EE-EBCB-4CB0-9F2C-8FFF0DC14918', 113502),
('A83D3CFC-23D0-4796-AA60-C21587BC5A72', 342989),
('08BABB85-76D5-4877-BCBD-DF1384E64FC5', 683117),
('7C0686FF-A3D5-4461-A06E-319EB7604775', 787481),
('8C84F645-2216-4B99-96C6-040F54D34F25', 595613),
('2614BAF1-8D67-4032-80FE-8EDAEF0426B6', 501489),
('92B8F18A-DC92-411B-BE79-C392A966A6BB', 413866),
('9A063366-D022-4499-BC62-E902B4F29EB2', 764709),
('242285DA-CA78-4954-8AE0-B9D0E55391D8', 629534),
('71E38C3D-381F-4D98-BF90-0D4442506998', 769911),
('CB19B3F6-D46A-4940-B899-6BCEDCE027F8', 619605),
('2BB9E7E8-119B-49AE-A025-7AACDF486569', 924149),
('952D7830-D5FB-4DBF-8BF6-E2C2A71B2E13', 218291),
('43C04EB5-B34E-4291-801B-F93E79559DEC', 866653),
('13672553-A71A-4285-AB69-3A87C79C9D6F', 546818),
('DCFE4C10-D3DF-4EEC-B5A9-51CD9551C5C7', 259294),
('9598D1BC-DA07-4D33-9ECB-40F9FCE100F5', 880058),
('211ACED3-B73E-4FC5-B1EB-C50CE5BC3CDD', 607805),
('0F5F113A-2BF7-43FF-BA45-97C2B37AB085', 770841),
('672AA587-68B9-4BC7-A398-CA4023C59EF1', 273973),
('97303D8F-3722-4012-9859-AAC1D2A686E0', 299581),
('D9BDC5D9-AF29-44E0-A726-DBFF92F8A066', 695295),
('D1DE99E4-B07C-4935-B8A1-934B81F86C16', 472894),
('372748B5-26DA-4678-9F1F-D03D2F935F1E', 605608),
('2609095E-7B3B-46D2-848E-D461827062CC', 219409),
('53AA0018-F136-41FC-966B-2F806CE531EB', 659388),
('A97D642A-208E-4081-B960-AEA641203301', 146657),
('661AE80E-70BA-4839-A686-49FD25E3EE54', 709488),
('6B505B57-18E3-45CF-B6F4-28350C140403', 252349),
('244BCA1F-66CC-40CA-A9DB-2C8B747522B7', 535739),
('D3A99A39-6055-4DC9-BB3A-C6C80D3C31DE', 582500),
('612D1710-B9CF-4ADC-B1D2-C4726AAF2A2F', 568861),
('71C437B9-DC09-4C47-9118-22E6058D4774', 426352),
('778EBD4E-B1D3-4D86-A3E3-D7CCFD71ADBF', 147895),
('34FD7B0B-FBC5-4A92-846F-4543FA0DF385', 484284),
('81280085-6DEE-42E2-B9BC-1F7E441576B4', 666017),
('7F7DC54D-882F-48FC-B5D2-49FAAADE93E1', 399632),
('D333D909-FF3B-4494-90CD-79BFFE970423', 668322),
('6FC1DFBC-CFFE-447E-917D-A92EC79A614A', 806072),
('D65AF98E-1ACB-4337-B3D7-FB2576833115', 758790),
('CC763D3F-56B0-4A17-9E12-D3AE5420220A', 635865),
('999ADF1E-3F96-4206-8696-638F460D04CE', 843209),
('935A032A-FD75-450D-B442-329C4A83BFE0', 650335),
('990AA9D7-41F0-4680-B9D5-18B47FA7FA9E', 553179),
('E157F76F-B4A1-4FCA-B232-0E597E34D06A', 173104),
('45266275-DBC1-45F3-BA2C-D7853AB13969', 347353),
('17DF71EA-A75C-404A-813E-4A4396821AEF', 567035),
('5DD09160-D92E-45FA-9FC6-05B4046B620D', 446166),
('020DCC12-ECA3-4E4F-AA06-853FAF2AAA00', 175329),
('21165FFF-B259-421D-96FE-4CC50284E6F1', 669708),
('7CA8F6A4-D2A8-48D7-A01D-AC3A7DC9E6FF', 185860),
('801C8E0F-F68E-4B94-8890-48B35FC2A54F', 951147),
('4367F481-E1E9-4F66-84B6-CF5713212CA2', 454592),
('AA333E3D-01EC-4F88-A966-CCD2A827F2DB', 147086),
('5F1CC6BF-5832-4F00-905F-B8864B0FB691', 154976),
('C0674952-AB00-4346-B509-BA215FCEB4FE', 588320),
('6775141C-E8E6-4C8E-9D80-7803A1F36136', 327248),
('EB2893BE-C6AC-442B-8E4C-67BB23D493DA', 416070),
('4202D520-8220-457A-8EFE-C73ACD1CBD10', 282278),
('F499498D-EE3A-4AC6-A30F-04E12C74B04B', 783375),
('8A822D2F-1E5A-44AC-BD1E-D13B8E2832C6', 942714),
('F92E0CE5-DE7B-4305-A7A7-DB108E82BBDF', 857812),
('590A9039-9AC5-4C09-A6FA-8B3151528E1E', 358055),
('6D275A6C-A4DF-46D5-BC94-EF0A2AFDB3FC', 954695),
('2685817B-0586-4A76-9308-E76EC0B68592', 694822),
('78B2C29A-84E0-40D2-B2C1-B715D97D53F8', 512673),
('9442ABB9-6B7B-496A-B88F-910F8DBCE7EB', 470519),
('C04BE03D-81DD-4729-B795-13145B9D0563', 872428),
('605E5CBD-644E-444E-B0FC-2170CE7996C4', 327643),
('8D8271B0-8B5F-4814-AA73-B09ABCF9ECA7', 329846),
('E4A39037-6BFF-4B66-888A-9CB31AD78EAE', 166119),
('721430B1-729E-4FCA-AA52-45FA2ABFD82F', 364657),
('0C43FE6D-AB63-4E98-96C3-70EBDF8CF4C3', 501967),
('93CC476B-C0B0-41F6-8F2A-365816D08DC6', 918888),
('213880A2-5C4E-4809-8660-C367C04071F1', 943433),
('6542B393-BBFF-4B2D-A05A-6FA4FB046CC5', 214015),
('7D939848-5BD5-4838-83E5-31887573D4BB', 742662),
('4FBA47FB-BE1E-4574-9F47-6BEAD34B6079', 637231),
('27BD77DB-8B49-4B29-A679-7A818C9AA037', 759239),
('AD2AACEA-96F3-4358-B2ED-5F1B2D137653', 759650),
('5E066BED-1854-43DE-B46A-1D9F2FD36DEB', 708749),
('1AA1C269-B1A8-4B8A-B228-50E3F2E968E9', 329294),
('D6F02867-C2BE-41C1-8FFD-617ED63995C4', 425824),
('602B6D29-9F74-49B8-B9CC-E28256DA5235', 804044),
('D390B280-6CBD-480C-BF38-589AF77A4E54', 166938),
('4C711141-000D-47DF-BEEF-EAED9805A242', 513699),
('453E2405-3A35-44B1-BC2B-A4996B9302A9', 338581),
('50DD6B09-72EB-4C14-A39C-0349DC731472', 269084),
('F118A58C-932C-434A-A4F2-AAEAD8CD0D81', 444580),
('7DEAA3E6-E4D0-4A98-81A0-44583596792B', 606018),
('B04D9518-C8D9-4224-9267-2790E723AC67', 307726),
('3AB9DB88-6AB1-4179-B3D9-CDB6E4D4F564', 418393),
('EA9096AE-BCA4-4E74-AAB7-FD435D8AD708', 591177),
('CCC594A9-2F39-42EC-B374-994DD028D02B', 932400),
('29653054-D20F-493D-AE35-013758188FAF', 382122),
('328604DF-E8F3-445D-8955-F28BB18FE5C8', 844892),
('CAE03B3D-9A88-4F2C-A43E-4ACCAE50E77D', 618851),
('2E603A26-69B7-4EAD-A125-D7699C8C8A83', 769958),
('A08FF2A8-EBC7-4207-9287-C9CC9E9D3D50', 957859),
('1F0B7597-836D-4016-AD82-9495084A3BB5', 212338),
('8555284A-C601-4C1C-A6F6-8F2190926AAB', 416050),
('C655A356-A418-46F0-9AE9-958D58CA5FAA', 166849),
('F7C771C5-9240-4AB9-AA5D-9AAA230B9BEB', 543018),
('70D88362-8A40-449D-AE3C-E24FE73F32EF', 761428),
('4CC27BB5-2D37-454F-BBAE-32404AC2532D', 954842),
('C816045C-4F31-4592-94D6-BC1FD19EF3B3', 845334),
('18CFE328-CBE4-44EE-A82B-47AA7E2456FB', 854760),
('7C5570DC-86BF-4C1D-9932-4DA3C4CFCE43', 804631),
('C9416B94-96F9-4459-8AEA-FA039A300070', 742906),
('57F623B1-B2FC-4D10-9901-24EA40B9DE95', 231335),
('B94F6185-72F3-4340-B9F3-F4E7D14A085D', 695511),
('ED84FB45-9A5D-42EA-BA70-994410E91F17', 181817),
('AE999564-D0D0-4677-8A87-1E4E68A9EA84', 554766),
('E4E3F2D7-8A1B-4E92-9149-D99DF66864B4', 557435),
('21754FED-70C7-433C-A1BE-70DFF9FEC613', 405133),
('6561E86C-E4C9-4486-9F38-D56941BA23D5', 476181),
('39485B4F-2313-438A-B38F-1D376B278C10', 978461),
('5BD2B71A-312D-4FCA-8CAB-5A342D3233F0', 227607),
('81303855-15F7-43B8-80BB-CF77493A7B3A', 216709),
('BF36524D-132B-4B2A-9B8A-CE0C8FCDE488', 614680),
('9239B385-73CF-48AB-94AB-2516EE6AB71E', 303871),
('0D8867A7-C758-4208-9708-3D993CBA818C', 886200),
('8506C654-3C2C-4D2F-900A-61555E2FD85A', 876626),
('F03BBBEB-B9C0-4ED3-942E-BC7D08DE509D', 471287),
('6DE577D2-A42F-4658-A152-3A6DA035539A', 883033),
('CB737C58-43A1-424F-82EF-C50775D554D2', 364749),
('2A2B9CB4-CEC2-4605-90DB-DB2AE0D204EA', 496188),
('A2212631-462D-4633-95AC-DD4C2C303FEA', 370835),
('0F5DE6B7-AA4E-4538-AC23-D7DC26D0ADBA', 645718),
('536AD44A-B0DF-4498-9005-CE2D8CA7C591', 767713),
('F9BB0531-AF7A-470B-8A91-FA50A4E3CB4A', 231932),
('613D8B7C-3A52-4301-9ECB-7599B8E9D42F', 470230),
('266AE358-DF02-4DAC-86FC-84EF1A115FF5', 598876),
('B8A75B98-8B3E-4813-84BA-33834DA7E2AD', 947624),
('BDEE7E5E-ED36-4D17-B019-A035841334AD', 805709),
('C1F5E556-E270-470D-A985-A63792C08E0C', 619874),
('1109DF75-7BE2-4603-AF2E-67756FBC4127', 901150),
('C5D7A271-AC15-4CF1-AA8A-EC613A9B1B50', 366598),
('BFCD31F5-C55A-41E9-8763-28B6B13DEEF1', 410599),
('3D8069ED-3212-4379-ACB3-9B55EECDBE0B', 661639),
('01B2D9FA-B4B3-4E44-89D2-9B45BDF8C8E7', 438762),
('73C50E6B-3AF0-4ACE-B425-97BB4E28B7E1', 969333),
('0C0664D4-38FD-499B-A40D-0AC7D79E3E65', 944190),
('371FCBCC-7460-49A6-89E0-ECF90810FA9A', 968629),
('A49F0178-0BCD-4A46-A367-AD5B69DC3EEF', 108310),
('C448EBCA-7E52-4163-A866-38A0BC265DB5', 532155),
('6EDE583C-8D2B-4DB4-92AE-88ED2712023E', 729261),
('C719C17A-2878-4CE1-B54C-365D8EDE2C7E', 263820),
('B19BB3D1-5100-4955-98F9-DE26FA162BD2', 988400),
('FC42C671-7316-4C38-B7C1-F990C7D920AB', 739891),
('AFCE1A38-B47E-436E-B7D9-C259179F248F', 225587),
('99FDA35D-668D-4847-94ED-5974556B227B', 296522),
('F3D2C3BA-CA2E-4DE3-AC9D-057AFD87A5F9', 978262),
('5B90AE09-EF1C-4F8A-9CE3-4EF5C9535DEB', 108296),
('668B683B-B783-4571-B5D8-6331684ABB9A', 565011),
('F1EEE2D8-12E8-4555-995E-526276A0AF43', 792063),
('808E508E-E48E-4903-BF63-99C9DF77BF56', 511026),
('BCA14B5A-22CD-4612-B50C-07512754BE66', 835801),
('7FBFDF8E-2D2B-4B87-A6C9-3739FB1B25DF', 869000),
('703DAA91-CC0E-41A2-8C2C-4A86AF4CCE96', 183044),
('64317EA0-F873-4889-9C13-A55600B285FB', 259003),
('7319C3FA-D7A9-47C4-8EF4-AB7347BD1C2A', 244569),
('9465E5F4-26A8-4C28-9A11-A00121825DE4', 593366),
('D3462E97-2EA1-4B8D-A0DA-CD75BE1B07F3', 391866),
('0D58E1D3-BDCB-4982-B34C-C287D391C3D4', 810030),
('7ACF444D-B5D0-492B-AEE7-2AA10151A4EA', 530611),
('E513CABD-8E32-4318-AC9A-4B5087D4820A', 899928),
('898A90A1-17AD-4BD4-A3EF-3C842376422E', 175661),
('FAFD2A44-07C6-4157-AE43-37B799FC56B1', 208928),
('F73720AA-CB60-4A92-8A1C-99D35627B895', 742937),
('DE878377-8851-4E0A-8C93-794C43C5F4C1', 744426),
('9F801B1F-0BF7-4344-B125-837B41CC761C', 214517),
('1340F6AC-72EA-4161-8CDD-B3DCE992F74C', 497351),
('8DEAA51B-52E3-4CDE-9525-0E69DF862A01', 657317),
('F006CD64-3C82-466C-883F-A70D6ADDEC14', 926917),
('8EB04E66-0DCC-4D6D-BAD1-05FDA50C4B28', 635331),
('BCBFEF3F-3EF9-44A1-89D0-E19665B9C0C3', 227038),
('5E5AFDB4-AE6B-418D-A15A-70D9922F8767', 524867),
('32F20CA7-34FF-46B3-898C-88E516500C17', 534192),
('08893C1F-25CD-4323-9E92-0209B0BBAEB7', 839723),
('08A50DDB-81E9-4417-AD44-537290FA7D6D', 999547),
('6C97DFE9-3BAE-41EC-8E9B-3F8C9B2B3A10', 418791),
('F5E4606B-E7F7-4022-A743-DCEF5338F9C2', 488597),
('584B3FB8-1B36-44F2-9300-CA1EE63DA5AC', 179076),
('7A3B2692-186D-40E3-9275-33F09C9EC846', 425063),
('3554807D-A4B1-4044-898B-7307EA08498A', 619453),
('864AD07F-BC02-442C-A17B-46B107F9F654', 680801),
('252B6BA2-FFE7-449E-B7DE-4CE802A9BEA5', 383890),
('39C9FCFC-0686-4086-876B-8D0DDF3D9F28', 852090),
('7FF2008F-619E-4750-BAF7-7FE67B13FC7D', 259895),
('311A3F65-816E-4D0F-81BD-72895609C8CC', 289278),
('37377217-12A1-4705-BAC7-05D95DFCB2D0', 993000),
('A2118911-6522-490F-A954-3D923DBC04FC', 477951),
('7AD18327-754F-4955-87F8-5B59A3F6DD60', 136643);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentariostickets`
--

CREATE TABLE `comentariostickets` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `ticketid` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `numberticket` int(11) NOT NULL,
  `comentario` varchar(8000) COLLATE latin1_general_ci NOT NULL,
  `tmstmp` datetime NOT NULL,
  `agent` varchar(200) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactform`
--

CREATE TABLE `contactform` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `cedula` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `nombresc` varchar(500) COLLATE latin1_general_ci NOT NULL,
  `correoc` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `telefonoc` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `comentariosc` text COLLATE latin1_general_ci NOT NULL,
  `seenvioa` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestas`
--

CREATE TABLE `encuestas` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `ticketid` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `cedula` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `nombres` varchar(500) COLLATE latin1_general_ci DEFAULT NULL,
  `correo` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `telefono` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `nticket` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `pregunta` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `respuesta` varchar(10) COLLATE latin1_general_ci DEFAULT NULL,
  `respuestacasono` varchar(500) COLLATE latin1_general_ci DEFAULT NULL,
  `nps` double NOT NULL,
  `comentariosnps` varchar(500) COLLATE latin1_general_ci DEFAULT NULL,
  `createdate` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generatetickets`
--

CREATE TABLE `generatetickets` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `nticket` int(11) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gestiontickets`
--

CREATE TABLE `gestiontickets` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `cedula` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `nombres` varchar(300) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `phone` varchar(15) COLLATE latin1_general_ci DEFAULT NULL,
  `numeroticket` int(11) NOT NULL,
  `ticketid` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `producto` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `tipoincidencia` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `stincidencia` varchar(500) COLLATE latin1_general_ci NOT NULL,
  `canal` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `redsocial` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `agencia` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `comentarioinicial` varchar(2000) COLLATE latin1_general_ci DEFAULT NULL,
  `area` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `tiemporespuesta` varchar(10) COLLATE latin1_general_ci DEFAULT NULL,
  `tipotiempo` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `createby` varchar(500) COLLATE latin1_general_ci DEFAULT NULL,
  `createdate` datetime NOT NULL,
  `statet` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `asesor` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `asesorid` varchar(150) COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Disparadores `gestiontickets`
--
DELIMITER $$
CREATE TRIGGER `INSERT_TICKET_HISTORICO` AFTER INSERT ON `gestiontickets` FOR EACH ROW begin 
	insert into gestionticketshistorico
	select * from gestiontickets
    where id not in(select id from gestionticketshistorico);
end
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `UPDATE_TICKET_HISTORICO` AFTER UPDATE ON `gestiontickets` FOR EACH ROW begin 
	insert into gestionticketshistorico
	select id,cedula,nombres,mail,phone,numeroticket,ticketid,producto,tipoincidencia,stincidencia,canal,redsocial,agencia,comentarioinicial,area,tiemporespuesta,tipotiempo,createby,now(),statet,asesor,asesorid
    from gestiontickets;
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gestionticketshistorico`
--

CREATE TABLE `gestionticketshistorico` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `cedula` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `nombres` varchar(300) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `phone` varchar(15) COLLATE latin1_general_ci DEFAULT NULL,
  `numeroticket` int(11) NOT NULL,
  `ticketid` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `producto` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `tipoincidencia` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `stincidencia` varchar(500) COLLATE latin1_general_ci NOT NULL,
  `canal` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `redsocial` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `agencia` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `comentarioinicial` varchar(2000) COLLATE latin1_general_ci DEFAULT NULL,
  `area` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `tiemporespuesta` varchar(10) COLLATE latin1_general_ci DEFAULT NULL,
  `tipotiempo` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `createby` varchar(500) COLLATE latin1_general_ci DEFAULT NULL,
  `createdate` datetime NOT NULL,
  `statet` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `asesor` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `asesorid` varchar(150) COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `profileid` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `userid` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `name` varchar(300) COLLATE latin1_general_ci NOT NULL,
  `usertype` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `tmstmp` datetime NOT NULL,
  `remoteip` varchar(30) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `usertype` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `profiles`
--

INSERT INTO `profiles` (`id`, `usertype`, `level`) VALUES
('B09A021A-62DE-4845-9E75-17A75A4FFD79', 'administrador', 4),
('A10555C2-137A-408B-A144-D06611F33577', 'orquestador', 2),
('CA422B7E-7EDA-4A53-BBA9-0038F283A736', 'ingresador', 1),
('3D71F3B8-C142-4EB6-8572-D5C90D81535D', 'supervisor', 3),
('585F1BE1-D33E-46A5-928F-387B30EB5A97', 'administrador de usuarios', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `settings`
--

CREATE TABLE `settings` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `maxuploadfiles` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `settings`
--

INSERT INTO `settings` (`id`, `maxuploadfiles`) VALUES
('6BAD53D7-D9A1-4AE8-A96E-BD6D72A90189', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tempcode`
--

CREATE TABLE `tempcode` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `code` int(11) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `tempcode`
--

INSERT INTO `tempcode` (`id`, `mail`, `code`, `createdate`) VALUES
('2E8B7E87-FFA6-6099-AF35-17097C082417', 'christian.miranda@coac-sanfra.com', 329294, '2022-06-10 14:28:10'),
('B3709D54-319C-4A10-9943-1FA1C1CF972D', 'gabriela.lopez@coac-sanfra.com', 770841, '2022-06-14 14:44:03'),
('4C24746B-8806-46E4-ACFB-6E028E39715C', 'christian.miranda@coac-sanfra.com', 688724, '2022-06-28 15:37:07'),
('15E68ACE-EA8A-35F9-88A7-0B0FD626D093', 'christian.miranda@coac-sanfra.com', 496982, '2022-06-28 15:38:13'),
('C14384C9-4E32-4B06-B996-757092508FE3', 'christian.miranda@coac-sanfra.com', 366598, '2022-06-28 15:39:45'),
('C78ADD27-229C-0C7F-A543-0C82770338FA', 'christian.miranda@coac-sanfra.com', 296300, '2022-06-28 15:46:12'),
('03686796-13C6-BC4F-80E2-CC6CE3C2A39A', 'christian.miranda@coac-sanfra.com', 536644, '2022-06-28 15:49:22'),
('6436715C-8249-531F-A92D-A5DA595BC68C', 'christian.miranda@coac-sanfra.com', 907811, '2022-06-28 15:53:40'),
('955D2AF9-7BA0-587D-BF87-5E92448F07D4', 'sertecmega@gmail.com', 282278, '2022-07-01 10:13:32'),
('541AD91E-A85E-3B01-A25F-9F726F2C8421', 'christian.miranda@coac-sanfra.com', 167177, '2022-07-04 16:39:01'),
('DE5BDFE0-E790-F3D3-AD58-2BD0BE59827A', 'innovation_leader@kimobill.com', 338087, '2022-07-04 16:43:02'),
('5CFF4849-D87B-797C-8EFC-76E556B032DE', 'diana.ulloa@coac-sanfra.com', 531635, '2022-07-18 09:46:47'),
('47BF2F71-3C4E-E11A-BCFD-5C2244FB7D77', 'diana.ulloa@coac-sanfra.com', 763426, '2022-07-18 09:52:04'),
('EBD54E46-8203-C72B-8A16-8E12717F8F8A', 'gustavo.echeverria@coac-sanfra.com', 629534, '2022-07-22 16:24:38'),
('0A1CB81B-AE40-AE23-87D7-671755EB89A9', 'gustavo.echeverria@coac-sanfra.com', 855195, '2022-07-22 16:28:46'),
('5B22B268-2C76-D68F-862B-4F79BCB1F2F8', 'gustavo.echeverria@coac-sanfra.com', 327643, '2022-07-22 16:38:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiempostickets`
--

CREATE TABLE `tiempostickets` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `ticketid` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `tiempomaximo` int(11) DEFAULT NULL,
  `tiempogestion` int(11) DEFAULT NULL,
  `tiempoexcedido` int(11) DEFAULT NULL,
  `agent` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `tmstmp` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `uploadfiles`
--

CREATE TABLE `uploadfiles` (
  `id` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `ticketid` varchar(150) COLLATE latin1_general_ci NOT NULL,
  `nombre` varchar(300) COLLATE latin1_general_ci DEFAULT NULL,
  `extension` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `url` text COLLATE latin1_general_ci,
  `createdate` datetime NOT NULL,
  `uploadby` varchar(150) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `userid` varchar(30) COLLATE latin1_general_ci NOT NULL,
  `password` varchar(300) COLLATE latin1_general_ci NOT NULL,
  `isdefaultpasswd` int(11) NOT NULL,
  `agencia_callcenter` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `name` varchar(500) COLLATE latin1_general_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `area` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `cargo` varchar(150) COLLATE latin1_general_ci DEFAULT NULL,
  `agencia` varchar(150) COLLATE latin1_general_ci DEFAULT NULL,
  `userpic` text COLLATE latin1_general_ci,
  `createdate` datetime NOT NULL,
  `usertype` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `state` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userid`, `password`, `isdefaultpasswd`, `agencia_callcenter`, `name`, `mail`, `area`, `cargo`, `agencia`, `userpic`, `createdate`, `usertype`, `state`) VALUES
('A77E86B5-CA03-41BD-8AC9-C04D4D018F33', 'gmejia', '$2y$10$6VxjwdPaGGXbg8q3p0i12.s9Kr5KJw.KA80C1L41AeDgcSmcMdUWO', 0, NULL, 'Mejia Ayala Jose Gabriel', 'sertecmega@gmail.com', 'NO', NULL, '', 'account/pictureprofile/gmejia.jpg', '2021-09-29 19:45:21', 'su', 1),
('1574F26B-BD92-6898-AC04-501995B420E3', 'usersadmin', '$2y$10$5Z6YdtzwZ1cqRJ72YkZiBugInuePczjikXY0MHvorTHyj8brIW7hO', 0, NULL, 'Administrador de Usuarios', 'usersadmin@kimobill.com', 'NO', NULL, '', 'account/pictureprofile/ico-usuario.png', '2022-03-23 00:14:45', 'administrador de usuarios', 1),
('7FA977AA-3A7F-B922-A9C7-82B3E8FA7B8B', 'gillescas', '$2y$10$9dbPvpIECYQbcqSt1IDpdOB3tuh7kd55I4zHsdCDW36mrdJiYbTq6', 1, 'agencia', 'ILLESCAS VISCARRA GABRIELA CRISTINA', 'gabriela.illescas@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'CARCELEN', 'account/pictureprofile/undefined', '2022-03-31 20:57:33', 'orquestador', 1),
('09587495-DC9C-30BC-9B3F-70FD249FDD49', 'lcevallos', '$2y$10$ahlk9PaA6dO4yXbzrSIHUeTsU0HP6jiR3ogh3CiLUKYj2xikrONJ6', 1, 'agencia', 'CEVALLOS LOPEZ LORENA PATRICIA', 'lorena.cevallos@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE CREDITOS', 'CEVALLOS', 'account/pictureprofile/undefined', '2022-03-31 20:58:20', 'orquestador', 1),
('A0DF5A1C-223C-78CD-977E-CD7210564765', 'mcifuentes', '$2y$10$LjOvXXcRhiv7nwGuBD/wROp4m7Rp3Mznp1/qZQ/HyFETJPb4m037.', 1, 'agencia', 'CIFUENTES CUEVA MAGALITA KATYUSKA', 'magalita.cifuentes@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE CREDITOS', 'CARCELEN', 'account/pictureprofile/undefined', '2022-03-31 20:55:01', 'orquestador', 1),
('4E5DA128-BEAB-F7EF-8361-7A86FF815E74', 'lmorales', '$2y$10$LCYGR4Cqf17ZD2qR/AbFT.eOmnJghI33uzSj68Up8OeXTkP/20iNK', 1, 'agencia', 'MORALES SANCHEZ LUIS BOLIVAR', 'luis.morales@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-03-31 21:20:20', 'orquestador', 1),
('825F82EB-C26C-1079-BFCB-02DDAC6BCF67', 'hecheverria', '$2y$10$Hf5o5q/2Or7j2FZlKLVMzunFft31HoyT7Zt.Gxre3ZhP3oWoJ4UT.', 0, 'agencia', 'ECHEVERRIA SORIA HERNAN GUSTAVO', 'gustavo.echeverria@coac-sanfra.com', '', '', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-03-31 21:03:40', 'orquestador', 1),
('050C2514-4FA4-3FB6-968E-4C005CF7F7E2', 'hcuri', '$2y$10$kBchbzrFtWf.VrMlk3zySuPq6UTVTE4W.64nu2kpCvJoQXHcdUBFu', 1, 'agencia', 'CURI TENELEMA HECTOR LEONARDO', 'hector.curi@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'EL CHACO', 'account/pictureprofile/undefined', '2022-03-31 21:04:44', 'orquestador', 1),
('8A182ECF-6534-59F7-8AB9-E8F37FAE5C96', 'rsumba', '$2y$10$U1mIRswVgAvwjjU0v7vedOA3sIP/Dj7I4k.8H49NeHGNDedYsuVvW', 1, 'agencia', 'SUMBA CRIOLLO ROMULO SANTIAGO', 'santiago.sumba@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'IZAMBA', 'account/pictureprofile/undefined', '2022-03-31 21:05:18', 'orquestador', 1),
('294C9BCA-E44B-04C6-9FC5-F80B1D9EFFB6', 'dramon', '$2y$10$AmcYzWdZPwZOz3MA5aVRyenl7ahdzHqtbD/nWnb9u5nMj/3oqXnAa', 1, 'agencia', 'RAMON ACOSTA DANIEL EUCLIDES', 'daniel.ramon@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-03-31 21:05:45', 'orquestador', 1),
('552CCC31-7E50-FBD3-AED9-57C919167ECF', 'rconforme', '$2y$10$TXp3MLCcIzcYyuP7WekROunNayKO7aQbSak9v41yk44houZ4T.N5e', 1, 'agencia', 'CONFORME CANO RICARDO GEOVANNY', 'ricardo.conforme@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'MACAS', 'account/pictureprofile/undefined', '2022-03-31 21:06:22', 'orquestador', 1),
('16174097-E45B-D020-8E14-57698F676F62', 'mbenalcazar', '$2y$10$SQh4ugZTALCKpP7s74fmIe00MXa4T9MhNz.huLwLf2jG/jaNs11g6', 1, 'agencia', 'BENALCAZAR VILLEGAS MARIO SEBASTIAN', 'mario.benalcazar@coac-sanfra.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-03-31 21:06:54', 'supervisor', 1),
('7F80F1A8-C310-FE59-A73A-3C22C35CA07A', 'lbonilla', '$2y$10$DPU7v5Iy80pmEcN41Z0Cuuk2Xds6sllpZDIV2wf4eLsNAkUd1yyp.', 1, 'agencia', 'BONILLA MAYORGA LEONARDO ANDRES', 'leonardo.bonilla@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-03-31 21:08:16', 'orquestador', 1),
('0301D107-D369-D12B-8EF5-BD66C2047738', 'cmiranda', '$2y$10$mBIHmX8o0ps43zHNG.O07e40wIlok4g0Y1tG90.Uga1VZ1XDbO/JS', 1, 'agencia', 'MIRANDA MIRANDA CHRISTIAN PATRICIO', 'christian.miranda@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE MARKETING', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-03-31 21:08:53', 'orquestador', 1),
('78D38A2B-2ADA-DB08-81B1-E4F0EFD0595C', 'pproano', '$2y$10$rfYEw9aAdJ7KqIngbMOSoudJiHMMZKOMRSdhsrq2.TEGIJMZSade6', 0, 'agencia', 'PROANO JARRIN PABLO ANTONIO', 'pablo.proano@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE MARKETING', 'MATRIZ', 'account/pictureprofile/undefined', '2022-03-31 21:13:16', 'orquestador', 1),
('8D59F328-9F6C-1AED-8667-32C12086408D', 'dulloa', '$2y$10$.yARshz8ZhxCG1T9rvMxkuPJqki.G/PHD0qtOc2BB2nStK/wePNKy', 0, 'agencia', 'ULLOA ULLOA DIANA GABRIELA', 'diana.ulloa@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE DATOS', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-06-04 15:45:00', 'orquestador', 1),
('D11CA13F-5B88-3D71-8136-4AA805EEAC22', 'dvalle', '$2y$10$vpDiBXIKP4dAl7RiRBXQ3eTnkMCGdfvhUgwFM01XGmfoYJuTwwPqy', 1, 'agencia', 'VALLE MONCAYO DIEGO FRANCISCO', 'diego.valle@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR SENIOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-03-31 21:11:00', 'orquestador', 1),
('912A6E89-A3AF-DD9B-8717-EE48E0210381', 'abarrionuevo', '$2y$10$1a7ob73qDf5Oj9y5FlaqjOh/fdiSu4Oo2QRMMCxEk24j.E97UZlK.', 1, 'agencia', 'BARRIONUEVO PORTERO ANA CRISTINA', 'cristina.barrionuevo@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE  NEGOCIOS', 'MAYORISTA', 'account/pictureprofile/undefined', '2022-03-31 21:11:48', 'orquestador', 1),
('B8EB1292-A411-E407-BB32-3B5DBF8B4DF8', 'dnaranjo', '$2y$10$8VK54kHSOb4GcXTxG46fXuujCRicEnKVaYjywXWYLrIrmlUGL6LM6', 1, 'agencia', 'NARANJO RUIZ MONICA DEL CARMEN', 'monica.naranjo@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-03-31 21:20:48', 'orquestador', 1),
('5C9DA75A-1DD9-543A-B1D6-436BE90E8D70', 'clescano', '$2y$10$bPi7.xQiiIZ0BG5u3CtfP.6m.AvwDde.2DjS1OUDc.ueNDpVG/Tj6', 1, 'agencia', 'LESCANO LARA CHRISTIAN PAUL', 'christian.lescano@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'PUYO', 'account/pictureprofile/undefined', '2022-03-31 21:21:12', 'orquestador', 1),
('CAFDE857-8294-D427-B46A-B2EEB122ACC5', 'jhuilca', '$2y$10$f3jxZkUfupVfmqm6qokCcOAnvsswNWSX8M1X9JdFXul.WUk32fK3q', 1, 'agencia', 'HUILCA GUEVARA JOSE RAMIRO', 'jose.huilca@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'RIOBAMBA', 'account/pictureprofile/undefined', '2022-03-31 21:21:43', 'orquestador', 1),
('0DAE9F7D-5231-1ED0-9397-D0B965D2160D', 'vbaraja', '$2y$10$.fg6RWnvkQB3bnwnzgQ2tefFSUGchgtfoLTk0RBtYl6uVzo4lrtO2', 1, 'agencia', 'BARAJA LARA VICTOR ALFONSO', 'victor.baraja@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE  NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-03-31 21:22:10', 'orquestador', 1),
('EC558DE7-F7E1-8BAA-81B7-7F854CFEB981', 'fescobar', '$2y$10$n4fKYCZcwaenUggYR5.nP.4gdYVeoTxIZ5LlIjh2tp2r4XCki2q2u', 1, 'agencia', 'ESCOBAR MOGOLLON FABIAN RODRIGO', 'fabian.escobar@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE CREDITOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-03-31 21:22:33', 'orquestador', 1),
('9EDAAAEA-3C66-6144-AB3E-EA8C48E2DB2D', 'ajurado', '$2y$10$zh7jBaOHaYQGMhcxMwjU0eX0v/UMbolmEyvZ7.95fK0i6RtF.dzIi', 1, 'agencia', 'JURADO TOAPANTA ANGEL RODRIGO', 'angel.jurado@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'SANGOLQUÍ', 'account/pictureprofile/undefined', '2022-03-31 21:23:11', 'orquestador', 1),
('0365BF77-3174-17E1-A686-6003220739E9', 'operez', '$2y$10$U2L5x1iSw7k8uTysOnlS8.SdTPL/df.hL8eslm5xSYqjKcx4AnyQS', 1, 'agencia', 'PEREZ MALLA OMAR EDUARDO', 'omar.perez@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'SANTA CLARA', 'account/pictureprofile/undefined', '2022-03-31 21:23:35', 'orquestador', 1),
('3C6BE37C-4554-B85D-BCE6-AC2D27A6EB7B', 'hmoncayo', '$2y$10$LRPtbY/POmRxWQFXFV/xY.fNZWoss9Ts02.xy0SzrqWEx/BBkglo6', 1, 'agencia', 'MONCAYO GARZON HENRRY GEOVANY', 'henry.moncayo@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-03-31 21:23:58', 'orquestador', 1),
('5CE87826-7BC3-7203-AF5F-C61B5248C56C', 'mgalarza', '$2y$10$i6c0iQlXxpMMp.sE5yazfOcfH4pK92KNnahcbC2VqyMaq0mzCfgvu', 1, 'agencia', 'GALARZA MAYORGA MONICA NANCY', 'monica.galarza@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'TISALEO', 'account/pictureprofile/undefined', '2022-03-31 21:24:21', 'orquestador', 1),
('31579147-5652-24FE-92A4-9BD7566C013C', 'dmena', '$2y$10$XPxL7f1ogl983oXwVaN/gOR8FvSU1bie1FectOj/P4WWLuBgxfGFy', 1, 'agencia', 'MENA BONILLA DIEGO XAVIER', 'diego.mena@coac-sanfra.com', 'Marketing y Negocios', 'GERENTE/COORDINADOR DE NEGOCIOS', 'VILLAFLORA', 'account/pictureprofile/undefined', '2022-03-31 21:24:54', 'orquestador', 1),
('EE525343-128B-A2BE-8ADE-B8593817418A', 'pnoboa', '$2y$10$bRYjqigsllmXpqoiqjg7AuWsti.4Sh3p0FuKjCwBpRi3rJOlzdhiK', 0, 'agencia', 'NOBOA VALAREZO PAUL VLADIMIR', 'paul.noboa@coac-sanfra.com', 'Operaciones', 'OPERATIVO GENERAL', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-03-31 21:25:46', 'orquestador', 1),
('174926B6-F16A-5158-8D87-2B8957D3DB61', 'privera', '$2y$10$IfqIxrQPgmXUH5OYSgdtMOb9M3eMJ32Cgcoi9ZpbME/u/JaWisoSm', 1, 'agencia', 'RIVERA GUERRERO PAULINA ELIZABETH', 'paulina.rivera@coac-sanfra.com', 'Operaciones', 'JEFE DE OPERACIONES', 'MATRIZ', 'account/pictureprofile/undefined', '2022-03-31 21:27:07', 'orquestador', 1),
('B1C6CA01-B2BC-C57E-82F9-380A609D8458', 'Lmuyulema3', '$2y$10$2hqWjwQfSxU36pJAF3RspexTa6OIWCpB5JYHMRJXOs8kxAtI2xGja', 0, 'agencia', 'MUYULEMA TEJADA LISBETH ESTEFANIA', 'operations_manager@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-04-08 19:49:17', 'administrador', 1),
('11447DE7-9312-DD0A-B721-C033BFAE7D9C', 'fzurita', '$2y$10$Q4iwfk4btH.5dGTSnkElD.5trbhWDe2QioITdeC5z5qU9NJbhDY4e', 0, 'agencia', 'ZURITA VASQUEZ FREDY ENIN', 'fredy.zurita@coac-sanfra.com', 'Marketing y Negocios', 'ASISTENTE DE MARKETING', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-06-04 15:46:24', 'orquestador', 1),
('5DD5167F-B56B-378E-9BAB-7B498C416BB7', 'nlopez', '$2y$10$7RtaLx1Md495uQvauqYoeuLMLBOty9WAcPw7QVsMsbEtbXPVUTHAy', 1, 'agencia', 'LOPEZ LOPEZ NORMA GUADALUPE', 'norma.lopez@coac-sanfra.com', 'Atención al Cliente', 'JEFATURA DE ATENCIÓN AL CLIENTE Y RESPONSABILIDAD SOCIAL', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-04-04 19:10:01', 'orquestador', 1),
('ED5CCFEF-5522-2F8F-9025-4CD6081391BF', 'glopez', '$2y$10$DDm4KskK7F/lA3HRb5hSuOSSGmr3lyHZ3EXcKG63wttCoo3KGsmN2', 0, 'agencia', 'LOPEZ HOYOS GABRIELA ESTEFANIA', 'gabriela.lopez@coac-sanfra.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-04-06 20:04:21', 'administrador', 1),
('FF34C79D-F2CE-3D61-ADC7-6BEA05529B0C', 'dtipan', '$2y$10$FQbGau2nUSsB5XIALnaHk.1xcer8TYTAwsK7TKY6Z6jtwLjNvUOMa', 1, 'agencia', 'TIPAN ORTIZ DORIS ELIZABETH', 'doris.tipan@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'ALANGASÍ', 'account/pictureprofile/undefined', '2022-04-01 18:34:58', 'ingresador', 1),
('768D0D1B-DF46-D4A1-B243-0BF72ED3128D', 'jmelo', '$2y$10$Dpefd0aqr6sCcGfXa6tBwu6E7IP7sPOM9tP8iSRbJjGKVAsIIhltO', 1, 'agencia', 'MELO SIMBANA JAIRO FRANCISCO', 'jairo.melo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'CARCELEN', 'account/pictureprofile/undefined', '2022-04-01 18:37:18', 'ingresador', 1),
('709AB8BE-F5B0-CA9F-AE91-DE0DB5D1A187', 'lnunez', '$2y$10$NbQoXugMrkAYxR4xHXD76Oalo6B56cwTKMrbEpGeFMiY1dnawG7Gq', 1, 'agencia', 'NUNEZ ALVARADO LISBETH LUCIA', 'lisbeth.nunez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'CARCELEN', 'account/pictureprofile/undefined', '2022-04-01 18:37:59', 'ingresador', 1),
('866B5652-DFBD-AB1D-ABB7-7A8B19AFCDCA', 'mpaez', '$2y$10$wnl4YSMEOyzSRSWV9ScWaeSgPAs0xw6DcCOBxxy4i/zX2cOWwju5i', 1, 'agencia', 'PAEZ RUIZ MARIA JOSE', 'maria.paez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'CARCELEN', 'account/pictureprofile/undefined', '2022-04-01 18:38:19', 'ingresador', 1),
('1FF40C06-60C4-E737-9766-59F61170633B', 'psalguero', '$2y$10$NzqjsqX.KuQLdiFRMFTmvu2PBeKNIm1PPWXELwuvWmK6dUG.2sbjC', 1, 'agencia', 'SALGUERO ESPINEL PATRICIA ELIZABETH', 'patricia.salguero@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'CEVALLOS', 'account/pictureprofile/undefined', '2022-04-01 18:38:46', 'ingresador', 1),
('F94AEDEE-1F78-136F-A80A-E0F05EF76D85', 'wvargas', '$2y$10$LdXvVBco5imRQn.2l77fpubODVjpNFuCWnBVaiHBwuCYFMAAyeCZi', 1, 'agencia', 'VARGAS GUEVARA WILMA ELIZABETH', 'wilma.vargas@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'CEVALLOS', 'account/pictureprofile/undefined', '2022-04-01 20:07:56', 'ingresador', 1),
('521C9F02-F831-190E-9E0A-12F148CD20FC', 'lgranja', '$2y$10$sCHCxcUnOfzOolxepExmfOtflEvKOqih06mQbz.pCRXo0RgBlzqv6', 1, 'agencia', 'GRANJA PROANO LUIS MIGUEL', 'luis.granja@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'CONOCOTO', 'account/pictureprofile/undefined', '2022-04-01 20:08:52', 'ingresador', 1),
('FFAE81F9-7A84-9E07-AA48-900D2BF441A8', 'krodriguez', '$2y$10$RaZPcTdg..cjZEmGnEOKjO5EEa5dK4dXwHi/TkbcovIdWkJlvtSqG', 1, 'agencia', 'RODRIGUEZ REA KARINA ELIZABETH', 'karina.rodriguez@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE  NEGOCIOS', 'CONOCOTO', 'account/pictureprofile/undefined', '2022-04-01 20:09:14', 'ingresador', 1),
('68013F2E-9C90-16FD-B3A0-D4F2048B8C3E', 'jchavez', '$2y$10$bnE2VQkJBcxPqkRR9NePVeqO/Cq2TyGOv6mZXOjn6wCi4A3wgcX8q', 1, 'agencia', 'CHAVEZ CHECA JOSE LUIS', 'jose.chavez@coac-sanfra.com', 'Marketing y Negocios', 'ANALISTA DE  NEGOCIOS', 'EL CHACO', 'account/pictureprofile/undefined', '2022-04-01 20:09:38', 'ingresador', 1),
('A3295D81-C0BC-1C82-95C9-F376C5D28394', 'ycordova', '$2y$10$ENusTZJIWMnCsXByPyh7n.yNz4YAPgNyFgVFSOHkmwLV3AiOPhCU2', 1, 'agencia', 'CORDOVA ALVAREZ YASMIN YOLANDA', 'yasmin.cordova@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'EL CHACO', 'account/pictureprofile/undefined', '2022-04-01 20:10:21', 'ingresador', 1),
('1F0FB590-90EF-041A-B58C-6572DC9F1135', 'sllumiquinga', '$2y$10$wVJ.3DOGrGAKHJ.OkbCcz.vk5GAgoQL4yJYMLg3piiKfZ4nHWhAIq', 1, 'agencia', 'LLUMIQUINGA GUALOTUNA SERAFIN ROBERTO', 'serafin.llumiquinga@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'EL QUINCHE', 'account/pictureprofile/undefined', '2022-04-01 20:12:47', 'ingresador', 1),
('8912785C-9B25-2CDA-BEE2-F0DDA968765F', 'fbautista', '$2y$10$gfC/i6FRfhuTcRi291AsI.3eqGdgTV0ly8OkztnFYEy.4CwWPyAja', 1, 'agencia', 'BAUTISTA NARANJO FERNANDA CATALINA', 'fernanda.bautista@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'IZAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:13:13', 'ingresador', 1),
('862FB3AA-27C7-5EBF-941C-ECB1158E8718', 'cgranizo', '$2y$10$VmFy.wQnbYRQbf2IHWDX.eCKt6iWEBXcFTd1u4/MSSM2fIPKn8/o2', 1, 'agencia', 'GRANIZO CORDOVA CHRISTIAN ANDRES', 'christian.granizo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'IZAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:13:32', 'ingresador', 1),
('671A5F45-6B9F-C641-B2FF-A7BECF201CAC', 'cguerrero', '$2y$10$rj2Q8Lcjes8pdUYp1ZNJC.BGPvPsUyF6n0/xpl6JSi9NuD12bSRIu', 1, 'agencia', 'GUERRERO VASCONEZ CLOTILDE CLARIZA', 'clariza.guerrero@coac-sanfra.com', 'Marketing y Negocios', 'PROMOTOR', 'IZAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:13:57', 'ingresador', 1),
('D45BD081-0F66-7493-8586-45B216DCA1BF', 'emedina', '$2y$10$JynQWch6230rsA2FX8gjk.g6KOB7VQZF3WE8ZIuwQikxBZoqeFyam', 1, 'agencia', 'MEDINA ANDACHI ELIZABETH SILVIA', 'elizabeth.medina@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'IZAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:14:24', 'ingresador', 1),
('43392371-BB14-CB94-98B7-D9A76AC1CF44', 'jsesen', '$2y$10$TIWJ9VVkYigK9cAi.Mop6esYs.dNLSNaurt/ftX2tcKGdYJbkc.J.', 1, 'agencia', 'SESEN PUMA JAIME DARIO', 'jaime.sesen@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'IZAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:14:46', 'ingresador', 1),
('84E0A6F7-4557-3713-918B-25708B65ACD1', 'asolis', '$2y$10$5f6xj8L4pf7BEUj2jNzogu7k1Vmsv/RzetXn.KGQBkIDIj2QxfeYu', 1, 'agencia', 'SOLIS GAVILANES ALEXANDRA PATRICIA', 'alexandra.solis@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'IZAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:15:07', 'ingresador', 1),
('9A1A67F0-1D36-E304-B8BD-AA17F8317EF7', 'jarmas', '$2y$10$5YYwf1ad9XsDzZAFyOhEOOHFD6GDnxScPxamGLQ1gbI6/Qm7a0Bu2', 1, 'agencia', 'ARMAS GRANJA JOSELYN JESENIA', 'joselyn.armas@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-04-01 20:15:32', 'ingresador', 1),
('AC0286A1-C31F-C244-A72F-C4DD7282A00D', 'mchicaiza', '$2y$10$WkmkaKE5wS7z/wTpYEdTk.W9EJQlB62heU9lX7tUcGLw2AO7RAG9K', 1, 'agencia', 'CHICAIZA TACURI MYRIAN PATRICIA', 'myrian.chicaiza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-04-01 20:15:49', 'ingresador', 1),
('F121B3C6-55F2-0D2D-8DA1-68632A344D08', 'tesquivel', '$2y$10$T230hP9X..7jJopu5dvt7OI38YD/VgsBGkLd23a48AQfFnc8Z/Js6', 1, 'agencia', 'ESQUIVEL PAZMINO TANIA MARIELA', 'tania.esquivel@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-04-01 20:16:10', 'ingresador', 1),
('B2DC8F55-C65F-C9BE-9D36-75C2CD275231', 'jpalomo', '$2y$10$wXc4kc8DYk31Cno/pNdkf.0wn279Xk8c7QytAhrDJH3drfacSZzdm', 1, 'agencia', 'PALOMO CAJAMARCA JORGE ALONSO', 'jorge.palomo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR SENIOR DE NEGOCIOS', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-04-01 20:16:28', 'ingresador', 1),
('90B83528-53A3-2F81-84A8-7C1F55ED6FDC', 'avelasco', '$2y$10$q6gVIwxUptkRUN/vd.Kj9.hmDAquoq20stqhxI/AIBC51JrbsGZMy', 1, 'agencia', 'VELASCO VELASCO ANA LORENA', 'lorena.velasco@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR SENIOR DE NEGOCIOS', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-04-01 20:16:46', 'ingresador', 1),
('59BF00DA-1F50-F241-A7C3-7B9659753D73', 'lzapata', '$2y$10$n3iwW9eyZEpwVhneW4NcCOsu3z.JRkSAsp/EeXcpvMFmeYEdlXfQe', 1, 'agencia', 'ZAPATA MEDINA LUIS PATRICIO', 'luis.zapata@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR SENIOR DE NEGOCIOS', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-04-01 20:17:05', 'ingresador', 1),
('A5D0388A-B5E8-A9B1-A702-F7373383A47D', 'nbarba', '$2y$10$Wdjb7GADdDFWk4SSOAkBbeJ7wB6zeRslIIQm5Nopn9eY1mWVtJqf6', 1, 'agencia', 'BARBA CASTRO NINFA JANETH', 'ninfa.barba@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR SENIOR DE NEGOCIOS', 'MACAS', 'account/pictureprofile/undefined', '2022-04-01 20:17:25', 'ingresador', 1),
('095F1509-8168-3BF5-A13E-F71796DF7005', 'echicaiza', '$2y$10$6o6t3KN6mcWVHSJqHHOHzOdepn7EkT7fokGhOP/u44KUYDnajNm3m', 1, 'agencia', 'CHICAIZA CARDENAS EDISON OSWALDO', 'edison.chicaiza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MACAS', 'account/pictureprofile/undefined', '2022-04-01 20:17:43', 'ingresador', 1),
('67670FCD-B1D1-D944-83A2-BAAAB4768A95', 'ariera', '$2y$10$obpekiyvHwoZKRkDLZKnk.QnEDvdZBG7fL1.oLDvujJ4n8enIMRPu', 1, 'agencia', 'RIERA ARIAS ANGELA GESSENIA', 'angela.riera@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'MACAS', 'account/pictureprofile/undefined', '2022-04-01 20:18:16', 'ingresador', 1),
('6CC03161-9366-3604-A58D-29115033991A', 'fvillavicencio', '$2y$10$tB9.TqFkeR/OtV3x037l2eD9faWPSrGaPLltMCzGiVAEvSkdJagC6', 1, 'agencia', 'VILLAVICENCIO GUAPIZACA FRANKLIN GUSTAVO', 'franklin.villavicencio@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MACAS', 'account/pictureprofile/undefined', '2022-04-01 20:19:20', 'ingresador', 1),
('94D43440-7D83-6AF3-9CCB-CF7989846D23', 'dalban', '$2y$10$peXLx2R9OkyeGvNL6S5GE.X4OKUI7o.35VytjvQmJWzW5fPsvMXtK', 1, 'agencia', 'ALBAN NARANJO DIANA CAROLINA', 'diana.alban@coac-sanfra.com', 'Operaciones', 'ASISTENTE ADMINISTRATIVO', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:22:04', 'ingresador', 1),
('6690A013-DD10-A03D-93C9-3ED3C7FF3552', 'saltamirano', '$2y$10$pJ9W92NGMDsmTqKtzhDhBOpnwVh4XnKvOFUjFzsNH8TaSu1fdXAm.', 1, 'agencia', 'ALTAMIRANO CARDENAS FERNANDO SANTIAGO', 'santiago.altamirano@coac-sanfra.com', 'Operaciones', 'ASISTENTE DE OPERACIONES', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:22:27', 'orquestador', 1),
('BB626315-5506-35FD-B77B-FD6291FF2D0A', 'mcastro', '$2y$10$u5iiua0hlOvgi./lY8gZ0OH0I7DTM63NMuoSxNEpAuPRUl2DNEr56', 1, 'agencia', 'CASTRO MORALES MARIA FERNANDA', 'maria.castro@coac-sanfra.com', 'Operaciones', 'ASISTENTE DE OPERACIONES', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:22:47', 'orquestador', 1),
('4B88CD23-3D50-3228-A0C8-7E5B9BBB0D5F', 'aflores', '$2y$10$0v/aXLv1I1ITTrVfw7.fde857voO1bmyw0oeqpkbzQnvIF.a6.K6G', 1, 'agencia', 'FLORES MOYA ALVARO VINICIO', 'alvaro.flores@coac-sanfra.com', 'Operaciones', 'ASISTENTE DE OPERACIONES', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:23:03', 'orquestador', 1),
('E9B490C4-1E24-C5CB-A199-C0F6A36AEE74', 'amayorga', '$2y$10$90nhUNDFepALDh3MjTCA9uBP23MyWs/IjwRcwloEu1RYy.EG6h6I2', 1, 'agencia', 'MAYORGA BACCA MARIA ALEXANDRA', 'alexandra.mayorga@coac-sanfra.com', 'Operaciones', 'ASISTENTE DE OPERACIONES', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:23:21', 'orquestador', 1),
('BF1C0304-1435-4046-A16E-ADC55631360A', 'dsanchez', '$2y$10$UeBVh2NNAUXLRzhduQXIAO9uN0qUXVBPeEZ7Emd1RJKutdbBVx/Sy', 1, 'agencia', 'SANCHEZ CISNEROS DIANA MARISELA', 'diana.sanchez@coac-sanfra.com', 'Operaciones', 'ASISTENTE DE OPERACIONES', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:24:06', 'orquestador', 1),
('40693E96-893E-AEE9-91CB-9421233C6BB1', 'dnarvaez', '$2y$10$IvvGk2WZUWwIqqsdAt5j7eGls/NC61Amctp4JxZDadeU0PvNOo7We', 1, 'agencia', 'NARVAEZ SANCHEZ DIANA ESTHEFANIA', 'diana.narvaez@coac-sanfra.com', 'Operaciones', 'CAJERO', 'EL QUINCHE', 'account/pictureprofile/undefined', '2022-04-01 20:29:06', 'ingresador', 1),
('72BF4426-9A07-6959-AB73-ACD773684DF5', 'sviteri', '$2y$10$IxsQOoYZGzuEokxnY95ElOEdxRdXGL/vgWhNaXnes/xlQyl6a0QL2', 1, 'agencia', 'VITERI SILVA SILVANA CECIBEL', 'silvana.viteri@coac-sanfra.com', 'Operaciones', 'CAJERO', 'PUYO', 'account/pictureprofile/undefined', '2022-04-01 20:29:30', 'ingresador', 1),
('69B54971-768C-FBDE-B415-DE9134863E6B', 'gandrade', '$2y$10$brNS8K2lTUeRCtEAgevtWuTkugV4lq/MZUk79XKzBo8E2b/wKgUEW', 1, 'agencia', 'ANDRADE GAMBOA GISELA MELISSA', 'gisela.andrade@coac-sanfra.com', 'Operaciones', 'CAJERO', 'PUYO2 TERMINAL', 'account/pictureprofile/undefined', '2022-04-01 20:30:00', 'ingresador', 1),
('38057C62-452D-3418-9742-A5B5AA297814', 'aalbu', '$2y$10$KtXYPK1I6rSPuD4He4db/.uBg3VMnA8mOruNT3h8bnqwjMoyjFYi6', 1, 'agencia', 'ALBU ANDRADE ANA KARINA', 'ana.albu@coac-sanfra.com', 'Operaciones', 'CAJERO', 'TENA', 'account/pictureprofile/undefined', '2022-04-01 20:30:24', 'ingresador', 1),
('6342CA21-315C-DC5D-8F8E-48FBEFF6B0DA', 'jcevallos', '$2y$10$NKPs/sRJC9RWoE5H9M1g4eyoTJurt8EzZs5CXHMcxQ87ycM9aLezS', 1, 'agencia', 'CEVALLOS ROBLES JEISON PATRICIO', 'jeison.cevallos@coac-sanfra.com', 'Operaciones', 'CAJERO', 'TENA', 'account/pictureprofile/undefined', '2022-04-01 20:30:41', 'ingresador', 1),
('14F77545-CEAE-F13C-8602-9FDF78C8A76A', 'scardenas', '$2y$10$iU0rc9SrQ7H6QZUEKKAJj.0CDRsyK2R5El/NqtFaOf4oihzOjKLcW', 1, 'agencia', 'CARDENAS FIALLOS SANDRO SEBASTIAN', 'sandro.cardenas@coac-sanfra.com', 'Operaciones', 'CAJERO GENERAL', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:31:19', 'ingresador', 1),
('4B2D282A-F666-46BB-8013-219E41456C2F', 'aflores', '$2y$10$LB46vBEPVwR9Hq0eID2fzeO14DiICjf8zXQNM0XFgO4QMy/D1cLmC', 1, 'agencia', 'FLORES CORTES ANDRES LEONARDO', 'andres.flores@coac-sanfra.com', 'Operaciones', 'CAJERO GENERAL', 'OFICINA SUR', 'account/pictureprofile/undefined', '2022-04-01 20:31:46', 'ingresador', 1),
('194EB08F-3C33-F575-AC6B-E92A321C98C7', 'Kcardenas', '$2y$10$6TKjkDg2lpe2Chtp9MmRXOIhHQABjjA.lwrQMq16DhmmFaxF81un6', 1, 'agencia', 'CARDENAS CRUZ KATHERINE ARACELY', 'Katherine.cardenas@coac-sanfra.com', 'Operaciones', 'CAJERO GENERAL', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:32:06', 'ingresador', 1),
('EFD9850D-9FC0-E49A-8601-B9DE71481DC2', 'scarrillo', '$2y$10$0zYWiWqcWOrFdmyhoHLU7.kjzIzbmZ0VNzrinpcaWtS8kWXE7tE2C', 1, 'agencia', 'CARRILLO DUENAS SANTIAGO BENJAMIN', 'santiago.carrillo@coac-sanfra.com', 'Operaciones', 'CAJERO GENERAL', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:32:24', 'ingresador', 1),
('F1C6AD11-480C-ED95-9E0B-61450CA2F64D', 'mvalverde', '$2y$10$JEXVoLnVMot8SuxJ3C7u/uscGLYme7AUj8xvNTFSMDeU3DmK6LIQm', 1, 'agencia', 'VALVERDE GANAN MAGALY ANTONIETA', 'santiago.carrillo@coac-sanfra.com', 'Operaciones', 'CAJERO GENERAL', 'PUYO', 'account/pictureprofile/undefined', '2022-04-01 20:32:42', 'ingresador', 1),
('EB935C05-A324-42C2-A938-C4A1E9ADB8BE', 'gborja', '$2y$10$r0n/yX9Zw1Ko/evlITyAjev8vK2bu.aFNJB34tUjcAvumy08K/Mku', 1, 'agencia', 'BORJA QUISPE GALO SANTIAGO', 'galo.borja@coac-sanfra.com', 'Operaciones', 'CAJERO GENERAL', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:33:16', 'ingresador', 1),
('078F2741-4F39-6158-905F-FB54AD57DAC7', 'fvillavicencio', '$2y$10$u5Dx1J0ZKVUnTw8xBGF4GOJ3OQ7xBSuP3B5axj82r41ME2u2aiEfe', 1, 'agencia', 'VILLAVICENCIO GUAPIZACA FRANKLIN GUSTAVO', 'franklin.villavicencio@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MACAS', 'account/pictureprofile/undefined', '2022-04-01 20:33:47', 'ingresador', 1),
('E01D91BC-C71C-F6CA-8453-2591352E2198', 'cespin', '$2y$10$rXRgvYPYxGnkq1cVi67aiOZ9hZ6f9dPwnGRkiXY2lxo7kWI4nwghq', 1, 'agencia', 'ESPIN IPIALES CARLOS RICARDO', 'ricardo.espin@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:34:12', 'ingresador', 1),
('B9EA876A-5785-4058-B4DC-D8D0EFFE7516', 'olopez', '$2y$10$OoKLLzF3zOA3vADCAHt82eMLaPvAuu8rKQ3dmW2NMG8k7v0g2/tLm', 1, 'agencia', 'LOPEZ MOYANO ORLANDO VINICIO', 'orlando.lopez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:34:31', 'ingresador', 1),
('90E0A416-A004-2C3C-A2D3-9F625882FDF9', 'pmaya', '$2y$10$tjNJbs7MSovo6VDriXPs/.CZqyssaeF6gAL5dbeKEZd2kWvkIRh9G', 1, 'agencia', 'MAYA MORENO PATRICIO GERMAN', 'patricio.maya@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:34:49', 'ingresador', 1),
('E8076582-F5F8-D937-9285-E40C168C4459', 'mmorocho', '$2y$10$bjUcBxqPdcFS/Cq0EP1o1.R8L5NC8EgvT2XzTQfeP3kyRHAbx920i', 1, 'agencia', 'MOROCHO CAMINO MARCO JAVIER', 'marco.morocho@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:35:05', 'ingresador', 1),
('EF6686A2-9122-8D5B-8140-2EBED4369AF4', 'fnavas', '$2y$10$eM4TpJigdGXxHCyZGpMcqehlTTryn1lxHUlIqUSdYTt4UfDDefZOq', 1, 'agencia', 'NAVAS GUERRA FATIMA CECILIA', 'fatima.navas@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:35:23', 'ingresador', 1),
('ACA8D28B-667D-B85E-ACBF-8C8D0A6CDC83', 'csuarez', '$2y$10$NqBDAgsy77wsSuFy7FSGPuLz9rRKIYr0Cur2.wVNeUvn7yo6KKu1W', 1, 'agencia', 'SUAREZ HERRERA CARLOS FERNANDO', 'carlos.suarez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:35:41', 'ingresador', 1),
('E40EA609-4594-2FB3-84EA-CC686FE737D8', 'lvega', '$2y$10$08pL/Ad4IoPi43VAWGT9Yu8oQyLvURRryOgYKMD25JzYX9VWG6xy.', 1, 'agencia', 'VEGA ZURITA LUIS ANIBAL', 'luis.vega@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:35:55', 'ingresador', 1),
('0F2A9246-FBF4-2498-9C49-944534E40477', 'lvillalva', '$2y$10$5RO/e8F0WeNTfU1ocNhOueG884Ug3bTyI7mS2ujQPMC3WF9fpOI1G', 1, 'agencia', 'VILLALVA TOSCANO LESLY LILIANA', 'lesly.villalva@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 20:36:11', 'ingresador', 1),
('20E770DA-A1E8-CBE2-AA57-34231CE5EF22', 'nbeltran', '$2y$10$PvWhEf6K2WYPRlN6oAXJLuj.gqIgH1bfFP17KwcFOH2fsYuvFZoie', 1, 'agencia', 'BELTRAN GONZALEZ NORMA GABRIELA', 'gabriela.beltran@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MAYORISTA', 'account/pictureprofile/undefined', '2022-04-01 20:36:26', 'ingresador', 1),
('104E6AF5-48CD-3114-97A1-4C3A39DF26B2', 'rguevara', '$2y$10$0yLVJzTSiUq5EqZyuF/1ee7H0oq.NGpu5yQh1U5lu0RmYyuAtYA46', 1, 'agencia', 'GUEVARA LESCANO ROBERT ALEXANDER', 'robert.guevara@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MAYORISTA', 'account/pictureprofile/undefined', '2022-04-01 20:36:40', 'ingresador', 1),
('DF92810F-F052-8A7F-9956-43A531A1D5CC', 'mvalencia', '$2y$10$vFd6/zcYGsvCD653wV2eG.qRZygUpHKSv.4nZSNTK4KslWe1SO9yS', 1, 'agencia', 'VALENCIA VILLACIS MAYRA VANESSA', 'mayra.valencia@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MAYORISTA', 'account/pictureprofile/undefined', '2022-04-01 20:36:53', 'ingresador', 1),
('496E3094-0659-888B-9806-9C3D8D229B12', 'ecaluna', '$2y$10$vRtgkVZT.r.mYea2G3ERiuAfAWwHU4V3X/liIHvWbtDQ9Rja866e2', 1, 'agencia', 'CALUNA PALACIOS ENRIQUE SAUL', 'enrique.caluna@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MOCHA', 'account/pictureprofile/undefined', '2022-04-01 20:37:15', 'ingresador', 1),
('59ADF420-0FEA-EFAF-9C85-2A3B403243D2', 'rsilva', '$2y$10$YZsZXR/E3jcnMGOyWHs2EejQzpKOL0FVlelzzULEP4.X1vVi696iC', 1, 'agencia', 'SILVA VAYAS ROBINSON MIGUEL', 'robinson.silva@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'MOCHA', 'account/pictureprofile/undefined', '2022-04-01 20:37:30', 'ingresador', 1),
('2FEE79F4-D3B1-AFD3-8FB9-818B165E2568', 'dmasabanda', '$2y$10$cGn8MM9udeAdHyiwCFvmT.E7RAEfA.0AWsgfE2ewH4pOuc3RfVcOW', 1, 'agencia', 'MASABANDA CHANGOLUISA DARWIN PATRICIO', 'darwin.masabanda@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'OFICINA SUR', 'account/pictureprofile/undefined', '2022-04-01 20:37:49', 'ingresador', 1),
('E80C5A96-FEB3-6A0A-A320-9BB1004399E6', 'lsanchez', '$2y$10$OJIq1lvLwpeBKze47yO2Vev0qsM3KJlOpjxPh9gGzbDoHcWN3pmN.', 1, 'agencia', 'SANCHEZ SANTANDER LUIS ALBERTO', 'Luis.sanchez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'OFICINA SUR', 'account/pictureprofile/undefined', '2022-04-01 20:38:06', 'ingresador', 1),
('60165801-FD81-AC62-ADA9-43A3BC315B58', 'dalvarado', '$2y$10$er.cBJndkfWdBYKGI/Xn.u9m9NrFR6wQ3cL.3nvu08zNUqbO5oJFG', 1, 'agencia', 'ALVARADO GUTIERREZ DEISY LILIAN', 'deisy.alvarado@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PALORA', 'account/pictureprofile/undefined', '2022-04-01 20:39:32', 'ingresador', 1),
('E9592C4E-1E30-9196-AB03-C1DD4BAA9255', 'gmoyon', '$2y$10$Ic5JPlg0LwTFMgFtF.iYT.qVXjUxxGYecOiNyjjOIl9ndSzTwC.ym', 1, 'agencia', 'MOYON GOMEZ GONZALO RAFAEL', 'gonzalo.moyon@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PALORA', 'account/pictureprofile/undefined', '2022-04-01 20:39:47', 'ingresador', 1),
('7F5F76DA-62C1-8CAC-B50C-8967469A500D', 'pmartinez', '$2y$10$i5Ycnx3hDfcBEtUtpvTG1.p.mxxGsYRA0I5fPyR736pWq3NYy9Ioy', 1, 'agencia', 'MARTINEZ MARTINEZ PEDRO GABRIEL', 'pedro.martinez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PATATE', 'account/pictureprofile/undefined', '2022-04-01 20:40:03', 'ingresador', 1),
('44A631F5-848A-F0ED-ACDC-9A3B908F3F44', 'wmera', '$2y$10$N/nbnZucUDQNkn.oJNlG7eLYnFyPaiDJyjt4u0dfhcdTl42UeDp0.', 1, 'agencia', 'MERA MORALES WILSON GIOVANNI', 'wilson.mera@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PATATE', 'account/pictureprofile/undefined', '2022-04-01 20:40:20', 'ingresador', 1),
('79E57F7C-949E-1B0F-803E-24BE1CD4EA86', 'jreyes', '$2y$10$gYjGTgZ6SXaHnl66DUsmROzGXRCuU9uUppRQh4K2h0V7C81UBODAS', 1, 'agencia', 'REYES ESPIN JOSE RICARDO', 'jose.reyes@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PATATE', 'account/pictureprofile/undefined', '2022-04-01 20:40:42', 'ingresador', 1),
('7D331488-04A4-4B28-8170-CE9007C820E3', 'lflores', '$2y$10$8YTU0d0y2Qzh2mOwtfDEOOkq22GbvQfXLSQjuPHzEE5mNGFL4BaGu', 1, 'agencia', 'FLORES MAZON LORENA ELIZABETH', 'lorena.flores@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:41:03', 'ingresador', 1),
('2F77B3EE-9AA3-C79C-8EB2-32EED768ADE6', 'dgalarza', '$2y$10$RcnDmPaHdLNonf4qTMb2S.Q6zkfmevA.5HlC1wypTTJ6PZcusmBBq', 1, 'agencia', 'GALARZA VILLALBA DIEGO JOSE', 'diego.galarza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:41:26', 'ingresador', 1),
('28E51FBB-5A2F-4389-BBDB-7528BDDF163A', 'dgallegos', '$2y$10$MbtL/s7Nlg4H0CSvo6vA3OCcltHsXbDKa1xqM7JqA7GYXiTkdBFYq', 1, 'agencia', 'GALLEGOS MEZA TATIANA DEL ROCIO', 'tatiana.gallegos@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:41:44', 'ingresador', 1),
('1175F338-FF9A-B8B1-917D-8D79AE5B98FA', 'jjacome', '$2y$10$mgiMN/m8BIO0SJce8izfPeFhPbMZ88W0O9.bc4omwkC8jJ2sfkSg.', 1, 'agencia', 'JACOME MALUSIN JENNY GABRIELA', 'jenny.malusin@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:42:00', 'ingresador', 1),
('A6C70E96-9E3C-8578-A6E5-ECF2456F3021', 'mlopez', '$2y$10$q4MwIf3ne/jKjTgcwyxA5e.HrTIXYb4.RX0qEzCKElAba6GIfb0lC', 1, 'agencia', 'LOPEZ TIBAN MARY ELIZABETH', 'mary.lopez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:42:14', 'ingresador', 1),
('602A0C5F-F4EB-4DB1-9205-25203E0CC214', 'aquinga', '$2y$10$5ozzDjoiiKM3zVFzuOwaie/nOoD8rSXX.Wo.Klh6Cv2z8Oa08.d5O', 1, 'agencia', 'QUINGA VILLENA ALVARO ISRAEL', 'alvaro.quinga@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:42:30', 'ingresador', 1),
('ADD1A131-786A-CA26-BD33-90DE560FECB1', 'aramos', '$2y$10$F493IJwji9TnPaDb9bPuVOpxdY/gLZI2pi8F8BMYpAL/8PiRk35IG', 1, 'agencia', 'RAMOS VILLACRES ANDI SANDRO', 'andi.ramos@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:42:46', 'ingresador', 1),
('DED35D34-B123-53B1-AB9A-216D0B10D470', 'lsalagata', '$2y$10$KkKVpVNOAxu1PmuC9Km7Te0efqPkEgPdUVJVGAJURMF044Ia3TXVO', 1, 'agencia', 'SALAGATA CANDO LUIS ALBERTO', 'luis.salagata@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:43:02', 'ingresador', 1),
('6BD8F386-0799-5BD8-A79A-93EFD69DDE26', 'lsupe', '$2y$10$yFGPH8uaD2aEtFbkZncEU.1YjKorYuicngclnepEIwsaShvuXE92q', 1, 'agencia', 'SUPE VILLALBA LUIS MIGUEL', 'luis.supe@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:43:16', 'ingresador', 1),
('04D94712-5BE8-4134-9F7D-E957D38E7C4F', 'fvillarroel', '$2y$10$IIkqsW8jz722tUDtFELR/uuIc7mH5l/NVNF02DSgQGCJSueTnNYSS', 1, 'agencia', 'VILLARROEL CHAUCA FRANKLIN JOAQUIN', 'franklin.villarroel@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 20:43:31', 'ingresador', 1),
('DF3140FD-86FB-20DA-857E-631ED6F1BE78', 'mcalero', '$2y$10$shgxRK0aVmnLG7nA795SkOV6l4x1cxZjb4U3wRQ1fdb3BknPCg99a', 1, 'agencia', 'CALERO CAMPANA MARIO XAVIER', 'mario.calero@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:43:46', 'ingresador', 1),
('EE4E8319-AEC3-904C-82F6-EF4FF84EA645', 'rchicaiza', '$2y$10$qOH2fY6mqqiMMNqWmIJhCOs.5RSBZnG7Sl1E0RhtygDUY8VgrmZaa', 1, 'agencia', 'CHICAIZA PUJOS ROCIO AMPARO', 'rocio.chicaiza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:43:58', 'ingresador', 1),
('CC7B99AD-DAA1-1528-B928-5E4BFE3FCC4A', 'bchucuri', '$2y$10$B/ayJ97Wn1DAWusdjgKVy.SVgErw3Kg1z2o06m7DArsY5U8g4oAvK', 1, 'agencia', 'CHUCURI SIZA BLANCA ELIZABETH', 'blanca.chucuri@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:44:14', 'ingresador', 1),
('E9F24760-36B8-B1AE-B5A1-07EF5B5309F1', 'jfigueroa', '$2y$10$lm.0kGTsB56Pfs9JaNx8l.njI6o.ig84VNNdbU/c3FMvMM4faezjW', 1, 'agencia', 'FIGUEROA RUIZ JENNY JUVELINA', 'jenny.figueroa@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:44:29', 'ingresador', 1),
('8750A328-CDF9-E69D-A2F3-BEE6F8CE56C3', 'aizurieta', '$2y$10$qU0QBhqf1vhKEl5x7274oOPCYnk0daX1ZVlfzDsst/Dnkj9ZodIm.', 1, 'agencia', 'IZURIETA CARRILLO ANA JUDITH', 'ana.izurieta@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:44:43', 'ingresador', 1),
('6CD4C1A9-F947-0EC7-B72F-BFB1EE2A5A91', 'mllerena', '$2y$10$N5BaYVHnjvow.oNwChB2S.V9fObE.cV/1TceeU35nIuyzii0nQHd.', 1, 'agencia', 'LLERENA TAMAYO MANUEL SANTIAGO', 'manuel.llerena@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:45:03', 'ingresador', 1),
('FF25277A-7C3A-55B9-99F6-E56E1AEBACDE', 'emera', '$2y$10$3PZzZHAJNGczIiGhOczqIuttCucrYr99iAM6Qgk/6Ux5J1g2iQu3W', 1, 'agencia', 'MERA MEJIA EDISON JAVIER', 'edison.mera@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:45:16', 'ingresador', 1),
('B518E1E3-CE0C-9C16-86D4-1A6475F109B4', 'dpilco', '$2y$10$C0oe.DUMRZY7cUcZRkiOcusjxf/XRooAmLurPlhpR3pp8AHgAAcRO', 1, 'agencia', 'PILCO CHANGO DIEGO PAUL', 'diego.pilco@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:45:30', 'ingresador', 1),
('674AAADE-B384-5AF1-93F5-00C7EB0A98E2', 'frobalino', '$2y$10$zpOTWPbQRh4lZ/Mi8VJV4ubYYg.b8Yif1heC77fqa0QwcS97pEvzq', 1, 'agencia', 'ROBALINO JIMENEZ FELIX ALEXANDER', 'felix.robalino@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 20:45:54', 'ingresador', 1),
('7948879D-E2D4-3A32-A638-6E74E78CC875', 'mtapia', '$2y$10$9qX3pBs7x8xco6vk5ENsMes4wgdmIaWFeJqtqA43dU7WHiT7QwfOW', 1, 'agencia', 'TAPIA MURILLO MERY YOLANDA', 'mery.tapia@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PUENGASÍ', 'account/pictureprofile/undefined', '2022-04-01 20:46:15', 'ingresador', 1),
('E8403269-9EC3-8A13-8FDD-DAACEDDA10B8', 'hcerda', '$2y$10$miuMbCUEzOQ/m3F7ziU/W.WqSCb7FsJkftl740YktcvEQZTwKUoa2', 1, 'agencia', 'CERDA TANGUILA HENRY JAVIER', 'henry.cerda@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PUYO', 'account/pictureprofile/undefined', '2022-04-01 20:46:43', 'ingresador', 1),
('3D1C9273-CF7F-CD71-99BC-B364027AB1F6', 'cfiallos', '$2y$10$CZBcq3O7Mc.pfYixOJ1bt.2LzLw2TGk5C2qTHxo0kpqN7Gylr5Zme', 1, 'agencia', 'FIALLOS REYES CLARA ISOLINA', 'clara.fiallos@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PUYO', 'account/pictureprofile/undefined', '2022-04-01 20:47:02', 'ingresador', 1),
('9043291D-D0D6-DC5A-9617-F3C040324B3A', 'lluna', '$2y$10$h50I2Jv0YNWym/3oXcejv.HRBGzknxcMJZjdvEAVrRkADVodEZDQG', 1, 'agencia', 'LUNA GAMBOA LUIS ORLANDO', 'luis.luna@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PUYO', 'account/pictureprofile/undefined', '2022-04-01 20:47:31', 'ingresador', 1),
('CA3561FC-B9E2-453F-898E-124FD7092717', 'emedina', '$2y$10$p9ZB8IV2G4kNmsLoKC7DGubP3l6FYpNQNvMvCkwkSHs0h0BQJILA.', 1, 'agencia', 'MEDINA MORA EVEN ALEXIS', 'even.medina@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PUYO', 'account/pictureprofile/undefined', '2022-04-01 20:47:47', 'ingresador', 1),
('3A18606F-B1EC-9C1A-B815-016538E85443', 'fmorocho', '$2y$10$tfJab5fBHot7/p/5OAC3i.5z6cU2/mO.WFQmAX14pCzi.CYjnUWc6', 1, 'agencia', 'MOROCHO BARZALLO FABRICIO JAVIER', 'fabricio.morocho@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'PUYO2 TERMINAL', 'account/pictureprofile/undefined', '2022-04-01 20:48:06', 'ingresador', 1),
('113A9748-4007-3145-B4C1-ABBB2E16CADA', 'jcastro', '$2y$10$kaSbrDXD1eJm/qWRnGST5OpZqks4qXQUCzM8/17oYYozg6zTTvRjG', 1, 'agencia', 'CASTRO CAMPOS JUAN CARLOS', 'juan.castro@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'QUERO', 'account/pictureprofile/undefined', '2022-04-01 20:48:28', 'ingresador', 1),
('EBF0EA3F-232B-9CDB-98E6-3DE3AFB3F354', 'lmunoz', '$2y$10$fv.chCLRWsVXHa3Oy3yOvOwngXkc7WAw6L4QYAf756FJXsgxYmj.a', 1, 'agencia', 'MUNOZ ZAMORA LEIDHY DIANA', 'leidhy.munoz@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'QUERO', 'account/pictureprofile/undefined', '2022-04-01 20:48:41', 'ingresador', 1),
('75859AB3-94A1-01B9-8F29-4FB30F439E8C', 'wsanchez', '$2y$10$.tNUbHAcGsAHYsDcAqAppOoIUW8YboUw/wQgVxjFvWVGb0Q5Zkrn.', 1, 'agencia', 'SANCHEZ MORALES WALTER VINICIO', 'walter.sanchez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'QUERO', 'account/pictureprofile/undefined', '2022-04-01 20:48:56', 'ingresador', 1),
('B1F12DAE-3234-ECAE-83CF-E2A57A580535', 'aelizalde', '$2y$10$RMw8N80evOkl84fF/cj3seTmSEY.EIChgNgmDUBDsFgGiM0yRLdaS', 1, 'agencia', 'ELIZALDE MARIN ANA MARIBEL', 'ana.elizalde@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'RIOBAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:49:52', 'ingresador', 1),
('37AA364B-16A2-21B9-BEC4-6B08121F96A3', 'verazo', '$2y$10$dMuBQsAgcCYWCBFvoUmH/eRaUvkuXBHJjC3oHmTk8EcD5NICdA1jC', 1, 'agencia', 'ERAZO ARCE VICTOR SILVERIO', 'victor.erazo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'RIOBAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:50:49', 'ingresador', 1),
('57500802-D4C9-318A-A90C-DAA1C3B0701E', 'psalazar', '$2y$10$TtXw85RIwmx143Jb4/tV3.ihzA0QZT7ZNHkY.yQxgEChXE7Sls1Ku', 1, 'agencia', 'SALAZAR ANDRADE PEDRO ROLANDO', 'pedro.salazar@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'RIOBAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:51:07', 'ingresador', 1),
('4C6010E4-A443-EADB-BB7D-EEF15FC7CC91', 'azuniga', '$2y$10$Bpqxxarq4U5j/WSByAfol.vvfYsT1EhnDJ3vhYMT3wUn1LY/15Rq.', 1, 'agencia', 'ZUNIGA VIVANCO ALEJANDRA ELIZABETH', 'alejandra.zuniga@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'RIOBAMBA', 'account/pictureprofile/undefined', '2022-04-01 20:51:23', 'ingresador', 1),
('72F34EB2-CD3B-01E1-ABD0-9F73E9A70E50', 'latiaja', '$2y$10$bLXl2suuFWf7T0YpCxJHqejP6b9/APPhQIjtIsQO6cq6EiXUazq0q', 1, 'agencia', 'ATIAJA TITUANA LIGIA MARISOL', 'marisol.atiaja@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:51:42', 'ingresador', 1),
('27E4BB04-9E56-2903-B91C-5FE6AD9BE06E', 'abalarezo', '$2y$10$dGqELUoidyk2RTugsZbm/e8SXtbo/61XHR0FIVkczbAi40QiDwoCa', 1, 'agencia', 'BALAREZO HERRERA AUGUSTO JAVIER', 'javier.balarezo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:51:54', 'ingresador', 1),
('D62F1454-ED6F-CB92-912A-CF3577920272', 'echicaiza', '$2y$10$ttLab3NsQt1HEvLlxIs0f.qk.xMaL3DJ1q6cJCOej2w4JzLNFjy2y', 1, 'agencia', 'CHICAIZA CAIZAGUANO EDGAR RODRIGO', 'edgar.chicaiza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:52:09', 'ingresador', 1),
('593575E2-22D2-3FE1-BAB9-62651F61B509', 'echicaiza', '$2y$10$2vcZGMKO0JM5E4ULew5xGuKPeRk/oTO41Ce1OM7QaV8qD0i4HvOHi', 1, 'agencia', 'CHICAIZA PUMASUNTA EDISON MARCIAL', 'marcial.chicaiza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:52:38', 'ingresador', 1),
('15988FD8-468A-8FB9-B6C6-CFA68CDBC670', 'sjimenez', '$2y$10$.gfsb157cCoSNklYYzqKAe9MG.Btx4bDf19sSOq2378r6ud1qRjrO', 1, 'agencia', 'JIMENEZ ALBAN SANDRA CAROLINA', 'sandra.jimenez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:53:00', 'ingresador', 1),
('05D64868-7750-807A-A38D-30EA35B9F16B', 'ijimenez', '$2y$10$eydjCsTvKuZ9UHBzC2k9yeKfIYBgKdqe52vW5gUUgqLLmHJedTeky', 1, 'agencia', 'JIMENEZ JIMENEZ IBED GUADALUPE', 'ibed.jimenez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:53:15', 'ingresador', 1),
('3BD14F45-FE43-217B-A360-ACBBF891C1D8', 'hlagos', '$2y$10$Uep3Smgieb39t/v1bEaweeG53O13/aneSlUGGEVVuNPacB5esl3x.', 1, 'agencia', 'LAGOS CHAUCA HENRY PAUL', 'henry.lagos@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:53:28', 'ingresador', 1),
('4539F75D-87EB-C042-87CB-B94894E9EBF7', 'bpaz', '$2y$10$t0U0OYMQJd3d4dq40HHxSOaXSBA5AVal32W32.eZicn.uaJgAl4by', 1, 'agencia', 'PAZ HINOJOSA BERONICA DEL ROCIO', 'beronica.paz@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:53:41', 'ingresador', 1),
('ECF4761D-1B78-97D6-88DB-0773D40648B9', 'wsalazar', '$2y$10$KvKheA2eH/DqxUubucriYeGjp5BydjaGGPHsrQDzOAPb70/cN.pHi', 1, 'agencia', 'SALAZAR ORTIZ WILSON FERNANDO', 'wilson.salazar@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 20:53:53', 'ingresador', 1),
('0A21BF25-FD73-C51F-AD6D-4707CE6130C1', 'clema', '$2y$10$rNsiaAZf3Q2IcuW1xdcNpeFp4mztR5hHnF1LA186Q0Nik1IdULjC6', 1, 'agencia', 'LEMA CAIZA CRISTIAN SANTIAGO', 'cristian.lema@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANGOLQUÍ', 'account/pictureprofile/undefined', '2022-04-01 20:54:11', 'ingresador', 1),
('4FC0C1EC-D20D-71CA-934E-98363CC4114C', 'ltipan', '$2y$10$P68298XXhsVy6oRomFT.zubN1Xu2MffOJfOFsQq9JVejZ.9BlC1Xe', 1, 'agencia', 'TIPAN PINTO LIGIA AMPARO', 'ligia.tipan@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANGOLQUÍ', 'account/pictureprofile/undefined', '2022-04-01 20:54:31', 'ingresador', 1),
('8E49FF29-4F9E-CAC8-A056-BFD609570648', 'lsilva', '$2y$10$USEtTIkFXM4.gb9T2SOeFOlegCh.FsfB1A6yzPKTKlelvGEs7clNm', 1, 'agencia', 'SILVA MARTINEZ XIMENA DE LOS ANGELES', 'ximena.silva@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTA CLARA', 'account/pictureprofile/undefined', '2022-04-01 20:54:50', 'ingresador', 1),
('EDFADCBF-9691-E884-8BFA-7D01B1AB5E63', 'ctabares', '$2y$10$F5R5aWgI7ELHY.oemBnzqu6qfNphOjHS2d9pxmoiLGXkpAZpDs/kW', 1, 'agencia', 'TABARES BURBANO CRISTIAN VINICIO', 'cristian.tabares@coac-sanfra.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-04-27 00:01:09', 'administrador de usuarios', 1),
('73CEB85D-BF96-0939-8190-9F3BC5646044', 'hyambay', '$2y$10$ZyiBr2wQ5bF02ksM7PjRNut6p1X5TawqqopDnuWZkjfe6S5QqzUQC', 1, 'agencia', 'YAMBAY CANDO HILDA BEATRIZ', 'hilda.yambay@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTA CLARA', 'account/pictureprofile/undefined', '2022-04-01 20:56:32', 'ingresador', 1),
('C91A3AE4-0683-1C4F-AF14-3BDF33AA7CAA', 'wguillen', '$2y$10$Q.pk.11Fu683SaV8rf.yYOesre74RPo4zt/Dj2aVjqvaFMovlyZQW', 1, 'agencia', 'GUILLEN PORRAS WILSON XAVIER', 'wilson.guillen@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 20:56:50', 'ingresador', 1),
('A50545E5-F13D-2442-A724-717BE0B4276C', 'lharo', '$2y$10$Koed0kLWYv7co9b3/tSSP.TXgfvyV78Mi15GzbEsByuJM7ZhETaP.', 1, 'agencia', 'HARO VERA LORENA ALEXANDRA', 'lorena.haro@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 20:57:03', 'ingresador', 1),
('87F30DC3-FBB0-904C-8986-226CE8074E82', 'mmacias', '$2y$10$gqYsT8A11TFaYZ.iZoKYUOGyw8QaWH.0IHnPfD6Up7LaqgoQiraI.', 1, 'agencia', 'MACIAS NUNEZ MIRIAM KARINA', 'miriam.macias@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 20:57:15', 'ingresador', 1),
('EC65A3AD-85C2-59A5-BFEF-4979A9FE8AFB', 'jmorocho', '$2y$10$HDomSM2QyX0N2nuCuHcAQue/aal0QR9BgQKLWzPDKUAgIOKiZpbC6', 1, 'agencia', 'MOROCHO CABEZAS JOSE DAVID', 'jose.morocho@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 20:57:28', 'ingresador', 1),
('0000B2A3-F70F-3C39-9250-C1A2D09DD468', 'dtoapanta', '$2y$10$wwf99e4HyBIM36dkpe89UOeSr41t5lmc8c4eKhocwhdGXYIq14lTu', 1, 'agencia', 'TOAPANTA TOAPANTA DEYSI JACKELINE', 'deysi.toapanta@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 20:57:44', 'ingresador', 1),
('3EB6FC1D-5E42-3A9B-8A21-B6DC15125D26', 'cvivas', '$2y$10$Q0zS4DP0WH09CMvihrerUer7ibxsknXQhb0zdJ82G.tOIjEPEdhuW', 1, 'agencia', 'VIVAS CHILLO CLAUDIO BLADIMIR', 'claudio.vivas@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 20:57:58', 'ingresador', 1);
INSERT INTO `users` (`id`, `userid`, `password`, `isdefaultpasswd`, `agencia_callcenter`, `name`, `mail`, `area`, `cargo`, `agencia`, `userpic`, `createdate`, `usertype`, `state`) VALUES
('ADEA8EEF-E76F-89F5-8C39-700AB7811922', 'scayo', '$2y$10$2n0XnG9Wrj1Y9ySf677WMuzTU9R681LuSiK5GpUiYtLUF9XKXzmpO', 1, 'agencia', 'CAYO CHANATASIG SANDRA ESTHELA', 'sandra.cayo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SAQUISILI', 'account/pictureprofile/undefined', '2022-04-01 20:58:16', 'ingresador', 1),
('D9C6E725-6A17-7472-9F82-E9F983980F87', 'jcely', '$2y$10$V10n8E/o3fcxw/6BLJFMV.6oI1QmNlcXcwq1NH6eiMpeZrrN5S5HW', 1, 'agencia', 'CELY HEREDIA JORGE ARMANDO', 'jorge.cely@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SAQUISILI', 'account/pictureprofile/undefined', '2022-04-01 20:58:28', 'ingresador', 1),
('199A3D67-6989-B39B-BE0D-A558FD787A87', 'junapanta', '$2y$10$5YDLcVf.5hsjK3s2AANAWe/JlFMDhIAz.lBUxqVqOsCQ7S6Txjy4e', 1, 'agencia', 'UNAPANTA SANTO JOHANA MARCELA', 'johana.unapanta@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'SAQUISILI', 'account/pictureprofile/undefined', '2022-04-01 20:58:47', 'ingresador', 1),
('0313BABD-8FAD-5AF1-8064-1675A85D05CA', 'scorrea', '$2y$10$lHrrt5d68CRwUBJ2YpRjJ.JISeizgaXCCbXtduARV.osya0nkGKGy', 1, 'agencia', 'CORREA NIETO SANTIAGO FRANCISCO', 'santiago.correa@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TAMBILLO', 'account/pictureprofile/undefined', '2022-04-01 20:59:10', 'ingresador', 1),
('635FEF29-64D6-C551-822D-9CBA0ED2CF3A', 'lparra', '$2y$10$TpwsMeFtD3GDbQEalbQLT.Udnz082EggPhSO7TRxsvR7j2XlbUQDq', 1, 'agencia', 'PARRA PAZMINO LENIN ALEJANDRO', 'lenin.parra@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TAMBILLO', 'account/pictureprofile/undefined', '2022-04-01 20:59:27', 'ingresador', 1),
('E67CD19E-F5F8-0EB4-92C8-8E024A5FB66B', 'mviteri', '$2y$10$4uTzkybQk6iYLRmRIpNOD.gsLyyDaSX11Aw2hMBTonpB6FSfaJbYG', 1, 'agencia', 'VITERI GARCES MARIA BELEN', 'belen.viteri@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TAMBILLO', 'account/pictureprofile/undefined', '2022-04-01 20:59:46', 'ingresador', 1),
('D68718F9-7822-2CE1-BDF0-1F86EA24F1F5', 'crivera', '$2y$10$P3omR.P.2TxMFG7cgEDP4.yVZf3lll6Wx1m806YpytwGoCN9uSfaW', 1, 'agencia', 'RIVERA MUNOZ CRISTINA ELIZABETH', 'cristina.rivera@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TENA', 'account/pictureprofile/undefined', '2022-04-01 21:00:04', 'ingresador', 1),
('F4C116C1-E284-C343-B804-30FD8FC2C601', 'srueda', '$2y$10$oFnF8Lvd2FycTMKSwc6wIeCozKhMttAuFrZcxQRkA0uYjC4SjMR0q', 1, 'agencia', 'RUEDA VASCO SILVANA CRISTINA', 'silvana.rueda@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TENA', 'account/pictureprofile/undefined', '2022-04-01 21:00:16', 'ingresador', 1),
('72DE95A9-77FE-D9F2-871A-7E1AB89529AD', 'rtrujillo', '$2y$10$EnpIv5sKLsNV4AVIvvOc2.TqvK6eHwF5lg8h.XccWCpVzivAkpWNG', 1, 'agencia', 'TRUJILLO SANCHEZ RAQUEL DIOSELINA', 'raquel.trujillo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TENA', 'account/pictureprofile/undefined', '2022-04-01 21:00:30', 'ingresador', 1),
('2574E48E-8289-1C09-81B5-71BFBE78BA93', 'lcapuz', '$2y$10$ckK6SICu5BBRI.uBg7ImNuMMewgQNSTFowP6WyLHru27irEOMVNLa', 1, 'agencia', 'CAPUZ FREIRE LUIS JAVIER', 'luis.capuz@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TISALEO', 'account/pictureprofile/undefined', '2022-04-01 21:00:47', 'ingresador', 1),
('0775E2B8-D9C3-F8E3-BC36-A23DB12C66D4', 'wpoaquiza', '$2y$10$BdnnzR31/HwXRgsJxNuRYemaGfHFUdtmaD8vrlp4l.xTEsl/bJfC.', 1, 'agencia', 'POAQUIZA ALARCON WILSON ROBERTO', 'wilson.poaquiza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TISALEO', 'account/pictureprofile/undefined', '2022-04-01 21:01:02', 'ingresador', 1),
('5A2D2D3E-8E46-0ECF-A537-E5CE38F5E70B', 'mramirez', '$2y$10$kqaBg7LqoWul2cVKbYPzlOAMGCdwBO4jQSfQjh1TC4vZRRZ05hiYq', 1, 'agencia', 'RAMIREZ NARANJO MILTON GERARDO', 'milton.ramirez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'TISALEO', 'account/pictureprofile/undefined', '2022-04-01 21:01:15', 'ingresador', 1),
('3F95446A-2BE2-A250-AF12-436191FB81CB', 'jcarvajal', '$2y$10$nwOzs4r6qtkkAmdw4f8U..A7UBtRgUSDz8xWFUr2vkM5b2kQwgq9a', 1, 'agencia', 'CARVAJAL CARVAJAL JANETH GUADALUPE', 'janeth.carvajal@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'VILLAFLORA', 'account/pictureprofile/undefined', '2022-04-01 21:01:29', 'ingresador', 1),
('98DC0A1A-250D-6C1E-89E0-B951F8ABBC3A', 'descobar', '$2y$10$h0XbtZlkpHwTiYm8ZcP15evby8E/uW6DalOF2Pd8YOmuO0yOCungS', 1, 'agencia', 'ESCOBAR BAEZ DIANA VANESSA', 'diana.escobar@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'VILLAFLORA', 'account/pictureprofile/undefined', '2022-04-01 21:04:50', 'ingresador', 1),
('99AC7E1E-F809-0387-BB7A-1F91542A508E', 'jcastro', '$2y$10$QMTnr3E4xxy2aR8w3DBQ4eR2gBiItH4d15lQbhlaUS/H0PAtZNZx6', 1, 'agencia', 'CASTRO ORTIZ JAHAIRA ANABEL', 'jahaira.castro@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:18:28', 'ingresador', 1),
('2232B6C4-41AC-5ADB-9301-7722EB749A35', 'evillacis', '$2y$10$14X/wCsN41MSE8QjUs9at.RHa/tWl.7FSE7Q/jPf3uEhgR6gqFcza', 1, 'agencia', 'VILLACIS NARANJO EDISON PABLO', 'edison.villacis@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'VILLAFLORA', 'account/pictureprofile/undefined', '2022-04-01 21:06:00', 'ingresador', 1),
('D5D87AE6-4219-2F91-ACE6-5B615FED8551', 'aguzman', '$2y$10$KhrdJt8/cg3Qhy3BBe34pOdNl1DuELViltYACtPJfE4/54bsIgNg2', 1, 'agencia', 'GUZMAN CASTRO ANGELA FERNANDA', 'angela.guzman@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:18:59', 'ingresador', 1),
('AF7D03BF-6B5B-1555-A0B8-2AC9DD0E8FB4', 'amarino', '$2y$10$snlYmkb7xYiLOam/abaVvuGYkeLehdDnPireEaRO/iQsIF83EuRii', 1, 'agencia', 'MARINO VILLACIS ANA KAREN', 'ana.marino@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:19:21', 'ingresador', 1),
('FEA8FF4D-1C7C-0B8E-A553-6F780D0A47E5', 'lviera', '$2y$10$rWNKi.Gf8KezYUhDGxjx4OKJlhDKV7nZ53YC/BrfogG7p0m2FmMWW', 1, 'agencia', 'VIERA GAIBOR LINA GICELA', 'lina.viera@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:19:39', 'ingresador', 1),
('5ED966F7-1FA5-D3FB-BC95-EA2CF385EAA2', 'vchicaiza', '$2y$10$iZXYI0QFxUymrpedvy.mhuxZZnBUVO4YHBIrFO7GXckziNkgqxrPW', 1, 'agencia', 'CHICAIZA CHAGUAMATE VIVIANA ALEXANDRA', 'Viviana.chicaiza@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 21:20:10', 'ingresador', 1),
('59D51543-E8E8-051A-BFDE-8112B44A20CD', 'gleon', '$2y$10$xr41cgxINFvsH0YBkL0.Q.WWTrQh2K/X6TiDcKUWgSquwBO9EV3ge', 1, 'agencia', 'LEON ROBAYO GRACE MARITZA', 'grace.leon@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 21:20:27', 'ingresador', 1),
('AC9A629F-37F8-8E74-BAAA-6EEF26DF1736', 'robregon', '$2y$10$JppqYKTy1wsZ/NwEvcBz2O/DaB3Aq73Vgqx56KLwTQ8FHPpX6wT9S', 1, 'agencia', 'OBREGON PERALVO ROSANA ALEXANDRA', 'rosana.obregon@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'PUYO', 'account/pictureprofile/undefined', '2022-04-01 21:20:45', 'ingresador', 1),
('37955649-3501-A93D-A0BB-83D0BA6A8D0B', 'rpoma', '$2y$10$uFAgV/.qj/ANwtEDZVdOee6uzSaiuITcg57UnL.I3saOPSaZgcPyK', 1, 'agencia', 'POMA ORDENANA RAISA TAMARA', 'raisa.poma@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'RIOBAMBA', 'account/pictureprofile/undefined', '2022-04-01 21:21:03', 'ingresador', 1),
('C34C181B-8E30-BCD9-B023-71E0D3C919B2', 'lchavez', '$2y$10$26pVaDPFNtIVNWvj6d31eOEFUaOEWu5ykl.fS4zkI18NTrdr1BcX.', 1, 'agencia', 'CHAVEZ CANDO LADY DIANA', 'diana.chavez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 21:21:22', 'ingresador', 1),
('9BE2AE2D-A730-5DC0-ABBD-0E3F28B44A4F', 'ggonzalez', '$2y$10$aH8B.XwWZEPs3.DGheFK9.cF0cyXaJYE4alSF5.EvOOytYcRvkhum', 1, 'agencia', 'GONZALEZ GARCIA GENESIS MARCELA', 'genesis.gonzalez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 21:21:39', 'ingresador', 1),
('F3C84FE5-EE19-E7AE-AB73-78F09D08E86A', 'kendara', '$2y$10$3W.ic0h.IMipZuN2Erp1GeN81M4GoE59rdGAZYO9Rk5xpgcs17JZm', 1, 'agencia', 'ENDARA PALACIOS KATHERINE ALEXANDRA', 'katherine.endara@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'TENA', 'account/pictureprofile/undefined', '2022-04-01 21:21:54', 'ingresador', 1),
('FE95E6DB-57D4-7980-82F6-EE51E837680D', 'ljimenez', '$2y$10$CwQjkMFtxYl.3b/gygts3eEfnQILKqybwN17fPgoLeDOO4qr7bcpq', 1, 'agencia', 'JIMENEZ QUIROZ LADY MELINA', 'lady.jimenez@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE PASIVOS', 'VILLAFLORA', 'account/pictureprofile/undefined', '2022-04-01 21:22:14', 'ingresador', 1),
('15E36C28-4787-8E17-A68B-3CF75A820C09', 'aguato', '$2y$10$kGfE2Vu2Ed9XVeogyBMbAeCScrHm0QlT340yz7bdfyAlw7jFKULUC', 1, 'agencia', 'GUATO PONLUIZA ALICIA PAULINA', 'alicia.guato@coac-sanfra.com', 'Marketing y Negocios', 'OPERATIVO DE CALL CENTER NEGOCIOS', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:23:38', 'ingresador', 1),
('E966EC0E-D534-49CC-8F19-BA808C24643B', 'agalora', '$2y$10$D9uGzjNXMU4fsp/Nez.0nu3zYLMfl8lHA461Z1gq6g3WnZtC1sbnG', 1, 'agencia', 'GALORA DE MORA ALEX RAFAEL', 'alex.galora@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:25:01', 'ingresador', 1),
('8F153689-D397-93B3-B4C5-3586CCAC90B2', 'jsalinas', '$2y$10$wSX5ccKZTm9FQKnjnaQteegKZACN99qy1DGxa0aO93bHovWidjfNe', 1, 'agencia', 'SALINAS FREIRE DARIO JAVIER', 'javier.salinas@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:25:16', 'ingresador', 1),
('FA92D5C6-2A75-B148-812E-B564351994E6', 'vvillalva', '$2y$10$I8oTyioAlmmXblrHS7XrSuVkQhaGeeBZaB2Y4BXYtpxT8GYcRyD2u', 1, 'agencia', 'VILLALVA GARCES VANESSA RAQUEL', 'vanessa.villalva@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:25:30', 'ingresador', 1),
('97683DF5-1080-EB7A-BF5E-9BAD9B82A96A', 'jvillarroel', '$2y$10$nzP9zYOc/he.f968r59Odefzj5LdcPnFtMQMNf/6QcR3iX2cl6zsW', 1, 'agencia', 'VILLARROEL ONATE JAIME HENRRY', 'jaime.villarroel@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:25:48', 'ingresador', 1),
('83990F84-7038-1ABB-86ED-8129E9F2A5F1', 'lbasantes', '$2y$10$1xZf.VmIgwZrL5G1lUoDkeOaFkxCyYRCp0fd7MYvkXlEQ0OSJOHuq', 1, 'agencia', 'BASANTES MORALES LORENA ISABEL', 'lorena.basantes@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 21:26:05', 'ingresador', 1),
('FB81780F-2DFF-F3A2-8979-092250011681', 'jvelasco', '$2y$10$hTx9c7x2eO03OaCVk/d6Ie8MXa0PyfC1raq86A7gDEHukIj0Ap4oO', 1, 'agencia', 'VELASCO CRIOLLO JAZMINA DEL ROCIO', 'jazmina.velasco@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 21:26:21', 'ingresador', 1),
('D40DE44A-02BF-B928-97CE-D78F4CBC34A3', 'cgutierrez', '$2y$10$e6pKddPkR4e2lWRGJOLy3e9tWKnjAHxAsQaHu2p9glDQ4ErDA2G3e', 1, 'agencia', 'GUTIERREZ PADILLA MARIA CONSUELO DE LA DOLOROSA', 'consuelo.gutierrez@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 21:26:38', 'ingresador', 1),
('16BD4727-D2B9-10CC-BACF-DF3933E1F965', 'otoapanta', '$2y$10$XZk5SaQ56gFTBWNJ7tGrYuY2O5MaTrPyECcM//O7se3iCd7JqZCZq', 1, 'agencia', 'TOAPANTA SATUQUINGA OLGA MARICELA', 'olga.toapanta@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE CREDITO', 'VILLAFLORA', 'account/pictureprofile/undefined', '2022-04-01 21:26:54', 'ingresador', 1),
('63F8C1E8-8850-0E2F-A1F6-86D2B4A48FFE', 'dnorona', '$2y$10$YsTnb0DPzceFQ52sZMn0LubY6Ylk1ITwkv4t3om2A497ZtS6Ephje', 1, 'agencia', 'NORONA PEREZ DAYANARA ELIZABETH', 'dayanara.norona@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'ALANGASÍ', 'account/pictureprofile/undefined', '2022-04-01 21:31:32', 'ingresador', 1),
('60A321F0-04C7-A045-B238-1AEB90D5D73E', 'kludena', '$2y$10$6xfjGKkq7PO8Tws3LrYAu.20awCGp.o9Z5KUC4UwOBlRO.TgsH1KK', 1, 'agencia', 'LUDENA PARDO KAREN ESTEFANIA', 'karen.ludena@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'CARCELEN', 'account/pictureprofile/undefined', '2022-04-01 21:31:57', 'ingresador', 1),
('6A7FB525-4B74-F4A4-B0D2-25AF83D8DBED', 'smancero', '$2y$10$IIOTDxeq/O3uSTOSt0/tFezw69TDf41lPy798IfxhsVLIHheNoJc6', 1, 'agencia', 'MANCERO GAVILANES SUSANA LUCIA', 'susana.mancero@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'CEVALLOS', 'account/pictureprofile/undefined', '2022-04-01 21:32:18', 'ingresador', 1),
('27B422E7-8C8C-8D24-8E74-C3FD0D285B6D', 'karroba', '$2y$10$XuQgIcoDpP7d1w97O2y8Zep9lhRjbtiZuP2g4Z/mjLfYSW2/B9Yh6', 1, 'agencia', 'ARROBA SANCHEZ KATYA PATRICIA', 'katya.arroba@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'CONOCOTO', 'account/pictureprofile/undefined', '2022-04-01 21:32:56', 'ingresador', 1),
('691B04D7-13F9-5776-AD67-E13395E3BBF4', 'jnarvaez', '$2y$10$BxSUhGNqql0fsmBnAVax3OB/PDjOQ9lUsBSx6Q1uUeYjF.k.AKKt.', 1, 'agencia', 'NARVAEZ POTOSI JESSICA MARILYN', 'jessica.narvaez@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'EL CHACO', 'account/pictureprofile/undefined', '2022-04-01 21:33:13', 'ingresador', 1),
('E9DD9549-D91D-F9CE-89E0-079BB59902CD', 'nbalseca', '$2y$10$tYe7XVIk18GRkRB.tvXfg.UzbJcC.XzQYxdRF.yWoIuw/efNz5sb.', 1, 'agencia', 'BALSECA RAMOS NATALIA MARICELA', 'natalia.balseca@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'IZAMBA', 'account/pictureprofile/undefined', '2022-04-01 21:33:34', 'ingresador', 1),
('6A265731-1292-3F48-B368-B60C1A3458DE', 'salvarez', '$2y$10$.BmaJvnLbxEu/5udxcTlVuD8Z9j6hLQ.mv1YNgeexzbzmX0cUIb7C', 1, 'agencia', 'ALVAREZ ACOSTA SANDRA ELIZABETH', 'sandra.alvarez@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'LATACUNGA', 'account/pictureprofile/undefined', '2022-04-01 21:33:49', 'ingresador', 1),
('2803A21D-DCC2-15AF-BF89-9E6C27F96884', 'nvillizhanay', '$2y$10$.yclp.pA.jclJx7ovnOsF.r8KyYkjF/IudI2ScJDibiYDV2hscxVW', 1, 'agencia', 'VILLIZHANAY CALLE NEIVA VERENICE', 'neiva.villizhanay@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'MACAS', 'account/pictureprofile/undefined', '2022-04-01 21:34:13', 'ingresador', 1),
('AB259FB9-236C-EFA2-9537-4A589551A269', 'eapo', '$2y$10$2JvO96K1Qh0ItpXjTnEFPevCTsVr29srbfTiEJJhLqNRddrmIuU/6', 1, 'agencia', 'APO OJEDA ELIZABETH MORELIA', 'elizabeth.apo@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:34:34', 'ingresador', 1),
('252B1FAE-3017-9E5B-A726-32ABBD8C66EA', 'dpiedra', '$2y$10$STiF8/u0sNUYFq8mV/VVe.JjjfC.C5ey4jRtBusCnSGEAp3QNzilq', 1, 'agencia', 'PIEDRA RODRIGUEZ DIANA CAROLINA', 'diana.piedra@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:35:12', 'ingresador', 1),
('322CC802-D5A0-C684-8933-3CACB9DB0EEF', 'grios', '$2y$10$f.orDJTw0ea6BMYWPEiwwOK9aKBDVazTB54ym81cmmp/8QaY4ccfW', 1, 'agencia', 'RIOS URRUTIA GABRIELA CRISTINA', 'gabriela.rios@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:35:33', 'ingresador', 1),
('BF32D074-BBDE-B5BB-8001-B1015B2BBB3E', 'lrosales', '$2y$10$D.I5d.ZPVtiliOqB0KIJT.73tnzsLEUhD8LtY75EcbPkHWzZsHbRK', 1, 'agencia', 'ROSALES DURAN LAURA NATASHA', 'laura.rosales@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 21:52:22', 'ingresador', 1),
('AE69D5AB-E804-1946-A2BB-13066BC65E02', 'jbarreno', '$2y$10$6ozIXS6Sf1nhcebk2RcJDe73k55e4jbZlrx6m6B6CyygpwUfVzOhG', 1, 'agencia', 'BARRENO GAVILANES JUAN MARCELO', 'juan.barreno@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'MOCHA', 'account/pictureprofile/undefined', '2022-04-01 21:53:25', 'ingresador', 1),
('B7AEBE2A-040B-3923-8A82-B4BCBEAC634D', 'mulloa', '$2y$10$pLt6GTGzfiP0H4Hq6mXjY.F8FtsvUvs7eaPazdNDtU8/.QPF4CNw6', 1, 'agencia', 'ULLOA CEPEDA MONICA PURIFICACION', 'monica.ulloa@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'PALORA', 'account/pictureprofile/undefined', '2022-04-01 21:53:41', 'ingresador', 1),
('73E3F7F2-34D7-CCC1-A9B4-BA9C025200B7', 'kgarcia', '$2y$10$HmIVwiGMZT8ZwNCp7TEn5O5RiilQDQdUP1KDQ1sCh4bjasfTpDz22', 1, 'agencia', 'GARCIA COELLO KAREN LISBETH', 'karen.garcia@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'PATATE', 'account/pictureprofile/undefined', '2022-04-01 21:53:58', 'ingresador', 1),
('D17E98CF-3919-9403-82A5-074241B7DCBF', 'gtubon', '$2y$10$ExHpzKHp8QaFnwgRaVVMWueNbd2co.jjKBQnE03kZdfrtkjly9WbO', 1, 'agencia', 'TUBON ALDAZ GABRIELA CAROLINA', 'gabriela.tubon@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'PELILEO', 'account/pictureprofile/undefined', '2022-04-01 21:54:14', 'ingresador', 1),
('A04FC0BD-4E5E-2F89-A618-DC0B0627756D', 'svalle', '$2y$10$aYBSe85PMeG6ZXG8Lx459enQz0CkKlpl4/hu0YvCHqK.vVRHLbJuO', 1, 'agencia', 'VALLE REINOSO SHIRLEY ELIZABETH', 'shirley.valle@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'PILLARO', 'account/pictureprofile/undefined', '2022-04-01 21:54:31', 'ingresador', 1),
('D98CA3EC-9118-4252-81FC-E7BDB75A534C', 'fcabezas', '$2y$10$UDUU8fan9Bnaib2vAnNTF./.jP6oY5a6k/LzwFl4m0MoF1tg4S.ja', 1, 'agencia', 'CABEZAS SANCHEZ MARIA FERNANDA', 'fernanda.cabezas@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'QUERO', 'account/pictureprofile/undefined', '2022-04-01 21:54:46', 'ingresador', 1),
('EBE17080-4132-E749-B97A-218EE2E617F2', 'csantana', '$2y$10$p9w3Jj/qEScKT7cvE8ddsuAyomdBvgXgcJYsXoQL3M47ye.Bre6S6', 1, 'agencia', 'SANTANA GUEVARA CAROLINA BEATRIZ', 'carolina.santana@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'RIOBAMBA', 'account/pictureprofile/undefined', '2022-04-01 21:55:04', 'ingresador', 1),
('29F11650-DC54-7452-9DD7-C219A1D67EF6', 'bnavas', '$2y$10$T8TDF8xNRSQwncW7un3OTO.ChD7N7Az.cvqMtqeNc4LGXwFRUogfS', 1, 'agencia', 'NAVAS MOYA MARIA BELEN', 'belen.navas@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 21:56:29', 'ingresador', 1),
('FC49B7A2-E2C0-8D9A-8ABD-CB572E174B2C', 'hrodriguez', '$2y$10$b7kSzUOCk93QxTUluMNe7OGgG8Hn5vNP81nv9BvFKkpiVzRttbN/q', 1, 'agencia', 'RODRIGUEZ CHAVEZ HELEN JOHANA', 'helen.rodriguez@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'SALCEDO', 'account/pictureprofile/undefined', '2022-04-01 21:56:45', 'ingresador', 1),
('7FA7D7A6-EC71-6B28-974C-44293DD323F3', 'mtufino', '$2y$10$WWwmEXxlHTtkB9xSHVKlfe2gh4JQkafdtTVquo.Zxpl4Eg.OBwWJS', 1, 'agencia', 'TUFINO AGUILAR MARIA BELEN', 'maria.tufino@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'SANGOLQUÍ', 'account/pictureprofile/undefined', '2022-04-01 21:57:03', 'ingresador', 1),
('FF641483-879F-1E91-9A54-B697EF9E8430', 'rcoyago', '$2y$10$5635Gy6hp/DRNloViM/tkOID1gvIOB1pfg/P3Z0uZW/7nBEDSVxb.', 1, 'agencia', 'COYAGO CHACON ROSA ETELVINA', 'rosa.coyago@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'SANTA CLARA', 'account/pictureprofile/undefined', '2022-04-01 21:57:19', 'ingresador', 1),
('12805460-C244-4D28-9F2E-98BD497939B6', 'lcalderon', '$2y$10$io7udyer4kiY0oNZtgwvBepVDQyR75DGkKATRTX6MxMYDnPVNLFO2', 1, 'agencia', 'CALDERON LARA LORENA YAJAIRA', 'lorena.calderon@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 21:57:39', 'ingresador', 1),
('BDEEB153-B294-FADD-90CC-900858D42869', 'mvaldiviezo', '$2y$10$mV/wH4TD5XWT0qhKwSfBWO5gm/bU0CWqYf2X2tnd8kR4r0H3/MWcq', 1, 'agencia', 'VALDIVIEZO ANDINO MARCELA FERNANDA', 'marcela.valdiviezo@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'SANTO DOMINGO', 'account/pictureprofile/undefined', '2022-04-01 21:57:52', 'ingresador', 1),
('A0E64360-E9D3-0513-97C1-8676EEA38AE6', 'mmorocho', '$2y$10$My89xTGtW7sbx0jvNydva.0W/7BSuRqZc6eE6itB..jJkjhzXDzjK', 1, 'agencia', 'MOROCHO CHUQUILLA MARIA ALEXANDRA', 'maria.morocho@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'SAQUISILI', 'account/pictureprofile/undefined', '2022-04-01 21:58:09', 'ingresador', 1),
('1F9080B3-D892-6875-89F3-F6DF362EC99C', 'lespana', '$2y$10$5x8jSVNPtr2/0vxwWCoDXu1qFNsIyRSc.NMq4qNJTQxdC1X2sLZSW', 1, 'agencia', 'ESPANA POVEDA LEIDY VANESSA', 'leidy.espana@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'TAMBILLO', 'account/pictureprofile/undefined', '2022-04-01 21:58:27', 'ingresador', 1),
('6D5813EE-3BCE-77ED-8B05-ABF49CE16F68', 'kjimenez', '$2y$10$DM7D8bjn1G3CugiOf0995OHkWtuKwFExCuQTe0HXgY/u194064LrS', 1, 'agencia', 'JIMENEZ HINOJOSA KATHERINE ANDREA', 'katherine.jimenez@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'TENA', 'account/pictureprofile/undefined', '2022-04-01 21:58:48', 'ingresador', 1),
('9F89FB24-5CB3-28D7-A890-EC247708796F', 'dfreire', '$2y$10$W3.QA6tvYXRCeZTlJrWhqe4DijDkLREzkF4/PnwPbUlhClHg/XSi6', 1, 'agencia', 'FREIRE VIERA RICARDO DANIEL', 'daniel.freire@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'TISALEO', 'account/pictureprofile/undefined', '2022-04-01 22:00:38', 'ingresador', 1),
('00A06287-E9DF-79AA-A5EB-356E987B4F72', 'mmayorga', '$2y$10$4d.gcKYuAFJSDWgLZLOs/uDG3Lc9Q45F78QDknFNKERsVEiHcstKm', 1, 'agencia', 'MAYORGA CHAVEZ MARIA JOSE', 'maria.mayorga@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'MAYORISTA', 'account/pictureprofile/undefined', '2022-04-01 22:01:00', 'ingresador', 1),
('D7F4709C-D171-1484-B4B6-8912774817D9', 'ysaltos', '$2y$10$BbHPBQ9XFdFFfMZtGFHgaefIzA1ejpMCPrrKWzQWbjNitTO7SFSpK', 1, 'agencia', 'SALTOS ZAMBRANO YOLANDA ELIZABETH', 'yolanda.saltos@coac-sanfra.com', 'Operaciones', 'OPERATIVO DE SERVICIO DE ATENCIÓN AL CLIENTE', 'VILLAFLORA', 'account/pictureprofile/undefined', '2022-04-01 22:01:21', 'ingresador', 1),
('E856841D-3F5A-DDB6-8D10-C955EED30513', 'schauca', '$2y$10$UxusRbaGzb4cVkTuHciroOUefpDT5ko.izE2eth3ldsYcszxz29S.', 1, 'agencia', 'CHAUCA VALENCIA SANTIAGO XAVIER', 'santiago.chauca@coac-sanfra.com', 'Operaciones', 'OPERATIVO GENERAL', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 22:02:30', 'ingresador', 1),
('68720502-6FD0-3A06-9127-D8A5D8E2981A', 'bcofre', '$2y$10$8mdhfmEzODsEfwa2ZZPRiea1R.zKQOD3DDKnsTeL1zbTyTas5jf4O', 1, 'agencia', 'COFRE GUANA BYRON EDISSON', 'byron.cofre@coac-sanfra.com', 'Operaciones', 'OPERATIVO GENERAL', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 22:02:48', 'ingresador', 1),
('28456E4A-E477-2BDD-BC87-004C2DCC27C9', 'asilva', '$2y$10$MNtkEPya5KfuxcS54wpCr.3bVBeh6O2.j4uAtf2febdDnxT.1LJKi', 1, 'agencia', 'SILVA OJEDA CHRISTIAN ANDRES', 'andres.silva@coac-sanfra.com', 'Operaciones', 'OPERATIVO GENERAL', 'MATRIZ', 'account/pictureprofile/undefined', '2022-04-01 22:03:01', 'ingresador', 1),
('13501A9C-F731-1737-9D54-988C301D07AF', 'cnaranjo', '$2y$10$ZnKCa3MbULH8ZeyR0/Tb/.rHGOBCUFoQWilQWrvzsqk72ZuQaIaMC', 1, 'agencia', 'NARANJO VELASTEGUI CRISTIAN JAVIER', 'cristian.naranjo@coac-sanfra.com', 'Operaciones', 'OPERATIVO GENERAL', 'MAYORISTA', 'account/pictureprofile/undefined', '2022-04-01 22:03:17', 'ingresador', 1),
('ACE948E8-8FF5-6A4A-A236-6DEEC807D3C3', 'mchica', '$2y$10$p1cn/.iNvUFV0PgzfcHVj.Z1NsJ8RnAt7irLTZ9tkpkPpCKqezS7G', 1, 'agencia', 'CHICA SILVA MICHAEL JOSE', 'michael.chica@coac-sanfra.com', 'Operaciones', 'OPERATIVO GENERAL', 'SANGOLQUÍ', 'account/pictureprofile/undefined', '2022-04-01 22:04:55', 'ingresador', 1),
('318AC530-CACB-78E2-837D-E28761740F37', 'mbravo', '$2y$10$JbFPPKeNKOI3c1FCD/u7IO7UVcnlLSy9h/bywZfe/RosNj/F36dqi', 1, 'agencia', 'BRAVO BRAVO MICHELL STIVEN', 'michell.bravo@coac-sanfra.com', 'Marketing y Negocios', 'GESTOR DE NEGOCIOS', 'CARCELEN', 'account/pictureprofile/undefined', '2022-04-01 22:06:21', 'ingresador', 1),
('F6A51633-5858-4559-B2EB-3BA2BD78B540', 'orquestador', '$2y$10$T6zECJ4a0cJuxCuZ8hUvUeHEUH/w5ZgRbXV6UtOanICE/ltzoQlEi', 0, 'callcenter', 'Osquestador QA', 'orquestador@no.com', '', '', '', 'account/pictureprofile/undefined', '2022-04-30 12:43:49', 'orquestador', 1),
('F96938A4-2186-1745-A93E-D948BE51AD63', 'mcarrasco', '$2y$10$rWLKAPIWIRBqPDjUMJO1K.IOUtgFSXkJlRpkv18JiKkHx7XnMmP.G', 1, 'agencia', 'CARRASCO ZURITA MARCO ANTONIO ', 'marko1961carrazco@hotmail.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-05-19 22:38:35', 'supervisor', 1),
('23BB2A75-7111-F9BA-86AD-E5FF3EE300C1', 'Ajativa', '$2y$10$aI08w6p1/86Smy1.dL5G8Og2HYUQ2CGRLi.dL.hPCEguGTE9LTlB2', 0, 'agencia', 'ALISSON ANDREA JATIVA IBARRA', 'quality_manager@kimobill.com', 'Marketing y Negocios', 'ASISTENTE DE MARKETING', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-04-25 17:58:57', 'orquestador', 1),
('DE5DB73C-6746-0A47-996E-641885A61191', 'Rgarcia', '$2y$10$pb6TSS.EmMMijSRG3Z4w1eq5JQXmEcNKItoe.9rMyLuIvZ9NwcOc.', 0, 'callcenter', 'Ronny Ricardo Garcia Palacios', 'software_developer@kimobill.com', '', '', '', 'account/pictureprofile/undefined', '2022-05-09 22:46:29', 'orquestador', 1),
('F86BB56C-D1C3-4C0D-816E-130667294A7C', 'drosero', '$2y$10$ZTtqjF1rxzYL8WNy4I/H0OsxadD2v5Kblpqx152WKhouj7WaKuk9i', 1, 'agencia', 'DIANA ANDREA ROSERO JIMENEZ ', 'diana.rosero@coac-sanfra.com', 'Cobranzas', 'JEFATURA DE COBRANZAS', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-06-04 15:50:51', 'orquestador', 1),
('626F0130-A2E5-4CA5-B22E-17310B2771FF', 'slopez', '$2y$10$IA7iiegR2RbvkHYsfK1M0OlJ68cOW2Gq3bpsb9CVYmnr5Ql.VBwkm', 1, 'agencia', 'SORAYA ARACELLY LOPEZ BARRIONUEVO ', 'soraya.lopez@coac-sanfra.com', 'Legal', '', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-06-04 15:55:02', 'orquestador', 1),
('B51CFFF4-6D9D-E555-A0B6-CD155D14805C', 'emerino', '$2y$10$rbB.nqGFZK1e6xaQ1tSOG.niOjP74Wo94fMzmavxiEmMMXaTUwmf6', 1, 'callcenter', 'ESTEFANY GABRIELA MERINO SARANGO', 'quality_manager@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-06-16 15:52:14', 'supervisor', 1),
('7D22B51F-16DA-EAE0-BFAE-814457137DAD', 'Krojas', '$2y$10$wQvkAiW.65lLEuf4PcOxZelByQRtfba9.bJ6bcTKgZH90tvQB8xKG', 0, 'callcenter', 'KEVIN ANDRES ROJAS CAIZA', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 08:49:01', 'ingresador', 1),
('6EA71297-F9A9-1475-B9BC-86927DC69CE7', 'admingm', '$2y$10$4iGl7yyULRZdfqJ9XJpx0O9TIda5v3IhJ.EgTEdzBV9plmm2eBvqO', 0, 'agencia', 'Administrador Test', 'admin@no.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-06-22 23:12:59', 'administrador', 1),
('7B43B90C-68DB-A84D-ACB0-7D623A75D816', 'gsasintuna', '$2y$10$yLMTSIu.9Eq.rmZ5afaWruSD8EmsDS2KxI5YzaawSg2bXld/ZQEXi', 1, 'agencia', 'Gissela Sasintuna', 'gissela.sasintuna@coac-sanfra.com', 'Operaciones', 'OPERATIVO GENERAL', 'AGENCIA MATRIZ', 'account/pictureprofile/undefined', '2022-07-20 14:09:19', 'orquestador', 1),
('08707673-4997-871C-ABC4-16A4CC93DEB9', 'xlopez', '$2y$10$dnqdGdcnMcHZZk51BLRIQ.COvdFhu11.VN6P1J5Nc4NNiIWrLYF9G', 0, 'agencia', 'Gonzalo Lopez', 'lismuyutejada@gmail.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-06-23 16:40:02', 'ingresador', 1),
('1D1D9AFE-6A6D-0105-B1EC-656851B366AF', 'Gsimbana', '$2y$10$PnObKruCGH8bZEPhCb1a8ewt3K.mmDxJrcnxPojVYuRaOb9AnYy/.', 0, 'callcenter', 'GABRIELA SOFIA SIMBANA GUAGUA', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 08:31:23', 'ingresador', 1),
('B1EF8D1F-3FFA-8B6C-A076-06C4F397BF44', 'Gfigueroa1', '$2y$10$XPw7oOG820VdYMxCLoVjfeYEWDV.DzwLbyabCLu0Lh49IoqPpNK.a', 0, 'callcenter', 'GLORIA ELIZABETH FIGUEROA PINCAY', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-22 19:36:32', 'ingresador', 1),
('B9BDF671-88E0-FC97-914B-E64EA60BEA7F', 'Schacha', '$2y$10$0K1rchf7PUN8zYMvMgFku.4..D2EB7idy7SBudo2/kAbqu/aYEFUm', 0, 'agencia', 'SILVIA MIREYA CHACHA NARVAEZ', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 08:43:29', 'ingresador', 1),
('7BD67188-E291-770D-9AB3-8023FB1632A5', 'kmb_ingresador', '$2y$10$VTwkuYh9/yKwCfGbtu1kNepoIp.VOJQB4biaQzR5rIQJ1fLFi1.ca', 0, 'callcenter', 'Ingresador KMB', 'veronica.ochoa@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-19 09:31:09', 'ingresador', 1),
('AF592ABC-F3C9-CBB7-9ABF-1A7EA9E5BCCD', 'Eespadas', '$2y$10$d9NomwqGB1Hvtgn4JFQhveHsM6NhCVu.zjzFdSj16Euli2zjWqSRu', 0, 'callcenter', 'ERICK EDUARDO ESPADAS VALERIANO', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 09:38:19', 'ingresador', 1),
('4CCCE78C-D756-FB9D-A74B-CD73F32526DA', 'Egavilanes', '$2y$10$t.xneylK8JPlisJ5hf.FF.MlFrMS8jLY3EnC7BzEg1BgXeXIVzWdW', 0, 'callcenter', 'ERIKA MICHELLE GAVILANES OCHOA', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 09:37:35', 'ingresador', 1),
('FDCCD095-7F09-826B-9213-815BCF3A2F5A', 'Jguamialama', '$2y$10$LsSM.t9PFFoSpI4erhjUTOk2VwuK9gF6aF4klsw.nXe16.1k1PIDW', 0, 'callcenter', 'JENIFFER DAYANA GUAMIALANA ERAZO', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 08:50:35', 'ingresador', 1),
('5F238DE0-919D-086E-8DF2-8D0E59A9D153', 'Mpozo', '$2y$10$yn2Mw559t/jLm3ODtb5tp.j5nkMoHYXa4l3qe75QavwLsiT88dIKi', 0, 'callcenter', 'MICHEL ALEXANDRA POZO CAIZA', 'notificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 08:44:03', 'ingresador', 1),
('9D5C405F-B55E-F0BD-9D3A-B54199F10C09', 'kmb_orquestador', '$2y$10$EzN7XMieg1kxScImKPNQB.aMOw/mtw7z6H0TkOw.Hu2nZBWZYet/2', 0, 'agencia', 'Orquestador KMB', 'veronica.ochoa@kimobill.com', 'Marketing y Negocios', 'ANALISTA DE  NEGOCIOS', 'AGENCIA TISALEO', 'account/pictureprofile/undefined', '2022-07-19 09:40:58', 'orquestador', 1),
('8DF1B5DB-0515-D2C1-AFC8-573AE55C96B1', 'kmb_supervisor', '$2y$10$bHlWlbKeQ6EFzEW.eM7gLucVvbRAydHijbqTGWJrS0CEgcVb2r20O', 0, 'agencia', 'Supervisor KMB', 'veronica.ochoa@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-19 09:43:11', 'supervisor', 1),
('C83F34CA-B71E-3E44-957D-8F212495A4BB', 'ingresador_calidad', '$2y$10$t9xACIroduCxEQFBRBUVSuyXZFnQRMi/QIDN4neCbSAOCS8cyt12m', 1, 'callcenter', 'Ingresador Calidad', 'quality_manager@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-19 09:47:52', 'ingresador', 1),
('26A161E2-7909-54DC-B5A3-0B03BFD637ED', 'Ediaz', '$2y$10$odPznFfYjh2a9rFHYSaL8ua87q2xNpdQJYZXm5XsqoOIUw.NpnnIa', 0, 'callcenter', 'EMILIO RENE DIAZ MOYA', 'ntificaciones@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-13 08:45:54', 'ingresador', 1),
('1FDD1269-04AE-3EBD-8CC1-C0E2A87BBF61', 'supervisor_calidad', '$2y$10$yMMXavuFIk.kXE9VO3feJuMYF.SRcxB8aMRl/bTgbAB8e6QbE9C.i', 1, 'agencia', 'Supervisor Calidad', 'quality_manager@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-19 09:48:22', 'supervisor', 1),
('778A7205-B084-20F7-92CC-F0B09BFE37DC', 'administrador_kmb', '$2y$10$NTE9OvAxVpbLE8gueN6OauxRFwYtPrQFTPskQGYwhy2hS3O93ISiW', 0, 'agencia', 'Administrador KMB', 'veronica.ochoa@kimobill.com', 'NO', '', '', 'account/pictureprofile/undefined', '2022-07-19 11:50:19', 'administrador', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catalogoagencias`
--
ALTER TABLE `catalogoagencias`
  ADD PRIMARY KEY (`id`,`agencia`);

--
-- Indices de la tabla `catalogoareas`
--
ALTER TABLE `catalogoareas`
  ADD PRIMARY KEY (`id`,`area`);

--
-- Indices de la tabla `catalogocargos`
--
ALTER TABLE `catalogocargos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `catalogoincidencias`
--
ALTER TABLE `catalogoincidencias`
  ADD PRIMARY KEY (`id`,`producto`,`incidencia`);

--
-- Indices de la tabla `catalogoproductos`
--
ALTER TABLE `catalogoproductos`
  ADD PRIMARY KEY (`id`,`producto`);

--
-- Indices de la tabla `catalogosubtiposincidencia`
--
ALTER TABLE `catalogosubtiposincidencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `catalogotiposincidencia`
--
ALTER TABLE `catalogotiposincidencia`
  ADD PRIMARY KEY (`id`,`tipoincidencia`);

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`,`cedula`);

--
-- Indices de la tabla `codes`
--
ALTER TABLE `codes`
  ADD PRIMARY KEY (`code`);

--
-- Indices de la tabla `comentariostickets`
--
ALTER TABLE `comentariostickets`
  ADD PRIMARY KEY (`id`,`ticketid`,`numberticket`);

--
-- Indices de la tabla `contactform`
--
ALTER TABLE `contactform`
  ADD PRIMARY KEY (`id`,`cedula`);

--
-- Indices de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  ADD PRIMARY KEY (`id`,`ticketid`);

--
-- Indices de la tabla `generatetickets`
--
ALTER TABLE `generatetickets`
  ADD PRIMARY KEY (`nticket`,`id`);

--
-- Indices de la tabla `gestiontickets`
--
ALTER TABLE `gestiontickets`
  ADD PRIMARY KEY (`id`,`cedula`,`numeroticket`,`ticketid`,`producto`,`tipoincidencia`,`stincidencia`);

--
-- Indices de la tabla `gestionticketshistorico`
--
ALTER TABLE `gestionticketshistorico`
  ADD PRIMARY KEY (`id`,`cedula`,`numeroticket`,`ticketid`,`producto`,`tipoincidencia`,`stincidencia`,`createdate`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`profileid`);

--
-- Indices de la tabla `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`,`usertype`);

--
-- Indices de la tabla `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tempcode`
--
ALTER TABLE `tempcode`
  ADD PRIMARY KEY (`id`,`mail`);

--
-- Indices de la tabla `tiempostickets`
--
ALTER TABLE `tiempostickets`
  ADD PRIMARY KEY (`id`,`ticketid`,`agent`);

--
-- Indices de la tabla `uploadfiles`
--
ALTER TABLE `uploadfiles`
  ADD PRIMARY KEY (`id`,`ticketid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`,`mail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
