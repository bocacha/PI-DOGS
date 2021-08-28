const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const DogsRoutes = require('./dogsRouter')
const RazesRoutes = require('./razesRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogsRouter', DogsRoutes);
router.use('/razesRouter', RazesRoutes);

module.exports = router;
