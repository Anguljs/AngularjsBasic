using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiAngularjs.Models;

namespace WebApiAngularjs.Interface
{
    interface IUsuarioRepositorio
    {
        IEnumerable<Usuario> GetAll();
        Usuario Get(int id);
        Usuario Add(Usuario item);
        bool Update(Usuario item);
        bool Delete(int id);
    }
}