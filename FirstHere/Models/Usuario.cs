using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FirstHere.Models
{
    public class Usuario
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long UsuarioID{ get; set; }
        public DateTime Create_time { get; set; }
        public DateTime Update_time { get; set; }        
        public String Login { get; set; }
        public String Senha { get; set; }
        public String Permissao { get; set; }
        public String Ultimo_acesso { get; set; }
        public int Id_cliente { get; set; }
    }
}
