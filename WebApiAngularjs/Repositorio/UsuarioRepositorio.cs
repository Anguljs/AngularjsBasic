using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiAngularjs.Interface;
using WebApiAngularjs.Models;

namespace WebApiAngularjs.Repositorio
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        UsuarioEntidad usuarioEntidad = new UsuarioEntidad();

        public IEnumerable<Usuario> GetAll()
        {
            // TO DO : Code to get the list of all the records in database
            return usuarioEntidad.Usuario;
        }

        public Usuario Get(int id)
        {
            // TO DO : Code to find a record in database
            return usuarioEntidad.Usuario.Find(id);
        }

        public Usuario Add(Usuario item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            // TO DO : Code to save record into database
            usuarioEntidad.Usuario.Add(item);
            usuarioEntidad.SaveChanges();
            return item;
        }

        public bool Update(Usuario item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            // TO DO : Code to update record into database
            var usuarios = usuarioEntidad.Usuario.Single(a => a.IdUsuario == item.IdUsuario);

            usuarios.Nombre = item.Nombre;
            usuarios.Correo = item.Correo;
            usuarios.CodigoPostal = item.CodigoPostal;
            usuarios.Country = item.Country;
            usuarioEntidad.SaveChanges();

            return true;
        }

        public bool Delete(int id)
        {
            // TO DO : Code to remove the records from database
            Usuario usuarios = usuarioEntidad.Usuario.Find(id);
            usuarioEntidad.Usuario.Remove(usuarios);
            usuarioEntidad.SaveChanges();
            return true;
        }
    }
}
