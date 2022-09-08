using ASP_hometask1.Interfaces;
using ASP_hometask1.Services;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.

builder.Services.AddSingleton<IActions, InitialProvider>();
builder.Services.AddTransient<IProvider, Provider>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var provider = builder.Services.BuildServiceProvider();
var service = provider.GetRequiredService<IConfiguration>();

builder.Services.AddCors(options =>
{
    var react = service.GetValue<string>("react_app");
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(react).AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
    });
}
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
