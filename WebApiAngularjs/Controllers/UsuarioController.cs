using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiAngularjs.Interface;
using WebApiAngularjs.Models;
using WebApiAngularjs.Repositorio;

namespace WebApiAngularjs.Controllers
{
    public class UsuarioController : ApiController
    {


        static readonly IUsuarioRepositorio repositorio = new UsuarioRepositorio();

        /* listar usuarios*/
        public IEnumerable GetAllUser()
        {
            return repositorio.GetAll();
        }

        /* agregar usuario */
        public Usuario PostUsuario(Usuario item)
        {
            return repositorio.Add(item);
        }

        /* editar usuario */
        public IEnumerable PutUsuario(int id, Usuario usuario)
        {
            usuario.IdUsuario = id;
            if (repositorio.Update(usuario))
            {
                return repositorio.GetAll();
            }
            else
            {
                return null;
            }
        }

        /* eliminar usuario */
        public bool DeleteUsuario(int id)
        {
            if (repositorio.Delete(id))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
