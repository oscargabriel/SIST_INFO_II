const {
	createOneRol,
	getAllRol,
} = require('../services/cliente_service');

class rolController {

	static async getallRol(req, res) {
		try {
			const resp = await getAllRol(null);
			res.status(resp.status).send(resp);
		} catch (error) {
			// console.error("==> ", error);
			res.status(500).json({ message: 'Error in endpoint getallRol' });
		}
	}

	static async createRol(req, res) {
		try {
			let cliente;
			if (req.body.hasOwnProperty('cliente')) {
				// console.log("entro");
        console.log(`body: ${req.body}`)
				cliente = await createOneRol({ ...req.body });
			} else if (req.body.hasOwnProperty('clientes')) {
				// cliente = await createManyCLientes({});
			} else {
			}
			res.status(cliente.status).json(cliente);
		} catch (error) {
			// console.error(error);
			res.status(500).json({ message: 'Error al crear el rol' });
		}
	}

  static async updateRol(req, res) {
    try {
      const { id } = req.params.id;
      const { nombre, apellido, cedula, telefono } = req.body;
      const [updated] = await Cliente.update({ nombre, apellido, cedula, telefono }, { where: { id } });
      if (updated) {
        const cliente = await Cliente.findOne({ where: { id } });
        res.status(200).json({ message: 'Cliente actualizado exitosamente', data: cliente });
      }
      throw new Error('Cliente no encontrado');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el rol' });
    }
  }
    
  static async getRol(req, res) {
	  try {
	    const { id } = req.params.id;
      console.log('id:   '+id)
	    const cliente = await Cliente.findOne({ where: { id } });
	    if (cliente) {
	      res.status(200).json({ message: 'Cliente encontrado', data: cliente });
	    }
	    throw new Error('Cliente no encontrado');
	  } catch (error) {
	    console.error(error);
	    res.status(404).json({ message: 'Cliente no encontrado' });
	  }
	}
}

module.exports = rolController;
