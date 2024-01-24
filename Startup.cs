using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            
        }


        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(
                Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
            RequestPath = ""
        });

        app.Map("/projects", HandleRequest("projects.html"));
        app.Map("/bookmarklets", HandleRequest("bookmarklets.html"));
        app.Map("/settings", HandleRequest("settings.html"));
        app.Map("/support", HandleRequest("support.html"));
        app.Map("/about", HandleRequest("about.html"));
        app.Map("/transfer", HandleRequest("transfer.html"));
        app.Map("/suggest", HandleRequest("suggest.html"));
        app.Map("/contact", HandleRequest("contact.html"));
        app.Map("/ad", HandleRequest("ad.html"));

        app.Run(async (context) =>
        {
            await context.Response.WriteAsync("Not Found");
        });
    }

    private static Action<IApplicationBuilder> HandleRequest(string fileName)
    {
        return app => app.Run(async context =>
        {
            await context.Response.SendFileAsync(Path.Combine(Directory.GetCurrentDirectory(), fileName));
        });
    }
}
