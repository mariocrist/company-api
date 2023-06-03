const Empresas= require('../models/Empresas');

// agrega un nueva empresa
exports.nuevaEmpresa = async (req, res, next) => {
    try {
        // almacenar el registro
        const empresa = await Empresas.create(req.body)
        res.json({ mensaje : 'Se agrego una nueva empresa' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
}

// Muestra todas las empresas
exports.mostrarEmpresas = async (req, res, next) => {
    try {
        const empresas = await Empresas.findAll({});
        res.json(empresas);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un empresa por su ID
exports.mostrarEmpresa = async (req, res, next) => {
    try {
        const empresa = await Empresas.findByPk(req.params.idEmpresa);

        if(!empresa) {
            res.json({mensaje : 'Esa empresa no existe'});
            return
        }
        // Mostrar el empresa
        res.json(empresa);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualiza un empresa por su ID
exports.actualizarEmpresa = async (req, res, next) => {
    try {
        const { nit,nombre, direccion, telefono} =req.body;
        const empresa = await Empresas.findByPk(req.params.idEmpresa)
        if(!empresa) {
            res.json({mensaje : 'Esa empresa no existe'});
            next()
        }
        empresa.set({nit,nombre, direccion, telefono})
        await empresa.save()

        //const empresa = await Empresas.findOneAndUpdate({ _id : req.params.idEmpresa }, req.body, {
        //    new : true
        //});
        res.json(empresa);
    } catch (error) {
        res.send(error);
        next();
    }
}

// Elimina un empresa por su ID 
exports.eliminarEmpresa = async (req, res, next) => {
    try {
        await Empresas.destroy({
            where: {
                id: req.params.idEmpresa
            }
        });
        
        res.json({mensaje : 'El empresa se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}