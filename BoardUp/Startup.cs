using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BoardUp.Startup))]
namespace BoardUp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
